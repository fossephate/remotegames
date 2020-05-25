

import { BitBuffer2 } from "./buffer2.js";

export class TS2 {
	/**
	 * Парсер transport stream для mpeg2
	 * @param options опции
	 * @constructor
	 */
	constructor(options) {
		/**
		 * Буффер TS
		 * @type {?BitBuffer}
		 */
		this.bits = null;
		/**
		 * Бит буфер с оставшимися без обработки? байтами
		 * @type {?BitBuffer}
		 */
		this.leftoverBytes = null;
		//признак конца данных видео фрейма
		this.guessVideoFrameEnd = true;
		//мапа PIDS к stream ID
		this.pidsToStreamIds = {};
		/**
         * Мапа stream ID на мету о PES
         * @type {{streamId: string: {
            destination: JSMpeg.Decoder,
            currentLength: number,
            totalLength: number,
            pts: number,
            buffers: Array<BitBuffer>
        }}}
         */
		this.pesPacketInfo = {};
		this.startTime = 0;
		this.currentTime = 0;
	}

	/**
	 * Соединиться с источником данных
	 * @param streamId PES stream ID
	 * @param destination вывод в декодер
	 */
	connect = function(streamId, destination) {
		this.pesPacketInfo[streamId] = {
			destination: destination,
			currentLength: 0,
			totalLength: 0,
			pts: 0,
			buffers: [],
		};
	};

	/**
	 * Запись в TS сырые данные?
	 * @param buffer буфер
	 */
	write = function(buffer) {
		if (this.leftoverBytes) {
			const totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
			this.bits = new BitBuffer2(totalLength);
			this.bits.write([this.leftoverBytes, buffer]);
		} else {
			this.bits = new BitBuffer2(buffer);
		}

		//пока есть 188 байт и пока пакет парсится из TS - парсим
		while (this.bits.has(188 << 3) && this.parsePacket()) {}

		//если осталось что-то и это что-то не целый пакет - сохраним для следующей итерации
		const leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
		this.leftoverBytes =
			leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
	};

	/**
	 * Попытка разобрать пакет TS из буфера
	 * @returns {boolean} статус парсинга пакета TS - успех/ошибка
	 */
	parsePacket = function() {
		/**
		 * Определяем синхронизировано ли чтение проверяя следующий байт
		 * Sync byte 8 0xff000000 Bit pattern of 0x47 (ASCII char 'G')
		 * original: Check if we're in sync with packet boundaries; attempt to resync if not.
		 */
		if (this.bits.read(8) !== 0x47) {
			if (!this.resync()) {
				// Couldn't resync; maybe next time...
				return false;
			}
		}

		//конец пакета
		const end = (this.bits.index >> 3) + 187;
		//заголовки
		const transportError = this.bits.read(1),
			payloadStart = this.bits.read(1),
			transportPriority = this.bits.read(1),
			pid = this.bits.read(13),
			transportScrambling = this.bits.read(2),
			adaptationField = this.bits.read(2),
			continuityCounter = this.bits.read(4);

		// If this is the start of a new payload; signal the end of the previous
		// frame, if we didn't do so already.
		let streamId = this.pidsToStreamIds[pid];
		if (payloadStart && streamId) {
			const packetInfo = this.pesPacketInfo[streamId];
			if (packetInfo && packetInfo.currentLength) {
				this.packetComplete(packetInfo);
			}
		}

		// Extract current payload
		//Если вообще есть полезная нагрузка
		if (adaptationField & 0x1) {
			//если перед PES идет adaptation field пропустим его
			if (adaptationField & 0x2) {
				const adaptationFieldLength = this.bits.read(8) << 3;
				this.bits.skip(adaptationFieldLength);
			}

			if (payloadStart && this.bits.nextBytesAreStartCode()) {
				/**
				 * PES packet header
				 */
				//Packet start code prefix
				this.bits.skip(24);
				//Stream id
				streamId = this.bits.read(8);
				this.pidsToStreamIds[pid] = streamId;
				//PES Packet length
				const packetLength = this.bits.read(16);

				/**
				 * Optional PES header
				 */
				//skip Marker bits/Scrambling control/Priority/Data alignment indicator/Copyright/Original or Copy
				this.bits.skip(8);
				//PTS DTS indicator
				const ptsDtsFlag = this.bits.read(2);
				//skip ESCR flag/ES rate flag/DSM trick mode flag/Additional copy info flag/CRC flag/extension flag
				this.bits.skip(6);
				//PES header length
				const headerLength = this.bits.read(8);
				const payloadBeginIndex = this.bits.index + (headerLength << 3);

				//TODO: это точно нужно?
				const packetInfo = this.pesPacketInfo[streamId];
				if (packetInfo) {
					let pts = 0;
					/**
					 * PTS DTS indicator 11 = both present, 01 is forbidden, 10 = only PTS, 00 = no PTS or DTS
					 */
					//if only PTS
					if (ptsDtsFlag & 0x2) {
						// The Presentation Timestamp is encoded as 33(!) bit
						// integer, but has a "marker bit" inserted at weird places
						// in between, making the whole thing 5 bytes in size.
						// You can't make this shit up...
						this.bits.skip(4);
						const p32_30 = this.bits.read(3);
						this.bits.skip(1);
						const p29_15 = this.bits.read(15);
						this.bits.skip(1);
						const p14_0 = this.bits.read(15);
						this.bits.skip(1);

						// Can't use bit shifts here; we need 33 bits of precision,
						// so we're using JavaScript's double number type. Also
						// divide by the 90khz clock to get the pts in seconds.
						pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 90000;

						this.currentTime = pts;
						if (this.startTime === -1) {
							this.startTime = pts;
						}
					}

					const payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
					this.packetStart(packetInfo, pts, payloadLength);
				}

				// Skip the rest of the header without parsing it
				this.bits.index = payloadBeginIndex;
			}

			if (streamId) {
				// Attempt to detect if the PES packet is complete. For Audio (and
				// other) packets, we received a total packet length with the PES
				// header, so we can check the current length.

				// For Video packets, we have to guess the end by detecting if this
				// TS packet was padded - there's no good reason to pad a TS packet
				// in between, but it might just fit exactly. If this fails, we can
				// only wait for the next PES header for that stream.

				const packetInfo = this.pesPacketInfo[streamId];
				if (packetInfo) {
					const start = this.bits.index >> 3;
					const complete = this.packetAddData(packetInfo, start, end);

					const hasPadding = !payloadStart && adaptationField & 0x2;
					if (complete || (this.guessVideoFrameEnd && hasPadding)) {
						this.packetComplete(packetInfo);
					}
				}
			}
		}

		this.bits.index = end << 3;
		return true;
	};

	/**
	 * Попытка синхронизироваться
	 * @returns {boolean} да/нет
	 */
	resync = function() {
		// Check if we have enough data to attempt a resync. We need 5 full packets.
		if (!this.bits.has((188 * 6) << 3)) {
			return false;
		}

		const byteIndex = this.bits.index >> 3;

		// Look for the first sync token in the first 187 bytes
		for (let byteI = 0; byteI < 187; byteI++) {
			if (this.bits.bytes[byteIndex + byteI] === 0x47) {
				// Look for 4 more sync tokens, each 188 bytes appart
				let foundSync = true;
				for (let tsPacket = 1; tsPacket < 5; tsPacket++) {
					if (this.bits.bytes[byteIndex + byteI + 188 * tsPacket] !== 0x47) {
						foundSync = false;
						break;
					}
				}

				//если синхронизировались - ставим индекс на нужный байт
				if (foundSync) {
					this.bits.index = (byteIndex + byteI + 1) << 3;
					return true;
				}
			}
		}

		// In theory, we shouldn't arrive here. If we do, we had enough data but
		// still didn't find sync - this can only happen if we were fed garbage
		// data. Check your source!
		console.warn("JSMpeg: Possible garbage data. Skipping.");
		this.bits.skip(187 << 3);
		return false;
	};

	/**
	 * Созлдаем мету пакета TS
	 * @param packetInfo мета пакета из {this.pesPacketInfo}
	 * @param pts PTS
	 * @param payloadLength размер полезной нагрузки
	 */
	packetStart = function(packetInfo, pts, payloadLength) {
		packetInfo.totalLength = payloadLength;
		packetInfo.currentLength = 0;
		packetInfo.pts = pts;
	};

	/**
	 * Добавить данные пакета из буфера TS в мету пакета TS
	 * @param packetInfo мета пакета из {this.pesPacketInfo}
	 * @param start начало данных пакета в общем буфере TS
	 * @param end конец данных пакета в общем буфере TS
	 * @returns {boolean}
	 */
	packetAddData = function(packetInfo, start, end) {
		packetInfo.buffers.push(this.bits.bytes.subarray(start, end));
		packetInfo.currentLength += end - start;

		const complete =
			packetInfo.totalLength !== 0 && packetInfo.currentLength >= packetInfo.totalLength;
		return complete;
	};

	/**
	 * Сброить данные пакета в декодер (destination) и обнулить мету
	 * @param packetInfo
	 */
	packetComplete = function(packetInfo) {
		packetInfo.destination.write(packetInfo.pts, packetInfo.buffers);
		packetInfo.totalLength = 0;
		packetInfo.currentLength = 0;
		packetInfo.buffers = [];
	};

	static STREAM = {
		PACK_HEADER: 0xba,
		SYSTEM_HEADER: 0xbb,
		PROGRAM_MAP: 0xbc,
		PRIVATE_1: 0xbd,
		PADDING: 0xbe,
		PRIVATE_2: 0xbf,
		AUDIO_1: 0xc0,
		VIDEO_1: 0xe0,
		DIRECTORY: 0xff,
	};
}

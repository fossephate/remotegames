import { BitBuffer } from "./buffer.js";
import { BaseDecoder } from "./decoder.js";
import { Now } from "./utils.js";

export class MPEG1WASM extends BaseDecoder {
	constructor(options) {
		super(options);

		this.onDecodeCallback = options.onVideoDecode;
		this.module = options.wasmModule;

		this.bufferSize = options.videoBufferSize || 512 * 1024;
		this.bufferMode = options.streaming ? BitBuffer.MODE.EVICT : BitBuffer.MODE.EXPAND;

		this.decodeFirstFrame = options.decodeFirstFrame !== false;
		this.hasSequenceHeader = false;
	}

	// MPEG1WASM.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
	// MPEG1WASM.prototype.constructor = MPEG1WASM;

	initializeWasmDecoder = () => {
		this.instance = this.module.instance;
		this.functions = this.module.instance.exports;
		this.decoder = this.functions.mpeg1_decoder_create(this.bufferSize, this.bufferMode);
	};

	destroy = () => {
		if (!this.decoder) {
			return;
		}
		this.functions.mpeg1_decoder_destroy(this.decoder);
	};

	bufferGetIndex = () => {
		if (!this.decoder) {
			return;
		}
		return this.functions.mpeg1_decoder_get_index(this.decoder);
	};

	bufferSetIndex = (index) => {
		if (!this.decoder) {
			return;
		}
		this.functions.mpeg1_decoder_set_index(this.decoder, index);
	};

	bufferWrite = (buffers) => {
		// 1/28/20
		// https://github.com/SuperAwesomeLTD/jsmpeg/pull/1/commits/e2728ba23086fec6aea62f4f2810c5c755199a40
		if (!this.module.instance) {
			console.warn("JSMpeg: WASM module not compiled yet");
			return;
		}
		if (!this.decoder) {
			this.initializeWasmDecoder();
		}

		let totalLength = 0;
		for (let i = 0; i < buffers.length; i++) {
			totalLength += buffers[i].length;
		}

		let ptr = this.functions.mpeg1_decoder_get_write_ptr(this.decoder, totalLength);
		for (let i = 0; i < buffers.length; i++) {
			this.instance.heapU8.set(buffers[i], ptr);
			ptr += buffers[i].length;
		}

		this.functions.mpeg1_decoder_did_write(this.decoder, totalLength);
		return totalLength;
	};

	write = (pts, buffers) => {
		this.baseWrite(pts, buffers);

		// 1/28/20
		if (
			!this.hasSequenceHeader &&
			this.functions &&
			this.functions.mpeg1_decoder_has_sequence_header(this.decoder)
		) {
			this.loadSequnceHeader();
		}
	};

	loadSequnceHeader = () => {
		this.hasSequenceHeader = true;
		this.frameRate = this.functions.mpeg1_decoder_get_frame_rate(this.decoder);
		this.codedSize = this.functions.mpeg1_decoder_get_coded_size(this.decoder);

		if (this.destination) {
			var w = this.functions.mpeg1_decoder_get_width(this.decoder);
			var h = this.functions.mpeg1_decoder_get_height(this.decoder);
			this.destination.resize(w, h);
		}

		if (this.decodeFirstFrame) {
			this.decode();
		}
	};

	decode = () => {
		let startTime = Now();

		if (!this.decoder) {
			return false;
		}

		let didDecode = this.functions.mpeg1_decoder_decode(this.decoder);
		if (!didDecode) {
			return false;
		}

		// Invoke decode callbacks
		if (this.destination) {
			let ptrY = this.functions.mpeg1_decoder_get_y_ptr(this.decoder),
				ptrCr = this.functions.mpeg1_decoder_get_cr_ptr(this.decoder),
				ptrCb = this.functions.mpeg1_decoder_get_cb_ptr(this.decoder);

			let dy = this.instance.heapU8.subarray(ptrY, ptrY + this.codedSize);
			let dcr = this.instance.heapU8.subarray(ptrCr, ptrCr + (this.codedSize >> 2));
			let dcb = this.instance.heapU8.subarray(ptrCb, ptrCb + (this.codedSize >> 2));

			this.destination.render(dy, dcr, dcb, false);
		}

		this.advanceDecodedTime(1 / this.frameRate);

		let elapsedTime = Now() - startTime;
		if (this.onDecodeCallback) {
			this.onDecodeCallback(this, elapsedTime);
		}
		return true;
	};
}

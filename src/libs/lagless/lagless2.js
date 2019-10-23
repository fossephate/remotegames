import JSMpeg from "libs/jsmpeg.min.js";
import io from "socket.io-client";
window.io = io;

export default class Lagless2 {
	constructor(url, options) {
		this.url = url;
		this.options = options;
		this.canvas = null;
		this.context = null;
		this.player = {};

		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
		this.onVideoDecode = this.onVideoDecode.bind(this);

		this.times = [];
		this.fps = 0;
	}

	pause() {
		try {
			this.player.destroy();
			// if (this.hasAudio) {
			// 	let audioBufferSize = 128 * 1024;
			// 	this.player = new JSMpeg.Player(this.url, {
			// 		video: false,
			// 		audio: true,
			// 		audioBufferSize: audioBufferSize,
			// 		maxAudioLag: 0.5,
			// 	});
			// }
		} catch (error) {}
	}

	stop() {
		try {
			this.player.destroy();
		} catch (error) {}
	}

	// calculate fps:
	// https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
	onVideoDecode() {
		// copy from internal canvas to external canvas:
		// this.context.drawImage(this.player.renderer.canvas, 0, 0, this.player.renderer.canvas.width, this.player.renderer.canvas.height);

		// calulate fps:
		let now = performance.now();
		while (this.times.length > 0 && this.times[0] <= now - 1000) {
			this.times.shift();
		}
		this.times.push(now);
		this.fps = this.times.length;
	}

	resume(canvas) {
		this.canvas = canvas;
		// this.context = this.canvas.getContext("2d");

		// destroy audio instance if it exists:
		try {
			this.player.destroy();
		} catch (error) {}

		let videoBufferSize = 256 * 1024; // 256kb (256 * 1024)
		let audioBufferSize = 128 * 1024; // 128kb (128 * 1024)
		this.player = new JSMpeg.Player(this.url, {
			canvas: this.canvas,
			video: true,
			videoBufferSize: videoBufferSize,
			audioBufferSize: audioBufferSize,
			maxAudioLag: 0.5,
			onVideoDecode: this.onVideoDecode,
			audio: !!this.options.audio,
			path: this.options.path,
		});
		// this.canvas.width = this.player.renderer.canvas.width;
		// this.canvas.height = this.player.renderer.canvas.height;
	}
}

import { JSMpeg } from "libs/jsmpeg/src/jsmpeg.js";
// import JSMpeg from "libs/jsmpeg/jsmpeg.min.js";

export default class Lagless2 {
	constructor(options) {
		this.options = options;
		this.videoCanvas = null;
		this.graphicsCanvas = null;
		this.context = null; // graphics context2d
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

		if (this.fps != this.times.length) {
			this.fps = this.times.length;

			// this.context.font = "25px sans-serif";
			// this.context.lineWidth = 1;
			// this.context.clearRect(0, 0, 1000, 500);

			// this.context.fillStyle = "#FFF";
			// this.context.fillText(`FPS: ${this.fps}`, 5, 50);
			// // this.context.fillStyle = "#000";
			// // this.context.strokeText(`FPS: ${this.fps}`, 5, 50);
		}
	}

	resume(videoCanvas, graphicsCanvas) {
		this.videoCanvas = videoCanvas;
		this.graphicsCanvas = graphicsCanvas || null;

		let onDecode = null;
		if (this.graphicsCanvas) {
			this.context = this.graphicsCanvas.getContext("2d");
			onDecode = this.onVideoDecode;
		}

		// destroy audio instance if it exists:
		try {
			this.player.destroy();
		} catch (error) {}

		let videoBufferSize = 256 * 1024; // 256kb (256 * 1024)
		let audioBufferSize = 128 * 1024; // 128kb (128 * 1024)
		this.player = new JSMpeg.Player(this.options.url, {
			canvas: this.videoCanvas,
			videoBufferSize: videoBufferSize,
			audioBufferSize: audioBufferSize,
			maxAudioLag: 0.25,
			onVideoDecode: onDecode,
			audio: !!this.options.audio,
			video: !!this.options.video,
			path: this.options.path,
		});
		// this.videoCanvas.width = this.player.renderer.canvas.width;
		// this.videoCanvas.height = this.player.renderer.canvas.height;
	}
}

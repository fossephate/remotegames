import JSMpeg from "libs/jsmpeg.min.js";

export default class Lagless2 {

	constructor(url, hasAudio) {
		this.url = url;
		if (typeof(hasAudio) == "undefined") {
			this.hasAudio = true;
		} else {
			this.hasAudio = hasAudio;
		}
		this.canvas = null;
		this.context = null;
		this.player = {};

		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
		this.onVideoDecode = this.onVideoDecode.bind(this);
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

	onVideoDecode() {
		// copy from internal canvas to external canvas:
		// this.context.drawImage(this.player.renderer.canvas, 0, 0, this.player.renderer.canvas.width, this.player.renderer.canvas.height);
	}

	resume(canvas) {
		this.canvas = canvas;
		// this.context = this.canvas.getContext("2d");

		// destroy audio instance if it exists:
		try {
			this.player.destroy();
		} catch (error) {}

		let videoBufferSize = 512 * 1024;// 256kb (256 * 1024)
		let audioBufferSize = 128 * 1024;
		this.player = new JSMpeg.Player(this.url, {
			canvas: this.canvas,
			video: true,
			audio: this.hasAudio,
			videoBufferSize: videoBufferSize,
			audioBufferSize: audioBufferSize,
			maxAudioLag: 0.5,
			// onVideoDecode: this.onVideoDecode,
		});
		// this.canvas.width = this.player.renderer.canvas.width;
		// this.canvas.height = this.player.renderer.canvas.height;
		window.player = this.player;
	}

}

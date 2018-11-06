import JSMpeg from "js/jsmpeg.min.js";

export default class Lagless2 {

	constructor() {
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
			// let audioBufferSize = 128 * 1024;
			// this.player = new JSMpeg.Player("wss://twitchplaysnintendoswitch.com/8002/", {
			// 	video: false,
			// 	audio: true,
			// 	audioBufferSize: audioBufferSize,
			// 	maxAudioLag: 0.5,
			// });
		} catch (error) {}
	}

	onVideoDecode() {
		// copy from internal canvas to external canvas:
		// this.context.drawImage(this.player.renderer.canvas, 0, 0, this.player.renderer.canvas.width, this.player.renderer.canvas.height);
	}

	resume(canvas) {
		this.canvas = canvas;
		// this.context = this.canvas.getContext("2d");
		let videoBufferSize = 256 * 1024;
		let audioBufferSize = 128 * 1024;
		this.player = new JSMpeg.Player("wss://twitchplaysnintendoswitch.com/8002/", {
			canvas: this.canvas,
			video: true,
			audio: true,
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
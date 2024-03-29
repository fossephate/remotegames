import { Player } from "libs/jsmpeg/src/player.js";

export default class Lagless2 {
	constructor(options) {
		this.videoCanvas = null;
		this.graphicsCanvas = null;
		this.context = null; // graphics context2d
		this.player = {};

		this.options = {
			videoBufferSize: 512 * 1024, // 256kb (256 * 1024)
			audioBufferSize: 128 * 1024, // 128kb (128 * 1024)
			maxAudioLag: 0.25,
			...options,
		};

		this.times = [];
		this.fps = 0;
	}

	pause = () => {
		try {
			this.player.pause();
		} catch (error) {}

		// setInterval(() => {
		// 	console.log(window.stream.player.getCurrentTime());
		// }, 10);
	};

	play = () => {
		try {
			this.player.play();
		} catch (error) {}
	};

	destroy = () => {
		try {
			this.player.destroy();
		} catch (error) {}
	};

	// calculate fps:
	// https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
	onVideoDecode = () => {
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
	};

	start = (videoCanvas, graphicsCanvas) => {
		this.videoCanvas = videoCanvas || this.videoCanvas;
		this.graphicsCanvas = graphicsCanvas || this.graphicsCanvas || null;

		let onVideoDecodeRef = null;
		if (this.graphicsCanvas) {
			// if (!this.context) {
			this.context = this.graphicsCanvas.getContext("2d");
			// }
			onVideoDecodeRef = this.onVideoDecode;
		}

		this.player = new Player({
			videoConnection: this.options.videoConnection,
			canvas: this.videoCanvas,
			videoBufferSize: this.options.videoBufferSize,
			audioBufferSize: this.options.audioBufferSize,
			maxAudioLag: this.options.maxAudioLag,
			onVideoDecode: onVideoDecodeRef,
			audio: !!this.options.audio,
			video: !!this.options.video,
			path: this.options.path,
		});
	};

	// restart = (videoCanvas, graphicsCanvas) => {
	// 	if (!this.videoCanvas) {
	// 		this.start(videoCanvas, graphicsCanvas);
	// 		return;
	// 	}
	// 	this.player.video.destination.canvas = videoCanvas;
	// 	this.graphicsCanvas = graphicsCanvas;
	// 	this.context = this.graphicsCanvas.getContext("2d");
	// };

	restart = (videoCanvas, graphicsCanvas) => {
		if (!this.videoCanvas) {
			this.start(videoCanvas, graphicsCanvas);
			return;
		}
		this.player.video.destination.canvas = videoCanvas;
		this.graphicsCanvas = graphicsCanvas;
		this.context = this.graphicsCanvas.getContext("2d");
	};
}

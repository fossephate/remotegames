export default class Lagless1 {

	constructor(socket) {

		this.socket = socket;
		this.canvas = null;
		this.context = null;

		this.image = new Image();
		this.image.style = "max-width:100%; height:auto;";
		this.image.onload = () => {
			if (this.context != null) {
				this.context.drawImage(this.image, 0, 0, 1280, 720);
			}
		};
		this.socket.on("viewImage", (data) => {
			this.render(data);
		});

		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
	}

	pause() {
		this.context = null;
	}

	resume(canvas) {
		if (canvas == null) {
			return;
		}
		this.canvas = canvas;
		this.canvas.width = 1280;
		this.canvas.height = 720;
		this.context = this.canvas.getContext("2d");
	}

	render(data) {
		let src = "data:image/jpeg;base64," + data;
		// if (src == "data:image/jpeg;base64,") {
		// 	socket.emit("restart");
		// 	return;
		// }
		this.image.src = src;
	}

}
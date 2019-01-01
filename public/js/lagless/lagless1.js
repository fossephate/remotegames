// libs:
import io from "socket.io-client";

export default class Lagless1 {

	constructor(url, path) {

		this.url = url;
		this.path = path;

		this.socket = io(this.url, {
			path: this.path,
			transports: ["websocket"],
		});
		this.canvas = null;
		this.context = null;

		this.image = new Image();
		this.image.style = "max-width:100%; height:auto;";
		this.image.onload = () => {
			if (this.context != null) {
				this.context.drawImage(this.image, 0, 0, 1280, 720);
			}
		};
		this.socket.on("image", (data) => {
			this.render(data);
		});

		this.pause = this.pause.bind(this);
		this.stop = this.stop.bind(this);
		this.resume = this.resume.bind(this);
	}

	pause() {
		this.context = null;
		if (this.socket.close) {
			this.socket.close();
		}
	}

	stop() {
		this.pause();
	}

	resume(canvas) {
		if (canvas == null) {
			return;
		}
		this.socket.connect();
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

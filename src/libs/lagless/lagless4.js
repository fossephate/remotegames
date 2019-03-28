import SimplePeer from "simple-peer";

export default class Lagless4 {

	constructor(socket) {

		this.canvas = null;
		this.player = null;
		this.socket = socket;
		this.connected = false;

		let videoPeer = new SimplePeer({
			initiator: false,
			trickle: true,
		});
		videoPeer.on("error", (error) => {
			console.log("error", error)
		});
		videoPeer.on("signal", (data) => {
			console.log("SIGNAL", JSON.stringify(data));
			this.socket.emit("clientPeerSignalV", JSON.stringify(data));
		});
		videoPeer.on("connect", () => {
			console.log("CONNECT");
			videoPeer.send(Math.random());
		});
		videoPeer.on("data", (data) => {
			console.log("data: " + data)
		});
		this.socket.on("hostPeerSignalV", (data) => {
			videoPeer.signal(JSON.parse(data));
		});
		videoPeer.on("stream", (stream) => {
			// if (canvas == null) {
			// 	return;
			// }
			// got remote video stream, then show it in a video tag
			try {
				this.canvas.src = window.URL.createObjectURL(stream); // deprecated
				this.canvas.play();
			} catch(error) {
				this.canvas.srcObject = stream;
				this.canvas.play();
			}

		});

		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
	}

	pause() {
		try {
			this.canvas.pause();
		} catch (error) {}
	}

	resume(canvas) {
		this.canvas = canvas;

		if (!this.connected) {
			this.connected = true;
			this.socket.emit("requestVideo");
		} else {
			try {
				this.canvas.play();
			} catch (error) {}
		}
	}

}

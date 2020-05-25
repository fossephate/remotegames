import SimplePeer from "simple-peer";
import socketio from "socket.io-client";

export default class Lagless4 {
	constructor(options) {
		this.options = options;
		this.canvas = null;
		this.player = null;
		this.connected = false;

		this.videoConnection = null;
	}

	run = () => {
		this.videoConnection = socketio(this.options.url, {
			path: this.options.path,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.peer = new SimplePeer({
			initiator: false,
			trickle: true,
		});
		this.peer.on("error", (error) => {
			console.log("error", error);
		});
		this.peer.on("signal", (data) => {
			console.log("SIGNAL", JSON.stringify(data));
			this.videoConnection.emit("clientPeerSignal", JSON.stringify(data));
		});
		this.peer.on("connect", () => {
			console.log("CONNECT");
			this.peer.send(Math.random());
		});
		this.peer.on("data", (data) => {
			console.log("data: " + data);
		});
		this.videoConnection.on("hostPeerSignal", (data) => {
			this.peer.signal(JSON.parse(data));
		});
		this.peer.on("stream", (stream) => {
			// if (canvas == null) {
			// 	return;
			// }
			// got remote video stream, then show it in a video tag
			try {
				this.canvas.src = window.URL.createObjectURL(stream); // deprecated
				this.canvas.play();
			} catch (error) {
				this.canvas.srcObject = stream;
				this.canvas.play();
			}
		});
	};

	destroy = () => {
		try {
			this.canvas.pause();
		} catch (error) {}
	};

	pause = () => {
		try {
			this.canvas.pause();
		} catch (error) {}
	};

	resume = (canvas) => {
		this.canvas = canvas;

		if (!this.connected) {
			this.connected = true;
			this.videoConnection.emit("requestVideo");
		} else {
			try {
				this.canvas.play();
			} catch (error) {}
		}
	};
}

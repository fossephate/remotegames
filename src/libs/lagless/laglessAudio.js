import SimplePeer from "simple-peer";

export default class LaglessAudio {
	constructor(socket) {
		this.audio = document.createElement("audio");
		this.socket = socket;
		this.connected = false;

		/* AUDIO 3.0 */
		let peer = new SimplePeer({
			initiator: false,
			trickle: true,
		});

		peer.on("error", (err) => {
			console.log("error", err);
		});

		peer.on("signal", (data) => {
			console.log("SIGNAL", JSON.stringify(data));
			this.socket.emit("clientPeerSignal", JSON.stringify(data));
		});

		peer.on("connect", () => {
			console.log("CONNECT");
			peer.send(Math.random());
		});

		peer.on("data", (data) => {
			console.log("data: " + data);
		});

		this.socket.on("hostPeerSignal", (data) => {
			peer.signal(JSON.parse(data));
		});

		peer.on("stream", (stream) => {
			// got remote audio stream, then show it in an audio tag
			try {
				this.audio.src = window.URL.createObjectURL(stream); // deprecated
				this.audio.play();
			} catch (error) {
				this.audio.srcObject = stream;
				this.audio.play();
			}
			this.audio.volume = 0;
		});

		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
	}

	pause() {
		try {
			// this.audio.pause();
		} catch (error) {}
	}

	resume() {
		if (!this.connected) {
			this.connected = true;
			this.socket.emit("requestAudio");
		} else {
			try {
				this.audio.play();
			} catch (error) {}
		}
	}
}

// require("js/WSAvcPlayer.js");

export default class Lagless3 {

	constructor() {
		this.canvas = null;
		this.player = null;

		this.pause = this.pause.bind(this);
		this.resume = this.resume.bind(this);
	}

	pause() {
		try {
			this.player.disconnect();
		} catch (error) {}
	}

	resume(canvas) {
		this.canvas = canvas;

		// Create h264 player
		this.player = new WSAvcPlayer(this.canvas, "webgl", 1, 35);
		this.player.on("disconnected", () => console.log("WS Disconnected"));
		this.player.on("connected", () => console.log("WS connected"));
		this.player.on("frame_shift", (fbl) => {
			// fb.innerText = "fl: " + fbl
		});
		this.player.on("initalized", (payload) => {
			console.log("initialized", payload);
		});
		this.player.on("stream_active", active => console.log("Stream is ", active ? "active" : "offline"));
		this.player.on("custom_event_from_server", event => console.log("got event from server", event));

		window.wsavc = this.player;

		// connect:
		this.player.connect("wss://twitchplaysnintendoswitch.com/8003/");
	}

}
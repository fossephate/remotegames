const socketio = require("socket.io");

class VideoServer {
	constructor(options /*accountConnection, port, streamKey*/) {
		this.accountConnection = options.socket;
		this.port = options.port;
		this.streamKey = options.streamKey;
		this.io = new socketio({
			perMessageDeflate: false,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.keepAliveTimer = null;

		this.init = this.init.bind(this);
		this.stop = this.stop.bind(this);
		this.afk = this.afk.bind(this);
	}

	init() {
		this.io.listen(this.port, () => {
			console.log("Video server listening at port %d", port);
		});

		this.io.on("connection", (socket) => {
			console.log("connected.");

			socket.on("authenticate", (data) => {
				// console.log(data);
				// console.log(this.streamKey);
				// join the host room if they have the streamKey
				if (data.streamKey === this.streamKey) {
					console.log("host authenticated.");
					socket.join("host");
				}
			});

			socket.on("videoData", (data) => {
				clearTimeout(this.keepAliveTimer);
				this.keepAliveTimer = setTimeout(this.afk, 1000 * 60);

				if (socket.rooms.hasOwnProperty("host")) {
					socket.compress(false).broadcast.emit("videoData", data);
				}
			});

			/* SIMPLEPEER */

			// socket.on("requestAudio", (data) => {
			// 	this.io.to("host").emit("createNewPeer", { id: socket.id });
			// });
			// socket.on("hostPeerSignalReply", (data) => {
			// 	this.io.to(data.id).emit("hostPeerSignal", data.data);
			// });
			// socket.on("hostPeerSignal", (data) => {
			// 	this.io.emit("hostPeerSignal", data);
			// });
			// socket.on("clientPeerSignal", (data) => {
			// 	this.io.emit("clientPeerSignal", { id: socket.id, data: data });
			// });

			socket.on("requestVideo", (data) => {
				this.io.to("host").emit("createNewPeer", { id: socket.id });
			});
			socket.on("hostPeerSignalReply", (data) => {
				this.io.to(data.id).emit("hostPeerSignal", data.data);
			});
			socket.on("hostPeerSignal", (data) => {
				this.io.emit("hostPeerSignal", data);
			});
			socket.on("clientPeerSignal", (data) => {
				this.io.emit("clientPeerSignal", { id: socket.id, data: data });
			});
		});
	}

	stop() {
		console.log("closing connection");
		this.io.close();
	}

	afk() {
		this.accountConnection.emit("streamInactive", {
			port: this.port,
			streamKey: this.streamKey,
		});
	}
}

module.exports.VideoServer = VideoServer;

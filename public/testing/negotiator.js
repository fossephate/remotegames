const socketio = require("socket.io");

// class VideoServer {
// 	constructor(options /*accountConnection, port, streamKey*/) {
// 		this.accountConnection = options.socket;
// 		this.port = options.port;
// 		this.streamKey = options.streamKey;
// 		this.io = new socketio({
// 			perMessageDeflate: false,
// 			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
// 		});
// 		this.startTime = new Date();

// 		this.keepAliveTimer = null;
// 	}

// 	init = () => {

let io = new socketio({
	perMessageDeflate: false,
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});
io.listen(8200, () => {
	console.log("Video server listening at port %d", port);
});

io.on("connection", (socket) => {
	console.log("connected.");

	socket.on("disconnect", () => {
		console.log("disconnected");
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

	socket.on("hostAuthenticate", (data) => {

		socket.join("host");
		// join the host room if they have the streamKey
		// if (data.streamKey === this.streamKey) {
		// 	console.log(`host authenticated: ${formatDate(new Date())}`);
		// 	clearTimeout(this.keepAliveTimer);
		// 	this.keepAliveTimer = setTimeout(this.afk, AFK_TIMEOUT);
		// 	socket.join("host");
		// } else {
		// 	console.log("ERROR: wrong streamKey!");
		// 	console.log(data.streamKey, this.streamKey);
		// }
	});

	socket.on("requestVideo", (data) => {
		io.to("host").emit("createNewPeer", { id: socket.id });
	});
	socket.on("hostPeerSignalReply", (data) => {
		io.to(data.id).emit("hostPeerSignal", data.data);
	});
	socket.on("hostPeerSignal", (data) => {
		io.emit("hostPeerSignal", data);
	});
	socket.on("clientPeerSignal", (data) => {
		io.emit("clientPeerSignal", { id: socket.id, data: data });
	});
});

// 	stop = () => {
// 		clearTimeout(this.keepAliveTimer);
// 		console.log(`stream stopped on port: ${this.port}`);
// 		let uptime = (new Date() - this.startTime) / 1000 / 60 / 60;
// 		console.log(`CT: ${formatDate(new Date())} Uptime: ${uptime.toFixed(2)} hours`);
// 		this.io.close();
// 	};

// 	afk = () => {
// 		clearTimeout(this.keepAliveTimer);
// 		console.log("DC'd stream!");
// 		this.accountConnection.emit("streamInactive", {
// 			port: this.port,
// 			streamKey: this.streamKey,
// 		});
// 	};
// }

// module.exports.VideoServer = VideoServer;

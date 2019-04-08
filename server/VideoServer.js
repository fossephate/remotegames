const socketio = require("socket.io");
const socketioClient = require("socket.io-client");

const config = require("./config.js");

class VideoServer {
	constructor(port, streamKey) {
		this.port = port;
		this.streamKey = streamKey;
		this.io = new socketio({
			perMessageDeflate: false,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.init = this.init.bind(this);
		this.stop = this.stop.bind(this);
	}

	init() {
		this.io.listen(this.port, () => {
			console.log("Video server listening at port %d", port);
		});

		this.io.on("connection", (socket) => {
			console.log("connected.");

			socket.on("authenticate", (data) => {
				// console.log(data);
				// console.log(streamKey);
				// join the host room if they have the streamKey
				if (data.streamKey === this.streamKey) {
					console.log("host authenticated.");
					socket.join("host");
				}
			});

			socket.on("videoData", (data) => {
				if (socket.rooms.hasOwnProperty("host")) {
					socket.broadcast.emit("videoData", data);
				}
			});
		});
	}

	stop() {
		this.io.emit("stop");
	}
}

// relayServer(8001, "a");
// relayServer(8002, "b");
// relayServer(8006);
// relayServer(8008);

// some global variables:
// all video relay servers:
// keyed by port:
let videoServers = {};
// this server's IP address:
let ip = "34.203.73.220";
// available ports on this server, true means it's available
let ports = {
	// 8001: true,
	// 8002: true,
	// 8003: true,
	// 8004: true,
	8005: true,
	8006: true,
	8007: true,
	8009: true,
};

// start connection with the account server (same server in this case):
let accountServerConn = socketioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

accountServerConn.emit("registerVideoServer", {
	secret: config.ROOM_SECRET,
	ip: ip,
	ports: ports,
});

accountServerConn.on("startVideo", (data) => {
	// make sure the port is available:

	if (!ports[data.port]) {
		console.log("something went wrong, this port is not available!");
		return;
	}

	// set port as unavailable:
	ports[data.port] = false;

	videoServers[data.port] = new VideoServer(data.port, data.streamKey);
	videoServers[data.port].init();
});

accountServerConn.on("stopVideo", (data) => {
	if (ports[data.port]) {
		console.log("something went wrong, this port wasn't set as unavailable!");
		return;
	}
	videoServers[data.port].stop();
});

// for testing:
let port = 8005;
// set port as unavailable:
ports[port] = false;
videoServers[port] = new VideoServer(port, "a");
videoServers[port].init();

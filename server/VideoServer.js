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
				// console.log(this.streamKey);
				// join the host room if they have the streamKey
				if (data.streamKey === this.streamKey) {
					console.log("host authenticated.");
					socket.join("host");
				}
			});

			socket.on("videoData", (data) => {
				if (socket.rooms.hasOwnProperty("host")) {
					// socket.broadcast.emit("videoData", data);
					socket.compress(false).broadcast.emit("videoData", data);
				}
			});
		});
	}

	stop() {
		console.log("closing connection");
		this.io.emit("stop");
		this.io.close();
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
// let ip = "34.203.73.220";
let ip = "remotegames.io";
// available ports on this server, true means it's available
let ports = {
	8000: true,
	8001: true,
	8002: true,
	8003: true,
	8004: true,
	8005: true,
	8006: true,
	8007: true,
	8008: true,
	8009: true,
	8010: true,
	8011: true,
	8012: true,
};

// start connection with the account server (same server in this case):
let accountServerConnection = socketioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

function register() {
	accountServerConnection.emit("registerVideoServer", {
		secret: config.ROOM_SECRET,
		ip: ip,
		ports: ports,
	});
}
setInterval(register, 1000 * 60);

accountServerConnection.on("startVideo", (data) => {
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

accountServerConnection.on("stopVideo", (data) => {
	if (ports[data.port]) {
		console.log("something went wrong, this port wasn't set as unavailable!");
		return;
	}
	videoServers[data.port].stop();
	// set port as available:
	ports[data.port] = true;
});

// for testing:
let port = 8000;
// set port as unavailable:
ports[port] = false;
videoServers[port] = new VideoServer(port, "a");
videoServers[port].init();

register();

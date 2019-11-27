const VideoServer = require("./VideoServer.js").VideoServer;
const socketioClient = require("socket.io-client");
const config = require("./config.js");

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
let accountConnection = socketioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

function register() {
	accountConnection.emit("registerVideoServer", {
		secret: config.ROOM_SECRET,
		ip: ip,
		ports: ports,
	});
}
setInterval(register, 1000 * 60);

accountConnection.on("startVideo", (data) => {
	// make sure the port is available:

	if (!ports[data.port]) {
		console.log("something went wrong, this port is not available!");
		return;
	}

	// set port as unavailable:
	ports[data.port] = false;

	videoServers[data.port] = new VideoServer({
		socket: accountConnection,
		port: data.port,
		streamKey: data.streamKey,
	});
	videoServers[data.port].init();
});

accountConnection.on("stopVideo", (data) => {
	if (ports[data.port]) {
		console.log("something went wrong, this port wasn't set as unavailable!");
		// return;
	}
	videoServers[data.port].stop();
	// set port as available:
	ports[data.port] = true;
});

// for testing:
let port;
port = 8000;
ports[port] = false;
videoServers[port] = new VideoServer({
	socket: accountConnection,
	port: port,
	streamKey: "a",
});
videoServers[port].init();

// fosse2:
port = 8001;
ports[port] = false;
videoServers[port] = new VideoServer({
	socket: accountConnection,
	port: port,
	streamKey: "b",
});
videoServers[port].init();

register();

const MachineServer = require("./MachineServer.js").MachineServer;
const socketioClient = require("socket.io-client");
const config = require("./config.js");

// some global variables:
// all host servers:
// keyed by port:
let hostServers = {};
// this server's IP address:
// let ip = "34.203.73.220";
let ip = "remotegames.io";
// available ports on this server, true means it's available
let ports = {
	8050: true,
	8051: true,
	8052: true,
	8053: true,
	8054: true,
	8055: true,
	8056: true,
	8057: true,
	8058: true,
	8059: true,
	8060: true,
	8061: true,
	8062: true,
	8063: true,
	8064: true,
};

// start connection with the account server (same server in this case):
let accountConnection = socketioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

function register() {
	accountConnection.emit("registerHostServer", {
		secret: config.ROOM_SECRET,
		ip: ip,
		ports: ports,
	});
}
setInterval(register, 1000 * 60);

accountConnection.on("startHost", (data) => {
	if (!ports[data.port]) {
		console.log("something went wrong, this port is not available!");
		return;
	}

	// set port as unavailable:
	ports[data.port] = false;
	register();

	// start:
	hostServers[data.port] = new HostServer({
		socket: accountConnection,
		port: data.port,
		videoIP: data.videoIP,
		videoPort: data.videoPort,
		streamKey: data.streamKey,
		hostUserid: data.hostUserid,
		secret: config.ROOM_SECRET,
		settings: data.settings,
	});
	hostServers[data.port].init();
});

accountConnection.on("stopHost", (data) => {
	if (ports[data.port]) {
		console.log("something went wrong, this port wasn't set as unavailable!");
		return;
	}
	hostServers[data.port].stop();
	// set port as available:
	ports[data.port] = true;
	register();
});

register();

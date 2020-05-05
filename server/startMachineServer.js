const MachineServer = require("./MachineServer.js").MachineServer;
const socketioClient = require("socket.io-client");
const config = require("./config.js");
const MAX_MACHINES = 10;
const nodeCleanup = require("node-cleanup");

// some global variables:
// all host servers:
// keyed by port:
let machineServers = {};
// this server's IP address:
// let ip = "34.203.73.220";
let ip = "no-public-ip";
// available ports on this server, true means it's available
let ports = {};

for (let i = 0; i < MAX_MACHINES; i++) {
	ports[i] = true;
}

// start connection with the account server (same server in this case):
let accountConnection = socketioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

function register() {
	accountConnection.emit("registerMachineServer", {
		secret: config.ROOM_SECRET,
		ip: ip,
		ports: ports,
	});
}
setInterval(register, 1000 * 60);

accountConnection.on("start", (data) => {
	if (!ports[data.port]) {
		console.log("something went wrong, this port is not available!");
		return;
	}

	// set port as unavailable:
	ports[data.port] = false;
	register();

	// start:
	machineServers[data.port] = new MachineServer({
		socket: accountConnection,
		port: data.port,
		// videoIP: data.videoIP,
		// videoPort: data.videoPort,
		// streamKey: data.streamKey,
		// hostUserid: data.hostUserid,
		streamKey: data.streamKey,
		secret: config.ROOM_SECRET,
		settings: data.settings,
		streamSettings: data.streamSettings,
	});
	machineServers[data.port].init();
});

accountConnection.on("stop", (data) => {
	if (ports[data.port]) {
		console.log("something went wrong, this port wasn't set as unavailable!");
		return;
	}
	machineServers[data.port].stop();
	// set port as available:
	ports[data.port] = true;
	register();
});

register();

nodeCleanup((exitCode, signal) => {
	console.log ("\nexiting!\n");
	for (let key in machineServers) {
		if (machineServers[key]) {
			machineServers[key].stop();
		}
	}
});

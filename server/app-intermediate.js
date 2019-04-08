const socketio = require("socket.io");
const socketioClient = require("socket.io-client");

// import Host from "./host.js";
const HostServer = require("./HostServer.js").HostServer;
// import Client from "./client.js";

// start connection with the account server (same server in this case):
let accountServerConn = socketioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

// some global variables:
// all host servers:
// keyed by port:
let hostServers = {};
// this server's IP address:
let ip = "34.203.73.220";
// available ports on this server, true means it's available
let ports = {
	8100: true,
	8110: true,
	8002: true,
	8003: true,
	8004: true,
};

accountServerConn.on("startHost", (data) => {
	if (!ports[data.port]) {
		console.log("something went wrong, this port is not available!");
		return;
	}

	// set port as unavailable:
	ports[data.port] = false;

	hostServers[data.port] = new HostServer(data.port, accountServerConn);
	hostServers[data.port].init(data.videoIP, data.videoPort);
});

accountServerConn.on("stopHost", (data) => {
	if (ports[data.port]) {
		console.log("something went wrong, this port wasn't set as unavailable!");
		return;
	}
	hostServers[data.port].stop();
});

// for testing:
let port = 8100;
ports[port] = true;
hostServers[port] = new HostServer(port, accountServerConn);
hostServers[port].init(ip, 8005);

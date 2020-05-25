const VideoServer = require("./VideoServer.js").VideoServer;
const HostServer = require("./HostServer.js").HostServer;
const MachineServer = require("./MachineServer.js").MachineServer;
const socketioClient = require("socket.io-client");
const config = require("./config.js");

class ServerWrapper {
	constructor(options) {
		this.servers = {};
		// this server's IP address:
		// let ip = "34.203.73.220";
		this.ip = options.ip;
		if (options.serverType === "machine") {
			this.ip = "no-public-ip";
		}

		// available ports on this server, true means it's available
		this.ports = {};
		this.serverType = options.serverType;

		for (let i = options.portRange[0]; i < options.portRange[1]; i++) {
			this.ports[i] = true;
		}

		this.registerInterval = null;
		this.options = options;

		this.servers = {};
	}

	registerWithAccountServer = () => {
		this.accountConnection.emit("registerServer", {
			serverType: this.serverType,
			secret: config.ROOM_SECRET,
			ip: this.ip,
			ports: this.ports,
		});
	};

	start = () => {
		// start connection with the account server (same server in this case):
		this.accountConnection = socketioClient(this.options.accountServerIP, {
			path: `/${this.options.accountServerPort}/socket.io`,
			transports: ["websocket"],
		});

		this.registerWithAccountServer();
		this.registerInterval = setInterval(this.registerWithAccountServer, 1000 * 60);

		this.accountConnection.on("start", (data) => {
			if (!ports[data.port]) {
				console.log("something went wrong, this port is not available!");
				return;
			}

			// set port as unavailable:
			this.ports[data.port] = false;
			this.registerWithAccountServer();

			// start:
			let opts = {
				socket: this.accountConnection,
				secret: config.ROOM_SECRET,
				...data,
			};

			switch (data.serverType) {
				case "video":
					this.servers[data.port] = new VideoServer(opts);
					break;
				case "host":
					this.servers[data.port] = new HostServer(opts);
					break;
				case "machine":
					this.servers[data.port] = new MachineServer(opts);
					break;
			}
			this.servers[data.port].start();
		});

		this.accountConnection.on("stop", (data) => {
			if (ports[data.port]) {
				console.log("something went wrong, this port wasn't set as unavailable!");
				return;
			}
			this.servers[data.port].stop();
			// set port as available:
			this.ports[data.port] = true;
			this.registerWithAccountServer();
		});
	};

	stop = () => {
		clearInterval(this.registerInterval);
	};
}

// assume type is set:

let serverType = process.argv[2];
let reg = /(\d+)\-(\d+)/.exec(process.argv[3]);
let portRange = [parseInt(reg[1]), parseInt(reg[2])];

let accountServerOpts = {
	accountServerIP: "https://remotegames.io",
	accountServerPort: 8099,
};

// let hostServerWrapper = new ServerWrapper({
// 	ip: "https://remotegames.io",
// 	serverType: "host",
// 	portRange: [8050, 8064],
// 	...accountServerOpts,
// });

// hostServerWrapper.start();

// let videoServerWrapper = new ServerWrapper({
// 	ip: "https://remotegames.io",
// 	serverType: "video",
// 	portRange: [8000, 8012],
// 	...accountServerOpts,
// });

// videoServerWrapper.start();

let serverWrapper = new ServerWrapper({
	ip: "https://remotegames.io",
	serverType: serverType,
	portRange: portRange,
	...accountServerOpts,
});
serverWrapper.start();

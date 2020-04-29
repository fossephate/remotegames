const socketio = require("socket.io");

const AFK_TIMEOUT = 1000 * 60 * 5; // 5 min

function formatDate(dt) {
	return `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
		.getDate()
		.toString()
		.padStart(2, "0")}/${dt
		.getFullYear()
		.toString()
		.padStart(4, "0")} ${dt
		.getHours()
		.toString()
		.padStart(2, "0")}:${dt
		.getMinutes()
		.toString()
		.padStart(2, "0")}:${dt
		.getSeconds()
		.toString()
		.padStart(2, "0")}`;
}

class MachineServer {
	constructor(options) {
		this.accountConnection = options.socket;
		this.port = options.port;
		this.streamKey = options.streamKey;
		this.io = new socketio({
			perMessageDeflate: false,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});
		this.startTime = new Date();

		this.keepAliveTimer = null;
	}

	init = () => {
		this.io.listen(this.port, () => {
			console.log("Machine server listening at port %d", port);
		});

		this.io.on("connection", (socket) => {
			console.log("connected.");
		});
	};

	stop = () => {
		clearTimeout(this.keepAliveTimer);
		console.log(`stream stopped on port: ${this.port}`);
		let uptime = (new Date() - this.startTime) / 1000 / 60 / 60;
		console.log(`CT: ${formatDate(new Date())} Uptime: ${uptime} hours`);
		this.io.close();
	};
}

module.exports.MachineServer = MachineServer;

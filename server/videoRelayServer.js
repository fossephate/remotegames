const io = require("socket.io");
const ioClient = require("socket.io-client");

const config = require("./config.js");

function relayServer(port, streamKey) {

	let streamKey2 = streamKey;

	const server = io({
		perMessageDeflate: false,
		transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
	});

	server.listen(port, () => {
		console.log("Video server listening at port %d", port);
	});
	server.on("connection", (socket) => {
		console.log("connected.");

		socket.on("authenticate", (data) => {
			// console.log(data);
			// console.log(streamKey);
			// join the host room if they have the streamKey
			if (data.streamKey === streamKey2) {
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
relayServer(8001, "a");
relayServer(8002, "b");
// relayServer(8006);
// relayServer(8008);

// start connection with the account server (same server in this case):
let accountServerConn = ioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

let availablePorts = [8003, 8004, 8005, 8006, 8007, 8009];
// this server's IP address:
let ip = "34.203.73.220";

accountServerConn.emit("registerVideoServer", { secret: config.ROOM_SECRET, ip: ip, availablePorts: availablePorts });

accountServerConn.on("startRelay", (data) => {
	let index = availablePorts.indexOf(data.port);
	if (index > -1) {
		availablePorts.slice(index, 1);
	} else {
		console.log("something went wrong, this port is not available!")
	}
	relayServer(data.port, data.streamKey);
});

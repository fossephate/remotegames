const io = require("socket.io");
const ioClient = require("socket.io-client");

const config = require("./config.js");

function runStream(port1) {
	const port2 = port1 - 1;

	const server1 = io({
		perMessageDeflate: false,
		transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
	});
	const server2 = io({
		perMessageDeflate: false,
		transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
	});

	server1.listen(port2, () => {
		console.log("Server listening at port %d", port2);
	});
	server1.on("connection", (socket) => {
		console.log("host connected.");
		socket.on("videoData", (data) => {
			server2.emit("videoData", data);
		});
	});

	// relay server:
	server2.listen(port1, () => {
		console.log("Server listening at port %d", port1);
	});
	server2.on("connection", (socket) => {
		console.log("client connected.");
	});
}
runStream(8002);
runStream(8004);
// runStream(8006);
// runStream(8008);

// start connection with the account server (same server in this case):
let accountServerConn = ioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

accountServerConn.emit("registerVideoServer", { secret: config.ROOM_SECRET });

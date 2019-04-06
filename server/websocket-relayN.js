function runStream(port1) {
	const port2 = port1 - 1;

	const io = require("socket.io")({
		perMessageDeflate: false,
		transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
	});
	const io2 = require("socket.io")({
		perMessageDeflate: false,
		transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
	});
	// const ws = require("ws");

	io.listen(port2, () => {
		console.log("Server listening at port %d", port2);
	});
	io.on("connection", (socket) => {
		console.log("host connected.");
		socket.on("videoData", (data) => {
			io2.emit("videoData", data);
		});
	});

	// relay server:
	io2.listen(port1, () => {
		console.log("Server listening at port %d", port1);
	});
	io2.on("connection", (socket) => {
		console.log("client connected.");
	});
}
runStream(8002);
runStream(8004);
// runStream(8006);
// runStream(8008);

const server = require("http").createServer();
const io = require("socket.io")(server);
const port = 8001;
const ws = require("ws");

server.listen(port, () => {
	console.log("Server listening at port %d", port);
});

io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

// Websocket Server
let socketServer = new ws.Server({
	port: 8002,
	perMessageDeflate: false
});
socketServer.connectionCount = 0;
socketServer.on("connection", (socket, upgradeReq) => {
	socketServer.connectionCount++;
	console.log(
		"New WebSocket Connection: ",
		(upgradeReq || socket.upgradeReq).socket.remoteAddress,
		(upgradeReq || socket.upgradeReq).headers["user-agent"],
		"(" + socketServer.connectionCount + " total)"
	);
	socket.on("close", (code, message) => {
		socketServer.connectionCount--;
		console.log("Disconnected WebSocket (" + socketServer.connectionCount + " total)");
	});
});
socketServer.broadcast = (data) => {
	socketServer.clients.forEach((client) => {
		if (client.readyState === ws.OPEN) {
			client.send(data);
		}
	});
};

io.on("connection", (socket) => {
	console.log("host connected.");
	socket.on("videoData", (data) => {
		socketServer.broadcast((data));
	});
});

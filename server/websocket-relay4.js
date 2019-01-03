const server = require("http").createServer();
const io = require("socket.io")(server);
const port = 8140;
const ws = require("ws");

server.listen(port, function () {
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
	port: 8004,
	perMessageDeflate: false
});
socketServer.connectionCount = 0;
socketServer.on("connection", function (socket, upgradeReq) {
	socketServer.connectionCount++;
	console.log(
		"New WebSocket Connection: ",
		(upgradeReq || socket.upgradeReq).socket.remoteAddress,
		(upgradeReq || socket.upgradeReq).headers["user-agent"],
		"(" + socketServer.connectionCount + " total)"
	);
	socket.on("close", function (code, message) {
		socketServer.connectionCount--;
		console.log("Disconnected WebSocket (" + socketServer.connectionCount + " total)");
	});
});
socketServer.broadcast = function (data) {
	socketServer.clients.forEach(function each(client) {
		if (client.readyState === ws.OPEN) {
			client.send(data);
		}
	});
};

io.on("connection", function (socket) {
	socket.on("videoData", function (data) {
		socketServer.broadcast((data));
	});
});

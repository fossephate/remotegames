const server = require("http").createServer();
const io = require("socket.io")(server);
const port = 8130;
const ws = require("ws");
const NALseparator = new Buffer([0, 0, 0, 1]); // NAL break

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
	port: 8003,
	perMessageDeflate: false
});
socketServer.connectionCount = 0;
// socketServer.on("connection", function(socket, upgradeReq) {
// 	socketServer.connectionCount++;
// 	console.log(
// 		"New WebSocket Connection: ",
// 		(upgradeReq || socket.upgradeReq).socket.remoteAddress,
// 		(upgradeReq || socket.upgradeReq).headers["user-agent"],
// 		"(" + socketServer.connectionCount + " total)"
// 	);
// 	socket.on("close", function(code, message) {
// 		socketServer.connectionCount--;
// 		console.log("Disconnected WebSocket (" + socketServer.connectionCount + " total)");
// 	});
// });
socketServer.on("connection", function (socket) {

	var self = this;
	console.log("New guy");

	socket.send(JSON.stringify({
		action: "init",
		width: this.options.width,
		height: this.options.height,
	}));

	//self.start_feed();

	//var readStream = this.readStream.pipe(new Splitter(NALseparator));
	//readStream.on("data", this.broadcast);
	// socket.on("message", function(data){
	//   var cmd = "" + data, action = data.split(" ")[0];
	//   console.log("Incomming action '%s'", action);
	//   if(action == "REQUESTSTREAM")
	//     self.start_feed();
	//   if(action == "STOPSTREAM")
	//     self.readStream.pause();
	// });

	socket.on("close", function () {
		//self.readStream.end();
		console.log("stopping client interval");
	});
});
socketServer.on("open", function open() {
	console.log("connected");
	socketServer.send(Date.now());
});
socketServer.broadcast = function (data) {
	socketServer.clients.forEach(function (socket) {
		// 		if (socket.buzy) {
		// 			return;
		// 		}
		// 		socket.buzy = false;
		socket.send(Buffer.concat([NALseparator, data]), {
			binary: true
		}, function ack(error) {
			socket.buzy = false;
		});
	});
}


io.on("connection", function (socket) {
	socket.on("videoData3", function (data) {
		socketServer.broadcast(data);
	});
});
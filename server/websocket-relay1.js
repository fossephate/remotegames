
const app = require("express")();
const app2 = require("express")();
const server = require("http").createServer(app);
const server2 = require("http").createServer(app2);
const io = require("socket.io-client");
const io1 = require("socket.io")(server);
const io2 = require("socket.io")(server2);
const port = 8110;
const port2 = 8001;

const config = require("./config.js");

server.listen(port, function () {
	console.log("Server listening at port %d", port);
});

server2.listen(port2, function () {
	console.log("Server listening at port %d", port2);
});

let socket3 = io("localhost", {
	path: "/8100/socket.io",
	transports: ["websocket"],
	reconnect: true,
});
socket3.emit("joinSecure", { room: "lagless1Host", password: config.ROOM_SECRET });
setInterval(() => {
	socket3.emit("joinSecure", { room: "lagless1Host", password: config.ROOM_SECRET });
}, 5000);

socket3.on("settings", (data) => {
	console.log(data);
	io1.emit("settings", data);
});
socket3.on("start", (data) => {
	io1.emit("start", data);
});
socket3.on("stop", (data) => {
	io1.emit("stop", data);
});

io1.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io2.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io1.on("connection", (socket) => {
	socket.on("videoData", (data) => {
		io2.emit("image", data);
	});
});

io2.on("connection", (socket) => {
	// socket.on("leave", (room) => {
	// 	socket.leave(room);
	// });
	// socket.on("join", (room) => {
	// 	socket.join(room);
	// });
});

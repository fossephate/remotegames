const io = require("socket.io");
const ioClient = require("socket.io-client");
const port = 8100;
io.listen(port);

import Host from "./host.js";
// import Client from "./client.js";


// start connection with account server (same server in this case):
let socketConn = ioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["websocket"],
});

let liveStreams = [];

//console.log(util.inspect(clientDB, false, null));

io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling",
]);


io.on("connection", (socket) => {

	clients[socket.id] = new Client(socket);
	console.log("#clients: " + Object.keys(clients).length);

	socket.on("getStreams", (data) => {

	});

});

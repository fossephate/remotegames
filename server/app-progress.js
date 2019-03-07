const io = require("socket.io");
const ioClient = require("socket.io-client");
const port = 8100;
io.listen(port);


// start connection with account server (same server in this case):
let socketConn = ioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["websocket"],
});

let liveStreams = [];


//console.log(util.inspect(clientDB, false, null));

function Client(socket) {

	this.socket = socket;
	this.id = socket.id;
	this.userid = null;
	this.name = "none";
	this.username = null;
	this.validUsernames = [];
	this.rooms = [];
	this.joinTime = new Date();
	this.timePlayed = 0;

	this.ip = this.socket.handshake.headers["x-real-ip"];
	this.port = this.socket.handshake.headers["x-real-port"];

	this.isMod = false;
	this.isPlus = false;
	this.isSub = false;
	this.isBan = false;

	return this;
}

io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io.on("connection", (socket) => {

	clients[socket.id] = new Client(socket);
	console.log("#clients: " + Object.keys(clients).length);

	socket.on("getStreams", (data) => {

	});

});

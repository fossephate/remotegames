const io = require("socket.io")();
const ioClient = require("socket.io-client");
const port = 8100;
io.listen(port);
console.log("Server listening at port %d", port);

// import Host from "./host.js";
const Host = require("./host.js").Host;
// import Client from "./client.js";

// start connection with account server (same server in this case):
let accountServerConn = ioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["websocket"],
});

io.set("transports", ["polling", "websocket", "xhr-polling", "jsonp-polling"]);

let host = new Host(io, accountServerConn);
host.init();

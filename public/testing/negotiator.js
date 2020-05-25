const socketio = require("socket.io");

// class VideoServer {
// 	constructor(options /*accountConnection, port, streamKey*/) {
// 		this.accountConnection = options.socket;
// 		this.port = options.port;
// 		this.streamKey = options.streamKey;
// 		this.io = new socketio({
// 			perMessageDeflate: false,
// 			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
// 		});
// 		this.startTime = new Date();

// 		this.keepAliveTimer = null;
// 	}

// 	init = () => {


class StreamClient {

	constructor(socket) {

		this.socket = socket;
		this.id = socket.id;
		this.maxConnections = 0;
		this.childConnections = [];
		this.parentConnections = [];
		this.currentParentSID = null;
		this.parentIsMaster = false;

	}


}



let masterHostSID = null;
let currentHostSID = null;
let clients = [];



function findHost(SID, avoid) { 
	
	if (!SID) {
		SID = masterHostSID;
	}

	let client = clients[SID];

	if (!client) {
		return null;
	}

	if (SID !== avoid) {
		if (client.childConnections.length < client.maxConnections) {
			return SID;
		}
	}

	if (client.childConnections.length === 0) {
		return null;
	}

	for (let i = 0; i < client.childConnections.length; i++) {
		let childSID = findHost(client.childConnections[i], avoid);
		if (childSID !== null) {
			return childSID;
		}
	}

	return null;

	
}


function getCurrentHosts() {

}



let io = new socketio({
	perMessageDeflate: false,
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});
io.listen(8200, () => {
	console.log("Video server listening at port %d", port);
});

io.on("connection", (socket) => {

	clients[socket.id] = new StreamClient(socket);
	console.log(`#clients: ${Object.keys(clients).length} connected`);

	socket.on("disconnect", () => {
		let client = clients[socket.id];
		if (client) {

			if (client.childConnections.length > 0) {
				// we have to tell the child clients to switch to the backup stream and find a new host!
				for (let i = 0; i < client.childConnections.length; i++) {
					// todo:
				}
			}

			if (client.currentParentSID) {
				let parent = clients[client.currentParentSID];
				if (parent) {
					let index = parent.childConnections.indexOf(client.id);
					if (index > -1) {
						parent.childConnections.splice(index, 1);
					}
				} else {
					console.log("the parent dc'd?");
				}
			}

			delete clients[socket.id];
		}
		console.log(`#clients: ${Object.keys(clients).length} disconnected`);
	});

	/* SIMPLEPEER */

	// socket.on("requestAudio", (data) => {
	// 	this.io.to("host").emit("createNewPeer", { id: socket.id });
	// });
	// socket.on("hostPeerSignalReply", (data) => {
	// 	this.io.to(data.id).emit("hostPeerSignal", data.data);
	// });
	// socket.on("hostPeerSignal", (data) => {
	// 	this.io.emit("hostPeerSignal", data);
	// });
	// socket.on("clientPeerSignal", (data) => {
	// 	this.io.emit("clientPeerSignal", { id: socket.id, data: data });
	// });

	socket.on("hostAuthenticate", (data) => {

		socket.join("host");
		masterHostSID = socket.id;
		currentHostSID = socket.id;
		

		if (!clients[masterHostSID]) {
			console.log("this shouldn't happen 17");
		}
		clients[masterHostSID].maxConnections = 2;

		// join the host room if they have the streamKey
		// if (data.streamKey === this.streamKey) {
		// 	console.log(`host authenticated: ${formatDate(new Date())}`);
		// 	clearTimeout(this.keepAliveTimer);
		// 	this.keepAliveTimer = setTimeout(this.afk, AFK_TIMEOUT);
		// 	socket.join("host");
		// } else {
		// 	console.log("ERROR: wrong streamKey!");
		// 	console.log(data.streamKey, this.streamKey);
		// }
	});

	socket.on("allowHosting", (data) => {
		let client = clients[socket.id];

		if (!client) {
			console.log("no client! (allowHosting)");
			return;
		}

		client.maxConnections = data.maxConnections;

	});

	socket.on("requestVideo", (data) => {
		
		
		let client = clients[socket.id];
		
		
		if (!client) {
			console.log("this shouldn't happen");
			return;
		}
		
		let currentHost = clients[currentHostSID];
		if (!currentHost) {
			currentHostSID = findHost();
			currentHost = clients[currentHostSID];
		} else {
			// make sure the current host still has connections available
			if (currentHost.childConnections.length >= currentHost.maxConnections) {
				currentHostSID = findHost();
				currentHost = clients[currentHostSID];
			}
		}

		if (!currentHost) {
			// no host found!
			console.log("no host found!");
			return;
		}

		clients[socket.id].parentConnections.push(currentHostSID);
		clients[socket.id].currentParentSID = currentHostSID;
		
		let parent = clients[currentHostSID];
		if (!parent) {
			console.log("parent not connected? this shouldn't happen");
			return;
		}
		parent.childConnections.push(client.id);

		if (client.currentParentSID !== masterHostSID) {
			// todo: find a second / third host for backup 
		}
		
		
		io.to(currentHostSID).emit("createNewPeer", { id: socket.id });


		
	});

	socket.on("hostPeerSignalReply", (data) => {
		io.to(data.id).emit("hostPeerSignal", data.data);
	});
	
	socket.on("hostPeerSignal", (data) => {
		io.emit("hostPeerSignal", data);
	});

	socket.on("clientPeerSignal", (data) => {

		let client = clients[socket.id];
		if (!client) {
			console.log("no client (clientPeerSignal)");
		}

		if (client.parentConnections.length === 0) {
			console.log("no parent connections!");
			return;
		}

		let parent = clients[client.currentParentSID];
		if (!parent) {
			console.log("parent dc'd!");
			// todo: fallback to redundant connection
			return;
		}

		io.to(client.currentParentSID).emit("clientPeerSignal", { id: socket.id, data: data });
	});
});

// 	stop = () => {
// 		clearTimeout(this.keepAliveTimer);
// 		console.log(`stream stopped on port: ${this.port}`);
// 		let uptime = (new Date() - this.startTime) / 1000 / 60 / 60;
// 		console.log(`CT: ${formatDate(new Date())} Uptime: ${uptime.toFixed(2)} hours`);
// 		this.io.close();
// 	};

// 	afk = () => {
// 		clearTimeout(this.keepAliveTimer);
// 		console.log("DC'd stream!");
// 		this.accountConnection.emit("streamInactive", {
// 			port: this.port,
// 			streamKey: this.streamKey,
// 		});
// 	};
// }

// module.exports.VideoServer = VideoServer;

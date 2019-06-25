/* SIMPLEPEER */
socket.on("requestAudio", (data, cb) => {
	io.to("audioHost").emit("createNewPeer", { id: socket.id });
	// io.to("audioHost").emit("createNewPeer", null, (data) => {
	// 	// io.to(socket.id).emit("hostPeerSignal", data.data);
	// 	// socket.emit("hostPeer")
	// 	cb(data.data);
	// });
});

socket.on("hostPeerSignalReply", (data) => {
	io.to(data.id).emit("hostPeerSignal", data.data);
});
socket.on("hostPeerSignal", (data) => {
	io.emit("hostPeerSignal", data);
});
socket.on("clientPeerSignal", (data) => {
	io.emit("clientPeerSignal", { id: socket.id, data: data });
});



// host:
socket.on("createNewPeer", (data, cb) => {

	let id = data.id;

	let peer = new SimplePeer({
		initiator: true,
		trickle: true,
		stream: localStream,
		sdpTransform: mySDPTransform,
	});

	peer.on("error", (error) => {
		console.log("error", error)
	});

	peer.on("signal", (data) => {
		console.log("SIGNAL", JSON.stringify(data));
		cb({data: JSON.stringify(data)});
	});

	peer.on("connect", () => {
		console.log("CONNECT");
		peer.send(Math.random());
	});

	peer.on("data", (data) => {
		console.log("data: " + data)
	});

	let client = Client(id, peer);
	clients.push(client);
});

socket.on("clientPeerSignal", (data) => {
	let index = findClientByID(data.id);
	if (index == -1) {
		return;
	}
	clients[index].peer.signal(JSON.parse(data.data));
});



// client:
let socket = io("https://remotegames.io", {
	path: "/8100/socket.io/",
});

let peer = new SimplePeer({
	initiator: false,
	trickle: true,
});

peer.on("error", (error) => {
	console.log("error", error)
});

peer.on("signal", (data) => {
	console.log("SIGNAL", JSON.stringify(data));
	socket.emit("clientPeerSignal", JSON.stringify(data));
});

peer.on("connect", () => {
	console.log("CONNECT");
	peer.send(Math.random());
});

peer.on("data", (data) => {
	console.log("data: " + data)
});

let audio = document.createElement("audio");

peer.on("stream", (stream) => {
	// got remote audio stream, then show it in an audio tag
	try {
		audio.src = window.URL.createObjectURL(stream); // deprecated
		audio.play();
	} catch(error) {
		audio.srcObject = stream;
		audio.play();
	}
});

socket.emit("requestAudio", null, (data) => {
	peer.signal(JSON.parse(data));
});

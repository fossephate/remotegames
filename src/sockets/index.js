// combine socket event handlers into one socket:
import chatSocketEvents from "./chat.js";


const handleEvents = (socket, dispatch) => {

	socket = chatSocketEvents(socket, dispatch);

	socket.on("disconnect", (data) => {
		console.log("lost connection, attempting reconnect1.");
		socket.connect();
	});

	return socket;
};

export default handleEvents;
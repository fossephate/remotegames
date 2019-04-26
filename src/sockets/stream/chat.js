import * as types from "src/actions/ActionTypes.js";
import { receiveMessage } from "src/actions/chat.js";

// listen to events w/ given socket and dispatch actions accordingly:
const chatSocketEvents = (socket, dispatch) => {

	socket.on("chatMessage", (data) => {
		dispatch(receiveMessage(data));
	});

	return socket;
};

export default chatSocketEvents;

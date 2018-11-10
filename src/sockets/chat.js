import * as types from "../actions/ActionTypes.js";
import { receiveMessage } from "../actions/chat.js";

// listen to events w/ given socket and dispatch actions accordingly:
const chatSocketEvents = (socket, dispatch) => {

	socket.on("chatMessage", (data) => {
		dispatch(receiveMessage(data));
	});

	return socket;
};

export default chatSocketEvents;
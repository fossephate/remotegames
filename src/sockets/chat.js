import * as types from "../constants/ActionTypes"
import { receiveMessage } from "../actions/chat.js";

// listen to events w/ given socket and dispatch actions accordingly:
const chatSocketEvents = (socket, dispatch) => {

	socket.on("chatMessage", (data) => {
		dispatch(receiveMessage(data.message, data.username, data.userid));
	});

	return socket;
};

export default chatSocketEvents;
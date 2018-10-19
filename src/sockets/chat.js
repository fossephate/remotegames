import * as types from "../constants/ActionTypes"
import { receiveMessage } from "../actions/chat.js";

// listen to events w/ given socket and dispatch actions accordingly:
const setupSocket = (socket, dispatch) => {

	socket.on("message", (data) => {
		dispatch(receiveMessage(data.message, data.username, data.userid));
	});

};

export default setupSocket;
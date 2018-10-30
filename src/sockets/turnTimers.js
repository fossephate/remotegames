import * as types from "../constants/ActionTypes"
import { updateTurnExpirations } from "../actions/turnTimers.js";
import { updateTurnLengths } from "../actions/turnTimers.js";

// listen to events w/ given socket and dispatch actions accordingly:
const turnTimersEvents = (socket, dispatch) => {

	socket.on("turnExpirations", (data) => {
		dispatch(updateTurnExpirations(data));
	});

	socket.on("turnLengths", (data) => {
		dispatch(updateTurnLengths(data));
	});

	return socket;
};

export default turnTimersEvents;
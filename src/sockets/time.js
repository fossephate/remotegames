import * as types from "../actions/ActionTypes.js";
import { updateServerTime } from "../actions/time.js";

// listen to events w/ given socket and dispatch actions accordingly:
const timeEvents = (socket, dispatch) => {

	socket.on("serverTime", (data) => {
		dispatch(updateServerTime(data));
	});

	return socket;
};

export default timeEvents;
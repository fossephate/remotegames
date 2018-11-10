import * as types from "../actions/ActionTypes.js";
import { updateViewers } from "../actions/viewers.js";

// listen to events w/ given socket and dispatch actions accordingly:
const viewersEvents = (socket, dispatch) => {

	socket.on("viewers", (data) => {
		dispatch(updateViewers(data.viewers));
	});

	return socket;
};

export default viewersEvents;
import * as types from "../actions/ActionTypes.js";
import { updateWaitlist } from "../actions/waitlist.js";

// listen to events w/ given socket and dispatch actions accordingly:
const waitlistEvents = (socket, dispatch) => {

	socket.on("waitlists", (data) => {
		dispatch(updateWaitlist(data.waitlist));
	});

	return socket;
};

export default waitlistEvents;
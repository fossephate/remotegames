import * as types from "../actions/ActionTypes.js";
import { updateWaitlists } from "../actions/waitlists.js";

// listen to events w/ given socket and dispatch actions accordingly:
const waitlistsEvents = (socket, dispatch) => {

	socket.on("waitlists", (data) => {
		dispatch(updateWaitlists(data.waitlists));
	});

	return socket;
};

export default waitlistsEvents;
import * as types from "../constants/ActionTypes"
import { receiveUsernameMap } from "../actions/usernameMap.js";

// listen to events w/ given socket and dispatch actions accordingly:
const usernameMapEvents = (socket, dispatch) => {

	socket.on("usernameMap", (data) => {
		dispatch(receiveUsernameMap(data));
	});

	return socket;
};

export default usernameMapEvents;
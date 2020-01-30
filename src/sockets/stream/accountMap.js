import * as types from "src/actions/ActionTypes.js";
import { receiveAccountMap } from "src/actions/accountMap.js";

// listen to events w/ given socket and dispatch actions accordingly:
const accountMapEvents = (socket, dispatch) => {
	socket.on("accountMap", (data) => {
		dispatch(receiveAccountMap(data));
	});

	return socket;
};

export default accountMapEvents;

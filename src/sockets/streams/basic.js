import * as types from "src/actions/ActionTypes.js";
import { receiveStreams } from "src/actions/streams.js";

// listen to events w/ given socket and dispatch actions accordingly:
const basicEvents = (socket, dispatch) => {

	socket.on("streams", (data) => {
		dispatch(receiveStreams(data));
	});

	return socket;
};

export default basicEvents;

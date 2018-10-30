import * as types from "../constants/ActionTypes"
import { updateControlQueues } from "../actions/controlQueues.js";

// listen to events w/ given socket and dispatch actions accordingly:
const controlQueueEvents = (socket, dispatch) => {

	socket.on("controlQueues", (data) => {
		dispatch(updateControlQueues(data));
	});

	return socket;
};

export default controlQueueEvents;
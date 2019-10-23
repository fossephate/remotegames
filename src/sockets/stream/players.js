import * as types from "src/actions/ActionTypes.js";
import {
	updatePlayerControlQueues,
	updatePlayerTurnStartTimes,
	updatePlayerTurnLengths,
	updatePlayerControllerState,
} from "src/actions/players.js";

// listen to events w/ given socket and dispatch actions accordingly:
const playersEvents = (socket, dispatch) => {
	socket.on("controlQueues", (data) => {
		dispatch(updatePlayerControlQueues(data));
	});

	socket.on("turnStartTimes", (data) => {
		dispatch(updatePlayerTurnStartTimes(data));
	});

	socket.on("turnLengths", (data) => {
		dispatch(updatePlayerTurnLengths(data));
	});

	socket.on("controllerState", (data) => {
		dispatch(updatePlayerControllerState(data));
	});

	return socket;
};

export default playersEvents;

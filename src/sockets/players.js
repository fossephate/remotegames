import * as types from "../actions/ActionTypes.js";
// import { receiveMessage } from "../actions/chat.js";

import {
	updatePlayerControlQueues,
	updatePlayerTurnStartTimes,
	updatePlayerTurnLengths,
	updatePlayerControllerState,
} from "../actions/players.js";

// listen to events w/ given socket and dispatch actions accordingly:
const playersEvents = (socket, dispatch) => {

	// socket.on("chatMessage", (data) => {
	// 	dispatch(receiveMessage(data.message, data.username, data.userid));
	// });

	// socket.on("UPDATE_PLAYER_CONTROL_QUEUES", (data) => {
	// 	dispatch(updatePlayerControlQueues(data));
	// });
	//
	// socket.on("UPDATE_PLAYER_TURN_START_TIMES", (data) => {
	// 	dispatch(updatePlayerTurnStartTimes(data));
	// });
	//
	// socket.on("UPDATE_PLAYER_TURN_LENGTHS", (data) => {
	// 	dispatch(updatePlayerTurnLengths(data));
	// });

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
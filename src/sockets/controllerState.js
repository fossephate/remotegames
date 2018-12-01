import * as types from "../actions/ActionTypes.js";
// import { updateControllerState } from "../actions/controllerState.js";
import { updatePlayerControllerStates } from "../actions/players.js";

// listen to events w/ given socket and dispatch actions accordingly:
const controllerStateEvents = (socket, dispatch) => {

	socket.on("controllerState", (data) => {
		dispatch(updateControllerState(data));
	});

	// socket.on("controllerState0", (data) => {
	// 	dispatch(updateControllerState(data);
	// });

	return socket;
};

export default controllerStateEvents;
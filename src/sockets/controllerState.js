import * as types from "../actions/ActionTypes.js";
import { updateControllerState } from "../actions/controllerState.js";

// listen to events w/ given socket and dispatch actions accordingly:
const controllerStateEvents = (socket, dispatch) => {

	socket.on("controllerState1", (data) => {
		dispatch(updateControllerState(data));
	});

	return socket;
};

export default controllerStateEvents;
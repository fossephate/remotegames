import * as types from "src/actions/ActionTypes.js";
import { takeEvery } from "redux-saga/effects";

const handlePlayersActions = function(params) {
	let list = [];
	list.push(
		takeEvery(types.LEAVE_PLAYER_CONTROL_QUEUE, (action) => {
			params.socket.emit("leaveQueue", action.payload.controllerNumber);
		}),
	);
	list.push(
		takeEvery(types.JOIN_PLAYER_CONTROL_QUEUE, (action) => {
			const NUM_CONTROLLERS = 9;
			for (let i = 0; i < NUM_CONTROLLERS; i++) {
				if (i == action.payload.controllerNumber) {
					continue;
				}
				params.socket.emit("leaveQueue", action.payload.controllerNumber);
			}
			params.socket.emit("joinQueue", action.payload.controllerNumber);
		}),
	);
	return list;
};

export default handlePlayersActions;

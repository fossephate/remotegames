import * as types from "../constants/ActionTypes";
import { takeEvery } from "redux-saga/effects";

const handleActions = function* (params) {
	yield [
		takeEvery(types.SEND_MESSAGE, (action) => {
			// modify payload:
			// action.payload =
			params.socket.emit("message", { message: action.payload.message });
		}),
		// takeEvery(types.SEND_MESSAGE,  (action) => {
		// }),
	];
}


export default handleActions;
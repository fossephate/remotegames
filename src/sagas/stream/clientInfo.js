import * as types from "src/actions/ActionTypes.js";
import { takeEvery } from "redux-saga/effects";

const handleClientInfoActions = (params) => {
	let list = [];
	list.push(
		takeEvery(types.AUTHENTICATE, (action) => {
			params.socket.emit("authenticate", { authToken: action.payload.authToken });
		}),
	);
	return list;
};

export default handleClientInfoActions;

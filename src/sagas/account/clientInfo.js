import * as types from "src/actions/ActionTypes.js";
import { takeEvery } from "redux-saga/effects";

const handleClientInfoActions = (params) => {
	let list = [];
	list.push(
		takeEvery(types.LOGIN, (action) => {
			params.socket.emit(
				"login",
				{ ...action.payload, socketid: params.socket.id },
				(data) => {
					if (action.payload.cb) {
						action.payload.cb(data);
					}
				},
			);
		}),
	);
	list.push(
		takeEvery(types.REGISTER, (action) => {
			params.socket.emit("register", { ...action.payload }, (data) => {
				if (action.payload.cb) {
					action.payload.cb(data);
				}
			});
		}),
	);
	// list.push(
	// 	takeEvery(types.AUTHENTICATE, (action) => {
	// 		params.socket.emit("authenticate", { authToken: action.payload.authToken });
	// 	}),
	// );
	return list;
};

export default handleClientInfoActions;

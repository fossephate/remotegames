import * as types from "src/actions/ActionTypes.js";
import { takeEvery } from "redux-saga/effects";

const handleChatActions = (params) => {
	let list = [];
	list.push(
		takeEvery(types.SEND_MESSAGE, (action) => {
			params.socket.emit("chatMessage", { text: action.payload.text });
		}),
	);
	return list;
};

export default handleChatActions;

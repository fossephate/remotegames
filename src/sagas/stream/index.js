import * as types from "src/actions/ActionTypes.js";
import { takeEvery, all } from "redux-saga/effects";

import handleChatActions from "./chat.js";
import handlePlayersActions from "./players.js";
import handleClientInfoActions from "./clientInfo.js";

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function*(params) {
	let list = [];
	list = list.concat(handleChatActions(params));
	list = list.concat(handlePlayersActions(params));
	list = list.concat(handleClientInfoActions(params));

	// yield to entire list:
	yield all(list);
};

export default handleActions;

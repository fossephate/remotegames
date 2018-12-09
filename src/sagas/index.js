import * as types from "../actions/ActionTypes.js";
import { takeEvery } from "redux-saga/effects";

import handleChatActions from "./chat.js";
import handlePlayersActions from "./players.js";

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function* (params) {
	let list = [];
	list = list.concat(handleChatActions(params));
	list = list.concat(handlePlayersActions(params));

	// yield to entire list:
	yield list;
};


export default handleActions;
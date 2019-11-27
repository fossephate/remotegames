import * as types from "src/actions/ActionTypes.js";
import { all } from "redux-saga/effects";

import handleClientInfoActions from "./clientInfo.js";

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function*(params) {
	let list = [];
	list = list.concat(handleClientInfoActions(params));

	// yield to entire list:
	yield all(list);
};

export default handleActions;

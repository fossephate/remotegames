import { all, spawn } from "redux-saga/effects";

import handleStreamActions from "./stream/index.js";
import handleAccountActions from "./account/index.js";
// import handleClientInfoActions from "./clientInfo.js";

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function*(params) {
	// let list = [];
	// list = list.concat(handleStreamActions(params));
	// list = list.concat(handleAccountActions(params));
	// yield spawn(handleAccountActions);
	// yield to entire list:
	// yield all(list);
	// yield takeEvery("CREATE_SAGA", (action) => {
	// 	spawn(ha)
	// }),
};

export default handleActions;

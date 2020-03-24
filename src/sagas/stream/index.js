import { all } from "redux-saga/effects";

import handleChatActions from "shared/sagas/chat.js";
import handlePlayersActions from "./players.js";
import handleClientActions from "shared/sagas/client.js";

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function*(params) {
	let list = [];
	list = list.concat(handleChatActions(params));
	list = list.concat(handlePlayersActions(params));
	list = list.concat(handleClientActions(params));

	// yield to entire list:
	yield all(list);
};

export default handleActions;

import { combineReducers } from "redux";

import chat from "shared/features/chat.js";
// import players from "./players.js";
import players from "src/features/players.js";
// import time from "./time.js";
import time from "shared/features/time.js";
import accountMap from "./accountMap.js";
import waitlist from "./waitlist.js";
import info from "./info.js";

const streamReducer = combineReducers({
	chat,
	players,
	time,
	accountMap,
	waitlist,
	info,
});

export default streamReducer;

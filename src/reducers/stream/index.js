import { combineReducers } from "redux";

import chat from "./chat.js";
import players from "./players.js";
import time from "./time.js";
import accountMap from "./accountMap.js";
import waitlist from "./waitlist.js";


const streamReducer = combineReducers({
	chat,
	players,
	time,
	accountMap,
	waitlist,
});

export default streamReducer;

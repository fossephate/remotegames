import { combineReducers } from "redux";
import chat from "./chat.js";

import viewers from "./viewers.js";
import waitlist from "./waitlist.js";

import players from "./players.js";

import userInfo from "./userInfo.js";
import usernameMap from "./usernameMap.js";

import settings from "./settings.js";

import time from "./time.js";


const rootReducer = combineReducers({
	chat,
	viewers,
	waitlist,
	userInfo,
	usernameMap,
	settings,
	players,
	time,
});

export default rootReducer;
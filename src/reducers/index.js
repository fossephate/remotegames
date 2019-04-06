import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import chat from "./chat.js";

import waitlist from "./waitlist.js";

import userInfo from "./userInfo.js";
import accountMap from "./accountMap.js";

import players from "./players.js";

import settings from "./settings.js";

import time from "./time.js";

const rootReducer = combineReducers({
	chat,
	waitlist,
	userInfo,
	accountMap,
	players,
	settings,
	time,
	form,
});

export default rootReducer;

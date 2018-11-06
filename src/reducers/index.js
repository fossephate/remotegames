import { combineReducers } from "redux";
import chat from "./chat.js";
import controlQueues from "./controlQueues.js";
import viewers from "./viewers.js";
import waitlists from "./waitlists.js";
import turnTimers from "./turnTimers.js";
// import volume from "./turnTimers.js";
import userInfo from "./userInfo.js";
import usernameMap from "./usernameMap.js";
import controllerState from "./controllerState.js";
import settings from "./settings.js";


const rootReducer = combineReducers({
	chat,
	controlQueues,
	viewers,
	waitlists,
	turnTimers,
	userInfo,
	usernameMap,
	controllerState,
	settings,
});

export default rootReducer;
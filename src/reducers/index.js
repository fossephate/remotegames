import { combineReducers } from "redux";
import messages from "./messages.js";
import controlQueues from "./controlQueues.js";
import viewers from "./viewers.js";
import turnTimers from "./turnTimers.js";
// import volume from "./turnTimers.js";
import userInfo from "./userInfo.js";

const rootReducer = combineReducers({
	messages,
	controlQueues,
	viewers,
	turnTimers,
	userInfo,
});

export default rootReducer;
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import stream from "./stream/index.js";
import streams from "./streams/index.js";
// import account from "./account/index.js";

import clientInfo from "./clientInfo.js";
import settings from "./settings.js";

import client from "src/features/client.js";

const rootReducer = combineReducers({
	stream,
	streams,
	// account,
	// clientInfo,
	client,
	settings,
	form,
});

export default rootReducer;

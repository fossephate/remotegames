import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import stream from "./stream/index.js";
import streams from "./streams/index.js";
import settings from "./settings.js";

import client from "shared/features/client.js";
import alert from "shared/features/alert.js";

const rootReducer = combineReducers({
	stream,
	streams,
	client,
	settings,
	alert,
	form,
});

export default rootReducer;

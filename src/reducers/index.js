import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import stream from "./stream/index.js";
import streams from "./streams/index.js";
import settings from "./settings.js";

import client from "shared/features/client.js";

const rootReducer = combineReducers({
	stream,
	streams,
	client,
	settings,
	form,
});

export default rootReducer;

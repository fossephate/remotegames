import { combineReducers } from "redux";

import streamList from "./streamList.js";


const streamsReducer = combineReducers({
	streamList,
});

export default streamsReducer;

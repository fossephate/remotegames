import { combineReducers } from "redux";
import messages from "./messages";
import users from "./users";

const rootReducer = combineReducers({
	messages,
	users,
});

export default rootReducer;
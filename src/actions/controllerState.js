import * as types from "./ActionTypes.js";

export const updateControllerState = (state) => {
	return {
		type: types.UPDATE_CONTROLLER_STATE,
		payload: {
			state: state,
		},
	};
};
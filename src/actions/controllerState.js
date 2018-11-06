import * as types from "../constants/ActionTypes.js";

export const updateControllerState = (state) => {
	return {
		type: types.UPDATE_CONTROLLER_STATE,
		payload: {
			state: state,
		},
	};
};
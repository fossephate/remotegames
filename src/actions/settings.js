import * as types from "../constants/ActionTypes.js";

export const updateSettings = (settings) => {
	return {
		type: types.UPDATE_SETTINGS,
		payload: {
			settings: settings,
		},
	};
};
import * as types from "./ActionTypes.js";

export const updateSettings = (settings) => {
	return {
		type: types.UPDATE_SETTINGS,
		payload: {
			settings: settings,
		},
	};
};
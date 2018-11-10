import * as types from "./ActionTypes.js";

export const updateViewers = (viewers) => {
	return {
		type: types.UPDATE_VIEWERS,
		payload: {
			viewers: viewers,
		},
	};
};
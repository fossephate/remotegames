import * as types from "./ActionTypes.js";

export const updateWaitlists = (waitlists) => {
	return {
		type: types.UPDATE_WAITLISTS,
		payload: {
			waitlists: waitlists,
		},
	};
};
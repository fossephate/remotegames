import * as types from "../constants/ActionTypes.js";

export const updateWaitlists = (waitlists) => {
	return {
		type: types.UPDATE_WAITLISTS,
		payload: {
			waitlists: waitlists,
		},
	};
};
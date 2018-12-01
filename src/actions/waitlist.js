import * as types from "./ActionTypes.js";

export const updateWaitlist = (waitlist) => {
	return {
		type: types.UPDATE_WAITLIST,
		payload: {
			waitlist: waitlist,
		},
	};
};
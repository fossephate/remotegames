import * as types from "./ActionTypes.js";

export const receiveUsernameMap = (map) => {
	return {
		type: types.RECEIVE_USERNAME_MAP,
		payload: {
			map: map,
		},
	};
};
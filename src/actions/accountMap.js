import * as types from "./ActionTypes.js";

export const receiveAccountMap = (map) => {
	return {
		type: types.RECEIVE_ACCOUNT_MAP,
		payload: {
			map: map,
		},
	};
};

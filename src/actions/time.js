import * as types from "./ActionTypes.js";

export const updateServerTime = (time) => {
	return {
		type: types.UPDATE_SERVER_TIME,
		payload: {
			time: time,
		},
	};
};

export const updateLastServerUpdate = (time) => {
	return {
		type: types.UPDATE_LAST_SERVER_UPDATE,
		payload: {
			time: time,
		},
	};
};

export const updatePing = (time) => {
	return {
		type: types.UPDATE_PING,
		payload: {
			time: time,
		},
	};
};

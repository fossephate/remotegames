import * as types from "./ActionTypes.js";

export const updateStreamInfo = (data) => {
	return {
		type: types.UPDATE_STREAM_INFO,
		payload: {
			data: data,
		},
	};
};

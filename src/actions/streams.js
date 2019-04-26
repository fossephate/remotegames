import * as types from "./ActionTypes.js";

export const receiveStreams = (data) => {
	return {
		type: types.RECEIVE_STREAMS,
		payload: {
			streams: data.streams,
		},
	};
};

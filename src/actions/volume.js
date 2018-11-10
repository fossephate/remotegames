import * as types from "./ActionTypes.js";

export const updateVolume = (volume) => {
	return {
		type: types.UPDATE_VOLUME,
		payload: {
			volume: volume,
		},
	};
};
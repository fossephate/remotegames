import * as types from "../constants/ActionTypes.js";

export const updateVolume = (volume) => {
	return {
		type: types.UPDATE_VOLUME,
		payload: {
			volume: volume,
		},
	};
};

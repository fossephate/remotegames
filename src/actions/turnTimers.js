import * as types from "../constants/ActionTypes.js";

export const updateTurnExpirations = (data) => {
	return {
		type: types.UPDATE_TURN_EXPIRATIONS,
		payload: {
			turnExpirations: data.turnExpirations,
			forfeitExpirations: data.forfeitExpirations,
		},
	};
};

export const updateTurnLengths = (data) => {
	return {
		type: types.UPDATE_TURN_LENGTHS,
		payload: {
			turnLengths: data.turnLengths,
			forfeitLengths: data.forfeitLengths,
		},
	};
};
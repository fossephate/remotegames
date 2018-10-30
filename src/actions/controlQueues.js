import * as types from "../constants/ActionTypes.js";

export const updateControlQueues = (queues) => {
	return {
		type: types.UPDATE_CONTROL_QUEUES,
		payload: {
			queues: queues,
		},
	};
};
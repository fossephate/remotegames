import * as types from "./ActionTypes.js";

export const updatePlayerControlQueues = (queues) => {
	return {
		type: types.UPDATE_PLAYER_CONTROL_QUEUES,
		payload: {
			queues: queues,
		},
	};
};

export const updatePlayerTurnStartTimes = (data) => {
	return {
		type: types.UPDATE_PLAYER_TURN_START_TIMES,
		payload: {
			turnStartTimes: data.turnStartTimes,
			forfeitStartTimes: data.forfeitStartTimes,
		},
	};
};

export const updatePlayerTurnLengths = (data) => {
	return {
		type: types.UPDATE_PLAYER_TURN_LENGTHS,
		payload: {
			turnLengths: data.turnLengths,
			forfeitLengths: data.forfeitLengths,
		},
	};
};


export const joinPlayerControlQueue = (controllerNumber) => {
	return {
		type: types.JOIN_PLAYER_CONTROL_QUEUE,
		payload: {
			controllerNumber: controllerNumber,
		},
	};
};

export const leavePlayerControlQueue = (controllerNumber) => {
	return {
		type: types.LEAVE_PLAYER_CONTROL_QUEUE,
		payload: {
			controllerNumber: controllerNumber,
		},
	};
};

export const updatePlayerControllerState = (data) => {
	return {
		type: types.UPDATE_PLAYER_CONTROLLER_STATE,
		payload: {
			cNum: data.cNum,
			btns: data.btns,
			axes: data.axes,
		},
	};
};

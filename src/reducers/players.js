const players = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case "UPDATE_PLAYER_TURN_START_TIMES":
			newState = [{}, {}, {}, {}];
			for (let i = 0; i < state.turnTimers.length; i++) {
				if (action.payload.turnStartTimes != null) {
					newState[i].turnStartTime = action.payload.turnStartTimes[i];
				} else {
					newState[i].turnStartTime = state.turnTimers[i].turnStartTime;
				}
				if (action.payload.forfeitStartTimes != null) {
					newState[i].forfeitStartTime = action.payload.forfeitStartTimes[i];
				} else {
					newState[i].forfeitStartTime = state.turnTimers[i].forfeitStartTime;
				}
				newState[i].turnLength = state.turnTimers[i].turnLength;
				newState[i].forfeitLength = state.turnTimers[i].forfeitLength;
			}
			return { ...state, turnTimers: newState };
		case "UPDATE_PLAYER_TURN_LENGTHS":
			newState = [{}, {}, {}, {}];
			for (let i = 0; i < state.turnTimers.length; i++) {
				newState[i].turnStartTime = state.turnTimers[i].turnStartTime;
				newState[i].forfeitStartTime = state.turnTimers[i].forfeitStartTime;
				newState[i].turnLength = action.payload.turnLengths[i];
				newState[i].forfeitLength = action.payload.forfeitLengths[i];
			}
			return { ...state, turnTimers: newState };
		case "UPDATE_PLAYER_CONTROL_QUEUES":
			// return Object.assign({ ...state }, { controlQueues: action.payload.queues });
			return { ...state, controlQueues: action.payload.queues };
			// state.controlQueues = action.payload.queues;
			return state;
		default:
			return state;
	}
};

export default players;
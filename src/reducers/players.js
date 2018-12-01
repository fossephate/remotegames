const players = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case "UPDATE_PLAYER_TURN_START_TIMES":
			newState = [{}, {}, {}, {}];
			// newState = [...state.turnTimers];
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
			// newState = [...state.turnTimers];
			for (let i = 0; i < state.turnTimers.length; i++) {
				newState[i].turnStartTime = state.turnTimers[i].turnStartTime;
				newState[i].forfeitStartTime = state.turnTimers[i].forfeitStartTime;
				newState[i].turnLength = action.payload.turnLengths[i];
				newState[i].forfeitLength = action.payload.forfeitLengths[i];
			}
			return { ...state, turnTimers: newState };
		case "UPDATE_PLAYER_CONTROL_QUEUES":
			return { ...state, controlQueues: action.payload.queues };
		case "UPDATE_PLAYER_CONTROLLER_STATE":
			newState = [...state.controllerStates];
			newState[action.payload.cNum].btns = action.payload.btns;
			newState[action.payload.cNum].sticks = action.payload.sticks;
			return { ...state, controllerStates: newState };
		default:
			return state;
	}
};

export default players;
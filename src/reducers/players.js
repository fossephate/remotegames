import produce from "immer";

const players = (state = {}, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case "UPDATE_PLAYER_TURN_START_TIMES":
				for (let i = 0; i < draft.turnTimers.length; i++) {
					if (action.payload.turnStartTimes != null) {
						draft.turnTimers[i].turnStartTime = action.payload.turnStartTimes[i];
					}
					if (action.payload.forfeitStartTimes != null) {
						draft.turnTimers[i].forfeitStartTime = action.payload.forfeitStartTimes[i];
					}
				}
				return;
			case "UPDATE_PLAYER_TURN_LENGTHS":
				for (let i = 0; i < draft.turnTimers.length; i++) {
					draft.turnTimers[i].turnLength = action.payload.turnLengths[i];
					draft.turnTimers[i].forfeitLength = action.payload.forfeitLengths[i];
				}
				return;
			case "UPDATE_PLAYER_CONTROL_QUEUES":
				draft.controlQueues = action.payload.queues;
				return;
			case "UPDATE_PLAYER_CONTROLLER_STATE":
				draft.controllerStates[action.payload.cNum].btns = action.payload.btns;
				draft.controllerStates[action.payload.cNum].axes = action.payload.axes;
				return;
		}
	});
};

export default players;

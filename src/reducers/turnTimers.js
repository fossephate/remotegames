const turnTimers = (state = [], action) => {
	let newState;
	switch (action.type) {
		case "UPDATE_TURN_EXPIRATIONS":
			newState = [{}, {}, {}, {}];
			for (let i = 0; i < state.length; i++) {
				newState[i].turnExpiration = action.payload.turnExpirations[i];
				newState[i].forfeitExpiration = action.payload.forfeitExpirations[i];
				newState[i].turnLength = state[i].turnLength;
				newState[i].forfeitLength = state[i].forfeitLength;
			}
			return newState;
		case "UPDATE_TURN_LENGTHS":
			newState = [{}, {}, {}, {}];
			for (let i = 0; i < state.length; i++) {
				newState[i].turnExpiration = state[i].turnExpiration;
				newState[i].forfeitExpiration = state[i].forfeitExpiration;
				newState[i].turnLength = action.payload.turnLengths[i];
				newState[i].forfeitLength = action.payload.forfeitLengths[i];
			}
			return newState;
		default:
			return state;
	}
};

export default turnTimers;
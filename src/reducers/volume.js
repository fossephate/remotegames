const volume = (state = 0, action) => {
	switch (action.type) {
		case "UPDATE_VOLUME":
			return action.payload.volume;
		default:
			return state;
	}
};

export default volume;
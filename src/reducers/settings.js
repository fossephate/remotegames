const settings = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_SETTINGS":
			return Object.assign(state, action.payload.settings);
		default:
			return state;
	}
};

export default settings;
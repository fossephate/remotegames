const waitlists = (state = [], action) => {
	switch (action.type) {
		case "UPDATE_WAITLISTS":
			return action.payload.waitlists;
		default:
			return state;
	}
};

export default waitlists;
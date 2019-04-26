const waitlist = (state = [], action) => {
	switch (action.type) {
		case "UPDATE_WAITLIST":
			return action.payload.waitlist;
		default:
			return state;
	}
};

export default waitlist;
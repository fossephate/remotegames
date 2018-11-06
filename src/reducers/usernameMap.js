const usernameMap = (state = {}, action) => {
	switch (action.type) {
		case "RECEIVE_USERNAME_MAP":
			return action.payload.map;
		default:
			return state;
	}
};

export default usernameMap;
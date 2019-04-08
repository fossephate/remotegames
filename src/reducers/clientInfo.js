const clientInfo = (state = {}, action) => {
	switch (action.type) {
		case "CHANGE_USERNAME":
			return { ...state, usernameIndex: action.payload.usernameIndex };
		case "UPDATE_CLIENT_INFO":
			return { ...state, ...action.payload.clientInfo };
		default:
			return state;
	}
};

export default clientInfo;

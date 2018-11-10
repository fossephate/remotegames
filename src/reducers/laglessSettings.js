const laglessSettings = (state = {}, action) => {
	switch (action.type) {
		case "CHANGE_USERNAME":
			return { ...state, usernameIndex: action.payload.usernameIndex };
		case "UPDATE_USER_INFO":
			// return { ...state, action.payload.userInfo };
			return Object.assign({ ...state }, action.payload.userInfo);
		default:
			return state;
	}
};

export default userInfo;
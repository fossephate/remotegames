const messages = (state = [], action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
		case "RECEIVE_MESSAGE":
			return state.concat([{
				id: action.payload.id,
				userid: action.payload.userid,
				username: action.payload.username,
				message: action.payload.message,
			}]);
		case "UPDATE_MESSAGES":
			return action.messages;
		default:
			return state;
	}
}

export default messages;
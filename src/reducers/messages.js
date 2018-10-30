const messages = (state = [], action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
		case "RECEIVE_MESSAGE":
			// scroll chat in 100ms if already at the bottom:
			// todo: put in saga & intercept the RECEIVE_MESSAGE action
			let messageList = document.getElementById("messageList");
			if (messageList.scrollTop = messageList.scrollHeight) {
				setTimeout(() => {
					let messageList = document.getElementById("messageList");
					messageList.scrollTop = messageList.scrollHeight;
				}, 100);
			}
			return state.concat([{
				id: action.payload.id,
				userid: action.payload.userid,
				username: action.payload.username,
				message: action.payload.message,
			}]);
		case "UPDATE_MESSAGES":
			return action.payload.messages;
		default:
			return state;
	}
};

export default messages;
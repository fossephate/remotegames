const chat = (state = {}, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
		case "RECEIVE_MESSAGE":
			// scroll chat in 100ms if already at the bottom:
			// todo: put in saga & intercept the RECEIVE_MESSAGE action
			let messageList = document.getElementById("messageList");
			// if (messageList.scrollTop == messageList.scrollHeight) {
			// if ((messageList.scrollHeight - messageList.scrollTop) == (messageList.offsetHeight)) {
			if (Math.abs((messageList.scrollHeight - messageList.scrollTop) - (messageList.offsetHeight)) < 2) {
				setTimeout(() => {
					let messageList = document.getElementById("messageList");
					messageList.scrollTop = messageList.scrollHeight;
				}, 100);
				setTimeout(() => {
					let messageList = document.getElementById("messageList");
					messageList.scrollTop = messageList.scrollHeight;
				}, 500);
			}
			// add message to messages:
			state.messages = state.messages.concat([{
				id: action.payload.id,
				userid: action.payload.userid,
				username: action.payload.username,
				message: action.payload.message,
			}]);
			// add the userid if not already in the state:
			if (state.userids.indexOf(action.payload.userid) == -1) {
				state.userids.push(action.payload.userid);
			}
			return state;
		case "UPDATE_MESSAGES":
			return Object.assign({ ...state }, { messages: action.payload.messages });
		default:
			return state;
	}
};

export default chat;
import Noty from "noty";

const chat = (state = {}, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
		case "RECEIVE_MESSAGE":
			// todo: fix chat so this isn't needed:
			setTimeout(() => {
				window.dispatchEvent(new Event("resize"));
			}, 1000);
			// add message to messages:
			let messages = state.messages.concat([{
				id: action.payload.id,
				userid: action.payload.userid,
				username: action.payload.username,
				message: action.payload.message,
				time: action.payload.time,
			}]);
			let userids = state.userids.splice(0);
			// add the userid if not already in the state:
			if (userids.indexOf(action.payload.userid) == -1) {
				userids.push(action.payload.userid);
			}
			return { ...state, userids: userids, messages: messages };
		case "UPDATE_MESSAGES":
			return { ...state, messages: action.payload.messages };
		default:
			return state;
	}
};

export default chat;

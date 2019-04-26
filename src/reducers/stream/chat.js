const chat = (state = {}, action) => {
	switch (action.type) {
		case "ADD_MESSAGE":
		case "RECEIVE_MESSAGE":
			// todo: fix chat so this isn't needed:
			setTimeout(() => {
				window.dispatchEvent(new Event("resize"));
			}, 1000);
			// add message to messages:
			let messages = state.messages.concat([
				{
					id: action.payload.id,
					userid: action.payload.userid,
					username: action.payload.username,
					text: action.payload.text,
					time: action.payload.time,
					isReplay: action.payload.isReplay,
					isBanned: action.payload.isBanned,
				},
			]);
			let userids = state.userids.splice(0);
			// add the userid if not already in the state:
			if (userids.indexOf(action.payload.userid) == -1) {
				userids.push(action.payload.userid);
			}
			if (action.payload.pinged) {
				// new Noty({
				// 	theme: "mint",
				// 	type: "warning",
				// 	text: "You've been pinged!",
				// 	timeout: 5000,
				// 	sounds: {
				// 		volume: 0.5,
				// 		sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
				// 		conditions: ["docVisible"],
				// 	},
				// }).show();
			}
			return { ...state, userids: userids, messages: messages };
		case "UPDATE_MESSAGES":
			return { ...state, messages: action.payload.messages };
		default:
			return state;
	}
};

export default chat;

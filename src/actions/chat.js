import * as types from "./ActionTypes.js";

export const sendMessage = (text) => {
	return {
		type: types.SEND_MESSAGE,
		payload: {
			text: text,
		},
	};
};

export const receiveMessage = (data) => {
	return {
		type: types.RECEIVE_MESSAGE,
		payload: {
			text: data.text,
			username: data.username,
			userid: data.userid,
			time: data.time,
			isReplay: data.isReplay,
			isBanned: data.isBanned,
		},
	};
};

export const updateMessages = (messages) => {
	return {
		type: types.UPDATE_MESSAGES,
		payload: {
			messages: messages,
		},
	};
};

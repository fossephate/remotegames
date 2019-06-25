import * as types from "./ActionTypes.js";

let nextMessageId = 0;
const nextUserId = 0;

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
			id: nextMessageId++,
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

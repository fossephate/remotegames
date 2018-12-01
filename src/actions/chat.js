import * as types from "./ActionTypes.js";

let nextMessageId = 0;
const nextUserId = 0;

export const sendMessage = (message) => {
	return {
		type: types.SEND_MESSAGE,
		payload: {
			message: message,
		},
	};
};

export const receiveMessage = (data) => {
	return {
		type: types.RECEIVE_MESSAGE,
		payload: {
			id: nextMessageId++,
			message: data.message,
			username: data.username,
			userid: data.userid,
			time: data.time,
			pinged: data.pinged,
		},
	};
};

import * as types from "../constants/ActionTypes.js";

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

export const receiveMessage = (message, username, userid) => {
	return {
		type: types.RECEIVE_MESSAGE,
		payload: {
			id: nextMessageId++,
			message: message,
			username: username,
			userid: userid,
		},
	};
};
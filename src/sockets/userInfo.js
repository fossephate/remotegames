import * as types from "../constants/ActionTypes"

import { updateUserInfo } from "../actions/userInfo.js";

// listen to events w/ given socket and dispatch actions accordingly:
const userInfoEvents = (socket, dispatch) => {


	// socket.on("chatMessage", (data) => {
	// 	dispatch(receiveMessage(data.message, data.username, data.userid));
	// });

	socket.on("unauthorized", (data) => {
		console.log("Unauthorized: " + data);
		// swal("Already Logged In / multiple tabs open!");
		// notLoggedIn();
		// todo:
	});

	// response:
	socket.on("userInfo", (data) => {
		dispatch(updateUserInfo({ ...data, loggedIn: true }));
	});

	return socket;
};



export default userInfoEvents;
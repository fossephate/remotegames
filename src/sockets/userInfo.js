import * as types from "../actions/ActionTypes.js";

import { updateUserInfo } from "../actions/userInfo.js";

const tools = require("js/tools.js");

// listen to events w/ given socket and dispatch actions accordingly:
const userInfoEvents = (socket, dispatch) => {


	/* AUTHENTICATION */
	let authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
	if (authCookie !== null) {
		authCookie = authCookie.split(" ")[0].replace(/;/g, "");
		dispatch(updateUserInfo({ authToken: authCookie }));
		socket.emit("authenticate", {
			auth: authCookie,
			usernameIndex: 0,
		});
	}

	// socket.on("chatMessage", (data) => {
	// 	dispatch(receiveMessage(data.message, data.username, data.userid));
	// });

	socket.on("unauthorized", (data) => {
		console.log("Unauthorized: " + data);
		// swal("Already Logged In / multiple tabs open!");
	});

	// response:
	socket.on("userInfo", (data) => {
		dispatch(updateUserInfo({ ...data, loggedIn: true }));
	});

	return socket;
};



export default userInfoEvents;

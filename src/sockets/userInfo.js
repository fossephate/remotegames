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

	// reconnect:
	socket.on("disconnect", (data) => {
		console.log("lost connection, attempting reconnect1.");
		socket.connect();
		// re-authenticate if the connection was successful
		setTimeout(() => {
			if (socket.connected) {
				socket.emit("authenticate", {
					auth: authCookie,
					usernameIndex: 0,
				});
			}
		}, 1000);
	});

	// todo: make this not necessary
	setInterval(() => {
		if (socket.connected) {
			socket.emit("authenticate", {
				auth: authCookie,
				usernameIndex: 0,
			});
		}
	}, 120000);


	// socket.on("disconnect", (data) => {
	// 	// console.log("lost connection, attempting reconnect2.");
	// 	// socket.connect();
	// });
	// window.reconnectTimer = setInterval(() => {
	// 	if (!socket.connected) {
	// 		console.log("lost connection, attempting reconnect3.");
	// 		socket.connect();
	// 		// re-authenticate if the connection was successful
	// 		setTimeout(() => {
	// 			if (socket.connected) {
	// 				socket.emit("authenticate", {
	// 					auth: this.props.userInfo.authToken,
	// 					usernameIndex: this.props.userInfo.usernameIndex,
	// 				});
	// 			}
	// 		}, 1000);
	// 	}
	// }, 5000);

	return socket;
};



export default userInfoEvents;

import * as types from "../actions/ActionTypes.js";

import { updateUserInfo } from "../actions/userInfo.js";

// import { getCookie } from "libs/tools.js";
import Cookie from "js-cookie";

function authenticate(socket, dispatch) {
	let authToken = Cookie.get("RemoteGames");
	if (authToken) {
		dispatch(updateUserInfo({ authToken: authToken }));
		socket.emit("authenticate", {
			authToken: authToken,
			usernameIndex: 0,
		});
	}
}

// listen to events w/ given socket and dispatch actions accordingly:
const userInfoEvents = (socket, dispatch) => {
	/* AUTHENTICATION */
	authenticate(socket, dispatch);
	// setTimeout(() => {
	// 	$.ajax({
	// 		url: "https://remotegames.io/accountData/" + this.props.userInfo.username + "/" + this.props.userInfo.userid + "/" + authCookie,
	// 	});
	// }, 5000);

	// socket.on("chatMessage", (data) => {
	// 	dispatch(receiveMessage(data.message, data.username, data.userid));
	// });

	socket.on("authenticationFailure", (data) => {
		console.log(`AUTHENTICATION_FAILURE: ${data.reason}`);
		// remove the authToken if it doesn't work:
		if (data.reason == "ACCOUNT_NOT_FOUND") {
			Cookie.remove("RemoteGames");
			dispatch(updateUserInfo({ authToken: null }));
		}
		// swal("Already Logged In / multiple tabs open!");
	});

	// socket.on("authenticationFailure", (data) => {
	// 	console.log(`AUTHENTICATION_FAILURE: ${data.reason}`);
	// 	// swal("Already Logged In / multiple tabs open!");
	// });

	// response:
	socket.on("userInfo", (data) => {
		console.log("userInfo received");
		dispatch(updateUserInfo({ ...data, loggedIn: true }));
	});

	// reconnect:
	socket.on("disconnect", (data) => {
		console.log("lost connection, attempting reconnect1.");
		socket.connect();
		// re-authenticate if the connection was successful
		setTimeout(() => {
			if (socket.connected) {
				authenticate(socket, dispatch);
			}
		}, 1000);
	});

	// todo: make this not necessary
	setInterval(() => {
		if (socket.connected) {
			authenticate(socket, dispatch);
		}
	}, 120000); // 2 minutes

	return socket;
};

export default userInfoEvents;

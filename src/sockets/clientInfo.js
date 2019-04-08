import * as types from "../actions/ActionTypes.js";

import { updateClientInfo } from "../actions/clientInfo.js";

// import { getCookie } from "libs/tools.js";
import Cookie from "js-cookie";

function authenticate(socket, dispatch) {
	let authToken = Cookie.get("RemoteGames");
	if (authToken) {
		dispatch(updateClientInfo({ authToken: authToken }));
		socket.emit("authenticate", {
			authToken: authToken,
			usernameIndex: 0,
		});
	}
}

// listen to events w/ given socket and dispatch actions accordingly:
const clientInfoEvents = (socket, dispatch) => {
	/* AUTHENTICATION */
	authenticate(socket, dispatch);
	// setTimeout(() => {
	// 	$.ajax({
	// 		url: "https://remotegames.io/accountData/" + this.props.clientInfo.username + "/" + this.props.clientInfo.userid + "/" + authCookie,
	// 	});
	// }, 5000);

	// socket.on("chatMessage", (data) => {
	// 	dispatch(receiveMessage(data.message, data.username, data.userid));
	// });

	socket.on("authenticated", (data) => {
		if (data.success) {
			dispatch(updateClientInfo({ ...data.clientInfo, loggedIn: true }));
		} else {
			console.log(`AUTHENTICATION_FAILURE: ${data.reason}`);
			// remove the authToken if it doesn't work:
			if (data.reason == "ACCOUNT_NOT_FOUND") {
				Cookie.remove("RemoteGames");
				dispatch(updateClientInfo({ authToken: null }));
			}
		}
	});

	// socket.on("authenticationFailure", (data) => {
	// 	console.log(`AUTHENTICATION_FAILURE: ${data.reason}`);
	// 	// swal("Already Logged In / multiple tabs open!");
	// });

	// response:
	// socket.on("clientInfo", (data) => {
	// 	console.log("clientInfo received");
	// 	dispatch(updateClientInfo({ ...data, loggedIn: true }));
	// });

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

export default clientInfoEvents;

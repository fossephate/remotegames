import * as types from "src/actions/ActionTypes.js";

import { updateClientInfo } from "src/actions/clientInfo.js";

// libs:
import localforage from "localforage";
import Cookie from "js-cookie";

function authenticate(socket, dispatch) {
	let authToken = Cookie.get("RemoteGames");
	if (authToken) {
		socket.emit(
			"authenticate",
			{
				authToken: authToken,
				usernameIndex: 0,
			},
			(data) => {
				console.log(data);
				if (data.success) {
					dispatch(
						updateClientInfo({
							...data.clientInfo,
							authToken: authToken,
							loggedIn: true,
						}),
					);
				} else {
					console.log(`AUTHENTICATION_FAILURE: ${data.reason}`);
					// remove the authToken if it doesn't work:
					if (data.reason === "ACCOUNT_NOT_FOUND") {
						Cookie.remove("RemoteGames");
						dispatch(updateClientInfo({ authToken: null }));
					}
				}
			},
		);
	}
}

// listen to events w/ given socket and dispatch actions accordingly:
const clientInfoEvents = (socket, dispatch) => {
	/* AUTHENTICATION */
	authenticate(socket, dispatch);

	socket.on("banned", (data) => {
		localforage.setItem("banned", "banned");
	});

	return socket;
};

export default clientInfoEvents;

import { updateClient } from "src/features/client.js";

// libs:
import localforage from "localforage";
import Cookie from "js-cookie";

function getAccountInfo(socket, dispatch) {
	let authToken = Cookie.get("RemoteGames");
	if (authToken) {
		socket.emit(
			"getAccountInfo",
			{
				authToken: authToken,
				usernameIndex: 0,
			},
			(data) => {
				console.log(data);
				if (data.success) {
					dispatch(
						updateClient({
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
						dispatch(updateClient({ authToken: null }));
					}
				}
			},
		);
	}
}

// listen to events w/ given socket and dispatch actions accordingly:
const clientEvents = (socket, dispatch) => {
	/* getAccountInfo */
	getAccountInfo(socket, dispatch);

	socket.on("banned", (data) => {
		localforage.setItem("banned", "banned");
	});

	// // reconnect:
	// socket.on("disconnect", (data) => {
	// 	console.log("lost connection, attempting reconnect1.");
	// 	socket.connect();
	// 	// re-authenticate if the connection was successful
	// 	setTimeout(() => {
	// 		if (socket.connected) {
	// 			authenticate(socket, dispatch);
	// 		}
	// 	}, 1000);
	// });
	//
	// // todo: make this not necessary
	// setInterval(() => {
	// 	if (socket.connected) {
	// 		authenticate(socket, dispatch);
	// 	}
	// }, 120000); // 2 minutes

	return socket;
};

export default clientEvents;

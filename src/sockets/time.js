import * as types from "../actions/ActionTypes.js";
import { updateServerTime, updatePing } from "../actions/time.js";


// listen to events w/ given socket and dispatch actions accordingly:
const timeEvents = (socket, dispatch) => {

	socket.on("serverTime", (data) => {
		dispatch(updateServerTime(data));
	});

	/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	let time = Date.now();
	setInterval(() => {
		time = Date.now();
		socket.emit("ping2");
	}, 1000);
	socket.on("pong2", () => {
		let ping = Date.now() - time;
		dispatch(updatePing(ping));
	});

	return socket;
};

export default timeEvents;

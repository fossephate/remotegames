import * as types from "src/actions/ActionTypes.js";
import { updateServerTime, updatePing } from "src/actions/time.js";
import { getAverage } from "src/libs/tools.js";

// listen to events w/ given socket and dispatch actions accordingly:
const timeEvents = (socket, dispatch) => {
	socket.on("serverTime", (data) => {
		dispatch(updateServerTime(data));
	});

	/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	// let time = Date.now();
	// setInterval(() => {
	// 	time = Date.now();
	// 	socket.emit("ping2");
	// }, 1000);
	// socket.on("pong2", () => {
	// 	let ping = Date.now() - time;
	// 	dispatch(updatePing(ping));
	// });
	let pings = [];
	setInterval(() => {
		socket.emit("ping2", Date.now(), (startTime) => {
			let latency = Date.now() - startTime;
			pings.push(latency);
			if (pings.length > 5) {
				pings.shift();
			}
			dispatch(updatePing(Math.round(getAverage(pings))));
		});
	}, 1000);

	return socket;
};

export default timeEvents;

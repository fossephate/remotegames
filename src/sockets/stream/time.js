import { updateServerTime, updatePing } from "shared/features/time.js";

// listen to events w/ given socket and dispatch actions accordingly:
const timeEvents = (socket, dispatch) => {
	socket.on("serverTime", (data) => {
		dispatch(updateServerTime({ time: data }));
	});

	/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
	let ping = 0;
	let avgSize = 5;
	setInterval(() => {
		socket.emit("ping2", Date.now(), (startTime) => {
			let latency = Date.now() - startTime;
			ping = (ping * (avgSize - 1) + latency) / avgSize;
			dispatch(updatePing({ time: Math.round(ping) }));
		});
	}, 1000);

	return socket;
};

export default timeEvents;

import { takeEvery } from "redux-saga/effects";
import { joinLeavePlayerControlQueue } from "src/features/players.js";

const handlePlayersActions = (params) => {
	let list = [];
	list.push(
		takeEvery(joinLeavePlayerControlQueue.type, (action) => {
			if (action.payload.joinLeave === "join") {
				const NUM_CONTROLLERS = 9;
				for (let i = 0; i < NUM_CONTROLLERS; i++) {
					if (i == action.payload.cNum) {
						continue;
					}
					params.socket.emit("leaveQueue", action.payload.cNum);
				}
				params.socket.emit("joinQueue", action.payload.cNum);
			} else {
				params.socket.emit("leaveQueue", action.payload.cNum);
			}
		}),
	);
	return list;
};

export default handlePlayersActions;

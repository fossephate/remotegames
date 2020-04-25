import { createSlice } from "@reduxjs/toolkit";

let turnTimers = [];
let controlQueues = [];
let controllerStates = [];

for (let i = 0; i < 8; i++) {
	turnTimers.push({
		turnStartTime: 0,
		forfeitStartTime: 0,
		turnLength: 0,
		forfeitLength: 0,
	});
	controlQueues.push([]);
	controllerStates.push({
		btns: 0,
		axes: [0, 0, 0, 0, 0, 0],
	});
}

const playersSlice = createSlice({
	name: "players",
	initialState: {
		controlQueues: controlQueues,
		turnTimers: turnTimers,
		controllerStates: controllerStates,
	},
	reducers: {
		updatePlayerControlQueues(state, action) {
			state.controlQueues = action.payload.queues;
		},
		updatePlayerTurnStartTimes(state, action) {
			for (let i = 0; i < state.turnTimers.length; i++) {
				if (action.payload.turnStartTimes != null) {
					state.turnTimers[i].turnStartTime = action.payload.turnStartTimes[i];
				}
				if (action.payload.forfeitStartTimes != null) {
					state.turnTimers[i].forfeitStartTime = action.payload.forfeitStartTimes[i];
				}
			}
		},
		updatePlayerTurnLengths(state, action) {
			for (let i = 0; i < state.turnTimers.length; i++) {
				state.turnTimers[i].turnLength = action.payload.turnLengths[i];
				state.turnTimers[i].forfeitLength = action.payload.forfeitLengths[i];
			}
		},
		updatePlayerControllerState(state, action) {
			state.controllerStates[action.payload.cNum].btns = action.payload.btns;
			state.controllerStates[action.payload.cNum].axes = action.payload.axes;
		},

		joinLeavePlayerControlQueue(state, action) {},
	},
});
export const {
	updatePlayerControlQueues,
	updatePlayerTurnStartTimes,
	updatePlayerTurnLengths,
	updatePlayerControllerState,
	joinLeavePlayerControlQueue,
} = playersSlice.actions;
export default playersSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// maybe refactor to this:
// let player = {
// 	turnTimers: {
// 		turnStartTime: 0,
// 		forfeitStartTime: 0,
// 		turnLength: 0,
// 		forfeitLength: 0,
// 	},
// 	controllerState: {
// 		btns: 0,
// 		axes: [0, 0, 0, 0, 0, 0],
// 	},
// 	controlQueue: [],
// };

// let players = [];
// for (let i = 0; i < 8; i++) {
// 	players.push(player);
// }

// const playersSlice2 = createSlice({
// 	name: "players2",
// 	initialState: players,
// 	reducers: {
// 		updatePlayerControlQueues(state, action) {
// 			state.controlQueues = action.payload.queues;
// 		},
// 		updatePlayerTurnStartTimes(state, action) {
// 			for (let i = 0; i < state.length; i++) {
// 				if (action.payload.turnStartTimes != null) {
// 					state[i].turnTimers.turnStartTime = action.payload.turnStartTimes[i];
// 				}
// 				if (action.payload.forfeitStartTimes != null) {
// 					state[i].turnTimers.forfeitStartTime = action.payload.forfeitStartTimes[i];
// 				}
// 			}
// 		},
// 		updatePlayerTurnLengths(state, action) {
// 			for (let i = 0; i < state.length; i++) {
// 				state[i].turnTimers.turnLength = action.payload.turnLengths[i];
// 				state[i].turnTimers.forfeitLength = action.payload.forfeitLengths[i];
// 			}
// 		},
// 		updatePlayerControllerState(state, action) {
// 			state[action.payload.cNum].controllerState.btns = action.payload.btns;
// 			state[action.payload.cNum].controllerState.axes = action.payload.axes;
// 		},
// 	},
// });
// export const {
// 	updatePlayerControlQueues,
// 	updatePlayerTurnStartTimes,
// 	updatePlayerTurnLengths,
// 	updatePlayerControllerState,
// } = playersSlice.actions;
// export default playersSlice.reducer;

// export const updatePlayerTurnLengths = (data) => {
// 	return {
// 		type: types.UPDATE_PLAYER_TURN_LENGTHS,
// 		payload: {
// 			turnLengths: data.turnLengths,
// 			forfeitLengths: data.forfeitLengths,
// 		},
// 	};
// };

// export const joinPlayerControlQueue = (controllerNumber) => {
// 	return {
// 		type: types.JOIN_PLAYER_CONTROL_QUEUE,
// 		payload: {
// 			controllerNumber: controllerNumber,
// 		},
// 	};
// };

// export const leavePlayerControlQueue = (controllerNumber) => {
// 	return {
// 		type: types.LEAVE_PLAYER_CONTROL_QUEUE,
// 		payload: {
// 			controllerNumber: controllerNumber,
// 		},
// 	};
// };

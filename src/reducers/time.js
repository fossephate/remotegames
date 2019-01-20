const time = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_SERVER_TIME":
			return Object.assign({ ...state }, { server: action.payload.time, lastServerUpdate: (Date.now()) });
		case "UPDATE_PING":
			return Object.assign({ ...state }, { ping: action.payload.time });
		default:
			return state;
	}
};

export default time;

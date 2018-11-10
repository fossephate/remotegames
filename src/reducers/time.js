const time = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_SERVER_TIME":
			return Object.assign({ ...state }, { server: action.payload.time, lastServerUpdate: (Date.now()) });
		default:
			return state;
	}
};

export default time;
const info = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_STREAM_INFO":
			return action.payload.data;
		default:
			return state;
	}
};

export default info;

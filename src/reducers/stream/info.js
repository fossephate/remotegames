const info = (state = {}, action) => {
	switch (action.type) {
		case "UPDATE_STREAM_INFO":
			return { ...state, ...action.payload.data };
		default:
			return state;
	}
};

export default info;

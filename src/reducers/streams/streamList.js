const streamList = (state = [], action) => {
	switch (action.type) {
		case "RECEIVE_STREAMS":
			return data.payload.streams;
		default:
			return state;
	}
};

export default streamList;

const viewers = (state = [], action) => {
	switch (action.type) {
		case "UPDATE_VIEWERS":
			return action.payload.viewers;
		default:
			return state;
	}
};

export default viewers;
const accountMap = (state = {}, action) => {
	switch (action.type) {
		case "RECEIVE_ACCOUNT_MAP":
			return action.payload.map;
		default:
			return state;
	}
};

export default accountMap;

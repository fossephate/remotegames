const controllerState = (state = "", action) => {
	switch (action.type) {
		case "UPDATE_CONTROLLER_STATE":
			return action.payload.state;
		default:
			return state;
	}
};

export default controllerState;
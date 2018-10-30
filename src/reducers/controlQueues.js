const controlQueues = (state = [], action) => {
	switch (action.type) {
		case "UPDATE_CONTROL_QUEUES":
			return action.payload.queues;
		default:
			return state;
	}
};

export default controlQueues;
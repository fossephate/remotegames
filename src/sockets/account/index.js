// combine socket event handlers into one socket:

import clientEvents from "./client.js";
// import accountMapEvents from "./accountMap.js";

// import settingsEvents from "./settings.js";

const handleEvents = (socket, dispatch) => {
	socket = clientEvents(socket, dispatch);
	// socket = accountMapEvents(socket, dispatch);

	return socket;
};

export default handleEvents;

// combine socket event handlers into one socket:

import clientInfoEvents from "./clientInfo.js";
// import accountMapEvents from "./accountMap.js";

// import settingsEvents from "./settings.js";

const handleEvents = (socket, dispatch) => {

	socket = clientInfoEvents(socket, dispatch);
	// socket = accountMapEvents(socket, dispatch);

	return socket;
};

export default handleEvents;

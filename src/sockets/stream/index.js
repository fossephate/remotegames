// combine socket event handlers into one socket:
import chatSocketEvents from "./chat.js";
import playersEvents from "./players.js";
import timeEvents from "./time.js";
import accountMapEvents from "./accountMap.js";
// import waitlistEvents from "./waitlist.js";
import clientEvents from "./client.js";

const handleEvents = (socket, dispatch) => {
	socket = chatSocketEvents(socket, dispatch);
	socket = playersEvents(socket, dispatch);
	socket = timeEvents(socket, dispatch);
	socket = accountMapEvents(socket, dispatch);
	// socket = waitlistEvents(socket, dispatch);
	socket = clientEvents(socket, dispatch);

	return socket;
};

export default handleEvents;

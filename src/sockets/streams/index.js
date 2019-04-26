// combine socket event handlers into one socket:
import basicEvents from "./basic.js";


const handleEvents = (socket, dispatch) => {

	socket = basicEvents(socket, dispatch);

	return socket;
};

export default handleEvents;

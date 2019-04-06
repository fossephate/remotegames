// export class Client {

class VideoServer {
	constructor(socket, ip, availablePorts) {
		this.socket = socket;
		this.id = socket.id;

		this.ip = ip;
		this.availablePorts = availablePorts;

		this.authenticated = false;
	}
}

module.exports.VideoServer = VideoServer;

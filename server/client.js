// export class Client {

class Client {
	constructor(socket) {
		this.socket = socket;
		this.id = socket.id;
		this.userid = null;
		this.name = "none";
		this.username = null;
		this.validUsernames = [];
		this.rooms = [];
		this.joinTime = new Date();
		this.timePlayed = 0;

		this.authenticated = false;

		this.ip = this.socket.handshake.headers["x-real-ip"];
		this.port = this.socket.handshake.headers["x-real-port"];

		this.roles = {};
		// this.isHost = false;
		// this.isMod = false;
		// this.isPlus = false;
		// this.isSub = false;
		// this.isBanned = false;
	}

	update(client) {
		this.authenticated = true;

		if (client.connectedAccounts) {
			this.connectedAccounts = client.connectedAccounts;
		}
		if (client.username) {
			this.username = client.username;
		}
		if (client.validUsernames) {
			this.validUsernames = client.validUsernames;
		}
		if (client.timePlayed) {
			this.timePlayed = client.timePlayed;
		}
		if (client.userid) {
			this.userid = client.userid;
		}
		// if (client.isMod) {
		// 	this.isMod = client.isMod;
		// }
		// if (client.isPlus) {
		// 	this.isPlus = client.isPlus;
		// }
		// if (client.isSub) {
		// 	this.isSub = client.isSub;
		// }
		// if (client.isBanned) {
		// 	this.isBanned = client.isBanned;
		// }
		if (client.roles) {
			this.roles = client.roles;
		}
	}
}

module.exports.Client = Client;

class VideoServerClient {
	constructor(socket, ip, ports) {
		this.socket = socket;
		this.socketid = socket.id;

		this.ip = ip;
		this.ports = ports;
		this.aliveServers = {};

		this.authenticated = false;
	}
}

module.exports.VideoServerClient = VideoServerClient;

class HostServerClient {
	constructor(socket, ip, ports) {
		this.socket = socket;
		this.socketid = socket.id;

		this.ip = ip;
		this.ports = ports;
		this.aliveServers = {};

		this.authenticated = false;
	}
}

module.exports.HostServerClient = HostServerClient;

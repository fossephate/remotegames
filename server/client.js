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

		this.isMod = false;
		this.isPlus = false;
		this.isSub = false;
		this.isBan = false;
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
		if (client.isMod) {
			this.isMod = client.isMod;
		}
		if (client.isPlus) {
			this.isPlus = client.isPlus;
		}
		if (client.isSub) {
			this.isSub = client.isSub;
		}
		if (client.isBan) {
			this.isBan = client.isBan;
		}
	}
}

module.exports.Client = Client;
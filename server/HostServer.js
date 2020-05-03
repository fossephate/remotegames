const socketio = require("socket.io");
const Client = require("./client.js").Client;

function customSetInterval(func, time) {
	let lastTime = Date.now();
	let lastDelay = time;
	let out = {};

	function tick() {
		func();
		let now = Date.now();
		let dTime = now - lastTime;

		lastTime = now;
		lastDelay = time + lastDelay - dTime;
		out.id = setTimeout(tick, lastDelay);
	}
	out.id = setTimeout(tick, time);
	return out;
}

// export class Host {
class HostServer {
	constructor(options) {
		this.accountConnection = options.socket;
		this.port = options.port;
		this.io = new socketio({
			// perMessageDeflate: false,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.alive = true;

		// host info:
		this.hostUserid = options.hostUserid || null;
		this.hostUsername = options.hostUsername || null;
		this.hostUser = {};

		// where to find the video feed (sent to clients on connect):
		this.videoIP = options.videoIP;
		this.videoPort = options.videoPort;
		this.streamKey = options.streamKey;
		this.secret = options.secret;

		this.clients = [];
		this.useridToSocketidMap = {}; // so we can find the Client object when we only have the userid (quickly)
		this.accountMap = {}; // this server's copy of the accountMap

		// settings / state:
		this.normalTime = 1000 * 60 * 2; // 2 minutes
		this.subTime = this.normalTime * 2.5;
		this.forfeitTime = options.streamSettings.forfeitTime || 1000 * 15; // 15 seconds
		this.tempBanTime = 5 * 1000 * 60; // 5 minutes
		this.messageLogLength = 5;
		this.messageLog = [];
		this.locked = false;
		this.plusLock = false;
		this.IPToGuestNumberMap = {};

		// host set settings:
		this.streamSettings = options.streamSettings;
		this.keyboardEnabled = options.streamSettings.keyboardEnabled;
		this.mouseEnabled = options.streamSettings.mouseEnabled;
		this.controllerCount = options.streamSettings.controllerCount;
		this.playerCount = options.streamSettings.playerCount;
		this.playerCount = this.playerCount === 0 ? 1 : this.playerCount;

		this.turnLengths = [];
		this.forfeitLengths = [];
		this.turnStartTimes = [];
		this.forfeitStartTimes = [];
		this.forfeitTimers = [];
		this.turnExpirations = [];
		this.forfeitExpirations = [];
		this.controlQueues = [];

		for (let i = 0; i < this.playerCount; i++) {
			this.turnLengths.push(this.normalTime);
			this.forfeitLengths.push(this.forfeitTime);
			this.turnStartTimes.push(Date.now());
			this.forfeitStartTimes.push(Date.now());
			this.forfeitTimers.push(null);
			this.turnExpirations.push(0);
			this.forfeitExpirations.push(0);
			this.controlQueues.push([]);
		}

		// bind functions:
		this.everySecond = this.everySecond.bind(this);
		this.every4Seconds = this.every4Seconds.bind(this);
		this.every5Seconds = this.every5Seconds.bind(this);
		this.every30Seconds = this.every30Seconds.bind(this);
		this.addTimePlayed = this.addTimePlayed.bind(this);
		this.filterGuests = this.filterGuests.bind(this);
	}

	joinQueue = (client, cNum) => {
		// return if locked && not a mod:
		if (this.locked && !client.roles.mod) {
			return;
		}
		// return if pluslocked && not a plus:
		if (this.plusLocked && !client.roles.plus) {
			return;
		}

		// make sure it's a valid cNum:
		if (typeof cNum !== "number" || cNum < 0 || cNum >= this.playerCount) {
			return;
		}

		// check to make sure user isn't already in another queue
		for (let i = 0; i < this.playerCount; i++) {
			if (this.controlQueues[i].indexOf(client.userid) > -1) {
				this.leaveQueue(client, i);
			}
		}

		if (typeof this.controlQueues[cNum] == "undefined") {
			return;
		}

		// check to make sure they aren't in this queue (so we don't push it more than once)
		// done above^
		this.controlQueues[cNum].push(client.userid);
		this.io.emit("controlQueues", this.controlQueues);

		// reset timers when you join the queue & you're the only person in the queue:
		if (this.controlQueues[cNum].length === 1) {
			this.resetTimers(client.userid, cNum);
		}
	};

	leaveQueue = (client, cNum) => {
		// make sure it's a valid cNum:
		if (typeof cNum !== "number" || cNum < 0 || cNum >= this.playerCount) {
			return;
		}

		// return if not in the queue:
		let index = this.controlQueues[cNum].indexOf(client.userid);
		if (index === -1) {
			return;
		}
		this.controlQueues[cNum].splice(index, 1);
		this.io.emit("controlQueues", this.controlQueues);

		if (this.controlQueues[cNum].length >= 1) {
			if (index === 0) {
				this.resetTimers(client.userid, cNum);
			}
		}

		if (index === 0) {
			// reset the controller:
			this.io.emit("controllerState", {
				cNum: cNum,
				btns: 0,
				axes: [0, 0, 0, 0, 0, 0],
			});
		}

		// emit turn times left:
		this.calculateTurnExpirations();
	};

	init() {
		// setup interval functions:
		setInterval(this.everySecond, 1000);
		setInterval(this.every4Seconds, 4000);
		setInterval(this.every5Seconds, 5000);
		setInterval(this.every30Seconds, 30000);
		customSetInterval(this.addTimePlayed, 5000);

		// get host info:
		this.getHostInfo();

		// listen to clients:
		this.io.listen(this.port, () => {
			console.log("Server listening at port %d", port);
		});

		this.io.on("connection", (socket) => {
			this.clients[socket.id] = new Client(socket);
			console.log(`#clients: ${Object.keys(this.clients).length} connected`);

			let client = this.clients[socket.id];

			if (!this.IPToGuestNumberMap[client.ip]) {
				this.IPToGuestNumberMap[client.ip] = `guest#${parseInt(Math.random() * 1000)}`;
			}
			this.clients[socket.id].username = this.IPToGuestNumberMap[client.ip];

			socket.on("authenticate", (data, cb) => {
				if (!cb) {
					console.log("no callback (authenticate)");
				}
				if (typeof cb != "function") {
					console.log("something went very wrong:");
					console.log(cb);
					return;
				}
				let client = this.clients[socket.id];
				// return if already authenticated:
				// if (client.authenticated) {
				// 	return;
				// }

				// send socket.id and auth token:
				this.accountConnection.emit(
					"authenticate",
					{
						socketid: socket.id,
						authToken: data.authToken,
						ip: client.ip,
						hostUserid: this.hostUserid,
						// todo:
						// usernameIndex: data.usernameIndex,
					},
					(data) => {
						// make sure they didn't disconnect:
						if (!this.clients[data.socketid]) {
							console.log("User disconnected before they could be authenticated.");
							return;
						}

						// check if it was successful:
						if (data.success) {
							// update local client to contain account server's info:
							this.clients[data.socketid].update(data.clientInfo);

							// remove from the local accountMap:
							this.filterGuests();
							this.io.emit("accountMap", this.accountMap);

							// emit to the client their info:
							let clientInfo = {
								userid: data.clientInfo.userid,
								username: data.clientInfo.username,
								validUsernames: data.clientInfo.validUsernames,
								connectedAccounts: data.clientInfo.connectedAccounts,
								timePlayed: data.clientInfo.timePlayed,
								roles: data.clientInfo.roles,
							};
							cb({ ...data, clientInfo: clientInfo });
						} else {
							// forward data to client:
							cb(data);
						}
					},
				);
			});

			// todo: forward this to the account server:
			socket.conn.on("packet", async (packet) => {
				if (packet.type !== "ping") {
					return;
				}
				let client = this.clients[socket.id];
				if (client && client.userid) {
					this.accountConnection.emit("keepAlive", {
						userid: client.userid,
						socketid: socket.id,
					});
				}
			});

			socket.on("disconnect", () => {
				// console.log("disconnected");

				let client = this.clients[socket.id];

				if (client) {
					this.accountConnection.emit("clientDisconnected", {
						socketid: socket.id,
						userid: client.userid,
						timePlayed: client.timePlayed,
					});

					// remove from account map:

					if (client.userid) {
						delete this.accountMap[client.userid];
					}
					if (this.accountMap[client.username]) {
						delete this.accountMap[client.username];
					}

					// remove from socketid map (if there):
					delete this.useridToSocketidMap[client.userid];
					// delete:
					delete this.clients[socket.id];
				}
				console.log(`#clients: ${Object.keys(this.clients).length} disconnected`);
			});

			/* CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
			socket.on("chatMessage", (data) => {
				let client = this.clients[socket.id];
				if (!client) {
					return;
				}
				if (typeof data === "object" && typeof data.text != "string") {
					return;
				} else {
					data.text = data.text.replace(/(\r\n\t|\n|\r\t)/gm, "");
				}
				if (data.text.length > 400) {
					return;
				}
				// return if banned:
				// if (client.roles.banned) {
				// 	socket.emit("banned");
				// 	return;
				// }

				let msgObj = {
					userid: client.userid,
					username: client.username,
					time: Date.now(),
					text: data.text,
					isReplay: false,
					roles: client.roles,
					banned: client.roles.banned,
				};

				if (socket.rooms.host) {
					msgObj.roles = ["mod"];
				}

				this.sendMessage(msgObj);
				this.parseMessage(client, msgObj);
			});

			/* INPUT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
			socket.on("inputState", (data) => {
				let client = this.clients[socket.id];
				if (!client || client.userid == null) {
					return;
				}

				let cNum = data.cNum;
				let btns = data.btns;

				// make sure it's a valid cNum:
				if (typeof cNum !== "number" || cNum < 0 || cNum >= this.playerCount) {
					console.log(`weird cNum: ${cNum}`);
					return;
				}

				if (this.controlQueues[cNum].length === 0) {
					return;
				}

				if (client.userid != this.controlQueues[cNum][0]) {
					console.log("not the current player");
					return;
				}

				// return if locked && not a mod:
				if (this.locked && !client.roles.mod) {
					return;
				}

				// return if pluslocked && not a plus:
				if (this.plusLocked && !client.roles.plus) {
					return;
				}

				// return if banned:
				if (client.roles.banned) {
					socket.emit("banned");
					return;
				}

				// sub perk:
				if (client.roles.sub) {
					this.turnLengths[cNum] = this.normalTime * 2;
				} else {
					this.turnLengths[cNum] = this.normalTime;
				}

				// reset forfeit timer:
				this.forfeitStartTimes[cNum] = Date.now();

				let valid = true;
				if ((btns & (1 << 8)) != 0 && !client.roles.mod) {
					valid = false;
				}
				if ((btns & (1 << 16)) != 0 && !client.roles.plus) {
					valid = false;
				}
				if ((btns & (1 << 17)) != 0 && !client.roles.mod) {
					valid = false;
				}

				if (!valid) {
					return;
				}

				let obj = {
					cNum: data.cNum,
					btns: data.btns,
					axes: data.axes,
				};

				// if player 1 & mouse || keyboard is enabled
				// send keyboard &|| mouse state
				if (cNum === 0 && (this.mouseEnabled || this.keyboardEnabled)) {
					if (this.mouseEnabled) {
						obj = { ...obj, mouse: data.mouse };
						this.io.emit("mouseState", data.mouse);
					}
					if (this.keyboardEnabled) {
						obj = { ...obj, keys: data.keys };
						this.io.emit("keyboardState", { keys: data.keys });
					}
				}

				this.io.emit("controllerState", obj);
			});

			/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
			socket.on("joinQueue", (cNum) => {
				let client = this.clients[socket.id];
				if (client == null || client.userid == null) {
					return;
				}

				// return if banned
				if (client.roles.banned) {
					socket.emit("banned");
					return;
				}

				this.joinQueue(client, cNum);
			});

			socket.on("leaveQueue", (cNum) => {
				let client = this.clients[socket.id];
				if (client == null || client.userid == null) {
					return;
				}

				this.leaveQueue(client, cNum);
			});

			// lagless1 - 2.0:
			socket.on("video", (data) => {
				this.io.emit("video", data);
			});

			/* AUDIO 4.0 @@@@@@@@@@@@@@@@@@@@@@@@ */
			socket.on("d", (data) => {
				data["sid"] = socket.id;
				socket.to("audio4").emit("d", data); //Send to all but the sender
			});

			/* LATENCY @@@@@@@@@@@@@@@@@@@@@@@@ */
			// socket.on("ping2", () => {
			// 	socket.emit("pong2");
			// });
			socket.on("ping2", (startTime, cb) => {
				cb(startTime);
			});

			/* ROOMS @@@@@@@@@@@@@@@@@@@@@@@@ */
			socket.on("leave", (room) => {
				socket.leave(room);
			});

			socket.on("join", (room) => {
				let secureList = ["host"];
				if (secureList.indexOf(room) > -1) {
					return;
				}
				socket.join(room);
			});

			socket.on("joinSecure", (data) => {
				if (data.password === this.streamKey || data.password === this.secret) {
					socket.join(data.room);
				}
			});

			socket.on("hostAuthenticate", (data) => {
				// join the host room if they have the streamKey
				if (data.streamKey === this.streamKey) {
					console.log("host authenticated.");
					socket.join("host");
					let client = this.clients[socket.id];
					if (!client) {
						console.log("no host client object!");
						return;
					}
					this.clients[socket.id].userid = "HostBot";
					this.clients[socket.id].username = "HostBot";
				} else {
					console.log("ERROR: wrong streamKey!");
					console.log(data.streamKey, this.streamKey);
				}
			});

			socket.on("botMessage", (data) => {
				if (typeof data != "object") {
					return;
				} else if (typeof data.text === "string") {
					data.text = data.text.replace(/(\r\n\t|\n|\r\t)/gm, "");
				}

				// check if it's coming from the host controller:
				if (socket.rooms.host) {
					let msgObj = {
						userid: "HostBot",
						username: "HostBot",
						time: Date.now(),
						text: data.text,
						isReplay: false,
					};
					this.sendMessage(msgObj);
				}
			});

			/* SEND ON CONNECT @@@@@@@@@@@@@@@@@@@@@@@@ */

			// video feed location:
			socket.emit("videoInfo", { ip: this.videoIP, port: this.videoPort });

			// settings:
			this.filterGuests();
			socket.emit("accountMap", this.accountMap);
			socket.emit("controlQueues", this.controlQueues);
			socket.emit("turnLengths", {
				turnLengths: this.turnLengths,
				forfeitLengths: this.forfeitLengths,
			});
			socket.emit("turnStartTimes", {
				turnStartTimes: this.turnStartTimes,
				forfeitStartTimes: this.forfeitStartTimes,
			});
			this.removeOldMessages();
			for (let i = 0; i < this.messageLog.length; i++) {
				socket.emit("chatMessage", { ...this.messageLog[i], isReplay: true });
			}
		});

		// do stuff based on the account server's responses:

		this.accountConnection.on("accountMap", (data) => {
			this.accountMap = data;

			this.filterGuests();

			this.io.emit("accountMap", this.accountMap);
		});
	}

	filterGuests() {
		// fill in accountMap's for guest accounts:

		for (let key in this.accountMap) {
			if (/guest/.test(key)) {
				delete this.accountMap[key];
			}
		}

		for (let socketid in this.clients) {
			let userid = this.clients[socketid].userid;
			let username = this.clients[socketid].username;

			if (!userid && username !== "HostBot") {
				this.accountMap[username] = { userid: username, username: username };
			}
		}
	}

	removeOldMessages = () => {
		// keep only #messageLogLength
		while (this.messageLog.length > this.messageLog) {
			this.messageLog.shift();
		}

		// remove messages more than an hour old:
		for (let i = 0; i < this.messageLog.length; i++) {
			if (Date.now() - this.messageLog[i].time > 1000 * 60 * 60) {
				this.messageLog.splice(i, 1);
			}
		}
	};

	sendMessage(msgObj) {
		// store for when people refresh:
		this.messageLog.push(msgObj);

		this.removeOldMessages();

		// send to everyone:
		this.io.emit("chatMessage", msgObj);
	}

	parseMessage(client, message) {
		// for replies:
		let msgObj = {
			userid: "HostBot",
			username: "HostBot",
			time: Date.now(),
			isReplay: false,
		};
		let reg = null;
		let results = null;

		reg = /^!(un)?ban ([a-zA-Z0-9]+)$/;
		results = reg.exec(message.text);
		// ban / unban:
		if (results) {
			if (!client.roles.mod) {
				msgObj.text = "You need to be a mod to use this command!";
				this.sendMessage(msgObj);
				console.log("not a mod");
				return;
			}
			let un = !!results[1];
			let userid = results[2];
			this.accountConnection.emit(
				"ban",
				{
					isBanned: !un,
					issuerUserid: client.userid,
					hostUserid: this.hostUserid,
					clientUserid: userid,
				},
				(data) => {
					if (data.success) {
						msgObj.text = `Successfully ${un ? "un" : ""}banned user.`;
						this.sendMessage(msgObj);
					} else {
						msgObj.text = `Something went wrong while trying to ${
							un ? "un" : ""
						}ban the user.`;
						this.sendMessage(msgObj);
					}
				},
			);
		}

		// lock / unlock:
		reg = /^!(un)?lock$/;
		results = reg.exec(message.text);
		if (results) {
			let un = !!results[1];
			if (
				(!un && !client.roles.mod) ||
				(un && !(client.roles.mod || client.roles.plus))
			) {
				msgObj.text = "You need permission to use this command!";
				this.sendMessage(msgObj);
				console.log("not a mod / plus");
				return;
			}

			if (!un) {
				this.locked = true;
				// clear queues:
				for (let i = 0; i < this.controlQueues.length; i++) {
					this.controlQueues[i] = [];
				}
				this.io.emit("controlQueues", this.controlQueues);
			} else {
				this.locked = false;
			}
			msgObj.text = `Successfully ${this.locked ? "" : "un"}locked stream.`;
			this.sendMessage(msgObj);
		}

		// pluslock:
		reg = /^!(un)?pluslock$/;
		results = reg.exec(message.text);
		if (results) {
			if (!client.roles.mod) {
				msgObj.text = "You need to be a mod to use this command!";
				this.sendMessage(msgObj);
				console.log("not a mod");
				return;
			}
			let un = !!results[1];
			if (!un) {
				this.plusLocked = true;
				// clear queues:
				for (let i = 0; i < this.controlQueues.length; i++) {
					this.controlQueues[i] = [];
				}
				this.io.emit("controlQueues", this.controlQueues);
			} else {
				this.plusLocked = false;
			}
			msgObj.text = `Successfully ${this.plusLocked ? "" : "un"}pluslocked stream.`;
			this.sendMessage(msgObj);
		}

		// change status:
		reg = /^!(un)?(mod|plus|sub) ([a-zA-Z0-9]+)$/;
		results = reg.exec(message.text);
		if (results) {
			if (!client.roles.mod) {
				msgObj.text = "You need to be a mod to use this command!";
				this.sendMessage(msgObj);
				console.log("not a mod");
				return;
			}
			let un = !!results[1];
			let role = results[2];
			let userid = results[3];

			this.accountConnection.emit(
				"changeAccountStatus",
				{
					issuerUserid: client.userid,
					hostUserid: this.hostUserid,
					change: {
						type: !un ? "add" : "remove",
						role: role,
						userid: userid,
					},
				},
				(data) => {
					if (data.success) {
						msgObj.text = "Successfully changed account status.";
						this.sendMessage(msgObj);
					} else {
						msgObj.text = `Something went wrong while trying to change the user's status: ${data.reason}.`;
						this.sendMessage(msgObj);
					}
				},
			);
		}

		// change status 2:
		reg = /^!changestatus (add|remove) (plus|mod|sub|banned) ([a-zA-Z0-9]+)$/;
		results = reg.exec(message.text);
		if (results) {
			if (!client.roles.mod) {
				msgObj.text = "You need to be a mod to use this command!";
				this.sendMessage(msgObj);
				console.log("not a mod");
				return;
			}

			let addOrRemove = results[1] === "add";
			let role = results[2];
			let userid = results[3];

			this.accountConnection.emit(
				"changeAccountStatus",
				{
					issuerUserid: client.userid,
					hostUserid: this.hostUserid,
					change: {
						type: addOrRemove ? "add" : "remove",
						role: role,
						userid: userid,
					},
				},
				(data) => {
					if (data.success) {
						msgObj.text = "Successfully changed account status.";
						this.sendMessage(msgObj);
					} else {
						msgObj.text = `Something went wrong while trying to change the user's status: ${data.reason}.`;
						this.sendMessage(msgObj);
					}
				},
			);
		}
	}

	stop() {
		console.log("closing connection");
		this.io.emit("stop");
		this.io.close();
	}

	// finds a client in this.clients with a specific userid
	// returns -1 if not found
	findClientByUserid(userid) {
		let socketid = this.useridToSocketidMap[userid];
		if (socketid != null && this.clients[socketid] != null) {
			return socketid;
		}
		let index = -1;
		for (let key in this.clients) {
			if (this.clients[key].userid === userid) {
				index = this.clients[key].id;
				this.useridToSocketidMap[userid] = index;
				return index;
			}
		}
		return index;
	}

	forfeitTurn(userid, cNum) {
		// forfeit turn:
		let index = this.controlQueues[cNum].indexOf(userid);
		if (index == -1) {
			console.log("userid not found.");
			return;
		}

		this.controlQueues[cNum].splice(index, 1);
		this.io.emit("controlQueues", this.controlQueues);
		// reset the controller
		this.io.emit("controllerState", {
			cNum: cNum,
			btns: 0,
			axes: [0, 0, 0, 0, 0, 0],
		});

		// reset the timers if the person forfeiting is first in line:
		if (index === 0) {
			this.resetTimers(this.controlQueues[cNum][0], cNum);
		}

		// sub perk:
		index = this.findClientByUserid(this.controlQueues[cNum][0]);
		let client = this.clients[index];
		if (client != null && client.userid != null) {
			if (client.isSub) {
				this.turnLengths[cNum] = this.normalTime * 2;
			} else {
				this.turnLengths[cNum] = this.normalTime;
			}
		}

		// emit turn times left:
		this.calculateTurnExpirations();
	}

	calculateTurnExpirations() {
		// calculate the turn time left for each player
		for (let i = 0; i < this.turnLengths.length; i++) {
			if (this.controlQueues[i].length == 0) {
				this.turnExpirations[i] = this.turnLengths[i];
				this.forfeitExpirations[i] = this.forfeitLengths[i];
				continue;
			}
			let currentTime = Date.now();
			let elapsedTime = currentTime - this.turnStartTimes[i];
			let timeLeft = this.turnLengths[i] - elapsedTime;
			let elapsedTimeSinceLastMove = currentTime - this.forfeitStartTimes[i];
			let timeLeftForfeit = this.forfeitLengths[i] - elapsedTimeSinceLastMove;
			this.turnExpirations[i] = timeLeft;
			this.forfeitExpirations[i] = timeLeftForfeit;
		}

		// create current players list:
		let currentPlayers = [];
		for (let i = 0; i < this.controlQueues.length; i++) {
			currentPlayers.push(this.controlQueues[i][0]);
		}

		// remove waitlisted people from viewer list:

		this.io.emit("currentPlayers", currentPlayers);
	}

	// todo: only send the diff of what changed / make it only reset the cNum
	emitTurnStartTimes() {
		this.io.emit("turnStartTimes", {
			turnStartTimes: this.turnStartTimes,
			forfeitStartTimes: this.forfeitStartTimes,
		});
	}

	emitForfeitStartTimes() {
		this.io.emit("turnStartTimes", {
			forfeitStartTimes: this.forfeitStartTimes,
		});
	}

	resetTimers(userid, cNum) {
		// sub perk:
		let index = this.findClientByUserid(this.controlQueues[cNum][0]);
		let client = this.clients[index];
		if (client != null && client.userid != null) {
			if (client.isSub) {
				this.turnLengths[cNum] = this.normalTime * 2;
			} else {
				this.turnLengths[cNum] = this.normalTime;
			}
		}

		// reset turn timer:
		this.turnStartTimes[cNum] = Date.now();

		// reset forfeit timer:
		this.forfeitStartTimes[cNum] = Date.now();

		this.emitTurnStartTimes();
		this.emitForfeitStartTimes();
	}

	moveLine(cNum) {
		// if the queue length is more than one person
		// move the line:
		if (this.controlQueues[cNum].length > 1) {
			this.controlQueues[cNum].shift();
			// reset the controller
			this.io.emit("controllerState", {
				cNum: cNum,
				btns: 0,
				axes: [0, 0, 0, 0, 0, 0],
			});
			this.io.emit("controlQueues", this.controlQueues);
		}

		// sub perk:
		let index = this.findClientByUserid(this.controlQueues[cNum][0]);
		let client = this.clients[index];
		if (client != null && client.userid != null) {
			if (client.isSub) {
				this.turnLengths[cNum] = this.normalTime * 2;
			} else {
				this.turnLengths[cNum] = this.normalTime;
			}
		}

		// reset turn time:
		this.turnStartTimes[cNum] = Date.now();
		this.emitTurnStartTimes();

		// if the queue length is more than one person
		if (this.controlQueues[cNum].length > 1) {
			// reset forfeit timer:
			this.forfeitStartTimes[cNum] = Date.now();
			this.emitForfeitStartTimes();
		}
	}

	getHostInfo() {
		let obj;

		if (this.hostUserid) {
			obj = { userid: this.hostUserid };
		} else {
			obj = { username: this.hostUsername };
		}

		this.accountConnection.emit("getHostInfo", obj, (data) => {
			if (!data.success) {
				console.log("something went wrong, getHostInfo");
				console.log(data.reason);
				return;
			}

			this.hostUser = data.account;
			this.hostUserid = ("" + this.hostUser._id).trim();
		});
	}

	// every x:
	everySecond() {
		// emit turn times left:
		this.calculateTurnExpirations();
		for (let i = 0; i < this.forfeitExpirations.length; i++) {
			if (this.forfeitExpirations[i] < -150 && this.controlQueues[i][0] != null) {
				this.forfeitTurn(this.controlQueues[i][0], i);
			}
		}
		for (let i = 0; i < this.turnExpirations.length; i++) {
			if (this.turnExpirations[i] < -150) {
				this.moveLine(i);
			}
		}
	}

	every4Seconds() {
		this.io.to("host").emit("stayConnected");
	}

	every5Seconds() {
		this.io.emit("turnLengths", {
			turnLengths: this.turnLengths,
			forfeitLengths: this.forfeitLengths,
		});
		this.emitForfeitStartTimes();
	}

	every30Seconds() {
		this.io.emit("accountMap", this.accountMap);
		// this.io.emit("bannedIPs", this.bannedIPs);
		this.io.emit("waitlist", {
			waitlist: this.waitlist,
		});
		this.io.emit("serverTime", Date.now());
		this.getHostInfo();
	}

	// add to timePlayed:
	addTimePlayed() {
		for (let i = 0; i < this.controlQueues.length; i++) {
			let userid = this.controlQueues[i][0];
			if (userid == null) {
				continue;
			}
			let index = this.findClientByUserid(userid);
			if (index == -1) {
				continue;
			}
			this.clients[index].timePlayed += 5;
		}
	}
}

module.exports.HostServer = HostServer;

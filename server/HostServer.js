// import Client from "./client.js";
const socketio = require("socket.io");
const Client = require("./client.js").Client;

const config = require("./config.js");

function everySecond(self) {
	// for (let i = 0; i < 5; i++) {
	// 	this.io.in("stream" + i).clients((error, clientIDs) => {
	// 		if (error) {
	// 			throw error;
	// 		}
	// 		laglessClientIds[i] = clientIDs;
	// 	});
	// }

	// create viewer list:
	// for each stream:
	// for (let i = 0; i < laglessClientIds.length; i++) {
	// 	// reset:
	// 	laglessClientUserids[i] = [];
	// 	// for each user:
	// 	for (let j = 0; j < laglessClientIds[i].length; j++) {
	// 		let client = clients[laglessClientIds[i][j]];
	// 		if (client && client.userid) {
	// 			laglessClientUserids[i].push(client.userid);
	// 		}
	// 	}
	// }

	// waitlist = [];
	//
	// let loggedInClientIDs = [];
	//
	// // get list of logged in clients:
	// for (let key in clients) {
	// 	let client = clients[key];
	// 	if (
	// 		client != null &&
	// 		client.userid != null &&
	// 		clients[client.id] != null &&
	// 		client.id != null
	// 	) {
	// 		loggedInClientIDs.push(client.id);
	// 	}
	// 	// todo: remove invalid users if they exist:
	// }
	//
	// // console.log(clients);
	//
	// // check if site is over capacity:
	// if (loggedInClientIDs.length >= siteCapacity) {
	// 	// the number of people we need to put into the waitlist:
	// 	let numberOfPeopleToWaitlist = loggedInClientIDs.length - siteCapacity;
	// 	// remove anyone exempt by being in a queue, with a position less than minQueuePositions:
	// 	// loop through control queues:
	//
	// 	// make a copy to modify:
	// 	let loggedInClientIDsCopy = loggedInClientIDs.slice(0);
	//
	// 	for (let i = 0; i < controlQueues.length; i++) {
	// 		// check if any of the users are in the queue:
	//
	// 		// modifies copy:
	// 		for (let j = 0; j < loggedInClientIDs.length; j++) {
	// 			console.log(loggedInClientIDs[j]);
	// 			let userid = clients[loggedInClientIDs[j]].userid;
	// 			// if they're in pos < minQueuePosition, exempt:
	// 			if (controlQueues[i].indexOf(userid) < minQueuePosition) {
	// 				// remove from loggedInClientIDs
	// 				loggedInClientIDsCopy.splice(j, 1);
	// 			}
	// 		}
	// 		// modifies original:
	// 		// let j = loggedInClientIDs.length;
	// 		// while (j--) {
	// 		// 	let userid = clients[loggedInClientIDs[j]].userid;
	// 		// 	// if they're in pos < minQueuePosition, exempt:
	// 		// 	if (controlQueues[i].indexOf(userid) < minQueuePosition) {
	// 		// 		// remove from loggedInClientIDs
	// 		// 		loggedInClientIDs.splice(j, 1);
	// 		// 	}
	// 		// }
	// 	}
	//
	// 	// now we have a list of non-auto-exempt people:
	// 	// sort them by the time that they joined, and exempt more people until the queue limit is met
	//
	// 	// get the actual client objects:
	// 	let nonExemptClients = [];
	// 	for (let i = 0; i < loggedInClientIDsCopy.length; i++) {
	// 		let socketid = loggedInClientIDsCopy[i];
	// 		if (clients[socketid].userid != null) {
	// 			laglessXClients.push(clients[socketid]);
	// 		} else {
	// 			console.log("this shouldn't have happened.");
	// 		}
	// 	}
	//
	// 	// sort by time joined:
	// 	nonExemptClients = _.sortBy(nonExemptClients, "joinTime");
	//
	// 	// pick the first X to be exempted:
	// 	while (nonExemptClients.length > numberOfPeopleToWaitlist) {
	// 		nonExemptClients.shift();
	// 	}
	//
	// 	// our final waitlist is everyone in nonExemptClients
	// 	for (let i = 0; i < nonExemptClients.length; i++) {
	// 		let client = nonExemptClients[j];
	// 		if (client != null && client.userid != null) {
	// 			waitlist.push(client.userid);
	// 		} else {
	// 			console.log("this shouldn't have happened2.");
	// 		}
	// 	}
	// }

	// emit turn times left:
	self.calculateTurnExpirations();

	// if (!this.queuesLocked) {
	for (let i = 0; i < self.forfeitExpirations.length; i++) {
		if (self.forfeitExpirations[i] < -450 && self.controlQueues[i][0] != null) {
			self.forfeitTurn(self.controlQueues[i][0], i);
		}
	}

	for (let i = 0; i < self.turnExpirations.length; i++) {
		if (self.turnExpirations[i] < -450) {
			self.moveLine(i);
		}
	}
	// }
}

function every30Seconds(self) {
	self.io.emit("accountMap", self.accountMap);
	self.io.emit("bannedIPs", self.bannedIPs);
	self.io.emit("waitlist", {
		waitlist: self.waitlist,
	});
	self.io.emit("serverTime", Date.now());
}

function every5Seconds(self) {
	self.io.emit("turnLengths", {
		turnLengths: self.turnLengths,
		forfeitLengths: self.forfeitLengths,
	});
	// self.io.emit("viewers", {
	// 	viewers: [
	// 		laglessClientUserids[0],
	// 		laglessClientUserids[1],
	// 		laglessClientUserids[2],
	// 		laglessClientUserids[3],
	// 		laglessClientUserids[4],
	// 	],
	// });
	self.emitForfeitStartTimes();
}

function every4Seconds(self) {
	self.io.to("controller").emit("stayConnected");
}

// setInterval(() => {
// 	io.to("controller").emit("stayConnected");
// }, 4000);

// add to timePlayed:
function addTimePlayed() {
	for (let i = 0; i < controlQueues.length; i++) {
		let controlQueue = controlQueues[i];
		let userid = controlQueues[i][0];
		if (userid == null) {
			continue;
		}
		let index = findClientByUserid(userid);
		if (index == -1) {
			continue;
		}
		clients[index].timePlayed += 1;
	}
}
function customSetInterval(func, time) {
	let lastTime = Date.now(),
		lastDelay = time,
		outp = {};
	function tick() {
		func();
		let now = Date.now(),
			dTime = now - lastTime;

		lastTime = now;
		lastDelay = time + lastDelay - dTime;
		outp.id = setTimeout(tick, lastDelay);
	}
	outp.id = setTimeout(tick, time);
	return outp;
}
// let timer = customSetInterval(addTimePlayed, 1000);

// export class Host {
class HostServer {
	constructor(port, accountServerConn) {
		// this.hostid = hostid;
		this.port = port;
		this.io = new socketio({
			// perMessageDeflate: false,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});
		this.accountServerConn = accountServerConn;

		// where to find the video feed (sent to clients on connect):
		this.videoIP = null;
		this.videoPort = null;

		this.clients = [];
		this.useridToSocketidMap = {}; // so we can find the Client object when we only have the userid (quickly)
		this.accountMap = {}; // this server's copy of the accountMap

		// settings / state:
		this.normalTime = 1000 * 60 * 2; // 2 minutes
		this.subTime = this.normalTime * 2.5;
		this.forfeitTime = 1000 * 15; // 15 seconds
		this.tempBanTime = 5 * 1000 * 60; // 5 minutes
		this.numPlayers = 8;
		this.numberOfLastFewMessages = 5;
		this.lastFewMessages = [];

		this.locked = false;

		this.turnLengths = [];
		this.forfeitLengths = [];
		this.turnStartTimes = [];
		this.forfeitStartTimes = [];
		this.moveLineTimers = [];
		this.forfeitTimers = [];
		this.turnExpirations = [];
		this.forfeitExpirations = [];
		this.controllerList = [];
		this.controlQueues = [];

		for (let i = 0; i < this.numPlayers; i++) {
			this.turnLengths.push(this.normalTime);
			this.forfeitLengths.push(this.forfeitTime);
			this.turnStartTimes.push(Date.now());
			this.forfeitStartTimes.push(Date.now());
			this.moveLineTimers.push(null);
			this.forfeitTimers.push(null);
			this.turnExpirations.push(0);
			this.forfeitExpirations.push(0);
			this.controllerList.push(i);
			this.controlQueues.push([]);
		}
	}

	init(videoIP, videoPort) {
		this.videoIP = videoIP;
		this.videoPort = videoPort;

		// setup interval functions:
		setInterval(everySecond, 1000, this);
		setInterval(every4Seconds, 4000, this);
		setInterval(every5Seconds, 5000, this);
		setInterval(every30Seconds, 30000, this);

		this.io.listen(this.port, () => {
			console.log("Server listening at port %d", port);
		});

		// listen to clients:
		this.io.on("connection", (socket) => {
			this.clients[socket.id] = new Client(socket);
			console.log(`#clients: ${Object.keys(this.clients).length}`);

			socket.on("authenticate", (data) => {
				let client = this.clients[socket.id];
				// return if already authenticated:
				if (client.authenticated) {
					return;
				}

				// send socket.id and auth token:
				this.accountServerConn.emit("authenticate", {
					socketid: socket.id,
					authToken: data.authToken,
					ip: client.ip,
				});
			});

			// todo: forward this to the account server:
			socket.conn.on("packet", async (packet) => {
				if (packet.type !== "ping") {
					return;
				}
				let client = this.clients[socket.id];
				// if (client && client.userid) {
				// 	await redisClient.setAsync(`users:${client.userid}`, socket.id, "XX", "EX", 30);
				// }
			});

			socket.on("disconnect", () => {
				// console.log("disconnected");

				let client = this.clients[socket.id];

				if (client) {
					this.accountServerConn.emit("clientDisconnected", {
						socketid: socket.id,
						userid: client.userid,
						timePlayed: client.timePlayed,
					});

					// remove from account map:
					// delete accountMap[client.userid];
					// remove from socketid map (if there):
					delete this.useridToSocketidMap[client.userid];
					// delete:
					delete this.clients[socket.id];
				}
				console.log(`#clients: ${Object.keys(this.clients).length}`);
			});

			/* CHAT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
			socket.on("chatMessage", (data) => {
				let client = this.clients[socket.id];
				if (client == null || client.userid == null) {
					return;
				}
				if (client.isBan) {
					socket.emit("banned");
					return;
				}
				if (data && typeof data.message != "string") {
					return;
				} else {
					data.message = data.message.replace(/(\r\n\t|\n|\r\t)/gm, "");
				}
				if (data.message.length > 400) {
					return;
				}
				let msgObj = {
					userid: client.userid,
					username: client.username,
					time: Date.now(),
					message: data.message,
					isReplay: false,
				};
				// store for when people refresh:
				this.lastFewMessages.push(msgObj);
				// keep only #numberOfLastFewMessages
				if (this.lastFewMessages.length > this.numberOfLastFewMessages) {
					this.lastFewMessages.shift();
				}
				// send to everyone:
				this.io.emit("chatMessage", msgObj);
			});

			/* INPUT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
			socket.on("sendControllerState", (data) => {
				let client = this.clients[socket.id];
				if (client == null || client.userid == null) {
					return;
				}

				let cNum = data.cNum;
				let btns = data.btns;
				let axes = data.axes;

				// make sure it's a valid cNum:
				if (this.controllerList.indexOf(cNum) == -1) {
					console.log("weird cNum1: " + cNum);
					return;
				}

				if (this.controlQueues[cNum] == null) {
					console.log("weird cNum2: " + cNum);
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
				if (this.locked && !client.isMod) {
					return;
				}
				// return if banned:
				if (client.isBan) {
					socket.emit("banned");
					return;
				}

				// sub perk:
				if (client.isSub) {
					this.turnLengths[cNum] = this.normalTime * 2;
				} else {
					this.turnLengths[cNum] = this.normalTime;
				}

				// reset forfeit timer:
				this.forfeitStartTimes[cNum] = Date.now();
				// emitForfeitStartTimes();

				let valid = true;
				// ((btns & (1 << n)) != 0);
				if ((btns & (1 << 8)) != 0 && !client.isMod) {
					valid = false;
				}
				if ((btns & (1 << 16)) != 0 && !client.isPlus) {
					valid = false;
				}
				if ((btns & (1 << 17)) != 0 && !client.isMod) {
					valid = false;
				}

				if (!valid) {
					return;
				}

				this.io.emit("controllerState", {
					cNum: data.cNum,
					btns: data.btns,
					axes: data.axes,
				});
			});

			/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
			socket.on("joinQueue", (cNum) => {
				let client = this.clients[socket.id];
				if (client == null || client.userid == null) {
					return;
				}
				// return if banned
				if (client.isBan) {
					socket.emit("banned");
					return;
				}
				// return if locked && not a mod:
				if (this.locked && !client.isMod) {
					return;
				}

				// make sure it's a valid cNum:
				if (this.controllerList.indexOf(cNum) == -1) {
					return;
				}

				// check to make sure user isn't already in another queue
				for (let i = 0; i < this.controllerList.length; i++) {
					let listNum = this.controllerList[i];
					if (this.controlQueues[listNum].indexOf(client.userid) > -1) {
						return;
					}
				}

				if (typeof this.controlQueues[cNum] == "undefined") {
					console.log("something weird happened.");
					console.log(cNum);
					return;
				}

				// check to make sure they aren't in this queue (so we don't push it more than once)
				// done above^
				this.controlQueues[cNum].push(client.userid);
				this.io.emit("controlQueues", this.controlQueues);

				// reset timers when you join the queue & you're the only person in the queue:
				if (this.controlQueues[cNum].length == 1) {
					this.resetTimers(client.userid, cNum);
				}
			});

			socket.on("leaveQueue", (cNum) => {
				let client = this.clients[socket.id];
				if (client == null || client.userid == null) {
					return;
				}

				// make sure it's a valid cNum:
				if (this.controllerList.indexOf(cNum) == -1) {
					return;
				}

				// return if not in the queue:
				let index = this.controlQueues[cNum].indexOf(client.userid);
				if (index == -1) {
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
			});

			/* WebRTC @@@@@@@@@@@@@@@@@@@@@@@@ */
			/* SIMPLEPEER */
			socket.on("hostPeerSignal", (data) => {
				this.io.emit("hostPeerSignal", data);
			});
			socket.on("clientPeerSignal", (data) => {
				this.io.emit("clientPeerSignal", { id: socket.id, data: data });
			});
			socket.on("requestAudio", (data) => {
				this.io.to("audioHost").emit("createNewPeer", { id: socket.id });
			});
			socket.on("hostPeerSignalReply", (data) => {
				this.io.to(data.id).emit("hostPeerSignal", data.data);
			});
			// video:
			socket.on("hostPeerSignalV", (data) => {
				this.io.emit("hostPeerSignalV", data);
			});
			socket.on("clientPeerSignalV", (data) => {
				this.io.emit("clientPeerSignalV", { id: socket.id, data: data });
			});
			socket.on("requestVideo", (data) => {
				this.io.to("videoHost").emit("createNewPeerV", { id: socket.id });
			});
			socket.on("hostPeerSignalReplyV", (data) => {
				this.io.to(data.id).emit("hostPeerSignalV", data.data);
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
				let client = this.clients[socket.id];
				let secureList = [
					"lagless1Host",
					"lagless2Host",
					"lagless3Host",
					"lagless4Host",
					"lagless5Host",
					"controller",
					"controller2",
				];
				if (secureList.indexOf(room) > -1) {
					return;
				}
				socket.join(room);
			});
			socket.on("joinSecure", (data, password) => {
				let myData = { room: "", password: "" };

				if (typeof password == "undefined") {
					myData.room = data.room;
					myData.password = data.password;
				} else if (typeof password != "undefined") {
					myData.room = data;
					myData.password = password;
				}

				if (myData.password === config.ROOM_SECRET) {
					let client = this.clients[socket.id];
					if (client.rooms.indexOf(myData.room) == -1) {
						client.rooms.push(myData.room);
					}
					socket.join(myData.room);
				}
			});

			socket.on("botMessage", (data) => {
				if (typeof data != "string") {
					return;
				} else {
					data = data.replace(/(\r\n\t|\n|\r\t)/gm, "");
				}
				// check if it's coming from the controller:
				if (this.clients[socket.id].rooms.indexOf("controller") > -1) {
					let msgObj = {
						userid: "TPNSbot",
						username: "TPNSbot",
						time: Date.now(),
						message: data,
						isReplay: false,
					};
					// store for when people refresh:
					this.lastFewMessages.push(msgObj);
					// keep only #numberOfLastFewMessages
					if (this.lastFewMessages.length > this.numberOfLastFewMessages) {
						this.lastFewMessages.shift();
					}
					this.io.emit("chatMessage", msgObj);
				}
			});

			/* SEND ON CONNECT @@@@@@@@@@@@@@@@@@@@@@@@ */

			// video feed location:
			socket.emit("videoInfo", { ip: this.videoIP, port: this.videoPort });

			// settings:
			// socket.emit("lagless2Settings", lagless2Settings);

			// socket.emit("bannedIPs", this.bannedIPs);
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
			for (let i = 0; i < this.lastFewMessages.length; i++) {
				socket.emit("chatMessage", { ...this.lastFewMessages[i], isReplay: true });
			}
		});

		// do stuff based on the account server's responses:
		this.accountServerConn.on("authenticated", (data) => {
			// make sure they didn't disconnect:
			if (!this.clients[data.socketid]) {
				console.log("User disconnected before they could be authenticated.");
				return;
			}

			// check if it was successful:
			if (data.success) {
				// update local client to contain account server's info:
				this.clients[data.socketid].update(data.clientInfo);

				// emit to the client their info:
				let clientInfo = {
					userid: data.clientInfo.userid,
					username: data.clientInfo.username,
					validUsernames: data.clientInfo.validUsernames,
					connectedAccounts: data.clientInfo.connectedAccounts,
					timePlayed: data.clientInfo.timePlayed,
					isMod: data.clientInfo.isMod,
				};

				this.io
					.to(data.socketid)
					.emit("authenticated", { success: true, clientInfo: clientInfo });
			} else {
				console.log(data);
				// let the client know it didn't get authenticated:
				this.io
					.to(data.socketid)
					.emit("authenticated", { success: false, reason: data.reason });
			}
		});

		this.accountServerConn.on("accountMap", (data) => {
			this.accountMap = data;
			this.io.emit("accountMap", this.accountMap);
		});
	}

	stop() {
		console.log("closing connection");
		this.io.emit("stop");
		this.io.disconnect();
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
			if (this.clients[key].userid == userid) {
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
			// console.log(userid);
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
}

module.exports.HostServer = HostServer;

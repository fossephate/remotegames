const io = require("socket.io")();
const ioClient = require("socket.io-client");
const port = 8100;
io.listen(port);
console.log("Server listening at port %d", port);

// import Host from "./host.js";
const Host = require("./host.js").Host;
// import Client from "./client.js";

// start connection with account server (same server in this case):
let accountServerConn = ioClient("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["websocket"],
});

io.set("transports", ["polling", "websocket", "xhr-polling", "jsonp-polling"]);

let host = new Host(io, accountServerConn);
host.init();

io.on("connection", (socket) => {
	// chat:
	socket.on("chatMessage", (data) => {
		let client = clients[socket.id];
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
		lastFewMessages.push(msgObj);
		// keep only #numberOfLastFewMessages
		if (lastFewMessages.length > numberOfLastFewMessages) {
			lastFewMessages.shift();
		}
		// send to everyone:
		io.emit("chatMessage", msgObj);
	});

	// send inputs:
	socket.on("sendControllerState", (data) => {
		let client = clients[socket.id];

		if (client == null || client.userid == null) {
			return;
		}

		let cNum = data.cNum;
		let btns = data.btns;
		let axes = data.axes;

		// make sure it's a valid cNum:
		if (controllerList.indexOf(cNum) == -1) {
			console.log("weird cNum1: " + cNum);
			return;
		}

		if (controlQueues[cNum] == null) {
			console.log("weird cNum2: " + cNum);
			return;
		}

		if (controlQueues[cNum].length === 0) {
			return;
		}

		if (client.userid != controlQueues[cNum][0]) {
			console.log("not the current player");
			return;
		}
		// return if locked && not a mod:
		if (locked && !client.is_mod) {
			return;
		}
		// return if banned:
		if (client.is_ban) {
			socket.emit("banned");
			return;
		}

		// reset afkTimer:
		afkTimer = Date.now();

		// sub perk:
		if (client.is_sub) {
			turnLengths[cNum] = normalTime * 2;
		} else {
			turnLengths[cNum] = normalTime;
		}

		// reset forfeit timer:
		forfeitStartTimes[cNum] = Date.now();
		// emitForfeitStartTimes();

		let valid = true;
		// ((btns & (1 << n)) != 0);
		if ((btns & (1 << 8)) != 0 && !client.is_mod) {
			valid = false;
		}
		if ((btns & (1 << 16)) != 0 && !client.is_plus) {
			valid = false;
		}
		if ((btns & (1 << 17)) != 0 && !client.is_mod) {
			valid = false;
		}

		if (!valid) {
			return;
		}

		io.emit("controllerState", {
			cNum: data.cNum,
			btns: data.btns,
			axes: data.axes,
		});
	});

	/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	socket.on("joinQueue", (cNum) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}
		// return if banned
		if (client.is_ban) {
			socket.emit("banned");
			return;
		}
		// return if locked && not a mod:
		if (locked && !client.is_mod) {
			return;
		}

		// make sure it's a valid cNum:
		if (controllerList.indexOf(cNum) == -1) {
			return;
		}

		// check to make sure user isn't already in another queue
		for (let i = 0; i < controllerList.length; i++) {
			let listNum = controllerList[i];
			if (controlQueues[listNum].indexOf(client.userid) > -1) {
				return;
			}
		}

		if (typeof controlQueues[cNum] == "undefined") {
			console.log("something weird happened.");
			console.log(cNum);
			return;
		}

		// check to make sure they aren't in this queue (so we don't push it more than once)
		// done above^
		controlQueues[cNum].push(client.userid);
		io.emit("controlQueues", controlQueues);

		// reset timers when you join the queue & you're the only person in the queue:
		if (controlQueues[cNum].length == 1) {
			resetTimers(client.userid, cNum);
		}
	});

	socket.on("leaveQueue", (cNum) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}

		// make sure it's a valid cNum:
		if (controllerList.indexOf(cNum) == -1) {
			return;
		}

		// return if not in the queue:
		index = controlQueues[cNum].indexOf(client.userid);
		if (index == -1) {
			return;
		}
		controlQueues[cNum].splice(index, 1);
		io.emit("controlQueues", controlQueues);

		if (controlQueues[cNum].length >= 1) {
			if (index === 0) {
				resetTimers(client.userid, cNum);
			}
		}

		if (index === 0) {
			// reset the controller:
			io.emit("controllerState", {
				cNum: cNum,
				btns: 0,
				axes: [restPos, restPos, restPos, restPos, 0, 0],
			});
		}

		// emit turn times left:
		calculateTurnExpirations();
	});

	/* STREAM COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	socket.on("restartServer", () => {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting the server");
		io.emit("quit");
		io.emit("chatMessage", {
			message: "restarting the server!",
			username: "TPNSbot",
			userid: "TPNSbot",
			time: Date.now(),
			isReplay: false,
		});
		// maybe unnecessary:
		setTimeout(() => {
			process.exit();
		}, 500);
	});

	/* LISTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	// 	socket.on("banlist", function(data) {
	// 		// check if it's coming from the controller:
	// 		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
	// 			banlist = data;
	// 		}
	// 		io.emit("banlist", banlist);
	// 	});

	socket.on("pluslist", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			pluslist = data;
		}
	});
	socket.on("modlist", (data) => {
		// check if it's coming from the controller:
		// if (checkIfClientIsInRoomByID(socket.id, "controller")) {
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			modlist = data;
		}
	});
	socket.on("sublist", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			sublist = data;
		}
	});

	/* OTHER COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("rickroll", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			io.emit("rickroll", data);
		}
	});
	socket.on("rainbow", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			io.emit("rainbow", data);
		}
	});
	socket.on("forceRefresh", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			io.emit("forceRefresh");
		} else {
			console.log("something bad happened 1.");
		}
	});
	socket.on("lock", (data) => {
		let client = clients[socket.id];
		let legit = false;
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			legit = true;
		}
		if (client.userid != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			locked = true;
			io.emit("lock");
			for (let i = 0; i < controlQueues.length; i++) {
				controlQueues[i] = [];
			}
			io.emit("controlQueues", controlQueues);
		}
	});
	socket.on("unlock", (data) => {
		let client = clients[socket.id];
		let legit = false;
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			legit = true;
		}
		if (client.userid != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			locked = false;
			io.emit("unlock");
		}
	});
	socket.on("lockqueues", (data) => {
		let client = clients[socket.id];
		let legit = false;
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			legit = true;
		}
		if (client.userid != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			queuesLocked = true;
			io.emit("lockqueues");
		}
	});
	socket.on("unlockqueues", (data) => {
		let client = clients[socket.id];
		let legit = false;
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			legit = true;
		}
		if (client.userid != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			queuesLocked = false;
			io.emit("unlockqueues");
		}
	});
	socket.on("kickFromQueue", (data) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}

		if (client.is_mod) {
			for (let i = 0; i < controlQueues.length; i++) {
				forfeitTurn(data, i);
			}
		}
	});
	socket.on("tempBan", (data) => {
		let client = clients[socket.id];

		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") == -1) {
			if (client == null || client.userid == null) {
				return;
			}

			if (!client.is_mod) {
				return;
			}
		}

		let index = findClientByUserid(data);
		client = clients[index];
		if (client == null || client.userid == null) {
			console.log("client was null.");
			return;
		}

		client.is_ban = true;
		for (let i = 0; i < controlQueues.length; i++) {
			forfeitTurn(client.userid, i);
		}
		setTimeout(
			(client) => {
				client.is_ban = false;
			},
			tempBanTime,
			client,
		);
	});
	socket.on("permaBan", (data) => {
		let client = clients[socket.id];

		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") == -1) {
			if (client == null || client.userid == null) {
				return;
			}

			if (!client.is_mod) {
				return;
			}
		}

		index = findClientByUserid(data);
		client = clients[index];
		if (client == null || client.userid == null) {
			return;
		}

		client.isBan = true;
		client.isPermaBan = true;
		for (let i = 0; i < controlQueues.length; i++) {
			forfeitTurn(client.userid, i);
		}

		// perma / IP ban:

		// get account:
		Account.findById(client.userid, (error, account) => {
			if (error) {
				throw error;
			}
			// account exists:
			if (account) {
				console.log(account);
				// update info:
				account.isBan = true;
				account.isPermaBan = true;

				// update banned IP's:
				redisClient.getAsync("bannedIPs").then((dbBannedIPs) => {
					let dataBaseIPs;
					if (dbBannedIPs == null) {
						console.log("Creating IP DB.");
						dataBaseIPs = bannedIPs;
					} else {
						dataBaseIPs = JSON.parse(dbBannedIPs);
					}
					for (let i = 0; i < account.IPs.length; i++) {
						if (dataBaseIPs.indexOf(account.IPs[i]) == -1) {
							dataBaseIPs.push(account.IPs[i]);
						}
					}
					// dataBaseIPs.push(client.ip);
					bannedIPs = dataBaseIPs;
					// re-stringify:
					let dataBaseIPsString = JSON.stringify(dataBaseIPs);
					// store back in database:
					// store account at userid location, at clients key:
					redisClient.setAsync("bannedIPs", dataBaseIPsString).then((success) => {
						console.log("stored banned IPs: " + success);
					});
				});

				// save:
				account.save((error) => {
					if (error) {
						throw error;
					}
				});
			}
		});
	});
	socket.on("unban", (data) => {
		let client = clients[socket.id];

		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") == -1) {
			if (client == null || client.userid == null) {
				return;
			}

			if (!client.is_mod) {
				return;
			}
		}

		index = findClientByUserid(data);
		client = clients[index];
		if (client == null || client.userid == null) {
			return;
		}

		client.isBan = false;
		client.isPermaBan = false;

		// unban:

		// get account:
		Account.findOne({ _id: client.userid }, (error, account) => {
			if (error) {
				throw error;
			}
			// account exists:
			if (account) {
				console.log(account);
				// update info:
				account.isBan = false;
				account.isPermaBan = false;

				// update banned IP's:
				redisClient.getAsync("bannedIPs").then((dbBannedIPs) => {
					let dataBaseIPs;
					if (dbBannedIPs == null) {
						console.log("Creating IP DB.");
						dataBaseIPs = bannedIPs;
					} else {
						dataBaseIPs = JSON.parse(dbBannedIPs);
					}
					// dataBaseIPs = dataBaseIPs.filter((el) => {
					// 	return !account.IPs.includes(el);
					// });
					if (database.indexOf(client.ip) > -1) {
						databaseIPs.splice(database.indexOf(client.ip), 1);
					}
					bannedIPs = dataBaseIPs;
					// re-stringify:
					let dataBaseIPsString = JSON.stringify(dataBaseIPs);
					// store back in database:
					// store account at uniqueID location, at clients key:
					redisClient.setAsync("bannedIPs", dataBaseIPsString).then((success) => {
						console.log("stored banned IPs: " + success);
					});
				});

				// save:
				account.save((error) => {
					if (error) {
						throw error;
					}
				});
			}
		});
	});
	socket.on("setTurnLength", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") == -1) {
			return;
		}
		for (let i = 0; i < turnLengths.length; i++) {
			turnLengths[i] = parseInt(data) || normalTime;
			normalTime = parseInt(data) || normalTime;
			// forfeitLengths[i] = parseInt(data) || 15000;
		}
	});
	socket.on("setForfeitLength", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") == -1) {
			return;
		}
		for (let i = 0; i < turnLengths.length; i++) {
			forfeitLengths[i] = parseInt(data) || 15000;
		}
	});
	socket.on("voteStarted", (data) => {
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			io.emit("voteStarted");
		} else {
			console.log("something bad happened vote.");
		}
	});
	socket.on("botMessage", (data) => {
		if (typeof data != "string") {
			return;
		} else {
			data = data.replace(/(\r\n\t|\n|\r\t)/gm, "");
		}
		// check if it's coming from the controller:
		if (clients[socket.id].rooms.indexOf("controller") > -1) {
			let msgObj = {
				userid: "TPNSbot",
				username: "TPNSbot",
				time: Date.now(),
				message: data,
				isReplay: false,
			};
			// store for when people refresh:
			lastFewMessages.push(msgObj);
			// keep only #numberOfLastFewMessages
			if (lastFewMessages.length > numberOfLastFewMessages) {
				lastFewMessages.shift();
			}
			io.emit("chatMessage", msgObj);
		}
	});

	/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
});

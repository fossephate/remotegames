const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8110;

const crypto = require("crypto");
const util = require("util");
const fs = require("fs");
const now = require("performance-now");

const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const twitchStrategy = require("passport-twitch").Strategy;
const request = require("request");
const handlebars = require("handlebars");

const config = require("./config.js");
const insertionSort = require("./tools.js").insertionSort;

const _ = require("lodash");

const TWITCH_CLIENT_ID = "mxpjdvl0ymc6nrm4ogna0rgpuplkeo";
const TWITCH_CLIENT_SECRET = config.TWITCH_CLIENT_SECRET;
const SESSION_SECRET = config.SESSION_SECRET;
const TWITCH_CALLBACK_URL = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/callback";

let lagless1Settings = {
	x1: 319 - 1920,
	y1: 61 + 360,
	x2: 319 + 1280 - 1920,
	y2: 61 + 720 + 360,
	fps: 15,
	quality: 60,
	scale: 30,
};
let lagless2Settings = {framerate: 30, videoBitrate: 1, scale: 960};
let currentLagless2Settings;
// let lagless5Settings = {framerate: 30, scale: 960, videoBitrate: 1};
let currentLagless5Settings;
let lagless5Settings = {
	x1: 0,
	y1: 0,
	x2: 1366,
	y2: 768,
	fps: 8,
	quality: 20,
	scale: 30,
};

let lastImage = "";
let usernameDB;
let localStorage;
let clients = [];
let channels = {};
let restartAvailable = true;
let lagless2ChangeAvailable = true;
let locked = false;
let wifiEnabled = false;
let maxPlayers = 5;

let controlQueues = [[], [], [], [], []];
let waitlists = [[], [], [], [], []];
let waitlistMaxes = [10, 10, 10, 10, 10];
let minQueuePositions = [5, 5, 5, 5, 5];


let banlist = [];
let modlist = [];
let pluslist = [];
let sublist = [];

// todo: combine:
laglessClientIds = [[], [], [], [], []];
laglessClientNames = [[], [], [], [], []];

let normalTime = 30000;
let subTime = 60000;

let turnDurations = [30000, 30000, 30000, 30000, 30000];
let timeTillForfeitDurations = [15000, 15000, 15000, 15000, 15000];
let turnStartTimes = [Date.now(), Date.now(), Date.now(), Date.now(), Date.now()];
let forfeitStartTimes = [Date.now(), Date.now(), Date.now(), Date.now(), Date.now()];
let moveLineTimers = [null, null, null, null, null];
let forfeitTimers = [null, null, null, null, null];
let currentTurnUsernames = [null, null, null, null, null];

let turnTimesLeft = [0, 0, 0, 0, 0];
let forfeitTimesLeft = [0, 0, 0, 0, 0];

let splitTimer = null;
let afkTimer = Date.now();
let afkTime = 1000 * 60 * 30;// 30 minutes

app.use(session({
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new twitchStrategy({
		clientID: TWITCH_CLIENT_ID,
		clientSecret: TWITCH_CLIENT_SECRET,
		callbackURL: TWITCH_CALLBACK_URL,
		scope: "user:read:email analytics:read:games",
	},
	function(accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		done(null, profile);
	}
));
passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

app.get("/auth/twitch", passport.authenticate("twitch", {forceVerify: true}));
app.get("/auth/twitch/callback", passport.authenticate("twitch", { failureRedirect: "/" }), function(req, res) {
	// Successful authentication, redirect home.
	res.redirect("/8110/");
});

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get("/", function(req, res) {
	if (req.session && req.session.passport && req.session.passport.user) {
		console.log(req.user);
		let time = 7 * 60 * 24 * 60 * 1000; // 7 days
		//let time = 15*60*1000;// 15 minutes
		let username = req.user.username;
		let secret = config.HASH_SECRET;
		let hashedUsername = crypto.createHmac("sha256", secret).update(username).digest("hex");

		usernameDB[hashedUsername] = username;
		localStorage.setItem("db", JSON.stringify(usernameDB));

		res.cookie("TwitchPlaysNintendoSwitch", hashedUsername, {
			maxAge: time
		});
		res.send(`<script>window.location.href = "https://twitchplaysnintendoswitch.com";</script>`);
	} else {
		res.send(`<html><head><title>Twitch Auth Sample</title></head><a href="/8110/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>`);
	}
});



app.get("/stats/", function(req, res) {});

app.get("/img/", function(req, res) {
	let imgSrc = "data:image/jpeg;base64," + lastImage;
	let html = '<img id="screenshot" src="' + imgSrc + '">';
	res.send(html);
});

let currentPlayerSite = `
<html>
	<head>
		<style>
			.custom {
				font-family: comic sans ms;
				font-size: 30px;
				color: white;
				text-align: center;
				vertical-align: middle;
				background-color: rgba(0, 0, 0, 0);
				margin: 0px auto;
				overflow: hidden;
				/*text-shadow: 2px 2px #000000;*/
				text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
			}
		</style>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.0/socket.io.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	</head>
	<body>
	<div id="currentPlayer" class="custom">Current Player: </div>
	</body>
	<script>
		let socket = io("https://twitchplaysnintendoswitch.com", {
			path: "/8110/socket.io",
			transports: ["websocket"],
		});
		socket.on("currentPlayer", function(data) {
			$("#currentPlayer").text("Current Player: " + data);
		});
		socket.on("turnTimeLeft", function(data) {
			if (data.username == null) {
				$("#currentPlayer").text("No one is playing right now.");
			} else {
				$("#currentPlayer").text("Current Player: " + data.username);
			}
		});
	</script>
</html>`;

app.get("/currentplayer/", function(req, res) {
	res.send(currentPlayerSite);
});

let helpSite = `
<html>
	<head>
		<style>
			.custom {
				font-family: comic sans ms;
				color: white;
				font-size: 35px;
				text-align: center;
				vertical-align: middle;
				/*text-shadow: 2px 2px #000000;*/
				text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
			}
		</style>
	</head>
	<body>
		<!--   <marquee scrolldelay="0" scrollamount="10"> -->
		<div class="custom">
			Type !help for help
		</div>
		<!--   </marquee> -->
	</body>
	<script>
	</script>
</html>`;
app.get("/help/", function(req, res) {
	res.send(helpSite);
});

server.listen(port, function() {
	console.log("Server listening at port %d", port);
});

let LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./myDatabase");

usernameDB = JSON.parse(localStorage.getItem("db"));

if (typeof usernameDB == "undefined" || usernameDB === null) {
	usernameDB = {};
}

//console.log(util.inspect(usernameDB, false, null));

function Client(socket) {
	this.socket = socket;
	this.id = socket.id;
	this.name = "none";
	this.username = null;
	this.rooms = [];
	this.joinTime = new Date();
}

function findClientByID(id) {
	let index = -1;
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].id == id) {
			index = i;
			return index;
		}
	}
	return index;
}

function getClientNameByID(id) {
	let index = -1;
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].id == id) {
			index = i;
			break;
		}
	}
	if (index == -1) {
		return "";
	} else if (clients[index].username == null) {
		return "";
	} else {
		return clients[index].username;
	}
}

function findClientByName(name) {
	let index = -1;
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].name == name) {
			index = i;
			return index;
		}
	}
	return index;
}

function findClientByUsername(username) {
	let index = -1;
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].username == username) {
			index = i;
			return index;
		}
	}
	return index;
}

function checkIfClientIsInRoomByID(id, room) {
	let index = findClientByID(id);
	if (index == -1) {
		return false;
	}
	let client = clients[index];
	if (client.rooms.indexOf(room) > -1) {
		return true;
	} else {
		return false;
	}
}

function SplitTimer(startTime, splitNames, name) {
	//this.startTime = startTime;
	this.startTime = new Date();
	this.splitNames = splitNames;
	this.name = name;
	this.currentSplit = 0;
	this.currentTime = 0;
	this.times = [];

	this.addSplit = function(splitName) {
		this.splitNames.push(splitName);
	}
	this.moveToNextSplit = function() {
		this.currentSplit += 1;
		let time = (new Date()) - this.startTime;
		this.times.push(time);
		this.currentTime = time;
	}
	this.removeLastSplit = function() {
		this.currentSplit -= 1;
		this.times.pop();
	}
	this.getCurrentTime = function() {
		let time = (new Date() - this.startTime);
		this.currentTime = time;
		return time;
	}
	return this;
}

io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io.on("connection", function(socket) {
	
	let client = new Client(socket);
	clients.push(client);
	console.log("number of clients connected: " + clients.length);

	socket.on("registerUsername", function(data) {
		let index = findClientByID(socket.id);
		if (typeof usernameDB[data] == "undefined") {
			clients[index].username = null;
			return;
		}
		clients[index].username = usernameDB[data];
		socket.emit("twitchUsername", clients[index].username);
	});

	/* 2ND AUTH METHOD @@@@@@@@@@@@@@@@@@@@@*/
	// CLIENT SIDE:
	// 	socket.emit("twitchToken", someTwitchToken);
	// 	socket.on("hashedUsername", function(data) {
	// 		let hashedUsername = data;
	// 		socket.emit("registerUsername", hashedUsername);
	// 	});
	socket.on("twitchToken", function(data) {
		request({
			url: "https://id.twitch.tv/oauth2/validate",
			headers: {
				Authorization: "OAuth " + data,
			}
		}, function(error, response, body) {

			let body2 = JSON.parse(body);

			if (body2.message == "invalid access token") {
				return;
			} else {
				let username = body2.login;
				let secret = config.HASH_SECRET;
				let hashedUsername = crypto.createHmac("sha256", secret).update(username).digest("hex");
				usernameDB[hashedUsername] = username;
				localStorage.setItem("db", JSON.stringify(usernameDB));
				socket.emit("hashedUsername", hashedUsername);
			}
		});
	});

	// after recieving the image, broadcast it to viewers
	socket.on("screenshot", function(data) {
		lastImage = data;
// 		if (lastImage === "") {
// 			io.emit("quit");
// 		}
		io.to("viewers").emit("viewImage", data);
	});
	
	socket.on("screenshot4", function(data) {
		lastImage = data;
		// todo: replace the viewers5 room with "joinLaglessX" rooms
		io.to("viewers5").emit("viewImage5", data);
	});

	socket.on("sendControllerState", function(data) {

		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		if (client.username == null) {
			return;
		}
		
		let cNum = data.cNum;
		let controllerState = data.state;
		
		if (controlQueues[cNum].length === 0) {
			return;
		}
		currentTurnUsernames[cNum] = controlQueues[cNum][0];
		if (client.username != currentTurnUsernames[cNum]) {
			return;
		}
		// return if locked && not a mod:
		if (locked && modlist.indexOf(client.username) == -1) {
			return;
		}
		
		// reset afkTimer:
		afkTimer = Date.now();
		
		// sub perk:
		if(sublist.indexOf(client.username) > -1) {
			turnDurations[cNum] = subTime;
		} else {
			turnDurations[cNum] = normalTime;
		}

		// reset forfeit timer:
		clearTimeout(forfeitTimers[cNum]);
		forfeitTimers[cNum] = setTimeout(forfeitTurn, timeTillForfeitDurations[cNum], client.username, cNum);
		forfeitStartTimes[cNum] = Date.now();
		
		cNum += 1;
		if (cNum < 5) {
			io.emit("controllerState" + cNum, controllerState);
		} else {
			let valid = true;
			if (controllerState[5] == "1" && modlist.indexOf(client.username) == -1) {
				valid = false;
			}
			if (controllerState[13] == "1" && pluslist.indexOf(client.username) == -1) {
				valid = false;
			}
			if (controllerState[14] == "1" && modlist.indexOf(client.username) == -1) {
				valid = false;
			}
			if (valid) {
				io.emit("controllerState" + cNum, {state: controllerState});
			}
// 			let obj = {};
// 			let inputs = controllerState.split(" ");
// 			obj.LX = parseInt(inputs[1]);
// 			obj.LY = parseInt(inputs[2]);
// 			obj.RX = parseInt(inputs[3]);
// 			obj.RY = parseInt(inputs[4]);
// 			obj.buttons = 800000000000000;
// 			io.emit("controllerState" + cNum, obj);
// 			console.log(obj);
		}
// 		io.emit("currentPlayers", currentTurnUsernames);
	});

	/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	socket.on("requestTurn", function(cNum) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.username == null) {
			return;
		}
		// return if banned
		if (banlist.indexOf(client.username) > -1) {
			return;
		}
		// return if locked && not a mod:
		if (locked && modlist.indexOf(client.username) == -1) {
			return;
		}
		// return if max players is < cNum
		if (cNum >= maxPlayers && maxPlayers != 4) {
			return;
		}
		
		// check to make sure username isn't already in another queue
		let controllerList = [0, 1, 2, 3, 4];
		controllerList.splice(controllerList.indexOf(cNum), 1);
		for (let i = 0; i < controllerList.length; i++) {
			let listNum = controllerList[i];
			if (controlQueues[listNum].indexOf(client.username) > -1) {
				return;
			}
		}
		
		if (typeof controlQueues[cNum] == "undefined") {
			console.log("something weird happened.");
			console.log(cNum);
			return;
		}
		
		// check to make sure they aren't in this queue (so we don't push it more than once)
		if (controlQueues[cNum].indexOf(client.username) == -1) {
			controlQueues[cNum].push(client.username);
			currentTurnUsernames[cNum] = controlQueues[cNum][0];// todo: delete this
			io.emit("controlQueues", {
				controlQueues: controlQueues
			});
			
			
			// recently moved into this block// 7/21/18
			// only if there's only one person in the queue
			if (controlQueues[cNum].length == 1) {
				resetTimers(client.username, cNum);
			}
		}
	});

	socket.on("cancelTurn", function(cNum) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.username == null) {
			return;
		}
		
		// only do anything if the user is actually in the queue
		index = controlQueues[cNum].indexOf(client.username);
		if (index > -1) {
			controlQueues[cNum].splice(index, 1);
			io.emit("controlQueues", {
				controlQueues: controlQueues
			});
			
			if (controlQueues[cNum].length >= 1) {
				currentTurnUsernames[cNum] = controlQueues[cNum][0];// todo: delete this
				if (index === 0) {
					resetTimers(client.username, cNum);
				}
			} else if (controlQueues[cNum].length === 0) {
				currentTurnUsernames[cNum] = null;
			}

			// calculate time left for each player
			for (let i = 0; i < turnDurations.length; i++) {
				let currentTime = Date.now();
				let elapsedTime = currentTime - turnStartTimes[i];
				let timeLeft = turnDurations[i] - elapsedTime;
				let elapsedTimeSinceLastMove = currentTime - forfeitStartTimes[i];
				let timeLeftForfeit = timeTillForfeitDurations[i] - elapsedTimeSinceLastMove;
				turnTimesLeft[i] = timeLeft;
				forfeitTimesLeft[i] = timeLeftForfeit;
			}
			io.emit("turnTimesLeft", {
				turnTimesLeft: turnTimesLeft,
				forfeitTimesLeft: forfeitTimesLeft,
				usernames: currentTurnUsernames,
				turnLengths: turnDurations,
				viewers: [laglessClientNames[0], laglessClientNames[1], laglessClientNames[2], laglessClientNames[3], laglessClientNames[4]],
				waitlists: waitlists,
				banlist: banlist,
				locked: locked,
				wifiEnabled: wifiEnabled,
			});
		}
	});



	/* STREAM COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("restart1", function() {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting");
		io.emit("quit");
	});
	socket.on("restart2", function() {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless2");
		io.to("lagless2Host").emit("restart");
		
		// todo: resend settings
		setTimeout(function() {
			io.to("lagless2Host").emit("settings", currentLagless2Settings);
		}, 3000);
		
		// notify client to restart:
		io.emit("lagless2SettingsChange");
	});
	socket.on("restart3", function() {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless3");
		io.to("lagless3Host").emit("restart");
	});
// 	socket.on("restart5", function() {
// 		if (!restartAvailable) {
// 			return;
// 		}
// 		restartAvailable = false;
// 		console.log("restarting lagless5");
// 		io.to("lagless5Host").emit("restart");
		
// 		// todo: resend settings
// 		io.to("lagless5Host").emit("settings", currentLagless5Settings);
		
// 		// notify client to restart:
// 		io.emit("lagless5SettingsChange");
// 	});
	
	socket.on("restart server", function() {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting server");
		io.emit("quit");
		process.exit();
	});
	
	
	/* LISTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	
	socket.on("banlist", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			banlist = data;
		}
		io.emit("banlist", banlist);
	});
	socket.on("pluslist", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			pluslist = data;
		}
	});
	socket.on("modlist", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			modlist = data;
		}
	});
	socket.on("sublist", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			sublist = data;
		}
	});
	socket.on("rickroll", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("rickroll", data);
		}
	});
	socket.on("rainbow", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("rainbow", data);
		}
	});
	socket.on("setMaxPlayers", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			maxPlayers = data;
		}
	});
	socket.on("disconnect", function() {
		console.log("disconnected");
		let i = findClientByID(socket.id);
		clients.splice(i, 1);
	});

	/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	
	/* LAGLESS 1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless1Settings", function(data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.username == null) {
			return;
		}
		currentTurnUsernames[0] = controlQueues[0][0];
		if (client.username != currentTurnUsernames[0] && controlQueues[0].length > 0 && modlist.indexOf(client.username) == -1) {
			io.emit("lagless1Settings", lagless1Settings);
			return;
		}
		
		let obj = {};
		if (typeof data.scale != "undefined") {
			if (typeof data.scale == "number") {
				obj.scale = data.scale;
			}
		}
		if (typeof data.quality != "undefined") {
			if (typeof data.quality == "number") {
				obj.quality = data.quality;
			}
		}
		if (typeof data.fps != "undefined") {
			if (typeof data.fps == "number") {
				obj.fps = data.fps;
			}
		}
		
		lagless1Settings = Object.assign({}, lagless1Settings, obj);
		io.emit("lagless1Settings", lagless1Settings);
	});

	// 	socket.on("setCoords", function(data) {
	// 		lagless1Settings.x1 = data.x1 || lagless1Settings.x1;
	// 		lagless1Settings.x2 = data.x2 || lagless1Settings.x2;
	// 		lagless1Settings.y1 = data.y1 || lagless1Settings.y1;
	// 		lagless1Settings.y2 = data.y2 || lagless1Settings.y2;
	// 	});
	
	
	/* LAGLESS2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless2Settings", function(data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.username == null) {
			return;
		}
		currentTurnUsernames[0] = controlQueues[0][0];
		if (client.username != currentTurnUsernames[0] && controlQueues[0].length > 0 && modlist.indexOf(client.username) == -1) {
			io.emit("lagless2Settings", lagless2Settings);
			return;
		}
		
		lagless2Settings = Object.assign({}, lagless2Settings, data);
		
		let obj = {};
		if (typeof data.framerate != "undefined") {
			io.emit("lagless2SettingsChange");
			if (typeof data.framerate == "number") {
				obj.framerate = data.framerate;
			}
		}
		if (typeof data.videoBitrate != "undefined") {
			io.emit("lagless2SettingsChange");
			if (typeof data.videoBitrate == "number") {
				obj.videoBitrate = data.videoBitrate + "M";
			}
		}
		if (typeof data.scale != "undefined") {
			io.emit("lagless2SettingsChange");
			if (typeof data.scale == "number") {
				obj.scale = data.scale + ":" + (data.scale * (9/16));
			}
		}
		if (typeof data.offsetX != "undefined") {
			io.emit("lagless2SettingsChange");
			if (typeof data.offsetX == "number") {
				obj.offsetX = data.offsetX;
			}
		}
		if (typeof data.offsetY != "undefined") {
			io.emit("lagless2SettingsChange");
			if (typeof data.offsetY == "number") {
				obj.offsetY = data.offsetY;
			}
		}
		
		currentLagless2Settings = obj;
		
		io.to("lagless2Host").emit("settings", obj);
		io.emit("lagless2Settings", data);
	});
	
	/* LAGLESS5 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless5Settings", function(data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.username == null) {
			return;
		}
		currentTurnUsernames[4] = controlQueues[4][0];
		if (client.username != currentTurnUsernames[4] && controlQueues[4].length > 0) {
			io.emit("lagless5Settings", lagless5Settings);
			return;
		}
		
		lagless5Settings = Object.assign({}, lagless5Settings, data);
		
		let obj = {};
		if (typeof data.framerate != "undefined") {
			io.emit("lagless5SettingsChange");
			if (typeof data.framerate == "number") {
				obj.framerate = data.framerate;
			}
		}
		if (typeof data.videoBitrate != "undefined") {
			io.emit("lagless5SettingsChange");
			if (typeof data.videoBitrate == "number") {
				obj.videoBitrate = data.videoBitrate + "M";
			}
		}
		if (typeof data.scale != "undefined") {
			io.emit("lagless5SettingsChange");
			if (typeof data.scale == "number") {
				obj.scale = data.scale + ":" + (data.scale * (9/16));
			}
		}
		if (typeof data.offsetX != "undefined") {
			io.emit("lagless5SettingsChange");
			if (typeof data.offsetX == "number") {
				obj.offsetX = data.offsetX;
			}
		}
		if (typeof data.offsetY != "undefined") {
			io.emit("lagless5SettingsChange");
			if (typeof data.offsetY == "number") {
				obj.offsetY = data.offsetY;
			}
		}
		
		currentLagless5Settings = obj;
		
		io.to("lagless5Host").emit("settings", obj);
		io.emit("lagless5Settings", data);
	});
	
	// broadcast settings when someone joins:
	socket.emit("lagless1Settings", lagless1Settings);
	socket.emit("lagless2Settings", lagless2Settings);
	socket.emit("lagless5Settings", lagless5Settings);
	
	/* OTHER COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("forceRefresh", function(channel) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("forceRefresh");
		} else {
			console.log("something bad happened 1.");
		}
	});
	socket.on("disableInternet", function(channel) {
		let legit = false;
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index > -1) {
			client = clients[index];
			if (client.username != null) {
				if (modlist.indexOf(client.username) > -1) {
					legit = true;
				}
			}
		}
		if (legit) {
			io.to("proxy").emit("disableInternet");
			wifiEnabled = false;
		}
	});
	socket.on("enableInternet", function(channel) {
		let legit = false;
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index > -1) {
			client = clients[index];
			if (client.username != null) {
				if (modlist.indexOf(client.username) > -1) {
					legit = true;
				}
			}
		}
		if (legit) {
			io.to("proxy").emit("enableInternet");
			wifiEnabled = true;
		}
	});
	socket.on("getInternetStatus", function(data) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.to("proxy").emit("getInternetStatus");
		}
	});
	socket.on("internetStatus", function(data) {
		// check if it's coming from the proxy:
		if(checkIfClientIsInRoomByID(socket.id, "proxy")) {
			wifiEnabled = data;
			io.to("controller").emit("internetStatus", data);
		}
	});
	socket.on("lock", function(data) {
		let legit = false;
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index > -1) {
			client = clients[index];
			if (client.username != null) {
				if (modlist.indexOf(client.username) > -1) {
					legit = true;
				}
			}
		}
		if (legit) {
			locked = true;
		}
	});
	socket.on("unlock", function(data) {
		let legit = false;
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index > -1) {
			client = clients[index];
			if (client.username != null) {
				if (modlist.indexOf(client.username) > -1) {
					legit = true;
				}
			}
		}
		if (legit) {
			locked = false;
		}
	});
	socket.on("kickFromQueue", function(data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.username == null) {
			return;
		}
		
		if (modlist.indexOf(client.username) > -1) {
			for (let i = 0; i < controlQueues.length; i++) {
				forfeitTurn(data, i);
			}
		}
	});
	
	socket.on("setTurnLength", function(data) {
		// check if it's coming from the controller:
		if(!checkIfClientIsInRoomByID(socket.id, "controller")) {
			return;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		for (let i = 0; i < turnDurations.length; i++) {
			turnDurations[i] = parseInt(data) || 30000;
			timeTillForfeitDurations[i] = parseInt(data) || 15000;
		}
	});
	
	socket.on("setForfeitLength", function(data) {
		// check if it's coming from the controller:
		if(!checkIfClientIsInRoomByID(socket.id, "controller")) {
			return;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		for (let i = 0; i < turnDurations.length; i++) {
			timeTillForfeitDurations[i] = parseInt(data) || 15000;
		}
	});
	

	/* WebRTC @@@@@@@@@@@@@@@@@@@@@@@@ */
	/* SIMPLEPEER */
	socket.on("hostPeerSignal", function(data) {
		io.emit("hostPeerSignal", data);
	});
	socket.on("clientPeerSignal", function(data) {
		io.emit("clientPeerSignal", {id: socket.id, data: data});
	});
	socket.on("requestAudio", function(data) {
		io.to("audioHost").emit("createNewPeer", {id: socket.id});
	});
	socket.on("hostPeerSignalReply", function(data) {
		io.to(data.id).emit("hostPeerSignal", data.data);
	});
	
	
	
	
	socket.on("hostPeerSignalV", function(data) {
		io.emit("hostPeerSignalV", data);
	});
	socket.on("clientPeerSignalV", function(data) {
		io.emit("clientPeerSignalV", {id: socket.id, data: data});
	});
	socket.on("requestVideo", function(data) {
		io.to("videoHost").emit("createNewPeerV", {id: socket.id});
	});
	socket.on("hostPeerSignalReplyV", function(data) {
		io.to(data.id).emit("hostPeerSignalV", data.data);
	});

	/* LATENCY @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("ping2", function() {
		socket.emit("pong2");
	});

	/* ROOMS @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("join", function(room) {
		// todo: add pi-proxy to this
		let secureList = ["lagless1Host", "lagless2Host", "lagless3Host", "lagless4Host", "lagless5Host", "controller", "controller2"];
		if (secureList.indexOf(room) > -1) {
			return;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		client.rooms.push(room);
		socket.join(room);
	});
	
	socket.on("joinSecure", function(data, password) {
		
		let myData = {room: "", password: ""};
		
		if (typeof password == "undefined") {
			myData.room = data.room;
			myData.password = data.password;
		} else if (typeof password != "undefined") {
			myData.room = data;
			myData.password = password;
		}
		
		if (myData.password === config.ROOM_SECRET) {
			let index = findClientByID(socket.id);
			if (index == -1) {
				return;
			}
			let client = clients[index];
			if (client.rooms.indexOf(myData.room) == -1) {
				client.rooms.push(myData.room);
			}
			socket.join(myData.room);
		}
	});
	
	socket.on("leave", function(room) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		index = client.rooms.indexOf(room);
		client.rooms.splice(index, 1);
		socket.leave(room);
	});
	
	
	/* VIEWER COUNTS @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("joinLagless1", function() {
		let id = socket.id;
		// if the id isn't in the list, add it:
		if (laglessClientIds[0].indexOf(id) == -1) {
			laglessClientIds[0].push(id);
		}
		// remove from other lists:
		let index;
		index = laglessClientIds[1].indexOf(id);
		if (index > -1) {
			laglessClientIds[1].splice(index, 1);
		}
		index = laglessClientIds[2].indexOf(id);
		if (index > -1) {
			laglessClientIds[2].splice(index, 1);
		}
		index = laglessClientIds[3].indexOf(id);
		if (index > -1) {
			laglessClientIds[3].splice(index, 1);
		}
		index = laglessClientIds[4].indexOf(id);
		if (index > -1) {
			laglessClientIds[4].splice(index, 1);
		}
	});
	socket.on("joinLagless2", function() {
		let id = socket.id;
		// if the id isn't in the list, add it:
		if (laglessClientIds[1].indexOf(id) == -1) {
			laglessClientIds[1].push(id);
		}
		// remove from other lists:
		let index;
		index = laglessClientIds[0].indexOf(id);
		if (index > -1) {
			laglessClientIds[0].splice(index, 1);
		}
		index = laglessClientIds[2].indexOf(id);
		if (index > -1) {
			laglessClientIds[2].splice(index, 1);
		}
		index = laglessClientIds[3].indexOf(id);
		if (index > -1) {
			laglessClientIds[3].splice(index, 1);
		}
		index = laglessClientIds[4].indexOf(id);
		if (index > -1) {
			laglessClientIds[4].splice(index, 1);
		}
	});
	socket.on("joinLagless3", function() {
		let id = socket.id;
		// if the id isn't in the list, add it:
		if (laglessClientIds[2].indexOf(id) == -1) {
			laglessClientIds[2].push(id);
		}
		// remove from other lists:
		let index;
		index = laglessClientIds[0].indexOf(id);
		if (index > -1) {
			laglessClientIds[0].splice(index, 1);
		}
		index = laglessClientIds[1].indexOf(id);
		if (index > -1) {
			laglessClientIds[1].splice(index, 1);
		}
		index = laglessClientIds[3].indexOf(id);
		if (index > -1) {
			laglessClientIds[3].splice(index, 1);
		}
		index = laglessClientIds[4].indexOf(id);
		if (index > -1) {
			laglessClientIds[4].splice(index, 1);
		}
	});
	socket.on("joinLagless4", function() {
		let id = socket.id;
		// if the id isn't in the list, add it:
		if (laglessClientIds[3].indexOf(id) == -1) {
			laglessClientIds[3].push(id);
		}
		// remove from other lists:
		let index;
		index = laglessClientIds[0].indexOf(id);
		if (index > -1) {
			laglessClientIds[0].splice(index, 1);
		}
		index = laglessClientIds[1].indexOf(id);
		if (index > -1) {
			laglessClientIds[1].splice(index, 1);
		}
		index = laglessClientIds[2].indexOf(id);
		if (index > -1) {
			laglessClientIds[2].splice(index, 1);
		}
		index = laglessClientIds[4].indexOf(id);
		if (index > -1) {
			laglessClientIds[4].splice(index, 1);
		}
	});
	socket.on("joinLagless5", function() {
		let id = socket.id;
		// if the id isn't in the list, add it:
		if (laglessClientIds[4].indexOf(id) == -1) {
			laglessClientIds[4].push(id);
		}
		// remove from other lists:
		let index;
		index = laglessClientIds[0].indexOf(id);
		if (index > -1) {
			laglessClientIds[0].splice(index, 1);
		}
		index = laglessClientIds[1].indexOf(id);
		if (index > -1) {
			laglessClientIds[1].splice(index, 1);
		}
		index = laglessClientIds[2].indexOf(id);
		if (index > -1) {
			laglessClientIds[2].splice(index, 1);
		}
		index = laglessClientIds[3].indexOf(id);
		if (index > -1) {
			laglessClientIds[3].splice(index, 1);
		}
	});
	
	socket.on("leaveLagless", function() {
		let id = socket.id;
		// remove from lists:
		let index;
		index = laglessClientIds[0].indexOf(id);
		if (index > -1) {
			laglessClientIds[0].splice(index, 1);
		}
		index = laglessClientIds[1].indexOf(id);
		if (index > -1) {
			laglessClientIds[1].splice(index, 1);
		}
		index = laglessClientIds[2].indexOf(id);
		if (index > -1) {
			laglessClientIds[2].splice(index, 1);
		}
		index = laglessClientIds[3].indexOf(id);
		if (index > -1) {
			laglessClientIds[3].splice(index, 1);
		}
	});
	
	
	/* SPLIT TIMER */
	socket.on("createSplitTimer", function(data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		// todo: improve this:
		if (client.username != "Harmjan387" && client.username != "twitchplaysconsoles") {
			return;
		}
		splitTimer = SplitTimer(data.startTime, data.splitNames, data.name);
		io.emit("clearSplitTimes");
	});
	
	socket.on("moveToNextSplit", function(data) {
		//harmjan387
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		// todo: improve this:
		if (client.username != "Harmjan387" && client.username != "twitchplaysconsoles") {
			return;
		}
		try {
			splitTimer.moveToNextSplit();
		} catch(error) {
		}
	});
	
	socket.on("removeLastSplit", function(data) {
		// harmjan387
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		// todo: improve this:
		if (client.username != "Harmjan387" && client.username != "twitchplaysconsoles") {
			return;
		}
		try {
			splitTimer.removeLastSplit();
		} catch(error) {
		}
		io.emit("clearSplitTimes");
	});
	
	/* BAN EVASION */
	socket.on("registerIP", function(data) {
		if (modlist.indexOf(data.username) > -1) {
			return;
		}
		console.log("username: " + data.username + " ip: " + data.ip);
	});
	// send on connect:
	io.emit("banlist", banlist);

});

function onNewNamespace(channel, sender) {
	io.of("/" + channel).on("connection", function(socket) {
		let username;
		if (io.isConnected) {
			io.isConnected = false;
			socket.emit("connect", true);
		}

		socket.on("message", function(data) {
			if (data.sender == sender) {
				if (!username) username = data.data.sender;
				socket.broadcast.emit("message", data.data);
			}
		});

		socket.on("disconnect", function() {
			if (username) {
				socket.broadcast.emit("user-left", username);
				username = null;
			}
		});
	});
}

setInterval(function() {
	restartAvailable = true;
}, 10000);
setInterval(function() {
	lagless2ChangeAvailable = true;
}, 300);


function forfeitTurn(username, cNum) {
	// change leave queue to join queue
	let index2 = findClientByUsername(username);
	if (index2 > -1) {
		io.to(clients[index2].id).emit("turnOver");
	}
	
	
	// forfeit turn:
	let index = controlQueues[cNum].indexOf(username);
	if (index > -1) {
		controlQueues[cNum].splice(index, 1);
		io.emit("controlQueues", {
			controlQueues: controlQueues
		});
		// stop the controller
		io.to("controller").emit("controllerState", "800000000000000 128 128 128 128");// update this to use restPos
	
		if (controlQueues[cNum].length >= 1) {
			currentTurnUsernames[cNum] = controlQueues[cNum][0];
			resetTimers(username, cNum);
		} else {
			currentTurnUsernames[cNum] = null;
		}
		
		// sub perk:
		if(sublist.indexOf(controlQueues[cNum][0]) > -1) {
			turnDurations[cNum] = subTime;
		} else {
			turnDurations[cNum] = normalTime;
		}

		// calculate time left for each player
		for (let i = 0; i < turnDurations.length; i++) {
			let currentTime = Date.now();
			let elapsedTime = currentTime - turnStartTimes[i];
			let timeLeft = turnDurations[i] - elapsedTime;
			let elapsedTimeSinceLastMove = currentTime - forfeitStartTimes[i];
			let timeLeftForfeit = timeTillForfeitDurations[i] - elapsedTimeSinceLastMove;
			turnTimesLeft[i] = timeLeft;
			forfeitTimesLeft[i] = timeLeftForfeit;
		}
		io.emit("turnTimesLeft", {
			turnTimesLeft: turnTimesLeft,
			forfeitTimesLeft: forfeitTimesLeft,
			usernames: currentTurnUsernames,
			turnLengths: turnDurations,
			viewers: [laglessClientNames[0], laglessClientNames[1], laglessClientNames[2], laglessClientNames[3], laglessClientNames[4]],
			waitlists: waitlists,
			banlist: banlist,
			locked: locked,
			wifiEnabled: wifiEnabled,
		});
	}
}

function resetTimers(username, cNum) {
	
	// sub perk:
	if(sublist.indexOf(username) > -1) {
		turnDurations[cNum] = subTime;
	} else {
		turnDurations[cNum] = normalTime;
	}
	
	// reset turn timer:
	turnStartTimes[cNum] = Date.now();
	clearTimeout(moveLineTimers[cNum]);
	moveLineTimers[cNum] = setTimeout(moveLine, turnDurations[cNum], cNum);

	// reset forfeit timer:
	forfeitStartTimes[cNum] = Date.now();
	clearTimeout(forfeitTimers[cNum]);
	forfeitTimers[cNum] = setTimeout(forfeitTurn, timeTillForfeitDurations[cNum], username, cNum);
}

function moveLine(cNum) {
	if (controlQueues[cNum].length > 1) {
		
		// change leave queue to join queue
		let index2 = findClientByUsername(controlQueues[cNum][0]);
		if (index2 > -1) {
			io.to(clients[index2].id).emit("turnOver");
		}
		
		controlQueues[cNum].shift();
		currentTurnUsernames[cNum] = controlQueues[cNum][0];
		// stop the controller
		io.to("controller").emit("controllerState", "800000000000000 128 128 128 128");
	}
	io.emit("controlQueues", {
		controlQueues: controlQueues
	});
	
	// sub perk:
	if(sublist.indexOf(controlQueues[cNum][0]) > -1) {
		turnDurations[cNum] = subTime;
	} else {
		turnDurations[cNum] = normalTime;
	}
	
	// reset turn time:
	turnStartTimes[cNum] = Date.now();
	clearTimeout(moveLineTimers[cNum]);
	moveLineTimers[cNum] = setTimeout(moveLine, turnDurations[cNum], cNum);

	if (controlQueues[cNum].length > 1) {
		// reset forfeit timer:
		forfeitStartTimes[cNum] = Date.now();
		clearTimeout(forfeitTimers[cNum]);
		forfeitTimers[cNum] = setTimeout(forfeitTurn, timeTillForfeitDurations[cNum], controlQueues[cNum][0], cNum);
	}
}
moveLine(0);
moveLine(1);
moveLine(2);
moveLine(3);
moveLine(4);

setInterval(function() {
	// get all connected id's
	let ids = Object.keys(io.sockets.sockets);
	
	// remove any clients not still connected:
	for (let i = 0; i < laglessClientIds.length; i++) {
		laglessClientIds[i] = laglessClientIds[i].filter(value => -1 !== ids.indexOf(value));
	}
	
	// calculate time left for each player
	for (let i = 0; i < turnStartTimes.length; i++) {
		let currentTime = Date.now();
		let elapsedTime = currentTime - turnStartTimes[i];
		let timeLeft = turnDurations[i] - elapsedTime;
		let elapsedTimeSinceLastMove = currentTime - forfeitStartTimes[i];
		let timeLeftForfeit = timeTillForfeitDurations[i] - elapsedTimeSinceLastMove;
		
		turnTimesLeft[i] = timeLeft;
		forfeitTimesLeft[i] = timeLeftForfeit;
		
		if(timeLeftForfeit < -50) {
// 			console.log("forfeit system screwed up somehow by: " + timeLeftForfeit);
			// reset forfeit timer:
			forfeitStartTimes[i] = Date.now();
			clearTimeout(forfeitTimers[i]);
			forfeitTimers[i] = setTimeout(forfeitTurn, timeTillForfeitDurations[i], controlQueues[i][0], i);
			
			// set the forfeitTime left to the duration of the forfeit timer:
			forfeitTimesLeft[i] = timeTillForfeitDurations[i];
		}
		
		
	}
	
	laglessClientNames[0] = [];
	laglessClientNames[1] = [];
	laglessClientNames[2] = [];
	laglessClientNames[3] = [];
	
	// create viewer list:
	for (let i = 0; i < laglessClientIds[0].length; i++) {
		laglessClientNames[0].push(getClientNameByID(laglessClientIds[0][i]));
	}
	for (let i = 0; i < laglessClientIds[1].length; i++) {
		laglessClientNames[1].push(getClientNameByID(laglessClientIds[1][i]));
	}
	for (let i = 0; i < laglessClientIds[2].length; i++) {
		laglessClientNames[2].push(getClientNameByID(laglessClientIds[2][i]));
	}
	for (let i = 0; i < laglessClientIds[3].length; i++) {
		laglessClientNames[3].push(getClientNameByID(laglessClientIds[3][i]));
	}
	
	
// 	for (let i)
	
	
	// reset / copy waitlists:
	let oldWaitlists = [];

	for (var i = 0; i < waitlists.length; i++) {
		oldWaitlists.push(waitlists[i].slice());
	}
	
	waitlists = [[], [], [], [], []];
	
	
	for (let i = 0; i < waitlists.length; i++) {
	
	
		// check if lagless is over capacity:
		if (laglessClientIds[i].length > waitlistMaxes[i]) {
			// the number of people we need to put into the waitlist:
			let numberOfPeopleToWaitlist = laglessClientIds[i].length - waitlistMaxes[i];
			let exemptCounter = 0;

			// remove anyone exempt by being in a queue, with a position less than 5:
			let laglessClientIdsCopy = laglessClientIds[i].slice();
			for (let j = 0; j < laglessClientIds[i].length; j++) {
				let clientIndex = findClientByID(laglessClientIds[i][j]);
				let client = clients[clientIndex];
				if (client.username != null) {
					// mods are exempt:
					//if (modlist.indexOf(client.username) > -1) {
					//	laglessClientIds[0]Copy.splice(laglesss1ClientIdsCopy.indexOf(client.id));
					//	exemptCounter++;
					//} else {
						for (let k = 0; k < controlQueues.length; k++) {
							let pos = controlQueues[k].indexOf(client.username);
							// if exempt:
							if (pos > -1 && pos < minQueuePositions[i]) {
								laglessClientIdsCopy.splice(laglessClientIdsCopy.indexOf(client.id));
								exemptCounter++;
							}
						}
					//}
				}
			}

			// now we have a list of non-auto-exempt people:
			// sort them by the time that they joined, and exempt more people until the queue limit is met

			// get the actual client objects:
			let laglessXClients = [];
			for (let j = 0; j < laglessClientIdsCopy.length; j++) {
				let clientIndex = findClientByID(laglessClientIdsCopy[j]);
				let client = clients[clientIndex];
				laglessXClients.push(client);
			}

			// sort by time joined:
			laglessXClients = _.sortBy(laglessXClients, "joinTime");

			// pick the first X to be exempted:

			while (laglessXClients.length > numberOfPeopleToWaitlist) {
				laglessXClients.shift();
				exemptCounter++;
			}

			// our final waitlist is everyone in laglessXClients
			for (let j = 0; j < laglessXClients.length; j++) {
				let client = laglessXClients[j];
				if (client.username != null) {
					waitlists[i].push(client.username);
				} else {
// 					io.to(client.id).emit("replaceWithTwitchLock");
				}
			}
		} else if (laglessClientIds[i].length == waitlistMaxes[i]) {
			waitlists[i] = oldWaitlists[i];
		}
		
		
	}
	
	io.emit("turnTimesLeft", {
		turnTimesLeft: turnTimesLeft,
		forfeitTimesLeft: forfeitTimesLeft,
		usernames: currentTurnUsernames,
		turnLengths: turnDurations,
		viewers: [laglessClientNames[0], laglessClientNames[1], laglessClientNames[2], laglessClientNames[3], laglessClientNames[4]],
		waitlists: waitlists,
		banlist: banlist,
		locked: locked,
		wifiEnabled: wifiEnabled,
	});
	io.emit("controlQueues", {
		controlQueues: controlQueues
	});
	
	if (splitTimer != null) {
		splitTimer.getCurrentTime();
		let obj = {
			times: splitTimer.times,
			splitNames: splitTimer.splitNames,
			currentTime: splitTimer.getCurrentTime(),
		};
		io.emit("splitTimes", obj);
	}
	
	// afkTimer:
	let elapsedTime =  Date.now() - afkTimer;
	if (elapsedTime > afkTime) {
		afkTimer = Date.now();
		io.to("controller").emit("afk");
	}
	
}, 500);

function stream() {
	let obj = {
		x1: lagless1Settings.x1,
		y1: lagless1Settings.y1,
		x2: lagless1Settings.x2,
		y2: lagless1Settings.y2,
		q: lagless1Settings.quality,
		s: lagless1Settings.scale,
	};
	if (laglessClientIds[0].length > 0) {
		io.to("lagless1Host").emit("ss3", obj);
	}
	setTimeout(stream, 1000 / lagless1Settings.fps);
}

function stream5() {
	let obj = {
		x1: lagless5Settings.x1,
		y1: lagless5Settings.y1,
		x2: lagless5Settings.x2,
		y2: lagless5Settings.y2,
		q: lagless5Settings.quality,
		s: lagless5Settings.scale,
	};
	if (laglessClientIds[4].length > 0) {
		io.to("lagless5Host").emit("ss3", obj);
// 		io.to("controller2").emit("ss3", obj);
	}
	setTimeout(stream5, 1000 / lagless5Settings.fps);
}
stream();
stream5();
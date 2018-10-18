const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8110;

const crypto = require("crypto");
const bcrypt = require("bcrypt");

const util = require("util");
const fs = require("fs");
const now = require("performance-now");

const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const twitchStrategy = require("passport-twitch").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;
const youtubeV3Strategy = require("passport-youtube-v3").Strategy;
const discordStrategy = require("passport-discord").Strategy;

const request = require("request");
const handlebars = require("handlebars");

const config = require("./config.js");

const bluebird = require("bluebird");
const redis = require("redis");
bluebird.promisifyAll(redis);

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoose = require("mongoose");
//Define a schema
let Schema = mongoose.Schema;

const _ = require("lodash");

const TWITCH_CLIENT_ID = config.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET = config.TWITCH_CLIENT_SECRET;
const TWITCH_CALLBACK_URL = config.TWITCH_CALLBACK_URL;
const GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = config.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL = config.GOOGLE_CALLBACK_URL;
const YOUTUBE_CLIENT_ID = config.YOUTUBE_CLIENT_ID;
const YOUTUBE_CLIENT_SECRET = config.YOUTUBE_CLIENT_SECRET;
const YOUTUBE_CALLBACK_URL = config.YOUTUBE_CALLBACK_URL;
const DISCORD_CLIENT_ID = config.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = config.DISCORD_CLIENT_SECRET;
const DISCORD_CALLBACK_URL = config.DISCORD_CALLBACK_URL;
const SESSION_SECRET = config.SESSION_SECRET;

let lagless1Settings = {
	x1: 319 - 1920,
	y1: 88 + 360, // 61
	x2: 319 + 1280 - 1920,
	y2: 88 + 720 + 360, // 61
	framerate: 15,
	quality: 60,
	scale: 30,
};
let lagless2Settings = { framerate: 20, videoBitrate: 1, scale: 720 };
let lagless3Settings = { framerate: 20, videoBitrate: 1, scale: 720 };
let currentLagless2Settings;
let currentLagless3Settings;

let lastImage = "";
let clientDB;
let clients = [];
let channels = {};
let restartAvailable = true;
let lagless2ChangeAvailable = true;
let locked = false;
let queuesLocked = false;
let maxPlayers = 5;

let controlQueues = [
	[],
	[],
	[],
	[],
];
let waitlists = [
	[],
	[],
	[],
	[],
	[],
];
let waitlistMaxes = [5, 5, 5, 5, 5];
let minQueuePositions = [5, 5, 5, 5, 5];

let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146", "103.217.104.190"];

let banlist = [];
let modlist = [];
let pluslist = [];
let sublist = [];

// todo: combine:
let laglessClientIds = [
	[],
	[],
	[],
	[],
	[],
];
laglessClientUniqueIds = [
	[],
	[],
	[],
	[],
	[],
];

let normalTime = 30000;
let subTime = 60000;
let tempBanTime = 5 * 1000 * 60; // 5 minutes

let turnDurations = [30000, 30000, 30000, 30000];
let timeTillForfeitDurations = [15000, 15000, 15000, 15000];
let turnStartTimes = [Date.now(), Date.now(), Date.now(), Date.now()];
let forfeitStartTimes = [Date.now(), Date.now(), Date.now(), Date.now()];
let moveLineTimers = [null, null, null, null];
let forfeitTimers = [null, null, null, null];

let turnTimesLeft = [0, 0, 0, 0];
let forfeitTimesLeft = [0, 0, 0, 0];

let splitTimer = null;
let afkTimer = Date.now();
let afkTime = 1000 * 60 * 30; // 30 minutes

app.use(session({
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());


let redisClient = redis.createClient({ host: "localhost", port: 6379 });

let IDToUniqueMap = {};
let uniqueIDToPreferredUsernameMap = {};

let mongoURL = "mongodb://localhost:27017/db";
mongoose.connect(mongoURL);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


// get banned IPs:
redisClient.getAsync("bannedIPs").then(function (dbBannedIPs) {
	let dataBaseIPs;
	if (dbBannedIPs == null) {
		console.log("Creating IP DB.");
		dataBaseIPs = bannedIPs;
	} else {
		dataBaseIPs = JSON.parse(dbBannedIPs);
	}
	bannedIPs = dataBaseIPs;
	// re-stringify:
	let dataBaseIPsString = JSON.stringify(dataBaseIPs);
	// store back in database:
	// store account at uniqueID location, at clients key:
	redisClient.setAsync("bannedIPs", dataBaseIPsString).then(function (success) {
		console.log("stored banned IPs: " + success);
	});
});

let accountSchema = Schema({

	// 	_id: Schema.Types.ObjectId,// created & initialized automatically

	email: String,
	username: String,
	password: String,

	token: String,

	connectedAccounts: [],

	// twitch:
	twitch: {
		id: String,
		accessToken: String,
		refreshToken: String,
		displayName: String,
		login: String,
		email: String,
		username: String,
		profile_image_url: String,
	},

	// google:
	google: {
		id: String,
		accessToken: String,
		refreshToken: String,
		displayName: String,
		familyName: String,
		givenName: String,
	},

	// youtube:
	youtube: {
		id: String,
		accessToken: String,
		refreshToken: String,
		displayName: String,
	},

	// discord:
	discord: {
		id: String,
		accessToken: String,
		refreshToken: String,
		email: String,
		username: String,
		discriminator: String,
	},

	// settings:
	is_mod: Boolean,
	is_plus: Boolean,
	is_sub: Boolean,

	is_ban: Boolean,
	is_perma_ban: Boolean,
	is_temp_ban: Boolean,

	IPs: [],

});

let Account = mongoose.model("Account", accountSchema);

function connectAccount(account, profile, type) {

	// set the id, access, and refresh token for the type of account we've connected:
	// universal:
	account[type].id = profile.id;
	account[type].accessToken = profile.accessToken;
	account[type].refreshToken = profile.refreshToken;

	if (type == "twitch" || type == "google" || type == "youtube") {
		account[type].displayName = profile.displayName;
	}

	// unique to each platform:
	if (type == "twitch") {

		account[type].email = profile.email;
		account[type].login = profile.login;
		account[type].username = profile.username;
		account[type].profile_image_url = profile.profile_image_url;


		if (modlist.indexOf(account.twitch.username) > -1) {
			account.is_mod = true;
		}
		if (pluslist.indexOf(account.twitch.username) > -1) {
			account.is_plus = true;
		}
		if (sublist.indexOf(account.twitch.displayName) > -1) {
			account.is_sub = true;
		}

	} else if (type == "google") {
		account[type].familyName = profile.name.familyName;
		account[type].givenName = profile.name.givenName;
	} else if (type == "youtube") {

	} else if (type == "discord") {
		account[type].email = profile.email;
		account[type].username = profile.username;
		account[type].discriminator = profile.discriminator;
	}

	// update connected accounts list:
	if (account.connectedAccounts.indexOf(type) == -1) {
		account.connectedAccounts.push(type);
	}

}

function updateOrCreateUser(profile, type, req) {

	// link to existing account:
	if (req.session.uniqueToken != null) {

		// get account by token:
		Account.findOne({ "token": req.session.uniqueToken }).exec(function (error, account) {

			if (error) {
				console.log(error);
				throw error;
			}

			// account exists:
			if (account) {
				// update info:
				connectAccount(account, profile, type);
				// save:
				account.save(function (err) {
					if (err) {
						console.log(err);
						throw err;
					}
					console.log("account saved.");
				});
			}

			if (!account) {
				console.log("couldn't find account.");
			}
		});

		return;
	}

	// check if the acccount already exists:
	let queryObj = {};
	queryObj[type + "." + "id"] = profile.id;
	Account.findOne(queryObj).exec(function (error, account) {

		if (error) {
			console.log(error);
			throw error;
		}
		// account already exists:
		if (account) {
			console.log("account already exists, updating info.");
			// update info:
			connectAccount(account, profile, type);
			// save:
			account.save(function (err) {
				if (err) {
					console.log(err);
					throw err;
				}
				console.log("account saved.");
			});

		}
		// acount doesn't exist:
		if (!account) {
			console.log("creating account.");

			// create the user & add account details:
			let newAccount = new Account();

			// add info:
			connectAccount(newAccount, profile, type);

			// save the new instance:
			newAccount.save(function (err) {
				if (err) {
					console.log(err);
					throw err;
				}
				console.log("account saved.");
			});
		}
	});

}

// twitch:
passport.use(new twitchStrategy({
		clientID: TWITCH_CLIENT_ID,
		clientSecret: TWITCH_CLIENT_SECRET,
		callbackURL: TWITCH_CALLBACK_URL,
		scope: "user:read:email analytics:read:games",
		passReqToCallback: true,
	},
	function (req, accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		updateOrCreateUser(profile, "twitch", req);
		done(null, profile);
	}
));
// google:
passport.use(new googleStrategy({
		clientID: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		callbackURL: GOOGLE_CALLBACK_URL,
		scope: ["profile"],
		passReqToCallback: true,
	},
	function (req, accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		updateOrCreateUser(profile, "google", req);
		done(null, profile);
	}
));
// youtube:
passport.use(new youtubeV3Strategy({
		clientID: YOUTUBE_CLIENT_ID,
		clientSecret: YOUTUBE_CLIENT_SECRET,
		callbackURL: YOUTUBE_CALLBACK_URL,
		scope: ["https://www.googleapis.com/auth/youtube.readonly"],
		// "https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtube"
		passReqToCallback: true,
	},
	function (req, accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		updateOrCreateUser(profile, "youtube", req);
		done(null, profile);
	}
));
// discord:
passport.use(new discordStrategy({
		clientID: DISCORD_CLIENT_ID,
		clientSecret: DISCORD_CLIENT_SECRET,
		callbackURL: DISCORD_CALLBACK_URL,
		scope: ["identify", "email"],
		passReqToCallback: true,
	},
	function (req, accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		updateOrCreateUser(profile, "discord", req);
		done(null, profile);
	}
));

passport.serializeUser(function (user, done) {
	done(null, user);
});
passport.deserializeUser(function (user, done) {
	done(null, user);
});

// app.get("/auth/twitch/", passport.authenticate("twitch", {forceVerify: true}));
app.get("/auth/twitch/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("twitch", { forceVerify: true })(req, res, next);
}, function (req, res) {});
app.get("/auth/twitch/callback", passport.authenticate("twitch", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/google/", passport.authenticate("google"));
app.get("/auth/google/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("google")(req, res, next);
}, function (req, res) {});
app.get("/auth/google/callback", passport.authenticate("google", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/youtube/", passport.authenticate("youtube"));
app.get("/auth/youtube/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("youtube")(req, res, next);
}, function (req, res) {});
app.get("/auth/youtube/callback", passport.authenticate("youtube", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/discord/", passport.authenticate("discord"));
app.get("/auth/discord/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("discord")(req, res, next);
}, function (req, res) {});
app.get("/auth/discord/callback", passport.authenticate("discord", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));


// If user has an authenticated session, display it, otherwise display link to authenticate
app.get("/redirect", function (req, res) {
	if (req.session && req.session.passport && req.session.passport.user) {

		console.log("setting cookie.");

		console.log(req.user);


		// create a token that lets us access the account:
		let token = crypto.randomBytes(64).toString("hex");

		let type = req.user.provider;
		let id = req.user.id;

		// get account:
		let queryObj = {};
		queryObj[type + "." + "id"] = id;

		Account.findOne(queryObj).exec(function (error, account) {

			if (error) {
				console.log(error);
				throw error;
			}
			// account exists:
			if (account) {
				account.token = token;
				// save:
				account.save(function (err) {
					if (err) {
						console.log(err);
						throw err;
					}
					console.log("account saved.");
				});
			}
			// acount doesn't exist:
			if (!account) {
				console.log("account doesn't exist, something went wrong.");
			}

		});

		let time = 7 * 60 * 24 * 60 * 1000; // 7 days
		res.cookie("TwitchPlaysNintendoSwitch", token, {
			maxAge: time,
		});

		// set token to expire after 7 days:
		// todo: make expire:
		// 		redis.hexpireAsync("clientMap", password, (time / 1000)).then(function(success) {
		// 			console.log("set password to expire in 7 days: " + success);
		// 		});

	}
	res.send(`<script>window.location.href = "https://twitchplaysnintendoswitch.com";</script>`);
});

app.get("/deleteDB", function (req, res) {
	console.log("deleting DB");
	Account.remove({}, function () {});
	// 	res.send(`<script>window.location.href = "https://twitchplaysnintendoswitch.com";</script>`);
});


app.get("/stats/", function (req, res) {});

app.get("/img/", function (req, res) {
	let imgSrc = "data:image/jpeg;base64," + lastImage;
	let html = '<img id="screenshot" src="' + imgSrc + '">';
	res.send(html);
});

let helpSite = `
<html>
	<head>
		<style>
			.custom {
				/*font-family: comic sans ms;*/
				font-family: Helvetica;
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
app.get("/help/", function (req, res) {
	res.send(helpSite);
});

server.listen(port, function () {
	console.log("Server listening at port %d", port);
});

//console.log(util.inspect(clientDB, false, null));

function Client(socket) {
	this.socket = socket;
	this.id = socket.id;
	this.uniqueID = null;
	this.name = "none";
	this.username = null;
	this.validUsernames = [];
	this.rooms = [];
	this.joinTime = new Date();

	this.is_mod = false;
	this.is_plus = false;
	this.is_sub = false;
	this.is_ban = false;

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

function getClientUniqueIDbySocketID(id) {
	let index = -1;
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].id == id) {
			index = i;
			break;
		}
	}
	if (index == -1) {
		return "";
	} else if (clients[index].uniqueID == null) {
		return "";
	} else {
		return clients[index].uniqueID;
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

function findClientByUniqueID(uniqueID) {
	let index = -1;
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].uniqueID == uniqueID) {
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

	this.addSplit = function (splitName) {
		this.splitNames.push(splitName);
	}
	this.moveToNextSplit = function () {
		this.currentSplit += 1;
		let time = (new Date()) - this.startTime;
		this.times.push(time);
		this.currentTime = time;
	}
	this.removeLastSplit = function () {
		this.currentSplit -= 1;
		this.times.pop();
	}
	this.getCurrentTime = function () {
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

io.on("connection", function (socket) {

	let client = new Client(socket);
	clients.push(client);
	console.log("number of clients connected: " + clients.length);

	socket.on("registerAccount", function (data) {

		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}

		// get account by token:
		Account.findOne({ "token": data.auth }).exec(function (error, account) {

			if (error) {
				console.log(error);
				throw error;
			}

			// account exists:
			if (account) {

				// 				console.log("registering account.");

				clients[index].validUsernames = [];

				if (account.connectedAccounts.indexOf("discord") > -1) {
					clients[index].validUsernames.push(account.discord.username + "#" + account.discord.discriminator);
				}
				if (account.connectedAccounts.indexOf("twitch") > -1) {
					clients[index].validUsernames.push(account.twitch.displayName);
					// todo: fix
					if (sublist.indexOf(account.twitch.displayName) > -1) {
						account.is_sub = true;
					}
					if (pluslist.indexOf(account.twitch.displayName) > -1) {
						account.is_plus = true;
					}
				}
				if (account.connectedAccounts.indexOf("youtube") > -1) {
					clients[index].validUsernames.push(account.youtube.displayName);
				}
				if (account.connectedAccounts.indexOf("google") > -1) {
					clients[index].validUsernames.push(account.google.displayName);
				}

				if (data.usernameIndex < clients[index].validUsernames.length) {
					clients[index].username = clients[index].validUsernames[data.usernameIndex];
				} else {
					clients[index].username = clients[index].validUsernames[0];
				}

				clients[index].uniqueID = "" + account._id;
				clients[index].uniqueID = clients[index].uniqueID.trim();

				clients[index].is_mod = account.is_mod;
				clients[index].is_plus = account.is_plus;
				clients[index].is_sub = account.is_sub;
				clients[index].is_ban = clients[index].is_ban || account.is_ban;


				uniqueIDToPreferredUsernameMap[clients[index].uniqueID] = clients[index].username;

				let accountInfo = {};
				accountInfo.uniqueID = clients[index].uniqueID;
				accountInfo.username = clients[index].username;
				accountInfo.connectedAccounts = account.connectedAccounts;
				accountInfo.validUsernames = clients[index].validUsernames;

				socket.emit("accountInfo", accountInfo);
			}
			// acount doesn't exist:
			if (!account) {

				console.log("account not found.");

				clients[index].username = null;
				console.log("Invalid password.");
				socket.emit("needToSignIn");
				return;
			}

		});
	});

	socket.on("disconnect", function () {
		console.log("disconnected");
		let i = findClientByID(socket.id);
		clients.splice(i, 1);
	});

	// after recieving the image, broadcast it to viewers
	socket.on("screenshot", function (data) {
		lastImage = data;
		// 		if (lastImage === "") {
		// 			io.emit("quit");
		// 		}
		io.to("lagless1").emit("viewImage", data);
	});

	socket.on("sendControllerState", function (data) {

		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		let cNum = data.cNum;
		let controllerState = data.state;

		if (controlQueues[cNum].length === 0) {
			return;
		}

		if (client.uniqueID != controlQueues[cNum][0]) {
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
			turnDurations[cNum] = normalTime * 2;
		} else {
			turnDurations[cNum] = normalTime;
		}

		// reset forfeit timer:
		forfeitStartTimes[cNum] = Date.now();
		// clearTimeout(forfeitTimers[cNum]);
		// forfeitTimers[cNum] = setTimeout(forfeitTurn, timeTillForfeitDurations[cNum], client.uniqueID, cNum);



		let valid = true;
		if (controllerState[5 + 3] == "1" && !client.is_mod) {
			valid = false;
		}
		if (controllerState[13 + 3] == "1" && !client.is_plus) {
			valid = false;
		}
		if (controllerState[14 + 3] == "1" && !client.is_mod) {
			valid = false;
		}

		cNum += 1;
		if (cNum < 5) {
			if (valid) {
				io.emit("controllerState" + cNum, controllerState);
			}
		} else {
			if (valid) {
				io.emit("controllerState" + cNum, { state: controllerState });
			}
		}
	});

	/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	socket.on("joinQueue", function (cNum) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
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
		if ([0, 1, 2, 3, 4].indexOf(cNum) == -1) {
			return;
		}

		// return if max players is < cNum
		if (cNum >= maxPlayers && maxPlayers != 4) {
			return;
		}

		// check to make sure user isn't already in another queue
		let controllerList = [0, 1, 2, 3];
		// 		controllerList.splice(controllerList.indexOf(cNum), 1);
		for (let i = 0; i < controllerList.length; i++) {
			let listNum = controllerList[i];
			if (controlQueues[listNum].indexOf(client.uniqueID) > -1) {
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
		controlQueues[cNum].push(client.uniqueID);
		io.emit("controlQueues", controlQueues);

		// reset timers when you join the queue & you're the only person in the queue:
		if (controlQueues[cNum].length == 1) {
			resetTimers(client.uniqueID, cNum);
		}
	});

	socket.on("leaveQueue", function (cNum) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		// make sure it's a valid cNum:
		if ([0, 1, 2, 3, 4].indexOf(cNum) == -1) {
			return;
		}

		// return if not in the queue:
		index = controlQueues[cNum].indexOf(client.uniqueID);
		if (index == -1) {
			return;
		}
		controlQueues[cNum].splice(index, 1);
		io.emit("controlQueues", controlQueues);

		if (controlQueues[cNum].length >= 1) {
			if (index === 0) {
				resetTimers(client.uniqueID, cNum);
			}
		}

		// emit turn times left:
		emitTurnTimesLeft();

	});



	/* STREAM COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("restart1", function () {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting");
		io.emit("quit");
	});
	socket.on("restart2", function () {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless2");
		io.to("lagless2Host").emit("restart");

		// todo: resend settings
		setTimeout(function () {
			io.to("lagless2Host").emit("settings", currentLagless2Settings);
		}, 3000);

		// notify client to restart:
		io.emit("lagless2SettingsChange");
	});
	socket.on("restart3", function () {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless3");
		io.to("lagless3Host").emit("restart");

		// todo: resend settings
		setTimeout(function () {
			io.to("lagless3Host").emit("settings", currentLagless3Settings);
		}, 3000);

		// notify client to restart:
		io.emit("lagless3SettingsChange");
	});

	socket.on("restart server", function () {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting server");
		io.emit("quit");
		process.exit();
	});


	/* LISTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	// 	socket.on("banlist", function(data) {
	// 		// check if it's coming from the controller:
	// 		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
	// 			banlist = data;
	// 		}
	// 		io.emit("banlist", banlist);
	// 	});

	socket.on("pluslist", function (data) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			pluslist = data;
		}
	});
	socket.on("modlist", function (data) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			modlist = data;
		}
	});
	socket.on("sublist", function (data) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			sublist = data;
		}
	});


	/* OTHER COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("rickroll", function (data) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("rickroll", data);
		}
	});
	socket.on("rainbow", function (data) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("rainbow", data);
		}
	});
	socket.on("setMaxPlayers", function (data) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			maxPlayers = data;
		}
	});

	socket.on("forceRefresh", function (channel) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("forceRefresh");
		} else {
			console.log("something bad happened 1.");
		}
	});
	socket.on("lock", function (data) {
		let legit = false;
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			locked = true;
			io.emit("lock");
		}
	});
	socket.on("unlock", function (data) {
		let legit = false;
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			locked = false;
			io.emit("unlock");
		}
	});
	socket.on("lockqueues", function (data) {
		let legit = false;
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			queuesLocked = true;
			io.emit("lockqueues");
		}
	});
	socket.on("unlockqueues", function (data) {
		let legit = false;
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			legit = true;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID != null) {
			if (client.is_mod) {
				legit = true;
			}
		}
		if (legit) {
			queuesLocked = false;
			io.emit("unlockqueues");
		}
	});
	socket.on("kickFromQueue", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		if (client.is_mod) {
			for (let i = 0; i < controlQueues.length; i++) {
				forfeitTurn(data, i);
			}
		}
	});
	socket.on("tempBan", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		if (!client.is_mod) {
			return;
		}

		index = findClientByUniqueID(data);
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		client.is_ban = true;
		for (let i = 0; i < controlQueues.length; i++) {
			forfeitTurn(client.uniqueID, i);
		}
		setTimeout(function (client) {
			client.is_ban = false;
		}, tempBanTime, client);

	});
	socket.on("permaBan", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		if (!client.is_mod) {
			return;
		}

		index = findClientByUniqueID(data);
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		client.is_ban = true;
		client.is_perma_ban = true;
		for (let i = 0; i < controlQueues.length; i++) {
			forfeitTurn(client.uniqueID, i);
		}

		// perma / IP ban:

		// get account:
		Account.findById(client.uniqueID, function (error, account) {
			if (error) {
				console.log(error);
				throw error;
			}
			// account exists:
			if (account) {
				console.log(account);
				// update info:
				account.is_ban = true;
				account.is_perma_ban = true;

				// update banned IP's:
				redisClient.getAsync("bannedIPs").then(function (dbBannedIPs) {
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
					bannedIPs = dataBaseIPs;
					// re-stringify:
					let dataBaseIPsString = JSON.stringify(dataBaseIPs);
					// store back in database:
					// store account at uniqueID location, at clients key:
					redisClient.setAsync("bannedIPs", dataBaseIPsString).then(function (success) {
						console.log("stored banned IPs: " + success);
					});
				});

				// save:
				account.save(function (err) {
					if (err) {
						console.log(err);
						throw err;
					}
				});
			}
		});

	});
	socket.on("unban", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		if (!client.is_mod) {
			return;
		}

		index = findClientByUniqueID(data);
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		client.is_ban = false;
		client.is_perma_ban = false;



		// unban:

		// get account:
		Account.findOne({ _id: client.uniqueID }, function (error, account) {
			if (error) {
				console.log(error);
				throw error;
			}
			// account exists:
			if (account) {
				console.log(account);
				// update info:
				account.is_ban = false;
				account.is_perma_ban = false;

				// update banned IP's:
				redisClient.getAsync("bannedIPs").then(function (dbBannedIPs) {
					let dataBaseIPs;
					if (dbBannedIPs == null) {
						console.log("Creating IP DB.");
						dataBaseIPs = bannedIPs;
					} else {
						dataBaseIPs = JSON.parse(dbBannedIPs);
					}
					dataBaseIPs = dataBaseIPs.filter(function (el) {
						return !account.IPs.includes(el);
					});
					bannedIPs = dataBaseIPs;
					// re-stringify:
					let dataBaseIPsString = JSON.stringify(dataBaseIPs);
					// store back in database:
					// store account at uniqueID location, at clients key:
					redisClient.setAsync("bannedIPs", dataBaseIPsString).then(function (success) {
						console.log("stored banned IPs: " + success);
					});
				});

				// save:
				account.save(function (err) {
					if (err) {
						console.log(err);
						throw err;
					}
				});
			}

		});
	});
	socket.on("setTurnLength", function (data) {
		// check if it's coming from the controller:
		if (!checkIfClientIsInRoomByID(socket.id, "controller")) {
			return;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		for (let i = 0; i < turnDurations.length; i++) {
			turnDurations[i] = parseInt(data) || 30000;
			normalTime = parseInt(data) || 30000;
			// timeTillForfeitDurations[i] = parseInt(data) || 15000;
		}
	});
	socket.on("setForfeitLength", function (data) {
		// check if it's coming from the controller:
		if (!checkIfClientIsInRoomByID(socket.id, "controller")) {
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
	socket.on("voteStarted", function (channel) {
		// check if it's coming from the controller:
		if (checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("voteStarted");
		} else {
			console.log("something bad happened vote.");
		}
	});

	/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	/* LAGLESS 1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless1Settings", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}
		if (client.uniqueID != controlQueues[0][0] && controlQueues[0].length > 0 && !client.is_mod) {
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
		if (typeof data.framerate != "undefined") {
			if (typeof data.framerate == "number") {
				obj.framerate = data.framerate;
			}
		}

		lagless1Settings = Object.assign({}, lagless1Settings, obj);
		io.emit("lagless1Settings", lagless1Settings);
	});

	/* LAGLESS2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless2Settings", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}
		if (client.uniqueID != controlQueues[0][0] && controlQueues[0].length > 0 && !client.is_mod) {
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
				obj.scale = (data.scale * (16 / 9) + ":" + data.scale);
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

	/* LAGLESS3 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless3Settings", function (data) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}
		if (client.uniqueID != controlQueues[0][0] && controlQueues[0].length > 0 && !client.is_mod) {
			io.emit("lagless3Settings", lagless3Settings);
			return;
		}

		lagless2Settings = Object.assign({}, lagless3Settings, data);

		let obj = {};
		if (typeof data.framerate != "undefined") {
			io.emit("lagless3SettingsChange");
			if (typeof data.framerate == "number") {
				obj.framerate = data.framerate;
			}
		}
		if (typeof data.videoBitrate != "undefined") {
			io.emit("lagless3SettingsChange");
			if (typeof data.videoBitrate == "number") {
				obj.videoBitrate = data.videoBitrate + "M";
			}
		}
		if (typeof data.scale != "undefined") {
			io.emit("lagless3SettingsChange");
			if (typeof data.scale == "number") {
				obj.scale = (data.scale * (16 / 9) + ":" + data.scale);
			}
		}
		if (typeof data.offsetX != "undefined") {
			io.emit("lagless3SettingsChange");
			if (typeof data.offsetX == "number") {
				obj.offsetX = data.offsetX;
			}
		}
		if (typeof data.offsetY != "undefined") {
			io.emit("lagless3SettingsChange");
			if (typeof data.offsetY == "number") {
				obj.offsetY = data.offsetY;
			}
		}

		currentLagless3Settings = obj;

		io.to("lagless3Host").emit("settings", obj);
		io.emit("lagless3Settings", data);
	});

	// broadcast settings when someone joins:
	socket.emit("lagless1Settings", lagless1Settings);
	socket.emit("lagless2Settings", lagless2Settings);
	socket.emit("lagless3Settings", lagless2Settings);


	/* WebRTC @@@@@@@@@@@@@@@@@@@@@@@@ */
	/* SIMPLEPEER */
	socket.on("hostPeerSignal", function (data) {
		io.emit("hostPeerSignal", data);
	});
	socket.on("clientPeerSignal", function (data) {
		io.emit("clientPeerSignal", { id: socket.id, data: data });
	});
	socket.on("requestAudio", function (data) {
		io.to("audioHost").emit("createNewPeer", { id: socket.id });
	});
	socket.on("hostPeerSignalReply", function (data) {
		io.to(data.id).emit("hostPeerSignal", data.data);
	});

	socket.on("hostPeerSignalV", function (data) {
		io.emit("hostPeerSignalV", data);
	});
	socket.on("clientPeerSignalV", function (data) {
		io.emit("clientPeerSignalV", { id: socket.id, data: data });
	});
	socket.on("requestVideo", function (data) {
		io.to("videoHost").emit("createNewPeerV", { id: socket.id });
	});
	socket.on("hostPeerSignalReplyV", function (data) {
		io.to(data.id).emit("hostPeerSignalV", data.data);
	});


	/* AUDIO 4.0 @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("d", function (data) {
		data["sid"] = socket.id;
		socket.to("audio4").emit("d", data); //Send to all but the sender
	});

	/* LATENCY @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("ping2", function () {
		socket.emit("pong2");
	});

	/* ROOMS @@@@@@@@@@@@@@@@@@@@@@@@ */

	socket.on("leave", function (room) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		index = client.rooms.indexOf(room);
		if (client.rooms.indexOf(room) > -1) {
			client.rooms.splice(index, 1);
		}
		socket.leave(room);
	});
	socket.on("join", function (room) {
		// todo: add pi-proxy to this
		let secureList = ["lagless1Host", "lagless2Host", "lagless3Host", "lagless4Host", "lagless5Host", "controller", "controller2"];
		let laglessList = ["lagless1", "lagless2", "lagless3", "lagless4", "lagless5"];
		if (secureList.indexOf(room) > -1) {
			return;
		}
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		let client = clients[index];

		if (laglessList.indexOf(room) > -1) {
			for (let i = 0; i < laglessList.length; i++) {
				if (laglessList[i] != room) {
					socket.leave(laglessList[i]);
				}

				let laglessIndex = client.rooms.indexOf(laglessList[i]);
				if (client.rooms.indexOf(laglessList[i]) > -1) {
					client.rooms.splice(laglessIndex, 1);
				}
			}
		}

		if (client.rooms.indexOf(room) == -1) {
			client.rooms.push(room);
		}
		socket.join(room);
	});
	socket.on("joinSecure", function (data, password) {

		let myData = { room: "", password: "" };

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
	socket.on("leaveLagless", function () {
		socket.leave("lagless1");
		socket.leave("lagless2");
		socket.leave("lagless3");
		socket.leave("lagless4");
		socket.leave("lagless5");
	});

	/* BAN EVASION */
	socket.on("registerIP", function (data) {
		if (client.is_mod) {
			return;
		}
		console.log("username: " + data.username + " id: " + data.id + " ip: " + data.ip);
		// 		console.log("ip?: " + socket.conn.transport.socket._socket.remoteAddress);
		// 		console.log("ip?2: " + socket.handshake.headers['x-forwarded-for'].split(",")[0]);

		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}

		if (client.uniqueID == null) {
			console.log("not signed in.");
			return;
		}

		// return if banned:
		if (client.is_perma_banned || client.is_temp_banned) {
			console.log("not signed in.");
			return;
		}

		// get account:
		Account.findById(client.uniqueID, function (error, account) {
			if (error) {
				console.log(error);
				throw error;
			}
			// account exists:
			if (account) {
				// update info:
				if (account.IPs.indexOf(data.ip) == -1) {
					account.IPs.push(data.ip);
				}
				// save:
				account.save(function (err) {
					if (err) {
						console.log(err);
						throw err;
					}
				});
			}
		});



	});

	// send on connect:
	// 	io.emit("banlist", banlist);
	io.emit("usernameMap", uniqueIDToPreferredUsernameMap);
});

setInterval(function () {
	restartAvailable = true;
}, 10000);
setInterval(function () {
	lagless2ChangeAvailable = true;
}, 300);


function forfeitTurn(uniqueID, cNum) {

	// forfeit turn:
	let index = controlQueues[cNum].indexOf(uniqueID);
	if (index == -1) {
		// 		console.log(uniqueID);
		console.log("uniqueID not found.");
		return;
	}

	controlQueues[cNum].splice(index, 1);
	io.emit("controlQueues", controlQueues);
	// stop the controller
	// io.to("controller").emit("controllerState", "800000000000000 128 128 128 128"); // update this to use restPos
	io.to("controller").emit("controllerState", "000000000000000000 128 128 128 128"); // update this to use restPos

	// reset the timers if the person forfeiting is first in line:
	if (index === 0) {
		resetTimers(controlQueues[cNum][0], cNum);
	}

	// sub perk:
	index = findClientByUniqueID(controlQueues[cNum][0]);
	let client = clients[index];
	if (client != null && client.uniqueID != null) {
		if (client.is_sub) {
			turnDurations[cNum] = normalTime * 2;
		} else {
			turnDurations[cNum] = normalTime;
		}
	}


	// emit turn times left:
	emitTurnTimesLeft();
}


function emitTurnTimesLeft() {
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

	// create current players list:
	let currentPlayers = [];
	for (let i = 0; i < controlQueues.length; i++) {
		currentPlayers.push(uniqueIDToPreferredUsernameMap[controlQueues[i][0]]);
	}

	// remove waitlisted people from viewer list:


	io.emit("turnTimesLeft", {
		turnTimesLeft: turnTimesLeft,
		forfeitTimesLeft: forfeitTimesLeft,
		turnLengths: turnDurations,
		forfeitLengths: timeTillForfeitDurations,
		viewers: [laglessClientUniqueIds[0], laglessClientUniqueIds[1], laglessClientUniqueIds[2], laglessClientUniqueIds[3], laglessClientUniqueIds[4]],
		currentPlayers: currentPlayers,
		waitlists: waitlists,
		locked: locked,
	});
}

function resetTimers(uniqueID, cNum) {

	// sub perk:
	let index = findClientByUniqueID(controlQueues[cNum][0]);
	let client = clients[index];
	if (client != null && client.uniqueID != null) {
		if (client.is_sub) {
			turnDurations[cNum] = normalTime * 2;
		} else {
			turnDurations[cNum] = normalTime;
		}
	}

	// reset turn timer:
	turnStartTimes[cNum] = Date.now();

	// reset forfeit timer:
	forfeitStartTimes[cNum] = Date.now();
}

function moveLine(cNum) {

	// if the queue length is more than one person
	// move the line:
	if (controlQueues[cNum].length > 1) {
		controlQueues[cNum].shift();
		// stop the controller
		io.to("controller").emit("controllerState", "800000000000000 128 128 128 128");
	}
	io.emit("controlQueues", controlQueues);

	// sub perk:
	let index = findClientByUniqueID(controlQueues[cNum][0]);
	let client = clients[index];
	if (client != null && client.uniqueID != null) {
		if (client.is_sub) {
			turnDurations[cNum] = normalTime * 2;
		} else {
			turnDurations[cNum] = normalTime;
		}
	}


	// reset turn time:
	turnStartTimes[cNum] = Date.now();

	// if the queue length is more than one person
	if (controlQueues[cNum].length > 1) {
		// reset forfeit timer:
		forfeitStartTimes[cNum] = Date.now();
	}
}

moveLine(0);
moveLine(1);
moveLine(2);
moveLine(3);
// moveLine(4);

setInterval(function () {


	// get all connected id's
	let ids = Object.keys(io.sockets.sockets);

	// 	// remove any clients not still connected:
	// 	for (let i = 0; i < laglessClientIds.length; i++) {
	// 		laglessClientIds[i] = laglessClientIds[i].filter(value => -1 !== ids.indexOf(value));
	// 	}

	io.in("lagless1").clients((error, clientIDs) => {
		if (error) throw error;
		laglessClientIds[0] = clientIDs;
	});
	io.in("lagless2").clients((error, clientIDs) => {
		if (error) throw error;
		laglessClientIds[1] = clientIDs;
	});
	io.in("lagless3").clients((error, clientIDs) => {
		if (error) throw error;
		laglessClientIds[2] = clientIDs;
	});
	io.in("lagless4").clients((error, clientIDs) => {
		if (error) throw error;
		laglessClientIds[3] = clientIDs;
	});
	io.in("lagless5").clients((error, clientIDs) => {
		if (error) throw error;
		laglessClientIds[4] = clientIDs;
	});

	laglessClientUniqueIds[0] = [];
	laglessClientUniqueIds[1] = [];
	laglessClientUniqueIds[2] = [];
	laglessClientUniqueIds[3] = [];

	// create viewer list:
	for (let i = 0; i < laglessClientIds[0].length; i++) {
		let uniqueID = getClientUniqueIDbySocketID(laglessClientIds[0][i]);
		if (uniqueID != null) {
			laglessClientUniqueIds[0].push(uniqueID);
		}
	}
	for (let i = 0; i < laglessClientIds[1].length; i++) {
		let uniqueID = getClientUniqueIDbySocketID(laglessClientIds[1][i]);
		if (uniqueID != null) {
			laglessClientUniqueIds[1].push(uniqueID);
		}
	}
	for (let i = 0; i < laglessClientIds[2].length; i++) {
		let uniqueID = getClientUniqueIDbySocketID(laglessClientIds[2][i]);
		if (uniqueID != null) {
			laglessClientUniqueIds[2].push(uniqueID);
		}
	}
	for (let i = 0; i < laglessClientIds[3].length; i++) {
		let uniqueID = getClientUniqueIDbySocketID(laglessClientIds[3][i]);
		if (uniqueID != null) {
			laglessClientUniqueIds[3].push(uniqueID);
		}
	}


	// reset / copy waitlists:
	// let oldWaitlists = [];
	//
	// for (var i = 0; i < waitlists.length; i++) {
	// 	oldWaitlists.push(waitlists[i].slice());
	// }

	waitlists = [
		[],
		[],
		[],
		[],
		[],
	];


	for (let i = 0; i < waitlists.length; i++) {


		// // check if lagless tab is over capacity:
		// if (laglessClientIds[i].length >= waitlistMaxes[i]) { // >= 10/12/18
		// 	// the number of people we need to put into the waitlist:
		// 	let numberOfPeopleToWaitlist = laglessClientIds[i].length - waitlistMaxes[i];
		// 	let exemptCounter = 0;
		//
		// 	// console.log("# to waitlist: " + numberOfPeopleToWaitlist);
		//
		// 	// remove anyone exempt by being in a queue, with a position less than 5:
		// 	let laglessClientIdsCopy = laglessClientIds[i].slice(0);
		// 	console.log(laglessClientIdsCopy);
		// 	for (let j = 0; j < laglessClientIds[i].length; j++) {
		// 		let clientIndex = findClientByID(laglessClientIds[i][j]);
		// 		let client = clients[clientIndex];
		// 		if (client == null) {
		// 			// console.log("client was null");
		// 			continue;
		// 		}
		// 		// exempt if they aren't signed in:
		// 		if (client.uniqueID == null) {
		// 			let index = laglessClientIdsCopy.indexOf(client.id);
		// 			if (index > -1) {
		// 				laglessClientIdsCopy.splice(index);
		// 			} else {
		// 				// console.log("index was null1");
		// 			}
		// 		}
		// 		if (client.uniqueID != null) {
		// 			// mods are exempt:
		// 			//if (client.is_mod) {
		// 			//	laglessClientIds[0]Copy.splice(laglesss1ClientIdsCopy.indexOf(client.id));
		// 			//	exemptCounter++;
		// 			//} else {
		// 			for (let k = 0; k < controlQueues.length; k++) {
		// 				let pos = controlQueues[k].indexOf(client.uniqueID);
		// 				// if exempt:
		// 				if (pos > -1 && pos < minQueuePositions[i]) {
		// 					let index = laglessClientIdsCopy.indexOf(client.id);
		// 					if (index > -1) {
		// 						laglessClientIdsCopy.splice(index);
		// 					} else {
		// 						// console.log("index was null2");
		// 					}
		// 					exemptCounter++;
		// 				}
		// 			}
		// 			//}
		// 		}
		// 	}
		//
		// 	// console.log("exempt counter: " + exemptCounter);
		// 	console.log(laglessClientIdsCopy);
		//
		//
		// 	// now we have a list of non-auto-exempt people:
		// 	// sort them by the time that they joined, and exempt more people until the queue limit is met
		//
		// 	// get the actual client objects:
		// 	let laglessXClients = [];
		// 	for (let j = 0; j < laglessClientIdsCopy.length; j++) {
		// 		let clientIndex = findClientByID(laglessClientIdsCopy[j]);
		// 		let client = clients[clientIndex];
		// 		if (client == null) {
		// 			// console.log("client was null2.");
		// 		} else {
		// 			laglessXClients.push(client);
		// 		}
		// 	}
		//
		// 	// sort by time joined:
		// 	laglessXClients = _.sortBy(laglessXClients, "joinTime");
		//
		// 	// pick the first X to be exempted:
		// 	while (laglessXClients.length > numberOfPeopleToWaitlist) {
		// 		laglessXClients.shift();
		// 		exemptCounter++;
		// 	}
		// 	// console.log(laglessXClients);
		// 	// console.log(laglessClientIdsCopy);
		//
		//
		// 	// our final waitlist is everyone in laglessXClients
		// 	for (let j = 0; j < laglessXClients.length; j++) {
		// 		let client = laglessXClients[j];
		// 		if (client != null && client.uniqueID != null) {
		// 			waitlists[i].push(client.uniqueID);
		// 		} else {
		// 			// io.to(client.id).emit("replaceWithTwitchLock");
		// 		}
		// 	}
		// }

		// check if lagless tab is over capacity:
		if (laglessClientUniqueIds[i].length >= waitlistMaxes[i]) { // >= 10/12/18
			// the number of people we need to put into the waitlist:
			let numberOfPeopleToWaitlist = laglessClientUniqueIds[i].length - waitlistMaxes[i];
			let exemptCounter = 0;

			// remove anyone exempt by being in a queue, with a position less than 5:
			let laglessClientUniqueIdsCopy = laglessClientUniqueIds[i].slice(0);
			// console.log(laglessClientUniqueIdsCopy);
			for (let j = 0; j < laglessClientIds[i].length; j++) {
				let clientIndex = findClientByUniqueID(laglessClientIds[i][j]);
				let client = clients[clientIndex];
				if (client == null) {
					// console.log("client was null");
					continue;
				}
				if (client.uniqueID != null) {
					// mods are exempt:
					//if (client.is_mod) {
					//	laglessClientIds[0]Copy.splice(laglesss1ClientIdsCopy.indexOf(client.id));
					//	exemptCounter++;
					//} else {
					for (let k = 0; k < controlQueues.length; k++) {
						let pos = controlQueues[k].indexOf(client.uniqueID);
						// if exempt:
						if (pos > -1 && pos < minQueuePositions[i]) {
							let index = laglessClientUniqueIdsCopy.indexOf(client.uniqueID);
							if (index > -1) {
								laglessClientIdsCopy.splice(index);
							} else {
								// console.log("index was null2");
							}
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
			for (let j = 0; j < laglessClientUniqueIdsCopy.length; j++) {
				let clientIndex = findClientByUniqueID(laglessClientUniqueIdsCopy[j]);
				let client = clients[clientIndex];
				if (client == null) {
					// console.log("client was null2.");
				} else {
					laglessXClients.push(client);
				}
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
				if (client != null && client.uniqueID != null) {
					waitlists[i].push(client.uniqueID);
				}
			}
		}
	}

	// emit turn times left:
	emitTurnTimesLeft();

	if (!queuesLocked) {
		for (let i = 0; i < forfeitTimesLeft.length; i++) {
			if (forfeitTimesLeft[i] < -450 && controlQueues[i][0] != null) {
				// if (forfeitTimesLeft[i] < -450) {
				forfeitTurn(controlQueues[i][0], i);
			}
		}

		for (let i = 0; i < turnTimesLeft.length; i++) {
			if (turnTimesLeft[i] < -450) {
				moveLine(i);
			}
		}
	}

	io.emit("controlQueues", controlQueues);

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
	let elapsedTime = Date.now() - afkTimer;
	if (elapsedTime > afkTime) {
		afkTimer = Date.now();
		io.to("controller").emit("afk");
	}

}, 500);

// do every once in a while:
setInterval(function () {
	io.emit("usernameMap", uniqueIDToPreferredUsernameMap);
	io.emit("bannedIPs", bannedIPs);
}, 10000);

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
	setTimeout(stream, 1000 / lagless1Settings.framerate);
}
stream();
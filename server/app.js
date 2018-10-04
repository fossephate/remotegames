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

const TWITCH_CLIENT_ID		= config.TWITCH_CLIENT_ID;
const TWITCH_CLIENT_SECRET	= config.TWITCH_CLIENT_SECRET;
const TWITCH_CALLBACK_URL	= config.TWITCH_CALLBACK_URL;
const GOOGLE_CLIENT_ID		= config.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET	= config.GOOGLE_CLIENT_SECRET;
const GOOGLE_CALLBACK_URL	= config.GOOGLE_CALLBACK_URL;
const YOUTUBE_CLIENT_ID		= config.YOUTUBE_CLIENT_ID;
const YOUTUBE_CLIENT_SECRET	= config.YOUTUBE_CLIENT_SECRET;
const YOUTUBE_CALLBACK_URL	= config.YOUTUBE_CALLBACK_URL;
const DISCORD_CLIENT_ID		= config.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET	= config.DISCORD_CLIENT_SECRET;
const DISCORD_CALLBACK_URL	= config.DISCORD_CALLBACK_URL;
const SESSION_SECRET		= config.SESSION_SECRET;

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
let clientDB;
let clients = [];
let channels = {};
let restartAvailable = true;
let lagless2ChangeAvailable = true;
let locked = false;
let maxPlayers = 5;

let controlQueues = [[], [], [], [], []];
let waitlists = [[], [], [], [], []];
let waitlistMaxes = [10, 10, 10, 10, 10];
let minQueuePositions = [5, 5, 5, 5, 5];

let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146"];

let banlist = [];
let modlist = [];
let pluslist = [];
let sublist = [];

// todo: combine:
laglessClientIds = [[], [], [], [], []];
laglessClientNames = [[], [], [], [], []];

let normalTime = 30000;
let subTime = 60000;
let tempBanTime = 5 * 1000 * 60;// 5 minutes

let turnDurations = [30000, 30000, 30000, 30000, 30000];
let timeTillForfeitDurations = [15000, 15000, 15000, 15000, 15000];
let turnStartTimes = [Date.now(), Date.now(), Date.now(), Date.now(), Date.now()];
let forfeitStartTimes = [Date.now(), Date.now(), Date.now(), Date.now(), Date.now()];
let moveLineTimers = [null, null, null, null, null];
let forfeitTimers = [null, null, null, null, null];

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


let redisClient = redis.createClient({host : "localhost", port : 6379});

let IDToUniqueMap = {};
let uniqueIDToPreferredUsernameMap = {};

let mongoURL = "mongodb://localhost:27017/tpnsDB";
mongoose.connect(mongoURL);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


// get banned IPs:
redisClient.getAsync("bannedIPs").then(function(dbBannedIPs) {
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
	redisClient.setAsync("bannedIPs", dataBaseIPsString).then(function(success) {
		console.log("stored banned IPs: " + success);
	});
});

function DataBaseClient() {

// 	this.profile = profile;
	this.connectedAccounts = [];

	// initialize to null:

	// twitch:
	this.twitchID					= null;
	this.twitchAccessToken			= null;
	this.twitchRefreshToken 		= null;
	this.twitchDisplayName			= null;
	this.twitchLogin				= null;
	this.twitchUsername				= null;
	this.twitchProfile_image_url	= null;
	this.twitchEmail				= null;

	// google:
	this.googleID				= null;
	this.googleAccessToken		= null;
	this.googleRefreshToken		= null;
	this.googleDisplayName		= null;
	this.googleFamilyName		= null;
	this.googleGivenName		= null;

	// youtube:
	this.youtubeID				= null;
	this.youtubeAccessToken		= null;
	this.youtubeRefreshToken	= null;
	this.youtubeDisplayName		= null;

	// discord:
	this.discordID				= null;
	this.discordAccessToken		= null;
	this.discordRefreshToken	= null;
	this.discordEmail			= null;
	this.discordUsername		= null;
	this.discordDiscriminator	= null;

	// settings:
	this.is_mod					= false;
	this.is_plus				= false;
	this.is_sub					= false;

	this.is_ban					= false;
	this.is_perma_ban			= false;
	this.is_temp_ban			= false;

	this.IPs = [];
}

let accountSchema = Schema({

// 	_id: Schema.Types.ObjectId,// created & initialized automatically

	email:			String,
	username:		String,
	password:		String,

	token:			String,

	connectedAccounts: [],

	// twitch:
	twitch: {
		id:					String,
		accessToken:		String,
		refreshToken:		String,
		displayName:		String,
		login:				String,
		email:				String,
		username:			String,
		profile_image_url:	String,
	},

	// google:
	google: {
		id:				String,
		accessToken:	String,
		refreshToken:	String,
		displayName:	String,
		familyName:		String,
		givenName:		String,
	},

	// youtube:
	youtube: {
		id:				String,
		accessToken:	String,
		refreshToken:	String,
		displayName:	String,
	},

	// discord:
	discord: {
		id:				String,
		accessToken:	String,
		refreshToken:	String,
		email:			String,
		username:		String,
		discriminator:	String,
	},

	// settings:
	is_mod:			Boolean,
	is_plus:		Boolean,
	is_sub:			Boolean,

	is_ban:			Boolean,
	is_perma_ban:	Boolean,
	is_temp_ban:	Boolean,

	IPs: [],

});

let Account = mongoose.model("Account", accountSchema);

function connectAccount(account, profile, type) {

	// set the id, access, and refresh token for the type of account we've connected:
	// universal:
	account[type].id			= profile.id;
	account[type].accessToken	= profile.accessToken;
	account[type].refreshToken	= profile.refreshToken;

	if (type == "twitch" || type == "google" || type == "youtube") {
		account[type].displayName = profile.displayName;
	}

	// unique to each platform:
	if (type == "twitch") {

		account[type].email				= profile.email;
		account[type].login				= profile.login;
		account[type].username			= profile.username;
		account[type].profile_image_url	= profile.profile_image_url;


		if (modlist.indexOf(account.twitch.username) > -1) {
			account.is_mod = true;
		}
		if (pluslist.indexOf(account.twitch.username) > -1) {
			account.is_plus = true;
		}
		if (sublist.indexOf(account.twitch.username) > -1) {
			account.is_sub = true;
		}

	} else if (type == "google") {
		account[type].familyName	= profile.name.familyName;
		account[type].givenName		= profile.name.givenName;
	} else if (type == "youtube") {

	} else if (type == "discord") {
		account[type].email			= profile.email;
		account[type].username		= profile.username;
		account[type].discriminator	= profile.discriminator;
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
		Account.findOne({"token": req.session.uniqueToken}).exec(function (error, account) {

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
	function(req, accessToken, refreshToken, profile, done) {
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
	function(req, accessToken, refreshToken, profile, done) {
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
	function(req, accessToken, refreshToken, profile, done) {
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
	function(req, accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		updateOrCreateUser(profile, "discord", req);
		done(null, profile);
	}
));

passport.serializeUser(function(user, done) {
	done(null, user);
});
passport.deserializeUser(function(user, done) {
	done(null, user);
});

// app.get("/auth/twitch/", passport.authenticate("twitch", {forceVerify: true}));
app.get("/auth/twitch/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("twitch", {forceVerify: true})(req, res, next);
}, function(req, res) {});
app.get("/auth/twitch/callback", passport.authenticate("twitch", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/google/", passport.authenticate("google"));
app.get("/auth/google/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("google")(req, res, next);
}, function(req, res) {});
app.get("/auth/google/callback", passport.authenticate("google", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/youtube/", passport.authenticate("youtube"));
app.get("/auth/youtube/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("youtube")(req, res, next);
}, function(req, res) {});
app.get("/auth/youtube/callback", passport.authenticate("youtube", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/discord/", passport.authenticate("discord"));
app.get("/auth/discord/", function (req, res, next) {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("discord")(req, res, next);
}, function(req, res) {});
app.get("/auth/discord/callback", passport.authenticate("discord", {
	successRedirect: "/8110/redirect",
	failureRedirect: "/",
}));


// If user has an authenticated session, display it, otherwise display link to authenticate
app.get("/redirect", function(req, res) {
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

app.get("/deleteDB", function(req, res) {
	console.log("deleting DB");
	Account.remove({}, function(){});
// 	res.send(`<script>window.location.href = "https://twitchplaysnintendoswitch.com";</script>`);
});


app.get("/stats/", function(req, res) {});

app.get("/img/", function(req, res) {
	let imgSrc = "data:image/jpeg;base64," + lastImage;
	let html = '<img id="screenshot" src="' + imgSrc + '">';
	res.send(html);
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

	this.is_mod		= false;
	this.is_plus	= false;
	this.is_sub		= false;
	this.is_ban		= false;

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

function getClientUniqueIDbySockedID(id) {
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

	socket.on("registerAccount", function(data) {

		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}

		// get account by token:
		Account.findOne({"token": data.auth}).exec(function (error, account) {

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
					clients[index].validUsernames.push(account.twitch.username);
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

				clients[index].is_mod	= account.is_mod;
				clients[index].is_plus	= account.is_plus;
				clients[index].is_sub	= account.is_sub;
				clients[index].is_ban	= clients[index].is_ban || account.is_ban;


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

	/* 2ND AUTH METHOD @@@@@@@@@@@@@@@@@@@@@*/
	// CLIENT SIDE:
	// 	socket.emit("twitchToken", someTwitchToken);
	// 	socket.on("hashedUsername", function(data) {
	// 		let hashedUsername = data;
	// 		socket.emit("registerUsername", hashedUsername);
	// 	});
// 	socket.on("twitchToken", function(data) {
// 		request({
// 			url: "https://id.twitch.tv/oauth2/validate",
// 			headers: {
// 				Authorization: "OAuth " + data,
// 			}
// 		}, function(error, response, body) {

// // 			let body2 = JSON.parse(body);

// // 			if (body2.message == "invalid access token") {
// // 				return;
// // 			} else {
// // 				let username = body2.login;
// // 				let secret = config.HASH_SECRET;
// // 				let hashedUsername = crypto.createHmac("sha256", secret).update(username).digest("hex");
// // 				usernameDB[hashedUsername] = username;
// // 				localStorage.setItem("db", JSON.stringify(usernameDB));
// // 				socket.emit("hashedUsername", hashedUsername);
// // 			}

// // 			if (response && response.statusCode == 200) {
// // 				// valid
// // 			}

// 		});
// 	});

	socket.on("disconnect", function() {
		console.log("disconnected");
		let i = findClientByID(socket.id);
		clients.splice(i, 1);
	});

	// after recieving the image, broadcast it to viewers
	socket.on("screenshot", function(data) {
		lastImage = data;
// 		if (lastImage === "") {
// 			io.emit("quit");
// 		}
		io.to("lagless1").emit("viewImage", data);
	});

	socket.on("screenshot4", function(data) {
		lastImage = data;
		// todo: replace the viewers5 room with "joinLaglessX" rooms
		io.to("lagless5").emit("viewImage5", data);
	});

	socket.on("sendControllerState", function(data) {

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
		if (sublist.indexOf(client.uniqueID) > -1) {
// 		if (client.is_sub) {
			turnDurations[cNum] = subTime;
		} else {
			turnDurations[cNum] = normalTime;
		}

		// reset forfeit timer:
		clearTimeout(forfeitTimers[cNum]);
		forfeitTimers[cNum] = setTimeout(forfeitTurn, timeTillForfeitDurations[cNum], client.uniqueID, cNum);
		forfeitStartTimes[cNum] = Date.now();


		let valid = true;
		if (controllerState[5] == "1" && !client.is_mod) {
			valid = false;
		}
		if (controllerState[13] == "1" && !client.is_plus) {
			valid = false;
		}
		if (controllerState[14] == "1" && !client.is_mod) {
			valid = false;
		}

		cNum += 1;
		if (cNum < 5) {
			if (valid) {
				io.emit("controllerState" + cNum, controllerState);
			}
		} else {
			if (valid) {
				io.emit("controllerState" + cNum, {state: controllerState});
			}
		}
	});

	/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	socket.on("requestTurn", function(cNum) {
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
		// return if max players is < cNum
		if (cNum >= maxPlayers && maxPlayers != 4) {
			return;
		}

		// check to make sure user isn't already in another queue
		let controllerList = [0, 1, 2, 3, 4];
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
		io.emit("controlQueues", {
			controlQueues: controlQueues
		});

		// recently moved into this block// 7/21/18
		// only if there's only one person in the queue
		// ???// 9/13/18
		if (controlQueues[cNum].length == 1) {
			resetTimers(client.uniqueID, cNum);
		}
	});

	socket.on("cancelTurn", function(cNum) {
		let index = findClientByID(socket.id);
		if (index == -1) {
			return;
		}
		client = clients[index];
		if (client.uniqueID == null) {
			return;
		}

		// return if not in the queue:
		index = controlQueues[cNum].indexOf(client.uniqueID);
		if (index == -1) {
			return;
		}
		controlQueues[cNum].splice(index, 1);
		io.emit("controlQueues", {
			controlQueues: controlQueues
		});

		if (controlQueues[cNum].length >= 1) {
			if (index === 0) {
				resetTimers(client.uniqueID, cNum);
			}
		}

		// emit turn times left:
		emitTurnTimesLeft();

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

// 	socket.on("banlist", function(data) {
// 		// check if it's coming from the controller:
// 		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
// 			banlist = data;
// 		}
// 		io.emit("banlist", banlist);
// 	});

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


	/* OTHER COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@ */
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

	socket.on("forceRefresh", function(channel) {
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
			io.emit("forceRefresh");
		} else {
			console.log("something bad happened 1.");
		}
	});
	socket.on("lock", function(data) {
		let legit = false;
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
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
	socket.on("unlock", function(data) {
		let legit = false;
		// check if it's coming from the controller:
		if(checkIfClientIsInRoomByID(socket.id, "controller")) {
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
	socket.on("kickFromQueue", function(data) {
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
	socket.on("tempBan", function(data) {
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
		setTimeout(function(client) {
			client.is_ban = false;
		}, tempBanTime, client);

	});

	socket.on("permaBan", function(data) {
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
				// update info:
				account.is_ban = true;
				account.is_perma_ban = true;

				// update banned IP's:
				redisClient.getAsync("bannedIPs").then(function(dbBannedIPs) {
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
					redisClient.setAsync("bannedIPs", dataBaseIPsString).then(function(success) {
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


	socket.on("unban", function(data) {
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
		Account.findById(client.uniqueID, function (error, account) {
			if (error) {
				console.log(error);
				throw error;
			}
			// account exists:
			if (account) {
				account.is_ban = false;
				account.is_perma_ban = false;
				// update banned IP's:
				redisClient.getAsync("bannedIPs", client.uniqueID).then(function(dbBannedIPs) {
					let dataBaseIPs;
					if (dbBannedIPs == null) {
						console.log("Creating IP DB.");
						dataBaseIPs = bannedIPs;
					} else {
						dataBaseIPs = JSON.parse(dbBannedIPs);
					}
					dataBaseIPs = dataBaseIPs.filter( function(el) {
						return !account.IPs.includes(el);
					});
					bannedIPs = dataBaseIPs;
					// re-stringify:
					let dataBaseIPsString = JSON.stringify(dataBaseIPs);
					// store back in database:
					// store account at uniqueID location, at clients key:
					redisClient.setAsync("bannedIPs", dataBaseIPsString).then(function(success) {
						console.log("stored banned IPs: " + success);
					});
				});
			}
		});
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

	/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

	/* LAGLESS 1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless1Settings", function(data) {
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
		if (client.uniqueID == null) {
			return;
		}
		if (client.uniqueID != controlQueues[4][0] && controlQueues[4].length > 0) {
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


	/* AUDIO 4.0 @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("d", function (data) {
		data["sid"] = socket.id;
		socket.to("audio4").emit("d", data); //Send to all but the sender
	});

	/* LATENCY @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("ping2", function() {
		socket.emit("pong2");
	});

	/* ROOMS @@@@@@@@@@@@@@@@@@@@@@@@ */

	socket.on("leave", function(room) {
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

	socket.on("join", function(room) {
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


	/* VIEWER COUNTS @@@@@@@@@@@@@@@@@@@@@@@@ */
// 	socket.on("joinLagless1", function() {

// 		io.in("lagless1").clients((error, clientIDs) => {
// 			if (error) throw error;

// 			// Returns an array of client IDs like ["Anw2LatarvGVVXEIAAAD"]
// // 			laglessClientIds[0] = clientIDs;
// 			console.log(clientIDs);
// 		});

// 		let id = socket.id;
// 		// if the id isn't in the list, add it:
// 		if (laglessClientIds[0].indexOf(id) == -1) {
// 			laglessClientIds[0].push(id);
// 		}
// 		// remove from other lists:
// 		let index;
// 		index = laglessClientIds[1].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[1].splice(index, 1);
// 		}
// 		index = laglessClientIds[2].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[2].splice(index, 1);
// 		}
// 		index = laglessClientIds[3].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[3].splice(index, 1);
// 		}
// 		index = laglessClientIds[4].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[4].splice(index, 1);
// 		}
// 	});
// 	socket.on("joinLagless2", function() {
// 		let id = socket.id;
// 		// if the id isn't in the list, add it:
// 		if (laglessClientIds[1].indexOf(id) == -1) {
// 			laglessClientIds[1].push(id);
// 		}
// 		// remove from other lists:
// 		let index;
// 		index = laglessClientIds[0].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[0].splice(index, 1);
// 		}
// 		index = laglessClientIds[2].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[2].splice(index, 1);
// 		}
// 		index = laglessClientIds[3].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[3].splice(index, 1);
// 		}
// 		index = laglessClientIds[4].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[4].splice(index, 1);
// 		}
// 	});
// 	socket.on("joinLagless3", function() {
// 		let id = socket.id;
// 		// if the id isn't in the list, add it:
// 		if (laglessClientIds[2].indexOf(id) == -1) {
// 			laglessClientIds[2].push(id);
// 		}
// 		// remove from other lists:
// 		let index;
// 		index = laglessClientIds[0].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[0].splice(index, 1);
// 		}
// 		index = laglessClientIds[1].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[1].splice(index, 1);
// 		}
// 		index = laglessClientIds[3].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[3].splice(index, 1);
// 		}
// 		index = laglessClientIds[4].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[4].splice(index, 1);
// 		}
// 	});
// 	socket.on("joinLagless4", function() {
// 		let id = socket.id;
// 		// if the id isn't in the list, add it:
// 		if (laglessClientIds[3].indexOf(id) == -1) {
// 			laglessClientIds[3].push(id);
// 		}
// 		// remove from other lists:
// 		let index;
// 		index = laglessClientIds[0].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[0].splice(index, 1);
// 		}
// 		index = laglessClientIds[1].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[1].splice(index, 1);
// 		}
// 		index = laglessClientIds[2].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[2].splice(index, 1);
// 		}
// 		index = laglessClientIds[4].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[4].splice(index, 1);
// 		}
// 	});
// 	socket.on("joinLagless5", function() {
// 		let id = socket.id;
// 		// if the id isn't in the list, add it:
// 		if (laglessClientIds[4].indexOf(id) == -1) {
// 			laglessClientIds[4].push(id);
// 		}
// 		// remove from other lists:
// 		let index;
// 		index = laglessClientIds[0].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[0].splice(index, 1);
// 		}
// 		index = laglessClientIds[1].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[1].splice(index, 1);
// 		}
// 		index = laglessClientIds[2].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[2].splice(index, 1);
// 		}
// 		index = laglessClientIds[3].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[3].splice(index, 1);
// 		}
// 	});

	socket.on("leaveLagless", function() {
// 		let id = socket.id;
// 		// remove from lists:
// 		let index;
// 		index = laglessClientIds[0].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[0].splice(index, 1);
// 		}
// 		index = laglessClientIds[1].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[1].splice(index, 1);
// 		}
// 		index = laglessClientIds[2].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[2].splice(index, 1);
// 		}
// 		index = laglessClientIds[3].indexOf(id);
// 		if (index > -1) {
// 			laglessClientIds[3].splice(index, 1);
// 		}
		socket.leave("lagless1");
		socket.leave("lagless2");
		socket.leave("lagless3");
		socket.leave("lagless4");
		socket.leave("lagless5");
	});


	/* SPLIT TIMER */
// 	socket.on("createSplitTimer", function(data) {
// 		let index = findClientByID(socket.id);
// 		if (index == -1) {
// 			return;
// 		}
// 		let client = clients[index];
// 		// todo: improve this:
// 		if (client.username != "Harmjan387" && client.username != "twitchplaysconsoles") {
// 			return;
// 		}
// 		splitTimer = SplitTimer(data.startTime, data.splitNames, data.name);
// 		io.emit("clearSplitTimes");
// 	});

// 	socket.on("moveToNextSplit", function(data) {
// 		//harmjan387
// 		let index = findClientByID(socket.id);
// 		if (index == -1) {
// 			return;
// 		}
// 		let client = clients[index];
// 		// todo: improve this:
// 		if (client.username != "Harmjan387" && client.username != "twitchplaysconsoles") {
// 			return;
// 		}
// 		try {
// 			splitTimer.moveToNextSplit();
// 		} catch(error) {
// 		}
// 	});

// 	socket.on("removeLastSplit", function(data) {
// 		// harmjan387
// 		let index = findClientByID(socket.id);
// 		if (index == -1) {
// 			return;
// 		}
// 		let client = clients[index];
// 		// todo: improve this:
// 		if (client.username != "Harmjan387" && client.username != "twitchplaysconsoles") {
// 			return;
// 		}
// 		try {
// 			splitTimer.removeLastSplit();
// 		} catch(error) {
// 		}
// 		io.emit("clearSplitTimes");
// 	});

	/* BAN EVASION */
	socket.on("registerIP", function(data) {
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


function forfeitTurn(uniqueID, cNum) {

	// forfeit turn:
	let index = controlQueues[cNum].indexOf(uniqueID);
	if (index == -1) {
// 		console.log(uniqueID);
		console.log("uniqueID not found.");
		return;
	}

	controlQueues[cNum].splice(index, 1);
	io.emit("controlQueues", {
		controlQueues: controlQueues,
	});
	// stop the controller
	io.to("controller").emit("controllerState", "800000000000000 128 128 128 128");// update this to use restPos

	// reset the timers if the person forfeiting is first in line:
	if (index === 0) {
		resetTimers(controlQueues[cNum][0], cNum);
	}

	// sub perk:
	if(sublist.indexOf(controlQueues[cNum][0]) > -1) {
		turnDurations[cNum] = subTime;
	} else {
		turnDurations[cNum] = normalTime;
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

	io.emit("turnTimesLeft", {
		turnTimesLeft: turnTimesLeft,
		forfeitTimesLeft: forfeitTimesLeft,
		turnLengths: turnDurations,
		viewers: [laglessClientNames[0], laglessClientNames[1], laglessClientNames[2], laglessClientNames[3], laglessClientNames[4]],
		currentPlayers: currentPlayers,
		waitlists: waitlists,
		locked: locked,
	});
}

function resetTimers(uniqueID, cNum) {

	// sub perk:
	if(sublist.indexOf(uniqueID) > -1) {
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
	forfeitTimers[cNum] = setTimeout(forfeitTurn, timeTillForfeitDurations[cNum], uniqueID, cNum);
}

function moveLine(cNum) {

	// if the queue length is more than one person
	// move the line:
	if (controlQueues[cNum].length > 1) {
		controlQueues[cNum].shift();
		// stop the controller
		io.to("controller").emit("controllerState", "800000000000000 128 128 128 128");
	}
	io.emit("controlQueues", {
		controlQueues: controlQueues,
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

	// if the queue length is more than one person
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

	// calculate time left for each player
	// edit: done in emitTurnTimesLeft();
	// may actually be needed here though
	// uncomment if stuff breaks
// 	for (let i = 0; i < turnStartTimes.length; i++) {
// 		let currentTime = Date.now();
// 		let elapsedTime = currentTime - turnStartTimes[i];
// 		let timeLeft = turnDurations[i] - elapsedTime;
// 		let elapsedTimeSinceLastMove = currentTime - forfeitStartTimes[i];
// 		let timeLeftForfeit = timeTillForfeitDurations[i] - elapsedTimeSinceLastMove;

// 		turnTimesLeft[i] = timeLeft;
// 		forfeitTimesLeft[i] = timeLeftForfeit;

// 		if(timeLeftForfeit < -50) {
// // 			console.log("forfeit system screwed up somehow by: " + timeLeftForfeit);
// 			// reset forfeit timer:
// 			forfeitStartTimes[i] = Date.now();
// 			clearTimeout(forfeitTimers[i]);
// 			forfeitTimers[i] = setTimeout(forfeitTurn, timeTillForfeitDurations[i], controlQueues[i][0], i);

// 			// set the forfeitTime left to the duration of the forfeit timer:
// 			forfeitTimesLeft[i] = timeTillForfeitDurations[i];
// 		}
// 	}

	laglessClientNames[0] = [];
	laglessClientNames[1] = [];
	laglessClientNames[2] = [];
	laglessClientNames[3] = [];

	// create viewer list:
	for (let i = 0; i < laglessClientIds[0].length; i++) {
		laglessClientNames[0].push(getClientUniqueIDbySockedID(laglessClientIds[0][i]));
	}
	for (let i = 0; i < laglessClientIds[1].length; i++) {
		laglessClientNames[1].push(getClientUniqueIDbySockedID(laglessClientIds[1][i]));
	}
	for (let i = 0; i < laglessClientIds[2].length; i++) {
		laglessClientNames[2].push(getClientUniqueIDbySockedID(laglessClientIds[2][i]));
	}
	for (let i = 0; i < laglessClientIds[3].length; i++) {
		laglessClientNames[3].push(getClientUniqueIDbySockedID(laglessClientIds[3][i]));
	}


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
				if (client.uniqueID != null) {
					waitlists[i].push(client.uniqueID);
				} else {
// 					io.to(client.id).emit("replaceWithTwitchLock");
				}
			}
		} else if (laglessClientIds[i].length == waitlistMaxes[i]) {
			waitlists[i] = oldWaitlists[i];
		}


	}

	// emit turn times left:
	emitTurnTimesLeft();

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

// do every once in a while:
setInterval(function() {
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

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8100;
io.listen(8110);

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
	x1: -2560,
	y1: 0,
	x2: 0,
	y2: 1080,
	framerate: 15,
	quality: 60,
	scale: 30,
};
let lagless2Settings = { framerate: 20, videoBitrate: 1, scale: 540 };
let lagless3Settings = { framerate: 20, videoBitrate: 1, scale: 540 };

let lastImage = "";
let clientDB;
let clients = {};
let channels = {};
let restartAvailable = true;
let lagless2ChangeAvailable = true;
let locked = false;
let queuesLocked = false;
let restPos = 128;
let waitlist = [];
let siteCapacity = 10;
let waitlistMax = 5;
let minQueuePosition = 4;

let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146", "103.217.104.190", "103.217.104.246"];

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
let laglessClientUserids = [
	[],
	[],
	[],
	[],
	[],
];

let normalTime = 1000 * 60 * 2;// 2 minutes
let subTime = normalTime * 2.5;
let forfeitTime = 1000 * 15;// 15 seconds
let tempBanTime = 5 * 1000 * 60; // 5 minutes

const NUM_PLAYERS = 10;

let turnLengths = [];
let forfeitLengths = [];
let turnStartTimes = [];
let forfeitStartTimes = [];
let moveLineTimers = [];
let forfeitTimers = [];
let turnExpirations = [];
let forfeitExpirations = [];
let controllerList = [];
let controlQueues = [];

for (let i = 0; i < NUM_PLAYERS; i++) {
	turnLengths.push(normalTime);
	forfeitLengths.push(forfeitTime);
	turnStartTimes.push(Date.now());
	forfeitStartTimes.push(Date.now());
	moveLineTimers.push(null);
	forfeitTimers.push(null);
	turnExpirations.push(0);
	forfeitExpirations.push(0);
	controllerList.push(i);
	controlQueues.push([]);
}

let numberOfLastFewMessages = 5;
let lastFewMessages = [];

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

let uniqueIDToPreferredUsernameMap = {};
let useridToSocketidMap = {};
let accountMap = {
	TPNSbot: {
		is_mod: true,
	},
};

let mongoURL = "mongodb://localhost:27017/db";
mongoose.connect(mongoURL);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


// get banned IPs:
redisClient.getAsync("bannedIPs").then((dbBannedIPs) => {
	let databaseIPs;
	if (databaseIPs == null) {
		console.log("Creating IP DB.");
		databaseIPs = bannedIPs;
	} else {
		databaseIPs = JSON.parse(dbBannedIPs);
	}
	bannedIPs = databaseIPs;
	// re-stringify:
	let databaseIPsString = JSON.stringify(databaseIPs);
	// store back in database:
	// store account at uniqueID location, at clients key:
	redisClient.setAsync("bannedIPs", databaseIPsString).then((success) => {
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

	// stats:
	timePlayed: Number,

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
		Account.findOne({ "token": req.session.uniqueToken }).exec((error, account) => {

			if (error) {
				console.log(error);
				throw error;
			}

			// account exists:
			if (account) {
				// update info:
				connectAccount(account, profile, type);
				// save:
				account.save((err) => {
					if (err) {
						console.log(err);
						throw err;
					}
					console.log("account saved.");
				});
				return;
			}

			if (!account) {
				console.log("couldn't find account from token. continuing to find / create one from oauth.");
			}
		});
		// create an account if one wasn't found:
		// return;
	}

	// check if the acccount already exists:
	let queryObj = {};
	queryObj[type + "." + "id"] = profile.id;
	Account.findOne(queryObj).exec((error, account) => {

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
			account.save((err) => {
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
			newAccount.save((err) => {
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
	(req, accessToken, refreshToken, profile, done) => {
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
	(req, accessToken, refreshToken, profile, done) => {
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
	(req, accessToken, refreshToken, profile, done) => {
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
	(req, accessToken, refreshToken, profile, done) => {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;
		updateOrCreateUser(profile, "discord", req);
		done(null, profile);
	}
));

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((user, done) => {
	done(null, user);
});

// app.get("/auth/twitch/", passport.authenticate("twitch", {forceVerify: true}));
app.get("/auth/twitch/", (req, res, next) => {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("twitch", { forceVerify: true })(req, res, next);
}, (req, res) => {});
app.get("/auth/twitch/callback", passport.authenticate("twitch", {
	successRedirect: "/8100/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/google/", passport.authenticate("google"));
app.get("/auth/google/", (req, res, next) => {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("google")(req, res, next);
}, (req, res) => {});
app.get("/auth/google/callback", passport.authenticate("google", {
	successRedirect: "/8100/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/youtube/", passport.authenticate("youtube"));
app.get("/auth/youtube/", (req, res, next) => {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("youtube")(req, res, next);
}, (req, res) => {});
app.get("/auth/youtube/callback", passport.authenticate("youtube", {
	successRedirect: "/8100/redirect",
	failureRedirect: "/",
}));

// app.get("/auth/discord/", passport.authenticate("discord"));
app.get("/auth/discord/", (req, res, next) => {
	req.session.uniqueToken = req.query.uniqueToken;
	passport.authenticate("discord")(req, res, next);
}, (req, res) => {});
app.get("/auth/discord/callback", passport.authenticate("discord", {
	successRedirect: "/8100/redirect",
	failureRedirect: "/",
}));


// If user has an authenticated session, display it, otherwise display link to authenticate
app.get("/redirect", (req, res) => {
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

		Account.findOne(queryObj).exec((error, account) => {

			if (error) {
				console.log(error);
				throw error;
			}
			// account exists:
			if (account) {
				account.token = token;
				// save:
				account.save((err) => {
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
				res.send(`<script>window.location.href = "https://remotegames.io/reset";</script>`);
			} else {
				res.send(`<script>window.location.href = "https://remotegames.io";</script>`);
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
	// else {
	// 	console.log("couldn't find account / no session.");
	// 	res.send(`<script>window.location.href = "https://remotegames.io/reset";</script>`);
	// }
	// res.send(`<script>window.location.href = "https://remotegames.io";</script>`);
});

app.get("/deleteDB", (req, res) => {
	console.log("deleting DB");
	Account.remove({}, () => {});
	// 	res.send(`<script>window.location.href = "https://remotegames.io";</script>`);
});

server.listen(port, () => {
	console.log("Server listening at port %d", port);
});

//console.log(util.inspect(clientDB, false, null));

function Client(socket) {

	this.socket = socket;
	this.id = socket.id;
	this.userid = null;
	this.name = "none";
	this.username = null;
	this.validUsernames = [];
	this.rooms = [];
	this.joinTime = new Date();
	this.timePlayed = 0;

	this.ip = this.socket.handshake.headers["x-real-ip"];
	this.port = this.socket.handshake.headers["x-real-port"];

	this.is_mod = false;
	this.is_plus = false;
	this.is_sub = false;
	this.is_ban = false;

	return this;
}

function findClientByUserid(userid) {

	let socketid = useridToSocketidMap[userid];
	if (socketid != null && clients[socketid] != null) {
		return socketid;
	}

	let index = -1;
	for (key in clients) {
		if (clients[key].userid == userid) {
			index = clients[key].id;
			useridToSocketidMap[userid] = index;
			return index;
		}
	}
	return index;
}

io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io.on("connection", (socket) => {

	clients[socket.id] = new Client(socket);
	console.log("#clients: " + Object.keys(clients).length);

	// authenticate:
	socket.on("authenticate", (data) => {

		let client = clients[socket.id];

		// get account by token:
		Account.findOne({ "token": data.auth }).exec((error, account) => {
			if (error) {
				console.log(error);
				throw error;
			}
			// acount doesn't exist:
			if (!account) {
				client.username = null;
				client.userid = null;
				console.log("account not found.");
				console.log("invalid password.");
				socket.emit("needToSignIn");
				return;
			}
			// account exists:
			// check if already logged in:
			let userid = "" + account._id;
			userid = userid.trim();
			redisClient.setAsync(`users:${userid}`, socket.id, "NX", "EX", 30).then((success) => {

				if (!success) {
					console.log("already logged in.");
					socket.emit("unauthorized", "ALREADY_LOGGED_IN");
					return;
				}
				// console.log("registering account.");
				client.validUsernames = [];

				if (account.connectedAccounts.indexOf("discord") > -1) {
					client.validUsernames.push(account.discord.username + "#" + account.discord.discriminator);
				}
				if (account.connectedAccounts.indexOf("twitch") > -1) {
					client.validUsernames.push(account.twitch.displayName);
					// todo: fix
					if (sublist.indexOf(account.twitch.displayName) > -1) {
						account.is_sub = true;
					}
					if (pluslist.indexOf(account.twitch.displayName) > -1) {
						account.is_plus = true;
					}
				}
				if (account.connectedAccounts.indexOf("youtube") > -1) {
					client.validUsernames.push(account.youtube.displayName);
				}
				if (account.connectedAccounts.indexOf("google") > -1) {
					client.validUsernames.push(account.google.displayName);
				}

				if (data.usernameIndex >= 0 && data.usernameIndex < client.validUsernames.length) {
					client.username = client.validUsernames[data.usernameIndex];
				} else {
					client.username = client.validUsernames[0];
				}

				client.userid = "" + account._id;
				client.userid = client.userid.trim();

				client.is_mod = account.is_mod;
				client.is_plus = account.is_plus;
				client.is_sub = account.is_sub;
				client.is_ban = client.is_ban || account.is_ban;
				client.timePlayed = (account.timePlayed || 0);

				// save IP if not known:
				if (account.IPs.indexOf(client.ip) == -1) {
					account.IPs.push(client.ip);
				}

				// todo: maybe ban the account if using a banned IP: (or keep as is)
				for (let i = 0; i < account.IPs.length; i++) {
					if (bannedIPs.indexOf(account.IPs[i]) > -1) {
						client.is_ban = true;
					}
				}

				uniqueIDToPreferredUsernameMap[client.userid] = client.username;
				accountMap[client.userid] = {
					username: client.username,
					is_sub: client.is_sub,
					is_plus: client.is_plus,
					is_mod: client.is_mod,
					is_ban: client.is_ban,
					timePlayed: client.timePlayed,
					validUsernames: client.validUsernames,
				};


				let userInfo = {};
				userInfo.userid = client.userid;
				userInfo.username = client.username;
				userInfo.connectedAccounts = account.connectedAccounts;
				userInfo.validUsernames = client.validUsernames;
				userInfo.timePlayed = client.timePlayed;
				userInfo.is_mod = client.is_mod;

				socket.emit("userInfo", userInfo);

			});
		});
	});

	socket.conn.on("packet", async (packet) => {
		if (packet.type !== "ping") {
			return;
		}
		let client = clients[socket.id];
		if (client && client.userid) {
			await redisClient.setAsync(`users:${client.userid}`, socket.id, "XX", "EX", 30);
		}
	});

	socket.on("disconnect", () => {
		// console.log("disconnected");

		let client = clients[socket.id];
		if (client) {

			// update timePlayed:
			// get account:
			Account.findOne({ _id: client.userid }, (error, account) => {
				if (error) {
					console.log(error);
					throw error;
				}
				// account exists:
				if (account) {
					// update info:
					account.timePlayed = client.timePlayed;
					// save:
					account.save((err) => {
						if (err) {
							console.log(err);
							throw err;
						}
					});
				}
			});

			// remove from account map:
			delete accountMap[client.userid];
			// remove from socketid map (if there):
			delete useridToSocketidMap[client.userid];
			// delete:
			delete clients[socket.id];
			if (client.userid != null) {
				redisClient.delAsync(`users:${client.userid}`);
			}
		}
		console.log("#clients: " + Object.keys(clients).length);
	});

	// chat:
	socket.on("chatMessage", (data) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}
		if (client.is_ban) {
			socket.emit("banned");
			return;
		}
		if (data && typeof (data.message) != "string") {
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
		if (((btns & (1 << 8)) != 0) && !client.is_mod) {
			valid = false;
		}
		if (((btns & (1 << 16)) != 0) && !client.is_plus) {
			valid = false;
		}
		if (((btns & (1 << 17)) != 0) && !client.is_mod) {
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
	socket.on("restart1", () => {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless1");
		io.emit("quit");
	});
	socket.on("restart2", () => {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless2");
		io.to("lagless2Host").emit("restart");

		// todo: resend settings
		setTimeout(() => {
			io.to("lagless2Host").emit("settings", lagless2Settings);
			io.to("lagless4Host").emit("settings", lagless2Settings);
		}, 3000);

		// notify client to restart:
		io.emit("lagless2SettingsChange");
	});
	socket.on("restart3", () => {
		if (!restartAvailable) {
			return;
		}
		restartAvailable = false;
		console.log("restarting lagless3");
		io.to("lagless3Host").emit("restart");

		// todo: resend settings
		setTimeout(() => {
			io.to("lagless3Host").emit("settings", lagless3Settings);
		}, 3000);

		// notify client to restart:
		io.emit("lagless3SettingsChange");
	});

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
		setTimeout((client) => {
			client.is_ban = false;
		}, tempBanTime, client);

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

		client.is_ban = true;
		client.is_perma_ban = true;
		for (let i = 0; i < controlQueues.length; i++) {
			forfeitTurn(client.userid, i);
		}

		// perma / IP ban:

		// get account:
		Account.findById(client.userid, (error, account) => {
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
				account.save((err) => {
					if (err) {
						console.log(err);
						throw err;
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

		client.is_ban = false;
		client.is_perma_ban = false;

		// unban:

		// get account:
		Account.findOne({ _id: client.userid }, (error, account) => {
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
				account.save((err) => {
					if (err) {
						console.log(err);
						throw err;
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
		if (typeof (data) != "string") {
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

	/* LAGLESS 1 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless1Settings", (data) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}
		if (client.userid != controlQueues[0][0] && controlQueues[0].length > 0 && !client.is_mod) {
			io.emit("lagless1Settings", lagless1Settings);
			return;
		}

		let obj = {};
		if (typeof data.scale == "number") {
			obj.scale = data.scale;
		}
		if (typeof data.quality == "number") {
			obj.quality = data.quality;
		}
		if (typeof data.framerate == "number") {
			obj.framerate = data.framerate;
		}

		if (!_.isEmpty(obj)) {
			lagless1Settings = Object.assign({}, lagless1Settings, obj);
			io.to("lagless1Host").emit("settings", lagless1Settings);
			io.emit("lagless1Settings", lagless1Settings);
		}
	});

	/* LAGLESS2 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless2Settings", (data) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}
		if (client.userid != controlQueues[0][0] && controlQueues[0].length > 0 && !client.is_mod) {
			io.emit("lagless2Settings", lagless2Settings);
			return;
		}

		let obj = {};
		if (typeof data.framerate == "number") {
			obj.framerate = data.framerate;
		}
		if (typeof data.videoBitrate == "number") {
			obj.videoBitrate = data.videoBitrate;
		}
		if (typeof data.scale == "number") {
			obj.scale = data.scale;
		}
		// if (typeof data.offsetX == "number") {
		// 	obj.offsetX = data.offsetX;
		// }
		// if (typeof data.offsetY == "number") {
		// 	obj.offsetY = data.offsetY;
		// }
		if (!_.isEmpty(obj)) {
			lagless2Settings = Object.assign({}, lagless2Settings, obj);
			io.emit("lagless2SettingsChange");
			io.to("lagless2Host").emit("settings", lagless2Settings);
			io.to("lagless4Host").emit("settings", lagless2Settings);
			io.emit("lagless2Settings", lagless2Settings);
		}
	});

	/* LAGLESS3 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("lagless3Settings", (data) => {
		let client = clients[socket.id];
		if (client == null || client.userid == null) {
			return;
		}
		if (client.userid != controlQueues[0][0] && controlQueues[0].length > 0 && !client.is_mod) {
			io.emit("lagless3Settings", lagless3Settings);
			return;
		}

		let obj = {};
		if (typeof data.framerate == "number") {
			obj.framerate = data.framerate;
		}
		if (typeof data.videoBitrate == "number") {
			obj.videoBitrate = data.videoBitrate;
		}
		if (typeof data.scale == "number") {
			obj.scale = data.scale;
		}
		// if (typeof data.offsetX == "number") {
		// 	obj.offsetX = data.offsetX;
		// }
		// if (typeof data.offsetY == "number") {
		// 	obj.offsetY = data.offsetY;
		// }
		if (!_.isEmpty(obj)) {
			lagless3Settings = Object.assign({}, lagless3Settings, obj);
			io.emit("lagless3SettingsChange");
			io.to("lagless3Host").emit("settings", lagless3Settings);
			io.emit("lagless3Settings", lagless3Settings);
		}
	});


	/* WebRTC @@@@@@@@@@@@@@@@@@@@@@@@ */
	/* SIMPLEPEER */
	socket.on("hostPeerSignal", (data) => {
		io.emit("hostPeerSignal", data);
	});
	socket.on("clientPeerSignal", (data) => {
		io.emit("clientPeerSignal", { id: socket.id, data: data });
	});
	socket.on("requestAudio", (data) => {
		io.to("audioHost").emit("createNewPeer", { id: socket.id });
	});
	socket.on("hostPeerSignalReply", (data) => {
		io.to(data.id).emit("hostPeerSignal", data.data);
	});
	// video:
	socket.on("hostPeerSignalV", (data) => {
		io.emit("hostPeerSignalV", data);
	});
	socket.on("clientPeerSignalV", (data) => {
		io.emit("clientPeerSignalV", { id: socket.id, data: data });
	});
	socket.on("requestVideo", (data) => {
		io.to("videoHost").emit("createNewPeerV", { id: socket.id });
	});
	socket.on("hostPeerSignalReplyV", (data) => {
		io.to(data.id).emit("hostPeerSignalV", data.data);
	});


	/* AUDIO 4.0 @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("d", (data) => {
		data["sid"] = socket.id;
		socket.to("audio4").emit("d", data); //Send to all but the sender
	});

	/* LATENCY @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("ping2", () => {
		socket.emit("pong2");
	});

	/* ROOMS @@@@@@@@@@@@@@@@@@@@@@@@ */

	socket.on("leave", (room) => {
		socket.leave(room);
	});

	socket.on("join", (room) => {

		let client = clients[socket.id];

		let secureList = ["lagless1Host", "lagless2Host", "lagless3Host", "lagless4Host", "lagless5Host", "controller", "controller2"];
		let streamList = ["stream0", "stream1", "stream2", "stream3", "stream4"];
		if (secureList.indexOf(room) > -1) {
			return;
		}

		if (streamList.indexOf(room) > -1) {
			for (let i = 0; i < streamList.length; i++) {
				if (streamList[i] != room) {
					socket.leave(streamList[i]);
				}
			}
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
			let client = clients[socket.id];
			if (client.rooms.indexOf(myData.room) == -1) {
				client.rooms.push(myData.room);
			}
			socket.join(myData.room);
		}
	});

	socket.on("leaveStreams", () => {
		for(let i = 0; i < 5; i++) {
			socket.leave("stream" + i);
		}
	});

	/* BAN EVASION */
	// socket.on("registerIP", (data) => {
	//
	// 	let client = clients[socket.id];
	//
	// 	if (client == null || client.userid == null) {
	// 		console.log("not signed in.");
	// 		return;
	// 	}
	//
	// 	if (client.is_mod) {
	// 		return;
	// 	}
	//
	// 	// console.log("ip?: " + socket.conn.transport.socket._socket.remoteAddress);
	// 	// console.log("ip?2: " + socket.handshake.headers['x-forwarded-for'].split(",")[0]);
	// 	// console.log("username: " + data.username + " id: " + data.id + " ip: " + data.ip);
	//
	// 	// return if banned:
	// 	if (client.is_perma_banned || client.is_temp_banned) {
	// 		console.log("client is banned.");
	// 		return;
	// 	}
	//
	// 	// get account:
	// 	Account.findOne({ _id: client.userid }, (error, account) => {
	// 		if (error) {
	// 			console.log(error);
	// 			throw error;
	// 		}
	// 		// account exists:
	// 		if (account) {
	// 			// update info:
	// 			if (account.IPs.indexOf(data.ip) == -1) {
	// 				account.IPs.push(data.ip);
	// 			}
	// 			// save:
	// 			account.save((err) => {
	// 				if (err) {
	// 					console.log(err);
	// 					throw err;
	// 				}
	// 			});
	// 		}
	// 	});
	// });

	// send on connect:

	// settings:
	socket.emit("lagless1Settings", lagless1Settings);
	socket.emit("lagless2Settings", lagless2Settings);
	socket.emit("lagless3Settings", lagless2Settings);
	// socket.emit("lagless4Settings", lagless4Settings);

	socket.emit("banlist", banlist);
	socket.emit("bannedIPs", bannedIPs);
	socket.emit("usernameMap", uniqueIDToPreferredUsernameMap);
	socket.emit("accountMap", accountMap);
	socket.emit("controlQueues", controlQueues);
	socket.emit("turnLengths", {
		turnLengths: turnLengths,
		forfeitLengths: forfeitLengths,
	});
	socket.emit("turnStartTimes", {
		turnStartTimes: turnStartTimes,
		forfeitStartTimes: forfeitStartTimes,
	});
	for (let i = 0; i < lastFewMessages.length; i++) {
		socket.emit("chatMessage", { ...lastFewMessages[i], isReplay: true });
	}
});

setInterval(() => {
	restartAvailable = true;
}, 10000);
setInterval(() => {
	lagless2ChangeAvailable = true;
}, 300);


function forfeitTurn(userid, cNum) {

	// forfeit turn:
	let index = controlQueues[cNum].indexOf(userid);
	if (index == -1) {
		// 		console.log(userid);
		console.log("userid not found.");
		return;
	}

	controlQueues[cNum].splice(index, 1);
	io.emit("controlQueues", controlQueues);
	// reset the controller
	io.emit("controllerState", {
		cNum: cNum,
		btns: 0,
		axes: [restPos, restPos, restPos, restPos, 0, 0],
	});

	// reset the timers if the person forfeiting is first in line:
	if (index === 0) {
		resetTimers(controlQueues[cNum][0], cNum);
	}

	// sub perk:
	index = findClientByUserid(controlQueues[cNum][0]);
	let client = clients[index];
	if (client != null && client.userid != null) {
		if (client.is_sub) {
			turnLengths[cNum] = normalTime * 2;
		} else {
			turnLengths[cNum] = normalTime;
		}
	}

	// emit turn times left:
	calculateTurnExpirations();
}


function calculateTurnExpirations() {
	// calculate time left for each player
	for (let i = 0; i < turnLengths.length; i++) {
		if (controlQueues[i].length == 0) {
			turnExpirations[i] = turnLengths[i];
			forfeitExpirations[i] = forfeitLengths[i];
			continue;
		}
		let currentTime = Date.now();
		let elapsedTime = currentTime - turnStartTimes[i];
		let timeLeft = turnLengths[i] - elapsedTime;
		let elapsedTimeSinceLastMove = currentTime - forfeitStartTimes[i];
		let timeLeftForfeit = forfeitLengths[i] - elapsedTimeSinceLastMove;
		turnExpirations[i] = timeLeft;
		forfeitExpirations[i] = timeLeftForfeit;
	}

	// create current players list:
	let currentPlayers = [];
	for (let i = 0; i < controlQueues.length; i++) {
		currentPlayers.push(uniqueIDToPreferredUsernameMap[controlQueues[i][0]]);
	}

	// remove waitlisted people from viewer list:

	io.emit("turnTimesLeft", {
		currentPlayers: currentPlayers,
	});

	// io.emit("turnExpirations", {
	// 	turnExpirations: turnExpirations,
	// 	forfeitExpirations: forfeitExpirations,
	// });

}

// todo: only send the diff of what changed / make it only reset the cNum
function emitTurnStartTimes() {
	io.emit("turnStartTimes", {
		turnStartTimes: turnStartTimes,
		forfeitStartTimes: forfeitStartTimes,
	});
}

function emitForfeitStartTimes() {
	io.emit("turnStartTimes", {
		forfeitStartTimes: forfeitStartTimes,
	});
}

function resetTimers(userid, cNum) {

	// sub perk:
	let index = findClientByUserid(controlQueues[cNum][0]);
	let client = clients[index];
	if (client != null && client.userid != null) {
		if (client.is_sub) {
			turnLengths[cNum] = normalTime * 2;
		} else {
			turnLengths[cNum] = normalTime;
		}
	}

	// reset turn timer:
	turnStartTimes[cNum] = Date.now();

	// reset forfeit timer:
	forfeitStartTimes[cNum] = Date.now();

	emitTurnStartTimes();
	emitForfeitStartTimes();
}

function moveLine(cNum) {

	// if the queue length is more than one person
	// move the line:
	if (controlQueues[cNum].length > 1) {
		controlQueues[cNum].shift();
		// reset the controller
		io.emit("controllerState", {
			cNum: cNum,
			btns: 0,
			axes: [restPos, restPos, restPos, restPos, 0, 0],
		});
		io.emit("controlQueues", controlQueues);
	}

	// sub perk:
	let index = findClientByUserid(controlQueues[cNum][0]);
	let client = clients[index];
	if (client != null && client.userid != null) {
		if (client.is_sub) {
			turnLengths[cNum] = normalTime * 2;
		} else {
			turnLengths[cNum] = normalTime;
		}
	}

	// reset turn time:
	turnStartTimes[cNum] = Date.now();
	emitTurnStartTimes();

	// if the queue length is more than one person
	if (controlQueues[cNum].length > 1) {
		// reset forfeit timer:
		forfeitStartTimes[cNum] = Date.now();
		emitForfeitStartTimes();
	}
}

setInterval(() => {

	for (let i = 0; i < 5; i++) {
		io.in("stream" + i).clients((error, clientIDs) => {
			if (error) throw error;
			laglessClientIds[i] = clientIDs;
		});
	}

	// create viewer list:
	// for each stream:
	for (let i = 0; i < laglessClientIds.length; i++) {
		// reset:
		laglessClientUserids[i] = [];
		// for each user:
		for (let j = 0; j < laglessClientIds[i].length; j++) {
			let client = clients[laglessClientIds[i][j]];
			if (client && client.userid) {
				laglessClientUserids[i].push(client.userid);
			}
		}
	}

	waitlist = [];

	let loggedInClientIDs = [];

	// get list of logged in clients:
	for (let key in clients) {
		let client = clients[key];
		if (client != null && client.userid != null && clients[client.id] != null && client.id != null) {
			loggedInClientIDs.push(client.id);
		}
		// todo: remove invalid users if they exist:
	}

	// console.log(clients);

	// check if site is over capacity:
	if (loggedInClientIDs.length >= siteCapacity) {
		// the number of people we need to put into the waitlist:
		let numberOfPeopleToWaitlist = loggedInClientIDs.length - siteCapacity;
		// remove anyone exempt by being in a queue, with a position less than minQueuePositions:
		// loop through control queues:

		// make a copy to modify:
		let loggedInClientIDsCopy = loggedInClientIDs.slice(0);

		for (let i = 0; i < controlQueues.length; i++) {

			// check if any of the users are in the queue:

			// modifies copy:
			for (let j = 0; j < loggedInClientIDs.length; j++) {
				console.log(loggedInClientIDs[j]);
				let userid = clients[loggedInClientIDs[j]].userid;
				// if they're in pos < minQueuePosition, exempt:
				if (controlQueues[i].indexOf(userid) < minQueuePosition) {
					// remove from loggedInClientIDs
					loggedInClientIDsCopy.splice(j, 1);
				}
			}
			// modifies original:
			// let j = loggedInClientIDs.length;
			// while (j--) {
			// 	let userid = clients[loggedInClientIDs[j]].userid;
			// 	// if they're in pos < minQueuePosition, exempt:
			// 	if (controlQueues[i].indexOf(userid) < minQueuePosition) {
			// 		// remove from loggedInClientIDs
			// 		loggedInClientIDs.splice(j, 1);
			// 	}
			// }
		}

		// now we have a list of non-auto-exempt people:
		// sort them by the time that they joined, and exempt more people until the queue limit is met

		// get the actual client objects:
		let nonExemptClients = [];
		for (let i = 0; i < loggedInClientIDsCopy.length; i++) {
			let socketid = loggedInClientIDsCopy[i];
			if (clients[socketid].userid != null) {
				laglessXClients.push(clients[socketid]);
			} else {
				console.log("this shouldn't have happened.");
			}
		}

		// sort by time joined:
		nonExemptClients = _.sortBy(nonExemptClients, "joinTime");

		// pick the first X to be exempted:
		while (nonExemptClients.length > numberOfPeopleToWaitlist) {
			nonExemptClients.shift();
		}

		// our final waitlist is everyone in nonExemptClients
		for (let i = 0; i < nonExemptClients.length; i++) {
			let client = nonExemptClients[j];
			if (client != null && client.userid != null) {
				waitlist.push(client.userid);
			} else {
				console.log("this shouldn't have happened2.");
			}
		}
	}

	// emit turn times left:
	calculateTurnExpirations();

	if (!queuesLocked) {
		for (let i = 0; i < forfeitExpirations.length; i++) {
			if (forfeitExpirations[i] < -450 && controlQueues[i][0] != null) {
				forfeitTurn(controlQueues[i][0], i);
			}
		}

		for (let i = 0; i < turnExpirations.length; i++) {
			if (turnExpirations[i] < -450) {
				moveLine(i);
			}
		}
	}

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
	// let elapsedTime = Date.now() - afkTimer;
	// if (elapsedTime > afkTime) {
	// 	afkTimer = Date.now();
	// 	io.to("controller").emit("afk");
	// }

}, 1000);

// do every once in a while:
setInterval(() => {
	io.emit("usernameMap", uniqueIDToPreferredUsernameMap);
	io.emit("accountMap", accountMap);
	io.emit("bannedIPs", bannedIPs);
	io.emit("waitlist", {
		waitlist: waitlist,
	});
	io.emit("serverTime", Date.now());
}, 30000);

setInterval(() => {
	io.emit("turnLengths", {
		turnLengths: turnLengths,
		forfeitLengths: forfeitLengths,
	});
	io.emit("viewers", {
		viewers: [laglessClientUserids[0], laglessClientUserids[1], laglessClientUserids[2], laglessClientUserids[3], laglessClientUserids[4]],
	});
	emitForfeitStartTimes();
}, 5000);

setInterval(() => {
	io.to("controller").emit("stayConnected");
}, 4000);

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
function customSetInterval(func, time){
    var lastTime = Date.now(),
        lastDelay = time,
        outp = {};
    function tick(){
        func();
        var now = Date.now(),
            dTime = now - lastTime;

        lastTime = now;
        lastDelay = time + lastDelay - dTime;
        outp.id = setTimeout(tick, lastDelay);
    }
    outp.id = setTimeout(tick, time);
    return outp;
}
let timer = customSetInterval(addTimePlayed, 1000);

function stream() {
	if (laglessClientIds[1].length > 0) {
		io.to("lagless1Host").emit("start");
	} else {
		io.to("lagless1Host").emit("stop");
	}
	setTimeout(stream, 1000);
}
stream();

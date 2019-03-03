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

io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io.on("connection", (socket) => {

	clients[socket.id] = new Client(socket);
	console.log("#clients: " + Object.keys(clients).length);


});

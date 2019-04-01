const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8099;
const config = require("./config.js");

const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
const twitchStrategy = require("passport-twitch").Strategy;
const googleStrategy = require("passport-google-oauth20").Strategy;
const youtubeV3Strategy = require("passport-youtube-v3").Strategy;
const discordStrategy = require("passport-discord").Strategy;

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

const crypto = require("crypto");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
	}),
);
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// mongoose:
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoose = require("mongoose");
// Define a schema
let Schema = mongoose.Schema;

let mongoURL = "mongodb://localhost:27017/db";
mongoose.connect(mongoURL);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;

// redis:
const bluebird = require("bluebird");
const redis = require("redis");
bluebird.promisifyAll(redis);
let redisClient = redis.createClient({ host: "localhost", port: 6379 });

let useridToSocketidMap = {};
let masterAccountMap = {
	TPNSbot: {
		isMod: true,
	},
};
let localizedAccountMaps = {};
let bannedIPs = [
	"84.197.3.92",
	"94.214.218.184",
	"185.46.212.146",
	"103.217.104.190",
	"103.217.104.246",
];
let modlist = [
	"melodiousmarci",
	"harmjan387",
	"beanjr_yt",
	"alua2020",
	"ogcristofer",
	"stravos96",
	"splatax",
	"silvermagpi",
	"remotegames",
	"fossephate",
	"tpnsbot",
];
let pluslist = modlist.slice(0);

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

function updateOrCreateUser(profile, type, req) {
	// link to existing account:
	if (req.session.uniqueToken != null) {
		// get account by token:
		Account.findOne({ authToken: req.session.uniqueToken }).exec((error, account) => {
			if (error) {
				throw error;
			}

			// account exists:
			if (account) {
				// update info:
				connectAccount(account, profile, type);
				// save:
				account.save((error) => {
					if (error) {
						throw error;
					}
					console.log("account saved.");
				});
				return;
			}

			if (!account) {
				console.log(
					"Couldn't find account from authToken. Continuing to find / create one from oauth.",
				);
			}
		});
		// create an account if one wasn't found:
		// return;
	}

	// check if the acccount already exists:
	let queryObj = { [type + ".id"]: profile.id };
	Account.findOne(queryObj).exec((error, account) => {
		// error check:
		if (error) {
			throw error;
		}
		// account already exists:
		if (account) {
			console.log("account already exists, updating info.");
			// update info:
			connectAccount(account, profile, type);
			// save:
			account.save((error) => {
				if (error) {
					throw error;
				}
				console.log("account saved.");
			});

			// acount doesn't exist:
		} else {
			console.log("creating account.");

			// create the user & add account details:
			let newAccount = new Account();

			// add info:
			connectAccount(newAccount, profile, type);

			// save the new instance:
			newAccount.save((error) => {
				if (error) {
					throw error;
				}
				console.log("account saved.");
			});
		}
	});
}

let accountSchema = Schema({
	// 	_id: Schema.Types.ObjectId,// created & initialized automatically

	email: String,
	username: String,
	password: String,

	authToken: String,
	streamKey: String,
	isStreaming: Boolean,

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
	isMod: Boolean,
	isPlus: Boolean,
	isSub: Boolean,

	isBan: Boolean,
	isPermaBan: Boolean,
	isTempBan: Boolean,

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
			account.isMod = true;
		}
		if (pluslist.indexOf(account.twitch.username) > -1) {
			account.isPlus = true;
		}
		// if (sublist.indexOf(account.twitch.displayName) > -1) {
		// 	account.isSub = true;
		// }
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

// twitch:
passport.use(
	new twitchStrategy(
		{
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
		},
	),
);
// google:
passport.use(
	new googleStrategy(
		{
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
		},
	),
);
// youtube:
passport.use(
	new youtubeV3Strategy(
		{
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
		},
	),
);
// discord:
passport.use(
	new discordStrategy(
		{
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
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user);
});
passport.deserializeUser((user, done) => {
	done(null, user);
});

// app.get("/auth/twitch/", passport.authenticate("twitch", {forceVerify: true}));
app.get(
	"/auth/twitch/",
	(req, res, next) => {
		req.session.uniqueToken = req.query.uniqueToken;
		passport.authenticate("twitch", { forceVerify: true })(req, res, next);
	},
	(req, res) => {},
);
app.get(
	"/auth/twitch/callback",
	passport.authenticate("twitch", {
		successRedirect: "/8099/redirect",
		failureRedirect: "/",
	}),
);

// app.get("/auth/google/", passport.authenticate("google"));
app.get(
	"/auth/google/",
	(req, res, next) => {
		req.session.uniqueToken = req.query.uniqueToken;
		passport.authenticate("google")(req, res, next);
	},
	(req, res) => {},
);
app.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: "/8099/redirect",
		failureRedirect: "/",
	}),
);

// app.get("/auth/youtube/", passport.authenticate("youtube"));
app.get(
	"/auth/youtube/",
	(req, res, next) => {
		req.session.uniqueToken = req.query.uniqueToken;
		passport.authenticate("youtube")(req, res, next);
	},
	(req, res) => {},
);
app.get(
	"/auth/youtube/callback",
	passport.authenticate("youtube", {
		successRedirect: "/8099/redirect",
		failureRedirect: "/",
	}),
);

// app.get("/auth/discord/", passport.authenticate("discord"));
app.get(
	"/auth/discord/",
	(req, res, next) => {
		req.session.uniqueToken = req.query.uniqueToken;
		passport.authenticate("discord")(req, res, next);
	},
	(req, res) => {},
);
app.get(
	"/auth/discord/callback",
	passport.authenticate("discord", {
		successRedirect: "/8099/redirect",
		failureRedirect: "/",
	}),
);

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get("/redirect", (req, res) => {
	if (req.session && req.session.passport && req.session.passport.user) {
		console.log("setting cookie.");

		console.log(req.user);

		// create an authToken that lets us access the account:
		let authToken = crypto.randomBytes(64).toString("hex");

		let type = req.user.provider;
		let id = req.user.id;

		// get account:
		let queryObj = {};
		queryObj[type + "." + "id"] = id;

		Account.findOne(queryObj).exec((error, account) => {
			if (error) {
				throw error;
			}
			// account exists:
			if (account) {
				account.authToken = authToken;
				// save:
				account.save((error) => {
					if (error) {
						throw error;
					}
					console.log("account saved.");
				});
			}
			// acount doesn't exist:
			if (!account) {
				console.log("account doesn't exist, something went wrong.");
				res.send(
					`<script>window.location.href = "https://remotegames.io/reset";</script>`,
				);
			} else {
				res.send(`<script>window.location.href = "https://remotegames.io";</script>`);
			}
		});

		let time = 7 * 60 * 24 * 60 * 1000; // 7 days
		res.cookie("RemoteGames", authToken, {
			maxAge: time,
		});

		// set authToken to expire after 7 days:
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
	console.log("Account server listening at port %d", port);
});

io.on("connection", (socket) => {
	socket.on("register", (data) => {
		// todo: input validation:
		if (!data.email || !data.password || !data.username) {
			return;
		}
		let email = data.email;
		let username = data.username;
		let password = data.password;

		console.log("Attempting to create a new account.");

		// check if the acccount already exists:
		Account.findOne({ email: email })
			.exec()
			.then((error, account) => {
				if (error) {
					throw error;
				}
				// account already exists:
				if (account) {
					console.log("Account already exists, aborting.");
					socket.emit("ACCOUNT_ERROR", "EMAIL_ALREADY_TAKEN");
					return;
				}
			});
		Account.findOne({ username: username })
			.exec()
			.then((error, account) => {
				if (error) {
					throw error;
				}
				// account already exists:
				if (account) {
					console.log("Account already exists, aborting.");
					socket.emit("ACCOUNT_ERROR", "USERNAME_ALREADY_TAKEN");
					return;
				}
			});

		console.log("Account doesn't already exist, creating account.");
		// create the account:
		let newAccount = new Account();
		// set account details:
		// hash password:
		bcrypt.hash(password, SALT_ROUNDS).then((hash) => {
			// store the password hash in the account:
			newAccount.password = hash;
			// other acount details:
			newAccount.email = email;
			newAccount.username = username;
			// save the new Account:
			newAccount.save((error) => {
				if (error) {
					throw error;
				}
				console.log("Account created.");
			});
		});
	});

	socket.on("authenticate", (data) => {
		let reply = { socketid: data.socketid };

		// try and get account by authToken:
		Account.findOne({ authToken: data.authToken }).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// acount doesn't exist:
			if (!account) {
				socket.emit("authenticated", {
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
					...reply,
				});
				return;
			}

			// acount exists:
			let clientInfo = {};
			// account exists:
			// check if already logged in:
			let userid = ("" + account._id).trim();
			redisClient
				.setAsync(`users:${userid}`, data.socketid, "NX", "EX", 30)
				.then((success) => {
					// todo: enable / fix:
					// if (!success) {
					// 	socket.emit("authenticated", {success: false, reason: "ALREADY_LOGGED_IN", ...reply});
					// 	return;
					// }

					// console.log("registering account.");
					clientInfo.validUsernames = [];

					if (account.connectedAccounts.indexOf("discord") > -1) {
						clientInfo.validUsernames.push(
							account.discord.username + "#" + account.discord.discriminator,
						);
					}
					if (account.connectedAccounts.indexOf("twitch") > -1) {
						clientInfo.validUsernames.push(account.twitch.displayName);
						// // todo: fix
						// if (sublist.indexOf(account.twitch.displayName) > -1) {
						// 	account.isSub = true;
						// }
						// if (pluslist.indexOf(account.twitch.displayName) > -1) {
						// 	account.isPlus = true;
						// }
					}
					if (account.connectedAccounts.indexOf("youtube") > -1) {
						clientInfo.validUsernames.push(account.youtube.displayName);
					}
					if (account.connectedAccounts.indexOf("google") > -1) {
						clientInfo.validUsernames.push(account.google.displayName);
					}

					if (
						data.usernameIndex >= 0 &&
						data.usernameIndex < clientInfo.validUsernames.length
					) {
						clientInfo.username = clientInfo.validUsernames[data.usernameIndex];
					} else {
						clientInfo.username = clientInfo.validUsernames[0];
					}

					clientInfo.userid = ("" + account._id).trim();
					clientInfo.isMod = account.isMod;
					clientInfo.isPlus = account.isPlus;
					clientInfo.isSub = account.isSub;
					clientInfo.isBan = account.isBan;
					clientInfo.timePlayed = account.timePlayed || 0;
					clientInfo.connectedAccounts = account.connectedAccounts;

					// save IP if not known:
					if (account.IPs.indexOf(data.ip) == -1) {
						account.IPs.push(data.ip);
					}

					// todo: maybe ban the account if using a banned IP: (or keep as is)
					for (let i = 0; i < account.IPs.length; i++) {
						if (bannedIPs.indexOf(account.IPs[i]) > -1) {
							clientInfo.isBan = true;
						}
					}
					// fill masterAccountMap:
					masterAccountMap[clientInfo.userid] = {
						...clientInfo,
						hostSocketid: socket.id,
					};

					// create the localized account map if it doesn't exist:
					if (!localizedAccountMaps.hasOwnProperty(socket.id)) {
						localizedAccountMaps[socket.id] = {};
					}
					// fill it with this account:
					localizedAccountMaps[socket.id][clientInfo.userid] = { ...clientInfo };

					socket.emit("authenticated", {
						success: true,
						clientInfo: clientInfo,
						...reply,
					});
				});
		});
	});

	socket.on("clientDisconnected", (data) => {
		// update timePlayed stat:
		// try and get account:
		Account.findOne({ _id: data.userid }, (error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// if the account exists:
			if (account) {
				// update account info:
				account.timePlayed = data.timePlayed;
				// update the account details:
				account.save((error) => {
					// error check:
					if (error) {
						throw error;
					}
				});
			}
		});
		if (data.userid != null) {
			redisClient.delAsync(`users:${data.userid}`);
		}
	});

	// todo:
	// socket.conn.on("packet", async (packet) => {
	// 	if (packet.type !== "ping") {
	// 		return;
	// 	}
	// 	let client = clients[socket.id];
	// 	if (client && client.userid) {
	// 		await redisClient.setAsync(`users:${client.userid}`, socket.id, "XX", "EX", 30);
	// 	}
	// });

	socket.on("getAllAccountsStreaming", (data) => {
		Account.find({ isStreaming: true })
			.exec()
			.then((error, account) => {
				if (error) {
					throw error;
				}
			});
	});
});

// do every once in a while:
setInterval(() => {
	// io.emit("accountMap", accountMap);

	// create and send an accountMap (from the master map) to each connected host server:
	// let accountMaps = {};
	// for (let key in masterAccountMap) {
	// 	let hostSocketid = masterAccountMap[key].hostSocketid;
	// 	// create the map if it doesn't exist:
	// 	if (!accountMaps.hasOwnProperty(hostSocketid)) {
	// 		accountMaps[hostSocketid] = {};
	// 	}
	// 	// fill with accountInfo:
	// 	accountMaps[hostSocketid][masterAccountMap[key].userid] = {
	// 		...masterAccountMap[key],
	// 	};
	// }
	//
	// // go through the account maps and send them to each host:
	// for (let hostSocketid in accountMaps) {
	// 	io.to(hostSocketid).emit("accountMap", accountMaps[hostSocketid]);
	// }

	// send localized account maps:
	for (let hostSocketid in localizedAccountMaps) {
		io.to(hostSocketid).emit("accountMap", localizedAccountMaps[hostSocketid]);
	}

	io.emit("serverTime", Date.now());
}, 30000);

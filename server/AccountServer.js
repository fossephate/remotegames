const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8099;
const config = require("./config.js");

const VideoServerClient = require("./client.js").VideoServerClient;

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
	if (req.session.authToken != null) {
		// get account by token:
		Account.findOne({ authToken: req.session.authToken }).exec((error, account) => {
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

	// account:
	email: String,
	username: String,
	password: String,

	authToken: String,
	streamKey: String,

	emailVerified: Boolean,

	// streaming:
	isStreaming: Boolean,

	videoServerIP: String,
	videoServerPort: Number,
	hostServerIP: String,
	hostServerPort: Number,
	thumbnailURL: String,
	streamTitle: String,

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

function clientInfoFromAccount(account, usernameIndex) {
	let clientInfo = {};

	clientInfo.validUsernames = [];

	if (account.username) {
		clientInfo.validUsernames.push(account.username);
	}

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

	if (usernameIndex >= 0 && usernameIndex < clientInfo.validUsernames.length) {
		clientInfo.username = clientInfo.validUsernames[data.usernameIndex];
	} else {
		clientInfo.username = clientInfo.validUsernames[0];
	}

	clientInfo.userid = ("" + account._id).trim();
	clientInfo.isMod = account.isMod;
	clientInfo.isPlus = account.isPlus;
	clientInfo.isSub = account.isSub;
	clientInfo.isBan = account.isBan;
	clientInfo.timePlayed = account.timePlayed;
	clientInfo.connectedAccounts = account.connectedAccounts;
	clientInfo.isStreaming = account.isStreaming;

	// todo: maybe ban the account if using a banned IP: (or keep as is)
	for (let i = 0; i < account.IPs.length; i++) {
		if (bannedIPs.indexOf(account.IPs[i]) > -1) {
			clientInfo.isBan = true;
		}
	}

	return clientInfo;
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
		req.session.authToken = req.query.authToken;
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
		req.session.authToken = req.query.authToken;
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
		req.session.authToken = req.query.authToken;
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
		req.session.authToken = req.query.authToken;
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
		// 		redis.hexpireAsync("clientMap", password, (time / 1000)).then((success) => {
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

let videoServers = {};
let hostServers = {};

io.on("connection", (socket) => {
	socket.on("register", (data) => {
		// todo: input validation:
		if (!data.email || !data.password || !data.username) {
			socket.emit("ACCOUNT_ERROR", "INVALID_ARGUMENTS");
			return;
		}
		let email = data.email;
		let username = data.username;
		let password = data.password;

		console.log("Attempting to create a new account.");

		// check if the acccount already exists:
		Account.findOne({ email: email })
			.then((account) => {
				// account already exists:
				if (account) {
					console.log("Account already exists, EMAIL_ALREADY_TAKEN.");
					socket.emit("ACCOUNT_ERROR", "EMAIL_ALREADY_TAKEN");
					return { then: function() {} }; // break promise chain
				}
			})
			.then(() => {
				return Account.findOne({ username: username }).then((account) => {
					// account already exists:
					if (account) {
						console.log("Account already exists, USERNAME_ALREADY_TAKEN.");
						socket.emit("ACCOUNT_ERROR", "USERNAME_ALREADY_TAKEN");
						return { then: function() {} }; // break promise chain
					}
				});
			})
			.then(() => {
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
					// create an authToken that lets us access the account:
					newAccount.authToken = crypto.randomBytes(64).toString("hex");
					// save the new Account:
					newAccount.save((error) => {
						if (error) {
							throw error;
						}
						console.log("Account created.");
					});
				});
			});
	});

	// https://stackoverflow.com/questions/29098830/mongoose-findone-with-either-or-query
	// https://stackoverflow.com/questions/35780524/how-to-do-simple-mongoose-findone-with-multiple-conditions?rq=1

	socket.on("login", (data) => {
		let reply = { socketid: data.socketid };

		if (typeof data.password !== "string") {
			return;
		}

		let queryObj = { $or: [{ email: data.user }, { username: data.user }] };
		Account.findOne(queryObj)
			.exec()
			.then((account) => {
				// acount doesn't exist:
				if (!account) {
					console.log("Account not found (while logging in)");
					socket.emit("authenticated", {
						success: false,
						reason: "ACCOUNT_NOT_FOUND",
						...reply,
					});
					return;
				} else {
					let clientInfo = clientInfoFromAccount(account);
					bcrypt.compare(data.password, account.password).then((result) => {
						if (result) {
							socket.emit("authenticated", {
								success: true,
								authToken: account.authToken,
								clientInfo: clientInfo,
							});
						} else {
							socket.emit("authenticated", {
								success: false,
								reason: "INVALID_CREDENTIALS",
								...reply,
							});
						}
					});
				}
			});
	});

	socket.on("authenticate", (data) => {
		let reply = { socketid: data.socketid };

		if (!data.socketid) {
			console.log("socketid was not defined!");
			socket.emit("authenticated", {
				success: false,
				reason: "INVALID_ARGUMENTS",
			});
			return;
		}

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

					// save IP if not known:
					if (account.IPs.indexOf(data.ip) == -1) {
						account.IPs.push(data.ip);
					}

					let clientInfo = clientInfoFromAccount(account, data.usernameIndex);

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
						authToken: account.authToken,
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
		if (localizedAccountMaps[socket.id]) {
			delete localizedAccountMaps[socket.id][data.userid];
		}
		delete masterAccountMap[data.userid];
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

	socket.on("getStreams", (data) => {
		Account.find({ isStreaming: true })
			.exec()
			.then((accounts) => {
				let streams = [];
				console.log(accounts);
				socket.emit("streams", accounts);
			});
	});

	socket.on("startStreaming", (data) => {
		// let reply = { socketid: data.socketid };

		// try and get account by authToken:
		Account.findOne({ authToken: data.authToken }).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// acount doesn't exist:
			if (!account) {
				socket.emit("streaming", {
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			if (account.isStreaming) {
				console.log("already streaming!");
				socket.emit("streaming", {
					success: false,
					reason: "ALREADY_STREAMING",
				});
				return;
			}

			let streamKey = null;

			let videoIP = null;
			let videoPort = null;
			// look for available video server port:
			for (let id in videoServers) {
				let server = videoServers[id];

				for (let port in server.ports) {
					// check if the port is available:
					if (server.ports[port]) {
						let ip = videoServers[id].ip;
						// set port as unavailable:
						videoServers[id].ports[port] = false;
						videoIP = ip;
						videoPort = port;
						// create a stream key:
						let videoStreamKey = crypto.randomBytes(64).toString("hex");
						streamKey = videoStreamKey;
						// send to client:
						socket.emit("startStream", {
							ip: ip,
							port: port,
							streamKey: videoStreamKey,
						});
						// send to videoServer:
						io.to(id).emit("startVideo", { port: port, streamKey: videoStreamKey });

						break;
					}
				}

				if (videoPort != null) {
					break;
				}
			}

			if (videoPort == null) {
				console.log("open video server wasn't found!");
			}

			// look for available host server port:
			let hostIP = null;
			let hostPort = null;

			// look for available host server port:
			for (let id in hostServers) {
				let server = hostServers[id];

				for (let port in server.ports) {
					// check if the port is available:
					if (server.ports[port]) {
						let ip = hostServers[id].ip;
						// set port as unavailable:
						hostServers[id].ports[port] = false;
						hostIP = ip;
						hostPort = port;
						// // create a stream key:
						// let streamKey = crypto.randomBytes(64).toString("hex");
						// // send to client:
						// socket.emit("startStreaming", { ip: ip, port: port, streamKey: streamKey });
						// send to hostServer:
						io.to(id).emit("startHost", {
							port: port,
							streamKey: streamKey,
							videoIP: videoIP,
							videoPort: videoPort,
						});

						break;
					}
				}

				if (hostPort != null) {
					break;
				}
			}

			// update account info:
			account.isStreaming = true;
			account.videoServerIP = videoIP;
			account.videoServerPort = videoPort;
			account.hostServerIP = hostIP;
			account.hostServerPort = hostPort;
			// update the account details:
			account.save((error) => {
				// error check:
				if (error) {
					throw error;
				}
			});
		});
	});

	socket.on("stopStreaming", (data) => {
		// let reply = { socketid: data.socketid };

		// try and get account by authToken:
		Account.findOne({ authToken: data.authToken }).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// acount doesn't exist:
			if (!account) {
				socket.emit("streaming", {
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			if (!account.isStreaming) {
				console.log("wasn't streaming!");
				socket.emit("streaming", {
					success: false,
					reason: "WAS_NOT_STREAMING",
				});
				return;
			}

			// update account info:
			account.isStreaming = false;
			// update the account details:
			account.save((error) => {
				// error check:
				if (error) {
					throw error;
				}
				// socket.emit("streaming", {
				// 	success: true,
				// });
			});

			// stop the host and video servers:

			// look for the video server:
			for (let id in videoServers) {

				if (videoServers[id].ip != account.videoServerIP) {
					continue;
				}

				// set port to available:
				// todo check if it already was:
				videoServers[id].ports[account.videoServerPort] = true;

				// send to videoServer:
				io.to(id).emit("stopVideo", { port: account.videoServerPort });

				break;
			}

			// look for the host server:
			for (let id in hostServers) {

				if (hostServers[id].ip != account.hostServerIP) {
					continue;
				}

				// set port to available:
				// todo check if it already was:
				hostServers[id].ports[account.hostServerPort] = true;

				// send to hostServer:
				io.to(id).emit("stopHost", { port: account.hostServerPort });

				break;
			}

		});
	});

	socket.on("registerVideoServer", (data) => {
		if (data.secret !== config.ROOM_SECRET) {
			return;
		}
		videoServers[socket.id] = new VideoServerClient(socket, data.ip, data.ports);
	});

	socket.on("registerHostServer", (data) => {
		if (data.secret !== config.ROOM_SECRET) {
			return;
		}
		videoServers[socket.id] = new HostServerClient(socket, data.ip, data.ports);
	});

	// check if it's one of the videoServers / hostServers:
	socket.on("disconnect", () => {
		if (videoServers.hasOwnProperty(socket.id)) {
			delete videoServers[socket.id];
		}
		if (hostServers.hasOwnProperty(socket.id)) {
			delete hostServers[socket.id];
		}
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

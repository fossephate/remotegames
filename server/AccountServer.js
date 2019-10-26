const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8099;
const config = require("./config.js");

const VideoServerClient = require("./client.js").VideoServerClient;
const HostServerClient = require("./client.js").HostServerClient;

const session = require("express-session");
const passport = require("passport");
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

const yaml = require("js-yaml");
const request = require("request");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const nodemailer = require("nodemailer");

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

let streams = [];

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

// mail:
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: config.EMAIL_USERNAME,
		pass: config.EMAIL_PASSWORD,
	},
});

let mailOptions = {
	from: config.EMAIL_USERNAME,
	to: null,
	subject: null,
	text: null,
};

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

	// check if the account already exists:
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

	usernameLower: String,

	authToken: String,

	emailVerified: Boolean,

	// streaming:
	isStreaming: Boolean,
	streamKey: String,

	// host / video server info:
	videoServerSocketid: String,
	videoServerIP: String,
	videoServerPort: Number,
	hostServerSocketid: String,
	hostServerIP: String,
	hostServerPort: Number,

	directMessages: {
		// sorted by userid, with lists of messages:
	},

	streamSettings: {
		streamTitle: String,
		description: String,
		thumbnailURL: String,

		videoBitrate: Number,
		captureRate: Number,
		resolution: Number,

		audioDevice: String,
		windowTitle: String,
		capture: String, // "window" or "desktop"
		offsetX: Number,
		offsetY: Number,
		width: Number,
		height: Number,

		controllerCount: Number,
		keyboardEnabled: Boolean,
		mouseEnabled: Boolean,
	},

	sublist: [],

	roleData: {
		host: [],
		admin: [],
		mod: [],
		plus: [],
		banned: [],
	},

	bannedIPs: [],
	followers: [],

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
	// isMod: Boolean,
	// isPlus: Boolean,
	// isSub: Boolean,

	isBanned: Boolean,
	isPermaBanned: Boolean,
	isTempBanned: Boolean,

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
	switch (type) {
		case "twitch":
			account[type].email = profile.email;
			account[type].login = profile.login;
			account[type].username = profile.username;
			account[type].profile_image_url = profile.profile_image_url;
			break;
		case "google":
			account[type].familyName = profile.name.familyName;
			account[type].givenName = profile.name.givenName;
			break;
		case "youtube":
			break;
		case "discord":
			account[type].email = profile.email;
			account[type].username = profile.username;
			account[type].discriminator = profile.discriminator;
			break;
	}
	// update connected accounts list:
	if (account.connectedAccounts.indexOf(type) == -1) {
		account.connectedAccounts.push(type);
	}
	account.emailVerified = true;
}

function clientInfoFromAccount(account, usernameIndex, hostUserid, cb) {
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
		clientInfo.username = clientInfo.validUsernames[usernameIndex];
	} else {
		clientInfo.username = clientInfo.validUsernames[0];
	}

	clientInfo.userid = ("" + account._id).trim();
	clientInfo.isBanned = account.isBanned;
	clientInfo.timePlayed = account.timePlayed;
	clientInfo.connectedAccounts = account.connectedAccounts;
	clientInfo.isStreaming = account.isStreaming;
	clientInfo.emailVerified = account.emailVerified;
	clientInfo.roles = {};

	// todo: maybe ban the account if using a banned IP: (or keep as is)
	for (let i = 0; i < account.IPs.length; i++) {
		if (bannedIPs.indexOf(account.IPs[i]) > -1) {
			clientInfo.isBanned = true;
		}
	}

	// get role data from host user:
	if (hostUserid) {
		// try and get account:
		let queryObj;
		if (hostUserid === "fosse" || hostUserid === "fosse2") {
			queryObj = { usernameLower: hostUserid };
		} else {
			queryObj = { _id: hostUserid };
		}
		Account.findOne(queryObj).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}

			// acount doesn't exist:
			if (!account) {
				console.log("host userid didn't lead to an account!");
			} else {
				let keys = Object.keys(account.roleData);
				for (let i = 0; i < keys.length; i++) {
					if (keys[i] === "$init") {
						continue;
					}
					let roleList = account.roleData[keys[i]];
					if (roleList.includes(clientInfo.userid)) {
						clientInfo.roles[keys[i]] = true;
					}
				}

				// has to be last so it isn't overwritten:
				if (clientInfo.userid === hostUserid) {
					clientInfo.roles.host = true;
					clientInfo.roles.mod = true;
					clientInfo.roles.plus = true;
				}
			}
			cb(clientInfo);
		});
	} else {
		return clientInfo;
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

app.get("/getUser", (req, res) => {
	let user = req.query.user;
	if (!req.query.user) {
		return;
	}
	let queryObj = {
		$or: [
			{ email: user.toLowerCase() },
			{ usernameLower: user.toLowerCase() },
			{ "twitch.username": user },
			{ "discord.username": user },
		],
	};
	Account.findOne(queryObj)
		// .exec()
		.then((account) => {
			// account exists:
			if (account) {
				console.log(account);
			} else {
				console.log("account not found.");
			}
		});
});

app.get("/verify", (req, res) => {
	Account.findOne({ authToken: req.query.authToken })
		.exec()
		.then((account) => {
			// Account.findOne({ authToken: req.query.authToken }).then(account => {
			// account exists:
			if (account) {
				if (account.connectedAccounts.indexOf("rgio") === -1) {
					account.connectedAccounts.push("rgio");
				}
				account.emailVerified = true;
				account.save((error) => {
					if (error) {
						throw error;
					}
				});
				res.redirect(302, "https://remotegames.io/login/?verified=true");
			} else {
				res.redirect(302, "https://remotegames.io");
			}
		});
});

app.get("/deleteDB", (req, res) => {
	console.log("deleting DB");
	Account.remove({}, () => {});
	// 	res.send(`<script>window.location.href = "https://remotegames.io";</script>`);
});

app.get("/download", (req, res) => {
	request(
		"https://s3.amazonaws.com/remote-games-host/latest.yml",
		{ json: true },
		(err, res2, body) => {
			let path = yaml.load(body).path;
			res.redirect(302, `https://s3.amazonaws.com/remote-games-host/${path}`);
		},
	);
});

server.listen(port, () => {
	console.log("Account server listening at port %d", port);
});

let videoServers = {};
let hostServers = {};

io.on("connection", (socket) => {
	socket.on("register", (data, cb) => {
		if (!cb) {
			console.log("no callback (register)");
			return;
		}

		// todo:
		// https://developers.google.com/recaptcha/docs/verify

		// todo: input validation:
		if (!data.email || !data.username || !data.password1 || !data.password2) {
			// socket.emit("ACCOUNT_ERROR", "INVALID_ARGUMENTS");
			cb({ success: false, reason: "INVALID_ARGUMENTS" });
			return;
		}

		if (data.username.length > 24) {
			cb({ success: false, reason: "USERNAME_TOO_LONG" });
			return;
		}

		if (!/^[a-zA-Z0-9_]+$/.test(data.username)) {
			cb({ success: false, reason: "USERNAME_MUST_BE_ALPHANUMERIC" });
		}

		let email = data.email;
		email = email.split("@");
		if (email.length < 2) {
			cb({ success: false, reason: "INVALID_EMAIL" });
			return;
		}
		email = `${email[0]}@${email[1].toLowerCase()}`;
		let username = data.username;
		let usernameLower = data.username.toLowerCase();
		let password1 = data.password1;
		let password2 = data.password2;

		// some input validation:
		if (password1 !== password2) {
			cb({ success: false, reason: "PASSWORDS_NOT_EQUAL" });
			return;
		}

		let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!emailRegex.test(email)) {
			cb({ success: false, reason: "INVALID_EMAIL" });
		}

		// var passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
		// if (!emailRegex.test(password1)) {
		// 	cb({ success: false, reason: "PASSWORD_NOT_STRONG_ENOUGH" });
		// }

		console.log("Attempting to create a new account.");

		// check if the acccount already exists:
		Account.findOne({ email: email })
			.then((account) => {
				// account already exists:
				if (account) {
					if (!account.emailVerified) {
						account.delete();
						return;
					}
					// console.log("Account already exists, EMAIL_ALREADY_TAKEN.");
					// socket.emit("ACCOUNT_ERROR", "EMAIL_ALREADY_TAKEN");
					cb({ success: false, reason: "EMAIL_ALREADY_TAKEN" });
					return { then: () => {} }; // break promise chain
				}
			})
			.then(() => {
				return Account.findOne({ usernameLower: usernameLower }).then((account) => {
					// account already exists:
					if (account) {
						if (!account.emailVerified) {
							account.delete();
							return;
						}
						// console.log("Account already exists, USERNAME_ALREADY_TAKEN.");
						// socket.emit("ACCOUNT_ERROR", "USERNAME_ALREADY_TAKEN");
						cb({ success: false, reason: "USERNAME_ALREADY_TAKEN" });
						return { then: () => {} }; // break promise chain
					}
				});
			})
			.then(() => {
				console.log("Account doesn't already exist, creating account.");
				// create the account:
				let newAccount = new Account();
				// set account details:
				// hash password:
				bcrypt.hash(password1, SALT_ROUNDS).then((hash) => {
					// store the password hash in the account:
					newAccount.password = hash;
					// other acount details:
					newAccount.email = email;
					newAccount.username = username;
					newAccount.usernameLower = usernameLower;
					// create an authToken that lets us access the account:
					newAccount.authToken = crypto.randomBytes(64).toString("hex");
					newAccount.emailVerified = false;
					// save the new Account:
					newAccount.save((error) => {
						if (error) {
							throw error;
						}
						console.log("Account created.");
						cb({
							success: true,
							// authToken: newAccount.authToken,
							clientInfo: clientInfoFromAccount(newAccount),
						});
						mailOptions.to = email;
						mailOptions.subject = "Verify your email with remotegames.io";
						mailOptions.text = `Click here to verify your email: https://remotegames.io/8099/verify?authToken=${newAccount.authToken}`;
						transporter.sendMail(mailOptions, (error, info) => {
							if (error) {
								console.log(error);
							} else {
								console.log("Email sent: " + info.response);
							}
						});
					});
				});
			});
	});

	// https://stackoverflow.com/questions/29098830/mongoose-findone-with-either-or-query
	// https://stackoverflow.com/questions/35780524/how-to-do-simple-mongoose-findone-with-multiple-conditions?rq=1

	socket.on("login", (data, cb) => {
		if (!cb) {
			console.log("no callback (login)");
			return;
		}

		let reply = { socketid: data.socketid };

		if (typeof data.password !== "string") {
			return;
		}

		let user = data.user.toLowerCase();

		let queryObj = { $or: [{ email: user }, { usernameLower: user }] };
		Account.findOne(queryObj)
			.exec()
			.then((account) => {
				// acount doesn't exist:
				if (!account) {
					console.log("Account not found (while logging in)");
					cb({
						success: false,
						reason: "ACCOUNT_NOT_FOUND",
						...reply,
					});
					return;
				} else {
					// if (!account.emailVerified) {
					//   cb({
					//     success: false,
					//     reason: "EMAIL_NOT_VERIFIED",
					//     ...reply
					//   });
					//   return;
					// }
					bcrypt.compare(data.password, account.password).then((result) => {
						if (result) {
							// save IP if not known:
							let ip = socket.handshake.headers["x-real-ip"];
							if (account.IPs.indexOf(ip) == -1) {
								account.IPs.push(ip);
								// update the account details:
								account.save((error) => {
									// error check:
									if (error) {
										throw error;
									}
								});
							}
							cb({
								success: true,
								authToken: account.authToken,
								clientInfo: clientInfoFromAccount(account),
								...reply,
							});
						} else {
							cb({
								success: false,
								reason: "INVALID_CREDENTIALS",
								...reply,
							});
						}
					});
				}
			});
	});

	socket.on("getAccountInfo", (data, cb) => {
		if (!cb) {
			console.log("no callback (getAccountInfo)");
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
				cb({
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			let clientInfo = clientInfoFromAccount(account, data.usernameIndex);
			cb({
				success: true,
				authToken: account.authToken,
				clientInfo: clientInfo,
			});
		});
	});

	socket.on("authenticate", (data, cb) => {
		if (!cb) {
			console.log("no callback (authenticate)");
			return;
		}

		// must come from a host server:
		if (!hostServers.hasOwnProperty(socket.id)) {
			console.log("authenticate request from a client / unauthed");
			return;
		}

		if (!data.socketid) {
			console.log("socketid was not defined!");
			data.socketid = "NOT_PROVIDED";
		}

		let reply = { socketid: data.socketid };

		// try and get account by authToken:
		Account.findOne({ authToken: data.authToken }).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// acount doesn't exist:
			if (!account) {
				cb({
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
					if (!success) {
						cb({
							success: false,
							reason: "ALREADY_LOGGED_IN",
							...reply,
						});
						return;
					}

					// save IP if not known:
					if (account.IPs.indexOf(data.ip) === -1) {
						account.IPs.push(data.ip);
					}
					// todo: maybe ban the account if using a banned IP: (or keep as is)
					// for (let i = 0; i < account.IPs.length; i++) {
					// 	if (bannedIPs.indexOf(account.IPs[i]) > -1) {
					// 		clientInfo.isBanned = true;
					// 	}
					// }
					// update the account details:
					account.save((error) => {
						// error check:
						if (error) {
							throw error;
						}
					});

					let clientInfo = clientInfoFromAccount(
						account,
						data.usernameIndex,
						data.hostUserid,
						(clientInfo) => {
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
							localizedAccountMaps[socket.id][clientInfo.userid] = {
								...clientInfo,
							};

							cb({
								success: true,
								authToken: account.authToken,
								clientInfo: clientInfo,
								...reply,
							});
						},
					);
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

	socket.on("resendVerifyEmail", (data, cb) => {
		if (!cb) {
			console.log("no callback (resendVerifyEmail)");
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
				cb({
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			// save the new Account:
			account.save((error) => {
				if (error) {
					throw error;
				}
				cb({
					success: true,
					clientInfo: clientInfoFromAccount(account),
					message: account.email,
				});
				mailOptions.to = account.email;
				mailOptions.subject = "Verify your email with remotegames.io";
				mailOptions.text = `Click here to verify your email: https://remotegames.io/8099/verify?authToken=${account.authToken}`;
				transporter.sendMail(mailOptions, (error, info) => {
					if (error) {
						console.log(error);
					} else {
						console.log("Email sent: " + info.response);
					}
				});
			});
		});
	});

	socket.on("changeAccountStatus", (data, cb) => {
		if (!cb) {
			console.log("no callback (changeAccountStatus)");
			return;
		}

		if (!hostServers.hasOwnProperty(socket.id)) {
			return;
		}

		// try and get account by userid:
		Account.findOne({ _id: data.hostUserid }).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}

			// acount doesn't exist:
			if (!account) {
				cb({ success: false, reason: "HOST_ACCOUNT_NOT_FOUND" });
				return;
			}

			// format:
			// let statusChange = {
			// 	role: "mod",
			// 	type: "add",
			// 	userid: "aaa",
			// };

			if (["mod", "plus", "sub", "banned"].indexOf(data.change.role) === -1) {
				cb({
					success: false,
					reason: "INVALID_ROLE",
				});
				return;
			}

			if (["add", "remove"].indexOf(data.change.type) === -1) {
				cb({
					success: false,
					reason: "INVALID_TYPE",
				});
				return;
			}

			let index = account.roleData[data.change.role].indexOf(data.change.userid);
			let alreadyInList = index > -1;

			if (data.change.type === "add") {
				if (alreadyInList) {
					cb({
						success: false,
						reason: "ALREADY_IN_LIST",
					});
					return;
				} else {
					account.roleData[data.change.role].push(data.change.userid);
				}
			} else {
				if (!alreadyInList) {
					cb({
						success: false,
						reason: "NOT_IN_LIST",
					});
					return;
				} else {
					account.roleData[data.change.role].splice(index, 1);
				}
			}

			account.save((error) => {
				if (error) {
					throw error;
				}

				cb({
					success: true,
				});
			});
		});
	});

	socket.on("removeConnectedAccount", (data, cb) => {
		if (!cb) {
			console.log("no callback (removeConnectedAccount)");
			return;
		}

		if (["twitch", "google", "youtube", "discord"].indexOf(data.type) === -1) {
			cb({
				success: false,
				reason: "INVALID_TYPE",
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
				cb({
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			} else {
				let index = account.connectedAccounts.indexOf(data.type);

				if (index > -1) {
					if (!account.username && account.connectedAccounts.length < 2) {
						cb({
							success: false,
							reason: "ONLY_CONNECTED_ACCOUNT",
						});
						return;
					} else {
						account.connectedAccounts.splice(index, 1);
						// update the account details:
						account.save((error) => {
							// error check:
							if (error) {
								throw error;
							}
							cb({
								success: true,
							});
						});
					}
				} else {
					cb({
						success: false,
						reason: "ACCOUNT_NOT_LINKED",
					});
					return;
				}
			}
		});
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

	socket.on("keepAlive", async (data) => {
		// must come from a host server:
		if (!hostServers.hasOwnProperty(socket.id)) {
			return;
		}
		await redisClient.setAsync(`users:${data.userid}`, data.socketid, "XX", "EX", 30);
	});

	socket.on("getStreams", (data, cb) => {
		if (!cb) {
			console.log("no callback (getStreams)");
			return;
		}
		cb({ streams: streams });
	});

	socket.on("getStreamInfo", (data, cb) => {
		if (!cb) {
			console.log("no callback (getStreamInfo)");
			return;
		}
		if (typeof data.username !== "string") {
			return;
		}

		let queryObj = { usernameLower: data.username.toLowerCase() };
		Account.findOne(queryObj)
			.exec()
			.then((account) => {
				// acount doesn't exist:
				if (!account) {
					cb({
						success: false,
						reason: "ACCOUNT_NOT_FOUND",
					});
					return;
				} else {
					if (account.isStreaming) {
						cb({
							success: true,
							hostServerIP: account.hostServerIP,
							hostServerPort: account.hostServerPort,
							videoServerIP: account.videoServerIP,
							videoServerPort: account.videoServerPort,
						});
					} else {
						cb({ success: false, reason: "ACCOUNT_NOT_STREAMING" });
					}
				}
			});
	});

	socket.on("startStreaming", (data, cb) => {
		// let reply = { socketid: data.socketid };
		if (!cb) {
			console.log("no callback (startStreaming)");
			return;
		}

		if (!data.authToken) {
			cb({
				success: false,
				reason: "NOT_LOGGED_IN",
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
				cb({
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			if (account.isStreaming) {
				console.log("already streaming!");
				cb({
					success: false,
					reason: "ALREADY_STREAMING",
				});
				return;
			}

			// find available host and video servers / ports:
			let servers = findAvailableServers(hostServers, videoServers);

			// if server candidates weren't found
			if (!servers.host || !servers.video) {
				cb({
					success: false,
					reason: "NO_AVAILABLE_PORTS",
				});
				return;
			}

			// set ports as in use:

			videoServers[servers.video.sid].ports[servers.video.port] = true;
			hostServers[servers.host.sid].ports[servers.host.port] = true;

			// start streaming:

			let videoStreamKey = account.streamKey || crypto.randomBytes(64).toString("hex");

			// send to client:
			cb({
				success: true,
				videoIP: servers.video.ip,
				videoPort: servers.video.port,
				hostIP: servers.host.ip,
				hostPort: servers.host.port,
				streamKey: videoStreamKey,
			});
			// send to videoServer:
			io.to(servers.video.sid).emit("startVideo", {
				port: servers.video.port,
				streamKey: videoStreamKey,
			});
			// send to hostServer:
			io.to(servers.host.sid).emit("startHost", {
				hostUserid: ("" + account._id).trim(),
				port: servers.host.port,
				streamKey: videoStreamKey,
				videoIP: servers.video.ip,
				videoPort: servers.video.port,
			});

			// update account info:
			account.isStreaming = true;
			account.streamKey = videoStreamKey;
			account.videoServerSocketid = servers.video.sid;
			account.videoServerIP = servers.video.ip;
			account.videoServerPort = servers.video.port;
			account.hostServerSocketid = servers.host.sid;
			account.hostServerIP = servers.host.ip;
			account.hostServerPort = servers.host.port;
			// stream details:
			// todo: type check this:
			account.streamSettings.streamTitle = data.streamSettings.streamTitle;
			account.streamSettings.thumbnailURL = data.streamSettings.thumbnailURL;
			account.streamSettings.description = data.streamSettings.description;
			account.streamSettings.captureRate = data.streamSettings.captureRate;
			account.streamSettings.resolution = data.streamSettings.resolution;
			account.streamSettings.videoBitrate = data.streamSettings.videoBitrate;

			account.streamSettings.controllerCount = data.streamSettings.controllerCount;
			account.streamSettings.keyboardEnabled = data.streamSettings.keyboardEnabled;
			account.streamSettings.mouseEnabled = data.streamSettings.mouseEnabled;
			account.streamSettings.windowTitle = data.streamSettings.windowTitle;
			account.streamSettings.capture = data.streamSettings.capture;
			account.streamSettings.audioDevice = data.streamSettings.audioDevice;
			account.streamSettings.width = data.streamSettings.width;
			account.streamSettings.height = data.streamSettings.height;
			account.streamSettings.offsetX = data.streamSettings.offsetX;
			account.streamSettings.offsetY = data.streamSettings.offsetY;
			// account.streamSettings = { ...account.streamSettings, ...data.streamSettings };

			// update the account details:
			account.save((error) => {
				// error check:
				if (error) {
					throw error;
				}
				// re-generate stream list:
				generateStreamList();
			});
		});
	});

	socket.on("stopStreaming", (data, cb) => {
		// let reply = { socketid: data.socketid };
		if (!cb) {
			console.log("no callback (stopStreaming)");
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
				cb({
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			if (!account.isStreaming) {
				cb({
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
				cb({
					success: true,
				});
				// re-generate stream list:
				generateStreamList();
			});

			// stop the host and video servers:

			// set ports as available:
			if (videoServers[account.videoServerSocketid]) {
				videoServers[account.videoServerSocketid].ports[account.videoServerPort] = true;
			}
			if (hostServers[account.hostServerSocketid]) {
				hostServers[account.hostServerSocketid].ports[account.hostServerPort] = true;
			}

			// send stop requests:
			io.to(account.videoServerSocketid).emit("stopVideo", {
				port: account.videoServerPort,
			});
			io.to(account.hostServerSocketid).emit("stopHost", {
				port: account.hostServerPort,
			});
		});
	});

	socket.on("streamInactive", (data) => {
		// must come from a video server:
		if (!videoServers.hasOwnProperty(socket.id)) {
			return;
		}

		// try and get account by streamKey:
		Account.findOne({ streamKey: data.streamKey }).exec((error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// acount doesn't exist:
			if (!account) {
				console.log("account wasn't found! (streamInactive)");
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
				// re-generate stream list:
				generateStreamList();
			});

			// stop the host and video servers:

			// set ports as available:
			if (videoServers[account.videoServerSocketid]) {
				videoServers[account.videoServerSocketid].ports[account.videoServerPort] = true;
			}
			if (hostServers[account.hostServerSocketid]) {
				hostServers[account.hostServerSocketid].ports[account.hostServerPort] = true;
			}

			// send stop requests:
			io.to(account.videoServerSocketid).emit("stopVideo", {
				port: account.videoServerPort,
			});
			io.to(account.hostServerSocketid).emit("stopHost", {
				port: account.hostServerPort,
			});
		});
	});

	// get previously used stream settings:
	socket.on("getStreamSettings", (data, cb) => {
		if (!cb) {
			console.log("no callback (getStreamSettings)");
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
				socket.emit("streaming", {
					success: false,
					reason: "ACCOUNT_NOT_FOUND",
				});
				return;
			}

			// send to client:
			cb({
				success: true,
				streamSettings: {
					...account.streamSettings,
				},
			});
		});
	});

	// register servers:
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
		hostServers[socket.id] = new HostServerClient(socket, data.ip, data.ports);
	});

	// host server commands:
	socket.on("ban", (data, cb) => {
		if (!hostServers.hasOwnProperty(socket.id)) {
			return;
		}
		// try and get account:
		Account.findOne({ _id: data.hostUserid }, (error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// if the account exists:
			if (account) {
				// update account info:
				// banning:
				if (data.isBanned) {
					if (!account.roleData.banned.includes(data.clientUserid)) {
						account.roleData.banned.push(data.clientUserid);
					}
					// unbanning:
				} else {
					account.roleData.banned = account.roleData.banned.filter(
						(i) => i !== data.clientUserid,
					);
				}
				// update the account details:
				account.save((error) => {
					// error check:
					if (error) {
						throw error;
					}
					cb({ success: true });
				});
			} else {
				cb({ success: false, reason: "HOST_ACCOUNT_NOT_FOUND" });
			}
		});
	});

	socket.on("getHostInfo", (data, cb) => {
		if (!hostServers.hasOwnProperty(socket.id)) {
			return;
		}

		let queryObj;

		if (data.userid === "fosse" || data.userid === "fosse2") {
			queryObj = { usernameLower: data.userid.toLowerCase() };
		} else {
			queryObj = { _id: data.userid };
		}

		// try and get account:
		Account.findOne(queryObj, (error, account) => {
			// error check:
			if (error) {
				throw error;
			}
			// if the account exists:
			if (account) {
				cb({ success: true, account: account });
			} else {
				cb({ success: false, reason: "ACCOUNT_NOT_FOUND" });
			}
		});
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

	// on connect:
	// socket.emit("streams", streams);
});

function sendLocalizedAccountMaps() {
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
}

function sendServerTime() {
	io.emit("serverTime", Date.now());
}

function generateStreamList() {
	Account.find({ isStreaming: true })
		.exec()
		.then((accounts) => {
			streams = [];

			if (!accounts) {
				return;
			}

			for (let i = 0; i < accounts.length; i++) {
				let stream = {
					// userid: ("" + accounts[i]._id).trim(),
					title: accounts[i].streamSettings.streamTitle,
					username: accounts[i].username,
					thumbnailURL: accounts[i].streamSettings.thumbnailURL,
				};
				streams.push(stream);
			}

			// io.emit("streams", streams);
		});
}

// find available videoServer / port combo:
function findAvailableServers(hostServers, videoServers) {
	let videoIP = null;
	let videoPort = null;
	let videoSID = null;

	if (videoServers) {
		// look for available video server port:
		for (let sid in videoServers) {
			let server = videoServers[sid];

			for (let port in server.ports) {
				// check if the port is available:
				if (server.ports[port]) {
					videoIP = videoServers[sid].ip;
					videoPort = port;
					videoSID = sid;
					break;
				}
			}

			if (videoPort != null) {
				break;
			}
		}
	}

	// look for available host server port:
	let hostIP = null;
	let hostPort = null;
	let hostSID = null;

	if (hostServers) {
		// look for available host server port:
		for (let sid in hostServers) {
			let server = hostServers[sid];

			for (let port in server.ports) {
				// check if the port is available:
				if (server.ports[port]) {
					hostIP = hostServers[sid].ip;
					hostPort = port;
					hostSID = sid;
					break;
				}
			}
			if (hostPort != null) {
				break;
			}
		}
	}

	// if (!videoPort) {
	// 	console.log("open video server wasn't found!");
	// }
	// if (!hostPort) {
	// 	console.log("open host server wasn't found!");
	// }

	let info = {};

	if (hostPort) {
		info.host = {
			ip: hostIP,
			port: hostPort,
			sid: hostSID,
		};
	}
	if (videoPort) {
		info.video = {
			ip: videoIP,
			port: videoPort,
			sid: videoSID,
		};
	}
	return info;
}

// start and stop servers based on who is streaming
function synchronizeServers() {
	// go through the stream list:

	// go through all of the accounts that should have a host/video server running:
	Account.find({ isStreaming: true })
		.exec()
		.then((accounts) => {
			streams = [];

			if (!accounts) {
				return;
			}

			// go through each account:

			for (let i = 0; i < accounts.length; i++) {
				// we only care if they are currently supposed to be streaming:
				if (!accounts[i].isStreaming) {
					continue;
				}

				// check to make sure both the host and video servers assigned are alive:
				let hostServerAlive = false;
				let videoServerAlive = false;
				if (hostServers[account.hostServerSocketid]) {
					let p = accounts[i].hostServerPort;
					if (hostServers[account.hostServerSocketid].serversAlive[p]) {
						hostServerAlive = true;
					}
				}
				if (videoServers[account.videoServerSocketid]) {
					let p = accounts[i].videoServerPort;
					if (videoServers[account.videoServerSocketid].serversAlive[p]) {
						videoServerAlive = true;
					}
				}

				// start a new server up if either is down:
				if (!hostServerAlive) {
					let server = findAvailableServers(hostServers, null);
					// update account:
					account.hostServerSocketid = server.host.sid;
					account.hostServerIP = server.host.ip;
					account.hostServerPort = server.host.port;
					// send to hostServer:
					io.to(server.host.sid).emit("startHost", {
						hostUserid: ("" + account._id).trim(),
						port: server.host.port,
						streamKey: account.streamKey,
						videoIP: server.video.ip,
						videoPort: server.video.port,
					});
				}

				if (!videoServerAlive) {
					let server = findAvailableServers(null, videoServers);
					// update account:
					account.videoServerSocketid = server.video.sid;
					account.videoServerIP = server.video.ip;
					account.videoServerPort = server.video.port;
					// send to videoServer:
					io.to(server.video.sid).emit("startVideo", {
						port: server.video.port,
						streamKey: account.streamKey,
					});
				}

				// if either server was down, update the account:
				if (!hostServerAlive || !videoServerAlive) {
					// save:
					account.save((error) => {
						if (error) {
							throw error;
						}
						console.log("account saved.");
					});
				}
			}

			// update the stream list in case there were any changes:
			// todo: only do this if there were changes:
			this.generateStreamList();
		});
}

// do every once in a while:
setInterval(sendLocalizedAccountMaps, 30000);
setInterval(sendServerTime, 30000);
setInterval(generateStreamList, 120000);

// for testing:
// try and get account by authToken:
Account.findOne({ username: "fosse" }).exec((error, account) => {
	// error check:
	if (error) {
		throw error;
	}
	// acount doesn't exist:
	if (!account) {
		return;
	}

	// update account info:
	account.isStreaming = true;
	account.streamKey = "a";
	account.videoServerIP = "remotegames.io";
	account.videoServerPort = 8000;
	account.hostServerIP = "remotegames.io";
	account.hostServerPort = 8050;
	account.streamSettings.streamTitle = "Nintendo Switch";
	account.streamSettings.description = "";
	account.streamSettings.thumbnailURL = "https://i.imgur.com/Negv09l.jpg";

	// update the account details:
	account.save((error) => {
		// error check:
		if (error) {
			throw error;
		}
		generateStreamList();
	});
});

// try and get account by authToken:
// Account.findOne({ username: "fosse2" }).exec((error, account) => {
// 	// error check:
// 	if (error) {
// 		throw error;
// 	}
// 	// acount doesn't exist:
// 	if (!account) {
// 		return;
// 	}

// 	// update account info:
// 	account.isStreaming = true;
// 	account.streamKey = "b";
// 	account.videoServerIP = "remotegames.io";
// 	account.videoServerPort = 8001;
// 	account.hostServerIP = "remotegames.io";
// 	account.hostServerPort = 8051;
// 	// account.streamSettings.title = "PS4 - Persona 5 - testing";
// 	account.streamSettings.streamTitle = "Xbox - RDR2";
// 	account.streamSettings.description = "";
// 	// account.streamSettings.thumbnailURL = "https://thumbs.gfycat.com/CloudyBlandBison-poster.jpg";
// 	account.streamSettings.thumbnailURL =
// 		"https://metro.co.uk/wp-content/uploads/2018/04/rdr2_trailer-3-announce_1920x1080_nomsg.jpg";

// 	// update the account details:
// 	account.save((error) => {
// 		// error check:
// 		if (error) {
// 			throw error;
// 		}
// 		generateStreamList();
// 	});
// });

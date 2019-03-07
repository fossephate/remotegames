const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 8099;
const config = require("./config.js");

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongoose = require("mongoose");
//Define a schema
let Schema = mongoose.Schema;

let mongoURL = "mongodb://localhost:27017/db";
mongoose.connect(mongoURL);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;


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


let accountSchema = Schema({

	// 	_id: Schema.Types.ObjectId,// created & initialized automatically

	email: String,
	username: String,
	password: String,

	token: String,
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
		Account.findOne({email: email}).exec().then((error, account) => {
			if (error) {console.log(error);throw error;}
			// account already exists:
			if (account) {
				console.log("Account already exists, aborting.");
				socket.emit("ACCOUNT_ERROR", "EMAIL_ALREADY_TAKEN");
				return;
			}
		});
		Account.findOne({username: username}).exec().then((error, account) => {
			if (error) {console.log(error);throw error;}
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
				if (error) {console.log(error);throw error;}
				console.log("Account created.");
			});
		});

	});

	socket.on("getAllAccountsStreaming", (data) => {

		Account.find({isStreaming: true}).exec().then((error, account) => {
			if (error) {console.log(error);throw error;}

		})
	});

});

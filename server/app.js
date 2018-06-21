const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const config = require("./config.js");
const port = 8110;

const crypto = require("crypto");
const util = require("util");
const fs = require("fs");

// const PeerServer = require("peer").PeerServer;
// let peerServer = PeerServer({
// 	port: 8004,
// 	path: "/twitchplays",
// 	ssl: {
// 		// need sudo :/
// 		key: fs.readFileSync("/etc/letsencrypt/live/twitchplaysnintendoswitch.com/privkey.pem"),
// 		cert: fs.readFileSync("/etc/letsencrypt/live/twitchplaysnintendoswitch.com/fullchain.pem"),
// 	},
// });

// Find out which user used sudo through the environment letiable
// let uid = parseInt(process.env.SUDO_UID);
// // Set our server's uid to that user
// if (uid) process.setuid(uid);
// console.log('Server\'s UID is now ' + process.getuid());

const WebSocketServer = require("ws").Server;
const Splitter        = require("stream-split");
const NALseparator    = new Buffer([0,0,0,1]);//NAL break


// let streamSettings = {
// 	x1: 255 - 1920,
// 	x2: 1665 - 1920,
// 	y1: 70,
// 	y2: 855,
// 	fps: 15,
// 	quality: 60,
// 	scale: 30,
// };

//{x1: 319-1920, x2: 319+1280-1920, y1: 61, y2: 61+720}

let streamSettings = {
	x1: 319 - 1920,
	y1: 61 + 360,
	x2: 319 + 1280 - 1920,
	y2: 61 + 720 + 360,
	fps: 15,
	quality: 60,
	scale: 30,
};

let lastImage = "";
let usernameDB;
let localStorage;


let session = require("express-session");
let passport = require("passport");
let OAuth2Strategy = require("passport-oauth").OAuth2Strategy;
let request = require("request");
let handlebars = require("handlebars");

const TWITCH_CLIENT_ID = "mxpjdvl0ymc6nrm4ogna0rgpuplkeo";
const TWITCH_SECRET = config.TWITCH_SECRET;
const SESSION_SECRET = config.SESSION_SECRET;
const CALLBACK_URL = "https://twitchplaysnintendoswitch.com/8110/auth/twitch/callback"; // You can run locally with - http://localhost:3000/auth/twitch/callback

app.use(session({
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: false
}));
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

// Override passport profile function to get user profile from Twitch API
OAuth2Strategy.prototype.userProfile = function(accessToken, done) {
	let options = {
		url: "https://api.twitch.tv/kraken/user",
		method: "GET",
		headers: {
			"Client-ID": TWITCH_CLIENT_ID,
			"Accept": "application/vnd.twitchtv.v5+json",
			"Authorization": "OAuth " + accessToken
		}
	};

	request(options, function(error, response, body) {
		if (response && response.statusCode == 200) {
			done(null, JSON.parse(body));
		} else {
			done(JSON.parse(body));
		}
	});
}

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});

passport.use("twitch", new OAuth2Strategy({
		authorizationURL: "https://api.twitch.tv/kraken/oauth2/authorize",
		tokenURL: "https://api.twitch.tv/kraken/oauth2/token",
		clientID: TWITCH_CLIENT_ID,
		clientSecret: TWITCH_SECRET,
		callbackURL: CALLBACK_URL,
		state: true
	},
	function(accessToken, refreshToken, profile, done) {
		profile.accessToken = accessToken;
		profile.refreshToken = refreshToken;

		// Securely store user profile in your DB
		//User.findOrCreate(..., function(err, user) {
		//  done(err, user);
		//});

		done(null, profile);
	}
));

// Set route to start OAuth link, this is where you define scopes to request
app.get("/auth/twitch", passport.authenticate("twitch", {
	scope: "user_read"
}));

// Set route for OAuth redirect
app.get("/auth/twitch/callback", passport.authenticate("twitch", {
	successRedirect: "/8110/",
	failureRedirect: "/"
}));

// Define a simple template to safely generate HTML with values from user's profile
let template = handlebars.compile(`
<html>
<head><title>Twitch Authentication</title></head>
<!-- <table>
    <tr><th>Access Token</th><td>{{accessToken}}</td></tr>
    <tr><th>Refresh Token</th><td>{{refreshToken}}</td></tr>
    <tr><th>Display Name</th><td>{{display_name}}</td></tr>
    <tr><th>Bio</th><td>{{bio}}</td></tr>
    <tr><th>Image</th><td>{{logo}}</td></tr>
</table> -->
Authenticating...
<script>
window.location.href = "https://twitchplaysnintendoswitch.com";
</script>
</html>`);

// If user has an authenticated session, display it, otherwise display link to authenticate
app.get("/", function(req, res) {
	if (req.session && req.session.passport && req.session.passport.user) {
		console.log(req.session.passport.user);
		console.log(req.user);
		let time = 7 * 60 * 24 * 60 * 1000; // 7 days
		//let time = 15*60*1000;// 15 minutes
		let username = req.session.passport.user.display_name;
		let secret = config.HASH_SECRET;
		let hashedUsername = crypto.createHmac("sha256", secret).update(username).digest("hex");

		usernameDB[hashedUsername] = username;
		localStorage.setItem("db", JSON.stringify(usernameDB));

		res.cookie("TwitchPlaysNintendoSwitch", hashedUsername, {
			maxAge: time
		});
		res.send(template(req.session.passport.user));
	} else {
		res.send(`<html><head><title>Twitch Auth Sample</title></head><a href="/8110/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>`);
	}
});


app.get("/stats/", function(req, res) {
// 	if (req.session && req.session.passport && req.session.passport.user) {
// 		console.log(req.session.passport.user);
// 		res.cookie("TwitchPlaysNintendoSwitch", req.session.passport.user.display_name, {
// 			maxAge: 900000
// 		});
// 		res.send(template(req.session.passport.user));
// 	} else {
// 		res.send(`<html><head><title>Twitch Auth Sample</title></head><a href="/8110/auth/twitch"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png"></a></html>`);
// 	}
});

app.get("/img/", function(req, res) {
	let imgSrc = "data:image/jpeg;base64," + lastImage;
	let html = '<img id="screenshot" src="' + imgSrc + '">';
	res.send(html);
});

let currentPlayerSite = `
<html>
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
<div id="currentPlayer" class="custom">Current Player: </div>
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
	<style>
		.custom {
			font-family: comic sans ms;
			color: white;
			font-size: 50px;
			text-align: center;
			vertical-align: middle;
			/*text-shadow: 2px 2px #000000;*/
			text-shadow: -1px 0 1px black, 0 1px 1px black, 1px 0 1px black, 0 -1px 1px black;
		}
	</style>
	<!--   <marquee scrolldelay="0" scrollamount="10"> -->
	<div class="custom">
		Type !help for help
	</div>
	<!--   </marquee> -->
	<script>
	</script>
</html>`;
app.get("/help/", function(req, res) {
	res.send(helpSite);
});


server.listen(port, function() {
	console.log("Server listening at port %d", port);
});

if (typeof localStorage === "undefined" || localStorage === null) {
	let LocalStorage = require("node-localstorage").LocalStorage;
	localStorage = new LocalStorage("./myDatabase");
}

usernameDB = JSON.parse(localStorage.getItem("db"));

if (typeof usernameDB == "undefined" || usernameDB === null) {
	usernameDB = {};
}

console.log(util.inspect(usernameDB, false, null));

/*
	// for client side
	socket = io("http://fosse.co", {
		path: "/8100/socket.io"
	});
 */

function Client(socket) {

	//this.socket = socket;
	this.id = socket.id;
	this.name = "none";
	this.username = null;

	this.isController = false;
	this.isController2 = false;

	this.getImage = function(q) {
		let objectToSend = {};
		objectToSend.q = q;
		io.to(this.id).emit("ss", objectToSend);
	};

	this.getImage2 = function(x1, y1, x2, y2, q) {
		let objectToSend = {};
		objectToSend.x1 = x1;
		objectToSend.y1 = y1;
		objectToSend.x2 = x2;
		objectToSend.y2 = y2;
		objectToSend.q = q;
		io.to(this.id).emit("ss2", objectToSend);
	};

	this.getImage3 = function(x1, y1, x2, y2, q, s) {
		let objectToSend = {};
		objectToSend.x1 = x1;
		objectToSend.y1 = y1;
		objectToSend.x2 = x2;
		objectToSend.y2 = y2;
		objectToSend.q = q;
		objectToSend.s = s;
		io.to(this.id).emit("ss3", objectToSend);
	};

	this.quit = function() {
		io.to(this.id).emit("quit");
	}

}




let clients = [];
let channels = {};
let controlQueue = [];
let twitch_subscribers = ["beanjr_yt", "fosseisanerd", "mrruidiazisthebestinsmo", "twitchplaysconsoles"];
let currentTurnUsername = null;
let turnDuration = 30000;
let controller = null;
let controller2 = null;
let restartAvailable = true;
let turnStartTime = Date.now();
let forfeitTimer = null;
let timeTillForfeit = 10000;
let moveLineTimer = null;


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

function getImageFromUser(user, quality) {
	let index = findClientByName(user);
	if (index == -1) {
		return;
	}
	let client = clients[index];

	client.getImage(quality);
}

function getImageFromUser2(user, x1, y1, x2, y2, quality) {
	let index = findClientByName(user);
	if (index == -1) {
		return;
	}
	let client = clients[index];

	client.getImage2(x1, y1, x2, y2, quality);
}

function getImageFromUser3(user, x1, y1, x2, y2, quality, scale) {
	let index = findClientByName(user);
	if (index == -1) {
		return;
	}
	let client = clients[index];

	client.getImage3(x1, y1, x2, y2, quality, scale);
}



io.set("transports", [
	"polling",
	"websocket",
	"xhr-polling",
	"jsonp-polling"
]);

io.on("connection", function(socket) {

	console.log("USER CONNECTED");
	//numClients += 1;

	let client = new Client(socket);
	clients.push(client);

	console.log("number of clients connected: " + clients.length);

	io.emit("registerNames");
	
	socket.on("registerName", function(data) {
		let index = findClientByID(socket.id);
		clients[index].name = data;
	});

	socket.on("registerUsername", function(data) {
		let index = findClientByID(socket.id);
		
		if (typeof usernameDB[data] == "undefined") {
			clients[index].username = null;
			return;
		}
		
		//clients[index].username = data;
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
			
			if(body2.message == "invalid access token") {
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


	socket.on("listAll", function() {
		
		io.emit("registerNames");

		let names = [];
		for (let i = 0; i < clients.length; i++) {
			let client = clients[i];
			if (client.name != "none") {
				names.push(client.name);
			}
		}
		
		console.log(names);
		// 		for(let i = 0; i < clients.length; i++) {
		// 			socket.emit.to(clients[i].id
		// 		}
		io.emit("names", names);
		//socket.broadcast.emit("names", names);
	});




	// after recieving the image, send it to the console
	socket.on("screenshot", function(data) {
		
		let obj = {};
		obj.src = data;
		lastImage = data;
		
		if(lastImage == "") {
			io.emit("restart");
		}
		
		let index = findClientByID(socket.id);
		if (index != -1) {
			let client = clients[index];
			obj.name = client.name;
		}
		io.to("viewers").emit("viewImage", obj);
	});


	// directed:

	socket.on("directedGetImage", function(data) {
		let index = findClientByName(data.user);
		if (index == -1) {
			return;
		}
		let client = clients[index];
		
		let quality = parseInt(data.quality);
		quality = (isNaN(quality)) ? 0 : quality;
		//client.getImageOld(socket, quality);
		client.getImage(quality);
	});

	socket.on("sendControllerState", function(data) {

		let index = findClientByID(socket.id);
		if (index == -1) {return;}
		let client = clients[index];
		if (client.username == null) {return;}
		
		if(controlQueue.length == 0) {return;}
		currentTurnUsername = controlQueue[0];
		if(client.username != currentTurnUsername) {return;}
		
// 		if(twitch_subscribers.indexOf(currentTurnUsername) > -1) {
// 			turnDuration = 60000;
// 		} else {
// 			turnDuration = 30000;
// 		}
		
		// forfeit timer:
		clearTimeout(forfeitTimer);
		forfeitTimer = setTimeout(function(id) {
			// cancel turn:
			let index = findClientByID(id);
			if (index == -1) {return;}
			client = clients[index];
			if(client.username == null) {return;}
			index = controlQueue.indexOf(client.username);
			if(index > -1) {
				controlQueue.splice(index, 1);
				socket.emit("controlQueue", {queue: controlQueue});
			}
			if(controlQueue.length >= 1) {
				//currentTurnUsername = controlQueue[0];
				//clearTimeout(moveLineTimer);
				//moveLine();
				turnStartTime = Date.now();
				clearTimeout(moveLineTimer);
				moveLineTimer = setTimeout(moveLine, turnDuration);
			} else {
				currentTurnUsername = null;
			}
			let currentTime = Date.now();
			let elapsedTime = currentTime - turnStartTime;
			let timeLeft = turnDuration - elapsedTime;
			io.emit("turnTimeLeft", {timeLeft: timeLeft, username: currentTurnUsername, turnLength: turnDuration});
		}, timeTillForfeit, socket.id);
		
		
		if (controller != null) {
			io.to(controller.id).emit("controllerState", data);
		}
		io.emit("currentPlayer", client.username);
	});

	socket.on("directedGetImage", function(data) {
		let index = findClientByName(data.user);
		if (index == -1) {return;}
		let client = clients[index];
		
		let quality = parseInt(data.quality);
		quality = (isNaN(quality)) ? 0 : quality;
		client.getImage(quality);
	});

	socket.on("IamController", function() {
		let index = findClientByID(socket.id);
		if (index == -1) {return;}
		client = clients[index];
		client.isController = true;
		controller = client;
	});
	
	/* QUEUE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	
	socket.on("requestTurn", function() {
		let index = findClientByID(socket.id);
		if (index == -1) {return;}
		client = clients[index];
		if(client.username == null) {return;}
		
		if(controlQueue.indexOf(client.username) == -1) {
			controlQueue.push(client.username);
			currentTurnUsername = controlQueue[0];
			socket.emit("controlQueue", {queue: controlQueue});
		}
		
		if (controlQueue.length == 1) {
			turnStartTime = Date.now();
			clearTimeout(moveLineTimer);
			moveLineTimer = setTimeout(moveLine, turnDuration);
		}
		
		if (controlQueue.length != 1) {return;}
		
		// forfeit timer:
		clearTimeout(forfeitTimer);
		forfeitTimer = setTimeout(function(id) {
			// cancel turn:
			let index = findClientByID(id);
			if (index == -1) {return;}
			client = clients[index];
			if(client.username == null) {return;}
			index = controlQueue.indexOf(client.username);
			if(index > -1) {
				controlQueue.splice(index, 1);
				socket.emit("controlQueue", {queue: controlQueue});
			}
			if(controlQueue.length >= 1) {
				//currentTurnUsername = controlQueue[0];
// 				clearTimeout(moveLineTimer);
// 				moveLine();
				turnStartTime = Date.now();
				clearTimeout(moveLineTimer);
				moveLineTimer = setTimeout(moveLine, turnDuration);
			} else {
				currentTurnUsername = null;
			}
			let currentTime = Date.now();
			let elapsedTime = currentTime - turnStartTime;
			let timeLeft = turnDuration - elapsedTime;
			io.emit("turnTimeLeft", {timeLeft: timeLeft, username: currentTurnUsername, turnLength: turnDuration});
		}, timeTillForfeit, socket.id);
		
	});
	
	socket.on("cancelTurn", function() {
		let index = findClientByID(socket.id);
		if (index == -1) {return;}
		client = clients[index];
		if(client.username == null) {return;}
		
		index = controlQueue.indexOf(client.username);
		if(index > -1) {
			controlQueue.splice(index, 1);
			socket.emit("controlQueue", {queue: controlQueue});
			
			
			if(controlQueue.length > 1) {
				//currentTurnUsername = controlQueue[0];
				//clearTimeout(moveLineTimer);
				//moveLine();
				turnStartTime = Date.now();
				clearTimeout(moveLineTimer);
				moveLineTimer = setTimeout(moveLine, turnDuration);
			} else {
				currentTurnUsername = null;
			}
			
			
			
			let currentTime = Date.now();
			let elapsedTime = currentTime - turnStartTime;
			let timeLeft = turnDuration - elapsedTime;
			io.emit("turnTimeLeft", {timeLeft: timeLeft, username: currentTurnUsername, turnLength: turnDuration});
			//io.emit("currentPlayer", currentTurnUsername);// not needed
		}
	});
	
	
	
	/* STREAM COMMANDS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("restart", function() {
		if(restartAvailable) {
			restartAvailable = false;
			console.log("restarting");
			io.emit("quit");
			//io.emit("restart");
		}
	});
	
	socket.on("restart server", function() {
		restartAvailable = false;
		console.log("server restarting");
		io.emit("quit");
		process.exit();
	});

	socket.on("restart lagless2", function() {
		restartAvailable = false;
		console.log("restarting lagless2");
		io.to("relay").emit("restart lagless2");
	});
	
	socket.on("restart lagless3", function() {
		restartAvailable = false;
		console.log("restarting lagless3");
		io.to("relay").emit("restart lagless3");
	});

	socket.on("disconnect", function() {
		console.log("disconnected")
		let i = findClientByID(socket.id)
		clients.splice(i, 1);
	});
	
	/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
	socket.on("setQuality", function(data) {
		
		if(controlQueue.length == 0) {io.emit("setQuality", streamSettings.quality);return;}
		currentTurnUsername = controlQueue[0];
		if(client.username != currentTurnUsername) {io.emit("setQuality", streamSettings.quality);return;}
		
		streamSettings.quality = parseInt(data);
		io.emit("setQuality", data);
	});
	
	socket.on("setScale", function(data) {
		
		if(controlQueue.length == 0) {io.emit("setScale", streamSettings.scale); return;}
		currentTurnUsername = controlQueue[0];
		if(client.username != currentTurnUsername) {io.emit("setScale", streamSettings.scale); return;}
		
		streamSettings.scale = parseInt(data);
		io.emit("setScale", data);
	});
	
	socket.on("setFPS", function(data) {
		
		streamSettings.fps = parseInt(data);
		//io.emit("setFPS", data);
	});

// 	socket.on("setCoords", function(data) {
// 		streamSettings.x1 = data.x1 || streamSettings.x1;
// 		streamSettings.x2 = data.x2 || streamSettings.x2;
// 		streamSettings.y1 = data.y1 || streamSettings.y1;
// 		streamSettings.y2 = data.y2 || streamSettings.y2;
// 	});



	/* WebRTC @@@@@@@@@@@@@@@@@@@@@@@@ */
	
	socket.on("message", function(data) {
		socket.broadcast.emit("message", data);
	});

	let initiatorChannel = "";
	if (!io.isConnected) {
		io.isConnected = true;
	}

	socket.on("new-channel", function(data) {
		if (!channels[data.channel]) {
			initiatorChannel = data.channel;
		}
		
		channels[data.channel] = data.channel;
		onNewNamespace(data.channel, data.sender);
	});

	socket.on("presence", function(channel) {
		let isChannelPresent = !!channels[channel];
		socket.emit("presence", isChannelPresent);
	});

	socket.on("disconnect", function(channel) {
		if (initiatorChannel) {
			delete channels[initiatorChannel];
		}
	});
	
	
	/* AUDIO 2.0 @@@@@@@@@@@@@@@@@@@@@@@@ */
	
    socket.on("receive-audio", function (data) {
		if (controller != null) {
			for (let i = 0; i < clients.length; i++) {
				let c = clients[i];
				if (c.id != controller.id) {
					io.to(c.id).emit("send-audio", data);
				}
			}
		} else {
			io.emit("send-audio", data);
		}
    });
	
	socket.on("client-signal", function (data) {
		if (controller != null) {
			for (let i = 0; i < clients.length; i++) {
				let c = clients[i];
				if (c.id != controller.id) {
					io.to(c.id).emit("client-signal", data);
				}
			}
		} else {
			io.emit("client-signal", data);
		}
    });
	
	socket.on("host-signal", function (data) {
		if (controller != null) {
			for (let i = 0; i < clients.length; i++) {
				let c = clients[i];
				if (c.id != controller.id) {
					io.to(c.id).emit("host-signal", data);
				}
			}
		} else {
			io.emit("host-signal", data);
		}
    });
	
	
	
	/* LATENCY @@@@@@@@@@@@@@@@@@@@@@@@ */
	socket.on("ping2", function() {
		socket.emit("pong2");
	});
	
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

// 	setInterval(function(){
// 		let user = "Matt";
//     let x1 = 255;
//     let x2 = 1665;
//     let y1 = 70;
//     let y2 = 855;

//     let q = parseInt((Math.random()*80));
//     //let quality = 14;
// 		//let quality = parseInt((Math.random()*10));
//     //let quality = parseInt((Math.random()*80));
//     let quality = q;
// 		//getImageFromUser(user, quality);
//     getImageFromUser2(user, x1, y1, x2, y2, quality);
// 	}, 100);



// setInterval(function() {
// 	let user = "Matt";
// 	//     let x1 = 255;
// 	//     let x2 = 1665;
// 	//     let y1 = 70;
// 	//     let y2 = 855;

// 	let x1 = 255 - 1920;
// 	let x2 = 1665 - 1920;
// 	let y1 = 70;
// 	let y2 = 855;

// 	let quality = 10;
// 	getImageFromUser2(user, x1, y1, x2, y2, quality);
// }, 150);


// setInterval(function() {
// 	let user = "Matt";

// 	let x1 = 255 - 1920;
// 	let x2 = 1665 - 1920;
// 	let y1 = 70;
// 	let y2 = 855
// 	let quality = streamSettings.quality;
// 	let scale = streamSettings.scale;

// 	getImageFromUser3(user, x1, y1, x2, y2, quality, scale);
// }, 66.66666);


setInterval(function() {
	restartAvailable = true;
}, 4000);




function moveLine() {
	if(controlQueue.length > 1) {
		controlQueue.shift();
		currentTurnUsername = controlQueue[0];
		// stop the controller
		if (controller != null) {
			io.to(controller.id).emit("controllerState", "800000000000000 127 127 127 127");
		}
	}
	io.emit("controlQueue", {queue: controlQueue});
	
	turnStartTime = Date.now();
	moveLineTimer = setTimeout(moveLine, turnDuration);
}
moveLine();


setInterval(function() {
	let currentTime = Date.now();
	let elapsedTime = currentTime - turnStartTime;
	let timeLeft = turnDuration - elapsedTime;
	
	io.emit("turnTimeLeft", {timeLeft: timeLeft, username: currentTurnUsername, turnLength: turnDuration});
}, 500);



function stream() {
	let user = "Matt";
	let x1 = streamSettings.x1;
	let x2 = streamSettings.x2;
	let y1 = streamSettings.y1;
	let y2 = streamSettings.y2;
	let quality = streamSettings.quality;
	let scale = streamSettings.scale;
	getImageFromUser3(user, x1, y1, x2, y2, quality, scale);
	setTimeout(stream, 1000 / streamSettings.fps);
}
stream();
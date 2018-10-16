import React, { Component } from "react";
import ReactDOM from "react-dom";

import { combineReducers, createStore } from "redux";


// components:
const ViewerList = require("src/components/ViewerList.jsx");
const TurnTimer = require("src/components/TurnTimer.jsx");
const ForfeitTimer = require("src/components/ForfeitTimer.jsx");
const Player = require("src/components/Player.jsx");

const ControlQueue = require("src/components/ControlQueue.jsx");
const JoinLeaveQueueButton = require("src/components/JoinLeaveQueueButton.jsx");

const UsernameDropdown = require("src/components/UsernameDropdown.jsx");

const Waitlist = require("src/components/Waitlist.jsx");
const ConnectAccounts = require("src/components/ConnectAccounts.jsx");
const Checkbox = require("src/components/Checkbox.jsx");

const LeftJoyCon = require("src/components/LeftJoyCon.jsx");
const RightJoyCon = require("src/components/RightJoyCon.jsx");
const LaglessView = require("src/components/LaglessView.jsx");

const MySlider = require("src/components/MySlider.jsx");


// libs:
import SNEX from "@snex/react-connect";
const snex = require("snex");
require("js/keymaster.js");
const Gamepad = require("js/gamepad.js");
const VirtualProController = require("js/VirtualProController.js");
const keycode = require("keycode");
/*const keymaster = */
// require("keymaster");
const textFitPercent = require("js/textfitpercent.js");
const tools = require("js/tools.js");
window.Noty = require("noty");

const InputMaster = require("js/InputMaster.js");

// rest of tools:
String.prototype.replaceAll = function (search, replacement) {
	let target = this;
	return target.replace(new RegExp(search, "g"), replacement);
};

$.fn.sumHeights = function () {
	let h = 0;
	this.each(function () {
		h += $(this).outerHeight();
	});
	return h;
};
$.fn.addUp = function (getter) {
	return Array.prototype.reduce.call(this, function (a, b) {
		return a + getter.call($(b));
	}, 0);
}

// let socket = io("https://twitchplaysnintendoswitch.com", {
// 	path: "/8110/socket.io",
// 	transports: ["websocket"]
// });

window.socket = null;

let globalEventTimer = false;
let sendInputTimer;
let currentPlayerChosen = 0;
let wasPressedKeyCodes = [];
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let loaded = false;
let locked = false;
window.player = null;
let player4;
let audioConnected = false;
let videoConnected = false;
let authCookie;
let crate;
let banlist = [];
let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146", "103.217.104.190"];
let resizers = [];
let resizeDebounceTimer;
let resizeAvailable = true;
let isMobile = false;

// twitch lagless swap settings
let isExempt = false;
let minQueuePos = 5;
let tabsSwappedWithTwitch = [false, false, false, false];

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// check if on mobile
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	isMobile = true;
}

window.input = new InputMaster(isMobile);
// input.controller.init();
let currentInputMode = null;

let keyboardLayout = {};
keyboardLayout.LU = "W";
keyboardLayout.LD = "S";
keyboardLayout.LL = "A";
keyboardLayout.LR = "D";
keyboardLayout.RU = "I";
keyboardLayout.RD = "K";
keyboardLayout.RL = "J";
keyboardLayout.RR = "L";
keyboardLayout.ABtn = "right";
keyboardLayout.BBtn = "down";
keyboardLayout.XBtn = "up";
keyboardLayout.YBtn = "left";
keyboardLayout.DUp = "T";
keyboardLayout.DDown = "G";
keyboardLayout.DLeft = "F";
keyboardLayout.DRight = "H";
keyboardLayout.LStick = "R";
keyboardLayout.RStick = "Y";
keyboardLayout.LBtn = "U";
keyboardLayout.ZL = "Q";
keyboardLayout.RBtn = "O";
keyboardLayout.ZR = "E";
keyboardLayout.Minus = "-";
keyboardLayout.Plus = "=";
keyboardLayout.Capture = "1";
keyboardLayout.Home = "2";
// settings.keyboardProfiles.default = keyboardLayout;

/* CONTROLLER STUFF */

let gamepadCounter = 0;

let controller = new VirtualProController();
controller.reset();

// settings:
window.settings = {
	enableAudioThree: true,
	audioThree: false,
	keyboardControls: false,
	controllerControls: false,
	touchControls: true,
	mouseControls: false,
	analogStickMode: false,
	currentInputMode: null,
	darkTheme: false,
	fullscreen: false,
	largescreen: false,
	youtubeChat: false,
	hideChat: false,
	hideNav: false,
	sticks: {
		L: {
			X: {
				sensitivity: 1,
				offset: 0,
			},
			Y: {
				sensitivity: 1,
				offset: 0,
			},
		},
		R: {
			X: {
				sensitivity: 1,
				offset: 0,
			},
			Y: {
				sensitivity: 1,
				offset: 0,
			},
		},
	},
	deadzone: 50,
	stickSensitivityX: 1,
	stickSensitivityY: 1,
	stickAttack: 20,
	stickReturn: 20,
	keyboardProfiles: {},
	tab: 1,
	dpadSwap: false,
	TDSConfig: false,
	volume: 50,
	usernameIndex: 0
};

let lagless1Settings = {};
let lagless2Settings = {
	framerate: 30,
	videoBitrate: 1,
	scale: 720,
	offsetX: 0,
	offsetY: 0,
};
let lagless3Settings = {
	framerate: 30,
	videoBitrate: 1,
	scale: 720,
	offsetX: 0,
	offsetY: 0,
};

// detect firefox:
if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
	settings.stickSensitivityX = 1.5;
	settings.stickSensitivityY = 1.5;
}

let lastCurrentTime = 0;

let mouseMoveTimer = null;
let pingTime = 0;
let restPos = 128;
// Default 512*1024 (512kb).
// Default 128*1024 (128kb)
let videoBufferSize = 256 * 1024;
let audioBufferSize = 128 * 1024;

let oldControllerState = "000000000000000000" + " " + restPos + " " + restPos + " " + restPos + " " + restPos;
let lagless1Port = 8001;
let lagless2Port = 8002;
let lagless3Port = 8003;
let lagless4Port = 8004;

let lagless2URL = "wss://twitchplaysnintendoswitch.com/" + lagless2Port + "/";




export default class App extends Component {

	constructor(props) {
		super(props);

		this.toggleKeyboardControls = this.toggleKeyboardControls.bind(this);
		this.toggleControllerControls = this.toggleControllerControls.bind(this);
		this.toggleTouchControls = this.toggleTouchControls.bind(this);
		this.toggleControllerView = this.toggleControllerView.bind(this);

		this.toggleAnalogStickMode = this.toggleAnalogStickMode.bind(this);
		this.toggleDpadSwap = this.toggleDpadSwap.bind(this);
		this.toggleTDSConfig = this.toggleTDSConfig.bind(this);

		this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
		this.toggleFullscreen = this.toggleFullscreen.bind(this);
		this.exitFullscreen = this.exitFullscreen.bind(this);
		this.toggleLargescreen = this.toggleLargescreen.bind(this);
		this.toggleYoutubeChat = this.toggleYoutubeChat.bind(this);
		this.toggleHideChat = this.toggleHideChat.bind(this);
		this.toggleHideNav = this.toggleHideNav.bind(this);

		this.switchTabs = this.switchTabs.bind(this);

		this.sendControllerState = this.sendControllerState.bind(this);


		this.choosePlayer = this.choosePlayer.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);

		this.state = {

			players: [{
					name: "",
					turnTimeLeft: 0,
					turnPercent: 0,
					forfeitTimeLeft: 0,
					forfeitPercent: 0,
				},
				{
					name: "",
					turnTimeLeft: 0,
					turnPercent: 0,
					forfeitTimeLeft: 0,
					forfeitPercent: 0,
				},
				{
					name: "",
					turnTimeLeft: 0,
					turnPercent: 0,
					forfeitTimeLeft: 0,
					forfeitPercent: 0,
				},
				{
					name: "",
					turnTimeLeft: 0,
					turnPercent: 0,
					forfeitTimeLeft: 0,
					forfeitPercent: 0,
				},
			],

			currentPlayerChosen: 0,

			waitlists: [
				[],
				[],
				[],
				[],
				[],
			],
			viewerIDs: [],
			usernameMap: {},

			controlQueues: [
				[],
				[],
				[],
				[],
			],


			// account info:
			myUniqueID: "",
			myConnectedAccounts: [],
			myUsername: "???",
			myValidUsernames: [],
			usernameIndex: 0,

			// lagless tab:
			tab: 2,

			enableAudioThree: true,
			audioThree: false,
			keyboardControls: true,
			controllerControls: true,
			touchControls: true,
			controllerView: true,
			mouseControls: false,
			analogStickMode: false,
			dpadSwap: false,
			TDSConfig: false,
			darkTheme: false,
			fullscreen: false,
			largescreen: false,
			youtubeChat: false,
			hideChat: false,
			hideNav: false,
			deadzone: 50,

			volume: 1,

			// controller view:
			controllerViewState: "",

			isSignedin: false,

			// controller: new VirtualProController(),

			// sticks:
			sticks: {
				L: {
					X: {
						sensitivity: 1,
						offset: 0,
					},
					Y: {
						sensitivity: 1,
						offset: 0,
					},
				},
				R: {
					X: {
						sensitivity: 1,
						offset: 0,
					},
					Y: {
						sensitivity: 1,
						offset: 0,
					},
				},
			},
			deadzone: 50,
			stickSensitivityX: 1,
			stickSensitivityY: 1,
			stickAttack: 20,
			stickReturn: 20,
		};
	}


	componentDidMount() {


		console.log("restoring preferences");

		// check if new:
		// localforage.getItem("new").then(function (value) {
		// 	if (value != "new") {
		// 		$("#tutorialWindow").modal();
		// 	}
		// 	localforage.setItem("new", "new");
		// });

		// check for ads:
		// 	localforage.getItem("ads").then(function(value) {
		// 		if (value != "ads") {
		// 			if (typeof canRunAds == "undefined") {
		// 				console.log("test");
		// 				swal({
		// 					title: "Disable your adblocker! or don\'t ¯\\_(ツ)_/¯ This message won't appear again!",
		// 				});
		// 			}
		// 		}
		// 		localforage.setItem("ads", "ads");
		// 	});

		// Get stored preferences
		localforage.getItem("settings").then((value) => {
			// If they exist, write them
			if (typeof value != "undefined") {
				settings = Object.assign({}, settings, JSON.parse(value));
			}
			// Store the preferences (so that the default values get stored)
			localforage.setItem("settings", JSON.stringify(settings));

			// debug:
			console.log(settings);

			// if (settings.tab != 1) {
			// 	$("#tab" + settings.tab).trigger("click");
			// }
			// $("#tab" + this.state.tab).trigger("click");
			// if (this.state.tab == 1) {
			// 	this.switchTabs(1);
			// }
			$("#tab" + this.state.tab).trigger("click");
			this.switchTabs(this.state.tab);
			// addJoyCons(settings.tab);

			rebindUnbindTouchControls();
			clearAndReplaceProfiles();

			this.setState({
				keyboardControls: settings.keyboardControls,
				controllerControls: settings.controllerControls,
				touchControls: settings.touchControls,
				analogStickMode: settings.analogStickMode,
				dpadSwap: settings.dpadSwap,
				TDSConfig: settings.TDSConfig,
				enableAudioThree: settings.enableAudioThree,
				audioThree: settings.audioThree,
				darkTheme: settings.darkTheme,
				fullscreen: settings.fullscreen,
				largescreen: settings.largescreen,
				youtubeChat: settings.youtubeChat,
				hideChat: settings.hideChat,
				hideNav: settings.hideNav,
				// tab: settings.tab,
			});

			// $("#deadzoneSlider").slider("value", settings.deadzone);
			// $("#deadzone").text(settings.deadzone);
			//
			// $("#stickSensitivitySlider").slider("value", settings.stickSensitivityX);
			// $("#sensitivity").text(settings.stickSensitivityX);
			//
			// $("#stickAttackSlider").slider("value", settings.stickAttack);
			// $("#attack").text(settings.stickAttack);
			//
			// $("#stickReturnSlider").slider("value", settings.stickReturn);
			// $("#return").text(settings.stickReturn);
			//
			// // volume:
			// $("#laglessVolume").slider("value", settings.volume);
			// $("#laglessVolume span").text(settings.volume);
			// setTimeout(() => {
			// 	try {
			// 		player.volume = settings.volume / 100; // doesn't update automatically :/
			// 	} catch (error) {}
			// 	try {
			// 		audio.volume = settings.volume / 100; // doesn't update automatically :/
			// 	} catch (error) {}
			// }, 2000);
			// $(".audioThreeCheckbox").prop("checked", $("#audioThreeCheckbox").prop("checked"));
			//
			/* AUTH  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
			// let authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
			// if (authCookie != null) {
			// 	authCookie = authCookie.split(" ")[0].replace(/;/g, "");
			// 	socket.emit("registerAccount", {
			// 		auth: authCookie,
			// 		usernameIndex: settings.usernameIndex
			// 	});
			// 	$("#authenticateButton").remove();
			// } else {
			// 	// replace with twitch until signed in:
			// 	replaceWithTwitch("#lagless" + settings.tab);
			// 	$("#tab1").addClass("disabled");
			// 	$("#tab3").addClass("disabled");
			// 	$("#tab4").addClass("disabled");
			// 	$("#tab5").addClass("disabled");
			// 	// remove the logout button:
			// 	$("#logout").remove();
			// 	$("#loggedInStatus").remove();
			//
			// 	$(".disabled").on("click", function () {
			// 		swal("You have to sign in first!");
			// 	});
			// }
			//
			// resizers.push(textFitPercent({
			// 	selector: "#lagless2KeyboardDropdown",
			// 	parent: "#lagless2Bar",
			// 	percentWidth: 20,
			// 	isFirstChild: true,
			// 	isClass: true,
			// 	maxTries: 20,
			// 	increment: 0.2
			// }));
			//
			// resizers.push(textFitPercent({
			// 	selector: "#lagless2ViewerDropdown",
			// 	parent: "#lagless2Bar",
			// 	percentWidth: 12,
			// 	isFirstChild: true,
			// 	maxTries: 20,
			// 	increment: 0.2,
			// 	maxFontSize: 20
			// }));
			//
			// resizers.push(textFitPercent({
			// 	selector: "#lagless2Refresh",
			// 	parent: "#lagless2Bar",
			// 	percentWidth: 8,
			// 	// 			isFirstChild: true,
			// 	maxTries: 20,
			// 	increment: 0.2,
			// 	accuracy: 5,
			// 	maxFontSize: 30
			// }));
			//
			// resizers.push(textFitPercent({
			// 	selector: "#lagless2KeyboardSettings",
			// 	parent: "#lagless2Bar",
			// 	percentWidth: 8,
			// 	// 			isFirstChild: true,
			// 	maxTries: 20,
			// 	increment: 0.2,
			// 	accuracy: 5,
			// 	maxFontSize: 30
			// }));
			//
			// resizers.push(textFitPercent({
			// 	selector: "#hidePlayers",
			// 	parent: "#playersContainer",
			// 	percentWidth: 5,
			// 	// 			isFirstChild: true,
			// 	maxTries: 20,
			// 	increment: 0.2,
			// 	accuracy: 5,
			// 	maxFontSize: 20
			// }));
			//
			// for (let i = 0; i < resizers.length; i++) {
			// 	resizers[i].resize();
			// }
			//
			// wait a little longer so the joycon images load:
			setTimeout(() => {
				$("body").addClass("loaded");
				// after animation is done:
				setTimeout(() => {
					$(".loaded #loader-wrapper")[0].style.visibility = "hidden";
				}, 500);
			}, 0);

			/* DISCORD EMBED */
			// 		crate = new Crate({
			// 			server: "433874668534104065",
			// 			channel: "487328538173767692",
			// 			shard: "https://cl2.widgetbot.io",
			// 		});

		});









		socket = io("https://twitchplaysnintendoswitch.com", {
			path: "/8110/socket.io",
			transports: ["websocket"]
		});

		socket.on("turnTimesLeft", (data) => {

			let newPlayers = [...this.state.players];

			for (let i = 0; i < data.turnTimesLeft.length; i++) {
				let turnTimeLeft = parseInt(data.turnTimesLeft[i] / 1000);
				let turnPercent = parseInt((data.turnTimesLeft[i] / data.turnLengths[i]) * 100);

				let forfeitTimeLeft = parseInt(data.forfeitTimesLeft[i] / 1000);
				let forfeitPercent = parseInt((data.forfeitTimesLeft[i] / data.forfeitLengths[i]) * 100);

				// players[i].name
				newPlayers[i].turnTimeLeft = turnTimeLeft;
				newPlayers[i].turnPercent = turnPercent;
				newPlayers[i].forfeitTimeLeft = forfeitTimeLeft;
				newPlayers[i].forfeitPercent = forfeitPercent;
			}

			// check if you're in the waitlist
			if (data.waitlists[this.state.tab - 1].indexOf(this.state.myUniqueID) > -1) {

				if (!tabsSwappedWithTwitch[this.state.tab - 1]) {
					tabsSwappedWithTwitch[this.state.tab - 1] = true;
					replaceWithTwitch(this.state.tab);
					// setTimeout(() => {
					// socket.emit("leaveLagless");
					// }, 4000);
					// swal("The server is a bit overloaded right now, the lagless stream will be swapped out for twitch temporarily, check the discord server for the rules on how this works.");
					new Noty({
						theme: "mint",
						type: "warning",
						text: "The server is a bit overloaded right now, the lagless stream will be swapped out for twitch temporarily, check the discord server for the rules on how this works.",
						timeout: 5000,
						sounds: {
							volume: 0.5,
							sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
							conditions: ["docVisible"],
						},
					}).show();
				}

			} else if (tabsSwappedWithTwitch[this.state.tab - 1]) {
				tabsSwappedWithTwitch[this.state.tab - 1] = false;
				new Noty({
					theme: "mint",
					type: "success",
					text: "You're at the top of the waitlist! Switching back to lagless!",
					timeout: 5000,
					sounds: {
						volume: 0.5,
						sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
						conditions: ["docVisible"],
					},
				}).show();
				replaceWithLagless(this.state.tab);
			}
			// todo: update with state:
			if (locked != data.locked) {
				locked = data.locked;
				if (locked) {
					let iconHTML = '<i class="material-icons">lock</i>';
					$('i:contains("lock_open")').replaceWith(iconHTML);
				} else {
					let iconHTML = '<i class="material-icons">lock_open</i>';
					$('i:contains("lock")').replaceWith(iconHTML);
				}
			}

			this.setState({
				waitlists: data.waitlists,
				viewerIDs: data.viewers,
				players: newPlayers,
			});
		});

		socket.on("controlQueues", (data) => {
			let newPlayers = [...this.state.players];
			for (let i = 0; i < data.length; i++) {
				newPlayers[i].name = data[i][0];
			}
			this.setState({
				controlQueues: data,
				players: newPlayers,
			});
		});

		socket.on("usernameMap", (data) => {
			this.setState({
				usernameMap: data,
			});
		});




		/* AUTHENTICATION */
		let authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
		if (authCookie != null) {
			authCookie = authCookie.split(" ")[0].replace(/;/g, "");
		} else {
			// replace with twitch until signed in:
			replaceWithTwitch(this.state.tab);
			$("#tab1").addClass("disabled");
			$("#tab3").addClass("disabled");
			$("#tab4").addClass("disabled");
			$("#tab5").addClass("disabled");
			// remove the logout button:
			$("#logout").remove();
			$("#loggedInStatus").remove();

			$(".disabled").on("click", function () {
				swal("You have to sign in first!");
			});
		}
		setInterval(() => {
			if (authCookie != null) {
				socket.emit("registerAccount", {
					auth: authCookie,
					usernameIndex: this.state.usernameIndex,
				});
			}
		}, 5000);
		setTimeout(() => {
			if (!loaded) {
				loaded = true;
				$.ajax({
					url: "https://twitchplaysnintendoswitch.com/accountData/" + this.state.myUniqueID + "/" + authCookie,
				});
			}
		}, 5000);

		// response:
		socket.on("accountInfo", (data) => {
			this.setState({
				myUniqueID: data.uniqueID,
				myConnectedAccounts: data.connectedAccounts,
				myUsername: data.username,
				myValidUsernames: data.validUsernames,
				isSignedin: true,
			});
		});

		socket.on("needToSignIn", () => {
			swal("You need to sign in!");
			setTimeout(() => {
				tools.deleteAllCookies();
				location.reload(true);
			}, 1000);
		});
		socket.emit("join", "lagless" + this.state.tab);
		setInterval(() => {
			socket.emit("join", "lagless" + this.state.tab);
		}, 10000);


		/* IP */
		setInterval(() => {
			$.getJSON("https://jsonip.com?callback=?", (data) => {
				socket.emit("registerIP", {
					ip: data.ip,
					id: this.state.myUniqueID,
					username: this.state.myUsername,
				});
				if (bannedIPs.indexOf(data.ip) > -1) {
					window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
				}
				if (banlist.indexOf(this.state.myUsername) > -1) {
					window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
				}
			});
		}, 5000);

		socket.on("forceRefresh", function (data) {
			swal({
				title: "There has been a force refresh!"
			}).then((result) => {
				if (result.value) {
					location.reload(true);
				}
			});
			// actually force after 5 seconds:
			setTimeout(() => {
				location.reload(true);
			}, 5000);
		});

		/* CONTROLLER VIEW @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		socket.on("controllerState1", (data) => {
			this.setState({
				controllerViewState: data,
			})
		});

		// fullscreen:
		document.addEventListener("webkitfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("mozfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("fullscreenchange", this.exitFullscreen, false);
		document.addEventListener("MSFullscreenChange", this.exitFullscreen, false);


		// lagless setup:

		/* LAGLESS 1.0 */

		let videoCanvas1 = $("#videoCanvas1")[0];
		videoCanvas1.width = 1280;
		videoCanvas1.height = 720;
		let videoCanvas1Context = videoCanvas1.getContext("2d");


		socket.on("viewImage", (data) => {

			let src = "data:image/jpeg;base64," + data;
			if (src == "data:image/jpeg;base64,") {
				socket.emit("restart");
				return;
			}
			let image = new Image();
			image.style = "max-width:100%; height:auto;";
			image.onload = () => {
				let imgWidth = image.width;
				let imgHeight = image.height;
				let canvasWidth = videoCanvas1.width;
				let canvasHeight = videoCanvas1.height;
				let ratio = (imgHeight / imgWidth);
				let canvasRatio = canvasWidth / canvasHeight;
				let ratioW = 1280 / $("#videoCanvas1").innerWidth();
				let ratioH = 720 / $("#videoCanvas1").innerHeight();
				let cWidth = $("#videoCanvas1").innerWidth();
				videoCanvas1Context.clearRect(0, 0, canvasWidth, canvasHeight);
				videoCanvas1Context.drawImage(image, 0, 0, cWidth * ratioW, cWidth * ratio * ratioH);
			};
			image.src = src;
		});
		$("#lagless1Refresh").on("click", function () {
			socket.emit("restart1");
		});

		/* LAGLESS 2.0 */
		// Setup the WebSocket connection and start the player
		let canvas2 = $("#videoCanvas2")[0];
		// Default 512*1024 (512kb).
		// Default 128*1024 (128kb)
		// let player = new JSMpeg.Player(lagless2URL, {canvas: canvas2, video: true, audio: true, videoBufferSize: 256*1024, audioBufferSize: 128*1024, maxAudioLag: 0.5});
		// player.maxAudioLag = 0.5;
		// player.stop();

		// on settings change:
		socket.on("lagless2SettingsChange", function (data) {
			try {
				player.destroy();
			} catch (error) {}
			player = new JSMpeg.Player(lagless2URL, {
				canvas: canvas2,
				video: true,
				audio: true,
				videoBufferSize: videoBufferSize,
				audioBufferSize: audioBufferSize,
				maxAudioLag: 0.5
			});
			if (!this.state.audioThree) {
				player.volume = this.state.volume / 100;
			} else {
				player.volume = 0;
			}
		});

		//socket.emit("lagless2Settings", {videoBitrate: "2M", framerate: 20, scale: "640:360"});

		$("#lagless2Refresh").on("click", function () {
			socket.emit("restart2");
		});

		/* LAGLESS 3.0 */
		let canvas3 = $("#videoCanvas3")[0];
		// Create h264 player
		let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
		let wsavc = new WSAvcPlayer(canvas3, "webgl", 1, 35);
		window.wsavc = wsavc;
		wsavc.on("disconnected", () => console.log("WS Disconnected"));
		wsavc.on("connected", () => console.log("WS connected"));
		wsavc.on("frame_shift", (fbl) => {
			// fb.innerText = "fl: " + fbl
		});
		wsavc.on("initalized", (payload) => {
			console.log("Initialized", payload);
		});
		wsavc.on("stream_active", active => console.log("Stream is ", active ? "active" : "offline"));
		wsavc.on("custom_event_from_server", event => console.log("got event from server", event));

		$("#lagless3Refresh").on("click", function () {
			try {
				wsavc.disconnect();
			} catch (error) {}
			let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
			wsavc.connect(uri);
		});

		$("#lagless3Refresh").on("click", function () {
			socket.emit("restart3");
		});

		// on settings change:
		socket.on("lagless3SettingsChange", function (data) {
			let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
			wsavc.connect(uri);
		});

		/* LAGLESS 4.0 */
		let canvas4 = $("#videoCanvas4")[0];
		let videoPeer = new SimplePeer({
			initiator: false,
			trickle: true
		});
		videoPeer.on("error", function (err) {
			console.log("error", err)
		});
		videoPeer.on("signal", function (data) {
			console.log("SIGNAL", JSON.stringify(data));
			socket.emit("clientPeerSignalV", JSON.stringify(data));
		});
		videoPeer.on("connect", function () {
			console.log("CONNECT");
			videoPeer.send(Math.random());
		});
		videoPeer.on("data", function (data) {
			console.log("data: " + data)
		});
		socket.on("hostPeerSignalV", function (data) {
			videoPeer.signal(JSON.parse(data));
		});
		videoPeer.on("stream", function (stream) {
			// got remote video stream, then show it in a video tag
			canvas4.src = window.URL.createObjectURL(stream); // deprecated
			// 	canvas4.srcObj = stream;
			canvas4.play();
		});

		sendInputTimer = setInterval(() => {
			input.pollDevices();
			this.sendControllerState();
		}, 1000 / 120);

	}

	onUsernameChange(event) {
		let index = event.target.getAttribute("index");
		this.setState({
			usernameIndex: index,
			myUsername: this.state.myValidUsernames[index],
		});
	}

	// SNEX:
	handleSnex = (controller) => {
		controller.on("data", data => {
			switch (data.key) {
				case "UP":
					input.snexController.state.LStick.y = data.state ? 255 : 128;
					break;
				case "DOWN":
					input.snexController.state.LStick.y = data.state ? 0 : 128;
					break;
				case "LEFT":
					input.snexController.state.LStick.x = data.state ? 0 : 128;
					break;
				case "RIGHT":
					input.snexController.state.LStick.x = data.state ? 255 : 128;
					break;
				case "A":
					input.snexController.state.btns.a = data.state;
					break;
				case "B":
					input.snexController.state.btns.b = data.state;
					break;
				case "X":
					input.snexController.state.btns.x = data.state;
					break;
				case "Y":
					input.snexController.state.btns.y = data.state;
					break;
				case "SELECT":
					input.snexController.state.btns.zl = data.state;
					break;
				case "START":
					input.snexController.state.btns.zr = data.state;
					break;
			}
		});
	}

	// checkbox settings:
	toggleKeyboardControls(state) {
		this.setState({ keyboardControls: state }, () => {});
	}
	toggleControllerControls(state) {
		this.setState({ controllerControls: state }, () => {});
	}
	toggleTouchControls(state) {
		this.setState({ touchControls: state }, () => {});
	}
	toggleControllerView(state) {
		this.setState({ controllerView: state }, () => {
			if (this.state.controllerView && this.state.largescreen) {
				this.setState({ largescreen: false });
			}
		});
	}
	toggleAnalogStickMode(state) {
		this.setState({ analogStickMode: state }, () => {});
	}
	// toggleControllerView(state) {
	// 	this.setState({ touchControls: state }, () => {
	// 		if (this.state.largescreen) {
	// 			this.setState({ largescreen: false });
	// 		}
	// 	});
	// }

	toggleDpadSwap(state) {
		this.setState({ dpadSwap: state }, () => {});
	}
	toggleTDSConfig(state) {
		this.setState({ TDSConfig: state }, () => {
			if (this.state.TDSConfig) {
				this.state.sticks.L.X.sensitivity = 1.5;
				this.state.sticks.L.Y.sensitivity = 1.5;
				this.state.sticks.R.X.sensitivity = 1.5;
				this.state.sticks.R.Y.sensitivity = 1.5;
				this.state.sticks.R.X.offset = -20;
				this.state.sticks.R.Y.offset = -10;
			} else {
				this.state.sticks.L.X.sensitivity = 1;
				this.state.sticks.L.Y.sensitivity = 1;
				this.state.sticks.R.X.sensitivity = 1;
				this.state.sticks.R.Y.sensitivity = 1;
				this.state.sticks.R.X.offset = 0;
				this.state.sticks.R.Y.offset = 0;
			}
		});
	}

	toggleAudioThree(state) {
		this.setState({ enableAudioThree: state }, () => {

		});
	}

	toggleDarkTheme(state) {
		this.setState({ darkTheme: state }, () => {
			if (this.state.darkTheme) {
				$("body").addClass("dark");
			} else {
				$("body").removeClass("dark");
			}
		});
	}

	toggleFullscreen(state) {
		this.setState({ fullscreen: state }, () => {

			if (this.state.fullscreen) {
				$("body").css("padding", "0");
				$("#picture").css("width", "100%");
				$("#picture").css("border", "none");
				// $(".videoCanvas").css("width", "100%");
				// $(".videoCanvas").css("margin-left", "0");
				$(".laglessView").css("margin-left", "0");
				$(".laglessView").css("margin-right", "0");

				if (this.state.controllerView) {
					this.setState({ controllerView: false });
				}
				if (!this.state.hideChat) {
					this.setState({ hideChat: true });
				}
				if (!this.state.hideNav) {
					this.setState({ hideNav: true });
				}

				$("body").addClass("hideScrollbar");
				$(document).scrollTop(0);

				tools.toggleFullScreen($("body")[0]);

			} else {

				$("body").css("padding", "");
				$("#picture").css("width", "");
				$("#picture").css("border", "");
				// $(".videoCanvas").css("width", "");
				// $(".videoCanvas").css("margin-left", "");
				$(".laglessView").css("margin-left", "");
				$(".laglessView").css("margin-right", "");

				$("body").removeClass("hideScrollbar");
			}
		});
	}

	// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
	exitFullscreen() {
		if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
			console.log("exiting fullscreen");
			$("body").removeClass("hideScrollbar");
			this.setState({
				fullscreen: false,
				hideChat: false,
				hideNav: false,
				controllerView: true,
			});
		}
	}

	toggleLargescreen(state) {
		this.setState({ largescreen: state }, () => {
			if (this.state.largescreen && this.state.controllerView) {
				this.setState({ controllerView: false });
				rebindUnbindTouchControls();
			} else if (!this.state.largescreen && !this.state.controllerView) {
				this.setState({ controllerView: true });
			}
		});
	}

	toggleYoutubeChat(state) {
		this.setState({ youtubeChat: state }, () => {
			if (this.state.youtubeChat) {
				$("#chat").attr("src", "https://www.youtube.com/live_chat?v=8jgSgQcZgGY&embed_domain=twitchplaysnintendoswitch.com");
			} else {
				if (this.state.darkTheme) {
					$("#chat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat?darkpopout");
				} else {
					$("#chat").attr("src", "https://www.twitch.tv/embed/twitchplaysconsoles/chat");
				}
			}
		});
	}

	toggleHideChat(state) {
		this.setState({ hideChat: state }, () => {});
	}
	toggleHideNav(state) {
		this.setState({ hideNav: state }, () => {});
	}

	choosePlayer(cNum) {
		this.setState({ currentPlayerChosen: cNum });
	}

	switchTabs(tab) {
		this.setState({ tab: tab }, () => {

			setTimeout(() => {
				// lagless 1:
				if (tab == 1) {
					socket.emit("join", "lagless1");
				} else {
					socket.emit("leave", "lagless1");
				}

				// lagless 2:
				if (tab == 2) {
					socket.emit("join", "lagless2");
					//player.play();
					try {
						player.destroy();
					} catch (error) {}
					player = new JSMpeg.Player(lagless2URL, {
						canvas: document.getElementById("videoCanvas2"),
						video: true,
						audio: true,
						videoBufferSize: videoBufferSize,
						audioBufferSize: audioBufferSize,
						maxAudioLag: 0.5
					});
					if (!this.state.audioThree) {
						player.volume = this.state.volume / 100;
						audio.volume = 0;
					} else {
						player.volume = 0;
						audio.volume = this.state.volume / 100;
					}
				} else {
					socket.emit("leave", "lagless2");
					// 		player.stop();
					try {
						player.destroy();
					} catch (error) {}
					player = new JSMpeg.Player(lagless2URL, {
						canvas: document.getElementById("videoCanvas2"),
						video: false,
						audio: true,
						videoBufferSize: videoBufferSize,
						audioBufferSize: audioBufferSize,
						maxAudioLag: 0.5
					});
					if (!settings.audioThree) {
						player.volume = this.state.volume / 100;
						audio.volume = 0;
					} else {
						player.volume = 0;
						audio.volume = this.state.volume / 100;
					}
				}

				// lagless 3:
				if (tab == 3) {
					socket.emit("join", "lagless3");
					let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
					wsavc.connect(uri);
				} else {
					socket.emit("leave", "lagless3");
					try {
						wsavc.disconnect();
					} catch (error) {}
				}

				// lagless 4:
				if (tab == 4) {
					socket.emit("join", "lagless4");
					if (!videoConnected) {
						videoConnected = true;
						socket.emit("requestVideo");
					} else {
						videoCanvas4.play();
					}
				} else {
					socket.emit("leave", "lagless4");
					// videoCanvas4.pause();
				}

			}, 0);


			localforage.setItem("settings", JSON.stringify(settings));

			if (!this.state.largescreen) {
				addJoyCons(tab);
				rebindUnbindTouchControls();
			}

			// https://github.com/yoannmoinet/nipplejs/issues/39
			// force joysticks to recalculate the center:
			window.dispatchEvent(new Event("resize"));
			setTimeout(() => {
				window.dispatchEvent(new Event("resize"));
			}, 5000);
		});
	}


	sendControllerState() {

		let newControllerState = input.outputController.getState();

		if (newControllerState == oldControllerState) {
			return;
		} else {
			oldControllerState = newControllerState;
		}

		if (input.currentInputMode == "keyboard" && !this.state.keyboardControls) {
			return;
		}
		if (input.currentInputMode == "controller" && !this.state.controllerControls) {
			return;
		}
		if (input.currentInputMode == "touch" && !this.state.touchControls) {
			return;
		}

		if (($("#keyboardSettings").data("bs.modal") || {})._isShown) {
			return;
		}

		if (this.state.controlQueues[this.state.currentPlayerChosen].indexOf(this.state.myUniqueID) == -1) {
			socket.emit("joinQueue", this.state.currentPlayerChosen);
		}

		if (this.state.controlQueues[this.state.currentPlayerChosen].indexOf(this.state.myUniqueID) > 0 && this.state.controlQueues[this.state.currentPlayerChosen].length > 0) {
			new Noty({
				theme: "mint",
				type: "warning",
				text: "It's not your turn yet!",
				timeout: 500,
			}).show();
			return;
		}

		authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
		if (authCookie == null) {
			new Noty({
				theme: "mint",
				type: "warning",
				text: "You aren't signed in!",
				timeout: 500,
				sounds: {
					volume: 0.5,
					sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
					conditions: ["docVisible"],
				},
			}).show();
			return;
		} else {
			authCookie = authCookie.split(" ")[0].replace(/;/g, "");
		}

		let obj = {
			state: newControllerState,
			cNum: 0
		}

		if (this.state.controlQueues[0][0] == this.state.myUniqueID) {
			obj.cNum = 0;
		} else if (this.state.controlQueues[1][0] == this.state.myUniqueID) {
			obj.cNum = 1;
		} else if (this.state.controlQueues[2][0] == this.state.myUniqueID) {
			obj.cNum = 2;
		} else if (this.state.controlQueues[3][0] == this.state.myUniqueID) {
			obj.cNum = 3;
		} else {
			obj.cNum = this.state.currentPlayerChosen;
		}
		console.log(obj.state, obj.cNum);
		socket.emit("sendControllerState", obj);
	}


	render() {

		return (
			<React.Fragment>

				<div id="container" className={(this.state.darkTheme ? "dark" : "light")} >

					<ul id="navTabs" className={"nav nav-tabs " + (this.state.darkTheme ? "dark otborder-dark" : "light otborder")} style={{display: this.state.hideNav ? "none" : null }}>
						<li className="nav-item active">
							<a id="tab1" className={(this.state.darkTheme ? "nav-link-dark" : "nav-link") + " active"} data-toggle="tab" href="#lagless1" onClick={() => {this.switchTabs(1)}}>Lagless 1</a>
						</li>
						<li className="nav-item">
							<a id="tab2" className={(this.state.darkTheme ? "nav-link-dark" : "nav-link")} data-toggle="tab" href="#lagless2" onClick={() => {this.switchTabs(2)}}>Lagless 2</a>
						</li>
						<li className="nav-item">
							<a id="tab3" className={(this.state.darkTheme ? "nav-link-dark" : "nav-link") + " disabled"} data-toggle="tab" href="#lagless3" onClick={() => {this.switchTabs(3)}}>Lagless 3</a>
						</li>
						<li className="nav-item">
							<a id="tab4" className={(this.state.darkTheme ? "nav-link-dark" : "nav-link") + " disabled"} data-toggle="tab" href="#lagless4" onClick={() => {this.switchTabs(4)}}>Lagless 4</a>
						</li>
						<div id="statusContainer" className={(this.state.darkTheme ? "otborder-dark" : "otborder")}>
							<i className="material-icons">lock_open</i>
						</div>
						<SNEX type="snes-us" onConnection={this.handleSnex}/>
					</ul>

					<div id="picture" className={(this.state.darkTheme ? "otborder-dark" : "otborder")} style={{width: this.state.hideChat ? "100%" : null }}>

						{/* <LaglessView num={this.state.tab} controllerState={this.state.controllerViewState}/> */}

						<div className="tab-content">
							<div id="lagless1" className="tab-pane active">
								<LaglessView num={1} controllerView={this.state.controllerView && (this.state.tab == 1)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/>
							</div>
							<div id="lagless2" className="tab-pane">
								<LaglessView num={2} controllerView={this.state.controllerView && (this.state.tab == 2)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/>
							</div>
							<div id="lagless3" className="tab-pane">
								<LaglessView num={3} controllerView={this.state.controllerView && (this.state.tab == 3)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/>
							</div>
							<div id="lagless4" className="tab-pane">
								<LaglessView num={4} controllerView={this.state.controllerView && (this.state.tab == 4)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/>
							</div>
							<div id="lagless5" className="tab-pane">
								<LaglessView num={5} controllerView={this.state.controllerView && (this.state.tab == 5)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/>
							</div>
						</div>

						<div id="laglessBar" className={"laglessBar " + (this.state.darkTheme ? "otborder-dark" : "otborder")}>
							<ViewerList uniqueIDs={this.state.viewerIDs} usernameMap={this.state.usernameMap}/>
							{/* <div id="laglessVolumeSlider" className="volumeSlider otborder">
								<i className="fa fa-volume-down"></i>
								<div id="laglessVolume" className="volume"></div>
								<i className="fa fa-volume-up"></i>
							</div> */}
							<div id="laglessVolumeSlider" className="volumeSlider otborder">
								<i className="fa fa-volume-down" onClick={() => {this.setState({volume: 0})}}></i>
								<MySlider handleChange={(value) => {this.setState({volume: value})}} value={this.state.volume}/>
								<i className="fa fa-volume-up" onClick={() => {this.setState({volume: 100})}}></i>
							</div>
							<label className="checkbox-inline checkbox-bootstrap checkbox-lg otborder">
								<input className="audioThreeCheckbox" type="checkbox" />
								<span className="checkbox-placeholder"></span>
								Audio 3.0
							</label>
							<button id="laglessRefresh" className="laglessRefresh btn btn-primary btn-settings">
								<i className="fas fa-sync-alt"></i>
							</button>
							<button id="laglessKeyboardSettings" data-toggle="modal" data-target="#keyboardSettings" className="keyboardMapper btn btn-primary btn-settings">
								<i className="fas fa-keyboard"></i>
								|
								<i className="fas fa-gamepad"></i>
							</button>
							<div id="keyboardDropdown" className="keyboardDropdown dropdown show">
								<a id="keyboardDropdownButton" className="btn btn-secondary dropdown-toggle" href="#" data-toggle="dropdown">
									Keyboard Profiles
								</a>
								<div className="keyboard-dropdown-menu dropdown-menu"></div>
							</div>
						</div>
					</div>

					<div id="chatContainer" className={(this.state.darkTheme ? "otborder-dark" : "otborder")} style={{display: this.state.hideChat ? "none" : null }}>
						<div id="loggedInContainer" className={(this.state.darkTheme ? "otborder-dark" : "otborder")}>
							<div id="loggedInStatus" className={(this.state.darkTheme ? "otborder-dark" : "otborder")}>
								<UsernameDropdown validUsernames={this.state.myValidUsernames} myUsername={this.state.myUsername} handleClick={this.onUsernameChange}/>
								<button id="logout" className="btn btn-secondary">Logout</button>
							</div>
							<ConnectAccounts connectedAccounts={this.state.myConnectedAccounts}/>
						</div>
						<iframe id="chat" frameBorder="0" scrolling="no" src={"https://www.twitch.tv/embed/twitchplaysconsoles/chat" + (this.state.darkTheme ? "?darkpopout" : "")}></iframe>
					</div>

					<div id="barUnderTheStream" className={(this.state.darkTheme ? "dark otborder-dark" : "light otborder")}>

						<div id="playersContainer" className={"collapsibleContainer " + (this.state.darkTheme ? "otborder-dark" : "otborder")}>
							<button id="hidePlayers" className="btn btn-secondary collapseButton" data-toggle="" data-target="#players" collapsed="false">Hide</button>
							<div id="players" className="collapse show collapsible">

								<Player num={1} player={this.state.players[0]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[0]} darkTheme={this.state.darkTheme} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(0)}} />
								<Player num={2} player={this.state.players[1]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[1]} darkTheme={this.state.darkTheme} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(1)}} />
								<Player num={3} player={this.state.players[2]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[2]} darkTheme={this.state.darkTheme} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(2)}} />
								<Player num={4} player={this.state.players[3]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[3]} darkTheme={this.state.darkTheme} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(3)}} />

			{/* <!-- 						<div id="splits">
									<div id="splitMetaContainer">
										<div id="splitContainer">
											<ul id="splitNames" className="list-group">
												<li className="list-group-item">Great Plateau</li>
												<li className="list-group-item">Enter Hyrule Castle</li>
												<li className="list-group-item">Enter Sanctum</li>
												<li className="list-group-item">Blights</li>
												<li className="list-group-item">Calamity Ganon</li>
												<li className="list-group-item">Dark Beast</li>
											</ul>
											<ul id="splitTimes" className="list-group"></ul>
										</div>
										<ul id="times" className="list-group">
											<li className="list-group-item"></li>
										</ul>
									</div>
									<button id="moveToNextSplit" className="btn btn-primary">Split</button>
									<button id="removeLastSplit" className="btn btn-primary">Remove Last Split</button>
									<button id="BOTWSpeedrun" className="btn btn-primary">Start Speed Run</button>
								</div> --> */}
							</div>
						</div>

						<div id="settingsContainer" className={"collapsibleContainer " + (this.state.darkTheme ? "otborder-dark" : "otborder")}>
							<div id="settings" className="collapse show collapsible">

								<div id="checkboxSettings" className={"settingsPanel " + (this.state.darkTheme ? "otborder-dark dark" : "otborder light")}>
									<ul className="list-group">
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Keyboard Controls"} handleChange={this.toggleKeyboardControls} checked={this.state.keyboardControls}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Controller Controls"} handleChange={this.toggleControllerControls} checked={this.state.controllerControls}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Touch Controls"} handleChange={this.toggleTouchControls} checked={this.state.TouchControls}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Controller View"} handleChange={this.toggleControllerView} checked={this.state.controllerView}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Mouse Controls"} handleChange={this.toggleMouseControls} checked={this.state.mouseControls}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Analog Stick Mode"} handleChange={this.toggleAnalogStickMode} checked={this.state.analogStickMode}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"DPad Swap"} handleChange={this.toggleDpadSwap} checked={this.state.dpadSwap}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"3Ds config"} handleChange={this.toggleTDS} checked={this.state.TDSconfig}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<label className="checkbox-inline checkbox-bootstrap checkbox-lg">
												<input id="enableAudioThreeCheckbox" type="checkbox" />
												<span className="checkbox-placeholder"></span>
												Enable Audio 3.0
											</label>
											{/* <Checkbox text={"Enable Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.enableAudioThree}/> */}
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Dark Theme"} handleChange={this.toggleDarkTheme} checked={this.state.darkTheme}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Fullscreen Mode"} handleChange={this.toggleFullscreen} checked={this.state.fullscreen}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Enable Largescreen Mode"} handleChange={this.toggleLargescreen} checked={this.state.largescreen}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"YouTube Chat"} handleChange={this.toggleYoutubeChat} checked={this.state.youtubeChat}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Hide Chat"} handleChange={this.toggleHideChat} checked={this.state.hideChat}/>
										</li>
										<li className={(this.state.darkTheme ? "list-group-item-dark" : "list-group-item")}>
											<Checkbox text={"Hide Nav Bar"} handleChange={this.toggleHideNav} checked={this.state.hideNav}/>
										</li>
									</ul>

								</div>

								<div id="generalSettings" className={"settingsPanel " + (this.state.darkTheme ? "otborder-dark dark" : "otborder light")}>
									General Settings<br />
									<hr />

									Stick Deadzone: <span id="deadzone">{this.state.deadzone}</span>
									{/* <div className="mysliderContainer">
										<div id="deadzoneSlider" className="myslider"></div>
									</div> */}
									<div className="mysliderContainer">
										<MySlider handleChange={(value) => {this.setState({deadzone: value})}} value={this.state.deadzone}/>
									</div>

									Stick Sensitivity: <span id="sensitivity">1</span>
									<div className="mysliderContainer">
										<div id="stickSensitivitySlider" className="myslider"></div>
									</div>
									Analog Stick Attack: <span id="attack">20</span>
									<div className="mysliderContainer">
										<div id="stickAttackSlider" className="myslider"></div>
									</div>
									Analog Stick Return: <span id="return">20</span>
									<div className="mysliderContainer">
										<div id="stickReturnSlider" className="myslider"></div>
									</div>
									<button id="resetSettings" className="btn btn-secondary">Reset All Settings</button>
								</div>

								<div id="laglessSettingsContainer" className={"settingsPanel " + (this.state.darkTheme ? "otborder-dark dark" : "otborder light")}>

									<div id="lagless1Settings" className="laglessSettings">
										Lagless 1 Settings<br />
										<hr />

										Quality: <span id="quality">70</span>
										<div className="mysliderContainer">
											<div id="qualitySlider" className="myslider"></div>
										</div>
										Scale: <span id="scale">30</span>
										<div className="mysliderContainer">
											<div id="scaleSlider" className="myslider"></div>
										</div>
										FPS: <span id="fps">15</span>
										<div className="mysliderContainer">
											<div id="fpsSlider" className="myslider"></div>
										</div>
									</div>

									<div id="lagless2Settings" className="laglessSettings">
										Lagless 2 Settings<br />
										<hr />

										FPS: <span id="fps2">20</span>
										<div className="buttonSettings">
											<button id="20fps2" className="fpsButton btn btn-secondary">20FPS</button>
											<button id="30fps2" className="fpsButton btn btn-secondary">30FPS</button>
										</div>
										Bitrate: <span id="bitrate2">1</span>
										<div className="mysliderContainer">
											<div id="bitrateSlider2" className="myslider"></div>
										</div>
										Scale: <span id="scale2">720</span>
										<div className="mysliderContainer">
											<div id="scaleSlider2" className="myslider"></div>
										</div>
										<div className="buttonSettings">
											<button id="240p2" className="resolutionButton btn btn-secondary">240p</button>
											<button id="360p2" className="resolutionButton btn btn-secondary">360p</button>
											<button id="540p2" className="resolutionButton btn btn-secondary">540p</button>
											<button id="720p2" className="resolutionButton btn btn-secondary">720p</button>
										</div>
									</div>

									<div id="lagless3Settings" className="laglessSettings">
										Lagless 3 Settings<br />
										<hr />

										FPS: <span id="fps3">20</span>
										<div className="buttonSettings">
											<button id="20fps3" className="fpsButton btn btn-secondary">20FPS</button>
											<button id="30fps3" className="fpsButton btn btn-secondary">30FPS</button>
										</div>
										Bitrate: <span id="bitrate3">1</span>
										<div className="mysliderContainer">
											<div id="bitrateSlider3" className="myslider"></div>
										</div>
										Scale: <span id="scale3">720</span>
										<div className="mysliderContainer">
											<div id="scaleSlider3" className="myslider"></div>
										</div>
										<div className="buttonSettings">
											<button id="240p3" className="resolutionButton btn btn-secondary">240p</button>
											<button id="360p3" className="resolutionButton btn btn-secondary">360p</button>
											<button id="540p3" className="resolutionButton btn btn-secondary">540p</button>
											<button id="720p3" className="resolutionButton btn btn-secondary">720p</button>
										</div>
									</div>
								</div>

								<div id="waitlistContainer" className={"settingsPanel " + (this.state.darkTheme ? "otborder-dark" : "otborder")}>
									<Waitlist tab={this.state.tab} usernameMap={this.state.usernameMap} uniqueIDs={this.state.waitlists} myID={this.state.myUniqueID} darkTheme={this.state.darkTheme}/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* <!-- SETTINGS WINDOW --> */}
				<div id="keyboardSettings" className="modal fade">
					<div className="modal-dialog modal-lg">
						<div className="modal-content">

							<div className="modal-header">
								<h3 className="modal-title text-center">Keyboard Remapper</h3>
							</div>

							<div className="modal-body">
								<button id="resetBindings" className="btn btn-primary">Reset Keyboard Bindings</button>
								<button id="defaultBindings" className="btn btn-primary">Default Keyboard Bindings</button>
								<form id="profileCreator" className="form-inline">
									<div className="form-group">
										<input id="profileName" className="form-control mx-sm-3" type="text" placeholder="Profile Name"/>
										<button id="createProfile" className="btn btn-primary">Create Keyboard Profile</button>
									</div>
								</form>
								<div id="keyboardConfigurator" className="">
									<div id="keyboardRemapperInstructions">
										To remap keys, click the letter you want to remap, then press the key you want to bind.
									</div>
									<div id="keyboardMapperContainer">
										<div id="keyboardConfigCodes">
											<li className="buttonConfig list-group-item" id="LU">Left Stick Up</li>
											<li className="buttonConfig list-group-item" id="LD">Left Stick Down</li>
											<li className="buttonConfig list-group-item" id="LL">Left Stick Left</li>
											<li className="buttonConfig list-group-item" id="LR">Left Stick Right</li>
											<li className="buttonConfig list-group-item" id="RU">Right Stick Up</li>
											<li className="buttonConfig list-group-item" id="RD">Right Stick Down</li>
											<li className="buttonConfig list-group-item" id="RL">Right Stick Left</li>
											<li className="buttonConfig list-group-item" id="RR">Right Stick Right</li>
											<li className="buttonConfig list-group-item" id="ABtn">A</li>
											<li className="buttonConfig list-group-item" id="BBtn">B</li>
											<li className="buttonConfig list-group-item" id="XBtn">X</li>
											<li className="buttonConfig list-group-item" id="YBtn">Y</li>
											<li className="buttonConfig list-group-item" id="DUp">DPad Up</li>
											<li className="buttonConfig list-group-item" id="DDown">DPad Down</li>
											<li className="buttonConfig list-group-item" id="DLeft">DPad Left</li>
											<li className="buttonConfig list-group-item" id="DRight">DPad Right</li>
											<li className="buttonConfig list-group-item" id="LStick">LStick Button</li>
											<li className="buttonConfig list-group-item" id="RStick">RStick Button</li>
											<li className="buttonConfig list-group-item" id="LBtn">L</li>
											<li className="buttonConfig list-group-item" id="ZL">ZL</li>
											<li className="buttonConfig list-group-item" id="RBtn">R</li>
											<li className="buttonConfig list-group-item" id="ZR">ZR</li>
											<li className="buttonConfig list-group-item" id="Minus">Minus</li>
											<li className="buttonConfig list-group-item" id="Plus">Plus</li>
											<li className="buttonConfig list-group-item" id="Capture">Capture</li>
											<li className="buttonConfig list-group-item" id="Home">Home</li>
										</div>
										<div id="keyboardConfigKeys">
											<li className="buttonConfig list-group-item" id="LUKey">W</li>
											<li className="buttonConfig list-group-item" id="LDKey">S</li>
											<li className="buttonConfig list-group-item" id="LLKey">A</li>
											<li className="buttonConfig list-group-item" id="LRKey">D</li>
											<li className="buttonConfig list-group-item" id="RUKey">I</li>
											<li className="buttonConfig list-group-item" id="RDKey">K</li>
											<li className="buttonConfig list-group-item" id="RLKey">J</li>
											<li className="buttonConfig list-group-item" id="RRKey">L</li>
											<li className="buttonConfig list-group-item" id="ABtnKey">&rarr;</li>
											<li className="buttonConfig list-group-item" id="BBtnKey">&darr;</li>
											<li className="buttonConfig list-group-item" id="XBtnKey">&uarr;</li>
											<li className="buttonConfig list-group-item" id="YBtnKey">&larr;</li>
											<li className="buttonConfig list-group-item" id="DUpKey">T</li>
											<li className="buttonConfig list-group-item" id="DDownKey">G</li>
											<li className="buttonConfig list-group-item" id="DLeftKey">F</li>
											<li className="buttonConfig list-group-item" id="DRightKey">H</li>
											<li className="buttonConfig list-group-item" id="LStickKey">R</li>
											<li className="buttonConfig list-group-item" id="RStickKey">Y</li>
											<li className="buttonConfig list-group-item" id="LBtnKey">U</li>
											<li className="buttonConfig list-group-item" id="ZLKey">Q</li>
											<li className="buttonConfig list-group-item" id="RBtnKey">O</li>
											<li className="buttonConfig list-group-item" id="ZRKey">E</li>
											<li className="buttonConfig list-group-item" id="MinusKey">-</li>
											<li className="buttonConfig list-group-item" id="PlusKey">=</li>
											<li className="buttonConfig list-group-item" id="CaptureKey">1</li>
											<li className="buttonConfig list-group-item" id="HomeKey">2</li>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- END OF SETTINGS WINDOW --> */}
			</React.Fragment>
		);
	}
}


ReactDOM.render(<App/>, document.getElementById("root"));




/* prevent arrow key scrolling */
window.addEventListener("keydown", function (e) {
	// space and arrow keys
	if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
		e.preventDefault();
	}
	if ([27].indexOf(e.keyCode) > -1) {
		document.exitPointerLock();
		document.removeEventListener("mousemove", getMouseInput);
		document.removeEventListener("mousedown", getMouseInput2);
		document.removeEventListener("mouseup", getMouseInput2);
		$("#mouseControlsCheckbox").prop("checked", false).trigger("change");
	}
}, false);

function getMouseInput(e) {

	// on mouse stop:
	clearTimeout(mouseMoveTimer);
	mouseMoveTimer = setTimeout(() => {
		controller.RStick.x = restPos;
		controller.RStick.y = restPos;
	}, 100);

	var x = restPos + e.movementX * 10;
	var y = restPos - e.movementY * 10;

	controller.RStick.x = x;
	controller.RStick.y = y;

	controller.RStick.x = tools.clamp(controller.RStick.x, 0, 255);
	controller.RStick.y = tools.clamp(controller.RStick.y, 0, 255);
}

function getMouseInput2(e) {
	let value = e.type == "mousedown" ? 1 : 0;
	// left button:
	if (e.which === 1) {
		controller.btns.zr = value;
		// right button:
	} else if (e.which == 3) {
		//controller.btns.zr = value;
	}
}

// todo: maybe make a virtual canvas w/ $() ? not sure if actual canvas is required
let videoCanvas2 = $("#videoCanvas2")[0];
videoCanvas2.requestPointerLock = videoCanvas2.requestPointerLock || videoCanvas2.mozRequestPointerLock;
document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;

$("#mouseControlsCheckbox").change(function (event) {
	if (this.checked) {
		videoCanvas2.requestPointerLock();
		document.addEventListener("mousemove", getMouseInput, false);
		document.addEventListener("mousedown", getMouseInput2, false);
		document.addEventListener("mouseup", getMouseInput2, false);
	} else {
		document.exitPointerLock();
		document.removeEventListener("mousemove", getMouseInput);
		document.removeEventListener("mousedown", getMouseInput2);
		document.removeEventListener("mouseup", getMouseInput2);
	}
});

// https://stackoverflow.com/questions/10000083/javascript-event-handler-with-parameters

function keyDownHandler(event) {

	keyDownHandler.element = keyDownHandler.element || "";

	let keyString = keycode(event);
	keyDownHandler.element.text(keyString);

	let buttonKey = keyDownHandler.element.attr("id").slice(0, -3);
	keyboardLayout[buttonKey] = keyString;

	document.removeEventListener("keydown", keyDownHandler, false);
}

$("#keyboardConfigKeys li").on("click", function (event) {

	let self = $(this);

	$(this).effect("highlight", {}, 2000);

	document.removeEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keydown", keyDownHandler, false);

	keyDownHandler.element = self;
});

$("#resetBindings").on("click", function (event) {});

$("#defaultBindings").on("click", function (event) {
	keyboardLayout.tempSelectedAction = "";
	keyboardLayout.tempSelectedKey = "";
	keyboardLayout.LU = "W";
	keyboardLayout.LD = "S";
	keyboardLayout.LL = "A";
	keyboardLayout.LR = "D";
	keyboardLayout.RU = "I";
	keyboardLayout.RD = "K";
	keyboardLayout.RL = "J";
	keyboardLayout.RR = "L";
	keyboardLayout.ABtn = "right";
	keyboardLayout.BBtn = "down";
	keyboardLayout.XBtn = "up";
	keyboardLayout.YBtn = "left";
	keyboardLayout.DUp = "T";
	keyboardLayout.DDown = "G";
	keyboardLayout.DLeft = "F";
	keyboardLayout.DRight = "H";
	keyboardLayout.LStick = "R";
	keyboardLayout.RStick = "Y";
	keyboardLayout.LBtn = "U";
	keyboardLayout.ZL = "Q";
	keyboardLayout.RBtn = "O";
	keyboardLayout.ZR = "E";
	keyboardLayout.Minus = "-";
	keyboardLayout.Plus = "=";
	keyboardLayout.Capture = "1";
	keyboardLayout.Home = "2";
	setKeyboardMapperClasses();
});

/* KEYBOARD PROFILES */

$("#createProfile").on("click", function (event) {
	event.preventDefault();
	let profileName = $("#profileName").val();
	if (profileName === "") {
		swal("The profile name cannot be empty!", "", "error");
		return;
	} else {
		settings.keyboardProfiles[profileName] = keyboardLayout;
		localforage.setItem("settings", JSON.stringify(settings));
		clearAndReplaceProfiles();
		swal("Profile created successfully!", "", "success");
	}
	$("#profileName").val("");
});

$("#deleteProfiles").on("click", function (event) {
	event.preventDefault();
	settings.keyboardProfiles = {};
	localforage.setItem("settings", JSON.stringify(settings));
	swal("Profiles deleted successfully!", "", "success");
});

function clearAndReplaceProfiles() {
	// clear the dropdown menu
	$(".keyboard-dropdown-menu").children().remove();
	// fill it with profiles:
	for (let key in settings.keyboardProfiles) {
		let optionHTML = "<button class='keyboard-dropdown-item'" + " config='" + JSON.stringify(settings.keyboardProfiles[key]) + "'>" + key + "</button>";
		$(".keyboard-dropdown-menu").append(optionHTML);
	}
}
$(document).on("click", ".keyboard-dropdown-item", function (event) {
	let configName = $(event.target).text();
	$("#keyboardDropdownButton").text(configName);
	keyboardLayout = JSON.parse($(event.target).attr("config"));
	console.log(configName);
});

/* TOUCH CONTROLS */

/* JOYSTICKS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
let leftJoyStick = {
	zone: document.querySelector("#leftStick"),
	mode: "static",
	catchDistance: 10,
	color: "#FF3C28",
	position: {
		left: "50%",
		top: "50%"
	},
	size: 60
};
let rightJoyStick = {
	zone: document.querySelector("#rightStick"),
	mode: "static",
	catchDistance: 10,
	color: "#0AB9E6",
	position: {
		left: "50%",
		top: "50%"
	},
	size: 60
};

let leftStick;
let rightStick;

function bindJoysticks() {
	let stickSize = 60;
	let s1 = stickSize;
	let s2 = stickSize / 2;
	leftStick.on("start", function (evt, data) {
		let pos = data.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.LStick.x = pos.x;
		controller.LStick.y = pos.y;
	}).on("end", function (evt, data) {
		controller.LStick.x = restPos;
		controller.LStick.y = restPos;
	}).on("move", function (evt, data) {
		let pos = data.instance.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.LStick.x = pos.x;
		controller.LStick.y = pos.y;
	})

	rightStick.on("start", function (evt, data) {
		let pos = data.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.RStick.x = pos.x;
		controller.RStick.y = pos.y;
	}).on("end", function (evt, data) {
		controller.RStick.x = restPos;
		controller.RStick.y = restPos;
	}).on("move", function (evt, data) {
		let pos = data.instance.frontPosition;
		pos.x = parseInt(((pos.x + s2) / s1) * 255);
		pos.y = parseInt(((pos.y + s2) / s1) * 255);
		pos.y = 255 - pos.y;
		controller.RStick.x = pos.x;
		controller.RStick.y = pos.y;
	})
}
// leftStick = nipplejs.create(leftJoyStick);
// rightStick = nipplejs.create(rightJoyStick);
// bindJoysticks();

function onButtonPress(event) {

	event.preventDefault();

	currentInputMode = "touch";

	if (event.target.id == null) {
		return;
	}
	if (event.target.id == "dpadButtons" || event.target.id == "abxyButtons") {
		return;
	}

	let value = 0;
	if (event.type == "mousedown" || event.type == "touchstart" || event.type == "pointerdown") {
		value = 1;
		//swal("touchstart");
	} else if (event.type == "mouseup" || event.type == "mouseleave" || event.type == "touchend" || event.type == "pointerup" || event.type == "pointerout") {
		value = 0;
		//swal("touchend");
	} else if (event.type == "touchmove") {
		// todo: make an equivalent to mouseleave since touchleave doesn't exist :/
	}

	let button = event.target.id;

	let oldState = JSON.stringify(controller);

	switch (button) {
		case "upButton":
			controller.btns.up = value;
			break;
		case "downButton":
			controller.btns.down = value;
			break;
		case "leftButton":
			controller.btns.left = value;
			break;
		case "rightButton":
			controller.btns.right = value;
			break;
		case "aButton":
			controller.btns.a = value;
			break;
		case "bButton":
			controller.btns.b = value;
			break;
		case "xButton":
			controller.btns.x = value;
			break;
		case "yButton":
			controller.btns.y = value;
			break;

		case "lButton":
			controller.btns.l = value;
			break;
		case "zlButton":
			controller.btns.zl = value;
			break;
		case "rButton":
			controller.btns.r = value;
			break;
		case "zrButton":
			controller.btns.zr = value;
			break;

		case "minusButton":
			controller.btns.minus = value;
			break;
		case "captureButton":
			controller.btns.capture = value;
			break;

		case "plusButton":
			controller.btns.plus = value;
			break;
		case "homeButton":
			controller.btns.home = value;
			break;
	}

	let newState = JSON.stringify(controller);

	if (newState == oldState) {
		return;
	}

	// if (controlQueues[0].indexOf(myUniqueID) == -1) {
	// 	socket.emit("joinQueue", currentPlayerChosen);
	// }
}

function rebindUnbindTouchControls() {
	let buttonsList = ["#dpadButtons", "#abxyButtons", "#leftJoyConOther", "#rightJoyConOther"];

	if (settings.touchControls) {

		try {
			$("#leftJoyCon")[0].style.display = "";
			$("#rightJoyCon")[0].style.display = "";
		} catch (error) {}

		for (let i = 0; i < buttonsList.length; i++) {
			$(buttonsList[i]).bind("touchstart", onButtonPress);
			$(buttonsList[i]).bind("touchmove", onButtonPress);
			$(buttonsList[i]).bind("touchend", onButtonPress);
			$(buttonsList[i]).bind("mousedown", onButtonPress);
			$(buttonsList[i]).bind("mouseup", onButtonPress);
			$(buttonsList[i]).bind("mouseleave", onButtonPress);
			$(buttonsList[i]).bind("pointerdown", onButtonPress);
			$(buttonsList[i]).bind("pointerup", onButtonPress);
			$(buttonsList[i]).bind("pointerout", onButtonPress);
		}

	} else {

		try {
			$("#leftJoyCon")[0].style.display = "none";
			$("#rightJoyCon")[0].style.display = "none";
		} catch (error) {}

		for (let i = 0; i < buttonsList.length; i++) {
			$(buttonsList[i]).unbind("touchstart", onButtonPress);
			$(buttonsList[i]).unbind("touchmove", onButtonPress);
			$(buttonsList[i]).unbind("touchend", onButtonPress);
			$(buttonsList[i]).unbind("mousedown", onButtonPress);
			$(buttonsList[i]).unbind("mouseup", onButtonPress);
			$(buttonsList[i]).unbind("mouseleave", onButtonPress);
			$(buttonsList[i]).unbind("pointerdown", onButtonPress);
			$(buttonsList[i]).unbind("pointerup", onButtonPress);
			$(buttonsList[i]).unbind("pointerout", onButtonPress);
		}

	}
}

/* AUTHENTICATION */

$("#logout").on("click", function (event) {
	tools.deleteAllCookies();
	location.reload(true);
});

// $(document).on("click", ".username-dropdown-item", function (event) {
// 	let username = $(event.target).text();
// 	let index = $(event.target).index();
// 	$("#usernameDropdownMenuLink").text(username);
// 	settings.usernameIndex = index;
// 	localforage.setItem("settings", JSON.stringify(settings));
// });

function connectAccountOrSignIn(type) {
	let url = "https://twitchplaysnintendoswitch.com/8110/auth/" + type + "/";
	if (authCookie != null) {
		url += "?uniqueToken=" + authCookie;
	}
	window.location.href = url;
}

$("#connectWithTwitchButton").on("click", function (event) {
	connectAccountOrSignIn("twitch");
});
$("#connectWithGoogleButton").on("click", function (event) {
	connectAccountOrSignIn("google");
});
$("#connectWithYoutubeButton").on("click", function (event) {
	connectAccountOrSignIn("youtube");
});
$("#connectWithDiscordButton").on("click", function (event) {
	connectAccountOrSignIn("discord");
});




/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

// prevent arrow keys from messing with the slider:
// https://stackoverflow.com/questions/2922174/jquery-ui-slider-how-to-disable-keyboard-input
$.prototype.slider_old = $.prototype.slider;
$.prototype.slider = function () {
	let result = $.prototype.slider_old.apply(this, arguments);
	this.find(".ui-slider-handle").unbind("keydown"); // disable keyboard actions
	return result;
}

// $("#laglessVolume").slider({
// 	min: 0,
// 	max: 100,
// 	value: 0,
// 	range: "min",
// 	animate: true,
// 	slide: function (event, ui) {
// 		settings.volume = ui.value;
// 		localforage.setItem("settings", JSON.stringify(settings));
// 		if (!settings.audioThree) {
// 			player.volume = settings.volume / 100;
// 		} else {
// 			audio.volume = settings.volume / 100;
// 		}
// 		$("#laglessVolume").slider("value", settings.volume);
// 		$("#laglessVolume span").text(settings.volume);
// 	}
// });
//
// $("#laglessVolumeSlider").children().first().on("click", function () {
// 	settings.volume = 0;
// 	$("#laglessVolume").slider("value", 0);
// 	$("#laglessVolume span").text(settings.volume);
// 	if (!settings.audioThree) {
// 		player.volume = 0;
// 	} else {
// 		audio.volume = 0;
// 	}
// });
//
// $("#laglessVolumeSlider").children().last().on("click", function () {
// 	settings.volume = 100;
// 	$("#laglessVolume").slider("value", 100);
// 	$("#laglessVolume span").text(settings.volume);
// 	if (!settings.audioThree) {
// 		player.volume = 1;
// 	} else {
// 		audio.volume = 1;
// 	}
// });

$("#qualitySlider").slider({
	min: 20,
	max: 60,
	step: 1,
	value: 60,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#quality").text(ui.value);
		socket.emit("lagless1Settings", {
			quality: parseInt(ui.value)
		});
	},
	stop: function (event, ui) {}
});

$("#scaleSlider").slider({
	min: 20,
	max: 50,
	step: 5,
	value: 30,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#scale").text(ui.value);
		socket.emit("lagless1Settings", {
			scale: parseInt(ui.value)
		});
	},
	stop: function (event, ui) {}
});

$("#fpsSlider").slider({
	min: 1,
	max: 15,
	step: 1,
	value: 15,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#fps").text(ui.value);
		socket.emit("lagless1Settings", {
			fps: parseInt(ui.value)
		});
	},
	stop: function (event, ui) {}
});

$("#deadzoneSlider").slider({
	min: 1,
	max: 100,
	step: 1,
	value: 50,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#deadzone").text(ui.value);
	},
	stop: function (event, ui) {}
});

$("#stickSensitivitySlider").slider({
	min: 0,
	max: 3,
	step: 0.01,
	value: 1,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#sensitivity").text(ui.value);
		// settings.stickSensitivityX = ui.value;
		// settings.stickSensitivityY = ui.value;
		settings.sticks.L.X.sensitivity = ui.value;
		settings.sticks.L.Y.sensitivity = ui.value;
		settings.sticks.R.X.sensitivity = ui.value;
		settings.sticks.R.Y.sensitivity = ui.value;
	},
	stop: function (event, ui) {
		localforage.setItem("settings", JSON.stringify(settings));
	}
});

$("#stickAttackSlider").slider({
	min: 0,
	max: 40,
	step: 0.1,
	value: 20,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#attack").text(ui.value);
		settings.stickAttack = ui.value;
	},
	stop: function (event, ui) {
		localforage.setItem("settings", JSON.stringify(settings));
	}
});

$("#stickReturnSlider").slider({
	min: 0,
	max: 40,
	step: 0.1,
	value: 20,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#return").text(ui.value);
		settings.stickReturn = ui.value;
	},
	stop: function (event, ui) {
		localforage.setItem("settings", JSON.stringify(settings));
	}
});

socket.on("lagless1Settings", function (data) {
	lagless1Settings = Object.assign({}, lagless1Settings, data);
	$("#scale").text(lagless1Settings.scale);
	$("#scaleSlider").slider("value", lagless1Settings.scale);
	$("#quality").text(lagless1Settings.quality);
	$("#qualitySlider").slider("value", lagless1Settings.quality);
});

// lagless2:

$("#bitrateSlider2").slider({
	min: 0,
	max: 2,
	step: 0.05,
	value: 1,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#bitrate2").text(ui.value);
	},
	stop: function (event, ui) {
		socket.emit("lagless2Settings", {
			videoBitrate: parseFloat(ui.value)
		});
	}
});

$("#scaleSlider2").slider({
	min: 100,
	max: 720,
	step: 1,
	value: 720,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#scale2").text(ui.value);
	},
	stop: function (event, ui) {
		socket.emit("lagless2Settings", {
			scale: parseInt(ui.value)
		});
	}
});

$("#240p2").on("click", function (event) {
	$("#scale2").text(240);
	$("#scaleSlider2").slider("value", 240);
	socket.emit("lagless2Settings", {
		scale: 240
	});
});
$("#360p2").on("click", function (event) {
	$("#scale2").text(360);
	$("#scaleSlider2").slider("value", 360);
	socket.emit("lagless2Settings", {
		scale: 360
	});
});
$("#540p2").on("click", function (event) {
	$("#scale2").text(540);
	$("#scaleSlider2").slider("value", 540);
	socket.emit("lagless2Settings", {
		scale: 540
	});
});
$("#720p2").on("click", function (event) {
	$("#scale2").text(720);
	$("#scaleSlider2").slider("value", 720);
	socket.emit("lagless2Settings", {
		scale: 720
	});
});

$("#offsetXSlider2").slider({
	min: 0,
	max: 600,
	step: 1,
	value: 0,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#offsetX2").text(ui.value);
	},
	stop: function (event, ui) {
		socket.emit("lagless2Settings", {
			offsetX: parseInt(ui.value)
		});
	}
});

$("#offsetYSlider2").slider({
	min: 0,
	max: 300,
	step: 1,
	value: 0,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#offsetY2").text(ui.value);
	},
	stop: function (event, ui) {
		socket.emit("lagless2Settings", {
			offsetY: parseInt(ui.value)
		});
	}
});

$("#20fps2").on("click", function (event) {
	$("#fps2").text(20);
	socket.emit("lagless2Settings", {
		framerate: 20
	});
});
$("#30fps2").on("click", function (event) {
	$("#fps2").text(30);
	socket.emit("lagless2Settings", {
		framerate: 30
	});
});

socket.on("lagless2Settings", function (data) {
	lagless2Settings = Object.assign({}, lagless2Settings, data);

	$("#fps2").text(lagless2Settings.framerate);

	$("#bitrate2").text(lagless2Settings.videoBitrate);
	$("#bitrateSlider2").slider("value", lagless2Settings.videoBitrate);

	$("#scale2").text(lagless2Settings.scale);
	$("#scaleSlider2").slider("value", lagless2Settings.scale);

	$("#offsetX2").text(lagless2Settings.offsetX);
	$("#offsetXSlider2").slider("value", lagless2Settings.offsetX);

	$("#offsetY2").text(lagless2Settings.offsetY);
	$("#offsetYSlider2").slider("value", lagless2Settings.offsetY);
});

// lagless3:

$("#bitrateSlider3").slider({
	min: 0,
	max: 2,
	step: 0.05,
	value: 1,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#bitrate3").text(ui.value);
	},
	stop: function (event, ui) {
		socket.emit("lagless3Settings", {
			videoBitrate: parseFloat(ui.value)
		});
	}
});

$("#scaleSlider3").slider({
	min: 100,
	max: 720,
	step: 1,
	value: 720,
	range: "min",
	animate: true,
	slide: function (event, ui) {
		$("#scale3").text(ui.value);
	},
	stop: function (event, ui) {
		socket.emit("lagless3Settings", {
			scale: parseInt(ui.value)
		});
	}
});

$("#240p3").on("click", function (event) {
	$("#scale3").text(240);
	$("#scaleSlider3").slider("value", 240);
	socket.emit("lagless3Settings", {
		scale: 240
	});
});
$("#360p3").on("click", function (event) {
	$("#scale3").text(360);
	$("#scaleSlider3").slider("value", 360);
	socket.emit("lagless3Settings", {
		scale: 360
	});
});
$("#540p3").on("click", function (event) {
	$("#scale3").text(540);
	$("#scaleSlider3").slider("value", 540);
	socket.emit("lagless3Settings", {
		scale: 540
	});
});
$("#720p3").on("click", function (event) {
	$("#scale3").text(720);
	$("#scaleSlider3").slider("value", 720);
	socket.emit("lagless3Settings", {
		scale: 720
	});
});

$("#20fps3").on("click", function (event) {
	$("#fps3").text(20);
	socket.emit("lagless3Settings", {
		framerate: 20
	});
});
$("#30fps3").on("click", function (event) {
	$("#fps3").text(30);
	socket.emit("lagless3Settings", {
		framerate: 30
	});
});



function addJoyCons(tab, actual) {

	actual = actual || false;

	if (!actual) {
		tab = "#lagless" + tab + "View";
	}

	// delete old joycons:
	try {
		leftStick.destroy();
		rightStick.destroy();
	} catch (e) {
		console.log("JoyCon delete error.");
	}

	// remove previous renders:
	// todo: implement prevTab
	// for (let i = 1; i < 5; i++) {
	// 	ReactDOM.unmountComponentAtNode(document.getElementById("leftJoyConPlaceHolder" + i));
	// 	ReactDOM.unmountComponentAtNode(document.getElementById("rightJoyConPlaceHolder" + i));
	// }

	// if (document.getElementById("leftJoyConPlaceHolder" + settings.tab)) {
	// 	ReactDOM.render(<LeftJoyCon/>, document.getElementById("leftJoyConPlaceHolder" + settings.tab));
	// }
	// if (document.getElementById("rightJoyConPlaceHolder" + settings.tab)) {
	// 	ReactDOM.render(<RightJoyCon/>, document.getElementById("rightJoyConPlaceHolder" + settings.tab));
	// }

	// rebind touch controls:
	rebindUnbindTouchControls();

	// rebind sticks:
	leftJoyStick.zone = document.querySelector("#leftStick");
	rightJoyStick.zone = document.querySelector("#rightStick");
	leftStick = nipplejs.create(leftJoyStick);
	rightStick = nipplejs.create(rightJoyStick);
	bindJoysticks();
}

// todo: debounce
$(window).resize(function (event) {

	// hack:
	// todo: not this:
	$("#videoCanvas3").outerHeight($("#videoCanvas3").outerWidth() * (9 / 16));

	// 	if (resizeAvailable) {
	resizeAvailable = false;
	resizeDebounceTimer = setTimeout(() => {
		resizeAvailable = true;
	}, 100);
	for (let i = 0; i < resizers.length; i++) {
		resizers[i].resize();
	}
	// 	}
});

// https://github.com/yoannmoinet/nipplejs/issues/39
// force joysticks to recalculate the center:
// setInterval(function() {
// 	window.dispatchEvent(new Event("resize"));
// }, 5000);

function replaceWithTwitch(tab) {

	let twitchIFrame = '<iframe id="twitchVideo" class="" src="https://player.twitch.tv/?channel=twitchplaysconsoles&muted=false&autoplay=true" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>';

	if (tab == 1) {
		$("#videoCanvas1")[0].style.display = "none";
		$("#videoCanvas1").after(twitchIFrame);
	} else {
		// 		$("#tab1").addClass("disabled");
	}

	if (tab == 2) {
		try {
			player.stop();
		} catch (error) {
			console.log("player not defined");
		}
		$("#videoCanvas2")[0].style.display = "none";
		$("#videoCanvas2").after(twitchIFrame);
	} else {}

	if (tab == 3) {
		wsavc.disconnect();
		$("#videoCanvas3")[0].style.display = "none";
		$("#videoCanvas3").after(twitchIFrame);
	} else {}

	if (tab == 4) {
		try {
			// 			player.stop();
		} catch (error) {
			// 			console.log("player not defined");
		}
		$("#videoCanvas4")[0].style.display = "none";
		$("#videoCanvas4").after(twitchIFrame);
	} else {}

	if (tab == 5) {
		player5.stop();
		$("#videoCanvas5")[0].style.display = "none";
		$("#videoCanvas5").after(twitchIFrame);
	} else {}

	// socket.emit("leaveLagless");
}

function replaceWithLagless(tab) {

	if (tab == 1) {
		socket.emit("join", "lagless1");
		$("#videoCanvas1")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
		// 		$("#tab1").removeClass("disabled");
	}

	if (tab == 2) {
		player.play();
		$("#videoCanvas2")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {}

	if (tab == 3) {
		let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
		wsavc.connect(uri);

		$("#videoCanvas3")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {
		// 		$("#tab3").removeClass("disabled");
	}

	if (tab == 4) {
		$("#videoCanvas4")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {}

	if (tab == 5) {
		player.play();
		$("#videoCanvas5")[0].style.display = "";
		$("#twitchVideo").remove();
	} else {}
}

$("#replaceWithTwitch").on("click", function () {
	replaceWithTwitch();
});

$("#replaceWithLagless").on("click", function () {
	replaceWithLagless();
});

// socket.on("replaceWithTwitch", function () {
// 	replaceWithTwitch();
// });
//
// socket.on("replaceWithLagless", function () {
// 	replaceWithTwitch();
// });

/* STATUS BAR @@@@@@@@@@@@@@@@ */
// socket.on("lock", function() {
// 	replaceWithTwitch();
// });

/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */

/* AUDIO 3.0 */
let peer = new SimplePeer({
	initiator: false,
	trickle: true,
});

peer.on("error", function (err) {
	console.log("error", err)
});

peer.on("signal", function (data) {
	console.log("SIGNAL", JSON.stringify(data));
	socket.emit("clientPeerSignal", JSON.stringify(data));
});

peer.on("connect", function () {
	console.log("CONNECT");
	peer.send(Math.random());
});

peer.on("data", function (data) {
	console.log("data: " + data)
});

socket.on("hostPeerSignal", function (data) {
	peer.signal(JSON.parse(data));
});

let audio = document.createElement("audio");

peer.on("stream", function (stream) {
	// got remote audio stream, then show it in an audio tag
	audio.src = window.URL.createObjectURL(stream); // deprecated
	// 			audio.srcObj = stream;
	audio.play();
	audio.volume = 0;
});

$("#enableAudioThreeCheckbox").on("change", function () {
	settings.enableAudioThree = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.enableAudioThree) {
		if (!audioConnected) {
			socket.emit("requestAudio");
			setTimeout(() => {
				audioConnected = true;
			}, 100);
		}
	} else {
		try {
			audio.volume = 0;
			player.volume = settings.volume / 100;
		} catch (error) {}
		$("#audioThreeCheckbox").prop("checked", false);
		$(".audioThreeCheckbox").prop("checked", false);
	}
});

$("#audioThreeCheckbox").on("change", function () {
	if (!settings.enableAudioThree) {
		$("#audioThreeCheckbox").prop("checked", false);
		swal("You have to enable Audio 3.0 first!");
		return;
	}
	settings.audioThree = this.checked;
	localforage.setItem("settings", JSON.stringify(settings));
	if (settings.audioThree) {
		if (!audioConnected) {
			audio.volume = settings.volume / 100;
		} else {
			try {
				audio.volume = settings.volume / 100;
				player.volume = 0;
			} catch (error) {}
		}
	} else {
		audio.volume = 0;
		player.volume = settings.volume / 100;
	}
});

$(".audioThreeCheckbox").on("change", function () {
	$("#audioThreeCheckbox").trigger("click");
	setTimeout(() => {
		$(".audioThreeCheckbox").prop("checked", $("#audioThreeCheckbox").prop("checked"));
	}, 100);
});

/* MOD COMMANDS */
// selects elements in the future:
// https://stackoverflow.com/questions/8191064/jquery-on-function-for-future-elements-as-live-is-deprecated

$("body").popover({
	selector: ".queueItem",
	trigger: "focus",
	html: true,
	toggle: "popover",
	title: "Mod Powers",
	boundary: "window",
	container: "body",
	placement: "right",
	content: '<button id="kickFromQueue" class="btn btn-secondary">Kick From Queue</button>\
				<button id="tempBan" class="btn btn-secondary">Temporary Ban (5 min)</button>\
				<button id="permaBan" class="btn btn-secondary"><b>Permanent Ban</b></button>'
});
// .click(function() {
// 	setTimeout(() => {
// 		$('[data-toggle="popover"]').popover("hide");
// 	}, 8000);
// });

$("#container").popover({ // must be unique
	selector: ".viewerElement",
	// 	trigger: "focus",
	html: true,
	toggle: "popover",
	title: "Mod Powers",
	boundary: "window",
	container: "body",
	placement: "right",
	content: '<button id="kickFromQueue" class="btn btn-secondary">Kick From Queue</button>\
				<button id="tempBan" class="btn btn-secondary">Temporary Ban (5 min)</button>\
				<button id="permaBan" class="btn btn-secondary"><b>Permanent Ban</b></button>\
				<button id="unban" class="btn btn-secondary"><b>Unban</b></button>'
}).click(() => {
	setTimeout(() => {
		$('[data-toggle="popover"]').popover("hide");
	}, 8000);
});

let modPowerUniqueID = "";
$(document).on("click", ".queueItem", function (event) {
	$(this).effect("highlight", {}, 2000);
	modPowerUniqueID = $(this).attr("uniqueid");
});

$(document).on("click", ".viewerElement", function (event) {
	$(this).effect("highlight", {}, 2000);
	modPowerUniqueID = $(this).attr("uniqueid");
});

$(document).on("click", "#kickFromQueue", function (event) {
	socket.emit("kickFromQueue", modPowerUniqueID);
	$("#queuePopup").remove();
});
$(document).on("click", "#tempBan", function (event) {
	socket.emit("tempBan", modPowerUniqueID);
	$("#queuePopup").remove();
});
$(document).on("click", "#permaBan", function (event) {
	socket.emit("permaBan", modPowerUniqueID);
	$("#queuePopup").remove();
});
$(document).on("click", "#unban", function (event) {
	socket.emit("unban", modPowerUniqueID);
	$("#queuePopup").remove();
});

$(document).on("click", 'i:contains("lock")', function (event) {
	$(this).effect("highlight", {}, 2000);
	socket.emit("unlock");
});
$(document).on("click", 'i:contains("lock_open")', function (event) {
	$(this).effect("highlight", {}, 2000);
	socket.emit("lock");
});

// todo: reimplement:
// setInterval(function() {
// 	let currentTime = Date.now();
// 	let elapsedTime = currentTime - lastCurrentTime;
// 	let timeLeftMilli = timeLeft - elapsedTime;
// 	let timeLeftSec = parseInt(timeLeftMilli / 1000);
// 	let percent = parseInt((timeLeftMilli / turnLength) * 100);
// 	let progressBar = $(".progress-bar");
// 	progressBar.css("width", percent + "%").text(turnUsername + ": " + timeLeftSec + " seconds");
// }, 200);

$(document).on("click", ".joinQueue", function (event) {
	let cNum = parseInt($(this).attr("id").slice(-1)) - 1;
	for (let i = 0; i < 4; i++) {
		if (i == cNum) {
			continue;
		}
		socket.emit("leaveQueue", i);
	}
	socket.emit("joinQueue", cNum);
});

$(document).on("click", ".leaveQueue", function (event) {
	let cNum = parseInt($(this).attr("id").slice(-1)) - 1;
	socket.emit("leaveQueue", cNum);
});

window.addEventListener("keydown", function (e) {
	// escape, f11
	if ([27, 122].indexOf(e.keyCode) > -1) {
		e.preventDefault();
		$("body").removeClass("hideScrollbar");
	}
}, false);

/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
setInterval(function () {
	pingTime = Date.now();
	socket.emit("ping2");

	// hack:
	// todo: not this:
	if (settings.tab != 5) {
		if (!settings.audioThree) {
			audio.volume = 0;
			try {
				player.volume = settings.volume / 100;
			} catch (error) {}
		} else {
			audio.volume = settings.volume / 100;
			try {
				player.volume = 0;
			} catch (error) {}
		}
	} else {
		audio.volume = 0;
		try {
			player.volume = 0;
		} catch (error) {}
	}
}, 1000);

socket.on("pong2", function () {
	let latency = Date.now() - pingTime;
	$("#ping").text(latency + "ms");
});

$("#resetSettings").on("click", function (event) {
	event.preventDefault();
	localforage.clear().then(function () {
		location.reload(true);
	});
});

/* ON CLOSE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
window.onbeforeunload = closingCode;

function closingCode() {
	socket.emit("leaveLagless");
	return null;
}

/* COLLAPSE BUTTONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// $(".collapseButton").on("click", function(event) {
// 	event.preventDefault();

// 	let self = this;

// 	setTimeout(function(self) {

// 		let target = $($(self).attr("data-target"));

// 		if (!target.hasClass("show")) {
// 			$(self).text("Show");

// 		  make the parent height equal to the button height:
//  			let height = $(self).outerHeight() + 5;
//  			$(self).parent().height(height);

// 		} else {
// 			$(self).text("Hide");
// 			$(self).parent().css("height", "");

//  			let height = target.outerHeight();
//  			$(self).parent().height(height);
// 		}

// 	}, 500, this);

// });

$(".collapseButton").on("click", function (event) {
	let target = $(this).attr("data-target");
	if ($(this).attr("collapsed") == "false") {
		$(this).attr("collapsed", "true");
		$(target).collapse("hide");
	} else {
		$(this).attr("collapsed", "false");

		$(target).parent().animate({
			"margin-top": "0px"
		});
		// 		$(target).parent().css("width", "");
		$(target).parent().css("height", "");

		// 	$(this).parent().animate({"width": "", "height": ""});
		let thisId = "#" + $(target).attr("id");
		let button = $('[data-target="' + thisId + '"]');
		button.css("align-self", "");
		button.css("margin-left", "5px");

		setTimeout(() => {
			$(target).parent().css("width", "");
			$(target).collapse("show");
		}, 500);
	}
});

$(".collapsible").on("show.bs.collapse", function () {

	//  	$(this).parent().css("margin-top", "");
	// 	$(this).parent().animate({"margin-top": "0px"});
	// 	$(this).parent().css("width", "");
	// 	$(this).parent().css("height", "");

	//  	$(this).parent().animate({"width": "", "height": ""});
	// 	let thisId = "#" + $(this).attr("id");
	// 	let button = $('[data-target="' + thisId + '"]');
	// 	button.css("align-self", "");
	// 	button.css("margin-left", "5px");
});

$(".collapsible").on("shown.bs.collapse", function () {

	let thisId = "#" + $(this).attr("id");
	let button = $('[data-target="' + thisId + '"]');
	button.text("Hide");

})

$(".collapsible").on("hidden.bs.collapse", function () {

	let thisId = "#" + $(this).attr("id");
	let button = $('[data-target="' + thisId + '"]');
	button.text("Show");

	let height = button.outerHeight() + 5;
	button.parent().height(height);

	let width = button.outerWidth() + 10;
	button.parent().width(width);

	button.parent().animate({
		"margin-top": "-60px"
	});

	// 	button.parent().animate({"height" : height});
	// 	button.parent().animate({"width": width, "height": height});

	button.css("align-self", "center");
	button.css("margin-left", "0px");

})

// on blur, reset the controller state,
// to prevent keys from getting stuck:
// todo: fix
// $(window).blur(function () {
// 	// 	console.log("lost focus");
// 	controller.reset();
// 	// 	oldControllerState = controller.getState();
// 	wasPressedKeyCodes = [];
// 	sendControllerState();
// 	clearInterval(sendInputTimer);
// });
// $(window).focus(function () {
// 	// 	console.log("focused");
// 	sendInputTimer = setInterval(sendInputs, 1000 / 120);
// 	controller.reset();
// 	// 	oldControllerState = controller.getState();
// 	wasPressedKeyCodes = [];
// 	sendControllerState();
// });

/* BAN EVASION / FUN @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

socket.on("rickroll", function (data) {
	if (myUsername == data || data == "everyone") {
		let myPlayer;
		swal({
			html: '<canvas id="rickroll"></canvas>',
			onOpen: () => {
				let rickrollCanvas = $("#rickroll")[0];
				myPlayer = new JSMpeg.Player("videos/rickroll-480.ts", {
					canvas: rickrollCanvas,
					loop: false,
					autoplay: true
				});
			},
			onClose: () => {
				myPlayer.destroy();
			},
			customClass: "swal-wide"
		});

	}
});

socket.on("rainbow", function (data) {
	if (myUniqueID == data || data == "everyone") {
		$("body").addClass("rainbow-text");
	}
});

socket.on("banlist", function (data) {
	banlist = data;
});

socket.on("banned", function (data) {
	let alertMessage = $(".swal2-container")[0];
	if (typeof alertMessage == "undefined") {
		swal("You're banned (maybe only temporarily?)");
	}
});

/* FORCE HTTPS */
if (location.protocol != "https:") {
	location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

/* NOTIFICATIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

socket.on("voteStarted", function (data) {
	let notification = new Noty({
		theme: "mint",
		type: "warning",
		text: "A vote to change games has started!",
		timeout: 5000,
		sounds: {
			volume: 0.5,
			sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
			conditions: ["docVisible"],
		},
	});
	notification.show();

});
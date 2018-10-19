import React, { Component } from "react";
import ReactDOM from "react-dom";

// redux:
import { connect } from "react-redux";


import combineSocketEventHandlers from "src/sockets";


// components:
import ViewerList from "src/components/ViewerList.jsx";
import TurnTimer from "src/components/TurnTimer.jsx";
import ForfeitTimer from "src/components/ForfeitTimer.jsx";
import Player from "src/components/Player.jsx";

import ControlQueue from "src/components/ControlQueue.jsx";
import JoinLeaveQueueButton from "src/components/JoinLeaveQueueButton.jsx";

import UsernameDropdown from "src/components/UsernameDropdown.jsx";

import Waitlist from "src/components/Waitlist.jsx";
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import Checkbox from "src/components/Checkbox.jsx";

import LeftJoyCon from "src/components/LeftJoyCon.jsx";
import RightJoyCon from "src/components/RightJoyCon.jsx";
import LaglessView from "src/components/LaglessView.jsx";


import MySlider from "src/components/MySlider.jsx";
import Chat from "src/components/Chat/Chat.jsx";

import ThemeSwitch from "src/components/ThemeSwitch.jsx";

// import { Client } from "./parsec/src/client.js";


// libs:
// jquery:
// let $ = require("jquery");

// snex:
import SNEX from "@snex/react-connect";
import snex from "snex";
// gamepad:
import Gamepad from "js/gamepad.js";
import VirtualProController from "js/VirtualProController.js";
// keyboard:
require("js/keymaster.js");
import keycode from "keycode";
// touch controls:
import nipplejs from "nipplejs";
const InputMaster = require("js/InputMaster.js");

const textFitPercent = require("js/textfitpercent.js");
const tools = require("js/tools.js");
import Noty from "noty";
import localforage from "localforage";
import swal from "sweetalert2";
import SimplePeer from "simple-peer";
import io from "socket.io-client";

window.localforage = localforage;

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

let globalEventTimer = false;
let sendInputTimer;
let currentPlayerChosen = 0;
let wasPressedKeyCodes = [];
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let loaded = false;
let locked = false;
window.player = {};
let player4;
let audio = document.createElement("audio");
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

window.masterInput = new InputMaster(isMobile);
// masterInput.controller.init();
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

let settings = {};

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

class App extends Component {

	constructor(props) {
		super(props);

		this.toggleKeyboardControls = this.toggleKeyboardControls.bind(this);
		this.toggleControllerControls = this.toggleControllerControls.bind(this);
		this.toggleTouchControls = this.toggleTouchControls.bind(this);
		this.toggleControllerView = this.toggleControllerView.bind(this);

		this.toggleAnalogStickMode = this.toggleAnalogStickMode.bind(this);
		this.toggleDpadSwap = this.toggleDpadSwap.bind(this);
		this.toggleTDSConfig = this.toggleTDSConfig.bind(this);

		// this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
		this.toggleFullscreen = this.toggleFullscreen.bind(this);
		this.exitFullscreen = this.exitFullscreen.bind(this);
		this.toggleLargescreen = this.toggleLargescreen.bind(this);

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

			// checkbox settings:
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
			hideChat: false,
			hideNav: false,
			deadzone: 50,

			// volume:
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
						deadzone: 50,
					},
					Y: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
				},
				R: {
					X: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
					Y: {
						sensitivity: 1,
						offset: 0,
						deadzone: 50,
					},
				},
			},
			deadzone: 50,
			// stickSensitivityX: 1,
			// stickSensitivityY: 1,
			stickAttack: 20,
			stickReturn: 20,

			// lagless settings:
			lagless1: {
				framerate: 15,
				quality: 60,
				scale: 30,
			},
			lagless2: {
				framerate: 20,
				videoBitrate: 1,
				scale: 540,
			},
			lagless3: {
				framerate: 20,
				videoBitrate: 1,
				scale: 540,
			},

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

			this.setState({
				keyboardControls: settings.keyboardControls,
				controllerControls: settings.controllerControls,
				touchControls: settings.touchControls,
				mouseControls: settings.mouseControls,
				controllerView: settings.controllerView,
				analogStickMode: settings.analogStickMode,
				dpadSwap: settings.dpadSwap,
				TDSConfig: settings.TDSConfig,
				enableAudioThree: settings.enableAudioThree,
				audioThree: settings.audioThree,
				darkTheme: settings.darkTheme,
				fullscreen: settings.fullscreen,
				largescreen: settings.largescreen,
				hideChat: settings.hideChat,
				hideNav: settings.hideNav,
				// tab: settings.tab,
				deadzone: settings.deadzone,
				volume: settings.volume,
			});

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

		// save settings on close:
		/* ON CLOSE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		window.addEventListener("beforeunload", (event) => {
			event.preventDefault();
			socket.emit("leaveLagless");
			console.log("saving settings");
			localforage.setItem("settings", JSON.stringify(this.state));
			return null;
		});

		// socket = io("https://twitchplaysnintendoswitch.com", {
		// 	path: "/8110/socket.io",
		// 	transports: ["websocket"],
		// });

		// // listen to events and dispatch actions:
		// combineSocketEventHandlers(socket, this.props.dispatch);

		window.socket = this.props.socket;

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

			$(".disabled").on("click", () => {
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

		socket.on("forceRefresh", (data) => {
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
		// on settings change:
		socket.on("lagless1Settings", (data) => {
			this.setState({
				lagless1: {
					framerate: data.framerate,
					quality: data.quality,
					scale: data.scale,
				},
			});
		});
		$("#lagless1Refresh").on("click", () => {
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
		socket.on("lagless2Settings", (data) => {
			this.setState({
				lagless2: {
					framerate: data.framerate,
					videoBitrate: data.videoBitrate,
					scale: data.scale,
				},
			});
		});
		socket.on("lagless2SettingsChange", (data) => {
			// try {
			player.destroy();
			// } catch (error) {
			// 	console.log("player destroy error.");
			// }
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
		$("#lagless2Refresh").on("click", () => {
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

		$("#lagless3Refresh").on("click", () => {
			try {
				wsavc.disconnect();
			} catch (error) {}
			let uri = "wss://twitchplaysnintendoswitch.com/" + lagless3Port + "/";
			wsavc.connect(uri);
		});

		$("#lagless3Refresh").on("click", () => {
			socket.emit("restart3");
		});

		// on settings change:
		socket.on("lagless3Settings", (data) => {
			this.setState({
				lagless3: {
					framerate: data.framerate,
					videoBitrate: data.videoBitrate,
					scale: data.scale,
				},
			});
		});
		socket.on("lagless3SettingsChange", (data) => {
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

		// parsec:
		// /*** API ***/
		// async function auth(email, password) {
		// 	const res = await fetch('https://parsecgaming.com/v1/auth', {
		// 		method: 'post',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({
		// 			email,
		// 			password,
		// 		}),
		// 	});
		//
		// 	return await res.json();
		// }
		//
		// async function serverList(sessionId) {
		// 	const res = await fetch('https://parsecgaming.com/v1/server-list?include_managed=true', {
		// 		method: 'get',
		// 		headers: {
		// 			'X-Parsec-Session-Id': sessionId,
		// 		},
		// 	});
		//
		// 	return await res.json();
		// }
		//
		//
		// /*** CLIENT ***/
		// function toggleFullscreen(element) {
		// 	if (document.webkitFullscreenElement) {
		// 		document.webkitExitFullscreen();
		//
		// 	} else {
		// 		element.webkitRequestFullscreen();
		//
		// 		if (navigator.keyboard && navigator.keyboard.lock)
		// 			navigator.keyboard.lock();
		// 	}
		// }
		//
		// function runClient(element, sessionId, serverId) {
		// 	return new Promise((resolve) => {
		// 		//set up client object with an event callback: gets connect, status, chat, and shutter events
		// 		const client = new Client(element, (event) => {
		// 			console.log('EVENT', event);
		//
		// 			if (event.type === 'exit') {
		// 				document.removeEventListener('keydown', hotkeys, true);
		// 				resolve(event.code);
		// 			}
		// 		});
		//
		// 		//set up useful hotkeys that call client methods: destroy can also be used to cancel pending connection
		// 		const hotkeys = (event) => {
		// 			event.preventDefault();
		//
		// 			if (event.code === 'Backquote' && event.ctrlKey && event.altKey) {
		// 				client.destroy(0);
		//
		// 			} else if (event.code === 'KeyW' && event.ctrlKey && event.altKey) {
		// 				toggleFullscreen(element);
		// 			}
		// 		};
		// 		document.addEventListener('keydown', hotkeys, true);
		//
		// 		client.connect(sessionId, serverId, {
		// 			encoder_bitrate: 12,
		// 		});
		// 	});
		// }
		//
		//
		// /*** UI HELPERS ***/
		// function addRow(table) {
		// 	const tr = document.createElement('tr');
		// 	table.appendChild(tr);
		// 	return tr;
		// }
		//
		// function addTextCol(tr, text) {
		// 	const td = document.createElement('td');
		// 	td.textContent = text;
		// 	tr.appendChild(td);
		// }
		//
		// function addButtonCol(tr, text, onclick) {
		// 	const td = document.createElement('td');
		// 	tr.appendChild(td);
		//
		// 	const button = document.createElement('button');
		// 	button.textContent = text;
		// 	button.onclick = onclick;
		// 	td.appendChild(button);
		// }
		//
		// function addInputCol(tr, id, type, onenter) {
		// 	const td = document.createElement('td');
		// 	tr.appendChild(td);
		//
		// 	const input = document.createElement('input');
		// 	input.id = id;
		// 	input.type = type;
		// 	input.onkeyup = (event) => {
		// 		if (event.keyCode === 13)
		// 			onenter();
		// 	};
		// 	td.appendChild(input);
		// }
		//
		//
		// /*** MAIN ***/
		// async function serverTable(sessionId) {
		// 	const json = await serverList(sessionId);
		// 	const table = document.querySelector('#server-list');
		//
		// 	for (const server of json) {
		// 		const tr = addRow(table);
		// 		addTextCol(tr, server.name);
		// 		addTextCol(tr, server.build);
		// 		addTextCol(tr, server.server_id);
		// 		addButtonCol(tr, 'Connect', async () => {
		// 			const container = document.querySelector('.video-container');
		// 			const element = document.querySelector('video');
		//
		// 			table.style.display = 'none';
		// 			container.style.display = 'block';
		//
		// 			const code = await runClient(element, sessionId, server.server_id);
		//
		// 			table.style.display = '';
		// 			container.style.display = '';
		//
		// 			element.src = '';
		// 			element.load();
		//
		// 			if (code !== 0)
		// 				alert(`Exit code: ${code}`);
		// 		});
		// 	}
		//
		// 	const tr = addRow(table);
		// 	addButtonCol(tr, 'Logout', () => {
		// 		delete sessionStorage.sessionId;
		// 		window.location.reload();
		// 	});
		// }
		//
		// function authTable() {
		// 	async function submit() {
		// 		const email = document.querySelector('#email').value;
		// 		const password = document.querySelector('#password').value;
		//
		// 		const json = await auth(email, password);
		// 		sessionStorage.sessionId = json.session_id;
		// 		window.location.reload();
		// 	}
		//
		// 	const table = document.querySelector('#server-list');
		//
		// 	let tr = addRow(table);
		// 	addTextCol(tr, 'Email');
		// 	addInputCol(tr, 'email', 'email', submit);
		//
		// 	tr = addRow(table);
		// 	addTextCol(tr, 'Password');
		// 	addInputCol(tr, 'password', 'password', submit);
		//
		// 	document.querySelector('#email').focus();
		// }
		//
		// // if (!sessionStorage.sessionId) {
		// // 	authTable();
		// //
		// // } else {
		// // 	serverTable(sessionStorage.sessionId);
		// // }
		// //
		// window.authTable = authTable;
		// window.serverTable = serverTable;
		//
		// // conv:
		// // window.setReactState = (obj) => {
		// // 	this.setState(obj);
		// // };

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

		peer.on("stream", function (stream) {
			// got remote audio stream, then show it in an audio tag
			audio.src = window.URL.createObjectURL(stream); // deprecated
			// 			audio.srcObj = stream;
			audio.play();
			audio.volume = 0;
		});

		// $("#enableAudioThreeCheckbox").on("change", function () {
		// 	settings.enableAudioThree = this.checked;
		// 	localforage.setItem("settings", JSON.stringify(settings));
		// 	if (settings.enableAudioThree) {
		// 		if (!audioConnected) {
		// 			socket.emit("requestAudio");
		// 			setTimeout(() => {
		// 				audioConnected = true;
		// 			}, 100);
		// 		}
		// 	} else {
		// 		try {
		// 			audio.volume = 0;
		// 			player.volume = settings.volume / 100;
		// 		} catch (error) {}
		// 		$("#audioThreeCheckbox").prop("checked", false);
		// 		$(".audioThreeCheckbox").prop("checked", false);
		// 	}
		// });
		//
		// $("#audioThreeCheckbox").on("change", function () {
		// 	if (!settings.enableAudioThree) {
		// 		$("#audioThreeCheckbox").prop("checked", false);
		// 		swal("You have to enable Audio 3.0 first!");
		// 		return;
		// 	}
		// 	settings.audioThree = this.checked;
		// 	localforage.setItem("settings", JSON.stringify(settings));
		// 	if (settings.audioThree) {
		// 		if (!audioConnected) {
		// 			audio.volume = settings.volume / 100;
		// 		} else {
		// 			try {
		// 				audio.volume = settings.volume / 100;
		// 				player.volume = 0;
		// 			} catch (error) {}
		// 		}
		// 	} else {
		// 		audio.volume = 0;
		// 		player.volume = settings.volume / 100;
		// 	}
		// });

		$(".audioThreeCheckbox").on("change", function () {
			$("#audioThreeCheckbox").trigger("click");
			setTimeout(() => {
				$(".audioThreeCheckbox").prop("checked", $("#audioThreeCheckbox").prop("checked"));
			}, 100);
		});

		/* AUDIO SWITCHING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		setInterval(() => {
			// hack:
			// todo: not this:
			if (!this.state.audioThree) {
				audio.volume = 0;
				player.volume = this.state.volume / 100;
			} else {
				audio.volume = this.state.volume / 100;
				player.volume = 0;
			}
		}, 1000);

		sendInputTimer = setInterval(() => {
			masterInput.pollDevices();
			this.sendControllerState();
		}, 1000 / 120);

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

		/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		setInterval(function () {
			pingTime = Date.now();
			socket.emit("ping2");
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

		/* COLLAPSE BUTTONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

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

		});

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

		});

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
					masterInput.snexController.state.LStick.y = data.state ? 255 : 128;
					break;
				case "DOWN":
					masterInput.snexController.state.LStick.y = data.state ? 0 : 128;
					break;
				case "LEFT":
					masterInput.snexController.state.LStick.x = data.state ? 0 : 128;
					break;
				case "RIGHT":
					masterInput.snexController.state.LStick.x = data.state ? 255 : 128;
					break;
				case "A":
					masterInput.snexController.state.btns.a = data.state;
					break;
				case "B":
					masterInput.snexController.state.btns.b = data.state;
					break;
				case "X":
					masterInput.snexController.state.btns.x = data.state;
					break;
				case "Y":
					masterInput.snexController.state.btns.y = data.state;
					break;
				case "SELECT":
					masterInput.snexController.state.btns.zl = data.state;
					break;
				case "START":
					masterInput.snexController.state.btns.zr = data.state;
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

	toggleDpadSwap(state) {
		this.setState({ dpadSwap: state }, () => {});
	}

	toggleTDSConfig(state) {
		this.setState({ TDSConfig: state }, () => {
			if (this.state.TDSConfig) {
				// this.state.sticks.L.X.sensitivity = 1.5;
				// this.state.sticks.L.Y.sensitivity = 1.5;
				// this.state.sticks.R.X.sensitivity = 1.5;
				// this.state.sticks.R.Y.sensitivity = 1.5;
				// this.state.sticks.R.X.offset = -20;
				// this.state.sticks.R.Y.offset = -10;
			} else {
				// this.state.sticks.L.X.sensitivity = 1;
				// this.state.sticks.L.Y.sensitivity = 1;
				// this.state.sticks.R.X.sensitivity = 1;
				// this.state.sticks.R.Y.sensitivity = 1;
				// this.state.sticks.R.X.offset = 0;
				// this.state.sticks.R.Y.offset = 0;
			}
		});
	}

	toggleAudioThree(state) {
		this.setState({ enableAudioThree: state }, () => {});
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

			if (!this.state.largescreen && this.state.touchControls) {
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

		let newControllerState = masterInput.outputController.getState();

		if (newControllerState == oldControllerState) {
			return;
		} else {
			oldControllerState = newControllerState;
		}

		if (masterInput.currentInputMode == "keyboard" && !this.state.keyboardControls) {
			return;
		}
		if (masterInput.currentInputMode == "controller" && !this.state.controllerControls) {
			return;
		}
		if (masterInput.currentInputMode == "touch" && !this.state.touchControls) {
			return;
		}

		// return if chat is focused:
		if (document.activeElement === document.getElementById("messageBox")) {
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
				{this.state.darkTheme ? <ThemeSwitch/> : null}


				<div id="loader-wrapper">
					<div id="loader"></div>
					<div className="loader-section section-left"></div>
					<div className="loader-section section-right"></div>
				</div>


				<div id="container" className="light" >

					<ul id="navTabs" className="nav nav-tabs light otborder" style={{display: this.state.hideNav ? "none" : null }}>
						<li className="nav-item active">
							<a id="tab1" className="nav-link active" data-toggle="tab" href="#lagless1" onClick={() => {this.switchTabs(1)}}>Lagless 1</a>
						</li>
						<li className="nav-item">
							<a id="tab2" className="nav-link" data-toggle="tab" href="#lagless2" onClick={() => {this.switchTabs(2)}}>Lagless 2</a>
						</li>
						<li className="nav-item">
							<a id="tab3" className="nav-link disabled" data-toggle="tab" href="#lagless3" onClick={() => {this.switchTabs(3)}}>Lagless 3</a>
						</li>
						<li className="nav-item">
							<a id="tab4" className="nav-link disabled" data-toggle="tab" href="#lagless4" onClick={() => {this.switchTabs(4)}}>Lagless 4</a>
						</li>
						<li className="nav-item">
							<a id="tab5" className="nav-link" data-toggle="tab" href="#lagless5" onClick={() => {this.switchTabs(5)}}>Lagless 5</a>
						</li>
						<div id="statusContainer" className="otborder">
							<i className="material-icons">lock_open</i>
						</div>
						<SNEX type="snes-us" onConnection={this.handleSnex}/>
					</ul>

					<div id="picture" className="otborder" style={{width: this.state.hideChat ? "100%" : null }}>

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
								{/* <LaglessView num={4} controllerView={this.state.controllerView && (this.state.tab == 4)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/> */}
							</div>
							<div id="lagless5" className="tab-pane">
								{/* <LaglessView num={5} controllerView={this.state.controllerView && (this.state.tab == 5)} controllerState={this.state.controllerViewState} largescreen={this.state.largescreen} fullscreen={this.state.fullscreen}/> */}
								<div className="video-container">
									<video></video>
								</div>
								<table id="server-list"></table>
							</div>
						</div>

						<div id="laglessBar" className="laglessBar otborder">
							<ViewerList uniqueIDs={this.state.viewerIDs} usernameMap={this.state.usernameMap}/>
							{/* <div id="laglessVolumeSlider" className="volumeSlider otborder">
								<i className="fa fa-volume-down"></i>
								<div id="laglessVolume" className="volume"></div>
								<i className="fa fa-volume-up"></i>
							</div> */}
							<div id="laglessVolumeSlider" className="volumeSlider otborder">
								<i className="fa fa-volume-down" onClick={() => {this.setState({volume: 0})}}></i>
								<MySlider min={0} max={100} step={1} value={this.state.volume} handleChange={(value) => {this.setState({volume: value})}}/>
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

					<div id="chatContainer" className="otborder" style={{display: this.state.hideChat ? "none" : null }}>
						<div id="loggedInContainer" className="otborder">
							<div id="loggedInStatus" className="otborder">
								<UsernameDropdown validUsernames={this.state.myValidUsernames} myUsername={this.state.myUsername} handleClick={this.onUsernameChange}/>
								<button id="logout" className="btn btn-secondary">Logout</button>
							</div>
							<ConnectAccounts connectedAccounts={this.state.myConnectedAccounts}/>
						</div>
						{/* <iframe id="chat" frameBorder="0" scrolling="no" src={"https://www.twitch.tv/embed/twitchplaysconsoles/chat" + (this.state.darkTheme ? "?darkpopout" : "")}></iframe> */}
						<Chat/>
					</div>

					<div id="barUnderTheStream" className="otborder">

						<div id="playersContainer" className="otborder">
							<button id="hidePlayers" className="btn btn-secondary collapseButton" data-toggle="" data-target="#players" collapsed="false">Hide</button>
							<div id="players" className="collapse show collapsible">

								<Player num={1} player={this.state.players[0]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[0]} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(0)}} />
								<Player num={2} player={this.state.players[1]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[1]} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(1)}} />
								<Player num={3} player={this.state.players[2]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[2]} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(2)}} />
								<Player num={4} player={this.state.players[3]} myID={this.state.myUniqueID} usernameMap={this.state.usernameMap} controlQueue={this.state.controlQueues[3]} selected={this.state.currentPlayerChosen} handleChange={() => {this.choosePlayer(3)}} />

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

						<div id="settingsContainer" className="collapsibleContainer otborder">
							<div id="settings" className="collapse show collapsible">

								<div id="checkboxSettings" className="settingsPanel otborder">
									<ul className="list-group">
										<li className="list-group-item">
											<Checkbox text={"Enable Keyboard Controls"} handleChange={this.toggleKeyboardControls} checked={this.state.keyboardControls}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Controller Controls"} handleChange={this.toggleControllerControls} checked={this.state.controllerControls}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Touch Controls"} handleChange={this.toggleTouchControls} checked={this.state.TouchControls}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Controller View"} handleChange={this.toggleControllerView} checked={this.state.controllerView}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Mouse Controls"} handleChange={this.toggleMouseControls} checked={this.state.mouseControls}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Analog Stick Mode"} handleChange={this.toggleAnalogStickMode} checked={this.state.analogStickMode}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"DPad Swap"} handleChange={this.toggleDpadSwap} checked={this.state.dpadSwap}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"3Ds config"} handleChange={this.toggleTDS} checked={this.state.TDSconfig}/>
										</li>
										<li className="list-group-item">
											<label className="checkbox-inline checkbox-bootstrap checkbox-lg">
												<input id="enableAudioThreeCheckbox" type="checkbox" />
												<span className="checkbox-placeholder"></span>
												Enable Audio 3.0
											</label>
											{/* <Checkbox text={"Enable Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.enableAudioThree}/> */}
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Dark Theme"} handleChange={(state) => {this.setState({darkTheme: state})}} checked={this.state.darkTheme}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Fullscreen Mode"} handleChange={this.toggleFullscreen} checked={this.state.fullscreen}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Enable Largescreen Mode"} handleChange={this.toggleLargescreen} checked={this.state.largescreen}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Hide Chat"} handleChange={(state) => {this.setState({ hideChat: state })}} checked={this.state.hideChat}/>
										</li>
										<li className="list-group-item">
											<Checkbox text={"Hide Nav Bar"} handleChange={(state) => {this.setState({ hideNav: state })}} checked={this.state.hideNav}/>
										</li>
									</ul>

								</div>

								<div id="generalSettings" className="settingsPanel otborder">
									General Settings<br />
									<hr />

									Stick Deadzone: <span id="deadzone">{this.state.deadzone}</span>
									{/* <div className="mysliderContainer">
										<div id="deadzoneSlider" className="myslider"></div>
									</div> */}
									<div className="mysliderContainer">
										<MySlider min={5} max={110} step={1} value={this.state.deadzone} handleChange={(value) => {this.setState({deadzone: value})}}/>
									</div>

									{/* Stick Sensitivity: <span id="sensitivity">1</span>
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
									</div> */}
									<button id="resetSettings" className="btn btn-secondary">Reset All Settings</button>
								</div>

								<div id="laglessSettingsContainer" className="settingsPanel otborder">

									<div id="lagless1Settings" className="laglessSettings">
										Lagless 1 Settings<br/>
										<hr/>
										Quality: <span>{this.state.lagless1.quality}</span>
										<div className="mysliderContainer">
											<MySlider min={20} max={60} step={1} value={this.state.lagless1.quality}
												handleChange={(value) => {this.setState({lagless1: {quality: value}})}}
												onAfterChange={(value) => {socket.emit("lagless1Settings", {quality: parseInt(value)});}}/>
										</div>
										Scale: <span>{this.state.lagless1.scale}</span>
										<div className="mysliderContainer">
											<MySlider min={20} max={50} step={5} value={this.state.lagless1.scale}
												handleChange={(value) => {this.setState({lagless1: {scale: value}})}}
												onAfterChange={(value) => {socket.emit("lagless1Settings", {scale: parseInt(value)});}}/>
										</div>
										FPS: <span>{this.state.lagless1.framerate}</span>
										<div className="mysliderContainer">
											<MySlider min={1} max={15} step={1} value={this.state.lagless1.framerate}
												handleChange={(value) => {this.setState({lagless1: {framerate: value}})}}
												onAfterChange={(value) => {socket.emit("lagless1Settings", {framerate: parseInt(value)});}}/>
										</div>
									</div>

									<div id="lagless2Settings" className="laglessSettings">
										Lagless 2 Settings<br/>
										<hr/>

										FPS: <span>{this.state.lagless2.framerate}</span>
										<div className="buttonSettings">
											<button id="20fps2" className="fpsButton btn btn-secondary">20FPS</button>
											<button id="30fps2" className="fpsButton btn btn-secondary">30FPS</button>
										</div>
										Bitrate: <span>{this.state.lagless2.videoBitrate}</span>
										<div className="mysliderContainer">
											<MySlider min={0} max={2} step={0.05} value={this.state.lagless2.videoBitrate}
												handleChange={(value) => {this.setState({lagless2: {videoBitrate: value}})}}
												onAfterChange={(value) => {socket.emit("lagless2Settings", {videoBitrate: parseFloat(value)});}}/>
										</div>
										Scale: <span>{this.state.lagless2.scale}</span>
										<div className="mysliderContainer">
											<MySlider min={100} max={540} step={1} value={this.state.lagless2.scale}
												handleChange={(value) => {this.setState({lagless2: {scale: value}})}}
												onAfterChange={(value) => {socket.emit("lagless2Settings", {scale: parseInt(value)});}}/>
										</div>
										<div className="buttonSettings">
											<button id="240p2" className="resolutionButton btn btn-secondary">240p</button>
											<button id="360p2" className="resolutionButton btn btn-secondary">360p</button>
											<button id="540p2" className="resolutionButton btn btn-secondary">540p</button>
											{/* <button id="720p2" className="resolutionButton btn btn-secondary">720p</button> */}
										</div>
									</div>

									<div id="lagless3Settings" className="laglessSettings">
										Lagless 3 Settings<br/>
										<hr/>

										FPS: <span>{this.state.lagless3.framerate}</span>
										<div className="buttonSettings">
											<button id="20fps3" className="fpsButton btn btn-secondary">20FPS</button>
											<button id="30fps3" className="fpsButton btn btn-secondary">30FPS</button>
										</div>
										Bitrate: <span>{this.state.lagless3.videoBitrate}</span>
										<div className="mysliderContainer">
											<MySlider min={0} max={2} step={0.05} value={this.state.lagless3.videoBitrate}
												handleChange={(value) => {this.setState({lagless3: {videoBitrate: value}})}}
												onAfterChange={(value) => {socket.emit("lagless3Settings", {videoBitrate: parseFloat(value)});}}/>
										</div>
										Scale: <span>{this.state.lagless3.scale}</span>
										<div className="mysliderContainer">
											<MySlider min={100} max={540} step={1} value={this.state.lagless3.scale}
												handleChange={(value) => {this.setState({lagless3: {scale: value}})}}
												onAfterChange={(value) => {socket.emit("lagless3Settings", {scale: parseInt(value)});}}/>
										</div>
										<div className="buttonSettings">
											<button id="240p3" className="resolutionButton btn btn-secondary">240p</button>
											<button id="360p3" className="resolutionButton btn btn-secondary">360p</button>
											<button id="540p3" className="resolutionButton btn btn-secondary">540p</button>
											{/* <button id="720p3" className="resolutionButton btn btn-secondary">720p</button> */}
										</div>
									</div>
								</div>

								<div id="waitlistContainer" className="settingsPanel otborder">
									<Waitlist tab={this.state.tab} usernameMap={this.state.usernameMap} uniqueIDs={this.state.waitlists} myID={this.state.myUniqueID}/>
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

// const mapStateToProps = (state) => {
// 	return state;
// };
//
// const mapActionsToProps = (state) => {
// 	return state;
// };

// export default connect(mapStateToProps, mapActionsToProps)(App);
export default App;

// exit fullscreen:
window.addEventListener("keydown", (event) => {
	// space and arrow keys
	// if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
	// 	event.preventDefault();
	// }
	// escape:
	if ([27].indexOf(event.keyCode) > -1) {
		document.exitPointerLock();
		// document.removeEventListener("mousemove", getMouseInput);
		// document.removeEventListener("mousedown", getMouseInput2);
		// document.removeEventListener("mouseup", getMouseInput2);
		// $("#mouseControlsCheckbox").prop("checked", false).trigger("change");
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
// let videoCanvas2 = $("#videoCanvas2")[0];
// videoCanvas2.requestPointerLock = videoCanvas2.requestPointerLock || videoCanvas2.mozRequestPointerLock;
// document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
//
// $("#mouseControlsCheckbox").change(function (event) {
// 	if (this.checked) {
// 		videoCanvas2.requestPointerLock();
// 		document.addEventListener("mousemove", getMouseInput, false);
// 		document.addEventListener("mousedown", getMouseInput2, false);
// 		document.addEventListener("mouseup", getMouseInput2, false);
// 	} else {
// 		document.exitPointerLock();
// 		document.removeEventListener("mousemove", getMouseInput);
// 		document.removeEventListener("mousedown", getMouseInput2);
// 		document.removeEventListener("mouseup", getMouseInput2);
// 	}
// });

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





/* STREAM SETTINGS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

$("#240p2").on("click", function (event) {
	socket.emit("lagless2Settings", {
		scale: 240
	});
});
$("#360p2").on("click", function (event) {
	socket.emit("lagless2Settings", {
		scale: 360
	});
});
$("#540p2").on("click", function (event) {
	socket.emit("lagless2Settings", {
		scale: 540
	});
});
$("#720p2").on("click", function (event) {
	socket.emit("lagless2Settings", {
		scale: 720
	});
});

$("#20fps2").on("click", function (event) {
	socket.emit("lagless2Settings", {
		framerate: 20
	});
});
$("#30fps2").on("click", function (event) {
	socket.emit("lagless2Settings", {
		framerate: 30
	});
});

// lagless3:

$("#240p3").on("click", function (event) {
	socket.emit("lagless3Settings", {
		scale: 240
	});
});
$("#360p3").on("click", function (event) {
	socket.emit("lagless3Settings", {
		scale: 360
	});
});
$("#540p3").on("click", function (event) {
	socket.emit("lagless3Settings", {
		scale: 540
	});
});
$("#720p3").on("click", function (event) {
	socket.emit("lagless3Settings", {
		scale: 720
	});
});

$("#20fps3").on("click", function (event) {
	socket.emit("lagless3Settings", {
		framerate: 20
	});
});
$("#30fps3").on("click", function (event) {
	socket.emit("lagless3Settings", {
		framerate: 30
	});
});



function addJoyCons(tab, actual) {

	// actual = actual || false;
	//
	// if (!actual) {
	// 	tab = "#lagless" + tab + "View";
	// }
	//
	// // delete old joycons:
	// try {
	// 	leftStick.destroy();
	// 	rightStick.destroy();
	// } catch (e) {
	// 	console.log("JoyCon delete error.");
	// }

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

	// // rebind touch controls:
	// rebindUnbindTouchControls();
	//
	// // rebind sticks:
	// leftJoyStick.zone = document.querySelector("#leftStick");
	// rightJoyStick.zone = document.querySelector("#rightStick");
	// leftStick = nipplejs.create(leftJoyStick);
	// rightStick = nipplejs.create(rightJoyStick);
	// bindJoysticks();
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

window.replaceWithTwitch = replaceWithTwitch;
window.replaceWithLagless = replaceWithLagless;

/* FORCE HTTPS */
if (location.protocol != "https:") {
	location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}
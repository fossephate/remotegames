// react:
import React, { Component } from "react";
import ReactDOM from "react-dom";

// redux:
import { connect } from "react-redux";


import combineSocketEventHandlers from "src/sockets";

import { changeUsername } from "src/actions/userInfo";
import { updateUserInfo } from "src/actions/userInfo";

// main components:
import NavTabs from "src/components/NavTabs.jsx";
import Chat from "src/components/Chat/Chat.jsx";
import LoginArea from "src/components/LoginArea.jsx";
import ModalConductor from "src/components/Modals/ModalConductor.jsx";

// todo: picture component:
import LaglessView from "src/components/LaglessView.jsx";
import LaglessBar from "src/components/LaglessBar.jsx";

// components:
import Player from "src/components/Player.jsx";
import Waitlist from "src/components/Waitlist.jsx";

// secondary components:
import MySlider from "src/components/MySlider.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx";


// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
// icons:
// todo: configure tree shaking:
// import { Keyboard } from "@material-ui/icons";
// import Keyboard from "@material-ui/icons/Keyboard";
// import VideogameAsset from "@material-ui/icons/VideogameAsset";
// import Refresh from "@material-ui/icons/Refresh";

// components:
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";

// import { Client } from "./parsec/src/client.js";


// libs:
// jquery:
let $ = require("jquery");
window.$ = $;
// bootstrap:
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// keyboard:
import keycode from "keycode";
// touch controls:
import nipplejs from "nipplejs";
// input master:
const InputMaster = require("js/InputMaster.js");

const textFitPercent = require("js/textfitpercent.js");
const tools = require("js/tools.js");
import Noty from "noty";
// import "noty/lib/noty.css";
// import "noty/lib/themes/light.css";
import localforage from "localforage";
import swal from "sweetalert2";
import SimplePeer from "simple-peer";
import io from "socket.io-client";
import _ from "lodash";
import merge from "deepmerge";

// import JSMpeg from "js/jsmpeg.min.js";
// require("js/WSAvcPlayer.js");

import Lagless1 from "js/lagless/lagless1.js";
import Lagless2 from "js/lagless/lagless2.js";
import Lagless3 from "js/lagless/lagless3.js";
import Lagless4 from "js/lagless/lagless4.js";
import LaglessAudio from "js/lagless/laglessAudio.js";

window.localforage = localforage;

let globalEventTimer = false;
let sendInputTimer;
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let loaded = false;
let locked = false;
let audioConnected = false;
let videoConnected = false;
let authCookie;
let crate;
let banlist = [];
let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146", "103.217.104.190", "103.217.104.246"];
let resizers = [];
let resizeDebounceTimer;
let resizeAvailable = true;
let isMobile = false;

window.lagless1 = null;
window.lagless2 = null;
window.lagless3 = null;
window.lagless4 = null;
window.laglessAudio = null;

// twitch lagless swap settings
let tabsSwappedWithTwitch = [false, false, false, false];

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// check if on mobile
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	isMobile = true;
}

window.masterInput = new InputMaster(isMobile);

/* CONTROLLER STUFF */

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
// let videoBufferSize = 256 * 1024;
// let audioBufferSize = 128 * 1024;

// "000000000000000000 128 128 128 128";
// let lagless1Port = 8001;
// let lagless2Port = 8002;
// let lagless3Port = 8003;
// let lagless4Port = 8004;
//
// let lagless2URL = "wss://twitchplaysnintendoswitch.com/" + lagless2Port + "/";

// todo:
// https://stackoverflow.com/questions/22624379/how-to-convert-letters-to-numbers-with-javascript
// var n = Math.pow(2, 99);
// String.fromCharCode(n);
// s.charCodeAt(0) - 97

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
		this.toggleAudioThree = this.toggleAudioThree.bind(this);

		this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
		this.toggleFullscreen = this.toggleFullscreen.bind(this);
		this.exitFullscreen = this.exitFullscreen.bind(this);
		this.toggleLargescreen = this.toggleLargescreen.bind(this);

		this.switchTabs = this.switchTabs.bind(this);

		this.sendControllerState = this.sendControllerState.bind(this);


		this.onUsernameChange = this.onUsernameChange.bind(this);

		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
		this.viewAccount = this.viewAccount.bind(this);

		this.getTheme = this.getTheme.bind(this);

		this.state = {

			theme: "light",

			// lagless tab:
			tab: 2,

			// checkbox settings:
			audioThree: false,
			keyboardControls: true,
			controllerControls: true,
			touchControls: false,
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

			// controller view:
			controllerViewState: "",

			// controller: new VirtualProController(),

			// sticks:
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

			// modal:
			currentModal: null,

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
				settings = Object.assign({}, this.state, JSON.parse(value));
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
				audioThree: settings.audioThree,
				darkTheme: settings.darkTheme,
				fullscreen: settings.fullscreen,
				largescreen: settings.largescreen,
				hideChat: settings.hideChat,
				hideNav: settings.hideNav,
				deadzone: settings.deadzone,
				volume: settings.volume,
				theme: settings.theme,
				// tab: settings.tab,
			});

			this.switchTabs(settings.tab);

			// wait a little longer so the joycon images load:
			setTimeout(() => {
				$("body").addClass("loaded");
				// after animation is done:
				setTimeout(() => {
					$(".loaded #loader-wrapper")[0].style.visibility = "hidden";
				}, 500);
			}, 0);

		});

		// save settings on close:
		/* ON CLOSE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		// window.addEventListener("beforeunload", () => {
		window.onbeforeunload = () => {
			socket.emit("leaveLagless");
			console.log("saving settings");
			// console.log(this.state);
			localforage.setItem("settings", JSON.stringify(this.state));
			return null;
		};

		window.socket = this.props.socket;

		// reconnect:
		socket.on("disconnect", (data) => {
			console.log("lost connection, attempting reconnect2.");
			socket.connect();
		});
		setInterval(() => {
			if (!socket.connected) {
				console.log("lost connection, attempting reconnect3.");
				socket.connect();
				// re-authenticate if the connection was successful
				setTimeout(() => {
					if (socket.connected) {
						socket.emit("authenticate", {
							auth: authCookie,
							usernameIndex: this.props.userInfo.usernameIndex,
						});
					}
				}, 1000);
			}
		}, 5000);

		// socket.on("turnTimesLeft", (data) => {
		//
		// 	// check if you're in the waitlist
		// 	if (data.waitlists[this.state.tab - 1].indexOf(this.props.userInfo.userid) > -1) {
		//
		// 		if (!tabsSwappedWithTwitch[this.state.tab - 1]) {
		// 			tabsSwappedWithTwitch[this.state.tab - 1] = true;
		// 			// replaceWithTwitch(this.state.tab);
		// 			// setTimeout(() => {
		// 			// socket.emit("leaveLagless");
		// 			// }, 4000);
		// 			// swal("The server is a bit overloaded right now, the lagless stream will be swapped out for twitch temporarily, check the discord server for the rules on how this works.");
		// 			new Noty({
		// 				theme: "mint",
		// 				type: "warning",
		// 				text: "The server is a bit overloaded right now, the lagless stream will be swapped out for twitch temporarily, check the discord server for the rules on how this works.",
		// 				timeout: 5000,
		// 				sounds: {
		// 					volume: 0.5,
		// 					sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
		// 					conditions: ["docVisible"],
		// 				},
		// 			}).show();
		// 		}
		//
		// 	} else if (tabsSwappedWithTwitch[this.state.tab - 1]) {
		// 		tabsSwappedWithTwitch[this.state.tab - 1] = false;
		// 		new Noty({
		// 			theme: "mint",
		// 			type: "success",
		// 			text: "You're at the top of the waitlist! Switching back to lagless!",
		// 			timeout: 5000,
		// 			sounds: {
		// 				volume: 0.5,
		// 				sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
		// 				conditions: ["docVisible"],
		// 			},
		// 		}).show();
		// 	}
		//
		// 	this.setState({
		// 		waitlists: data.waitlists,
		// 	});
		// });

		socket.on("waitlists", (data) => {

			// check if you're in the waitlist
			if (data.waitlists[this.state.tab - 1].indexOf(this.props.userInfo.userid) > -1) {

				if (!tabsSwappedWithTwitch[this.state.tab - 1]) {
					tabsSwappedWithTwitch[this.state.tab - 1] = true;
					// replaceWithTwitch(this.state.tab);
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
			}
			// this.setState({
			// 	waitlists: data.waitlists,
			// });
		});

		/* AUTHENTICATION */
		let authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
		if (authCookie !== null) {
			authCookie = authCookie.split(" ")[0].replace(/;/g, "");
			this.props.dispatch(updateUserInfo({ authToken: authCookie }));
		}

		if (authCookie !== null) {
			socket.emit("authenticate", {
				auth: authCookie,
				usernameIndex: this.props.userInfo.usernameIndex,
			});
		}
		// setInterval(() => {
		// 	if (authCookie != null) {
		// 		socket.emit("authenticate", {
		// 			auth: authCookie,
		// 			usernameIndex: this.state.usernameIndex,
		// 		});
		// 	}
		// }, 5000);
		setTimeout(() => {
			$.ajax({
				url: "https://twitchplaysnintendoswitch.com/accountData/" + this.props.userInfo.userid + "/" + authCookie,
			});
		}, 5000);



		socket.on("needToLogIn", () => {
			swal("You need to log in!");
			setTimeout(() => {
				tools.deleteAllCookies();
				location.reload(true);
			}, 1000);
		});
		socket.emit("join", "lagless" + this.state.tab);
		setInterval(() => {
			socket.emit("join", "lagless" + this.state.tab);
		}, 10000);

		window.state = this.state;
		window.props = this.props;

		// $(document).on("click", ".username-dropdown-item", function (event) {
		// 	let username = $(event.target).text();
		// 	let index = $(event.target).index();
		// 	$("#usernameDropdownMenuLink").text(username);
		// 	settings.usernameIndex = index;
		// 	localforage.setItem("settings", JSON.stringify(settings));
		// });


		/* IP */
		// setInterval(() => {
		// 	$.getJSON("https://jsonip.com?callback=?", (data) => {
		// 		socket.emit("registerIP", {
		// 			ip: data.ip,
		// 			id: this.props.userInfo.userid,
		// 			username: this.props.userInfo.username,
		// 		});
		// 		if (bannedIPs.indexOf(data.ip) > -1) {
		// 			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		// 		}
		// 		if (banlist.indexOf(this.props.userInfo.username) > -1) {
		// 			window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		// 		}
		// 	});
		// }, 5000);

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

		// fullscreen:
		document.addEventListener("webkitfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("mozfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("fullscreenchange", this.exitFullscreen, false);
		document.addEventListener("MSFullscreenChange", this.exitFullscreen, false);


		// lagless setup:

		/* LAGLESS 1.0 */

		lagless1 = new Lagless1(socket);

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

		/* LAGLESS 2.0 */
		lagless2 = new Lagless2();

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
			if (this.state.tab == 2) {
				lagless2.resume();
			}
		});

		/* LAGLESS 3.0 */

		lagless3 = new Lagless3();
		// // on settings change:
		// socket.on("lagless3Settings", (data) => {
		// 	this.setState({
		// 		lagless3: {
		// 			framerate: data.framerate,
		// 			videoBitrate: data.videoBitrate,
		// 			scale: data.scale,
		// 		},
		// 	});
		// });
		// socket.on("lagless3SettingsChange", (data) => {
		// 	if (this.state.tab != 3) {
		// 		return;
		// 	}
		// 	// wsavc.connect("wss://twitchplaysnintendoswitch.com/8003/");
		// });

		/* LAGLESS 4.0 */
		lagless4 = new Lagless4(socket);

		/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */
		laglessAudio = new LaglessAudio(socket);

		if (this.state.audioThree && !audioConnected) {
			laglessAudio.resume();
		}

		/* AUDIO SWITCHING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		setInterval(() => {
			// hack:
			// todo: not this:
			if (!this.state.audioThree) {
				laglessAudio.audio.volume = 0;
				lagless2.player.volume = this.props.settings.volume / 100;
			} else {
				laglessAudio.audio.volume = this.props.settings.volume / 100;
				lagless2.player.volume = 0;
			}
		}, 1000);

		sendInputTimer = setInterval(() => {
			masterInput.pollDevices();
			this.sendControllerState();
		}, 1000 / 240);

		/* NOTIFICATIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

		socket.on("voteStarted", function (data) {
			new Noty({
				theme: "mint",
				type: "warning",
				text: "A vote to change games has started!",
				timeout: 5000,
				sounds: {
					volume: 0.5,
					sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
					conditions: ["docVisible"],
				},
			}).show();
		});


		/* BAN EVASION @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

		socket.on("rickroll", (data) => {
			if (this.props.userInfo.username == data || data == "everyone") {
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
			if (this.props.userInfo.username == data || data == "everyone") {
				$("body").addClass("rainbow-text");
			}
		});

		socket.on("banlist", (data) => {
			banlist = data;
		});

		socket.on("bannedIPs", (data) => {
			bannedIPs = data;
		});

		socket.on("banned", function (data) {
			let alertMessage = $(".swal2-container")[0];
			if (typeof alertMessage == "undefined") {
				swal("You're banned (maybe only temporarily?)");
			}
		});

		/* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		// setInterval(function () {
		// 	pingTime = Date.now();
		// 	socket.emit("ping2");
		// }, 1000);
		//
		// socket.on("pong2", function () {
		// 	let latency = Date.now() - pingTime;
		// 	$("#ping").text(latency + "ms");
		// });

		window.addEventListener("keydown", function (e) {
			// escape, f11
			if ([27, 122].indexOf(e.keyCode) > -1) {
				e.preventDefault();
				$("body").removeClass("hideScrollbar");
			}
		}, false);

	}

	onUsernameChange(event) {
		let index = event.target.value;
		this.props.dispatch(changeUsername(index));
	}

	logout() {
		tools.deleteAllCookies();
		location.reload(true);
	}
	login() {
		this.setState({ currentModal: "LOGIN" });
	}
	register() {
		this.setState({ currentModal: "REGISTER" });
	}
	viewAccount() {
		this.setState({ currentModal: "ACCOUNT" });
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
		this.setState({ analogStickMode: state }, () => {
			inputMaster.keyboard.settings.analogStickMode = state;
		});
	}

	toggleDpadSwap(state) {
		this.setState({ dpadSwap: state }, () => {});
	}

	toggleTDSConfig(state) {
		this.setState({ TDSConfig: state }, () => {
			if (this.state.TDSConfig) {
				inputMaster.controller.settings.map.a = "b";
				inputMaster.controller.settings.map.b = "a";
				inputMaster.controller.settings.map.x = "y";
				inputMaster.controller.settings.map.y = "x";
				inputMaster.controller.settings.sticks.L.X.sensitivity = 1.5;
				inputMaster.controller.settings.sticks.L.Y.sensitivity = 1.5;
				inputMaster.controller.settings.sticks.R.X.sensitivity = 1.5;
				inputMaster.controller.settings.sticks.R.Y.sensitivity = 1.5;
				inputMaster.controller.settings.sticks.R.X.offset = -20;
				inputMaster.controller.settings.sticks.R.Y.offset = -10;
			} else {
				inputMaster.controller.settings.map.a = "a";
				inputMaster.controller.settings.map.b = "b";
				inputMaster.controller.settings.map.x = "x";
				inputMaster.controller.settings.map.y = "y";
				inputMaster.controller.settings.L.X.sensitivity = 1;
				inputMaster.controller.settings.L.X.sensitivity = 1;
				inputMaster.controller.settings.L.X.sensitivity = 1;
				inputMaster.controller.settings.L.Y.sensitivity = 1;
				inputMaster.controller.settings.R.X.sensitivity = 1;
				inputMaster.controller.settings.R.Y.sensitivity = 1;
				inputMaster.controller.settings.R.X.offset = 0;
				inputMaster.controller.settings.R.Y.offset = 0;
			}
		});
	}

	toggleAudioThree(state) {
		this.setState({ audioThree: state }, () => {
			// if (this.state.audioThree && !audioConnected) {
			// 	socket.emit("requestAudio");
			// 	setTimeout(() => {
			// 		audioConnected = true;
			// 	}, 100);
			// }
			if (this.state.audioThree) {
				laglessAudio.resume();
			}

		});
	}

	toggleDarkTheme(state) {
		this.setState({ darkTheme: state }, () => {
			if (this.state.darkTheme) {
				this.setState({ theme: "dark" });
			} else {
				this.setState({ theme: "light" });
			}
		});
	}

	toggleFullscreen(state) {
		this.setState({ fullscreen: state }, () => {

			if (this.state.fullscreen) {
				$("body").css("padding", "0");
				$("#picture").css("grid-row", "1");
				$("#picture").css("grid-column", "1/3");
				this.setState({
					controllerView: false,
					hideChat: true,
					hideNav: true,
				})

				$("body").addClass("hideScrollbar");
				$(document).scrollTop(0);

				tools.toggleFullscreen($("html")[0]);

			} else {
				console.log("exiting fullscreen");
				$("body").css("padding", "");
				$("#picture").css("grid-row", "");
				$("#picture").css("grid-column", "");
				$("body").removeClass("hideScrollbar");
				this.setState({
					fullscreen: false,
					largescreen: false,
					controllerView: true,
					hideChat: false,
					hideNav: false,
				});
			}
		});
	}

	// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
	exitFullscreen() {
		if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
			this.toggleFullscreen(false);
		}
		window.dispatchEvent(new Event("resize"));
	}

	toggleLargescreen(state) {
		this.setState({ largescreen: state }, () => {
			if (this.state.largescreen && this.state.controllerView) {
				this.setState({ controllerView: false });
			} else if (!this.state.largescreen && !this.state.controllerView) {
				this.setState({ controllerView: true });
			}
		});
	}

	resetSettings() {
		tools.deleteAllCookies();
		localforage.clear().then(function () {
			location.reload(true);
		});
	}

	switchTabs(tab) {

		// if (this.state.tab == tab) {
		// 	return;
		// }

		if (!this.props.userInfo.loggedIn) {
			swal("You have to login / register first!");
			return;
		}

		// first clean up / destroy instances before we switch:
		// lagless 1:
		if (tab != 1) {
			socket.emit("leave", "lagless1");
			lagless1.pause();
		}
		// lagless 2:
		if (tab != 2) {
			socket.emit("leave", "lagless2");
			lagless2.pause();
		}
		// lagless 3:
		if (tab != 3) {
			socket.emit("leave", "lagless3");
			lagless3.pause();
		}
		// lagless 4:
		if (tab != 4) {
			socket.emit("leave", "lagless4");
			lagless4.pause();
		}

		// actually switch:
		this.setState({ tab: tab }, () => {

			// lagless 1:
			if (tab == 1) {
				socket.emit("join", "lagless1");
				lagless1.resume(document.getElementById("videoCanvas1"));
			}
			// lagless 2:
			if (tab == 2) {
				socket.emit("join", "lagless2");
				lagless2.resume(document.getElementById("videoCanvas2"));
			}
			// lagless 3:
			if (tab == 3) {
				socket.emit("join", "lagless3");
				lagless3.resume(document.getElementById("videoCanvas3"));
			}
			// lagless 4:
			if (tab == 4) {
				socket.emit("join", "lagless4");
				lagless4.resume(document.getElementById("videoCanvas4"));
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

		if (!this.init) {
			this.init = true;
			this.oldControllerState = "000000000000000000 128 128 128 128";
		}

		let newControllerState = masterInput.outputController.getState();

		if (newControllerState == this.oldControllerState) {
			return;
		} else {
			this.oldControllerState = newControllerState;
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

		if (this.props.controlQueues[this.props.settings.currentPlayer].indexOf(this.props.userInfo.userid) == -1) {
			socket.emit("joinQueue", this.props.settings.currentPlayer);
		}

		if (this.props.controlQueues[this.props.settings.currentPlayer].indexOf(this.props.userInfo.userid) > 0 && this.props.controlQueues[this.props.settings.currentPlayer].length > 0) {
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
				text: "You aren't logged in!",
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

		if (this.props.controlQueues[0][0] == this.props.userInfo.userid) {
			obj.cNum = 0;
		} else if (this.props.controlQueues[1][0] == this.props.userInfo.userid) {
			obj.cNum = 1;
		} else if (this.props.controlQueues[2][0] == this.props.userInfo.userid) {
			obj.cNum = 2;
		} else if (this.props.controlQueues[3][0] == this.props.userInfo.userid) {
			obj.cNum = 3;
		} else {
			obj.cNum = this.props.settings.currentPlayer;
		}
		console.log(obj.state, obj.cNum);
		socket.emit("sendControllerState", obj);
	}

	getTheme() {
		let theme = {
			typography: {
				useNextVariants: true,
			},
			palette: {
				type: "light",
				primary: indigo,
				secondary: pink,
				error: red,
				// Used by `getContrastText()` to maximize the contrast between the background and
				// the text.
				contrastThreshold: 3,
				// Used to shift a color's luminance by approximately
				// two indexes within its tonal palette.
				// E.g., shift from Red 500 to Red 300 or Red 700.
				tonalOffset: 0.2,
			},
		};
		// main:
		theme = merge(theme, {
			palette: {
				type: "dark",
				primary: {
					main: "#2181ff", // #2181ff
				},
				secondary: {
					main: "#ff3b3b",
				}
			}
		});
		if (this.state.theme == "light") {
			theme = merge(theme, {
				palette: {
					type: "light",
					// primary: {
					// 	main: "#bf4040",
					// },
					// secondary: {
					// 	main: "#bf4040",
					// }
				}
			});
		} else if (this.state.theme == "dark") {
			theme = merge(theme, {
				palette: {
					type: "dark",
					// primary: {
					// 	main: "#bf4040",
					// },
					// secondary: {
					// 	main: "#bf4040",
					// },
				}
			});
		}
		return createMuiTheme(theme);
	}

	shouldComponentUpdate(nextProps, nextState) {

		if (JSON.stringify(this.props.userInfo) != JSON.stringify(nextProps.userInfo)) {
			return true;
		}

		if (this.state.tab != nextState.tab) {
			return true;
		}

		// if (this.state.tab != nextState.tab) {
		// 	return true;
		// }
		// if (this.state.theme != nextState.theme) {
		// 	return true;
		// }

		if (this.state != nextState) {
			return true;
		}

		// console.log(nextProps);
		return false;
	}

	// componentWillReceiveProps(nextProps) {
	// 	const changedProps = _.reduce(this.props, function (result, value, key) {
	// 		return _.isEqual(value, nextProps[key]) ?
	// 			result :
	// 			result.concat(key)
	// 	}, [])
	// 	console.log('changedProps: ', changedProps)
	// }

	render() {

		console.log("re-rendering");

		return (
			<MuiThemeProvider theme={this.getTheme()}>
				<CssBaseline/>

				<div id="loader-wrapper">
					<div id="loader"></div>
					<div className="loader-section section-left"></div>
					<div className="loader-section section-right"></div>
				</div>


				<div id="container">

					<NavTabs value={this.state.tab} handleChange={this.switchTabs}/>

					<LoginArea
						{...this.state}
						userInfo={this.props.userInfo}
						handleUsernameChange={this.onUsernameChange}
						handleLogout={this.logout}
						handleLogin={this.login}
						handleRegister={this.register}
						handleAccount={this.viewAccount}/>

					<Paper id="picture" style={{"gridColumn": this.state.hideChat ? "1/3" : null }} elevation={3}>

						<LaglessView
							num={this.state.tab}
							controllerView={this.state.controllerView}
							largescreen={this.state.largescreen}
							fullscreen={this.state.fullscreen}
							loggedIn={this.props.userInfo.loggedIn}
							tabsSwappedWithTwitch={tabsSwappedWithTwitch}/>

						<LaglessBar/>

					</Paper>

					<Chat hide={this.state.hideChat}/>

					<Paper id="barUnderTheStream">

						<Paper id="players" elevation={0}>
							<Player num={1}/>
							<Player num={2}/>
							<Player num={3}/>
							<Player num={4}/>
						</Paper>

						<Paper id="settings" elevation={0}>

							<Paper id="checkboxSettings" className="settingsPanel" elevation={5}>
								<List>
									<ListItem>
										<MyCheckbox text={"Enable Keyboard Controls"} handleChange={this.toggleKeyboardControls} checked={this.state.keyboardControls}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Controller Controls"} handleChange={this.toggleControllerControls} checked={this.state.controllerControls}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Controller View"} handleChange={this.toggleControllerView} checked={this.state.controllerView}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.audioThree}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Dark Theme"} handleChange={this.toggleDarkTheme} checked={this.state.darkTheme}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Fullscreen Mode"} handleChange={this.toggleFullscreen} checked={this.state.fullscreen}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Largescreen Mode"} handleChange={this.toggleLargescreen} checked={this.state.largescreen}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Mouse Controls"} handleChange={this.toggleMouseControls} checked={this.state.mouseControls}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Enable Touch Controls"} handleChange={this.toggleTouchControls} checked={this.state.touchControls}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Analog Stick Mode"} handleChange={this.toggleAnalogStickMode} checked={this.state.analogStickMode}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"DPad Swap"} handleChange={this.toggleDpadSwap} checked={this.state.dpadSwap}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"3Ds config"} handleChange={this.toggleTDS} checked={this.state.TDSconfig}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Hide Chat"} handleChange={(state) => {this.setState({ hideChat: state })}} checked={this.state.hideChat}/>
									</ListItem>
									<ListItem>
										<MyCheckbox text={"Hide Nav Bar"} handleChange={(state) => {this.setState({ hideNav: state })}} checked={this.state.hideNav}/>
									</ListItem>
								</List>
							</Paper>

							<Paper id="generalSettings" className="settingsPanel" elevation={5}>
								<span>General Settings</span>
								<hr/>

								Stick Deadzone: <span id="deadzone">{this.state.deadzone}</span>
								<div className="mysliderContainer">
									<MySlider min={5} max={110} step={1} value={this.state.deadzone}
										handleChange={(value) => {this.setState({deadzone: value})}}/>
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
								<Button variant="contained" onClick={this.resetSettings}>Reset All Settings</Button>
							</Paper>

							<Paper id="laglessSettingsContainer" className="settingsPanel" elevation={0}>

								<Paper id="lagless1Settings" className="laglessSettings" elevation={3}>
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
									FPS: <span>{this.state.lagless1.framerate}</span><br/>
									<div className="mysliderContainer">
										<MySlider min={1} max={15} step={1} value={this.state.lagless1.framerate}
											handleChange={(value) => {this.setState({lagless1: {framerate: value}})}}
											onAfterChange={(value) => {socket.emit("lagless1Settings", {framerate: parseInt(value)});}}/>
									</div>
								</Paper>

								<Paper id="lagless2Settings" className="laglessSettings" elevation={3}>
									Lagless 2 Settings<br/>
									<hr/>

									FPS: <span>{this.state.lagless2.framerate}</span><br/>
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
								</Paper>

								<Paper id="lagless3Settings" className="laglessSettings" elevation={3}>
									Lagless 3 Settings<br/>
									<hr/>

									FPS: <span>{this.state.lagless3.framerate}</span><br/>
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
								</Paper>
							</Paper>

							<Paper id="waitlistContainer" className="settingsPanel" elevation={5}>
								<Waitlist tab={this.state.tab}/>
							</Paper>
						</Paper>
					</Paper>
				</div>

				<ModalConductor
					currentModal={this.state.currentModal}
					handleClose={() => {this.setState({currentModal: null})}}/>

			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		controlQueues: state.players.controlQueues,
		userInfo: state.userInfo,
		settings: state.settings,
	};
};
//
// const mapActionsToProps = (state) => {
// 	return state;
// };

// export default connect(mapStateToProps, mapActionsToProps)(App);
// export default App;
export default connect(mapStateToProps)(App);

// exit fullscreen:
window.addEventListener("keydown", (event) => {
	// space and arrow keys
	// if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
	// 	event.preventDefault();
	// }
	// prevent arrow key scrolling:
	if ([38, 40].indexOf(event.keyCode) > -1) {
		// check if chat isn't focused:
		if (!(document.activeElement === document.getElementById("messageBox"))) {
			event.preventDefault();
		}
	}
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


$(window).resize(_.throttle((event) => {
	// console.log("resizing.");
	// hack:
	// todo: not this:
	$("#videoCanvas3").outerHeight($("#videoCanvas3").outerWidth() * (9 / 16));
	$("#twitchVideo").outerHeight($("#twitchVideo").outerWidth() * (9 / 16));

	$("#chat").outerHeight(0);
	$("#chat").outerHeight($("#picture").outerHeight());

	for (let i = 0; i < resizers.length; i++) {
		resizers[i].resize();
	}
}, 1000));

/* FORCE HTTPS */
if (location.protocol != "https:") {
	location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}
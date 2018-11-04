// react:
import React, { Component } from "react";
import ReactDOM from "react-dom";

// redux:
import { connect } from "react-redux";


import combineSocketEventHandlers from "src/sockets";

import { changeUsername } from "src/actions/userInfo";
import { updateUserInfo } from "src/actions/userInfo";

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

// main components:
import Chat from "src/components/Chat/Chat.jsx";
import LogInArea from "src/components/LogInArea.jsx";
import ModalConductor from "src/components/Modals/ModalConductor.jsx";
import LaglessView from "src/components/LaglessView.jsx";

// secondary components:
import MySlider from "src/components/MySlider.jsx";
import VolumeSlider from "src/components/VolumeSlider.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx";


import ThemeSwitch from "src/components/ThemeSwitch.jsx";

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// icons:
// todo: configure tree shaking:
// import { Keyboard } from "@material-ui/icons";
import Keyboard from "@material-ui/icons/Keyboard";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import Refresh from "@material-ui/icons/Refresh";
// components:
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
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

// snex:
import SNEX from "@snex/react-connect";
import snex from "snex";
// keyboard:
import keycode from "keycode";
// touch controls:
import nipplejs from "nipplejs";
// input master:
const InputMaster = require("js/InputMaster.js");

const textFitPercent = require("js/textfitpercent.js");
const tools = require("js/tools.js");
import Noty from "noty";
import "noty/lib/noty.css";
import localforage from "localforage";
import swal from "sweetalert2";
import SimplePeer from "simple-peer";
import io from "socket.io-client";
import _ from "lodash";

// require("js/jsmpeg.min.js");
// require("js/WSAvcPlayer.js");

import Lagless1 from "js/lagless/lagless1.js";
import Lagless2 from "js/lagless/lagless2.js";
import Lagless3 from "js/lagless/lagless3.js";
import Lagless4 from "js/lagless/lagless4.js";

window.localforage = localforage;

let globalEventTimer = false;
let sendInputTimer;
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let loaded = false;
let locked = false;
window.player = {};
let audio = document.createElement("audio");
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
let videoCanvas = null;

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


const theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},
	// palette: {
	// 	type: "dark",
	// },
});

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

		// this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
		this.toggleFullscreen = this.toggleFullscreen.bind(this);
		this.exitFullscreen = this.exitFullscreen.bind(this);
		this.toggleLargescreen = this.toggleLargescreen.bind(this);

		this.switchTabs = this.switchTabs.bind(this);
		this.handleCanvas = this.handleCanvas.bind(this);

		this.sendControllerState = this.sendControllerState.bind(this);


		this.choosePlayer = this.choosePlayer.bind(this);
		this.onUsernameChange = this.onUsernameChange.bind(this);

		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
		this.viewAccount = this.viewAccount.bind(this);

		this.state = {

			currentPlayerChosen: 0,

			waitlists: [
				[],
				[],
				[],
				[],
				[],
			],
			usernameMap: {},

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

			// volume:
			volume: 1,

			// controller view:
			controllerViewState: "",

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
				// tab: settings.tab,
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

		socket.on("turnTimesLeft", (data) => {

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
				// replaceWithLagless(this.state.tab);
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
			});
		});

		socket.on("usernameMap", (data) => {
			this.setState({
				usernameMap: data,
			});
		});




		/* AUTHENTICATION */
		let notLoggedIn = () => {
			// todo: dispatch logout?
			// replace with twitch until signed in:
			// replaceWithTwitch(this.state.tab);
			$("#tab1").addClass("disabled");
			$("#tab3").addClass("disabled");
			$("#tab4").addClass("disabled");
			$("#tab5").addClass("disabled");

			$(".disabled").on("click", () => {
				swal("You have to log in first!");
			});
		}
		let authCookie = tools.getCookie("TwitchPlaysNintendoSwitch");
		if (authCookie !== null) {
			authCookie = authCookie.split(" ")[0].replace(/;/g, "");
			this.props.dispatch(updateUserInfo({ authToken: authCookie }));
		}

		if (authCookie === null) {
			notLoggedIn();
		} else {
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
		setInterval(() => {
			$.getJSON("https://jsonip.com?callback=?", (data) => {
				socket.emit("registerIP", {
					ip: data.ip,
					id: this.props.userInfo.userid,
					username: this.props.userInfo.username,
				});
				if (bannedIPs.indexOf(data.ip) > -1) {
					window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
				}
				if (banlist.indexOf(this.props.userInfo.username) > -1) {
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

		// // on settings change:
		socket.on("lagless2Settings", (data) => {
			this.setState({
				lagless2: {
					framerate: data.framerate,
					videoBitrate: data.videoBitrate,
					scale: data.scale,
				},
			});
		});
		// socket.on("lagless2SettingsChange", (data) => {
		// 	if (this.state.tab != 2) {
		// 		return;
		// 	}
		// 	// try {
		// 	player.destroy();
		// 	// } catch (error) {
		// 	// 	console.log("player destroy error.");
		// 	// }
		// 	player = new JSMpeg.Player(lagless2URL, {
		// 		canvas: canvas2,
		// 		video: true,
		// 		audio: true,
		// 		videoBufferSize: videoBufferSize,
		// 		audioBufferSize: audioBufferSize,
		// 		maxAudioLag: 0.5
		// 	});
		// 	if (!this.state.audioThree) {
		// 		player.volume = this.state.volume / 100;
		// 	} else {
		// 		player.volume = 0;
		// 	}
		// });

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

		if (this.state.audioThree && !audioConnected) {
			socket.emit("requestAudio");
			setTimeout(() => {
				audioConnected = true;
			}, 100);
		}

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
		}, 1000 / 240);

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
			tools.deleteAllCookies();
			localforage.clear().then(function () {
				location.reload(true);
			});
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
			// $(this).effect("highlight", {}, 2000);
			modPowerUniqueID = $(this).attr("userid");
		});

		$(document).on("click", ".viewerElement", function (event) {
			// $(this).effect("highlight", {}, 2000);
			modPowerUniqueID = $(this).attr("userid");
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
			// $(this).effect("highlight", {}, 2000);
			socket.emit("unlock");
		});
		$(document).on("click", 'i:contains("lock_open")', function (event) {
			// $(this).effect("highlight", {}, 2000);
			socket.emit("lock");
		});

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

	// SNEX:
	handleSnex = (controller) => {
		controller.on("data", data => {
			switch (data.key) {
				case "UP":
					masterInput.snexController.state.lstick.y = data.state ? 255 : 128;
					break;
				case "DOWN":
					masterInput.snexController.state.lstick.y = data.state ? 0 : 128;
					break;
				case "LEFT":
					masterInput.snexController.state.lstick.x = data.state ? 0 : 128;
					break;
				case "RIGHT":
					masterInput.snexController.state.lstick.x = data.state ? 255 : 128;
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
		this.setState({ audioThree: state }, () => {
			if (this.state.audioThree && !audioConnected) {
				socket.emit("requestAudio");
				setTimeout(() => {
					audioConnected = true;
				}, 100);
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

	choosePlayer(cNum) {
		this.setState({ currentPlayerChosen: cNum });
	}

	handleCanvas(ref) {
		videoCanvas = ref;
		console.log(ref);
	}

	switchTabs(tab) {

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

		if (this.props.controlQueues[this.state.currentPlayerChosen].indexOf(this.props.userInfo.userid) == -1) {
			socket.emit("joinQueue", this.state.currentPlayerChosen);
		}

		if (this.props.controlQueues[this.state.currentPlayerChosen].indexOf(this.props.userInfo.userid) > 0 && this.props.controlQueues[this.state.currentPlayerChosen].length > 0) {
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
			obj.cNum = this.state.currentPlayerChosen;
		}
		console.log(obj.state, obj.cNum);
		socket.emit("sendControllerState", obj);
	}


	render() {

		return (
			<MuiThemeProvider theme={theme}>
				<CssBaseline/>
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
							<a id="tab3" className="nav-link" data-toggle="tab" href="#lagless3" onClick={() => {this.switchTabs(3)}}>Lagless 3</a>
						</li>
						<li className="nav-item">
							<a id="tab4" className="nav-link" data-toggle="tab" href="#lagless4" onClick={() => {this.switchTabs(4)}}>Lagless 4</a>
						</li>
						<li className="nav-item">
							<a id="tab5" className="nav-link" data-toggle="tab" href="#lagless5" onClick={() => {this.switchTabs(5)}}>Lagless 5</a>
						</li>
						<div id="statusContainer" className="otborder">
							<i className="material-icons">lock_open</i>
						</div>
						<SNEX type="snes-us" onConnection={this.handleSnex}/>
					</ul>

					<LogInArea
						{...this.state}
						userInfo={this.props.userInfo}
						handleUsernameChange={this.onUsernameChange}
						handleLogout={this.logout}
						handleLogin={this.login}
						handleRegister={this.register}
						handleAccount={this.viewAccount}/>

					<div id="picture" className="otborder" style={{"gridColumn": this.state.hideChat ? "1/3" : null }}>

						<LaglessView
							num={this.state.tab}
							controllerView={this.state.controllerView}
							controllerState={this.state.controllerViewState}
							largescreen={this.state.largescreen}
							fullscreen={this.state.fullscreen}
							getCanvasRef={this.handleCanvas}
							loggedIn={this.props.userInfo.loggedIn}
							tabsSwappedWithTwitch={tabsSwappedWithTwitch}/>

						<div id="laglessBar" className="laglessBar otborder">
							<ViewerList uniqueIDs={this.props.viewers} usernameMap={this.state.usernameMap}/>
							<VolumeSlider
								value={this.state.volume}
								onMute={() => {this.setState({volume: 0})}}
								onMax={() => {this.setState({volume: 100})}}
								handleChange={(value) => {this.setState({volume: value})}}/>
							{/* <MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.audioThree}/> */}
							<Button id="laglessRefresh" className="laglessRefresh" variant="contained" color="primary">
								<Refresh/>
							</Button>
							<Button variant="contained" color="primary">
								<Keyboard/>|<VideogameAsset/>
							</Button>
							<div id="keyboardDropdown" className="keyboardDropdown dropdown show">
								<a id="keyboardDropdownButton" className="btn btn-secondary dropdown-toggle" href="#" data-toggle="dropdown">
									Keyboard Profiles
								</a>
								<div className="keyboard-dropdown-menu dropdown-menu"></div>
							</div>
						</div>
					</div>

					<Chat hide={this.state.hideChat}/>

					<div id="barUnderTheStream" className="otborder">

						<div id="playersContainer" className="otborder">
							<div id="players" className="collapse show collapsible">

								<Player
									num={1}
									myID={this.props.userInfo.userid}
									usernameMap={this.state.usernameMap}
									selected={this.state.currentPlayerChosen}
									handleChange={() => {this.choosePlayer(0)}} />
								<Player
									num={2}
									myID={this.props.userInfo.userid}
									usernameMap={this.state.usernameMap}
									selected={this.state.currentPlayerChosen}
									handleChange={() => {this.choosePlayer(1)}} />
								<Player
									num={3}
									myID={this.props.userInfo.userid}
									usernameMap={this.state.usernameMap}
									selected={this.state.currentPlayerChosen}
									handleChange={() => {this.choosePlayer(2)}} />
								<Player
									num={4}
									myID={this.props.userInfo.userid}
									usernameMap={this.state.usernameMap}
									selected={this.state.currentPlayerChosen}
									handleChange={() => {this.choosePlayer(3)}} />
							</div>
						</div>

						<div id="settingsContainer" className="collapsibleContainer otborder">
							<div id="settings" className="collapse show collapsible">

								<div id="checkboxSettings" className="settingsPanel otborder">
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
											<MyCheckbox text={"Enable Dark Theme"} handleChange={(state) => {this.setState({darkTheme: state})}} checked={this.state.darkTheme}/>
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
								</div>

								<div id="generalSettings" className="settingsPanel otborder">
									General Settings<br />
									<hr />

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
										FPS: <span>{this.state.lagless1.framerate}</span><br/>
										<div className="mysliderContainer">
											<MySlider min={1} max={15} step={1} value={this.state.lagless1.framerate}
												handleChange={(value) => {this.setState({lagless1: {framerate: value}})}}
												onAfterChange={(value) => {socket.emit("lagless1Settings", {framerate: parseInt(value)});}}/>
										</div>
									</div>

									<div id="lagless2Settings" className="laglessSettings">
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
									</div>

									<div id="lagless3Settings" className="laglessSettings">
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
									</div>
								</div>

								<div id="waitlistContainer" className="settingsPanel otborder">
									<Waitlist usernameMap={this.state.usernameMap} userids={this.state.waitlists[this.state.tab - 1]} myID={this.props.userInfo.userid}/>
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


				<ModalConductor
					currentModal={this.state.currentModal}
					handleClose={() => {this.setState({currentModal: null})}}/>

			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		controlQueues: state.controlQueues,
		viewers: state.viewers,
		userInfo: state.userInfo,
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
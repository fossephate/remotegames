// react:
import React, { Component } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// redux:
import { connect } from "react-redux";

import combineSocketEventHandlers from "src/sockets";

import { changeUsername } from "src/actions/userInfo.js";
import { updateUserInfo } from "src/actions/userInfo.js";
import { updateSettings } from "src/actions/settings.js";
import { leavePlayerControlQueue } from "src/actions/players.js";

// main components:
import NavTabs from "src/components/NavTabs.jsx";
import Picture from "src/components/Picture.jsx";
import Chat from "src/components/Chat/Chat.jsx";
import LoginArea from "src/components/LoginArea.jsx";
import ModalConductor from "src/components/Modals/ModalConductor.jsx";

import About from "src/About.jsx";
import FAQ from "src/FAQ.jsx";

// components:
import PlayerInfo from "src/components/PlayerInfo.jsx";
import Waitlist from "src/components/Waitlist.jsx";
import ThemeSelector from "src/components/ThemeSelector.jsx";

// secondary components:
import MySlider from "src/components/MySlider.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx";


// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
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
import ListItemText from "@material-ui/core/ListItemText";
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

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

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
// import nipplejs from "nipplejs";
// input master:
import InputHandler from "js/InputHandler.js";

const textFitPercent = require("js/textfitpercent.js");
const tools = require("js/tools.js");
import Noty from "noty";
// import "noty/lib/noty.css";
// import "noty/lib/themes/light.css";
import localforage from "localforage";
import swal from "sweetalert2";
import io from "socket.io-client";
import _ from "lodash";
import merge from "deepmerge";

// import JSMpeg from "js/jsmpeg.min.js";
// require("js/WSAvcPlayer.js");

// import Lagless1 from "js/lagless/lagless1.js";
import Lagless2 from "js/lagless/lagless2.js";
// import Lagless3 from "js/lagless/lagless3.js";
// import Lagless4 from "js/lagless/lagless4.js";
import LaglessAudio from "js/lagless/laglessAudio.js";

window.localforage = localforage;

let globalEventTimer = false;
let sendInputTimer;
let lastSplitTime = 0;
let lastSplitTimeMS = 0;
let locked = false;
let loaded = false;
let authCookie;
let banlist = [];
let bannedIPs = ["84.197.3.92", "94.214.218.184", "185.46.212.146", "103.217.104.190", "103.217.104.246"];
let resizers = [];
let resizeDebounceTimer;
let resizeAvailable = true;
let isMobile = false;

window.laglessAudio = null;
window.streams = [];
let settings = {};

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// check if on mobile
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
	isMobile = true;
}

window.inputHandler = new InputHandler(isMobile);

// mobile warning messages:
if (isMobile) {
	// swal("This site isn't really designed for mobile, I'll improve it in the future but for now consider using a desktop / laptop.");
}

/* CONTROLLER STUFF */
let mouseMoveTimer = null;
let pingTime = 0;
let restPos = 128;

// jss:
const styles = (theme) => ({
	container: {
		display: "grid",
		"grid-template-columns": "minmax(50%, 75%) minmax(100px, 25%)",
		"gridTemplateAreas": `
			"nav login"
			"picture picture"
			"chat chat"
			"bar bar"`,
		width: "100%",
		gridGap: "5px",
	},
	[device.tablet]: {
		container: {
			"grid-template-columns": "minmax(50%, 75%) minmax(300px, 25%)",
			"gridTemplateAreas": `
				"nav login"
				"picture chat"
				"bar bar"`,
		},
	},
	[device.laptop]: {
		container: {},
	},
});

const Container = withStyles(styles)(({ classes, children }) => (
	<div className={classes.container}>
		{children}
	</div>
));



class App extends Component {

	constructor(props) {
		super(props);

		this.toggleKeyboardControls = this.toggleKeyboardControls.bind(this);
		this.toggleControllerControls = this.toggleControllerControls.bind(this);
		this.toggleTouchControls = this.toggleTouchControls.bind(this);
		this.toggleMouseControls = this.toggleMouseControls.bind(this);
		this.toggleControllerView = this.toggleControllerView.bind(this);

		this.toggleAnalogStickMode = this.toggleAnalogStickMode.bind(this);
		this.toggleDpadSwap = this.toggleDpadSwap.bind(this);
		this.toggleTDSConfig = this.toggleTDSConfig.bind(this);
		this.toggleAudioThree = this.toggleAudioThree.bind(this);

		// this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
		this.switchThemes = this.switchThemes.bind(this);
		this.toggleFullscreen = this.toggleFullscreen.bind(this);
		this.exitFullscreen = this.exitFullscreen.bind(this);
		this.toggleLargescreen = this.toggleLargescreen.bind(this);

		this.switchTabs = this.switchTabs.bind(this);

		this.sendControllerState = this.sendControllerState.bind(this);


		// this.onUsernameChange = this.onUsernameChange.bind(this);

		// this.login = this.login.bind(this);
		// this.register = this.register.bind(this);
		// this.viewAccount = this.viewAccount.bind(this);

		this.getTheme = this.getTheme.bind(this);

		this.state = {};
	}


	componentDidMount() {

		console.log("restoring preferences");

		// check if new:
		// localforage.getItem("new").then(function (value) {
		// 	if (value != "new") {
		//	// first time message:
		// 	}
		// 	localforage.setItem("new", "new");
		// });

		// window.dispatchEvent(new Event("resize"));

		// Get stored preferences
		localforage.getItem("settings").then((value) => {
			// If they exist, write them
			if (typeof value != "undefined") {
				settings = Object.assign({}, JSON.parse(value));
			}
			// Store the preferences (so that the default values get stored)
			localforage.setItem("settings", JSON.stringify(settings));

			// debug:
			console.log(settings);

			this.props.updateSettings({
				keyboardControls: settings.keyboardControls,
				controllerControls: settings.controllerControls,
				touchControls: settings.touchControls,
				mouseControls: settings.mouseControls,
				controllerView: settings.controllerView,
				analogStickMode: settings.analogStickMode,
				dpadSwap: settings.dpadSwap,
				TDSConfig: settings.TDSConfig,
				audioThree: settings.audioThree,
				// fullscreen: settings.fullscreen,
				// largescreen: settings.largescreen,
				// hideChat: settings.hideChat,
				// hideNav: settings.hideNav,
				deadzone: settings.deadzone,
				volume: settings.volume,
				theme: settings.theme,
				// streamNumber: settings.streamNumber,
			});

			this.switchTabs(this.props.settings.streamNumber);

			// wait a little longer so the joycon images load:
			setTimeout(() => {
				$("body").addClass("loaded");
				// after animation is done:
				setTimeout(() => {
					$(".loaded #loader-wrapper")[0].style.visibility = "hidden";
				}, 500);
			}, 0);

		});

		window.socket = this.props.socket;

		// save settings on close:
		/* ON CLOSE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		// window.addEventListener("beforeunload", () => {
		window.onbeforeunload = () => {
			socket.emit("leaveStreams");
			console.log("saving settings");
			localforage.setItem("settings", JSON.stringify(this.props.settings));
			return null;
		};



		// reconnect:
		socket.on("disconnect", (data) => {
			// console.log("lost connection, attempting reconnect2.");
			// socket.connect();
		});
		window.reconnectTimer = setInterval(() => {
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

		socket.on("waitlist", (data) => {
			let waitlist = data.waitlist;
			// check if you're in the waitlist
			if (waitlist.indexOf(this.props.userInfo.userid) > -1) {

				if (!this.props.userInfo.waitlisted) {
					this.props.updateUserInfo({ waitlisted: true });
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
				// no longer waitlisted:
			} else if (this.props.userInfo.waitlisted) {
				this.props.updateUserInfo({ waitlisted: false });
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


		/* BAN / IP */
		// setInterval(() => {
		// 	// $.getJSON("https://jsonip.com?callback=?", (data) => {
		// 	// 	socket.emit("registerIP", {
		// 	// 		ip: data.ip,
		// 	// 		id: this.props.userInfo.userid,
		// 	// 		username: this.props.userInfo.username,
		// 	// 	});
		// 	// 	if (bannedIPs.indexOf(data.ip) > -1) {
		// 	// 		window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		// 	// 	}
		// 	// });
		// 	// if (banlist.indexOf(this.props.userInfo.username) > -1) {
		// 	// 	window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
		// 	// 	socket.close();
		// 	// }
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

		// streams.push(new Lagless1(socket));
		//
		// // on settings change:
		// socket.on("lagless1Settings", (data) => {
		// 	this.setState({
		// 		lagless1: {
		// 			framerate: data.framerate,
		// 			quality: data.quality,
		// 			scale: data.scale,
		// 		},
		// 	});
		// });

		/* switch 2.0 */
		streams.push(new Lagless2("wss://twitchplaysnintendoswitch.com/8002/"));

		// on settings change:
		socket.on("lagless2Settings", (data) => {
			// this.setState({
			// 	lagless2: {
			// 		framerate: data.framerate,
			// 		videoBitrate: data.videoBitrate,
			// 		scale: data.scale,
			// 	},
			// });
		});
		socket.on("lagless2SettingsChange", (data) => {
			if (this.props.settings.streamNumber == 0) {
				streams[0].resume();
			}
		});

		// xbox 2.0
		// streams.push(new Lagless1("https://twitchplaysnintendoswitch.com", "/8001/socket.io"));
		streams.push(new Lagless2("wss://twitchplaysnintendoswitch.com/8004/", true));

		/* LAGLESS 3.0 */

		// lagless3 = new Lagless3();
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
		// lagless4 = new Lagless4(socket);

		/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */
		laglessAudio = new LaglessAudio(socket);

		if (this.props.settings.audioThree) {
			laglessAudio.resume();
		}

		// for (let i = 0; i < streams.length; i++) {
		// 	streams[i].pause();
		// }

		/* AUDIO SWITCHING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		setInterval(() => {
			// hack:
			// todo: not this:
			if (!this.props.settings.audioThree) {
				laglessAudio.audio.volume = 0;
				// for (let i = 0; i < 0)
				streams[0].player.volume = this.props.settings.volume / 100;
				if (streams[1].player != null) {
					streams[1].player.volume = this.props.settings.volume / 100;
				}
			} else {
				laglessAudio.audio.volume = this.props.settings.volume / 100;
				streams[0].player.volume = 0;
				if (streams[1].player != null) {
					streams[1].player.volume = 0;
				}
			}
		}, 1000);

		sendInputTimer = setInterval(() => {
			if (!this.props.userInfo.loggedIn) {return;}
			inputHandler.pollDevices();
			this.sendControllerState();
		}, 1000 / 60);

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
				swal("You're banned, you can appeal the ban on the discord server, though it may be only temporary.");
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

		window.addEventListener("keydown", function (event) {
			// escape, f11
			if ([27, 122].indexOf(event.keyCode) > -1) {
				event.preventDefault();
				$("body").removeClass("hideScrollbar");
			}
			// prevent space bar scrolling:
			// if ([32].indexOf(event.keyCode) > -1) {
			// 	event.preventDefault();
			// }
		}, false);

	}

	logout() {
		tools.deleteAllCookies();
		location.reload(true);
	}

	// checkbox settings:
	toggleKeyboardControls(state) {
		this.props.updateSettings({ keyboardControls: state });
	}

	toggleControllerControls(state) {
		this.props.updateSettings({ controllerControls: state });
	}

	toggleTouchControls(state) {
		this.props.updateSettings({ touchControls: state });
	}

	toggleMouseControls(state) {
		this.props.updateSettings({ mouseControls: state });
	}

	toggleControllerView(state) {
		this.props.updateSettings({ controllerView: state });
		if (state && this.props.settings.largescreen) {
			this.props.updateSettings({ largescreen: false });
		}
	}

	toggleAnalogStickMode(state) {
		this.props.updateSettings({ analogStickMode: state });
		// masterInput.keyboard.settings.analogStickMode = state;
	}

	toggleDpadSwap(state) {
		this.props.updateSettings({ dpadSwap: state });
	}

	toggleTDSConfig(state) {
		this.props.updateSettings({ TDSConfig: state });
		// if (state) {
		// 	masterInput.controller.settings.map.a = "b";
		// 	masterInput.controller.settings.map.b = "a";
		// 	masterInput.controller.settings.map.x = "y";
		// 	masterInput.controller.settings.map.y = "x";
		// 	masterInput.controller.settings.sticks.L.X.sensitivity = 1.5;
		// 	masterInput.controller.settings.sticks.L.Y.sensitivity = 1.5;
		// 	masterInput.controller.settings.sticks.R.X.sensitivity = 1.5;
		// 	masterInput.controller.settings.sticks.R.Y.sensitivity = 1.5;
		// 	masterInput.controller.settings.sticks.R.X.offset = -20;
		// 	masterInput.controller.settings.sticks.R.Y.offset = -10;
		// } else {
		// 	masterInput.controller.settings.map.a = "a";
		// 	masterInput.controller.settings.map.b = "b";
		// 	masterInput.controller.settings.map.x = "x";
		// 	masterInput.controller.settings.map.y = "y";
		// 	masterInput.controller.settings.sticks.L.X.sensitivity = 1;
		// 	masterInput.controller.settings.sticks.L.X.sensitivity = 1;
		// 	masterInput.controller.settings.sticks.L.X.sensitivity = 1;
		// 	masterInput.controller.settings.sticks.L.Y.sensitivity = 1;
		// 	masterInput.controller.settings.sticks.R.X.sensitivity = 1;
		// 	masterInput.controller.settings.sticks.R.Y.sensitivity = 1;
		// 	masterInput.controller.settings.sticks.R.X.offset = 0;
		// 	masterInput.controller.settings.sticks.R.Y.offset = 0;
		// }
	}

	toggleAudioThree(state) {
		this.props.updateSettings({ audioThree: state });
		if (state) {
			laglessAudio.resume();
		}
	}

	switchThemes(theme) {
		this.props.updateSettings({ theme: theme });
	}

	toggleFullscreen(state) {

		this.props.updateSettings({ fullscreen: state });

		if (state) {
			$("body").css("padding", "0");
			$("body").addClass("hideScrollbar");
			$("#picture").css("grid-row", "1");
			$("#picture").css("grid-column", "1/3");

			$(document).scrollTop(0);

			this.props.updateSettings({
				controllerView: false,
				hideChat: true,
				hideNav: true,
			});

			tools.toggleFullscreen($("html")[0]);

		} else {

			console.log("exiting fullscreen");
			$("body").css("padding", "");
			$("#picture").css("grid-row", "");
			$("#picture").css("grid-column", "");
			$("body").removeClass("hideScrollbar");
			this.props.updateSettings({
				largescreen: false,
				controllerView: true,
				hideChat: false,
				hideNav: false,
			});
		}
	}

	// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
	exitFullscreen() {
		if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
			this.toggleFullscreen(false);
		}
		window.dispatchEvent(new Event("resize"));
	}

	toggleLargescreen(state) {
		this.props.updateSettings({ largescreen: state });
		window.dispatchEvent(new Event("resize"));
		if (state && this.props.settings.controllerView) {
			this.props.updateSettings({ controllerView: false });
		} else if (!state && !this.props.settings.controllerView) {
			this.props.updateSettings({ controllerView: true });
		}
	}

	resetSettings() {
		tools.deleteAllCookies();
		localforage.clear().then(function () {
			location.reload(true);
		});
	}

	switchTabs(sNum) {

		// if (this.state.tab == tab) {
		// 	return;
		// }

		if (sNum == 2) {
			window.location = "https://twitchplaysnintendoswitch.com/about";
			// history.replaceState("data", "About", "/about");
			// this.setState({});
			// this.props.reRender();
			// return;
		}
		if (sNum == 3) {
			window.location = "https://twitchplaysnintendoswitch.com/FAQ";
			// history.replaceState("data", "FAQ", "/FAQ");
			// this.setState({});
			// this.props.reRender();
		}

		if (!this.props.userInfo.loggedIn) {
			swal("You have to login / register first!");
			return;
		}

		// first clean up / destroy instances before we switch:
		socket.emit("leave", `stream${sNum}`);
		if (streams[this.props.settings.streamNumber]) {
			streams[this.props.settings.streamNumber].pause();
		}

		// actually switch:
		if (sNum != this.props.settings.streamNumber) {
			if (sNum == 0) {
				this.props.updateSettings({currentPlayer: 0});
			} else if (sNum == 1) {
				this.props.updateSettings({currentPlayer: 4});
			}
			let players = [0, 1, 2, 3, 4, 5, 6, 7];
			players.forEach((cNum) => {
				this.props.leavePlayerControlQueue(cNum);
			});
		}

		this.props.updateSettings({streamNumber: sNum});

		socket.emit("join", `stream${sNum}`);
		// streams[sNum].resume(document.getElementById(`videoCanvas${sNum}`));
		if (!!streams[sNum]) {
			streams[sNum].resume(document.getElementById(`videoCanvas${sNum}`));
		}

		// https://github.com/yoannmoinet/nipplejs/issues/39
		// force joysticks to recalculate the center:
		window.dispatchEvent(new Event("resize"));
		setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 5000);
	}

	sendControllerState() {

		if (!this.init) {
			this.init = true;
			this.oldInputState = JSON.stringify(inputHandler.getState());
		}

		let newInputState = JSON.stringify(inputHandler.getState());

		if (newInputState == this.oldInputState) {
			return;
		} else {
			this.oldInputState = newInputState;
		}

		if (inputHandler.currentInputMode == "keyboard" && !this.props.settings.keyboardControls) {
			return;
		}
		if (inputHandler.currentInputMode == "controller" && !this.props.settings.controllerControls) {
			return;
		}
		if (inputHandler.currentInputMode == "touch" && !this.props.settings.touchControls) {
			return;
		}

		// return if chat is focused:
		if (document.activeElement === document.getElementById("messageBox")) {
			return;
		}
		// return if trying to re-map inputs:
		if (this.props.settings.modal == "INPUT_MAPPER") {
			return;
		}

		// if not in the queue, attempt to join it:
		if (this.props.controlQueues[this.props.settings.currentPlayer].indexOf(this.props.userInfo.userid) == -1) {
			// let players = [0, 1, 2, 3, 4, 5, 6, 7];
			// players.splice(players.indexOf(this.props.settings.currentPlayer), 1);
			// players.forEach((cNum) => {
			// 	socket.emit("leaveQueue", cNum);
			// });
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
			...inputHandler.getState(),
			cNum: -1,
		};

		for (let i = 0; i < this.props.controlQueues.length; i++) {
			if (this.props.controlQueues[i][0] == this.props.userInfo.userid) {
				obj.cNum = i;
			}
		}
		if (obj.cNum == -1) {
			obj.cNum = this.props.settings.currentPlayer;
		}

		let buttons = (obj.btns).toString(2);
		buttons = ("0".repeat(16)).substr(buttons.length) + buttons;

		console.log(obj.cNum, buttons,
		tools.fixedLengthString(obj.axes[0], "0", 3), tools.fixedLengthString(obj.axes[1], "0", 3),
		tools.fixedLengthString(obj.axes[2], "0", 3), tools.fixedLengthString(obj.axes[3], "0", 3),
		tools.fixedLengthString(obj.axes[4], "0", 3), tools.fixedLengthString(obj.axes[5], "0", 3));

		socket.emit("sendControllerState", obj);
	}

	getTheme() {
		// default:
		let theme = {
			typography: {
				useNextVariants: true,
			},
			palette: {
				type: "dark",
				primary: {
					main: "#2181ff", // #2181ff
				},
				secondary: {
					main: "#ff3b3b",
				}
			}
		};
		switch (this.props.settings.theme) {
			case "light":
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
				break;
			case "dark":
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
				break;
			case "mint":
				theme = merge(theme, {
					palette: {
						type: "light",
						primary: {
							main: "#16d0f4",
						},
						secondary: {
							main: "#24d2ac",
						},
						background: {
							paper: "#5ae097",
						},
					}
				});
				break;
		}
		return createMuiTheme(theme);
	}

	shouldComponentUpdate(nextProps, nextState) {

		if (JSON.stringify(this.props.userInfo) != JSON.stringify(nextProps.userInfo)) {
			return true;
		}

		if (this.props.settings.volume != nextProps.settings.volume) {
			return false; // test
		}

		if (this.props.settings.theme != nextProps.settings.theme) {
			return true;
		}

		// all settings:
		if (JSON.stringify(this.props.settings) != JSON.stringify(nextProps.settings)) {
			return true;
		}

		// if (this.state.tab != nextState.tab) {
		// 	return true;
		// }

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

				<Switch>

					<Route exact path="/">

						<Container>

							<NavTabs value={this.props.settings.streamNumber} handleChange={this.switchTabs}/>

							<LoginArea
								// handleUsernameChange={this.onUsernameChange}
								handleLogout={this.logout}
								handleLogin={() => {swal("This is broken, just register for now.");this.props.updateSettings({ modal: "LOGIN" })}}
								handleRegister={() => {this.props.updateSettings({ modal: "REGISTER" })}}
								handleAccount={() => {this.props.updateSettings({ modal: "ACCOUNT" })}}/>

							<Picture tab={this.props.settings.streamNumber}/>

							<Chat hide={this.props.settings.hideChat}/>

							<Paper id="barUnderTheStream">

								<PlayerInfo/>

								<Paper id="settings" elevation={0}>

									<Paper id="checkboxSettings" className="settingsPanel" elevation={5}>
										<List>
											<ListItem>
												<MyCheckbox text={"Enable Keyboard Controls"} handleChange={this.toggleKeyboardControls} checked={this.props.settings.keyboardControls}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Enable Controller Controls"} handleChange={this.toggleControllerControls} checked={this.props.settings.controllerControls}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Enable Controller View"} handleChange={this.toggleControllerView} checked={this.props.settings.controllerView}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.props.settings.audioThree}/>
											</ListItem>
											<ListItem>
												<ThemeSelector/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Enable Fullscreen Mode"} handleChange={this.toggleFullscreen} checked={this.props.settings.fullscreen}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Enable Largescreen Mode"} handleChange={this.toggleLargescreen} checked={this.props.settings.largescreen}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Enable Mouse Controls"} handleChange={this.toggleMouseControls} checked={this.props.settings.mouseControls}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Enable Touch Controls"} handleChange={this.toggleTouchControls} checked={this.props.settings.touchControls}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Analog Stick Mode"} handleChange={this.toggleAnalogStickMode} checked={this.props.settings.analogStickMode}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"DPad Swap"} handleChange={this.toggleDpadSwap} checked={this.props.settings.dpadSwap}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"3Ds config"} handleChange={this.toggleTDSConfig} checked={this.props.settings.TDSConfig}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Hide Chat"} handleChange={(state) => {this.props.updateSettings({ hideChat: state })}} checked={this.props.settings.hideChat}/>
											</ListItem>
											<ListItem>
												<MyCheckbox text={"Hide Nav Bar"} handleChange={(state) => {this.props.updateSettings({ hideNav: state })}} checked={this.props.settings.hideNav}/>
											</ListItem>
										</List>
									</Paper>

									<Paper id="generalSettings" className="settingsPanel" elevation={5}>
										<ListItemText>General Settings</ListItemText>
										<hr/>

										{/* <ListItemText id="deadzone">Stick Deadzone: {this.props.settings.deadzone}</ListItemText>
										<div className="mysliderContainer">
											<MySlider min={5} max={110} step={1} value={this.props.settings.deadzone}
												handleChange={(value) => {this.props.updateSettings({deadzone: value})}}/>
										</div> */}

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

									{/* <Paper id="laglessSettingsContainer" className="settingsPanel" elevation={0}>

										<Paper id="lagless1Settings" className="laglessSettings" elevation={3}>
											<ListItemText>Lagless 1 Settings</ListItemText>
											<hr/>
											<ListItemText>Quality: {this.state.lagless1.quality}</ListItemText>
											<div className="mysliderContainer">
												<MySlider min={20} max={60} step={1} delay={1000} value={this.state.lagless1.quality}
													handleAfterChange={(value) => {socket.emit("lagless1Settings", {quality: parseInt(value)});}}/>
											</div>
											<ListItemText>Scale: {this.state.lagless1.scale}</ListItemText>
											<div className="mysliderContainer">
												<MySlider min={20} max={50} step={5} delay={1000} value={this.state.lagless1.scale}
													handleAfterChange={(value) => {socket.emit("lagless1Settings", {scale: parseInt(value)});}}/>
											</div>
											<ListItemText>FPS: {this.state.lagless1.framerate}</ListItemText><br/>
											<div className="mysliderContainer">
												<MySlider min={1} max={15} step={1} delay={1000} value={this.state.lagless1.framerate}
													handleAfterChange={(value) => {socket.emit("lagless1Settings", {framerate: parseInt(value)});}}/>
											</div>
										</Paper>

										<Paper id="lagless2Settings" className="laglessSettings" elevation={3}>
											<ListItemText>Lagless 2 Settings</ListItemText>
											<hr/>

											<ListItemText>FPS: {this.state.lagless2.framerate}</ListItemText>
											<ListItemText>Bitrate: {this.state.lagless2.videoBitrate}</ListItemText>
											<div className="mysliderContainer">
												<MySlider min={0} max={2} step={0.05} delay={1000} value={this.state.lagless2.videoBitrate}
													handleAfterChange={(value) => {socket.emit("lagless2Settings", {videoBitrate: parseFloat(value)});}}/>
											</div>
											<ListItemText>Scale: {this.state.lagless2.scale}</ListItemText>
											<div className="mysliderContainer">
												<MySlider min={100} max={540} step={1} delay={1000} value={this.state.lagless2.scale}
													handleAfterChange={(value) => {socket.emit("lagless2Settings", {scale: parseInt(value)});}}/>
											</div>
										</Paper>

										<Paper id="lagless3Settings" className="laglessSettings" elevation={3}>
											<ListItemText>Lagless 3 Settings</ListItemText>
											<hr/>

											<ListItemText>FPS: {this.state.lagless3.framerate}</ListItemText>
											<ListItemText>Bitrate: {this.state.lagless3.videoBitrate}</ListItemText>
											<div className="mysliderContainer">
												<MySlider min={0} max={2} step={0.05} delay={1000} value={this.state.lagless3.videoBitrate}
													handleAfterChange={(value) => {socket.emit("lagless3Settings", {videoBitrate: parseFloat(value)});}}/>
											</div>
											<ListItemText>Scale: {this.state.lagless3.scale}</ListItemText>
											<div className="mysliderContainer">
												<MySlider min={100} max={540} step={1} delay={1000} value={this.state.lagless3.scale}
													handleAfterChange={(value) => {socket.emit("lagless3Settings", {scale: parseInt(value)});}}/>
											</div>
										</Paper>
									</Paper> */}

									<Paper id="waitlistContainer" className="settingsPanel" elevation={5}>
										<Waitlist/>
									</Paper>
								</Paper>
							</Paper>

							<ModalConductor
								currentModal={this.props.settings.modal}
								handleClose={() => {this.props.updateSettings({ modal: null })}}/>
						</Container>
					</Route>

					<Route path="/about">
						<About/>
					</Route>

					<Route path="/FAQ">
						<FAQ/>
					</Route>

				</Switch>


			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		controlQueues: state.players.controlQueues,
		userInfo: state.userInfo,
		settings: state.settings,
		// todo: modal
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings))
		},
		leavePlayerControlQueue: (controllerNumber) => {
			dispatch(leavePlayerControlQueue(controllerNumber))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

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

// todo: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
$(window).resize(_.throttle((event) => {
	// console.log("resizing.");
	// hack:
	// todo: not this:
	$("#videoCanvas2").outerHeight($("#videoCanvas2").outerWidth() * (9 / 16));
	$("#twitchVideo").outerHeight($("#twitchVideo").outerWidth() * (9 / 16));

	$("#chat").outerHeight(0);
	$("#chat").outerHeight($("#picture").outerHeight());

	// for (let i = 0; i < resizers.length; i++) {
	// 	resizers[i].resize();
	// }
}, 1000));

/* FORCE HTTPS */
if (location.protocol != "https:") {
	location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

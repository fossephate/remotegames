// react:
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Router, Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

import { changeUsername, updateClientInfo } from "src/actions/clientInfo.js";
import { updateSettings } from "src/actions/settings.js";
import { leavePlayerControlQueue, joinPlayerControlQueue } from "src/actions/players.js";

// redux-saga:
import createSagaMiddleware from "redux-saga";
import handleActions from "src/sagas";
import handleEvents from "src/sockets";

// main components:
import LoginArea from "src/components/LoginArea.jsx";
import NavTabs from "src/components/NavTabs.jsx";
import Picture from "src/components/Picture.jsx";
import Chat from "src/components/Chat/Chat.jsx";
import StreamInfo from "src/components/StreamInfo.jsx";

// loading circle:
// import LoadingCircle from "src/components/LoadingCircle.jsx";

// components:

// import Waitlist from "src/components/Waitlist.jsx";
// import ThemeSelector from "src/components/ThemeSelector.jsx";

// secondary components:

// modals:
import LoginModal from "src/components/Modals/LoginModal.jsx";
import RegisterModal from "src/components/Modals/RegisterModal.jsx";
import AccountModal from "src/components/Modals/AccountModal.jsx";
import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// import { Client } from "./parsec/src/client.js";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:
// jquery:
let $ = require("jquery");
window.$ = $;

// input handler:
import InputHandler from "libs/InputHandler/InputHandler.js";

// const textFitPercent = require("js/textfitpercent.js");
import { deleteAllCookies, fixedLengthString, getStickString } from "libs/tools.js";
import localforage from "localforage";
window.localforage = localforage;
import swal from "sweetalert2";
window.swal = swal;
import { throttle } from "lodash";
import socketio from "socket.io-client";

// rr:
import JSMpeg from "libs/jsmpeg.min.js";
import Lagless2 from "libs/lagless/lagless2.js";
// import Lagless4 from "libs/lagless/lagless4.js";
import LaglessAudio from "libs/lagless/laglessAudio.js";


let sendInputTimer;
let isMobile = false;

// let settings = {};

// swal("stream is down right now, don't put anything in #bug-reports.");

/* MOBILE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
// check if on mobile
if (
	/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
		navigator.userAgent,
	) ||
	/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
		navigator.userAgent.substr(0, 4),
	)
) {
	isMobile = true;
}

// jss:
const styles = (theme) => ({
	root: {
		padding: "1%",
		display: "grid",
		gridTemplateColumns: "minmax(50%, 75%) minmax(100px, 25%)",
		gridTemplateAreas: `
			"nav login"
			"picture picture"
			"chat chat"
			"info info"`,
		width: "100%",
		gridGap: "5px",
	},
	[device.tablet]: {
		root: {
			gridTemplateColumns: "minmax(50%, 75%) minmax(300px, 25%)",
			gridTemplateAreas: `
				"nav login"
				"picture chat"
				"info info"`,
		},
	},
	[device.laptop]: {
		root: {},
	},
});

class Stream extends Component {
	constructor(props) {
		super(props);


		this.afkTime = 1000 * 60 * 60; // 1 hour
		this.afkTimer = null;
		this.laglessAudio = null;
		this.streams = [];
		this.socket = null;
		this.accountServerConnection = this.props.accountServerConnection;

		// this.exitFullscreen = this.exitFullscreen.bind(this);

		this.sendControllerState = this.sendControllerState.bind(this);
		this.afk = this.afk.bind(this);

		this.state = {};

		this.inputHandler = new InputHandler(isMobile);
	}

	// static getDerivedStateFromProps(props, state) {
	// // ...
	// }

	componentDidMount() {

		this.accountServerConnection.on("streamInfo", (data) => {

			this.socket = socketio("https://remotegames.io", {
				path: `/${data.hostServerPort}/socket.io`,
				transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
			});

			// listen to events and dispatch actions:
			handleEvents(this.socket, this.props.dispatch);

			let socket2 = this.socket;

			// handle outgoing events & listen to actions:
			// and maybe dispatch more actions:
			this.props.sagaMiddleware.run(handleActions, {
				socket: socket2,
			});


			// lagless setup:
			/* switch 2.0 */
			this.streams.push(
				new Lagless2("https://remotegames.io", { path: "/8005/socket.io", audio: true }),
			);
			setTimeout(() => {
				if (!this.props.clientInfo.loggedIn) {
					swal("You have to login / register first!");
					return;
				}
				this.streams[0].resume(document.getElementById("videoCanvas"));
			}, 3000);
			// let videoSocket = io("https://remotegames.io", {
			// 	path: "/8002/socket.io",
			// 	transports: ["websocket"],
			// });
			// videoSocket.on("videoData", (data) => {
			// 	if (!streams[0].player.source) {
			// 		return;
			// 	}
			// 	streams[0].player.source.onMessage(data);
			// });

			// streams.push(new Lagless4(socket));

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
					// for (let i = 0; i < streams.length; i++) {}
					streams[0].player.volume = this.props.settings.volume / 100;
				} else {
					laglessAudio.audio.volume = this.props.settings.volume / 100;
					streams[0].player.volume = 0;
				}
			}, 2000);

		});

		this.accountServerConnection.emit("getStreamInfo", { username: this.props.match.params.username});

		this.afkTimer = setTimeout(this.afk, this.afkTime);

		// save settings on close:
		/* ON CLOSE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		// window.addEventListener("beforeunload", () => {
		window.onbeforeunload = () => {
			console.log("saving settings");
			localforage.setItem("settings", JSON.stringify(this.props.settings));
			return null;
		};

		/* AUTHENTICATION */

		// socket.on("needToLogIn", () => {
		// 	swal("You need to log in!");
		// 	setTimeout(() => {
		// 		deleteAllCookies();
		// 		location.reload(true);
		// 	}, 1000);
		// });

		// fullscreen:
		document.addEventListener("webkitfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("mozfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("fullscreenchange", this.exitFullscreen, false);
		document.addEventListener("MSFullscreenChange", this.exitFullscreen, false);

		// lagless setup:



		sendInputTimer = setInterval(() => {
			if (!this.props.clientInfo.loggedIn) {
				return;
			}
			this.inputHandler.pollDevices();
			this.sendControllerState();
		}, 1000 / 120);

		window.addEventListener(
			"keydown",
			(event) => {
				// escape, f11
				if ([27, 122].indexOf(event.keyCode) > -1) {
					event.preventDefault();
					$("body").removeClass("hideScrollbar");

					// turn off mouse controls:
					this.inputHandler.mouse.toggle(false);
				}
				// prevent space bar scrolling:
				// if ([32].indexOf(event.keyCode) > -1) {
				// 	event.preventDefault();
				// }
			},
			false,
		);
	}


	componentWillUnmount() {

	}


	afk() {
		for (let i = 0; i < this.streams.length; i++) {
			this.streams[i].pause();
		}
		swal({
			title: "Are you still there?",
			text: "You've been AFK for an hour.",
			type: "warning",
			// showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "No, I'm still here.",
		}).then((result) => {
			if (result.value) {
				// swal(
				// 	"Deleted!",
				// 	"Your file has been deleted.",
				// 	"success"
				// );
				window.location.reload();
			}
		});
	}

	// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
	exitFullscreen() {
		if (
			!document.webkitIsFullScreen &&
			!document.mozFullScreen &&
			!document.msFullscreenElement
		) {
			// this.toggleFullscreen(false);

			// from checkbox settings:
			// todo: not this:
			console.log("exiting fullscreen");
			$("body").removeClass("hideScrollbar");
			this.props.updateSettings({
				fullscreen: false,
				largescreen: false,
				controllerView: true,
				hideChat: false,
				hideNav: false,
			});

			// turn off mouse controls:
			this.inputHandler.mouse.toggle(false);
		}
		window.dispatchEvent(new Event("resize"));
	}

	resetSettings() {
		deleteAllCookies();
		// localforage.clear().then(() => {
		// 	window.location.href = "https://remotegames.io";
		// });
	}

	sendControllerState() {
		if (!this.init) {
			this.init = true;
			this.oldInputState = JSON.stringify(inputHandler.getState());
		}

		if (!inputHandler.changed) {
			return;
		} else {
			inputHandler.changed = false;
		}

		if (window.banned) {
			return;
		}

		clearTimeout(this.afkTimer);
		this.afkTimer = setTimeout(this.afk, this.afkTime);

		if (
			inputHandler.currentInputMode == "keyboard" &&
			!this.props.settings.keyboardControls
		) {
			return;
		}
		if (
			inputHandler.currentInputMode == "controller" &&
			!this.props.settings.controllerControls
		) {
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
		if (window.location.pathname == "/remap") {
			return;
		}

		// if not in the queue, attempt to join it:
		if (
			this.props.controlQueues[this.props.settings.currentPlayer].indexOf(
				this.props.clientInfo.userid,
			) == -1
		) {
			this.props.joinPlayerControlQueue(this.props.settings.currentPlayer);
		}

		if (
			this.props.controlQueues[this.props.settings.currentPlayer].indexOf(
				this.props.clientInfo.userid,
			) > 0 &&
			this.props.controlQueues[this.props.settings.currentPlayer].length > 0
		) {
			// new Noty({
			// 	theme: "mint",
			// 	type: "warning",
			// 	text: "It's not your turn yet!",
			// 	timeout: 250,
			// }).show();
			return;
		}

		if (!this.props.clientInfo.loggedIn) {
			// new Noty({
			// 	theme: "mint",
			// 	type: "warning",
			// 	text: "You aren't logged in!",
			// 	timeout: 500,
			// 	sounds: {
			// 		volume: 0.5,
			// 		sources: ["https://remotegames.io/sounds/ding.wav"],
			// 		conditions: ["docVisible"],
			// 	},
			// }).show();
			return;
		}

		let obj = {
			...inputHandler.getState(),
			cNum: -1,
		};

		// for (let i = 0; i < this.props.controlQueues.length; i++) {
		// 	if (this.props.controlQueues[i][0] == this.props.clientInfo.userid) {
		// 		obj.cNum = i;
		// 	}
		// }
		if (obj.cNum == -1) {
			obj.cNum = this.props.settings.currentPlayer;
		}

		let buttons = obj.btns.toString(2);
		buttons = "0".repeat(18).substr(buttons.length) + buttons;

		console.log(
			obj.cNum,
			buttons,
			getStickString(obj.axes[0]),
			getStickString(obj.axes[1]),
			getStickString(obj.axes[2]),
			getStickString(obj.axes[3]),
			getStickString(obj.axes[4]),
			getStickString(obj.axes[5]),
			Math.random().toFixed(3),
			// fixedLengthString(obj.axes[0], "0", 3),
			// fixedLengthString(obj.axes[1], "0", 3),
			// fixedLengthString(obj.axes[2], "0", 3),
			// fixedLengthString(obj.axes[3], "0", 3),
			// fixedLengthString(obj.axes[4], "0", 3),
			// fixedLengthString(obj.axes[5], "0", 3),
		);
		// console.log("0 0 0\n 0 9 0\n 0 0 0");

		// let s1x = getStickString(obj.axes[0]);
		// let s1y = getStickString(obj.axes[1]);
		// console.log(` 0 ${s1y[2]} 0\n ${s1x[0]} 0 ${s1x[2]}\n 0 ${s1y[0]} 0`);

		socket.emit("sendControllerState", obj);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (JSON.stringify(this.props.clientInfo) != JSON.stringify(nextProps.clientInfo)) {
			return true;
		}

		if (this.props.settings.volume != nextProps.settings.volume) {
			return false;
		}

		if (this.props.settings.theme != nextProps.settings.theme) {
			return true;
		}

		if (this.props.settings.streamNumber != nextProps.settings.streamNumber) {
			return true;
		}

		if (JSON.stringify(this.props.location) != JSON.stringify(nextProps.location)) {
			return true;
		}

		// all settings:
		if (JSON.stringify(this.props.settings) != JSON.stringify(nextProps.settings)) {
			return false;
		}

		if (this.state != nextState) {
			return true;
		}

		// console.log(nextProps);
		return false;
	}

	render() {
		console.log("re-rendering stream.");

		const { classes } = this.props;

		if (window.location.pathname == "/reset") {
			this.resetSettings();
			swal(
				"Try logging in again, if it doesn't work, try clicking the reset all settings button and try again.",
			);
		}

		return (
			<div className={classes.root}>
				<NavTabs history={this.props.history} />
				<LoginArea />
				<Picture tab={this.props.settings.streamNumber} />
				<Chat hide={this.props.settings.hideChat} />
				<StreamInfo />

				{/* selects the first matching path: */}
				<Switch>
					<Route
						path="/login"
						render={(props) => {
							return <LoginModal {...props} />;
						}}
					/>
					<Route
						path="/register"
						render={(props) => {
							return <RegisterModal {...props} />;
						}}
					/>
					<Route
						path="/account"
						render={(props) => {
							return <AccountModal {...props} />;
						}}
					/>
					<Route
						path="/remap"
						render={(props) => {
							return <InputMapperModal {...props} inputHandler={inputHandler} />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		controlQueues: state.players.controlQueues,
		clientInfo: state.clientInfo,
		settings: state.settings,
		playerCount: state.players.count,
		// todo: modal
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings));
		},
		leavePlayerControlQueue: (controllerNumber) => {
			dispatch(leavePlayerControlQueue(controllerNumber));
		},
		joinPlayerControlQueue: (controllerNumber) => {
			dispatch(joinPlayerControlQueue(controllerNumber));
		},
		updateClientInfo: (clientInfo) => {
			dispatch(updateClientInfo(clientInfo));
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(Stream);

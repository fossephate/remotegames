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
// import handleStreamActions from "src/sagas";
import handleStreamActions from "src/sagas/stream";
import handleStreamEvents from "src/sockets/stream";

// main components:
import LoginArea from "src/components/LoginArea.jsx";
import NavTabs from "src/components/Stream/NavTabs.jsx";
import Picture from "src/components/Stream/Picture.jsx";
import Chat from "src/components/Stream/Chat/Chat.jsx";
import StreamInfo from "src/components/Stream/StreamInfo.jsx";

// loading circle:
// import LoadingCircle from "src/components/LoadingCircle.jsx";

// components:

// import Waitlist from "src/components/Waitlist.jsx";
// import ThemeSelector from "src/components/ThemeSelector.jsx";

// secondary components:

// modals:
// import LoginModal from "src/components/Modals/LoginModal.jsx";
// import RegisterModal from "src/components/Modals/RegisterModal.jsx";
import LoginRegisterModal from "src/components/Modals/LoginRegisterModal.jsx";
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
import Cookie from "js-cookie";

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

// swal("stream is down right now, don't put anything in #bug-reports.");

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
		window.streams = this.streams;
		this.socket = null;
		this.accountServerConnection = this.props.accountServerConnection;

		this.exitFullscreen = this.exitFullscreen.bind(this);

		this.sendControllerState = this.sendControllerState.bind(this);
		this.afk = this.afk.bind(this);
		this.start = this.start.bind(this);

		this.state = {};

		this.inputHandler = new InputHandler(false);
	}

	start(data) {
		this.socket = socketio(`https://${data.hostServerIP}`, {
			path: `/${data.hostServerPort}/socket.io`,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		// listen to events and dispatch actions:
		handleStreamEvents(this.socket, this.props.store.dispatch);
		// handle outgoing events & listen to actions:
		// and maybe dispatch more actions:
		this.props.sagaMiddleware.run(handleStreamActions, {
			socket: this.socket,
			dispatch: this.props.store.dispatch,
		});


		// lagless setup:
		/* switch 2.0 */
		this.streams.push(
			new Lagless2(`https://${data.videoServerIP}`, { path: `/${data.videoServerPort}/socket.io`, audio: true }),
		);
		setTimeout(() => {
			if (!this.props.clientInfo.loggedIn) {
				swal("You have to login / register first!");
				return;
			}
			this.streams[0].resume(document.getElementById("videoCanvas"));
		}, 3000);

		/* AUDIO WEBRTC @@@@@@@@@@@@@@@@ */
		this.laglessAudio = new LaglessAudio(this.socket);

		if (this.props.settings.audioThree) {
			this.laglessAudio.resume();
		}

		// for (let i = 0; i < streams.length; i++) {
		// 	streams[i].pause();
		// }

		/* AUDIO SWITCHING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
		setInterval(() => {
			// hack:
			// todo: not this:
			if (!this.props.settings.audioThree) {
				this.laglessAudio.audio.volume = 0;
				this.streams[0].player.volume = this.props.settings.volume / 100;
			} else {
				this.laglessAudio.audio.volume = this.props.settings.volume / 100;
				this.streams[0].player.volume = 0;
			}
		}, 2000);
	}

	componentDidMount() {

		// let authToken = Cookie.get("RemoteGames");
		// if (authToken) {
		// 	this.accountServerConnection.emit("authenticate", {
		// 		authToken: authToken,
		// 		usernameIndex: 0,
		// 		socketid: 1,
		// 	}, (data) => {
		// 		if (data.success) {
		// 			console.log(data);
		// 			this.props.updateClientInfo({ ...data.clientInfo, authToken: authToken, loggedIn: true });
		// 		} else {
		// 			alert(`AUTHENTICATION_FAILURE: ${data.reason}`);
		// 			// remove the authToken if it doesn't work:
		// 			if (data.reason === "ACCOUNT_NOT_FOUND") {
		// 				Cookie.remove("RemoteGames");
		// 				this.props.updateClientInfo({ authToken: null });
		// 			}
		// 		}
		// 	});
		// }

		this.accountServerConnection.emit("getStreamInfo", { username: this.props.match.params.username}, (data) => {

			if (!data.success) {
				alert(data.reason);
				return;
			}

			this.start(data);
		});

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



		this.sendInputTimer = setInterval(() => {
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
			this.oldInputState = JSON.stringify(this.inputHandler.getState());
		}

		if (!this.inputHandler.changed) {
			return;
		} else {
			this.inputHandler.changed = false;
		}

		if (window.banned) {
			return;
		}

		clearTimeout(this.afkTimer);
		this.afkTimer = setTimeout(this.afk, this.afkTime);

		if (
			this.inputHandler.currentInputMode == "keyboard" &&
			!this.props.settings.keyboardControls
		) {
			return;
		}
		if (
			this.inputHandler.currentInputMode == "controller" &&
			!this.props.settings.controllerControls
		) {
			return;
		}
		if (this.inputHandler.currentInputMode == "touch" && !this.props.settings.touchControls) {
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
			...this.inputHandler.getState(),
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

		this.socket.emit("sendControllerState", obj);
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
					{/* <Route
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
					/> */}
					<Route
						path="/(login|register)"
						render={(props) => {
							return <LoginRegisterModal {...props} />;
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
							return <InputMapperModal {...props} inputHandler={this.inputHandler} />;
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		controlQueues: state.stream.players.controlQueues,
		clientInfo: state.clientInfo,
		settings: state.settings,
		playerCount: state.stream.players.count,
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

// todo: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
// $(window).resize(
// 	_.throttle((event) => {
// 		$("#chat").outerHeight(0);
// 		$("#chat").outerHeight($("#picture").outerHeight());
// 	}, 1000),
// );

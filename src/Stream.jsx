// react:
import React, { Component } from "react";

// react-router:
import { Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

import { updateClientInfo } from "src/actions/clientInfo.js";
import { updateSettings } from "src/actions/settings.js";
import { updateMessages } from "src/actions/chat.js";
import { leavePlayerControlQueue, joinPlayerControlQueue } from "src/actions/players.js";
import { updateStreamInfo } from "src/actions/info.js";

// redux-saga:
// import spawn from "redux-saga";
import handleStreamActions from "src/sagas/stream";
import handleStreamEvents from "src/sockets/stream";

// main components:
import StreamsAppBar from "src/components/Streams/StreamsAppBar.jsx";
import Picture from "src/components/Stream/Picture.jsx";
import Chat from "src/components/Stream/Chat/Chat.jsx";
import StreamInfo from "src/components/Stream/StreamInfo.jsx";

// components:

// secondary components:

// material ui:
import { withStyles } from "@material-ui/core/styles";
// import { Snackbar } from "@material-ui/core";

import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";

// import { Client } from "./parsec/src/client.js";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// input handler:
import InputHandler from "libs/InputHandler/InputHandler.js";

import { deleteAllCookies, getStickString } from "libs/tools.js";
import localforage from "localforage";
window.localforage = localforage;
import socketio from "socket.io-client";

// rr:
import Lagless2 from "libs/lagless/lagless2.js";
import Lagless4 from "libs/lagless/lagless4.js";

// jss:
const styles = {
	root: {
		display: "grid",
		gridTemplateColumns: "minmax(50%, 75%) minmax(100px, 25%)",
		gridTemplateAreas: `
			"nav login"
			"picture picture"
			"chat chat"
			"info info"`,
		width: "100%",
		gridGap: "5px",
		// accomodate for grid gap:
		padding: "0px 5px 5px 5px",
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
};

class Stream extends Component {
	constructor(props) {
		super(props);

		this.afkTime = 1000 * 60 * 60; // 1 hour
		this.afkTimer = null;
		this.stream = null;
		// window.stream = this.stream;
		this.hostConnection = null;

		this.setStreamVolume = this.setStreamVolume.bind(this);
		this.exitFullscreen = this.exitFullscreen.bind(this);
		this.sendControllerState = this.sendControllerState.bind(this);
		this.afk = this.afk.bind(this);
		this.recieveStream = this.recieveStream.bind(this);

		this.state = {};

		this.inputHandler = new InputHandler(false);
		// todo:
		window.inputHandler = this.inputHandler; // for lagless canvas
	}

	recieveStream(data) {
		this.props.updateStreamInfo({ ...data });

		if (this.stream) {
			this.stream.pause();
		}
		if (this.hostConnection) {
			this.hostConnection.removeAllListeners();
			this.hostConnection.destroy();
		}

		setTimeout(() => {
			if (!this.props.clientInfo.loggedIn) {
				alert("You have to login / register first!");
				return;
			}

			this.hostConnection = socketio(`https://${data.hostServerIP}`, {
				path: `/${data.hostServerPort}/socket.io`,
				transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
			});
			window.hostConnection = this.hostConnection;

			// listen to events and dispatch actions:
			handleStreamEvents(this.hostConnection, this.props.store.dispatch);
			// handle outgoing events & listen to actions:
			// and maybe dispatch more actions:
			this.props.sagaMiddleware.run(handleStreamActions, {
				socket: this.hostConnection,
				dispatch: this.props.store.dispatch,
			});

			window.sagaMiddleware = this.props.sagaMiddleware;

			if (!data.videoServerIP) {
				console.log("something went wrong, (video server IP missing)");
				return;
			}

			// lagless setup:

			if (this.props.streamType === "mpeg2") {
				this.stream = new Lagless2({
					url: `https://${data.videoServerIP}`,
					path: `/${data.videoServerPort}/socket.io`,
					audio: true,
					video: true,
				});
			} else if (this.props.streamType === "webRTC") {
				this.stream = new Lagless4({
					url: `https://${data.videoServerIP}`,
					path: `/${data.videoServerPort}/socket.io`,
				});
				this.stream.run();
			} else {
				alert("stream type error: " + this.props.streamType);
			}

			window.stream = this.stream;
			this.setStreamVolume(this.props);
			setTimeout(() => {
				this.setStreamVolume(this.props);
			}, 5000);

			if (this.props.streamType === "mpeg2") {
				this.stream.resume(document.getElementById("canvas"));
			} else if (this.props.streamType === "webRTC") {
				this.stream.resume(document.getElementById("video"));
			}
		}, 3000);
	}

	componentDidMount() {
		this.props.accountConnection.emit(
			"getStreamInfo",
			{ username: this.props.match.params.username },
			(data) => {
				if (!data.success) {
					alert(data.reason);
					return;
				}
				this.recieveStream(data);
			},
		);

		this.afkTimer = setTimeout(this.afk, this.afkTime);

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

		// todo: remove this when component unmounts:
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
				// prevent arrow key & spacebar scrolling:
				if ([38, 40, 32].indexOf(event.keyCode) > -1) {
					// check if chat isn't focused:
					if (
						document.activeElement !== document.getElementById("messageBox") &&
						document.activeElement.type !== "textarea" &&
						document.activeElement.type !== "text"
					) {
						event.preventDefault();
					}
				}
				// escape:
				if ([27].indexOf(event.keyCode) > -1) {
					document.exitPointerLock();
				}
			},
			false,
		);
	}

	componentWillUnmount() {
		clearInterval(this.sendInputTimer);
		if (this.stream) {
			this.stream.pause();
		}
		if (this.hostConnection) {
			this.hostConnection.removeAllListeners();
			this.hostConnection.destroy();
		}
		this.props.updateMessages([]);

		// save settings on close:
		console.log("saving settings");
		localforage.setItem("settings", JSON.stringify(this.props.settings));
	}

	afk() {
		if (this.stream) {
			this.stream.pause();
		}
		if (this.hostConnection) {
			this.hostConnection.removeAllListeners();
			this.hostConnection.destroy();
		}
		alert("Are you still there?");
		window.location.reload();
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
		if (
			this.inputHandler.currentInputMode == "touch" &&
			!this.props.settings.touchControls
		) {
			return;
		}

		// return if chat is focused:
		// if (document.activeElement === document.getElementById("messageBox")) {
		if (
			document.activeElement.type === "text" ||
			document.activeElement.type === "textarea" ||
			document.activeElement === document.getElementById("messageBox")
		) {
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
			return;
		}

		let obj = {
			...this.inputHandler.getState(),
			cNum: -1,
		};
		obj.btns = obj.controller.btns;
		obj.axes = obj.controller.axes;

		// for (let i = 0; i < this.props.controlQueues.length; i++) {
		// 	if (this.props.controlQueues[i][0] == this.props.clientInfo.userid) {
		// 		obj.cNum = i;
		// 	}
		// }
		if (obj.cNum == -1) {
			obj.cNum = this.props.settings.currentPlayer;
		}

		let buttons = obj.controller.btns.toString(2);
		buttons = "0".repeat(18).substr(buttons.length) + buttons;

		if (!this.props.settings.realKeyboardMouse) {
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
		} else {
			// console.log(obj.keys, obj.mouse, Math.random().toFixed(3));
		}

		// let s1x = getStickString(obj.axes[0]);
		// let s1y = getStickString(obj.axes[1]);
		// console.log(` 0 ${s1y[2]} 0\n ${s1x[0]} 0 ${s1x[2]}\n 0 ${s1y[0]} 0`);

		if (this.hostConnection) {
			this.hostConnection.emit("sendControllerState", obj);
		} else {
			console.log("the socket is null!");
		}
	}

	setStreamVolume(props) {
		if (this.stream) {
			if (this.props.streamType === "mpeg2") {
				this.stream.player.volume = props.settings.volume / 100;
			} else if (this.props.streamType === "webRTC") {
			}
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		// update stream volume:
		this.setStreamVolume(nextProps);

		this.inputHandler.realMode = nextProps.settings.realKeyboardMouse;

		if (JSON.stringify(this.props.clientInfo) != JSON.stringify(nextProps.clientInfo)) {
			return true;
		}

		if (this.props.settings.hideChat != nextProps.settings.hideChat) {
			return true;
		}

		if (this.props.settings.fullscreen != nextProps.settings.fullscreen) {
			return true;
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

		return false;
	}

	render() {
		console.log("re-rendering stream.");

		const { classes } = this.props;

		if (window.location.pathname == "/reset") {
			this.resetSettings();
			alert(
				"Try logging in again, if it doesn't work, try clicking the reset all settings button and try again.",
			);
		}

		return (
			<div className={classes.root}>
				{/* <NavTabs history={this.props.history} /> */}
				<StreamsAppBar
					history={this.props.history}
					hide={this.props.settings.fullscreen}
				/>
				<Picture />
				<Chat hide={this.props.settings.hideChat} />
				<StreamInfo />

				{/* selects the first matching path: */}
				<Switch>
					{/* <Route
						path="/(login|register)"
						render={(props) => {
							return <LoginRegisterModal {...props} history={this.props.history} />;
						}}
					/> */}
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
		streamType: state.stream.info.streamType,
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
		updateMessages: (messages) => {
			dispatch(updateMessages(messages));
		},
		updateStreamInfo: (data) => {
			dispatch(updateStreamInfo(data));
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(Stream);

// react:
import React, { Component, Suspense, lazy } from "react";

// react-router:
import { Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

import { updateClient } from "shared/features/client.js";
import { updateMessages } from "shared/features/chat.js";
import { joinLeavePlayerControlQueue } from "src/features/players.js";
import { updateStreamInfo } from "src/actions/info.js";
import { updateSettings } from "src/actions/settings.js";

// redux-saga:
// import spawn from "redux-saga";
import handleStreamActions from "src/sagas/stream/index.js";
import handleStreamEvents from "src/sockets/stream/index.js";

// material ui:
import { withStyles } from "@material-ui/core/styles";
// import { Snackbar } from "@material-ui/core";

import SettingsModal from "src/components/modals/SettingsModal.jsx";

// notistack:

import { withSnackbar } from "notistack";

// main components:
import Loading from "shared/components/general/Loading.jsx";
const StreamsAppBar = lazy(() => import("src/components/streams/StreamsAppBar.jsx"));
const Picture = lazy(() => import("src/components/stream/Picture.jsx"));
const Chat = lazy(() => import("shared/components/chat/Chat.jsx"));
const StreamInfo = lazy(() => import("src/components/stream/streamInfo/StreamInfo.jsx"));

// components:

// secondary components:

// recompose:
import { compose } from "recompose";

// libs:
import { device, deleteAllCookies, getStickString } from "shared/libs/utils.js";
import InputHandler from "shared/libs/inputHandler/InputHandler.js";
import localforage from "localforage";
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
		this.hostConnection = null;

		this.state = {};

		this.inputHandler = new InputHandler();
		this.inputHandler.init();
		// todo:
		window.inputHandler = this.inputHandler; // for lagless canvas
	}

	recieveStream = (data, tryCount) => {
		this.props.updateStreamInfo({ ...data, online: true });

		if (this.stream) {
			this.stream.destroy();
		}
		if (this.hostConnection) {
			this.hostConnection.removeAllListeners();
			this.hostConnection.destroy();
		}

		// if (this.props.controllerCount === 0 && this.props.settings.controllerView) {
		// 	this.props.updateSettings({
		// 		controllerView: false,
		// 		largescreen: true,
		// 		realKeyboardMouse: true,
		// 	});
		// } else if (this.props.controllerCount > 0 && !this.props.settings.controllerView) {
		// 	this.props.updateSettings({
		// 		controllerView: true,
		// 		largescreen: false,
		// 		realKeyboardMouse: false,
		// 	});
		// }

		if (this.props.mouseEnabled && this.props.settings.controllerView) {
			this.props.updateSettings({
				controllerView: false,
				largescreen: true,
				realKeyboardMouse: true,
			});
		} else if (!this.props.mouseEnabled && !this.props.settings.controllerView) {
			this.props.updateSettings({
				controllerView: true,
				largescreen: false,
				realKeyboardMouse: false,
			});
		}

		// if (!this.props.client.loggedIn) {
		// 	if (tryCount < 3) {
		// 		setTimeout(() => {
		// 			this.recieveStream(data, tryCount + 1);
		// 		}, 1000);
		// 		return;
		// 	} else {
		// 		alert("You need to login to see the stream!");
		// 		return;
		// 	}
		// }

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

		if (this.props.videoType === "mpeg1") {
			this.stream = new Lagless2({
				url: `https://${data.videoServerIP}`,
				path: `/${data.videoServerPort}/socket.io`,
				audio: true,
				video: true,
				maxAudioLag: 0.5,
				// videoBufferSize: data.streamSettings.videoBufferSize * 1024,
				// audioBufferSize: data.streamSettings.audioBufferSize * 1024,
			});
		} else if (this.props.videoType === "webRTC") {
			this.stream = new Lagless4({
				url: `https://${data.videoServerIP}`,
				path: `/${data.videoServerPort}/socket.io`,
			});
			this.stream.run();
		} else {
			alert("video type error: " + this.props.videoType);
		}

		setTimeout(this.updateStreamCanvas, 1000);

		window.stream = this.stream;
		setTimeout(() => {
			this.setStreamVolume(this.props);
		}, 500);
		setTimeout(() => {
			this.setStreamVolume(this.props);
		}, 5000);
	};

	updateStreamCanvas = () => {
		if (this.props.videoType === "mpeg1") {
			this.stream.destroy();
			// this.stream.player.stop();
			// this.stream.pause();
			// this.stream.restart(
			// 	document.getElementById("videoCanvas"),
			// 	document.getElementById("graphicsCanvas"),
			// );
			this.stream.resume(
				document.getElementById("videoCanvas"),
				document.getElementById("graphicsCanvas"),
			);
		} else if (this.props.videoType === "webRTC") {
			this.stream.destroy();
			this.stream.resume(document.getElementById("videoCanvas"));
		}
	};

	getStreamInfo = (bypass) => {
		if (!this.props.accountConnection.connected && !bypass) {
			this.props.updateStreamInfo({ online: false });
			return;
		}

		this.props.accountConnection.emit(
			"getStreamInfo",
			{ username: this.props.match.params.username },
			(data) => {
				if (data.success) {
					this.recieveStream(data, 0);
				} else {
					// todo: 404 page
					if (data.reason === "ACCOUNT_NOT_FOUND") {
						// todo:
					}
					this.props.updateStreamInfo({
						online: false,
						exists: data.reason !== "ACCOUNT_NOT_FOUND",
					});
				}
			},
		);
	};

	componentDidMount() {
		setInterval(() => {
			if (!this.props.streamOnline) {
				this.getStreamInfo();
			}
		}, 5000);
		this.getStreamInfo(true);

		this.afkTimer = setTimeout(this.afk, this.afkTime);

		// fullscreen:
		document.addEventListener("webkitfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("mozfullscreenchange", this.exitFullscreen, false);
		document.addEventListener("fullscreenchange", this.exitFullscreen, false);
		document.addEventListener("MSFullscreenChange", this.exitFullscreen, false);

		// lagless setup:

		this.sendInputTimer = setInterval(() => {
			if (!this.props.client.loggedIn) {
				return;
			}
			this.inputHandler.pollDevices(this.props.settings.touchControls);
			this.sendControllerState();
		}, 1000 / 120);

		// todo: remove this when component unmounts:
		window.addEventListener(
			"keydown",
			(event) => {
				// escape, f11
				if ([27, 122].indexOf(event.keyCode) > -1) {
					event.preventDefault();
					// $("body").removeClass("hideScrollbar");

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
			this.stream.destroy();
			this.stream = null;
		}
		// else {
		// 	setTimeout(() => {
		// 		if (this.stream) {
		// 			this.stream.pause();
		// 			this.stream = null;
		// 		}
		// 	}, 1000);
		// 	setTimeout(() => {
		// 		if (this.stream) {
		// 			this.stream.pause();
		// 			this.stream = null;
		// 		}
		// 	}, 3000);
		// }

		for (let i = 0; i < 9; i++) {
			this.props.joinLeavePlayerControlQueue({ cNum: i, joinLeave: "leave" });
		}

		if (this.hostConnection) {
			this.hostConnection.removeAllListeners();
			this.hostConnection.destroy();
		}
		// this.props.updateMessages([]);

		// save settings on close:
		console.log("saving settings");
		localforage.setItem("settings", JSON.stringify(this.props.settings));
	}

	afk = () => {
		if (window.disableAFK) {
			return;
		}
		if (this.stream) {
			this.stream.pause();
		}
		if (this.hostConnection) {
			this.hostConnection.removeAllListeners();
			this.hostConnection.destroy();
		}
		alert("Are you still there?");
		window.location.reload();
	};

	// https://stackoverflow.com/questions/10706070/how-to-detect-when-a-page-exits-fullscreen
	exitFullscreen = () => {
		if (
			!document.webkitIsFullScreen &&
			!document.mozFullScreen &&
			!document.msFullscreenElement
		) {
			// this.toggleFullscreen(false);

			// from checkbox settings:
			// todo: not this:
			console.log("exiting fullscreen");
			// $("body").removeClass("hideScrollbar");
			this.props.updateSettings({
				fullscreen: false,
				// largescreen: false,
				// controllerView: true,
				hideChat: false,
				hideNav: false,
				mobileMode: false,
				touchControls: false,
			});

			// if (this.props.controllerCount === 0 && this.props.settings.controllerView) {
			// 	this.props.updateSettings({
			// 		controllerView: false,
			// 		largescreen: true,
			// 		realKeyboardMouse: true,
			// 	});
			// } else if (this.props.controllerCount > 0 && !this.props.settings.controllerView) {
			// 	this.props.updateSettings({
			// 		controllerView: true,
			// 		largescreen: false,
			// 		realKeyboardMouse: false,
			// 	});
			// }

			if (this.props.settings.realKeyboardMouse && this.props.settings.controllerView) {
				this.props.updateSettings({
					controllerView: false,
					largescreen: true,
				});
			} else if (
				!this.props.settings.realKeyboardMouse &&
				!this.props.settings.controllerView
			) {
				this.props.updateSettings({
					controllerView: true,
					largescreen: false,
				});
			}

			// turn off mouse controls:
			this.inputHandler.mouse.toggle(false);
		}
		window.dispatchEvent(new Event("resize"));
	};

	resetSettings() {
		deleteAllCookies();
		// localforage.clear().then(() => {
		// 	window.location.href = "https://remotegames.io";
		// });
	}

	sendControllerState = () => {
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
			this.inputHandler.currentInputMode == "touchpad" &&
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
		if (window.location.pathname.indexOf("/controls") > -1) {
			return;
		}

		if (window.location.pathname.indexOf("/settings") > -1) {
			return;
		}

		// if not in the queue, attempt to join it:
		if (
			this.props.controlQueues[this.props.settings.currentPlayer].indexOf(
				this.props.client.userid,
			) == -1
		) {
			this.props.joinLeavePlayerControlQueue({
				cNum: this.props.settings.currentPlayer,
				joinLeave: "join",
			});
		}

		// if (!this.props.loggedIn) {
		// 	this.props.enqueueSnackbar("You need to login first!", {
		// 		variant: "warning",
		// 		preventDuplicate: true,
		// 		anchorOrigin: {
		// 			vertical: "top",
		// 			horizontal: "left",
		// 		},
		// 		autoHideDuration: 1000,
		// 	});
		// }

		if (
			this.props.controlQueues[this.props.settings.currentPlayer].indexOf(
				this.props.client.userid,
			) > 0 &&
			this.props.controlQueues[this.props.settings.currentPlayer].length > 0
		) {
			this.props.enqueueSnackbar("It's not your turn yet!", {
				variant: "warning",
				preventDuplicate: true,
				anchorOrigin: {
					vertical: "top",
					horizontal: "left",
				},
				autoHideDuration: 1000,
			});
			return;
		}

		let obj = {
			...this.inputHandler.getState(),
			cNum: -1,
		};
		obj.btns = obj.controller.btns;
		obj.axes = obj.controller.axes;
		obj.keys = obj.keyboard.keys;
		// console.log(obj.keys);

		// for (let i = 0; i < this.props.controlQueues.length; i++) {
		// 	if (this.props.controlQueues[i][0] == this.props.client.userid) {
		// 		obj.cNum = i;
		// 	}
		// }
		if (obj.cNum === -1) {
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
			// console.log(obj.mouse);
		}

		// let s1x = getStickString(obj.axes[0]);
		// let s1y = getStickString(obj.axes[1]);
		// console.log(` 0 ${s1y[2]} 0\n ${s1x[0]} 0 ${s1x[2]}\n 0 ${s1y[0]} 0`);

		if (this.hostConnection) {
			this.hostConnection.emit("inputState", obj);
		} else {
			console.log("the socket is null!");
		}
	};

	setStreamVolume = (props) => {
		if (this.stream) {
			if (this.props.videoType === "mpeg1") {
				this.stream.player.volume = props.settings.volume / 100;
			} else if (this.props.videoType === "webRTC") {
			}
		}
	};

	shouldComponentUpdate(nextProps, nextState) {
		// update stream volume:
		this.setStreamVolume(nextProps);

		this.inputHandler.realMode = nextProps.settings.realKeyboardMouse;

		if (JSON.stringify(this.props.client) != JSON.stringify(nextProps.client)) {
			return true;
		}

		if (this.props.settings.hideNav != nextProps.settings.hideNav) {
			return true;
		}

		if (this.props.settings.hideChat != nextProps.settings.hideChat) {
			return true;
		}

		if (this.props.settings.controllerView != nextProps.settings.controllerView) {
			this.inputHandler.mouse.toggle(false);
			setTimeout(this.updateStreamCanvas, 500);
			return true;
		}

		if (this.props.settings.fullscreen != nextProps.settings.fullscreen) {
			return true;
		}

		if (this.props.streamOnline != nextProps.streamOnline) {
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

		if (this.state != nextState) {
			return true;
		}

		// all settings:
		if (JSON.stringify(this.props.settings) != JSON.stringify(nextProps.settings)) {
			return false;
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
				<Suspense fallback={<Loading />}>
					<StreamsAppBar
						history={this.props.history}
						hide={this.props.settings.fullscreen || this.props.settings.hideNav}
					/>
					<Picture />
					<Chat hide={this.props.settings.hideChat} />
					<StreamInfo />
				</Suspense>

				{/* selects the first matching path: */}
				<Switch>
					<Route
						path="/settings"
						render={(props) => {
							return <SettingsModal {...props} inputHandler={this.inputHandler} />;
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
		client: state.client,
		settings: state.settings,
		playerCount: state.stream.players.count,
		streamOnline: state.stream.info.online,
		videoType: state.stream.info.streamSettings.videoType,
		controllerCount: state.stream.info.streamSettings.controllerCount,
		mouseEnabled: state.stream.info.streamSettings.mouseEnabled,
		keyboardEnabled: state.stream.info.streamSettings.keyboardEnabled,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings));
		},
		joinLeavePlayerControlQueue: (data) => {
			dispatch(joinLeavePlayerControlQueue(data));
		},
		updateClient: (client) => {
			dispatch(updateClient(client));
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
	withSnackbar,
	connect(mapStateToProps, mapDispatchToProps),
)(Stream);

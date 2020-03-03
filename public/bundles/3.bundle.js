(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/Stream.jsx":
/*!************************!*\
  !*** ./src/Stream.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var features_client_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/client.js */ "./src/features/client.js");
/* harmony import */ var src_actions_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");
/* harmony import */ var src_actions_chat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/actions/chat.js */ "./src/actions/chat.js");
/* harmony import */ var src_actions_players_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/actions/players.js */ "./src/actions/players.js");
/* harmony import */ var src_actions_info_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/actions/info.js */ "./src/actions/info.js");
/* harmony import */ var src_sagas_stream__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/sagas/stream */ "./src/sagas/stream/index.js");
/* harmony import */ var src_sockets_stream__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/sockets/stream */ "./src/sockets/stream/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var src_components_modals_SettingsModal_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/components/modals/SettingsModal.jsx */ "./src/components/modals/SettingsModal.jsx");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var shared_components_general_Loading_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! shared/components/general/Loading.jsx */ "./src/shared/components/general/Loading.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
/* harmony import */ var shared_libs_inputHandler_InputHandler_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/libs/inputHandler/InputHandler.js */ "./src/shared/libs/inputHandler/InputHandler.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var libs_lagless_lagless2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! libs/lagless/lagless2.js */ "./src/libs/lagless/lagless2.js");
/* harmony import */ var libs_lagless_lagless4_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! libs/lagless/lagless4.js */ "./src/libs/lagless/lagless4.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
// import React, { Component } from "react";
 // react-router:

 // redux:






 // redux-saga:
// import spawn from "redux-saga";


 // material ui:

 // import { Snackbar } from "@material-ui/core";

 // notistack:

 // main components:


const StreamsAppBar = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(5), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, /*! src/components/streams/StreamsAppBar.jsx */ "./src/components/streams/StreamsAppBar.jsx")));
const Picture = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! src/components/stream/Picture.jsx */ "./src/components/stream/Picture.jsx")));
const Chat = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! shared/components/chat/Chat.jsx */ "./src/shared/components/chat/Chat.jsx")));
const StreamInfo = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! src/components/stream/streamInfo/StreamInfo.jsx */ "./src/components/stream/streamInfo/StreamInfo.jsx"))); // components:
// secondary components:
// recompose:

 // libs:




 // rr:


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
    padding: "0px 5px 5px 5px"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["device"].tablet]: {
    root: {
      gridTemplateColumns: "minmax(50%, 75%) minmax(300px, 25%)",
      gridTemplateAreas: `
				"nav login"
				"picture chat"
				"info info"`
    }
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]: {
    root: {}
  }
};

class Stream extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "recieveStream", (data, tryCount) => {
      this.props.updateStreamInfo({ ...data
      });

      if (this.stream) {
        this.stream.pause();
      }

      if (this.hostConnection) {
        this.hostConnection.removeAllListeners();
        this.hostConnection.destroy();
      } // if (!this.props.client.loggedIn) {
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


      this.hostConnection = socket_io_client__WEBPACK_IMPORTED_MODULE_18___default()(`https://${data.hostServerIP}`, {
        path: `/${data.hostServerPort}/socket.io`,
        transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"]
      });
      window.hostConnection = this.hostConnection; // listen to events and dispatch actions:

      Object(src_sockets_stream__WEBPACK_IMPORTED_MODULE_9__["default"])(this.hostConnection, this.props.store.dispatch); // handle outgoing events & listen to actions:
      // and maybe dispatch more actions:

      this.props.sagaMiddleware.run(src_sagas_stream__WEBPACK_IMPORTED_MODULE_8__["default"], {
        socket: this.hostConnection,
        dispatch: this.props.store.dispatch
      });
      window.sagaMiddleware = this.props.sagaMiddleware;

      if (!data.videoServerIP) {
        console.log("something went wrong, (video server IP missing)");
        return;
      } // lagless setup:


      if (this.props.streamType === "mpeg2") {
        this.stream = new libs_lagless_lagless2_js__WEBPACK_IMPORTED_MODULE_19__["default"]({
          url: `https://${data.videoServerIP}`,
          path: `/${data.videoServerPort}/socket.io`,
          audio: true,
          video: true
        });
      } else if (this.props.streamType === "webRTC") {
        this.stream = new libs_lagless_lagless4_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
          url: `https://${data.videoServerIP}`,
          path: `/${data.videoServerPort}/socket.io`
        });
        this.stream.run();
      } else {
        alert("stream type error: " + this.props.streamType);
      }

      setTimeout(() => {
        if (this.props.streamType === "mpeg2") {
          this.stream.resume(document.getElementById("videoCanvas"), document.getElementById("graphicsCanvas"));
        } else if (this.props.streamType === "webRTC") {
          this.stream.resume(document.getElementById("videoCanvas"));
        }
      }, 500);
      window.stream = this.stream;
      setTimeout(() => {
        this.setStreamVolume(this.props);
      }, 500);
      setTimeout(() => {
        this.setStreamVolume(this.props);
      }, 5000);
    });

    _defineProperty(this, "afk", () => {
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
    });

    _defineProperty(this, "exitFullscreen", () => {
      if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        // this.toggleFullscreen(false);
        // from checkbox settings:
        // todo: not this:
        console.log("exiting fullscreen"); // $("body").removeClass("hideScrollbar");

        this.props.updateSettings({
          fullscreen: false,
          largescreen: false,
          controllerView: true,
          hideChat: false,
          hideNav: false
        }); // turn off mouse controls:

        this.inputHandler.mouse.toggle(false);
      }

      window.dispatchEvent(new Event("resize"));
    });

    _defineProperty(this, "sendControllerState", () => {
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

      if (this.inputHandler.currentInputMode == "keyboard" && !this.props.settings.keyboardControls) {
        return;
      }

      if (this.inputHandler.currentInputMode == "controller" && !this.props.settings.controllerControls) {
        return;
      }

      if (this.inputHandler.currentInputMode == "touchpad" && !this.props.settings.touchControls) {
        return;
      } // return if chat is focused:
      // if (document.activeElement === document.getElementById("messageBox")) {


      if (document.activeElement.type === "text" || document.activeElement.type === "textarea" || document.activeElement === document.getElementById("messageBox")) {
        return;
      } // return if trying to re-map inputs:


      if (window.location.pathname.indexOf("/controls") > -1) {
        return;
      }

      if (window.location.pathname.indexOf("/settings") > -1) {
        return;
      } // if not in the queue, attempt to join it:


      if (this.props.controlQueues[this.props.settings.currentPlayer].indexOf(this.props.client.userid) == -1) {
        this.props.joinPlayerControlQueue(this.props.settings.currentPlayer);
      } // if (!this.props.loggedIn) {
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


      if (this.props.controlQueues[this.props.settings.currentPlayer].indexOf(this.props.client.userid) > 0 && this.props.controlQueues[this.props.settings.currentPlayer].length > 0) {
        this.props.enqueueSnackbar("It's not your turn yet!", {
          variant: "warning",
          preventDuplicate: true,
          anchorOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          autoHideDuration: 1000
        });
        return;
      }

      let obj = { ...this.inputHandler.getState(),
        cNum: -1
      };
      obj.btns = obj.controller.btns;
      obj.axes = obj.controller.axes;
      obj.keys = obj.keyboard.keys; // for (let i = 0; i < this.props.controlQueues.length; i++) {
      // 	if (this.props.controlQueues[i][0] == this.props.client.userid) {
      // 		obj.cNum = i;
      // 	}
      // }

      if (obj.cNum == -1) {
        obj.cNum = this.props.settings.currentPlayer;
      }

      let buttons = obj.controller.btns.toString(2);
      buttons = "0".repeat(18).substr(buttons.length) + buttons;

      if (!this.props.settings.realKeyboardMouse) {
        console.log(obj.cNum, buttons, Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["getStickString"])(obj.axes[0]), Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["getStickString"])(obj.axes[1]), Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["getStickString"])(obj.axes[2]), Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["getStickString"])(obj.axes[3]), Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["getStickString"])(obj.axes[4]), Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["getStickString"])(obj.axes[5]), Math.random().toFixed(3) // fixedLengthString(obj.axes[0], "0", 3),
        // fixedLengthString(obj.axes[1], "0", 3),
        // fixedLengthString(obj.axes[2], "0", 3),
        // fixedLengthString(obj.axes[3], "0", 3),
        // fixedLengthString(obj.axes[4], "0", 3),
        // fixedLengthString(obj.axes[5], "0", 3),
        );
      } else {} // console.log(obj.keys, obj.mouse, Math.random().toFixed(3));
      // let s1x = getStickString(obj.axes[0]);
      // let s1y = getStickString(obj.axes[1]);
      // console.log(` 0 ${s1y[2]} 0\n ${s1x[0]} 0 ${s1x[2]}\n 0 ${s1y[0]} 0`);


      if (this.hostConnection) {
        // todo: rename to sendInputState
        this.hostConnection.emit("sendControllerState", obj);
      } else {
        console.log("the socket is null!");
      }
    });

    _defineProperty(this, "setStreamVolume", props => {
      if (this.stream) {
        if (this.props.streamType === "mpeg2") {
          this.stream.player.volume = props.settings.volume / 100;
        } else if (this.props.streamType === "webRTC") {}
      }
    });

    this.afkTime = 1000 * 60 * 60; // 1 hour

    this.afkTimer = null;
    this.stream = null;
    this.hostConnection = null;
    this.state = {};
    this.inputHandler = new shared_libs_inputHandler_InputHandler_js__WEBPACK_IMPORTED_MODULE_16__["default"](); // todo:

    window.inputHandler = this.inputHandler; // for lagless canvas
  }

  componentDidMount() {
    // todo: something like this for "getStreamInfo":
    // if (!this.props.client.loggedIn) {
    // 	if (tryCount < 3) {
    // 		setTimeout(() => {
    // 			this.recieveStream(data, tryCount + 1);
    // 		}, 1000);
    // 	} else {
    // 		alert("You need to login to see the stream!");
    // 		return;
    // 	}
    // }
    this.props.accountConnection.emit("getStreamInfo", {
      username: this.props.match.params.username
    }, data => {
      if (!data.success) {
        alert(data.reason);
        return;
      }

      this.recieveStream(data, 0);
    });
    this.afkTimer = setTimeout(this.afk, this.afkTime); // fullscreen:

    document.addEventListener("webkitfullscreenchange", this.exitFullscreen, false);
    document.addEventListener("mozfullscreenchange", this.exitFullscreen, false);
    document.addEventListener("fullscreenchange", this.exitFullscreen, false);
    document.addEventListener("MSFullscreenChange", this.exitFullscreen, false); // lagless setup:

    this.sendInputTimer = setInterval(() => {
      if (!this.props.client.loggedIn) {
        return;
      }

      this.inputHandler.pollDevices(this.props.settings.touchControls);
      this.sendControllerState();
    }, 1000 / 120); // todo: remove this when component unmounts:

    window.addEventListener("keydown", event => {
      // escape, f11
      if ([27, 122].indexOf(event.keyCode) > -1) {
        event.preventDefault(); // $("body").removeClass("hideScrollbar");
        // turn off mouse controls:

        this.inputHandler.mouse.toggle(false);
      } // prevent space bar scrolling:
      // if ([32].indexOf(event.keyCode) > -1) {
      // 	event.preventDefault();
      // }
      // prevent arrow key & spacebar scrolling:


      if ([38, 40, 32].indexOf(event.keyCode) > -1) {
        // check if chat isn't focused:
        if (document.activeElement !== document.getElementById("messageBox") && document.activeElement.type !== "textarea" && document.activeElement.type !== "text") {
          event.preventDefault();
        }
      } // escape:


      if ([27].indexOf(event.keyCode) > -1) {
        document.exitPointerLock();
      }
    }, false);
  }

  componentWillUnmount() {
    clearInterval(this.sendInputTimer);

    if (this.stream) {
      this.stream.destroy();
      this.stream = null;
    } // else {
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


    for (let i = 0; i < this.props.playerCount; i++) {
      this.props.leavePlayerControlQueue(i);
    }

    if (this.hostConnection) {
      this.hostConnection.removeAllListeners();
      this.hostConnection.destroy();
    }

    this.props.updateMessages([]); // save settings on close:

    console.log("saving settings");
    localforage__WEBPACK_IMPORTED_MODULE_17___default.a.setItem("settings", JSON.stringify(this.props.settings));
  }

  resetSettings() {
    Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_15__["deleteAllCookies"])(); // localforage.clear().then(() => {
    // 	window.location.href = "https://remotegames.io";
    // });
  }

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
    } // all settings:


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
    const {
      classes
    } = this.props;

    if (window.location.pathname == "/reset") {
      this.resetSettings();
      alert("Try logging in again, if it doesn't work, try clicking the reset all settings button and try again.");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_Loading_jsx__WEBPACK_IMPORTED_MODULE_13__["default"], null)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StreamsAppBar, {
      history: this.props.history,
      hide: this.props.settings.fullscreen || this.props.settings.hideNav
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picture, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Chat, {
      hide: this.props.settings.hideChat
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StreamInfo, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/settings",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_modals_SettingsModal_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, props, {
          inputHandler: this.inputHandler
        }));
      }
    })));
  }

}

const mapStateToProps = state => {
  return {
    controlQueues: state.stream.players.controlQueues,
    client: state.client,
    settings: state.settings,
    playerCount: state.stream.players.count,
    streamType: state.stream.info.streamType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(Object(src_actions_settings_js__WEBPACK_IMPORTED_MODULE_4__["updateSettings"])(settings));
    },
    leavePlayerControlQueue: controllerNumber => {
      dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_6__["leavePlayerControlQueue"])(controllerNumber));
    },
    joinPlayerControlQueue: controllerNumber => {
      dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_6__["joinPlayerControlQueue"])(controllerNumber));
    },
    updateClient: client => {
      dispatch(Object(features_client_js__WEBPACK_IMPORTED_MODULE_3__["updateClient"])(client));
    },
    updateMessages: messages => {
      dispatch(Object(src_actions_chat_js__WEBPACK_IMPORTED_MODULE_5__["updateMessages"])(messages));
    },
    updateStreamInfo: data => {
      dispatch(Object(src_actions_info_js__WEBPACK_IMPORTED_MODULE_7__["updateStreamInfo"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_14__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["withStyles"])(styles), notistack__WEBPACK_IMPORTED_MODULE_12__["withSnackbar"], Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(Stream));

/***/ }),

/***/ "./src/actions/accountMap.js":
/*!***********************************!*\
  !*** ./src/actions/accountMap.js ***!
  \***********************************/
/*! exports provided: receiveAccountMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveAccountMap", function() { return receiveAccountMap; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const receiveAccountMap = map => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_ACCOUNT_MAP"],
    payload: {
      map: map
    }
  };
};

/***/ }),

/***/ "./src/actions/chat.js":
/*!*****************************!*\
  !*** ./src/actions/chat.js ***!
  \*****************************/
/*! exports provided: sendMessage, receiveMessage, updateMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveMessage", function() { return receiveMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMessages", function() { return updateMessages; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const sendMessage = text => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["SEND_MESSAGE"],
    payload: {
      text: text
    }
  };
};
const receiveMessage = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_MESSAGE"],
    payload: {
      text: data.text,
      username: data.username,
      userid: data.userid,
      time: data.time,
      isReplay: data.isReplay,
      isBanned: data.isBanned
    }
  };
};
const updateMessages = messages => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_MESSAGES"],
    payload: {
      messages: messages
    }
  };
};

/***/ }),

/***/ "./src/actions/info.js":
/*!*****************************!*\
  !*** ./src/actions/info.js ***!
  \*****************************/
/*! exports provided: updateStreamInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateStreamInfo", function() { return updateStreamInfo; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const updateStreamInfo = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_STREAM_INFO"],
    payload: {
      data: data
    }
  };
};

/***/ }),

/***/ "./src/actions/players.js":
/*!********************************!*\
  !*** ./src/actions/players.js ***!
  \********************************/
/*! exports provided: updatePlayerControlQueues, updatePlayerTurnStartTimes, updatePlayerTurnLengths, joinPlayerControlQueue, leavePlayerControlQueue, updatePlayerControllerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayerControlQueues", function() { return updatePlayerControlQueues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayerTurnStartTimes", function() { return updatePlayerTurnStartTimes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayerTurnLengths", function() { return updatePlayerTurnLengths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinPlayerControlQueue", function() { return joinPlayerControlQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leavePlayerControlQueue", function() { return leavePlayerControlQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePlayerControllerState", function() { return updatePlayerControllerState; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const updatePlayerControlQueues = queues => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PLAYER_CONTROL_QUEUES"],
    payload: {
      queues: queues
    }
  };
};
const updatePlayerTurnStartTimes = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PLAYER_TURN_START_TIMES"],
    payload: {
      turnStartTimes: data.turnStartTimes,
      forfeitStartTimes: data.forfeitStartTimes
    }
  };
};
const updatePlayerTurnLengths = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PLAYER_TURN_LENGTHS"],
    payload: {
      turnLengths: data.turnLengths,
      forfeitLengths: data.forfeitLengths
    }
  };
};
const joinPlayerControlQueue = controllerNumber => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["JOIN_PLAYER_CONTROL_QUEUE"],
    payload: {
      controllerNumber: controllerNumber
    }
  };
};
const leavePlayerControlQueue = controllerNumber => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["LEAVE_PLAYER_CONTROL_QUEUE"],
    payload: {
      controllerNumber: controllerNumber
    }
  };
};
const updatePlayerControllerState = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PLAYER_CONTROLLER_STATE"],
    payload: {
      cNum: data.cNum,
      btns: data.btns,
      axes: data.axes
    }
  };
};

/***/ }),

/***/ "./src/actions/time.js":
/*!*****************************!*\
  !*** ./src/actions/time.js ***!
  \*****************************/
/*! exports provided: updateServerTime, updateLastServerUpdate, updatePing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateServerTime", function() { return updateServerTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLastServerUpdate", function() { return updateLastServerUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePing", function() { return updatePing; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const updateServerTime = time => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SERVER_TIME"],
    payload: {
      time: time
    }
  };
};
const updateLastServerUpdate = time => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_LAST_SERVER_UPDATE"],
    payload: {
      time: time
    }
  };
};
const updatePing = time => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_PING"],
    payload: {
      time: time
    }
  };
};

/***/ }),

/***/ "./src/components/modals/SettingsModal.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/SettingsModal.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _settings_InputMapper_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/InputMapper.jsx */ "./src/components/modals/settings/InputMapper.jsx");
/* harmony import */ var _settings_Site_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/Site.jsx */ "./src/components/modals/settings/Site.jsx");
/* harmony import */ var _settings_AudioVideo_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings/AudioVideo.jsx */ "./src/components/modals/settings/AudioVideo.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // react-router:

 // material ui:


 // components:



 // recompose:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // padding: "0px 0px 25px 0px !important",
    padding: "0 !important"
  },
  controls: {
    display: "flex",
    flexDirection: "column" // padding: "15px",

  },
  av: {
    display: "flex",
    flexDirection: "column" // padding: "15px",

  },
  site: {
    display: "flex",
    flexDirection: "column" // padding: "15px",

  }
});

class SettingsModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.update = this.update.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    // this.props.history.push("/");
    this.props.history.goBack();
  }

  handleChange(event) {
    let inputHandler = window.inputHandler;
    inputHandler.controller.settings.controllerIndex = "" + event.target.value;
    this.setState({});
  }

  update() {
    this.setState({});
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const {
      classes
    } = this.props;
    console.log("re-rendering SettingsModal.");
    let which;

    switch (this.props.history.location.pathname) {
      case "/settings/av":
        which = 0;
        break;

      case "/settings/controls":
        which = 1;
        break;

      case "/settings/site":
        which = 2;
        break;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Dialog"], {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["DialogContent"], {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["AppBar"], {
      position: "static"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
      variant: "h6",
      color: "inherit"
    }, "Settings"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      centered: true,
      value: which,
      classes: {
        root: classes.tabs
      },
      variant: "fullWidth",
      indicatorColor: "primary",
      textColor: "primary" // scrollable
      // scrollButtons="auto"
      ,
      onChange: (event, value) => {
        if (value === 0) {
          this.props.history.replace("/settings/av");
        } else if (value === 1) {
          this.props.history.replace("/settings/controls");
        } else if (value === 2) {
          this.props.history.replace("/settings/site");
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Audio Video"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Controls"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Site"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/settings/controls",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
          className: classes.controls,
          elevation: 4
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings_InputMapper_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/settings/site",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
          className: classes.controls,
          elevation: 4
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings_Site_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/settings/av",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
          className: classes.controls,
          elevation: 4
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings_AudioVideo_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], null));
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles))(SettingsModal));

/***/ }),

/***/ "./src/components/modals/settings/AudioVideo.jsx":
/*!*******************************************************!*\
  !*** ./src/components/modals/settings/AudioVideo.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // react-router:

 // material ui:

 // components:
// recompose:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // padding: "0px 0px 25px 0px !important",
    padding: "0 !important"
  }
});

class AudioVideo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "test"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles))(AudioVideo));

/***/ }),

/***/ "./src/components/modals/settings/InputMapper.jsx":
/*!********************************************************!*\
  !*** ./src/components/modals/settings/InputMapper.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var shared_components_general_MySlider_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/general/MySlider.jsx */ "./src/shared/components/general/MySlider.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // material ui:


 // components:

 // recompose:


const MAP_BUTTON_NAMES = ["b", "a", "y", "x", "l", "r", "zl", "zr", "minus", "plus", "lstick", "rstick", "up", "down", "left", "right", "home"];
const DISPLAY_BUTTON_NAMES = ["B", "A", "Y", "X", "L", "R", "ZL", "ZR", "Minus", "Plus", "LStick", "RStick", "Up", "Down", "Left", "Right", "Home"];
const BUTTON_LAYOUTS = {
  xbox: ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "Select", "Start", "LStick", "RStick", "Up", "Down", "Left", "Right", "Xbox"],
  DS4: ["❌", "⭕", "🟥", "🔺", "L1", "R1", "L2", "R2", "Share", "Options", "L3", "R3", "Up", "Down", "Left", "Right", "PS", "Touchpad"],
  proController: []
};
const DISPLAY_AXIS_NAMES = ["LX", "LY", "RX", "RY"];
const MAP_AXIS_NAMES = ["LX", "LY", "RX", "RY"];
const DISPLAY_KEYBOARD_NAMES = ["LU", "LD", "LL", "LR", "RU", "RD", "RL", "RR", "A", "B", "X", "Y", "Up", "Down", "Left", "Right", "LStick", "RStick", "L", "ZL", "R", "ZR", "Minus", "Plus", "Capture", "Home"];
const MAP_KEYBOARD_NAMES = ["LU", "LD", "LL", "LR", "RU", "RD", "RL", "RR", "a", "b", "x", "y", "up", "down", "left", "right", "lstick", "rstick", "l", "zl", "r", "zr", "minus", "plus", "capture", "home"];

class ControllerMapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.mapAxisTimer = null;
    this.mapButtonTimer = null;
    this.currentMapping = "unset";
    this.mapButton = this.mapButton.bind(this);
    this.mapAxis = this.mapAxis.bind(this);
    this.state = {
      waiting: false
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  mapButton() {
    let inputHandler = window.inputHandler;
    inputHandler.controller.lastChangedButton = null;
    this.setState({
      waiting: true
    });
    this.mapButtonTimer = setInterval(() => {
      if (inputHandler.controller.lastChangedButton != null) {
        clearInterval(this.mapButtonTimer);

        if (this.props.type == "button") {
          let lastChangedIndex = inputHandler.controller.lastChangedButton;
          let which = parseInt(this.props.which);

          if (this.currentMapping !== "unset") {
            inputHandler.controller.settings.map.buttons[parseInt(this.currentMapping)].which = "unset";
          }

          inputHandler.controller.settings.map.buttons[lastChangedIndex].type = "button";
          inputHandler.controller.settings.map.buttons[lastChangedIndex].which = MAP_BUTTON_NAMES[which];
        }

        if (this.props.type == "axis") {// todo: finish
          // inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].type = "axis";
          // inputHandler.controller.settings.map.axes[parseInt(this.props.which)] = MAP_BUTTON_NAMES[inputHandler.controller.lastChangedButton];
        }

        inputHandler.controller.lastChangedButton = null;
        this.setState({
          waiting: false
        });
        this.props.update();
      }
    }, 200);
  }

  mapAxis() {// this.setState({waiting: true});
  }

  render() {
    const {
      classes
    } = this.props;
    let DISPLAY_NAMES = this.props.type == "button" ? DISPLAY_BUTTON_NAMES : DISPLAY_AXIS_NAMES;
    let MAP_NAMES = this.props.type == "button" ? MAP_BUTTON_NAMES : MAP_AXIS_NAMES;
    let inputHandler = window.inputHandler;

    if (this.state.waiting) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, `${DISPLAY_NAMES[this.props.which]}`, " waiting for axis / button input..."));
    }

    this.currentMapping = "unset";

    if (this.props.type == "button") {
      for (let i = 0; i < inputHandler.controller.settings.map.buttons.length; i++) {
        let btn = inputHandler.controller.settings.map.buttons[i];

        if (btn.which === MAP_NAMES[this.props.which]) {
          this.currentMapping = i;
          break;
        }
      }
    } else if (this.props.type == "axis") {
      for (let i = 0; i < inputHandler.controller.settings.map.axes.length; i++) {
        let axis = inputHandler.controller.settings.map.axes[i];

        if (axis.which === MAP_NAMES[this.props.which]) {
          this.currentMapping = i;
          break;
        }
      }
    }

    let currentMappingNamed;

    if (inputHandler.controller.settings.detectedType !== null) {
      currentMappingNamed = BUTTON_LAYOUTS[inputHandler.controller.settings.detectedType][this.currentMapping];
    } else {
      currentMappingNamed = this.currentMapping;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      className: classes.listItem
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, `${DISPLAY_NAMES[this.props.which]}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, currentMappingNamed), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "contained",
      onClick: this.mapButton
    }, "Map To Button"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "contained",
      onClick: this.mapAxis
    }, "Map To Axis"));
  }

}

class KeyboardMapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.mapAxisTimer = null;
    this.mapButtonTimer = null;
    this.mapKey = this.mapKey.bind(this);
    this.state = {
      waiting: false
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  mapKey() {
    let inputHandler = window.inputHandler;
    inputHandler.keyboard.lastPressedKey = null;
    this.setState({
      waiting: true
    });
    this.mapKeyTimer = setInterval(() => {
      if (inputHandler.keyboard.lastPressedKey != null) {
        clearInterval(this.mapKeyTimer);
        inputHandler.keyboard.map[MAP_KEYBOARD_NAMES[parseInt(this.props.which)]] = inputHandler.keyboard.lastPressedKey;
        inputHandler.keyboard.lastPressedKey = null;
        this.setState({
          waiting: false
        });
        this.props.update();
      }
    }, 200);
  }

  render() {
    const {
      classes
    } = this.props;
    let inputHandler = window.inputHandler;

    if (this.state.waiting) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, `${DISPLAY_KEYBOARD_NAMES[this.props.which]}`, " waiting for keypress..."));
    } // let currentMapping = inputHandler.keyboard.map2[parseInt(this.props.which)];


    let currentMapping = inputHandler.keyboard.map[MAP_KEYBOARD_NAMES[parseInt(this.props.which)]];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
      className: classes.listItem
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, `${DISPLAY_KEYBOARD_NAMES[this.props.which]}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, currentMapping), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "contained",
      onClick: this.mapKey
    }, "Map To Key"));
  }

} // jss:


const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // padding: "0px 0px 25px 0px !important",
    padding: "0 !important"
  },
  controllerRemapper: {
    display: "flex",
    flexDirection: "column",
    padding: "15px"
  },
  keyboardRemapper: {
    display: "flex",
    flexDirection: "column",
    padding: "15px"
  },
  list: {
    maxHeight: "400px",
    overflowY: "auto"
  },
  listItem: {
    "& > div": {
      width: "10%"
    }
  },
  // slider:
  rootClass: {
    width: "50%"
  },
  rail: {
    backgroundColor: "#FFF"
  },
  track: {
    backgroundColor: "#FFF"
  },
  thumb: {
    backgroundColor: "#FFF",
    "&:hover": {
      boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)"
    },
    "&:active": {
      boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)"
    }
  },
  active: {
    "span&": {
      boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important"
    }
  },
  // slider settings:
  sliderSettings: {
    display: "flex",
    flexDirection: "column",
    margin: "15px 0px",
    "& > div": {
      display: "flex",
      lineHeight: "28px",
      justifyContent: "space-between",
      padding: "10px"
    }
  }
});

class InputMapperModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", () => {
      // this.props.history.push("/");
      this.props.history.goBack();
    });

    _defineProperty(this, "handleChange", event => {
      let inputHandler = window.inputHandler;
      inputHandler.controller.settings.controllerIndex = "" + event.target.value;
      this.setState({});
    });

    _defineProperty(this, "rescanGamepads", () => {
      window.inputHandler.controller.autoSelectGamepad();
      this.update();
    });

    _defineProperty(this, "update", () => {
      this.setState({});
    });

    this.state = {
      whichTab: 0
    };
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    const {
      classes
    } = this.props;
    console.log("re-rendering InputMapper.");
    let inputHandler = window.inputHandler;
    let gamepadWrapper = inputHandler.gamepadWrapper;
    let activeGamepadIndex = inputHandler.controller.settings.controllerIndex;
    let gamepads = [];

    for (let gamepadIndex in gamepadWrapper.controllers) {
      gamepads.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        key: gamepadIndex,
        value: gamepadIndex
      }, gamepadWrapper.controllers[gamepadIndex].id));
    } // show that no gamepad is selected if one isn't:


    if (activeGamepadIndex == null && gamepads.length > 0) {
      // set to 0 so we render this:
      activeGamepadIndex = 0; // prepend so it's first:

      gamepads.unshift(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        key: 0,
        value: 0
      }, "No gamepad selected"));
    }

    if (gamepads.length == 0 || activeGamepadIndex == null) {
      activeGamepadIndex = 0;
      gamepads.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        key: 0,
        value: 0
      }, "No gamepads detected"));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      centered: true,
      value: this.state.whichTab,
      classes: {
        root: classes.tabs
      },
      variant: "fullWidth",
      indicatorColor: "primary",
      textColor: "primary" // scrollable
      // scrollButtons="auto"
      ,
      onChange: (event, value) => {
        this.setState({
          whichTab: value
        });
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Controller"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      label: "Keyboard"
    })), this.state.whichTab === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      className: classes.controllerRemapper,
      elevation: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], null, "Active Gamepad Type:", " " + (inputHandler.controller.settings.detectedType || "Unknown")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Select"], {
      value: activeGamepadIndex,
      onChange: this.handleChange,
      input: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["OutlinedInput"], {
        labelWidth: 0
      }),
      style: {
        width: "80%"
      }
    }, gamepads), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "contained",
      onClick: this.rescanGamepads
    }, "Rescan")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      elevation: 4,
      className: classes.sliderSettings
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Stick Deadzone: ", inputHandler.controller.settings.axes[0].deadzone, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MySlider_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rootClass: classes.rootClass,
      thumbClass: classes.thumb,
      activeClass: classes.active,
      railClass: classes.rail,
      trackClass: classes.track,
      min: 0,
      max: 1,
      step: 0.01,
      handleChange: value => {
        for (let i = 0; i < inputHandler.controller.settings.axes.length; i++) {
          inputHandler.controller.settings.axes[i].deadzone = value;
        }

        this.setState({});
      },
      value: inputHandler.controller.settings.axes[0].deadzone,
      bounceInterval: 100,
      delay: 500
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Stick Sensitivity: ", inputHandler.controller.settings.axes[0].sensitivity, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MySlider_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rootClass: classes.rootClass,
      thumbClass: classes.thumb,
      activeClass: classes.active,
      railClass: classes.rail,
      trackClass: classes.track,
      min: 0,
      max: 3,
      step: 0.01,
      handleChange: value => {
        for (let i = 0; i < inputHandler.controller.settings.axes.length; i++) {
          inputHandler.controller.settings.axes[i].sensitivity = value;
        }

        this.setState({});
      },
      value: inputHandler.controller.settings.axes[0].sensitivity,
      bounceInterval: 100,
      delay: 500
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      elevation: 2,
      style: {
        marginTop: 15
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
      className: classes.list
    }, [...Array(17)].map((e, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ControllerMapper, {
      key: i,
      update: this.update,
      type: "button",
      which: i,
      classes: this.props.classes
    })), [...Array(4)].map((e, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ControllerMapper, {
      key: i,
      update: this.update,
      type: "axis",
      which: i,
      classes: this.props.classes
    }))))), this.state.whichTab === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      className: classes.keyboardRemapper,
      elevation: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], {
      elevation: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
      className: classes.list
    }, [...Array(26)].map((e, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KeyboardMapper, {
      key: i,
      update: this.update,
      inputHandler: inputHandler,
      type: "button",
      which: i,
      classes: this.props.classes
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles))(InputMapperModal));

/***/ }),

/***/ "./src/components/modals/settings/Site.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/settings/Site.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_stream_CheckboxSettings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/stream/CheckboxSettings.jsx */ "./src/components/stream/CheckboxSettings.jsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // react-router:

 // material ui:

 // components:

 // recompose:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // padding: "0px 0px 25px 0px !important",
    padding: "0 !important"
  }
});

class Site extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_stream_CheckboxSettings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles))(Site));

/***/ }),

/***/ "./src/components/stream/CheckboxSettings.jsx":
/*!****************************************************!*\
  !*** ./src/components/stream/CheckboxSettings.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/general/MyCheckbox.jsx */ "./src/shared/components/general/MyCheckbox.jsx");
/* harmony import */ var shared_components_general_ThemeSelector_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/general/ThemeSelector.jsx */ "./src/shared/components/general/ThemeSelector.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_actions_settings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
// react:
 // material ui:

 // components:


 // redux:

 // actions:

 // libs:



class CheckboxSettings extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
      elevation: 5
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Enable Keyboard Controls",
      handleChange: state => {
        this.props.updateSettings({
          keyboardControls: state
        });
      },
      checked: this.props.settings.keyboardControls
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Enable Controller Controls",
      handleChange: state => {
        this.props.updateSettings({
          controllerControls: state
        });
      },
      checked: this.props.settings.controllerControls
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Enable Touch Controls",
      handleChange: state => {
        this.props.updateSettings({
          touchControls: state
        });
      },
      checked: this.props.settings.touchControls
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Real keyboard / mouse",
      handleChange: state => {
        this.props.updateSettings({
          realKeyboardMouse: state
        });
      },
      checked: this.props.settings.realKeyboardMouse
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Enable Largescreen Mode",
      handleChange: state => {
        this.props.updateSettings({
          largescreen: state
        });

        if (state && this.props.settings.controllerView) {
          this.props.updateSettings({
            controllerView: false
          });
        } else if (!state && !this.props.settings.controllerView) {
          this.props.updateSettings({
            controllerView: true
          });
        }

        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 200);
      },
      checked: this.props.settings.largescreen
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Mobile Mode",
      handleChange: state => {
        this.props.updateSettings({
          mobileMode: state,
          touchControls: state
        }); // if (state && this.props.settings.controllerView) {
        // 	this.props.updateSettings({ controllerView: false });
        // } else if (!state && !this.props.settings.controllerView) {
        // 	this.props.updateSettings({ controllerView: true });
        // }
        // if (state && !this.props.settings.hideChat) {
        // 	this.props.updateSettings({ hideChat: false });
        // } else if (!state && this.props.settings.hideChat) {
        // 	this.props.updateSettings({ hideChat: true });
        // }
        // if (state && !this.props.settings.hideNav) {
        // 	this.props.updateSettings({ hideNav: false });
        // } else if (!state && this.props.settings.hideNav) {
        // 	this.props.updateSettings({ hideNav: true });
        // }

        if (state) {
          this.props.updateSettings({
            hideChat: true,
            hideNav: true,
            controllerView: true,
            largescreen: true
          });
          Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_6__["toggleFullscreen"])(document.getElementsByTagName("html")[0]);
        } else {
          this.props.updateSettings({
            hideChat: false,
            hideNav: false,
            controllerView: true,
            largescreen: false
          });
        }

        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 200);
      },
      checked: this.props.settings.mobileMode
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Audio 3.0",
      handleChange: this.props.toggleAudioThree,
      checked: this.props.settings.audioThree
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_ThemeSelector_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Enable Fullscreen Mode",
      handleChange: state => {
        if (state) {
          // $(document).scrollTop(0);
          document.body.scrollTop = document.documentElement.scrollTop = 0; // $("body").addClass("hideScrollbar");
          // $("#root").children()[0].style.padding = "0";

          this.props.updateSettings({
            fullscreen: state,
            controllerView: false,
            hideChat: true,
            hideNav: true
          });
          Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_6__["toggleFullscreen"])(document.getElementsByTagName("html")[0]);
        } else {
          // console.log("exiting fullscreen");
          // $("body").removeClass("hideScrollbar");
          // $("#root").children()[0].style.padding = "";
          this.props.updateSettings({
            fullscreen: state,
            largescreen: false,
            controllerView: true,
            hideChat: false,
            hideNav: false
          });
        }
      },
      checked: this.props.settings.fullscreen
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Analog Stick Mode",
      handleChange: state => {
        this.props.updateSettings({
          analogStickMode: state
        });
      },
      checked: this.props.settings.analogStickMode
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Hide Chat",
      handleChange: state => {
        this.props.updateSettings({
          hideChat: state
        });
      },
      checked: this.props.settings.hideChat
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: "Hide Nav Bar",
      handleChange: state => {
        this.props.updateSettings({
          hideNav: state
        });
      },
      checked: this.props.settings.hideNav
    }))));
  }

} // export default JoinLeaveQueueButton;


const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(Object(src_actions_settings_js__WEBPACK_IMPORTED_MODULE_5__["updateSettings"])(settings));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(CheckboxSettings));

/***/ }),

/***/ "./src/libs/jsmpeg/jsmpeg.wasm.js":
/*!****************************************!*\
  !*** ./src/libs/jsmpeg/jsmpeg.wasm.js ***!
  \****************************************/
/*! exports provided: WASM_BINARY_INLINED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WASM_BINARY_INLINED", function() { return WASM_BINARY_INLINED; });
const WASM_BINARY_INLINED = 'AGFzbQEAAAAADQZkeWxpbmudTgQAAAABNAlgAX8Bf2ABfwBgAn9/AX9gAn9/AGAEf39/fwBgA39/fwF/YAAAYAZ/f39/f38AYAF/AX0CQwQDZW52BHNicmsAAANlbnYNX19hc3NlcnRfZmFpbAAEA2Vudg1fX21lbW9yeV9iYXNlA38AA2VudgZtZW1vcnkCAAADPTwCAQIAAwMBAAgAAAAAAAAAAQMBBwEDBAEEBAQCAQIAAwMAAAAAAAQEAgECAAIAAgAAAAABAQIDAQUFBQYH5AUfFG1wZWcxX2RlY29kZXJfY3JlYXRlAAIGbWFsbG9jADEGbWVtc2V0ADwVbXBlZzFfZGVjb2Rlcl9kZXN0cm95AAMEZnJlZQA1G21wZWcxX2RlY29kZXJfZ2V0X3dyaXRlX3B0cgAEF21wZWcxX2RlY29kZXJfZ2V0X2luZGV4AAUXbXBlZzFfZGVjb2Rlcl9zZXRfaW5kZXgABhdtcGVnMV9kZWNvZGVyX2RpZF93cml0ZQAHIW1wZWcxX2RlY29kZXJfaGFzX3NlcXVlbmNlX2hlYWRlcgAJHG1wZWcxX2RlY29kZXJfZ2V0X2ZyYW1lX3JhdGUAChxtcGVnMV9kZWNvZGVyX2dldF9jb2RlZF9zaXplAAsXbXBlZzFfZGVjb2Rlcl9nZXRfd2lkdGgADBhtcGVnMV9kZWNvZGVyX2dldF9oZWlnaHQADRdtcGVnMV9kZWNvZGVyX2dldF95X3B0cgAOGG1wZWcxX2RlY29kZXJfZ2V0X2NyX3B0cgAPGG1wZWcxX2RlY29kZXJfZ2V0X2NiX3B0cgAQFG1wZWcxX2RlY29kZXJfZGVjb2RlABESbXAyX2RlY29kZXJfY3JlYXRlAB0GbWVtY3B5ADoTbXAyX2RlY29kZXJfZGVzdHJveQAeGW1wMl9kZWNvZGVyX2dldF93cml0ZV9wdHIAHxVtcDJfZGVjb2Rlcl9nZXRfaW5kZXgAIBVtcDJfZGVjb2Rlcl9zZXRfaW5kZXgAIRVtcDJfZGVjb2Rlcl9kaWRfd3JpdGUAIhttcDJfZGVjb2Rlcl9nZXRfc2FtcGxlX3JhdGUAIyBtcDJfZGVjb2Rlcl9nZXRfbGVmdF9jaGFubmVsX3B0cgAkIW1wMl9kZWNvZGVyX2dldF9yaWdodF9jaGFubmVsX3B0cgAl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Agw2AgQLIAAoAgwiAUUNACABIAAoAgg2AgALIAAgACgCACACQQF0aiIBNgIAIAFBAXFFBEAgABA5C0EBDwsjACIAQabMAGogAEGEygBqQaEDIABBwswAahABAAsjACIAQdLKAGogAEGEygBqQfoBIABB9coAahABAAsjACIAQYbLAGogAEGEygBqQYACIABB9coAahABAAu/AgEEfwJAAkACQAJAIABBD2pBeHEiAxAAIgFBf0YNAAJAAkACQCABQQdqQXhxIgAgAUcEQCAAIAFrEAAiBEF/Rg0EIAQgASADakcNBSMAQeTJAGooAgBFBEAjAEHgyQBqKAIARQ0CDAgLIwAiAEHKzQBqIABBhMoAakHnBSAAQbvNAGoQAQALIwAiAUHgyQBqKAIAIQIgAUHkyQBqKAIAIgENASACDQYLIwBB4MkAaiAANgIADAELIAJFDQMgACABNgIECyMAQeTJAGogADYCACAAIANBAXRBAXI2AgAgACECCyACDwsjACIAQZLNAGogAEGEygBqQeUFIABBu80AahABAAsjACIAQePNAGogAEGEygBqQfQFIABBu80AahABAAsjACIAQdbNAGogAEGEygBqQfAFIABBu80AahABAAsOACAABEAgAEF4ahA2CwunBgEFfyAAIAAoAgAiAUF+cTYCAAJAAkACQAJAIAAgAUEBdmpBABAATQRAIAAoAgQhASMAQeTJAGooAgAiBCAARiIFRQRAIAAgACgCAEEBdmohAgsCQAJAIAFFDQAgASgCACIDQQFxDQAgA0EBdkF4aiIDRQ0EQRwgA0EIIANBCEsbZyIDa0EdTw0FIwBBACADa0ECdGpB3MkAaiIDKAIAIAFBCGpGBEAgAyABKAIMNgIACyABKAIIIgMEQCADIAEoAgw2AgQLIAEoAgwiAwRAIAMgASgCCDYCAAsgASABKAIAIAAoAgBBfnFqNgIAIAJFBEAjACEAIAUEQAwICyMAIgBB/cwAaiAAQYTKAGpB0gIgAEHhzABqEAEACyACIAE2AgQgAigCACIAQQFxDQEgAEEBdkF4aiIARQ0EQRwgAEEIIABBCEsbZyIAa0EdTw0FIwBBACAAa0ECdGpB3MkAaiIAKAIAIAJBCGpGBEAgACACKAIMNgIACyACKAIIIgAEQCAAIAIoAgw2AgQLIAIoAgwiAARAIAAgAigCCDYCACMAQeTJAGooAgAhBAsgASABKAIAIAIoAgBBfnFqNgIAIwAhACACIARGBEAMBwsgAiACKAIAQQF2aiABNgIEIAEQOQ8LAkAgAkUNACACKAIAIgFBAXENACABQQF2QXhqIgFFDQRBHCABQQggAUEISxtnIgFrQR1PDQUjAEEAIAFrQQJ0akHcyQBqIgEoAgAgAkEIakYEQCABIAIoAgw2AgALIAIoAggiAQRAIAEgAigCDDYCBAsgAigCDCIBBEAgASACKAIINgIAIwBB5MkAaigCACEECyAAIAAoAgAgAigCAEF+cWo2AgAjACEBIAIgBEYEfyABQeTJAGoFIAIgAigCAEEBdmpBBGoLIAA2AgALIAAhAQsgARA5DwsjACIAQejJAGogAEGEygBqQcQCIABB4cwAahABAAALAAsjACIAQdLKAGogAEGEygBqQfoBIABB9coAahABAAsjACIAQYbLAGogAEGEygBqQYACIABB9coAahABAAsgAEHkyQBqIAE2AgAgARA5C7IIAQV/AkACQAJAAkACQAJAAkAgAEUEQAJAIAFBASABGyICEDIiAQ0AAn8CQCMAQeTJAGooAgAiAEUNACAAKAIAIgFBAXENACAAIAFBAXI2AgAgAUEBdkF4aiIBRQ0IQRwgAUEIIAFBCEsbZyIBa0EdTw0JIwBBACABa0ECdGpB3MkAaiIBKAIAIABBCGpGBEAgASAAKAIMNgIACyAAKAIIIgEEQCABIAAoAgw2AgQLIAAoAgwiAQRAIAEgACgCCDYCAAsjACEAIAIQMyECIABB5MkAaigCACIBIAINARogASABKAIAQX5xNgIAQQAPCyACEDQLIgENAEEADwsgASABKAIAQQF2akEAEABLDQIgAS0AAEEBcUUNByABQQhqDwsgAEF4aiEEIAFFBEAgBBA2QQAPCyAEKAIAIgJBAXFFDQICQAJAIAJBAXYiA0F4aiABTwRADAELAkAjAEHkyQBqKAIAIgUgBEYNACADIARqIgMoAgAiBkEBcQ0AIAZBAXZBeGoiAkUNB0EcIAJBCCACQQhLG2ciAmtBHU8NCCMAQQAgAmtBAnRqQdzJAGoiAigCACADQQhqRgRAIAIgAygCDDYCAAsgAygCCCICBEAgAiADKAIMNgIECyADKAIMIgIEQCACIAMoAgg2AgALIAQgBCgCACAD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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGdldEFmdGVyKHJlZ2lvbikgPD0gc2JyaygwKQAvaG9tZS9mb3NzZS9lbXNkay91cHN0cmVhbS9lbXNjcmlwdGVuL3N5c3RlbS9saWIvZW1tYWxsb2MuY3BwAGVtbWFsbG9jX21hbGxvYwBzaXplID4gMABnZXRCaWdFbm91Z2hGcmVlTGlzdEluZGV4AGdldEZyZWVMaXN0SW5kZXgATUlOX0ZSRUVMSVNUX0lOREVYIDw9IGluZGV4ICYmIGluZGV4IDwgTUFYX0ZSRUVMSVNUX0lOREVYAHBheWxvYWRTaXplID49IHNpemUAcG9zc2libHlTcGxpdFJlbWFpbmRlcgBleHRyYSA+PSBNSU5fUkVHSU9OX1NJWkUAdG90YWxTcGxpdFNpemUgPj0gTUlOX1JFR0lPTl9TSVpFAHB0ciA9PSBnZXRBZnRlcihsYXN0UmVnaW9uKQBleHRlbmRMYXN0UmVnaW9uAGFkZFRvRnJlZUxpc3QAbWVyZ2VJbnRvRXhpc3RpbmdGcmVlUmVnaW9uAHJlZ2lvbiA9PSBsYXN0UmVnaW9uAChjaGFyKilleHRyYVB0ciA9PSAoY2hhciopcHRyICsgc2Jya1NpemUAYWxsb2NhdGVSZWdpb24AIWxhc3RSZWdpb24AIWZpcnN0UmVnaW9uAGZpcnN0UmVnaW9uAGdldFBheWxvYWQAcmVnaW9uLT5nZXRVc2VkKCkAZW1tYWxsb2NfcmVhbGxvYwA=';

/***/ }),

/***/ "./src/libs/jsmpeg/src/ajax.js":
/*!*************************************!*\
  !*** ./src/libs/jsmpeg/src/ajax.js ***!
  \*************************************/
/*! exports provided: AjaxSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxSource", function() { return AjaxSource; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AjaxSource {
  constructor(url, options) {
    _defineProperty(this, "connect", function (destination) {
      this.destination = destination;
    });

    _defineProperty(this, "start", function () {
      this.request = new XMLHttpRequest();

      this.request.onreadystatechange = function () {
        if (this.request.readyState === this.request.DONE && this.request.status === 200) {
          this.onLoad(this.request.response);
        }
      }.bind(this);

      this.request.onprogress = this.onProgress.bind(this);
      this.request.open("GET", this.url);
      this.request.responseType = "arraybuffer";
      this.request.send();
    });

    _defineProperty(this, "resume", function (secondsHeadroom) {// Nothing to do here
    });

    _defineProperty(this, "destroy", function () {
      this.request.abort();
    });

    _defineProperty(this, "onProgress", function (ev) {
      this.progress = ev.loaded / ev.total;
    });

    _defineProperty(this, "onLoad", function (data) {
      this.established = true;
      this.completed = true;
      this.progress = 1;

      if (this.onEstablishedCallback) {
        this.onEstablishedCallback(this);
      }

      if (this.onCompletedCallback) {
        this.onCompletedCallback(this);
      }

      if (this.destination) {
        this.destination.write(data);
      }
    });

    this.url = url;
    this.destination = null;
    this.request = null;
    this.streaming = false;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted;
  }

}

/***/ }),

/***/ "./src/libs/jsmpeg/src/buffer.js":
/*!***************************************!*\
  !*** ./src/libs/jsmpeg/src/buffer.js ***!
  \***************************************/
/*! exports provided: BitBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitBuffer", function() { return BitBuffer; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BitBuffer {
  constructor(bufferOrLength, mode) {
    _defineProperty(this, "resize", function (size) {
      var newBytes = new Uint8Array(size);

      if (this.byteLength !== 0) {
        this.byteLength = Math.min(this.byteLength, size);
        newBytes.set(this.bytes, 0, this.byteLength);
      }

      this.bytes = newBytes;
      this.index = Math.min(this.index, this.byteLength << 3);
    });

    _defineProperty(this, "evict", function (sizeNeeded) {
      var bytePos = this.index >> 3,
          available = this.bytes.length - this.byteLength; // If the current index is the write position, we can simply reset both
      // to 0. Also reset (and throw away yet unread data) if we won't be able
      // to fit the new data in even after a normal eviction.

      if (this.index === this.byteLength << 3 || sizeNeeded > available + bytePos // emergency evac
      ) {
          this.byteLength = 0;
          this.index = 0;
          return;
        } else if (bytePos === 0) {
        // Nothing read yet - we can't evict anything
        return;
      } // Some browsers don't support copyWithin() yet - we may have to do
      // it manually using set and a subarray


      if (this.bytes.copyWithin) {
        this.bytes.copyWithin(0, bytePos, this.byteLength);
      } else {
        this.bytes.set(this.bytes.subarray(bytePos, this.byteLength));
      }

      this.byteLength = this.byteLength - bytePos;
      this.index -= bytePos << 3;
      return;
    });

    _defineProperty(this, "write", function (buffers) {
      var isArrayOfBuffers = typeof buffers[0] === "object",
          totalLength = 0,
          available = this.bytes.length - this.byteLength; // Calculate total byte length

      if (isArrayOfBuffers) {
        var totalLength = 0;

        for (var i = 0; i < buffers.length; i++) {
          totalLength += buffers[i].byteLength;
        }
      } else {
        totalLength = buffers.byteLength;
      } // Do we need to resize or evict?


      if (totalLength > available) {
        if (this.mode === BitBuffer.MODE.EXPAND) {
          var newSize = Math.max(this.bytes.length * 2, totalLength - available);
          this.resize(newSize);
        } else {
          this.evict(totalLength);
        }
      }

      if (isArrayOfBuffers) {
        for (var i = 0; i < buffers.length; i++) {
          this.appendSingleBuffer(buffers[i]);
        }
      } else {
        this.appendSingleBuffer(buffers);
      }

      return totalLength;
    });

    _defineProperty(this, "appendSingleBuffer", function (buffer) {
      buffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
      this.bytes.set(buffer, this.byteLength);
      this.byteLength += buffer.length;
    });

    _defineProperty(this, "findNextStartCode", function () {
      for (var i = this.index + 7 >> 3; i < this.byteLength; i++) {
        if (this.bytes[i] == 0x00 && this.bytes[i + 1] == 0x00 && this.bytes[i + 2] == 0x01) {
          this.index = i + 4 << 3;
          return this.bytes[i + 3];
        }
      }

      this.index = this.byteLength << 3;
      return -1;
    });

    _defineProperty(this, "findStartCode", function (code) {
      var current = 0;

      while (true) {
        current = this.findNextStartCode();

        if (current === code || current === -1) {
          return current;
        }
      }

      return -1;
    });

    _defineProperty(this, "nextBytesAreStartCode", function () {
      var i = this.index + 7 >> 3;
      return i >= this.byteLength || this.bytes[i] == 0x00 && this.bytes[i + 1] == 0x00 && this.bytes[i + 2] == 0x01;
    });

    _defineProperty(this, "peek", function (count) {
      var offset = this.index;
      var value = 0;

      while (count) {
        var currentByte = this.bytes[offset >> 3],
            remaining = 8 - (offset & 7),
            // remaining bits in byte
        read = remaining < count ? remaining : count,
            // bits in this run
        shift = remaining - read,
            mask = 0xff >> 8 - read;
        value = value << read | (currentByte & mask << shift) >> shift;
        offset += read;
        count -= read;
      }

      return value;
    });

    _defineProperty(this, "read", function (count) {
      var value = this.peek(count);
      this.index += count;
      return value;
    });

    _defineProperty(this, "skip", function (count) {
      return this.index += count;
    });

    _defineProperty(this, "rewind", function (count) {
      this.index = Math.max(this.index - count, 0);
    });

    _defineProperty(this, "has", function (count) {
      return (this.byteLength << 3) - this.index >= count;
    });

    if (typeof bufferOrLength === "object") {
      this.bytes = bufferOrLength instanceof Uint8Array ? bufferOrLength : new Uint8Array(bufferOrLength);
      this.byteLength = this.bytes.length;
    } else {
      this.bytes = new Uint8Array(bufferOrLength || 1024 * 1024);
      this.byteLength = 0;
    }

    this.mode = mode || BitBuffer.MODE.EXPAND;
    this.index = 0;
  }

}

_defineProperty(BitBuffer, "MODE", {
  EVICT: 1,
  EXPAND: 2
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/canvas2d.js":
/*!*****************************************!*\
  !*** ./src/libs/jsmpeg/src/canvas2d.js ***!
  \*****************************************/
/*! exports provided: CanvasRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasRenderer", function() { return CanvasRenderer; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class CanvasRenderer {
  constructor(options) {
    _defineProperty(this, "destroy", function () {// Nothing to do here
    });

    _defineProperty(this, "resize", function (width, height) {
      this.width = width | 0;
      this.height = height | 0;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.imageData = this.context.getImageData(0, 0, this.width, this.height);
      Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["Fill"])(this.imageData.data, 255);
    });

    _defineProperty(this, "renderProgress", function (progress) {
      var w = this.canvas.width,
          h = this.canvas.height,
          ctx = this.context;
      ctx.fillStyle = "#222";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, h - h * progress, w, h * progress);
    });

    _defineProperty(this, "render", function (y, cb, cr) {
      this.YCbCrToRGBA(y, cb, cr, this.imageData.data);
      this.context.putImageData(this.imageData, 0, 0);
    });

    _defineProperty(this, "YCbCrToRGBA", function (y, cb, cr, rgba) {
      if (!this.enabled) {
        return;
      } // Chroma values are the same for each block of 4 pixels, so we proccess
      // 2 lines at a time, 2 neighboring pixels each.
      // I wish we could use 32bit writes to the RGBA buffer instead of writing
      // each byte separately, but we need the automatic clamping of the RGBA
      // buffer.


      var w = this.width + 15 >> 4 << 4,
          w2 = w >> 1;
      var yIndex1 = 0,
          yIndex2 = w,
          yNext2Lines = w + (w - this.width);
      var cIndex = 0,
          cNextLine = w2 - (this.width >> 1);
      var rgbaIndex1 = 0,
          rgbaIndex2 = this.width * 4,
          rgbaNext2Lines = this.width * 4;
      var cols = this.width >> 1,
          rows = this.height >> 1;
      var ccb, ccr, r, g, b;

      for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
          ccb = cb[cIndex];
          ccr = cr[cIndex];
          cIndex++;
          r = ccb + (ccb * 103 >> 8) - 179;
          g = (ccr * 88 >> 8) - 44 + (ccb * 183 >> 8) - 91;
          b = ccr + (ccr * 198 >> 8) - 227; // Line 1

          var y1 = y[yIndex1++];
          var y2 = y[yIndex1++];
          rgba[rgbaIndex1] = y1 + r;
          rgba[rgbaIndex1 + 1] = y1 - g;
          rgba[rgbaIndex1 + 2] = y1 + b;
          rgba[rgbaIndex1 + 4] = y2 + r;
          rgba[rgbaIndex1 + 5] = y2 - g;
          rgba[rgbaIndex1 + 6] = y2 + b;
          rgbaIndex1 += 8; // Line 2

          var y3 = y[yIndex2++];
          var y4 = y[yIndex2++];
          rgba[rgbaIndex2] = y3 + r;
          rgba[rgbaIndex2 + 1] = y3 - g;
          rgba[rgbaIndex2 + 2] = y3 + b;
          rgba[rgbaIndex2 + 4] = y4 + r;
          rgba[rgbaIndex2 + 5] = y4 - g;
          rgba[rgbaIndex2 + 6] = y4 + b;
          rgbaIndex2 += 8;
        }

        yIndex1 += yNext2Lines;
        yIndex2 += yNext2Lines;
        rgbaIndex1 += rgbaNext2Lines;
        rgbaIndex2 += rgbaNext2Lines;
        cIndex += cNextLine;
      }
    });

    this.canvas = options.canvas || document.createElement("canvas");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.enabled = true;
    this.context = this.canvas.getContext("2d");
  }

}

/***/ }),

/***/ "./src/libs/jsmpeg/src/decoder.js":
/*!****************************************!*\
  !*** ./src/libs/jsmpeg/src/decoder.js ***!
  \****************************************/
/*! exports provided: BaseDecoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDecoder", function() { return BaseDecoder; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BaseDecoder {
  constructor(options) {
    _defineProperty(this, "destroy", () => {});

    _defineProperty(this, "connect", destination => {
      this.destination = destination;
    });

    _defineProperty(this, "bufferGetIndex", () => {
      return this.bits.index;
    });

    _defineProperty(this, "bufferSetIndex", index => {
      this.bits.index = index;
    });

    _defineProperty(this, "bufferWrite", buffers => {
      return this.bits.write(buffers);
    });

    _defineProperty(this, "write", (pts, buffers) => {
      this.baseWrite(pts, buffers);
    });

    _defineProperty(this, "baseWrite", (pts, buffers) => {
      if (this.collectTimestamps) {
        if (this.timestamps.length === 0) {
          this.startTime = pts;
          this.decodedTime = pts;
        }

        this.timestamps.push({
          index: this.bytesWritten << 3,
          time: pts
        });
      }

      this.bytesWritten += this.bufferWrite(buffers);
      this.canPlay = true;
    });

    _defineProperty(this, "seek", function (time) {
      if (!this.collectTimestamps) {
        return;
      }

      this.timestampIndex = 0;

      for (var i = 0; i < this.timestamps.length; i++) {
        if (this.timestamps[i].time > time) {
          break;
        }

        this.timestampIndex = i;
      }

      let ts = this.timestamps[this.timestampIndex];

      if (ts) {
        this.bufferSetIndex(ts.index);
        this.decodedTime = ts.time;
      } else {
        this.bufferSetIndex(0);
        this.decodedTime = this.startTime;
      }
    });

    _defineProperty(this, "decode", function () {
      this.advanceDecodedTime(0);
    });

    _defineProperty(this, "advanceDecodedTime", seconds => {
      if (this.collectTimestamps) {
        let newTimestampIndex = -1;
        let currentIndex = this.bufferGetIndex();

        for (let i = this.timestampIndex; i < this.timestamps.length; i++) {
          if (this.timestamps[i].index > currentIndex) {
            break;
          }

          newTimestampIndex = i;
        } // Did we find a new PTS, different from the last? If so, we don't have
        // to advance the decoded time manually and can instead sync it exactly
        // to the PTS.


        if (newTimestampIndex !== -1 && newTimestampIndex !== this.timestampIndex) {
          this.timestampIndex = newTimestampIndex;
          this.decodedTime = this.timestamps[this.timestampIndex].time;
          return;
        }
      }

      this.decodedTime += seconds;
    });

    _defineProperty(this, "getCurrentTime", function () {
      return this.decodedTime;
    });

    this.destination = null;
    this.canPlay = false;
    this.collectTimestamps = !options.streaming;
    this.bytesWritten = 0;
    this.timestamps = [];
    this.timestampIndex = 0;
    this.startTime = 0;
    this.decodedTime = 0;
    Object.defineProperty(this, "currentTime", {
      get: this.getCurrentTime
    });
  }

}

/***/ }),

/***/ "./src/libs/jsmpeg/src/mp2-wasm.js":
/*!*****************************************!*\
  !*** ./src/libs/jsmpeg/src/mp2-wasm.js ***!
  \*****************************************/
/*! exports provided: MP2WASM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MP2WASM", function() { return MP2WASM; });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Based on kjmp2 by Martin J. Fiedler
// http://keyj.emphy.de/kjmp2/



class MP2WASM extends _decoder_js__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"] {
  constructor(options) {
    super(options);

    _defineProperty(this, "initializeWasmDecoder", () => {
      if (!this.module.instance) {
        console.warn("JSMpeg: WASM module not compiled yet");
        return;
      }

      this.instance = this.module.instance;
      this.functions = this.module.instance.exports;
      this.decoder = this.functions.mp2_decoder_create(this.bufferSize, this.bufferMode);
    });

    _defineProperty(this, "destroy", () => {
      if (!this.decoder) {
        return;
      }
      /*this.functions && */


      this.functions.mp2_decoder_destroy(this.decoder);
    });

    _defineProperty(this, "bufferGetIndex", () => {
      if (!this.decoder) {
        return;
      }

      return this.functions.mp2_decoder_get_index(this.decoder);
    });

    _defineProperty(this, "bufferSetIndex", index => {
      if (!this.decoder) {
        return;
      }

      this.functions.mp2_decoder_set_index(this.decoder, index);
    });

    _defineProperty(this, "bufferWrite", buffers => {
      // 1/28/20
      // https://github.com/SuperAwesomeLTD/jsmpeg/pull/1/commits/e2728ba23086fec6aea62f4f2810c5c755199a40
      if (!this.module.instance) {
        console.warn("JSMpeg: WASM module not compiled yet");
        return;
      }

      if (!this.decoder) {
        this.initializeWasmDecoder();
      }

      let totalLength = 0;

      for (let i = 0; i < buffers.length; i++) {
        totalLength += buffers[i].length;
      }

      let ptr = this.functions.mp2_decoder_get_write_ptr(this.decoder, totalLength);

      for (let i = 0; i < buffers.length; i++) {
        this.instance.heapU8.set(buffers[i], ptr);
        ptr += buffers[i].length;
      }

      this.functions.mp2_decoder_did_write(this.decoder, totalLength);
      return totalLength;
    });

    _defineProperty(this, "write", (pts, buffers) => {
      this.baseWrite(pts, buffers);
    });

    _defineProperty(this, "decode", () => {
      let startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])();

      if (!this.decoder) {
        return false;
      }

      let decodedBytes = this.functions.mp2_decoder_decode(this.decoder);

      if (decodedBytes === 0) {
        return false;
      }

      if (!this.sampleRate) {
        this.sampleRate = this.functions.mp2_decoder_get_sample_rate(this.decoder);
      }

      if (this.destination) {
        // Create a Float32 View into the modules output channel data
        let leftPtr = this.functions.mp2_decoder_get_left_channel_ptr(this.decoder),
            rightPtr = this.functions.mp2_decoder_get_right_channel_ptr(this.decoder);
        let leftOffset = leftPtr / Float32Array.BYTES_PER_ELEMENT,
            rightOffset = rightPtr / Float32Array.BYTES_PER_ELEMENT;
        let left = this.instance.heapF32.subarray(leftOffset, leftOffset + MP2WASM.SAMPLES_PER_FRAME),
            right = this.instance.heapF32.subarray(rightOffset, rightOffset + MP2WASM.SAMPLES_PER_FRAME);
        this.destination.play(this.sampleRate, left, right);
      }

      this.advanceDecodedTime(MP2WASM.SAMPLES_PER_FRAME / this.sampleRate);
      let elapsedTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

      if (this.onDecodeCallback) {
        this.onDecodeCallback(this, elapsedTime);
      }

      return true;
    });

    _defineProperty(this, "getCurrentTime", () => {
      let enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
      return this.decodedTime - enqueuedTime;
    });

    this.onDecodeCallback = options.onAudioDecode;
    this.module = options.wasmModule;
    this.bufferSize = options.audioBufferSize || 128 * 1024;
    this.bufferMode = options.streaming ? _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EVICT : _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EXPAND;
    this.sampleRate = 0;
  }

}

_defineProperty(MP2WASM, "SAMPLES_PER_FRAME", 1152);

/***/ }),

/***/ "./src/libs/jsmpeg/src/mp2.js":
/*!************************************!*\
  !*** ./src/libs/jsmpeg/src/mp2.js ***!
  \************************************/
/*! exports provided: MP2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MP2", function() { return MP2; });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// JSMpeg.Decoder.MP2Audio = (function(){ "use strict";
// Based on kjmp2 by Martin J. Fiedler
// http://keyj.emphy.de/kjmp2/



class MP2 extends _decoder_js__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"] {
  constructor(options) {
    super(options);

    _defineProperty(this, "decode", function () {
      var startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])();
      var pos = this.bits.index >> 3;

      if (pos >= this.bits.byteLength) {
        return false;
      }

      var decoded = this.decodeFrame(this.left, this.right);
      this.bits.index = pos + decoded << 3;

      if (!decoded) {
        return false;
      }

      if (this.destination) {
        this.destination.play(this.sampleRate, this.left, this.right);
      }

      this.advanceDecodedTime(this.left.length / this.sampleRate);
      var elapsedTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

      if (this.onDecodeCallback) {
        this.onDecodeCallback(this, elapsedTime);
      }

      return true;
    });

    _defineProperty(this, "getCurrentTime", function () {
      var enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
      return this.decodedTime - enqueuedTime;
    });

    _defineProperty(this, "decodeFrame", function (left, right) {
      // Check for valid header: syncword OK, MPEG-Audio Layer 2
      var sync = this.bits.read(11),
          version = this.bits.read(2),
          layer = this.bits.read(2),
          hasCRC = !this.bits.read(1);

      if (sync !== MP2.FRAME_SYNC || version !== MP2.VERSION.MPEG_1 || layer !== MP2.LAYER.II) {
        return 0; // Invalid header or unsupported version
      }

      var bitrateIndex = this.bits.read(4) - 1;

      if (bitrateIndex > 13) {
        return 0; // Invalid bit rate or 'free format'
      }

      var sampleRateIndex = this.bits.read(2);
      var sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];

      if (sampleRateIndex === 3) {
        return 0; // Invalid sample rate
      }

      if (version === MP2.VERSION.MPEG_2) {
        sampleRateIndex += 4;
        bitrateIndex += 14;
      }

      var padding = this.bits.read(1),
          privat = this.bits.read(1),
          mode = this.bits.read(2); // Parse the mode_extension, set up the stereo bound

      var bound = 0;

      if (mode === MP2.MODE.JOINT_STEREO) {
        bound = this.bits.read(2) + 1 << 2;
      } else {
        this.bits.skip(2);
        bound = mode === MP2.MODE.MONO ? 0 : 32;
      } // Discard the last 4 bits of the header and the CRC value, if present


      this.bits.skip(4);

      if (hasCRC) {
        this.bits.skip(16);
      } // Compute the frame size


      var bitrate = MP2.BIT_RATE[bitrateIndex],
          sampleRate = MP2.SAMPLE_RATE[sampleRateIndex],
          frameSize = 144000 * bitrate / sampleRate + padding | 0; // Prepare the quantizer table lookups

      var tab3 = 0;
      var sblimit = 0;

      if (version === MP2.VERSION.MPEG_2) {
        // MPEG-2 (LSR)
        tab3 = 2;
        sblimit = 30;
      } else {
        // MPEG-1
        var tab1 = mode === MP2.MODE.MONO ? 0 : 1;
        var tab2 = MP2.QUANT_LUT_STEP_1[tab1][bitrateIndex];
        tab3 = MP2.QUANT_LUT_STEP_2[tab2][sampleRateIndex];
        sblimit = tab3 & 63;
        tab3 >>= 6;
      }

      if (bound > sblimit) {
        bound = sblimit;
      } // Read the allocation information


      for (var sb = 0; sb < bound; sb++) {
        this.allocation[0][sb] = this.readAllocation(sb, tab3);
        this.allocation[1][sb] = this.readAllocation(sb, tab3);
      }

      for (var sb = bound; sb < sblimit; sb++) {
        this.allocation[0][sb] = this.allocation[1][sb] = this.readAllocation(sb, tab3);
      } // Read scale factor selector information


      var channels = mode === MP2.MODE.MONO ? 1 : 2;

      for (var sb = 0; sb < sblimit; sb++) {
        for (ch = 0; ch < channels; ch++) {
          if (this.allocation[ch][sb]) {
            this.scaleFactorInfo[ch][sb] = this.bits.read(2);
          }
        }

        if (mode === MP2.MODE.MONO) {
          this.scaleFactorInfo[1][sb] = this.scaleFactorInfo[0][sb];
        }
      } // Read scale factors


      for (var sb = 0; sb < sblimit; sb++) {
        for (var ch = 0; ch < channels; ch++) {
          if (this.allocation[ch][sb]) {
            var sf = this.scaleFactor[ch][sb];

            switch (this.scaleFactorInfo[ch][sb]) {
              case 0:
                sf[0] = this.bits.read(6);
                sf[1] = this.bits.read(6);
                sf[2] = this.bits.read(6);
                break;

              case 1:
                sf[0] = sf[1] = this.bits.read(6);
                sf[2] = this.bits.read(6);
                break;

              case 2:
                sf[0] = sf[1] = sf[2] = this.bits.read(6);
                break;

              case 3:
                sf[0] = this.bits.read(6);
                sf[1] = sf[2] = this.bits.read(6);
                break;
            }
          }
        }

        if (mode === MP2.MODE.MONO) {
          this.scaleFactor[1][sb][0] = this.scaleFactor[0][sb][0];
          this.scaleFactor[1][sb][1] = this.scaleFactor[0][sb][1];
          this.scaleFactor[1][sb][2] = this.scaleFactor[0][sb][2];
        }
      } // Coefficient input and reconstruction


      var outPos = 0;

      for (var part = 0; part < 3; part++) {
        for (var granule = 0; granule < 4; granule++) {
          // Read the samples
          for (var sb = 0; sb < bound; sb++) {
            this.readSamples(0, sb, part);
            this.readSamples(1, sb, part);
          }

          for (var sb = bound; sb < sblimit; sb++) {
            this.readSamples(0, sb, part);
            this.sample[1][sb][0] = this.sample[0][sb][0];
            this.sample[1][sb][1] = this.sample[0][sb][1];
            this.sample[1][sb][2] = this.sample[0][sb][2];
          }

          for (var sb = sblimit; sb < 32; sb++) {
            this.sample[0][sb][0] = 0;
            this.sample[0][sb][1] = 0;
            this.sample[0][sb][2] = 0;
            this.sample[1][sb][0] = 0;
            this.sample[1][sb][1] = 0;
            this.sample[1][sb][2] = 0;
          } // Synthesis loop


          for (var p = 0; p < 3; p++) {
            // Shifting step
            this.VPos = this.VPos - 64 & 1023;

            for (var ch = 0; ch < 2; ch++) {
              this.MatrixTransform(this.sample[ch], p, this.V, this.VPos); // Build U, windowing, calculate output

              Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Fill"])(this.U, 0);
              var dIndex = 512 - (this.VPos >> 1);
              var vIndex = this.VPos % 128 >> 1;

              while (vIndex < 1024) {
                for (var i = 0; i < 32; ++i) {
                  this.U[i] += this.D[dIndex++] * this.V[vIndex++];
                }

                vIndex += 128 - 32;
                dIndex += 64 - 32;
              }

              vIndex = 128 - 32 + 1024 - vIndex;
              dIndex -= 512 - 32;

              while (vIndex < 1024) {
                for (var i = 0; i < 32; ++i) {
                  this.U[i] += this.D[dIndex++] * this.V[vIndex++];
                }

                vIndex += 128 - 32;
                dIndex += 64 - 32;
              } // Output samples


              var outChannel = ch === 0 ? left : right;

              for (var j = 0; j < 32; j++) {
                outChannel[outPos + j] = this.U[j] / 2147418112;
              }
            } // End of synthesis channel loop


            outPos += 32;
          } // End of synthesis sub-block loop

        } // Decoding of the granule finished

      }

      this.sampleRate = sampleRate;
      return frameSize;
    });

    _defineProperty(this, "readAllocation", function (sb, tab3) {
      var tab4 = MP2.QUANT_LUT_STEP_3[tab3][sb];
      var qtab = MP2.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)];
      return qtab ? MP2.QUANT_TAB[qtab - 1] : 0;
    });

    _defineProperty(this, "readSamples", function (ch, sb, part) {
      var q = this.allocation[ch][sb],
          sf = this.scaleFactor[ch][sb][part],
          sample = this.sample[ch][sb],
          val = 0;

      if (!q) {
        // No bits allocated for this subband
        sample[0] = sample[1] = sample[2] = 0;
        return;
      } // Resolve scalefactor


      if (sf === 63) {
        sf = 0;
      } else {
        var shift = sf / 3 | 0;
        sf = MP2.SCALEFACTOR_BASE[sf % 3] + (1 << shift >> 1) >> shift;
      } // Decode samples


      var adj = q.levels;

      if (q.group) {
        // Decode grouped samples
        val = this.bits.read(q.bits);
        sample[0] = val % adj;
        val = val / adj | 0;
        sample[1] = val % adj;
        sample[2] = val / adj | 0;
      } else {
        // Decode direct samples
        sample[0] = this.bits.read(q.bits);
        sample[1] = this.bits.read(q.bits);
        sample[2] = this.bits.read(q.bits);
      } // Postmultiply samples


      var scale = 65536 / (adj + 1) | 0;
      adj = (adj + 1 >> 1) - 1;
      val = (adj - sample[0]) * scale;
      sample[0] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
      val = (adj - sample[1]) * scale;
      sample[1] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
      val = (adj - sample[2]) * scale;
      sample[2] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
    });

    _defineProperty(this, "MatrixTransform", function (s, ss, d, dp) {
      var t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33;
      t01 = s[0][ss] + s[31][ss];
      t02 = (s[0][ss] - s[31][ss]) * 0.500602998235;
      t03 = s[1][ss] + s[30][ss];
      t04 = (s[1][ss] - s[30][ss]) * 0.505470959898;
      t05 = s[2][ss] + s[29][ss];
      t06 = (s[2][ss] - s[29][ss]) * 0.515447309923;
      t07 = s[3][ss] + s[28][ss];
      t08 = (s[3][ss] - s[28][ss]) * 0.53104259109;
      t09 = s[4][ss] + s[27][ss];
      t10 = (s[4][ss] - s[27][ss]) * 0.553103896034;
      t11 = s[5][ss] + s[26][ss];
      t12 = (s[5][ss] - s[26][ss]) * 0.582934968206;
      t13 = s[6][ss] + s[25][ss];
      t14 = (s[6][ss] - s[25][ss]) * 0.622504123036;
      t15 = s[7][ss] + s[24][ss];
      t16 = (s[7][ss] - s[24][ss]) * 0.674808341455;
      t17 = s[8][ss] + s[23][ss];
      t18 = (s[8][ss] - s[23][ss]) * 0.744536271002;
      t19 = s[9][ss] + s[22][ss];
      t20 = (s[9][ss] - s[22][ss]) * 0.839349645416;
      t21 = s[10][ss] + s[21][ss];
      t22 = (s[10][ss] - s[21][ss]) * 0.972568237862;
      t23 = s[11][ss] + s[20][ss];
      t24 = (s[11][ss] - s[20][ss]) * 1.16943993343;
      t25 = s[12][ss] + s[19][ss];
      t26 = (s[12][ss] - s[19][ss]) * 1.48416461631;
      t27 = s[13][ss] + s[18][ss];
      t28 = (s[13][ss] - s[18][ss]) * 2.05778100995;
      t29 = s[14][ss] + s[17][ss];
      t30 = (s[14][ss] - s[17][ss]) * 3.40760841847;
      t31 = s[15][ss] + s[16][ss];
      t32 = (s[15][ss] - s[16][ss]) * 10.1900081235;
      t33 = t01 + t31;
      t31 = (t01 - t31) * 0.502419286188;
      t01 = t03 + t29;
      t29 = (t03 - t29) * 0.52249861494;
      t03 = t05 + t27;
      t27 = (t05 - t27) * 0.566944034816;
      t05 = t07 + t25;
      t25 = (t07 - t25) * 0.64682178336;
      t07 = t09 + t23;
      t23 = (t09 - t23) * 0.788154623451;
      t09 = t11 + t21;
      t21 = (t11 - t21) * 1.06067768599;
      t11 = t13 + t19;
      t19 = (t13 - t19) * 1.72244709824;
      t13 = t15 + t17;
      t17 = (t15 - t17) * 5.10114861869;
      t15 = t33 + t13;
      t13 = (t33 - t13) * 0.509795579104;
      t33 = t01 + t11;
      t01 = (t01 - t11) * 0.601344886935;
      t11 = t03 + t09;
      t09 = (t03 - t09) * 0.899976223136;
      t03 = t05 + t07;
      t07 = (t05 - t07) * 2.56291544774;
      t05 = t15 + t03;
      t15 = (t15 - t03) * 0.541196100146;
      t03 = t33 + t11;
      t11 = (t33 - t11) * 1.30656296488;
      t33 = t05 + t03;
      t05 = (t05 - t03) * 0.707106781187;
      t03 = t15 + t11;
      t15 = (t15 - t11) * 0.707106781187;
      t03 += t15;
      t11 = t13 + t07;
      t13 = (t13 - t07) * 0.541196100146;
      t07 = t01 + t09;
      t09 = (t01 - t09) * 1.30656296488;
      t01 = t11 + t07;
      t07 = (t11 - t07) * 0.707106781187;
      t11 = t13 + t09;
      t13 = (t13 - t09) * 0.707106781187;
      t11 += t13;
      t01 += t11;
      t11 += t07;
      t07 += t13;
      t09 = t31 + t17;
      t31 = (t31 - t17) * 0.509795579104;
      t17 = t29 + t19;
      t29 = (t29 - t19) * 0.601344886935;
      t19 = t27 + t21;
      t21 = (t27 - t21) * 0.899976223136;
      t27 = t25 + t23;
      t23 = (t25 - t23) * 2.56291544774;
      t25 = t09 + t27;
      t09 = (t09 - t27) * 0.541196100146;
      t27 = t17 + t19;
      t19 = (t17 - t19) * 1.30656296488;
      t17 = t25 + t27;
      t27 = (t25 - t27) * 0.707106781187;
      t25 = t09 + t19;
      t19 = (t09 - t19) * 0.707106781187;
      t25 += t19;
      t09 = t31 + t23;
      t31 = (t31 - t23) * 0.541196100146;
      t23 = t29 + t21;
      t21 = (t29 - t21) * 1.30656296488;
      t29 = t09 + t23;
      t23 = (t09 - t23) * 0.707106781187;
      t09 = t31 + t21;
      t31 = (t31 - t21) * 0.707106781187;
      t09 += t31;
      t29 += t09;
      t09 += t23;
      t23 += t31;
      t17 += t29;
      t29 += t25;
      t25 += t09;
      t09 += t27;
      t27 += t23;
      t23 += t19;
      t19 += t31;
      t21 = t02 + t32;
      t02 = (t02 - t32) * 0.502419286188;
      t32 = t04 + t30;
      t04 = (t04 - t30) * 0.52249861494;
      t30 = t06 + t28;
      t28 = (t06 - t28) * 0.566944034816;
      t06 = t08 + t26;
      t08 = (t08 - t26) * 0.64682178336;
      t26 = t10 + t24;
      t10 = (t10 - t24) * 0.788154623451;
      t24 = t12 + t22;
      t22 = (t12 - t22) * 1.06067768599;
      t12 = t14 + t20;
      t20 = (t14 - t20) * 1.72244709824;
      t14 = t16 + t18;
      t16 = (t16 - t18) * 5.10114861869;
      t18 = t21 + t14;
      t14 = (t21 - t14) * 0.509795579104;
      t21 = t32 + t12;
      t32 = (t32 - t12) * 0.601344886935;
      t12 = t30 + t24;
      t24 = (t30 - t24) * 0.899976223136;
      t30 = t06 + t26;
      t26 = (t06 - t26) * 2.56291544774;
      t06 = t18 + t30;
      t18 = (t18 - t30) * 0.541196100146;
      t30 = t21 + t12;
      t12 = (t21 - t12) * 1.30656296488;
      t21 = t06 + t30;
      t30 = (t06 - t30) * 0.707106781187;
      t06 = t18 + t12;
      t12 = (t18 - t12) * 0.707106781187;
      t06 += t12;
      t18 = t14 + t26;
      t26 = (t14 - t26) * 0.541196100146;
      t14 = t32 + t24;
      t24 = (t32 - t24) * 1.30656296488;
      t32 = t18 + t14;
      t14 = (t18 - t14) * 0.707106781187;
      t18 = t26 + t24;
      t24 = (t26 - t24) * 0.707106781187;
      t18 += t24;
      t32 += t18;
      t18 += t14;
      t26 = t14 + t24;
      t14 = t02 + t16;
      t02 = (t02 - t16) * 0.509795579104;
      t16 = t04 + t20;
      t04 = (t04 - t20) * 0.601344886935;
      t20 = t28 + t22;
      t22 = (t28 - t22) * 0.899976223136;
      t28 = t08 + t10;
      t10 = (t08 - t10) * 2.56291544774;
      t08 = t14 + t28;
      t14 = (t14 - t28) * 0.541196100146;
      t28 = t16 + t20;
      t20 = (t16 - t20) * 1.30656296488;
      t16 = t08 + t28;
      t28 = (t08 - t28) * 0.707106781187;
      t08 = t14 + t20;
      t20 = (t14 - t20) * 0.707106781187;
      t08 += t20;
      t14 = t02 + t10;
      t02 = (t02 - t10) * 0.541196100146;
      t10 = t04 + t22;
      t22 = (t04 - t22) * 1.30656296488;
      t04 = t14 + t10;
      t10 = (t14 - t10) * 0.707106781187;
      t14 = t02 + t22;
      t02 = (t02 - t22) * 0.707106781187;
      t14 += t02;
      t04 += t14;
      t14 += t10;
      t10 += t02;
      t16 += t04;
      t04 += t08;
      t08 += t14;
      t14 += t28;
      t28 += t10;
      t10 += t20;
      t20 += t02;
      t21 += t16;
      t16 += t32;
      t32 += t04;
      t04 += t06;
      t06 += t08;
      t08 += t18;
      t18 += t14;
      t14 += t30;
      t30 += t28;
      t28 += t26;
      t26 += t10;
      t10 += t12;
      t12 += t20;
      t20 += t24;
      t24 += t02;
      d[dp + 48] = -t33;
      d[dp + 49] = d[dp + 47] = -t21;
      d[dp + 50] = d[dp + 46] = -t17;
      d[dp + 51] = d[dp + 45] = -t16;
      d[dp + 52] = d[dp + 44] = -t01;
      d[dp + 53] = d[dp + 43] = -t32;
      d[dp + 54] = d[dp + 42] = -t29;
      d[dp + 55] = d[dp + 41] = -t04;
      d[dp + 56] = d[dp + 40] = -t03;
      d[dp + 57] = d[dp + 39] = -t06;
      d[dp + 58] = d[dp + 38] = -t25;
      d[dp + 59] = d[dp + 37] = -t08;
      d[dp + 60] = d[dp + 36] = -t11;
      d[dp + 61] = d[dp + 35] = -t18;
      d[dp + 62] = d[dp + 34] = -t09;
      d[dp + 63] = d[dp + 33] = -t14;
      d[dp + 32] = -t05;
      d[dp + 0] = t05;
      d[dp + 31] = -t30;
      d[dp + 1] = t30;
      d[dp + 30] = -t27;
      d[dp + 2] = t27;
      d[dp + 29] = -t28;
      d[dp + 3] = t28;
      d[dp + 28] = -t07;
      d[dp + 4] = t07;
      d[dp + 27] = -t26;
      d[dp + 5] = t26;
      d[dp + 26] = -t23;
      d[dp + 6] = t23;
      d[dp + 25] = -t10;
      d[dp + 7] = t10;
      d[dp + 24] = -t15;
      d[dp + 8] = t15;
      d[dp + 23] = -t12;
      d[dp + 9] = t12;
      d[dp + 22] = -t19;
      d[dp + 10] = t19;
      d[dp + 21] = -t20;
      d[dp + 11] = t20;
      d[dp + 20] = -t13;
      d[dp + 12] = t13;
      d[dp + 19] = -t24;
      d[dp + 13] = t24;
      d[dp + 18] = -t31;
      d[dp + 14] = t31;
      d[dp + 17] = -t02;
      d[dp + 15] = t02;
      d[dp + 16] = 0.0;
    });

    this.onDecodeCallback = options.onAudioDecode;
    var bufferSize = options.audioBufferSize || 128 * 1024;
    var bufferMode = options.streaming ? _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EVICT : _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EXPAND;
    this.bits = new _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"](bufferSize, bufferMode);
    this.left = new Float32Array(1152);
    this.right = new Float32Array(1152);
    this.sampleRate = 44100;
    this.D = new Float32Array(1024);
    this.D.set(MP2.SYNTHESIS_WINDOW, 0);
    this.D.set(MP2.SYNTHESIS_WINDOW, 512);
    this.V = new Float32Array(1024);
    this.U = new Int32Array(32);
    this.VPos = 0;
    this.allocation = [new Array(32), new Array(32)];
    this.scaleFactorInfo = [new Uint8Array(32), new Uint8Array(32)];
    this.scaleFactor = [new Array(32), new Array(32)];
    this.sample = [new Array(32), new Array(32)];

    for (var _j = 0; _j < 2; _j++) {
      for (var _i = 0; _i < 32; _i++) {
        this.scaleFactor[_j][_i] = [0, 0, 0];
        this.sample[_j][_i] = [0, 0, 0];
      }
    }
  }

}

_defineProperty(MP2, "FRAME_SYNC", 0x7ff);

_defineProperty(MP2, "VERSION", {
  MPEG_2_5: 0x0,
  MPEG_2: 0x2,
  MPEG_1: 0x3
});

_defineProperty(MP2, "LAYER", {
  III: 0x1,
  II: 0x2,
  I: 0x3
});

_defineProperty(MP2, "MODE", {
  STEREO: 0x0,
  JOINT_STEREO: 0x1,
  DUAL_CHANNEL: 0x2,
  MONO: 0x3
});

_defineProperty(MP2, "SAMPLE_RATE", new Uint16Array([44100, 48000, 32000, 0, // MPEG-1
22050, 24000, 16000, 0 // MPEG-2
]));

_defineProperty(MP2, "BIT_RATE", new Uint16Array([32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, // MPEG-1
8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160 // MPEG-2
]));

_defineProperty(MP2, "SCALEFACTOR_BASE", new Uint32Array([0x02000000, 0x01965fea, 0x01428a30]));

_defineProperty(MP2, "SYNTHESIS_WINDOW", new Float32Array([0.0, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -1.0, -1.0, -1.0, -1.0, -1.5, -1.5, -2.0, -2.0, -2.5, -2.5, -3.0, -3.5, -3.5, -4.0, -4.5, -5.0, -5.5, -6.5, -7.0, -8.0, -8.5, -9.5, -10.5, -12.0, -13.0, -14.5, -15.5, -17.5, -19.0, -20.5, -22.5, -24.5, -26.5, -29.0, -31.5, -34.0, -36.5, -39.5, -42.5, -45.5, -48.5, -52.0, -55.5, -58.5, -62.5, -66.0, -69.5, -73.5, -77.0, -80.5, -84.5, -88.0, -91.5, -95.0, -98.0, -101.0, -104.0, 106.5, 109.0, 111.0, 112.5, 113.5, 114.0, 114.0, 113.5, 112.0, 110.5, 107.5, 104.0, 100.0, 94.5, 88.5, 81.5, 73.0, 63.5, 53.0, 41.5, 28.5, 14.5, -1.0, -18.0, -36.0, -55.5, -76.5, -98.5, -122.0, -147.0, -173.5, -200.5, -229.5, -259.5, -290.5, -322.5, -355.5, -389.5, -424.0, -459.5, -495.5, -532.0, -568.5, -605.0, -641.5, -678.0, -714.0, -749.0, -783.5, -817.0, -849.0, -879.5, -908.5, -935.0, -959.5, -981.0, -1000.5, -1016.0, -1028.5, -1037.5, -1042.5, -1043.5, -1040.0, -1031.5, 1018.5, 1000.0, 976.0, 946.5, 911.0, 869.5, 822.0, 767.5, 707.0, 640.0, 565.5, 485.0, 397.0, 302.5, 201.0, 92.5, -22.5, -144.0, -272.5, -407.0, -547.5, -694.0, -846.0, -1003.0, -1165.0, -1331.5, -1502.0, -1675.5, -1852.5, -2031.5, -2212.5, -2394.0, -2576.5, -2758.5, -2939.5, -3118.5, -3294.5, -3467.5, -3635.5, -3798.5, -3955.0, -4104.5, -4245.5, -4377.5, -4499.0, -4609.5, -4708.0, -4792.5, -4863.5, -4919.0, -4958.0, -4979.5, -4983.0, -4967.5, -4931.5, -4875.0, -4796.0, -4694.5, -4569.5, -4420.0, -4246.0, -4046.0, -3820.0, -3567.0, 3287.0, 2979.5, 2644.0, 2280.5, 1888.0, 1467.5, 1018.5, 541.0, 35.0, -499.0, -1061.0, -1650.0, -2266.5, -2909.0, -3577.0, -4270.0, -4987.5, -5727.5, -6490.0, -7274.0, -8077.5, -8899.5, -9739.0, -10594.5, -11464.5, -12347.0, -13241.0, -14144.5, -15056.0, -15973.5, -16895.5, -17820.0, -18744.5, -19668.0, -20588.0, -21503.0, -22410.5, -23308.5, -24195.0, -25068.5, -25926.5, -26767.0, -27589.0, -28389.0, -29166.5, -29919.0, -30644.5, -31342.0, -32009.5, -32645.0, -33247.0, -33814.5, -34346.0, -34839.5, -35295.0, -35710.0, -36084.5, -36417.5, -36707.5, -36954.0, -37156.5, -37315.0, -37428.0, -37496.0, 37519.0, 37496.0, 37428.0, 37315.0, 37156.5, 36954.0, 36707.5, 36417.5, 36084.5, 35710.0, 35295.0, 34839.5, 34346.0, 33814.5, 33247.0, 32645.0, 32009.5, 31342.0, 30644.5, 29919.0, 29166.5, 28389.0, 27589.0, 26767.0, 25926.5, 25068.5, 24195.0, 23308.5, 22410.5, 21503.0, 20588.0, 19668.0, 18744.5, 17820.0, 16895.5, 15973.5, 15056.0, 14144.5, 13241.0, 12347.0, 11464.5, 10594.5, 9739.0, 8899.5, 8077.5, 7274.0, 6490.0, 5727.5, 4987.5, 4270.0, 3577.0, 2909.0, 2266.5, 1650.0, 1061.0, 499.0, -35.0, -541.0, -1018.5, -1467.5, -1888.0, -2280.5, -2644.0, -2979.5, 3287.0, 3567.0, 3820.0, 4046.0, 4246.0, 4420.0, 4569.5, 4694.5, 4796.0, 4875.0, 4931.5, 4967.5, 4983.0, 4979.5, 4958.0, 4919.0, 4863.5, 4792.5, 4708.0, 4609.5, 4499.0, 4377.5, 4245.5, 4104.5, 3955.0, 3798.5, 3635.5, 3467.5, 3294.5, 3118.5, 2939.5, 2758.5, 2576.5, 2394.0, 2212.5, 2031.5, 1852.5, 1675.5, 1502.0, 1331.5, 1165.0, 1003.0, 846.0, 694.0, 547.5, 407.0, 272.5, 144.0, 22.5, -92.5, -201.0, -302.5, -397.0, -485.0, -565.5, -640.0, -707.0, -767.5, -822.0, -869.5, -911.0, -946.5, -976.0, -1000.0, 1018.5, 1031.5, 1040.0, 1043.5, 1042.5, 1037.5, 1028.5, 1016.0, 1000.5, 981.0, 959.5, 935.0, 908.5, 879.5, 849.0, 817.0, 783.5, 749.0, 714.0, 678.0, 641.5, 605.0, 568.5, 532.0, 495.5, 459.5, 424.0, 389.5, 355.5, 322.5, 290.5, 259.5, 229.5, 200.5, 173.5, 147.0, 122.0, 98.5, 76.5, 55.5, 36.0, 18.0, 1.0, -14.5, -28.5, -41.5, -53.0, -63.5, -73.0, -81.5, -88.5, -94.5, -100.0, -104.0, -107.5, -110.5, -112.0, -113.5, -114.0, -114.0, -113.5, -112.5, -111.0, -109.0, 106.5, 104.0, 101.0, 98.0, 95.0, 91.5, 88.0, 84.5, 80.5, 77.0, 73.5, 69.5, 66.0, 62.5, 58.5, 55.5, 52.0, 48.5, 45.5, 42.5, 39.5, 36.5, 34.0, 31.5, 29.0, 26.5, 24.5, 22.5, 20.5, 19.0, 17.5, 15.5, 14.5, 13.0, 12.0, 10.5, 9.5, 8.5, 8.0, 7.0, 6.5, 5.5, 5.0, 4.5, 4.0, 3.5, 3.5, 3.0, 2.5, 2.5, 2.0, 2.0, 1.5, 1.5, 1.0, 1.0, 1.0, 1.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]));

_defineProperty(MP2, "QUANT_LUT_STEP_1", [// 32, 48, 56, 64, 80, 96,112,128,160,192,224,256,320,384 <- bitrate
[0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2], // mono
// 16, 24, 28, 32, 40, 48, 56, 64, 80, 96,112,128,160,192 <- bitrate / chan
[0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2] // stereo
]);

_defineProperty(MP2, "QUANT_TAB", {
  A: 27 | 64,
  // Table 3-B.2a: high-rate, sblimit = 27
  B: 30 | 64,
  // Table 3-B.2b: high-rate, sblimit = 30
  C: 8,
  // Table 3-B.2c:  low-rate, sblimit =  8
  D: 12 // Table 3-B.2d:  low-rate, sblimit = 12

});

_defineProperty(MP2, "QUANT_LUT_STEP_2", [//   44.1 kHz,        48 kHz,          32 kHz
[MP2.QUANT_TAB.C, MP2.QUANT_TAB.C, MP2.QUANT_TAB.D], // 32 - 48 kbit/sec/ch
[MP2.QUANT_TAB.A, MP2.QUANT_TAB.A, MP2.QUANT_TAB.A], // 56 - 80 kbit/sec/ch
[MP2.QUANT_TAB.B, MP2.QUANT_TAB.A, MP2.QUANT_TAB.B] // 96+	 kbit/sec/ch
]);

_defineProperty(MP2, "QUANT_LUT_STEP_3", [// Low-rate table (3-B.2c and 3-B.2d)
[0x44, 0x44, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34], // High-rate table (3-B.2a and 3-B.2b)
[0x43, 0x43, 0x43, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x42, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20], // MPEG-2 LSR table (B.2 in ISO 13818-3)
[0x45, 0x45, 0x45, 0x45, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x34, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24]]);

_defineProperty(MP2, "QUANT_LUT_STEP4", [[0, 1, 2, 17], [0, 1, 2, 3, 4, 5, 6, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17], [0, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]]);

_defineProperty(MP2, "QUANT_TAB", [{
  levels: 3,
  group: 1,
  bits: 5
}, //  1
{
  levels: 5,
  group: 1,
  bits: 7
}, //  2
{
  levels: 7,
  group: 0,
  bits: 3
}, //  3
{
  levels: 9,
  group: 1,
  bits: 10
}, //  4
{
  levels: 15,
  group: 0,
  bits: 4
}, //  5
{
  levels: 31,
  group: 0,
  bits: 5
}, //  6
{
  levels: 63,
  group: 0,
  bits: 6
}, //  7
{
  levels: 127,
  group: 0,
  bits: 7
}, //  8
{
  levels: 255,
  group: 0,
  bits: 8
}, //  9
{
  levels: 511,
  group: 0,
  bits: 9
}, // 10
{
  levels: 1023,
  group: 0,
  bits: 10
}, // 11
{
  levels: 2047,
  group: 0,
  bits: 11
}, // 12
{
  levels: 4095,
  group: 0,
  bits: 12
}, // 13
{
  levels: 8191,
  group: 0,
  bits: 13
}, // 14
{
  levels: 16383,
  group: 0,
  bits: 14
}, // 15
{
  levels: 32767,
  group: 0,
  bits: 15
}, // 16
{
  levels: 65535,
  group: 0,
  bits: 16
} // 17
]);

/***/ }),

/***/ "./src/libs/jsmpeg/src/mpeg1-wasm.js":
/*!*******************************************!*\
  !*** ./src/libs/jsmpeg/src/mpeg1-wasm.js ***!
  \*******************************************/
/*! exports provided: MPEG1WASM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPEG1WASM", function() { return MPEG1WASM; });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MPEG1WASM extends _decoder_js__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"] {
  constructor(options) {
    super(options);

    _defineProperty(this, "initializeWasmDecoder", () => {
      this.instance = this.module.instance;
      this.functions = this.module.instance.exports;
      this.decoder = this.functions.mpeg1_decoder_create(this.bufferSize, this.bufferMode);
    });

    _defineProperty(this, "destroy", () => {
      if (!this.decoder) {
        return;
      }

      this.functions.mpeg1_decoder_destroy(this.decoder);
    });

    _defineProperty(this, "bufferGetIndex", () => {
      if (!this.decoder) {
        return;
      }

      return this.functions.mpeg1_decoder_get_index(this.decoder);
    });

    _defineProperty(this, "bufferSetIndex", index => {
      if (!this.decoder) {
        return;
      }

      this.functions.mpeg1_decoder_set_index(this.decoder, index);
    });

    _defineProperty(this, "bufferWrite", buffers => {
      // 1/28/20
      // https://github.com/SuperAwesomeLTD/jsmpeg/pull/1/commits/e2728ba23086fec6aea62f4f2810c5c755199a40
      if (!this.module.instance) {
        console.warn("JSMpeg: WASM module not compiled yet");
        return;
      }

      if (!this.decoder) {
        this.initializeWasmDecoder();
      }

      let totalLength = 0;

      for (let i = 0; i < buffers.length; i++) {
        totalLength += buffers[i].length;
      }

      let ptr = this.functions.mpeg1_decoder_get_write_ptr(this.decoder, totalLength);

      for (let i = 0; i < buffers.length; i++) {
        this.instance.heapU8.set(buffers[i], ptr);
        ptr += buffers[i].length;
      }

      this.functions.mpeg1_decoder_did_write(this.decoder, totalLength);
      return totalLength;
    });

    _defineProperty(this, "write", (pts, buffers) => {
      this.baseWrite(pts, buffers); // 1/28/20

      if (!this.hasSequenceHeader && this.functions && this.functions.mpeg1_decoder_has_sequence_header(this.decoder)) {
        this.loadSequnceHeader();
      }
    });

    _defineProperty(this, "loadSequnceHeader", () => {
      this.hasSequenceHeader = true;
      this.frameRate = this.functions.mpeg1_decoder_get_frame_rate(this.decoder);
      this.codedSize = this.functions.mpeg1_decoder_get_coded_size(this.decoder);

      if (this.destination) {
        var w = this.functions.mpeg1_decoder_get_width(this.decoder);
        var h = this.functions.mpeg1_decoder_get_height(this.decoder);
        this.destination.resize(w, h);
      }

      if (this.decodeFirstFrame) {
        this.decode();
      }
    });

    _defineProperty(this, "decode", () => {
      let startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])();

      if (!this.decoder) {
        return false;
      }

      let didDecode = this.functions.mpeg1_decoder_decode(this.decoder);

      if (!didDecode) {
        return false;
      } // Invoke decode callbacks


      if (this.destination) {
        let ptrY = this.functions.mpeg1_decoder_get_y_ptr(this.decoder),
            ptrCr = this.functions.mpeg1_decoder_get_cr_ptr(this.decoder),
            ptrCb = this.functions.mpeg1_decoder_get_cb_ptr(this.decoder);
        let dy = this.instance.heapU8.subarray(ptrY, ptrY + this.codedSize);
        let dcr = this.instance.heapU8.subarray(ptrCr, ptrCr + (this.codedSize >> 2));
        let dcb = this.instance.heapU8.subarray(ptrCb, ptrCb + (this.codedSize >> 2));
        this.destination.render(dy, dcr, dcb, false);
      }

      this.advanceDecodedTime(1 / this.frameRate);
      let elapsedTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

      if (this.onDecodeCallback) {
        this.onDecodeCallback(this, elapsedTime);
      }

      return true;
    });

    this.onDecodeCallback = options.onVideoDecode;
    this.module = options.wasmModule;
    this.bufferSize = options.videoBufferSize || 512 * 1024;
    this.bufferMode = options.streaming ? _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EVICT : _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EXPAND;
    this.decodeFirstFrame = options.decodeFirstFrame !== false;
    this.hasSequenceHeader = false;
  } // MPEG1WASM.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
  // MPEG1WASM.prototype.constructor = MPEG1WASM;


}

/***/ }),

/***/ "./src/libs/jsmpeg/src/mpeg1.js":
/*!**************************************!*\
  !*** ./src/libs/jsmpeg/src/mpeg1.js ***!
  \**************************************/
/*! exports provided: MPEG1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MPEG1", function() { return MPEG1; });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");
/* harmony import */ var _decoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Inspired by Java MPEG-1 Video Decoder and Player by Zoltan Korandi 
// https://sourceforge.net/projects/javampeg1video/


 // window.doneDecoding = false;
// function skipCount(b) {
// 	b.skipCount = 1;
// 	setTimeout(skipCount, window.interval, b);
// }

class MPEG1 extends _decoder_js__WEBPACK_IMPORTED_MODULE_1__["BaseDecoder"] {
  constructor(options) {
    super(options);

    _defineProperty(this, "write", (pts, buffers) => {
      this.baseWrite(pts, buffers);

      if (!this.hasSequenceHeader) {
        if (this.bits.findStartCode(MPEG1.START.SEQUENCE) === -1) {
          return false;
        }

        this.decodeSequenceHeader();

        if (this.decodeFirstFrame) {
          this.decode();
        }
      } // this.currentPictureDecoded = false;
      // if (!window.doneDecoding) {
      // 	this.decode();
      // 	console.log("not finished decoding!");
      // 	this.currentPictureDecoded = true;
      // } else {
      // 	setTimeout(() => {
      // 		this.decode();
      // 		this.currentPictureDecoded = true;
      // 	}, 0);
      // }

    });

    _defineProperty(this, "decode", () => {
      let startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])();

      if (!this.hasSequenceHeader) {
        return false;
      }

      if (this.bits.findStartCode(MPEG1.START.PICTURE) === -1) {
        // let bufferedBytes = this.bits.byteLength - (this.bits.index >> 3);
        return false;
      }

      this.decodePicture();
      this.advanceDecodedTime(1 / this.frameRate);
      let elapsedTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Now"])() - startTime;

      if (this.onDecodeCallback) {
        this.onDecodeCallback(this, elapsedTime);
      }

      return true;
    });

    _defineProperty(this, "readHuffman", codeTable => {
      let state = 0;

      do {
        state = codeTable[state + this.bits.read(1)];
      } while (state >= 0 && codeTable[state] !== 0);

      return codeTable[state + 2];
    });

    _defineProperty(this, "decodeSequenceHeader", function () {
      var newWidth = this.bits.read(12),
          newHeight = this.bits.read(12); // skip pixel aspect ratio

      this.bits.skip(4);
      this.frameRate = MPEG1.PICTURE_RATE[this.bits.read(4)]; // skip bitRate, marker, bufferSize and constrained bit

      this.bits.skip(18 + 1 + 10 + 1);

      if (newWidth !== this.width || newHeight !== this.height) {
        this.width = newWidth;
        this.height = newHeight;
        this.initBuffers();

        if (this.destination) {
          this.destination.resize(newWidth, newHeight);
        }
      }

      if (this.bits.read(1)) {
        // load custom intra quant matrix?
        for (let i = 0; i < 64; i++) {
          this.customIntraQuantMatrix[MPEG1.ZIG_ZAG[i]] = this.bits.read(8);
        }

        this.intraQuantMatrix = this.customIntraQuantMatrix;
      }

      if (this.bits.read(1)) {
        // load custom non intra quant matrix?
        for (let i = 0; i < 64; i++) {
          let idx = MPEG1.ZIG_ZAG[i];
          this.customNonIntraQuantMatrix[idx] = this.bits.read(8);
        }

        this.nonIntraQuantMatrix = this.customNonIntraQuantMatrix;
      }

      this.hasSequenceHeader = true;
    });

    _defineProperty(this, "initBuffers", () => {
      this.intraQuantMatrix = MPEG1.DEFAULT_INTRA_QUANT_MATRIX;
      this.nonIntraQuantMatrix = MPEG1.DEFAULT_NON_INTRA_QUANT_MATRIX;
      this.mbWidth = this.width + 15 >> 4;
      this.mbHeight = this.height + 15 >> 4;
      this.mbSize = this.mbWidth * this.mbHeight;
      this.codedWidth = this.mbWidth << 4;
      this.codedHeight = this.mbHeight << 4;
      this.codedSize = this.codedWidth * this.codedHeight;
      this.halfWidth = this.mbWidth << 3;
      this.halfHeight = this.mbHeight << 3; // Allocated buffers and resize the canvas

      this.currentY = new Uint8ClampedArray(this.codedSize);
      this.currentY32 = new Uint32Array(this.currentY.buffer);
      this.currentCr = new Uint8ClampedArray(this.codedSize >> 2);
      this.currentCr32 = new Uint32Array(this.currentCr.buffer);
      this.currentCb = new Uint8ClampedArray(this.codedSize >> 2);
      this.currentCb32 = new Uint32Array(this.currentCb.buffer);
      this.forwardY = new Uint8ClampedArray(this.codedSize);
      this.forwardY32 = new Uint32Array(this.forwardY.buffer);
      this.forwardCr = new Uint8ClampedArray(this.codedSize >> 2);
      this.forwardCr32 = new Uint32Array(this.forwardCr.buffer);
      this.forwardCb = new Uint8ClampedArray(this.codedSize >> 2);
      this.forwardCb32 = new Uint32Array(this.forwardCb.buffer);
    });

    _defineProperty(this, "decodePicture", skipOutput => {
      this.currentFrame++;
      this.bits.skip(10); // skip temporalReference

      this.pictureType = this.bits.read(3);
      this.bits.skip(16); // skip vbv_delay
      // Skip B and D frames or unknown coding type

      if (this.pictureType <= 0 || this.pictureType >= MPEG1.PICTURE_TYPE.B) {
        return;
      } // full_pel_forward, forward_f_code


      if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
        this.fullPelForward = this.bits.read(1);
        this.forwardFCode = this.bits.read(3);

        if (this.forwardFCode === 0) {
          // Ignore picture with zero forward_f_code
          return;
        }

        this.forwardRSize = this.forwardFCode - 1;
        this.forwardF = 1 << this.forwardRSize;
      }

      let code = 0;

      do {
        code = this.bits.findNextStartCode();
      } while (code === MPEG1.START.EXTENSION || code === MPEG1.START.USER_DATA);

      while (code >= MPEG1.START.SLICE_FIRST && code <= MPEG1.START.SLICE_LAST) {
        this.decodeSlice(code & 0x000000FF);
        code = this.bits.findNextStartCode();
      }

      if (code !== -1) {
        // We found the next start code; rewind 32bits and let the main loop
        // handle it.
        this.bits.rewind(32);
      } // Invoke decode callbacks


      if (this.destination
      /* && this.skipCount === 0*/
      ) {
          this.destination.render(this.currentY, this.currentCr, this.currentCb, true);
        } // if (this.skipCount > 0) {
      // 	this.skipCount -= 1;
      // }
      // If this is a reference picture then rotate the prediction pointers


      if (this.pictureType === MPEG1.PICTURE_TYPE.INTRA || this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
        let tmpY = this.forwardY,
            tmpY32 = this.forwardY32,
            tmpCr = this.forwardCr,
            tmpCr32 = this.forwardCr32,
            tmpCb = this.forwardCb,
            tmpCb32 = this.forwardCb32;
        this.forwardY = this.currentY;
        this.forwardY32 = this.currentY32;
        this.forwardCr = this.currentCr;
        this.forwardCr32 = this.currentCr32;
        this.forwardCb = this.currentCb;
        this.forwardCb32 = this.currentCb32;
        this.currentY = tmpY;
        this.currentY32 = tmpY32;
        this.currentCr = tmpCr;
        this.currentCr32 = tmpCr32;
        this.currentCb = tmpCb;
        this.currentCb32 = tmpCb32;
      }
    });

    _defineProperty(this, "decodeSlice", slice => {
      this.sliceBegin = true;
      this.macroblockAddress = (slice - 1) * this.mbWidth - 1; // Reset motion vectors and DC predictors

      this.motionFwH = this.motionFwHPrev = 0;
      this.motionFwV = this.motionFwVPrev = 0;
      this.dcPredictorY = 128;
      this.dcPredictorCr = 128;
      this.dcPredictorCb = 128;
      this.quantizerScale = this.bits.read(5); // skip extra bits

      while (this.bits.read(1)) {
        this.bits.skip(8);
      }

      do {
        this.decodeMacroblock();
      } while (!this.bits.nextBytesAreStartCode());
    });

    _defineProperty(this, "decodeMacroblock", () => {
      // Decode macroblock_address_increment
      let increment = 0,
          t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);

      while (t === 34) {
        // macroblock_stuffing
        t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
      }

      while (t === 35) {
        // macroblock_escape
        increment += 33;
        t = this.readHuffman(MPEG1.MACROBLOCK_ADDRESS_INCREMENT);
      }

      increment += t; // Process any skipped macroblocks

      if (this.sliceBegin) {
        // The first macroblock_address_increment of each slice is relative
        // to beginning of the preverious row, not the preverious macroblock
        this.sliceBegin = false;
        this.macroblockAddress += increment;
      } else {
        if (this.macroblockAddress + increment >= this.mbSize) {
          // Illegal (too large) macroblock_address_increment
          return;
        }

        if (increment > 1) {
          // Skipped macroblocks reset DC predictors
          this.dcPredictorY = 128;
          this.dcPredictorCr = 128;
          this.dcPredictorCb = 128; // Skipped macroblocks in P-pictures reset motion vectors

          if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
            this.motionFwH = this.motionFwHPrev = 0;
            this.motionFwV = this.motionFwVPrev = 0;
          }
        } // Predict skipped macroblocks


        while (increment > 1) {
          this.macroblockAddress++;
          this.mbRow = this.macroblockAddress / this.mbWidth | 0;
          this.mbCol = this.macroblockAddress % this.mbWidth;
          this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
          increment--;
        }

        this.macroblockAddress++;
      }

      this.mbRow = this.macroblockAddress / this.mbWidth | 0;
      this.mbCol = this.macroblockAddress % this.mbWidth; // Process the current macroblock

      var mbTable = MPEG1.MACROBLOCK_TYPE[this.pictureType];
      this.macroblockType = this.readHuffman(mbTable);
      this.macroblockIntra = this.macroblockType & 0x01;
      this.macroblockMotFw = this.macroblockType & 0x08; // Quantizer scale

      if ((this.macroblockType & 0x10) !== 0) {
        this.quantizerScale = this.bits.read(5);
      }

      if (this.macroblockIntra) {
        // Intra-coded macroblocks reset motion vectors
        this.motionFwH = this.motionFwHPrev = 0;
        this.motionFwV = this.motionFwVPrev = 0;
      } else {
        // Non-intra macroblocks reset DC predictors
        this.dcPredictorY = 128;
        this.dcPredictorCr = 128;
        this.dcPredictorCb = 128;
        this.decodeMotionVectors();
        this.copyMacroblock(this.motionFwH, this.motionFwV, this.forwardY, this.forwardCr, this.forwardCb);
      } // Decode blocks


      let cbp = (this.macroblockType & 0x02) !== 0 ? this.readHuffman(MPEG1.CODE_BLOCK_PATTERN) : this.macroblockIntra ? 0x3f : 0;

      for (let block = 0, mask = 0x20; block < 6; block++) {
        if ((cbp & mask) !== 0) {
          this.decodeBlock(block);
        }

        mask >>= 1;
      }
    });

    _defineProperty(this, "decodeMotionVectors", function () {
      var code,
          d,
          r = 0; // Forward

      if (this.macroblockMotFw) {
        // Horizontal forward
        code = this.readHuffman(MPEG1.MOTION);

        if (code !== 0 && this.forwardF !== 1) {
          r = this.bits.read(this.forwardRSize);
          d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;

          if (code < 0) {
            d = -d;
          }
        } else {
          d = code;
        }

        this.motionFwHPrev += d;

        if (this.motionFwHPrev > (this.forwardF << 4) - 1) {
          this.motionFwHPrev -= this.forwardF << 5;
        } else if (this.motionFwHPrev < -this.forwardF << 4) {
          this.motionFwHPrev += this.forwardF << 5;
        }

        this.motionFwH = this.motionFwHPrev;

        if (this.fullPelForward) {
          this.motionFwH <<= 1;
        } // Vertical forward


        code = this.readHuffman(MPEG1.MOTION);

        if (code !== 0 && this.forwardF !== 1) {
          r = this.bits.read(this.forwardRSize);
          d = (Math.abs(code) - 1 << this.forwardRSize) + r + 1;

          if (code < 0) {
            d = -d;
          }
        } else {
          d = code;
        }

        this.motionFwVPrev += d;

        if (this.motionFwVPrev > (this.forwardF << 4) - 1) {
          this.motionFwVPrev -= this.forwardF << 5;
        } else if (this.motionFwVPrev < -this.forwardF << 4) {
          this.motionFwVPrev += this.forwardF << 5;
        }

        this.motionFwV = this.motionFwVPrev;

        if (this.fullPelForward) {
          this.motionFwV <<= 1;
        }
      } else if (this.pictureType === MPEG1.PICTURE_TYPE.PREDICTIVE) {
        // No motion information in P-picture, reset vectors
        this.motionFwH = this.motionFwHPrev = 0;
        this.motionFwV = this.motionFwVPrev = 0;
      }
    });

    _defineProperty(this, "copyMacroblock", function (motionH, motionV, sY, sCr, sCb) {
      var width, scan, H, V, oddH, oddV, src, dest, last; // We use 32bit writes here

      var dY = this.currentY32,
          dCb = this.currentCb32,
          dCr = this.currentCr32; // Luminance

      width = this.codedWidth;
      scan = width - 16;
      H = motionH >> 1;
      V = motionV >> 1;
      oddH = (motionH & 1) === 1;
      oddV = (motionV & 1) === 1;
      src = ((this.mbRow << 4) + V) * width + (this.mbCol << 4) + H;
      dest = this.mbRow * width + this.mbCol << 2;
      last = dest + (width << 2);
      var x, y1, y2, y;

      if (oddH) {
        if (oddV) {
          while (dest < last) {
            y1 = sY[src] + sY[src + width];
            src++;

            for (x = 0; x < 4; x++) {
              y2 = sY[src] + sY[src + width];
              src++;
              y = y1 + y2 + 2 >> 2 & 0xff;
              y1 = sY[src] + sY[src + width];
              src++;
              y |= y1 + y2 + 2 << 6 & 0xff00;
              y2 = sY[src] + sY[src + width];
              src++;
              y |= y1 + y2 + 2 << 14 & 0xff0000;
              y1 = sY[src] + sY[src + width];
              src++;
              y |= y1 + y2 + 2 << 22 & 0xff000000;
              dY[dest++] = y;
            }

            dest += scan >> 2;
            src += scan - 1;
          }
        } else {
          while (dest < last) {
            y1 = sY[src++];

            for (x = 0; x < 4; x++) {
              y2 = sY[src++];
              y = y1 + y2 + 1 >> 1 & 0xff;
              y1 = sY[src++];
              y |= y1 + y2 + 1 << 7 & 0xff00;
              y2 = sY[src++];
              y |= y1 + y2 + 1 << 15 & 0xff0000;
              y1 = sY[src++];
              y |= y1 + y2 + 1 << 23 & 0xff000000;
              dY[dest++] = y;
            }

            dest += scan >> 2;
            src += scan - 1;
          }
        }
      } else {
        if (oddV) {
          while (dest < last) {
            for (x = 0; x < 4; x++) {
              y = sY[src] + sY[src + width] + 1 >> 1 & 0xff;
              src++;
              y |= sY[src] + sY[src + width] + 1 << 7 & 0xff00;
              src++;
              y |= sY[src] + sY[src + width] + 1 << 15 & 0xff0000;
              src++;
              y |= sY[src] + sY[src + width] + 1 << 23 & 0xff000000;
              src++;
              dY[dest++] = y;
            }

            dest += scan >> 2;
            src += scan;
          }
        } else {
          while (dest < last) {
            for (x = 0; x < 4; x++) {
              y = sY[src];
              src++;
              y |= sY[src] << 8;
              src++;
              y |= sY[src] << 16;
              src++;
              y |= sY[src] << 24;
              src++;
              dY[dest++] = y;
            }

            dest += scan >> 2;
            src += scan;
          }
        }
      } // Chrominance


      width = this.halfWidth;
      scan = width - 8;
      H = motionH / 2 >> 1;
      V = motionV / 2 >> 1;
      oddH = (motionH / 2 & 1) === 1;
      oddV = (motionV / 2 & 1) === 1;
      src = ((this.mbRow << 3) + V) * width + (this.mbCol << 3) + H;
      dest = this.mbRow * width + this.mbCol << 1;
      last = dest + (width << 1);
      var cr1, cr2, cr, cb1, cb2, cb;

      if (oddH) {
        if (oddV) {
          while (dest < last) {
            cr1 = sCr[src] + sCr[src + width];
            cb1 = sCb[src] + sCb[src + width];
            src++;

            for (x = 0; x < 2; x++) {
              cr2 = sCr[src] + sCr[src + width];
              cb2 = sCb[src] + sCb[src + width];
              src++;
              cr = cr1 + cr2 + 2 >> 2 & 0xff;
              cb = cb1 + cb2 + 2 >> 2 & 0xff;
              cr1 = sCr[src] + sCr[src + width];
              cb1 = sCb[src] + sCb[src + width];
              src++;
              cr |= cr1 + cr2 + 2 << 6 & 0xff00;
              cb |= cb1 + cb2 + 2 << 6 & 0xff00;
              cr2 = sCr[src] + sCr[src + width];
              cb2 = sCb[src] + sCb[src + width];
              src++;
              cr |= cr1 + cr2 + 2 << 14 & 0xff0000;
              cb |= cb1 + cb2 + 2 << 14 & 0xff0000;
              cr1 = sCr[src] + sCr[src + width];
              cb1 = sCb[src] + sCb[src + width];
              src++;
              cr |= cr1 + cr2 + 2 << 22 & 0xff000000;
              cb |= cb1 + cb2 + 2 << 22 & 0xff000000;
              dCr[dest] = cr;
              dCb[dest] = cb;
              dest++;
            }

            dest += scan >> 2;
            src += scan - 1;
          }
        } else {
          while (dest < last) {
            cr1 = sCr[src];
            cb1 = sCb[src];
            src++;

            for (x = 0; x < 2; x++) {
              cr2 = sCr[src];
              cb2 = sCb[src++];
              cr = cr1 + cr2 + 1 >> 1 & 0xff;
              cb = cb1 + cb2 + 1 >> 1 & 0xff;
              cr1 = sCr[src];
              cb1 = sCb[src++];
              cr |= cr1 + cr2 + 1 << 7 & 0xff00;
              cb |= cb1 + cb2 + 1 << 7 & 0xff00;
              cr2 = sCr[src];
              cb2 = sCb[src++];
              cr |= cr1 + cr2 + 1 << 15 & 0xff0000;
              cb |= cb1 + cb2 + 1 << 15 & 0xff0000;
              cr1 = sCr[src];
              cb1 = sCb[src++];
              cr |= cr1 + cr2 + 1 << 23 & 0xff000000;
              cb |= cb1 + cb2 + 1 << 23 & 0xff000000;
              dCr[dest] = cr;
              dCb[dest] = cb;
              dest++;
            }

            dest += scan >> 2;
            src += scan - 1;
          }
        }
      } else {
        if (oddV) {
          while (dest < last) {
            for (x = 0; x < 2; x++) {
              cr = sCr[src] + sCr[src + width] + 1 >> 1 & 0xff;
              cb = sCb[src] + sCb[src + width] + 1 >> 1 & 0xff;
              src++;
              cr |= sCr[src] + sCr[src + width] + 1 << 7 & 0xff00;
              cb |= sCb[src] + sCb[src + width] + 1 << 7 & 0xff00;
              src++;
              cr |= sCr[src] + sCr[src + width] + 1 << 15 & 0xff0000;
              cb |= sCb[src] + sCb[src + width] + 1 << 15 & 0xff0000;
              src++;
              cr |= sCr[src] + sCr[src + width] + 1 << 23 & 0xff000000;
              cb |= sCb[src] + sCb[src + width] + 1 << 23 & 0xff000000;
              src++;
              dCr[dest] = cr;
              dCb[dest] = cb;
              dest++;
            }

            dest += scan >> 2;
            src += scan;
          }
        } else {
          while (dest < last) {
            for (x = 0; x < 2; x++) {
              cr = sCr[src];
              cb = sCb[src];
              src++;
              cr |= sCr[src] << 8;
              cb |= sCb[src] << 8;
              src++;
              cr |= sCr[src] << 16;
              cb |= sCb[src] << 16;
              src++;
              cr |= sCr[src] << 24;
              cb |= sCb[src] << 24;
              src++;
              dCr[dest] = cr;
              dCb[dest] = cb;
              dest++;
            }

            dest += scan >> 2;
            src += scan;
          }
        }
      }
    });

    _defineProperty(this, "decodeBlock", function (block) {
      var n = 0,
          quantMatrix; // Decode DC coefficient of intra-coded blocks

      if (this.macroblockIntra) {
        var predictor, dctSize; // DC prediction

        if (block < 4) {
          predictor = this.dcPredictorY;
          dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_LUMINANCE);
        } else {
          predictor = block === 4 ? this.dcPredictorCr : this.dcPredictorCb;
          dctSize = this.readHuffman(MPEG1.DCT_DC_SIZE_CHROMINANCE);
        } // Read DC coeff


        if (dctSize > 0) {
          var differential = this.bits.read(dctSize);

          if ((differential & 1 << dctSize - 1) !== 0) {
            this.blockData[0] = predictor + differential;
          } else {
            this.blockData[0] = predictor + (-1 << dctSize | differential + 1);
          }
        } else {
          this.blockData[0] = predictor;
        } // Save predictor value


        if (block < 4) {
          this.dcPredictorY = this.blockData[0];
        } else if (block === 4) {
          this.dcPredictorCr = this.blockData[0];
        } else {
          this.dcPredictorCb = this.blockData[0];
        } // Dequantize + premultiply


        this.blockData[0] <<= 3 + 5;
        quantMatrix = this.intraQuantMatrix;
        n = 1;
      } else {
        quantMatrix = this.nonIntraQuantMatrix;
      } // Decode AC coefficients (+DC for non-intra)


      var level = 0;

      while (true) {
        var run = 0,
            coeff = this.readHuffman(MPEG1.DCT_COEFF);

        if (coeff === 0x0001 && n > 0 && this.bits.read(1) === 0) {
          // end_of_block
          break;
        }

        if (coeff === 0xffff) {
          // escape
          run = this.bits.read(6);
          level = this.bits.read(8);

          if (level === 0) {
            level = this.bits.read(8);
          } else if (level === 128) {
            level = this.bits.read(8) - 256;
          } else if (level > 128) {
            level = level - 256;
          }
        } else {
          run = coeff >> 8;
          level = coeff & 0xff;

          if (this.bits.read(1)) {
            level = -level;
          }
        }

        n += run;
        if (n < 0 || n >= MPEG1.ZIG_ZAG.length) break;
        var dezigZagged = MPEG1.ZIG_ZAG[n];
        n++; // Dequantize, oddify, clip

        level <<= 1;

        if (!this.macroblockIntra) {
          level += level < 0 ? -1 : 1;
        }

        level = level * this.quantizerScale * quantMatrix[dezigZagged] >> 4;

        if ((level & 1) === 0) {
          level -= level > 0 ? 1 : -1;
        }

        if (level > 2047) {
          level = 2047;
        } else if (level < -2048) {
          level = -2048;
        } // Save premultiplied coefficient


        this.blockData[dezigZagged] = level * MPEG1.PREMULTIPLIER_MATRIX[dezigZagged];
      } // Move block to its place


      var destArray, destIndex, scan;

      if (block < 4) {
        destArray = this.currentY;
        scan = this.codedWidth - 8;
        destIndex = this.mbRow * this.codedWidth + this.mbCol << 4;

        if ((block & 1) !== 0) {
          destIndex += 8;
        }

        if ((block & 2) !== 0) {
          destIndex += this.codedWidth << 3;
        }
      } else {
        destArray = block === 4 ? this.currentCb : this.currentCr;
        scan = (this.codedWidth >> 1) - 8;
        destIndex = (this.mbRow * this.codedWidth << 2) + (this.mbCol << 3);
      }

      if (this.macroblockIntra) {
        // Overwrite (no prediction)
        if (n === 1) {
          this.CopyValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
          this.blockData[0] = 0;
        } else {
          this.IDCT(this.blockData);
          this.CopyBlockToDestination(this.blockData, destArray, destIndex, scan);
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Fill"])(this.blockData, 0);
        }
      } else {
        // Add data to the predicted macroblock
        if (n === 1) {
          this.AddValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
          this.blockData[0] = 0;
        } else {
          this.IDCT(this.blockData);
          this.AddBlockToDestination(this.blockData, destArray, destIndex, scan);
          Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__["Fill"])(this.blockData, 0);
        }
      }

      n = 0;
    });

    _defineProperty(this, "CopyBlockToDestination", function (block, dest, index, scan) {
      for (var n = 0; n < 64; n += 8, index += scan + 8) {
        dest[index + 0] = block[n + 0];
        dest[index + 1] = block[n + 1];
        dest[index + 2] = block[n + 2];
        dest[index + 3] = block[n + 3];
        dest[index + 4] = block[n + 4];
        dest[index + 5] = block[n + 5];
        dest[index + 6] = block[n + 6];
        dest[index + 7] = block[n + 7];
      }
    });

    _defineProperty(this, "AddBlockToDestination", function (block, dest, index, scan) {
      for (var n = 0; n < 64; n += 8, index += scan + 8) {
        dest[index + 0] += block[n + 0];
        dest[index + 1] += block[n + 1];
        dest[index + 2] += block[n + 2];
        dest[index + 3] += block[n + 3];
        dest[index + 4] += block[n + 4];
        dest[index + 5] += block[n + 5];
        dest[index + 6] += block[n + 6];
        dest[index + 7] += block[n + 7];
      }
    });

    _defineProperty(this, "CopyValueToDestination", function (value, dest, index, scan) {
      for (var n = 0; n < 64; n += 8, index += scan + 8) {
        dest[index + 0] = value;
        dest[index + 1] = value;
        dest[index + 2] = value;
        dest[index + 3] = value;
        dest[index + 4] = value;
        dest[index + 5] = value;
        dest[index + 6] = value;
        dest[index + 7] = value;
      }
    });

    _defineProperty(this, "AddValueToDestination", function (value, dest, index, scan) {
      for (var n = 0; n < 64; n += 8, index += scan + 8) {
        dest[index + 0] += value;
        dest[index + 1] += value;
        dest[index + 2] += value;
        dest[index + 3] += value;
        dest[index + 4] += value;
        dest[index + 5] += value;
        dest[index + 6] += value;
        dest[index + 7] += value;
      }
    });

    _defineProperty(this, "IDCT", function (block) {
      // See http://vsr.informatik.tu-chemnitz.de/~jan/MPEG/HTML/IDCT.html
      // for more info.
      var b1, b3, b4, b6, b7, tmp1, tmp2, m0, x0, x1, x2, x3, x4, y3, y4, y5, y6, y7; // Transform columns

      for (var i = 0; i < 8; ++i) {
        b1 = block[4 * 8 + i];
        b3 = block[2 * 8 + i] + block[6 * 8 + i];
        b4 = block[5 * 8 + i] - block[3 * 8 + i];
        tmp1 = block[1 * 8 + i] + block[7 * 8 + i];
        tmp2 = block[3 * 8 + i] + block[5 * 8 + i];
        b6 = block[1 * 8 + i] - block[7 * 8 + i];
        b7 = tmp1 + tmp2;
        m0 = block[0 * 8 + i];
        x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
        x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
        x1 = m0 - b1;
        x2 = ((block[2 * 8 + i] - block[6 * 8 + i]) * 362 + 128 >> 8) - b3;
        x3 = m0 + b1;
        y3 = x1 + x2;
        y4 = x3 + b3;
        y5 = x1 - x2;
        y6 = x3 - b3;
        y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
        block[0 * 8 + i] = b7 + y4;
        block[1 * 8 + i] = x4 + y3;
        block[2 * 8 + i] = y5 - x0;
        block[3 * 8 + i] = y6 - y7;
        block[4 * 8 + i] = y6 + y7;
        block[5 * 8 + i] = x0 + y5;
        block[6 * 8 + i] = y3 - x4;
        block[7 * 8 + i] = y4 - b7;
      } // Transform rows


      for (var i = 0; i < 64; i += 8) {
        b1 = block[4 + i];
        b3 = block[2 + i] + block[6 + i];
        b4 = block[5 + i] - block[3 + i];
        tmp1 = block[1 + i] + block[7 + i];
        tmp2 = block[3 + i] + block[5 + i];
        b6 = block[1 + i] - block[7 + i];
        b7 = tmp1 + tmp2;
        m0 = block[0 + i];
        x4 = (b6 * 473 - b4 * 196 + 128 >> 8) - b7;
        x0 = x4 - ((tmp1 - tmp2) * 362 + 128 >> 8);
        x1 = m0 - b1;
        x2 = ((block[2 + i] - block[6 + i]) * 362 + 128 >> 8) - b3;
        x3 = m0 + b1;
        y3 = x1 + x2;
        y4 = x3 + b3;
        y5 = x1 - x2;
        y6 = x3 - b3;
        y7 = -x0 - (b4 * 473 + b6 * 196 + 128 >> 8);
        block[0 + i] = b7 + y4 + 128 >> 8;
        block[1 + i] = x4 + y3 + 128 >> 8;
        block[2 + i] = y5 - x0 + 128 >> 8;
        block[3 + i] = y6 - y7 + 128 >> 8;
        block[4 + i] = y6 + y7 + 128 >> 8;
        block[5 + i] = x0 + y5 + 128 >> 8;
        block[6 + i] = y3 - x4 + 128 >> 8;
        block[7 + i] = y4 - b7 + 128 >> 8;
      }
    });

    this.onDecodeCallback = options.onVideoDecode;
    let bufferSize = options.videoBufferSize || 512 * 1024;
    let bufferMode = options.streaming ? _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EVICT : _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"].MODE.EXPAND;
    this.bits = new _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"](bufferSize, bufferMode);
    this.customIntraQuantMatrix = new Uint8Array(64);
    this.customNonIntraQuantMatrix = new Uint8Array(64);
    this.blockData = new Int32Array(64);
    this.currentFrame = 0;
    this.decodeFirstFrame = options.decodeFirstFrame !== false;
    this.frameRate = 30; // skip rendering x times:
    // 1/28/20
    // this.skipCount = 0;
    // Picture Layer

    this.currentY = null;
    this.currentCr = null;
    this.currentCb = null;
    this.pictureType = 0; // Buffers for motion compensation

    this.forwardY = null;
    this.forwardCr = null;
    this.forwardCb = null;
    this.fullPelForward = false;
    this.forwardFCode = 0;
    this.forwardRSize = 0;
    this.forwardF = 0; // Slice Layer

    this.quantizerScale = 0;
    this.sliceBegin = false; // Macroblock Layer

    this.macroblockAddress = 0;
    this.mbRow = 0;
    this.mbCol = 0;
    this.macroblockType = 0;
    this.macroblockIntra = false;
    this.macroblockMotFw = false;
    this.motionFwH = 0;
    this.motionFwV = 0;
    this.motionFwHPrev = 0;
    this.motionFwVPrev = 0; // Block layer

    this.dcPredictorY = 0;
    this.dcPredictorCr = 0;
    this.dcPredictorCb = 0; // this.blockData = null;
  }

}

_defineProperty(MPEG1, "PICTURE_RATE", [0.000, 23.976, 24.000, 25.000, 29.970, 30.000, 50.000, 59.940, 60.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000, 0.000]);

_defineProperty(MPEG1, "ZIG_ZAG", new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]));

_defineProperty(MPEG1, "DEFAULT_INTRA_QUANT_MATRIX", new Uint8Array([8, 16, 19, 22, 26, 27, 29, 34, 16, 16, 22, 24, 27, 29, 34, 37, 19, 22, 26, 27, 29, 34, 34, 38, 22, 22, 26, 27, 29, 34, 37, 40, 22, 26, 27, 29, 32, 35, 40, 48, 26, 27, 29, 32, 35, 40, 48, 58, 26, 27, 29, 34, 38, 46, 56, 69, 27, 29, 35, 38, 46, 56, 69, 83]));

_defineProperty(MPEG1, "DEFAULT_NON_INTRA_QUANT_MATRIX", new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]));

_defineProperty(MPEG1, "PREMULTIPLIER_MATRIX", new Uint8Array([32, 44, 42, 38, 32, 25, 17, 9, 44, 62, 58, 52, 44, 35, 24, 12, 42, 58, 55, 49, 42, 33, 23, 12, 38, 52, 49, 44, 38, 30, 20, 10, 32, 44, 42, 38, 32, 25, 17, 9, 25, 35, 33, 30, 25, 20, 14, 7, 17, 24, 23, 20, 17, 14, 9, 5, 9, 12, 12, 10, 9, 7, 5, 2]));

_defineProperty(MPEG1, "MACROBLOCK_ADDRESS_INCREMENT", new Int16Array([1 * 3, 2 * 3, 0, //   0
3 * 3, 4 * 3, 0, //   1  0
0, 0, 1, //   2  1.
5 * 3, 6 * 3, 0, //   3  00
7 * 3, 8 * 3, 0, //   4  01
9 * 3, 10 * 3, 0, //   5  000
11 * 3, 12 * 3, 0, //   6  001
0, 0, 3, //   7  010.
0, 0, 2, //   8  011.
13 * 3, 14 * 3, 0, //   9  0000
15 * 3, 16 * 3, 0, //  10  0001
0, 0, 5, //  11  0010.
0, 0, 4, //  12  0011.
17 * 3, 18 * 3, 0, //  13  0000 0
19 * 3, 20 * 3, 0, //  14  0000 1
0, 0, 7, //  15  0001 0.
0, 0, 6, //  16  0001 1.
21 * 3, 22 * 3, 0, //  17  0000 00
23 * 3, 24 * 3, 0, //  18  0000 01
25 * 3, 26 * 3, 0, //  19  0000 10
27 * 3, 28 * 3, 0, //  20  0000 11
-1, 29 * 3, 0, //  21  0000 000
-1, 30 * 3, 0, //  22  0000 001
31 * 3, 32 * 3, 0, //  23  0000 010
33 * 3, 34 * 3, 0, //  24  0000 011
35 * 3, 36 * 3, 0, //  25  0000 100
37 * 3, 38 * 3, 0, //  26  0000 101
0, 0, 9, //  27  0000 110.
0, 0, 8, //  28  0000 111.
39 * 3, 40 * 3, 0, //  29  0000 0001
41 * 3, 42 * 3, 0, //  30  0000 0011
43 * 3, 44 * 3, 0, //  31  0000 0100
45 * 3, 46 * 3, 0, //  32  0000 0101
0, 0, 15, //  33  0000 0110.
0, 0, 14, //  34  0000 0111.
0, 0, 13, //  35  0000 1000.
0, 0, 12, //  36  0000 1001.
0, 0, 11, //  37  0000 1010.
0, 0, 10, //  38  0000 1011.
47 * 3, -1, 0, //  39  0000 0001 0
-1, 48 * 3, 0, //  40  0000 0001 1
49 * 3, 50 * 3, 0, //  41  0000 0011 0
51 * 3, 52 * 3, 0, //  42  0000 0011 1
53 * 3, 54 * 3, 0, //  43  0000 0100 0
55 * 3, 56 * 3, 0, //  44  0000 0100 1
57 * 3, 58 * 3, 0, //  45  0000 0101 0
59 * 3, 60 * 3, 0, //  46  0000 0101 1
61 * 3, -1, 0, //  47  0000 0001 00
-1, 62 * 3, 0, //  48  0000 0001 11
63 * 3, 64 * 3, 0, //  49  0000 0011 00
65 * 3, 66 * 3, 0, //  50  0000 0011 01
67 * 3, 68 * 3, 0, //  51  0000 0011 10
69 * 3, 70 * 3, 0, //  52  0000 0011 11
71 * 3, 72 * 3, 0, //  53  0000 0100 00
73 * 3, 74 * 3, 0, //  54  0000 0100 01
0, 0, 21, //  55  0000 0100 10.
0, 0, 20, //  56  0000 0100 11.
0, 0, 19, //  57  0000 0101 00.
0, 0, 18, //  58  0000 0101 01.
0, 0, 17, //  59  0000 0101 10.
0, 0, 16, //  60  0000 0101 11.
0, 0, 35, //  61  0000 0001 000. -- macroblock_escape
0, 0, 34, //  62  0000 0001 111. -- macroblock_stuffing
0, 0, 33, //  63  0000 0011 000.
0, 0, 32, //  64  0000 0011 001.
0, 0, 31, //  65  0000 0011 010.
0, 0, 30, //  66  0000 0011 011.
0, 0, 29, //  67  0000 0011 100.
0, 0, 28, //  68  0000 0011 101.
0, 0, 27, //  69  0000 0011 110.
0, 0, 26, //  70  0000 0011 111.
0, 0, 25, //  71  0000 0100 000.
0, 0, 24, //  72  0000 0100 001.
0, 0, 23, //  73  0000 0100 010.
0, 0, 22 //  74  0000 0100 011.
]));

_defineProperty(MPEG1, "MACROBLOCK_TYPE_INTRA", new Int8Array([1 * 3, 2 * 3, 0, //   0
-1, 3 * 3, 0, //   1  0
0, 0, 0x01, //   2  1.
0, 0, 0x11 //   3  01.
]));

_defineProperty(MPEG1, "MACROBLOCK_TYPE_PREDICTIVE", new Int8Array([1 * 3, 2 * 3, 0, //  0
3 * 3, 4 * 3, 0, //  1  0
0, 0, 0x0a, //  2  1.
5 * 3, 6 * 3, 0, //  3  00
0, 0, 0x02, //  4  01.
7 * 3, 8 * 3, 0, //  5  000
0, 0, 0x08, //  6  001.
9 * 3, 10 * 3, 0, //  7  0000
11 * 3, 12 * 3, 0, //  8  0001
-1, 13 * 3, 0, //  9  00000
0, 0, 0x12, // 10  00001.
0, 0, 0x1a, // 11  00010.
0, 0, 0x01, // 12  00011.
0, 0, 0x11 // 13  000001.
]));

_defineProperty(MPEG1, "MACROBLOCK_TYPE_B", new Int8Array([1 * 3, 2 * 3, 0, //  0
3 * 3, 5 * 3, 0, //  1  0
4 * 3, 6 * 3, 0, //  2  1
8 * 3, 7 * 3, 0, //  3  00
0, 0, 0x0c, //  4  10.
9 * 3, 10 * 3, 0, //  5  01
0, 0, 0x0e, //  6  11.
13 * 3, 14 * 3, 0, //  7  001
12 * 3, 11 * 3, 0, //  8  000
0, 0, 0x04, //  9  010.
0, 0, 0x06, // 10  011.
18 * 3, 16 * 3, 0, // 11  0001
15 * 3, 17 * 3, 0, // 12  0000
0, 0, 0x08, // 13  0010.
0, 0, 0x0a, // 14  0011.
-1, 19 * 3, 0, // 15  00000
0, 0, 0x01, // 16  00011.
20 * 3, 21 * 3, 0, // 17  00001
0, 0, 0x1e, // 18  00010.
0, 0, 0x11, // 19  000001.
0, 0, 0x16, // 20  000010.
0, 0, 0x1a // 21  000011.
]));

_defineProperty(MPEG1, "MACROBLOCK_TYPE", [null, MPEG1.MACROBLOCK_TYPE_INTRA, MPEG1.MACROBLOCK_TYPE_PREDICTIVE, MPEG1.MACROBLOCK_TYPE_B]);

_defineProperty(MPEG1, "CODE_BLOCK_PATTERN", new Int16Array([2 * 3, 1 * 3, 0, //   0
3 * 3, 6 * 3, 0, //   1  1
4 * 3, 5 * 3, 0, //   2  0
8 * 3, 11 * 3, 0, //   3  10
12 * 3, 13 * 3, 0, //   4  00
9 * 3, 7 * 3, 0, //   5  01
10 * 3, 14 * 3, 0, //   6  11
20 * 3, 19 * 3, 0, //   7  011
18 * 3, 16 * 3, 0, //   8  100
23 * 3, 17 * 3, 0, //   9  010
27 * 3, 25 * 3, 0, //  10  110
21 * 3, 28 * 3, 0, //  11  101
15 * 3, 22 * 3, 0, //  12  000
24 * 3, 26 * 3, 0, //  13  001
0, 0, 60, //  14  111.
35 * 3, 40 * 3, 0, //  15  0000
44 * 3, 48 * 3, 0, //  16  1001
38 * 3, 36 * 3, 0, //  17  0101
42 * 3, 47 * 3, 0, //  18  1000
29 * 3, 31 * 3, 0, //  19  0111
39 * 3, 32 * 3, 0, //  20  0110
0, 0, 32, //  21  1010.
45 * 3, 46 * 3, 0, //  22  0001
33 * 3, 41 * 3, 0, //  23  0100
43 * 3, 34 * 3, 0, //  24  0010
0, 0, 4, //  25  1101.
30 * 3, 37 * 3, 0, //  26  0011
0, 0, 8, //  27  1100.
0, 0, 16, //  28  1011.
0, 0, 44, //  29  0111 0.
50 * 3, 56 * 3, 0, //  30  0011 0
0, 0, 28, //  31  0111 1.
0, 0, 52, //  32  0110 1.
0, 0, 62, //  33  0100 0.
61 * 3, 59 * 3, 0, //  34  0010 1
52 * 3, 60 * 3, 0, //  35  0000 0
0, 0, 1, //  36  0101 1.
55 * 3, 54 * 3, 0, //  37  0011 1
0, 0, 61, //  38  0101 0.
0, 0, 56, //  39  0110 0.
57 * 3, 58 * 3, 0, //  40  0000 1
0, 0, 2, //  41  0100 1.
0, 0, 40, //  42  1000 0.
51 * 3, 62 * 3, 0, //  43  0010 0
0, 0, 48, //  44  1001 0.
64 * 3, 63 * 3, 0, //  45  0001 0
49 * 3, 53 * 3, 0, //  46  0001 1
0, 0, 20, //  47  1000 1.
0, 0, 12, //  48  1001 1.
80 * 3, 83 * 3, 0, //  49  0001 10
0, 0, 63, //  50  0011 00.
77 * 3, 75 * 3, 0, //  51  0010 00
65 * 3, 73 * 3, 0, //  52  0000 00
84 * 3, 66 * 3, 0, //  53  0001 11
0, 0, 24, //  54  0011 11.
0, 0, 36, //  55  0011 10.
0, 0, 3, //  56  0011 01.
69 * 3, 87 * 3, 0, //  57  0000 10
81 * 3, 79 * 3, 0, //  58  0000 11
68 * 3, 71 * 3, 0, //  59  0010 11
70 * 3, 78 * 3, 0, //  60  0000 01
67 * 3, 76 * 3, 0, //  61  0010 10
72 * 3, 74 * 3, 0, //  62  0010 01
86 * 3, 85 * 3, 0, //  63  0001 01
88 * 3, 82 * 3, 0, //  64  0001 00
-1, 94 * 3, 0, //  65  0000 000
95 * 3, 97 * 3, 0, //  66  0001 111
0, 0, 33, //  67  0010 100.
0, 0, 9, //  68  0010 110.
106 * 3, 110 * 3, 0, //  69  0000 100
102 * 3, 116 * 3, 0, //  70  0000 010
0, 0, 5, //  71  0010 111.
0, 0, 10, //  72  0010 010.
93 * 3, 89 * 3, 0, //  73  0000 001
0, 0, 6, //  74  0010 011.
0, 0, 18, //  75  0010 001.
0, 0, 17, //  76  0010 101.
0, 0, 34, //  77  0010 000.
113 * 3, 119 * 3, 0, //  78  0000 011
103 * 3, 104 * 3, 0, //  79  0000 111
90 * 3, 92 * 3, 0, //  80  0001 100
109 * 3, 107 * 3, 0, //  81  0000 110
117 * 3, 118 * 3, 0, //  82  0001 001
101 * 3, 99 * 3, 0, //  83  0001 101
98 * 3, 96 * 3, 0, //  84  0001 110
100 * 3, 91 * 3, 0, //  85  0001 011
114 * 3, 115 * 3, 0, //  86  0001 010
105 * 3, 108 * 3, 0, //  87  0000 101
112 * 3, 111 * 3, 0, //  88  0001 000
121 * 3, 125 * 3, 0, //  89  0000 0011
0, 0, 41, //  90  0001 1000.
0, 0, 14, //  91  0001 0111.
0, 0, 21, //  92  0001 1001.
124 * 3, 122 * 3, 0, //  93  0000 0010
120 * 3, 123 * 3, 0, //  94  0000 0001
0, 0, 11, //  95  0001 1110.
0, 0, 19, //  96  0001 1101.
0, 0, 7, //  97  0001 1111.
0, 0, 35, //  98  0001 1100.
0, 0, 13, //  99  0001 1011.
0, 0, 50, // 100  0001 0110.
0, 0, 49, // 101  0001 1010.
0, 0, 58, // 102  0000 0100.
0, 0, 37, // 103  0000 1110.
0, 0, 25, // 104  0000 1111.
0, 0, 45, // 105  0000 1010.
0, 0, 57, // 106  0000 1000.
0, 0, 26, // 107  0000 1101.
0, 0, 29, // 108  0000 1011.
0, 0, 38, // 109  0000 1100.
0, 0, 53, // 110  0000 1001.
0, 0, 23, // 111  0001 0001.
0, 0, 43, // 112  0001 0000.
0, 0, 46, // 113  0000 0110.
0, 0, 42, // 114  0001 0100.
0, 0, 22, // 115  0001 0101.
0, 0, 54, // 116  0000 0101.
0, 0, 51, // 117  0001 0010.
0, 0, 15, // 118  0001 0011.
0, 0, 30, // 119  0000 0111.
0, 0, 39, // 120  0000 0001 0.
0, 0, 47, // 121  0000 0011 0.
0, 0, 55, // 122  0000 0010 1.
0, 0, 27, // 123  0000 0001 1.
0, 0, 59, // 124  0000 0010 0.
0, 0, 31 // 125  0000 0011 1.
]));

_defineProperty(MPEG1, "MOTION", new Int16Array([1 * 3, 2 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  0
0, 0, 0, //   2  1.
6 * 3, 5 * 3, 0, //   3  01
8 * 3, 7 * 3, 0, //   4  00
0, 0, -1, //   5  011.
0, 0, 1, //   6  010.
9 * 3, 10 * 3, 0, //   7  001
12 * 3, 11 * 3, 0, //   8  000
0, 0, 2, //   9  0010.
0, 0, -2, //  10  0011.
14 * 3, 15 * 3, 0, //  11  0001
16 * 3, 13 * 3, 0, //  12  0000
20 * 3, 18 * 3, 0, //  13  0000 1
0, 0, 3, //  14  0001 0.
0, 0, -3, //  15  0001 1.
17 * 3, 19 * 3, 0, //  16  0000 0
-1, 23 * 3, 0, //  17  0000 00
27 * 3, 25 * 3, 0, //  18  0000 11
26 * 3, 21 * 3, 0, //  19  0000 01
24 * 3, 22 * 3, 0, //  20  0000 10
32 * 3, 28 * 3, 0, //  21  0000 011
29 * 3, 31 * 3, 0, //  22  0000 101
-1, 33 * 3, 0, //  23  0000 001
36 * 3, 35 * 3, 0, //  24  0000 100
0, 0, -4, //  25  0000 111.
30 * 3, 34 * 3, 0, //  26  0000 010
0, 0, 4, //  27  0000 110.
0, 0, -7, //  28  0000 0111.
0, 0, 5, //  29  0000 1010.
37 * 3, 41 * 3, 0, //  30  0000 0100
0, 0, -5, //  31  0000 1011.
0, 0, 7, //  32  0000 0110.
38 * 3, 40 * 3, 0, //  33  0000 0011
42 * 3, 39 * 3, 0, //  34  0000 0101
0, 0, -6, //  35  0000 1001.
0, 0, 6, //  36  0000 1000.
51 * 3, 54 * 3, 0, //  37  0000 0100 0
50 * 3, 49 * 3, 0, //  38  0000 0011 0
45 * 3, 46 * 3, 0, //  39  0000 0101 1
52 * 3, 47 * 3, 0, //  40  0000 0011 1
43 * 3, 53 * 3, 0, //  41  0000 0100 1
44 * 3, 48 * 3, 0, //  42  0000 0101 0
0, 0, 10, //  43  0000 0100 10.
0, 0, 9, //  44  0000 0101 00.
0, 0, 8, //  45  0000 0101 10.
0, 0, -8, //  46  0000 0101 11.
57 * 3, 66 * 3, 0, //  47  0000 0011 11
0, 0, -9, //  48  0000 0101 01.
60 * 3, 64 * 3, 0, //  49  0000 0011 01
56 * 3, 61 * 3, 0, //  50  0000 0011 00
55 * 3, 62 * 3, 0, //  51  0000 0100 00
58 * 3, 63 * 3, 0, //  52  0000 0011 10
0, 0, -10, //  53  0000 0100 11.
59 * 3, 65 * 3, 0, //  54  0000 0100 01
0, 0, 12, //  55  0000 0100 000.
0, 0, 16, //  56  0000 0011 000.
0, 0, 13, //  57  0000 0011 110.
0, 0, 14, //  58  0000 0011 100.
0, 0, 11, //  59  0000 0100 010.
0, 0, 15, //  60  0000 0011 010.
0, 0, -16, //  61  0000 0011 001.
0, 0, -12, //  62  0000 0100 001.
0, 0, -14, //  63  0000 0011 101.
0, 0, -15, //  64  0000 0011 011.
0, 0, -11, //  65  0000 0100 011.
0, 0, -13 //  66  0000 0011 111.
]));

_defineProperty(MPEG1, "DCT_DC_SIZE_LUMINANCE", new Int8Array([2 * 3, 1 * 3, 0, //   0
6 * 3, 5 * 3, 0, //   1  1
3 * 3, 4 * 3, 0, //   2  0
0, 0, 1, //   3  00.
0, 0, 2, //   4  01.
9 * 3, 8 * 3, 0, //   5  11
7 * 3, 10 * 3, 0, //   6  10
0, 0, 0, //   7  100.
12 * 3, 11 * 3, 0, //   8  111
0, 0, 4, //   9  110.
0, 0, 3, //  10  101.
13 * 3, 14 * 3, 0, //  11  1111
0, 0, 5, //  12  1110.
0, 0, 6, //  13  1111 0.
16 * 3, 15 * 3, 0, //  14  1111 1
17 * 3, -1, 0, //  15  1111 11
0, 0, 7, //  16  1111 10.
0, 0, 8 //  17  1111 110.
]));

_defineProperty(MPEG1, "DCT_DC_SIZE_CHROMINANCE", new Int8Array([2 * 3, 1 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  1
6 * 3, 5 * 3, 0, //   2  0
8 * 3, 7 * 3, 0, //   3  11
0, 0, 2, //   4  10.
0, 0, 1, //   5  01.
0, 0, 0, //   6  00.
10 * 3, 9 * 3, 0, //   7  111
0, 0, 3, //   8  110.
12 * 3, 11 * 3, 0, //   9  1111
0, 0, 4, //  10  1110.
14 * 3, 13 * 3, 0, //  11  1111 1
0, 0, 5, //  12  1111 0.
16 * 3, 15 * 3, 0, //  13  1111 11
0, 0, 6, //  14  1111 10.
17 * 3, -1, 0, //  15  1111 111
0, 0, 7, //  16  1111 110.
0, 0, 8 //  17  1111 1110.
]));

_defineProperty(MPEG1, "DCT_COEFF", new Int32Array([1 * 3, 2 * 3, 0, //   0
4 * 3, 3 * 3, 0, //   1  0
0, 0, 0x0001, //   2  1.
7 * 3, 8 * 3, 0, //   3  01
6 * 3, 5 * 3, 0, //   4  00
13 * 3, 9 * 3, 0, //   5  001
11 * 3, 10 * 3, 0, //   6  000
14 * 3, 12 * 3, 0, //   7  010
0, 0, 0x0101, //   8  011.
20 * 3, 22 * 3, 0, //   9  0011
18 * 3, 21 * 3, 0, //  10  0001
16 * 3, 19 * 3, 0, //  11  0000
0, 0, 0x0201, //  12  0101.
17 * 3, 15 * 3, 0, //  13  0010
0, 0, 0x0002, //  14  0100.
0, 0, 0x0003, //  15  0010 1.
27 * 3, 25 * 3, 0, //  16  0000 0
29 * 3, 31 * 3, 0, //  17  0010 0
24 * 3, 26 * 3, 0, //  18  0001 0
32 * 3, 30 * 3, 0, //  19  0000 1
0, 0, 0x0401, //  20  0011 0.
23 * 3, 28 * 3, 0, //  21  0001 1
0, 0, 0x0301, //  22  0011 1.
0, 0, 0x0102, //  23  0001 10.
0, 0, 0x0701, //  24  0001 00.
0, 0, 0xffff, //  25  0000 01. -- escape
0, 0, 0x0601, //  26  0001 01.
37 * 3, 36 * 3, 0, //  27  0000 00
0, 0, 0x0501, //  28  0001 11.
35 * 3, 34 * 3, 0, //  29  0010 00
39 * 3, 38 * 3, 0, //  30  0000 11
33 * 3, 42 * 3, 0, //  31  0010 01
40 * 3, 41 * 3, 0, //  32  0000 10
52 * 3, 50 * 3, 0, //  33  0010 010
54 * 3, 53 * 3, 0, //  34  0010 001
48 * 3, 49 * 3, 0, //  35  0010 000
43 * 3, 45 * 3, 0, //  36  0000 001
46 * 3, 44 * 3, 0, //  37  0000 000
0, 0, 0x0801, //  38  0000 111.
0, 0, 0x0004, //  39  0000 110.
0, 0, 0x0202, //  40  0000 100.
0, 0, 0x0901, //  41  0000 101.
51 * 3, 47 * 3, 0, //  42  0010 011
55 * 3, 57 * 3, 0, //  43  0000 0010
60 * 3, 56 * 3, 0, //  44  0000 0001
59 * 3, 58 * 3, 0, //  45  0000 0011
61 * 3, 62 * 3, 0, //  46  0000 0000
0, 0, 0x0a01, //  47  0010 0111.
0, 0, 0x0d01, //  48  0010 0000.
0, 0, 0x0006, //  49  0010 0001.
0, 0, 0x0103, //  50  0010 0101.
0, 0, 0x0005, //  51  0010 0110.
0, 0, 0x0302, //  52  0010 0100.
0, 0, 0x0b01, //  53  0010 0011.
0, 0, 0x0c01, //  54  0010 0010.
76 * 3, 75 * 3, 0, //  55  0000 0010 0
67 * 3, 70 * 3, 0, //  56  0000 0001 1
73 * 3, 71 * 3, 0, //  57  0000 0010 1
78 * 3, 74 * 3, 0, //  58  0000 0011 1
72 * 3, 77 * 3, 0, //  59  0000 0011 0
69 * 3, 64 * 3, 0, //  60  0000 0001 0
68 * 3, 63 * 3, 0, //  61  0000 0000 0
66 * 3, 65 * 3, 0, //  62  0000 0000 1
81 * 3, 87 * 3, 0, //  63  0000 0000 01
91 * 3, 80 * 3, 0, //  64  0000 0001 01
82 * 3, 79 * 3, 0, //  65  0000 0000 11
83 * 3, 86 * 3, 0, //  66  0000 0000 10
93 * 3, 92 * 3, 0, //  67  0000 0001 10
84 * 3, 85 * 3, 0, //  68  0000 0000 00
90 * 3, 94 * 3, 0, //  69  0000 0001 00
88 * 3, 89 * 3, 0, //  70  0000 0001 11
0, 0, 0x0203, //  71  0000 0010 11.
0, 0, 0x0104, //  72  0000 0011 00.
0, 0, 0x0007, //  73  0000 0010 10.
0, 0, 0x0402, //  74  0000 0011 11.
0, 0, 0x0502, //  75  0000 0010 01.
0, 0, 0x1001, //  76  0000 0010 00.
0, 0, 0x0f01, //  77  0000 0011 01.
0, 0, 0x0e01, //  78  0000 0011 10.
105 * 3, 107 * 3, 0, //  79  0000 0000 111
111 * 3, 114 * 3, 0, //  80  0000 0001 011
104 * 3, 97 * 3, 0, //  81  0000 0000 010
125 * 3, 119 * 3, 0, //  82  0000 0000 110
96 * 3, 98 * 3, 0, //  83  0000 0000 100
-1, 123 * 3, 0, //  84  0000 0000 000
95 * 3, 101 * 3, 0, //  85  0000 0000 001
106 * 3, 121 * 3, 0, //  86  0000 0000 101
99 * 3, 102 * 3, 0, //  87  0000 0000 011
113 * 3, 103 * 3, 0, //  88  0000 0001 110
112 * 3, 116 * 3, 0, //  89  0000 0001 111
110 * 3, 100 * 3, 0, //  90  0000 0001 000
124 * 3, 115 * 3, 0, //  91  0000 0001 010
117 * 3, 122 * 3, 0, //  92  0000 0001 101
109 * 3, 118 * 3, 0, //  93  0000 0001 100
120 * 3, 108 * 3, 0, //  94  0000 0001 001
127 * 3, 136 * 3, 0, //  95  0000 0000 0010
139 * 3, 140 * 3, 0, //  96  0000 0000 1000
130 * 3, 126 * 3, 0, //  97  0000 0000 0101
145 * 3, 146 * 3, 0, //  98  0000 0000 1001
128 * 3, 129 * 3, 0, //  99  0000 0000 0110
0, 0, 0x0802, // 100  0000 0001 0001.
132 * 3, 134 * 3, 0, // 101  0000 0000 0011
155 * 3, 154 * 3, 0, // 102  0000 0000 0111
0, 0, 0x0008, // 103  0000 0001 1101.
137 * 3, 133 * 3, 0, // 104  0000 0000 0100
143 * 3, 144 * 3, 0, // 105  0000 0000 1110
151 * 3, 138 * 3, 0, // 106  0000 0000 1010
142 * 3, 141 * 3, 0, // 107  0000 0000 1111
0, 0, 0x000a, // 108  0000 0001 0011.
0, 0, 0x0009, // 109  0000 0001 1000.
0, 0, 0x000b, // 110  0000 0001 0000.
0, 0, 0x1501, // 111  0000 0001 0110.
0, 0, 0x0602, // 112  0000 0001 1110.
0, 0, 0x0303, // 113  0000 0001 1100.
0, 0, 0x1401, // 114  0000 0001 0111.
0, 0, 0x0702, // 115  0000 0001 0101.
0, 0, 0x1101, // 116  0000 0001 1111.
0, 0, 0x1201, // 117  0000 0001 1010.
0, 0, 0x1301, // 118  0000 0001 1001.
148 * 3, 152 * 3, 0, // 119  0000 0000 1101
0, 0, 0x0403, // 120  0000 0001 0010.
153 * 3, 150 * 3, 0, // 121  0000 0000 1011
0, 0, 0x0105, // 122  0000 0001 1011.
131 * 3, 135 * 3, 0, // 123  0000 0000 0001
0, 0, 0x0204, // 124  0000 0001 0100.
149 * 3, 147 * 3, 0, // 125  0000 0000 1100
172 * 3, 173 * 3, 0, // 126  0000 0000 0101 1
162 * 3, 158 * 3, 0, // 127  0000 0000 0010 0
170 * 3, 161 * 3, 0, // 128  0000 0000 0110 0
168 * 3, 166 * 3, 0, // 129  0000 0000 0110 1
157 * 3, 179 * 3, 0, // 130  0000 0000 0101 0
169 * 3, 167 * 3, 0, // 131  0000 0000 0001 0
174 * 3, 171 * 3, 0, // 132  0000 0000 0011 0
178 * 3, 177 * 3, 0, // 133  0000 0000 0100 1
156 * 3, 159 * 3, 0, // 134  0000 0000 0011 1
164 * 3, 165 * 3, 0, // 135  0000 0000 0001 1
183 * 3, 182 * 3, 0, // 136  0000 0000 0010 1
175 * 3, 176 * 3, 0, // 137  0000 0000 0100 0
0, 0, 0x0107, // 138  0000 0000 1010 1.
0, 0, 0x0a02, // 139  0000 0000 1000 0.
0, 0, 0x0902, // 140  0000 0000 1000 1.
0, 0, 0x1601, // 141  0000 0000 1111 1.
0, 0, 0x1701, // 142  0000 0000 1111 0.
0, 0, 0x1901, // 143  0000 0000 1110 0.
0, 0, 0x1801, // 144  0000 0000 1110 1.
0, 0, 0x0503, // 145  0000 0000 1001 0.
0, 0, 0x0304, // 146  0000 0000 1001 1.
0, 0, 0x000d, // 147  0000 0000 1100 1.
0, 0, 0x000c, // 148  0000 0000 1101 0.
0, 0, 0x000e, // 149  0000 0000 1100 0.
0, 0, 0x000f, // 150  0000 0000 1011 1.
0, 0, 0x0205, // 151  0000 0000 1010 0.
0, 0, 0x1a01, // 152  0000 0000 1101 1.
0, 0, 0x0106, // 153  0000 0000 1011 0.
180 * 3, 181 * 3, 0, // 154  0000 0000 0111 1
160 * 3, 163 * 3, 0, // 155  0000 0000 0111 0
196 * 3, 199 * 3, 0, // 156  0000 0000 0011 10
0, 0, 0x001b, // 157  0000 0000 0101 00.
203 * 3, 185 * 3, 0, // 158  0000 0000 0010 01
202 * 3, 201 * 3, 0, // 159  0000 0000 0011 11
0, 0, 0x0013, // 160  0000 0000 0111 00.
0, 0, 0x0016, // 161  0000 0000 0110 01.
197 * 3, 207 * 3, 0, // 162  0000 0000 0010 00
0, 0, 0x0012, // 163  0000 0000 0111 01.
191 * 3, 192 * 3, 0, // 164  0000 0000 0001 10
188 * 3, 190 * 3, 0, // 165  0000 0000 0001 11
0, 0, 0x0014, // 166  0000 0000 0110 11.
184 * 3, 194 * 3, 0, // 167  0000 0000 0001 01
0, 0, 0x0015, // 168  0000 0000 0110 10.
186 * 3, 193 * 3, 0, // 169  0000 0000 0001 00
0, 0, 0x0017, // 170  0000 0000 0110 00.
204 * 3, 198 * 3, 0, // 171  0000 0000 0011 01
0, 0, 0x0019, // 172  0000 0000 0101 10.
0, 0, 0x0018, // 173  0000 0000 0101 11.
200 * 3, 205 * 3, 0, // 174  0000 0000 0011 00
0, 0, 0x001f, // 175  0000 0000 0100 00.
0, 0, 0x001e, // 176  0000 0000 0100 01.
0, 0, 0x001c, // 177  0000 0000 0100 11.
0, 0, 0x001d, // 178  0000 0000 0100 10.
0, 0, 0x001a, // 179  0000 0000 0101 01.
0, 0, 0x0011, // 180  0000 0000 0111 10.
0, 0, 0x0010, // 181  0000 0000 0111 11.
189 * 3, 206 * 3, 0, // 182  0000 0000 0010 11
187 * 3, 195 * 3, 0, // 183  0000 0000 0010 10
218 * 3, 211 * 3, 0, // 184  0000 0000 0001 010
0, 0, 0x0025, // 185  0000 0000 0010 011.
215 * 3, 216 * 3, 0, // 186  0000 0000 0001 000
0, 0, 0x0024, // 187  0000 0000 0010 100.
210 * 3, 212 * 3, 0, // 188  0000 0000 0001 110
0, 0, 0x0022, // 189  0000 0000 0010 110.
213 * 3, 209 * 3, 0, // 190  0000 0000 0001 111
221 * 3, 222 * 3, 0, // 191  0000 0000 0001 100
219 * 3, 208 * 3, 0, // 192  0000 0000 0001 101
217 * 3, 214 * 3, 0, // 193  0000 0000 0001 001
223 * 3, 220 * 3, 0, // 194  0000 0000 0001 011
0, 0, 0x0023, // 195  0000 0000 0010 101.
0, 0, 0x010b, // 196  0000 0000 0011 100.
0, 0, 0x0028, // 197  0000 0000 0010 000.
0, 0, 0x010c, // 198  0000 0000 0011 011.
0, 0, 0x010a, // 199  0000 0000 0011 101.
0, 0, 0x0020, // 200  0000 0000 0011 000.
0, 0, 0x0108, // 201  0000 0000 0011 111.
0, 0, 0x0109, // 202  0000 0000 0011 110.
0, 0, 0x0026, // 203  0000 0000 0010 010.
0, 0, 0x010d, // 204  0000 0000 0011 010.
0, 0, 0x010e, // 205  0000 0000 0011 001.
0, 0, 0x0021, // 206  0000 0000 0010 111.
0, 0, 0x0027, // 207  0000 0000 0010 001.
0, 0, 0x1f01, // 208  0000 0000 0001 1011.
0, 0, 0x1b01, // 209  0000 0000 0001 1111.
0, 0, 0x1e01, // 210  0000 0000 0001 1100.
0, 0, 0x1002, // 211  0000 0000 0001 0101.
0, 0, 0x1d01, // 212  0000 0000 0001 1101.
0, 0, 0x1c01, // 213  0000 0000 0001 1110.
0, 0, 0x010f, // 214  0000 0000 0001 0011.
0, 0, 0x0112, // 215  0000 0000 0001 0000.
0, 0, 0x0111, // 216  0000 0000 0001 0001.
0, 0, 0x0110, // 217  0000 0000 0001 0010.
0, 0, 0x0603, // 218  0000 0000 0001 0100.
0, 0, 0x0b02, // 219  0000 0000 0001 1010.
0, 0, 0x0e02, // 220  0000 0000 0001 0111.
0, 0, 0x0d02, // 221  0000 0000 0001 1000.
0, 0, 0x0c02, // 222  0000 0000 0001 1001.
0, 0, 0x0f02 // 223  0000 0000 0001 0110.
]));

_defineProperty(MPEG1, "PICTURE_TYPE", {
  INTRA: 1,
  PREDICTIVE: 2,
  B: 3
});

_defineProperty(MPEG1, "START", {
  SEQUENCE: 0xB3,
  SLICE_FIRST: 0x01,
  SLICE_LAST: 0xAF,
  PICTURE: 0x00,
  EXTENSION: 0xB5,
  USER_DATA: 0xB2
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/player.js":
/*!***************************************!*\
  !*** ./src/libs/jsmpeg/src/player.js ***!
  \***************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _websocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket.js */ "./src/libs/jsmpeg/src/websocket.js");
/* harmony import */ var _mpeg1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpeg1.js */ "./src/libs/jsmpeg/src/mpeg1.js");
/* harmony import */ var _mpeg1_wasm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mpeg1-wasm.js */ "./src/libs/jsmpeg/src/mpeg1-wasm.js");
/* harmony import */ var _mp2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mp2.js */ "./src/libs/jsmpeg/src/mp2.js");
/* harmony import */ var _mp2_wasm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mp2-wasm.js */ "./src/libs/jsmpeg/src/mp2-wasm.js");
/* harmony import */ var _webgl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl.js */ "./src/libs/jsmpeg/src/webgl.js");
/* harmony import */ var _canvas2d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas2d.js */ "./src/libs/jsmpeg/src/canvas2d.js");
/* harmony import */ var _webaudio_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webaudio.js */ "./src/libs/jsmpeg/src/webaudio.js");
/* harmony import */ var _ts_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ts.js */ "./src/libs/jsmpeg/src/ts.js");
/* harmony import */ var _wasm_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wasm-module.js */ "./src/libs/jsmpeg/src/wasm-module.js");
/* harmony import */ var _jsmpeg_wasm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsmpeg.wasm.js */ "./src/libs/jsmpeg/jsmpeg.wasm.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { AjaxSource } from "./ajax.js";
// import { AjaxProgressiveSource } from "./ajax-progressive.js";
// import { FetchSource } from "./fetch.js";




 // import { MPEG2 } from "./mpeg2.js";




 // import { TS2 } from "./ts2.js";




class Player {
  constructor(url, options) {
    _defineProperty(this, "startLoading", () => {
      this.source.start();

      if (this.autoplay) {
        this.play();
      }
    });

    _defineProperty(this, "showHide", () => {
      if (document.visibilityState === "hidden") {
        this.unpauseOnShow = this.wantsToPlay;
        this.pause();
      } else if (this.unpauseOnShow) {
        this.play();
      }
    });

    _defineProperty(this, "play", () => {
      if (this.animationId) {
        return;
      }

      this.animationId = requestAnimationFrame(this.update.bind(this));
      this.wantsToPlay = true;
      this.paused = false;
    });

    _defineProperty(this, "pause", () => {
      if (this.paused) {
        return;
      }

      cancelAnimationFrame(this.animationId);
      this.animationId = null;
      this.wantsToPlay = false;
      this.isPlaying = false;
      this.paused = true;

      if (this.audio && this.audio.canPlay) {
        // Seek to the currentTime again - audio may already be enqueued a bit
        // further, so we have to rewind it.
        this.audioOut.stop();
        this.seek(this.currentTime);
      }

      if (this.options.onPause) {
        this.options.onPause(this);
      }
    });

    _defineProperty(this, "getVolume", () => {
      return this.audioOut ? this.audioOut.volume : 0;
    });

    _defineProperty(this, "setVolume", function (volume) {
      if (this.audioOut) {
        this.audioOut.volume = volume;
      }
    });

    _defineProperty(this, "stop", () => {
      this.pause();
      this.seek(0);

      if (this.video && this.options.decodeFirstFrame !== false) {
        this.video.decode();
      }
    });

    _defineProperty(this, "destroy", () => {
      this.pause();
      this.source.destroy();
      this.video && this.video.destroy();
      this.renderer && this.renderer.destroy();
      this.audio && this.audio.destroy();
      this.audioOut && this.audioOut.destroy();
    });

    _defineProperty(this, "seek", time => {
      let startOffset = this.audio && this.audio.canPlay ? this.audio.startTime : this.video.startTime;

      if (this.video) {
        this.video.seek(time + startOffset);
      }

      if (this.audio) {
        this.audio.seek(time + startOffset);
      }

      this.startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_11__["Now"])() - time;
    });

    _defineProperty(this, "getCurrentTime", () => {
      return this.audio && this.audio.canPlay ? this.audio.currentTime - this.audio.startTime : this.video ? this.video.currentTime - this.video.startTime : null;
    });

    _defineProperty(this, "setCurrentTime", function (time) {
      this.seek(time);
    });

    _defineProperty(this, "update", () => {
      this.animationId = requestAnimationFrame(this.update.bind(this));

      if (!this.source.established) {
        if (this.renderer) {
          this.renderer.renderProgress(this.source.progress);
        }

        return;
      }

      if (!this.isPlaying) {
        this.isPlaying = true;
        this.startTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_11__["Now"])() - this.currentTime;

        if (this.options.onPlay) {
          this.options.onPlay(this);
        }
      }

      if (this.options.streaming) {
        this.updateForStreaming();
      } else {
        this.updateForStaticFile();
      }
    });

    _defineProperty(this, "updateForStreaming", () => {
      // When streaming, immediately decode everything we have buffered up until
      // now to minimize playback latency.
      if (this.video) {
        this.video.decode();
      }

      if (this.audio) {
        let decoded = false;

        do {
          // If there's a lot of audio enqueued already, disable output and
          // catch up with the encoding.
          if (this.audioOut.enqueuedTime > this.maxAudioLag) {
            this.audioOut.resetEnqueuedTime();
            this.audioOut.enabled = false;
          }

          decoded = this.audio.decode();
        } while (decoded);

        this.audioOut.enabled = true;
      }
    });

    _defineProperty(this, "nextFrame", () => {
      if (this.source.established && this.video) {
        return this.video.decode();
      }

      return false;
    });

    _defineProperty(this, "updateForStaticFile", () => {
      let notEnoughData = false;
      let headroom = 0; // If we have an audio track, we always try to sync the video to the audio.
      // Gaps and discontinuities are far more percetable in audio than in video.

      if (this.audio && this.audio.canPlay) {
        // Do we have to decode and enqueue some more audio data?
        while (!notEnoughData && this.audio.decodedTime - this.audio.currentTime < 0.25) {
          notEnoughData = !this.audio.decode();
        } // Sync video to audio


        if (this.video && this.video.currentTime < this.audio.currentTime) {
          notEnoughData = !this.video.decode();
        }

        headroom = this.demuxer.currentTime - this.audio.currentTime;
      } else if (this.video) {
        // Video only - sync it to player's wallclock
        var targetTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_11__["Now"])() - this.startTime + this.video.startTime,
            lateTime = targetTime - this.video.currentTime,
            frameTime = 1 / this.video.frameRate;

        if (this.video && lateTime > 0) {
          // If the video is too far behind (>2 frames), simply reset the
          // target time to the next frame instead of trying to catch up.
          if (lateTime > frameTime * 2) {
            this.startTime += lateTime;
          }

          notEnoughData = !this.video.decode();
        }

        headroom = this.demuxer.currentTime - targetTime;
      } // Notify the source of the playhead headroom, so it can decide whether to
      // continue loading further data.


      this.source.resume(headroom); // If we failed to decode and the source is complete, it means we reached
      // the end of our data. We may want to loop.

      if (notEnoughData && this.source.completed) {
        if (this.loop) {
          this.seek(0);
        } else {
          this.pause();

          if (this.options.onEnded) {
            this.options.onEnded(this);
          }
        }
      } // If there's not enough data and the source is not completed, we have
      // just stalled.
      else if (notEnoughData && this.options.onStalled) {
          this.options.onStalled(this);
        }
    });

    this.options = options || {};

    if (options.source) {
      this.source = new options.source(url, options);
      options.streaming = !!this.source.streaming;
    } else if (url.match(/^wss?:\/\//)) {// this.source = new WSSource(url, options);
      // options.streaming = true;
    } else if (url.match(/^https?:\/\//)) {
      this.source = new _websocket_js__WEBPACK_IMPORTED_MODULE_0__["SIOSource"](url, options);
      options.streaming = true;
    } else if (options.progressive !== false) {// this.source = new AjaxProgressiveSource(url, options);
      // options.streaming = false;
    } else {// this.source = new AjaxSource(url, options);
        // options.streaming = false;
      }

    this.maxAudioLag = options.maxAudioLag || 0.25;
    this.loop = options.loop !== false;
    this.autoplay = !!options.autoplay || options.streaming;
    this.demuxer = new _ts_js__WEBPACK_IMPORTED_MODULE_8__["TS"](options); // this.demuxer = new TS2(options);

    this.source.connect(this.demuxer);

    if (!options.disableWebAssembly && _wasm_module_js__WEBPACK_IMPORTED_MODULE_9__["WASM"].IsSupported()) {
      this.wasmModule = _wasm_module_js__WEBPACK_IMPORTED_MODULE_9__["WASM"].GetModule();
      options.wasmModule = this.wasmModule;
    }

    if (options.video !== false) {
      this.video = options.wasmModule ? new _mpeg1_wasm_js__WEBPACK_IMPORTED_MODULE_2__["MPEG1WASM"](options) : new _mpeg1_js__WEBPACK_IMPORTED_MODULE_1__["MPEG1"](options);
      this.renderer = !options.disableGl && _webgl_js__WEBPACK_IMPORTED_MODULE_5__["WebGLRenderer"].IsSupported() ? new _webgl_js__WEBPACK_IMPORTED_MODULE_5__["WebGLRenderer"](options) : new _canvas2d_js__WEBPACK_IMPORTED_MODULE_6__["CanvasRenderer"](options);
      this.demuxer.connect(_ts_js__WEBPACK_IMPORTED_MODULE_8__["TS"].STREAM.VIDEO_1, this.video);
      this.video.connect(this.renderer);
    }

    if (options.audio !== false && _webaudio_js__WEBPACK_IMPORTED_MODULE_7__["WebAudioOut"].IsSupported()) {
      this.audio = options.wasmModule ? new _mp2_wasm_js__WEBPACK_IMPORTED_MODULE_4__["MP2WASM"](options) : new _mp2_js__WEBPACK_IMPORTED_MODULE_3__["MP2"](options);
      this.audioOut = new _webaudio_js__WEBPACK_IMPORTED_MODULE_7__["WebAudioOut"](options);
      this.demuxer.connect(_ts_js__WEBPACK_IMPORTED_MODULE_8__["TS"].STREAM.AUDIO_1, this.audio);
      this.audio.connect(this.audioOut);
    }

    Object.defineProperty(this, "currentTime", {
      get: this.getCurrentTime,
      set: this.setCurrentTime
    });
    Object.defineProperty(this, "volume", {
      get: this.getVolume,
      set: this.setVolume
    });
    this.unpauseOnShow = false;

    if (options.pauseWhenHidden !== false) {
      document.addEventListener("visibilitychange", this.showHide.bind(this));
    } // If we have WebAssembly support, wait until the module is compiled before
    // loading the source. Otherwise the decoders won't know what to do with
    // the source data.


    if (this.wasmModule) {
      if (this.wasmModule.ready) {
        this.startLoading(); // todo:
      } else if (
      /*JSMpeg.WASM_BINARY_INLINED*/
      true) {
        let wasm = Object(_utils_js__WEBPACK_IMPORTED_MODULE_11__["Base64ToArrayBuffer"])(_jsmpeg_wasm_js__WEBPACK_IMPORTED_MODULE_10__["WASM_BINARY_INLINED"]);
        this.wasmModule.loadFromBuffer(wasm, this.startLoading.bind(this));
      } else {}
    } else {
      this.startLoading();
    }
  }

}

/***/ }),

/***/ "./src/libs/jsmpeg/src/ts.js":
/*!***********************************!*\
  !*** ./src/libs/jsmpeg/src/ts.js ***!
  \***********************************/
/*! exports provided: TS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TS", function() { return TS; });
/* harmony import */ var _buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class TS {
  constructor(options) {
    _defineProperty(this, "connect", function (streamId, destination) {
      this.pesPacketInfo[streamId] = {
        destination: destination,
        currentLength: 0,
        totalLength: 0,
        pts: 0,
        buffers: []
      };
    });

    _defineProperty(this, "write", function (buffer) {
      if (this.leftoverBytes) {
        var totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
        this.bits = new _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"](totalLength);
        this.bits.write([this.leftoverBytes, buffer]);
      } else {
        this.bits = new _buffer_js__WEBPACK_IMPORTED_MODULE_0__["BitBuffer"](buffer);
      }

      while (this.bits.has(188 << 3) && this.parsePacket()) {}

      var leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
      this.leftoverBytes = leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
    });

    _defineProperty(this, "parsePacket", function () {
      // Check if we're in sync with packet boundaries; attempt to resync if not.
      if (this.bits.read(8) !== 0x47) {
        if (!this.resync()) {
          // Couldn't resync; maybe next time...
          return false;
        }
      }

      var end = (this.bits.index >> 3) + 187;
      var transportError = this.bits.read(1),
          payloadStart = this.bits.read(1),
          transportPriority = this.bits.read(1),
          pid = this.bits.read(13),
          transportScrambling = this.bits.read(2),
          adaptationField = this.bits.read(2),
          continuityCounter = this.bits.read(4); // If this is the start of a new payload; signal the end of the previous
      // frame, if we didn't do so already.

      var streamId = this.pidsToStreamIds[pid];

      if (payloadStart && streamId) {
        var pi = this.pesPacketInfo[streamId];

        if (pi && pi.currentLength) {
          this.packetComplete(pi);
        }
      } // Extract current payload


      if (adaptationField & 0x1) {
        if (adaptationField & 0x2) {
          var adaptationFieldLength = this.bits.read(8);
          this.bits.skip(adaptationFieldLength << 3);
        }

        if (payloadStart && this.bits.nextBytesAreStartCode()) {
          this.bits.skip(24);
          streamId = this.bits.read(8);
          this.pidsToStreamIds[pid] = streamId;
          var packetLength = this.bits.read(16);
          this.bits.skip(8);
          var ptsDtsFlag = this.bits.read(2);
          this.bits.skip(6);
          var headerLength = this.bits.read(8);
          var payloadBeginIndex = this.bits.index + (headerLength << 3);
          var pi = this.pesPacketInfo[streamId];

          if (pi) {
            var pts = 0;

            if (ptsDtsFlag & 0x2) {
              // The Presentation Timestamp is encoded as 33(!) bit
              // integer, but has a "marker bit" inserted at weird places
              // in between, making the whole thing 5 bytes in size.
              // You can't make this shit up...
              this.bits.skip(4);
              var p32_30 = this.bits.read(3);
              this.bits.skip(1);
              var p29_15 = this.bits.read(15);
              this.bits.skip(1);
              var p14_0 = this.bits.read(15);
              this.bits.skip(1); // Can't use bit shifts here; we need 33 bits of precision,
              // so we're using JavaScript's double number type. Also
              // divide by the 90khz clock to get the pts in seconds.

              pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 90000;
              this.currentTime = pts;

              if (this.startTime === -1) {
                this.startTime = pts;
              }
            }

            var payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
            this.packetStart(pi, pts, payloadLength);
          } // Skip the rest of the header without parsing it


          this.bits.index = payloadBeginIndex;
        }

        if (streamId) {
          // Attempt to detect if the PES packet is complete. For Audio (and
          // other) packets, we received a total packet length with the PES
          // header, so we can check the current length.
          // For Video packets, we have to guess the end by detecting if this
          // TS packet was padded - there's no good reason to pad a TS packet
          // in between, but it might just fit exactly. If this fails, we can
          // only wait for the next PES header for that stream.
          var pi = this.pesPacketInfo[streamId];

          if (pi) {
            var start = this.bits.index >> 3;
            var complete = this.packetAddData(pi, start, end);
            var hasPadding = !payloadStart && adaptationField & 0x2;

            if (complete || this.guessVideoFrameEnd && hasPadding) {
              this.packetComplete(pi);
            }
          }
        }
      }

      this.bits.index = end << 3;
      return true;
    });

    _defineProperty(this, "resync", () => {
      // Check if we have enough data to attempt a resync. We need 5 full packets.
      if (!this.bits.has(188 * 6 << 3)) {
        return false;
      }

      let byteIndex = this.bits.index >> 3; // Look for the first sync token in the first 187 bytes

      for (let i = 0; i < 187; i++) {
        if (this.bits.bytes[byteIndex + i] === 0x47) {
          // Look for 4 more sync tokens, each 188 bytes appart
          let foundSync = true;

          for (let j = 1; j < 5; j++) {
            if (this.bits.bytes[byteIndex + i + 188 * j] !== 0x47) {
              foundSync = false;
              break;
            }
          }

          if (foundSync) {
            this.bits.index = byteIndex + i + 1 << 3;
            return true;
          }
        }
      } // In theory, we shouldn't arrive here. If we do, we had enough data but
      // still didn't find sync - this can only happen if we were fed garbage
      // data. Check your source!


      console.warn("JSMpeg: Possible garbage data. Skipping.");
      this.bits.skip(187 << 3);
      return false;
    });

    _defineProperty(this, "packetStart", function (pi, pts, payloadLength) {
      pi.totalLength = payloadLength;
      pi.currentLength = 0;
      pi.pts = pts;
    });

    _defineProperty(this, "packetAddData", function (pi, start, end) {
      pi.buffers.push(this.bits.bytes.subarray(start, end));
      pi.currentLength += end - start;
      let complete = pi.totalLength !== 0 && pi.currentLength >= pi.totalLength;
      return complete;
    });

    _defineProperty(this, "packetComplete", pi => {
      pi.destination.write(pi.pts, pi.buffers);
      pi.totalLength = 0;
      pi.currentLength = 0;
      pi.buffers = [];
    });

    this.bits = null;
    this.leftoverBytes = null;
    this.guessVideoFrameEnd = true;
    this.pidsToStreamIds = {};
    this.pesPacketInfo = {};
    this.startTime = 0;
    this.currentTime = 0;
  }

}

_defineProperty(TS, "STREAM", {
  PACK_HEADER: 0xba,
  SYSTEM_HEADER: 0xbb,
  PROGRAM_MAP: 0xbc,
  PRIVATE_1: 0xbd,
  PADDING: 0xbe,
  PRIVATE_2: 0xbf,
  AUDIO_1: 0xc0,
  VIDEO_1: 0xe0,
  DIRECTORY: 0xff
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/utils.js":
/*!**************************************!*\
  !*** ./src/libs/jsmpeg/src/utils.js ***!
  \**************************************/
/*! exports provided: Now, CreateVideoElements, Fill, Base64ToArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Now", function() { return Now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoElements", function() { return CreateVideoElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fill", function() { return Fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64ToArrayBuffer", function() { return Base64ToArrayBuffer; });
function Now() {
  return window.performance ? window.performance.now() / 1000 : Date.now() / 1000;
}
function CreateVideoElements() {
  var elements = document.querySelectorAll(".jsmpeg");

  for (var i = 0; i < elements.length; i++) {
    new this.VideoElement(elements[i]);
  }
}
function Fill(array, value) {
  if (array.fill) {
    array.fill(value);
  } else {
    for (var i = 0; i < array.length; i++) {
      array[i] = value;
    }
  }
}
function Base64ToArrayBuffer(base64) {
  var binary = window.atob(base64);
  var length = binary.length;
  var bytes = new Uint8Array(length);

  for (var i = 0; i < length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes.buffer;
}

/***/ }),

/***/ "./src/libs/jsmpeg/src/wasm-module.js":
/*!********************************************!*\
  !*** ./src/libs/jsmpeg/src/wasm-module.js ***!
  \********************************************/
/*! exports provided: WASM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WASM", function() { return WASM; });
/* harmony import */ var _ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.js */ "./src/libs/jsmpeg/src/ajax.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class WASM {
  constructor() {
    _defineProperty(this, "write", function (buffer) {
      this.loadFromBuffer(buffer, this.onInitCallback);
    });

    _defineProperty(this, "loadFromFile", function (url, callback) {
      this.onInitCallback = callback;
      var ajax = new _ajax_js__WEBPACK_IMPORTED_MODULE_0__["AjaxSource"](url, {});
      ajax.connect(this);
      ajax.start();
    });

    _defineProperty(this, "loadFromBuffer", function (buffer, callback) {
      this.moduleInfo = this.readDylinkSection(buffer);

      if (!this.moduleInfo) {
        this.callback && this.callback(null);
        return;
      }

      this.memory = new WebAssembly.Memory({
        initial: 256
      });
      var env = {
        memory: this.memory,
        __memory_base: 0,
        table: new WebAssembly.Table({
          initial: this.moduleInfo.tableSize,
          element: "anyfunc"
        }),
        __table_base: 0,
        abort: this.c_abort.bind(this),
        // ___assert_fail: this.c_assertFail.bind(this),
        // _sbrk: this.c_sbrk.bind(this),
        __assert_fail: this.c_assertFail.bind(this),
        sbrk: this.c_sbrk.bind(this),
        stackSave: () => {},
        stackRestore: () => {}
      };
      this.brk = this.align(this.moduleInfo.memorySize + this.stackSize);
      WebAssembly.instantiate(buffer, {
        env: env
      }).then(function (results) {
        this.instance = results.instance;

        if (this.instance.exports.__post_instantiate) {
          this.instance.exports.__post_instantiate();
        }

        this.createHeapViews();
        this.ready = true;
        callback && callback(this);
      }.bind(this));
    });

    _defineProperty(this, "createHeapViews", function () {
      this.instance.heapU8 = new Uint8Array(this.memory.buffer);
      this.instance.heapU32 = new Uint32Array(this.memory.buffer);
      this.instance.heapF32 = new Float32Array(this.memory.buffer);
    });

    _defineProperty(this, "align", function (addr) {
      var a = Math.pow(2, this.moduleInfo.memoryAlignment);
      return Math.ceil(addr / a) * a;
    });

    _defineProperty(this, "c_sbrk", function (size) {
      var previousBrk = this.brk;
      this.brk += size;

      if (this.brk > this.memory.buffer.byteLength) {
        var bytesNeeded = this.brk - this.memory.buffer.byteLength;
        var pagesNeeded = Math.ceil(bytesNeeded / this.pageSize);
        this.memory.grow(pagesNeeded);
        this.createHeapViews();
      }

      return previousBrk;
    });

    _defineProperty(this, "c_abort", function (size) {
      console.warn("JSMPeg: WASM abort", arguments);
    });

    _defineProperty(this, "c_assertFail", function (size) {
      console.warn("JSMPeg: WASM ___assert_fail", arguments);
    });

    _defineProperty(this, "readDylinkSection", function (buffer) {
      // Read the WASM header and dylink section of the .wasm binary data
      // to get the needed table size and static data size.
      // https://github.com/WebAssembly/tool-conventions/blob/master/DynamicLinking.md
      // https://github.com/kripken/emscripten/blob/20602efb955a7c6c20865a495932427e205651d2/src/support.js
      var bytes = new Uint8Array(buffer);
      var next = 0;

      var readVarUint = function () {
        var ret = 0;
        var mul = 1;

        while (1) {
          var byte = bytes[next++];
          ret += (byte & 0x7f) * mul;
          mul *= 0x80;

          if (!(byte & 0x80)) {
            return ret;
          }
        }
      };

      var matchNextBytes = function (expected) {
        for (var i = 0; i < expected.length; i++) {
          var b = typeof expected[i] === "string" ? expected[i].charCodeAt(0) : expected[i];

          if (bytes[next++] !== b) {
            return false;
          }
        }

        return true;
      }; // Make sure we have a wasm header


      if (!matchNextBytes([0, "a", "s", "m"])) {
        console.warn("JSMpeg: WASM header not found");
        return null;
      } // Make sure we have a dylink section


      var next = 9;
      var sectionSize = readVarUint();

      if (!matchNextBytes([6, "d", "y", "l", "i", "n", "k"])) {
        console.warn("JSMpeg: No dylink section found in WASM");
        return null;
      }

      return {
        memorySize: readVarUint(),
        memoryAlignment: readVarUint(),
        tableSize: readVarUint(),
        tableAlignment: readVarUint()
      };
    });

    this.stackSize = 5 * 1024 * 1024; // emscripten default

    this.pageSize = 64 * 1024; // wasm page size

    this.onInitCallback = null;
    this.ready = false;
  }

}

_defineProperty(WASM, "IsSupported", function () {
  return !!window.WebAssembly;
});

_defineProperty(WASM, "GetModule", function () {
  WASM.CACHED_MODULE = WASM.CACHED_MODULE || new WASM();
  return WASM.CACHED_MODULE;
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/webaudio.js":
/*!*****************************************!*\
  !*** ./src/libs/jsmpeg/src/webaudio.js ***!
  \*****************************************/
/*! exports provided: WebAudioOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAudioOut", function() { return WebAudioOut; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class WebAudioOut {
  constructor(options) {
    _defineProperty(this, "destroy", function () {
      this.gain.disconnect();
      this.context._connections--;

      if (this.context._connections === 0) {
        this.context.close();
        WebAudioOut.CachedContext = null;
      }
    });

    _defineProperty(this, "play", function (sampleRate, left, right) {
      if (!this.enabled) {
        return;
      } // If the context is not unlocked yet, we simply advance the start time
      // to "fake" actually playing audio. This will keep the video in sync.


      if (!this.unlocked) {
        var ts = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["Now"])();

        if (this.wallclockStartTime < ts) {
          this.wallclockStartTime = ts;
        }

        this.wallclockStartTime += left.length / sampleRate;
        return;
      }

      this.gain.gain.value = this.volume;
      var buffer = this.context.createBuffer(2, left.length, sampleRate);
      buffer.getChannelData(0).set(left);
      buffer.getChannelData(1).set(right);
      var source = this.context.createBufferSource();
      source.buffer = buffer;
      source.connect(this.destination);
      var now = this.context.currentTime;
      var duration = buffer.duration;

      if (this.startTime < now) {
        this.startTime = now;
        this.wallclockStartTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["Now"])();
      }

      source.start(this.startTime);
      this.startTime += duration;
      this.wallclockStartTime += duration;
    });

    _defineProperty(this, "stop", function () {
      // Meh; there seems to be no simple way to get a list of currently
      // active source nodes from the Audio Context, and maintaining this
      // list ourselfs would be a pain, so we just set the gain to 0
      // to cut off all enqueued audio instantly.
      this.gain.gain.value = 0;
    });

    _defineProperty(this, "getEnqueuedTime", function () {
      // The AudioContext.currentTime is only updated every so often, so if we
      // want to get exact timing, we need to rely on the system time.
      return Math.max(this.wallclockStartTime - Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["Now"])(), 0);
    });

    _defineProperty(this, "resetEnqueuedTime", function () {
      this.startTime = this.context.currentTime;
      this.wallclockStartTime = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["Now"])();
    });

    _defineProperty(this, "unlock", function (callback) {
      if (this.unlocked) {
        if (callback) {
          callback();
        }

        return;
      }

      this.unlockCallback = callback; // Create empty buffer and play it

      var buffer = this.context.createBuffer(1, 1, 22050);
      var source = this.context.createBufferSource();
      source.buffer = buffer;
      source.connect(this.destination);
      source.start(0);
      setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0);
    });

    _defineProperty(this, "checkIfUnlocked", function (source, attempt) {
      if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
        this.unlocked = true;

        if (this.unlockCallback) {
          this.unlockCallback();
          this.unlockCallback = null;
        }
      } else if (attempt < 10) {
        // Jeez, what a shit show. Thanks iOS!
        setTimeout(this.checkIfUnlocked.bind(this, source, attempt + 1), 100);
      }
    });

    this.context = WebAudioOut.CachedContext = WebAudioOut.CachedContext || new (window.AudioContext || window.webkitAudioContext)();
    this.gain = this.context.createGain();
    this.destination = this.gain; // Keep track of the number of connections to this AudioContext, so we
    // can safely close() it when we're the only one connected to it.

    this.gain.connect(this.context.destination);
    this.context._connections = (this.context._connections || 0) + 1;
    this.startTime = 0;
    this.buffer = null;
    this.wallclockStartTime = 0;
    this.volume = 1;
    this.enabled = true; // maybe needs to be global to class:
    // todo:

    this.CachedContext = null;
    this.unlocked = !WebAudioOut.NeedsUnlocking();
    Object.defineProperty(this, "enqueuedTime", {
      get: this.getEnqueuedTime
    });
  }

}

_defineProperty(WebAudioOut, "NeedsUnlocking", function () {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
});

_defineProperty(WebAudioOut, "IsSupported", function () {
  return window.AudioContext || window.webkitAudioContext;
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/webgl.js":
/*!**************************************!*\
  !*** ./src/libs/jsmpeg/src/webgl.js ***!
  \**************************************/
/*! exports provided: WebGLRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebGLRenderer", function() { return WebGLRenderer; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WebGLRenderer {
  constructor(options) {
    _defineProperty(this, "destroy", () => {
      let gl = this.gl;
      this.deleteTexture(gl.TEXTURE0, this.textureY);
      this.deleteTexture(gl.TEXTURE1, this.textureCb);
      this.deleteTexture(gl.TEXTURE2, this.textureCr);
      gl.useProgram(null);
      gl.deleteProgram(this.program);
      gl.deleteProgram(this.loadingProgram);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.deleteBuffer(this.vertexBuffer); // breaks:
      // gl.getExtension("WEBGL_lose_context").loseContext();
      // window.lose_context = gl.getExtension("WEBGL_lose_context");
      // window.lose_context.loseContext();
      // console.log(lose_context.restoreContext);
      // lose_context.restoreContext();
      // this.canvas.remove(); // don't do this because I need it // fosse
      // let newEl = document.createElement("canvas");
      // newEl.id = this.canvas.id;
      // newEl.classList = this.canvas.classList;
      // newEl.width = this.canvas.width;
      // newEl.height = this.canvas.height;
      // newEl.style = this.canvas.style;
      // this.canvas.parentNode.replaceChild(newEl, this.canvas);
      // // window.newEl = newEl;
      // this.canvas.remove();
    });

    _defineProperty(this, "resize", (width, height) => {
      this.width = width | 0;
      this.height = height | 0;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.gl.useProgram(this.program);
      let codedWidth = this.width + 15 >> 4 << 4;
      this.gl.viewport(0, 0, codedWidth, this.height);
    });

    _defineProperty(this, "createTexture", (index, name) => {
      let gl = this.gl;
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.uniform1i(gl.getUniformLocation(this.program, name), index);
      return texture;
    });

    _defineProperty(this, "createProgram", (vsh, fsh) => {
      let gl = this.gl;
      let program = gl.createProgram();
      gl.attachShader(program, this.compileShader(gl.VERTEX_SHADER, vsh));
      gl.attachShader(program, this.compileShader(gl.FRAGMENT_SHADER, fsh));
      gl.linkProgram(program);
      gl.useProgram(program);
      return program;
    });

    _defineProperty(this, "compileShader", (type, source) => {
      let gl = this.gl;
      let shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader));
      }

      return shader;
    });

    _defineProperty(this, "allowsClampedTextureData", () => {
      let gl = this.gl;
      let texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, 1, 1, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, new Uint8ClampedArray([0]));
      return gl.getError() === 0;
    });

    _defineProperty(this, "renderProgress", progress => {
      let gl = this.gl;
      gl.useProgram(this.loadingProgram);
      let loc = gl.getUniformLocation(this.loadingProgram, "progress");
      gl.uniform1f(loc, progress);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    });

    _defineProperty(this, "render", (y, cb, cr, isClampedArray) => {
      if (!this.enabled) {
        return;
      }

      let gl = this.gl;
      let w = this.width + 15 >> 4 << 4,
          h = this.height,
          w2 = w >> 1,
          h2 = h >> 1; // In some browsers WebGL doesn't like Uint8ClampedArrays (this is a bug
      // and should be fixed soon-ish), so we have to create a Uint8Array view
      // for each plane.

      if (isClampedArray && this.shouldCreateUnclampedViews) {
        y = new Uint8Array(y.buffer), cb = new Uint8Array(cb.buffer), cr = new Uint8Array(cr.buffer);
      }

      gl.useProgram(this.program);
      this.updateTexture(gl.TEXTURE0, this.textureY, w, h, y);
      this.updateTexture(gl.TEXTURE1, this.textureCb, w2, h2, cb);
      this.updateTexture(gl.TEXTURE2, this.textureCr, w2, h2, cr);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    });

    _defineProperty(this, "updateTexture", (unit, texture, w, h, data) => {
      let gl = this.gl;
      gl.activeTexture(unit);
      gl.bindTexture(gl.TEXTURE_2D, texture);

      if (this.hasTextureData[unit]) {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, w, h, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
      } else {
        this.hasTextureData[unit] = true;
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, w, h, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data);
      }
    });

    _defineProperty(this, "deleteTexture", (unit, texture) => {
      let gl = this.gl;
      gl.activeTexture(unit);
      gl.bindTexture(gl.TEXTURE_2D, null);
      gl.deleteTexture(texture);
    });

    this.canvas = options.canvas || document.createElement("canvas");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.enabled = true;
    this.hasTextureData = {};
    this.contextCreateOptions = {
      preserveDrawingBuffer: !!options.preserveDrawingBuffer,
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
      premultipliedAlpha: false
    };
    this.gl = this.canvas.getContext("webgl", this.contextCreateOptions) || this.canvas.getContext("experimental-webgl", this.contextCreateOptions);

    if (!this.gl) {
      throw new Error("Failed to get WebGL Context");
    }

    if (this.gl.isContextLost()) {
      throw new Error("WebGL Context is lost!");
    }

    this.SHADER = {
      FRAGMENT_YCRCB_TO_RGBA: ["precision mediump float;", "uniform sampler2D textureY;", "uniform sampler2D textureCb;", "uniform sampler2D textureCr;", "varying vec2 texCoord;", "mat4 rec601 = mat4(", "1.16438,  0.00000,  1.59603, -0.87079,", "1.16438, -0.39176, -0.81297,  0.52959,", "1.16438,  2.01723,  0.00000, -1.08139,", "0, 0, 0, 1", ");", "void main() {", "float y = texture2D(textureY, texCoord).r;", "float cb = texture2D(textureCb, texCoord).r;", "float cr = texture2D(textureCr, texCoord).r;", "gl_FragColor = vec4(y, cr, cb, 1.0) * rec601;", "}"].join("\n"),
      FRAGMENT_LOADING: ["precision mediump float;", "uniform float progress;", "varying vec2 texCoord;", "void main() {", "float c = ceil(progress-(1.0-texCoord.y));", "gl_FragColor = vec4(c,c,c,1);", "}"].join("\n"),
      VERTEX_IDENTITY: ["attribute vec2 vertex;", "varying vec2 texCoord;", "void main() {", "texCoord = vertex;", "gl_Position = vec4((vertex * 2.0 - 1.0) * vec2(1, -1), 0.0, 1.0);", "}"].join("\n")
    };
    let _gl = this.gl;
    let vertexAttr = null;

    _gl.pixelStorei(_gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false); // Init buffers


    this.vertexBuffer = _gl.createBuffer();
    let vertexCoords = new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]);

    _gl.bindBuffer(_gl.ARRAY_BUFFER, this.vertexBuffer);

    _gl.bufferData(_gl.ARRAY_BUFFER, vertexCoords, _gl.STATIC_DRAW); // Setup the main YCrCbToRGBA shader


    this.program = this.createProgram(this.SHADER.VERTEX_IDENTITY, this.SHADER.FRAGMENT_YCRCB_TO_RGBA);
    vertexAttr = _gl.getAttribLocation(this.program, "vertex");

    _gl.enableVertexAttribArray(vertexAttr);

    _gl.vertexAttribPointer(vertexAttr, 2, _gl.FLOAT, false, 0, 0);

    this.textureY = this.createTexture(0, "textureY");
    this.textureCb = this.createTexture(1, "textureCb");
    this.textureCr = this.createTexture(2, "textureCr"); // Setup the loading animation shader

    this.loadingProgram = this.createProgram(this.SHADER.VERTEX_IDENTITY, this.SHADER.FRAGMENT_LOADING);
    vertexAttr = _gl.getAttribLocation(this.loadingProgram, "vertex");

    _gl.enableVertexAttribArray(vertexAttr);

    _gl.vertexAttribPointer(vertexAttr, 2, _gl.FLOAT, false, 0, 0);

    this.shouldCreateUnclampedViews = !this.allowsClampedTextureData();
  }

}

_defineProperty(WebGLRenderer, "IsSupported", () => {
  try {
    if (!window.WebGLRenderingContext) {
      return false;
    }

    let canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch (err) {
    return false;
  }
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/websocket.js":
/*!******************************************!*\
  !*** ./src/libs/jsmpeg/src/websocket.js ***!
  \******************************************/
/*! exports provided: WSSource, SIOSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WSSource", function() { return WSSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIOSource", function() { return SIOSource; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class WSSource {
  constructor(url, options) {
    _defineProperty(this, "connect", destination => {
      this.destination = destination;
    });

    _defineProperty(this, "destroy", () => {
      clearTimeout(this.reconnectTimeoutId);
      this.shouldAttemptReconnect = false;

      if (this.socket) {
        this.socket.close();
      }
    });

    _defineProperty(this, "start", () => {
      this.shouldAttemptReconnect = !!this.reconnectInterval;
      this.progress = 0;
      this.established = false;

      if (this.options.protocols) {
        this.socket = new WebSocket(this.url, this.options.protocols);
      } else {
        this.socket = new WebSocket(this.url);
      }

      this.socket.binaryType = "arraybuffer";
      this.socket.onmessage = this.onMessage.bind(this);
      this.socket.onopen = this.onOpen.bind(this);
      this.socket.onerror = this.onClose.bind(this);
      this.socket.onclose = this.onClose.bind(this);
    });

    _defineProperty(this, "resume", secondsHeadroom => {// Nothing to do here
    });

    _defineProperty(this, "onOpen", () => {
      this.progress = 1;
    });

    _defineProperty(this, "onClose", () => {
      if (this.shouldAttemptReconnect) {
        clearTimeout(this.reconnectTimeoutId);
        this.reconnectTimeoutId = setTimeout(() => {
          this.start();
        }, this.reconnectInterval * 1000);
      }
    });

    _defineProperty(this, "onMessage", ev => {
      let isFirstChunk = !this.established;
      this.established = true;

      if (isFirstChunk && this.onEstablishedCallback) {
        this.onEstablishedCallback(this);
      }

      if (this.destination) {
        this.destination.write(ev.data);
      }
    });

    this.url = url;
    this.options = options;
    this.socket = null;
    this.streaming = true;
    this.callbacks = {
      connect: [],
      data: []
    };
    this.destination = null;
    this.reconnectInterval = options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
    this.shouldAttemptReconnect = !!this.reconnectInterval;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.reconnectTimeoutId = 0;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted; // Never used
  }

}
class SIOSource {
  constructor(url, options) {
    _defineProperty(this, "connect", destination => {
      this.destination = destination;
    });

    _defineProperty(this, "destroy", () => {
      clearTimeout(this.reconnectTimeoutId);
      this.shouldAttemptReconnect = false;

      if (this.socket) {
        this.socket.close();
      }
    });

    _defineProperty(this, "start", () => {
      this.shouldAttemptReconnect = !!this.reconnectInterval;
      this.progress = 0;
      this.established = false;

      if (!this.socket) {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default()(this.url, {
          path: this.path,
          transports: ["websocket"]
        });
        this.socket.on("connect", this.onOpen.bind(this));
        this.socket.on("disconnect", this.onClose.bind(this));
        this.socket.on("videoData", this.onMessage.bind(this));
      }
    });

    _defineProperty(this, "resume", secondsHeadroom => {// Nothing to do here
    });

    _defineProperty(this, "onOpen", () => {
      this.progress = 1;
    });

    _defineProperty(this, "onClose", () => {
      if (this.shouldAttemptReconnect) {
        clearTimeout(this.reconnectTimeoutId);
        this.reconnectTimeoutId = setTimeout(() => {
          this.start();
        }, this.reconnectInterval * 1000);
      }
    });

    _defineProperty(this, "onMessage", ev => {
      let isFirstChunk = !this.established;
      this.established = true;

      if (isFirstChunk && this.onEstablishedCallback) {
        this.onEstablishedCallback(this);
      }

      if (this.destination) {
        this.destination.write(ev);
      }
    });

    this.url = url;
    this.path = options.path;
    this.options = options;
    this.socket = null;
    this.streaming = true;
    this.callbacks = {
      connect: [],
      data: []
    };
    this.destination = null;
    this.reconnectInterval = options.reconnectInterval !== undefined ? options.reconnectInterval : 5;
    this.shouldAttemptReconnect = !!this.reconnectInterval;
    this.completed = false;
    this.established = false;
    this.progress = 0;
    this.reconnectTimeoutId = 0;
    this.onEstablishedCallback = options.onSourceEstablished;
    this.onCompletedCallback = options.onSourceCompleted; // Never used
  }

}

/***/ }),

/***/ "./src/libs/lagless/lagless2.js":
/*!**************************************!*\
  !*** ./src/libs/lagless/lagless2.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lagless2; });
/* harmony import */ var libs_jsmpeg_src_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! libs/jsmpeg/src/player.js */ "./src/libs/jsmpeg/src/player.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import socketio from "socket.io-client";
// window.io = socketio;
// import JSMpeg from "libs/jsmpeg/jsmpeg-old.min.js";
// window.JSMpeg = JSMpeg;

class Lagless2 {
  constructor(options) {
    _defineProperty(this, "pause", () => {
      try {
        this.player.pause();
      } catch (error) {}
    });

    _defineProperty(this, "play", () => {
      try {
        this.player.play();
      } catch (error) {}
    });

    _defineProperty(this, "destroy", () => {
      try {
        this.player.destroy();
      } catch (error) {}
    });

    _defineProperty(this, "onVideoDecode", () => {
      // copy from internal canvas to external canvas:
      // this.context.drawImage(this.player.renderer.canvas, 0, 0, this.player.renderer.canvas.width, this.player.renderer.canvas.height);
      // calulate fps:
      let now = performance.now();

      while (this.times.length > 0 && this.times[0] <= now - 1000) {
        this.times.shift();
      }

      this.times.push(now);

      if (this.fps != this.times.length) {
        this.fps = this.times.length; // this.context.font = "25px sans-serif";
        // this.context.lineWidth = 1;
        // this.context.clearRect(0, 0, 1000, 500);
        // this.context.fillStyle = "#FFF";
        // this.context.fillText(`FPS: ${this.fps}`, 5, 50);
        // // this.context.fillStyle = "#000";
        // // this.context.strokeText(`FPS: ${this.fps}`, 5, 50);
      }
    });

    _defineProperty(this, "resume", (videoCanvas, graphicsCanvas) => {
      this.videoCanvas = videoCanvas || this.videoCanvas;
      this.graphicsCanvas = graphicsCanvas || this.graphicsCanvas || null;
      let onVideoDecode = null;

      if (this.graphicsCanvas) {
        // if (!this.context) {
        this.context = this.graphicsCanvas.getContext("2d"); // }

        onVideoDecode = this.onVideoDecode;
      }

      this.player = new libs_jsmpeg_src_player_js__WEBPACK_IMPORTED_MODULE_0__["Player"](this.options.url, {
        canvas: this.videoCanvas,
        videoBufferSize: this.options.videoBufferSize,
        audioBufferSize: this.options.audioBufferSize,
        maxAudioLag: this.options.maxAudioLag || 0.4,
        // 0.25
        onVideoDecode: onVideoDecode,
        audio: !!this.options.audio,
        video: !!this.options.video,
        path: this.options.path
      });
    });

    this.videoCanvas = null;
    this.graphicsCanvas = null;
    this.context = null; // graphics context2d

    this.player = {};
    this.options = {
      videoBufferSize: 512 * 1024,
      // 256kb (256 * 1024)
      audioBufferSize: 128 * 1024,
      // 128kb (128 * 1024)
      ...options
    };
    this.times = [];
    this.fps = 0;
  }

}

/***/ }),

/***/ "./src/libs/lagless/lagless4.js":
/*!**************************************!*\
  !*** ./src/libs/lagless/lagless4.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lagless4; });
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-peer */ "./node_modules/simple-peer/index.js");
/* harmony import */ var simple_peer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_peer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Lagless4 {
  constructor(options) {
    _defineProperty(this, "run", () => {
      this.videoConnection = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(this.options.url, {
        path: this.options.path,
        transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"]
      });
      this.peer = new simple_peer__WEBPACK_IMPORTED_MODULE_0___default.a({
        initiator: false,
        trickle: true
      });
      this.peer.on("error", error => {
        console.log("error", error);
      });
      this.peer.on("signal", data => {
        console.log("SIGNAL", JSON.stringify(data));
        this.videoConnection.emit("clientPeerSignal", JSON.stringify(data));
      });
      this.peer.on("connect", () => {
        console.log("CONNECT");
        this.peer.send(Math.random());
      });
      this.peer.on("data", data => {
        console.log("data: " + data);
      });
      this.videoConnection.on("hostPeerSignal", data => {
        this.peer.signal(JSON.parse(data));
      });
      this.peer.on("stream", stream => {
        // if (canvas == null) {
        // 	return;
        // }
        // got remote video stream, then show it in a video tag
        try {
          this.canvas.src = window.URL.createObjectURL(stream); // deprecated

          this.canvas.play();
        } catch (error) {
          this.canvas.srcObject = stream;
          this.canvas.play();
        }
      });
    });

    _defineProperty(this, "destroy", () => {
      try {
        this.canvas.pause();
      } catch (error) {}
    });

    _defineProperty(this, "pause", () => {
      try {
        this.canvas.pause();
      } catch (error) {}
    });

    _defineProperty(this, "resume", canvas => {
      this.canvas = canvas;

      if (!this.connected) {
        this.connected = true;
        this.videoConnection.emit("requestVideo");
      } else {
        try {
          this.canvas.play();
        } catch (error) {}
      }
    });

    this.options = options;
    this.canvas = null;
    this.player = null;
    this.connected = false;
    this.videoConnection = null;
  }

}

/***/ }),

/***/ "./src/sagas/stream/chat.js":
/*!**********************************!*\
  !*** ./src/sagas/stream/chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");



const handleChatActions = params => {
  let list = [];
  list.push(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["SEND_MESSAGE"], action => {
    params.socket.emit("chatMessage", {
      text: action.payload.text
    });
  }));
  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (handleChatActions);

/***/ }),

/***/ "./src/sagas/stream/clientInfo.js":
/*!****************************************!*\
  !*** ./src/sagas/stream/clientInfo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");



const handleClientInfoActions = params => {
  let list = [];
  list.push(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATE"], action => {
    params.socket.emit("authenticate", {
      authToken: action.payload.authToken
    });
  }));
  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (handleClientInfoActions);

/***/ }),

/***/ "./src/sagas/stream/index.js":
/*!***********************************!*\
  !*** ./src/sagas/stream/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _chat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.js */ "./src/sagas/stream/chat.js");
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players.js */ "./src/sagas/stream/players.js");
/* harmony import */ var _clientInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientInfo.js */ "./src/sagas/stream/clientInfo.js");



 // combine sagas?:
// handles any outgoing actions w/ access to socket.io:

const handleActions = function* (params) {
  let list = [];
  list = list.concat(Object(_chat_js__WEBPACK_IMPORTED_MODULE_1__["default"])(params));
  list = list.concat(Object(_players_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params));
  list = list.concat(Object(_clientInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"])(params)); // yield to entire list:

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(list);
};

/* harmony default export */ __webpack_exports__["default"] = (handleActions);

/***/ }),

/***/ "./src/sagas/stream/players.js":
/*!*************************************!*\
  !*** ./src/sagas/stream/players.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");



const handlePlayersActions = function (params) {
  let list = [];
  list.push(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["LEAVE_PLAYER_CONTROL_QUEUE"], action => {
    params.socket.emit("leaveQueue", action.payload.controllerNumber);
  }));
  list.push(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["JOIN_PLAYER_CONTROL_QUEUE"], action => {
    const NUM_CONTROLLERS = 9;

    for (let i = 0; i < NUM_CONTROLLERS; i++) {
      if (i == action.payload.controllerNumber) {
        continue;
      }

      params.socket.emit("leaveQueue", action.payload.controllerNumber);
    }

    params.socket.emit("joinQueue", action.payload.controllerNumber);
  }));
  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (handlePlayersActions);

/***/ }),

/***/ "./src/shared/components/general/MyCheckbox.jsx":
/*!******************************************************!*\
  !*** ./src/shared/components/general/MyCheckbox.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/srv/www/remotegames.io/html/src/shared/components/general/MyCheckbox.jsx'");

/***/ }),

/***/ "./src/shared/components/general/MySlider.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/general/MySlider.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/srv/www/remotegames.io/html/src/shared/components/general/MySlider.jsx'");

/***/ }),

/***/ "./src/shared/components/general/ThemeSelector.jsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/general/ThemeSelector.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/srv/www/remotegames.io/html/src/shared/components/general/ThemeSelector.jsx'");

/***/ }),

/***/ "./src/shared/libs/inputHandler/InputHandler.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/inputHandler/InputHandler.js ***!
  \******************************************************/
/*! exports provided: InputState, default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/srv/www/remotegames.io/html/src/shared/libs/inputHandler/InputHandler.js'");

/***/ }),

/***/ "./src/shared/libs/utils.js":
/*!**********************************!*\
  !*** ./src/shared/libs/utils.js ***!
  \**********************************/
/*! exports provided: getCookie, setCookie, clamp, round, msToTime, toggleFullscreen, setToPercentParent, wait, mathZoom, normalizeVector, abs, deleteAllCookies, fixedLengthString, getStickString, getAverage, pick, device */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/srv/www/remotegames.io/html/src/shared/libs/utils.js'");

/***/ }),

/***/ "./src/sockets/stream/accountMap.js":
/*!******************************************!*\
  !*** ./src/sockets/stream/accountMap.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var src_actions_accountMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/actions/accountMap.js */ "./src/actions/accountMap.js");

 // listen to events w/ given socket and dispatch actions accordingly:

const accountMapEvents = (socket, dispatch) => {
  socket.on("accountMap", data => {
    dispatch(Object(src_actions_accountMap_js__WEBPACK_IMPORTED_MODULE_1__["receiveAccountMap"])(data));
  });
  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (accountMapEvents);

/***/ }),

/***/ "./src/sockets/stream/chat.js":
/*!************************************!*\
  !*** ./src/sockets/stream/chat.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var src_actions_chat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/actions/chat.js */ "./src/actions/chat.js");

 // listen to events w/ given socket and dispatch actions accordingly:

const chatSocketEvents = (socket, dispatch) => {
  socket.on("chatMessage", data => {
    dispatch(Object(src_actions_chat_js__WEBPACK_IMPORTED_MODULE_1__["receiveMessage"])(data));
  });
  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (chatSocketEvents);

/***/ }),

/***/ "./src/sockets/stream/client.js":
/*!**************************************!*\
  !*** ./src/sockets/stream/client.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var features_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! features/client.js */ "./src/features/client.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
 // libs:




function authenticate(socket, dispatch) {
  let authToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("RemoteGames");

  if (authToken) {
    socket.emit("authenticate", {
      authToken: authToken,
      usernameIndex: 0
    }, data => {
      if (data.success) {
        dispatch(Object(features_client_js__WEBPACK_IMPORTED_MODULE_0__["updateClient"])({ ...data.clientInfo,
          authToken: authToken,
          loggedIn: true,
          hostAuthed: true
        }));
      } else {
        console.log(`AUTHENTICATION_FAILURE: ${data.reason}`); // remove the authToken if it doesn't work:

        if (data.reason === "ACCOUNT_NOT_FOUND") {
          js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("RemoteGames");
          dispatch(updateClientInfo({
            authToken: null
          }));
        }
      }
    });
  }
} // listen to events w/ given socket and dispatch actions accordingly:


const clientEvents = (socket, dispatch) => {
  /* AUTHENTICATION */
  authenticate(socket, dispatch);
  socket.on("banned", data => {
    localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem("banned", "banned");
  });
  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (clientEvents);

/***/ }),

/***/ "./src/sockets/stream/index.js":
/*!*************************************!*\
  !*** ./src/sockets/stream/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.js */ "./src/sockets/stream/chat.js");
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players.js */ "./src/sockets/stream/players.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time.js */ "./src/sockets/stream/time.js");
/* harmony import */ var _accountMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountMap.js */ "./src/sockets/stream/accountMap.js");
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.js */ "./src/sockets/stream/client.js");
// combine socket event handlers into one socket:



 // import waitlistEvents from "./waitlist.js";



const handleEvents = (socket, dispatch) => {
  socket = Object(_chat_js__WEBPACK_IMPORTED_MODULE_0__["default"])(socket, dispatch);
  socket = Object(_players_js__WEBPACK_IMPORTED_MODULE_1__["default"])(socket, dispatch);
  socket = Object(_time_js__WEBPACK_IMPORTED_MODULE_2__["default"])(socket, dispatch);
  socket = Object(_accountMap_js__WEBPACK_IMPORTED_MODULE_3__["default"])(socket, dispatch); // socket = waitlistEvents(socket, dispatch);

  socket = Object(_client_js__WEBPACK_IMPORTED_MODULE_4__["default"])(socket, dispatch);
  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (handleEvents);

/***/ }),

/***/ "./src/sockets/stream/players.js":
/*!***************************************!*\
  !*** ./src/sockets/stream/players.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var src_actions_players_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/actions/players.js */ "./src/actions/players.js");

 // listen to events w/ given socket and dispatch actions accordingly:

const playersEvents = (socket, dispatch) => {
  socket.on("controlQueues", data => {
    dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_1__["updatePlayerControlQueues"])(data));
  });
  socket.on("turnStartTimes", data => {
    dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_1__["updatePlayerTurnStartTimes"])(data));
  });
  socket.on("turnLengths", data => {
    dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_1__["updatePlayerTurnLengths"])(data));
  });
  socket.on("controllerState", data => {
    dispatch(Object(src_actions_players_js__WEBPACK_IMPORTED_MODULE_1__["updatePlayerControllerState"])(data));
  });
  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (playersEvents);

/***/ }),

/***/ "./src/sockets/stream/time.js":
/*!************************************!*\
  !*** ./src/sockets/stream/time.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/time.js */ "./src/actions/time.js");
 // listen to events w/ given socket and dispatch actions accordingly:

const timeEvents = (socket, dispatch) => {
  socket.on("serverTime", data => {
    dispatch(Object(src_actions_time_js__WEBPACK_IMPORTED_MODULE_0__["updateServerTime"])(data));
  });
  /* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */
  // let time = Date.now();
  // setInterval(() => {
  // 	time = Date.now();
  // 	socket.emit("ping2");
  // }, 1000);
  // socket.on("pong2", () => {
  // 	let ping = Date.now() - time;
  // 	dispatch(updatePing(ping));
  // });
  // let pings = [];

  let ping = 0;
  let avgSize = 5;
  setInterval(() => {
    socket.emit("ping2", Date.now(), startTime => {
      let latency = Date.now() - startTime;
      ping = (ping * (avgSize - 1) + latency) / avgSize;
      dispatch(Object(src_actions_time_js__WEBPACK_IMPORTED_MODULE_0__["updatePing"])(Math.round(ping)));
    });
  }, 1000);
  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (timeEvents);

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map
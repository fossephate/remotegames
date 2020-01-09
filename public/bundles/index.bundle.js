/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "bundles/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/Index.jsx","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Index.jsx":
/*!***********************!*\
  !*** ./src/Index.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_General_Loading_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/General/Loading.jsx */ "./src/components/General/Loading.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var src_actions_settings_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");
/* harmony import */ var src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/actions/clientInfo.js */ "./src/actions/clientInfo.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var src_sagas_account___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/sagas/account/ */ "./src/sagas/account/index.js");
/* harmony import */ var src_sockets_account___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/sockets/account/ */ "./src/sockets/account/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_17__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react:

 // react-router:


 // modals:
// import LoginRegisterModal from "components/Modals/LoginRegisterModal.jsx";
// import AccountModal from "components/Modals/AccountModal.jsx";
// import InputMapperModal from "components/Modals/InputMapperModal.jsx";

const LoginRegisterModal = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(10), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! components/Modals/LoginRegisterModal.jsx */ "./src/components/Modals/LoginRegisterModal.jsx")));
const AccountModal = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, /*! components/Modals/AccountModal.jsx */ "./src/components/Modals/AccountModal.jsx"))); // const InputMapperModal = lazy(() => import("components/Modals/InputMapperModal.jsx"));
// material ui:



 // components:


const About = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, /*! src/About.jsx */ "./src/About.jsx")));
const FAQ = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, /*! src/FAQ.jsx */ "./src/FAQ.jsx")));
const ToS = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! src/ToS.jsx */ "./src/ToS.jsx")));
const Privacy = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! src/Privacy.jsx */ "./src/Privacy.jsx")));
const Streams = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! src/Streams.jsx */ "./src/Streams.jsx")));
const Stream = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(() => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(6), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! src/Stream.jsx */ "./src/Stream.jsx"))); // redux:



 // actions:


 // redux-saga:



 // libs:



const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_13__["default"])();
let preloadedState = {
  // account: {
  //
  // },
  stream: {
    info: {
      streamType: "mpeg2"
    },
    chat: {
      messages: [],
      userids: []
    },
    players: {
      controlQueues: [],
      turnTimers: [],
      controllerStates: [],
      count: 8
    },
    time: {
      server: 0,
      // server time (in ms)
      lastServerUpdate: 0,
      // when it was last updated (in ms)
      ping: 0
    },
    accountMap: {},
    waitlist: []
  },
  streams: {
    streamList: []
  },
  client: {
    authToken: null,
    loggedIn: false,
    hostAuthed: false,
    userid: null,
    username: "???",
    connectedAccounts: [],
    validUsernames: [],
    usernameIndex: 0,
    waitlisted: false,
    timePlayed: 0,
    emailVerified: false,
    roles: {}
  },
  settings: {
    keyboardControls: true,
    controllerControls: true,
    mouseControls: false,
    touchControls: false,
    mobileMode: false,
    realKeyboardMouse: false,
    controllerView: true,
    fullscreen: false,
    largescreen: false,
    hideChat: false,
    hideNav: false,
    audioThree: false,
    analogStickMode: false,
    dpadSwap: false,
    TDSConfig: false,
    currentPlayer: 0,
    volume: 0,
    theme: "dark"
  },
  form: {}
};

for (let i = 0; i < preloadedState.stream.players.count; i++) {
  preloadedState.stream.players.turnTimers.push({
    turnStartTime: 0,
    forfeitStartTime: 0,
    turnLength: 0,
    forfeitLength: 0
  });
  preloadedState.stream.players.controlQueues.push([]);
  preloadedState.stream.players.controllerStates.push({
    btns: 0,
    axes: [0, 0, 0, 0, 0, 0]
  });
}

function loadState() {
  // Get stored preferences
  localforage__WEBPACK_IMPORTED_MODULE_17___default.a.getItem("settings").then(value => {
    let settings = {}; // If they exist, write them

    if (value) {
      settings = Object.assign({}, JSON.parse(value));
      settings.currentPlayer = 0; // same as above

      settings.largescreen = false;
      settings.fullscreen = false;
      settings.mobileMode = false;
      settings.hideChat = false;
      settings.hideNav = false;
    }

    store.dispatch(Object(src_actions_settings_js__WEBPACK_IMPORTED_MODULE_11__["updateSettings"])({ ...settings
    })); // check if banned:

    localforage__WEBPACK_IMPORTED_MODULE_17___default.a.getItem("banned").then(value => {
      if (value) {
        store.dispatch(Object(src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_12__["updateClientInfo"])({
          isBanned: true
        }));
        window.banned = true;
      } else {
        window.banned = false;
      }
    });
  });
}

loadState();
const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_9__["configureStore"])({
  reducer: _reducers__WEBPACK_IMPORTED_MODULE_10__["default"],
  preloadedState: preloadedState,
  middleware: [sagaMiddleware]
});

window.onbeforeunload = () => {
  console.log("saving settings");
  localforage__WEBPACK_IMPORTED_MODULE_17___default.a.setItem("settings", JSON.stringify(store.getState().settings));
  return null;
};

let accountConnection = socket_io_client__WEBPACK_IMPORTED_MODULE_16___default()("https://remotegames.io", {
  path: "/8099/socket.io",
  transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"]
}); // listen to events and dispatch actions:

Object(src_sockets_account___WEBPACK_IMPORTED_MODULE_15__["default"])(accountConnection, store.dispatch); // handle outgoing events & listen to actions:
// and maybe dispatch more actions:

sagaMiddleware.run(src_sagas_account___WEBPACK_IMPORTED_MODULE_14__["default"], {
  socket: accountConnection,
  dispatch: store.dispatch
});

class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      theme: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])({})
    };
    this.switchTheme = this.switchTheme.bind(this);
    let currentValue = null;
    const unsubscribe = store.subscribe(() => {
      let previousValue = currentValue;
      currentValue = store.getState().settings.theme;

      if (previousValue !== currentValue) {
        console.log("theme changed");
        this.switchTheme(currentValue);
        this.setState({});
      }
    });
  }

  componentDidMount() {// store.dispatch(updateSettings({ theme: "spooky" }));
  }

  switchTheme(themeName) {
    let theme = {};

    switch (themeName) {
      case "light":
        theme = {
          palette: {
            type: "light",
            primary: {
              main: "#2181ff" // #2181ff

            },
            secondary: {
              main: "#ff3b3b"
            },
            background: {
              paper: "#fafafa"
            }
          }
        };
        break;

      case "dark":
        theme = {
          palette: {
            type: "dark",
            primary: {
              main: "#2181ff" // #2181ff

            },
            secondary: {
              main: "#ff3b3b"
            },
            background: {
              paper: "#424242"
            }
          }
        };
        break;

      case "spooky":
        theme = {
          palette: {
            type: "dark",
            primary: {
              main: "#ff7930"
            },
            secondary: {
              main: "#000" // main: "#a73ae7",

            },
            background: {
              paper: "#2f2f2f"
            }
          }
        };
        break;
    } // this.theme = createMuiTheme(this.theme);


    this.setState({
      theme: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createMuiTheme"])(theme)
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("re-rendering index");

    if (/^\/download/.test(window.location.pathname)) {
      window.location.href = "https://remotegames.io/8099/download/";
      window.history.replaceState("", "", "/");
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_8__["Provider"], {
      store: store
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
      theme: this.state.theme
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
      fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_General_Loading_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/about",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(About, props);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/FAQ",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FAQ, props);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/privacy",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Privacy, props);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/tos",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToS, props);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/(login|register)",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginRegisterModal, _extends({}, props, {
          history: this.props.history
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/account",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AccountModal, _extends({}, props, {
          history: this.props.history
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/(s|controls|settings)/:username?" // path="/s/:username?"
      ,
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Stream, _extends({}, props, {
          store: store,
          sagaMiddleware: sagaMiddleware,
          accountConnection: accountConnection
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Streams, _extends({}, props, {
          store: store,
          accountConnection: accountConnection,
          sagaMiddleware: sagaMiddleware
        }));
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Index, null), document.getElementById("root"));

/***/ }),

/***/ "./src/actions/ActionTypes.js":
/*!************************************!*\
  !*** ./src/actions/ActionTypes.js ***!
  \************************************/
/*! exports provided: RECEIVE_MESSAGE, SEND_MESSAGE, UPDATE_MESSAGES, UPDATE_CONTROL_QUEUES, UPDATE_VIEWERS, UPDATE_WAITLISTS, UPDATE_TURN_EXPIRATIONS, UPDATE_TURN_LENGTHS, UPDATE_VOLUME, AUTHENTICATE, UPDATE_CLIENT_INFO, CHANGE_USERNAME, RECEIVE_USERNAME_MAP, RECEIVE_ACCOUNT_MAP, UPDATE_CONTROLLER_STATE, UPDATE_SETTINGS, UPDATE_PLAYER_CONTROL_QUEUES, UPDATE_PLAYER_TURN_START_TIMES, UPDATE_PLAYER_TURN_LENGTHS, UPDATE_PLAYER_CONTROLLER_STATE, JOIN_PLAYER_CONTROL_QUEUE, LEAVE_PLAYER_CONTROL_QUEUE, UPDATE_SERVER_TIME, UPDATE_LAST_SERVER_UPDATE, UPDATE_PING, RECEIVE_STREAMS, LOGIN, REGISTER, UPDATE_STREAM_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_MESSAGE", function() { return RECEIVE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE", function() { return SEND_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_MESSAGES", function() { return UPDATE_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTROL_QUEUES", function() { return UPDATE_CONTROL_QUEUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_VIEWERS", function() { return UPDATE_VIEWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WAITLISTS", function() { return UPDATE_WAITLISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TURN_EXPIRATIONS", function() { return UPDATE_TURN_EXPIRATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TURN_LENGTHS", function() { return UPDATE_TURN_LENGTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_VOLUME", function() { return UPDATE_VOLUME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATE", function() { return AUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CLIENT_INFO", function() { return UPDATE_CLIENT_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_USERNAME", function() { return CHANGE_USERNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_USERNAME_MAP", function() { return RECEIVE_USERNAME_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_ACCOUNT_MAP", function() { return RECEIVE_ACCOUNT_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTROLLER_STATE", function() { return UPDATE_CONTROLLER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SETTINGS", function() { return UPDATE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PLAYER_CONTROL_QUEUES", function() { return UPDATE_PLAYER_CONTROL_QUEUES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PLAYER_TURN_START_TIMES", function() { return UPDATE_PLAYER_TURN_START_TIMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PLAYER_TURN_LENGTHS", function() { return UPDATE_PLAYER_TURN_LENGTHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PLAYER_CONTROLLER_STATE", function() { return UPDATE_PLAYER_CONTROLLER_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_PLAYER_CONTROL_QUEUE", function() { return JOIN_PLAYER_CONTROL_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEAVE_PLAYER_CONTROL_QUEUE", function() { return LEAVE_PLAYER_CONTROL_QUEUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SERVER_TIME", function() { return UPDATE_SERVER_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_LAST_SERVER_UPDATE", function() { return UPDATE_LAST_SERVER_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PING", function() { return UPDATE_PING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_STREAMS", function() { return RECEIVE_STREAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STREAM_INFO", function() { return UPDATE_STREAM_INFO; });
const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
const UPDATE_CONTROL_QUEUES = "UPDATE_CONTROL_QUEUES";
const UPDATE_VIEWERS = "UPDATE_VIEWERS";
const UPDATE_WAITLISTS = "UPDATE_WAITLISTS";
const UPDATE_TURN_EXPIRATIONS = "UPDATE_TURN_EXPIRATIONS";
const UPDATE_TURN_LENGTHS = "UPDATE_TURN_LENGTHS";
const UPDATE_VOLUME = "UPDATE_VOLUME"; // user info:

const AUTHENTICATE = "AUTHENTICATE";
const UPDATE_CLIENT_INFO = "UPDATE_CLIENT_INFO";
const CHANGE_USERNAME = "CHANGE_USERNAME";
const RECEIVE_USERNAME_MAP = "RECEIVE_USERNAME_MAP";
const RECEIVE_ACCOUNT_MAP = "RECEIVE_ACCOUNT_MAP";
const UPDATE_CONTROLLER_STATE = "UPDATE_CONTROLLER_STATE";
const UPDATE_SETTINGS = "UPDATE_SETTINGS"; // players:

const UPDATE_PLAYER_CONTROL_QUEUES = "UPDATE_PLAYER_CONTROL_QUEUES";
const UPDATE_PLAYER_TURN_START_TIMES = "UPDATE_PLAYER_TURN_START_TIMES";
const UPDATE_PLAYER_TURN_LENGTHS = "UPDATE_PLAYER_TURN_LENGTHS";
const UPDATE_PLAYER_CONTROLLER_STATE = "UPDATE_PLAYER_CONTROLLER_STATE";
const JOIN_PLAYER_CONTROL_QUEUE = "JOIN_PLAYER_CONTROL_QUEUE";
const LEAVE_PLAYER_CONTROL_QUEUE = "LEAVE_PLAYER_CONTROL_QUEUE"; // time:

const UPDATE_SERVER_TIME = "UPDATE_SERVER_TIME";
const UPDATE_LAST_SERVER_UPDATE = "UPDATE_LAST_SERVER_UPDATE";
const UPDATE_PING = "UPDATE_PING"; // streams:

const RECEIVE_STREAMS = "RECEIVE_STREAMS";
const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const UPDATE_STREAM_INFO = "UPDATE_STREAM_INFO";

/***/ }),

/***/ "./src/actions/clientInfo.js":
/*!***********************************!*\
  !*** ./src/actions/clientInfo.js ***!
  \***********************************/
/*! exports provided: updateClientInfo, changeUsername, authenticate, login, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClientInfo", function() { return updateClientInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUsername", function() { return changeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const updateClientInfo = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_CLIENT_INFO"],
    payload: {
      clientInfo: data
    }
  };
};
const changeUsername = index => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["CHANGE_USERNAME"],
    payload: {
      usernameIndex: index
    }
  };
};
const authenticate = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATE"],
    payload: {
      authToken: data
    }
  };
};
const login = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["LOGIN"],
    payload: { ...data
    }
  };
};
const register = data => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["REGISTER"],
    payload: { ...data
    }
  };
}; // export const createAccount = (data) => {
// 	return {
// 		type: types.CREATE_ACCOUNT,
// 		payload: {
// 			email: data.email,
// 			password: data.password,
//
// 		},
// 	};
// };

/***/ }),

/***/ "./src/actions/settings.js":
/*!*********************************!*\
  !*** ./src/actions/settings.js ***!
  \*********************************/
/*! exports provided: updateSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSettings", function() { return updateSettings; });
/* harmony import */ var _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js");

const updateSettings = settings => {
  return {
    type: _ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SETTINGS"],
    payload: {
      settings: settings
    }
  };
};

/***/ }),

/***/ "./src/components/General/Loading.jsx":
/*!********************************************!*\
  !*** ./src/components/General/Loading.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
// react:
 // material ui:

 // jss:

const styles = theme => ({
  root: {}
});

class Loading extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(Loading));

/***/ }),

/***/ "./src/features/client.js":
/*!********************************!*\
  !*** ./src/features/client.js ***!
  \********************************/
/*! exports provided: changeUsernameIndex, updateClient, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUsernameIndex", function() { return changeUsernameIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClient", function() { return updateClient; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const clientSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: "client",
  initialState: {},
  reducers: {
    changeUsernameIndex(state, action) {
      state.usernameIndex = action.payload.usernameIndex; // state = { ...state, action.payload.usernameIndex };

      return state;
    },

    updateClient(state, action) {
      return state = { ...state,
        ...action.payload
      };
    }

  }
});
const {
  changeUsernameIndex,
  updateClient
} = clientSlice.actions;
/* harmony default export */ __webpack_exports__["default"] = (clientSlice.reducer);

/***/ }),

/***/ "./src/reducers/clientInfo.js":
/*!************************************!*\
  !*** ./src/reducers/clientInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const clientInfo = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_USERNAME":
      return { ...state,
        usernameIndex: action.payload.usernameIndex
      };

    case "UPDATE_CLIENT_INFO":
      return { ...state,
        ...action.payload.clientInfo
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (clientInfo);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _stream_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream/index.js */ "./src/reducers/stream/index.js");
/* harmony import */ var _streams_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./streams/index.js */ "./src/reducers/streams/index.js");
/* harmony import */ var _clientInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientInfo.js */ "./src/reducers/clientInfo.js");
/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.js */ "./src/reducers/settings.js");
/* harmony import */ var src_features_client_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/features/client.js */ "./src/features/client.js");



 // import account from "./account/index.js";




const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  stream: _stream_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  streams: _streams_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  // account,
  // clientInfo,
  client: src_features_client_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  settings: _settings_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  form: redux_form__WEBPACK_IMPORTED_MODULE_1__["reducer"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/settings.js":
/*!**********************************!*\
  !*** ./src/reducers/settings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const settings = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      let newSettings = { ...action.payload.settings
      }; // remove null / undefined keys:
      // Object.keys(newSettings).forEach(key => !newSettings[key] && delete newSettings[key]);

      Object.keys(newSettings).forEach(key => newSettings[key] === undefined && delete newSettings[key]);
      return { ...state,
        ...newSettings
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (settings);

/***/ }),

/***/ "./src/reducers/stream/accountMap.js":
/*!*******************************************!*\
  !*** ./src/reducers/stream/accountMap.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const accountMap = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_ACCOUNT_MAP":
      return action.payload.map;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (accountMap);

/***/ }),

/***/ "./src/reducers/stream/chat.js":
/*!*************************************!*\
  !*** ./src/reducers/stream/chat.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const chat = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
    case "RECEIVE_MESSAGE":
      // todo: fix chat so this isn't needed:
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 1000); // add message to messages:

      let messages = state.messages.concat([{
        id: action.payload.id,
        userid: action.payload.userid,
        username: action.payload.username,
        text: action.payload.text,
        time: action.payload.time,
        isReplay: action.payload.isReplay,
        isBanned: action.payload.isBanned
      }]);
      let userids = state.userids.splice(0); // add the userid if not already in the state:

      if (userids.indexOf(action.payload.userid) == -1) {
        userids.push(action.payload.userid);
      }

      if (action.payload.pinged) {// new Noty({
        // 	theme: "mint",
        // 	type: "warning",
        // 	text: "You've been pinged!",
        // 	timeout: 5000,
        // 	sounds: {
        // 		volume: 0.5,
        // 		sources: ["https://twitchplaysnintendoswitch.com/sounds/ding.wav"],
        // 		conditions: ["docVisible"],
        // 	},
        // }).show();
      }

      return { ...state,
        userids: userids,
        messages: messages
      };

    case "UPDATE_MESSAGES":
      return { ...state,
        messages: action.payload.messages
      };

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (chat);

/***/ }),

/***/ "./src/reducers/stream/index.js":
/*!**************************************!*\
  !*** ./src/reducers/stream/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _chat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.js */ "./src/reducers/stream/chat.js");
/* harmony import */ var _players_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players.js */ "./src/reducers/stream/players.js");
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time.js */ "./src/reducers/stream/time.js");
/* harmony import */ var _accountMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accountMap.js */ "./src/reducers/stream/accountMap.js");
/* harmony import */ var _waitlist_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./waitlist.js */ "./src/reducers/stream/waitlist.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.js */ "./src/reducers/stream/info.js");







const streamReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  chat: _chat_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  players: _players_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  time: _time_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  accountMap: _accountMap_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  waitlist: _waitlist_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  info: _info_js__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (streamReducer);

/***/ }),

/***/ "./src/reducers/stream/info.js":
/*!*************************************!*\
  !*** ./src/reducers/stream/info.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const info = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_STREAM_INFO":
      return action.payload.data;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (info);

/***/ }),

/***/ "./src/reducers/stream/players.js":
/*!****************************************!*\
  !*** ./src/reducers/stream/players.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");


const players = (state = {}, action) => {
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case "UPDATE_PLAYER_TURN_START_TIMES":
        for (let i = 0; i < draft.turnTimers.length; i++) {
          if (action.payload.turnStartTimes != null) {
            draft.turnTimers[i].turnStartTime = action.payload.turnStartTimes[i];
          }

          if (action.payload.forfeitStartTimes != null) {
            draft.turnTimers[i].forfeitStartTime = action.payload.forfeitStartTimes[i];
          }
        }

        return;

      case "UPDATE_PLAYER_TURN_LENGTHS":
        for (let i = 0; i < draft.turnTimers.length; i++) {
          draft.turnTimers[i].turnLength = action.payload.turnLengths[i];
          draft.turnTimers[i].forfeitLength = action.payload.forfeitLengths[i];
        }

        return;

      case "UPDATE_PLAYER_CONTROL_QUEUES":
        draft.controlQueues = action.payload.queues;
        return;

      case "UPDATE_PLAYER_CONTROLLER_STATE":
        draft.controllerStates[action.payload.cNum].btns = action.payload.btns;
        draft.controllerStates[action.payload.cNum].axes = action.payload.axes;
        return;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (players);

/***/ }),

/***/ "./src/reducers/stream/time.js":
/*!*************************************!*\
  !*** ./src/reducers/stream/time.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const time = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SERVER_TIME":
      return Object.assign({ ...state
      }, {
        server: action.payload.time,
        lastServerUpdate: Date.now()
      });

    case "UPDATE_PING":
      return Object.assign({ ...state
      }, {
        ping: action.payload.time
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (time);

/***/ }),

/***/ "./src/reducers/stream/waitlist.js":
/*!*****************************************!*\
  !*** ./src/reducers/stream/waitlist.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const waitlist = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_WAITLIST":
      return action.payload.waitlist;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (waitlist);

/***/ }),

/***/ "./src/reducers/streams/index.js":
/*!***************************************!*\
  !*** ./src/reducers/streams/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _streamList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./streamList.js */ "./src/reducers/streams/streamList.js");


const streamsReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  streamList: _streamList_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (streamsReducer);

/***/ }),

/***/ "./src/reducers/streams/streamList.js":
/*!********************************************!*\
  !*** ./src/reducers/streams/streamList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const streamList = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_STREAMS":
      return data.payload.streams;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (streamList);

/***/ }),

/***/ "./src/sagas/account/clientInfo.js":
/*!*****************************************!*\
  !*** ./src/sagas/account/clientInfo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");



const handleClientInfoActions = params => {
  let list = [];
  list.push(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["LOGIN"], action => {
    params.socket.emit("login", { ...action.payload,
      socketid: params.socket.id
    }, data => {
      if (action.payload.cb) {
        action.payload.cb(data);
      }
    });
  }));
  list.push(Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeEvery"])(src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__["REGISTER"], action => {
    params.socket.emit("register", { ...action.payload
    }, data => {
      if (action.payload.cb) {
        action.payload.cb(data);
      }
    });
  })); // list.push(
  // 	takeEvery(types.AUTHENTICATE, (action) => {
  // 		params.socket.emit("authenticate", { authToken: action.payload.authToken });
  // 	}),
  // );

  return list;
};

/* harmony default export */ __webpack_exports__["default"] = (handleClientInfoActions);

/***/ }),

/***/ "./src/sagas/account/index.js":
/*!************************************!*\
  !*** ./src/sagas/account/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_actions_ActionTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/actions/ActionTypes.js */ "./src/actions/ActionTypes.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _clientInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clientInfo.js */ "./src/sagas/account/clientInfo.js");


 // combine sagas?:
// handles any outgoing actions w/ access to socket.io:

const handleActions = function* (params) {
  let list = [];
  list = list.concat(Object(_clientInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"])(params)); // yield to entire list:

  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])(list);
};

/* harmony default export */ __webpack_exports__["default"] = (handleActions);

/***/ }),

/***/ "./src/sockets/account/client.js":
/*!***************************************!*\
  !*** ./src/sockets/account/client.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_features_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/features/client.js */ "./src/features/client.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
 // libs:




function getAccountInfo(socket, dispatch) {
  let authToken = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get("RemoteGames");

  if (authToken) {
    socket.emit("getAccountInfo", {
      authToken: authToken,
      usernameIndex: 0
    }, data => {
      console.log(data);

      if (data.success) {
        dispatch(Object(src_features_client_js__WEBPACK_IMPORTED_MODULE_0__["updateClient"])({ ...data.clientInfo,
          authToken: authToken,
          loggedIn: true
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
  /* getAccountInfo */
  getAccountInfo(socket, dispatch);
  socket.on("banned", data => {
    localforage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem("banned", "banned");
  }); // // reconnect:
  // socket.on("disconnect", (data) => {
  // 	console.log("lost connection, attempting reconnect1.");
  // 	socket.connect();
  // 	// re-authenticate if the connection was successful
  // 	setTimeout(() => {
  // 		if (socket.connected) {
  // 			authenticate(socket, dispatch);
  // 		}
  // 	}, 1000);
  // });
  //
  // // todo: make this not necessary
  // setInterval(() => {
  // 	if (socket.connected) {
  // 		authenticate(socket, dispatch);
  // 	}
  // }, 120000); // 2 minutes

  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (clientEvents);

/***/ }),

/***/ "./src/sockets/account/index.js":
/*!**************************************!*\
  !*** ./src/sockets/account/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.js */ "./src/sockets/account/client.js");
// combine socket event handlers into one socket:
 // import accountMapEvents from "./accountMap.js";
// import settingsEvents from "./settings.js";

const handleEvents = (socket, dispatch) => {
  socket = Object(_client_js__WEBPACK_IMPORTED_MODULE_0__["default"])(socket, dispatch); // socket = accountMapEvents(socket, dispatch);

  return socket;
};

/* harmony default export */ __webpack_exports__["default"] = (handleEvents);

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=index.bundle.js.map
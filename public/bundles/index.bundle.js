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

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Card = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js"));

var _CardActionArea = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js"));

var _CardActions = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js"));

var _CardContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js"));

var _CardMedia = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
let classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"); // jss:


const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "3%",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.default
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "85%",
    height: "100%",
    padding: "3%"
  },
  image: {
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto"
  },
  back: {
    marginBottom: "10px",
    width: "30%",
    marginLeft: "auto" // marginRight: "auto",

  },
  card: {
    width: 345
  },
  media: {
    height: 300
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px",
    flexWrap: "wrap",
    marginBottom: "10px"
  },
  donationButtons: {
    display: "flex",
    flexWrap: "wrap"
  },
  twitch: {
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class About extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      elevation: 0,
      className: classes.root
    }, _react.default.createElement(_Paper.default, {
      elevation: 3,
      className: classes.main
    }, _react.default.createElement(_Button.default, {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), _react.default.createElement("h2", null, "About the project"), _react.default.createElement("p", null, "This website is developed and maintained by", " ", _react.default.createElement("a", {
      href: "https://github.com/mfosse"
    }, "Matthew Fosse"), "."), _react.default.createElement("p", null, "The whole idea behind the project is that you can use a keyboard or controller to try out games on these consoles from anywhere with just a web browser."), _react.default.createElement("div", {
      className: classes.imagesContainer
    }, _react.default.createElement(_Card.default, {
      className: classes.card,
      elevation: 5
    }, _react.default.createElement(_CardActionArea.default, null, _react.default.createElement(_CardMedia.default, {
      className: classes.media,
      image: "/images/about/about5.jpg",
      title: "Photo 1"
    }), _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, {
      component: "p"
    }, "The consoles are hosted in Central Florida, and the server is currently located in Virginia.")))), _react.default.createElement(_Card.default, {
      className: classes.card,
      elevation: 5
    }, _react.default.createElement(_CardActionArea.default, null, _react.default.createElement(_CardMedia.default, {
      className: classes.media,
      image: "/images/about/about2.jpg",
      title: "Photo 2"
    }), _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, {
      component: "p"
    }, "The whole setup"))))), _react.default.createElement("p", null, "The games, consoles, and server costs to run this project are primarily funded through", " ", _react.default.createElement("a", {
      href: "https://twitch.tv/remotegames/subscribe/"
    }, "Twitch subscriptions"), " ", "and donations. If you like the project consider supporting it with the links below."), _react.default.createElement("div", {
      className: classes.donationButtons
    }, _react.default.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Donate with Twitch",
      src: "/images/about/twdonatebutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://streamlabs.com/remotegames/";
      }
    }), _react.default.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Join the Discord Server",
      src: "/images/about/discordbutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://discord.io/tpns/";
      }
    }), _react.default.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Donate with Paypal",
      src: "/images/about/ppdonatebutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://paypal.me/fossephate/";
      }
    })), _react.default.createElement("iframe", {
      className: classes.twitch,
      src: "https://player.twitch.tv/?channel=remotegames&muted=false&autoplay=true",
      height: "360",
      width: "640",
      frameBorder: "0",
      scrolling: "no",
      allowFullScreen: true
    })));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(updateSettings(settings));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(About);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/FAQ.jsx":
/*!*********************!*\
  !*** ./src/FAQ.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/List */ "./node_modules/@material-ui/core/esm/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "3%",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.default
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "98%",
    height: "100%",
    padding: "2%"
  },
  image: {
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto"
  },
  back: {
    marginBottom: "10px",
    width: "30%",
    marginLeft: "auto" // marginRight: "auto",

  },
  card: {
    width: 345
  },
  media: {
    height: 300
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px",
    flexWrap: "wrap",
    marginBottom: "10px"
  },
  donationButtons: {
    display: "flex",
    flexWrap: "wrap"
  },
  twitch: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "10px"
  },
  QA: {
    width: "99%",
    padding: "2%",
    marginBottom: "40px"
  },
  commands: {
    width: "99%",
    padding: "2%"
  },
  subCommands: {
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px"
  },
  [_utils.device.laptop]: {
    container: {
      flexDirection: "row"
    },
    QA: {
      width: "49%",
      marginBottom: "0"
    },
    commands: {
      width: "49%"
    }
  }
});

class FAQ extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      elevation: 0,
      className: classes.root
    }, _react.default.createElement(_Paper.default, {
      elevation: 3,
      className: classes.main
    }, _react.default.createElement(_Button.default, {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), _react.default.createElement("h2", null, "Frequently Asked Questions and Commands"), _react.default.createElement(_Paper.default, {
      elevation: 0,
      className: classes.container
    }, _react.default.createElement(_Paper.default, {
      elevation: 3,
      className: classes.QA
    }, _react.default.createElement("h2", null, "FAQ"), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: How does this work?"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: If you're looking for looking for the source code, use the \"!source\" command, if you just want the TLDR: I use a capture card to get the Nintendo Switch's screen, I use a micro controller (Arduino) that acts like a Pro Controller, and use a Python script to send it input. If you have any other questions, just ask @fosse on the discord server.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: Why can't I use the Plus/Home/Capture button?"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: It's reserved for special roles, it's setup like this to prevent abuse.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: What's the friend code for the Twitch account?"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: SW-4621-9617-9306.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: How do I change the game?"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: Use \"!goto [game]\" to switch between games, for a list of games, use \"!games\".")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: Something is wrong / broken, what do I do?"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: If someone isn't there to help on stream, contact a mod or @fosse on the discord server.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: I want a longer turn! xxx is too short."))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: If you subscribe on twitch and use it to login, your turn length is doubled.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "Q: Do the same commands used on the stream/site work on this server as well?"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0A: No, they don't, they're only meant for the stream/site.")))), _react.default.createElement(_Paper.default, {
      elevation: 3,
      className: classes.commands
    }, _react.default.createElement("h2", null, "Stream Commands"), _react.default.createElement(_Paper.default, {
      elevation: 2,
      className: classes.subCommands
    }, _react.default.createElement("h4", null, "Commands for Everyone"), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!commands"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Gives you a list of commands.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!goto [game]"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0use without brackets to switch games, use !games for a list of games.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!games or !gamelist or !goto or !xboxgames or !xboxgamelist"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Shows the list of games currently available (switch or xbox).")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!playing"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Shows who is currently playing.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!source"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Links you to the source code for the project.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!site"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Links you to https://remotegames.io.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!discord"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Links you to the discord invite.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!fc"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Gives you the friend code to the Twitch account.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!restart1 or !restart2 or !restart3"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0refreshes the corresponding stream.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "![mod | plus | sub | ban]list"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0(no brackets) lists people in the corresponding group.")))), _react.default.createElement(_Paper.default, {
      elevation: 2,
      className: classes.subCommands
    }, _react.default.createElement("h4", null, "Commands for Plus level users"), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "Plus level users can use the Plus / Start button in games.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!lock"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Is there a disaster? Maybe someone is being bad and is about to nuke the Switch? Type !lock to lock the controls until a mod can fix it.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!fixcontrollers"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0If the controller order gets messed up, use this command to fix it.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!rr [user - optional]"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Try it and see what happens!")))), _react.default.createElement(_Paper.default, {
      elevation: 2,
      className: classes.subCommands
    }, _react.default.createElement("h4", null, "Commands for Mods"), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "Mods can do basically everything, including Home / Capture")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!restartscript"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Restarts the python script.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!restartserver"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Restarts the server, you shouldn't have to use this.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "![give | remove]plus [user]"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Gives or removes plus permission from [user].")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "![temp | perma]ban [user]"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Temporarily or permanently bans [user].")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "![disable | enable]chat"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Disables or enables Chat commands.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "![disable | enable]goto"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Disables or enables !goto.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "![setturnlength | setforfeitlength] [time in seconds]"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Change the amount of time for turns and forfeits.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!lock or !unlock"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0Lock or unlock the Switch if it is locked.")), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("b", null, "!forcegoto or !xboxforcegoto"))), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, "\xA0\xA0\xA0\xA0!goto but without the democracy.")))))), _react.default.createElement("p", null, "The games, consoles, and server costs to run this project are primarily funded through", " ", _react.default.createElement("a", {
      href: "https://twitch.tv/remotegames/subscribe/"
    }, "Twitch subscriptions"), " ", "and donations. If you like the project consider supporting it with the links below."), _react.default.createElement("div", {
      className: classes.donationButtons
    }, _react.default.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Donate with Twitch",
      src: "/images/about/twdonatebutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://streamlabs.com/remotegames/";
      }
    }), _react.default.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Join the Discord Server",
      src: "/images/about/discordbutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://discord.io/tpns/";
      }
    }), _react.default.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Donate with Paypal",
      src: "/images/about/ppdonatebutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://paypal.me/fossephate/";
      }
    })), _react.default.createElement("iframe", {
      className: classes.twitch,
      src: "https://player.twitch.tv/?channel=remotegames&muted=false&autoplay=true",
      height: "360",
      width: "640",
      frameBorder: "0",
      scrolling: "no",
      allowFullScreen: true
    })));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(updateSettings(settings));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(FAQ);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/Index.jsx":
/*!***********************!*\
  !*** ./src/Index.jsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _CssBaseline = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js"));

var _styles = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");

var _styles2 = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Loading = _interopRequireDefault(__webpack_require__(/*! shared/components/general/Loading.jsx */ "./src/shared/components/general/Loading.jsx"));

var _MyAlert = _interopRequireDefault(__webpack_require__(/*! shared/components/general/MyAlert.jsx */ "./src/shared/components/general/MyAlert.jsx"));

var _notistack = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var _reducers = _interopRequireDefault(__webpack_require__(/*! ./reducers */ "./src/reducers/index.js"));

var _settings = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");

var _client = _interopRequireDefault(__webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js"));

var _reduxSaga = _interopRequireDefault(__webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"));

var _index = _interopRequireDefault(__webpack_require__(/*! src/sagas/account/index.js */ "./src/sagas/account/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! src/sockets/account/index.js */ "./src/sockets/account/index.js"));

var _socket = _interopRequireDefault(__webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"));

var _localforage = _interopRequireDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// modals:
// import LoginRegisterModal from "components/modals/LoginRegisterModal.jsx";
// import AccountModal from "components/modals/AccountModal.jsx";
// import InputMapperModal from "components/modals/InputMapperModal.jsx";
const LoginRegisterModal = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! shared/components/modals/LoginRegisterModal.jsx */ "./src/shared/components/modals/LoginRegisterModal.jsx"))));
const AccountModal = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! shared/components/modals/AccountModal.jsx */ "./src/shared/components/modals/AccountModal.jsx"))));
const CreateVMModal = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/components/modals/CreateVMModal.jsx */ "./src/components/modals/CreateVMModal.jsx")))); // const InputMapperModal = lazy(() => import("components/modals/InputMapperModal.jsx"));
// material ui:

const About = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/About.jsx */ "./src/About.jsx"))));
const FAQ = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/FAQ.jsx */ "./src/FAQ.jsx"))));
const ToS = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/ToS.jsx */ "./src/ToS.jsx"))));
const Privacy = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/Privacy.jsx */ "./src/Privacy.jsx"))));
const Streams = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/Streams.jsx */ "./src/Streams.jsx"))));
const Stream = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/Stream.jsx */ "./src/Stream.jsx")))); // notistack:

class Index extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadState", () => {
      // Get stored preferences
      _localforage.default.getItem("settings").then(value => {
        let settings = {}; // if they exist, write them

        if (value) {
          settings = Object.assign({}, JSON.parse(value));
          settings.currentPlayer = 0; // same as above

          settings.largescreen = false;
          settings.fullscreen = false;
          settings.mobileMode = false;
          settings.hideChat = false;
          settings.hideNav = false;
        }

        store.dispatch((0, _settings.updateSettings)({ ...settings
        })); // check if banned:

        _localforage.default.getItem("banned").then(value => {
          if (value) {
            this.store.dispatch((0, _client.default)({
              isBanned: true
            }));
            window.banned = true;
          } else {
            window.banned = false;
          }
        });
      });
    });

    _defineProperty(this, "getTheme", themeName => {
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

        case "ogdark":
          theme = {
            palette: {
              type: "dark",
              primary: {
                main: "#2181ff"
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

        case "dark":
          theme = {
            palette: {
              type: "dark",
              primary: {
                main: "#0d52a9"
              },
              secondary: {
                // main: "#a90d0d",
                main: "#404040"
              },
              background: {
                paper: "#202020"
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
      }

      return (0, _styles2.createMuiTheme)(theme);
    });

    this.state = {
      theme: this.getTheme("dark")
    };
    let preloadedState = {
      stream: {
        info: {
          online: false,
          exists: false,
          // videoType: "mpeg1",
          // controllerCount: 1,
          streamSettings: {
            videoType: "mpeg1",
            controllerCount: 1,
            playerCount: 4
          }
        },
        chat: {
          messages: [],
          userids: []
        },
        players: {
          controlQueues: [],
          turnTimers: [],
          controllerStates: []
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
      settings: {
        keyboardControls: true,
        controllerControls: true,
        mouseControls: false,
        touchControls: false,
        mobileMode: false,
        realKeyboardMouse: true,
        controllerView: false,
        fullscreen: false,
        largescreen: true,
        hideChat: false,
        hideNav: false,
        audioThree: false,
        analogStickMode: false,
        dpadSwap: false,
        TDSConfig: false,
        currentPlayer: 0,
        volume: 50,
        theme: "dark"
      },
      form: {}
    };

    for (let i = 0; i <
    /*preloadedState.stream.info.streamSettings.controllerCount*/
    20; i++) {
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

    this.sagaMiddleware = (0, _reduxSaga.default)();
    this.store = (0, _toolkit.configureStore)({
      reducer: _reducers.default,
      preloadedState: preloadedState,
      middleware: [this.sagaMiddleware]
    });
    this.accountConnection = (0, _socket.default)("https://remotegames.io", {
      path: "/8099/socket.io",
      transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"]
    });
    window.accountConnection = this.accountConnection; // listen to events and dispatch actions:

    (0, _index2.default)(this.accountConnection, this.store.dispatch); // handle outgoing events & listen to actions:
    // and maybe dispatch more actions:

    this.sagaMiddleware.run(_index.default, {
      socket: this.accountConnection,
      dispatch: this.store.dispatch
    });
    let currentValue = null;
    this.store.subscribe(() => {
      let previousValue = currentValue;
      currentValue = this.store.getState().settings.theme;

      if (previousValue !== currentValue && previousValue !== null) {
        this.setState({
          theme: this.getTheme(currentValue)
        });
      }
    });

    window.onbeforeunload = () => {
      console.log("saving settings");

      _localforage.default.setItem("settings", JSON.stringify(this.store.getState().settings));

      return null;
    };
  }

  componentDidMount() {// store.dispatch(updateSettings({ theme: "spooky" }));
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

    return _react.default.createElement(_reactRedux.Provider, {
      store: this.store
    }, _react.default.createElement(_styles.ThemeProvider, {
      theme: this.state.theme
    }, _react.default.createElement(_notistack.SnackbarProvider, {
      maxSnack: 3
    }, _react.default.createElement(_CssBaseline.default, null), _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement(_react.Suspense, {
      fallback: _react.default.createElement(_Loading.default, null)
    }, _react.default.createElement(_reactRouter.Switch, null, _react.default.createElement(_reactRouter.Route, {
      path: "/about",
      render: props => {
        return _react.default.createElement(About, props);
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/FAQ",
      render: props => {
        return _react.default.createElement(FAQ, props);
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/privacy",
      render: props => {
        return _react.default.createElement(Privacy, props);
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/tos",
      render: props => {
        return _react.default.createElement(ToS, props);
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/(login|register)",
      render: props => {
        return _react.default.createElement(LoginRegisterModal, _extends({}, props, {
          history: this.props.history
        }));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/create",
      render: props => {
        return _react.default.createElement(CreateVMModal, _extends({}, props, {
          accountConnection: this.accountConnection,
          history: this.props.history
        }));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/account",
      render: props => {
        return _react.default.createElement(AccountModal, _extends({}, props, {
          history: this.props.history
        }));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/(s|controls|settings)/:username?" // path="/s/:username?"
      ,
      render: props => {
        return _react.default.createElement(Stream, _extends({}, props, {
          store: this.store,
          sagaMiddleware: this.sagaMiddleware,
          accountConnection: this.accountConnection
        }));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/",
      render: props => {
        return _react.default.createElement(Streams, _extends({}, props, {
          store: this.store,
          accountConnection: this.accountConnection,
          sagaMiddleware: this.sagaMiddleware
        }));
      }
    })), _react.default.createElement(_MyAlert.default, null))))));
  }

}

var _default = Index;
exports.default = _default;

_reactDom.default.render(_react.default.createElement(Index, null), document.getElementById("root"));

module.exports = exports.default;

/***/ }),

/***/ "./src/Privacy.jsx":
/*!*************************!*\
  !*** ./src/Privacy.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "3%",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.default
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "98%",
    height: "100%",
    padding: "2%"
  },
  image: {
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto"
  },
  back: {
    marginBottom: "10px",
    width: "30%",
    marginLeft: "auto" // marginRight: "auto",

  },
  iframe: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "6090px",
    backgroundColor: "#FFF",
    borderRadius: "5px"
  },
  [_utils.device.laptop]: {}
});

class Privacy extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      elevation: 0,
      className: classes.root
    }, _react.default.createElement(_Paper.default, {
      elevation: 3,
      className: classes.main
    }, _react.default.createElement(_Button.default, {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), _react.default.createElement("iframe", {
      className: classes.iframe,
      src: "https://remotegames.io/privacy.html",
      frameBorder: "0"
    })));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(updateSettings(settings));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Privacy);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/Stream.jsx":
/*!************************!*\
  !*** ./src/Stream.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _client = __webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js");

var _chat = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");

var _players = __webpack_require__(/*! src/features/players.js */ "./src/features/players.js");

var _info = __webpack_require__(/*! src/actions/info.js */ "./src/actions/info.js");

var _settings = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");

var _index = _interopRequireDefault(__webpack_require__(/*! src/sagas/stream/index.js */ "./src/sagas/stream/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! src/sockets/stream/index.js */ "./src/sockets/stream/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _SettingsModal = _interopRequireDefault(__webpack_require__(/*! src/components/modals/SettingsModal.jsx */ "./src/components/modals/SettingsModal.jsx"));

var _notistack = __webpack_require__(/*! notistack */ "./node_modules/notistack/build/index.js");

var _Loading = _interopRequireDefault(__webpack_require__(/*! shared/components/general/Loading.jsx */ "./src/shared/components/general/Loading.jsx"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _InputHandler = _interopRequireDefault(__webpack_require__(/*! shared/libs/inputHandler/InputHandler.js */ "./src/shared/libs/inputHandler/InputHandler.js"));

var _localforage = _interopRequireDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));

var _socket = _interopRequireDefault(__webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"));

var _lagless = _interopRequireDefault(__webpack_require__(/*! libs/lagless/lagless2.js */ "./src/libs/lagless/lagless2.js"));

var _lagless2 = _interopRequireDefault(__webpack_require__(/*! libs/lagless/lagless4.js */ "./src/libs/lagless/lagless4.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StreamsAppBar = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/components/streams/StreamsAppBar.jsx */ "./src/components/streams/StreamsAppBar.jsx"))));
const Picture = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/components/stream/Picture.jsx */ "./src/components/stream/Picture.jsx"))));
const Chat = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! shared/components/chat/Chat.jsx */ "./src/shared/components/chat/Chat.jsx"))));
const StreamInfo = (0, _react.lazy)(() => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! src/components/stream/streamInfo/StreamInfo.jsx */ "./src/components/stream/streamInfo/StreamInfo.jsx")))); // components:
// secondary components:
// recompose:

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
  [_utils.device.tablet]: {
    root: {
      gridTemplateColumns: "minmax(50%, 75%) minmax(300px, 25%)",
      gridTemplateAreas: `
				"nav login"
				"picture chat"
				"info info"`
    }
  },
  [_utils.device.laptop]: {
    root: {}
  }
};

class Stream extends _react.Component {
  constructor(_props) {
    super(_props);

    _defineProperty(this, "recieveStream", (data, tryCount) => {
      this.props.updateStreamInfo({ ...data,
        online: true
      });

      if (this.stream) {
        this.stream.destroy();
      }

      if (this.hostConnection) {
        this.hostConnection.removeAllListeners();
        this.hostConnection.destroy();
      } // if (this.props.controllerCount === 0 && this.props.settings.controllerView) {
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
          realKeyboardMouse: true
        });
      } else if (!this.props.mouseEnabled && !this.props.settings.controllerView) {
        this.props.updateSettings({
          controllerView: true,
          largescreen: false,
          realKeyboardMouse: false
        });
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


      this.hostConnection = (0, _socket.default)(`https://${data.hostServerIP}`, {
        path: `/${data.hostServerPort}/socket.io`,
        transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"]
      });
      window.hostConnection = this.hostConnection; // listen to events and dispatch actions:

      (0, _index2.default)(this.hostConnection, this.props.store.dispatch); // handle outgoing events & listen to actions:
      // and maybe dispatch more actions:

      this.props.sagaMiddleware.run(_index.default, {
        socket: this.hostConnection,
        dispatch: this.props.store.dispatch
      });
      window.sagaMiddleware = this.props.sagaMiddleware;

      if (!data.videoServerIP) {
        console.log("something went wrong, (video server IP missing)");
        return;
      } // lagless setup:


      if (this.props.videoType === "mpeg1") {
        this.stream = new _lagless.default({
          url: `https://${data.videoServerIP}`,
          path: `/${data.videoServerPort}/socket.io`,
          audio: true,
          video: true,
          maxAudioLag: 0.5 // videoBufferSize: data.streamSettings.videoBufferSize * 1024,
          // audioBufferSize: data.streamSettings.audioBufferSize * 1024,

        });
      } else if (this.props.videoType === "webRTC") {
        this.stream = new _lagless2.default({
          url: `https://${data.videoServerIP}`,
          path: `/${data.videoServerPort}/socket.io`
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
    });

    _defineProperty(this, "updateStreamCanvas", () => {
      if (this.props.videoType === "mpeg1") {
        this.stream.destroy(); // this.stream.player.stop();
        // this.stream.pause();
        // this.stream.restart(
        // 	document.getElementById("videoCanvas"),
        // 	document.getElementById("graphicsCanvas"),
        // );

        this.stream.resume(document.getElementById("videoCanvas"), document.getElementById("graphicsCanvas"));
      } else if (this.props.videoType === "webRTC") {
        this.stream.destroy();
        this.stream.resume(document.getElementById("videoCanvas"));
      }
    });

    _defineProperty(this, "getStreamInfo", bypass => {
      if (!this.props.accountConnection.connected && !bypass) {
        this.props.updateStreamInfo({
          online: false
        });
        return;
      }

      this.props.accountConnection.emit("getStreamInfo", {
        username: this.props.match.params.username
      }, data => {
        if (data.success) {
          this.recieveStream(data, 0);
        } else {
          // todo: 404 page
          if (data.reason === "ACCOUNT_NOT_FOUND") {// todo:
          }

          this.props.updateStreamInfo({
            online: false,
            exists: data.reason !== "ACCOUNT_NOT_FOUND"
          });
        }
      });
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
          // largescreen: false,
          // controllerView: true,
          hideChat: false,
          hideNav: false,
          mobileMode: false,
          touchControls: false
        }); // if (this.props.controllerCount === 0 && this.props.settings.controllerView) {
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
            largescreen: true
          });
        } else if (!this.props.settings.realKeyboardMouse && !this.props.settings.controllerView) {
          this.props.updateSettings({
            controllerView: true,
            largescreen: false
          });
        } // turn off mouse controls:


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
        this.props.joinLeavePlayerControlQueue({
          cNum: this.props.settings.currentPlayer,
          joinLeave: "join"
        });
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
      obj.keys = obj.keyboard.keys; // console.log(obj.keys);
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
        console.log(obj.cNum, buttons, (0, _utils.getStickString)(obj.axes[0]), (0, _utils.getStickString)(obj.axes[1]), (0, _utils.getStickString)(obj.axes[2]), (0, _utils.getStickString)(obj.axes[3]), (0, _utils.getStickString)(obj.axes[4]), (0, _utils.getStickString)(obj.axes[5]), Math.random().toFixed(3) // fixedLengthString(obj.axes[0], "0", 3),
        // fixedLengthString(obj.axes[1], "0", 3),
        // fixedLengthString(obj.axes[2], "0", 3),
        // fixedLengthString(obj.axes[3], "0", 3),
        // fixedLengthString(obj.axes[4], "0", 3),
        // fixedLengthString(obj.axes[5], "0", 3),
        );
      } else {} // console.log(obj.keys, obj.mouse, Math.random().toFixed(3));
      // console.log(obj.mouse);
      // let s1x = getStickString(obj.axes[0]);
      // let s1y = getStickString(obj.axes[1]);
      // console.log(` 0 ${s1y[2]} 0\n ${s1x[0]} 0 ${s1x[2]}\n 0 ${s1y[0]} 0`);


      if (this.hostConnection) {
        this.hostConnection.emit("inputState", obj);
      } else {
        console.log("the socket is null!");
      }
    });

    _defineProperty(this, "setStreamVolume", props => {
      if (this.stream) {
        if (this.props.videoType === "mpeg1") {
          this.stream.player.volume = props.settings.volume / 100;
        } else if (this.props.videoType === "webRTC") {}
      }
    });

    this.afkTime = 1000 * 60 * 60; // 1 hour

    this.afkTimer = null;
    this.stream = null;
    this.hostConnection = null;
    this.state = {};
    this.inputHandler = new _InputHandler.default();
    this.inputHandler.init(); // todo:

    window.inputHandler = this.inputHandler; // for lagless canvas
  }

  componentDidMount() {
    setInterval(() => {
      if (!this.props.streamOnline) {
        this.getStreamInfo();
      }
    }, 5000);
    this.getStreamInfo(true);
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


    for (let i = 0; i < 9; i++) {
      this.props.joinLeavePlayerControlQueue({
        cNum: i,
        joinLeave: "leave"
      });
    }

    if (this.hostConnection) {
      this.hostConnection.removeAllListeners();
      this.hostConnection.destroy();
    } // this.props.updateMessages([]);
    // save settings on close:


    console.log("saving settings");

    _localforage.default.setItem("settings", JSON.stringify(this.props.settings));
  }

  resetSettings() {
    (0, _utils.deleteAllCookies)(); // localforage.clear().then(() => {
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
    } // all settings:


    if (JSON.stringify(this.props.settings) != JSON.stringify(nextProps.settings)) {
      return false;
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

    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_react.Suspense, {
      fallback: _react.default.createElement(_Loading.default, null)
    }, _react.default.createElement(StreamsAppBar, {
      history: this.props.history,
      hide: this.props.settings.fullscreen || this.props.settings.hideNav
    }), _react.default.createElement(Picture, null), _react.default.createElement(Chat, {
      hide: this.props.settings.hideChat
    }), _react.default.createElement(StreamInfo, null)), _react.default.createElement(_reactRouter.Switch, null, _react.default.createElement(_reactRouter.Route, {
      path: "/settings",
      render: props => {
        return _react.default.createElement(_SettingsModal.default, _extends({}, props, {
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
    streamOnline: state.stream.info.online,
    videoType: state.stream.info.streamSettings.videoType,
    controllerCount: state.stream.info.streamSettings.controllerCount,
    mouseEnabled: state.stream.info.streamSettings.mouseEnabled,
    keyboardEnabled: state.stream.info.streamSettings.keyboardEnabled
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch((0, _settings.updateSettings)(settings));
    },
    joinLeavePlayerControlQueue: data => {
      dispatch((0, _players.joinLeavePlayerControlQueue)(data));
    },
    updateClient: client => {
      dispatch((0, _client.updateClient)(client));
    },
    updateMessages: messages => {
      dispatch((0, _chat.updateMessages)(messages));
    },
    updateStreamInfo: data => {
      dispatch((0, _info.updateStreamInfo)(data));
    }
  };
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), _notistack.withSnackbar, (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Stream);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/Streams.jsx":
/*!*************************!*\
  !*** ./src/Streams.jsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _StreamsAppBar = _interopRequireDefault(__webpack_require__(/*! src/components/streams/StreamsAppBar.jsx */ "./src/components/streams/StreamsAppBar.jsx"));

var _StreamList = _interopRequireDefault(__webpack_require__(/*! src/components/streams/StreamList.jsx */ "./src/components/streams/StreamList.jsx"));

var _StreamsDrawer = _interopRequireDefault(__webpack_require__(/*! src/components/streams/StreamsDrawer.jsx */ "./src/components/streams/StreamsDrawer.jsx"));

var _StreamsFooter = _interopRequireDefault(__webpack_require__(/*! src/components/streams/StreamsFooter.jsx */ "./src/components/streams/StreamsFooter.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// react-router:
// redux:
// main components:
// secondary components:
// material ui:
// components:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  [_utils.device.tablet]: {
    root: {}
  },
  [_utils.device.laptop]: {
    root: {}
  }
});

class Streams extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      streams: [],
      drawerOpen: true
    };
    this.triggered = false;
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  updateDimensions() {
    if (window.innerWidth < 900 && this.state.drawerOpen) {
      this.setState({
        drawerOpen: false
      });
    }

    if (window.innerWidth > 1000) {
      this.setState({
        drawerOpen: true
      });
    }
  }

  componentDidMount() {
    this.props.accountConnection.emit("getStreams", null, data => {
      this.setState({
        streams: data.streams
      });
    });
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  toggleDrawer(bool) {
    if (typeof bool === "boolean") {
      this.setState({
        drawerOpen: !this.state.drawerOpen
      });
    } else {
      this.setState({
        drawerOpen: bool
      });
    }

    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  }

  render() {
    console.log("re-rendering streams.");
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_StreamsAppBar.default, {
      drawerOpen: this.state.drawerOpen,
      handleToggleDrawer: this.toggleDrawer
    }), _react.default.createElement(_StreamsDrawer.default, {
      drawerOpen: this.state.drawerOpen,
      handleToggleDrawer: this.toggleDrawer
    }), _react.default.createElement(_StreamList.default, {
      drawerOpen: this.state.drawerOpen,
      streams: this.state.streams
    }), _react.default.createElement(_StreamsFooter.default, {
      drawerOpen: this.state.drawerOpen
    }));
  }

}

const mapStateToProps = state => {
  return {
    streamList: state.streams.streamList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Streams);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/ToS.jsx":
/*!*********************!*\
  !*** ./src/ToS.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "3%",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.background.default
  },
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "98%",
    height: "100%",
    padding: "2%"
  },
  image: {
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto"
  },
  back: {
    marginBottom: "10px",
    width: "30%",
    marginLeft: "auto" // marginRight: "auto",

  },
  iframe: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    height: "99960px",
    backgroundColor: "#FFF",
    borderRadius: "5px"
  },
  [_utils.device.laptop]: {}
});

class ToS extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      elevation: 0,
      className: classes.root
    }, _react.default.createElement(_Paper.default, {
      elevation: 3,
      className: classes.main
    }, _react.default.createElement(_Button.default, {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), _react.default.createElement("iframe", {
      className: classes.iframe,
      src: "https://remotegames.io/tos.html",
      frameBorder: "0"
    })));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(updateSettings(settings));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(ToS);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/actions/ActionTypes.js":
/*!************************************!*\
  !*** ./src/actions/ActionTypes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UPDATE_STREAM_INFO = exports.REGISTER = exports.LOGIN = exports.RECEIVE_STREAMS = exports.UPDATE_PING = exports.UPDATE_LAST_SERVER_UPDATE = exports.UPDATE_SERVER_TIME = exports.LEAVE_PLAYER_CONTROL_QUEUE = exports.JOIN_PLAYER_CONTROL_QUEUE = exports.UPDATE_PLAYER_CONTROLLER_STATE = exports.UPDATE_PLAYER_TURN_LENGTHS = exports.UPDATE_PLAYER_TURN_START_TIMES = exports.UPDATE_PLAYER_CONTROL_QUEUES = exports.UPDATE_SETTINGS = exports.UPDATE_CONTROLLER_STATE = exports.RECEIVE_ACCOUNT_MAP = exports.RECEIVE_USERNAME_MAP = exports.CHANGE_USERNAME = exports.UPDATE_CLIENT_INFO = exports.AUTHENTICATE = exports.UPDATE_VOLUME = exports.UPDATE_TURN_LENGTHS = exports.UPDATE_TURN_EXPIRATIONS = exports.UPDATE_WAITLISTS = exports.UPDATE_VIEWERS = exports.UPDATE_CONTROL_QUEUES = exports.UPDATE_MESSAGES = exports.SEND_MESSAGE = exports.RECEIVE_MESSAGE = void 0;
const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
exports.RECEIVE_MESSAGE = RECEIVE_MESSAGE;
const SEND_MESSAGE = "SEND_MESSAGE";
exports.SEND_MESSAGE = SEND_MESSAGE;
const UPDATE_MESSAGES = "UPDATE_MESSAGES";
exports.UPDATE_MESSAGES = UPDATE_MESSAGES;
const UPDATE_CONTROL_QUEUES = "UPDATE_CONTROL_QUEUES";
exports.UPDATE_CONTROL_QUEUES = UPDATE_CONTROL_QUEUES;
const UPDATE_VIEWERS = "UPDATE_VIEWERS";
exports.UPDATE_VIEWERS = UPDATE_VIEWERS;
const UPDATE_WAITLISTS = "UPDATE_WAITLISTS";
exports.UPDATE_WAITLISTS = UPDATE_WAITLISTS;
const UPDATE_TURN_EXPIRATIONS = "UPDATE_TURN_EXPIRATIONS";
exports.UPDATE_TURN_EXPIRATIONS = UPDATE_TURN_EXPIRATIONS;
const UPDATE_TURN_LENGTHS = "UPDATE_TURN_LENGTHS";
exports.UPDATE_TURN_LENGTHS = UPDATE_TURN_LENGTHS;
const UPDATE_VOLUME = "UPDATE_VOLUME"; // user info:

exports.UPDATE_VOLUME = UPDATE_VOLUME;
const AUTHENTICATE = "AUTHENTICATE";
exports.AUTHENTICATE = AUTHENTICATE;
const UPDATE_CLIENT_INFO = "UPDATE_CLIENT_INFO";
exports.UPDATE_CLIENT_INFO = UPDATE_CLIENT_INFO;
const CHANGE_USERNAME = "CHANGE_USERNAME";
exports.CHANGE_USERNAME = CHANGE_USERNAME;
const RECEIVE_USERNAME_MAP = "RECEIVE_USERNAME_MAP";
exports.RECEIVE_USERNAME_MAP = RECEIVE_USERNAME_MAP;
const RECEIVE_ACCOUNT_MAP = "RECEIVE_ACCOUNT_MAP";
exports.RECEIVE_ACCOUNT_MAP = RECEIVE_ACCOUNT_MAP;
const UPDATE_CONTROLLER_STATE = "UPDATE_CONTROLLER_STATE";
exports.UPDATE_CONTROLLER_STATE = UPDATE_CONTROLLER_STATE;
const UPDATE_SETTINGS = "UPDATE_SETTINGS"; // players:

exports.UPDATE_SETTINGS = UPDATE_SETTINGS;
const UPDATE_PLAYER_CONTROL_QUEUES = "UPDATE_PLAYER_CONTROL_QUEUES";
exports.UPDATE_PLAYER_CONTROL_QUEUES = UPDATE_PLAYER_CONTROL_QUEUES;
const UPDATE_PLAYER_TURN_START_TIMES = "UPDATE_PLAYER_TURN_START_TIMES";
exports.UPDATE_PLAYER_TURN_START_TIMES = UPDATE_PLAYER_TURN_START_TIMES;
const UPDATE_PLAYER_TURN_LENGTHS = "UPDATE_PLAYER_TURN_LENGTHS";
exports.UPDATE_PLAYER_TURN_LENGTHS = UPDATE_PLAYER_TURN_LENGTHS;
const UPDATE_PLAYER_CONTROLLER_STATE = "UPDATE_PLAYER_CONTROLLER_STATE";
exports.UPDATE_PLAYER_CONTROLLER_STATE = UPDATE_PLAYER_CONTROLLER_STATE;
const JOIN_PLAYER_CONTROL_QUEUE = "JOIN_PLAYER_CONTROL_QUEUE";
exports.JOIN_PLAYER_CONTROL_QUEUE = JOIN_PLAYER_CONTROL_QUEUE;
const LEAVE_PLAYER_CONTROL_QUEUE = "LEAVE_PLAYER_CONTROL_QUEUE"; // time:

exports.LEAVE_PLAYER_CONTROL_QUEUE = LEAVE_PLAYER_CONTROL_QUEUE;
const UPDATE_SERVER_TIME = "UPDATE_SERVER_TIME";
exports.UPDATE_SERVER_TIME = UPDATE_SERVER_TIME;
const UPDATE_LAST_SERVER_UPDATE = "UPDATE_LAST_SERVER_UPDATE";
exports.UPDATE_LAST_SERVER_UPDATE = UPDATE_LAST_SERVER_UPDATE;
const UPDATE_PING = "UPDATE_PING"; // streams:

exports.UPDATE_PING = UPDATE_PING;
const RECEIVE_STREAMS = "RECEIVE_STREAMS";
exports.RECEIVE_STREAMS = RECEIVE_STREAMS;
const LOGIN = "LOGIN";
exports.LOGIN = LOGIN;
const REGISTER = "REGISTER";
exports.REGISTER = REGISTER;
const UPDATE_STREAM_INFO = "UPDATE_STREAM_INFO";
exports.UPDATE_STREAM_INFO = UPDATE_STREAM_INFO;

/***/ }),

/***/ "./src/actions/accountMap.js":
/*!***********************************!*\
  !*** ./src/actions/accountMap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveAccountMap = void 0;

var types = _interopRequireWildcard(__webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const receiveAccountMap = map => {
  return {
    type: types.RECEIVE_ACCOUNT_MAP,
    payload: {
      map: map
    }
  };
};

exports.receiveAccountMap = receiveAccountMap;

/***/ }),

/***/ "./src/actions/info.js":
/*!*****************************!*\
  !*** ./src/actions/info.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStreamInfo = void 0;

var types = _interopRequireWildcard(__webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const updateStreamInfo = data => {
  return {
    type: types.UPDATE_STREAM_INFO,
    payload: {
      data: data
    }
  };
};

exports.updateStreamInfo = updateStreamInfo;

/***/ }),

/***/ "./src/actions/settings.js":
/*!*********************************!*\
  !*** ./src/actions/settings.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSettings = void 0;

var types = _interopRequireWildcard(__webpack_require__(/*! ./ActionTypes.js */ "./src/actions/ActionTypes.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const updateSettings = settings => {
  return {
    type: types.UPDATE_SETTINGS,
    payload: {
      settings: settings
    }
  };
};

exports.updateSettings = updateSettings;

/***/ }),

/***/ "./src/components/forms/VirtualMachineForm.jsx":
/*!*****************************************************!*\
  !*** ./src/components/forms/VirtualMachineForm.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _TextField = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));

var _FormControl = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js"));

var _FormHelperText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js"));

var _Link = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Link */ "./node_modules/@material-ui/core/esm/Link/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));

var _Radio = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js"));

var _RadioGroup = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));

var _OutlinedInput = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// const { desktopCapturer } = require("electron");
// imports:
// const { execFile } = require("child_process");
// const app = require("electron").remote.app;
// const { spawn } = require("child_process");
const validate = values => {
  const errors = {};
  const requiredFields = ["username", "password1", "password2", "email"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => _react.default.createElement(_TextField.default, _extends({
  label: label,
  placeholder: label,
  error: touched && invalid,
  helperText: touched && error
}, input, custom));

const renderCheckbox = ({
  input,
  label
}) => _react.default.createElement("div", null, _react.default.createElement(_FormControlLabel.default, {
  control: _react.default.createElement(_Checkbox.default, {
    checked: input.value ? true : false,
    onChange: input.onChange
  }),
  label: label
}));

const renderTOS = ({
  input
}) => _react.default.createElement("div", null, _react.default.createElement(_Checkbox.default, {
  checked: input.value ? true : false,
  onChange: input.onChange
}), _react.default.createElement("span", null, "I have read and agree to the "), _react.default.createElement(_Link.default, {
  href: "https://remotegames.io/tos.html"
}, "Terms and Conditions")); // const radioButton = ({ input, ...rest }) => (
// 	<FormControl>
// 		<RadioGroup {...input} {...rest}>
// 			<FormControlLabel
// 				value="window"
// 				control={<Radio color="primary" />}
// 				label="Capture Window"
// 			/>
// 			<FormControlLabel
// 				value="desktop"
// 				control={<Radio color="primary" />}
// 				label="Capture Desktop"
// 			/>
// 		</RadioGroup>
// 	</FormControl>
// );


const renderRadioGroup = ({
  input,
  ...rest
}) => _react.default.createElement(_RadioGroup.default, _extends({}, input, rest, {
  value: input.value,
  onChange: (event, value) => input.onChange(value)
}));

const renderFromHelper = ({
  touched,
  error
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return _react.default.createElement(_FormHelperText.default, null, touched && error);
  }
};

const renderSelectField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  children,
  variant,
  labelWidth,
  ...custom
}) => _react.default.createElement(_FormControl.default, {
  error: touched && error
}, _react.default.createElement(_InputLabel.default, {
  variant: variant,
  htmlFor: label + "Select"
}, label), _react.default.createElement(_Select.default, _extends({
  autoWidth: true
}, input, custom, {
  inputProps: variant !== "outlined" && variant !== "filled" ? {
    id: label + "Select",
    labelWidth: labelWidth
  } : undefined,
  input: variant === "outlined" ? _react.default.createElement(_OutlinedInput.default, {
    id: label + "Select",
    labelWidth: labelWidth
  }) : undefined
}), children), renderFromHelper({
  touched,
  error
})); // jss:


const styles = theme => ({
  root: {
    display: "grid",
    gridGap: "10px",
    padding: "25px",
    width: "100%",
    userSelect: "none",
    overflowY: "auto",
    alignSelf: "center",
    "&>div": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "10px"
    }
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly" // position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    // textAlign: "center",

  },
  dropdownContainer: {
    display: "flex",
    gridColumn: "1/3",
    border: "2px solid #000",
    borderRadius: "5px",
    // backgroundColor: "#6a6a6a50",
    "&>div": {
      width: "50%" // backgroundColor: "#6a6a6a50",

    },
    "&>div:first-child": {
      marginRight: "10px"
    },
    margin: "auto 0",
    padding: "10px" // "&:before": {
    // 	content: '""',
    // 	border: "3px solid #000",
    // 	borderRadius: "5px",
    // },

  }
});

class VirtualMachineForm extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "agreeTOS", event => {
      this.setState({
        TOSAgreed: event.target.checked
      });
    });

    _defineProperty(this, "getFPSMenuItems", () => {
      return [_react.default.createElement(_MenuItem.default, {
        key: 0,
        value: 30
      }, "30"), _react.default.createElement(_MenuItem.default, {
        key: 1,
        value: 20
      }, "20")];
    });

    _defineProperty(this, "getResolutionMenuItems", () => {
      return [_react.default.createElement(_MenuItem.default, {
        key: 0,
        value: 1080
      }, "1080"), _react.default.createElement(_MenuItem.default, {
        key: 1,
        value: 720
      }, "720"), _react.default.createElement(_MenuItem.default, {
        key: 2,
        value: 540
      }, "540"), _react.default.createElement(_MenuItem.default, {
        key: 3,
        value: 480
      }, "480"), _react.default.createElement(_MenuItem.default, {
        key: 1,
        value: 360
      }, "360"), _react.default.createElement(_MenuItem.default, {
        key: 1,
        value: 240
      }, "240")];
    });

    this.windowTitles = [];
    this.dshowDevices = [];
    this.audioDeviceNames = [];
    this.state = {
      TOSAgreed: false
    };
  }

  componentDidMount() {}

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.qualityProfile !== nextProps.qualityProfile) {
      this.props.onUpdateFormProfile(nextProps.qualityProfile);
    }

    return true;
  }

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      classes,
      qualityProfile
    } = this.props;
    return _react.default.createElement("form", {
      onSubmit: handleSubmit,
      className: classes.root
    }, _react.default.createElement("div", null, _react.default.createElement(_reduxForm.Field, {
      name: "streamTitle",
      component: renderTextField,
      label: "Stream Title",
      variant: "outlined"
    }), _react.default.createElement(_reduxForm.Field, {
      name: "thumbnailURL",
      component: renderTextField,
      label: "Thumbnail URL",
      variant: "outlined"
    })), _react.default.createElement("div", {
      style: {
        display: "block"
      }
    }, _react.default.createElement(_reduxForm.Field, {
      name: "qualityProfile",
      component: renderRadioGroup,
      row: true
    }, _react.default.createElement(_FormControlLabel.default, {
      value: "ultraLow",
      control: _react.default.createElement(_Radio.default, {
        color: "primary"
      }),
      label: "Ultra Low"
    }), _react.default.createElement(_FormControlLabel.default, {
      value: "low",
      control: _react.default.createElement(_Radio.default, {
        color: "primary"
      }),
      label: "Low"
    }), _react.default.createElement(_FormControlLabel.default, {
      value: "medium",
      control: _react.default.createElement(_Radio.default, {
        color: "primary"
      }),
      label: "Medium"
    }), _react.default.createElement(_FormControlLabel.default, {
      value: "high",
      control: _react.default.createElement(_Radio.default, {
        color: "primary"
      }),
      label: "High"
    }), _react.default.createElement(_FormControlLabel.default, {
      value: "ultraHigh",
      control: _react.default.createElement(_Radio.default, {
        color: "primary"
      }),
      label: "Ultra High"
    }), _react.default.createElement(_FormControlLabel.default, {
      value: "custom",
      control: _react.default.createElement(_Radio.default, {
        color: "primary"
      }),
      label: "Custom"
    }))), _react.default.createElement("div", null, _react.default.createElement(_reduxForm.Field, {
      name: "resolution",
      component: renderSelectField,
      label: "Resolution",
      variant: "outlined",
      type: "number"
    }, this.getResolutionMenuItems()), _react.default.createElement(_reduxForm.Field, {
      name: "videoBitrate",
      component: renderTextField,
      label: "Video Bitrate (kb/s)",
      variant: "outlined",
      type: "number"
    }), _react.default.createElement(_reduxForm.Field, {
      name: "framerate",
      component: renderSelectField,
      label: "Output FPS",
      variant: "outlined",
      labelWidth: 100
    }, this.getFPSMenuItems())), qualityProfile === "custom" && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", null, _react.default.createElement(_reduxForm.Field, {
      name: "videoBufferSize",
      component: renderTextField,
      label: "Video Buffer Size",
      variant: "outlined",
      type: "number"
    }), _react.default.createElement(_reduxForm.Field, {
      name: "audioBufferSize",
      component: renderTextField,
      label: "Audio Buffer Size",
      variant: "outlined",
      type: "text"
    }), _react.default.createElement(_reduxForm.Field, {
      name: "groupOfPictures",
      component: renderTextField,
      label: "Group of Pictures",
      variant: "outlined",
      type: "text"
    })), _react.default.createElement("div", null, _react.default.createElement(_reduxForm.Field, {
      name: "qmin",
      component: renderTextField,
      label: "QMin",
      variant: "outlined",
      type: "number"
    }), _react.default.createElement(_reduxForm.Field, {
      name: "qmax",
      component: renderTextField,
      label: "QMax",
      variant: "outlined",
      type: "text"
    }))), _react.default.createElement("div", null, _react.default.createElement(_reduxForm.Field, {
      name: "agree",
      component: renderTOS,
      onChange: this.agreeTOS
    })), _react.default.createElement("div", {
      className: classes.buttons
    }, _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      type: "submit",
      disabled: pristine || submitting || !this.state.TOSAgreed
    }, "Start Virtual Machine"), _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "secondary",
      onClick: this.props.onStopMachine
    }, "Stop Virtual Machine")));
  }

} // let initialValues = {
// 	host1: "https://remotegames.io",
// 	port1: 8099,
// 	width: 1280,
// 	height: 720,
// 	// windowTitle: null,
// 	resolution: 540,
// 	videoBitrate: 1,
// 	captureRate: 30,
// 	capture: "window",
// 	offsetX: 0,
// 	offsetY: 0,
// 	controllerCount: 1,
// };
// export default compose(
// 	withStyles(styles),
// 	reduxForm({
// 		form: "VideoSettingsForm", // a unique identifier for this form
// 		validate,
// 		initialValues,
// 	}),
// )(VideoSettingsForm);


const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      videoBitrate: ownProps.videoBitrate
    }
  };
}; // Decorate with redux-form


let VirtualMachineForm2 = (0, _reduxForm.reduxForm)({
  form: "VirtualMachineForm",
  // a unique identifier for this form
  enableReinitialize: true,
  validate // initialValues,

})(VirtualMachineForm); // Decorate with connect to read form values

const selector = (0, _reduxForm.formValueSelector)("VirtualMachineForm"); // <-- same as form name

VirtualMachineForm2 = (0, _reactRedux.connect)(state => {
  const qualityProfile = selector(state, "qualityProfile");
  return {
    qualityProfile
  };
})(VirtualMachineForm2);

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles))(VirtualMachineForm2);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/modals/CreateVMModal.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/CreateVMModal.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));

var _VirtualMachineForm = _interopRequireDefault(__webpack_require__(/*! src/components/forms/VirtualMachineForm.jsx */ "./src/components/forms/VirtualMachineForm.jsx"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _alert = __webpack_require__(/*! shared/features/alert.js */ "./src/shared/features/alert.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

class CreateVMModal extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", () => {
      // this.props.history.push("/");
      this.props.history.goBack();
    });

    _defineProperty(this, "handleUpdateFormProfile", profileName => {
      this.setState({
        formInitialValues: { ...this.state.formInitialValues,
          ...this.profiles[profileName],
          qualityProfile: profileName
        }
      });
    });

    _defineProperty(this, "handleStartMachine", args => {
      this.accountConnection.emit("startMachine", {
        authToken: this.props.authToken,
        streamSettings: args
      }, data => {
        if (data.success) {
          this.props.openAlert({
            title: "VM Created!"
          });
          setTimeout(() => {
            this.props.history.push(`/s/${this.props.username}`);
          }, 2000);
        } else {
          this.props.openAlert({
            title: data.reason
          });
        }
      });
    });

    _defineProperty(this, "handleStopMachine", () => {
      this.accountConnection.emit("stopMachine", {
        authToken: this.props.authToken
      }, data => {
        if (data.success) {
          this.props.openAlert({
            title: "success"
          });
        } else {
          this.props.openAlert({
            title: data.reason
          });
        }
      });
    });

    this.accountConnection = this.props.accountConnection;
    this.state = {
      formInitialValues: {
        qualityProfile: "custom",
        // host1: "https://remotegames.io",
        // port1: 8099,
        streamTitle: "My Stream",
        description: "",
        region: "US East",
        width: 1280,
        height: 720,
        windowTitle: null,
        windowTitleDropdown: 0,
        audioDevice: null,
        audioDeviceDropdown: 0,
        videoDevice: null,
        videoDeviceDropdown: 0,
        resolution: 540,
        videoBitrate: 1500,
        videoBufferSize: 512,
        audioBufferSize: 128,
        groupOfPictures: 60,
        captureRate: 60,
        framerate: 30,
        capture: "window",
        videoType: "mpeg1",
        offsetX: 0,
        offsetY: 0,
        controllerCount: 1,
        controlSwitch: false,
        virtualXboxControllers: true,
        qmin: 4,
        qmax: 20,
        forfeitTime: 1000 * 5 // 5 seconds

      }
    };
    this.profiles = {
      perfect: {
        videoBitrate: 14000,
        resolution: 1080,
        qmin: 2,
        qmax: 8
      },
      ultraHigh: {
        videoBitrate: 10000,
        resolution: 1080,
        qmin: 4,
        qmax: 12
      },
      high: {
        videoBitrate: 8000,
        resolution: 720,
        qmin: 2,
        qmax: 10
      },
      medium: {
        videoBitrate: 5000,
        resolution: 540,
        qmin: 4,
        qmax: 10
      },
      low: {
        videoBitrate: 2500,
        resolution: 480,
        qmin: 4,
        qmax: 10
      },
      ultraLow: {
        videoBitrate: 1000,
        resolution: 360,
        qmin: 6,
        qmax: 20
      }
    };
  }

  componentDidMount() {
    this.accountConnection.emit("getStreamSettings", {
      authToken: this.props.authToken
    }, data => {
      if (data.success) {
        this.setState({
          formInitialValues: { ...this.state.formInitialValues,
            ...data.streamSettings
          }
        });
      } else {
        this.props.openAlert({
          title: data.reason
        });
      }
    });
  }

  render() {
    const {
      classes
    } = this.props;
    console.log("re-rendering CreateVMModal.");
    return _react.default.createElement(_Dialog.default, {
      open: true,
      scroll: "body",
      maxWidth: "lg",
      fullWidth: true,
      onClose: this.handleClose
    }, _react.default.createElement(_DialogContent.default, {
      className: classes.root
    }, _react.default.createElement(_AppBar.default, {
      position: "static"
    }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "inherit"
    }, "Create a Virtual Machine"))), _react.default.createElement(_VirtualMachineForm.default, {
      initialValues: this.state.formInitialValues,
      onSubmit: this.handleStartMachine,
      onStopMachine: this.handleStopMachine,
      onUpdateFormProfile: this.handleUpdateFormProfile
    })));
  }

}

const mapStateToProps = state => {
  return {
    username: state.client.username,
    authToken: state.client.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openAlert: data => {
      dispatch((0, _alert.openAlert)(data));
    }
  };
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(CreateVMModal);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/modals/SettingsModal.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/SettingsModal.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));

var _InputMapper = _interopRequireDefault(__webpack_require__(/*! ./settings/InputMapper.jsx */ "./src/components/modals/settings/InputMapper.jsx"));

var _Site = _interopRequireDefault(__webpack_require__(/*! ./settings/Site.jsx */ "./src/components/modals/settings/Site.jsx"));

var _AudioVideo = _interopRequireDefault(__webpack_require__(/*! ./settings/AudioVideo.jsx */ "./src/components/modals/settings/AudioVideo.jsx"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

class SettingsModal extends _react.Component {
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

    return _react.default.createElement(_Dialog.default, {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, _react.default.createElement(_DialogContent.default, {
      className: classes.root
    }, _react.default.createElement(_AppBar.default, {
      position: "static"
    }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "inherit"
    }, "Settings"))), _react.default.createElement(_Tabs.default, {
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
    }, _react.default.createElement(_Tab.default, {
      label: "Audio Video"
    }), _react.default.createElement(_Tab.default, {
      label: "Controls"
    }), _react.default.createElement(_Tab.default, {
      label: "Site"
    })), _react.default.createElement(_reactRouter.Route, {
      path: "/settings/controls",
      render: props => {
        return _react.default.createElement(_Paper.default, {
          className: classes.controls,
          elevation: 4
        }, _react.default.createElement(_InputMapper.default, null));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/settings/site",
      render: props => {
        return _react.default.createElement(_Paper.default, {
          className: classes.controls,
          elevation: 4
        }, _react.default.createElement(_Site.default, null));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/settings/av",
      render: props => {
        return _react.default.createElement(_Paper.default, {
          className: classes.controls,
          elevation: 4
        }, _react.default.createElement(_AudioVideo.default, null));
      }
    })));
  }

}

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles))(SettingsModal);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/modals/settings/AudioVideo.jsx":
/*!*******************************************************!*\
  !*** ./src/components/modals/settings/AudioVideo.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

class AudioVideo extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", null, "test"));
  }

}

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles))(AudioVideo);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/modals/settings/InputMapper.jsx":
/*!********************************************************!*\
  !*** ./src/components/modals/settings/InputMapper.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/List */ "./node_modules/@material-ui/core/esm/List/index.js"));

var _OutlinedInput = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js"));

var _MySlider = _interopRequireDefault(__webpack_require__(/*! shared/components/general/MySlider.jsx */ "./src/shared/components/general/MySlider.jsx"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

class ControllerMapper extends _react.Component {
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
      return _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, `${DISPLAY_NAMES[this.props.which]}`, " waiting for axis / button input..."));
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

    return _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_ListItemText.default, null, `${DISPLAY_NAMES[this.props.which]}`), _react.default.createElement(_ListItemText.default, null, currentMappingNamed), _react.default.createElement(_Button.default, {
      variant: "contained",
      onClick: this.mapButton
    }, "Map To Button"), _react.default.createElement(_Button.default, {
      variant: "contained",
      onClick: this.mapAxis
    }, "Map To Axis"));
  }

}

class KeyboardMapper extends _react.Component {
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
      return _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, `${DISPLAY_KEYBOARD_NAMES[this.props.which]}`, " waiting for keypress..."));
    } // let currentMapping = inputHandler.keyboard.map2[parseInt(this.props.which)];


    let currentMapping = inputHandler.keyboard.map[MAP_KEYBOARD_NAMES[parseInt(this.props.which)]];
    return _react.default.createElement(_ListItem.default, {
      className: classes.listItem
    }, _react.default.createElement(_ListItemText.default, null, `${DISPLAY_KEYBOARD_NAMES[this.props.which]}`), _react.default.createElement(_ListItemText.default, null, currentMapping), _react.default.createElement(_Button.default, {
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

class InputMapperModal extends _react.Component {
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
      gamepads.push(_react.default.createElement(_MenuItem.default, {
        key: gamepadIndex,
        value: gamepadIndex
      }, gamepadWrapper.controllers[gamepadIndex].id));
    } // show that no gamepad is selected if one isn't:


    if (activeGamepadIndex == null && gamepads.length > 0) {
      // set to 0 so we render this:
      activeGamepadIndex = 0; // prepend so it's first:

      gamepads.unshift(_react.default.createElement(_MenuItem.default, {
        key: 0,
        value: 0
      }, "No gamepad selected"));
    }

    if (gamepads.length == 0 || activeGamepadIndex == null) {
      activeGamepadIndex = 0;
      gamepads.push(_react.default.createElement(_MenuItem.default, {
        key: 0,
        value: 0
      }, "No gamepads detected"));
    }

    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_Tabs.default, {
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
    }, _react.default.createElement(_Tab.default, {
      label: "Controller"
    }), _react.default.createElement(_Tab.default, {
      label: "Keyboard"
    })), this.state.whichTab === 0 && _react.default.createElement(_Paper.default, {
      className: classes.controllerRemapper,
      elevation: 4
    }, _react.default.createElement(_ListItemText.default, null, "Active Gamepad Type:", " " + (inputHandler.controller.settings.detectedType || "Unknown")), _react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, _react.default.createElement(_Select.default, {
      value: activeGamepadIndex,
      onChange: this.handleChange,
      input: _react.default.createElement(_OutlinedInput.default, {
        labelWidth: 0
      }),
      style: {
        width: "80%"
      }
    }, gamepads), _react.default.createElement(_Button.default, {
      variant: "contained",
      onClick: this.rescanGamepads
    }, "Rescan")), _react.default.createElement(_Paper.default, {
      elevation: 4,
      className: classes.sliderSettings
    }, _react.default.createElement("div", null, "Stick Deadzone: ", inputHandler.controller.settings.axes[0].deadzone, _react.default.createElement(_MySlider.default, {
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
    })), _react.default.createElement("div", null, "Stick Sensitivity: ", inputHandler.controller.settings.axes[0].sensitivity, _react.default.createElement(_MySlider.default, {
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
    }))), _react.default.createElement(_Paper.default, {
      elevation: 2,
      style: {
        marginTop: 15
      }
    }, _react.default.createElement(_List.default, {
      className: classes.list
    }, [...Array(17)].map((e, i) => _react.default.createElement(ControllerMapper, {
      key: i,
      update: this.update,
      type: "button",
      which: i,
      classes: this.props.classes
    })), [...Array(4)].map((e, i) => _react.default.createElement(ControllerMapper, {
      key: i,
      update: this.update,
      type: "axis",
      which: i,
      classes: this.props.classes
    }))))), this.state.whichTab === 1 && _react.default.createElement(_Paper.default, {
      className: classes.keyboardRemapper,
      elevation: 4
    }, _react.default.createElement(_Paper.default, {
      elevation: 2
    }, _react.default.createElement(_List.default, {
      className: classes.list
    }, [...Array(26)].map((e, i) => _react.default.createElement(KeyboardMapper, {
      key: i,
      update: this.update,
      inputHandler: inputHandler,
      type: "button",
      which: i,
      classes: this.props.classes
    }))))));
  }

}

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles))(InputMapperModal);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/modals/settings/Site.jsx":
/*!*************************************************!*\
  !*** ./src/components/modals/settings/Site.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _CheckboxSettings = _interopRequireDefault(__webpack_require__(/*! components/stream/CheckboxSettings.jsx */ "./src/components/stream/CheckboxSettings.jsx"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

class Site extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_CheckboxSettings.default, null));
  }

}

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles))(Site);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/CheckboxSettings.jsx":
/*!****************************************************!*\
  !*** ./src/components/stream/CheckboxSettings.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/List */ "./node_modules/@material-ui/core/esm/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _MyCheckbox = _interopRequireDefault(__webpack_require__(/*! shared/components/general/MyCheckbox.jsx */ "./src/shared/components/general/MyCheckbox.jsx"));

var _ThemeSelector = _interopRequireDefault(__webpack_require__(/*! shared/components/general/ThemeSelector.jsx */ "./src/shared/components/general/ThemeSelector.jsx"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _settings = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// components:
// redux:
// actions:
// libs:
class CheckboxSettings extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return _react.default.createElement(_Paper.default, {
      elevation: 5
    }, _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Enable Keyboard Controls",
      handleChange: state => {
        this.props.updateSettings({
          keyboardControls: state
        });
      },
      checked: this.props.settings.keyboardControls
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Enable Controller Controls",
      handleChange: state => {
        this.props.updateSettings({
          controllerControls: state
        });
      },
      checked: this.props.settings.controllerControls
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Enable Touch Controls",
      handleChange: state => {
        this.props.updateSettings({
          touchControls: state
        });
      },
      checked: this.props.settings.touchControls
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Real keyboard / mouse",
      handleChange: state => {
        this.props.updateSettings({
          realKeyboardMouse: state
        });
      },
      checked: this.props.settings.realKeyboardMouse
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Show Controller View",
      handleChange: state => {
        this.props.updateSettings({
          controllerView: state
        });

        if (state && this.props.settings.largescreen) {
          this.props.updateSettings({
            largescreen: false
          });
        } else if (!state && !this.props.settings.largescreen) {
          this.props.updateSettings({
            largescreen: true
          });
        }

        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 200);
      },
      checked: this.props.settings.controllerView
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
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
          (0, _utils.toggleFullscreen)(document.getElementsByTagName("html")[0]);
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
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Audio 3.0",
      handleChange: this.props.toggleAudioThree,
      checked: this.props.settings.audioThree
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ThemeSelector.default, null)), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
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
          (0, _utils.toggleFullscreen)(document.getElementsByTagName("html")[0]);
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
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Analog Stick Mode",
      handleChange: state => {
        this.props.updateSettings({
          analogStickMode: state
        });
      },
      checked: this.props.settings.analogStickMode
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
      text: "Hide Chat",
      handleChange: state => {
        this.props.updateSettings({
          hideChat: state
        });
      },
      checked: this.props.settings.hideChat
    })), _react.default.createElement(_ListItem.default, null, _react.default.createElement(_MyCheckbox.default, {
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
      dispatch((0, _settings.updateSettings)(settings));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CheckboxSettings);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/Picture.jsx":
/*!*******************************************!*\
  !*** ./src/components/stream/Picture.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _LaglessView = _interopRequireDefault(__webpack_require__(/*! ./lagless/laglessView/LaglessView.jsx */ "./src/components/stream/lagless/laglessView/LaglessView.jsx"));

var _LaglessBar = _interopRequireDefault(__webpack_require__(/*! ./lagless/laglessBar/LaglessBar.jsx */ "./src/components/stream/lagless/laglessBar/LaglessBar.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    gridArea: "picture",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: "100%",
    padding: "5px",
    margin: 0,
    overflow: "hidden" // height: "calc(47vw)",

  },
  [_utils.device.tablet]: {
    root: {// height: "calc(34vw)",
    }
  },
  hideChat: {
    gridColumn: "1/3"
  },
  fullscreen: {
    gridRow: "1",
    gridColumn: "1/3",
    padding: "0px"
  }
});

class Picture extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    let pictureClasses = (0, _classnames.default)(classes.root, {
      [classes.hideChat]: this.props.hideChat || this.props.fullscreen,
      [classes.fullscreen]: this.props.fullscreen
    });
    return _react.default.createElement(_Paper.default, {
      id: "picture",
      elevation: 3,
      className: pictureClasses
    }, _react.default.createElement(_LaglessView.default, null), _react.default.createElement(_LaglessBar.default, null));
  }

}

const mapStateToProps = state => {
  return {
    hideChat: state.settings.hideChat,
    fullscreen: state.settings.fullscreen
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(Picture);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/lagless/laglessBar/LaglessBar.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/stream/lagless/laglessBar/LaglessBar.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _VolumeSlider = _interopRequireDefault(__webpack_require__(/*! shared/components/general/VolumeSlider.jsx */ "./src/shared/components/general/VolumeSlider.jsx"));

var _Ping = _interopRequireDefault(__webpack_require__(/*! ./Ping.jsx */ "./src/components/stream/lagless/laglessBar/Ping.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Settings = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/Settings */ "./node_modules/@material-ui/icons/esm/Settings.js"));

var _Sync = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/Sync */ "./node_modules/@material-ui/icons/esm/Sync.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _settings = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignSelf: "center",
    width: "100%",
    padding: "4px 0px",
    marginTop: "4px",
    // marginTop: "-40px",
    backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light // opacity: 0,
    // zIndex: 1,
    // transition: "all 400ms ease-in-out",
    // "&:hover": {
    // opacity: 1,
    // },

  }
});

class LaglessBar extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", value => {
      this.props.setVolume(parseInt(value));
    });

    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      id: "laglessBar",
      className: classes.root,
      elevation: 3
    }, _react.default.createElement(_VolumeSlider.default, {
      value: this.props.volume,
      handleChange: this.handleChange,
      onMute: () => {
        this.props.setVolume(0);
      },
      onMax: () => {
        this.props.setVolume(100);
      }
    }), this.props.videoType === "mpeg1" && _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      onClick: () => {
        window.stream.player.audio.destination.resetEnqueuedTime();
      }
    }, "Sync Audio ", _react.default.createElement(_Sync.default, null)), _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      onClick: () => {
        this.props.history.push("/settings/site");
      }
    }, "Settings ", _react.default.createElement(_Settings.default, null)), _react.default.createElement(_Ping.default, null));
  }

}

const mapStateToProps = state => {
  return {
    volume: state.settings.volume,
    accountMap: state.stream.accountMap,
    videoType: state.stream.info.streamSettings.videoType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVolume: volume => {
      dispatch((0, _settings.updateSettings)({
        volume: volume
      }));
    }
  };
}; // export default connect(mapStateToProps, mapDispatchToProps)(LaglessBar);


var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(LaglessBar);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/lagless/laglessBar/Ping.jsx":
/*!***********************************************************!*\
  !*** ./src/components/stream/lagless/laglessBar/Ping.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// icons:
// components:
// recompose:
// redux:
// jss:
const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "5px"
  }
});

class Ping extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 3
    }, this.props.ping, "ms");
  }

}

const mapStateToProps = state => {
  return {
    ping: state.stream.time.ping
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(Ping);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/lagless/laglessView/ControllerView.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/stream/lagless/laglessView/ControllerView.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _DeviceStates = __webpack_require__(/*! shared/libs/inputHandler/DeviceStates.js */ "./src/shared/libs/inputHandler/DeviceStates.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// libs:
// jss:
const styles = theme => ({
  controllerRoot: {
    zIndex: 100,
    background: "transparent",
    position: "relative",
    width: "13.4%"
  },
  leftOverlay: {
    left: 0,
    width: "18.4%",
    position: "absolute",
    opacity: 0.5
  },
  rightOverlay: {
    right: 0,
    width: "18.4%",
    position: "absolute",
    opacity: 0.5
  },
  transparent: {
    opacity: 0.5
  },
  leftStick1: {
    position: "absolute",
    width: "37%",
    height: "12%",
    left: "34.9%",
    top: "19.8%",
    borderRadius: "50%"
  },
  leftStick2: {
    position: "absolute",
    background: "#FF3C28",
    width: "50%",
    height: "50%",
    left: "25%",
    top: "25%",
    pointerEvents: "none",
    borderRadius: "50%"
  },
  rightStick1: {
    position: "absolute",
    width: "37%",
    height: "12%",
    left: "28%",
    top: "47.2%",
    borderRadius: "50%"
  },
  rightStick2: {
    position: "absolute",
    background: "#0AB9E6",
    width: "50%",
    height: "50%",
    left: "25%",
    top: "25%",
    pointerEvents: "none",
    borderRadius: "50%"
  },
  image: {
    width: "100%"
  },
  dpad: {
    position: "absolute",
    background: "transparent",
    width: "85.25%",
    height: "27.75%",
    left: "10%",
    top: "39%",
    "& .up": {
      position: "absolute",
      left: "34.8%",
      top: "9.5%"
    },
    "& .down": {
      position: "absolute",
      left: "34.8%",
      top: "62.5%"
    },
    "& .left": {
      position: "absolute",
      left: "7%",
      top: "36%"
    },
    "& .right": {
      position: "absolute",
      left: "63%",
      top: "36%"
    }
  },
  abxy: {
    position: "absolute",
    background: "transparent",
    width: "85.25%",
    height: "27.75%",
    left: "3%",
    top: "12%",
    "& .a": {
      position: "absolute",
      left: "63.2%",
      top: "34.5%"
    },
    "& .b": {
      position: "absolute",
      left: "35.2%",
      top: "61%"
    },
    "& .x": {
      position: "absolute",
      left: "35.2%",
      top: "8%"
    },
    "& .y": {
      position: "absolute",
      left: "7.2%",
      top: "34.5%"
    }
  },
  xboxabxy: {
    position: "absolute",
    background: "transparent",
    width: "85.25%",
    height: "27.75%",
    left: "3%",
    top: "12%",
    fontSize: "large",
    fontWeight: "bold",
    "& :after": {
      content: '""',
      position: "absolute",
      top: "0px",
      left: "0px",
      // width: "100%",
      // height: "50%",
      // backgroundImage: "linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.2))",
      // borderTopLeftRadius: "50%",
      // borderTopRightRadius: "50%",
      // clipPath: "circle(61% at 50% 100%)",
      width: "100%",
      height: "100%",
      clipPath: "circle(60% at 80% 0%)",
      backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1),rgba(255,255,255,0.3))",
      borderRadius: "50%"
    },
    "& .a": {
      position: "absolute",
      left: "63.2%",
      top: "34.5%",
      color: "#E53136",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    },
    "& .b": {
      position: "absolute",
      left: "35.2%",
      top: "61%",
      color: "#91C85C",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    },
    "& .x": {
      position: "absolute",
      left: "35.2%",
      top: "8%",
      color: "#FCE504",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    },
    "& .y": {
      position: "absolute",
      left: "7.2%",
      top: "34.5%",
      color: "#0399DC",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    }
  },
  button: {
    background: "rgba(50, 50, 50, 0.2)",
    width: "32%",
    height: "32%",
    border: "2px solid #333",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  otherButtons: {
    color: "#FFFFFF",
    textShadow: "2px 2px 4px #000000",

    /* less round */
    borderRadius: "10px !important",
    "& .minus": {
      position: "absolute",
      left: "66%",
      top: "6%",
      width: "32%",
      height: "9%"
    },
    "& .capture": {
      position: "absolute",
      left: "54%",
      top: "67.5%",
      width: "32%",
      height: "9%"
    },
    "& .l": {
      position: "absolute",
      left: "1%",
      top: "6%",
      width: "60%",
      height: "6%"
    },
    "& .zl": {
      position: "absolute",
      left: "1%",
      top: "0%",
      width: "60%",
      height: "6%"
    },
    "& .plus": {
      position: "absolute",
      left: "1%",
      top: "6%",
      width: "32%",
      height: "9%"
    },
    "& .home": {
      position: "absolute",
      left: "14%",
      top: "67.5%",
      width: "32%",
      height: "9%"
    },
    "& .r": {
      position: "absolute",
      left: "40%",
      top: "6%",
      width: "60%",
      height: "6%"
    },
    "& .zr": {
      position: "absolute",
      left: "40%",
      top: "0%",
      width: "60%",
      height: "6%"
    }
  },
  highlighted: {
    background: "rgba(80, 187, 80, 0.7)"
  },
  trigger1: {
    height: "50%",
    borderRadius: "10px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    zIndex: "100"
  },
  trigger2: {
    height: "50%",
    background: "rgba(80, 187, 80, 0.7)",
    borderRadius: "10px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0"
  },
  xboxHighlighted: {
    background: "rgba(68, 68, 68, 0.7)",
    "&.a,&.b,&.x,&.y": {
      background: "rgba(68, 68, 68, 1) !important"
    }
  }
});

class ControllerView extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.getLeftStickTransform = this.getLeftStickTransform.bind(this);
    this.getRightStickTransform = this.getRightStickTransform.bind(this);
    this.cstate = new _DeviceStates.ControllerState();
    this.state = {};
  }

  getLeftStickTransform() {
    let x = this.cstate.axes[0];
    let y = this.cstate.axes[1];
    y *= -1;
    let x2 = x * Math.sqrt(1 - y * y / 2) * 32;
    let y2 = y * Math.sqrt(1 - x * x / 2) * 32; // let scale = window.outerWidth / 1920;

    let scale = 1;
    let stick = document.querySelector("#leftStick");

    if (stick) {
      scale = stick.clientWidth / 55;
    }

    x2 *= scale;
    y2 *= scale;
    return `${x2}px, ${y2}px`;
  }

  getRightStickTransform() {
    let x = this.cstate.axes[2];
    let y = this.cstate.axes[3];
    y *= -1;
    let x2 = x * Math.sqrt(1 - y * y / 2) * 32;
    let y2 = y * Math.sqrt(1 - x * x / 2) * 32;
    let scale = 1;
    let stick = document.querySelector("#rightStick");

    if (stick) {
      scale = stick.clientWidth / 55;
    }

    x2 *= scale;
    y2 *= scale;
    return `${x2}px, ${y2}px`;
  }

  componentDidMount() {
    window.inputHandler.touchpad.touchWrapper.init(document.querySelector("#leftStick"), document.querySelector("#rightStick"));
  }

  componentWillUnmount() {
    if (window.inputHandler.touchpad.touchWrapper.leftStick) {
      window.inputHandler.touchpad.touchWrapper.leftStick.destroy();
    }

    if (window.inputHandler.touchpad.touchWrapper.rightStick) {
      window.inputHandler.touchpad.touchWrapper.rightStick.destroy();
    }
  }

  render() {
    const {
      classes
    } = this.props; // if (!this.props.displayControllers) {
    // 	return this.props.children;
    // }

    this.cstate.setState(this.props.controllerState);
    let highlightedClass;
    let abxyClass;

    if (this.props.type === "joycon") {
      highlightedClass = classes.highlighted;
      abxyClass = classes.abxy;
    } else if (this.props.type === "xbox") {
      highlightedClass = classes.xboxHighlighted;
      abxyClass = classes.xboxabxy;
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.controllerRoot, {
        [classes.leftOverlay]: this.props.overlay
      })
    }, _react.default.createElement("img", {
      className: (0, _classnames.default)(classes.image, {
        [classes.transparent]: this.props.overlay
      }),
      src: `${window.location.origin}/images/leftJoyCon2.png`
    }), _react.default.createElement("div", {
      id: "leftStick",
      className: (0, _classnames.default)(classes.leftStick1, {
        [highlightedClass]: this.cstate.buttons.lstick
      })
    }, _react.default.createElement("div", {
      className: classes.leftStick2,
      style: {
        transform: `translate(${this.getLeftStickTransform()})`
      }
    })), _react.default.createElement("div", {
      className: classes.dpad
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "up", {
        [highlightedClass]: this.cstate.buttons.up
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "down", {
        [highlightedClass]: this.cstate.buttons.down
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "left", {
        [highlightedClass]: this.cstate.buttons.left
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "right", {
        [highlightedClass]: this.cstate.buttons.right
      })
    })), _react.default.createElement("div", {
      className: classes.otherButtons
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "minus", {
        [highlightedClass]: this.cstate.buttons.minus
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "capture", {
        [highlightedClass]: this.cstate.buttons.capture
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "l", {
        [highlightedClass]: this.cstate.buttons.l
      })
    }, _react.default.createElement("div", {
      className: "click-passthrough"
    }, this.props.type === "xbox" ? "LB" : "L")), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "zl")
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.trigger1, {
        [highlightedClass]: this.cstate.buttons.zl
      })
    }, this.props.type === "xbox" ? "LT" : "ZL"), _react.default.createElement("div", {
      className: classes.trigger2,
      style: {
        width: this.cstate.axes[4] * 100 + "%"
      }
    })))), this.props.children, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.controllerRoot, {
        [classes.rightOverlay]: this.props.overlay
      })
    }, _react.default.createElement("img", {
      className: (0, _classnames.default)(classes.image, {
        [classes.transparent]: this.props.overlay
      }),
      src: `${window.location.origin}/images/rightJoyCon2.png`
    }), _react.default.createElement("div", {
      id: "rightStick",
      className: (0, _classnames.default)(classes.rightStick1, {
        [highlightedClass]: this.cstate.buttons.rstick
      })
    }, _react.default.createElement("div", {
      className: classes.rightStick2,
      style: {
        transform: `translate(${this.getRightStickTransform()})`
      }
    })), _react.default.createElement("div", {
      className: abxyClass
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "a", {
        [highlightedClass]: this.cstate.buttons.a
      })
    }, this.props.type === "xbox" && "A"), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "b", {
        [highlightedClass]: this.cstate.buttons.b
      })
    }, this.props.type === "xbox" && "B"), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "x", {
        [highlightedClass]: this.cstate.buttons.x
      })
    }, this.props.type === "xbox" && "X"), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, "y", {
        [highlightedClass]: this.cstate.buttons.y
      })
    }, this.props.type === "xbox" && "Y")), _react.default.createElement("div", {
      className: classes.otherButtons
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "plus", {
        [highlightedClass]: this.cstate.buttons.plus
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "home", {
        [highlightedClass]: this.cstate.buttons.home
      })
    }), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "r", {
        [highlightedClass]: this.cstate.buttons.r
      })
    }, _react.default.createElement("div", {
      className: "click-passthrough"
    }, this.props.type === "xbox" ? "RB" : "R")), _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.button, classes.otherButtons, "zr")
    }, _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.trigger1, {
        [highlightedClass]: this.cstate.buttons.zr
      })
    }, this.props.type === "xbox" ? "RT" : "ZR"), _react.default.createElement("div", {
      className: classes.trigger2,
      style: {
        width: this.cstate.axes[5] * 100 + "%"
      }
    })))));
  }

}

var _default = (0, _styles.withStyles)(styles)(ControllerView);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/lagless/laglessView/LaglessCanvas.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/stream/lagless/laglessView/LaglessCanvas.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js"));

var _DialogActions = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));

var _DialogContentText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js"));

var _DialogTitle = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LaglessCanvas extends _react.PureComponent {
  constructor(props) {
    super(props); // this.videoRef = React.createRef();

    _defineProperty(this, "handleClick", () => {
      if (this.props.loggedIn && !window.inputHandler.mouse.settings.enabled) {
        this.setState({
          alertOpen: true
        });
      }
    });

    _defineProperty(this, "handleClose", () => {
      this.setState({
        alertOpen: false
      });
      window.inputHandler.mouse.toggle(false);
    });

    _defineProperty(this, "enableMouseControls", () => {
      this.setState({
        alertOpen: false
      }); // let id = null;
      // if (this.props.videoType === "mpeg1") {
      // 	id = "canvas";
      // } else if (this.props.videoType === "webRTC") {
      // 	id = "video";
      // }
      // window.inputHandler.mouse.init(document.getElementById(id));

      window.inputHandler.mouse.init(this.graphicsCanvasRef.current);
      window.inputHandler.mouse.toggle(true);
      window.inputHandler.keyboard.init();
      window.inputHandler.keyboard.toggle(true);
    });

    this.graphicsCanvasRef = _react.default.createRef();
    this.state = {
      alertOpen: false
    };
  }

  render() {
    const {
      classes
    } = this.props;
    let videoCanvas = null;

    if (this.props.videoType === "mpeg1") {
      videoCanvas = _react.default.createElement("canvas", {
        id: "videoCanvas" // onClick={this.handleClick}
        ,
        className: this.props.classes // ref={this.videoRef}

      });
    } else if (this.props.videoType === "webRTC") {
      videoCanvas = _react.default.createElement("video", {
        id: "videoCanvas" // onClick={this.handleClick}
        ,
        className: this.props.classes // ref={this.videoRef}

      });
    }

    return _react.default.createElement(_react.default.Fragment, null, videoCanvas, _react.default.createElement("canvas", {
      id: "graphicsCanvas",
      className: this.props.classes,
      ref: this.graphicsCanvasRef,
      onClick: this.handleClick,
      style: {
        position: "absolute",
        width: "73.2%",
        height: "100%"
      },
      width: "1280",
      height: "720"
    }), _react.default.createElement(_Dialog.default, {
      open: this.state.alertOpen,
      onClose: this.handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, _react.default.createElement(_DialogTitle.default, {
      id: "alert-dialog-title"
    }, "Activate Mouse Controls?"), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, {
      id: "alert-dialog-description"
    }, "Enabling this will let you control the stream with your mouse.")), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
      onClick: this.handleClose,
      color: "primary"
    }, "No"), _react.default.createElement(_Button.default, {
      onClick: this.enableMouseControls,
      variant: "contained",
      color: "primary",
      autoFocus: true
    }, "Yes"))));
  }

}

const mapStateToProps = state => {
  return {
    videoType: state.stream.info.streamSettings.videoType,
    loggedIn: state.client.loggedIn
  };
};

var _default = (0, _recompose.compose)( // withStyles(styles),
(0, _reactRedux.connect)(mapStateToProps))(LaglessCanvas);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/lagless/laglessView/LaglessView.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/stream/lagless/laglessView/LaglessView.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _LaglessCanvas = _interopRequireDefault(__webpack_require__(/*! ./LaglessCanvas.jsx */ "./src/components/stream/lagless/laglessView/LaglessCanvas.jsx"));

var _ControllerView = _interopRequireDefault(__webpack_require__(/*! ./ControllerView.jsx */ "./src/components/stream/lagless/laglessView/ControllerView.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    textAlign: "center"
  },
  canvas: {
    width: "73.2%",
    alignSelf: "center"
  },
  offlineMessage: {
    display: "flex",
    flexGrow: 1,
    fontSize: "1.5em",
    alignItems: "center",
    justifyContent: "center",
    height: "30vw" // minHeight: "550px",

  },
  fullscreen: {
    width: "100% !important",
    margin: "0",
    padding: "0",
    border: "none"
  }
});

class LaglessView extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    let laglessClasses = (0, _classnames.default)(classes.root, {
      [classes.fullscreen]: this.props.largescreen || this.props.fullscreen
    }); // let displayLagless = this.props.loggedIn && !this.props.waitlisted;
    // let displayLagless = true;

    if (!this.props.streamOnline) {
      window.inputHandler.mouse.toggle(false);
    }

    let videoClasses = (0, _classnames.default)(classes.canvas, {
      [classes.fullscreen]: this.props.largescreen || this.props.fullscreen
    });
    let controllerNumber = 0;
    let isXbox = false;
    let controllerType = isXbox ? "xbox" : "joycon";
    let displayLagless = this.props.streamOnline ? _react.default.createElement(_LaglessCanvas.default, {
      classes: videoClasses
    }) : _react.default.createElement("div", {
      className: classes.offlineMessage
    }, "This stream is offline.");
    return _react.default.createElement("div", {
      className: laglessClasses
    }, this.props.controllerView ? _react.default.createElement(_ControllerView.default, {
      overlay: this.props.mobileMode,
      controllerState: this.props.controllerStates[controllerNumber],
      type: controllerType
    }, displayLagless) : displayLagless);
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: state.client.loggedIn,
    waitlisted: state.client.waitlisted,
    controllerStates: state.stream.players.controllerStates,
    controllerView: state.settings.controllerView,
    // whether to render the joycons
    fullscreen: state.settings.fullscreen,
    largescreen: state.settings.largescreen,
    mobileMode: state.settings.mobileMode,
    streamOnline: state.stream.info.online
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(LaglessView);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/StreamInfo.jsx":
/*!*********************************************************!*\
  !*** ./src/components/stream/streamInfo/StreamInfo.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _PlayerInfo = _interopRequireDefault(__webpack_require__(/*! ./playerInfo/PlayerInfo.jsx */ "./src/components/stream/streamInfo/playerInfo/PlayerInfo.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// components:
// material ui:
// redux:
// recompose:
// jss:
const styles = theme => ({
  root: {
    gridArea: "info",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 0,
    margin: 0,
    overflowX: "hidden",
    textAlign: "center"
  }
});

class StreamInfo extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;

    if (!this.props.streamOnline) {
      return null;
    }

    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_PlayerInfo.default, null));
  }

}

const mapStateToProps = state => {
  return {
    streamOnline: state.stream.info.online
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(StreamInfo);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/PlayerInfo.jsx":
/*!********************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/PlayerInfo.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Player = _interopRequireDefault(__webpack_require__(/*! ./player/Player.jsx */ "./src/components/stream/streamInfo/playerInfo/player/Player.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowX: "hidden",
    // padding: "10px",
    flexWrap: "wrap"
  },
  [_utils.device.tablet]: {
    root: {
      flexDirection: "row" // width: "100%",
      // padding: "5px",

    }
  },
  [_utils.device.laptop]: {
    root: {// width: "24%",
      // padding: "5px",
    }
  }
};

class PlayerInfo extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "mapPlayers", () => {
      let players = [];

      for (let i = 0; i < this.props.playerCount; i++) {
        players.push(_react.default.createElement(_Player.default, {
          key: i,
          num: i
        }));
      }

      return players;
    });

    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, this.mapPlayers());
  }

}

const mapStateToProps = state => {
  return {
    playerCount: state.stream.info.streamSettings.playerCount
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(PlayerInfo);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/ControlQueue.jsx":
/*!*****************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/ControlQueue.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _Username = _interopRequireDefault(__webpack_require__(/*! shared/components/account/Username.jsx */ "./src/shared/components/account/Username.jsx"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// redux:
// components:
// material ui:
// recompose:
// jss:
const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    cursor: "pointer",
    userSelect: "none",
    width: "100%"
  },
  highlighted: {
    // backgroundColor: "#DDE263",
    backgroundColor: theme.palette.secondary.light
  }
});

class ControlQueue extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  getQueue() {
    const {
      classes
    } = this.props;
    let queue = [];
    let userids = this.props.controlQueues[this.props.num];

    if (userids.length == 0) {
      return _react.default.createElement(_ListItem.default, {
        key: "0"
      }, _react.default.createElement(_ListItemText.default, {
        primary: "The queue is empty."
      }));
    }

    for (let i = 0; i < userids.length; i++) {
      let username = this.props.accountMap[userids[i]];
      username = username ? username.username : "loading";
      let listItemClasses = (0, _classnames.default)(classes.listItem, {
        [classes.highlighted]: this.props.userid == userids[i]
      });
      queue.push(_react.default.createElement(_Username.default, {
        key: i,
        style: {
          width: "100%"
        },
        userid: userids[i]
      }, _react.default.createElement(_ListItem.default, {
        button: true,
        key: i,
        className: listItemClasses,
        userid: userids[i]
      }, _react.default.createElement(_ListItemText.default, {
        primary: username
      }))));
    }

    return queue;
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_List.default, {
      className: classes.root
    }, this.getQueue());
  }

} // ControlQueue.propTypes = {
// 	controlQueues: PropTypes.arrayOf(
// 		PropTypes.arrayOf(
// 			PropTypes.string.isRequired
// 		),
// 	).isRequired
// };


const mapStateToProps = state => {
  return {
    userid: state.client.userid,
    controlQueues: state.stream.players.controlQueues,
    accountMap: state.stream.accountMap
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(ControlQueue);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/Player.jsx":
/*!***********************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/Player.jsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _MyCheckbox = _interopRequireDefault(__webpack_require__(/*! shared/components/general/MyCheckbox.jsx */ "./src/shared/components/general/MyCheckbox.jsx"));

var _TurnTimers = _interopRequireDefault(__webpack_require__(/*! ./TurnTimers.jsx */ "./src/components/stream/streamInfo/playerInfo/player/TurnTimers.jsx"));

var _QueueButton = _interopRequireDefault(__webpack_require__(/*! ./QueueButton.jsx */ "./src/components/stream/streamInfo/playerInfo/player/QueueButton.jsx"));

var _ControlQueue = _interopRequireDefault(__webpack_require__(/*! ./ControlQueue.jsx */ "./src/components/stream/streamInfo/playerInfo/player/ControlQueue.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _settings = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");

var _players = __webpack_require__(/*! src/features/players.js */ "./src/features/players.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// components:
// material ui:
// redux:
// actions:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    width: "100%",
    padding: "5px"
  },
  [_utils.device.tablet]: {
    root: {
      width: "100%" // padding: "5px",

    }
  },
  [_utils.device.laptop]: {
    root: {
      width: "24%" // padding: "5px",

    }
  }
});

class Player extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.choosePlayer = this.choosePlayer.bind(this);
    this.state = {};
  }

  choosePlayer() {
    for (let i = 0; i < 9; i++) {
      this.props.joinLeavePlayerControlQueue({
        cNum: i,
        joinLeave: "leave"
      });
    }

    this.props.choosePlayer(this.props.num);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      elevation: 4,
      className: classes.root
    }, _react.default.createElement(_MyCheckbox.default, {
      text: `Player ${this.props.num + 1}`,
      handleChange: this.choosePlayer,
      checked: this.props.currentPlayer == this.props.num
    }), _react.default.createElement(_TurnTimers.default, {
      num: this.props.num
    }), _react.default.createElement(_QueueButton.default, {
      num: this.props.num,
      controlQueue: this.props.controlQueues[this.props.num],
      userid: this.props.userid
    }), _react.default.createElement(_ControlQueue.default, {
      num: this.props.num
    }));
  }

}

const mapStateToProps = state => {
  return {
    controlQueues: state.stream.players.controlQueues,
    userid: state.client.userid,
    currentPlayer: state.settings.currentPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    choosePlayer: index => {
      dispatch((0, _settings.updateSettings)({
        currentPlayer: index
      }));
    },
    joinLeavePlayerControlQueue: data => {
      dispatch((0, _players.joinLeavePlayerControlQueue)(data));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(Player);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/QueueButton.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/QueueButton.jsx ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _players = __webpack_require__(/*! src/features/players.js */ "./src/features/players.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    width: "100%"
  }
});

class QueueButton extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "joinLeaveQueue", () => {
      if (!this.props.userid) {
        return;
      }

      if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
        window.inputHandler.mouse.toggle(false);
        this.props.joinLeavePlayerControlQueue({
          cNum: this.props.num,
          joinLeave: "leave"
        });
      } else {
        this.props.joinLeavePlayerControlQueue({
          cNum: this.props.num,
          joinLeave: "join"
        });
      }
    });

    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    let buttonText;

    if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
      buttonText = "Leave Queue";
    } else {
      buttonText = "Join Queue";
    }

    return _react.default.createElement(_Button.default, {
      className: classes.root,
      variant: "contained",
      onClick: this.joinLeaveQueue
    }, buttonText);
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    joinLeavePlayerControlQueue: data => {
      dispatch((0, _players.joinLeavePlayerControlQueue)(data));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(QueueButton);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/TurnTimer.jsx":
/*!**************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/TurnTimer.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _LinearProgress = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// libs:
// jss:
const styles = {
  root: {
    position: "relative",
    marginBottom: "5px"
  },
  turnText: {
    width: "100%",
    position: "absolute",
    top: "0px",
    lineHeight: "24px"
  },
  forfeitText: {
    width: "100%",
    position: "absolute",
    top: "0px",
    lineHeight: "15px"
  },
  turn: {
    height: "24px",
    borderRadius: "6px"
  },
  forfeit: {
    height: "15px",
    borderRadius: "6px"
  }
};

class TurnTimer extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBarText() {
    if (this.props.name == null) {
      if (this.props.type == "turn") {
        return "No one is playing right now.";
      } else if (this.props.type == "forfeit") {
        return null;
      }
    } else {
      if (this.props.type == "turn") {
        return `${this.props.name}: ${this.props.timeLeft} seconds`;
      } else if (this.props.type == "forfeit") {
        return `${this.props.timeLeft} seconds until turn forfeit.`;
      }
    }
  }

  getStyle() {
    if (this.props.name == null) {
      return {
        width: "100%"
      };
    } else {
      return {
        width: this.props.percent + "%"
      };
    }
  }

  render() {
    const {
      classes
    } = this.props;
    let isTurn = this.props.type == "turn";
    let color = isTurn ? "primary" : "secondary";
    let override = (0, _classnames.default)({
      [classes.turn]: isTurn,
      [classes.forfeit]: !isTurn
    });
    let value = this.props.name == null ? 100 : this.props.percent;
    let textClass = (0, _classnames.default)({
      [classes.turnText]: isTurn,
      [classes.forfeitText]: !isTurn
    });
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_LinearProgress.default, {
      classes: {
        root: override
      },
      variant: "determinate",
      value: value,
      color: color
    }), _react.default.createElement("div", {
      className: textClass
    }, this.getBarText()));
  }

} // const mapStateToProps = (state) => {
// 	return {
// 		time: state.time,
// 		turnTimers: state.players.turnTimers,
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => {
// 	return {};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TurnTimer);


var _default = (0, _styles.withStyles)(styles)(TurnTimer);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/stream/streamInfo/playerInfo/player/TurnTimers.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/stream/streamInfo/playerInfo/player/TurnTimers.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _TurnTimer = _interopRequireDefault(__webpack_require__(/*! ./TurnTimer.jsx */ "./src/components/stream/streamInfo/playerInfo/player/TurnTimer.jsx"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// redux:
class TurnTimers extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: Date.now()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let n = this.props.num;
    let serverTime = this.props.time.server;
    let now = Date.now() - this.props.time.lastServerUpdate + serverTime; // let elapsedTime = now - serverTime;
    // turn:

    let turnStartTime = this.props.turnTimers[n].turnStartTime;
    let turnLength = this.props.turnTimers[n].turnLength;
    let turnTimeLeft = turnLength - (now - turnStartTime);
    let turnTimeLeftPercent = turnTimeLeft / turnLength * 100; // forfeit:

    let forfeitStartTime = this.props.turnTimers[n].forfeitStartTime;
    let forfeitLength = this.props.turnTimers[n].forfeitLength;
    let forfeitTimeLeft = forfeitLength - (now - forfeitStartTime);
    let forfeitTimeLeftPercent = forfeitTimeLeft / forfeitLength * 100;
    let username = this.props.accountMap[this.props.controlQueues[n][0]];
    username = username ? username.username : "loading";

    if (!this.props.controlQueues[n][0]) {
      username = null;
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_TurnTimer.default, {
      type: "turn",
      name: username,
      timeLeft: parseInt(turnTimeLeft / 1000),
      percent: parseInt(turnTimeLeftPercent)
    }), _react.default.createElement(_TurnTimer.default, {
      type: "forfeit",
      name: username,
      timeLeft: parseInt(forfeitTimeLeft / 1000),
      percent: parseInt(forfeitTimeLeftPercent)
    }));
  }

}

const mapStateToProps = state => {
  return {
    time: state.stream.time,
    turnTimers: state.stream.players.turnTimers,
    controlQueues: state.stream.players.controlQueues,
    accountMap: state.stream.accountMap
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TurnTimers);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/streams/StreamList.jsx":
/*!***********************************************!*\
  !*** ./src/components/streams/StreamList.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Card = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Card */ "./node_modules/@material-ui/core/esm/Card/index.js"));

var _CardActionArea = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js"));

var _CardContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js"));

var _CardMedia = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    // width: "100%",
    padding: "1%",
    // margin: "0 1%",
    display: "grid",
    justifyContent: "center",
    // gridTemplateRows: "repeat(4, 1fr)",
    // gridTemplateRows: "repeat(4, 400px)",
    // gridTemplateColumns: "repeat(2, 1fr)",
    // gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateColumns: "repeat(auto-fit, 300px)",
    // gridGap: "10px",
    gridGap: "60px 40px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerOpen: {
    marginLeft: "240px",
    width: "calc(100% - 240px)"
  },
  drawerClose: {
    width: "100%"
  },
  card: {
    width: 300,
    alignSelf: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 168
  },
  [_utils.device.tablet]: {
    root: {// gridTemplateRows: "repeat(4, 1fr)",
      // gridTemplateColumns: "repeat(3, 1fr)",
    },
    media: {// height: 160,
    }
  },
  [_utils.device.laptop]: {
    root: {// gridTemplateRows: "repeat(4, 1fr)",
      // gridTemplateColumns: "repeat(4, 1fr)",
    },
    media: {// height: 180,
    }
  }
});

const DUMMY_URL = "https://dummyimage.com/1280x720/000000/fff.png&text=No+thumbnail+specified";

class StreamList extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "renderStreams", () => {
      const {
        classes,
        streams
      } = this.props;
      let cards = []; // for (let i = 0; i < 30; i++) {
      // 	let stream = {
      // 		username: "fosse",
      // 		thumbnailURL: "https://remotegames.io/images/smo.png",
      // 		title: "Nintendo Switch",
      // 	};
      // 	streams.push(stream);
      // }

      for (let i = 0; i < streams.length; i++) {
        let stream = streams[i];

        let card = _react.default.createElement(_reactRouterDom.Link, {
          key: i,
          to: `/s/${stream.username}`
        }, _react.default.createElement(_Card.default, {
          className: classes.card,
          elevation: 5
        }, _react.default.createElement(_CardActionArea.default, {
          onClick: () => {
            this.props.history.push(`/s/${stream.username}`);
          }
        }, _react.default.createElement(_CardMedia.default, {
          className: classes.media,
          image: stream.thumbnailURL || DUMMY_URL,
          title: "Photo"
        }), _react.default.createElement(_CardContent.default, null, _react.default.createElement(_Typography.default, {
          component: "p"
        }, stream.title || "Untitled Stream"), _react.default.createElement(_Typography.default, {
          component: "p"
        }, stream.username)))));

        cards.push(card);
      }

      if (cards.length === 0) {
        return _react.default.createElement(_Paper.default, {
          elevation: 4,
          style: {
            width: 300
          }
        }, _react.default.createElement(_Typography.default, {
          component: "p"
        }, "No streams online right now."));
      }

      return cards;
    });

    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log("re-rendering streams.");
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      className: (0, _classnames.default)(classes.root, {
        [classes.drawerOpen]: this.props.drawerOpen,
        [classes.drawerClose]: !this.props.drawerOpen
      }),
      elevation: 5
    }, this.renderStreams());
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles, {
  withTheme: true
}), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(StreamList);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/streams/StreamsAppBar.jsx":
/*!**************************************************!*\
  !*** ./src/components/streams/StreamsAppBar.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _MyAppBar = _interopRequireDefault(__webpack_require__(/*! shared/components/general/MyAppBar.jsx */ "./src/shared/components/general/MyAppBar.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _InputBase = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js"));

var _colorManipulator = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");

var _Menu = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/Menu */ "./node_modules/@material-ui/icons/esm/Menu.js"));

var _Search = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/Search */ "./node_modules/@material-ui/icons/esm/Search.js"));

var _AccountCircle = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/AccountCircle */ "./node_modules/@material-ui/icons/esm/AccountCircle.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {},
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    cursor: "pointer"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(9),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
});

class StreamsAppBar extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLoginRegister", () => {
      this.props.history.push("/login");
    });

    _defineProperty(this, "handleAccount", () => {
      this.props.history.push("/account");
    });

    _defineProperty(this, "handleDownloadHostFiles", () => {
      window.open("https://remotegames.io/8099/download/", "_blank");
    });

    _defineProperty(this, "handleProjectDiscord", () => {
      window.open("https://discord.io/rgio/", "_blank");
    });

    _defineProperty(this, "handleDevDiscord", () => {
      window.open("https://discord.io/fosse/", "_blank");
    });
  }

  componentDidMount() {}

  render() {
    console.log("re-rendering streamsappbar.");
    const {
      classes
    } = this.props;

    if (this.props.hide) {
      return null;
    }

    const mobileMenu = _react.default.createElement("div", null, _react.default.createElement(_MenuItem.default, {
      onClick: this.handleAccount
    }, _react.default.createElement(_IconButton.default, {
      color: "inherit"
    }, _react.default.createElement(_AccountCircle.default, null)), _react.default.createElement("p", null, "Profile")), _react.default.createElement(_MenuItem.default, {
      onClick: this.handleDownloadHostFiles
    }, _react.default.createElement("p", null, "Download Host Files")), _react.default.createElement(_MenuItem.default, {
      onClick: this.handleProjectDiscord
    }, _react.default.createElement("p", null, "Project Discord Server")), _react.default.createElement(_MenuItem.default, {
      onClick: this.handleDevDiscord
    }, _react.default.createElement("p", null, "Dev's Discord Server")));

    let main = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_IconButton.default, {
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "Open drawer",
      onClick: this.props.handleToggleDrawer
    }, _react.default.createElement(_Menu.default, null)), _react.default.createElement(_Typography.default, {
      className: classes.title,
      variant: "h6",
      color: "inherit",
      noWrap: true,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Streams"), _react.default.createElement("div", {
      className: classes.search
    }, _react.default.createElement("div", {
      className: classes.searchIcon
    }, _react.default.createElement(_Search.default, null)), _react.default.createElement(_InputBase.default, {
      placeholder: "Search\u2026",
      classes: {
        root: classes.inputRoot,
        input: classes.inputInput
      }
    })));

    let desktop = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      className: classes.grow
    }), _react.default.createElement(_Button.default, {
      size: "small",
      color: "default",
      variant: "contained",
      onClick: this.handleDownloadHostFiles
    }, "Download Host Files"), _react.default.createElement("div", {
      style: {
        width: "10px"
      }
    }), _react.default.createElement(_Button.default, {
      size: "small",
      color: "default",
      variant: "contained",
      onClick: this.handleProjectDiscord
    }, "Project Discord"), _react.default.createElement("div", {
      style: {
        width: "10px"
      }
    }), _react.default.createElement(_Button.default, {
      size: "small",
      color: "default",
      variant: "contained",
      onClick: this.handleDevDiscord
    }, "Dev's Discord"), _react.default.createElement(_IconButton.default, {
      onClick: this.handleAccount,
      color: "inherit"
    }, _react.default.createElement(_AccountCircle.default, null)));

    let mobile = _react.default.createElement("div", null);

    if (!this.props.loggedIn) {
      mobile = desktop = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        style: {
          width: "10px"
        }
      }), _react.default.createElement(_Button.default, {
        size: "small",
        color: "default",
        variant: "contained",
        onClick: this.handleLoginRegister
      }, "Login / Register"));
    }

    return _react.default.createElement(_MyAppBar.default, {
      main: main,
      desktop: desktop,
      mobile: mobile,
      mobileMenu: mobileMenu
    });
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: state.client.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(StreamsAppBar);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/streams/StreamsDrawer.jsx":
/*!**************************************************!*\
  !*** ./src/components/streams/StreamsDrawer.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Divider = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js"));

var _Drawer = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js"));

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/List */ "./node_modules/@material-ui/core/esm/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _MoveToInbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// libs:
// jss:
const drawerWidth = 240;

const styles = theme => ({
  root: {
    padding: "1%",
    display: "grid",
    width: "100%"
  },
  [_utils.device.tablet]: {
    root: {}
  },
  [_utils.device.laptop]: {
    root: {}
  },
  // root: {
  // 	display: "flex",
  // },
  root: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#505050"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
});

class StreamsDrawer extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDrawerToggle", () => {
      this.setState(state => ({
        mobileOpen: !state.mobileOpen
      }));
    });

    this.state = {
      mobileOpen: false
    };
  }

  componentDidMount() {}

  render() {
    console.log("re-rendering streams drawer.");
    const {
      anchorEl,
      mobileMoreAnchorEl
    } = this.state;
    const {
      classes
    } = this.props;

    const drawer = _react.default.createElement("div", null, _react.default.createElement("div", {
      className: classes.toolbar
    }), _react.default.createElement(_Divider.default, null), _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, {
      button: true
    }, _react.default.createElement(_ListItemText.default, {
      primary: "Streams"
    })), _react.default.createElement(_ListItem.default, {
      button: true
    }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_MoveToInbox.default, null)), _react.default.createElement(_ListItemText.default, {
      primary: "Subscriptions"
    }))));

    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement(_Drawer.default, {
      container: this.props.container,
      variant: "persistent" // anchor="left"
      ,
      open: this.props.drawerOpen,
      onClose: this.handleDrawerToggle,
      classes: {
        paper: classes.drawerPaper
      }
    }, drawer));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(StreamsDrawer);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/streams/StreamsFooter.jsx":
/*!**************************************************!*\
  !*** ./src/components/streams/StreamsFooter.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// react-router:
// redux:
// material ui:
// components:
// recompose:
// libs:
// jss:
const styles = theme => ({
  root: {
    width: "100%",
    height: "40px",
    position: "fixed",
    bottom: 0,
    display: "flex",
    justifyContent: "space-evenly",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  [_utils.device.mobile]: {
    root: {}
  },
  [_utils.device.tablet]: {
    root: {}
  },
  [_utils.device.laptop]: {
    root: {}
  },
  drawerOpen: {
    marginLeft: "240px",
    width: "calc(100% - 240px)"
  },
  drawerClose: {
    width: "100%"
  }
});

class StreamsFooter extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    // console.log("re-rendering streamsfooter.");
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      className: (0, _classnames.default)(classes.root, {
        [classes.drawerOpen]: this.props.drawerOpen,
        [classes.drawerClose]: !this.props.drawerOpen
      }),
      elevation: 4
    }, _react.default.createElement(_Button.default, {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/about");
      }
    }, "About"), _react.default.createElement(_Button.default, {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/tos");
      }
    }, "TOS"), _react.default.createElement(_Button.default, {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/privacy");
      }
    }, "Privacy"));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(StreamsFooter);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/features/players.js":
/*!*********************************!*\
  !*** ./src/features/players.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.joinLeavePlayerControlQueue = exports.updatePlayerControllerState = exports.updatePlayerTurnLengths = exports.updatePlayerTurnStartTimes = exports.updatePlayerControlQueues = void 0;

var _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

let turnTimers = [];
let controlQueues = [];
let controllerStates = [];

for (let i = 0; i < 8; i++) {
  turnTimers.push({
    turnStartTime: 0,
    forfeitStartTime: 0,
    turnLength: 0,
    forfeitLength: 0
  });
  controlQueues.push([]);
  controllerStates.push({
    btns: 0,
    axes: [0, 0, 0, 0, 0, 0]
  });
}

const playersSlice = (0, _toolkit.createSlice)({
  name: "players",
  initialState: {
    controlQueues: controlQueues,
    turnTimers: turnTimers,
    controllerStates: controllerStates
  },
  reducers: {
    updatePlayerControlQueues(state, action) {
      state.controlQueues = action.payload.queues;
    },

    updatePlayerTurnStartTimes(state, action) {
      for (let i = 0; i < state.turnTimers.length; i++) {
        if (action.payload.turnStartTimes != null) {
          state.turnTimers[i].turnStartTime = action.payload.turnStartTimes[i];
        }

        if (action.payload.forfeitStartTimes != null) {
          state.turnTimers[i].forfeitStartTime = action.payload.forfeitStartTimes[i];
        }
      }
    },

    updatePlayerTurnLengths(state, action) {
      for (let i = 0; i < state.turnTimers.length; i++) {
        state.turnTimers[i].turnLength = action.payload.turnLengths[i];
        state.turnTimers[i].forfeitLength = action.payload.forfeitLengths[i];
      }
    },

    updatePlayerControllerState(state, action) {
      state.controllerStates[action.payload.cNum].btns = action.payload.btns;
      state.controllerStates[action.payload.cNum].axes = action.payload.axes;
    },

    joinLeavePlayerControlQueue(state, action) {}

  }
});
const {
  updatePlayerControlQueues,
  updatePlayerTurnStartTimes,
  updatePlayerTurnLengths,
  updatePlayerControllerState,
  joinLeavePlayerControlQueue
} = playersSlice.actions;
exports.joinLeavePlayerControlQueue = joinLeavePlayerControlQueue;
exports.updatePlayerControllerState = updatePlayerControllerState;
exports.updatePlayerTurnLengths = updatePlayerTurnLengths;
exports.updatePlayerTurnStartTimes = updatePlayerTurnStartTimes;
exports.updatePlayerControlQueues = updatePlayerControlQueues;
var _default = playersSlice.reducer; // import { createSlice } from "@reduxjs/toolkit";
// maybe refactor to this:
// let player = {
// 	turnTimers: {
// 		turnStartTime: 0,
// 		forfeitStartTime: 0,
// 		turnLength: 0,
// 		forfeitLength: 0,
// 	},
// 	controllerState: {
// 		btns: 0,
// 		axes: [0, 0, 0, 0, 0, 0],
// 	},
// 	controlQueue: [],
// };
// let players = [];
// for (let i = 0; i < 8; i++) {
// 	players.push(player);
// }
// const playersSlice2 = createSlice({
// 	name: "players2",
// 	initialState: players,
// 	reducers: {
// 		updatePlayerControlQueues(state, action) {
// 			state.controlQueues = action.payload.queues;
// 		},
// 		updatePlayerTurnStartTimes(state, action) {
// 			for (let i = 0; i < state.length; i++) {
// 				if (action.payload.turnStartTimes != null) {
// 					state[i].turnTimers.turnStartTime = action.payload.turnStartTimes[i];
// 				}
// 				if (action.payload.forfeitStartTimes != null) {
// 					state[i].turnTimers.forfeitStartTime = action.payload.forfeitStartTimes[i];
// 				}
// 			}
// 		},
// 		updatePlayerTurnLengths(state, action) {
// 			for (let i = 0; i < state.length; i++) {
// 				state[i].turnTimers.turnLength = action.payload.turnLengths[i];
// 				state[i].turnTimers.forfeitLength = action.payload.forfeitLengths[i];
// 			}
// 		},
// 		updatePlayerControllerState(state, action) {
// 			state[action.payload.cNum].controllerState.btns = action.payload.btns;
// 			state[action.payload.cNum].controllerState.axes = action.payload.axes;
// 		},
// 	},
// });
// export const {
// 	updatePlayerControlQueues,
// 	updatePlayerTurnStartTimes,
// 	updatePlayerTurnLengths,
// 	updatePlayerControllerState,
// } = playersSlice.actions;
// export default playersSlice.reducer;
// export const updatePlayerTurnLengths = (data) => {
// 	return {
// 		type: types.UPDATE_PLAYER_TURN_LENGTHS,
// 		payload: {
// 			turnLengths: data.turnLengths,
// 			forfeitLengths: data.forfeitLengths,
// 		},
// 	};
// };
// export const joinPlayerControlQueue = (controllerNumber) => {
// 	return {
// 		type: types.JOIN_PLAYER_CONTROL_QUEUE,
// 		payload: {
// 			controllerNumber: controllerNumber,
// 		},
// 	};
// };
// export const leavePlayerControlQueue = (controllerNumber) => {
// 	return {
// 		type: types.LEAVE_PLAYER_CONTROL_QUEUE,
// 		payload: {
// 			controllerNumber: controllerNumber,
// 		},
// 	};
// };

exports.default = _default;

/***/ }),

/***/ "./src/libs/jsmpeg/jsmpeg.wasm.js":
/*!****************************************!*\
  !*** ./src/libs/jsmpeg/jsmpeg.wasm.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WASM_BINARY_INLINED = void 0;
const WASM_BINARY_INLINED = 'AGFzbQEAAAAADQZkeWxpbmudTgQAAAABNAlgAX8Bf2ABfwBgAn9/AX9gAn9/AGAEf39/fwBgA39/fwF/YAAAYAZ/f39/f38AYAF/AX0CQwQDZW52BHNicmsAAANlbnYNX19hc3NlcnRfZmFpbAAEA2Vudg1fX21lbW9yeV9iYXNlA38AA2VudgZtZW1vcnkCAAADPTwCAQIAAwMBAAgAAAAAAAAAAQMBBwEDBAEEBAQCAQIAAwMAAAAAAAQEAgECAAIAAgAAAAABAQIDAQUFBQYH5AUfFG1wZWcxX2RlY29kZXJfY3JlYXRlAAIGbWFsbG9jADEGbWVtc2V0ADwVbXBlZzFfZGVjb2Rlcl9kZXN0cm95AAMEZnJlZQA1G21wZWcxX2RlY29kZXJfZ2V0X3dyaXRlX3B0cgAEF21wZWcxX2RlY29kZXJfZ2V0X2luZGV4AAUXbXBlZzFfZGVjb2Rlcl9zZXRfaW5kZXgABhdtcGVnMV9kZWNvZGVyX2RpZF93cml0ZQAHIW1wZWcxX2RlY29kZXJfaGFzX3NlcXVlbmNlX2hlYWRlcgAJHG1wZWcxX2RlY29kZXJfZ2V0X2ZyYW1lX3JhdGUAChxtcGVnMV9kZWNvZGVyX2dldF9jb2RlZF9zaXplAAsXbXBlZzFfZGVjb2Rlcl9nZXRfd2lkdGgADBhtcGVnMV9kZWNvZGVyX2dldF9oZWlnaHQADRdtcGVnMV9kZWNvZGVyX2dldF95X3B0cgAOGG1wZWcxX2RlY29kZXJfZ2V0X2NyX3B0cgAPGG1wZWcxX2RlY29kZXJfZ2V0X2NiX3B0cgAQFG1wZWcxX2RlY29kZXJfZGVjb2RlABESbXAyX2RlY29kZXJfY3JlYXRlAB0GbWVtY3B5ADoTbXAyX2RlY29kZXJfZGVzdHJveQAeGW1wMl9kZWNvZGVyX2dldF93cml0ZV9wdHIAHxVtcDJfZGVjb2Rlcl9nZXRfaW5kZXgAIBVtcDJfZGVjb2Rlcl9zZXRfaW5kZXgAIRVtcDJfZGVjb2Rlcl9kaWRfd3JpdGUAIhttcDJfZGVjb2Rlcl9nZXRfc2FtcGxlX3JhdGUAIyBtcDJfZGVjb2Rlcl9nZXRfbGVmdF9jaGFubmVsX3B0cgAkIW1wMl9kZWNvZGVyX2dldF9yaWdodF9jaGFubmVsX3B0cgAl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Agw2AgQLIAAoAgwiAUUNACABIAAoAgg2AgALIAAgACgCACACQQF0aiIBNgIAIAFBAXFFBEAgABA5C0EBDwsjACIAQabMAGogAEGEygBqQaEDIABBwswAahABAAsjACIAQdLKAGogAEGEygBqQfoBIABB9coAahABAAsjACIAQYbLAGogAEGEygBqQYACIABB9coAahABAAu/AgEEfwJAAkACQAJAIABBD2pBeHEiAxAAIgFBf0YNAAJAAkACQCABQQdqQXhxIgAgAUcEQCAAIAFrEAAiBEF/Rg0EIAQgASADakcNBSMAQeTJAGooAgBFBEAjAEHgyQBqKAIARQ0CDAgLIwAiAEHKzQBqIABBhMoAakHnBSAAQbvNAGoQAQALIwAiAUHgyQBqKAIAIQIgAUHkyQBqKAIAIgENASACDQYLIwBB4MkAaiAANgIADAELIAJFDQMgACABNgIECyMAQeTJAGogADYCACAAIANBAXRBAXI2AgAgACECCyACDwsjACIAQZLNAGogAEGEygBqQeUFIABBu80AahABAAsjACIAQePNAGogAEGEygBqQfQFIABBu80AahABAAsjACIAQdbNAGogAEGEygBqQfAFIABBu80AahABAAsOACAABEAgAEF4ahA2CwunBgEFfyAAIAAoAgAiAUF+cTYCAAJAAkACQAJAIAAgAUEBdmpBABAATQRAIAAoAgQhASMAQeTJAGooAgAiBCAARiIFRQRAIAAgACgCAEEBdmohAgsCQAJAIAFFDQAgASgCACIDQQFxDQAgA0EBdkF4aiIDRQ0EQRwgA0EIIANBCEsbZyIDa0EdTw0FIwBBACADa0ECdGpB3MkAaiIDKAIAIAFBCGpGBEAgAyABKAIMNgIACyABKAIIIgMEQCADIAEoAgw2AgQLIAEoAgwiAwRAIAMgASgCCDYCAAsgASABKAIAIAAoAgBBfnFqNgIAIAJFBEAjACEAIAUEQAwICyMAIgBB/cwAaiAAQYTKAGpB0gIgAEHhzABqEAEACyACIAE2AgQgAigCACIAQQFxDQEgAEEBdkF4aiIARQ0EQRwgAEEIIABBCEsbZyIAa0EdTw0FIwBBACAAa0ECdGpB3MkAaiIAKAIAIAJBCGpGBEAgACACKAIMNgIACyACKAIIIgAEQCAAIAIoAgw2AgQLIAIoAgwiAARAIAAgAigCCDYCACMAQeTJAGooAgAhBAsgASABKAIAIAIoAgBBfnFqNgIAIwAhACACIARGBEAMBwsgAiACKAIAQQF2aiABNgIEIAEQOQ8LAkAgAkUNACACKAIAIgFBAXENACABQQF2QXhqIgFFDQRBHCABQQggAUEISxtnIgFrQR1PDQUjAEEAIAFrQQJ0akHcyQBqIgEoAgAgAkEIakYEQCABIAIoAgw2AgALIAIoAggiAQRAIAEgAigCDDYCBAsgAigCDCIBBEAgASACKAIINgIAIwBB5MkAaigCACEECyAAIAAoAgAgAigCAEF+cWo2AgAjACEBIAIgBEYEfyABQeTJAGoFIAIgAigCAEEBdmpBBGoLIAA2AgALIAAhAQsgARA5DwsjACIAQejJAGogAEGEygBqQcQCIABB4cwAahABAAALAAsjACIAQdLKAGogAEGEygBqQfoBIABB9coAahABAAsjACIAQYbLAGogAEGEygBqQYACIABB9coAahABAAsgAEHkyQBqIAE2AgAgARA5C7IIAQV/AkACQAJAAkACQAJAAkAgAEUEQAJAIAFBASABGyICEDIiAQ0AAn8CQCMAQeTJAGooAgAiAEUNACAAKAIAIgFBAXENACAAIAFBAXI2AgAgAUEBdkF4aiIBRQ0IQRwgAUEIIAFBCEsbZyIBa0EdTw0JIwBBACABa0ECdGpB3MkAaiIBKAIAIABBCGpGBEAgASAAKAIMNgIACyAAKAIIIgEEQCABIAAoAgw2AgQLIAAoAgwiAQRAIAEgACgCCDYCAAsjACEAIAIQMyECIABB5MkAaigCACIBIAINARogASABKAIAQX5xNgIAQQAPCyACEDQLIgENAEEADwsgASABKAIAQQF2akEAEABLDQIgAS0AAEEBcUUNByABQQhqDwsgAEF4aiEEIAFFBEAgBBA2QQAPCyAEKAIAIgJBAXFFDQICQAJAIAJBAXYiA0F4aiABTwRADAELAkAjAEHkyQBqKAIAIgUgBEYNACADIARqIgMoAgAiBkEBcQ0AIAZBAXZBeGoiAkUNB0EcIAJBCCACQQhLG2ciAmtBHU8NCCMAQQAgAmtBAnRqQdzJAGoiAigCACADQQhqRgRAIAIgAygCDDYCAAsgAygCCCICBEAgAiADKAIMNgIECyADKAIMIgIEQCACIAMoAgg2AgALIAQgBCgCACAD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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGdldEFmdGVyKHJlZ2lvbikgPD0gc2JyaygwKQAvaG9tZS9mb3NzZS9lbXNkay91cHN0cmVhbS9lbXNjcmlwdGVuL3N5c3RlbS9saWIvZW1tYWxsb2MuY3BwAGVtbWFsbG9jX21hbGxvYwBzaXplID4gMABnZXRCaWdFbm91Z2hGcmVlTGlzdEluZGV4AGdldEZyZWVMaXN0SW5kZXgATUlOX0ZSRUVMSVNUX0lOREVYIDw9IGluZGV4ICYmIGluZGV4IDwgTUFYX0ZSRUVMSVNUX0lOREVYAHBheWxvYWRTaXplID49IHNpemUAcG9zc2libHlTcGxpdFJlbWFpbmRlcgBleHRyYSA+PSBNSU5fUkVHSU9OX1NJWkUAdG90YWxTcGxpdFNpemUgPj0gTUlOX1JFR0lPTl9TSVpFAHB0ciA9PSBnZXRBZnRlcihsYXN0UmVnaW9uKQBleHRlbmRMYXN0UmVnaW9uAGFkZFRvRnJlZUxpc3QAbWVyZ2VJbnRvRXhpc3RpbmdGcmVlUmVnaW9uAHJlZ2lvbiA9PSBsYXN0UmVnaW9uAChjaGFyKilleHRyYVB0ciA9PSAoY2hhciopcHRyICsgc2Jya1NpemUAYWxsb2NhdGVSZWdpb24AIWxhc3RSZWdpb24AIWZpcnN0UmVnaW9uAGZpcnN0UmVnaW9uAGdldFBheWxvYWQAcmVnaW9uLT5nZXRVc2VkKCkAZW1tYWxsb2NfcmVhbGxvYwA=';
exports.WASM_BINARY_INLINED = WASM_BINARY_INLINED;

/***/ }),

/***/ "./src/libs/jsmpeg/src/ajax.js":
/*!*************************************!*\
  !*** ./src/libs/jsmpeg/src/ajax.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AjaxSource = void 0;

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

exports.AjaxSource = AjaxSource;

/***/ }),

/***/ "./src/libs/jsmpeg/src/buffer.js":
/*!***************************************!*\
  !*** ./src/libs/jsmpeg/src/buffer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BitBuffer = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BitBuffer {
  constructor(bufferOrLength, mode) {
    _defineProperty(this, "resize", size => {
      let newBytes = new Uint8Array(size);

      if (this.byteLength !== 0) {
        this.byteLength = Math.min(this.byteLength, size);
        newBytes.set(this.bytes, 0, this.byteLength);
      }

      this.bytes = newBytes;
      this.index = Math.min(this.index, this.byteLength << 3);
    });

    _defineProperty(this, "evict", sizeNeeded => {
      let bytePos = this.index >> 3,
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

    _defineProperty(this, "write", buffers => {
      let isArrayOfBuffers = typeof buffers[0] === "object",
          totalLength = 0,
          available = this.bytes.length - this.byteLength; // Calculate total byte length

      if (isArrayOfBuffers) {
        let totalLength = 0;

        for (let i = 0; i < buffers.length; i++) {
          totalLength += buffers[i].byteLength;
        }
      } else {
        totalLength = buffers.byteLength;
      } // Do we need to resize or evict?


      if (totalLength > available) {
        if (this.mode === BitBuffer.MODE.EXPAND) {
          let newSize = Math.max(this.bytes.length * 2, totalLength - available);
          this.resize(newSize);
        } else {
          this.evict(totalLength);
        }
      }

      if (isArrayOfBuffers) {
        for (let i = 0; i < buffers.length; i++) {
          this.appendSingleBuffer(buffers[i]);
        }
      } else {
        this.appendSingleBuffer(buffers);
      }

      return totalLength;
    });

    _defineProperty(this, "appendSingleBuffer", buffer => {
      buffer = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
      this.bytes.set(buffer, this.byteLength);
      this.byteLength += buffer.length;
    });

    _defineProperty(this, "findNextStartCode", () => {
      for (let i = this.index + 7 >> 3; i < this.byteLength; i++) {
        if (this.bytes[i] == 0x00 && this.bytes[i + 1] == 0x00 && this.bytes[i + 2] == 0x01) {
          this.index = i + 4 << 3;
          return this.bytes[i + 3];
        }
      }

      this.index = this.byteLength << 3;
      return -1;
    });

    _defineProperty(this, "findStartCode", code => {
      let current = 0;

      while (true) {
        current = this.findNextStartCode();

        if (current === code || current === -1) {
          return current;
        }
      }

      return -1;
    });

    _defineProperty(this, "nextBytesAreStartCode", () => {
      let i = this.index + 7 >> 3;
      return i >= this.byteLength || this.bytes[i] == 0x00 && this.bytes[i + 1] == 0x00 && this.bytes[i + 2] == 0x01;
    });

    _defineProperty(this, "peek", count => {
      let offset = this.index;
      let value = 0;

      while (count) {
        let currentByte = this.bytes[offset >> 3],
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

    _defineProperty(this, "read", count => {
      let value = this.peek(count);
      this.index += count;
      return value;
    });

    _defineProperty(this, "skip", count => {
      return this.index += count;
    });

    _defineProperty(this, "rewind", count => {
      this.index = Math.max(this.index - count, 0);
    });

    _defineProperty(this, "has", count => {
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

exports.BitBuffer = BitBuffer;

_defineProperty(BitBuffer, "MODE", {
  EVICT: 1,
  EXPAND: 2
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/canvas2d.js":
/*!*****************************************!*\
  !*** ./src/libs/jsmpeg/src/canvas2d.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasRenderer = void 0;

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

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
      (0, _utils.Fill)(this.imageData.data, 255);
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

exports.CanvasRenderer = CanvasRenderer;

/***/ }),

/***/ "./src/libs/jsmpeg/src/decoder.js":
/*!****************************************!*\
  !*** ./src/libs/jsmpeg/src/decoder.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseDecoder = void 0;

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

    _defineProperty(this, "seek", time => {
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

    _defineProperty(this, "decode", () => {
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

exports.BaseDecoder = BaseDecoder;

/***/ }),

/***/ "./src/libs/jsmpeg/src/mp2-wasm.js":
/*!*****************************************!*\
  !*** ./src/libs/jsmpeg/src/mp2-wasm.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MP2WASM = void 0;

var _buffer = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");

var _decoder = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MP2WASM extends _decoder.BaseDecoder {
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
      let startTime = (0, _utils.Now)();

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
      let elapsedTime = (0, _utils.Now)() - startTime;

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
    this.bufferMode = options.streaming ? _buffer.BitBuffer.MODE.EVICT : _buffer.BitBuffer.MODE.EXPAND;
    this.sampleRate = 0;
  }

}

exports.MP2WASM = MP2WASM;

_defineProperty(MP2WASM, "SAMPLES_PER_FRAME", 1152);

/***/ }),

/***/ "./src/libs/jsmpeg/src/mp2.js":
/*!************************************!*\
  !*** ./src/libs/jsmpeg/src/mp2.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MP2 = void 0;

var _buffer = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");

var _decoder = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MP2 extends _decoder.BaseDecoder {
  constructor(options) {
    super(options);

    _defineProperty(this, "decode", () => {
      let startTime = (0, _utils.Now)();
      let pos = this.bits.index >> 3;

      if (pos >= this.bits.byteLength) {
        return false;
      }

      let decoded = this.decodeFrame(this.left, this.right);
      this.bits.index = pos + decoded << 3;

      if (!decoded) {
        return false;
      }

      if (this.destination) {
        this.destination.play(this.sampleRate, this.left, this.right);
      }

      this.advanceDecodedTime(this.left.length / this.sampleRate);
      let elapsedTime = (0, _utils.Now)() - startTime;

      if (this.onDecodeCallback) {
        this.onDecodeCallback(this, elapsedTime);
      }

      return true;
    });

    _defineProperty(this, "getCurrentTime", () => {
      let enqueuedTime = this.destination ? this.destination.enqueuedTime : 0;
      return this.decodedTime - enqueuedTime;
    });

    _defineProperty(this, "decodeFrame", (left, right) => {
      // Check for valid header: syncword OK, MPEG-Audio Layer 2
      let sync = this.bits.read(11),
          version = this.bits.read(2),
          layer = this.bits.read(2),
          hasCRC = !this.bits.read(1);

      if (sync !== MP2.FRAME_SYNC || version !== MP2.VERSION.MPEG_1 || layer !== MP2.LAYER.II) {
        return 0; // Invalid header or unsupported version
      }

      let bitrateIndex = this.bits.read(4) - 1;

      if (bitrateIndex > 13) {
        return 0; // Invalid bit rate or 'free format'
      }

      let sampleRateIndex = this.bits.read(2);
      let sampleRate = MP2.SAMPLE_RATE[sampleRateIndex];

      if (sampleRateIndex === 3) {
        return 0; // Invalid sample rate
      }

      if (version === MP2.VERSION.MPEG_2) {
        sampleRateIndex += 4;
        bitrateIndex += 14;
      }

      let padding = this.bits.read(1),
          privat = this.bits.read(1),
          mode = this.bits.read(2); // Parse the mode_extension, set up the stereo bound

      let bound = 0;

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


      let bitrate = MP2.BIT_RATE[bitrateIndex],
          // sampleRate = MP2.SAMPLE_RATE[sampleRateIndex],
      frameSize = 144000 * bitrate / sampleRate + padding | 0; // Prepare the quantizer table lookups

      let tab3 = 0;
      let sblimit = 0;

      if (version === MP2.VERSION.MPEG_2) {
        // MPEG-2 (LSR)
        tab3 = 2;
        sblimit = 30;
      } else {
        // MPEG-1
        let tab1 = mode === MP2.MODE.MONO ? 0 : 1;
        let tab2 = MP2.QUANT_LUT_STEP_1[tab1][bitrateIndex];
        tab3 = MP2.QUANT_LUT_STEP_2[tab2][sampleRateIndex];
        sblimit = tab3 & 63;
        tab3 >>= 6;
      }

      if (bound > sblimit) {
        bound = sblimit;
      } // Read the allocation information


      for (let sb = 0; sb < bound; sb++) {
        this.allocation[0][sb] = this.readAllocation(sb, tab3);
        this.allocation[1][sb] = this.readAllocation(sb, tab3);
      }

      for (let sb = bound; sb < sblimit; sb++) {
        this.allocation[0][sb] = this.allocation[1][sb] = this.readAllocation(sb, tab3);
      } // Read scale factor selector information


      let channels = mode === MP2.MODE.MONO ? 1 : 2;

      for (let sb = 0; sb < sblimit; sb++) {
        for (ch = 0; ch < channels; ch++) {
          if (this.allocation[ch][sb]) {
            this.scaleFactorInfo[ch][sb] = this.bits.read(2);
          }
        }

        if (mode === MP2.MODE.MONO) {
          this.scaleFactorInfo[1][sb] = this.scaleFactorInfo[0][sb];
        }
      } // Read scale factors


      for (let sb = 0; sb < sblimit; sb++) {
        for (let ch = 0; ch < channels; ch++) {
          if (this.allocation[ch][sb]) {
            let sf = this.scaleFactor[ch][sb];

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


      let outPos = 0;

      for (let part = 0; part < 3; part++) {
        for (let granule = 0; granule < 4; granule++) {
          // Read the samples
          for (let sb = 0; sb < bound; sb++) {
            this.readSamples(0, sb, part);
            this.readSamples(1, sb, part);
          }

          for (let sb = bound; sb < sblimit; sb++) {
            this.readSamples(0, sb, part);
            this.sample[1][sb][0] = this.sample[0][sb][0];
            this.sample[1][sb][1] = this.sample[0][sb][1];
            this.sample[1][sb][2] = this.sample[0][sb][2];
          }

          for (let sb = sblimit; sb < 32; sb++) {
            this.sample[0][sb][0] = 0;
            this.sample[0][sb][1] = 0;
            this.sample[0][sb][2] = 0;
            this.sample[1][sb][0] = 0;
            this.sample[1][sb][1] = 0;
            this.sample[1][sb][2] = 0;
          } // Synthesis loop


          for (let p = 0; p < 3; p++) {
            // Shifting step
            this.VPos = this.VPos - 64 & 1023;

            for (let ch = 0; ch < 2; ch++) {
              this.MatrixTransform(this.sample[ch], p, this.V, this.VPos); // Build U, windowing, calculate output

              (0, _utils.Fill)(this.U, 0);
              let dIndex = 512 - (this.VPos >> 1);
              let vIndex = this.VPos % 128 >> 1;

              while (vIndex < 1024) {
                for (let i = 0; i < 32; ++i) {
                  this.U[i] += this.D[dIndex++] * this.V[vIndex++];
                }

                vIndex += 128 - 32;
                dIndex += 64 - 32;
              }

              vIndex = 128 - 32 + 1024 - vIndex;
              dIndex -= 512 - 32;

              while (vIndex < 1024) {
                for (let i = 0; i < 32; ++i) {
                  this.U[i] += this.D[dIndex++] * this.V[vIndex++];
                }

                vIndex += 128 - 32;
                dIndex += 64 - 32;
              } // Output samples


              let outChannel = ch === 0 ? left : right;

              for (let j = 0; j < 32; j++) {
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

    _defineProperty(this, "readAllocation", (sb, tab3) => {
      let tab4 = MP2.QUANT_LUT_STEP_3[tab3][sb];
      let qtab = MP2.QUANT_LUT_STEP4[tab4 & 15][this.bits.read(tab4 >> 4)];
      return qtab ? MP2.QUANT_TAB[qtab - 1] : 0;
    });

    _defineProperty(this, "readSamples", (ch, sb, part) => {
      let q = this.allocation[ch][sb],
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
        let shift = sf / 3 | 0;
        sf = MP2.SCALEFACTOR_BASE[sf % 3] + (1 << shift >> 1) >> shift;
      } // Decode samples


      let adj = q.levels;

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


      let scale = 65536 / (adj + 1) | 0;
      adj = (adj + 1 >> 1) - 1;
      val = (adj - sample[0]) * scale;
      sample[0] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
      val = (adj - sample[1]) * scale;
      sample[1] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
      val = (adj - sample[2]) * scale;
      sample[2] = val * (sf >> 12) + (val * (sf & 4095) + 2048 >> 12) >> 12;
    });

    _defineProperty(this, "MatrixTransform", (s, ss, d, dp) => {
      let t01, t02, t03, t04, t05, t06, t07, t08, t09, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33;
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
    let bufferSize = options.audioBufferSize || 128 * 1024;
    let bufferMode = options.streaming ? _buffer.BitBuffer.MODE.EVICT : _buffer.BitBuffer.MODE.EXPAND;
    this.bits = new _buffer.BitBuffer(bufferSize, bufferMode);
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

    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < 32; i++) {
        this.scaleFactor[j][i] = [0, 0, 0];
        this.sample[j][i] = [0, 0, 0];
      }
    }
  }

}

exports.MP2 = MP2;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MPEG1WASM = void 0;

var _buffer = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");

var _decoder = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class MPEG1WASM extends _decoder.BaseDecoder {
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
      let startTime = (0, _utils.Now)();

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
      let elapsedTime = (0, _utils.Now)() - startTime;

      if (this.onDecodeCallback) {
        this.onDecodeCallback(this, elapsedTime);
      }

      return true;
    });

    this.onDecodeCallback = options.onVideoDecode;
    this.module = options.wasmModule;
    this.bufferSize = options.videoBufferSize || 512 * 1024;
    this.bufferMode = options.streaming ? _buffer.BitBuffer.MODE.EVICT : _buffer.BitBuffer.MODE.EXPAND;
    this.decodeFirstFrame = options.decodeFirstFrame !== false;
    this.hasSequenceHeader = false;
  } // MPEG1WASM.prototype = Object.create(JSMpeg.Decoder.Base.prototype);
  // MPEG1WASM.prototype.constructor = MPEG1WASM;


}

exports.MPEG1WASM = MPEG1WASM;

/***/ }),

/***/ "./src/libs/jsmpeg/src/mpeg1.js":
/*!**************************************!*\
  !*** ./src/libs/jsmpeg/src/mpeg1.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MPEG1 = void 0;

var _buffer = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");

var _decoder = __webpack_require__(/*! ./decoder.js */ "./src/libs/jsmpeg/src/decoder.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// window.doneDecoding = false;
// function skipCount(b) {
// 	b.skipCount = 1;
// 	setTimeout(skipCount, window.interval, b);
// }
class MPEG1 extends _decoder.BaseDecoder {
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
      let startTime = (0, _utils.Now)();

      if (!this.hasSequenceHeader) {
        return false;
      }

      if (this.bits.findStartCode(MPEG1.START.PICTURE) === -1) {
        // let bufferedBytes = this.bits.byteLength - (this.bits.index >> 3);
        return false;
      }

      this.decodePicture();
      this.advanceDecodedTime(1 / this.frameRate);
      let elapsedTime = (0, _utils.Now)() - startTime;

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
          (0, _utils.Fill)(this.blockData, 0);
        }
      } else {
        // Add data to the predicted macroblock
        if (n === 1) {
          this.AddValueToDestination(this.blockData[0] + 128 >> 8, destArray, destIndex, scan);
          this.blockData[0] = 0;
        } else {
          this.IDCT(this.blockData);
          this.AddBlockToDestination(this.blockData, destArray, destIndex, scan);
          (0, _utils.Fill)(this.blockData, 0);
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
    let bufferMode = options.streaming ? _buffer.BitBuffer.MODE.EVICT : _buffer.BitBuffer.MODE.EXPAND;
    this.bits = new _buffer.BitBuffer(bufferSize, bufferMode);
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

exports.MPEG1 = MPEG1;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var _websocket = __webpack_require__(/*! ./websocket.js */ "./src/libs/jsmpeg/src/websocket.js");

var _mpeg = __webpack_require__(/*! ./mpeg1.js */ "./src/libs/jsmpeg/src/mpeg1.js");

var _mpeg1Wasm = __webpack_require__(/*! ./mpeg1-wasm.js */ "./src/libs/jsmpeg/src/mpeg1-wasm.js");

var _mp = __webpack_require__(/*! ./mp2.js */ "./src/libs/jsmpeg/src/mp2.js");

var _mp2Wasm = __webpack_require__(/*! ./mp2-wasm.js */ "./src/libs/jsmpeg/src/mp2-wasm.js");

var _webgl = __webpack_require__(/*! ./webgl.js */ "./src/libs/jsmpeg/src/webgl.js");

var _canvas2d = __webpack_require__(/*! ./canvas2d.js */ "./src/libs/jsmpeg/src/canvas2d.js");

var _webaudio = __webpack_require__(/*! ./webaudio.js */ "./src/libs/jsmpeg/src/webaudio.js");

var _ts = __webpack_require__(/*! ./ts.js */ "./src/libs/jsmpeg/src/ts.js");

var _wasmModule = __webpack_require__(/*! ./wasm-module.js */ "./src/libs/jsmpeg/src/wasm-module.js");

var _jsmpegWasm = __webpack_require__(/*! ../jsmpeg.wasm.js */ "./src/libs/jsmpeg/jsmpeg.wasm.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      this.startTime = (0, _utils.Now)() - time;
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
        this.startTime = (0, _utils.Now)() - this.currentTime;

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
        let targetTime = (0, _utils.Now)() - this.startTime + this.video.startTime,
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
      this.source = new _websocket.SIOSource(url, options);
      options.streaming = true;
    } else if (options.progressive !== false) {// this.source = new AjaxProgressiveSource(url, options);
      // options.streaming = false;
    } else {// this.source = new AjaxSource(url, options);
        // options.streaming = false;
      }

    this.maxAudioLag = options.maxAudioLag || 0.25;
    this.loop = options.loop !== false;
    this.autoplay = !!options.autoplay || options.streaming;
    this.demuxer = new _ts.TS(options); // this.demuxer = new TS2(options);

    this.source.connect(this.demuxer);

    if (!options.disableWebAssembly && _wasmModule.WASM.IsSupported()) {
      this.wasmModule = _wasmModule.WASM.GetModule();
      options.wasmModule = this.wasmModule;
    }

    if (options.video !== false) {
      this.video = options.wasmModule ? new _mpeg1Wasm.MPEG1WASM(options) : new _mpeg.MPEG1(options);
      this.renderer = !options.disableGl && _webgl.WebGLRenderer.IsSupported() ? new _webgl.WebGLRenderer(options) : new _canvas2d.CanvasRenderer(options);
      this.demuxer.connect(_ts.TS.STREAM.VIDEO_1, this.video);
      this.video.connect(this.renderer);
    }

    if (options.audio !== false && _webaudio.WebAudioOut.IsSupported()) {
      this.audio = options.wasmModule ? new _mp2Wasm.MP2WASM(options) : new _mp.MP2(options);
      this.audioOut = new _webaudio.WebAudioOut(options);
      this.demuxer.connect(_ts.TS.STREAM.AUDIO_1, this.audio);
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
        let wasm = (0, _utils.Base64ToArrayBuffer)(_jsmpegWasm.WASM_BINARY_INLINED);
        this.wasmModule.loadFromBuffer(wasm, this.startLoading.bind(this));
      } else {}
    } else {
      this.startLoading();
    }
  }

}

exports.Player = Player;

/***/ }),

/***/ "./src/libs/jsmpeg/src/ts.js":
/*!***********************************!*\
  !*** ./src/libs/jsmpeg/src/ts.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TS = void 0;

var _buffer = __webpack_require__(/*! ./buffer.js */ "./src/libs/jsmpeg/src/buffer.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class TS {
  constructor(options) {
    _defineProperty(this, "connect", (streamId, destination) => {
      this.pesPacketInfo[streamId] = {
        destination: destination,
        currentLength: 0,
        totalLength: 0,
        pts: 0,
        buffers: []
      };
    });

    _defineProperty(this, "write", buffer => {
      if (this.leftoverBytes) {
        let totalLength = buffer.byteLength + this.leftoverBytes.byteLength;
        this.bits = new _buffer.BitBuffer(totalLength);
        this.bits.write([this.leftoverBytes, buffer]);
      } else {
        this.bits = new _buffer.BitBuffer(buffer);
      }

      while (this.bits.has(188 << 3) && this.parsePacket()) {}

      let leftoverCount = this.bits.byteLength - (this.bits.index >> 3);
      this.leftoverBytes = leftoverCount > 0 ? this.bits.bytes.subarray(this.bits.index >> 3) : null;
    });

    _defineProperty(this, "parsePacket", () => {
      // Check if we're in sync with packet boundaries; attempt to resync if not.
      if (this.bits.read(8) !== 0x47) {
        if (!this.resync()) {
          // Couldn't resync; maybe next time...
          return false;
        }
      }

      let end = (this.bits.index >> 3) + 187;
      let transportError = this.bits.read(1),
          payloadStart = this.bits.read(1),
          transportPriority = this.bits.read(1),
          pid = this.bits.read(13),
          transportScrambling = this.bits.read(2),
          adaptationField = this.bits.read(2),
          continuityCounter = this.bits.read(4); // If this is the start of a new payload; signal the end of the previous
      // frame, if we didn't do so already.

      let streamId = this.pidsToStreamIds[pid];

      if (payloadStart && streamId) {
        let pi = this.pesPacketInfo[streamId];

        if (pi && pi.currentLength) {
          this.packetComplete(pi);
        }
      } // Extract current payload


      if (adaptationField & 0x1) {
        if (adaptationField & 0x2) {
          let adaptationFieldLength = this.bits.read(8);
          this.bits.skip(adaptationFieldLength << 3);
        }

        if (payloadStart && this.bits.nextBytesAreStartCode()) {
          this.bits.skip(24);
          streamId = this.bits.read(8);
          this.pidsToStreamIds[pid] = streamId;
          let packetLength = this.bits.read(16);
          this.bits.skip(8);
          let ptsDtsFlag = this.bits.read(2);
          this.bits.skip(6);
          let headerLength = this.bits.read(8);
          let payloadBeginIndex = this.bits.index + (headerLength << 3);
          let pi = this.pesPacketInfo[streamId];

          if (pi) {
            let pts = 0;

            if (ptsDtsFlag & 0x2) {
              // The Presentation Timestamp is encoded as 33(!) bit
              // integer, but has a "marker bit" inserted at weird places
              // in between, making the whole thing 5 bytes in size.
              // You can't make this shit up...
              this.bits.skip(4);
              let p32_30 = this.bits.read(3);
              this.bits.skip(1);
              let p29_15 = this.bits.read(15);
              this.bits.skip(1);
              let p14_0 = this.bits.read(15);
              this.bits.skip(1); // Can't use bit shifts here; we need 33 bits of precision,
              // so we're using JavaScript's double number type. Also
              // divide by the 90khz clock to get the pts in seconds.

              pts = (p32_30 * 1073741824 + p29_15 * 32768 + p14_0) / 90000;
              this.currentTime = pts;

              if (this.startTime === -1) {
                this.startTime = pts;
              }
            }

            let payloadLength = packetLength ? packetLength - headerLength - 3 : 0;
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
          let pi = this.pesPacketInfo[streamId];

          if (pi) {
            let start = this.bits.index >> 3;
            let complete = this.packetAddData(pi, start, end);
            let hasPadding = !payloadStart && adaptationField & 0x2;

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

    _defineProperty(this, "packetStart", (pi, pts, payloadLength) => {
      pi.totalLength = payloadLength;
      pi.currentLength = 0;
      pi.pts = pts;
    });

    _defineProperty(this, "packetAddData", (pi, start, end) => {
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

exports.TS = TS;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Now = Now;
exports.CreateVideoElements = CreateVideoElements;
exports.Fill = Fill;
exports.Base64ToArrayBuffer = Base64ToArrayBuffer;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WASM = void 0;

var _ajax = __webpack_require__(/*! ./ajax.js */ "./src/libs/jsmpeg/src/ajax.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WASM {
  constructor() {
    _defineProperty(this, "write", function (buffer) {
      this.loadFromBuffer(buffer, this.onInitCallback);
    });

    _defineProperty(this, "loadFromFile", function (url, callback) {
      this.onInitCallback = callback;
      var ajax = new _ajax.AjaxSource(url, {});
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

exports.WASM = WASM;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebAudioOut = void 0;

var _utils = __webpack_require__(/*! ./utils.js */ "./src/libs/jsmpeg/src/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class WebAudioOut {
  constructor(options) {
    _defineProperty(this, "destroy", () => {
      clearTimeout(this.unlockTimer);
      this.gain.disconnect();
      this.context._connections--;

      if (this.context._connections === 0) {
        this.context.close();
        WebAudioOut.CachedContext = null;
      }
    });

    _defineProperty(this, "play", (sampleRate, left, right) => {
      if (!this.enabled) {
        return;
      } // If the context is not unlocked yet, we simply advance the start time
      // to "fake" actually playing audio. This will keep the video in sync.


      if (!this.unlocked) {
        let ts = (0, _utils.Now)();

        if (this.wallclockStartTime < ts) {
          this.wallclockStartTime = ts;
        }

        this.wallclockStartTime += left.length / sampleRate;
        return;
      }

      this.gain.gain.value = this.volume;
      let buffer = this.context.createBuffer(2, left.length, sampleRate);
      buffer.getChannelData(0).set(left);
      buffer.getChannelData(1).set(right);
      let source = this.context.createBufferSource();
      source.buffer = buffer;
      source.connect(this.destination);
      let now = this.context.currentTime;
      let duration = buffer.duration;

      if (this.startTime < now) {
        this.startTime = now;
        this.wallclockStartTime = (0, _utils.Now)();
      }

      source.start(this.startTime);
      this.startTime += duration;
      this.wallclockStartTime += duration;
    });

    _defineProperty(this, "stop", () => {
      // Meh; there seems to be no simple way to get a list of currently
      // active source nodes from the Audio Context, and maintaining this
      // list ourselfs would be a pain, so we just set the gain to 0
      // to cut off all enqueued audio instantly.
      this.gain.gain.value = 0;
    });

    _defineProperty(this, "getEnqueuedTime", () => {
      // The AudioContext.currentTime is only updated every so often, so if we
      // want to get exact timing, we need to rely on the system time.
      return Math.max(this.wallclockStartTime - (0, _utils.Now)(), 0);
    });

    _defineProperty(this, "resetEnqueuedTime", () => {
      this.startTime = this.context.currentTime;
      this.wallclockStartTime = (0, _utils.Now)();
    });

    _defineProperty(this, "unlock", callback => {
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
      source.start(0); // setTimeout(this.checkIfUnlocked.bind(this, source, 0), 0);

      this.unlockTimer = setTimeout(this.checkIfUnlocked, 0, source, 0);
    });

    _defineProperty(this, "checkIfUnlocked", (source, attempt) => {
      if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
        this.unlocked = true;

        if (this.unlockCallback) {
          this.unlockCallback();
          this.unlockCallback = null;
        }
      } else if (attempt < 10) {
        // Jeez, what a shit show. Thanks iOS!
        // setTimeout(this.checkIfUnlocked.bind(this, source, attempt + 1), 100);
        this.unlockTimer = setTimeout(this.checkIfUnlocked, 100, source, attempt + 1);
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
    this.unlockTimer = null;
    Object.defineProperty(this, "enqueuedTime", {
      get: this.getEnqueuedTime
    });
  }

}

exports.WebAudioOut = WebAudioOut;

_defineProperty(WebAudioOut, "NeedsUnlocking", () => {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
});

_defineProperty(WebAudioOut, "IsSupported", () => {
  return window.AudioContext || window.webkitAudioContext;
});

/***/ }),

/***/ "./src/libs/jsmpeg/src/webgl.js":
/*!**************************************!*\
  !*** ./src/libs/jsmpeg/src/webgl.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebGLRenderer = void 0;

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

exports.WebGLRenderer = WebGLRenderer;

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIOSource = exports.WSSource = void 0;

var _socket = _interopRequireDefault(__webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.WSSource = WSSource;

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
        this.socket = (0, _socket.default)(this.url, {
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

exports.SIOSource = SIOSource;

/***/ }),

/***/ "./src/libs/lagless/lagless2.js":
/*!**************************************!*\
  !*** ./src/libs/lagless/lagless2.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _player = __webpack_require__(/*! libs/jsmpeg/src/player.js */ "./src/libs/jsmpeg/src/player.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      this.player = new _player.Player(this.options.url, {
        canvas: this.videoCanvas,
        videoBufferSize: this.options.videoBufferSize,
        audioBufferSize: this.options.audioBufferSize,
        maxAudioLag: this.options.maxAudioLag,
        onVideoDecode: onVideoDecode,
        audio: !!this.options.audio,
        video: !!this.options.video,
        path: this.options.path
      });
    });

    _defineProperty(this, "restart", (videoCanvas, graphicsCanvas) => {
      if (!this.videoCanvas) {
        this.resume(videoCanvas, graphicsCanvas);
        return;
      }

      this.player.video.destination.canvas = videoCanvas;
      this.graphicsCanvas = graphicsCanvas;
      this.context = this.graphicsCanvas.getContext("2d");
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
      maxAudioLag: 0.25,
      ...options
    };
    this.times = [];
    this.fps = 0;
  }

}

exports.default = Lagless2;
module.exports = exports.default;

/***/ }),

/***/ "./src/libs/lagless/lagless4.js":
/*!**************************************!*\
  !*** ./src/libs/lagless/lagless4.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _simplePeer = _interopRequireDefault(__webpack_require__(/*! simple-peer */ "./node_modules/simple-peer/index.js"));

var _socket = _interopRequireDefault(__webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Lagless4 {
  constructor(options) {
    _defineProperty(this, "run", () => {
      this.videoConnection = (0, _socket.default)(this.options.url, {
        path: this.options.path,
        transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"]
      });
      this.peer = new _simplePeer.default({
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

exports.default = Lagless4;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _index = _interopRequireDefault(__webpack_require__(/*! ./stream/index.js */ "./src/reducers/stream/index.js"));

var _index2 = _interopRequireDefault(__webpack_require__(/*! ./streams/index.js */ "./src/reducers/streams/index.js"));

var _settings = _interopRequireDefault(__webpack_require__(/*! ./settings.js */ "./src/reducers/settings.js"));

var _client = _interopRequireDefault(__webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js"));

var _alert = _interopRequireDefault(__webpack_require__(/*! shared/features/alert.js */ "./src/shared/features/alert.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const rootReducer = (0, _redux.combineReducers)({
  stream: _index.default,
  streams: _index2.default,
  client: _client.default,
  settings: _settings.default,
  alert: _alert.default,
  form: _reduxForm.reducer
});
var _default = rootReducer;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/settings.js":
/*!**********************************!*\
  !*** ./src/reducers/settings.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

var _default = settings;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/stream/accountMap.js":
/*!*******************************************!*\
  !*** ./src/reducers/stream/accountMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const accountMap = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_ACCOUNT_MAP":
      return action.payload.map;

    default:
      return state;
  }
};

var _default = accountMap;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/stream/index.js":
/*!**************************************!*\
  !*** ./src/reducers/stream/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _chat = _interopRequireDefault(__webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js"));

var _players = _interopRequireDefault(__webpack_require__(/*! src/features/players.js */ "./src/features/players.js"));

var _time = _interopRequireDefault(__webpack_require__(/*! shared/features/time.js */ "./src/shared/features/time.js"));

var _accountMap = _interopRequireDefault(__webpack_require__(/*! ./accountMap.js */ "./src/reducers/stream/accountMap.js"));

var _waitlist = _interopRequireDefault(__webpack_require__(/*! ./waitlist.js */ "./src/reducers/stream/waitlist.js"));

var _info = _interopRequireDefault(__webpack_require__(/*! ./info.js */ "./src/reducers/stream/info.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import players from "./players.js";
// import time from "./time.js";
const streamReducer = (0, _redux.combineReducers)({
  chat: _chat.default,
  players: _players.default,
  time: _time.default,
  accountMap: _accountMap.default,
  waitlist: _waitlist.default,
  info: _info.default
});
var _default = streamReducer;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/stream/info.js":
/*!*************************************!*\
  !*** ./src/reducers/stream/info.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const info = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_STREAM_INFO":
      return { ...state,
        ...action.payload.data
      };

    default:
      return state;
  }
};

var _default = info;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/stream/waitlist.js":
/*!*****************************************!*\
  !*** ./src/reducers/stream/waitlist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const waitlist = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_WAITLIST":
      return action.payload.waitlist;

    default:
      return state;
  }
};

var _default = waitlist;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/streams/index.js":
/*!***************************************!*\
  !*** ./src/reducers/streams/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _streamList = _interopRequireDefault(__webpack_require__(/*! ./streamList.js */ "./src/reducers/streams/streamList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const streamsReducer = (0, _redux.combineReducers)({
  streamList: _streamList.default
});
var _default = streamsReducer;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/reducers/streams/streamList.js":
/*!********************************************!*\
  !*** ./src/reducers/streams/streamList.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const streamList = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_STREAMS":
      return data.payload.streams;

    default:
      return state;
  }
};

var _default = streamList;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sagas/account/index.js":
/*!************************************!*\
  !*** ./src/sagas/account/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _client = _interopRequireDefault(__webpack_require__(/*! shared/sagas/client.js */ "./src/shared/sagas/client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function* (params) {
  let list = [];
  list = list.concat((0, _client.default)(params)); // yield to entire list:

  yield (0, _effects.all)(list);
};

var _default = handleActions;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sagas/stream/index.js":
/*!***********************************!*\
  !*** ./src/sagas/stream/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _chat = _interopRequireDefault(__webpack_require__(/*! shared/sagas/chat.js */ "./src/shared/sagas/chat.js"));

var _players = _interopRequireDefault(__webpack_require__(/*! ./players.js */ "./src/sagas/stream/players.js"));

var _client = _interopRequireDefault(__webpack_require__(/*! shared/sagas/client.js */ "./src/shared/sagas/client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combine sagas?:
// handles any outgoing actions w/ access to socket.io:
const handleActions = function* (params) {
  let list = [];
  list = list.concat((0, _chat.default)(params));
  list = list.concat((0, _players.default)(params));
  list = list.concat((0, _client.default)(params)); // yield to entire list:

  yield (0, _effects.all)(list);
};

var _default = handleActions;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sagas/stream/players.js":
/*!*************************************!*\
  !*** ./src/sagas/stream/players.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _players = __webpack_require__(/*! src/features/players.js */ "./src/features/players.js");

const handlePlayersActions = params => {
  let list = [];
  list.push((0, _effects.takeEvery)(_players.joinLeavePlayerControlQueue.type, action => {
    if (action.payload.joinLeave === "join") {
      params.socket.emit("joinQueue", action.payload.cNum);
    } else {
      params.socket.emit("leaveQueue", action.payload.cNum);
    }
  }));
  return list;
};

var _default = handlePlayersActions;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/account/ConnectAccounts.jsx":
/*!***********************************************************!*\
  !*** ./src/shared/components/account/ConnectAccounts.jsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));

var _Link = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Link */ "./node_modules/@material-ui/core/esm/Link/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// recompose:
// jss:
const styles = theme => ({
  root: {
    width: "100%",
    minHeight: "220px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // flex: "1",
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  connectWithButton: {
    display: "flex"
  },
  twitchLogo: {
    width: "60px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  googleLogo: {
    width: "80px"
  },
  youtubeLogo: {
    width: "80px",
    marginLeft: "10px"
  },
  discordLogo: {
    width: "80px",
    marginLeft: "4px"
  }
});

class ConnectAccounts extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      TOSAgreed: false
    };
    this.agreeTOS = this.agreeTOS.bind(this);
  }

  agreeTOS(event) {
    this.setState({
      TOSAgreed: event.target.checked
    });
  }

  connectAccountOrLogin(type) {
    if (window.banned) {
      return;
    }

    let url = window.location.origin + "/8099/auth/" + type + "/";

    if (this.props.authToken != null) {
      url += "?authToken=" + this.props.authToken;
    }

    window.location.href = url;
  }

  render() {
    const {
      classes,
      showTOS
    } = this.props;
    let canDelete = this.props.connectedAccounts.length > 1 || this.props.validUsernames.length > 1;
    return _react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 0
    }, showTOS && _react.default.createElement("div", null, _react.default.createElement(_Checkbox.default, {
      onChange: this.agreeTOS
    }), _react.default.createElement("span", null, "I have read and agree to the "), _react.default.createElement(_Link.default, {
      href: "/tos"
    }, "Terms and Conditions")), _react.default.createElement("div", {
      className: classes.connectWithButton
    }, _react.default.createElement(_Button.default, {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("twitch");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, _react.default.createElement("span", null, "Connect with"), _react.default.createElement("img", {
      className: classes.twitchLogo,
      src: "/images/Twitch_Purple_RGB.png"
    })), this.props.connectedAccounts.includes("twitch") && canDelete && _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("twitch");
      }
    }, "X")), _react.default.createElement("div", {
      className: classes.connectWithButton
    }, _react.default.createElement(_Button.default, {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("youtube");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, _react.default.createElement("span", null, "Connect with"), _react.default.createElement("img", {
      className: classes.youtubeLogo,
      src: "/images/yt_logo_rgb_light.png"
    })), this.props.connectedAccounts.includes("youtube") && canDelete && _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("youtube");
      }
    }, "X")), _react.default.createElement("div", {
      className: classes.connectWithButton
    }, _react.default.createElement(_Button.default, {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("google");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, _react.default.createElement("span", {
      id: "connectWithGoogleText"
    }, "Connect with Google")), this.props.connectedAccounts.includes("google") && canDelete && _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("google");
      }
    }, "X")), _react.default.createElement("div", {
      className: classes.connectWithButton
    }, _react.default.createElement(_Button.default, {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("discord");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, _react.default.createElement("span", null, "Connect with"), _react.default.createElement("img", {
      className: classes.discordLogo,
      src: "/images/discord_logo.png"
    })), this.props.connectedAccounts.includes("discord") && canDelete && _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("discord");
      }
    }, "X")));
  }

}

const mapStateToProps = state => {
  return {
    authToken: state.client.authToken,
    connectedAccounts: state.client.connectedAccounts,
    validUsernames: state.client.validUsernames
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(ConnectAccounts);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/account/PopoverMenu.jsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/account/PopoverMenu.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Popover = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react:
const PopoverMenu = props => _react.default.createElement(_Popover.default, {
  open: props.open,
  anchorEl: props.anchorEl,
  onClose: props.onClose,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  }
}, _react.default.createElement(_Paper.default, {
  elevation: 4,
  style: {
    padding: "10px"
  }
}, _react.default.createElement(_Button.default, {
  variant: "contained",
  color: "primary"
}, "View Profile"), _react.default.createElement(_Button.default, {
  variant: "contained",
  color: "secondary"
}, "Ban"), _react.default.createElement(_Button.default, {
  variant: "contained",
  color: "primary"
}, "Kick from Queue")));

var _default = PopoverMenu;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/account/Username.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/account/Username.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _PopoverMenu = _interopRequireDefault(__webpack_require__(/*! shared/components/account/PopoverMenu.jsx */ "./src/shared/components/account/PopoverMenu.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// components:
// material ui:
// redux:
// recompose:
// jss:
const styles = theme => ({
  root: {}
});

class Username extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };
    this.ref = _react.default.createRef();
    this.handleOpenPopover = this.handleOpenPopover.bind(this);
    this.handleClosePopover = this.handleClosePopover.bind(this);
  }

  handleOpenPopover() {
    this.setState({
      popoverOpen: true
    });
  }

  handleClosePopover() {
    this.setState({
      popoverOpen: false
    });
  }

  render() {
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
      style: this.props.style,
      onClick: this.handleOpenPopover,
      ref: ref => {
        this.ref = ref;
      }
    }, this.props.children), _react.default.createElement(_PopoverMenu.default, {
      open: this.state.popoverOpen,
      onClose: this.handleClosePopover,
      anchorEl: this.ref
    }));
  }

}

const mapStateToProps = state => {
  return {};
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(Username);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/account/UsernameDropdown.jsx":
/*!************************************************************!*\
  !*** ./src/shared/components/account/UsernameDropdown.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));

var _OutlinedInput = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js"));

var _FilledInput = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// import InputLabel from "@material-ui/core/InputLabel";
// redux:
// recompose:
// jss:
const styles = theme => ({
  root: {
    alignSelf: "center",
    background: "transparent"
  }
});

class UsernameDropdown extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {}

  getUsernameList() {
    let usernames = [];

    for (let i = 0; i < this.props.validUsernames.length; i++) {
      usernames.push(_react.default.createElement(_MenuItem.default, {
        key: i,
        value: i
      }, this.props.validUsernames[i], "\xA0\xA0"));
    }

    if (this.props.validUsernames.length == 0) {
      return _react.default.createElement(_MenuItem.default, {
        key: 0,
        value: 0
      }, "Not signed in.");
    }

    return usernames;
  }

  render() {
    let usernameIndex = this.props.validUsernames.indexOf(this.props.username);

    if (usernameIndex == -1) {
      usernameIndex = 0;
    }

    return _react.default.createElement(_Select.default, {
      value: usernameIndex,
      onChange: this.props.handleChange,
      input: _react.default.createElement(_OutlinedInput.default, {
        labelWidth: 0
      })
    }, this.getUsernameList());
  }

}

const mapStateToProps = state => {
  return {
    username: state.client.username,
    validUsernames: state.client.validUsernames
  };
};

const mapDispatchToProps = dispatch => {
  return {// updateSettings: (settings) => {
    // 	dispatch(updateSettings(settings))
    // },
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(UsernameDropdown);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/chat/Chat.jsx":
/*!*********************************************!*\
  !*** ./src/shared/components/chat/Chat.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _MessageList = _interopRequireDefault(__webpack_require__(/*! ./MessageList.jsx */ "./src/shared/components/chat/MessageList.jsx"));

var _MemberList = _interopRequireDefault(__webpack_require__(/*! ./MemberList.jsx */ "./src/shared/components/chat/MemberList.jsx"));

var _SendMessageForm = _interopRequireDefault(__webpack_require__(/*! ./SendMessageForm.jsx */ "./src/shared/components/chat/SendMessageForm.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js"));

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    gridArea: "chat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // flex: "1",
    padding: "5px",
    height: "300px",
    // new:
    position: "relative"
  },
  [_utils.device.tablet]: {
    root: {
      height: "unset"
    }
  },
  [_utils.device.laptop]: {
    root: {// position: "",
      // width: "100%",
      // padding: "5px",
    }
  }
}); // @withStyles(styles)


class Chat extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeTab", (event, value) => {
      console.log(value);
      this.setState({
        tab: value
      });
    });

    this.state = {
      tab: 0
    };
  }

  render() {
    const {
      classes
    } = this.props;

    if (this.props.hide) {
      return null;
    }

    return _react.default.createElement(_Paper.default, {
      id: "chat",
      className: classes.root
    }, _react.default.createElement(_Tabs.default, {
      value: this.state.tab,
      onChange: this.handleChangeTab,
      indicatorColor: "primary",
      centered: true,
      variant: "fullWidth"
    }, _react.default.createElement(_Tab.default, {
      label: "Chat"
    }), _react.default.createElement(_Tab.default, {
      label: "Members"
    })), _react.default.createElement("div", {
      hidden: this.state.tab !== 0
    }, _react.default.createElement(_MessageList.default, null), _react.default.createElement(_SendMessageForm.default, null)), _react.default.createElement("div", {
      hidden: this.state.tab !== 1
    }, _react.default.createElement(_MemberList.default, null)));
  }

}

var _default = (0, _styles.withStyles)(styles)(Chat);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/chat/MemberList.jsx":
/*!***************************************************!*\
  !*** ./src/shared/components/chat/MemberList.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Close = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _chat = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    overflowY: "auto",
    // marginBottom: "15px",
    boxShadow: "none",
    position: "absolute",
    top: 64,
    left: 0,
    bottom: 90,
    right: 0
  }
});

class MemberList extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", event => {});

    this.messagesEnd = null;
    this.rootRef = _react.default.createRef();
    this.shouldScroll = false;
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 4
    }, "aaaaaaaaaaaaaaa");
  }

}

const mapStateToProps = state => {
  return {
    messages: state.stream.chat.messages,
    accountMap: state.stream.accountMap,
    isMod: state.client.roles.mod,
    isBanned: state.client.isBanned // lastMessage: state.stream.chat.messages[state.stream.chat.messages.length - 1],

  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: text => {
      dispatch((0, _chat.sendMessage)(text));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(MemberList);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/chat/Message.jsx":
/*!************************************************!*\
  !*** ./src/shared/components/chat/Message.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLinkify = _interopRequireDefault(__webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js"));

var _Badge = _interopRequireDefault(__webpack_require__(/*! shared/components/icons/Badge.jsx */ "./src/shared/components/icons/Badge.jsx"));

var _Username = _interopRequireDefault(__webpack_require__(/*! shared/components/account/Username.jsx */ "./src/shared/components/account/Username.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// components:
// material ui:
// redux:
// recompose:
// libs:
const styles = props => ({
  root: {
    // display: "flex",
    flexWrap: "wrap",
    backgroundColor: props.isBanned ? "#d34c4ca4" : null,
    wordBreak: "break-word",
    margin: "5px 5px",
    padding: "5px 10px",
    fontSize: "14px !important",
    // color: theme.palette.primary.contrastText,
    borderRadius: "5px"
  },
  links: {
    // todo: use primary / secondary based on which it should be:
    // color: theme.palette.primary.contrastText,
    // color: "#1a0dab",
    color: "#0000ee"
  },
  user: {
    display: "inline-flex",
    margin: "0px 2px",
    padding: "2px 5px",
    cursor: "pointer"
  }
});

function pad(t) {
  let s = "" + t;

  while (s.length < 2) {
    s = "0" + s;
  }

  return s;
}

function getTimeStamp(t) {
  let time = new Date(t);
  let hours = time.getHours();
  hours = hours > 12 ? hours - 12 : hours;
  let s = hours + ":" + pad(time.getMinutes()) + " ";
  return s;
}

function ping(text, time) {} // new Noty({
// 	theme: "mint",
// 	type: "warning",
// 	text: text,
// 	timeout: time,
// 	sounds: {
// 		volume: 0.5,
// 		sources: ["https://remotegames.io/sounds/ding.wav"],
// 		conditions: ["docVisible"],
// 	},
// }).show();
// class Message extends PureComponent {


class Message extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      classes,
      text,
      username,
      userid,
      time,
      isReplay,
      isLastMessage,
      accountMap
    } = this.props;

    if (!isReplay && isLastMessage) {
      let mention = "@" + this.props.myUsername;

      if (text.indexOf(mention) > -1) {
        ping("You've been pinged!", 500);
      }
    }

    let isDev = false;

    if (username == "fosse" || username == "remotegames" || username == "fossephate" || username == "fosse#0430") {
      isDev = true;
    }

    let icons = [];
    let account = accountMap[userid];

    if (account) {
      if (isDev) {
        icons.push(_react.default.createElement(_Badge.default, {
          type: "dev"
        }));
      } else if (account.roles.host) {
        icons.push(_react.default.createElement(_Badge.default, {
          type: "host"
        }));
      } else if (account.roles.mod) {
        icons.push(_react.default.createElement(_Badge.default, {
          type: "mod"
        }));
      } else if (account.roles.plus) {
        icons.push(_react.default.createElement(_Badge.default, {
          type: "plus"
        }));
      }

      if (account.roles.sub) {
        icons.push(_react.default.createElement(_Badge.default, {
          type: "sub1"
        }));
      }

      if (account.roles.mod && !isReplay && isLastMessage) {
        if (text.indexOf("@everyone") > -1) {
          ping("You've been pinged!", 500);
        }
      }
    }

    icons = _react.default.Children.toArray(icons);
    return _react.default.createElement("div", {
      className: classes.root,
      userid: userid,
      onClick: this.props.onClick
    }, _react.default.createElement(_reactLinkify.default, {
      properties: {
        className: classes.links
      }
    }, getTimeStamp(time), icons, icons.length == 0 ? " " : null, _react.default.createElement(_Username.default, {
      userid: userid,
      style: {
        display: "inline"
      }
    }, _react.default.createElement(_Paper.default, {
      elevation: 4,
      className: classes.user
    }, username)), " ", _react.default.createElement("span", null, text)));
  }

}

const mapStateToProps = state => {
  return {
    accountMap: state.stream.accountMap,
    myUsername: state.client.username
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(Message);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/chat/MessageList.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/chat/MessageList.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Message = _interopRequireDefault(__webpack_require__(/*! ./Message.jsx */ "./src/shared/components/chat/Message.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Snackbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Close = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _chat = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    overflowY: "auto",
    // marginBottom: "15px",
    boxShadow: "none",
    "& > div:nth-child(even)": {
      // backgroundColor: "#FF3C28A4",
      // backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.type === "dark" ? "#FFF" : "#000",
      backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light
    },
    "& > div:nth-child(odd)": {
      // backgroundColor: "#0AB9E6A4",
      // backgroundColor: "#2d2d2dA4",
      // backgroundColor: theme.palette.type === "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light,
      color: theme.palette.type === "dark" ? "#FFF" : "#000",
      backgroundColor: theme.palette.type === "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light
    },
    position: "absolute",
    top: 64,
    left: 0,
    bottom: 90,
    right: 0 // height: "82%",

  }
});

class MessageList extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", event => {});

    this.messagesEnd = null;
    this.rootRef = _react.default.createRef();
    this.shouldScroll = false;
    this.state = {
      voting: false
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.messages.length < this.props.messages.length) {
      let messageList = document.getElementById("messageList");

      if (messageList && Math.abs(messageList.scrollHeight - messageList.scrollTop - messageList.offsetHeight) < 2) {
        this.shouldScroll = true;
      }
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.shouldScroll) {
      let messageList = document.getElementById("messageList");
      messageList.scrollTop = messageList.scrollHeight;
    }

    this.shouldScroll = false;
  }

  mapMessages() {
    let messages = [];

    for (let i = 0; i < this.props.messages.length; i++) {
      let isLastMessage = i == this.props.messages.length - 1;

      if (this.props.messages[i].isBanned) {
        if (!this.props.isBanned && !this.props.isMod) {
          continue;
        }
      }

      messages.push(_react.default.createElement(_Message.default, _extends({
        key: i
      }, this.props.messages[i], {
        isLastMessage: isLastMessage,
        onContextMenu: this.handleClick
      })));
    }

    return messages;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.voting) {
      let message = nextProps.messages[nextProps.messages.length - 1];

      if (message && message.username == "HostBot" && /A vote has been started to/.test(message.text) && !message.isReplay) {
        this.setState({
          voting: true
        });
        setTimeout(() => {
          this.setState({
            voting: false
          });
        }, 18000);
      }
    }

    return true; // }
    // return false;
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      id: "messageList",
      className: classes.root,
      elevation: 4,
      ref: el => {
        this.rootRef = el;
      }
    }, this.mapMessages(), _react.default.createElement("div", {
      style: {
        float: "left",
        clear: "both"
      },
      ref: el => {
        this.messagesEnd = el;
      }
    }), _react.default.createElement(_Snackbar.default, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      open: this.state.voting,
      autoHideDuration: 0,
      onClose: () => {},
      message: _react.default.createElement("span", {
        id: "message-id"
      }, "A vote has started to switch games!"),
      action: [_react.default.createElement(_Button.default, {
        key: "leave",
        color: "secondary",
        size: "small",
        variant: "contained",
        onClick: () => {
          this.props.sendMessage("yea");
          this.setState({
            voting: false
          });
        }
      }, "LEAVE"), _react.default.createElement("div", {
        key: "spacer",
        style: {
          width: "15px"
        }
      }), _react.default.createElement(_Button.default, {
        key: "stay",
        color: "primary",
        size: "small",
        variant: "contained",
        onClick: () => {
          this.props.sendMessage("nay");
          this.setState({
            voting: false
          });
        }
      }, "STAY"), _react.default.createElement(_IconButton.default, {
        key: "close",
        color: "inherit",
        className: classes.close,
        onClick: () => {
          this.setState({
            voting: false
          });
        }
      }, _react.default.createElement(_Close.default, null))]
    }));
  }

}

const mapStateToProps = state => {
  return {
    messages: state.stream.chat.messages,
    accountMap: state.stream.accountMap,
    isMod: state.client.roles.mod,
    isBanned: state.client.isBanned // lastMessage: state.stream.chat.messages[state.stream.chat.messages.length - 1],

  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: text => {
      dispatch((0, _chat.sendMessage)(text));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(MessageList);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/chat/SendMessageForm.jsx":
/*!********************************************************!*\
  !*** ./src/shared/components/chat/SendMessageForm.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Fab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js"));

var _TextField = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _Send = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/Send */ "./node_modules/@material-ui/icons/esm/Send.js"));

var _reactTextareaAutocomplete = _interopRequireDefault(__webpack_require__(/*! @webscopeio/react-textarea-autocomplete */ "./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js"));

var _emojiSearch = _interopRequireDefault(__webpack_require__(/*! @jukben/emoji-search */ "./node_modules/@jukben/emoji-search/build/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _chat = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Loading = ({
  data
}) => _react.default.createElement("div", null, "Loading"); // jss:


const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    minHeight: "60px",
    height: "12%",
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  messageBox: {
    display: "flex",
    resize: "none",
    // width: "98%",
    borderRadius: "6px",
    "&:focus": {
      outlineOffset: "0px !important",
      outline: "none !important",
      boxShadow: "0 0 3px blue !important"
    }
  },
  messageBoxContainer: {
    zIndex: 1,
    width: "90%",
    // height: "70%",
    fontSize: "14px",
    lineHeight: "20px",
    // fontSize: "inherit !important",
    marginRight: "10px",
    position: "relative"
  },
  textField: {
    flex: "1",
    overflowY: "auto",
    height: "32px",
    // height: "56px",
    "&::-webkit-scrollbar": {
      width: "0 !important"
    },
    "& textarea": {
      overflow: "hidden"
    }
  },
  container: {
    "& .rta": {// position: "relative",
      // fontSize: "18px",
      // width: "100%",
      // height: "100%",
    },
    "& .rta__loader.rta__loader--empty-suggestion-data": {
      borderRadius: "3px",
      boxShadow: "0 0 5px rgba(27, 31, 35, 0.1)",
      padding: "5px"
    },
    "& .rta--loading .rta__loader.rta__loader--suggestion-data": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      background: "rgba(255, 255, 255, 0.8)"
    },
    "& .rta--loading .rta__loader.rta__loader--suggestion-data > *": {
      position: "relative",
      top: "50%"
    },
    // "& .rta__textarea": {
    // width: "100%",
    // height: "100%",
    // fontSize: "1em",
    // },
    "& .rta__autocomplete": {
      position: "absolute",
      display: "block",
      marginTop: "1em"
    },
    "& .rta__autocomplete--top": {// marginTop: "0",
      // marginBottom: "1em",
    },
    "& .rta__list": {
      listStyle: "none",
      margin: "0px",
      padding: "0px",
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"
    },
    "& .rta__entity": {// background: "white",
      // width: "100%",
      // textAlign: "left",
      // outline: "none",
    },
    "& .rta__entity:hover": {
      cursor: "pointer"
    },
    "& .rta__item:not(:last-child)": {// borderBottom: "1px solid #dfe2e5",
    },
    "& .rta__entity > *": {// paddingLeft: "4px",
      // paddingRight: "4px",
    },
    "& .rta__entity--selected": {
      backgroundColor: theme.palette.action.selected
    }
  },
  suggestion: {}
});

class SendMessageForm extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleKeyPress", event => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.sendMessage();
      }
    });

    _defineProperty(this, "handleTextChange", event => {
      this.setState({
        text: event.target.value
      });
    });

    _defineProperty(this, "sendMessage", () => {
      if (this.state.text !== "") {
        this.props.sendMessage({
          text: this.state.text
        });
        this.setState({
          text: ""
        });
        this.rta.setState({
          value: ""
        });
      }
    });

    _defineProperty(this, "getEmojiSuggestions", token => {
      if (token.length < 1) {
        return [];
      } else {
        return (0, _emojiSearch.default)(token).slice(0, 5).map(({
          name,
          char
        }) => ({
          name,
          char
        }));
      }
    });

    _defineProperty(this, "getUsernameSuggestions", token => {
      let suggestions = [];

      for (let userid in this.props.accountMap) {
        let username = this.props.accountMap[userid].username;

        if (username == null || username.toLowerCase().indexOf(token) == -1) {
          continue;
        }

        if (token.indexOf(username) > -1) {
          suggestions = [];
          break;
        }

        suggestions.push({
          name: username,
          char: `@${username}`
        });
      }

      return suggestions.slice(0, 5);
    });

    _defineProperty(this, "getCommandSuggestions", token => {
      let suggestions = [];

      if (token.length < 1) {
        return [];
      }

      for (let i = 0; i < this.state.commands.length; i++) {
        let command = this.state.commands[i];

        if (command.indexOf(token) == -1) {
          continue;
        }

        if (token.indexOf(command) > -1) {
          suggestions = [];
          break;
        }

        suggestions.push({
          name: command,
          char: "!" + command
        });
      }

      return suggestions.slice(0, 5);
    });

    _defineProperty(this, "renderNameSuggestion", obj => {
      return _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, obj.entity.name));
    });

    _defineProperty(this, "renderCharSuggestion", obj => {
      return _react.default.createElement(_ListItem.default, null, _react.default.createElement(_ListItemText.default, null, obj.entity.char));
    });

    this.rta = _react.default.createRef();
    this.state = {
      text: "",
      commands: ["help", "discord", "games", "goto", "source", "fc", "fixcontrollers", "lock", "unlock", "forcegoto", "setturnlength", "setforfeitlength", "sublist", "modlist", "pluslist", "banlist", "ban", "unban"]
    };
  }

  componentDidMount() {
    this.rta.textareaRef.setAttribute("autocomplete", "off");
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      id: "SendMessageForm",
      className: (0, _classnames.default)(classes.root, classes.container),
      elevation: 0
    }, _react.default.createElement(_reactTextareaAutocomplete.default, {
      id: "messageBoxOld",
      className: classes.messageBox,
      containerClassName: classes.messageBoxContainer,
      loadingComponent: Loading,
      ref: rta => {
        this.rta = rta;
      },
      textAreaComponent: {
        component: _TextField.default,
        ref: "inputRef"
      },
      minChar: 0,
      trigger: {
        ":": {
          dataProvider: this.getEmojiSuggestions,
          component: this.renderCharSuggestion,
          output: item => ({
            text: item.char,
            caretPosition: "next"
          })
        },
        "@": {
          dataProvider: this.getUsernameSuggestions,
          component: this.renderNameSuggestion,
          output: item => ({
            text: item.char,
            caretPosition: "next"
          })
        },
        "!": {
          dataProvider: this.getCommandSuggestions,
          component: this.renderNameSuggestion,
          output: item => ({
            text: item.char,
            caretPosition: "end"
          })
        }
      },
      onChange: this.handleTextChange,
      onKeyPress: this.handleKeyPress,
      value: this.state.text,
      placeholder: "Send a message",
      variant: "standard"
    }), _react.default.createElement(_Fab.default, {
      color: "primary",
      size: "small",
      onClick: this.sendMessage
    }, _react.default.createElement(_Send.default, {
      fontSize: "small"
    })));
  }

}

const mapStateToProps = state => {
  return {
    accountMap: state.stream.accountMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: text => {
      dispatch((0, _chat.sendMessage)(text));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(SendMessageForm);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/forms/LoginForm.jsx":
/*!***************************************************!*\
  !*** ./src/shared/components/forms/LoginForm.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _TextField = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));

var _FormControl = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js"));

var _FormHelperText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js"));

var _Radio = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js"));

var _RadioGroup = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const validate = values => {
  const errors = {};
  const requiredFields = ["username", "password1", "password2", "email"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => _react.default.createElement(_TextField.default, _extends({
  label: label,
  placeholder: label,
  error: touched && invalid,
  helperText: touched && error
}, input, custom));

const renderCheckbox = ({
  input,
  label
}) => _react.default.createElement("div", null, _react.default.createElement(_FormControlLabel.default, {
  control: _react.default.createElement(_Checkbox.default, {
    checked: input.value ? true : false,
    onChange: input.onChange
  }),
  label: label
}));

const renderFromHelper = ({
  touched,
  error
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return _react.default.createElement(_FormHelperText.default, null, touched && error);
  }
};

const renderSelectField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  children,
  ...custom
}) => _react.default.createElement(_FormControl.default, {
  error: touched && error
}, _react.default.createElement(_InputLabel.default, {
  htmlFor: "age-native-simple"
}, "Age"), _react.default.createElement(_Select.default, _extends({
  native: true
}, input, custom, {
  inputProps: {
    name: "age",
    id: "age-native-simple"
  }
}), children), renderFromHelper({
  touched,
  error
})); // jss:


const styles = theme => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly" // position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    // textAlign: "center",

  },
  field: {
    margin: "20px 0px"
  }
});

const LoginForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    classes
  } = props;
  return _react.default.createElement("form", {
    onSubmit: handleSubmit
  }, _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_reduxForm.Field, {
    name: "user",
    component: renderTextField,
    label: "Username or Email",
    variant: "standard",
    fullWidth: true
  })), _react.default.createElement("div", {
    className: classes.field
  }, _react.default.createElement(_reduxForm.Field, {
    name: "password",
    component: renderTextField,
    label: "Password",
    type: "password",
    variant: "standard",
    fullWidth: true
  })), _react.default.createElement("div", {
    className: classes.buttons
  }, _react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    type: "submit",
    disabled: pristine || submitting,
    fullWidth: true
  }, "Login")));
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reduxForm.reduxForm)({
  form: "RegisterForm",
  // a unique identifier for this form
  validate
}))(LoginForm);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/forms/RegisterForm.jsx":
/*!******************************************************!*\
  !*** ./src/shared/components/forms/RegisterForm.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _TextField = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));

var _FormControl = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js"));

var _FormHelperText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js"));

var _Link = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Link */ "./node_modules/@material-ui/core/esm/Link/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Select */ "./node_modules/@material-ui/core/esm/Select/index.js"));

var _Radio = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js"));

var _RadioGroup = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _reactGoogleRecaptcha = _interopRequireDefault(__webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const validate = values => {
  const errors = {};
  const requiredFields = ["username", "password1", "password2", "email"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => _react.default.createElement(_TextField.default, _extends({
  label: label,
  placeholder: label,
  error: touched && invalid,
  helperText: touched && error
}, input, custom));

const renderCheckbox = ({
  input,
  label
}) => _react.default.createElement("div", null, _react.default.createElement(_FormControlLabel.default, {
  control: _react.default.createElement(_Checkbox.default, {
    checked: input.value ? true : false,
    onChange: input.onChange
  }),
  label: label
}));

const renderTOS = ({
  input
}) => _react.default.createElement("div", null, _react.default.createElement(_Checkbox.default, {
  checked: input.value ? true : false,
  onChange: input.onChange
}), _react.default.createElement("span", null, "I have read and agree to the "), _react.default.createElement(_Link.default, {
  href: "/tos.html"
}, "Terms and Conditions"));

const radioButton = ({
  input,
  ...rest
}) => _react.default.createElement(_FormControl.default, null, _react.default.createElement(_RadioGroup.default, _extends({}, input, rest), _react.default.createElement(_FormControlLabel.default, {
  value: "female",
  control: _react.default.createElement(_Radio.default, null),
  label: "Female"
}), _react.default.createElement(_FormControlLabel.default, {
  value: "male",
  control: _react.default.createElement(_Radio.default, null),
  label: "Male"
})));

const renderFromHelper = ({
  touched,
  error
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return _react.default.createElement(_FormHelperText.default, null, touched && error);
  }
};

const renderSelectField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  children,
  ...custom
}) => _react.default.createElement(_FormControl.default, {
  error: touched && error
}, _react.default.createElement(_InputLabel.default, {
  htmlFor: "age-native-simple"
}, "Age"), _react.default.createElement(_Select.default, _extends({
  native: true
}, input, custom, {
  inputProps: {
    name: "age",
    id: "age-native-simple"
  }
}), children), renderFromHelper({
  touched,
  error
})); // jss:


const styles = theme => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly" // position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    // textAlign: "center",

  },
  field: {
    margin: "20px 0px"
  }
});

class RegisterForm extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "completeCaptcha", () => {
      this.setState({
        captchaCompleted: true
      });
    });

    _defineProperty(this, "agreeTOS", event => {
      this.setState({
        TOSAgreed: event.target.checked
      });
    });

    this.state = {
      captchaCompleted: false,
      TOSAgreed: false
    };
  }

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      classes
    } = this.props;
    return _react.default.createElement("form", {
      onSubmit: handleSubmit
    }, _react.default.createElement("div", {
      className: classes.field
    }, _react.default.createElement(_reduxForm.Field, {
      name: "email",
      component: renderTextField,
      label: "Email",
      variant: "standard",
      fullWidth: true
    })), _react.default.createElement("div", {
      className: classes.field
    }, _react.default.createElement(_reduxForm.Field, {
      name: "username",
      component: renderTextField,
      label: "Username",
      variant: "standard",
      fullWidth: true
    })), _react.default.createElement("div", {
      className: classes.field
    }, _react.default.createElement(_reduxForm.Field, {
      name: "password1",
      component: renderTextField,
      label: "Password",
      type: "password",
      variant: "standard",
      fullWidth: true
    })), _react.default.createElement("div", {
      className: classes.field
    }, _react.default.createElement(_reduxForm.Field, {
      name: "password2",
      component: renderTextField,
      label: "Confirm Password",
      type: "password",
      variant: "standard",
      fullWidth: true
    })), _react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-start"
      }
    }, _react.default.createElement(_reduxForm.Field, {
      name: "agree",
      component: renderTOS,
      onChange: this.agreeTOS
    })), !this.props.local && _react.default.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "10px"
      }
    }, _react.default.createElement(_reactGoogleRecaptcha.default, {
      sitekey: "6LeOU6UUAAAAABSPwdKHf-3ttPz9Ql4AgVTWobXI",
      theme: "dark",
      size: "normal",
      onChange: this.completeCaptcha
    })), _react.default.createElement("div", {
      className: classes.buttons
    }, _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      type: "submit",
      disabled: pristine || submitting || !this.state.captchaCompleted && !this.props.local || !this.state.TOSAgreed,
      fullWidth: true
    }, "Create Account")));
  }

}

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reduxForm.reduxForm)({
  form: "RegisterForm",
  // a unique identifier for this form
  validate
}))(RegisterForm);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/Loading.jsx":
/*!***************************************************!*\
  !*** ./src/shared/components/general/Loading.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// jss:
const styles = theme => ({
  root: {
    // height: "100vh",
    textAlign: "center",
    lineHeight: "100vh",
    fontSize: "32px",
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0
  }
});

class Loading extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, "Loading...");
  }

}

var _default = (0, _styles.withStyles)(styles)(Loading);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/MyAlert.jsx":
/*!***************************************************!*\
  !*** ./src/shared/components/general/MyAlert.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js"));

var _DialogActions = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));

var _DialogContentText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js"));

var _DialogTitle = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _alert = __webpack_require__(/*! shared/features/alert.js */ "./src/shared/features/alert.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {}
});

class MyAlert extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", () => {
      this.props.closeAlert();
    });

    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    const {
      open,
      title,
      content,
      maxWidth,
      fullWidth
    } = this.props.alert;
    return _react.default.createElement("div", null, _react.default.createElement(_Dialog.default, {
      open: open,
      onClose: this.handleClose,
      fullWidth: fullWidth,
      maxWidth: maxWidth
    }, _react.default.createElement(_DialogTitle.default, null, title), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, null, content)), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
      onClick: this.handleClose,
      color: "primary",
      autoFocus: true
    }, "OK"))));
  }

}

const mapStateToProps = state => {
  return {
    alert: state.alert
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeAlert: data => {
      dispatch((0, _alert.closeAlert)(data));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(MyAlert);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/MyAppBar.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/general/MyAppBar.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js"));

var _IconButton = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js"));

var _MoreVert = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/esm/MoreVert */ "./node_modules/@material-ui/icons/esm/MoreVert.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    zIndex: 1300,
    width: "100%",
    height: "48px",
    [theme.breakpoints.up("sm")]: {
      height: "64px"
    }
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    cursor: "pointer"
  },
  sectionDesktop: {
    display: "none",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
});

class MyAppBar extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleMenuClose", () => {
      this.setState({
        anchorEl: null
      });
      this.handleMobileMenuClose();
    });

    _defineProperty(this, "handleMobileMenuOpen", event => {
      this.setState({
        mobileMoreAnchorEl: event.currentTarget
      });
    });

    _defineProperty(this, "handleMobileMenuClose", () => {
      this.setState({
        mobileMoreAnchorEl: null
      });
    });

    this.state = {
      mobileMoreAnchorEl: null
    };
  }

  componentDidMount() {}

  render() {
    console.log("re-rendering appbar.");
    const {
      mobileMoreAnchorEl
    } = this.state;
    const {
      classes
    } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = _react.default.createElement(_Menu.default, {
      anchorEl: mobileMoreAnchorEl,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      open: isMobileMenuOpen,
      onClose: this.handleMenuClose
    }, this.props.mobileMenu);

    return _react.default.createElement("div", {
      className: (0, _classnames.default)(classes.root, this.props.rootClasses)
    }, _react.default.createElement(_AppBar.default, {
      position: "fixed"
    }, _react.default.createElement(_Toolbar.default, null, this.props.main, _react.default.createElement("div", {
      className: classes.grow
    }), _react.default.createElement("div", {
      className: classes.sectionDesktop
    }, this.props.desktop), _react.default.createElement("div", {
      className: classes.sectionMobile
    }, this.props.mobile, _react.default.createElement(_IconButton.default, {
      "aria-haspopup": "true",
      onClick: this.handleMobileMenuOpen,
      color: "inherit"
    }, _react.default.createElement(_MoreVert.default, null))))), renderMobileMenu);
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(MyAppBar);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/MyCheckbox.jsx":
/*!******************************************************!*\
  !*** ./src/shared/components/general/MyCheckbox.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js"));

var _FormControlLabel = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class MyCheckbox extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (// <label className="checkbox-inline checkbox-bootstrap checkbox-lg">
      // 	<input onChange={(event) => {this.props.handleChange(event.target.checked)}} type="checkbox" checked={this.props.checked}/>
      // 	<span className="checkbox-placeholder"></span>
      // 	{this.props.text}
      // </label>
      _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Checkbox.default, {
          onChange: event => {
            this.props.handleChange(event.target.checked);
          },
          type: "checkbox",
          checked: this.props.checked || false,
          color: "primary"
        }),
        label: this.props.text
      })
    );
  }

}

exports.default = MyCheckbox;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/MySlider.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/general/MySlider.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Slider = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// jss:
const styles = theme => ({
  slider: {
    width: "70%"
  }
});

class MySlider extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.handleLocalChange = this.handleLocalChange.bind(this);
    this.bounce = this.bounce.bind(this);
    this.state = {
      value: 0
    };
    this.active = false;
    this.bounceTimer = null;
    this.countDown = 0;
    this.countUp = 0;
  }

  bounce() {
    this.countDown -= 100;
    this.countUp += 50;

    if (this.countUp >= 100) {
      this.countUp = 0;
      this.props.handleChange(this.state.value);
    }

    if (this.countDown <= 0) {
      this.active = false;
      this.countDown = 0;
      clearInterval(this.bounceTimer);

      if (typeof this.props.handleAfterChange != "undefined") {
        this.props.handleAfterChange(this.state.value); // trigger a re-render after the handleAfterChange:

        setTimeout(() => {
          this.setState({
            value: Math.random()
          });
        }, 200);
      }
    }
  }

  handleLocalChange(event, value) {
    this.setState({
      value: value
    });

    if (typeof this.props.handleChange != "undefined") {
      this.countDown = 1000;

      if (!this.active) {
        this.active = true;
        this.props.handleChange(value);
        this.bounceTimer = setInterval(this.bounce, this.props.bounceInterval || 100);
      }
    }
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Slider.default, {
      classes: {
        root: this.props.rootClass || classes.slider,
        thumb: this.props.thumbClass,
        active: this.props.activeClass,
        rail: this.props.railClass,
        track: this.props.trackClass
      },
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      onChange: this.handleLocalChange,
      value: (this.active ? this.state.value : this.props.value) || 0
    });
  }

}

var _default = (0, _styles.withStyles)(styles)(MySlider);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/ThemeSelector.jsx":
/*!*********************************************************!*\
  !*** ./src/shared/components/general/ThemeSelector.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _settings = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// redux:
// actions:
// recompose:
// jss:
const styles = theme => ({
  root: {}
});

const options = ["Light", "Dark", "Spooky"];
const options2 = ["light", "dark", "spooky"];

class ThemeSelector extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      anchorEl: null // selectedIndex: 1,

    };
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    });
  }

  handleMenuItemClick(event, index) {
    // this.setState({ selectedIndex: index, anchorEl: null });
    this.setState({
      anchorEl: null
    });
    this.props.switchTheme(options2[index]);
  }

  handleClose() {
    this.setState({
      anchorEl: null
    });
  }

  render() {
    const {
      classes
    } = this.props;
    const open = Boolean(this.state.anchorEl);
    let themeIndex = options2.indexOf(this.props.theme);
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
      variant: "contained",
      onClick: this.handleClick
    }, "Select Theme"), _react.default.createElement(_Menu.default, {
      id: "themeSelector",
      anchorEl: this.state.anchorEl,
      open: open,
      onClose: this.handleClose // TransitionComponent={Fade}
      ,
      PaperProps: {
        style: {
          maxHeight: 48 * 4.5,
          width: 200
        }
      }
    }, options.map((option, index) => _react.default.createElement(_MenuItem.default, {
      key: option,
      disabled: index === themeIndex,
      selected: index === themeIndex,
      onClick: event => this.handleMenuItemClick(event, index)
    }, option))));
  }

}

const mapStateToProps = state => {
  return {
    theme: state.settings.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    switchTheme: index => {
      dispatch((0, _settings.updateSettings)({
        theme: index
      }));
    }
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(ThemeSelector);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/general/VolumeSlider.jsx":
/*!********************************************************!*\
  !*** ./src/shared/components/general/VolumeSlider.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _VolumeDown = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/VolumeDown */ "./node_modules/@material-ui/icons/VolumeDown.js"));

var _VolumeUp = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/VolumeUp */ "./node_modules/@material-ui/icons/VolumeUp.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _MySlider = _interopRequireDefault(__webpack_require__(/*! shared/components/general/MySlider.jsx */ "./src/shared/components/general/MySlider.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// components:
// jss:
const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "30%",
    minWidth: "125px",
    // borderRadius: "10px",
    alignItems: "center",
    paddingLeft: "6px",
    paddingRight: "6px",
    backgroundColor: theme.palette.primary.main // backgroundColor: theme.palette.primary.dark,

  },
  svg: {
    // color: "#333",
    color: theme.palette.primary.contrastText,
    alignSelf: "center",
    // border: "1.2px solid #333",
    // borderRadius: "4px",
    // padding: "1px",
    cursor: "pointer"
  },
  rootClass: {
    width: "70%" // track:
    // "& :nth-child(1)": {
    // 	backgroundColor: "#FFF",
    // },
    // // first part of track:
    // "& :nth-child(2)": {
    // 	backgroundColor: "#FFF",
    // },
    // thumb icon:
    // "& :nth-child(4)": {
    // 	"& :first-child": {
    // 	},
    // 	backgroundColor: "#FFF",
    // 	"&:hover": {
    // 		boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)",
    // 	},
    // 	"&:active": {
    // 		boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)",
    // 	},
    // },

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
    } // boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important",

  }
});

class VolumeSlider extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 3
    }, _react.default.createElement(_VolumeDown.default, {
      className: classes.svg,
      onClick: this.props.onMute
    }), _react.default.createElement(_MySlider.default, {
      rootClass: classes.rootClass,
      thumbClass: classes.thumb,
      activeClass: classes.active,
      railClass: classes.rail,
      trackClass: classes.track,
      min: 0,
      max: 100,
      step: 1,
      handleChange: this.props.handleChange,
      value: this.props.value,
      bounceInterval: 100,
      delay: 500
    }), _react.default.createElement(_VolumeUp.default, {
      className: classes.svg,
      onClick: this.props.onMax
    }));
  }

}

var _default = (0, _styles.withStyles)(styles)(VolumeSlider);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/icons/Badge.jsx":
/*!***********************************************!*\
  !*** ./src/shared/components/icons/Badge.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _Tooltip = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// react:
// material ui:
// recompose:
// jss:
const styles = theme => ({
  root: {
    width: "22px",
    marginLeft: "2px",
    marginRight: "2px",
    backgroundColor: "#b7b7b7",
    border: "1px solid #333",
    borderRadius: "6px",
    verticalAlign: "middle"
  }
});

class Badge extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    let src = window.location.origin + "/images/badges/";
    let text;

    switch (this.props.type) {
      case "dev":
        src += "DevBadge.png";
        text = "The Developer";
        break;

      case "host":
        src += "AdminBadge.png";
        text = "Host";
        break;

      case "mod":
        src += "ModBadge.png";
        text = "Moderator";
        break;

      case "plus":
        src += "PlusBadge.png";
        text = "This user can use Plus";
        break;

      case "sub1":
        src += "SubBadge1.png";
        text = "Subscriber for 1 month(+)";
        break;
    }

    return _react.default.createElement(_Tooltip.default, {
      title: text,
      placement: "top"
    }, _react.default.createElement("img", {
      className: classes.root,
      src: src
    }));
  }

}

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles))(Badge);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/modals/AccountModal.jsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/modals/AccountModal.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _ConnectAccounts = _interopRequireDefault(__webpack_require__(/*! shared/components/account/ConnectAccounts.jsx */ "./src/shared/components/account/ConnectAccounts.jsx"));

var _UsernameDropdown = _interopRequireDefault(__webpack_require__(/*! shared/components/account/UsernameDropdown.jsx */ "./src/shared/components/account/UsernameDropdown.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _alert = __webpack_require__(/*! shared/features/alert.js */ "./src/shared/features/alert.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _localforage = _interopRequireDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0px 0px 25px 0px !important"
  },
  [_utils.device.tablet]: {
    root: {
      flexDirection: "column"
    }
  },
  center: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  list: {
    maxHeight: "400px",
    overflowY: "auto"
  },
  logout: {
    width: "30%"
  },
  main: {
    width: "80%",
    display: "flex",
    flexDirection: "column"
  },
  topBar: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: "20px 25px 10px",
    padding: "5px",
    lineHeight: "60px"
  }
});

class AccountModal extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", () => {
      // this.props.history.push("/");
      this.props.history.goBack();
    });

    _defineProperty(this, "handleLogout", () => {
      if (this.props.local) {
        this.props.history.push("/login");

        _localforage.default.clear().then(() => {
          location.reload(true);
        });
      } else {
        (0, _utils.deleteAllCookies)();
        setTimeout(() => {
          location.reload(true);
        }, 500);
      }
    });

    _defineProperty(this, "handleRemoveAccount", type => {
      this.accountConnection.emit("removeConnectedAccount", {
        authToken: this.props.authToken,
        type: type
      }, data => {
        if (!data.success) {
          this.props.openAlert({
            title: data.reason
          });
          return;
        } else {
          this.props.openAlert({
            title: "success"
          });
        }

        location.reload(true);
      });
    });

    this.accountConnection = this.props.accountConnection;
  }

  getTime(t) {
    if (t < 60) {
      return t.toFixed(1) + " seconds.";
    } else if (t < 60 * 60) {
      return (t / 60).toFixed(1) + " minutes";
    } else {
      return (t / 60 / 60).toFixed(1) + " hours";
    }
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement(_Dialog.default, {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, _react.default.createElement(_DialogContent.default, {
      className: classes.root
    }, _react.default.createElement(_AppBar.default, {
      position: "static"
    }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "inherit"
    }, "Account"))), _react.default.createElement(_Paper.default, {
      className: classes.topBar,
      elevation: 2
    }, _react.default.createElement(_UsernameDropdown.default, null), _react.default.createElement(_Button.default, {
      className: classes.logout,
      variant: "contained",
      color: "secondary",
      onClick: this.handleLogout
    }, "Logout")), _react.default.createElement(_ConnectAccounts.default, {
      onRemoveAccount: this.handleRemoveAccount,
      showTOS: false
    }), _react.default.createElement(_ListItemText.default, {
      style: {
        margin: "0 auto"
      }
    }, "You've played for ", this.getTime(this.props.timePlayed))));
  }

}

const mapStateToProps = state => {
  return {
    timePlayed: state.client.timePlayed,
    emailVerified: state.client.emailVerified,
    authToken: state.client.authToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openAlert: data => {
      dispatch((0, _alert.openAlert)(data));
    }
  };
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(AccountModal);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/components/modals/LoginRegisterModal.jsx":
/*!*************************************************************!*\
  !*** ./src/shared/components/modals/LoginRegisterModal.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

var _ConnectAccounts = _interopRequireDefault(__webpack_require__(/*! shared/components/account/ConnectAccounts.jsx */ "./src/shared/components/account/ConnectAccounts.jsx"));

var _LoginForm = _interopRequireDefault(__webpack_require__(/*! shared/components/forms/LoginForm.jsx */ "./src/shared/components/forms/LoginForm.jsx"));

var _RegisterForm = _interopRequireDefault(__webpack_require__(/*! shared/components/forms/RegisterForm.jsx */ "./src/shared/components/forms/RegisterForm.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _AppBar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js"));

var _Toolbar = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js"));

var _Typography = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js"));

var _Dialog = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js"));

var _DialogContent = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _client = __webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js");

var _alert = __webpack_require__(/*! shared/features/alert.js */ "./src/shared/features/alert.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _jsCookie = _interopRequireDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"));

var _queryString = _interopRequireDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));

var _localforage = _interopRequireDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// jss:
const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0px 0px 25px 0px !important"
  },
  [_utils.device.tablet]: {
    root: {
      flexDirection: "column"
    }
  },
  tabs: {
    "& button:focus": {
      outline: "none"
    }
  },
  createAnAccount: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "0px 15px"
  },
  connectAnAccount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    minWidth: "25%",
    textAlign: "center",
    marginTop: "15px"
  }
});

class LoginRegisterModal extends _react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", () => {
      // this.props.history.push("/");
      this.props.history.goBack();
    });

    _defineProperty(this, "handleLoginForm", values => {
      if (this.props.local) {
        this.props.login({ ...values,
          cb: data => {
            if (data.success) {
              _localforage.default.setItem("RemoteGames", data.authToken);

              this.props.updateClient({
                authToken: data.authToken,
                loggedIn: true,
                ...data.client
              }); // this.props.authenticate(data.authToken);

              this.props.history.push("/");
            } else {
              this.props.openAlert({
                title: data.reason
              });
            }
          }
        });
      } else {
        this.props.login({ ...values,
          cb: data => {
            if (data.success) {
              this.props.openAlert({
                title: "success"
              });

              _jsCookie.default.set("RemoteGames", data.authToken, {
                expires: 7
              });

              this.props.updateClient({
                authToken: data.authToken,
                loggedIn: true,
                ...data.clientInfo
              }); // this.props.authenticate(data.authToken);

              let values = _queryString.default.parse(this.props.location.search);

              if (values.verified) {
                this.props.history.replace("/");
              } else {
                this.props.history.goBack();
              }

              setTimeout(() => {
                window.location.reload();
              }, 1000);
            } else {
              this.props.openAlert({
                title: data.reason
              });
            }
          }
        });
      }
    });

    _defineProperty(this, "handleRegisterForm", values => {
      this.props.register({ ...values,
        cb: data => {
          if (data.success) {
            this.props.openAlert({
              title: "Account created! Please login!"
            });
            this.props.history.replace("/login");
          } else {
            this.props.openAlert({
              title: data.reason
            });
          }
        }
      });
    });
  }

  componentDidMount() {// const values = queryString.parse(this.props.location.search);
    // if (values.verified) {
    // 	setTimeout(() => {
    // 		alert("Email verified.");
    // 	}, 2000);
    // }
  }

  render() {
    const {
      classes
    } = this.props;
    let which = this.props.history.location.pathname.indexOf("/login") > -1 ? 0 : 1;
    return _react.default.createElement(_Dialog.default, {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, _react.default.createElement(_DialogContent.default, {
      className: classes.root
    }, _react.default.createElement(_AppBar.default, {
      position: "static"
    }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "inherit"
    }, "Welcome"))), _react.default.createElement(_Tabs.default, {
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
          this.props.history.replace("/login");
        }

        if (value === 1) {
          this.props.history.replace("/register");
        }
      }
    }, _react.default.createElement(_Tab.default, {
      label: "Login"
    }), _react.default.createElement(_Tab.default, {
      label: "Register"
    })), _react.default.createElement(_reactRouter.Route, {
      path: "/login",
      render: props => {
        return _react.default.createElement("div", {
          className: classes.createAnAccount
        }, _react.default.createElement(_LoginForm.default, {
          onSubmit: this.handleLoginForm,
          local: this.props.local
        }));
      }
    }), _react.default.createElement(_reactRouter.Route, {
      path: "/register",
      render: props => {
        return _react.default.createElement("div", {
          className: classes.createAnAccount
        }, _react.default.createElement(_RegisterForm.default, {
          onSubmit: this.handleRegisterForm,
          local: this.props.local
        }));
      }
    }), !this.props.local && _react.default.createElement("div", {
      className: classes.connectAnAccount
    }, _react.default.createElement("div", null, _react.default.createElement(_ListItemText.default, null, "or")), _react.default.createElement("div", {
      style: {
        marginTop: "15px"
      }
    }, _react.default.createElement(_ConnectAccounts.default, {
      showTOS: true
    })))));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateClient: data => {
      dispatch((0, _client.updateClient)(data));
    },
    authenticate: data => {
      dispatch((0, _client.authenticate)(data));
    },
    login: data => {
      dispatch((0, _client.login)(data));
    },
    register: data => {
      dispatch((0, _client.register)(data));
    },
    openAlert: data => {
      dispatch((0, _alert.openAlert)(data));
    }
  };
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(LoginRegisterModal);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/features/alert.js":
/*!**************************************!*\
  !*** ./src/shared/features/alert.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.closeAlert = exports.openAlert = void 0;

var _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const alertSlice = (0, _toolkit.createSlice)({
  name: "alert",
  initialState: {
    open: false,
    title: null,
    content: null,
    maxWidth: null,
    fullWidth: null
  },
  reducers: {
    openAlert(state, action) {
      state.title = action.payload.title ? action.payload.title : null;
      state.content = action.payload.content ? action.payload.content : null;

      if (typeof action.payload.fullWidth !== "undefined") {
        state.fullWidth = action.payload.fullWidth;
      } else {
        state.fullWidth = true;
      }

      if (typeof action.payload.maxWidth !== "undefined") {
        state.maxWidth = action.payload.maxWidth;
      } else {
        state.maxWidth = "sm";
      }

      state.open = true;
    },

    closeAlert(state, action) {
      state.open = false;
    }

  }
});
const {
  openAlert,
  closeAlert
} = alertSlice.actions;
exports.closeAlert = closeAlert;
exports.openAlert = openAlert;
var _default = alertSlice.reducer;
exports.default = _default;

/***/ }),

/***/ "./src/shared/features/chat.js":
/*!*************************************!*\
  !*** ./src/shared/features/chat.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.updateMessages = exports.receiveMessage = exports.sendMessage = void 0;

var _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const chatSlice = (0, _toolkit.createSlice)({
  name: "chat",
  initialState: {
    messages: [],
    userids: []
  },
  reducers: {
    updateMessages(state, action) {
      state.messages = action.payload.messages;
    },

    sendMessage(state, action) {},

    receiveMessage(state, action) {
      // 			text: data.text,
      // 			username: data.username,
      // 			userid: data.userid,
      // 			time: data.time,
      // 			isReplay: data.isReplay,
      // 			isBanned: data.isBanned,
      // todo: fix chat so this isn't needed:
      setTimeout(() => {
        window.dispatchEvent(new Event("resize"));
      }, 1000); // add message to messages:

      state.messages.push({
        id: action.payload.id,
        userid: action.payload.userid,
        username: action.payload.username,
        text: action.payload.text,
        time: action.payload.time,
        isReplay: action.payload.isReplay,
        isBanned: action.payload.isBanned
      });
      let userids = state.userids.splice(0); // add the userid if not already in the state:

      if (userids.indexOf(action.payload.userid) == -1) {
        state.userids.push(action.payload.userid);
      }

      if (action.payload.pinged) {// todo:
      }
    }

  }
});
const {
  sendMessage,
  receiveMessage,
  updateMessages
} = chatSlice.actions;
exports.updateMessages = updateMessages;
exports.receiveMessage = receiveMessage;
exports.sendMessage = sendMessage;
var _default = chatSlice.reducer;
exports.default = _default;

/***/ }),

/***/ "./src/shared/features/client.js":
/*!***************************************!*\
  !*** ./src/shared/features/client.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.register = exports.login = exports.authenticate = exports.changeUsernameIndex = exports.updateClient = void 0;

var _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const clientSlice = (0, _toolkit.createSlice)({
  name: "client",
  initialState: {
    authToken: null,
    streamKey: null,
    loggedIn: false,
    accountAuthed: false,
    hostAuthed: false,
    userid: null,
    username: null,
    // "???"
    connectedAccounts: [],
    validUsernames: [],
    usernameIndex: 0,
    waitlisted: false,
    timePlayed: 0,
    emailVerified: false,
    roles: {}
  },
  reducers: {
    updateClient(state, action) {
      return state = { ...state,
        ...action.payload
      };
    },

    changeUsernameIndex(state, action) {
      state.usernameIndex = action.payload.usernameIndex; // state = { ...state, action.payload.usernameIndex };

      return state;
    },

    login(state, action) {},

    register(state, action) {},

    authenticate(state, action) {}

  }
});
const {
  updateClient,
  changeUsernameIndex,
  authenticate,
  login,
  register
} = clientSlice.actions;
exports.register = register;
exports.login = login;
exports.authenticate = authenticate;
exports.changeUsernameIndex = changeUsernameIndex;
exports.updateClient = updateClient;
var _default = clientSlice.reducer;
exports.default = _default;

/***/ }),

/***/ "./src/shared/features/time.js":
/*!*************************************!*\
  !*** ./src/shared/features/time.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.updateLastServerUpdate = exports.updatePing = exports.updateServerTime = void 0;

var _toolkit = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

const timeSlice = (0, _toolkit.createSlice)({
  name: "time",
  initialState: {
    server: 0,
    // server time (in ms)
    lastServerUpdate: 0,
    // when it was last updated (in ms)
    ping: 0
  },
  reducers: {
    updateServerTime(state, action) {
      state.server = action.payload.time;
      state.lastServerUpdate = Date.now();
    },

    updatePing(state, action) {
      state.ping = action.payload.time;
    },

    updateLastServerUpdate(state, action) {
      state.lastServerUpdate = action.payload.time;
    }

  }
});
const {
  updateServerTime,
  updatePing,
  updateLastServerUpdate
} = timeSlice.actions;
exports.updateLastServerUpdate = updateLastServerUpdate;
exports.updatePing = updatePing;
exports.updateServerTime = updateServerTime;
var _default = timeSlice.reducer;
exports.default = _default;

/***/ }),

/***/ "./src/shared/libs/inputHandler/DeviceStates.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/inputHandler/DeviceStates.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchState = exports.KeyboardState = exports.MouseState = exports.ControllerState = void 0;

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ControllerState {
  constructor() {
    _defineProperty(this, "reset", () => {
      this.btns = 0;

      for (let prop in this.buttons) {
        this.buttons[prop] = 0;
      }

      this.axes = [0, 0, 0, 0, 0, 0];
    });

    _defineProperty(this, "isPressed", n => {
      return (this.btns & 1 << n) != 0;
    });

    _defineProperty(this, "getState", () => {
      this.axes[0] = (0, _utils.clamp)(this.axes[0], -1, 1);
      this.axes[1] = (0, _utils.clamp)(this.axes[1], -1, 1);
      this.axes[2] = (0, _utils.clamp)(this.axes[2], -1, 1);
      this.axes[3] = (0, _utils.clamp)(this.axes[3], -1, 1); // this.axes[4] = this.axes[4];
      // this.axes[5] = this.axes[5];

      let state = {
        btns: 0,
        axes: [0, 0, 0, 0, 0, 0],
        gyro: { ...this.gyro
        },
        accel: { ...this.accel
        }
      };
      state.btns |= this.buttons.up << 0;
      state.btns |= this.buttons.down << 1;
      state.btns |= this.buttons.left << 2;
      state.btns |= this.buttons.right << 3;
      state.btns |= this.buttons.l << 4;
      state.btns |= this.buttons.zl << 5;
      state.btns |= this.buttons.lstick << 6;
      state.btns |= this.buttons.minus << 7;
      state.btns |= this.buttons.capture << 8;
      state.btns |= this.buttons.a << 9;
      state.btns |= this.buttons.b << 10;
      state.btns |= this.buttons.x << 11;
      state.btns |= this.buttons.y << 12;
      state.btns |= this.buttons.r << 13;
      state.btns |= this.buttons.zr << 14;
      state.btns |= this.buttons.rstick << 15;
      state.btns |= this.buttons.plus << 16;
      state.btns |= this.buttons.home << 17; // state.axes = this.axes;

      for (let i = 0; i < this.axes.length; i++) {
        state.axes[i] = this.axes[i];
      }

      return state;
    });

    _defineProperty(this, "setState", state => {
      if (state.btns == null) {
        console.log(state);
        throw error;
      }

      this.btns = state.btns;
      this.axes = state.axes;
      this.buttons.up = this.isPressed(0);
      this.buttons.down = this.isPressed(1);
      this.buttons.left = this.isPressed(2);
      this.buttons.right = this.isPressed(3);
      this.buttons.l = this.isPressed(4);
      this.buttons.zl = this.isPressed(5);
      this.buttons.lstick = this.isPressed(6);
      this.buttons.minus = this.isPressed(7);
      this.buttons.capture = this.isPressed(8);
      this.buttons.a = this.isPressed(9);
      this.buttons.b = this.isPressed(10);
      this.buttons.x = this.isPressed(11);
      this.buttons.y = this.isPressed(12);
      this.buttons.r = this.isPressed(13);
      this.buttons.zr = this.isPressed(14);
      this.buttons.rstick = this.isPressed(15);
      this.buttons.plus = this.isPressed(16);
      this.buttons.home = this.isPressed(17);
    });

    this.buttons = {
      unset: 0,
      up: 0,
      down: 0,
      left: 0,
      right: 0,
      l: 0,
      zl: 0,
      lstick: 0,
      minus: 0,
      capture: 0,
      a: 0,
      b: 0,
      x: 0,
      y: 0,
      r: 0,
      zr: 0,
      rstick: 0,
      plus: 0,
      home: 0
    };
    this.btns = 0;
    this.axes = [0, 0, 0, 0, 0, 0];
    this.gyro = {
      x: 0,
      y: 0,
      z: 0
    };
    this.accel = {
      x: 0,
      y: 0,
      z: 0
    };
  }

}

exports.ControllerState = ControllerState;

class MouseState {
  constructor() {
    _defineProperty(this, "getState", () => {
      return this;
    });

    this.x = 0.5;
    this.y = 0.5;
    this.dx = 0;
    this.dy = 0;
    this.dScroll = 0;
    this.scroll = 0;
    this.btns = {
      left: 0,
      right: 0,
      middle: 0
    };
  }

}

exports.MouseState = MouseState;

class KeyboardState {
  constructor() {
    _defineProperty(this, "getState", () => {
      return this;
    });

    this.keys = [];
  }

}

exports.KeyboardState = KeyboardState;

class TouchState {
  constructor() {
    _defineProperty(this, "getState", () => {
      return this;
    });

    // this.previousTouches = [];
    this.touches = [];
  }

}

exports.TouchState = TouchState;

/***/ }),

/***/ "./src/shared/libs/inputHandler/GamepadWrapper.js":
/*!********************************************************!*\
  !*** ./src/shared/libs/inputHandler/GamepadWrapper.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GamepadWrapper = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GamepadWrapper {
  constructor() {
    _defineProperty(this, "init", () => {
      window.addEventListener("gamepadconnected", this.connectHandler);
      window.addEventListener("gamepaddisconnected", this.disconnectHandler);
      this.pollTimer = setInterval(this.pollGamepads, 1000 / 120);
    });

    _defineProperty(this, "addGamepad", gamepad => {
      this.controllers[gamepad.index] = gamepad;
    });

    _defineProperty(this, "connectHandler", event => {
      if (event.gamepad.id.indexOf("vJoy") > -1) {
        return;
      }

      this.addGamepad(event.gamepad);
    });

    _defineProperty(this, "removeGamepad", gamepad => {
      delete this.controllers[gamepad.index];
    });

    _defineProperty(this, "disconnectHandler", event => {
      this.removeGamepad(event.gamepad);
    });

    _defineProperty(this, "scanGamepads", () => {
      let gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : [];

      for (let i = 0; i < gamepads.length; i++) {
        if (gamepads[i]) {
          if (gamepads[i].id.indexOf("vJoy") > -1) {
            return;
          }

          if (gamepads[i].index in this.controllers) {
            this.controllers[gamepads[i].index] = gamepads[i];
          } else {
            this.addGamepad(gamepads[i]);
          }
        }
      }
    });

    _defineProperty(this, "pollGamepads", () => {
      if (!this.haveEvents) {
        this.scanGamepads();
      }

      for (let i = 0; i < this.callbacksAfterPoll.length; i++) {
        this.callbacksAfterPoll[i]();
      }
    });

    this.controllers = {};
    this.controllerStates = [];
    this.haveEvents = "ongamepadconnected" in window;
    this.pollTimer = null;
    this.callbacksAfterPoll = [];
  }

}

exports.GamepadWrapper = GamepadWrapper;

/***/ }),

/***/ "./src/shared/libs/inputHandler/InputHandler.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/inputHandler/InputHandler.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InputState = void 0;

var _GamepadWrapper = __webpack_require__(/*! ./GamepadWrapper.js */ "./src/shared/libs/inputHandler/GamepadWrapper.js");

var _KeyboardWrapper = __webpack_require__(/*! ./KeyboardWrapper.js */ "./src/shared/libs/inputHandler/KeyboardWrapper.js");

var _TouchWrapper = __webpack_require__(/*! ./TouchWrapper.js */ "./src/shared/libs/inputHandler/TouchWrapper.js");

var _VirtualController = __webpack_require__(/*! ./VirtualController.js */ "./src/shared/libs/inputHandler/VirtualController.js");

var _VirtualKeyboard = __webpack_require__(/*! ./VirtualKeyboard.js */ "./src/shared/libs/inputHandler/VirtualKeyboard.js");

var _VirtualMouse = __webpack_require__(/*! ./VirtualMouse.js */ "./src/shared/libs/inputHandler/VirtualMouse.js");

var _VirtualTouchpad = __webpack_require__(/*! ./VirtualTouchpad.js */ "./src/shared/libs/inputHandler/VirtualTouchpad.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class InputState {
  constructor() {
    this.changed = false;
    this.controller = {
      btns: 0,
      axes: [0, 0, 0, 0, 0, 0] // gyro: {
      // 	x: 0,
      // 	y: 0,
      // 	z: 0,
      // },
      // accel: {
      // 	x: 0,
      // 	y: 0,
      // 	z: 0,
      // },

    };
    this.mouse = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      dScroll: 0,
      btns: {
        left: 0,
        right: 0,
        middle: 0
      }
    };
    this.keyboard = {
      keys: []
    };
  }

  setControllerState(state) {
    this.controller.btns = state.btns;
    this.controller.axes = state.axes;
  }

  setKeyboardState(state) {
    this.keyboard.keys = state.keys;
  }

  setMouseState(state) {
    this.mouse.x = state.x;
    this.mouse.y = state.y;
    this.mouse.dx = state.dx;
    this.mouse.dy = state.dy;
    this.mouse.dScroll = state.dScroll;
    this.mouse.btns = { ...state.btns
    };
  }

  setState(state) {
    // controller
    if (state.controller != null) {
      this.controller = state.controller;
    } // mouse


    if (state.mouse != null) {
      this.mouse = state.mouse;
    } // keyboard


    if (state.keyboard != null) {
      this.keyboard = state.keyboard;
    }
  }

  getState() {
    return {
      controller: this.controller,
      mouse: this.mouse,
      keyboard: this.keyboard
    };
  }

} // map several inputs to a single virtual controller:


exports.InputState = InputState;

class InputHandler {
  constructor(isMobile) {
    _defineProperty(this, "init", () => {
      this.keyboardWrapper.init();
      this.gamepadWrapper.init();
    });

    _defineProperty(this, "destroy", () => {
      this.keyboardWrapper.destroy();
      this.gamepadWrapper.destroy();
      this.touchWrapper.destroy();
      this.mouse.destroy();
    });

    // initialize gamepad wrapper:
    this.gamepadWrapper = new _GamepadWrapper.GamepadWrapper();
    this.keyboardWrapper = new _KeyboardWrapper.KeyboardWrapper();
    this.touchWrapper = new _TouchWrapper.TouchWrapper();
    this.isMobile = isMobile; // current device being used:

    this.currentInputMode = "keyboard"; // represents a controller's current state:
    // pass gamepadWrapper to constructor:

    this.controller = new _VirtualController.VirtualController(this.gamepadWrapper); // the current state of the keyboard:

    this.keyboard = new _VirtualKeyboard.VirtualKeyboard(this.keyboardWrapper); // the current state of the mouse:

    this.mouse = new _VirtualMouse.VirtualMouse(); // the touch controls state:

    this.touchpad = new _VirtualTouchpad.VirtualTouchpad(this.touchWrapper); // real mode:

    this.realMode = false; // output to be read:

    this.inputState = new InputState();
    this.oldInputState = this.inputState;
    this.oldInputStateString = JSON.stringify(this.inputState); // init:

    if (!this.isMobile) {
      this.controller.init();
    }
  }

  pollDevices(touchControls) {
    let updatedState = new InputState();
    updatedState = this.oldInputState;

    if (!this.isMobile) {
      if (!this.realMode) {
        // controller:
        this.controller.poll();

        if (this.controller.changed) {
          this.controller.changed = false;
          this.currentInputMode = "controller";
          updatedState.setControllerState(this.controller.getState());
        } else {
          // keyboard:
          this.keyboard.poll();

          if (this.keyboard.changed) {
            this.keyboard.changed = false;
            this.currentInputMode = "keyboard";
            updatedState.setControllerState(this.keyboard.getControllerState());
          }

          if (this.mouse.settings.enabled && this.mouse.changed) {
            this.mouse.changed = false;
            updatedState.controller.btns = this.keyboard.getControllerState().btns | this.mouse.getControllerState().btns;
            updatedState.controller.axes[2] = this.mouse.cstate.axes[2];
            updatedState.controller.axes[3] = this.mouse.cstate.axes[3]; // triggers:

            updatedState.controller.axes[4] = (updatedState.controller.btns & 1 << 5) != 0 ? 1 : 0;
            updatedState.controller.axes[5] = (updatedState.controller.btns & 1 << 14) != 0 ? 1 : 0;
          }
        }
      } else {
        // keyboard & mouse:
        if (this.keyboard.settings.enabled) {
          if (this.mouse.settings.enabled && this.mouse.inCanvas || !this.mouse.settings.enabled) {
            this.keyboard.poll();
            updatedState.setKeyboardState(this.keyboard.getState());
          }
        }

        if (this.mouse.settings.enabled && this.mouse.changed) {
          this.mouse.changed = false;
          updatedState.setMouseState(this.mouse.getState());
        }
      }
    }

    if (touchControls) {
      // touchpad:
      this.touchpad.poll();

      if (this.touchpad.changed) {
        this.touchpad.changed = false;
        this.currentInputMode = "touchpad";
        updatedState.setControllerState(this.touchpad.getControllerState());
      }
    }

    let updatedStateString = JSON.stringify(updatedState);

    if (updatedStateString != this.oldInputStateString || this.mouse.exception) {
      this.mouse.exception = false;
      this.inputState.setState(updatedState);
      this.oldInputState = updatedState;
      this.oldInputStateString = updatedStateString;
      this.changed = true;
    }
  }

  getState() {
    return this.inputState.getState();
  }

}

exports.default = InputHandler;

/***/ }),

/***/ "./src/shared/libs/inputHandler/KeyboardWrapper.js":
/*!*********************************************************!*\
  !*** ./src/shared/libs/inputHandler/KeyboardWrapper.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyboardWrapper = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const MODS = [16, 18, 17, 91];

class KeyboardWrapper {
  constructor() {
    _defineProperty(this, "init", () => {
      document.addEventListener("keypress", this.handleKeypress, false);
      document.addEventListener("keydown", this.handleKeydown, false);
      document.addEventListener("keyup", this.handleKeyup, false);
      window.addEventListener("focus", this.resetModifiers, false);
    });

    _defineProperty(this, "destroy", () => {
      document.removeEventListener("keypress", this.handleKeypress);
      document.removeEventListener("keydown", this.handleKeydown);
      document.removeEventListener("keyup", this.handleKeyup);
      window.removeEventListener("focus", this.resetModifiers);
    });

    _defineProperty(this, "keyCode", k => {
      return this.map[k] || k.charCodeAt(0); // return this.map[k] || k.toUpperCase().charCodeAt(0);
    });

    _defineProperty(this, "handleKeypress", event => {
      let keyCode = event.keyCode;
      let shiftKey = event.shiftKey;

      if (keyCode >= 97 && keyCode <= 122) {
        this.modifiers.capslock = shiftKey;
      } else if (keyCode >= 65 && keyCode <= 90 && !(shiftKey && this.IS_MAC)) {
        this.modifiers.capslock = !shiftKey;
      }
    });

    _defineProperty(this, "handleKeydown", event => {
      let keyCode = event.keyCode;
      let modified = false;

      if (!event.shiftKey && !this.modifiers.capslock) {
        if (keyCode >= 65 && keyCode <= 90) {
          keyCode += 32;
          modified = true;
        }
      }

      if (keyCode === 93 || keyCode === 224) {
        keyCode = 91; // right command on webkit, command on Gecko
      }

      if (keyCode === 20) {
        return;
      }

      if (keyCode >= 112 && keyCode <= 130) {
        if (!modified) {
          event.preventDefault();
        }
      }

      if (window.inputHandler.mouse.inCanvas) {
        event.preventDefault();
      }

      if (this.pressedKeys.indexOf(keyCode) === -1) {
        this.pressedKeys.push(keyCode);
      }

      if (keyCode in MODS) {
        this.modifiers[this.map[keyCode]] = true;
        return;
      } // ignore key presses if a select, textarea, or input is focused


      let tagName = (event.target || event.srcElement).tagName;

      if (!(tagName == "INPUT" || tagName == "SELECT" || tagName == "TEXTAREA")) {
        return;
      }
    });

    _defineProperty(this, "handleKeyup", event => {
      let keyCode = event.keyCode;

      if (!event.shiftKey && !this.modifiers.capslock) {
        if (keyCode >= 65 && keyCode <= 90) {
          keyCode += 32;
        }
      }

      if (keyCode === 93 || keyCode === 224) {
        keyCode = 91; // right command on webkit, command on Gecko
      }

      if (keyCode === 20) {
        return;
      }

      if (window.inputHandler.mouse.inCanvas) {
        event.preventDefault();
      } // remove key


      let index = this.pressedKeys.indexOf(keyCode);

      if (index >= 0) {
        this.pressedKeys.splice(index, 1);
      }

      if (keyCode >= 112 && keyCode <= 130) {// event.preventDefault();
      }

      if (keyCode in MODS) {
        this.modifiers[this.map[keycode]] = false;
      }
    });

    _defineProperty(this, "isPressed", k => {
      k = typeof k === "string" ? this.keyCode(k) : k;
      return this.pressedKeys.indexOf(k) !== -1;
    });

    _defineProperty(this, "wasPressed", (k, pks) => {
      k = typeof k === "string" ? this.keyCode(k) : k;
      return pks.indexOf(k) !== -1;
    });

    _defineProperty(this, "getPressedKeyCodes", () => {
      return this.pressedKeys.slice(0);
    });

    _defineProperty(this, "resetModifiers", () => {
      for (let key in this.modifiers) {
        this.modifiers[key] = false;
      }
    });

    this.pressedKeys = [];
    this.werePressedKeys = [];
    this.settings = {
      disableKeys: false
    };
    this.IS_MAC = /Mac/.test(navigator.platform);
    this.modifiers = {
      shift: false,
      alt: false,
      option: false,
      ctrl: false,
      command: false,
      capslock: false
    }; // special keys

    this.map = {
      backspace: 8,
      tab: 9,
      clear: 12,
      enter: 13,
      return: 13,
      esc: 27,
      escape: 27,
      space: 32,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      del: 46,
      delete: 46,
      home: 36,
      end: 35,
      pageup: 33,
      pagedown: 34,
      shift: 16,
      alt: 18,
      option: 18,
      ctrl: 17,
      command: 91,
      ",": 188,
      ".": 190,
      "/": 191,
      "`": 192,
      "-": 189,
      "=": 187,
      ";": 186,
      "'": 222,
      "[": 219,
      "]": 221,
      "\\": 220
    };

    for (let k = 1; k < 20; k++) {
      this.map["f" + k] = 111 + k;
    }
  }

}

exports.KeyboardWrapper = KeyboardWrapper;

/***/ }),

/***/ "./src/shared/libs/inputHandler/TouchWrapper.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/inputHandler/TouchWrapper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchWrapper = void 0;

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

var _nipplejs = _interopRequireDefault(__webpack_require__(/*! nipplejs */ "./node_modules/nipplejs/dist/nipplejs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// window.nipplejs = nipplejs;
let btnList = {
  a: 1,
  b: 1,
  x: 1,
  y: 1,
  up: 1,
  down: 1,
  left: 1,
  right: 1,
  l: 1,
  zl: 1,
  r: 1,
  zr: 1,
  minus: 1,
  plus: 1,
  capture: 1,
  home: 1
};
const leftButtons = {
  up: 1,
  down: 1,
  left: 1,
  right: 1,
  l: 1,
  zl: 1,
  minus: 1,
  capture: 1
};

class TouchWrapper {
  constructor() {
    _defineProperty(this, "init", (leftZone, rightZone) => {
      let leftJoyStick = {
        zone: leftZone,
        mode: "static",
        catchDistance: 10,
        color: "#FF3C28",
        position: {
          left: "50%",
          top: "50%"
        },
        size: 60,
        restOpacity: 0,
        fadeTime: 1e99
      };
      let rightJoyStick = {
        zone: rightZone,
        mode: "static",
        catchDistance: 10,
        color: "#0AB9E6",
        position: {
          left: "50%",
          top: "50%"
        },
        size: 60,
        restOpacity: 0,
        fadeTime: 1e99
      };
      this.leftStick = _nipplejs.default.create(leftJoyStick);
      this.rightStick = _nipplejs.default.create(rightJoyStick);
      this.bindJoysticks();
    });

    _defineProperty(this, "bindJoysticks", () => {
      let stickSize = 60;
      let s1 = stickSize;
      let s2 = stickSize / 2;
      this.leftStick.on("start", (evt, data) => {
        let pos = data.frontPosition;
        pos.x = (pos.x + s2) / s1 * 2 - 1;
        pos.y = -((pos.y + s2) / s1 * 2 - 1);
        this.sticks.lx = pos.x;
        this.sticks.ly = pos.y;
        this.leftActive = true;
      }).on("end", (evt, data) => {
        this.sticks.lx = 0;
        this.sticks.ly = 0;
        this.leftActive = false;
      }).on("move", (evt, data) => {
        let pos = data.instance.frontPosition;
        pos.x = (pos.x + s2) / s1 * 2 - 1;
        pos.y = -((pos.y + s2) / s1 * 2 - 1);
        this.sticks.lx = pos.x;
        this.sticks.ly = pos.y;
      });
      this.rightStick.on("start", (evt, data) => {
        let pos = data.frontPosition;
        pos.x = (pos.x + s2) / s1 * 2 - 1;
        pos.y = -((pos.y + s2) / s1 * 2 - 1);
        this.sticks.rx = pos.x;
        this.sticks.ry = pos.y;
        this.rightActive = true;
      }).on("end", (evt, data) => {
        this.sticks.rx = 0;
        this.sticks.ry = 0;
        this.rightActive = false;
      }).on("move", (evt, data) => {
        let pos = data.instance.frontPosition;
        pos.x = (pos.x + s2) / s1 * 2 - 1;
        pos.y = -((pos.y + s2) / s1 * 2 - 1);
        this.sticks.rx = pos.x;
        this.sticks.ry = pos.y;
      });
    });

    _defineProperty(this, "getName", names => {
      for (let i = 0; i < names.length; i++) {
        if (btnList[names[i]]) {
          let isLeftButton = !!leftButtons[names[i]];

          if (isLeftButton && this.leftActive || !isLeftButton && this.rightActive) {
            return "other";
          }

          return names[i];
        }
      }

      return "other";
    });

    _defineProperty(this, "ongoingTouchIndexById", idToFind => {
      for (let i = 0; i < this.ongoingTouches.length; i++) {
        let id = this.ongoingTouches[i].identifier;

        if (id == idToFind) {
          return i;
        }
      }

      return -1; // not found
    });

    _defineProperty(this, "handleTouchStart", event => {
      let touches = event.changedTouches;

      if (!touches) {
        touches = [{
          clientX: event.clientX,
          clientY: event.clientY,
          identifier: 0
        }];
      }

      for (let i = 0; i < touches.length; i++) {
        this.ongoingTouches.push((0, _utils.pick)("identifier", "clientX", "clientY")(touches[i]));
        this.activeTargets[this.getName(document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList)] = true;
      }
    });

    _defineProperty(this, "handleTouchEnd", event => {
      // event.preventDefault();
      let touches = event.changedTouches;

      if (!touches) {
        touches = [{
          clientX: event.clientX,
          clientY: event.clientY,
          identifier: 0
        }];
      }

      for (let i = 0; i < touches.length; i++) {
        let idx = this.ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
          this.ongoingTouches.splice(idx, 1); // remove it; we're done

          this.activeTargets[this.getName(document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList)] = false;
        } else {
          // console.log("can't figure out which touch to end");
          this.activeTargets = [];
          this.ongoingTouches = [];
        }
      }
    });

    _defineProperty(this, "handleTouchCancel", event => {
      let touches = event.changedTouches;

      if (!touches) {
        touches = [{
          clientX: event.clientX,
          clientY: event.clientY,
          identifier: 0
        }];
      }

      for (let i = 0; i < touches.length; i++) {
        let idx = this.ongoingTouchIndexById(touches[i].identifier);

        if (idx < 0) {
          // console.log("can't figure out which touch to cancel");
          this.activeTargets = [];
          this.ongoingTouches = [];
        }

        this.ongoingTouches.splice(idx, 1); // remove it; we're done

        this.activeTargets[this.getName(document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList)] = false;
      }
    });

    _defineProperty(this, "handleTouchMove", event => {
      event.preventDefault();
      let touches = event.changedTouches;

      if (!touches) {
        if (this.ongoingTouches.length === 0) {
          return;
        }

        touches = [{
          clientX: event.clientX,
          clientY: event.clientY,
          identifier: 0
        }];
      }

      for (let i = 0; i < touches.length; i++) {
        let idx = this.ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
          let oldTarget = this.getName(document.elementFromPoint(this.ongoingTouches[idx].clientX, this.ongoingTouches[idx].clientY).classList);
          let newTarget = this.getName(document.elementFromPoint(touches[i].clientX, touches[i].clientY).classList);

          if (oldTarget != newTarget) {
            this.activeTargets[oldTarget] = false;
          }

          this.ongoingTouches.splice(idx, 1, (0, _utils.pick)("identifier", "clientX", "clientY")(touches[i])); // swap in the new touch record

          this.activeTargets[newTarget] = true;
        } else {
          // console.log("can't figure out which touch to continue");
          this.activeTargets = [];
          this.ongoingTouches = [];
        }
      }
    });

    this.ongoingTouches = [];
    this.activeTargets = {};
    document.addEventListener("touchstart", this.handleTouchStart, false);
    document.addEventListener("touchend", this.handleTouchEnd, false);
    document.addEventListener("touchcancel", this.handleTouchCancel, false);
    document.addEventListener("touchmove", this.handleTouchMove, false);
    document.addEventListener("mousedown", this.handleTouchStart, false);
    document.addEventListener("mouseup", this.handleTouchEnd, false);
    document.addEventListener("mousemove", this.handleTouchMove, false);
    /* JOYSTICKS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

    this.leftStick = null;
    this.rightStick = null;
    this.leftJoyStick = null;
    this.rightJoyStick = null;
    this.leftActive = false;
    this.rightActive = false;
    this.sticks = {
      lx: 0,
      ly: 0,
      rx: 0,
      ry: 0
    };
  }

}

exports.TouchWrapper = TouchWrapper;

/***/ }),

/***/ "./src/shared/libs/inputHandler/VirtualController.js":
/*!***********************************************************!*\
  !*** ./src/shared/libs/inputHandler/VirtualController.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualController = exports.AxisSettings = void 0;

var _DeviceStates = __webpack_require__(/*! ./DeviceStates.js */ "./src/shared/libs/inputHandler/DeviceStates.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const restPos = 0;
const AxisSettings = class AxisSettings {
  constructor(sensitivity, offset, deadzone) {
    this.sensitivity = sensitivity;
    this.offset = offset;
    this.deadzone = deadzone;
  }

};
exports.AxisSettings = AxisSettings;

class AxisMapping {
  constructor(which, activationThreshold, aboveOrBelow) {
    if (typeof which == "number") {
      this.type = "axis";
    } else {
      this.type = "button";
    }

    this.which = which;

    if (this.type == "button") {
      this.activationThreshold = activationThreshold;
      this.aboveOrBelow = aboveOrBelow;
    }

    if (this.type == "axis") {}
  }

}

class ButtonMapping {
  constructor(which, value, isAnalog) {
    this.which = which;

    if (typeof which == "string") {
      this.type = "button";
    } else if (typeof which == "number") {
      this.type = "axis";
      this.value = value;
      this.isAnalog = isAnalog;
    }
  }

}

class ButtonState {
  constructor(pressed, value) {
    this.pressed = pressed;
    this.value = value;
  }

}

class VirtualController {
  constructor(gamepadWrapper) {
    _defineProperty(this, "detectControllerType", id => {
      // let reg = /^!(un)?ban ([a-zA-Z0-9]+)$/;
      let reg = /^.+ Vendor: (.+) Product: (.+)\)$/i;
      let res = reg.exec(id);

      if (/xbox/i.test(id)) {
        return "xbox";
      }

      if (res) {
        // DS4:
        if (res[1] === "054c" && res[2] === "09cc") {
          return "DS4";
        } // ?? probably DS4:


        if (res[1] === "054c" && res[2] === "05c4") {
          alert("if you see this, tell the dev what controller you're using on the discord server");
          return "DS4";
        } // PS3 controller:


        if (res[1] === "054c" && res[2] === "0268") {
          return "DS4";
        }
      } // PS2 controller:


      if (/twin/i.test(id)) {
        return "DS4";
      }

      if (/Pro Controller/i.test(id)) {
        return "proController";
      }

      return null;
    });

    this.gamepadWrapper = gamepadWrapper;
    this.cstate = new _DeviceStates.ControllerState();
    this.getState = this.getState.bind(this);
    this.oldState = {
      buttons: [],
      axes: []
    };

    for (let i = 0; i < 50; i++) {
      this.oldState.buttons.push(new ButtonState(0, 0));
      this.oldState.axes.push(0);
    }

    this.changed = false;
    this.lastChangedButton = null;
    this.lastChangedAxis = null; // this.gamepadList = [];

    this.triggerIndexes = [];
    this.poll = this.poll.bind(this);
    this.autoSelectGamepad = this.autoSelectGamepad.bind(this);
    this.autoSelectInterval = null;
    this.settings = {
      controllerIndex: null,
      detectedType: null,
      axes: [new AxisSettings(1, 0, 0.1), new AxisSettings(-1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(-1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1), new AxisSettings(1, 0, 0.1)],
      map: {
        buttons: [new ButtonMapping("b"), new ButtonMapping("a"), new ButtonMapping("y"), new ButtonMapping("x"), new ButtonMapping("l"), new ButtonMapping("r"), new ButtonMapping("zl"), new ButtonMapping("zr"), new ButtonMapping("minus"), new ButtonMapping("plus"), new ButtonMapping("lstick"), new ButtonMapping("rstick"), new ButtonMapping("up"), new ButtonMapping("down"), new ButtonMapping("left"), new ButtonMapping("right"), new ButtonMapping("home"), new ButtonMapping("capture"), // extra:
        new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping(""), new ButtonMapping("")],
        axes: [new AxisMapping(0), new AxisMapping(1), new AxisMapping(2), new AxisMapping(3), new AxisMapping(4), new AxisMapping(5), new AxisMapping(6), new AxisMapping(7), new AxisMapping(8), new AxisMapping(9), new AxisMapping(10), new AxisMapping(11), new AxisMapping(12), new AxisMapping(13), new AxisMapping(14), new AxisMapping(15), new AxisMapping(16)]
      }
    };
  }

  autoSelectGamepad() {
    // only auto select if one hasn't already been selected:
    if (this.settings.controllerIndex != null) {
      clearInterval(this.autoSelectInterval); // return;// removed because we may have changed controllers
    } // auto select an xbox / playstation controller:


    let keys = [];

    for (let key in this.gamepadWrapper.controllers) {
      let controller = this.gamepadWrapper.controllers[key];
      key = parseInt(key);
      let detectedType = this.detectControllerType(controller.id);

      if (detectedType) {
        this.settings.controllerIndex = key;
        this.settings.detectedType = detectedType;
      }

      keys.push(key);
    } // didn't find a known controller, just pick the first one if there is one:


    if (this.settings.controllerIndex == null && keys.length > 0) {
      this.settings.controllerIndex = keys[0];
    }
  }

  init() {
    this.gamepadWrapper.callbacksAfterPoll.push(this.poll);
    setTimeout(this.autoSelectGamepad, 2000);
    this.autoSelectInterval = setInterval(this.autoSelectGamepad, 10000);
  }

  poll() {
    let controller = this.gamepadWrapper.controllers[this.settings.controllerIndex]; // console.log(controller);
    // console.log(this.gamepadWrapper.controllers);
    // console.log(this.settings.controllerIndex);

    if (!controller) {
      return;
    }

    let oldState = JSON.stringify(this.cstate.getState()); // map buttons and axes to VirtualProController:
    // reset buttons:

    for (let key in this.cstate.buttons) {
      this.cstate.buttons[key] = 0;
    } // buttons:


    for (let j = 0; j < controller.buttons.length; j++) {
      let button = controller.buttons[j];
      let mapping = this.settings.map.buttons[j];
      let oldPressed = this.oldState.buttons[j].pressed;
      let oldValue = this.oldState.buttons[j].value;
      let newPressed = button.pressed;
      let newValue = button.value; // if it's changed:

      if (oldPressed != newPressed || oldValue != newValue) {
        // console.log(j);
        this.lastChangedButton = j;
      }

      this.oldState.buttons[j].pressed = button.pressed;
      this.oldState.buttons[j].value = button.value;

      if (j > 50) {
        continue;
      }

      let triggerIndex = this.triggerIndexes.indexOf(j);

      if (triggerIndex > -1) {
        this.cstate.axes[4 + triggerIndex] = button.value; // continue;
      }

      if (this.triggerIndexes.length < 2) {
        // check if it's a float:
        if (button.value % 1 != 0 && this.triggerIndexes.indexOf(j) === -1) {
          this.triggerIndexes.push(j);
          this.triggerIndexes.sort();
        }
      }

      if (mapping.type === "button") {
        // this.cstate.buttons[mapping.which] = button.pressed ? 1 : 0;
        this.cstate.buttons[mapping.which] = this.cstate.buttons[mapping.which] | (button.pressed ? 1 : 0);
      } else if (mapping.type === "axis") {
        console.log("something is wrong"); // TODO:
        // this.cstate.axes[mapping.which] = button.pressed ? button.value : 0;
      }
    } // axes:


    for (let j = 0; j < controller.axes.length; j++) {
      let axis = controller.axes[j];
      let mapping = this.settings.map.axes[j];
      let oldValue = this.oldState.axes[j];
      let newValue = axis; // if it's changed:

      if (oldValue != newValue) {
        this.lastChangedAxis = j;
      }

      this.oldState.axes[j] = axis;

      if (mapping.type == "axis") {
        let ax = this.settings.axes[mapping.which];

        if (!ax) {
          console.log("mapping error?");
          console.log(this.settings.axes);
          console.log(mapping.which);
          return;
        }

        let x = axis * ax.sensitivity; // x = x / 2 + 0.5;
        // x *= 255;

        this.cstate.axes[mapping.which] = x + this.settings.axes[mapping.which].offset;

        if (Math.abs(restPos - this.cstate.axes[mapping.which]) < this.settings.axes[mapping.which].deadzone) {
          this.cstate.axes[mapping.which] = restPos;
        } // this.cstate.axes[mapping.which] = axis;

      } else if (mapping.type == "button") {
        if (mapping.aboveOrBelow) {
          this.cstate.buttons[mapping.which] = axis > mapping.activationThreshold ? 1 : 0;
        } else {
          this.cstate.buttons[mapping.which] = axis < mapping.activationThreshold ? 1 : 0;
        }
      }
    }

    let newState = JSON.stringify(this.cstate.getState());

    if (newState != oldState) {
      this.changed = true;
    }
  }

  getState() {
    return this.cstate.getState();
  }

}

exports.VirtualController = VirtualController;

/***/ }),

/***/ "./src/shared/libs/inputHandler/VirtualKeyboard.js":
/*!*********************************************************!*\
  !*** ./src/shared/libs/inputHandler/VirtualKeyboard.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualKeyboard = void 0;

var _DeviceStates = __webpack_require__(/*! ./DeviceStates.js */ "./src/shared/libs/inputHandler/DeviceStates.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SPECIAL_KEYS = {
  8: "backspace",
  9: "tab",
  13: "enter",
  16: "shift",
  17: "control",
  18: "alt",
  20: "capslock",
  // capslock
  27: "escape",
  32: "space",
  33: "pageup",
  34: "pagedown",
  35: "end",
  36: "home",
  37: "left",
  38: "up",
  39: "right",
  40: "down",
  46: "delete",
  188: ",",
  190: ".",
  191: "/",
  192: "`",
  189: "-",
  187: "=",
  186: ";",
  222: "'",
  219: "[",
  221: "]",
  220: "\\"
};

class VirtualKeyboard {
  constructor(keyboardWrapper) {
    _defineProperty(this, "poll", () => {
      let oldControllerState = this.cstate.getState();
      this.cstate.axes[0] = 0;
      this.cstate.axes[1] = 0;

      if (this.kW.isPressed(this.map.LU)) {
        this.cstate.axes[1] += 1;
      } else if (this.kW.wasPressed(this.map.LU, this.wasPressedKeyCodes)) {
        this.cstate.axes[1] = 0;
      }

      if (this.kW.isPressed(this.map.LD)) {
        this.cstate.axes[1] -= 1;
      } else if (this.kW.wasPressed(this.map.LD, this.wasPressedKeyCodes)) {
        this.cstate.axes[1] = 0;
      }

      if (this.kW.isPressed(this.map.LL)) {
        this.cstate.axes[0] -= 1;
      } else if (this.kW.wasPressed(this.map.LL, this.wasPressedKeyCodes)) {
        this.cstate.axes[0] = 0;
      }

      if (this.kW.isPressed(this.map.LR)) {
        this.cstate.axes[0] += 1;
      } else if (this.kW.wasPressed(this.map.LR, this.wasPressedKeyCodes)) {
        this.cstate.axes[0] = 0;
      }

      if (this.kW.isPressed(this.map.a)) {
        this.cstate.buttons.a = 1;
      } else if (this.kW.wasPressed(this.map.a, this.wasPressedKeyCodes)) {
        this.cstate.buttons.a = 0;
      }

      if (this.kW.isPressed(this.map.b)) {
        this.cstate.buttons.b = 1;
      } else if (this.kW.wasPressed(this.map.b, this.wasPressedKeyCodes)) {
        this.cstate.buttons.b = 0;
      }

      if (this.kW.isPressed(this.map.x)) {
        this.cstate.buttons.x = 1;
      } else if (this.kW.wasPressed(this.map.x, this.wasPressedKeyCodes)) {
        this.cstate.buttons.x = 0;
      }

      if (this.kW.isPressed(this.map.y)) {
        this.cstate.buttons.y = 1;
      } else if (this.kW.wasPressed(this.map.y, this.wasPressedKeyCodes)) {
        this.cstate.buttons.y = 0;
      }

      if (this.kW.isPressed(this.map.up)) {
        this.cstate.buttons.up = 1;
      } else if (this.kW.wasPressed(this.map.up, this.wasPressedKeyCodes)) {
        this.cstate.buttons.up = 0;
      }

      if (this.kW.isPressed(this.map.down)) {
        this.cstate.buttons.down = 1;
      } else if (this.kW.wasPressed(this.map.down, this.wasPressedKeyCodes)) {
        this.cstate.buttons.down = 0;
      }

      if (this.kW.isPressed(this.map.left)) {
        this.cstate.buttons.left = 1;
      } else if (this.kW.wasPressed(this.map.left, this.wasPressedKeyCodes)) {
        this.cstate.buttons.left = 0;
      }

      if (this.kW.isPressed(this.map.right)) {
        this.cstate.buttons.right = 1;
      } else if (this.kW.wasPressed(this.map.right, this.wasPressedKeyCodes)) {
        this.cstate.buttons.right = 0;
      }

      this.cstate.axes[2] = 0;
      this.cstate.axes[3] = 0;

      if (this.kW.isPressed(this.map.RU)) {
        this.cstate.axes[3] += 1;
      } else if (this.kW.wasPressed(this.map.RU, this.wasPressedKeyCodes)) {
        this.cstate.axes[3] = 0;
      }

      if (this.kW.isPressed(this.map.RD)) {
        this.cstate.axes[3] -= 1;
      } else if (this.kW.wasPressed(this.map.RD, this.wasPressedKeyCodes)) {
        this.cstate.axes[3] = 0;
      }

      if (this.kW.isPressed(this.map.RL)) {
        this.cstate.axes[2] -= 1;
      } else if (this.kW.wasPressed(this.map.RL, this.wasPressedKeyCodes)) {
        this.cstate.axes[2] = 0;
      }

      if (this.kW.isPressed(this.map.RR)) {
        this.cstate.axes[2] += 1;
      } else if (this.kW.wasPressed(this.map.RR, this.wasPressedKeyCodes)) {
        this.cstate.axes[2] = 0;
      }

      if (this.kW.isPressed(this.map.minus)) {
        this.cstate.buttons.minus = 1;
      } else if (this.kW.wasPressed(this.map.minus, this.wasPressedKeyCodes)) {
        this.cstate.buttons.minus = 0;
      }

      if (this.kW.isPressed(this.map.plus)) {
        this.cstate.buttons.plus = 1;
      } else if (this.kW.wasPressed(this.map.plus, this.wasPressedKeyCodes)) {
        this.cstate.buttons.plus = 0;
      }

      if (this.kW.isPressed(this.map.capture)) {
        this.cstate.buttons.capture = 1;
      } else if (this.kW.wasPressed(this.map.capture, this.wasPressedKeyCodes)) {
        this.cstate.buttons.capture = 0;
      }

      if (this.kW.isPressed(this.map.home)) {
        this.cstate.buttons.home = 1;
      } else if (this.kW.wasPressed(this.map.home, this.wasPressedKeyCodes)) {
        this.cstate.buttons.home = 0;
      }

      if (this.kW.isPressed(this.map.l)) {
        this.cstate.buttons.l = 1;
      } else if (this.kW.wasPressed(this.map.l, this.wasPressedKeyCodes)) {
        this.cstate.buttons.l = 0;
      }

      if (this.kW.isPressed(this.map.r)) {
        this.cstate.buttons.r = 1;
      } else if (this.kW.wasPressed(this.map.r, this.wasPressedKeyCodes)) {
        this.cstate.buttons.r = 0;
      }

      if (this.kW.isPressed(this.map.zl)) {
        this.cstate.buttons.zl = 1;
        this.cstate.axes[4] = 1;
      } else if (this.kW.wasPressed(this.map.zl, this.wasPressedKeyCodes)) {
        this.cstate.buttons.zl = 0;
        this.cstate.axes[4] = 0;
      }

      if (this.kW.isPressed(this.map.zr)) {
        this.cstate.buttons.zr = 1;
        this.cstate.axes[5] = 1;
      } else if (this.kW.wasPressed(this.map.zr, this.wasPressedKeyCodes)) {
        this.cstate.buttons.zr = 0;
        this.cstate.axes[5] = 0;
      }

      if (this.kW.isPressed(this.map.lstick)) {
        this.cstate.buttons.lstick = 1;
      } else if (this.kW.wasPressed(this.map.lstick, this.wasPressedKeyCodes)) {
        this.cstate.buttons.lstick = 0;
      }

      if (this.kW.isPressed(this.map.rstick)) {
        this.cstate.buttons.rstick = 1;
      } else if (this.kW.wasPressed(this.map.rstick, this.wasPressedKeyCodes)) {
        this.cstate.buttons.rstick = 0;
      }

      let newKeycodes = this.kW.getPressedKeyCodes();

      if (JSON.stringify(newKeycodes) != JSON.stringify(this.wasPressedKeyCodes)) {
        this.changed = true;
        this.wasPressedKeyCodes = newKeycodes;
        this.kstate.keys = [];

        for (let i = 0; i < this.wasPressedKeyCodes.length; i++) {
          if (SPECIAL_KEYS[this.wasPressedKeyCodes[i]]) {
            this.kstate.keys.push(SPECIAL_KEYS[this.wasPressedKeyCodes[i]]);
          } else {
            this.kstate.keys.push(String.fromCharCode(this.wasPressedKeyCodes[i]));
          }
        }
      }

      this.wasPressedKeyCodes = newKeycodes;
      let newControllerState = this.cstate.getState(); // reset if nothing changed:

      if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
        this.cstate.setState(oldControllerState);
      } else {
        this.changed = true;
      }
    });

    _defineProperty(this, "toggle", state => {
      this.settings.enabled = state;
    });

    _defineProperty(this, "init", () => {
      this.kW.init();
    });

    _defineProperty(this, "getControllerState", () => {
      return this.cstate.getState();
    });

    _defineProperty(this, "getState", () => {
      return this.kstate;
    });

    this.kW = keyboardWrapper;
    this.changed = false;
    this.cstate = new _DeviceStates.ControllerState();
    this.kstate = new _DeviceStates.KeyboardState(); // a list of keys to keep track of:

    this.keysToTrack = []; // function to call when state updates:
    // this.updateParentState = () => {};

    this.map = {
      LU: "W",
      LD: "S",
      LL: "A",
      LR: "D",
      RU: "I",
      RD: "K",
      RL: "J",
      RR: "L",
      a: "right",
      b: "down",
      x: "up",
      y: "left",
      up: "T",
      down: "G",
      left: "F",
      right: "H",
      lstick: "R",
      rstick: "Y",
      l: "U",
      zl: "Q",
      r: "O",
      zr: "E",
      minus: "-",
      plus: "=",
      capture: "1",
      home: "2"
    };
    this.wasPressedKeyCodes = [];
    this.settings = {
      enabled: false,
      analogStickMode: false,
      stickAttack: 0.4,
      stickReturn: 0.3
    };
    this.lastPressedKey = null;
    document.addEventListener("keydown", event => {
      let key = event.key;

      if (!key) {
        return;
      }

      if (key.indexOf("Arrow") > -1) {
        key = key.substring(5).toLowerCase();
      }

      this.lastPressedKey = key;
    });
  } // get controller state:


}

exports.VirtualKeyboard = VirtualKeyboard;

/***/ }),

/***/ "./src/shared/libs/inputHandler/VirtualMouse.js":
/*!******************************************************!*\
  !*** ./src/shared/libs/inputHandler/VirtualMouse.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualMouse = void 0;

var _DeviceStates = __webpack_require__(/*! ./DeviceStates.js */ "./src/shared/libs/inputHandler/DeviceStates.js");

var _VirtualController = __webpack_require__(/*! ./VirtualController.js */ "./src/shared/libs/inputHandler/VirtualController.js");

var _utils = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const restPos = 0;

class VirtualMouse {
  constructor() {
    _defineProperty(this, "onPointerLockChange", () => {
      if (document.pointerLockElement == null) {
        this.toggle(false);
      }
    });

    _defineProperty(this, "drawCircle", (x, y) => {
      x = Math.round(x * this.canvas.width);
      y = Math.round(y * this.canvas.height);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.fillStyle = "#000";
      this.ctx.arc(x, y, 6, 0, 2 * Math.PI, true);
      this.ctx.fill();
      this.ctx.beginPath();
      this.ctx.fillStyle = "#FFF";
      this.ctx.arc(x, y, 4, 0, 2 * Math.PI, true);
      this.ctx.fill();
    });

    _defineProperty(this, "getMouseInput1", event => {
      if (this.settings.relativeMode) {
        // on mouse stop:
        clearTimeout(this.mouseMoveTimer);
        this.mouseMoveTimer = setTimeout(() => {
          this.changed = true;
          this.cstate.axes[2] = restPos;
          this.cstate.axes[3] = restPos;
        }, 80);
      }

      if (this.settings.relativeMode) {
        let x = restPos + event.movementX * this.settings.axes[0].sensitivity;
        let y = restPos - event.movementY * this.settings.axes[1].sensitivity;
        this.mstate.dx = (0, _utils.clamp)(x, -1, 1);
        this.mstate.dy = (0, _utils.clamp)(y, -1, 1);
        this.cstate.axes[2] = this.mstate.dx;
        this.cstate.axes[3] = this.mstate.dy;
        this.mstate.x += x;
        this.mstate.y -= y * this.canvasRatio;
      } else {
        let rect = this.canvas.getBoundingClientRect();
        let x = (event.clientX - rect.left) / rect.width;
        let y = (event.clientY - rect.top) / rect.height;
        this.mstate.x = x;
        this.mstate.y = y;
      } // console.log(event);
      // console.log(event.clientX, event.clientY);
      // console.log(event.pageX, event.pageY);
      // console.log(event.x, event.y);
      // console.log(event.screenX, event.screenY);
      // console.log(event.offsetX, event.offsetY);
      // console.log(event.layerX, event.layerY);


      this.changed = true;
      this.mstate.x = (0, _utils.clamp)(this.mstate.x, 0, 1);
      this.mstate.y = (0, _utils.clamp)(this.mstate.y, 0, 1); // this.drawCircle(this.mstate.x, this.mstate.y);
      // if (this.mstate.x === 0 || this.mstate.x === 1) {
      // this.exitCanvas();
      // }
    });

    _defineProperty(this, "getMouseInput2", event => {
      this.changed = true;
      let pressed = event.type == "mousedown" ? 1 : 0;
      this.cstate.buttons[this.settings.map.buttons[event.which - 1]] = pressed;
      let which = this.btnMap[event.which - 1];
      this.mstate.btns[which] = pressed;

      if (this.inCanvas && which === "right" && pressed) {
        event.preventDefault();
      }
    });

    _defineProperty(this, "getMouseInput3", event => {
      this.changed = true;
      this.mstate.scroll -= event.deltaY * this.settings.axes[2].sensitivity;
      event.preventDefault();
    });

    _defineProperty(this, "init", canvas => {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvasRatio = this.canvas.width / this.canvas.height;
      window.ctx = this.ctx;
      window.canvas = this.canvas;
      canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
      document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
    });

    _defineProperty(this, "toggle", state => {
      if (!this.canvas) {
        console.log("canvas not set!");
        return;
      }

      this.settings.enabled = state;

      if (state) {
        if (this.settings.relativeMode) {
          this.canvas.requestPointerLock();
          document.addEventListener("pointerlockchange", this.onPointerLockChange, false);
        } else {
          this.canvas.addEventListener("mouseenter", this.enterCanvas, false);
          this.canvas.addEventListener("mouseleave", this.exitCanvas, false);
        }

        this.enterCanvas();
      } else {
        this.exitCanvas();
        clearTimeout(this.mouseMoveTimer);
        this.cstate.axes[2] = restPos;
        this.cstate.axes[3] = restPos;
        setTimeout(() => {
          this.settings.enabled = false;
        }, 1000);
      }
    });

    _defineProperty(this, "enterCanvas", () => {
      this.inCanvas = true;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      if (this.settings.enabled) {
        document.getElementById("picture").style = "background: #FF000060";
      }

      document.addEventListener("mousemove", this.getMouseInput1, false);
      document.addEventListener("mousedown", this.getMouseInput2, false);
      document.addEventListener("mouseup", this.getMouseInput2, false);

      if (!this.settings.relativeMode) {
        this.canvas.addEventListener("wheel", this.getMouseInput3, {
          passive: false
        });
        this.canvas.addEventListener("contextmenu", this.handleContextMenu, false);
      }
    });

    _defineProperty(this, "exitCanvas", () => {
      this.inCanvas = false;
      clearTimeout(this.mouseMoveTimer);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      document.getElementById("picture").style = "";
      document.removeEventListener("mousemove", this.getMouseInput1);
      document.removeEventListener("mousedown", this.getMouseInput2);
      document.removeEventListener("mouseup", this.getMouseInput2);

      if (!this.settings.relativeMode) {
        this.canvas.removeEventListener("wheel", this.getMouseInput3);
        this.canvas.removeEventListener("contextmenu", this.handleContextMenu);
      } else {
        document.removeEventListener("pointerlockchange", this.onPointerLockChange);
        document.exitPointerLock();
      }
    });

    _defineProperty(this, "handleContextMenu", event => {
      event.preventDefault();
    });

    _defineProperty(this, "destroy", () => {
      this.exitCanvas();
    });

    _defineProperty(this, "getControllerState", () => {
      return this.cstate.getState();
    });

    _defineProperty(this, "getState", () => {
      // return this.mstate.getState();
      if (this.mstate.scroll !== 0) {
        this.exception = true;
      } else {
        this.exception = false;
      }

      this.mstate.dScroll = this.mstate.scroll;
      this.mstate.scroll = 0;
      return this.mstate;
    });

    this.canvas = null;
    this.ctx = null;
    this.canvasRatio = 1;
    this.cstate = new _DeviceStates.ControllerState();
    this.mstate = new _DeviceStates.MouseState();
    this.btnMap = {
      0: "left",
      1: "middle",
      2: "right"
    };
    this.mouseMoveTimer = null;
    this.changed = false;
    this.exception = false;
    this.inCanvas = false;
    this.settings = {
      enabled: false,
      realMode: false,
      relativeMode: false,
      axes: [// new AxisSettings(0.08, 0, 0), // 15
      // new AxisSettings(0.08, 0, 0),
      new _VirtualController.AxisSettings(0.0006, 0, 0), new _VirtualController.AxisSettings(0.0006, 0, 0), new _VirtualController.AxisSettings(0.05, 0, 0)],
      map: {
        buttons: ["zr", "x", "zl"]
      }
    };
  }

}

exports.VirtualMouse = VirtualMouse;

/***/ }),

/***/ "./src/shared/libs/inputHandler/VirtualTouchpad.js":
/*!*********************************************************!*\
  !*** ./src/shared/libs/inputHandler/VirtualTouchpad.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualTouchpad = void 0;

var _DeviceStates = __webpack_require__(/*! ./DeviceStates.js */ "./src/shared/libs/inputHandler/DeviceStates.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class VirtualTouchpad {
  constructor(touchWrapper) {
    _defineProperty(this, "poll", () => {
      let oldControllerState = this.cstate.getState();
      this.cstate.buttons.a = this.touchWrapper.activeTargets.a ? 1 : 0;
      this.cstate.buttons.b = this.touchWrapper.activeTargets.b ? 1 : 0;
      this.cstate.buttons.x = this.touchWrapper.activeTargets.x ? 1 : 0;
      this.cstate.buttons.y = this.touchWrapper.activeTargets.y ? 1 : 0;
      this.cstate.buttons.up = this.touchWrapper.activeTargets.up ? 1 : 0;
      this.cstate.buttons.down = this.touchWrapper.activeTargets.down ? 1 : 0;
      this.cstate.buttons.left = this.touchWrapper.activeTargets.left ? 1 : 0;
      this.cstate.buttons.right = this.touchWrapper.activeTargets.right ? 1 : 0;
      this.cstate.buttons.l = this.touchWrapper.activeTargets.l ? 1 : 0;
      this.cstate.buttons.zl = this.touchWrapper.activeTargets.zl ? 1 : 0;
      this.cstate.buttons.r = this.touchWrapper.activeTargets.r ? 1 : 0;
      this.cstate.buttons.zr = this.touchWrapper.activeTargets.zr ? 1 : 0;
      this.cstate.buttons.capture = this.touchWrapper.activeTargets.capture ? 1 : 0;
      this.cstate.buttons.home = this.touchWrapper.activeTargets.home ? 1 : 0;
      this.cstate.buttons.minus = this.touchWrapper.activeTargets.minus ? 1 : 0;
      this.cstate.buttons.plus = this.touchWrapper.activeTargets.plus ? 1 : 0;
      this.cstate.axes[0] = this.touchWrapper.sticks.lx;
      this.cstate.axes[1] = this.touchWrapper.sticks.ly;
      this.cstate.axes[2] = this.touchWrapper.sticks.rx;
      this.cstate.axes[3] = this.touchWrapper.sticks.ry;
      let newControllerState = this.cstate.getState(); // reset if nothing changed:

      if (JSON.stringify(newControllerState) == JSON.stringify(oldControllerState)) {
        this.cstate.setState(oldControllerState);
      } else {
        this.changed = true;
      }
    });

    _defineProperty(this, "getControllerState", () => {
      return this.cstate.getState();
    });

    _defineProperty(this, "getState", () => {// return this.tstate;
    });

    this.touchWrapper = touchWrapper;
    this.changed = false;
    this.cstate = new _DeviceStates.ControllerState();
    this.tstate = new _DeviceStates.TouchState();
  } // get controller state:


}

exports.VirtualTouchpad = VirtualTouchpad;

/***/ }),

/***/ "./src/shared/libs/utils.js":
/*!**********************************!*\
  !*** ./src/shared/libs/utils.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.clamp = clamp;
exports.round = round;
exports.msToTime = msToTime;
exports.toggleFullscreen = toggleFullscreen;
exports.setToPercentParent = setToPercentParent;
exports.wait = wait;
exports.mathZoom = mathZoom;
exports.normalizeVector = normalizeVector;
exports.abs = abs;
exports.deleteAllCookies = deleteAllCookies;
exports.fixedLengthString = fixedLengthString;
exports.getStickString = getStickString;
exports.getAverage = getAverage;
exports.pick = pick;
exports.interpolateColor = interpolateColor;
exports.interpolateColors = interpolateColors;
exports.device = void 0;

function getCookie(name) {
  let dc = document.cookie;
  let prefix = name + "=";
  let begin = dc.indexOf("; " + prefix);
  let end;

  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin !== 0) return null;
  } else {
    begin += 2;
    end = document.cookie.indexOf(";", begin);

    if (end == -1) {
      end = dc.length;
    }
  } // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));


  return decodeURI(dc.substring(begin + prefix.length, end));
}

function setCookie(name, value, seconds) {
  let expires = "";

  if (seconds) {
    let date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

function msToTime(duration) {
  // 	var milliseconds = parseInt((duration % 1000) / 100);
  let milliseconds = parseInt(duration / 1000 % 60 % 1 * 1000);
  let seconds = parseInt(duration / 1000 % 60);
  let minutes = parseInt(duration / (1000 * 60) % 60);
  let hours = parseInt(duration / (1000 * 60 * 60) % 24);
  hours = hours < 10 ? "0" + hours : hours;

  if (hours.length == 2 || hours.length == 3 && hours[0] == "0") {
    hours = hours.substr(1);
  }

  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (minutes.length == 3 || minutes.length == 4) {
    minutes = minutes.substr(1);
  }

  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (seconds.length == 3 || seconds.length == 4) {
    seconds = seconds.substr(1);
  } //seconds = seconds.replaceAll("-", "");


  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  let time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  time = time.replaceAll("-", ""); // remove negative signs

  return time;
}

function toggleFullscreen(elem) {
  // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
  if (document.fullScreenElement !== undefined && document.fullScreenElement === null || document.msFullscreenElement !== undefined && document.msFullscreenElement === null || document.mozFullScreen !== undefined && !document.mozFullScreen || document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen) {
    if (elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

function setToPercentParent(elem, percent) {
  $(elem).height(0);
  let parentHeight = $(elem).parent().height();
  let newHeight = percent / 100 * parentHeight;
  $(elem).height(newHeight);
} // like sleep, but worse:


function wait(ms) {
  var start = new Date().getTime();
  var end = start;

  while (end < start + ms) {
    end = new Date().getTime();
  }
} // brings number closer to target by accel


function mathZoom(current, target, accel) {
  if (current == target) {
    return current;
  }

  if (Math.abs(current - target) < accel) {
    return target;
  }

  if (current < target) {
    return current + accel;
  } else {
    return current - accel;
  }
}

function normalizeVector(vector, scale) {
  let norm = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

  if (norm !== 0) {
    vector.x = scale * vector.x / norm;
    vector.y = scale * vector.y / norm;
  }

  return vector;
}

function abs(n) {
  return Math.abs(n);
} // delete all cookies:


function deleteAllCookies() {
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

function fixedLengthString(string, pad, length) {
  string = string + "";

  while (string.length < length) {
    string = pad + string;
  }

  return string;
}

function getStickString(num) {
  // round to nearest tenth:
  num = (Math.round((num + 1) * 10) / 10).toFixed(2);
  let n = num * 10;

  if (n == 0) {
    return "900";
  }

  if (n == 10) {
    return "090";
  }

  if (n == 20) {
    return "009";
  }

  if (n < 10) {
    n = 10 - n;
    n = 90 + 90 * n;
  } else {
    n = (20 - n) * 9;
  }

  return String(n).padStart(3, "0");
}

function getAverage(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

function pick(...props) {
  return o => props.reduce((a, e) => ({ ...a,
    [e]: o[e]
  }), {});
}

function interpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }

  let result = color1.slice();

  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }

  return result;
}

function interpolateColors(color1, color2, steps) {
  let stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];
  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for (let i = 0; i < steps; i++) {
    interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
  }

  return interpolatedColorArray;
}

const size = {
  mobile: "600px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};
const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  desktop: `@media (min-width: ${size.desktop})`
};
exports.device = device;

/***/ }),

/***/ "./src/shared/sagas/chat.js":
/*!**********************************!*\
  !*** ./src/shared/sagas/chat.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _chat = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");

const handleChatActions = params => {
  let list = [];
  list.push((0, _effects.takeEvery)(_chat.sendMessage, action => {
    params.socket.emit("chatMessage", {
      text: action.payload.text
    });
  }));
  return list;
};

var _default = handleChatActions;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/shared/sagas/client.js":
/*!************************************!*\
  !*** ./src/shared/sagas/client.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

var _client = __webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js");

const handleClientActions = params => {
  let list = [];
  list.push((0, _effects.takeEvery)(_client.login, action => {
    params.socket.emit("login", { ...action.payload,
      socketid: params.socket.id
    }, data => {
      if (action.payload.cb) {
        action.payload.cb(data);
      }
    });
  }));
  list.push((0, _effects.takeEvery)(_client.register, action => {
    params.socket.emit("register", { ...action.payload
    }, data => {
      if (action.payload.cb) {
        action.payload.cb(data);
      }
    });
  }));
  list.push((0, _effects.takeEvery)(_client.authenticate, action => {
    params.socket.emit("authenticate", {
      authToken: action.payload.authToken
    });
  }));
  return list;
};

var _default = handleClientActions;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/account/client.js":
/*!***************************************!*\
  !*** ./src/sockets/account/client.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = __webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js");

var _localforage = _interopRequireDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));

var _jsCookie = _interopRequireDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs:
function getAccountInfo(socket, dispatch) {
  let authToken = _jsCookie.default.get("RemoteGames");

  if (authToken) {
    socket.emit("getAccountInfo", {
      authToken: authToken,
      usernameIndex: 0
    }, data => {
      console.log(data);

      if (data.success) {
        dispatch((0, _client.updateClient)({ ...data.clientInfo,
          authToken: authToken,
          loggedIn: true
        }));
      } else {
        console.log(`AUTHENTICATION_FAILURE: ${data.reason}`); // remove the authToken if it doesn't work:

        if (data.reason === "ACCOUNT_NOT_FOUND") {
          _jsCookie.default.remove("RemoteGames");

          dispatch((0, _client.updateClient)({
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
    _localforage.default.setItem("banned", "banned");
  });
  socket.on("disconnect", data => {
    console.log("lost connection (account)"); // dispatch(updateClient({ hostAuthed: false }));
  });
  socket.on("connect", data => {
    console.log("connected (account)"); // authenticate(socket, dispatch);
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

var _default = clientEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/account/index.js":
/*!**************************************!*\
  !*** ./src/sockets/account/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = _interopRequireDefault(__webpack_require__(/*! ./client.js */ "./src/sockets/account/client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combine socket event handlers into one socket:
// import accountMapEvents from "./accountMap.js";
// import settingsEvents from "./settings.js";
const handleEvents = (socket, dispatch) => {
  socket = (0, _client.default)(socket, dispatch); // socket = accountMapEvents(socket, dispatch);

  return socket;
};

var _default = handleEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/stream/accountMap.js":
/*!******************************************!*\
  !*** ./src/sockets/stream/accountMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _accountMap = __webpack_require__(/*! src/actions/accountMap.js */ "./src/actions/accountMap.js");

// listen to events w/ given socket and dispatch actions accordingly:
const accountMapEvents = (socket, dispatch) => {
  socket.on("accountMap", data => {
    dispatch((0, _accountMap.receiveAccountMap)(data));
  });
  return socket;
};

var _default = accountMapEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/stream/chat.js":
/*!************************************!*\
  !*** ./src/sockets/stream/chat.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chat = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");

// listen to events w/ given socket and dispatch actions accordingly:
const chatSocketEvents = (socket, dispatch) => {
  socket.on("chatMessage", data => {
    dispatch((0, _chat.receiveMessage)(data));
  });
  return socket;
};

var _default = chatSocketEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/stream/client.js":
/*!**************************************!*\
  !*** ./src/sockets/stream/client.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = __webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js");

var _info = __webpack_require__(/*! src/actions/info.js */ "./src/actions/info.js");

var _localforage = _interopRequireDefault(__webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js"));

var _jsCookie = _interopRequireDefault(__webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// libs:
function authenticate(socket, dispatch) {
  let authToken = _jsCookie.default.get("RemoteGames");

  if (authToken) {
    socket.emit("authenticate", {
      authToken: authToken,
      usernameIndex: 0
    }, data => {
      if (data.success) {
        dispatch((0, _client.updateClient)({ ...data.clientInfo,
          authToken: authToken,
          loggedIn: true,
          hostAuthed: true
        }));
      } else {
        console.log(`AUTHENTICATION_FAILURE: ${data.reason}`); // remove the authToken if it doesn't work:

        if (data.reason === "ACCOUNT_NOT_FOUND") {
          _jsCookie.default.remove("RemoteGames");

          dispatch((0, _client.updateClient)({
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
    _localforage.default.setItem("banned", "banned");
  });
  socket.on("disconnect", data => {
    console.log("lost connection (host)");
    dispatch((0, _client.updateClient)({
      hostAuthed: false
    }));
    dispatch((0, _info.updateStreamInfo)({
      online: false
    }));
  });
  socket.on("connect", data => {
    console.log("connected (host)");
    authenticate(socket, dispatch);
  });
  return socket;
};

var _default = clientEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/stream/index.js":
/*!*************************************!*\
  !*** ./src/sockets/stream/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chat = _interopRequireDefault(__webpack_require__(/*! ./chat.js */ "./src/sockets/stream/chat.js"));

var _players = _interopRequireDefault(__webpack_require__(/*! ./players.js */ "./src/sockets/stream/players.js"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time.js */ "./src/sockets/stream/time.js"));

var _accountMap = _interopRequireDefault(__webpack_require__(/*! ./accountMap.js */ "./src/sockets/stream/accountMap.js"));

var _client = _interopRequireDefault(__webpack_require__(/*! ./client.js */ "./src/sockets/stream/client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combine socket event handlers into one socket:
const handleEvents = (socket, dispatch) => {
  socket = (0, _chat.default)(socket, dispatch);
  socket = (0, _players.default)(socket, dispatch);
  socket = (0, _time.default)(socket, dispatch);
  socket = (0, _accountMap.default)(socket, dispatch);
  socket = (0, _client.default)(socket, dispatch);
  return socket;
};

var _default = handleEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/stream/players.js":
/*!***************************************!*\
  !*** ./src/sockets/stream/players.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _players = __webpack_require__(/*! src/features/players.js */ "./src/features/players.js");

// listen to events w/ given socket and dispatch actions accordingly:
const playersEvents = (socket, dispatch) => {
  socket.on("controlQueues", data => {
    dispatch((0, _players.updatePlayerControlQueues)({
      queues: data
    }));
  });
  socket.on("turnStartTimes", data => {
    dispatch((0, _players.updatePlayerTurnStartTimes)(data));
  });
  socket.on("turnLengths", data => {
    dispatch((0, _players.updatePlayerTurnLengths)(data));
  });
  socket.on("controllerState", data => {
    dispatch((0, _players.updatePlayerControllerState)(data));
  });
  return socket;
};

var _default = playersEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/sockets/stream/time.js":
/*!************************************!*\
  !*** ./src/sockets/stream/time.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _time = __webpack_require__(/*! shared/features/time.js */ "./src/shared/features/time.js");

// listen to events w/ given socket and dispatch actions accordingly:
const timeEvents = (socket, dispatch) => {
  socket.on("serverTime", data => {
    dispatch((0, _time.updateServerTime)({
      time: data
    }));
  });
  /* PING @@@@@@@@@@@@@@@@@@@@@@@@@@@@ */

  let ping = 0;
  let avgSize = 5;
  setInterval(() => {
    socket.emit("ping2", Date.now(), startTime => {
      let latency = Date.now() - startTime;
      ping = (ping * (avgSize - 1) + latency) / avgSize;
      dispatch((0, _time.updatePing)({
        time: Math.round(ping)
      }));
    });
  }, 1000);
  return socket;
};

var _default = timeEvents;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ 0:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

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

/******/ });
//# sourceMappingURL=index.bundle.js.map
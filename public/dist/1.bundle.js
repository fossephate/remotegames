(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./src/components/Chat/SendMessageForm.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/components/Chat/SendMessageForm.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n#SendMessageForm {\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: space-evenly;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\tmin-height: 60px;\r\n\theight: 12%;\r\n\tpadding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n#messageBox {\r\n\tdisplay: flex;\r\n\tresize: none;\r\n\twidth: 98%;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n#messageBox:focus {\r\n\t/* border-color: #0AB9E655; */\r\n\toutline-offset: 0px !important;\r\n\toutline: none !important;\r\n\r\n\tbox-shadow: 0 0 3px blue !important;\r\n\t-moz-box-shadow: 0 0 3px blue !important;\r\n\t-webkit-box-shadow: 0 0 3px blue !important;\r\n}\r\n\r\n.messageBoxContainer {\r\n\twidth: 70%;\r\n\theight: 70%;\r\n\tfont-size: 14px;\r\n\tline-height: 20px;\r\n\t/* font-size: inherit !important; */\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./src/components/Chat/Chat.jsx":
/*!**************************************!*\
  !*** ./src/components/Chat/Chat.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _MessageList = _interopRequireDefault(__webpack_require__(/*! ./MessageList.jsx */ "./src/components/Chat/MessageList.jsx"));

var _SendMessageForm = _interopRequireDefault(__webpack_require__(/*! ./SendMessageForm.jsx */ "./src/components/Chat/SendMessageForm.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _DeviceSizes = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// react:
// material ui:
// device sizes:
// jss:
const styles = theme => ({
  root: {
    gridArea: "chat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: "1",
    padding: "5px"
  },
  [_DeviceSizes.device.tablet]: {
    root: {// position: "absolute",
      // width: "60%",
      // width: "100%",
      // padding: "5px",
    }
  },
  [_DeviceSizes.device.laptop]: {
    root: {// position: "",
      // width: "100%",
      // padding: "5px",
    }
  }
}); // @withStyles(styles)


class Chat extends _react.PureComponent {
  constructor(props) {
    super(props);
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
    }, _react.default.createElement(_MessageList.default, null), _react.default.createElement(_SendMessageForm.default, null));
  }

} // export default Chat;


var _default = (0, _styles.withStyles)(styles)(Chat);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/Chat/Message.jsx":
/*!*****************************************!*\
  !*** ./src/components/Chat/Message.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactLinkify = _interopRequireDefault(__webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/Linkify.js"));

var _TwitchIcon = _interopRequireDefault(__webpack_require__(/*! src/components/Icons/TwitchIcon.jsx */ "./src/components/Icons/TwitchIcon.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js"));

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// react:
// twitch icon:
// material ui:
const styles = theme => ({
  root: {
    wordBreak: "break-word",
    padding: "4px",
    fontSize: "14px !important" // color: theme.palette.primary.contrastText,

  },
  links: {
    // todo: use primary / secondary based on which it should be:
    // color: theme.palette.primary.contrastText,
    // color: "#1a0dab",
    color: "#0000ee"
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
  let s = time.getHours() + ":" + pad(time.getMinutes()) + " ";
  return s;
} // class Message extends PureComponent {


const Message = props => {
  let {
    classes,
    message,
    username,
    userid,
    time
  } = props;
  let source = ""; // if it's a relayed message:

  if (userid === "TPNSbot" && message[0] == "[") {
    let r = /\[(.+):(.+)\](.+)/;
    let split = message.match(r);
    source = split[1];
    let user = split[2];
    let msg = split[3]; // username = source.substr(0, 2) + ":" + user;

    username = user;
    message = msg;
  }

  let icons = [];

  if (source == "twitch") {
    icons.push(_react.default.createElement(_TwitchIcon.default, null));
  }

  icons = _react.default.Children.toArray(icons);
  return _react.default.createElement("div", {
    className: classes.root,
    userid: userid,
    onClick: props.onClick
  }, _react.default.createElement(_reactLinkify.default, {
    properties: {
      className: classes.links
    }
  }, getTimeStamp(time), icons, _react.default.createElement("b", null, username), " ", message));
};

Message.propTypes = {
  message: _propTypes.default.string.isRequired,
  username: _propTypes.default.string.isRequired,
  userid: _propTypes.default.string.isRequired
};

var _default = (0, _styles.withStyles)(styles)(Message); // export default compose(
// 	withTheme()
// 	withStyles(styles),
// )(Message);


exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/Chat/MessageList.jsx":
/*!*********************************************!*\
  !*** ./src/components/Chat/MessageList.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _Message = _interopRequireDefault(__webpack_require__(/*! ./Message.jsx */ "./src/components/Chat/Message.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _List = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js"));

var _ListItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js"));

var _ListItemIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/ListItemIcon/index.js"));

var _ListItemText = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _sweetalert = _interopRequireDefault(__webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import ScrollableFeed from "react-scrollable-feed";
// jss:
const styles = theme => ({
  root: {
    overflowY: "auto",
    // borderRadius: "8px",
    flexGrow: "1",
    marginBottom: "15px",
    "& > div:nth-child(even)": {
      // backgroundColor: "#FF3C28A4",
      // backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
      color: theme.palette.type === "dark" ? "#FFF" : "#000"
    },
    "& > div:nth-child(odd)": {
      // backgroundColor: "#0AB9E6A4",
      backgroundColor: "#2d2d2dA4",
      // backgroundColor: theme.palette.type === "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light,
      color: theme.palette.type === "dark" ? "#FFF" : "#000"
    }
  }
});

class MessageList extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.messagesEnd = null;
    this.rootRef = null;
    this.handleClick = this.handleClick.bind(this);
    this.shouldScroll = false; // this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  handleClick(event) {} // if (event.nativeEvent.which === 1) {
  // 	swal(this.props.messages[i].userid);
  // } else if(event.nativeEvent.which === 3) {
  // 	swal(this.props.messages[i].userid);
  // }
  // scrollToBottom() {
  // 	this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  // }
  //
  // componentDidMount() {
  // 	this.scrollToBottom();
  // }
  //


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
  } // let element = document.getElementById("messageList");
  // element.scrollTop = element.scrollHeight;


  mapMessages() {
    let messages = [];

    for (let i = 0; i < this.props.messages.length; i++) {
      messages.push(_react.default.createElement(_Message.default, _extends({
        key: this.props.messages[i].id
      }, this.props.messages[i], {
        onClick: () => {
          (0, _sweetalert.default)(this.props.messages[i].userid);
        },
        onContextMenu: this.handleClick
      })));
    }

    return messages;
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
    }));
  }

}

MessageList.propTypes = {
  messages: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.number.isRequired,
    message: _propTypes.default.string.isRequired,
    username: _propTypes.default.string.isRequired,
    userid: _propTypes.default.string.isRequired
  }).isRequired).isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.chat.messages
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(MessageList);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/Chat/SendMessageForm.css":
/*!*************************************************!*\
  !*** ./src/components/Chat/SendMessageForm.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!./SendMessageForm.css */ "./node_modules/css-loader/index.js!./src/components/Chat/SendMessageForm.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Chat/SendMessageForm.jsx":
/*!*************************************************!*\
  !*** ./src/components/Chat/SendMessageForm.jsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _chat = __webpack_require__(/*! src/actions/chat.js */ "./src/actions/chat.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

var _TextField = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _Send = _interopRequireDefault(__webpack_require__(/*! @material-ui/icons/Send */ "./node_modules/@material-ui/icons/Send.js"));

var _reactTextareaAutocomplete = _interopRequireDefault(__webpack_require__(/*! @webscopeio/react-textarea-autocomplete */ "./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js"));

__webpack_require__(/*! @webscopeio/react-textarea-autocomplete/style.css */ "./node_modules/@webscopeio/react-textarea-autocomplete/style.css");

var _emojiSearch = _interopRequireDefault(__webpack_require__(/*! @jukben/emoji-search */ "./node_modules/@jukben/emoji-search/index.js"));

__webpack_require__(/*! ./SendMessageForm.css */ "./src/components/Chat/SendMessageForm.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// redux:
// material ui:
// icons:
// mentions / autocomplete:
const Item = ({
  entity: {
    name,
    char
  }
}) => _react.default.createElement("div", null, `${name}: ${char}`); // const UsernameSuggestion = (username) => {
// 	return <div>{username}</div>;
// };


const UsernameSuggestion = ({
  entity: {
    name
  }
}) => {
  return _react.default.createElement("div", null, `${name}`);
};

const CommandSuggestion = ({
  entity: {
    name
  }
}) => {
  return _react.default.createElement("div", null, `${name}`);
};

const Loading = ({
  data
}) => _react.default.createElement("div", null, "Loading"); // jss:
// const styles = (theme) => ({
// 	root: {
// 		"overflow-y": "auto",
// 		"border-radius": "8px",
// 		"flex-grow": "1",
// 		"margin-bottom": "15px",
// 		"& > div": {
// 			"background-color": "#FF3C28A4",
// 		},
// 		"& > div:nth-child(odd)": {
// 			"background-color": "#0AB9E6A4",
// 		},
// 	},
// });
// #SendMessageForm {
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-evenly;
// 	align-items: center;
// 	width: 100%;
// 	min-height: 45px;
// 	height: 10%;
// }
//
// #messageBox {
// 	display: flex;
// 	resize: none;
// 	width: 100%;
// 	border-radius: 6px;
// }
//
// #messageBox:focus {
// 	/* border-color: #0AB9E655; */
// 	outline-offset: 0px !important;
// 	outline: none !important;
//
// 	box-shadow: 0 0 3px blue !important;
// 	-moz-box-shadow: 0 0 3px blue !important;
// 	-webkit-box-shadow: 0 0 3px blue !important;
// }
//
// .messageBoxContainer {
// 	width: 70%;
// 	/* font-size: 18px; */
// 	line-height: 20px;
// 	font-size: inherit !important;
// }


class SendMessageForm extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.renderUsernameSuggestions = this.renderUsernameSuggestions.bind(this);
    this.renderCommandSuggestions = this.renderCommandSuggestions.bind(this);
    this.state = {
      text: "",
      commands: ["help", "discord", "site", "games", "goto", "source", "fc", "playing", "restartscript", "restartserver", "restart1", "restart2", "restart3", "fixcontrollers", "lock", "unlock", "forcegoto", "setturnlength", "setforfeitlength", "sublist", "modlist", "pluslist", "ban", "tempban", "unban", "permaban", "forcerefresh", "lockqueues", "unlockqueues", "disablegoto", "enablegoto", "disablechat", "enablechat", "xboxgoto", "xboxgames", "xboxgamelist", "xboxforcegoto", "giveplus", "removeplus"],
      emotes: []
    };
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      this.sendMessage();
    }
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  sendMessage() {
    if (this.state.text !== "") {
      this.props.sendMessage(this.state.text);
      this.setState({
        text: ""
      });
      this.rta.setState({
        value: ""
      });
    }
  }

  renderUsernameSuggestions(token) {
    let suggestions = [];

    for (let i = 0; i < this.props.userids.length; i++) {
      let userid = this.props.userids[i];
      let username = this.props.usernameMap[userid];

      if (username == null || username.toLowerCase().indexOf(token) == -1) {
        continue;
      }

      if (token.indexOf(username) > -1) {
        suggestions = [];
        break;
      }

      suggestions.push({
        name: username,
        char: "@" + username
      });
    }

    return suggestions.slice(0, 5);
  }

  renderCommandSuggestions(token) {
    let suggestions = [];

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
  }

  render() {
    return _react.default.createElement(_Paper.default, {
      id: "SendMessageForm",
      elevation: 4
    }, _react.default.createElement(_reactTextareaAutocomplete.default, {
      id: "messageBox",
      containerClassName: "messageBoxContainer",
      loadingComponent: Loading,
      style: {},
      ref: rta => {
        this.rta = rta;
      },
      innerRef: textarea => {
        this.textarea = textarea;
      },
      containerStyle: {},
      minChar: 0,
      trigger: {
        ":": {
          dataProvider: token => {
            return (0, _emojiSearch.default)(token).slice(0, 10).map(({
              name,
              char
            }) => ({
              name,
              char
            }));
          },
          component: Item,
          output: (item, trigger) => ({
            text: item.char,
            caretPosition: "next"
          })
        },
        "@": {
          dataProvider: this.renderUsernameSuggestions,
          component: UsernameSuggestion,
          output: (item, trigger) => ({
            text: item.char,
            caretPosition: "next"
          })
        },
        "!": {
          dataProvider: this.renderCommandSuggestions,
          component: CommandSuggestion,
          output: (item, trigger) => ({
            text: item.char,
            caretPosition: "end"
          })
        }
      },
      onChange: this.handleTextChange,
      onKeyPress: this.handleKeyPress,
      value: this.state.text,
      placeholder: "Send a message"
    }), _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      onClick: this.sendMessage
    }, "Send", _react.default.createElement(_Send.default, {
      style: {
        marginLeft: "8px"
      },
      fontSize: "small"
    })));
  }

}

SendMessageForm.propTypes = {
  sendMessage: _propTypes.default.func.isRequired
};

const mapStateToProps = state => {
  return {
    userids: state.chat.userids,
    usernameMap: state.usernameMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: message => {
      dispatch((0, _chat.sendMessage)(message));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SendMessageForm);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/Icons/TwitchIcon.jsx":
/*!*********************************************!*\
  !*** ./src/components/Icons/TwitchIcon.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Glitch_Purple_RGB
// const TwitchIcon = (props) => {
// 	return (
// 		<img src="https://twitchplaysnintendoswitch.com/images/Glitch_Purple_RGB.png"/>
// 	);
// };
//
// export default TwitchIcon;
// react:
// material ui:
// redux:
// recompose:
// jss:
const styles = theme => ({
  root: {
    width: "18px",
    marginLeft: "2px",
    marginRight: "2px"
  }
});

class TwitchIcon extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("img", {
      className: classes.root,
      src: "https://twitchplaysnintendoswitch.com/images/Glitch_Purple_RGB.png"
    });
  }

}

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles))(TwitchIcon);

exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=1.bundle.js.map
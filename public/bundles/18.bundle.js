(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/components/general/PopoverMenu.jsx":
/*!************************************************!*\
  !*** ./src/components/general/PopoverMenu.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_esm_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/Popover */ "./node_modules/@material-ui/core/esm/Popover/index.js");
// react:





const PopoverMenu = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
  elevation: 4,
  style: {
    padding: "10px"
  }
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  variant: "contained",
  color: "primary"
}, "View Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  variant: "contained",
  color: "secondary"
}, "Ban"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
  variant: "contained",
  color: "primary"
}, "Kick from Queue")));

/* harmony default export */ __webpack_exports__["default"] = (PopoverMenu);

/***/ }),

/***/ "./src/shared/components/account/Username.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/account/Username.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_general_PopoverMenu_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/general/PopoverMenu.jsx */ "./src/components/general/PopoverMenu.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // components:

 // material ui:

 // redux:

 // recompose:

 // jss:

const styles = theme => ({
  root: {}
});

class Username extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };
    this.ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: this.props.style,
      onClick: this.handleOpenPopover,
      ref: ref => {
        this.ref = ref;
      }
    }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_general_PopoverMenu_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      open: this.state.popoverOpen,
      onClose: this.handleClosePopover,
      anchorEl: this.ref
    }));
  }

}

const mapStateToProps = state => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps))(Username));

/***/ }),

/***/ "./src/shared/components/chat/Chat.jsx":
/*!*********************************************!*\
  !*** ./src/shared/components/chat/Chat.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageList.jsx */ "./src/shared/components/chat/MessageList.jsx");
/* harmony import */ var _SendMessageForm_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SendMessageForm.jsx */ "./src/shared/components/chat/SendMessageForm.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
// react:


 // material ui:


 // libs:

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
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__["device"].tablet]: {
    root: {
      height: "unset"
    }
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]: {
    root: {// position: "",
      // width: "100%",
      // padding: "5px",
    }
  }
}); // @withStyles(styles)


class Chat extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "chat",
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        flex: 1
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SendMessageForm_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(Chat));

/***/ }),

/***/ "./src/shared/components/chat/Message.jsx":
/*!************************************************!*\
  !*** ./src/shared/components/chat/Message.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-linkify */ "./node_modules/react-linkify/dist/index.js");
/* harmony import */ var react_linkify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_linkify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_components_icons_Badge_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/icons/Badge.jsx */ "./src/shared/components/icons/Badge.jsx");
/* harmony import */ var shared_components_account_Username_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/account/Username.jsx */ "./src/shared/components/account/Username.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
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


class Message extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
        icons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_icons_Badge_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "dev"
        }));
      } else if (account.roles.host) {
        icons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_icons_Badge_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "host"
        }));
      } else if (account.roles.mod) {
        icons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_icons_Badge_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "mod"
        }));
      } else if (account.roles.plus) {
        icons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_icons_Badge_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "plus"
        }));
      }

      if (account.roles.sub) {
        icons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_icons_Badge_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "sub1"
        }));
      }

      if (account.roles.mod && !isReplay && isLastMessage) {
        if (text.indexOf("@everyone") > -1) {
          ping("You've been pinged!", 500);
        }
      }
    }

    icons = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(icons);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root,
      userid: userid,
      onClick: this.props.onClick
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_linkify__WEBPACK_IMPORTED_MODULE_1___default.a, {
      properties: {
        className: classes.links
      }
    }, getTimeStamp(time), icons, icons.length == 0 ? " " : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_account_Username_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      userid: userid,
      style: {
        display: "inline"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      elevation: 4,
      className: classes.user
    }, username)), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, text)));
  }

}

const mapStateToProps = state => {
  return {
    accountMap: state.stream.accountMap,
    myUsername: state.client.username
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps))(Message));

/***/ }),

/***/ "./src/shared/components/chat/MessageList.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/chat/MessageList.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Message_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Message.jsx */ "./src/shared/components/chat/Message.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_Snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_features_chat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // components:

 // material ui:






 // redux:


 // recompose:

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
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: "82%"
  }
});

class MessageList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", event => {});

    this.messagesEnd = null;
    this.rootRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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

      messages.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "messageList",
      className: classes.root,
      elevation: 4,
      ref: el => {
        this.rootRef = el;
      }
    }, this.mapMessages(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        float: "left",
        clear: "both"
      },
      ref: el => {
        this.messagesEnd = el;
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Snackbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      open: this.state.voting,
      autoHideDuration: 0,
      onClose: () => {},
      message: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        id: "message-id"
      }, "A vote has started to switch games!"),
      action: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      }, "LEAVE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "spacer",
        style: {
          width: "15px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      }, "STAY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: "close",
        color: "inherit",
        className: classes.close,
        onClick: () => {
          this.setState({
            voting: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7___default.a, null))]
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
      dispatch(Object(shared_features_chat_js__WEBPACK_IMPORTED_MODULE_9__["sendMessage"])(text));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps))(MessageList));

/***/ }),

/***/ "./src/shared/components/chat/SendMessageForm.jsx":
/*!********************************************************!*\
  !*** ./src/shared/components/chat/SendMessageForm.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_esm_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_esm_Send__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/esm/Send */ "./node_modules/@material-ui/icons/esm/Send.js");
/* harmony import */ var _webscopeio_react_textarea_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @webscopeio/react-textarea-autocomplete */ "./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js");
/* harmony import */ var _jukben_emoji_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jukben/emoji-search */ "./node_modules/@jukben/emoji-search/build/index.js");
/* harmony import */ var _jukben_emoji_search__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_jukben_emoji_search__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_features_chat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/features/chat.js */ "./src/shared/features/chat.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // material ui:






 // icons:

 // mentions / autocomplete:


 // redux:


 // recompose:

 // libs:



const Loading = ({
  data
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading"); // jss:


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

class SendMessageForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
        return _jukben_emoji_search__WEBPACK_IMPORTED_MODULE_9___default()(token).slice(0, 5).map(({
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, obj.entity.name));
    });

    _defineProperty(this, "renderCharSuggestion", obj => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, obj.entity.char));
    });

    this.rta = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      text: "",
      commands: ["help", "discord", "games", "goto", "source", "fc", "fixcontrollers", "lock", "unlock", "forcegoto", "setturnlength", "setforfeitlength", "sublist", "modlist", "pluslist", "banlist", "ban", "unban"]
    };
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "SendMessageForm",
      className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(classes.root, classes.container),
      elevation: 0
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_webscopeio_react_textarea_autocomplete__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "messageBoxOld",
      className: classes.messageBox,
      containerClassName: classes.messageBoxContainer,
      loadingComponent: Loading,
      ref: rta => {
        this.rta = rta;
      },
      textAreaComponent: {
        component: _material_ui_core_esm_TextField__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Fab__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: "primary",
      size: "small",
      onClick: this.sendMessage
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_esm_Send__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
      dispatch(Object(shared_features_chat_js__WEBPACK_IMPORTED_MODULE_11__["sendMessage"])(text));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_12__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps))(SendMessageForm));

/***/ }),

/***/ "./src/shared/components/icons/Badge.jsx":
/*!***********************************************!*\
  !*** ./src/shared/components/icons/Badge.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
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

class Badge extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: text,
      placement: "top"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.root,
      src: src
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles))(Badge));

/***/ })

}]);
//# sourceMappingURL=18.bundle.js.map
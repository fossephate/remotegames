(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/LoginArea.jsx":
/*!**************************************!*\
  !*** ./src/components/LoginArea.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouter = __webpack_require__(/*! react-router */ "./node_modules/react-router/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _ConnectAccounts = _interopRequireDefault(__webpack_require__(/*! ./ConnectAccounts.jsx */ "./src/components/ConnectAccounts.jsx"));

var _UsernameDropdown = _interopRequireDefault(__webpack_require__(/*! ./UsernameDropdown.jsx */ "./src/components/UsernameDropdown.jsx"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// react:
// react-router:
// material ui:
// components:
// redux:
// recompose:
// libs:
const tools = __webpack_require__(/*! js/tools.js */ "./public/js/tools.js"); // jss:


const styles = theme => ({
  root: {
    gridArea: "login",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-evenly",
    overflowY: "visible",
    maxHeight: "50px",
    padding: "3px",
    gridColumn: 2
  },
  logout: {
    width: "30%"
  },
  usernameDropdown: {
    alignSelf: "center",
    background: "transparent"
  }
});

class LoginArea extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.handleAccount = this.handleAccount.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleAccount() {
    window.swal("This doesn't do anything yet."); // this.props.history.push("/account");
  }

  handleLogin() {
    window.swal("This doesn't do anything yet, just use the register button for now.");
    this.props.history.push("/login");
  }

  handleRegister() {
    this.props.history.push("/register"); // this.props.updateSettings({ modal: "REGISTER" });
  }

  handleLogout() {
    tools.deleteAllCookies();
    location.reload(true);
  }

  render() {
    const {
      classes
    } = this.props; // if (this.props.hideNav) {
    // 	return null;
    // }

    return _react.default.createElement(_Paper.default, {
      elevation: 4,
      className: classes.root
    }, this.props.userInfo.loggedIn ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_UsernameDropdown.default, {
      className: classes.usernameDropdown,
      validUsernames: this.props.userInfo.validUsernames,
      myUsername: this.props.userInfo.username,
      handleChange: this.props.handleUsernameChange
    }), _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      onClick: this.handleAccount
    }, "Account"), _react.default.createElement(_Button.default, {
      className: classes.logout,
      variant: "contained",
      color: "secondary",
      onClick: this.handleLogout
    }, "Logout")) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "primary",
      onClick: this.handleLogin
    }, "Login"), _react.default.createElement(_Button.default, {
      variant: "contained",
      color: "secondary",
      onClick: this.handleRegister
    }, "Register")));
  }

}

const mapStateToProps = state => {
  return {
    hideNav: state.settings.hideNav,
    userInfo: state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSettings: settings => {
      dispatch(updateSettings(settings));
    }
  };
};

var _default = (0, _recompose.compose)(_reactRouter.withRouter, (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps))(LoginArea);

exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "./src/components/UsernameDropdown.jsx":
/*!*********************************************!*\
  !*** ./src/components/UsernameDropdown.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js"));

var _Select = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/Select/index.js"));

var _OutlinedInput = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/OutlinedInput/index.js"));

var _FilledInput = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/FilledInput/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// react:
// material ui:
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
class UsernameDropdown extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {}

  getUsernameList() {
    let usernames = [];

    for (let i = 0; i < this.props.validUsernames.length; i++) {
      // let html = <button key={i} index={i} className="username-dropdown-item dropdown-item" onClick={this.props.handleClick}>{this.props.validUsernames[i]}</button>;
      let html = _react.default.createElement(_MenuItem.default, {
        key: i,
        value: i
      }, this.props.validUsernames[i]);

      usernames.push(html);
    }

    if (this.props.validUsernames.length == 0) {
      // return <button key={0} className="username-dropdown-item dropdown-item">???</button>;
      return _react.default.createElement(_MenuItem.default, {
        key: 0,
        value: 0
      }, "Not signed in.");
    }

    return usernames;
  }

  render() {
    let usernameIndex = this.props.validUsernames.indexOf(this.props.myUsername);

    if (usernameIndex == -1) {
      usernameIndex = 0;
    }

    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Select.default, {
      value: usernameIndex,
      onChange: this.props.handleChange,
      input: _react.default.createElement(_OutlinedInput.default, {
        labelWidth: 0
      }) // inputProps={{
      // 	name: "username",
      // 	id: "usernameDropdown",
      // }}

    }, this.getUsernameList()));
  }

}

exports.default = UsernameDropdown;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map
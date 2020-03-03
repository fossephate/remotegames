(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./src/shared/components/account/UsernameDropdown.jsx":
/*!************************************************************!*\
  !*** ./src/shared/components/account/UsernameDropdown.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "./node_modules/@material-ui/core/esm/OutlinedInput/index.js");
/* harmony import */ var _material_ui_core_FilledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FilledInput */ "./node_modules/@material-ui/core/esm/FilledInput/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
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

class UsernameDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {}

  getUsernameList() {
    let usernames = [];

    for (let i = 0; i < this.props.validUsernames.length; i++) {
      usernames.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: i,
        value: i
      }, this.props.validUsernames[i], "\xA0\xA0"));
    }

    if (this.props.validUsernames.length == 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      value: usernameIndex,
      onChange: this.props.handleChange,
      input: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps))(UsernameDropdown));

/***/ }),

/***/ "./src/shared/components/modals/AccountModal.jsx":
/*!*******************************************************!*\
  !*** ./src/shared/components/modals/AccountModal.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var shared_components_account_ConnectAccounts_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/account/ConnectAccounts.jsx */ "./src/shared/components/account/ConnectAccounts.jsx");
/* harmony import */ var shared_components_account_UsernameDropdown_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/account/UsernameDropdown.jsx */ "./src/shared/components/account/UsernameDropdown.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
// react:
 // react-router:

 // components:


 // material ui:


 // redux:

 // recompose:

 // libs:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0px 0px 25px 0px !important"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_8__["device"].tablet]: {
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

class AccountModal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.accountConnection = this.props.accountConnection;
    this.handleClose = this.handleClose.bind(this);
    this.handleRemoveAccount = this.handleRemoveAccount.bind(this);
  }

  handleClose() {
    // this.props.history.push("/");
    this.props.history.goBack();
  }

  handleLogout() {
    Object(shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_8__["deleteAllCookies"])();
    location.reload(true);
  }

  handleRemoveAccount(type) {
    this.accountConnection.emit("removeConnectedAccount", {
      authToken: this.props.authToken,
      type: type
    }, data => {
      if (!data.success) {
        alert(data.reason);
        return;
      } else {
        alert("success");
      }

      location.reload(true);
    });
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Dialog"], {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["DialogContent"], {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AppBar"], {
      position: "static"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h6",
      color: "inherit"
    }, "Account"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
      className: classes.topBar,
      elevation: 2
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_account_UsernameDropdown_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: classes.logout,
      variant: "contained",
      color: "secondary",
      onClick: this.handleLogout
    }, "Logout")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_account_ConnectAccounts_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onRemoveAccount: this.handleRemoveAccount,
      showTOS: false
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["ListItemText"], {
      style: {
        margin: "0 auto"
      }
    }, "You've played for ", this.getTime(this.props.timePlayed))));
  }

}

const mapStateToProps = state => {
  return {
    timePlayed: state.client.timePlayed,
    // email: state.client.email,
    emailVerified: state.client.emailVerified,
    authToken: state.client.authToken
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_7__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps))(AccountModal));

/***/ })

}]);
//# sourceMappingURL=26.bundle.js.map
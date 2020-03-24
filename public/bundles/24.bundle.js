(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./src/components/streams/StreamsAppBar.jsx":
/*!**************************************************!*\
  !*** ./src/components/streams/StreamsAppBar.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_components_general_MyAppBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/general/MyAppBar.jsx */ "./src/shared/components/general/MyAppBar.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_esm_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_esm_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/esm/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // redux:

 // main components:

 // material ui:

 // components:





 // icons:




 // recompose:

 // jss:

const styles = theme => ({
  root: {},
  grow: {
    flexGrow: 1
  }
});

class StreamsAppBar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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

    const mobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleAccount
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: "inherit"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleDownloadHostFiles
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Download Host Files")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleProjectDiscord
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Project Discord Server")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleDevDiscord
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dev's Discord Server")));
    let desktop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.grow
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "small",
      color: "default",
      variant: "contained",
      onClick: this.handleDownloadHostFiles
    }, "Download Host Files"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "10px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "small",
      color: "default",
      variant: "contained",
      onClick: this.handleProjectDiscord
    }, "Project Discord"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "10px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "small",
      color: "default",
      variant: "contained",
      onClick: this.handleDevDiscord
    }, "Dev's Discord"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onClick: this.handleAccount,
      color: "inherit"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default.a, null)));
    let mobile = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

    if (!this.props.loggedIn) {
      mobile = desktop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: "10px"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: "small",
        color: "default",
        variant: "contained",
        onClick: this.handleLoginRegister
      }, "Login / Register"));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MyAppBar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_14__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(StreamsAppBar));

/***/ }),

/***/ "./src/shared/components/general/MyAppBar.jsx":
/*!****************************************************!*\
  !*** ./src/shared/components/general/MyAppBar.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_esm_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_esm_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // redux:

 // main components:
// material ui:

 // components:




 // icons:

 // recompose:

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

class MyAppBar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
    const renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "fixed"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], null, this.props.main, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.grow
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sectionDesktop
    }, this.props.desktop), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sectionMobile
    }, this.props.mobile, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-haspopup": "true",
      onClick: this.handleMobileMenuOpen,
      color: "inherit"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_8___default.a, null))))), renderMobileMenu);
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_9__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(MyAppBar));

/***/ })

}]);
//# sourceMappingURL=24.bundle.js.map
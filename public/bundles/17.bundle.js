(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/Streams.jsx":
/*!*************************!*\
  !*** ./src/Streams.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_components_streams_StreamsAppBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/streams/StreamsAppBar.jsx */ "./src/components/streams/StreamsAppBar.jsx");
/* harmony import */ var src_components_streams_StreamList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/streams/StreamList.jsx */ "./src/components/streams/StreamList.jsx");
/* harmony import */ var src_components_streams_StreamsDrawer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/streams/StreamsDrawer.jsx */ "./src/components/streams/StreamsDrawer.jsx");
/* harmony import */ var src_components_streams_StreamsFooter_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/streams/StreamsFooter.jsx */ "./src/components/streams/StreamsFooter.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
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
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_9__["device"].tablet]: {
    root: {}
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_9__["device"].laptop]: {
    root: {}
  }
});

class Streams extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_streams_StreamsAppBar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      drawerOpen: this.state.drawerOpen,
      handleToggleDrawer: this.toggleDrawer
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_streams_StreamsDrawer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      drawerOpen: this.state.drawerOpen,
      handleToggleDrawer: this.toggleDrawer
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_streams_StreamList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drawerOpen: this.state.drawerOpen,
      streams: this.state.streams
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_streams_StreamsFooter_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(Streams));

/***/ }),

/***/ "./src/components/streams/StreamList.jsx":
/*!***********************************************!*\
  !*** ./src/components/streams/StreamList.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_esm_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_esm_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_esm_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/esm/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_esm_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:


 // redux:

 // main components:
// material ui:







 // recompose:

 // libs:


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
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_12__["device"].tablet]: {
    root: {// gridTemplateRows: "repeat(4, 1fr)",
      // gridTemplateColumns: "repeat(3, 1fr)",
    },
    media: {// height: 160,
    }
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_12__["device"].laptop]: {
    root: {// gridTemplateRows: "repeat(4, 1fr)",
      // gridTemplateColumns: "repeat(4, 1fr)",
    },
    media: {// height: 180,
    }
  }
});

const DUMMY_URL = "https://dummyimage.com/1280x720/000000/fff.png&text=No+thumbnail+specified";

class StreamList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
        let card = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          to: `/s/${stream.username}`
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: i,
          className: classes.card,
          elevation: 5
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_CardActionArea__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onClick: () => {
            this.props.history.push(`/s/${stream.username}`);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.media,
          image: stream.thumbnailURL || DUMMY_URL,
          title: "Photo"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          component: "p"
        }, stream.title || "Untitled Stream"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
          component: "p"
        }, stream.username)))));
        cards.push(card);
      }

      if (cards.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
          elevation: 4,
          style: {
            width: 300
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_13___default()(classes.root, {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
}), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(StreamList));

/***/ }),

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

/***/ "./src/components/streams/StreamsDrawer.jsx":
/*!**************************************************!*\
  !*** ./src/components/streams/StreamsDrawer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_esm_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_esm_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/esm/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // redux:

 // main components:
// material ui:

 // components:






 // icons:

 // recompose:

 // libs:

 // libs:
// jss:

const drawerWidth = 240;

const styles = theme => ({
  root: {
    padding: "1%",
    display: "grid",
    width: "100%"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_12__["device"].tablet]: {
    root: {}
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_12__["device"].laptop]: {
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

class StreamsDrawer extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
    const drawer = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.toolbar
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Divider__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      button: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
      primary: "Streams"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      button: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_10___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_9__["default"], {
      primary: "Subscriptions"
    }))));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(StreamsDrawer));

/***/ }),

/***/ "./src/components/streams/StreamsFooter.jsx":
/*!**************************************************!*\
  !*** ./src/components/streams/StreamsFooter.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
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
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_7__["device"].mobile]: {
    root: {}
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_7__["device"].tablet]: {
    root: {}
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]: {
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

class StreamsFooter extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.root, {
        [classes.drawerOpen]: this.props.drawerOpen,
        [classes.drawerClose]: !this.props.drawerOpen
      }),
      elevation: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/about");
      }
    }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/tos");
      }
    }, "TOS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_6__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(StreamsFooter));

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

/***/ }),

/***/ "./src/shared/libs/utils.js":
/*!**********************************!*\
  !*** ./src/shared/libs/utils.js ***!
  \**********************************/
/*! exports provided: getCookie, setCookie, clamp, round, msToTime, toggleFullscreen, setToPercentParent, wait, mathZoom, normalizeVector, abs, deleteAllCookies, fixedLengthString, getStickString, getAverage, pick, interpolateColor, interpolateColors, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return msToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullscreen", function() { return toggleFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToPercentParent", function() { return setToPercentParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathZoom", function() { return mathZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeVector", function() { return normalizeVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllCookies", function() { return deleteAllCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedLengthString", function() { return fixedLengthString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStickString", function() { return getStickString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverage", function() { return getAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateColor", function() { return interpolateColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateColors", function() { return interpolateColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
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

/***/ })

}]);
//# sourceMappingURL=17.bundle.js.map
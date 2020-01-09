(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@material-ui/icons/MoveToInbox.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/MoveToInbox.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"
}), 'MoveToInbox');

exports.default = _default;

/***/ }),

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
/* harmony import */ var src_components_Streams_StreamsAppBar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Streams/StreamsAppBar.jsx */ "./src/components/Streams/StreamsAppBar.jsx");
/* harmony import */ var src_components_Streams_StreamList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Streams/StreamList.jsx */ "./src/components/Streams/StreamList.jsx");
/* harmony import */ var src_components_Streams_StreamsDrawer_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Streams/StreamsDrawer.jsx */ "./src/components/Streams/StreamsDrawer.jsx");
/* harmony import */ var src_components_Streams_StreamsFooter_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/components/Streams/StreamsFooter.jsx */ "./src/components/Streams/StreamsFooter.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
// react:
 // react-router:

 // redux:

 // main components:




 // secondary components:
// material ui:

 // components:
// recompose:

 // device sizes:

 // libs:
// jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_9__["device"].tablet]: {
    root: {}
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_9__["device"].laptop]: {
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Streams_StreamsAppBar_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      drawerOpen: this.state.drawerOpen,
      handleToggleDrawer: this.toggleDrawer
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Streams_StreamsDrawer_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      drawerOpen: this.state.drawerOpen,
      handleToggleDrawer: this.toggleDrawer
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Streams_StreamList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      drawerOpen: this.state.drawerOpen,
      streams: this.state.streams
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Streams_StreamsFooter_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/***/ "./src/components/Streams/StreamList.jsx":
/*!***********************************************!*\
  !*** ./src/components/Streams/StreamList.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);
// react:

 // react-router:

 // redux:

 // main components:
// material ui:

 // card:





 // components:

 // recompose:

 // device sizes:

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
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_12__["device"].tablet]: {
    root: {// gridTemplateRows: "repeat(4, 1fr)",
      // gridTemplateColumns: "repeat(3, 1fr)",
    },
    media: {// height: 160,
    }
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_12__["device"].laptop]: {
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
    this.changeURL = this.changeURL.bind(this);
    this.renderStreams = this.renderStreams.bind(this);
    this.state = {};
  }

  changeURL() {
    this.props.history.push("");
  }

  renderStreams() {
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
      let card = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: i,
        className: classes.card,
        elevation: 5
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_6__["default"], {
        onClick: () => {
          this.props.history.push(`/s/${stream.username}`);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: classes.media,
        image: stream.thumbnailURL || DUMMY_URL,
        title: "Photo"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        component: "p"
      }, stream.title || "Untitled Stream"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        component: "p"
      }, stream.username))));
      cards.push(card);
    }

    if (cards.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
        elevation: 4,
        style: {
          width: 300
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        component: "p"
      }, "No streams online right now."));
    }

    return cards;
  }

  componentDidMount() {}

  render() {
    console.log("re-rendering streams.");
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_10__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles, {
  withTheme: true
}), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(StreamList));

/***/ }),

/***/ "./src/components/Streams/StreamsAppBar.jsx":
/*!**************************************************!*\
  !*** ./src/components/Streams/StreamsAppBar.jsx ***!
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
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "./node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // redux:

 // main components:
// material ui:

 // components:

 // import ListItemText from "@material-ui/core/ListItemText";

 // import Paper from "@material-ui/core/Paper";






 // import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from "@material-ui/icons/Notifications";






 // recompose:

 // device sizes:

 // libs:
// import classNames from "classnames";
// jss:

const styles = theme => ({
  root: {
    width: "100%",
    height: "48px",
    zIndex: 1300
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_19__["device"].mobile]: {
    root: {
      height: "64px"
    }
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_19__["device"].tablet]: {
    root: {}
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_19__["device"].laptop]: {
    root: {}
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
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
    backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.common.white, 0.25)
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
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class StreamsAppBar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleLoginRegister", () => {
      this.props.history.push("/login");
    });

    _defineProperty(this, "handleProfileMenuOpen", event => {
      this.setState({
        anchorEl: event.currentTarget
      });
    });

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

    _defineProperty(this, "handleDownloadHostFiles", () => {
      window.location.href = "https://remotegames.io/8099/download/";
    });

    _defineProperty(this, "handleDiscord", () => {
      window.location.href = "https://discord.io/rgio/";
    });

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null
    };
  }

  componentDidMount() {}

  render() {
    console.log("re-rendering streamsappbar.");

    if (this.props.hide) {
      return null;
    }

    const {
      anchorEl,
      mobileMoreAnchorEl
    } = this.state;
    const {
      classes
    } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      open: isMenuOpen,
      onClose: this.handleMenuClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => {
        this.handleMenuClose();
        this.props.history.push("/account");
      }
    }, "My account"));
    const renderMobileMenu = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleProfileMenuOpen
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      color: "inherit"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleDownloadHostFiles
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Download Host Files")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: this.handleDiscord
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Discord Server")));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      position: "fixed"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "Open drawer",
      onClick: this.props.handleToggleDrawer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_9___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
      className: classes.title,
      variant: "h6",
      color: "inherit",
      noWrap: true,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Streams"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.search
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.searchIcon
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_10___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_16__["default"], {
      placeholder: "Search\u2026",
      classes: {
        root: classes.inputRoot,
        input: classes.inputInput
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.grow
    }), this.props.loggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sectionDesktop
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default",
      variant: "contained",
      onClick: this.handleDownloadHostFiles
    }, "Download Host Files"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "10px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default",
      variant: "contained",
      onClick: this.handleDiscord
    }, "Discord Server"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      "aria-owns": isMenuOpen ? "material-appbar" : undefined,
      "aria-haspopup": "true",
      onClick: this.handleProfileMenuOpen,
      color: "inherit"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_11___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.sectionMobile
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
      "aria-haspopup": "true",
      onClick: this.handleMobileMenuOpen,
      color: "inherit"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_12___default.a, null)))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "10px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "default",
      variant: "contained",
      onClick: this.handleLoginRegister
    }, "Login / Register")))), renderMenu, renderMobileMenu);
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_18__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(StreamsAppBar));

/***/ }),

/***/ "./src/components/Streams/StreamsDrawer.jsx":
/*!**************************************************!*\
  !*** ./src/components/Streams/StreamsDrawer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "./node_modules/@material-ui/icons/MoveToInbox.js");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:

 // react-router:

 // redux:

 // main components:
// material ui:

 // components:









 // recompose:

 // device sizes:

 // libs:
// jss:

const drawerWidth = 240;

const styles = theme => ({
  root: {
    padding: "1%",
    display: "grid",
    width: "100%"
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_15__["device"].tablet]: {
    root: {}
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_15__["device"].laptop]: {
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
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      button: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      primary: "Streams"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
      button: true
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_13___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__["default"], {
      primary: "Subscriptions"
    }))));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_14__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(StreamsDrawer));

/***/ }),

/***/ "./src/components/Streams/StreamsFooter.jsx":
/*!**************************************************!*\
  !*** ./src/components/Streams/StreamsFooter.jsx ***!
  \**************************************************/
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
// react:
 // react-router:


 // redux:

 // material ui:

 // components:

 // recompose:

 // device sizes:

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
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_7__["device"].mobile]: {
    root: {}
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_7__["device"].tablet]: {
    root: {}
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_7__["device"].laptop]: {
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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.root, {
        [classes.drawerOpen]: this.props.drawerOpen,
        [classes.drawerClose]: !this.props.drawerOpen
      }),
      elevation: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/about");
      }
    }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      color: "default" // variant="contained"
      ,
      onClick: () => {
        this.props.history.push("/tos");
      }
    }, "TOS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_6__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(StreamsFooter));

/***/ }),

/***/ "./src/constants/DeviceSizes.js":
/*!**************************************!*\
  !*** ./src/constants/DeviceSizes.js ***!
  \**************************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
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
//# sourceMappingURL=11.bundle.js.map
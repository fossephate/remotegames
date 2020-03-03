(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/About.jsx":
/*!***********************!*\
  !*** ./src/About.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
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

class About extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 0,
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 3,
      className: classes.main
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About the project"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This website is developed and maintained by", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://github.com/mfosse"
    }, "Matthew Fosse"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The whole idea behind the project is that you can use a keyboard or controller to try out games on these consoles from anywhere with just a web browser."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.imagesContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.card,
      elevation: 5
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.media,
      image: "/images/about/about5.jpg",
      title: "Photo 1"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      component: "p"
    }, "The consoles are hosted in Central Florida, and the server is currently located in Virginia.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: classes.card,
      elevation: 5
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.media,
      image: "/images/about/about2.jpg",
      title: "Photo 2"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      component: "p"
    }, "The whole setup"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The games, consoles, and server costs to run this project are primarily funded through", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://twitch.tv/remotegames/subscribe/"
    }, "Twitch subscriptions"), " ", "and donations. If you like the project consider supporting it with the links below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.donationButtons
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Donate with Twitch",
      src: "/images/about/twdonatebutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://streamlabs.com/remotegames/";
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Join the Discord Server",
      src: "/images/about/discordbutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://discord.io/tpns/";
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      border: "0" // width="130"
      ,
      alt: "Donate with Paypal",
      src: "/images/about/ppdonatebutton.png",
      className: classes.image,
      onClick: () => {
        window.location = "https://paypal.me/fossephate/";
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_11__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps))(About));

/***/ })

}]);
//# sourceMappingURL=21.bundle.js.map
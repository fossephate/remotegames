(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/ToS.jsx":
/*!*********************!*\
  !*** ./src/ToS.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
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
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]: {}
});

class ToS extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 0,
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 3,
      className: classes.main
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(ToS));

/***/ }),

/***/ "./src/shared/libs/utils.js":
/*!**********************************!*\
  !*** ./src/shared/libs/utils.js ***!
  \**********************************/
/*! exports provided: getCookie, setCookie, clamp, round, msToTime, toggleFullscreen, setToPercentParent, wait, mathZoom, normalizeVector, abs, deleteAllCookies, fixedLengthString, getStickString, getAverage, pick, device */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/srv/www/remotegames.io/html/src/shared/libs/utils.js'");

/***/ })

}]);
//# sourceMappingURL=17.bundle.js.map
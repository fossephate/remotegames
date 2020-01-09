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
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
// react:
 // material ui:






 // redux:

 // recompose:

 // device sizes:



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
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_9__["device"].laptop]: {}
});

class ToS extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps))(ToS));

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
//# sourceMappingURL=17.bundle.js.map
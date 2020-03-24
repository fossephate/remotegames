(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableSpacing", "classes", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 true ? DialogActions.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogActions/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogActions/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DialogActions__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js ***!
  \***********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");





var styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function DialogContentText(props, ref) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 true ? DialogContentText.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(styles, {
  name: 'MuiDialogContentText'
})(DialogContentText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogContentText/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogContentText/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogContentText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DialogContentText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "disableTypography"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h2",
    variant: "h6"
  }, children));
});
 true ? DialogTitle.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/DialogTitle/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/DialogTitle/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DialogTitle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/icons/ArrowDropDown.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowDropDown.js ***!
  \**********************************************************/
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
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Settings.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Settings.js ***!
  \*****************************************************/
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
  transform: "scale(1.2, 1.2)",
  d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
}), 'Settings');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/VolumeDown.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/VolumeDown.js ***!
  \*******************************************************/
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
  d: "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"
}), 'VolumeDown');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/VolumeUp.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/VolumeUp.js ***!
  \*****************************************************/
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
  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
}), 'VolumeUp');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js"));

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  if (true) {
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}

/***/ }),

/***/ "./src/components/stream/Picture.jsx":
/*!*******************************************!*\
  !*** ./src/components/stream/Picture.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lagless_laglessView_LaglessView_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lagless/laglessView/LaglessView.jsx */ "./src/components/stream/lagless/laglessView/LaglessView.jsx");
/* harmony import */ var _lagless_laglessBar_LaglessBar_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lagless/laglessBar/LaglessBar.jsx */ "./src/components/stream/lagless/laglessBar/LaglessBar.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
// react:


 // material ui:


 // redux:

 // recompose:

 // libs:


 // jss:

const styles = theme => ({
  root: {
    gridArea: "picture",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    width: "100%",
    padding: "5px",
    margin: 0,
    overflow: "hidden" // height: "calc(47vw)",

  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_7__["device"].tablet]: {
    root: {// height: "calc(34vw)",
    }
  },
  hideChat: {
    gridColumn: "1/3"
  },
  fullscreen: {
    gridRow: "1",
    gridColumn: "1/3",
    padding: "0px"
  }
});

class Picture extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    let pictureClasses = classnames__WEBPACK_IMPORTED_MODULE_8___default()(classes.root, {
      [classes.hideChat]: this.props.hideChat || this.props.fullscreen,
      [classes.fullscreen]: this.props.fullscreen
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "picture",
      elevation: 3,
      className: pictureClasses
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lagless_laglessView_LaglessView_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lagless_laglessBar_LaglessBar_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

const mapStateToProps = state => {
  return {
    hideChat: state.settings.hideChat,
    fullscreen: state.settings.fullscreen
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps))(Picture));

/***/ }),

/***/ "./src/components/stream/lagless/laglessBar/LaglessBar.jsx":
/*!*****************************************************************!*\
  !*** ./src/components/stream/lagless/laglessBar/LaglessBar.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var shared_components_general_VolumeSlider_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/general/VolumeSlider.jsx */ "./src/shared/components/general/VolumeSlider.jsx");
/* harmony import */ var _ViewerDropdown_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewerDropdown.jsx */ "./src/components/stream/lagless/laglessBar/ViewerDropdown.jsx");
/* harmony import */ var _Ping_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ping.jsx */ "./src/components/stream/lagless/laglessBar/Ping.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_actions_settings_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/actions/settings.js */ "./src/actions/settings.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // components:



 // material ui:

 // icons:
// import KeyboardIcon from "@material-ui/icons/Keyboard";
// import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";

 // import { KeyboardIcon, VideogameAssetIcon} from "@material-ui/icons";


 // recompose:

 // redux:


 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignSelf: "center",
    width: "100%",
    padding: "4px 0px",
    marginTop: "4px",
    // marginTop: "-40px",
    backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light // opacity: 0,
    // zIndex: 1,
    // transition: "all 400ms ease-in-out",
    // "&:hover": {
    // opacity: 1,
    // },

  }
});

class LaglessBar extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", value => {
      this.props.setVolume(parseInt(value));
    });

    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_7__["default"], {
      id: "laglessBar",
      className: classes.root,
      elevation: 3
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ViewerDropdown_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      accountMap: this.props.accountMap
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_VolumeSlider_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: this.props.volume,
      handleChange: this.handleChange,
      onMute: () => {
        this.props.setVolume(0);
      },
      onMax: () => {
        this.props.setVolume(100);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "contained",
      color: "primary",
      onClick: () => {
        this.props.history.push("/settings/site");
      }
    }, "Settings ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_6___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ping_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

const mapStateToProps = state => {
  return {
    volume: state.settings.volume,
    accountMap: state.stream.accountMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setVolume: volume => {
      dispatch(Object(src_actions_settings_js__WEBPACK_IMPORTED_MODULE_11__["updateSettings"])({
        volume: volume
      }));
    }
  };
}; // export default connect(mapStateToProps, mapDispatchToProps)(LaglessBar);


/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_9__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps))(LaglessBar));

/***/ }),

/***/ "./src/components/stream/lagless/laglessBar/Ping.jsx":
/*!***********************************************************!*\
  !*** ./src/components/stream/lagless/laglessBar/Ping.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
// react:
 // material ui:

 // icons:
// components:

 // recompose:

 // redux:

 // jss:

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "5px"
  }
});

class Ping extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classes.root,
      elevation: 3
    }, this.props.ping, "ms");
  }

}

const mapStateToProps = state => {
  return {
    ping: state.stream.time.ping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_3__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps))(Ping));

/***/ }),

/***/ "./src/components/stream/lagless/laglessBar/ViewerDropdown.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/stream/lagless/laglessBar/ViewerDropdown.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ViewerDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__);
// react:
 // material ui:


 // import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";

 // import Select from "@material-ui/core/Select";
// import Divider from "@material-ui/core/Divider";
// import Fade from "@material-ui/core/Fade";

 // icons:

 // redux:
// import { connect } from "react-redux";

class ViewerDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getViewerList = this.getViewerList.bind(this);
    this.state = {
      anchorEl: null
    };
  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    });
  }

  handleClose() {
    this.setState({
      anchorEl: null
    });
  }

  getViewerList() {
    let viewers = [];
    let count = 0;

    for (let key in this.props.accountMap) {
      if (!this.props.accountMap.hasOwnProperty(key)) {
        continue;
      }

      let account = this.props.accountMap[key];
      count++;
      viewers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: count,
        uniqueid: account.userid
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "inherit",
        noWrap: true
      }, account.username)));
    }

    if (count === 0) {
      viewers.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: 0,
        uniqueid: null
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "inherit",
        noWrap: true
      }, "Loading...")));
    }

    return viewers;
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      color: "primary",
      onClick: this.handleClick
    }, "Viewers", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "viewerDropdown",
      anchorEl: this.state.anchorEl,
      open: open,
      onClose: this.handleClose // TransitionComponent={Fade}
      ,
      PaperProps: {
        style: {
          maxHeight: 48 * 4.5,
          width: 250
        }
      }
    }, this.getViewerList()));
  }

} // const mapStateToProps = (state) => {
// 	return {
// 		viewerList: state.viewerList,
// 	};
// };
//
// export default connect(mapStateToProps)(ViewerList);
// export default ViewerDropdown;

/***/ }),

/***/ "./src/components/stream/lagless/laglessView/ControllerView.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/stream/lagless/laglessView/ControllerView.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var shared_libs_inputHandler_DeviceStates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/libs/inputHandler/DeviceStates.js */ "./src/shared/libs/inputHandler/DeviceStates.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
// react:
 // material ui:

 // libs:


 // jss:

const styles = theme => ({
  controllerRoot: {
    zIndex: 100,
    background: "transparent",
    position: "relative",
    width: "13.4%"
  },
  leftOverlay: {
    left: 0,
    width: "18.4%",
    position: "absolute",
    opacity: 0.5
  },
  rightOverlay: {
    right: 0,
    width: "18.4%",
    position: "absolute",
    opacity: 0.5
  },
  transparent: {
    opacity: 0.5
  },
  leftStick1: {
    position: "absolute",
    width: "37%",
    height: "12%",
    left: "34.9%",
    top: "19.8%",
    borderRadius: "50%"
  },
  leftStick2: {
    position: "absolute",
    background: "#FF3C28",
    width: "50%",
    height: "50%",
    left: "25%",
    top: "25%",
    pointerEvents: "none",
    borderRadius: "50%"
  },
  rightStick1: {
    position: "absolute",
    width: "37%",
    height: "12%",
    left: "28%",
    top: "47.2%",
    borderRadius: "50%"
  },
  rightStick2: {
    position: "absolute",
    background: "#0AB9E6",
    width: "50%",
    height: "50%",
    left: "25%",
    top: "25%",
    pointerEvents: "none",
    borderRadius: "50%"
  },
  image: {
    width: "100%"
  },
  dpad: {
    position: "absolute",
    background: "transparent",
    width: "85.25%",
    height: "27.75%",
    left: "10%",
    top: "39%",
    "& .up": {
      position: "absolute",
      left: "34.8%",
      top: "9.5%"
    },
    "& .down": {
      position: "absolute",
      left: "34.8%",
      top: "62.5%"
    },
    "& .left": {
      position: "absolute",
      left: "7%",
      top: "36%"
    },
    "& .right": {
      position: "absolute",
      left: "63%",
      top: "36%"
    }
  },
  abxy: {
    position: "absolute",
    background: "transparent",
    width: "85.25%",
    height: "27.75%",
    left: "3%",
    top: "12%",
    "& .a": {
      position: "absolute",
      left: "63.2%",
      top: "34.5%"
    },
    "& .b": {
      position: "absolute",
      left: "35.2%",
      top: "61%"
    },
    "& .x": {
      position: "absolute",
      left: "35.2%",
      top: "8%"
    },
    "& .y": {
      position: "absolute",
      left: "7.2%",
      top: "34.5%"
    }
  },
  xboxabxy: {
    position: "absolute",
    background: "transparent",
    width: "85.25%",
    height: "27.75%",
    left: "3%",
    top: "12%",
    fontSize: "large",
    fontWeight: "bold",
    "& :after": {
      content: '""',
      position: "absolute",
      top: "0px",
      left: "0px",
      // width: "100%",
      // height: "50%",
      // backgroundImage: "linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.2))",
      // borderTopLeftRadius: "50%",
      // borderTopRightRadius: "50%",
      // clipPath: "circle(61% at 50% 100%)",
      width: "100%",
      height: "100%",
      clipPath: "circle(60% at 80% 0%)",
      backgroundImage: "linear-gradient(45deg, rgba(255,255,255,0.1),rgba(255,255,255,0.3))",
      borderRadius: "50%"
    },
    "& .a": {
      position: "absolute",
      left: "63.2%",
      top: "34.5%",
      color: "#E53136",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    },
    "& .b": {
      position: "absolute",
      left: "35.2%",
      top: "61%",
      color: "#91C85C",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    },
    "& .x": {
      position: "absolute",
      left: "35.2%",
      top: "8%",
      color: "#FCE504",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    },
    "& .y": {
      position: "absolute",
      left: "7.2%",
      top: "34.5%",
      color: "#0399DC",
      backgroundImage: "linear-gradient(45deg, #000, #333)"
    }
  },
  button: {
    background: "rgba(50, 50, 50, 0.2)",
    width: "32%",
    height: "32%",
    border: "2px solid #333",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column"
  },
  otherButtons: {
    color: "#FFFFFF",
    textShadow: "2px 2px 4px #000000",

    /* less round */
    borderRadius: "10px !important",
    "& .minus": {
      position: "absolute",
      left: "66%",
      top: "6%",
      width: "32%",
      height: "9%"
    },
    "& .capture": {
      position: "absolute",
      left: "54%",
      top: "67.5%",
      width: "32%",
      height: "9%"
    },
    "& .l": {
      position: "absolute",
      left: "1%",
      top: "6%",
      width: "60%",
      height: "6%"
    },
    "& .zl": {
      position: "absolute",
      left: "1%",
      top: "0%",
      width: "60%",
      height: "6%"
    },
    "& .plus": {
      position: "absolute",
      left: "1%",
      top: "6%",
      width: "32%",
      height: "9%"
    },
    "& .home": {
      position: "absolute",
      left: "14%",
      top: "67.5%",
      width: "32%",
      height: "9%"
    },
    "& .r": {
      position: "absolute",
      left: "40%",
      top: "6%",
      width: "60%",
      height: "6%"
    },
    "& .zr": {
      position: "absolute",
      left: "40%",
      top: "0%",
      width: "60%",
      height: "6%"
    }
  },
  highlighted: {
    background: "rgba(80, 187, 80, 0.7)"
  },
  trigger1: {
    height: "50%",
    borderRadius: "10px",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    zIndex: "100"
  },
  trigger2: {
    height: "50%",
    background: "rgba(80, 187, 80, 0.7)",
    borderRadius: "10px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0"
  },
  xboxHighlighted: {
    background: "rgba(68, 68, 68, 0.7)",
    "&.a,&.b,&.x,&.y": {
      background: "rgba(68, 68, 68, 1) !important"
    }
  }
});

class ControllerView extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.getLeftStickTransform = this.getLeftStickTransform.bind(this);
    this.getRightStickTransform = this.getRightStickTransform.bind(this);
    this.cstate = new shared_libs_inputHandler_DeviceStates_js__WEBPACK_IMPORTED_MODULE_2__["ControllerState"]();
    this.state = {};
  }

  getLeftStickTransform() {
    let x = this.cstate.axes[0];
    let y = this.cstate.axes[1];
    y *= -1;
    let x2 = x * Math.sqrt(1 - y * y / 2) * 32;
    let y2 = y * Math.sqrt(1 - x * x / 2) * 32; // let scale = window.outerWidth / 1920;

    let scale = 1;
    let stick = document.querySelector("#leftStick");

    if (stick) {
      scale = stick.clientWidth / 55;
    }

    x2 *= scale;
    y2 *= scale;
    return `${x2}px, ${y2}px`;
  }

  getRightStickTransform() {
    let x = this.cstate.axes[2];
    let y = this.cstate.axes[3];
    y *= -1;
    let x2 = x * Math.sqrt(1 - y * y / 2) * 32;
    let y2 = y * Math.sqrt(1 - x * x / 2) * 32;
    let scale = 1;
    let stick = document.querySelector("#rightStick");

    if (stick) {
      scale = stick.clientWidth / 55;
    }

    x2 *= scale;
    y2 *= scale;
    return `${x2}px, ${y2}px`;
  }

  componentDidMount() {
    window.inputHandler.touchpad.touchWrapper.init(document.querySelector("#leftStick"), document.querySelector("#rightStick"));
  }

  componentWillUnmount() {
    if (window.inputHandler.touchpad.touchWrapper.leftStick) {
      window.inputHandler.touchpad.touchWrapper.leftStick.destroy();
    }

    if (window.inputHandler.touchpad.touchWrapper.rightStick) {
      window.inputHandler.touchpad.touchWrapper.rightStick.destroy();
    }
  }

  render() {
    const {
      classes
    } = this.props; // if (!this.props.displayControllers) {
    // 	return this.props.children;
    // }

    this.cstate.setState(this.props.controllerState);
    let highlightedClass;
    let abxyClass;

    if (this.props.type === "joycon") {
      highlightedClass = classes.highlighted;
      abxyClass = classes.abxy;
    } else if (this.props.type === "xbox") {
      highlightedClass = classes.xboxHighlighted;
      abxyClass = classes.xboxabxy;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.controllerRoot, {
        [classes.leftOverlay]: this.props.overlay
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.image, {
        [classes.transparent]: this.props.overlay
      }),
      src: `${window.location.origin}/images/leftJoyCon2.png`
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "leftStick",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.leftStick1, {
        [highlightedClass]: this.cstate.buttons.lstick
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.leftStick2,
      style: {
        transform: `translate(${this.getLeftStickTransform()})`
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.dpad
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "up", {
        [highlightedClass]: this.cstate.buttons.up
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "down", {
        [highlightedClass]: this.cstate.buttons.down
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "left", {
        [highlightedClass]: this.cstate.buttons.left
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "right", {
        [highlightedClass]: this.cstate.buttons.right
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.otherButtons
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "minus", {
        [highlightedClass]: this.cstate.buttons.minus
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "capture", {
        [highlightedClass]: this.cstate.buttons.capture
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "l", {
        [highlightedClass]: this.cstate.buttons.l
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "click-passthrough"
    }, this.props.type === "xbox" ? "LB" : "L")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "zl")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.trigger1, {
        [highlightedClass]: this.cstate.buttons.zl
      })
    }, this.props.type === "xbox" ? "LT" : "ZL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.trigger2,
      style: {
        width: this.cstate.axes[4] * 100 + "%"
      }
    })))), this.props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.controllerRoot, {
        [classes.rightOverlay]: this.props.overlay
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.image, {
        [classes.transparent]: this.props.overlay
      }),
      src: `${window.location.origin}/images/rightJoyCon2.png`
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "rightStick",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.rightStick1, {
        [highlightedClass]: this.cstate.buttons.rstick
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.rightStick2,
      style: {
        transform: `translate(${this.getRightStickTransform()})`
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: abxyClass
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "a", {
        [highlightedClass]: this.cstate.buttons.a
      })
    }, this.props.type === "xbox" && "A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "b", {
        [highlightedClass]: this.cstate.buttons.b
      })
    }, this.props.type === "xbox" && "B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "x", {
        [highlightedClass]: this.cstate.buttons.x
      })
    }, this.props.type === "xbox" && "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, "y", {
        [highlightedClass]: this.cstate.buttons.y
      })
    }, this.props.type === "xbox" && "Y")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.otherButtons
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "plus", {
        [highlightedClass]: this.cstate.buttons.plus
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "home", {
        [highlightedClass]: this.cstate.buttons.home
      })
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "r", {
        [highlightedClass]: this.cstate.buttons.r
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "click-passthrough"
    }, this.props.type === "xbox" ? "RB" : "R")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.button, classes.otherButtons, "zr")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.trigger1, {
        [highlightedClass]: this.cstate.buttons.zr
      })
    }, this.props.type === "xbox" ? "RT" : "ZR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.trigger2,
      style: {
        width: this.cstate.axes[5] * 100 + "%"
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles)(ControllerView));

/***/ }),

/***/ "./src/components/stream/lagless/laglessView/LaglessCanvas.jsx":
/*!*********************************************************************!*\
  !*** ./src/components/stream/lagless/laglessView/LaglessCanvas.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_esm_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_esm_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_esm_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_esm_DialogContentText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_esm_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // material ui:






 // redux:

 // recompose:



class LaglessCanvas extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.enableMouseControls = this.enableMouseControls.bind(this); // this.videoRef = React.createRef();

    this.graphicsCanvasRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.state = {
      alertOpen: false
    };
  }

  handleClick() {
    if (!window.inputHandler.mouse.settings.enabled) {
      this.setState({
        alertOpen: true
      });
    }
  }

  handleClose() {
    this.setState({
      alertOpen: false
    });
    window.inputHandler.mouse.toggle(false);
  }

  enableMouseControls() {
    this.setState({
      alertOpen: false
    }); // let id = null;
    // if (this.props.streamType === "mpeg2") {
    // 	id = "canvas";
    // } else if (this.props.streamType === "webRTC") {
    // 	id = "video";
    // }
    // window.inputHandler.mouse.init(document.getElementById(id));

    window.inputHandler.mouse.init(this.graphicsCanvasRef.current);
    window.inputHandler.mouse.toggle(true);
  }

  render() {
    const {
      classes
    } = this.props;
    let videoCanvas = null;

    if (this.props.streamType === "mpeg2") {
      videoCanvas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
        id: "videoCanvas" // onClick={this.handleClick}
        ,
        className: this.props.classes // ref={this.videoRef}

      });
    } else if (this.props.streamType === "webRTC") {
      videoCanvas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        id: "videoCanvas" // onClick={this.handleClick}
        ,
        className: this.props.classes // ref={this.videoRef}

      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, videoCanvas, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
      id: "graphicsCanvas",
      className: this.props.classes,
      ref: this.graphicsCanvasRef,
      onClick: this.handleClick,
      style: {
        position: "absolute",
        width: "73.2%",
        height: "100%"
      },
      width: "1280",
      height: "720"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Dialog__WEBPACK_IMPORTED_MODULE_2__["default"], {
      open: this.state.alertOpen,
      onClose: this.handleClose,
      "aria-labelledby": "alert-dialog-title",
      "aria-describedby": "alert-dialog-description"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: "alert-dialog-title"
    }, "Activate Mouse Controls?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_DialogContent__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_DialogContentText__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "alert-dialog-description"
    }, "By default, the mouse will move the right stick, you can remap and change settings for it in the remap menu.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_DialogActions__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: this.handleClose,
      color: "primary"
    }, "No"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onClick: this.enableMouseControls,
      variant: "contained",
      color: "primary",
      autoFocus: true
    }, "Yes"))));
  }

}

const mapStateToProps = state => {
  return {
    streamType: state.stream.info.streamType
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])( // withStyles(styles),
Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps))(LaglessCanvas));

/***/ }),

/***/ "./src/components/stream/lagless/laglessView/LaglessView.jsx":
/*!*******************************************************************!*\
  !*** ./src/components/stream/lagless/laglessView/LaglessView.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LaglessCanvas_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LaglessCanvas.jsx */ "./src/components/stream/lagless/laglessView/LaglessCanvas.jsx");
/* harmony import */ var _ControllerView_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ControllerView.jsx */ "./src/components/stream/lagless/laglessView/ControllerView.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
// react:


 // material ui:

 // redux:

 // recompose:

 // libs:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    textAlign: "center"
  },
  canvas: {
    width: "73.2%",
    alignSelf: "center"
  },
  twitch: {
    width: "73.2%",
    height: "100%"
  },
  fullscreen: {
    width: "100% !important",
    margin: "0",
    padding: "0",
    border: "none"
  }
});

class LaglessView extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    let laglessClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.root, {
      [classes.fullscreen]: this.props.largescreen || this.props.fullscreen
    }); // let displayLagless = this.props.loggedIn && !this.props.waitlisted;

    let displayLagless = true;
    let twitchStyle = {
      display: displayLagless ? "none" : null
    };
    let videoClasses = classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes.canvas, {
      [classes.fullscreen]: this.props.largescreen || this.props.fullscreen
    });
    let controllerNumber = 0;
    let isXbox = false;
    let controllerType = isXbox ? "xbox" : "joycon";
    displayLagless = displayLagless ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LaglessCanvas_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
      classes: videoClasses
    }) : null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: laglessClasses
    }, this.props.controllerView ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ControllerView_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      overlay: this.props.mobileMode,
      controllerState: this.props.controllerStates[controllerNumber],
      type: controllerType
    }, displayLagless) : displayLagless, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "twitchVideo",
      className: classes.twitch,
      style: twitchStyle
    }, "You need to login first or this stream is offline."));
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: state.client.loggedIn,
    waitlisted: state.client.waitlisted,
    controllerStates: state.stream.players.controllerStates,
    controllerView: state.settings.controllerView,
    // whether to render the joycons
    fullscreen: state.settings.fullscreen,
    largescreen: state.settings.largescreen,
    mobileMode: state.settings.mobileMode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps))(LaglessView));

/***/ }),

/***/ "./src/shared/components/general/VolumeSlider.jsx":
/*!********************************************************!*\
  !*** ./src/shared/components/general/VolumeSlider.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/VolumeDown */ "./node_modules/@material-ui/icons/VolumeDown.js");
/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ "./node_modules/@material-ui/icons/VolumeUp.js");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var shared_components_general_MySlider_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/components/general/MySlider.jsx */ "./src/shared/components/general/MySlider.jsx");
// react:
 // material ui:




 // components:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "30%",
    minWidth: "125px",
    // borderRadius: "10px",
    alignItems: "center",
    paddingLeft: "6px",
    paddingRight: "6px",
    backgroundColor: theme.palette.primary.main // backgroundColor: theme.palette.primary.dark,

  },
  svg: {
    // color: "#333",
    color: theme.palette.primary.contrastText,
    alignSelf: "center",
    // border: "1.2px solid #333",
    // borderRadius: "4px",
    // padding: "1px",
    cursor: "pointer"
  },
  rootClass: {
    width: "70%" // track:
    // "& :nth-child(1)": {
    // 	backgroundColor: "#FFF",
    // },
    // // first part of track:
    // "& :nth-child(2)": {
    // 	backgroundColor: "#FFF",
    // },
    // thumb icon:
    // "& :nth-child(4)": {
    // 	"& :first-child": {
    // 	},
    // 	backgroundColor: "#FFF",
    // 	"&:hover": {
    // 		boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)",
    // 	},
    // 	"&:active": {
    // 		boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)",
    // 	},
    // },

  },
  rail: {
    backgroundColor: "#FFF"
  },
  track: {
    backgroundColor: "#FFF"
  },
  thumb: {
    backgroundColor: "#FFF",
    "&:hover": {
      boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)"
    },
    "&:active": {
      boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)"
    }
  },
  active: {
    "span&": {
      boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important"
    } // boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important",

  }
});

class VolumeSlider extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: classes.root,
      elevation: 3
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: classes.svg,
      onClick: this.props.onMute
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_general_MySlider_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      rootClass: classes.rootClass,
      thumbClass: classes.thumb,
      activeClass: classes.active,
      railClass: classes.rail,
      trackClass: classes.track,
      min: 0,
      max: 100,
      step: 1,
      handleChange: this.props.handleChange,
      value: this.props.value,
      bounceInterval: 100,
      delay: 500
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.svg,
      onClick: this.props.onMax
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(VolumeSlider));

/***/ })

}]);
//# sourceMappingURL=13.bundle.js.map
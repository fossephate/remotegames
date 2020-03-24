(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/@jukben/emoji-search/build/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@jukben/emoji-search/build/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var emojilib_1 = __webpack_require__(/*! emojilib */ "./node_modules/emojilib/index.js");
var match_sorter_1 = __importDefault(__webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js"));
/* build proper library with included name of the emoji */
var library = Object.entries(emojilib_1.lib).map(function (_a) {
    var name = _a[0], emojiObject = _a[1];
    return (__assign({}, emojiObject, { keywords: [name].concat(emojiObject.keywords), name: name }));
});
exports.default = (function (key) {
    return match_sorter_1.default(library, key, { keys: ["keywords"] });
});


/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \*******************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'round' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== "round" && classes.extended, size !== 'large' && classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(size))], disabled && classes.disabled, {
      'primary': classes.primary,
      'secondary': classes.secondary,
      'inherit': classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, children));
});
 true ? Fab.propTypes = {
  /**
   * The content of the button.
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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['round', 'extended'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiFab'
})(Fab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fab */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Fab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/Popper.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popper/Popper.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");













function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect;
var defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.
 */

var Popper = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Popper(props, ref) {
  var anchorEl = props.anchorEl,
      children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      modifiers = props.modifiers,
      open = props.open,
      _props$placement = props.placement,
      initialPlacement = _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$popperOptions = props.popperOptions,
      popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
      popperRefProp = props.popperRef,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? false : _props$transition,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition"]);

  var tooltipRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var ownRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(tooltipRef, ref);
  var popperRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);
  var handlePopperRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(popperRef, popperRefProp);
  var handlePopperRefRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(handlePopperRef);
  useEnhancedEffect(function () {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useImperativeHandle(popperRefProp, function () {
    return popperRef.current;
  }, []);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(rtlPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function () {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    var handlePopperUpdate = function handlePopperUpdate(data) {
      setPlacement(data.placement);
    };

    var resolvedAnchorEl = getAnchorEl(anchorEl);

    if (true) {
      var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__["default"])(resolvedAnchorEl);

      if (resolvedAnchorEl instanceof containerWindow.Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }

    var popper = new popper_js__WEBPACK_IMPORTED_MODULE_4__["default"](getAnchorEl(anchorEl), tooltipRef.current, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: 'window'
        }
      }, {}, modifiers, {}, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__["default"])(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__["default"])(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  var handleRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (node) {
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_9__["default"])(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleClose = function handleClose() {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  var handleExited = function handleExited() {
    setExited(true);
    handleClose();
  };

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    // Let's update the popper position.
    handleOpen();
  }, [handleOpen]);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    return function () {
      handleClose();
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  var childProps = {
    placement: placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Portal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disablePortal: disablePortal,
    container: container
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0
    }, other.style)
  }), typeof children === 'function' ? children(childProps) : children));
});
 true ? Popper.propTypes = {
  /**
   * This is the reference element, or a function that returns the reference element,
   * that may be used to set the position of the popover.
   * The return value will passed as the reference object of the Popper
   * instance.
   *
   * The reference element should be an HTML Element instance or a referenceObject:
   * https://popper.js.org/popper-documentation.html#referenceObject.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);
      var containerWindow = Object(_utils_ownerWindow__WEBPACK_IMPORTED_MODULE_11__["default"])(resolvedAnchorEl);

      if (resolvedAnchorEl instanceof containerWindow.Element) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== 'number' || typeof resolvedAnchorEl.clientHeight !== 'number' || typeof resolvedAnchorEl.getBoundingClientRect !== 'function') {
        return new Error(['Material-UI: the `anchorEl` prop provided to the component is invalid.', 'It should be an HTML Element instance or a referenceObject:', 'https://popper.js.org/popper-documentation.html#referenceObject.'].join('\n'));
      }
    }

    return null;
  }),

  /**
   * Popper render function or node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]).isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object).
   */
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the popper is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Popper placement.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`popper.js`](https://github.com/FezVrasta/popper.js) instance.
   */
  popperOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Popper);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popper/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js ***!
  \***************************************************************/
/*! exports provided: styles, testReset, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testReset", function() { return testReset; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Grow */ "./node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_focusVisible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/focusVisible */ "./node_modules/@material-ui/core/esm/utils/focusVisible.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");




















function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      flip: false,
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      marginLeft: 4,
      marginRight: 4,
      width: '2em',
      height: '1em',
      '&::before': {
        flip: false,
        borderWidth: '0 1em 1em 1em',
        borderColor: 'transparent transparent currentcolor transparent'
      }
    },
    '&[x-placement*="top"] $arrow': {
      flip: false,
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      marginLeft: 4,
      marginRight: 4,
      width: '2em',
      height: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 1em 0 1em',
        borderColor: 'currentcolor transparent transparent transparent'
      }
    },
    '&[x-placement*="right"] $arrow': {
      flip: false,
      left: 0,
      marginLeft: '-0.95em',
      marginTop: 4,
      marginBottom: 4,
      height: '2em',
      width: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 1em 1em 0',
        borderColor: 'transparent currentcolor transparent transparent'
      }
    },
    '&[x-placement*="left"] $arrow': {
      flip: false,
      right: 0,
      marginRight: '-0.95em',
      marginTop: 4,
      marginBottom: 4,
      height: '2em',
      width: '1em',
      '&::before': {
        flip: false,
        borderWidth: '1em 0 1em 1em',
        borderColor: 'transparent transparent transparent currentcolor'
      }
    }
  };
}

var styles = function styles(theme) {
  return {
    /* Styles applied to the Popper component. */
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none',
      flip: false // disable jss-rtl plugin

    },

    /* Styles applied to the Popper component if `interactive={true}`. */
    popperInteractive: {
      pointerEvents: 'auto'
    },

    /* Styles applied to the Popper component if `arrow={true}`. */
    popperArrow: arrowGenerator(),

    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
      backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: '4px 8px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: 'break-word',
      fontWeight: theme.typography.fontWeightMedium
    },

    /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
    tooltipArrow: {
      position: 'relative',
      margin: '0'
    },

    /* Styles applied to the arrow element. */
    arrow: {
      position: 'absolute',
      fontSize: 6,
      color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_9__["fade"])(theme.palette.grey[700], 0.9),
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: 0,
        height: 0,
        borderStyle: 'solid'
      }
    },

    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
      padding: '8px 16px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(round(16 / 14), "em"),
      fontWeight: theme.typography.fontWeightRegular
    },

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      transformOrigin: 'right center',
      margin: '0 24px '
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      transformOrigin: 'left center',
      margin: '0 24px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      transformOrigin: 'center bottom',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),

    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      transformOrigin: 'center top',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};
var hystersisOpen = false;
var hystersisTimer = null;
function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}
var Tooltip = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function Tooltip(props, ref) {
  var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      children = props.children,
      classes = props.classes,
      _props$disableFocusLi = props.disableFocusListener,
      disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi,
      _props$disableHoverLi = props.disableHoverListener,
      disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi,
      _props$disableTouchLi = props.disableTouchListener,
      disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi,
      _props$enterDelay = props.enterDelay,
      enterDelay = _props$enterDelay === void 0 ? 200 : _props$enterDelay,
      _props$enterNextDelay = props.enterNextDelay,
      enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay,
      _props$enterTouchDela = props.enterTouchDelay,
      enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela,
      idProp = props.id,
      _props$interactive = props.interactive,
      interactive = _props$interactive === void 0 ? false : _props$interactive,
      _props$leaveDelay = props.leaveDelay,
      leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay,
      _props$leaveTouchDela = props.leaveTouchDelay,
      leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela,
      onClose = props.onClose,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom' : _props$placement,
      PopperProps = props.PopperProps,
      title = props.title,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_12__["default"] : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_18__["default"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(),
      childNode = _React$useState[0],
      setChildNode = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      arrowRef = _React$useState2[0],
      setArrowRef = _React$useState2[1];

  var ignoreNonTouchEvents = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(false);
  var closeTimer = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  var enterTimer = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  var leaveTimer = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  var touchTimer = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_17__["default"])({
    controlled: openProp,
    default: false,
    name: 'Tooltip'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      openState = _useControlled2[0],
      setOpenState = _useControlled2[1];

  var open = openState;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var _React$useRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(openProp !== undefined),
        isControlled = _React$useRef.current; // eslint-disable-next-line react-hooks/rules-of-hooks


    react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
      if (childNode && childNode.disabled && !isControlled && title !== '' && childNode.tagName.toLowerCase() === 'button') {
        console.error(['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Add a simple wrapper element, such as a `span`.'].join('\n'));
      }
    }, [title, childNode, isControlled]);
  }

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(),
      defaultId = _React$useState3[0],
      setDefaultId = _React$useState3[1];

  var id = idProp || defaultId;
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    if (!open || defaultId) {
      return;
    } // Fallback to this default id when possible.
    // Use the random value for client-side rendering only.
    // We can't use it server-side.


    setDefaultId("mui-tooltip-".concat(Math.round(Math.random() * 1e5)));
  }, [open, defaultId]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    return function () {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);

  var handleOpen = function handleOpen(event) {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleEnter = function handleEnter(event) {
    var childrenProps = children.props;

    if (event.type === 'mouseover' && childrenProps.onMouseOver && event.currentTarget === childNode) {
      childrenProps.onMouseOver(event);
    }

    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    } // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).


    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hystersisOpen && enterNextDelay) {
      event.persist();
      enterTimer.current = setTimeout(function () {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  var _useIsFocusVisible = Object(_utils_focusVisible__WEBPACK_IMPORTED_MODULE_16__["useIsFocusVisible"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState4 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      childIsFocusVisible = _React$useState4[0],
      setChildIsFocusVisible = _React$useState4[1];

  var handleBlur = function handleBlur() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };

  var handleFocus = function handleFocus(event) {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    if (isFocusVisible(event)) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }

    var childrenProps = children.props;

    if (childrenProps.onFocus && event.currentTarget === childNode) {
      childrenProps.onFocus(event);
    }
  };

  var handleClose = function handleClose(event) {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(function () {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);

    if (onClose) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function () {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };

  var handleLeave = function handleLeave(event) {
    var childrenProps = children.props;

    if (event.type === 'blur') {
      if (childrenProps.onBlur && event.currentTarget === childNode) {
        childrenProps.onBlur(event);
      }

      handleBlur(event);
    }

    if (event.type === 'mouseleave' && childrenProps.onMouseLeave && event.currentTarget === childNode) {
      childrenProps.onMouseLeave(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveDelay);
  };

  var handleTouchStart = function handleTouchStart(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }

    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function () {
      handleEnter(event);
    }, enterTouchDelay);
  };

  var handleTouchEnd = function handleTouchEnd(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveTouchDelay);
  };

  var handleUseRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__["default"])(setChildNode, ref);
  var handleFocusRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__["default"])(focusVisibleRef, handleUseRef); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useCallback(function (instance) {
    // #StrictMode ready
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_15__["default"])(handleFocusRef, react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(instance));
  }, [handleFocusRef]);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__["default"])(children.ref, handleOwnRef); // There is no point in displaying an empty tooltip.

  if (title === '') {
    open = false;
  } // For accessibility and SEO concerns, we render the title to the DOM node when
  // the tooltip is hidden. However, we have made a tradeoff when
  // `disableHoverListener` is set. This title logic is disabled.
  // It's allowing us to keep the implementation size minimal.
  // We are open to change the tradeoff.


  var shouldShowNativeTitle = !open && !disableHoverListener;

  var childrenProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    'aria-describedby': open ? id : null,
    title: shouldShowNativeTitle && typeof title === 'string' ? title : null
  }, other, {}, children.props, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(other.className, children.props.className)
  });

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter;
    childrenProps.onMouseLeave = handleLeave;
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus;
    childrenProps.onBlur = handleLeave;
  }

  var interactiveWrapperListeners = interactive ? {
    onMouseOver: childrenProps.onMouseOver,
    onMouseLeave: childrenProps.onMouseLeave,
    onFocus: childrenProps.onFocus,
    onBlur: childrenProps.onBlur
  } : {};

  if (true) {
    if (children.props.title) {
      console.error(['Material-UI: you have provided a `title` prop to the child of <Tooltip />.', "Remove this title prop `".concat(children.props.title, "` or the Tooltip component.")].join('\n'));
    }
  } // Avoid the creation of a new Popper.js instance at each render.


  var popperOptions = react__WEBPACK_IMPORTED_MODULE_4___default.a.useMemo(function () {
    return {
      modifiers: {
        arrow: {
          enabled: Boolean(arrowRef),
          element: arrowRef
        }
      }
    };
  }, [arrowRef]);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef
  }, childrenProps)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Popper__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.popper, interactive && classes.popperInteractive, arrow && classes.popperArrow),
    placement: placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps['aria-describedby'],
    transition: true,
    popperOptions: popperOptions
  }, interactiveWrapperListeners, PopperProps), function (_ref) {
    var placementInner = _ref.placement,
        TransitionPropsInner = _ref.TransitionProps;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.tooltip, classes["tooltipPlacement".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_11__["default"])(placementInner.split('-')[0]))], ignoreNonTouchEvents.current && classes.touch, arrow && classes.tooltipArrow)
    }, title, arrow ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
 true ? Tooltip.propTypes = {
  /**
   * If `true`, adds an arrow to the tooltip.
   */
  arrow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Tooltip reference element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_8__["elementAcceptingRef"].isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,

  /**
   * Do not respond to focus events.
   */
  disableFocusListener: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   */
  enterNextDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,

  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  interactive: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * Callback fired when the component requests to be open.
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,

  /**
   * If `true`, the tooltip is shown.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,

  /**
   * Tooltip placement.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Props applied to the [`Popper`](/api/popper/) element.
   */
  PopperProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,

  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.elementType,

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(styles, {
  name: 'MuiTooltip'
})(Tooltip));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Tooltip/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Tooltip/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/icons/Close.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Close.js ***!
  \**************************************************/
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/Send.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/Send.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/esm/utils/createSvgIcon.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send'));

/***/ }),

/***/ "./node_modules/@material-ui/icons/esm/utils/createSvgIcon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/icons/esm/utils/createSvgIcon.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSvgIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");



function createSvgIcon(path, displayName) {
  var Component = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ref: ref
    }, props), path);
  }));

  if (true) {
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"].muiName;
  return Component;
}

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

/***/ "./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! textarea-caret */ "./node_modules/textarea-caret/index.js");
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(textarea_caret__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var custom_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! custom-event */ "./node_modules/custom-event/index.js");
/* harmony import */ var custom_event__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(custom_event__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 Jakub Beneš <benes@webscope.io>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */






function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var KEY_CODES = {
  ESC: 27,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  ENTER: 13,
  TAB: 9
}; // This is self-made key shortcuts manager, used for caching key strokes

var Listener = function Listener() {
  var _this = this;

  _classCallCheck(this, Listener);

  this.startListen = function (ref) {
    if (!ref) return;
    ref.addEventListener("keydown", _this.f);
  };

  this.stopListen = function (ref) {
    if (!ref) return;
    ref.removeEventListener("keydown", _this.f);
  };

  this.add = function (keyCodes, fn) {
    var keyCode = keyCodes;
    if (typeof keyCode !== "object") keyCode = [keyCode];
    _this.listeners[_this.index] = {
      keyCode: keyCode,
      fn: fn
    };
    return _this.index++;
  };

  this.remove = function (id) {
    delete _this.listeners[id];
  };

  this.removeAll = function () {
    _this.listeners = {};
    _this.index = 1;
  };

  this.index = 1;
  this.listeners = {};

  this.f = function (e) {
    if (!e) return;
    var code = e.keyCode || e.which;
    Object.values(_this.listeners).forEach(function (_ref) {
      var keyCode = _ref.keyCode,
          fn = _ref.fn;

      if (keyCode.includes(code)) {
        e.stopPropagation();
        e.preventDefault();
        fn(e);
      }
    });
  };
};

var Listeners = new Listener();

var Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Item)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.selectItem = function () {
      var _this$props = _this.props,
          item = _this$props.item,
          onSelectHandler = _this$props.onSelectHandler;
      onSelectHandler(item);
    };

    return _this;
  }

  _createClass(Item, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.item !== nextProps.item || this.props.selected !== nextProps.selected || this.props.style !== nextProps.style || this.props.className !== nextProps.className) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          Component = _this$props2.component,
          style = _this$props2.style,
          onClickHandler = _this$props2.onClickHandler,
          item = _this$props2.item,
          selected = _this$props2.selected,
          className = _this$props2.className,
          innerRef = _this$props2.innerRef;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        className: "rta__item  ".concat(selected === true ? "rta__item--selected" : "", " ").concat(className || ""),
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "rta__entity ".concat(selected === true ? "rta__entity--selected" : ""),
        role: "button",
        tabIndex: 0,
        onClick: onClickHandler,
        onFocus: this.selectItem,
        onMouseEnter: this.selectItem,
        onTouchStart: function onTouchStart() {
          _this2.clicked = true;

          _this2.selectItem();
        },
        onTouchEnd: function onTouchEnd(e) {
          e.preventDefault();

          if (_this2.clicked) {
            onClickHandler(e);
          }
        },
        onTouchMove: function onTouchMove() {
          _this2.clicked = false;
        },
        onTouchCancel: function onTouchCancel() {
          _this2.clicked = false;
        }
        /* $FlowFixMe */
        ,
        ref: innerRef
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, {
        selected: selected,
        entity: item
      })));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var List =
/*#__PURE__*/
function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(List)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      selectedItem: null
    };
    _this.cachedIdOfItems = new Map();

    _this.onPressEnter = function (e) {
      if (typeof e !== "undefined") {
        e.preventDefault();
      }

      var values = _this.props.values;

      _this.modifyText(values[_this.getPositionInList()]);
    };

    _this.getPositionInList = function () {
      var values = _this.props.values;
      var selectedItem = _this.state.selectedItem;
      if (!selectedItem) return 0;
      return values.findIndex(function (a) {
        return _this.getId(a) === _this.getId(selectedItem);
      });
    };

    _this.getId = function (item) {
      if (_this.cachedIdOfItems.has(item)) {
        // $FlowFixMe
        return _this.cachedIdOfItems.get(item);
      }

      var textToReplace = _this.props.getTextToReplace(item);

      var computeId = function computeId() {
        if (textToReplace) {
          if (textToReplace.key) {
            return textToReplace.key;
          }

          if (typeof item === "string" || !item.key) {
            return textToReplace.text;
          }
        }

        if (!item.key) {
          throw new Error("Item ".concat(JSON.stringify(item), " has to have defined \"key\" property"));
        } // $FlowFixMe


        return item.key;
      };

      var id = computeId();

      _this.cachedIdOfItems.set(item, id);

      return id;
    };

    _this.listeners = [];
    _this.itemsRef = {};

    _this.modifyText = function (value) {
      if (!value) return;
      var onSelect = _this.props.onSelect;
      onSelect(value);
    };

    _this.selectItem = function (item) {
      var keyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (_this.state.selectedItem === item) return;

      _this.setState({
        selectedItem: item
      }, function () {
        if (keyboard) {
          _this.props.dropdownScroll(_this.itemsRef[_this.getId(item)]);
        }
      });
    };

    _this.scroll = function (e) {
      e.preventDefault();
      var values = _this.props.values;
      var code = e.keyCode || e.which;

      var oldPosition = _this.getPositionInList();

      var newPosition;

      switch (code) {
        case KEY_CODES.DOWN:
          newPosition = oldPosition + 1;
          break;

        case KEY_CODES.UP:
          newPosition = oldPosition - 1;
          break;

        default:
          newPosition = oldPosition;
          break;
      }

      newPosition = (newPosition % values.length + values.length) % values.length; // eslint-disable-line

      _this.selectItem(values[newPosition], [KEY_CODES.DOWN, KEY_CODES.UP].includes(code));
    };

    _this.isSelected = function (item) {
      var selectedItem = _this.state.selectedItem;
      if (!selectedItem) return false;
      return _this.getId(selectedItem) === _this.getId(item);
    };

    return _this;
  }

  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.listeners.push(Listeners.add([KEY_CODES.DOWN, KEY_CODES.UP], this.scroll), Listeners.add([KEY_CODES.ENTER, KEY_CODES.TAB], this.onPressEnter));
      var values = this.props.values;
      if (values && values[0]) this.selectItem(values[0]);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var _this2 = this;

      var oldValues = _ref.values;
      var values = this.props.values;
      var oldValuesSerialized = oldValues.map(function (val) {
        return _this2.getId(val);
      }).join("");
      var newValuesSerialized = values.map(function (val) {
        return _this2.getId(val);
      }).join("");

      if (oldValuesSerialized !== newValuesSerialized && values && values[0]) {
        this.selectItem(values[0]);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var listener;

      while (this.listeners.length) {
        listener = this.listeners.pop();
        Listeners.remove(listener);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          values = _this$props.values,
          component = _this$props.component,
          style = _this$props.style,
          itemClassName = _this$props.itemClassName,
          className = _this$props.className,
          itemStyle = _this$props.itemStyle;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
        className: "rta__list ".concat(className || ""),
        style: style
      }, values.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Item, {
          key: _this3.getId(item),
          innerRef: function innerRef(ref) {
            _this3.itemsRef[_this3.getId(item)] = ref;
          },
          selected: _this3.isSelected(item),
          item: item,
          className: itemClassName,
          style: itemStyle,
          onClickHandler: _this3.onPressEnter,
          onSelectHandler: _this3.selectItem,
          component: component
        });
      }));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

function defaultScrollToItem(container, item) {
  var itemHeight = parseInt(getComputedStyle(item).getPropertyValue("height"), 10);
  var containerHight = parseInt(getComputedStyle(container).getPropertyValue("height"), 10) - itemHeight;
  var itemOffsetTop = item.offsetTop;
  var actualScrollTop = container.scrollTop;

  if (itemOffsetTop < actualScrollTop + containerHight && actualScrollTop < itemOffsetTop) {
    return;
  } // eslint-disable-next-line


  container.scrollTop = itemOffsetTop;
}

var DEFAULT_CARET_POSITION = "next";
var POSITION_CONFIGURATION = {
  X: {
    LEFT: "rta__autocomplete--left",
    RIGHT: "rta__autocomplete--right"
  },
  Y: {
    TOP: "rta__autocomplete--top",
    BOTTOM: "rta__autocomplete--bottom"
  }
};

var errorMessage = function errorMessage(message) {
  return console.error("RTA: dataProvider fails: ".concat(message, "\n    \nCheck the documentation or create issue if you think it's bug. https://github.com/webscopeio/react-textarea-autocomplete/issues"));
};

var reservedRegexChars = ['.', '^', '$', '*', '+', '-', '?', '(', ')', '[', ']', '{', '}', '\\', '|'];

var escapeRegex = function escapeRegex(text) {
  return _toConsumableArray(text).map(function (character) {
    return reservedRegexChars.includes(character) ? "\\".concat(character) : character;
  }).join('');
}; // The main purpose of this component is to figure out to which side the autocomplete should be opened


var Autocomplete =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Autocomplete, _React$Component);

  function Autocomplete() {
    _classCallCheck(this, Autocomplete);

    return _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).apply(this, arguments));
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var boundariesElement = this.props.boundariesElement;

      if (typeof boundariesElement === "string") {
        var elem = document.querySelector(boundariesElement);

        if (!elem) {
          throw new Error("RTA: Invalid prop boundariesElement: it has to be string or HTMLElement.");
        }

        this.containerElem = elem;
      } else if (boundariesElement instanceof HTMLElement) {
        this.containerElem = boundariesElement;
      } else {
        throw new Error("RTA: Invalid prop boundariesElement: it has to be string or HTMLElement.");
      }

      if (!this.containerElem || !this.containerElem.contains(this.ref)) {
        if (true) {
          throw new Error("RTA: Invalid prop boundariesElement: it has to be one of the parents of the RTA.");
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$ref$classList, _this$ref$classList2;

      var top = this.props.top || 0;
      var left = this.props.left || 0;
      var usedClasses = [];
      var unusedClasses = [];
      var topPosition = 0;
      var leftPosition = 0;
      var containerBounds = this.containerElem.getBoundingClientRect();
      var dropdownBounds = this.ref.getBoundingClientRect();
      var textareaBounds = this.props.textareaRef.getBoundingClientRect();
      var computedStyle = window.getComputedStyle(this.ref);
      var marginTop = parseInt(computedStyle.getPropertyValue("margin-top"), 10);
      var marginBottom = parseInt(computedStyle.getPropertyValue("margin-bottom"), 10);
      var marginLeft = parseInt(computedStyle.getPropertyValue("margin-left"), 10);
      var marginRight = parseInt(computedStyle.getPropertyValue("margin-right"), 10);
      var dropdownBottom = marginTop + marginBottom + textareaBounds.top + top + dropdownBounds.height;
      var dropdownRight = marginLeft + marginRight + textareaBounds.left + left + dropdownBounds.width;

      if (dropdownRight > containerBounds.right) {
        leftPosition = left - dropdownBounds.width;
        usedClasses.push(POSITION_CONFIGURATION.X.LEFT);
        unusedClasses.push(POSITION_CONFIGURATION.X.RIGHT);
      } else {
        leftPosition = left;
        usedClasses.push(POSITION_CONFIGURATION.X.RIGHT);
        unusedClasses.push(POSITION_CONFIGURATION.X.LEFT);
      }

      if (dropdownBottom > containerBounds.bottom) {
        topPosition = top - dropdownBounds.height;
        usedClasses.push(POSITION_CONFIGURATION.Y.TOP);
        unusedClasses.push(POSITION_CONFIGURATION.Y.BOTTOM);
      } else {
        topPosition = top;
        usedClasses.push(POSITION_CONFIGURATION.Y.BOTTOM);
        unusedClasses.push(POSITION_CONFIGURATION.Y.TOP);
      }

      if (this.props.renderToBody) {
        topPosition += textareaBounds.top;
        leftPosition += textareaBounds.left;
      }

      this.ref.style.top = "".concat(topPosition, "px");
      this.ref.style.left = "".concat(leftPosition, "px");

      (_this$ref$classList = this.ref.classList).remove.apply(_this$ref$classList, unusedClasses);

      (_this$ref$classList2 = this.ref.classList).add.apply(_this$ref$classList2, usedClasses);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          innerRef = _this$props.innerRef,
          children = _this$props.children,
          renderToBody = _this$props.renderToBody;
      var body = document.body;
      var autocompleteContainer = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        ref: function ref(_ref) {
          // $FlowFixMe
          _this.ref = _ref; // $FlowFixMe

          innerRef(_ref);
        },
        className: "rta__autocomplete ".concat(className || ""),
        style: style
      }, children);
      return renderToBody && body !== null ? react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.createPortal(autocompleteContainer, body) : autocompleteContainer;
    }
  }]);

  return Autocomplete;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

var ReactTextareaAutocomplete =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ReactTextareaAutocomplete, _React$Component2);

  function ReactTextareaAutocomplete(_props) {
    var _this2;

    _classCallCheck(this, ReactTextareaAutocomplete);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ReactTextareaAutocomplete).call(this, _props));
    _this2.state = {
      top: null,
      left: null,
      currentTrigger: null,
      actualToken: "",
      data: null,
      value: "",
      dataLoading: false,
      selectionEnd: 0,
      component: null,
      textToReplace: null
    };

    _this2.escListenerInit = function () {
      if (!_this2.escListener) {
        _this2.escListener = Listeners.add(KEY_CODES.ESC, _this2._closeAutocomplete);
      }
    };

    _this2.escListenerDestroy = function () {
      if (_this2.escListener) {
        Listeners.remove(_this2.escListener);
        _this2.escListener = null;
      }
    };

    _this2.getSelectionPosition = function () {
      if (!_this2.textareaRef) return null;
      return {
        selectionStart: _this2.textareaRef.selectionStart,
        selectionEnd: _this2.textareaRef.selectionEnd
      };
    };

    _this2.getSelectedText = function () {
      if (!_this2.textareaRef) return null;
      var _this2$textareaRef = _this2.textareaRef,
          selectionStart = _this2$textareaRef.selectionStart,
          selectionEnd = _this2$textareaRef.selectionEnd;
      if (selectionStart === selectionEnd) return null;
      return _this2.state.value.substr(selectionStart, selectionEnd - selectionStart);
    };

    _this2.setCaretPosition = function () {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!_this2.textareaRef) return;

      _this2.textareaRef.focus();

      _this2.textareaRef.setSelectionRange(position, position);
    };

    _this2.getCaretPosition = function () {
      if (!_this2.textareaRef) {
        return 0;
      }

      var position = _this2.textareaRef.selectionEnd;
      return position;
    };

    _this2._handleCaretChange = function (e) {
      var cleanLastTrigger = function cleanLastTrigger() {
        var beforeHandle = _this2.getCaretPosition() - 1;
        _this2.lastTrigger = _this2.lastTrigger ? beforeHandle : 0;
      };

      if (e.type === "keydown") {
        // $FlowFixMe
        var code = e.keyCode || e.which;

        switch (code) {
          case KEY_CODES.UP:
          case KEY_CODES.DOWN:
            if (!_this2._isAutocompleteOpen()) {
              cleanLastTrigger();
            }

            break;

          case KEY_CODES.LEFT:
          case KEY_CODES.RIGHT:
            cleanLastTrigger();
            break;

          default:
        }

        return;
      }

      cleanLastTrigger();
    };

    _this2._onSelect = function (item) {
      var _this2$state = _this2.state,
          selectionEnd = _this2$state.selectionEnd,
          currentTrigger = _this2$state.currentTrigger,
          textareaValue = _this2$state.value;
      var _this2$props = _this2.props,
          trigger = _this2$props.trigger,
          onItemSelected = _this2$props.onItemSelected;
      if (!currentTrigger) return;

      var getTextToReplaceForCurrentTrigger = _this2._getTextToReplace(currentTrigger);

      if (!getTextToReplaceForCurrentTrigger) {
        _this2._closeAutocomplete();

        return;
      }

      var newToken = getTextToReplaceForCurrentTrigger(item);

      if (!newToken) {
        _this2._closeAutocomplete();

        return;
      }

      if (onItemSelected) {
        onItemSelected({
          currentTrigger: currentTrigger,
          item: item
        });
      }

      var computeCaretPosition = function computeCaretPosition(position, token, startToken) {
        switch (position) {
          case "start":
            return startToken;

          case "next":
          case "end":
            return startToken + token.length;

          default:
            if (!Number.isInteger(position)) {
              throw new Error('RTA: caretPosition should be "start", "next", "end" or number.');
            }

            return position;
        }
      };

      var textToModify = textareaValue.slice(0, selectionEnd);
      var startOfTokenPosition = textToModify.search(
      /**
       * It's important to escape the currentTrigger char for chars like [, (,...
       */
      new RegExp("".concat(escapeRegex(currentTrigger), "[^".concat(escapeRegex(currentTrigger)).concat(trigger[currentTrigger].allowWhitespace ? "" : "\\s", "]"), "*$"))); // we add space after emoji is selected if a caret position is next

      var newTokenString = newToken.caretPosition === "next" ? "".concat(newToken.text, " ") : newToken.text;
      var newCaretPosition = computeCaretPosition(newToken.caretPosition, newTokenString, startOfTokenPosition);
      var modifiedText = textToModify.substring(0, startOfTokenPosition) + newTokenString;
      var newValue = textareaValue.replace(textToModify, modifiedText); // set the new textarea value and after that set the caret back to its position

      _this2.setState({
        value: newValue,
        dataLoading: false
      }, function () {
        var insertedTrigger = _this2.tokenRegExpEnding.exec(newTokenString);

        var insertedTriggerModifier = insertedTrigger ? insertedTrigger[0].length : 1;
        _this2.lastTrigger = newCaretPosition ? newCaretPosition - insertedTriggerModifier : newCaretPosition;
        _this2.textareaRef.value = newValue;
        _this2.textareaRef.selectionEnd = newCaretPosition;

        _this2._changeHandler();

        var scrollTop = _this2.textareaRef.scrollTop;

        _this2.setCaretPosition(newCaretPosition);
        /*
          Chrome does not maintain scroll position
          Relevant discussion https://github.com/webscopeio/react-textarea-autocomplete/pull/97
        */


        if (window.chrome) {
          _this2.textareaRef.scrollTop = scrollTop;
        }
      });
    };

    _this2._getTextToReplace = function (currentTrigger) {
      var triggerSettings = _this2.props.trigger[currentTrigger];
      if (!currentTrigger || !triggerSettings) return null;
      var output = triggerSettings.output;
      return function (item) {
        if (typeof item === "object" && (!output || typeof output !== "function")) {
          throw new Error('Output functor is not defined! If you are using items as object you have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
        }

        if (output) {
          var textToReplace = output(item, currentTrigger);

          if (textToReplace === undefined || typeof textToReplace === "number") {
            throw new Error("Output functor should return string or object in shape {text: string, caretPosition: string | number}.\nGot \"".concat(String(textToReplace), "\". Check the implementation for trigger \"").concat(currentTrigger, "\"\n\nSee https://github.com/webscopeio/react-textarea-autocomplete#trigger-type for more information.\n"));
          }

          if (textToReplace === null) return null;

          if (typeof textToReplace === "string") {
            return {
              text: textToReplace,
              caretPosition: DEFAULT_CARET_POSITION
            };
          }

          if (!textToReplace.text) {
            throw new Error("Output \"text\" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger \"".concat(currentTrigger, "\"\n"));
          }

          if (!textToReplace.caretPosition) {
            throw new Error("Output \"caretPosition\" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger \"".concat(currentTrigger, "\"\n"));
          }

          return textToReplace;
        }

        if (typeof item !== "string") {
          throw new Error("Output item should be string\n");
        }

        return {
          text: "".concat(currentTrigger).concat(item).concat(currentTrigger),
          caretPosition: DEFAULT_CARET_POSITION
        };
      };
    };

    _this2._getCurrentTriggerSettings = function () {
      var currentTrigger = _this2.state.currentTrigger;
      if (!currentTrigger) return null;
      return _this2.props.trigger[currentTrigger];
    };

    _this2._getValuesFromProvider = function () {
      var _this2$state2 = _this2.state,
          currentTrigger = _this2$state2.currentTrigger,
          actualToken = _this2$state2.actualToken;

      var triggerSettings = _this2._getCurrentTriggerSettings();

      if (!currentTrigger || !triggerSettings) {
        return;
      }

      var dataProvider = triggerSettings.dataProvider,
          component = triggerSettings.component;

      if (typeof dataProvider !== "function") {
        throw new Error("Trigger provider has to be a function!");
      }

      _this2.setState({
        dataLoading: true
      });

      var providedData = dataProvider(actualToken);

      if (!(providedData instanceof Promise)) {
        providedData = Promise.resolve(providedData);
      }

      providedData.then(function (data) {
        if (!Array.isArray(data)) {
          throw new Error("Trigger provider has to provide an array!");
        }

        if (typeof component !== "function") {
          throw new Error("Component should be defined!");
        } // throw away if we resolved old trigger


        if (currentTrigger !== _this2.state.currentTrigger) return; // if we haven't resolved any data let's close the autocomplete

        if (!data.length) {
          _this2._closeAutocomplete();

          return;
        }

        _this2.setState({
          dataLoading: false,
          data: data,
          component: component
        });
      }).catch(function (e) {
        return errorMessage(e.message);
      });
    };

    _this2._getSuggestions = function () {
      var _this2$state3 = _this2.state,
          currentTrigger = _this2$state3.currentTrigger,
          data = _this2$state3.data;
      if (!currentTrigger || !data || data && !data.length) return null;
      return data;
    };

    _this2._createRegExp = function () {
      var trigger = _this2.props.trigger; // negative lookahead to match only the trigger + the actual token = "bladhwd:adawd:word test" => ":word"
      // https://stackoverflow.com/a/8057827/2719917

      _this2.tokenRegExp = new RegExp("(".concat(Object.keys(trigger) // the sort is important for multi-char combos as "/kick", "/"
      .sort(function (a, b) {
        if (a < b) {
          return 1;
        }

        if (a > b) {
          return -1;
        }

        return 0;
      }).map(function (a) {
        return escapeRegex(a);
      }).join("|"), ")((?:(?!\\1)[^\\s])*$)"));
      _this2.tokenRegExpEnding = new RegExp("(".concat(Object.keys(trigger) // the sort is important for multi-char combos as "/kick", "/"
      .sort(function (a, b) {
        if (a < b) {
          return 1;
        }

        if (a > b) {
          return -1;
        }

        return 0;
      }).map(function (a) {
        return escapeRegex(a);
      }).join("|"), ")$"));
    };

    _this2._closeAutocomplete = function () {
      _this2.escListenerDestroy();

      _this2.setState({
        data: null,
        dataLoading: false,
        currentTrigger: null
      });
    };

    _this2._cleanUpProps = function () {
      var props = _objectSpread({}, _this2.props);

      var notSafe = ["loadingComponent", "boundariesElement", "containerStyle", "minChar", "scrollToItem", "ref", "innerRef", "onChange", "onCaretPositionChange", "className", "value", "trigger", "listStyle", "itemStyle", "containerStyle", "loaderStyle", "className", "containerClassName", "listClassName", "itemClassName", "loaderClassName", "dropdownStyle", "dropdownClassName", "movePopupAsYouType", "textAreaComponent", "renderToBody", "onItemSelected"]; // eslint-disable-next-line

      for (var prop in props) {
        if (notSafe.includes(prop)) delete props[prop];
      }

      return props;
    };

    _this2._changeHandler = function (e) {
      var _this2$props2 = _this2.props,
          trigger = _this2$props2.trigger,
          onChange = _this2$props2.onChange,
          minChar = _this2$props2.minChar,
          onCaretPositionChange = _this2$props2.onCaretPositionChange,
          movePopupAsYouType = _this2$props2.movePopupAsYouType;
      var _this2$state4 = _this2.state,
          top = _this2$state4.top,
          left = _this2$state4.left;
      var event = e;

      if (!event) {
        // fire onChange event after successful selection
        event = new custom_event__WEBPACK_IMPORTED_MODULE_2___default.a("change", {
          bubbles: true
        });

        _this2.textareaRef.dispatchEvent(event);
      }

      var textarea = event.target;
      var selectionEnd = textarea.selectionEnd;
      var value = textarea.value;
      _this2.lastValueBubbledEvent = value;

      if (onChange && event) {
        event.persist && event.persist();
        onChange(event);
      }

      if (onCaretPositionChange) {
        var caretPosition = _this2.getCaretPosition();

        onCaretPositionChange(caretPosition);
      }

      _this2.setState({
        value: value
      });

      var setTopLeft = function setTopLeft() {
        var _getCaretCoordinates = textarea_caret__WEBPACK_IMPORTED_MODULE_1___default()(textarea, selectionEnd),
            newTop = _getCaretCoordinates.top,
            newLeft = _getCaretCoordinates.left;

        _this2.setState({
          // make position relative to textarea
          top: newTop - _this2.textareaRef.scrollTop || 0,
          left: newLeft
        });
      };

      var cleanLastTrigger = function cleanLastTrigger(triggerLength) {
        _this2.lastTrigger = selectionEnd - triggerLength;

        _this2._closeAutocomplete();

        setTopLeft();
      };

      if (selectionEnd <= _this2.lastTrigger) {
        var _affectedTextareaValue = value.slice(0, selectionEnd);

        var _newTrigger = _this2.tokenRegExp.exec(_affectedTextareaValue);

        cleanLastTrigger(_newTrigger ? _newTrigger[0].length : 0);
      }

      var affectedTextareaValue = value.slice(_this2.lastTrigger, selectionEnd);

      var tokenMatch = _this2.tokenRegExp.exec(affectedTextareaValue);

      var lastToken = tokenMatch && tokenMatch[0];
      var currentTrigger = tokenMatch && tokenMatch[1] || null;
      var currentTriggerLength = currentTrigger ? currentTrigger.length - 1 : 0; // with this approach we want to know if the user just inserted a new trigger sequence

      var newTrigger = _this2.tokenRegExpEnding.exec(affectedTextareaValue);

      if (newTrigger) {
        cleanLastTrigger(newTrigger[0].length);
      } else if (!_this2._isAutocompleteOpen()) {
        _this2._closeAutocomplete();
      }
      /*
       if we lost the trigger token or there is no following character we want to close
       the autocomplete
      */


      if ((!lastToken || lastToken.length <= minChar + currentTriggerLength) && ( // check if our current trigger disallows whitespace
      _this2.state.currentTrigger && !trigger[_this2.state.currentTrigger].allowWhitespace || !_this2.state.currentTrigger)) {
        _this2._closeAutocomplete();

        return;
      }
      /**
       * This code has to be sync that is the reason why we obtain the currentTrigger
       * from currentTrigger not this.state.currentTrigger
       *
       * Check if the currently typed token has to be afterWhitespace, or not.
       *
       * This setting means that there has to be whitespace before the token (on it has to be the the first character typed into textarea)
       */


      if (currentTrigger && trigger[currentTrigger].afterWhitespace && !/\s/.test(value[selectionEnd - lastToken.length - 1]) && value[selectionEnd - lastToken.length - 1] !== undefined) {
        _this2._closeAutocomplete();

        return;
      }
      /**
        If our current trigger allows whitespace
        get the correct token for DataProvider, so we need to construct new RegExp
       */


      if (_this2.state.currentTrigger && trigger[_this2.state.currentTrigger].allowWhitespace) {
        tokenMatch = new RegExp("".concat(escapeRegex(_this2.state.currentTrigger), ".*$")).exec(value.slice(0, selectionEnd));
        lastToken = tokenMatch && tokenMatch[0];

        if (!lastToken) {
          _this2._closeAutocomplete();

          return;
        }

        currentTrigger = Object.keys(trigger).find(function (a) {
          return a === lastToken[0];
        }) || null;
      }

      var actualToken = lastToken.slice(1); // if trigger is not configured step out from the function, otherwise proceed

      if (!currentTrigger) {
        return;
      }

      if (movePopupAsYouType || top === null && left === null || // if the trigger got changed, let's reposition the autocomplete
      _this2.state.currentTrigger !== currentTrigger) {
        setTopLeft();
      }

      _this2.escListenerInit();

      var textToReplace = _this2._getTextToReplace(currentTrigger);

      _this2.setState({
        selectionEnd: selectionEnd,
        currentTrigger: currentTrigger,
        textToReplace: textToReplace,
        actualToken: actualToken
      }, function () {
        try {
          _this2._getValuesFromProvider();
        } catch (err) {
          errorMessage(err.message);
        }
      });
    };

    _this2._selectHandler = function (e) {
      var _this2$props3 = _this2.props,
          onCaretPositionChange = _this2$props3.onCaretPositionChange,
          onSelect = _this2$props3.onSelect;

      if (onCaretPositionChange) {
        var caretPosition = _this2.getCaretPosition();

        onCaretPositionChange(caretPosition);
      }

      if (onSelect) {
        e.persist();
        onSelect(e);
      }
    };

    _this2._shouldStayOpen = function (e) {
      var el = e.relatedTarget; // IE11 doesn't know about `relatedTarget` // https://stackoverflow.com/a/49325196/2719917

      if (el === null) {
        el = document.activeElement;
      }

      if (_this2.dropdownRef && el instanceof Node && _this2.dropdownRef.contains(el)) {
        return true;
      }

      return false;
    };

    _this2._onClick = function (e) {
      var onClick = _this2.props.onClick;

      if (onClick) {
        e.persist();
        onClick(e);
      }

      if (_this2._shouldStayOpen(e)) {
        return;
      }

      _this2._closeAutocomplete();
    };

    _this2._onBlur = function (e) {
      var onBlur = _this2.props.onBlur;

      if (onBlur) {
        e.persist();
        onBlur(e);
      }

      if (_this2._shouldStayOpen(e)) {
        return;
      }

      _this2._closeAutocomplete();
    };

    _this2._onScrollHandler = function () {
      _this2._closeAutocomplete();
    };

    _this2._dropdownScroll = function (item) {
      var scrollToItem = _this2.props.scrollToItem;
      if (!scrollToItem) return;

      if (scrollToItem === true) {
        defaultScrollToItem(_this2.dropdownRef, item);
        return;
      }

      if (typeof scrollToItem !== "function" || scrollToItem.length !== 2) {
        throw new Error("`scrollToItem` has to be boolean (true for default implementation) or function with two parameters: container, item.");
      }

      scrollToItem(_this2.dropdownRef, item);
    };

    _this2._isAutocompleteOpen = function () {
      var _this2$state5 = _this2.state,
          dataLoading = _this2$state5.dataLoading,
          currentTrigger = _this2$state5.currentTrigger;

      var suggestionData = _this2._getSuggestions();

      return !!((dataLoading || suggestionData) && currentTrigger);
    };

    _this2._textareaRef = function (ref) {
      // $FlowFixMe - ref is actually a `?HTMLTextAreaElement`
      _this2.props.innerRef && _this2.props.innerRef(ref);
      _this2.textareaRef = ref;
    };

    _this2.lastTrigger = 0;
    _this2.escListener = null;
    var _this2$props4 = _this2.props,
        loadingComponent = _this2$props4.loadingComponent,
        _trigger = _this2$props4.trigger,
        _value = _this2$props4.value;
    if (_value) _this2.state.value = _value;

    _this2._createRegExp();

    if (!loadingComponent) {
      throw new Error("RTA: loadingComponent is not defined");
    }

    if (!_trigger) {
      throw new Error("RTA: trigger is not defined");
    }

    return _this2;
  }

  _createClass(ReactTextareaAutocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Listeners.startListen(this.textareaRef); // handle caret change

      this.textareaRef && this.textareaRef.addEventListener("focus", this._handleCaretChange);
      this.textareaRef && this.textareaRef.addEventListener("click", this._handleCaretChange);
      this.textareaRef && this.textareaRef.addEventListener("keydown", this._handleCaretChange);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var oldTrigger = _ref2.trigger,
          oldValue = _ref2.value;
      var _this$props2 = this.props,
          trigger = _this$props2.trigger,
          value = _this$props2.value;

      if (Object.keys(trigger).join("") !== Object.keys(oldTrigger).join("")) {
        this._createRegExp();
      }

      if (oldValue !== value && this.lastValueBubbledEvent !== value) {
        this.lastTrigger = 0;

        this._changeHandler();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.escListenerDestroy();
      Listeners.stopListen(this.textareaRef); // handle caret change

      this.textareaRef && this.textareaRef.removeEventListener("focus", this._handleCaretChange);
      this.textareaRef && this.textareaRef.removeEventListener("click", this._handleCaretChange);
      this.textareaRef && this.textareaRef.removeEventListener("keydown", this._handleCaretChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          Loader = _this$props3.loadingComponent,
          style = _this$props3.style,
          className = _this$props3.className,
          listStyle = _this$props3.listStyle,
          itemStyle = _this$props3.itemStyle,
          boundariesElement = _this$props3.boundariesElement,
          movePopupAsYouType = _this$props3.movePopupAsYouType,
          listClassName = _this$props3.listClassName,
          itemClassName = _this$props3.itemClassName,
          dropdownClassName = _this$props3.dropdownClassName,
          dropdownStyle = _this$props3.dropdownStyle,
          containerStyle = _this$props3.containerStyle,
          containerClassName = _this$props3.containerClassName,
          loaderStyle = _this$props3.loaderStyle,
          loaderClassName = _this$props3.loaderClassName,
          textAreaComponent = _this$props3.textAreaComponent,
          renderToBody = _this$props3.renderToBody;
      var _this$state = this.state,
          left = _this$state.left,
          top = _this$state.top,
          dataLoading = _this$state.dataLoading,
          component = _this$state.component,
          value = _this$state.value,
          textToReplace = _this$state.textToReplace;

      var isAutocompleteOpen = this._isAutocompleteOpen();

      var suggestionData = this._getSuggestions();

      var extraAttrs = {};
      var TextAreaComponent;

      if (textAreaComponent.component) {
        TextAreaComponent = textAreaComponent.component;
        extraAttrs[textAreaComponent.ref] = this._textareaRef;
      } else {
        TextAreaComponent = textAreaComponent;
        extraAttrs.ref = this._textareaRef;
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "rta ".concat(dataLoading === true ? "rta--loading" : "", " ").concat(containerClassName || ""),
        style: containerStyle
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextAreaComponent, Object.assign({}, this._cleanUpProps(), {
        className: "rta__textarea ".concat(className || ""),
        onChange: this._changeHandler,
        onSelect: this._selectHandler,
        onScroll: this._onScrollHandler,
        onClick: // The textarea itself is outside the autoselect dropdown.
        this._onClick,
        onBlur: this._onBlur,
        value: value,
        style: style
      }, extraAttrs)), isAutocompleteOpen && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Autocomplete, {
        innerRef: function innerRef(ref) {
          // $FlowFixMe
          _this3.dropdownRef = ref;
        },
        top: top,
        left: left,
        style: dropdownStyle,
        className: dropdownClassName,
        movePopupAsYouType: movePopupAsYouType,
        boundariesElement: boundariesElement,
        textareaRef: this.textareaRef,
        renderToBody: renderToBody
      }, suggestionData && component && textToReplace && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(List, {
        values: suggestionData,
        component: component,
        style: listStyle,
        className: listClassName,
        itemClassName: itemClassName,
        itemStyle: itemStyle,
        getTextToReplace: textToReplace,
        onSelect: this._onSelect,
        dropdownScroll: this._dropdownScroll
      }), dataLoading && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "rta__loader ".concat(suggestionData !== null ? "rta__loader--suggestion-data" : "rta__loader--empty-suggestion-data", " ").concat(loaderClassName || ""),
        style: loaderStyle
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Loader, {
        data: suggestionData
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3) {
      var value = _ref3.value;
      if (value === null || value === undefined) return null;
      return {
        value: value
      };
    }
  }]);

  return ReactTextareaAutocomplete;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReactTextareaAutocomplete.defaultProps = {
  movePopupAsYouType: false,
  value: null,
  minChar: 1,
  boundariesElement: "body",
  scrollToItem: true,
  textAreaComponent: "textarea",
  renderToBody: false
};

/* harmony default export */ __webpack_exports__["default"] = (ReactTextareaAutocomplete);


/***/ }),

/***/ "./node_modules/custom-event/index.js":
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/emojilib/emojis.json":
/*!*******************************************!*\
  !*** ./node_modules/emojilib/emojis.json ***!
  \*******************************************/
/*! exports provided: 100, 1234, grinning, grimacing, grin, joy, rofl, partying, smiley, smile, sweat_smile, laughing, innocent, wink, blush, slightly_smiling_face, upside_down_face, relaxed, yum, relieved, heart_eyes, smiling_face_with_three_hearts, kissing_heart, kissing, kissing_smiling_eyes, kissing_closed_eyes, stuck_out_tongue_winking_eye, zany, raised_eyebrow, monocle, stuck_out_tongue_closed_eyes, stuck_out_tongue, money_mouth_face, nerd_face, sunglasses, star_struck, clown_face, cowboy_hat_face, hugs, smirk, no_mouth, neutral_face, expressionless, unamused, roll_eyes, thinking, lying_face, hand_over_mouth, shushing, symbols_over_mouth, exploding_head, flushed, disappointed, worried, angry, rage, pensive, confused, slightly_frowning_face, frowning_face, persevere, confounded, tired_face, weary, pleading, triumph, open_mouth, scream, fearful, cold_sweat, hushed, frowning, anguished, cry, disappointed_relieved, drooling_face, sleepy, sweat, hot, cold, sob, dizzy_face, astonished, zipper_mouth_face, nauseated_face, sneezing_face, vomiting, mask, face_with_thermometer, face_with_head_bandage, woozy, sleeping, zzz, poop, smiling_imp, imp, japanese_ogre, japanese_goblin, skull, ghost, alien, robot, smiley_cat, smile_cat, joy_cat, heart_eyes_cat, smirk_cat, kissing_cat, scream_cat, crying_cat_face, pouting_cat, palms_up, raised_hands, clap, wave, call_me_hand, +1, -1, facepunch, fist, fist_left, fist_right, v, ok_hand, raised_hand, raised_back_of_hand, open_hands, muscle, pray, foot, leg, handshake, point_up, point_up_2, point_down, point_left, point_right, fu, raised_hand_with_fingers_splayed, love_you, metal, crossed_fingers, vulcan_salute, writing_hand, selfie, nail_care, lips, tooth, tongue, ear, nose, eye, eyes, brain, bust_in_silhouette, busts_in_silhouette, speaking_head, baby, child, boy, girl, adult, man, woman, blonde_woman, blonde_man, bearded_person, older_adult, older_man, older_woman, man_with_gua_pi_mao, woman_with_headscarf, woman_with_turban, man_with_turban, policewoman, policeman, construction_worker_woman, construction_worker_man, guardswoman, guardsman, female_detective, male_detective, woman_health_worker, man_health_worker, woman_farmer, man_farmer, woman_cook, man_cook, woman_student, man_student, woman_singer, man_singer, woman_teacher, man_teacher, woman_factory_worker, man_factory_worker, woman_technologist, man_technologist, woman_office_worker, man_office_worker, woman_mechanic, man_mechanic, woman_scientist, man_scientist, woman_artist, man_artist, woman_firefighter, man_firefighter, woman_pilot, man_pilot, woman_astronaut, man_astronaut, woman_judge, man_judge, woman_superhero, man_superhero, woman_supervillain, man_supervillain, mrs_claus, santa, sorceress, wizard, woman_elf, man_elf, woman_vampire, man_vampire, woman_zombie, man_zombie, woman_genie, man_genie, mermaid, merman, woman_fairy, man_fairy, angel, pregnant_woman, breastfeeding, princess, prince, bride_with_veil, man_in_tuxedo, running_woman, running_man, walking_woman, walking_man, dancer, man_dancing, dancing_women, dancing_men, couple, two_men_holding_hands, two_women_holding_hands, bowing_woman, bowing_man, man_facepalming, woman_facepalming, woman_shrugging, man_shrugging, tipping_hand_woman, tipping_hand_man, no_good_woman, no_good_man, ok_woman, ok_man, raising_hand_woman, raising_hand_man, pouting_woman, pouting_man, frowning_woman, frowning_man, haircut_woman, haircut_man, massage_woman, massage_man, woman_in_steamy_room, man_in_steamy_room, couple_with_heart_woman_man, couple_with_heart_woman_woman, couple_with_heart_man_man, couplekiss_man_woman, couplekiss_woman_woman, couplekiss_man_man, family_man_woman_boy, family_man_woman_girl, family_man_woman_girl_boy, family_man_woman_boy_boy, family_man_woman_girl_girl, family_woman_woman_boy, family_woman_woman_girl, family_woman_woman_girl_boy, family_woman_woman_boy_boy, family_woman_woman_girl_girl, family_man_man_boy, family_man_man_girl, family_man_man_girl_boy, family_man_man_boy_boy, family_man_man_girl_girl, family_woman_boy, family_woman_girl, family_woman_girl_boy, family_woman_boy_boy, family_woman_girl_girl, family_man_boy, family_man_girl, family_man_girl_boy, family_man_boy_boy, family_man_girl_girl, yarn, thread, coat, labcoat, womans_clothes, tshirt, jeans, necktie, dress, bikini, kimono, lipstick, kiss, footprints, flat_shoe, high_heel, sandal, boot, mans_shoe, athletic_shoe, hiking_boot, socks, gloves, scarf, womans_hat, tophat, billed_hat, rescue_worker_helmet, mortar_board, crown, school_satchel, luggage, pouch, purse, handbag, briefcase, eyeglasses, dark_sunglasses, goggles, ring, closed_umbrella, dog, cat, mouse, hamster, rabbit, fox_face, bear, panda_face, koala, tiger, lion, cow, pig, pig_nose, frog, squid, octopus, shrimp, monkey_face, gorilla, see_no_evil, hear_no_evil, speak_no_evil, monkey, chicken, penguin, bird, baby_chick, hatching_chick, hatched_chick, duck, eagle, owl, bat, wolf, boar, horse, unicorn, honeybee, bug, butterfly, snail, beetle, ant, grasshopper, spider, scorpion, crab, snake, lizard, t-rex, sauropod, turtle, tropical_fish, fish, blowfish, dolphin, shark, whale, whale2, crocodile, leopard, zebra, tiger2, water_buffalo, ox, cow2, deer, dromedary_camel, camel, giraffe, elephant, rhinoceros, goat, ram, sheep, racehorse, pig2, rat, mouse2, rooster, turkey, dove, dog2, poodle, cat2, rabbit2, chipmunk, hedgehog, raccoon, llama, hippopotamus, kangaroo, badger, swan, peacock, parrot, lobster, mosquito, paw_prints, dragon, dragon_face, cactus, christmas_tree, evergreen_tree, deciduous_tree, palm_tree, seedling, herb, shamrock, four_leaf_clover, bamboo, tanabata_tree, leaves, fallen_leaf, maple_leaf, ear_of_rice, hibiscus, sunflower, rose, wilted_flower, tulip, blossom, cherry_blossom, bouquet, mushroom, chestnut, jack_o_lantern, shell, spider_web, earth_americas, earth_africa, earth_asia, full_moon, waning_gibbous_moon, last_quarter_moon, waning_crescent_moon, new_moon, waxing_crescent_moon, first_quarter_moon, waxing_gibbous_moon, new_moon_with_face, full_moon_with_face, first_quarter_moon_with_face, last_quarter_moon_with_face, sun_with_face, crescent_moon, star, star2, dizzy, sparkles, comet, sunny, sun_behind_small_cloud, partly_sunny, sun_behind_large_cloud, sun_behind_rain_cloud, cloud, cloud_with_rain, cloud_with_lightning_and_rain, cloud_with_lightning, zap, fire, boom, snowflake, cloud_with_snow, snowman, snowman_with_snow, wind_face, dash, tornado, fog, open_umbrella, umbrella, droplet, sweat_drops, ocean, green_apple, apple, pear, tangerine, lemon, banana, watermelon, grapes, strawberry, melon, cherries, peach, pineapple, coconut, kiwi_fruit, mango, avocado, broccoli, tomato, eggplant, cucumber, carrot, hot_pepper, potato, corn, leafy_greens, sweet_potato, peanuts, honey_pot, croissant, bread, baguette_bread, bagel, pretzel, cheese, egg, bacon, steak, pancakes, poultry_leg, meat_on_bone, bone, fried_shrimp, fried_egg, hamburger, fries, stuffed_flatbread, hotdog, pizza, sandwich, canned_food, spaghetti, taco, burrito, green_salad, shallow_pan_of_food, ramen, stew, fish_cake, fortune_cookie, sushi, bento, curry, rice_ball, rice, rice_cracker, oden, dango, shaved_ice, ice_cream, icecream, pie, cake, cupcake, moon_cake, birthday, custard, candy, lollipop, chocolate_bar, popcorn, dumpling, doughnut, cookie, milk_glass, beer, beers, clinking_glasses, wine_glass, tumbler_glass, cocktail, tropical_drink, champagne, sake, tea, cup_with_straw, coffee, baby_bottle, salt, spoon, fork_and_knife, plate_with_cutlery, bowl_with_spoon, takeout_box, chopsticks, soccer, basketball, football, baseball, softball, tennis, volleyball, rugby_football, flying_disc, 8ball, golf, golfing_woman, golfing_man, ping_pong, badminton, goal_net, ice_hockey, field_hockey, lacrosse, cricket, ski, skier, snowboarder, person_fencing, women_wrestling, men_wrestling, woman_cartwheeling, man_cartwheeling, woman_playing_handball, man_playing_handball, ice_skate, curling_stone, skateboard, sled, bow_and_arrow, fishing_pole_and_fish, boxing_glove, martial_arts_uniform, rowing_woman, rowing_man, climbing_woman, climbing_man, swimming_woman, swimming_man, woman_playing_water_polo, man_playing_water_polo, woman_in_lotus_position, man_in_lotus_position, surfing_woman, surfing_man, bath, basketball_woman, basketball_man, weight_lifting_woman, weight_lifting_man, biking_woman, biking_man, mountain_biking_woman, mountain_biking_man, horse_racing, business_suit_levitating, trophy, running_shirt_with_sash, medal_sports, medal_military, 1st_place_medal, 2nd_place_medal, 3rd_place_medal, reminder_ribbon, rosette, ticket, tickets, performing_arts, art, circus_tent, woman_juggling, man_juggling, microphone, headphones, musical_score, musical_keyboard, drum, saxophone, trumpet, guitar, violin, clapper, video_game, space_invader, dart, game_die, chess_pawn, slot_machine, jigsaw, bowling, red_car, taxi, blue_car, bus, trolleybus, racing_car, police_car, ambulance, fire_engine, minibus, truck, articulated_lorry, tractor, kick_scooter, motorcycle, bike, motor_scooter, rotating_light, oncoming_police_car, oncoming_bus, oncoming_automobile, oncoming_taxi, aerial_tramway, mountain_cableway, suspension_railway, railway_car, train, monorail, bullettrain_side, bullettrain_front, light_rail, mountain_railway, steam_locomotive, train2, metro, tram, station, flying_saucer, helicopter, small_airplane, airplane, flight_departure, flight_arrival, sailboat, motor_boat, speedboat, ferry, passenger_ship, rocket, artificial_satellite, seat, canoe, anchor, construction, fuelpump, busstop, vertical_traffic_light, traffic_light, checkered_flag, ship, ferris_wheel, roller_coaster, carousel_horse, building_construction, foggy, tokyo_tower, factory, fountain, rice_scene, mountain, mountain_snow, mount_fuji, volcano, japan, camping, tent, national_park, motorway, railway_track, sunrise, sunrise_over_mountains, desert, beach_umbrella, desert_island, city_sunrise, city_sunset, cityscape, night_with_stars, bridge_at_night, milky_way, stars, sparkler, fireworks, rainbow, houses, european_castle, japanese_castle, stadium, statue_of_liberty, house, house_with_garden, derelict_house, office, department_store, post_office, european_post_office, hospital, bank, hotel, convenience_store, school, love_hotel, wedding, classical_building, church, mosque, synagogue, kaaba, shinto_shrine, watch, iphone, calling, computer, keyboard, desktop_computer, printer, computer_mouse, trackball, joystick, clamp, minidisc, floppy_disk, cd, dvd, vhs, camera, camera_flash, video_camera, movie_camera, film_projector, film_strip, telephone_receiver, phone, pager, fax, tv, radio, studio_microphone, level_slider, control_knobs, compass, stopwatch, timer_clock, alarm_clock, mantelpiece_clock, hourglass_flowing_sand, hourglass, satellite, battery, electric_plug, bulb, flashlight, candle, fire_extinguisher, wastebasket, oil_drum, money_with_wings, dollar, yen, euro, pound, moneybag, credit_card, gem, balance_scale, toolbox, wrench, hammer, hammer_and_pick, hammer_and_wrench, pick, nut_and_bolt, gear, brick, chains, magnet, gun, bomb, firecracker, hocho, dagger, crossed_swords, shield, smoking, skull_and_crossbones, coffin, funeral_urn, amphora, crystal_ball, prayer_beads, nazar_amulet, barber, alembic, telescope, microscope, hole, pill, syringe, dna, microbe, petri_dish, test_tube, thermometer, broom, basket, toilet_paper, label, bookmark, toilet, shower, bathtub, soap, sponge, lotion_bottle, key, old_key, couch_and_lamp, sleeping_bed, bed, door, bellhop_bell, teddy_bear, framed_picture, world_map, parasol_on_ground, moyai, shopping, shopping_cart, balloon, flags, ribbon, gift, confetti_ball, tada, dolls, wind_chime, crossed_flags, izakaya_lantern, red_envelope, email, envelope_with_arrow, incoming_envelope, e-mail, love_letter, postbox, mailbox_closed, mailbox, mailbox_with_mail, mailbox_with_no_mail, package, postal_horn, inbox_tray, outbox_tray, scroll, page_with_curl, bookmark_tabs, receipt, bar_chart, chart_with_upwards_trend, chart_with_downwards_trend, page_facing_up, date, calendar, spiral_calendar, card_index, card_file_box, ballot_box, file_cabinet, clipboard, spiral_notepad, file_folder, open_file_folder, card_index_dividers, newspaper_roll, newspaper, notebook, closed_book, green_book, blue_book, orange_book, notebook_with_decorative_cover, ledger, books, open_book, safety_pin, link, paperclip, paperclips, scissors, triangular_ruler, straight_ruler, abacus, pushpin, round_pushpin, triangular_flag_on_post, white_flag, black_flag, rainbow_flag, closed_lock_with_key, lock, unlock, lock_with_ink_pen, pen, fountain_pen, black_nib, memo, pencil2, crayon, paintbrush, mag, mag_right, heart, orange_heart, yellow_heart, green_heart, blue_heart, purple_heart, black_heart, broken_heart, heavy_heart_exclamation, two_hearts, revolving_hearts, heartbeat, heartpulse, sparkling_heart, cupid, gift_heart, heart_decoration, peace_symbol, latin_cross, star_and_crescent, om, wheel_of_dharma, star_of_david, six_pointed_star, menorah, yin_yang, orthodox_cross, place_of_worship, ophiuchus, aries, taurus, gemini, cancer, leo, virgo, libra, scorpius, sagittarius, capricorn, aquarius, pisces, id, atom_symbol, u7a7a, u5272, radioactive, biohazard, mobile_phone_off, vibration_mode, u6709, u7121, u7533, u55b6, u6708, eight_pointed_black_star, vs, accept, white_flower, ideograph_advantage, secret, congratulations, u5408, u6e80, u7981, a, b, ab, cl, o2, sos, no_entry, name_badge, no_entry_sign, x, o, stop_sign, anger, hotsprings, no_pedestrians, do_not_litter, no_bicycles, non-potable_water, underage, no_mobile_phones, exclamation, grey_exclamation, question, grey_question, bangbang, interrobang, low_brightness, high_brightness, trident, fleur_de_lis, part_alternation_mark, warning, children_crossing, beginner, recycle, u6307, chart, sparkle, eight_spoked_asterisk, negative_squared_cross_mark, white_check_mark, diamond_shape_with_a_dot_inside, cyclone, loop, globe_with_meridians, m, atm, sa, passport_control, customs, baggage_claim, left_luggage, wheelchair, no_smoking, wc, parking, potable_water, mens, womens, baby_symbol, restroom, put_litter_in_its_place, cinema, signal_strength, koko, ng, ok, up, cool, new, free, zero, one, two, three, four, five, six, seven, eight, nine, keycap_ten, asterisk, eject_button, arrow_forward, pause_button, next_track_button, stop_button, record_button, play_or_pause_button, previous_track_button, fast_forward, rewind, twisted_rightwards_arrows, repeat, repeat_one, arrow_backward, arrow_up_small, arrow_down_small, arrow_double_up, arrow_double_down, arrow_right, arrow_left, arrow_up, arrow_down, arrow_upper_right, arrow_lower_right, arrow_lower_left, arrow_upper_left, arrow_up_down, left_right_arrow, arrows_counterclockwise, arrow_right_hook, leftwards_arrow_with_hook, arrow_heading_up, arrow_heading_down, hash, information_source, abc, abcd, capital_abcd, symbols, musical_note, notes, wavy_dash, curly_loop, heavy_check_mark, arrows_clockwise, heavy_plus_sign, heavy_minus_sign, heavy_division_sign, heavy_multiplication_x, infinity, heavy_dollar_sign, currency_exchange, copyright, registered, tm, end, back, on, top, soon, ballot_box_with_check, radio_button, white_circle, black_circle, red_circle, large_blue_circle, small_orange_diamond, small_blue_diamond, large_orange_diamond, large_blue_diamond, small_red_triangle, black_small_square, white_small_square, black_large_square, white_large_square, small_red_triangle_down, black_medium_square, white_medium_square, black_medium_small_square, white_medium_small_square, black_square_button, white_square_button, speaker, sound, loud_sound, mute, mega, loudspeaker, bell, no_bell, black_joker, mahjong, spades, clubs, hearts, diamonds, flower_playing_cards, thought_balloon, right_anger_bubble, speech_balloon, left_speech_bubble, clock1, clock2, clock3, clock4, clock5, clock6, clock7, clock8, clock9, clock10, clock11, clock12, clock130, clock230, clock330, clock430, clock530, clock630, clock730, clock830, clock930, clock1030, clock1130, clock1230, afghanistan, aland_islands, albania, algeria, american_samoa, andorra, angola, anguilla, antarctica, antigua_barbuda, argentina, armenia, aruba, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, caribbean_netherlands, bosnia_herzegovina, botswana, brazil, british_indian_ocean_territory, british_virgin_islands, brunei, bulgaria, burkina_faso, burundi, cape_verde, cambodia, cameroon, canada, canary_islands, cayman_islands, central_african_republic, chad, chile, cn, christmas_island, cocos_islands, colombia, comoros, congo_brazzaville, congo_kinshasa, cook_islands, costa_rica, croatia, cuba, curacao, cyprus, czech_republic, denmark, djibouti, dominica, dominican_republic, ecuador, egypt, el_salvador, equatorial_guinea, eritrea, estonia, ethiopia, eu, falkland_islands, faroe_islands, fiji, finland, fr, french_guiana, french_polynesia, french_southern_territories, gabon, gambia, georgia, de, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guam, guatemala, guernsey, guinea, guinea_bissau, guyana, haiti, honduras, hong_kong, hungary, iceland, india, indonesia, iran, iraq, ireland, isle_of_man, israel, it, cote_divoire, jamaica, jp, jersey, jordan, kazakhstan, kenya, kiribati, kosovo, kuwait, kyrgyzstan, laos, latvia, lebanon, lesotho, liberia, libya, liechtenstein, lithuania, luxembourg, macau, macedonia, madagascar, malawi, malaysia, maldives, mali, malta, marshall_islands, martinique, mauritania, mauritius, mayotte, mexico, micronesia, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar, namibia, nauru, nepal, netherlands, new_caledonia, new_zealand, nicaragua, niger, nigeria, niue, norfolk_island, northern_mariana_islands, north_korea, norway, oman, pakistan, palau, palestinian_territories, panama, papua_new_guinea, paraguay, peru, philippines, pitcairn_islands, poland, portugal, puerto_rico, qatar, reunion, romania, ru, rwanda, st_barthelemy, st_helena, st_kitts_nevis, st_lucia, st_pierre_miquelon, st_vincent_grenadines, samoa, san_marino, sao_tome_principe, saudi_arabia, senegal, serbia, seychelles, sierra_leone, singapore, sint_maarten, slovakia, slovenia, solomon_islands, somalia, south_africa, south_georgia_south_sandwich_islands, kr, south_sudan, es, sri_lanka, sudan, suriname, swaziland, sweden, switzerland, syria, taiwan, tajikistan, tanzania, thailand, timor_leste, togo, tokelau, tonga, trinidad_tobago, tunisia, tr, turkmenistan, turks_caicos_islands, tuvalu, uganda, ukraine, united_arab_emirates, uk, england, scotland, wales, us, us_virgin_islands, uruguay, uzbekistan, vanuatu, vatican_city, venezuela, vietnam, wallis_futuna, western_sahara, yemen, zambia, zimbabwe, united_nations, pirate_flag, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"100\":{\"keywords\":[\"score\",\"perfect\",\"numbers\",\"century\",\"exam\",\"quiz\",\"test\",\"pass\",\"hundred\"],\"char\":\"💯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"1234\":{\"keywords\":[\"numbers\",\"blue-square\"],\"char\":\"🔢\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"grinning\":{\"keywords\":[\"face\",\"smile\",\"happy\",\"joy\",\":D\",\"grin\"],\"char\":\"😀\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"grimacing\":{\"keywords\":[\"face\",\"grimace\",\"teeth\"],\"char\":\"😬\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"grin\":{\"keywords\":[\"face\",\"happy\",\"smile\",\"joy\",\"kawaii\"],\"char\":\"😁\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"joy\":{\"keywords\":[\"face\",\"cry\",\"tears\",\"weep\",\"happy\",\"happytears\",\"haha\"],\"char\":\"😂\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"rofl\":{\"keywords\":[\"face\",\"rolling\",\"floor\",\"laughing\",\"lol\",\"haha\"],\"char\":\"🤣\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"partying\":{\"keywords\":[\"face\",\"celebration\",\"woohoo\"],\"char\":\"🥳\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smiley\":{\"keywords\":[\"face\",\"happy\",\"joy\",\"haha\",\":D\",\":)\",\"smile\",\"funny\"],\"char\":\"😃\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smile\":{\"keywords\":[\"face\",\"happy\",\"joy\",\"funny\",\"haha\",\"laugh\",\"like\",\":D\",\":)\"],\"char\":\"😄\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sweat_smile\":{\"keywords\":[\"face\",\"hot\",\"happy\",\"laugh\",\"sweat\",\"smile\",\"relief\"],\"char\":\"😅\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"laughing\":{\"keywords\":[\"happy\",\"joy\",\"lol\",\"satisfied\",\"haha\",\"face\",\"glad\",\"XD\",\"laugh\"],\"char\":\"😆\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"innocent\":{\"keywords\":[\"face\",\"angel\",\"heaven\",\"halo\"],\"char\":\"😇\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"wink\":{\"keywords\":[\"face\",\"happy\",\"mischievous\",\"secret\",\";)\",\"smile\",\"eye\"],\"char\":\"😉\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"blush\":{\"keywords\":[\"face\",\"smile\",\"happy\",\"flushed\",\"crush\",\"embarrassed\",\"shy\",\"joy\"],\"char\":\"😊\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"slightly_smiling_face\":{\"keywords\":[\"face\",\"smile\"],\"char\":\"🙂\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"upside_down_face\":{\"keywords\":[\"face\",\"flipped\",\"silly\",\"smile\"],\"char\":\"🙃\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"relaxed\":{\"keywords\":[\"face\",\"blush\",\"massage\",\"happiness\"],\"char\":\"☺️\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"yum\":{\"keywords\":[\"happy\",\"joy\",\"tongue\",\"smile\",\"face\",\"silly\",\"yummy\",\"nom\",\"delicious\",\"savouring\"],\"char\":\"😋\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"relieved\":{\"keywords\":[\"face\",\"relaxed\",\"phew\",\"massage\",\"happiness\"],\"char\":\"😌\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"heart_eyes\":{\"keywords\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"crush\",\"heart\"],\"char\":\"😍\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smiling_face_with_three_hearts\":{\"keywords\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"crush\",\"hearts\",\"adore\"],\"char\":\"🥰\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kissing_heart\":{\"keywords\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"char\":\"😘\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kissing\":{\"keywords\":[\"love\",\"like\",\"face\",\"3\",\"valentines\",\"infatuation\",\"kiss\"],\"char\":\"😗\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kissing_smiling_eyes\":{\"keywords\":[\"face\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"char\":\"😙\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kissing_closed_eyes\":{\"keywords\":[\"face\",\"love\",\"like\",\"affection\",\"valentines\",\"infatuation\",\"kiss\"],\"char\":\"😚\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"stuck_out_tongue_winking_eye\":{\"keywords\":[\"face\",\"prank\",\"childish\",\"playful\",\"mischievous\",\"smile\",\"wink\",\"tongue\"],\"char\":\"😜\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"zany\":{\"keywords\":[\"face\",\"goofy\",\"crazy\"],\"char\":\"🤪\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"raised_eyebrow\":{\"keywords\":[\"face\",\"distrust\",\"scepticism\",\"disapproval\",\"disbelief\",\"surprise\"],\"char\":\"🤨\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"monocle\":{\"keywords\":[\"face\",\"stuffy\",\"wealthy\"],\"char\":\"🧐\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"stuck_out_tongue_closed_eyes\":{\"keywords\":[\"face\",\"prank\",\"playful\",\"mischievous\",\"smile\",\"tongue\"],\"char\":\"😝\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"stuck_out_tongue\":{\"keywords\":[\"face\",\"prank\",\"childish\",\"playful\",\"mischievous\",\"smile\",\"tongue\"],\"char\":\"😛\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"money_mouth_face\":{\"keywords\":[\"face\",\"rich\",\"dollar\",\"money\"],\"char\":\"🤑\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"nerd_face\":{\"keywords\":[\"face\",\"nerdy\",\"geek\",\"dork\"],\"char\":\"🤓\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sunglasses\":{\"keywords\":[\"face\",\"cool\",\"smile\",\"summer\",\"beach\",\"sunglass\"],\"char\":\"😎\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"star_struck\":{\"keywords\":[\"face\",\"smile\",\"starry\",\"eyes\",\"grinning\"],\"char\":\"🤩\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"clown_face\":{\"keywords\":[\"face\"],\"char\":\"🤡\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"cowboy_hat_face\":{\"keywords\":[\"face\",\"cowgirl\",\"hat\"],\"char\":\"🤠\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"hugs\":{\"keywords\":[\"face\",\"smile\",\"hug\"],\"char\":\"🤗\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smirk\":{\"keywords\":[\"face\",\"smile\",\"mean\",\"prank\",\"smug\",\"sarcasm\"],\"char\":\"😏\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"no_mouth\":{\"keywords\":[\"face\",\"hellokitty\"],\"char\":\"😶\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"neutral_face\":{\"keywords\":[\"indifference\",\"meh\",\":|\",\"neutral\"],\"char\":\"😐\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"expressionless\":{\"keywords\":[\"face\",\"indifferent\",\"-_-\",\"meh\",\"deadpan\"],\"char\":\"😑\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"unamused\":{\"keywords\":[\"indifference\",\"bored\",\"straight face\",\"serious\",\"sarcasm\",\"unimpressed\",\"skeptical\",\"dubious\",\"side_eye\"],\"char\":\"😒\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"roll_eyes\":{\"keywords\":[\"face\",\"eyeroll\",\"frustrated\"],\"char\":\"🙄\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"thinking\":{\"keywords\":[\"face\",\"hmmm\",\"think\",\"consider\"],\"char\":\"🤔\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"lying_face\":{\"keywords\":[\"face\",\"lie\",\"pinocchio\"],\"char\":\"🤥\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"hand_over_mouth\":{\"keywords\":[\"face\",\"whoops\",\"shock\",\"surprise\"],\"char\":\"🤭\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"shushing\":{\"keywords\":[\"face\",\"quiet\",\"shhh\"],\"char\":\"🤫\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"symbols_over_mouth\":{\"keywords\":[\"face\",\"swearing\",\"cursing\",\"cussing\",\"profanity\",\"expletive\"],\"char\":\"🤬\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"exploding_head\":{\"keywords\":[\"face\",\"shocked\",\"mind\",\"blown\"],\"char\":\"🤯\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"flushed\":{\"keywords\":[\"face\",\"blush\",\"shy\",\"flattered\"],\"char\":\"😳\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"disappointed\":{\"keywords\":[\"face\",\"sad\",\"upset\",\"depressed\",\":(\"],\"char\":\"😞\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"worried\":{\"keywords\":[\"face\",\"concern\",\"nervous\",\":(\"],\"char\":\"😟\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"angry\":{\"keywords\":[\"mad\",\"face\",\"annoyed\",\"frustrated\"],\"char\":\"😠\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"rage\":{\"keywords\":[\"angry\",\"mad\",\"hate\",\"despise\"],\"char\":\"😡\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"pensive\":{\"keywords\":[\"face\",\"sad\",\"depressed\",\"upset\"],\"char\":\"😔\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"confused\":{\"keywords\":[\"face\",\"indifference\",\"huh\",\"weird\",\"hmmm\",\":/\"],\"char\":\"😕\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"slightly_frowning_face\":{\"keywords\":[\"face\",\"frowning\",\"disappointed\",\"sad\",\"upset\"],\"char\":\"🙁\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"frowning_face\":{\"keywords\":[\"face\",\"sad\",\"upset\",\"frown\"],\"char\":\"☹\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"persevere\":{\"keywords\":[\"face\",\"sick\",\"no\",\"upset\",\"oops\"],\"char\":\"😣\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"confounded\":{\"keywords\":[\"face\",\"confused\",\"sick\",\"unwell\",\"oops\",\":S\"],\"char\":\"😖\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"tired_face\":{\"keywords\":[\"sick\",\"whine\",\"upset\",\"frustrated\"],\"char\":\"😫\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"weary\":{\"keywords\":[\"face\",\"tired\",\"sleepy\",\"sad\",\"frustrated\",\"upset\"],\"char\":\"😩\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"pleading\":{\"keywords\":[\"face\",\"begging\",\"mercy\"],\"char\":\"🥺\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"triumph\":{\"keywords\":[\"face\",\"gas\",\"phew\",\"proud\",\"pride\"],\"char\":\"😤\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"open_mouth\":{\"keywords\":[\"face\",\"surprise\",\"impressed\",\"wow\",\"whoa\",\":O\"],\"char\":\"😮\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"scream\":{\"keywords\":[\"face\",\"munch\",\"scared\",\"omg\"],\"char\":\"😱\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"fearful\":{\"keywords\":[\"face\",\"scared\",\"terrified\",\"nervous\",\"oops\",\"huh\"],\"char\":\"😨\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"cold_sweat\":{\"keywords\":[\"face\",\"nervous\",\"sweat\"],\"char\":\"😰\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"hushed\":{\"keywords\":[\"face\",\"woo\",\"shh\"],\"char\":\"😯\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"frowning\":{\"keywords\":[\"face\",\"aw\",\"what\"],\"char\":\"😦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"anguished\":{\"keywords\":[\"face\",\"stunned\",\"nervous\"],\"char\":\"😧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"cry\":{\"keywords\":[\"face\",\"tears\",\"sad\",\"depressed\",\"upset\",\":'(\"],\"char\":\"😢\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"disappointed_relieved\":{\"keywords\":[\"face\",\"phew\",\"sweat\",\"nervous\"],\"char\":\"😥\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"drooling_face\":{\"keywords\":[\"face\"],\"char\":\"🤤\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sleepy\":{\"keywords\":[\"face\",\"tired\",\"rest\",\"nap\"],\"char\":\"😪\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sweat\":{\"keywords\":[\"face\",\"hot\",\"sad\",\"tired\",\"exercise\"],\"char\":\"😓\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"hot\":{\"keywords\":[\"face\",\"feverish\",\"heat\",\"red\",\"sweating\"],\"char\":\"🥵\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"cold\":{\"keywords\":[\"face\",\"blue\",\"freezing\",\"frozen\",\"frostbite\",\"icicles\"],\"char\":\"🥶\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sob\":{\"keywords\":[\"face\",\"cry\",\"tears\",\"sad\",\"upset\",\"depressed\"],\"char\":\"😭\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"dizzy_face\":{\"keywords\":[\"spent\",\"unconscious\",\"xox\",\"dizzy\"],\"char\":\"😵\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"astonished\":{\"keywords\":[\"face\",\"xox\",\"surprised\",\"poisoned\"],\"char\":\"😲\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"zipper_mouth_face\":{\"keywords\":[\"face\",\"sealed\",\"zipper\",\"secret\"],\"char\":\"🤐\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"nauseated_face\":{\"keywords\":[\"face\",\"vomit\",\"gross\",\"green\",\"sick\",\"throw up\",\"ill\"],\"char\":\"🤢\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sneezing_face\":{\"keywords\":[\"face\",\"gesundheit\",\"sneeze\",\"sick\",\"allergy\"],\"char\":\"🤧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"vomiting\":{\"keywords\":[\"face\",\"sick\"],\"char\":\"🤮\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"mask\":{\"keywords\":[\"face\",\"sick\",\"ill\",\"disease\"],\"char\":\"😷\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"face_with_thermometer\":{\"keywords\":[\"sick\",\"temperature\",\"thermometer\",\"cold\",\"fever\"],\"char\":\"🤒\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"face_with_head_bandage\":{\"keywords\":[\"injured\",\"clumsy\",\"bandage\",\"hurt\"],\"char\":\"🤕\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"woozy\":{\"keywords\":[\"face\",\"dizzy\",\"intoxicated\",\"tipsy\",\"wavy\"],\"char\":\"🥴\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sleeping\":{\"keywords\":[\"face\",\"tired\",\"sleepy\",\"night\",\"zzz\"],\"char\":\"😴\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"zzz\":{\"keywords\":[\"sleepy\",\"tired\",\"dream\"],\"char\":\"💤\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"poop\":{\"keywords\":[\"hankey\",\"shitface\",\"fail\",\"turd\",\"shit\"],\"char\":\"💩\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smiling_imp\":{\"keywords\":[\"devil\",\"horns\"],\"char\":\"😈\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"imp\":{\"keywords\":[\"devil\",\"angry\",\"horns\"],\"char\":\"👿\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"japanese_ogre\":{\"keywords\":[\"monster\",\"red\",\"mask\",\"halloween\",\"scary\",\"creepy\",\"devil\",\"demon\",\"japanese\",\"ogre\"],\"char\":\"👹\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"japanese_goblin\":{\"keywords\":[\"red\",\"evil\",\"mask\",\"monster\",\"scary\",\"creepy\",\"japanese\",\"goblin\"],\"char\":\"👺\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"skull\":{\"keywords\":[\"dead\",\"skeleton\",\"creepy\",\"death\"],\"char\":\"💀\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"ghost\":{\"keywords\":[\"halloween\",\"spooky\",\"scary\"],\"char\":\"👻\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"alien\":{\"keywords\":[\"UFO\",\"paul\",\"weird\",\"outer_space\"],\"char\":\"👽\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"robot\":{\"keywords\":[\"computer\",\"machine\",\"bot\"],\"char\":\"🤖\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smiley_cat\":{\"keywords\":[\"animal\",\"cats\",\"happy\",\"smile\"],\"char\":\"😺\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smile_cat\":{\"keywords\":[\"animal\",\"cats\",\"smile\"],\"char\":\"😸\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"joy_cat\":{\"keywords\":[\"animal\",\"cats\",\"haha\",\"happy\",\"tears\"],\"char\":\"😹\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"heart_eyes_cat\":{\"keywords\":[\"animal\",\"love\",\"like\",\"affection\",\"cats\",\"valentines\",\"heart\"],\"char\":\"😻\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"smirk_cat\":{\"keywords\":[\"animal\",\"cats\",\"smirk\"],\"char\":\"😼\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kissing_cat\":{\"keywords\":[\"animal\",\"cats\",\"kiss\"],\"char\":\"😽\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"scream_cat\":{\"keywords\":[\"animal\",\"cats\",\"munch\",\"scared\",\"scream\"],\"char\":\"🙀\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"crying_cat_face\":{\"keywords\":[\"animal\",\"tears\",\"weep\",\"sad\",\"cats\",\"upset\",\"cry\"],\"char\":\"😿\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"pouting_cat\":{\"keywords\":[\"animal\",\"cats\"],\"char\":\"😾\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"palms_up\":{\"keywords\":[\"hands\",\"gesture\",\"cupped\",\"prayer\"],\"char\":\"🤲\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"raised_hands\":{\"keywords\":[\"gesture\",\"hooray\",\"yea\",\"celebration\",\"hands\"],\"char\":\"🙌\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"clap\":{\"keywords\":[\"hands\",\"praise\",\"applause\",\"congrats\",\"yay\"],\"char\":\"👏\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"wave\":{\"keywords\":[\"hands\",\"gesture\",\"goodbye\",\"solong\",\"farewell\",\"hello\",\"hi\",\"palm\"],\"char\":\"👋\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"call_me_hand\":{\"keywords\":[\"hands\",\"gesture\"],\"char\":\"🤙\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"+1\":{\"keywords\":[\"thumbsup\",\"yes\",\"awesome\",\"good\",\"agree\",\"accept\",\"cool\",\"hand\",\"like\"],\"char\":\"👍\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"-1\":{\"keywords\":[\"thumbsdown\",\"no\",\"dislike\",\"hand\"],\"char\":\"👎\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"facepunch\":{\"keywords\":[\"angry\",\"violence\",\"fist\",\"hit\",\"attack\",\"hand\"],\"char\":\"👊\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"fist\":{\"keywords\":[\"fingers\",\"hand\",\"grasp\"],\"char\":\"✊\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"fist_left\":{\"keywords\":[\"hand\",\"fistbump\"],\"char\":\"🤛\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"fist_right\":{\"keywords\":[\"hand\",\"fistbump\"],\"char\":\"🤜\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"v\":{\"keywords\":[\"fingers\",\"ohyeah\",\"hand\",\"peace\",\"victory\",\"two\"],\"char\":\"✌\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"ok_hand\":{\"keywords\":[\"fingers\",\"limbs\",\"perfect\",\"ok\",\"okay\"],\"char\":\"👌\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"raised_hand\":{\"keywords\":[\"fingers\",\"stop\",\"highfive\",\"palm\",\"ban\"],\"char\":\"✋\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"raised_back_of_hand\":{\"keywords\":[\"fingers\",\"raised\",\"backhand\"],\"char\":\"🤚\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"open_hands\":{\"keywords\":[\"fingers\",\"butterfly\",\"hands\",\"open\"],\"char\":\"👐\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"muscle\":{\"keywords\":[\"arm\",\"flex\",\"hand\",\"summer\",\"strong\",\"biceps\"],\"char\":\"💪\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"pray\":{\"keywords\":[\"please\",\"hope\",\"wish\",\"namaste\",\"highfive\"],\"char\":\"🙏\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"foot\":{\"keywords\":[\"kick\",\"stomp\"],\"char\":\"🦶\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"leg\":{\"keywords\":[\"kick\",\"limb\"],\"char\":\"🦵\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"handshake\":{\"keywords\":[\"agreement\",\"shake\"],\"char\":\"🤝\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"point_up\":{\"keywords\":[\"hand\",\"fingers\",\"direction\",\"up\"],\"char\":\"☝\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"point_up_2\":{\"keywords\":[\"fingers\",\"hand\",\"direction\",\"up\"],\"char\":\"👆\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"point_down\":{\"keywords\":[\"fingers\",\"hand\",\"direction\",\"down\"],\"char\":\"👇\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"point_left\":{\"keywords\":[\"direction\",\"fingers\",\"hand\",\"left\"],\"char\":\"👈\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"point_right\":{\"keywords\":[\"fingers\",\"hand\",\"direction\",\"right\"],\"char\":\"👉\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"fu\":{\"keywords\":[\"hand\",\"fingers\",\"rude\",\"middle\",\"flipping\"],\"char\":\"🖕\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"raised_hand_with_fingers_splayed\":{\"keywords\":[\"hand\",\"fingers\",\"palm\"],\"char\":\"🖐\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"love_you\":{\"keywords\":[\"hand\",\"fingers\",\"gesture\"],\"char\":\"🤟\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"metal\":{\"keywords\":[\"hand\",\"fingers\",\"evil_eye\",\"sign_of_horns\",\"rock_on\"],\"char\":\"🤘\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"crossed_fingers\":{\"keywords\":[\"good\",\"lucky\"],\"char\":\"🤞\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"vulcan_salute\":{\"keywords\":[\"hand\",\"fingers\",\"spock\",\"star trek\"],\"char\":\"🖖\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"writing_hand\":{\"keywords\":[\"lower_left_ballpoint_pen\",\"stationery\",\"write\",\"compose\"],\"char\":\"✍\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"selfie\":{\"keywords\":[\"camera\",\"phone\"],\"char\":\"🤳\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"nail_care\":{\"keywords\":[\"beauty\",\"manicure\",\"finger\",\"fashion\",\"nail\"],\"char\":\"💅\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"lips\":{\"keywords\":[\"mouth\",\"kiss\"],\"char\":\"👄\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"tooth\":{\"keywords\":[\"teeth\",\"dentist\"],\"char\":\"🦷\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"tongue\":{\"keywords\":[\"mouth\",\"playful\"],\"char\":\"👅\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"ear\":{\"keywords\":[\"face\",\"hear\",\"sound\",\"listen\"],\"char\":\"👂\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"nose\":{\"keywords\":[\"smell\",\"sniff\"],\"char\":\"👃\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"eye\":{\"keywords\":[\"face\",\"look\",\"see\",\"watch\",\"stare\"],\"char\":\"👁\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"eyes\":{\"keywords\":[\"look\",\"watch\",\"stalk\",\"peek\",\"see\"],\"char\":\"👀\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"brain\":{\"keywords\":[\"smart\",\"intelligent\"],\"char\":\"🧠\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"bust_in_silhouette\":{\"keywords\":[\"user\",\"person\",\"human\"],\"char\":\"👤\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"busts_in_silhouette\":{\"keywords\":[\"user\",\"person\",\"human\",\"group\",\"team\"],\"char\":\"👥\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"speaking_head\":{\"keywords\":[\"user\",\"person\",\"human\",\"sing\",\"say\",\"talk\"],\"char\":\"🗣\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"baby\":{\"keywords\":[\"child\",\"boy\",\"girl\",\"toddler\"],\"char\":\"👶\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"child\":{\"keywords\":[\"gender-neutral\",\"young\"],\"char\":\"🧒\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"boy\":{\"keywords\":[\"man\",\"male\",\"guy\",\"teenager\"],\"char\":\"👦\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"girl\":{\"keywords\":[\"female\",\"woman\",\"teenager\"],\"char\":\"👧\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"adult\":{\"keywords\":[\"gender-neutral\",\"person\"],\"char\":\"🧑\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man\":{\"keywords\":[\"mustache\",\"father\",\"dad\",\"guy\",\"classy\",\"sir\",\"moustache\"],\"char\":\"👨\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman\":{\"keywords\":[\"female\",\"girls\",\"lady\"],\"char\":\"👩\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"blonde_woman\":{\"keywords\":[\"woman\",\"female\",\"girl\",\"blonde\",\"person\"],\"char\":\"👱‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"blonde_man\":{\"keywords\":[\"man\",\"male\",\"boy\",\"blonde\",\"guy\",\"person\"],\"char\":\"👱\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"bearded_person\":{\"keywords\":[\"person\",\"bewhiskered\"],\"char\":\"🧔\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"older_adult\":{\"keywords\":[\"human\",\"elder\",\"senior\",\"gender-neutral\"],\"char\":\"🧓\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"older_man\":{\"keywords\":[\"human\",\"male\",\"men\",\"old\",\"elder\",\"senior\"],\"char\":\"👴\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"older_woman\":{\"keywords\":[\"human\",\"female\",\"women\",\"lady\",\"old\",\"elder\",\"senior\"],\"char\":\"👵\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_with_gua_pi_mao\":{\"keywords\":[\"male\",\"boy\",\"chinese\"],\"char\":\"👲\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_with_headscarf\":{\"keywords\":[\"female\",\"hijab\",\"mantilla\",\"tichel\"],\"char\":\"🧕\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_with_turban\":{\"keywords\":[\"female\",\"indian\",\"hinduism\",\"arabs\",\"woman\"],\"char\":\"👳‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_with_turban\":{\"keywords\":[\"male\",\"indian\",\"hinduism\",\"arabs\"],\"char\":\"👳\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"policewoman\":{\"keywords\":[\"woman\",\"police\",\"law\",\"legal\",\"enforcement\",\"arrest\",\"911\",\"female\"],\"char\":\"👮‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"policeman\":{\"keywords\":[\"man\",\"police\",\"law\",\"legal\",\"enforcement\",\"arrest\",\"911\"],\"char\":\"👮\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"construction_worker_woman\":{\"keywords\":[\"female\",\"human\",\"wip\",\"build\",\"construction\",\"worker\",\"labor\",\"woman\"],\"char\":\"👷‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"construction_worker_man\":{\"keywords\":[\"male\",\"human\",\"wip\",\"guy\",\"build\",\"construction\",\"worker\",\"labor\"],\"char\":\"👷\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"guardswoman\":{\"keywords\":[\"uk\",\"gb\",\"british\",\"female\",\"royal\",\"woman\"],\"char\":\"💂‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"guardsman\":{\"keywords\":[\"uk\",\"gb\",\"british\",\"male\",\"guy\",\"royal\"],\"char\":\"💂\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"female_detective\":{\"keywords\":[\"human\",\"spy\",\"detective\",\"female\",\"woman\"],\"char\":\"🕵️‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"male_detective\":{\"keywords\":[\"human\",\"spy\",\"detective\"],\"char\":\"🕵\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_health_worker\":{\"keywords\":[\"doctor\",\"nurse\",\"therapist\",\"healthcare\",\"woman\",\"human\"],\"char\":\"👩‍⚕️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_health_worker\":{\"keywords\":[\"doctor\",\"nurse\",\"therapist\",\"healthcare\",\"man\",\"human\"],\"char\":\"👨‍⚕️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_farmer\":{\"keywords\":[\"rancher\",\"gardener\",\"woman\",\"human\"],\"char\":\"👩‍🌾\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_farmer\":{\"keywords\":[\"rancher\",\"gardener\",\"man\",\"human\"],\"char\":\"👨‍🌾\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_cook\":{\"keywords\":[\"chef\",\"woman\",\"human\"],\"char\":\"👩‍🍳\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_cook\":{\"keywords\":[\"chef\",\"man\",\"human\"],\"char\":\"👨‍🍳\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_student\":{\"keywords\":[\"graduate\",\"woman\",\"human\"],\"char\":\"👩‍🎓\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_student\":{\"keywords\":[\"graduate\",\"man\",\"human\"],\"char\":\"👨‍🎓\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_singer\":{\"keywords\":[\"rockstar\",\"entertainer\",\"woman\",\"human\"],\"char\":\"👩‍🎤\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_singer\":{\"keywords\":[\"rockstar\",\"entertainer\",\"man\",\"human\"],\"char\":\"👨‍🎤\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_teacher\":{\"keywords\":[\"instructor\",\"professor\",\"woman\",\"human\"],\"char\":\"👩‍🏫\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_teacher\":{\"keywords\":[\"instructor\",\"professor\",\"man\",\"human\"],\"char\":\"👨‍🏫\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_factory_worker\":{\"keywords\":[\"assembly\",\"industrial\",\"woman\",\"human\"],\"char\":\"👩‍🏭\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_factory_worker\":{\"keywords\":[\"assembly\",\"industrial\",\"man\",\"human\"],\"char\":\"👨‍🏭\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_technologist\":{\"keywords\":[\"coder\",\"developer\",\"engineer\",\"programmer\",\"software\",\"woman\",\"human\",\"laptop\",\"computer\"],\"char\":\"👩‍💻\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_technologist\":{\"keywords\":[\"coder\",\"developer\",\"engineer\",\"programmer\",\"software\",\"man\",\"human\",\"laptop\",\"computer\"],\"char\":\"👨‍💻\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_office_worker\":{\"keywords\":[\"business\",\"manager\",\"woman\",\"human\"],\"char\":\"👩‍💼\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_office_worker\":{\"keywords\":[\"business\",\"manager\",\"man\",\"human\"],\"char\":\"👨‍💼\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_mechanic\":{\"keywords\":[\"plumber\",\"woman\",\"human\",\"wrench\"],\"char\":\"👩‍🔧\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_mechanic\":{\"keywords\":[\"plumber\",\"man\",\"human\",\"wrench\"],\"char\":\"👨‍🔧\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_scientist\":{\"keywords\":[\"biologist\",\"chemist\",\"engineer\",\"physicist\",\"woman\",\"human\"],\"char\":\"👩‍🔬\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_scientist\":{\"keywords\":[\"biologist\",\"chemist\",\"engineer\",\"physicist\",\"man\",\"human\"],\"char\":\"👨‍🔬\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_artist\":{\"keywords\":[\"painter\",\"woman\",\"human\"],\"char\":\"👩‍🎨\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_artist\":{\"keywords\":[\"painter\",\"man\",\"human\"],\"char\":\"👨‍🎨\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_firefighter\":{\"keywords\":[\"fireman\",\"woman\",\"human\"],\"char\":\"👩‍🚒\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_firefighter\":{\"keywords\":[\"fireman\",\"man\",\"human\"],\"char\":\"👨‍🚒\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_pilot\":{\"keywords\":[\"aviator\",\"plane\",\"woman\",\"human\"],\"char\":\"👩‍✈️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_pilot\":{\"keywords\":[\"aviator\",\"plane\",\"man\",\"human\"],\"char\":\"👨‍✈️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_astronaut\":{\"keywords\":[\"space\",\"rocket\",\"woman\",\"human\"],\"char\":\"👩‍🚀\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_astronaut\":{\"keywords\":[\"space\",\"rocket\",\"man\",\"human\"],\"char\":\"👨‍🚀\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_judge\":{\"keywords\":[\"justice\",\"court\",\"woman\",\"human\"],\"char\":\"👩‍⚖️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_judge\":{\"keywords\":[\"justice\",\"court\",\"man\",\"human\"],\"char\":\"👨‍⚖️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_superhero\":{\"keywords\":[\"woman\",\"female\",\"good\",\"heroine\",\"superpowers\"],\"char\":\"🦸‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_superhero\":{\"keywords\":[\"man\",\"male\",\"good\",\"hero\",\"superpowers\"],\"char\":\"🦸‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_supervillain\":{\"keywords\":[\"woman\",\"female\",\"evil\",\"bad\",\"criminal\",\"heroine\",\"superpowers\"],\"char\":\"🦹‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_supervillain\":{\"keywords\":[\"man\",\"male\",\"evil\",\"bad\",\"criminal\",\"hero\",\"superpowers\"],\"char\":\"🦹‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"mrs_claus\":{\"keywords\":[\"woman\",\"female\",\"xmas\",\"mother christmas\"],\"char\":\"🤶\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"santa\":{\"keywords\":[\"festival\",\"man\",\"male\",\"xmas\",\"father christmas\"],\"char\":\"🎅\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"sorceress\":{\"keywords\":[\"woman\",\"female\",\"mage\",\"witch\"],\"char\":\"🧙‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"wizard\":{\"keywords\":[\"man\",\"male\",\"mage\",\"sorcerer\"],\"char\":\"🧙‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_elf\":{\"keywords\":[\"woman\",\"female\"],\"char\":\"🧝‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_elf\":{\"keywords\":[\"man\",\"male\"],\"char\":\"🧝‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_vampire\":{\"keywords\":[\"woman\",\"female\"],\"char\":\"🧛‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_vampire\":{\"keywords\":[\"man\",\"male\",\"dracula\"],\"char\":\"🧛‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_zombie\":{\"keywords\":[\"woman\",\"female\",\"undead\",\"walking dead\"],\"char\":\"🧟‍♀️\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"man_zombie\":{\"keywords\":[\"man\",\"male\",\"dracula\",\"undead\",\"walking dead\"],\"char\":\"🧟‍♂️\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"woman_genie\":{\"keywords\":[\"woman\",\"female\"],\"char\":\"🧞‍♀️\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"man_genie\":{\"keywords\":[\"man\",\"male\"],\"char\":\"🧞‍♂️\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"mermaid\":{\"keywords\":[\"woman\",\"female\",\"merwoman\",\"ariel\"],\"char\":\"🧜‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"merman\":{\"keywords\":[\"man\",\"male\",\"triton\"],\"char\":\"🧜‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_fairy\":{\"keywords\":[\"woman\",\"female\"],\"char\":\"🧚‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_fairy\":{\"keywords\":[\"man\",\"male\"],\"char\":\"🧚‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"angel\":{\"keywords\":[\"heaven\",\"wings\",\"halo\"],\"char\":\"👼\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"pregnant_woman\":{\"keywords\":[\"baby\"],\"char\":\"🤰\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"breastfeeding\":{\"keywords\":[\"nursing\",\"baby\"],\"char\":\"🤱\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"princess\":{\"keywords\":[\"girl\",\"woman\",\"female\",\"blond\",\"crown\",\"royal\",\"queen\"],\"char\":\"👸\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"prince\":{\"keywords\":[\"boy\",\"man\",\"male\",\"crown\",\"royal\",\"king\"],\"char\":\"🤴\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"bride_with_veil\":{\"keywords\":[\"couple\",\"marriage\",\"wedding\",\"woman\",\"bride\"],\"char\":\"👰\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_in_tuxedo\":{\"keywords\":[\"couple\",\"marriage\",\"wedding\",\"groom\"],\"char\":\"🤵\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"running_woman\":{\"keywords\":[\"woman\",\"walking\",\"exercise\",\"race\",\"running\",\"female\"],\"char\":\"🏃‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"running_man\":{\"keywords\":[\"man\",\"walking\",\"exercise\",\"race\",\"running\"],\"char\":\"🏃\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"walking_woman\":{\"keywords\":[\"human\",\"feet\",\"steps\",\"woman\",\"female\"],\"char\":\"🚶‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"walking_man\":{\"keywords\":[\"human\",\"feet\",\"steps\"],\"char\":\"🚶\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"dancer\":{\"keywords\":[\"female\",\"girl\",\"woman\",\"fun\"],\"char\":\"💃\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_dancing\":{\"keywords\":[\"male\",\"boy\",\"fun\",\"dancer\"],\"char\":\"🕺\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"dancing_women\":{\"keywords\":[\"female\",\"bunny\",\"women\",\"girls\"],\"char\":\"👯\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"dancing_men\":{\"keywords\":[\"male\",\"bunny\",\"men\",\"boys\"],\"char\":\"👯‍♂️\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"couple\":{\"keywords\":[\"pair\",\"people\",\"human\",\"love\",\"date\",\"dating\",\"like\",\"affection\",\"valentines\",\"marriage\"],\"char\":\"👫\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"two_men_holding_hands\":{\"keywords\":[\"pair\",\"couple\",\"love\",\"like\",\"bromance\",\"friendship\",\"people\",\"human\"],\"char\":\"👬\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"two_women_holding_hands\":{\"keywords\":[\"pair\",\"friendship\",\"couple\",\"love\",\"like\",\"female\",\"people\",\"human\"],\"char\":\"👭\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"bowing_woman\":{\"keywords\":[\"woman\",\"female\",\"girl\"],\"char\":\"🙇‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"bowing_man\":{\"keywords\":[\"man\",\"male\",\"boy\"],\"char\":\"🙇\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_facepalming\":{\"keywords\":[\"man\",\"male\",\"boy\",\"disbelief\"],\"char\":\"🤦‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_facepalming\":{\"keywords\":[\"woman\",\"female\",\"girl\",\"disbelief\"],\"char\":\"🤦‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_shrugging\":{\"keywords\":[\"woman\",\"female\",\"girl\",\"confused\",\"indifferent\",\"doubt\"],\"char\":\"🤷\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_shrugging\":{\"keywords\":[\"man\",\"male\",\"boy\",\"confused\",\"indifferent\",\"doubt\"],\"char\":\"🤷‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"tipping_hand_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\",\"human\",\"information\"],\"char\":\"💁\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"tipping_hand_man\":{\"keywords\":[\"male\",\"boy\",\"man\",\"human\",\"information\"],\"char\":\"💁‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"no_good_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\",\"nope\"],\"char\":\"🙅\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"no_good_man\":{\"keywords\":[\"male\",\"boy\",\"man\",\"nope\"],\"char\":\"🙅‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"ok_woman\":{\"keywords\":[\"women\",\"girl\",\"female\",\"pink\",\"human\",\"woman\"],\"char\":\"🙆\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"ok_man\":{\"keywords\":[\"men\",\"boy\",\"male\",\"blue\",\"human\",\"man\"],\"char\":\"🙆‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"raising_hand_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\"],\"char\":\"🙋\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"raising_hand_man\":{\"keywords\":[\"male\",\"boy\",\"man\"],\"char\":\"🙋‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"pouting_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\"],\"char\":\"🙎\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"pouting_man\":{\"keywords\":[\"male\",\"boy\",\"man\"],\"char\":\"🙎‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"frowning_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\",\"sad\",\"depressed\",\"discouraged\",\"unhappy\"],\"char\":\"🙍\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"frowning_man\":{\"keywords\":[\"male\",\"boy\",\"man\",\"sad\",\"depressed\",\"discouraged\",\"unhappy\"],\"char\":\"🙍‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"haircut_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\"],\"char\":\"💇\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"haircut_man\":{\"keywords\":[\"male\",\"boy\",\"man\"],\"char\":\"💇‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"massage_woman\":{\"keywords\":[\"female\",\"girl\",\"woman\",\"head\"],\"char\":\"💆\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"massage_man\":{\"keywords\":[\"male\",\"boy\",\"man\",\"head\"],\"char\":\"💆‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"woman_in_steamy_room\":{\"keywords\":[\"female\",\"woman\",\"spa\",\"steamroom\",\"sauna\"],\"char\":\"🧖‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"man_in_steamy_room\":{\"keywords\":[\"male\",\"man\",\"spa\",\"steamroom\",\"sauna\"],\"char\":\"🧖‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"people\"},\"couple_with_heart_woman_man\":{\"keywords\":[\"pair\",\"love\",\"like\",\"affection\",\"human\",\"dating\",\"valentines\",\"marriage\"],\"char\":\"💑\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"couple_with_heart_woman_woman\":{\"keywords\":[\"pair\",\"love\",\"like\",\"affection\",\"human\",\"dating\",\"valentines\",\"marriage\"],\"char\":\"👩‍❤️‍👩\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"couple_with_heart_man_man\":{\"keywords\":[\"pair\",\"love\",\"like\",\"affection\",\"human\",\"dating\",\"valentines\",\"marriage\"],\"char\":\"👨‍❤️‍👨\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"couplekiss_man_woman\":{\"keywords\":[\"pair\",\"valentines\",\"love\",\"like\",\"dating\",\"marriage\"],\"char\":\"💏\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"couplekiss_woman_woman\":{\"keywords\":[\"pair\",\"valentines\",\"love\",\"like\",\"dating\",\"marriage\"],\"char\":\"👩‍❤️‍💋‍👩\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"couplekiss_man_man\":{\"keywords\":[\"pair\",\"valentines\",\"love\",\"like\",\"dating\",\"marriage\"],\"char\":\"👨‍❤️‍💋‍👨\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_woman_boy\":{\"keywords\":[\"home\",\"parents\",\"child\",\"mom\",\"dad\",\"father\",\"mother\",\"people\",\"human\"],\"char\":\"👪\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_woman_girl\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"child\"],\"char\":\"👨‍👩‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_woman_girl_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👩‍👧‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_woman_boy_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👩‍👦‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_woman_girl_girl\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👩‍👧‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_woman_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👩‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_woman_girl\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👩‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_woman_girl_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👩‍👧‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_woman_boy_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👩‍👦‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_woman_girl_girl\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👩‍👧‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_man_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👨‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_man_girl\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👨‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_man_girl_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👨‍👧‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_man_boy_boy\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👨‍👦‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_man_girl_girl\":{\"keywords\":[\"home\",\"parents\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👨‍👧‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_boy\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"child\"],\"char\":\"👩‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_girl\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"child\"],\"char\":\"👩‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_girl_boy\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👧‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_boy_boy\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👦‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_woman_girl_girl\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"children\"],\"char\":\"👩‍👧‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_boy\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"child\"],\"char\":\"👨‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_girl\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"child\"],\"char\":\"👨‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_girl_boy\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👧‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_boy_boy\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👦‍👦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"family_man_girl_girl\":{\"keywords\":[\"home\",\"parent\",\"people\",\"human\",\"children\"],\"char\":\"👨‍👧‍👧\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"yarn\":{\"keywords\":[\"ball\",\"crochet\",\"knit\"],\"char\":\"🧶\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"thread\":{\"keywords\":[\"needle\",\"sewing\",\"spool\",\"string\"],\"char\":\"🧵\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"coat\":{\"keywords\":[\"jacket\"],\"char\":\"🧥\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"labcoat\":{\"keywords\":[\"doctor\",\"experiment\",\"scientist\",\"chemist\"],\"char\":\"🥼\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"womans_clothes\":{\"keywords\":[\"fashion\",\"shopping_bags\",\"female\"],\"char\":\"👚\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"tshirt\":{\"keywords\":[\"fashion\",\"cloth\",\"casual\",\"shirt\",\"tee\"],\"char\":\"👕\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"jeans\":{\"keywords\":[\"fashion\",\"shopping\"],\"char\":\"👖\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"necktie\":{\"keywords\":[\"shirt\",\"suitup\",\"formal\",\"fashion\",\"cloth\",\"business\"],\"char\":\"👔\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"dress\":{\"keywords\":[\"clothes\",\"fashion\",\"shopping\"],\"char\":\"👗\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"bikini\":{\"keywords\":[\"swimming\",\"female\",\"woman\",\"girl\",\"fashion\",\"beach\",\"summer\"],\"char\":\"👙\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kimono\":{\"keywords\":[\"dress\",\"fashion\",\"women\",\"female\",\"japanese\"],\"char\":\"👘\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"lipstick\":{\"keywords\":[\"female\",\"girl\",\"fashion\",\"woman\"],\"char\":\"💄\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"kiss\":{\"keywords\":[\"face\",\"lips\",\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💋\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"footprints\":{\"keywords\":[\"feet\",\"tracking\",\"walking\",\"beach\"],\"char\":\"👣\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"flat_shoe\":{\"keywords\":[\"ballet\",\"slip-on\",\"slipper\"],\"char\":\"🥿\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"high_heel\":{\"keywords\":[\"fashion\",\"shoes\",\"female\",\"pumps\",\"stiletto\"],\"char\":\"👠\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"sandal\":{\"keywords\":[\"shoes\",\"fashion\",\"flip flops\"],\"char\":\"👡\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"boot\":{\"keywords\":[\"shoes\",\"fashion\"],\"char\":\"👢\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"mans_shoe\":{\"keywords\":[\"fashion\",\"male\"],\"char\":\"👞\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"athletic_shoe\":{\"keywords\":[\"shoes\",\"sports\",\"sneakers\"],\"char\":\"👟\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"hiking_boot\":{\"keywords\":[\"backpacking\",\"camping\",\"hiking\"],\"char\":\"🥾\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"socks\":{\"keywords\":[\"stockings\",\"clothes\"],\"char\":\"🧦\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"gloves\":{\"keywords\":[\"hands\",\"winter\",\"clothes\"],\"char\":\"🧤\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"scarf\":{\"keywords\":[\"neck\",\"winter\",\"clothes\"],\"char\":\"🧣\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"womans_hat\":{\"keywords\":[\"fashion\",\"accessories\",\"female\",\"lady\",\"spring\"],\"char\":\"👒\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"tophat\":{\"keywords\":[\"magic\",\"gentleman\",\"classy\",\"circus\"],\"char\":\"🎩\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"billed_hat\":{\"keywords\":[\"cap\",\"baseball\"],\"char\":\"🧢\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"rescue_worker_helmet\":{\"keywords\":[\"construction\",\"build\"],\"char\":\"⛑\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"mortar_board\":{\"keywords\":[\"school\",\"college\",\"degree\",\"university\",\"graduation\",\"cap\",\"hat\",\"legal\",\"learn\",\"education\"],\"char\":\"🎓\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"crown\":{\"keywords\":[\"king\",\"kod\",\"leader\",\"royalty\",\"lord\"],\"char\":\"👑\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"school_satchel\":{\"keywords\":[\"student\",\"education\",\"bag\",\"backpack\"],\"char\":\"🎒\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"luggage\":{\"keywords\":[\"packing\",\"travel\"],\"char\":\"🧳\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"pouch\":{\"keywords\":[\"bag\",\"accessories\",\"shopping\"],\"char\":\"👝\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"purse\":{\"keywords\":[\"fashion\",\"accessories\",\"money\",\"sales\",\"shopping\"],\"char\":\"👛\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"handbag\":{\"keywords\":[\"fashion\",\"accessory\",\"accessories\",\"shopping\"],\"char\":\"👜\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"briefcase\":{\"keywords\":[\"business\",\"documents\",\"work\",\"law\",\"legal\",\"job\",\"career\"],\"char\":\"💼\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"eyeglasses\":{\"keywords\":[\"fashion\",\"accessories\",\"eyesight\",\"nerdy\",\"dork\",\"geek\"],\"char\":\"👓\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"dark_sunglasses\":{\"keywords\":[\"face\",\"cool\",\"accessories\"],\"char\":\"🕶\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"goggles\":{\"keywords\":[\"eyes\",\"protection\",\"safety\"],\"char\":\"🥽\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"ring\":{\"keywords\":[\"wedding\",\"propose\",\"marriage\",\"valentines\",\"diamond\",\"fashion\",\"jewelry\",\"gem\",\"engagement\"],\"char\":\"💍\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"closed_umbrella\":{\"keywords\":[\"weather\",\"rain\",\"drizzle\"],\"char\":\"🌂\",\"fitzpatrick_scale\":false,\"category\":\"people\"},\"dog\":{\"keywords\":[\"animal\",\"friend\",\"nature\",\"woof\",\"puppy\",\"pet\",\"faithful\"],\"char\":\"🐶\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cat\":{\"keywords\":[\"animal\",\"meow\",\"nature\",\"pet\",\"kitten\"],\"char\":\"🐱\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"mouse\":{\"keywords\":[\"animal\",\"nature\",\"cheese_wedge\",\"rodent\"],\"char\":\"🐭\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hamster\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐹\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"rabbit\":{\"keywords\":[\"animal\",\"nature\",\"pet\",\"spring\",\"magic\",\"bunny\"],\"char\":\"🐰\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"fox_face\":{\"keywords\":[\"animal\",\"nature\",\"face\"],\"char\":\"🦊\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"bear\":{\"keywords\":[\"animal\",\"nature\",\"wild\"],\"char\":\"🐻\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"panda_face\":{\"keywords\":[\"animal\",\"nature\",\"panda\"],\"char\":\"🐼\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"koala\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐨\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"tiger\":{\"keywords\":[\"animal\",\"cat\",\"danger\",\"wild\",\"nature\",\"roar\"],\"char\":\"🐯\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"lion\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🦁\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cow\":{\"keywords\":[\"beef\",\"ox\",\"animal\",\"nature\",\"moo\",\"milk\"],\"char\":\"🐮\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"pig\":{\"keywords\":[\"animal\",\"oink\",\"nature\"],\"char\":\"🐷\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"pig_nose\":{\"keywords\":[\"animal\",\"oink\"],\"char\":\"🐽\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"frog\":{\"keywords\":[\"animal\",\"nature\",\"croak\",\"toad\"],\"char\":\"🐸\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"squid\":{\"keywords\":[\"animal\",\"nature\",\"ocean\",\"sea\"],\"char\":\"🦑\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"octopus\":{\"keywords\":[\"animal\",\"creature\",\"ocean\",\"sea\",\"nature\",\"beach\"],\"char\":\"🐙\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"shrimp\":{\"keywords\":[\"animal\",\"ocean\",\"nature\",\"seafood\"],\"char\":\"🦐\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"monkey_face\":{\"keywords\":[\"animal\",\"nature\",\"circus\"],\"char\":\"🐵\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"gorilla\":{\"keywords\":[\"animal\",\"nature\",\"circus\"],\"char\":\"🦍\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"see_no_evil\":{\"keywords\":[\"monkey\",\"animal\",\"nature\",\"haha\"],\"char\":\"🙈\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hear_no_evil\":{\"keywords\":[\"animal\",\"monkey\",\"nature\"],\"char\":\"🙉\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"speak_no_evil\":{\"keywords\":[\"monkey\",\"animal\",\"nature\",\"omg\"],\"char\":\"🙊\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"monkey\":{\"keywords\":[\"animal\",\"nature\",\"banana\",\"circus\"],\"char\":\"🐒\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"chicken\":{\"keywords\":[\"animal\",\"cluck\",\"nature\",\"bird\"],\"char\":\"🐔\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"penguin\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐧\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"bird\":{\"keywords\":[\"animal\",\"nature\",\"fly\",\"tweet\",\"spring\"],\"char\":\"🐦\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"baby_chick\":{\"keywords\":[\"animal\",\"chicken\",\"bird\"],\"char\":\"🐤\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hatching_chick\":{\"keywords\":[\"animal\",\"chicken\",\"egg\",\"born\",\"baby\",\"bird\"],\"char\":\"🐣\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hatched_chick\":{\"keywords\":[\"animal\",\"chicken\",\"baby\",\"bird\"],\"char\":\"🐥\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"duck\":{\"keywords\":[\"animal\",\"nature\",\"bird\",\"mallard\"],\"char\":\"🦆\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"eagle\":{\"keywords\":[\"animal\",\"nature\",\"bird\"],\"char\":\"🦅\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"owl\":{\"keywords\":[\"animal\",\"nature\",\"bird\",\"hoot\"],\"char\":\"🦉\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"bat\":{\"keywords\":[\"animal\",\"nature\",\"blind\",\"vampire\"],\"char\":\"🦇\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"wolf\":{\"keywords\":[\"animal\",\"nature\",\"wild\"],\"char\":\"🐺\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"boar\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐗\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"horse\":{\"keywords\":[\"animal\",\"brown\",\"nature\"],\"char\":\"🐴\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"unicorn\":{\"keywords\":[\"animal\",\"nature\",\"mystical\"],\"char\":\"🦄\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"honeybee\":{\"keywords\":[\"animal\",\"insect\",\"nature\",\"bug\",\"spring\",\"honey\"],\"char\":\"🐝\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"bug\":{\"keywords\":[\"animal\",\"insect\",\"nature\",\"worm\"],\"char\":\"🐛\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"butterfly\":{\"keywords\":[\"animal\",\"insect\",\"nature\",\"caterpillar\"],\"char\":\"🦋\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"snail\":{\"keywords\":[\"slow\",\"animal\",\"shell\"],\"char\":\"🐌\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"beetle\":{\"keywords\":[\"animal\",\"insect\",\"nature\",\"ladybug\"],\"char\":\"🐞\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"ant\":{\"keywords\":[\"animal\",\"insect\",\"nature\",\"bug\"],\"char\":\"🐜\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"grasshopper\":{\"keywords\":[\"animal\",\"cricket\",\"chirp\"],\"char\":\"🦗\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"spider\":{\"keywords\":[\"animal\",\"arachnid\"],\"char\":\"🕷\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"scorpion\":{\"keywords\":[\"animal\",\"arachnid\"],\"char\":\"🦂\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"crab\":{\"keywords\":[\"animal\",\"crustacean\"],\"char\":\"🦀\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"snake\":{\"keywords\":[\"animal\",\"evil\",\"nature\",\"hiss\",\"python\"],\"char\":\"🐍\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"lizard\":{\"keywords\":[\"animal\",\"nature\",\"reptile\"],\"char\":\"🦎\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"t-rex\":{\"keywords\":[\"animal\",\"nature\",\"dinosaur\",\"tyrannosaurus\",\"extinct\"],\"char\":\"🦖\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sauropod\":{\"keywords\":[\"animal\",\"nature\",\"dinosaur\",\"brachiosaurus\",\"brontosaurus\",\"diplodocus\",\"extinct\"],\"char\":\"🦕\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"turtle\":{\"keywords\":[\"animal\",\"slow\",\"nature\",\"tortoise\"],\"char\":\"🐢\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"tropical_fish\":{\"keywords\":[\"animal\",\"swim\",\"ocean\",\"beach\",\"nemo\"],\"char\":\"🐠\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"fish\":{\"keywords\":[\"animal\",\"food\",\"nature\"],\"char\":\"🐟\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"blowfish\":{\"keywords\":[\"animal\",\"nature\",\"food\",\"sea\",\"ocean\"],\"char\":\"🐡\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dolphin\":{\"keywords\":[\"animal\",\"nature\",\"fish\",\"sea\",\"ocean\",\"flipper\",\"fins\",\"beach\"],\"char\":\"🐬\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"shark\":{\"keywords\":[\"animal\",\"nature\",\"fish\",\"sea\",\"ocean\",\"jaws\",\"fins\",\"beach\"],\"char\":\"🦈\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"whale\":{\"keywords\":[\"animal\",\"nature\",\"sea\",\"ocean\"],\"char\":\"🐳\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"whale2\":{\"keywords\":[\"animal\",\"nature\",\"sea\",\"ocean\"],\"char\":\"🐋\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"crocodile\":{\"keywords\":[\"animal\",\"nature\",\"reptile\",\"lizard\",\"alligator\"],\"char\":\"🐊\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"leopard\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐆\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"zebra\":{\"keywords\":[\"animal\",\"nature\",\"stripes\",\"safari\"],\"char\":\"🦓\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"tiger2\":{\"keywords\":[\"animal\",\"nature\",\"roar\"],\"char\":\"🐅\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"water_buffalo\":{\"keywords\":[\"animal\",\"nature\",\"ox\",\"cow\"],\"char\":\"🐃\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"ox\":{\"keywords\":[\"animal\",\"cow\",\"beef\"],\"char\":\"🐂\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cow2\":{\"keywords\":[\"beef\",\"ox\",\"animal\",\"nature\",\"moo\",\"milk\"],\"char\":\"🐄\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"deer\":{\"keywords\":[\"animal\",\"nature\",\"horns\",\"venison\"],\"char\":\"🦌\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dromedary_camel\":{\"keywords\":[\"animal\",\"hot\",\"desert\",\"hump\"],\"char\":\"🐪\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"camel\":{\"keywords\":[\"animal\",\"nature\",\"hot\",\"desert\",\"hump\"],\"char\":\"🐫\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"giraffe\":{\"keywords\":[\"animal\",\"nature\",\"spots\",\"safari\"],\"char\":\"🦒\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"elephant\":{\"keywords\":[\"animal\",\"nature\",\"nose\",\"th\",\"circus\"],\"char\":\"🐘\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"rhinoceros\":{\"keywords\":[\"animal\",\"nature\",\"horn\"],\"char\":\"🦏\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"goat\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐐\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"ram\":{\"keywords\":[\"animal\",\"sheep\",\"nature\"],\"char\":\"🐏\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sheep\":{\"keywords\":[\"animal\",\"nature\",\"wool\",\"shipit\"],\"char\":\"🐑\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"racehorse\":{\"keywords\":[\"animal\",\"gamble\",\"luck\"],\"char\":\"🐎\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"pig2\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🐖\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"rat\":{\"keywords\":[\"animal\",\"mouse\",\"rodent\"],\"char\":\"🐀\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"mouse2\":{\"keywords\":[\"animal\",\"nature\",\"rodent\"],\"char\":\"🐁\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"rooster\":{\"keywords\":[\"animal\",\"nature\",\"chicken\"],\"char\":\"🐓\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"turkey\":{\"keywords\":[\"animal\",\"bird\"],\"char\":\"🦃\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dove\":{\"keywords\":[\"animal\",\"bird\"],\"char\":\"🕊\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dog2\":{\"keywords\":[\"animal\",\"nature\",\"friend\",\"doge\",\"pet\",\"faithful\"],\"char\":\"🐕\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"poodle\":{\"keywords\":[\"dog\",\"animal\",\"101\",\"nature\",\"pet\"],\"char\":\"🐩\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cat2\":{\"keywords\":[\"animal\",\"meow\",\"pet\",\"cats\"],\"char\":\"🐈\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"rabbit2\":{\"keywords\":[\"animal\",\"nature\",\"pet\",\"magic\",\"spring\"],\"char\":\"🐇\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"chipmunk\":{\"keywords\":[\"animal\",\"nature\",\"rodent\",\"squirrel\"],\"char\":\"🐿\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hedgehog\":{\"keywords\":[\"animal\",\"nature\",\"spiny\"],\"char\":\"🦔\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"raccoon\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🦝\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"llama\":{\"keywords\":[\"animal\",\"nature\",\"alpaca\"],\"char\":\"🦙\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hippopotamus\":{\"keywords\":[\"animal\",\"nature\"],\"char\":\"🦛\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"kangaroo\":{\"keywords\":[\"animal\",\"nature\",\"australia\",\"joey\",\"hop\",\"marsupial\"],\"char\":\"🦘\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"badger\":{\"keywords\":[\"animal\",\"nature\",\"honey\"],\"char\":\"🦡\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"swan\":{\"keywords\":[\"animal\",\"nature\",\"bird\"],\"char\":\"🦢\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"peacock\":{\"keywords\":[\"animal\",\"nature\",\"peahen\",\"bird\"],\"char\":\"🦚\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"parrot\":{\"keywords\":[\"animal\",\"nature\",\"bird\",\"pirate\",\"talk\"],\"char\":\"🦜\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"lobster\":{\"keywords\":[\"animal\",\"nature\",\"bisque\",\"claws\",\"seafood\"],\"char\":\"🦞\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"mosquito\":{\"keywords\":[\"animal\",\"nature\",\"insect\",\"malaria\"],\"char\":\"🦟\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"paw_prints\":{\"keywords\":[\"animal\",\"tracking\",\"footprints\",\"dog\",\"cat\",\"pet\",\"feet\"],\"char\":\"🐾\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dragon\":{\"keywords\":[\"animal\",\"myth\",\"nature\",\"chinese\",\"green\"],\"char\":\"🐉\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dragon_face\":{\"keywords\":[\"animal\",\"myth\",\"nature\",\"chinese\",\"green\"],\"char\":\"🐲\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cactus\":{\"keywords\":[\"vegetable\",\"plant\",\"nature\"],\"char\":\"🌵\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"christmas_tree\":{\"keywords\":[\"festival\",\"vacation\",\"december\",\"xmas\",\"celebration\"],\"char\":\"🎄\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"evergreen_tree\":{\"keywords\":[\"plant\",\"nature\"],\"char\":\"🌲\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"deciduous_tree\":{\"keywords\":[\"plant\",\"nature\"],\"char\":\"🌳\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"palm_tree\":{\"keywords\":[\"plant\",\"vegetable\",\"nature\",\"summer\",\"beach\",\"mojito\",\"tropical\"],\"char\":\"🌴\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"seedling\":{\"keywords\":[\"plant\",\"nature\",\"grass\",\"lawn\",\"spring\"],\"char\":\"🌱\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"herb\":{\"keywords\":[\"vegetable\",\"plant\",\"medicine\",\"weed\",\"grass\",\"lawn\"],\"char\":\"🌿\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"shamrock\":{\"keywords\":[\"vegetable\",\"plant\",\"nature\",\"irish\",\"clover\"],\"char\":\"☘\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"four_leaf_clover\":{\"keywords\":[\"vegetable\",\"plant\",\"nature\",\"lucky\",\"irish\"],\"char\":\"🍀\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"bamboo\":{\"keywords\":[\"plant\",\"nature\",\"vegetable\",\"panda\",\"pine_decoration\"],\"char\":\"🎍\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"tanabata_tree\":{\"keywords\":[\"plant\",\"nature\",\"branch\",\"summer\"],\"char\":\"🎋\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"leaves\":{\"keywords\":[\"nature\",\"plant\",\"tree\",\"vegetable\",\"grass\",\"lawn\",\"spring\"],\"char\":\"🍃\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"fallen_leaf\":{\"keywords\":[\"nature\",\"plant\",\"vegetable\",\"leaves\"],\"char\":\"🍂\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"maple_leaf\":{\"keywords\":[\"nature\",\"plant\",\"vegetable\",\"ca\",\"fall\"],\"char\":\"🍁\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"ear_of_rice\":{\"keywords\":[\"nature\",\"plant\"],\"char\":\"🌾\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"hibiscus\":{\"keywords\":[\"plant\",\"vegetable\",\"flowers\",\"beach\"],\"char\":\"🌺\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sunflower\":{\"keywords\":[\"nature\",\"plant\",\"fall\"],\"char\":\"🌻\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"rose\":{\"keywords\":[\"flowers\",\"valentines\",\"love\",\"spring\"],\"char\":\"🌹\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"wilted_flower\":{\"keywords\":[\"plant\",\"nature\",\"flower\"],\"char\":\"🥀\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"tulip\":{\"keywords\":[\"flowers\",\"plant\",\"nature\",\"summer\",\"spring\"],\"char\":\"🌷\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"blossom\":{\"keywords\":[\"nature\",\"flowers\",\"yellow\"],\"char\":\"🌼\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cherry_blossom\":{\"keywords\":[\"nature\",\"plant\",\"spring\",\"flower\"],\"char\":\"🌸\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"bouquet\":{\"keywords\":[\"flowers\",\"nature\",\"spring\"],\"char\":\"💐\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"mushroom\":{\"keywords\":[\"plant\",\"vegetable\"],\"char\":\"🍄\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"chestnut\":{\"keywords\":[\"food\",\"squirrel\"],\"char\":\"🌰\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"jack_o_lantern\":{\"keywords\":[\"halloween\",\"light\",\"pumpkin\",\"creepy\",\"fall\"],\"char\":\"🎃\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"shell\":{\"keywords\":[\"nature\",\"sea\",\"beach\"],\"char\":\"🐚\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"spider_web\":{\"keywords\":[\"animal\",\"insect\",\"arachnid\",\"silk\"],\"char\":\"🕸\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"earth_americas\":{\"keywords\":[\"globe\",\"world\",\"USA\",\"international\"],\"char\":\"🌎\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"earth_africa\":{\"keywords\":[\"globe\",\"world\",\"international\"],\"char\":\"🌍\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"earth_asia\":{\"keywords\":[\"globe\",\"world\",\"east\",\"international\"],\"char\":\"🌏\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"full_moon\":{\"keywords\":[\"nature\",\"yellow\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌕\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"waning_gibbous_moon\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\",\"waxing_gibbous_moon\"],\"char\":\"🌖\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"last_quarter_moon\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌗\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"waning_crescent_moon\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌘\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"new_moon\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌑\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"waxing_crescent_moon\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌒\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"first_quarter_moon\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌓\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"waxing_gibbous_moon\":{\"keywords\":[\"nature\",\"night\",\"sky\",\"gray\",\"twilight\",\"planet\",\"space\",\"evening\",\"sleep\"],\"char\":\"🌔\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"new_moon_with_face\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌚\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"full_moon_with_face\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌝\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"first_quarter_moon_with_face\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌛\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"last_quarter_moon_with_face\":{\"keywords\":[\"nature\",\"twilight\",\"planet\",\"space\",\"night\",\"evening\",\"sleep\"],\"char\":\"🌜\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sun_with_face\":{\"keywords\":[\"nature\",\"morning\",\"sky\"],\"char\":\"🌞\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"crescent_moon\":{\"keywords\":[\"night\",\"sleep\",\"sky\",\"evening\",\"magic\"],\"char\":\"🌙\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"star\":{\"keywords\":[\"night\",\"yellow\"],\"char\":\"⭐\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"star2\":{\"keywords\":[\"night\",\"sparkle\",\"awesome\",\"good\",\"magic\"],\"char\":\"🌟\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dizzy\":{\"keywords\":[\"star\",\"sparkle\",\"shoot\",\"magic\"],\"char\":\"💫\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sparkles\":{\"keywords\":[\"stars\",\"shine\",\"shiny\",\"cool\",\"awesome\",\"good\",\"magic\"],\"char\":\"✨\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"comet\":{\"keywords\":[\"space\"],\"char\":\"☄\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sunny\":{\"keywords\":[\"weather\",\"nature\",\"brightness\",\"summer\",\"beach\",\"spring\"],\"char\":\"☀️\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sun_behind_small_cloud\":{\"keywords\":[\"weather\"],\"char\":\"🌤\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"partly_sunny\":{\"keywords\":[\"weather\",\"nature\",\"cloudy\",\"morning\",\"fall\",\"spring\"],\"char\":\"⛅\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sun_behind_large_cloud\":{\"keywords\":[\"weather\"],\"char\":\"🌥\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sun_behind_rain_cloud\":{\"keywords\":[\"weather\"],\"char\":\"🌦\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cloud\":{\"keywords\":[\"weather\",\"sky\"],\"char\":\"☁️\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cloud_with_rain\":{\"keywords\":[\"weather\"],\"char\":\"🌧\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cloud_with_lightning_and_rain\":{\"keywords\":[\"weather\",\"lightning\"],\"char\":\"⛈\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cloud_with_lightning\":{\"keywords\":[\"weather\",\"thunder\"],\"char\":\"🌩\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"zap\":{\"keywords\":[\"thunder\",\"weather\",\"lightning bolt\",\"fast\"],\"char\":\"⚡\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"fire\":{\"keywords\":[\"hot\",\"cook\",\"flame\"],\"char\":\"🔥\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"boom\":{\"keywords\":[\"bomb\",\"explode\",\"explosion\",\"collision\",\"blown\"],\"char\":\"💥\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"snowflake\":{\"keywords\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\"],\"char\":\"❄️\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"cloud_with_snow\":{\"keywords\":[\"weather\"],\"char\":\"🌨\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"snowman\":{\"keywords\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\",\"frozen\",\"without_snow\"],\"char\":\"⛄\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"snowman_with_snow\":{\"keywords\":[\"winter\",\"season\",\"cold\",\"weather\",\"christmas\",\"xmas\",\"frozen\"],\"char\":\"☃\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"wind_face\":{\"keywords\":[\"gust\",\"air\"],\"char\":\"🌬\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"dash\":{\"keywords\":[\"wind\",\"air\",\"fast\",\"shoo\",\"fart\",\"smoke\",\"puff\"],\"char\":\"💨\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"tornado\":{\"keywords\":[\"weather\",\"cyclone\",\"twister\"],\"char\":\"🌪\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"fog\":{\"keywords\":[\"weather\"],\"char\":\"🌫\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"open_umbrella\":{\"keywords\":[\"weather\",\"spring\"],\"char\":\"☂\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"umbrella\":{\"keywords\":[\"rainy\",\"weather\",\"spring\"],\"char\":\"☔\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"droplet\":{\"keywords\":[\"water\",\"drip\",\"faucet\",\"spring\"],\"char\":\"💧\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"sweat_drops\":{\"keywords\":[\"water\",\"drip\",\"oops\"],\"char\":\"💦\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"ocean\":{\"keywords\":[\"sea\",\"water\",\"wave\",\"nature\",\"tsunami\",\"disaster\"],\"char\":\"🌊\",\"fitzpatrick_scale\":false,\"category\":\"animals_and_nature\"},\"green_apple\":{\"keywords\":[\"fruit\",\"nature\"],\"char\":\"🍏\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"apple\":{\"keywords\":[\"fruit\",\"mac\",\"school\"],\"char\":\"🍎\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"pear\":{\"keywords\":[\"fruit\",\"nature\",\"food\"],\"char\":\"🍐\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"tangerine\":{\"keywords\":[\"food\",\"fruit\",\"nature\",\"orange\"],\"char\":\"🍊\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"lemon\":{\"keywords\":[\"fruit\",\"nature\"],\"char\":\"🍋\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"banana\":{\"keywords\":[\"fruit\",\"food\",\"monkey\"],\"char\":\"🍌\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"watermelon\":{\"keywords\":[\"fruit\",\"food\",\"picnic\",\"summer\"],\"char\":\"🍉\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"grapes\":{\"keywords\":[\"fruit\",\"food\",\"wine\"],\"char\":\"🍇\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"strawberry\":{\"keywords\":[\"fruit\",\"food\",\"nature\"],\"char\":\"🍓\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"melon\":{\"keywords\":[\"fruit\",\"nature\",\"food\"],\"char\":\"🍈\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cherries\":{\"keywords\":[\"food\",\"fruit\"],\"char\":\"🍒\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"peach\":{\"keywords\":[\"fruit\",\"nature\",\"food\"],\"char\":\"🍑\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"pineapple\":{\"keywords\":[\"fruit\",\"nature\",\"food\"],\"char\":\"🍍\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"coconut\":{\"keywords\":[\"fruit\",\"nature\",\"food\",\"palm\"],\"char\":\"🥥\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"kiwi_fruit\":{\"keywords\":[\"fruit\",\"food\"],\"char\":\"🥝\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"mango\":{\"keywords\":[\"fruit\",\"food\",\"tropical\"],\"char\":\"🥭\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"avocado\":{\"keywords\":[\"fruit\",\"food\"],\"char\":\"🥑\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"broccoli\":{\"keywords\":[\"fruit\",\"food\",\"vegetable\"],\"char\":\"🥦\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"tomato\":{\"keywords\":[\"fruit\",\"vegetable\",\"nature\",\"food\"],\"char\":\"🍅\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"eggplant\":{\"keywords\":[\"vegetable\",\"nature\",\"food\",\"aubergine\"],\"char\":\"🍆\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cucumber\":{\"keywords\":[\"fruit\",\"food\",\"pickle\"],\"char\":\"🥒\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"carrot\":{\"keywords\":[\"vegetable\",\"food\",\"orange\"],\"char\":\"🥕\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"hot_pepper\":{\"keywords\":[\"food\",\"spicy\",\"chilli\",\"chili\"],\"char\":\"🌶\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"potato\":{\"keywords\":[\"food\",\"tuber\",\"vegatable\",\"starch\"],\"char\":\"🥔\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"corn\":{\"keywords\":[\"food\",\"vegetable\",\"plant\"],\"char\":\"🌽\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"leafy_greens\":{\"keywords\":[\"food\",\"vegetable\",\"plant\",\"bok choy\",\"cabbage\",\"kale\",\"lettuce\"],\"char\":\"🥬\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"sweet_potato\":{\"keywords\":[\"food\",\"nature\"],\"char\":\"🍠\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"peanuts\":{\"keywords\":[\"food\",\"nut\"],\"char\":\"🥜\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"honey_pot\":{\"keywords\":[\"bees\",\"sweet\",\"kitchen\"],\"char\":\"🍯\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"croissant\":{\"keywords\":[\"food\",\"bread\",\"french\"],\"char\":\"🥐\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"bread\":{\"keywords\":[\"food\",\"wheat\",\"breakfast\",\"toast\"],\"char\":\"🍞\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"baguette_bread\":{\"keywords\":[\"food\",\"bread\",\"french\"],\"char\":\"🥖\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"bagel\":{\"keywords\":[\"food\",\"bread\",\"bakery\",\"schmear\"],\"char\":\"🥯\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"pretzel\":{\"keywords\":[\"food\",\"bread\",\"twisted\"],\"char\":\"🥨\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cheese\":{\"keywords\":[\"food\",\"chadder\"],\"char\":\"🧀\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"egg\":{\"keywords\":[\"food\",\"chicken\",\"breakfast\"],\"char\":\"🥚\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"bacon\":{\"keywords\":[\"food\",\"breakfast\",\"pork\",\"pig\",\"meat\"],\"char\":\"🥓\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"steak\":{\"keywords\":[\"food\",\"cow\",\"meat\",\"cut\",\"chop\",\"lambchop\",\"porkchop\"],\"char\":\"🥩\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"pancakes\":{\"keywords\":[\"food\",\"breakfast\",\"flapjacks\",\"hotcakes\"],\"char\":\"🥞\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"poultry_leg\":{\"keywords\":[\"food\",\"meat\",\"drumstick\",\"bird\",\"chicken\",\"turkey\"],\"char\":\"🍗\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"meat_on_bone\":{\"keywords\":[\"good\",\"food\",\"drumstick\"],\"char\":\"🍖\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"bone\":{\"keywords\":[\"skeleton\"],\"char\":\"🦴\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"fried_shrimp\":{\"keywords\":[\"food\",\"animal\",\"appetizer\",\"summer\"],\"char\":\"🍤\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"fried_egg\":{\"keywords\":[\"food\",\"breakfast\",\"kitchen\",\"egg\"],\"char\":\"🍳\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"hamburger\":{\"keywords\":[\"meat\",\"fast food\",\"beef\",\"cheeseburger\",\"mcdonalds\",\"burger king\"],\"char\":\"🍔\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"fries\":{\"keywords\":[\"chips\",\"snack\",\"fast food\"],\"char\":\"🍟\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"stuffed_flatbread\":{\"keywords\":[\"food\",\"flatbread\",\"stuffed\",\"gyro\"],\"char\":\"🥙\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"hotdog\":{\"keywords\":[\"food\",\"frankfurter\"],\"char\":\"🌭\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"pizza\":{\"keywords\":[\"food\",\"party\"],\"char\":\"🍕\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"sandwich\":{\"keywords\":[\"food\",\"lunch\",\"bread\"],\"char\":\"🥪\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"canned_food\":{\"keywords\":[\"food\",\"soup\"],\"char\":\"🥫\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"spaghetti\":{\"keywords\":[\"food\",\"italian\",\"noodle\"],\"char\":\"🍝\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"taco\":{\"keywords\":[\"food\",\"mexican\"],\"char\":\"🌮\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"burrito\":{\"keywords\":[\"food\",\"mexican\"],\"char\":\"🌯\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"green_salad\":{\"keywords\":[\"food\",\"healthy\",\"lettuce\"],\"char\":\"🥗\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"shallow_pan_of_food\":{\"keywords\":[\"food\",\"cooking\",\"casserole\",\"paella\"],\"char\":\"🥘\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"ramen\":{\"keywords\":[\"food\",\"japanese\",\"noodle\",\"chopsticks\"],\"char\":\"🍜\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"stew\":{\"keywords\":[\"food\",\"meat\",\"soup\"],\"char\":\"🍲\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"fish_cake\":{\"keywords\":[\"food\",\"japan\",\"sea\",\"beach\",\"narutomaki\",\"pink\",\"swirl\",\"kamaboko\",\"surimi\",\"ramen\"],\"char\":\"🍥\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"fortune_cookie\":{\"keywords\":[\"food\",\"prophecy\"],\"char\":\"🥠\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"sushi\":{\"keywords\":[\"food\",\"fish\",\"japanese\",\"rice\"],\"char\":\"🍣\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"bento\":{\"keywords\":[\"food\",\"japanese\",\"box\"],\"char\":\"🍱\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"curry\":{\"keywords\":[\"food\",\"spicy\",\"hot\",\"indian\"],\"char\":\"🍛\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"rice_ball\":{\"keywords\":[\"food\",\"japanese\"],\"char\":\"🍙\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"rice\":{\"keywords\":[\"food\",\"china\",\"asian\"],\"char\":\"🍚\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"rice_cracker\":{\"keywords\":[\"food\",\"japanese\"],\"char\":\"🍘\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"oden\":{\"keywords\":[\"food\",\"japanese\"],\"char\":\"🍢\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"dango\":{\"keywords\":[\"food\",\"dessert\",\"sweet\",\"japanese\",\"barbecue\",\"meat\"],\"char\":\"🍡\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"shaved_ice\":{\"keywords\":[\"hot\",\"dessert\",\"summer\"],\"char\":\"🍧\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"ice_cream\":{\"keywords\":[\"food\",\"hot\",\"dessert\"],\"char\":\"🍨\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"icecream\":{\"keywords\":[\"food\",\"hot\",\"dessert\",\"summer\"],\"char\":\"🍦\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"pie\":{\"keywords\":[\"food\",\"dessert\",\"pastry\"],\"char\":\"🥧\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cake\":{\"keywords\":[\"food\",\"dessert\"],\"char\":\"🍰\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cupcake\":{\"keywords\":[\"food\",\"dessert\",\"bakery\",\"sweet\"],\"char\":\"🧁\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"moon_cake\":{\"keywords\":[\"food\",\"autumn\"],\"char\":\"🥮\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"birthday\":{\"keywords\":[\"food\",\"dessert\",\"cake\"],\"char\":\"🎂\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"custard\":{\"keywords\":[\"dessert\",\"food\"],\"char\":\"🍮\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"candy\":{\"keywords\":[\"snack\",\"dessert\",\"sweet\",\"lolly\"],\"char\":\"🍬\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"lollipop\":{\"keywords\":[\"food\",\"snack\",\"candy\",\"sweet\"],\"char\":\"🍭\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"chocolate_bar\":{\"keywords\":[\"food\",\"snack\",\"dessert\",\"sweet\"],\"char\":\"🍫\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"popcorn\":{\"keywords\":[\"food\",\"movie theater\",\"films\",\"snack\"],\"char\":\"🍿\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"dumpling\":{\"keywords\":[\"food\",\"empanada\",\"pierogi\",\"potsticker\"],\"char\":\"🥟\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"doughnut\":{\"keywords\":[\"food\",\"dessert\",\"snack\",\"sweet\",\"donut\"],\"char\":\"🍩\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cookie\":{\"keywords\":[\"food\",\"snack\",\"oreo\",\"chocolate\",\"sweet\",\"dessert\"],\"char\":\"🍪\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"milk_glass\":{\"keywords\":[\"beverage\",\"drink\",\"cow\"],\"char\":\"🥛\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"beer\":{\"keywords\":[\"relax\",\"beverage\",\"drink\",\"drunk\",\"party\",\"pub\",\"summer\",\"alcohol\",\"booze\"],\"char\":\"🍺\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"beers\":{\"keywords\":[\"relax\",\"beverage\",\"drink\",\"drunk\",\"party\",\"pub\",\"summer\",\"alcohol\",\"booze\"],\"char\":\"🍻\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"clinking_glasses\":{\"keywords\":[\"beverage\",\"drink\",\"party\",\"alcohol\",\"celebrate\",\"cheers\",\"wine\",\"champagne\",\"toast\"],\"char\":\"🥂\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"wine_glass\":{\"keywords\":[\"drink\",\"beverage\",\"drunk\",\"alcohol\",\"booze\"],\"char\":\"🍷\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"tumbler_glass\":{\"keywords\":[\"drink\",\"beverage\",\"drunk\",\"alcohol\",\"liquor\",\"booze\",\"bourbon\",\"scotch\",\"whisky\",\"glass\",\"shot\"],\"char\":\"🥃\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cocktail\":{\"keywords\":[\"drink\",\"drunk\",\"alcohol\",\"beverage\",\"booze\",\"mojito\"],\"char\":\"🍸\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"tropical_drink\":{\"keywords\":[\"beverage\",\"cocktail\",\"summer\",\"beach\",\"alcohol\",\"booze\",\"mojito\"],\"char\":\"🍹\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"champagne\":{\"keywords\":[\"drink\",\"wine\",\"bottle\",\"celebration\"],\"char\":\"🍾\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"sake\":{\"keywords\":[\"wine\",\"drink\",\"drunk\",\"beverage\",\"japanese\",\"alcohol\",\"booze\"],\"char\":\"🍶\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"tea\":{\"keywords\":[\"drink\",\"bowl\",\"breakfast\",\"green\",\"british\"],\"char\":\"🍵\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"cup_with_straw\":{\"keywords\":[\"drink\",\"soda\"],\"char\":\"🥤\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"coffee\":{\"keywords\":[\"beverage\",\"caffeine\",\"latte\",\"espresso\"],\"char\":\"☕\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"baby_bottle\":{\"keywords\":[\"food\",\"container\",\"milk\"],\"char\":\"🍼\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"salt\":{\"keywords\":[\"condiment\",\"shaker\"],\"char\":\"🧂\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"spoon\":{\"keywords\":[\"cutlery\",\"kitchen\",\"tableware\"],\"char\":\"🥄\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"fork_and_knife\":{\"keywords\":[\"cutlery\",\"kitchen\"],\"char\":\"🍴\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"plate_with_cutlery\":{\"keywords\":[\"food\",\"eat\",\"meal\",\"lunch\",\"dinner\",\"restaurant\"],\"char\":\"🍽\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"bowl_with_spoon\":{\"keywords\":[\"food\",\"breakfast\",\"cereal\",\"oatmeal\",\"porridge\"],\"char\":\"🥣\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"takeout_box\":{\"keywords\":[\"food\",\"leftovers\"],\"char\":\"🥡\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"chopsticks\":{\"keywords\":[\"food\"],\"char\":\"🥢\",\"fitzpatrick_scale\":false,\"category\":\"food_and_drink\"},\"soccer\":{\"keywords\":[\"sports\",\"football\"],\"char\":\"⚽\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"basketball\":{\"keywords\":[\"sports\",\"balls\",\"NBA\"],\"char\":\"🏀\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"football\":{\"keywords\":[\"sports\",\"balls\",\"NFL\"],\"char\":\"🏈\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"baseball\":{\"keywords\":[\"sports\",\"balls\"],\"char\":\"⚾\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"softball\":{\"keywords\":[\"sports\",\"balls\"],\"char\":\"🥎\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"tennis\":{\"keywords\":[\"sports\",\"balls\",\"green\"],\"char\":\"🎾\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"volleyball\":{\"keywords\":[\"sports\",\"balls\"],\"char\":\"🏐\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"rugby_football\":{\"keywords\":[\"sports\",\"team\"],\"char\":\"🏉\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"flying_disc\":{\"keywords\":[\"sports\",\"frisbee\",\"ultimate\"],\"char\":\"🥏\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"8ball\":{\"keywords\":[\"pool\",\"hobby\",\"game\",\"luck\",\"magic\"],\"char\":\"🎱\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"golf\":{\"keywords\":[\"sports\",\"business\",\"flag\",\"hole\",\"summer\"],\"char\":\"⛳\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"golfing_woman\":{\"keywords\":[\"sports\",\"business\",\"woman\",\"female\"],\"char\":\"🏌️‍♀️\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"golfing_man\":{\"keywords\":[\"sports\",\"business\"],\"char\":\"🏌\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"ping_pong\":{\"keywords\":[\"sports\",\"pingpong\"],\"char\":\"🏓\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"badminton\":{\"keywords\":[\"sports\"],\"char\":\"🏸\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"goal_net\":{\"keywords\":[\"sports\"],\"char\":\"🥅\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"ice_hockey\":{\"keywords\":[\"sports\"],\"char\":\"🏒\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"field_hockey\":{\"keywords\":[\"sports\"],\"char\":\"🏑\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"lacrosse\":{\"keywords\":[\"sports\",\"ball\",\"stick\"],\"char\":\"🥍\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"cricket\":{\"keywords\":[\"sports\"],\"char\":\"🏏\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"ski\":{\"keywords\":[\"sports\",\"winter\",\"cold\",\"snow\"],\"char\":\"🎿\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"skier\":{\"keywords\":[\"sports\",\"winter\",\"snow\"],\"char\":\"⛷\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"snowboarder\":{\"keywords\":[\"sports\",\"winter\"],\"char\":\"🏂\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"person_fencing\":{\"keywords\":[\"sports\",\"fencing\",\"sword\"],\"char\":\"🤺\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"women_wrestling\":{\"keywords\":[\"sports\",\"wrestlers\"],\"char\":\"🤼‍♀️\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"men_wrestling\":{\"keywords\":[\"sports\",\"wrestlers\"],\"char\":\"🤼‍♂️\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"woman_cartwheeling\":{\"keywords\":[\"gymnastics\"],\"char\":\"🤸‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"man_cartwheeling\":{\"keywords\":[\"gymnastics\"],\"char\":\"🤸‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"woman_playing_handball\":{\"keywords\":[\"sports\"],\"char\":\"🤾‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"man_playing_handball\":{\"keywords\":[\"sports\"],\"char\":\"🤾‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"ice_skate\":{\"keywords\":[\"sports\"],\"char\":\"⛸\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"curling_stone\":{\"keywords\":[\"sports\"],\"char\":\"🥌\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"skateboard\":{\"keywords\":[\"board\"],\"char\":\"🛹\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"sled\":{\"keywords\":[\"sleigh\",\"luge\",\"toboggan\"],\"char\":\"🛷\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"bow_and_arrow\":{\"keywords\":[\"sports\"],\"char\":\"🏹\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"fishing_pole_and_fish\":{\"keywords\":[\"food\",\"hobby\",\"summer\"],\"char\":\"🎣\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"boxing_glove\":{\"keywords\":[\"sports\",\"fighting\"],\"char\":\"🥊\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"martial_arts_uniform\":{\"keywords\":[\"judo\",\"karate\",\"taekwondo\"],\"char\":\"🥋\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"rowing_woman\":{\"keywords\":[\"sports\",\"hobby\",\"water\",\"ship\",\"woman\",\"female\"],\"char\":\"🚣‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"rowing_man\":{\"keywords\":[\"sports\",\"hobby\",\"water\",\"ship\"],\"char\":\"🚣\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"climbing_woman\":{\"keywords\":[\"sports\",\"hobby\",\"woman\",\"female\",\"rock\"],\"char\":\"🧗‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"climbing_man\":{\"keywords\":[\"sports\",\"hobby\",\"man\",\"male\",\"rock\"],\"char\":\"🧗‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"swimming_woman\":{\"keywords\":[\"sports\",\"exercise\",\"human\",\"athlete\",\"water\",\"summer\",\"woman\",\"female\"],\"char\":\"🏊‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"swimming_man\":{\"keywords\":[\"sports\",\"exercise\",\"human\",\"athlete\",\"water\",\"summer\"],\"char\":\"🏊\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"woman_playing_water_polo\":{\"keywords\":[\"sports\",\"pool\"],\"char\":\"🤽‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"man_playing_water_polo\":{\"keywords\":[\"sports\",\"pool\"],\"char\":\"🤽‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"woman_in_lotus_position\":{\"keywords\":[\"woman\",\"female\",\"meditation\",\"yoga\",\"serenity\",\"zen\",\"mindfulness\"],\"char\":\"🧘‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"man_in_lotus_position\":{\"keywords\":[\"man\",\"male\",\"meditation\",\"yoga\",\"serenity\",\"zen\",\"mindfulness\"],\"char\":\"🧘‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"surfing_woman\":{\"keywords\":[\"sports\",\"ocean\",\"sea\",\"summer\",\"beach\",\"woman\",\"female\"],\"char\":\"🏄‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"surfing_man\":{\"keywords\":[\"sports\",\"ocean\",\"sea\",\"summer\",\"beach\"],\"char\":\"🏄\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"bath\":{\"keywords\":[\"clean\",\"shower\",\"bathroom\"],\"char\":\"🛀\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"basketball_woman\":{\"keywords\":[\"sports\",\"human\",\"woman\",\"female\"],\"char\":\"⛹️‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"basketball_man\":{\"keywords\":[\"sports\",\"human\"],\"char\":\"⛹\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"weight_lifting_woman\":{\"keywords\":[\"sports\",\"training\",\"exercise\",\"woman\",\"female\"],\"char\":\"🏋️‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"weight_lifting_man\":{\"keywords\":[\"sports\",\"training\",\"exercise\"],\"char\":\"🏋\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"biking_woman\":{\"keywords\":[\"sports\",\"bike\",\"exercise\",\"hipster\",\"woman\",\"female\"],\"char\":\"🚴‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"biking_man\":{\"keywords\":[\"sports\",\"bike\",\"exercise\",\"hipster\"],\"char\":\"🚴\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"mountain_biking_woman\":{\"keywords\":[\"transportation\",\"sports\",\"human\",\"race\",\"bike\",\"woman\",\"female\"],\"char\":\"🚵‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"mountain_biking_man\":{\"keywords\":[\"transportation\",\"sports\",\"human\",\"race\",\"bike\"],\"char\":\"🚵\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"horse_racing\":{\"keywords\":[\"animal\",\"betting\",\"competition\",\"gambling\",\"luck\"],\"char\":\"🏇\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"business_suit_levitating\":{\"keywords\":[\"suit\",\"business\",\"levitate\",\"hover\",\"jump\"],\"char\":\"🕴\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"trophy\":{\"keywords\":[\"win\",\"award\",\"contest\",\"place\",\"ftw\",\"ceremony\"],\"char\":\"🏆\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"running_shirt_with_sash\":{\"keywords\":[\"play\",\"pageant\"],\"char\":\"🎽\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"medal_sports\":{\"keywords\":[\"award\",\"winning\"],\"char\":\"🏅\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"medal_military\":{\"keywords\":[\"award\",\"winning\",\"army\"],\"char\":\"🎖\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"1st_place_medal\":{\"keywords\":[\"award\",\"winning\",\"first\"],\"char\":\"🥇\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"2nd_place_medal\":{\"keywords\":[\"award\",\"second\"],\"char\":\"🥈\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"3rd_place_medal\":{\"keywords\":[\"award\",\"third\"],\"char\":\"🥉\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"reminder_ribbon\":{\"keywords\":[\"sports\",\"cause\",\"support\",\"awareness\"],\"char\":\"🎗\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"rosette\":{\"keywords\":[\"flower\",\"decoration\",\"military\"],\"char\":\"🏵\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"ticket\":{\"keywords\":[\"event\",\"concert\",\"pass\"],\"char\":\"🎫\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"tickets\":{\"keywords\":[\"sports\",\"concert\",\"entrance\"],\"char\":\"🎟\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"performing_arts\":{\"keywords\":[\"acting\",\"theater\",\"drama\"],\"char\":\"🎭\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"art\":{\"keywords\":[\"design\",\"paint\",\"draw\",\"colors\"],\"char\":\"🎨\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"circus_tent\":{\"keywords\":[\"festival\",\"carnival\",\"party\"],\"char\":\"🎪\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"woman_juggling\":{\"keywords\":[\"juggle\",\"balance\",\"skill\",\"multitask\"],\"char\":\"🤹‍♀️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"man_juggling\":{\"keywords\":[\"juggle\",\"balance\",\"skill\",\"multitask\"],\"char\":\"🤹‍♂️\",\"fitzpatrick_scale\":true,\"category\":\"activity\"},\"microphone\":{\"keywords\":[\"sound\",\"music\",\"PA\",\"sing\",\"talkshow\"],\"char\":\"🎤\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"headphones\":{\"keywords\":[\"music\",\"score\",\"gadgets\"],\"char\":\"🎧\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"musical_score\":{\"keywords\":[\"treble\",\"clef\",\"compose\"],\"char\":\"🎼\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"musical_keyboard\":{\"keywords\":[\"piano\",\"instrument\",\"compose\"],\"char\":\"🎹\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"drum\":{\"keywords\":[\"music\",\"instrument\",\"drumsticks\",\"snare\"],\"char\":\"🥁\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"saxophone\":{\"keywords\":[\"music\",\"instrument\",\"jazz\",\"blues\"],\"char\":\"🎷\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"trumpet\":{\"keywords\":[\"music\",\"brass\"],\"char\":\"🎺\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"guitar\":{\"keywords\":[\"music\",\"instrument\"],\"char\":\"🎸\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"violin\":{\"keywords\":[\"music\",\"instrument\",\"orchestra\",\"symphony\"],\"char\":\"🎻\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"clapper\":{\"keywords\":[\"movie\",\"film\",\"record\"],\"char\":\"🎬\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"video_game\":{\"keywords\":[\"play\",\"console\",\"PS4\",\"controller\"],\"char\":\"🎮\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"space_invader\":{\"keywords\":[\"game\",\"arcade\",\"play\"],\"char\":\"👾\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"dart\":{\"keywords\":[\"game\",\"play\",\"bar\",\"target\",\"bullseye\"],\"char\":\"🎯\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"game_die\":{\"keywords\":[\"dice\",\"random\",\"tabletop\",\"play\",\"luck\"],\"char\":\"🎲\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"chess_pawn\":{\"keywords\":[\"expendable\"],\"char\":\"♟\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"slot_machine\":{\"keywords\":[\"bet\",\"gamble\",\"vegas\",\"fruit machine\",\"luck\",\"casino\"],\"char\":\"🎰\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"jigsaw\":{\"keywords\":[\"interlocking\",\"puzzle\",\"piece\"],\"char\":\"🧩\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"bowling\":{\"keywords\":[\"sports\",\"fun\",\"play\"],\"char\":\"🎳\",\"fitzpatrick_scale\":false,\"category\":\"activity\"},\"red_car\":{\"keywords\":[\"red\",\"transportation\",\"vehicle\"],\"char\":\"🚗\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"taxi\":{\"keywords\":[\"uber\",\"vehicle\",\"cars\",\"transportation\"],\"char\":\"🚕\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"blue_car\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚙\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"bus\":{\"keywords\":[\"car\",\"vehicle\",\"transportation\"],\"char\":\"🚌\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"trolleybus\":{\"keywords\":[\"bart\",\"transportation\",\"vehicle\"],\"char\":\"🚎\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"racing_car\":{\"keywords\":[\"sports\",\"race\",\"fast\",\"formula\",\"f1\"],\"char\":\"🏎\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"police_car\":{\"keywords\":[\"vehicle\",\"cars\",\"transportation\",\"law\",\"legal\",\"enforcement\"],\"char\":\"🚓\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"ambulance\":{\"keywords\":[\"health\",\"911\",\"hospital\"],\"char\":\"🚑\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"fire_engine\":{\"keywords\":[\"transportation\",\"cars\",\"vehicle\"],\"char\":\"🚒\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"minibus\":{\"keywords\":[\"vehicle\",\"car\",\"transportation\"],\"char\":\"🚐\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"truck\":{\"keywords\":[\"cars\",\"transportation\"],\"char\":\"🚚\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"articulated_lorry\":{\"keywords\":[\"vehicle\",\"cars\",\"transportation\",\"express\"],\"char\":\"🚛\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"tractor\":{\"keywords\":[\"vehicle\",\"car\",\"farming\",\"agriculture\"],\"char\":\"🚜\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"kick_scooter\":{\"keywords\":[\"vehicle\",\"kick\",\"razor\"],\"char\":\"🛴\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"motorcycle\":{\"keywords\":[\"race\",\"sports\",\"fast\"],\"char\":\"🏍\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"bike\":{\"keywords\":[\"sports\",\"bicycle\",\"exercise\",\"hipster\"],\"char\":\"🚲\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"motor_scooter\":{\"keywords\":[\"vehicle\",\"vespa\",\"sasha\"],\"char\":\"🛵\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"rotating_light\":{\"keywords\":[\"police\",\"ambulance\",\"911\",\"emergency\",\"alert\",\"error\",\"pinged\",\"law\",\"legal\"],\"char\":\"🚨\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"oncoming_police_car\":{\"keywords\":[\"vehicle\",\"law\",\"legal\",\"enforcement\",\"911\"],\"char\":\"🚔\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"oncoming_bus\":{\"keywords\":[\"vehicle\",\"transportation\"],\"char\":\"🚍\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"oncoming_automobile\":{\"keywords\":[\"car\",\"vehicle\",\"transportation\"],\"char\":\"🚘\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"oncoming_taxi\":{\"keywords\":[\"vehicle\",\"cars\",\"uber\"],\"char\":\"🚖\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"aerial_tramway\":{\"keywords\":[\"transportation\",\"vehicle\",\"ski\"],\"char\":\"🚡\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"mountain_cableway\":{\"keywords\":[\"transportation\",\"vehicle\",\"ski\"],\"char\":\"🚠\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"suspension_railway\":{\"keywords\":[\"vehicle\",\"transportation\"],\"char\":\"🚟\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"railway_car\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚃\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"train\":{\"keywords\":[\"transportation\",\"vehicle\",\"carriage\",\"public\",\"travel\"],\"char\":\"🚋\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"monorail\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚝\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"bullettrain_side\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚄\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"bullettrain_front\":{\"keywords\":[\"transportation\",\"vehicle\",\"speed\",\"fast\",\"public\",\"travel\"],\"char\":\"🚅\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"light_rail\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚈\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"mountain_railway\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚞\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"steam_locomotive\":{\"keywords\":[\"transportation\",\"vehicle\",\"train\"],\"char\":\"🚂\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"train2\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚆\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"metro\":{\"keywords\":[\"transportation\",\"blue-square\",\"mrt\",\"underground\",\"tube\"],\"char\":\"🚇\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"tram\":{\"keywords\":[\"transportation\",\"vehicle\"],\"char\":\"🚊\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"station\":{\"keywords\":[\"transportation\",\"vehicle\",\"public\"],\"char\":\"🚉\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"flying_saucer\":{\"keywords\":[\"transportation\",\"vehicle\",\"ufo\"],\"char\":\"🛸\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"helicopter\":{\"keywords\":[\"transportation\",\"vehicle\",\"fly\"],\"char\":\"🚁\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"small_airplane\":{\"keywords\":[\"flight\",\"transportation\",\"fly\",\"vehicle\"],\"char\":\"🛩\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"airplane\":{\"keywords\":[\"vehicle\",\"transportation\",\"flight\",\"fly\"],\"char\":\"✈️\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"flight_departure\":{\"keywords\":[\"airport\",\"flight\",\"landing\"],\"char\":\"🛫\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"flight_arrival\":{\"keywords\":[\"airport\",\"flight\",\"boarding\"],\"char\":\"🛬\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"sailboat\":{\"keywords\":[\"ship\",\"summer\",\"transportation\",\"water\",\"sailing\"],\"char\":\"⛵\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"motor_boat\":{\"keywords\":[\"ship\"],\"char\":\"🛥\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"speedboat\":{\"keywords\":[\"ship\",\"transportation\",\"vehicle\",\"summer\"],\"char\":\"🚤\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"ferry\":{\"keywords\":[\"boat\",\"ship\",\"yacht\"],\"char\":\"⛴\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"passenger_ship\":{\"keywords\":[\"yacht\",\"cruise\",\"ferry\"],\"char\":\"🛳\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"rocket\":{\"keywords\":[\"launch\",\"ship\",\"staffmode\",\"NASA\",\"outer space\",\"outer_space\",\"fly\"],\"char\":\"🚀\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"artificial_satellite\":{\"keywords\":[\"communication\",\"gps\",\"orbit\",\"spaceflight\",\"NASA\",\"ISS\"],\"char\":\"🛰\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"seat\":{\"keywords\":[\"sit\",\"airplane\",\"transport\",\"bus\",\"flight\",\"fly\"],\"char\":\"💺\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"canoe\":{\"keywords\":[\"boat\",\"paddle\",\"water\",\"ship\"],\"char\":\"🛶\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"anchor\":{\"keywords\":[\"ship\",\"ferry\",\"sea\",\"boat\"],\"char\":\"⚓\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"construction\":{\"keywords\":[\"wip\",\"progress\",\"caution\",\"warning\"],\"char\":\"🚧\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"fuelpump\":{\"keywords\":[\"gas station\",\"petroleum\"],\"char\":\"⛽\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"busstop\":{\"keywords\":[\"transportation\",\"wait\"],\"char\":\"🚏\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"vertical_traffic_light\":{\"keywords\":[\"transportation\",\"driving\"],\"char\":\"🚦\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"traffic_light\":{\"keywords\":[\"transportation\",\"signal\"],\"char\":\"🚥\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"checkered_flag\":{\"keywords\":[\"contest\",\"finishline\",\"race\",\"gokart\"],\"char\":\"🏁\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"ship\":{\"keywords\":[\"transportation\",\"titanic\",\"deploy\"],\"char\":\"🚢\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"ferris_wheel\":{\"keywords\":[\"photo\",\"carnival\",\"londoneye\"],\"char\":\"🎡\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"roller_coaster\":{\"keywords\":[\"carnival\",\"playground\",\"photo\",\"fun\"],\"char\":\"🎢\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"carousel_horse\":{\"keywords\":[\"photo\",\"carnival\"],\"char\":\"🎠\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"building_construction\":{\"keywords\":[\"wip\",\"working\",\"progress\"],\"char\":\"🏗\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"foggy\":{\"keywords\":[\"photo\",\"mountain\"],\"char\":\"🌁\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"tokyo_tower\":{\"keywords\":[\"photo\",\"japanese\"],\"char\":\"🗼\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"factory\":{\"keywords\":[\"building\",\"industry\",\"pollution\",\"smoke\"],\"char\":\"🏭\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"fountain\":{\"keywords\":[\"photo\",\"summer\",\"water\",\"fresh\"],\"char\":\"⛲\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"rice_scene\":{\"keywords\":[\"photo\",\"japan\",\"asia\",\"tsukimi\"],\"char\":\"🎑\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"mountain\":{\"keywords\":[\"photo\",\"nature\",\"environment\"],\"char\":\"⛰\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"mountain_snow\":{\"keywords\":[\"photo\",\"nature\",\"environment\",\"winter\",\"cold\"],\"char\":\"🏔\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"mount_fuji\":{\"keywords\":[\"photo\",\"mountain\",\"nature\",\"japanese\"],\"char\":\"🗻\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"volcano\":{\"keywords\":[\"photo\",\"nature\",\"disaster\"],\"char\":\"🌋\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"japan\":{\"keywords\":[\"nation\",\"country\",\"japanese\",\"asia\"],\"char\":\"🗾\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"camping\":{\"keywords\":[\"photo\",\"outdoors\",\"tent\"],\"char\":\"🏕\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"tent\":{\"keywords\":[\"photo\",\"camping\",\"outdoors\"],\"char\":\"⛺\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"national_park\":{\"keywords\":[\"photo\",\"environment\",\"nature\"],\"char\":\"🏞\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"motorway\":{\"keywords\":[\"road\",\"cupertino\",\"interstate\",\"highway\"],\"char\":\"🛣\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"railway_track\":{\"keywords\":[\"train\",\"transportation\"],\"char\":\"🛤\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"sunrise\":{\"keywords\":[\"morning\",\"view\",\"vacation\",\"photo\"],\"char\":\"🌅\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"sunrise_over_mountains\":{\"keywords\":[\"view\",\"vacation\",\"photo\"],\"char\":\"🌄\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"desert\":{\"keywords\":[\"photo\",\"warm\",\"saharah\"],\"char\":\"🏜\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"beach_umbrella\":{\"keywords\":[\"weather\",\"summer\",\"sunny\",\"sand\",\"mojito\"],\"char\":\"🏖\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"desert_island\":{\"keywords\":[\"photo\",\"tropical\",\"mojito\"],\"char\":\"🏝\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"city_sunrise\":{\"keywords\":[\"photo\",\"good morning\",\"dawn\"],\"char\":\"🌇\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"city_sunset\":{\"keywords\":[\"photo\",\"evening\",\"sky\",\"buildings\"],\"char\":\"🌆\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"cityscape\":{\"keywords\":[\"photo\",\"night life\",\"urban\"],\"char\":\"🏙\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"night_with_stars\":{\"keywords\":[\"evening\",\"city\",\"downtown\"],\"char\":\"🌃\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"bridge_at_night\":{\"keywords\":[\"photo\",\"sanfrancisco\"],\"char\":\"🌉\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"milky_way\":{\"keywords\":[\"photo\",\"space\",\"stars\"],\"char\":\"🌌\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"stars\":{\"keywords\":[\"night\",\"photo\"],\"char\":\"🌠\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"sparkler\":{\"keywords\":[\"stars\",\"night\",\"shine\"],\"char\":\"🎇\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"fireworks\":{\"keywords\":[\"photo\",\"festival\",\"carnival\",\"congratulations\"],\"char\":\"🎆\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"rainbow\":{\"keywords\":[\"nature\",\"happy\",\"unicorn_face\",\"photo\",\"sky\",\"spring\"],\"char\":\"🌈\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"houses\":{\"keywords\":[\"buildings\",\"photo\"],\"char\":\"🏘\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"european_castle\":{\"keywords\":[\"building\",\"royalty\",\"history\"],\"char\":\"🏰\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"japanese_castle\":{\"keywords\":[\"photo\",\"building\"],\"char\":\"🏯\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"stadium\":{\"keywords\":[\"photo\",\"place\",\"sports\",\"concert\",\"venue\"],\"char\":\"🏟\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"statue_of_liberty\":{\"keywords\":[\"american\",\"newyork\"],\"char\":\"🗽\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"house\":{\"keywords\":[\"building\",\"home\"],\"char\":\"🏠\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"house_with_garden\":{\"keywords\":[\"home\",\"plant\",\"nature\"],\"char\":\"🏡\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"derelict_house\":{\"keywords\":[\"abandon\",\"evict\",\"broken\",\"building\"],\"char\":\"🏚\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"office\":{\"keywords\":[\"building\",\"bureau\",\"work\"],\"char\":\"🏢\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"department_store\":{\"keywords\":[\"building\",\"shopping\",\"mall\"],\"char\":\"🏬\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"post_office\":{\"keywords\":[\"building\",\"envelope\",\"communication\"],\"char\":\"🏣\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"european_post_office\":{\"keywords\":[\"building\",\"email\"],\"char\":\"🏤\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"hospital\":{\"keywords\":[\"building\",\"health\",\"surgery\",\"doctor\"],\"char\":\"🏥\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"bank\":{\"keywords\":[\"building\",\"money\",\"sales\",\"cash\",\"business\",\"enterprise\"],\"char\":\"🏦\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"hotel\":{\"keywords\":[\"building\",\"accomodation\",\"checkin\"],\"char\":\"🏨\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"convenience_store\":{\"keywords\":[\"building\",\"shopping\",\"groceries\"],\"char\":\"🏪\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"school\":{\"keywords\":[\"building\",\"student\",\"education\",\"learn\",\"teach\"],\"char\":\"🏫\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"love_hotel\":{\"keywords\":[\"like\",\"affection\",\"dating\"],\"char\":\"🏩\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"wedding\":{\"keywords\":[\"love\",\"like\",\"affection\",\"couple\",\"marriage\",\"bride\",\"groom\"],\"char\":\"💒\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"classical_building\":{\"keywords\":[\"art\",\"culture\",\"history\"],\"char\":\"🏛\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"church\":{\"keywords\":[\"building\",\"religion\",\"christ\"],\"char\":\"⛪\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"mosque\":{\"keywords\":[\"islam\",\"worship\",\"minaret\"],\"char\":\"🕌\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"synagogue\":{\"keywords\":[\"judaism\",\"worship\",\"temple\",\"jewish\"],\"char\":\"🕍\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"kaaba\":{\"keywords\":[\"mecca\",\"mosque\",\"islam\"],\"char\":\"🕋\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"shinto_shrine\":{\"keywords\":[\"temple\",\"japan\",\"kyoto\"],\"char\":\"⛩\",\"fitzpatrick_scale\":false,\"category\":\"travel_and_places\"},\"watch\":{\"keywords\":[\"time\",\"accessories\"],\"char\":\"⌚\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"iphone\":{\"keywords\":[\"technology\",\"apple\",\"gadgets\",\"dial\"],\"char\":\"📱\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"calling\":{\"keywords\":[\"iphone\",\"incoming\"],\"char\":\"📲\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"computer\":{\"keywords\":[\"technology\",\"laptop\",\"screen\",\"display\",\"monitor\"],\"char\":\"💻\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"keyboard\":{\"keywords\":[\"technology\",\"computer\",\"type\",\"input\",\"text\"],\"char\":\"⌨\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"desktop_computer\":{\"keywords\":[\"technology\",\"computing\",\"screen\"],\"char\":\"🖥\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"printer\":{\"keywords\":[\"paper\",\"ink\"],\"char\":\"🖨\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"computer_mouse\":{\"keywords\":[\"click\"],\"char\":\"🖱\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"trackball\":{\"keywords\":[\"technology\",\"trackpad\"],\"char\":\"🖲\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"joystick\":{\"keywords\":[\"game\",\"play\"],\"char\":\"🕹\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"clamp\":{\"keywords\":[\"tool\"],\"char\":\"🗜\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"minidisc\":{\"keywords\":[\"technology\",\"record\",\"data\",\"disk\",\"90s\"],\"char\":\"💽\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"floppy_disk\":{\"keywords\":[\"oldschool\",\"technology\",\"save\",\"90s\",\"80s\"],\"char\":\"💾\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"cd\":{\"keywords\":[\"technology\",\"dvd\",\"disk\",\"disc\",\"90s\"],\"char\":\"💿\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"dvd\":{\"keywords\":[\"cd\",\"disk\",\"disc\"],\"char\":\"📀\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"vhs\":{\"keywords\":[\"record\",\"video\",\"oldschool\",\"90s\",\"80s\"],\"char\":\"📼\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"camera\":{\"keywords\":[\"gadgets\",\"photography\"],\"char\":\"📷\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"camera_flash\":{\"keywords\":[\"photography\",\"gadgets\"],\"char\":\"📸\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"video_camera\":{\"keywords\":[\"film\",\"record\"],\"char\":\"📹\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"movie_camera\":{\"keywords\":[\"film\",\"record\"],\"char\":\"🎥\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"film_projector\":{\"keywords\":[\"video\",\"tape\",\"record\",\"movie\"],\"char\":\"📽\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"film_strip\":{\"keywords\":[\"movie\"],\"char\":\"🎞\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"telephone_receiver\":{\"keywords\":[\"technology\",\"communication\",\"dial\"],\"char\":\"📞\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"phone\":{\"keywords\":[\"technology\",\"communication\",\"dial\",\"telephone\"],\"char\":\"☎️\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pager\":{\"keywords\":[\"bbcall\",\"oldschool\",\"90s\"],\"char\":\"📟\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"fax\":{\"keywords\":[\"communication\",\"technology\"],\"char\":\"📠\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"tv\":{\"keywords\":[\"technology\",\"program\",\"oldschool\",\"show\",\"television\"],\"char\":\"📺\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"radio\":{\"keywords\":[\"communication\",\"music\",\"podcast\",\"program\"],\"char\":\"📻\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"studio_microphone\":{\"keywords\":[\"sing\",\"recording\",\"artist\",\"talkshow\"],\"char\":\"🎙\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"level_slider\":{\"keywords\":[\"scale\"],\"char\":\"🎚\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"control_knobs\":{\"keywords\":[\"dial\"],\"char\":\"🎛\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"compass\":{\"keywords\":[\"magnetic\",\"navigation\",\"orienteering\"],\"char\":\"🧭\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"stopwatch\":{\"keywords\":[\"time\",\"deadline\"],\"char\":\"⏱\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"timer_clock\":{\"keywords\":[\"alarm\"],\"char\":\"⏲\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"alarm_clock\":{\"keywords\":[\"time\",\"wake\"],\"char\":\"⏰\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mantelpiece_clock\":{\"keywords\":[\"time\"],\"char\":\"🕰\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hourglass_flowing_sand\":{\"keywords\":[\"oldschool\",\"time\",\"countdown\"],\"char\":\"⏳\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hourglass\":{\"keywords\":[\"time\",\"clock\",\"oldschool\",\"limit\",\"exam\",\"quiz\",\"test\"],\"char\":\"⌛\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"satellite\":{\"keywords\":[\"communication\",\"future\",\"radio\",\"space\"],\"char\":\"📡\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"battery\":{\"keywords\":[\"power\",\"energy\",\"sustain\"],\"char\":\"🔋\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"electric_plug\":{\"keywords\":[\"charger\",\"power\"],\"char\":\"🔌\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bulb\":{\"keywords\":[\"light\",\"electricity\",\"idea\"],\"char\":\"💡\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"flashlight\":{\"keywords\":[\"dark\",\"camping\",\"sight\",\"night\"],\"char\":\"🔦\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"candle\":{\"keywords\":[\"fire\",\"wax\"],\"char\":\"🕯\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"fire_extinguisher\":{\"keywords\":[\"quench\"],\"char\":\"🧯\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"wastebasket\":{\"keywords\":[\"bin\",\"trash\",\"rubbish\",\"garbage\",\"toss\"],\"char\":\"🗑\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"oil_drum\":{\"keywords\":[\"barrell\"],\"char\":\"🛢\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"money_with_wings\":{\"keywords\":[\"dollar\",\"bills\",\"payment\",\"sale\"],\"char\":\"💸\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"dollar\":{\"keywords\":[\"money\",\"sales\",\"bill\",\"currency\"],\"char\":\"💵\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"yen\":{\"keywords\":[\"money\",\"sales\",\"japanese\",\"dollar\",\"currency\"],\"char\":\"💴\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"euro\":{\"keywords\":[\"money\",\"sales\",\"dollar\",\"currency\"],\"char\":\"💶\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pound\":{\"keywords\":[\"british\",\"sterling\",\"money\",\"sales\",\"bills\",\"uk\",\"england\",\"currency\"],\"char\":\"💷\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"moneybag\":{\"keywords\":[\"dollar\",\"payment\",\"coins\",\"sale\"],\"char\":\"💰\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"credit_card\":{\"keywords\":[\"money\",\"sales\",\"dollar\",\"bill\",\"payment\",\"shopping\"],\"char\":\"💳\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"gem\":{\"keywords\":[\"blue\",\"ruby\",\"diamond\",\"jewelry\"],\"char\":\"💎\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"balance_scale\":{\"keywords\":[\"law\",\"fairness\",\"weight\"],\"char\":\"⚖\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"toolbox\":{\"keywords\":[\"tools\",\"diy\",\"fix\",\"maintainer\",\"mechanic\"],\"char\":\"🧰\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"wrench\":{\"keywords\":[\"tools\",\"diy\",\"ikea\",\"fix\",\"maintainer\"],\"char\":\"🔧\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hammer\":{\"keywords\":[\"tools\",\"build\",\"create\"],\"char\":\"🔨\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hammer_and_pick\":{\"keywords\":[\"tools\",\"build\",\"create\"],\"char\":\"⚒\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hammer_and_wrench\":{\"keywords\":[\"tools\",\"build\",\"create\"],\"char\":\"🛠\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pick\":{\"keywords\":[\"tools\",\"dig\"],\"char\":\"⛏\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"nut_and_bolt\":{\"keywords\":[\"handy\",\"tools\",\"fix\"],\"char\":\"🔩\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"gear\":{\"keywords\":[\"cog\"],\"char\":\"⚙\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"brick\":{\"keywords\":[\"bricks\"],\"char\":\"🧱\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"chains\":{\"keywords\":[\"lock\",\"arrest\"],\"char\":\"⛓\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"magnet\":{\"keywords\":[\"attraction\",\"magnetic\"],\"char\":\"🧲\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"gun\":{\"keywords\":[\"violence\",\"weapon\",\"pistol\",\"revolver\"],\"char\":\"🔫\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bomb\":{\"keywords\":[\"boom\",\"explode\",\"explosion\",\"terrorism\"],\"char\":\"💣\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"firecracker\":{\"keywords\":[\"dynamite\",\"boom\",\"explode\",\"explosion\",\"explosive\"],\"char\":\"🧨\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hocho\":{\"keywords\":[\"knife\",\"blade\",\"cutlery\",\"kitchen\",\"weapon\"],\"char\":\"🔪\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"dagger\":{\"keywords\":[\"weapon\"],\"char\":\"🗡\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"crossed_swords\":{\"keywords\":[\"weapon\"],\"char\":\"⚔\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"shield\":{\"keywords\":[\"protection\",\"security\"],\"char\":\"🛡\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"smoking\":{\"keywords\":[\"kills\",\"tobacco\",\"cigarette\",\"joint\",\"smoke\"],\"char\":\"🚬\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"skull_and_crossbones\":{\"keywords\":[\"poison\",\"danger\",\"deadly\",\"scary\",\"death\",\"pirate\",\"evil\"],\"char\":\"☠\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"coffin\":{\"keywords\":[\"vampire\",\"dead\",\"die\",\"death\",\"rip\",\"graveyard\",\"cemetery\",\"casket\",\"funeral\",\"box\"],\"char\":\"⚰\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"funeral_urn\":{\"keywords\":[\"dead\",\"die\",\"death\",\"rip\",\"ashes\"],\"char\":\"⚱\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"amphora\":{\"keywords\":[\"vase\",\"jar\"],\"char\":\"🏺\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"crystal_ball\":{\"keywords\":[\"disco\",\"party\",\"magic\",\"circus\",\"fortune_teller\"],\"char\":\"🔮\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"prayer_beads\":{\"keywords\":[\"dhikr\",\"religious\"],\"char\":\"📿\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"nazar_amulet\":{\"keywords\":[\"bead\",\"charm\"],\"char\":\"🧿\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"barber\":{\"keywords\":[\"hair\",\"salon\",\"style\"],\"char\":\"💈\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"alembic\":{\"keywords\":[\"distilling\",\"science\",\"experiment\",\"chemistry\"],\"char\":\"⚗\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"telescope\":{\"keywords\":[\"stars\",\"space\",\"zoom\",\"science\",\"astronomy\"],\"char\":\"🔭\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"microscope\":{\"keywords\":[\"laboratory\",\"experiment\",\"zoomin\",\"science\",\"study\"],\"char\":\"🔬\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"hole\":{\"keywords\":[\"embarrassing\"],\"char\":\"🕳\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pill\":{\"keywords\":[\"health\",\"medicine\",\"doctor\",\"pharmacy\",\"drug\"],\"char\":\"💊\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"syringe\":{\"keywords\":[\"health\",\"hospital\",\"drugs\",\"blood\",\"medicine\",\"needle\",\"doctor\",\"nurse\"],\"char\":\"💉\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"dna\":{\"keywords\":[\"biologist\",\"genetics\",\"life\"],\"char\":\"🧬\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"microbe\":{\"keywords\":[\"amoeba\",\"bacteria\",\"germs\"],\"char\":\"🦠\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"petri_dish\":{\"keywords\":[\"bacteria\",\"biology\",\"culture\",\"lab\"],\"char\":\"🧫\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"test_tube\":{\"keywords\":[\"chemistry\",\"experiment\",\"lab\",\"science\"],\"char\":\"🧪\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"thermometer\":{\"keywords\":[\"weather\",\"temperature\",\"hot\",\"cold\"],\"char\":\"🌡\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"broom\":{\"keywords\":[\"cleaning\",\"sweeping\",\"witch\"],\"char\":\"🧹\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"basket\":{\"keywords\":[\"laundry\"],\"char\":\"🧺\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"toilet_paper\":{\"keywords\":[\"roll\"],\"char\":\"🧻\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"label\":{\"keywords\":[\"sale\",\"tag\"],\"char\":\"🏷\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bookmark\":{\"keywords\":[\"favorite\",\"label\",\"save\"],\"char\":\"🔖\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"toilet\":{\"keywords\":[\"restroom\",\"wc\",\"washroom\",\"bathroom\",\"potty\"],\"char\":\"🚽\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"shower\":{\"keywords\":[\"clean\",\"water\",\"bathroom\"],\"char\":\"🚿\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bathtub\":{\"keywords\":[\"clean\",\"shower\",\"bathroom\"],\"char\":\"🛁\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"soap\":{\"keywords\":[\"bar\",\"bathing\",\"cleaning\",\"lather\"],\"char\":\"🧼\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"sponge\":{\"keywords\":[\"absorbing\",\"cleaning\",\"porous\"],\"char\":\"🧽\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"lotion_bottle\":{\"keywords\":[\"moisturizer\",\"sunscreen\"],\"char\":\"🧴\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"key\":{\"keywords\":[\"lock\",\"door\",\"password\"],\"char\":\"🔑\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"old_key\":{\"keywords\":[\"lock\",\"door\",\"password\"],\"char\":\"🗝\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"couch_and_lamp\":{\"keywords\":[\"read\",\"chill\"],\"char\":\"🛋\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"sleeping_bed\":{\"keywords\":[\"bed\",\"rest\"],\"char\":\"🛌\",\"fitzpatrick_scale\":true,\"category\":\"objects\"},\"bed\":{\"keywords\":[\"sleep\",\"rest\"],\"char\":\"🛏\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"door\":{\"keywords\":[\"house\",\"entry\",\"exit\"],\"char\":\"🚪\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bellhop_bell\":{\"keywords\":[\"service\"],\"char\":\"🛎\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"teddy_bear\":{\"keywords\":[\"plush\",\"stuffed\"],\"char\":\"🧸\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"framed_picture\":{\"keywords\":[\"photography\"],\"char\":\"🖼\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"world_map\":{\"keywords\":[\"location\",\"direction\"],\"char\":\"🗺\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"parasol_on_ground\":{\"keywords\":[\"weather\",\"summer\"],\"char\":\"⛱\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"moyai\":{\"keywords\":[\"rock\",\"easter island\",\"moai\"],\"char\":\"🗿\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"shopping\":{\"keywords\":[\"mall\",\"buy\",\"purchase\"],\"char\":\"🛍\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"shopping_cart\":{\"keywords\":[\"trolley\"],\"char\":\"🛒\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"balloon\":{\"keywords\":[\"party\",\"celebration\",\"birthday\",\"circus\"],\"char\":\"🎈\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"flags\":{\"keywords\":[\"fish\",\"japanese\",\"koinobori\",\"carp\",\"banner\"],\"char\":\"🎏\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"ribbon\":{\"keywords\":[\"decoration\",\"pink\",\"girl\",\"bowtie\"],\"char\":\"🎀\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"gift\":{\"keywords\":[\"present\",\"birthday\",\"christmas\",\"xmas\"],\"char\":\"🎁\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"confetti_ball\":{\"keywords\":[\"festival\",\"party\",\"birthday\",\"circus\"],\"char\":\"🎊\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"tada\":{\"keywords\":[\"party\",\"congratulations\",\"birthday\",\"magic\",\"circus\",\"celebration\"],\"char\":\"🎉\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"dolls\":{\"keywords\":[\"japanese\",\"toy\",\"kimono\"],\"char\":\"🎎\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"wind_chime\":{\"keywords\":[\"nature\",\"ding\",\"spring\",\"bell\"],\"char\":\"🎐\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"crossed_flags\":{\"keywords\":[\"japanese\",\"nation\",\"country\",\"border\"],\"char\":\"🎌\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"izakaya_lantern\":{\"keywords\":[\"light\",\"paper\",\"halloween\",\"spooky\"],\"char\":\"🏮\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"red_envelope\":{\"keywords\":[\"gift\"],\"char\":\"🧧\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"email\":{\"keywords\":[\"letter\",\"postal\",\"inbox\",\"communication\"],\"char\":\"✉️\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"envelope_with_arrow\":{\"keywords\":[\"email\",\"communication\"],\"char\":\"📩\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"incoming_envelope\":{\"keywords\":[\"email\",\"inbox\"],\"char\":\"📨\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"e-mail\":{\"keywords\":[\"communication\",\"inbox\"],\"char\":\"📧\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"love_letter\":{\"keywords\":[\"email\",\"like\",\"affection\",\"envelope\",\"valentines\"],\"char\":\"💌\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"postbox\":{\"keywords\":[\"email\",\"letter\",\"envelope\"],\"char\":\"📮\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mailbox_closed\":{\"keywords\":[\"email\",\"communication\",\"inbox\"],\"char\":\"📪\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mailbox\":{\"keywords\":[\"email\",\"inbox\",\"communication\"],\"char\":\"📫\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mailbox_with_mail\":{\"keywords\":[\"email\",\"inbox\",\"communication\"],\"char\":\"📬\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mailbox_with_no_mail\":{\"keywords\":[\"email\",\"inbox\"],\"char\":\"📭\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"package\":{\"keywords\":[\"mail\",\"gift\",\"cardboard\",\"box\",\"moving\"],\"char\":\"📦\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"postal_horn\":{\"keywords\":[\"instrument\",\"music\"],\"char\":\"📯\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"inbox_tray\":{\"keywords\":[\"email\",\"documents\"],\"char\":\"📥\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"outbox_tray\":{\"keywords\":[\"inbox\",\"email\"],\"char\":\"📤\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"scroll\":{\"keywords\":[\"documents\",\"ancient\",\"history\",\"paper\"],\"char\":\"📜\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"page_with_curl\":{\"keywords\":[\"documents\",\"office\",\"paper\"],\"char\":\"📃\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bookmark_tabs\":{\"keywords\":[\"favorite\",\"save\",\"order\",\"tidy\"],\"char\":\"📑\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"receipt\":{\"keywords\":[\"accounting\",\"expenses\"],\"char\":\"🧾\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"bar_chart\":{\"keywords\":[\"graph\",\"presentation\",\"stats\"],\"char\":\"📊\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"chart_with_upwards_trend\":{\"keywords\":[\"graph\",\"presentation\",\"stats\",\"recovery\",\"business\",\"economics\",\"money\",\"sales\",\"good\",\"success\"],\"char\":\"📈\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"chart_with_downwards_trend\":{\"keywords\":[\"graph\",\"presentation\",\"stats\",\"recession\",\"business\",\"economics\",\"money\",\"sales\",\"bad\",\"failure\"],\"char\":\"📉\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"page_facing_up\":{\"keywords\":[\"documents\",\"office\",\"paper\",\"information\"],\"char\":\"📄\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"date\":{\"keywords\":[\"calendar\",\"schedule\"],\"char\":\"📅\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"calendar\":{\"keywords\":[\"schedule\",\"date\",\"planning\"],\"char\":\"📆\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"spiral_calendar\":{\"keywords\":[\"date\",\"schedule\",\"planning\"],\"char\":\"🗓\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"card_index\":{\"keywords\":[\"business\",\"stationery\"],\"char\":\"📇\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"card_file_box\":{\"keywords\":[\"business\",\"stationery\"],\"char\":\"🗃\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"ballot_box\":{\"keywords\":[\"election\",\"vote\"],\"char\":\"🗳\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"file_cabinet\":{\"keywords\":[\"filing\",\"organizing\"],\"char\":\"🗄\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"clipboard\":{\"keywords\":[\"stationery\",\"documents\"],\"char\":\"📋\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"spiral_notepad\":{\"keywords\":[\"memo\",\"stationery\"],\"char\":\"🗒\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"file_folder\":{\"keywords\":[\"documents\",\"business\",\"office\"],\"char\":\"📁\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"open_file_folder\":{\"keywords\":[\"documents\",\"load\"],\"char\":\"📂\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"card_index_dividers\":{\"keywords\":[\"organizing\",\"business\",\"stationery\"],\"char\":\"🗂\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"newspaper_roll\":{\"keywords\":[\"press\",\"headline\"],\"char\":\"🗞\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"newspaper\":{\"keywords\":[\"press\",\"headline\"],\"char\":\"📰\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"notebook\":{\"keywords\":[\"stationery\",\"record\",\"notes\",\"paper\",\"study\"],\"char\":\"📓\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"closed_book\":{\"keywords\":[\"read\",\"library\",\"knowledge\",\"textbook\",\"learn\"],\"char\":\"📕\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"green_book\":{\"keywords\":[\"read\",\"library\",\"knowledge\",\"study\"],\"char\":\"📗\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"blue_book\":{\"keywords\":[\"read\",\"library\",\"knowledge\",\"learn\",\"study\"],\"char\":\"📘\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"orange_book\":{\"keywords\":[\"read\",\"library\",\"knowledge\",\"textbook\",\"study\"],\"char\":\"📙\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"notebook_with_decorative_cover\":{\"keywords\":[\"classroom\",\"notes\",\"record\",\"paper\",\"study\"],\"char\":\"📔\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"ledger\":{\"keywords\":[\"notes\",\"paper\"],\"char\":\"📒\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"books\":{\"keywords\":[\"literature\",\"library\",\"study\"],\"char\":\"📚\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"open_book\":{\"keywords\":[\"book\",\"read\",\"library\",\"knowledge\",\"literature\",\"learn\",\"study\"],\"char\":\"📖\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"safety_pin\":{\"keywords\":[\"diaper\"],\"char\":\"🧷\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"link\":{\"keywords\":[\"rings\",\"url\"],\"char\":\"🔗\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"paperclip\":{\"keywords\":[\"documents\",\"stationery\"],\"char\":\"📎\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"paperclips\":{\"keywords\":[\"documents\",\"stationery\"],\"char\":\"🖇\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"scissors\":{\"keywords\":[\"stationery\",\"cut\"],\"char\":\"✂️\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"triangular_ruler\":{\"keywords\":[\"stationery\",\"math\",\"architect\",\"sketch\"],\"char\":\"📐\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"straight_ruler\":{\"keywords\":[\"stationery\",\"calculate\",\"length\",\"math\",\"school\",\"drawing\",\"architect\",\"sketch\"],\"char\":\"📏\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"abacus\":{\"keywords\":[\"calculation\"],\"char\":\"🧮\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pushpin\":{\"keywords\":[\"stationery\",\"mark\",\"here\"],\"char\":\"📌\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"round_pushpin\":{\"keywords\":[\"stationery\",\"location\",\"map\",\"here\"],\"char\":\"📍\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"triangular_flag_on_post\":{\"keywords\":[\"mark\",\"milestone\",\"place\"],\"char\":\"🚩\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"white_flag\":{\"keywords\":[\"losing\",\"loser\",\"lost\",\"surrender\",\"give up\",\"fail\"],\"char\":\"🏳\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"black_flag\":{\"keywords\":[\"pirate\"],\"char\":\"🏴\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"rainbow_flag\":{\"keywords\":[\"flag\",\"rainbow\",\"pride\",\"gay\",\"lgbt\",\"glbt\",\"queer\",\"homosexual\",\"lesbian\",\"bisexual\",\"transgender\"],\"char\":\"🏳️‍🌈\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"closed_lock_with_key\":{\"keywords\":[\"security\",\"privacy\"],\"char\":\"🔐\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"lock\":{\"keywords\":[\"security\",\"password\",\"padlock\"],\"char\":\"🔒\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"unlock\":{\"keywords\":[\"privacy\",\"security\"],\"char\":\"🔓\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"lock_with_ink_pen\":{\"keywords\":[\"security\",\"secret\"],\"char\":\"🔏\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pen\":{\"keywords\":[\"stationery\",\"writing\",\"write\"],\"char\":\"🖊\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"fountain_pen\":{\"keywords\":[\"stationery\",\"writing\",\"write\"],\"char\":\"🖋\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"black_nib\":{\"keywords\":[\"pen\",\"stationery\",\"writing\",\"write\"],\"char\":\"✒️\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"memo\":{\"keywords\":[\"write\",\"documents\",\"stationery\",\"pencil\",\"paper\",\"writing\",\"legal\",\"exam\",\"quiz\",\"test\",\"study\",\"compose\"],\"char\":\"📝\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"pencil2\":{\"keywords\":[\"stationery\",\"write\",\"paper\",\"writing\",\"school\",\"study\"],\"char\":\"✏️\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"crayon\":{\"keywords\":[\"drawing\",\"creativity\"],\"char\":\"🖍\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"paintbrush\":{\"keywords\":[\"drawing\",\"creativity\",\"art\"],\"char\":\"🖌\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mag\":{\"keywords\":[\"search\",\"zoom\",\"find\",\"detective\"],\"char\":\"🔍\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"mag_right\":{\"keywords\":[\"search\",\"zoom\",\"find\",\"detective\"],\"char\":\"🔎\",\"fitzpatrick_scale\":false,\"category\":\"objects\"},\"heart\":{\"keywords\":[\"love\",\"like\",\"valentines\"],\"char\":\"❤️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"orange_heart\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"🧡\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"yellow_heart\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💛\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"green_heart\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💚\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"blue_heart\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💙\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"purple_heart\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💜\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_heart\":{\"keywords\":[\"evil\"],\"char\":\"🖤\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"broken_heart\":{\"keywords\":[\"sad\",\"sorry\",\"break\",\"heart\",\"heartbreak\"],\"char\":\"💔\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_heart_exclamation\":{\"keywords\":[\"decoration\",\"love\"],\"char\":\"❣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"two_hearts\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\",\"heart\"],\"char\":\"💕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"revolving_hearts\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💞\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heartbeat\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\",\"pink\",\"heart\"],\"char\":\"💓\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heartpulse\":{\"keywords\":[\"like\",\"love\",\"affection\",\"valentines\",\"pink\"],\"char\":\"💗\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"sparkling_heart\":{\"keywords\":[\"love\",\"like\",\"affection\",\"valentines\"],\"char\":\"💖\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"cupid\":{\"keywords\":[\"love\",\"like\",\"heart\",\"affection\",\"valentines\"],\"char\":\"💘\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"gift_heart\":{\"keywords\":[\"love\",\"valentines\"],\"char\":\"💝\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heart_decoration\":{\"keywords\":[\"purple-square\",\"love\",\"like\"],\"char\":\"💟\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"peace_symbol\":{\"keywords\":[\"hippie\"],\"char\":\"☮\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"latin_cross\":{\"keywords\":[\"christianity\"],\"char\":\"✝\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"star_and_crescent\":{\"keywords\":[\"islam\"],\"char\":\"☪\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"om\":{\"keywords\":[\"hinduism\",\"buddhism\",\"sikhism\",\"jainism\"],\"char\":\"🕉\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"wheel_of_dharma\":{\"keywords\":[\"hinduism\",\"buddhism\",\"sikhism\",\"jainism\"],\"char\":\"☸\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"star_of_david\":{\"keywords\":[\"judaism\"],\"char\":\"✡\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"six_pointed_star\":{\"keywords\":[\"purple-square\",\"religion\",\"jewish\",\"hexagram\"],\"char\":\"🔯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"menorah\":{\"keywords\":[\"hanukkah\",\"candles\",\"jewish\"],\"char\":\"🕎\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"yin_yang\":{\"keywords\":[\"balance\"],\"char\":\"☯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"orthodox_cross\":{\"keywords\":[\"suppedaneum\",\"religion\"],\"char\":\"☦\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"place_of_worship\":{\"keywords\":[\"religion\",\"church\",\"temple\",\"prayer\"],\"char\":\"🛐\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"ophiuchus\":{\"keywords\":[\"sign\",\"purple-square\",\"constellation\",\"astrology\"],\"char\":\"⛎\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"aries\":{\"keywords\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"char\":\"♈\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"taurus\":{\"keywords\":[\"purple-square\",\"sign\",\"zodiac\",\"astrology\"],\"char\":\"♉\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"gemini\":{\"keywords\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"char\":\"♊\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"cancer\":{\"keywords\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"char\":\"♋\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"leo\":{\"keywords\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"char\":\"♌\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"virgo\":{\"keywords\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"char\":\"♍\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"libra\":{\"keywords\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"char\":\"♎\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"scorpius\":{\"keywords\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\",\"scorpio\"],\"char\":\"♏\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"sagittarius\":{\"keywords\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"char\":\"♐\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"capricorn\":{\"keywords\":[\"sign\",\"zodiac\",\"purple-square\",\"astrology\"],\"char\":\"♑\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"aquarius\":{\"keywords\":[\"sign\",\"purple-square\",\"zodiac\",\"astrology\"],\"char\":\"♒\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"pisces\":{\"keywords\":[\"purple-square\",\"sign\",\"zodiac\",\"astrology\"],\"char\":\"♓\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"id\":{\"keywords\":[\"purple-square\",\"words\"],\"char\":\"🆔\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"atom_symbol\":{\"keywords\":[\"science\",\"physics\",\"chemistry\"],\"char\":\"⚛\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u7a7a\":{\"keywords\":[\"kanji\",\"japanese\",\"chinese\",\"empty\",\"sky\",\"blue-square\"],\"char\":\"🈳\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u5272\":{\"keywords\":[\"cut\",\"divide\",\"chinese\",\"kanji\",\"pink-square\"],\"char\":\"🈹\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"radioactive\":{\"keywords\":[\"nuclear\",\"danger\"],\"char\":\"☢\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"biohazard\":{\"keywords\":[\"danger\"],\"char\":\"☣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"mobile_phone_off\":{\"keywords\":[\"mute\",\"orange-square\",\"silence\",\"quiet\"],\"char\":\"📴\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"vibration_mode\":{\"keywords\":[\"orange-square\",\"phone\"],\"char\":\"📳\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u6709\":{\"keywords\":[\"orange-square\",\"chinese\",\"have\",\"kanji\"],\"char\":\"🈶\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u7121\":{\"keywords\":[\"nothing\",\"chinese\",\"kanji\",\"japanese\",\"orange-square\"],\"char\":\"🈚\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u7533\":{\"keywords\":[\"chinese\",\"japanese\",\"kanji\",\"orange-square\"],\"char\":\"🈸\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u55b6\":{\"keywords\":[\"japanese\",\"opening hours\",\"orange-square\"],\"char\":\"🈺\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u6708\":{\"keywords\":[\"chinese\",\"month\",\"moon\",\"japanese\",\"orange-square\",\"kanji\"],\"char\":\"🈷️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"eight_pointed_black_star\":{\"keywords\":[\"orange-square\",\"shape\",\"polygon\"],\"char\":\"✴️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"vs\":{\"keywords\":[\"words\",\"orange-square\"],\"char\":\"🆚\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"accept\":{\"keywords\":[\"ok\",\"good\",\"chinese\",\"kanji\",\"agree\",\"yes\",\"orange-circle\"],\"char\":\"🉑\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_flower\":{\"keywords\":[\"japanese\",\"spring\"],\"char\":\"💮\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"ideograph_advantage\":{\"keywords\":[\"chinese\",\"kanji\",\"obtain\",\"get\",\"circle\"],\"char\":\"🉐\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"secret\":{\"keywords\":[\"privacy\",\"chinese\",\"sshh\",\"kanji\",\"red-circle\"],\"char\":\"㊙️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"congratulations\":{\"keywords\":[\"chinese\",\"kanji\",\"japanese\",\"red-circle\"],\"char\":\"㊗️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u5408\":{\"keywords\":[\"japanese\",\"chinese\",\"join\",\"kanji\",\"red-square\"],\"char\":\"🈴\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u6e80\":{\"keywords\":[\"full\",\"chinese\",\"japanese\",\"red-square\",\"kanji\"],\"char\":\"🈵\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u7981\":{\"keywords\":[\"kanji\",\"japanese\",\"chinese\",\"forbidden\",\"limit\",\"restricted\",\"red-square\"],\"char\":\"🈲\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"a\":{\"keywords\":[\"red-square\",\"alphabet\",\"letter\"],\"char\":\"🅰️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"b\":{\"keywords\":[\"red-square\",\"alphabet\",\"letter\"],\"char\":\"🅱️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"ab\":{\"keywords\":[\"red-square\",\"alphabet\"],\"char\":\"🆎\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"cl\":{\"keywords\":[\"alphabet\",\"words\",\"red-square\"],\"char\":\"🆑\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"o2\":{\"keywords\":[\"alphabet\",\"red-square\",\"letter\"],\"char\":\"🅾️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"sos\":{\"keywords\":[\"help\",\"red-square\",\"words\",\"emergency\",\"911\"],\"char\":\"🆘\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_entry\":{\"keywords\":[\"limit\",\"security\",\"privacy\",\"bad\",\"denied\",\"stop\",\"circle\"],\"char\":\"⛔\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"name_badge\":{\"keywords\":[\"fire\",\"forbid\"],\"char\":\"📛\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_entry_sign\":{\"keywords\":[\"forbid\",\"stop\",\"limit\",\"denied\",\"disallow\",\"circle\"],\"char\":\"🚫\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"x\":{\"keywords\":[\"no\",\"delete\",\"remove\",\"cancel\",\"red\"],\"char\":\"❌\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"o\":{\"keywords\":[\"circle\",\"round\"],\"char\":\"⭕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"stop_sign\":{\"keywords\":[\"stop\"],\"char\":\"🛑\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"anger\":{\"keywords\":[\"angry\",\"mad\"],\"char\":\"💢\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"hotsprings\":{\"keywords\":[\"bath\",\"warm\",\"relax\"],\"char\":\"♨️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_pedestrians\":{\"keywords\":[\"rules\",\"crossing\",\"walking\",\"circle\"],\"char\":\"🚷\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"do_not_litter\":{\"keywords\":[\"trash\",\"bin\",\"garbage\",\"circle\"],\"char\":\"🚯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_bicycles\":{\"keywords\":[\"cyclist\",\"prohibited\",\"circle\"],\"char\":\"🚳\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"non-potable_water\":{\"keywords\":[\"drink\",\"faucet\",\"tap\",\"circle\"],\"char\":\"🚱\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"underage\":{\"keywords\":[\"18\",\"drink\",\"pub\",\"night\",\"minor\",\"circle\"],\"char\":\"🔞\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_mobile_phones\":{\"keywords\":[\"iphone\",\"mute\",\"circle\"],\"char\":\"📵\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"exclamation\":{\"keywords\":[\"heavy_exclamation_mark\",\"danger\",\"surprise\",\"punctuation\",\"wow\",\"warning\"],\"char\":\"❗\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"grey_exclamation\":{\"keywords\":[\"surprise\",\"punctuation\",\"gray\",\"wow\",\"warning\"],\"char\":\"❕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"question\":{\"keywords\":[\"doubt\",\"confused\"],\"char\":\"❓\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"grey_question\":{\"keywords\":[\"doubts\",\"gray\",\"huh\",\"confused\"],\"char\":\"❔\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"bangbang\":{\"keywords\":[\"exclamation\",\"surprise\"],\"char\":\"‼️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"interrobang\":{\"keywords\":[\"wat\",\"punctuation\",\"surprise\"],\"char\":\"⁉️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"low_brightness\":{\"keywords\":[\"sun\",\"afternoon\",\"warm\",\"summer\"],\"char\":\"🔅\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"high_brightness\":{\"keywords\":[\"sun\",\"light\"],\"char\":\"🔆\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"trident\":{\"keywords\":[\"weapon\",\"spear\"],\"char\":\"🔱\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"fleur_de_lis\":{\"keywords\":[\"decorative\",\"scout\"],\"char\":\"⚜\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"part_alternation_mark\":{\"keywords\":[\"graph\",\"presentation\",\"stats\",\"business\",\"economics\",\"bad\"],\"char\":\"〽️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"warning\":{\"keywords\":[\"exclamation\",\"wip\",\"alert\",\"error\",\"problem\",\"issue\"],\"char\":\"⚠️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"children_crossing\":{\"keywords\":[\"school\",\"warning\",\"danger\",\"sign\",\"driving\",\"yellow-diamond\"],\"char\":\"🚸\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"beginner\":{\"keywords\":[\"badge\",\"shield\"],\"char\":\"🔰\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"recycle\":{\"keywords\":[\"arrow\",\"environment\",\"garbage\",\"trash\"],\"char\":\"♻️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"u6307\":{\"keywords\":[\"chinese\",\"point\",\"green-square\",\"kanji\"],\"char\":\"🈯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"chart\":{\"keywords\":[\"green-square\",\"graph\",\"presentation\",\"stats\"],\"char\":\"💹\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"sparkle\":{\"keywords\":[\"stars\",\"green-square\",\"awesome\",\"good\",\"fireworks\"],\"char\":\"❇️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"eight_spoked_asterisk\":{\"keywords\":[\"star\",\"sparkle\",\"green-square\"],\"char\":\"✳️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"negative_squared_cross_mark\":{\"keywords\":[\"x\",\"green-square\",\"no\",\"deny\"],\"char\":\"❎\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_check_mark\":{\"keywords\":[\"green-square\",\"ok\",\"agree\",\"vote\",\"election\",\"answer\",\"tick\"],\"char\":\"✅\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"diamond_shape_with_a_dot_inside\":{\"keywords\":[\"jewel\",\"blue\",\"gem\",\"crystal\",\"fancy\"],\"char\":\"💠\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"cyclone\":{\"keywords\":[\"weather\",\"swirl\",\"blue\",\"cloud\",\"vortex\",\"spiral\",\"whirlpool\",\"spin\",\"tornado\",\"hurricane\",\"typhoon\"],\"char\":\"🌀\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"loop\":{\"keywords\":[\"tape\",\"cassette\"],\"char\":\"➿\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"globe_with_meridians\":{\"keywords\":[\"earth\",\"international\",\"world\",\"internet\",\"interweb\",\"i18n\"],\"char\":\"🌐\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"m\":{\"keywords\":[\"alphabet\",\"blue-circle\",\"letter\"],\"char\":\"Ⓜ️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"atm\":{\"keywords\":[\"money\",\"sales\",\"cash\",\"blue-square\",\"payment\",\"bank\"],\"char\":\"🏧\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"sa\":{\"keywords\":[\"japanese\",\"blue-square\",\"katakana\"],\"char\":\"🈂️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"passport_control\":{\"keywords\":[\"custom\",\"blue-square\"],\"char\":\"🛂\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"customs\":{\"keywords\":[\"passport\",\"border\",\"blue-square\"],\"char\":\"🛃\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"baggage_claim\":{\"keywords\":[\"blue-square\",\"airport\",\"transport\"],\"char\":\"🛄\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"left_luggage\":{\"keywords\":[\"blue-square\",\"travel\"],\"char\":\"🛅\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"wheelchair\":{\"keywords\":[\"blue-square\",\"disabled\",\"a11y\",\"accessibility\"],\"char\":\"♿\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_smoking\":{\"keywords\":[\"cigarette\",\"blue-square\",\"smell\",\"smoke\"],\"char\":\"🚭\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"wc\":{\"keywords\":[\"toilet\",\"restroom\",\"blue-square\"],\"char\":\"🚾\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"parking\":{\"keywords\":[\"cars\",\"blue-square\",\"alphabet\",\"letter\"],\"char\":\"🅿️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"potable_water\":{\"keywords\":[\"blue-square\",\"liquid\",\"restroom\",\"cleaning\",\"faucet\"],\"char\":\"🚰\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"mens\":{\"keywords\":[\"toilet\",\"restroom\",\"wc\",\"blue-square\",\"gender\",\"male\"],\"char\":\"🚹\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"womens\":{\"keywords\":[\"purple-square\",\"woman\",\"female\",\"toilet\",\"loo\",\"restroom\",\"gender\"],\"char\":\"🚺\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"baby_symbol\":{\"keywords\":[\"orange-square\",\"child\"],\"char\":\"🚼\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"restroom\":{\"keywords\":[\"blue-square\",\"toilet\",\"refresh\",\"wc\",\"gender\"],\"char\":\"🚻\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"put_litter_in_its_place\":{\"keywords\":[\"blue-square\",\"sign\",\"human\",\"info\"],\"char\":\"🚮\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"cinema\":{\"keywords\":[\"blue-square\",\"record\",\"film\",\"movie\",\"curtain\",\"stage\",\"theater\"],\"char\":\"🎦\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"signal_strength\":{\"keywords\":[\"blue-square\",\"reception\",\"phone\",\"internet\",\"connection\",\"wifi\",\"bluetooth\",\"bars\"],\"char\":\"📶\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"koko\":{\"keywords\":[\"blue-square\",\"here\",\"katakana\",\"japanese\",\"destination\"],\"char\":\"🈁\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"ng\":{\"keywords\":[\"blue-square\",\"words\",\"shape\",\"icon\"],\"char\":\"🆖\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"ok\":{\"keywords\":[\"good\",\"agree\",\"yes\",\"blue-square\"],\"char\":\"🆗\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"up\":{\"keywords\":[\"blue-square\",\"above\",\"high\"],\"char\":\"🆙\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"cool\":{\"keywords\":[\"words\",\"blue-square\"],\"char\":\"🆒\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"new\":{\"keywords\":[\"blue-square\",\"words\",\"start\"],\"char\":\"🆕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"free\":{\"keywords\":[\"blue-square\",\"words\"],\"char\":\"🆓\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"zero\":{\"keywords\":[\"0\",\"numbers\",\"blue-square\",\"null\"],\"char\":\"0️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"one\":{\"keywords\":[\"blue-square\",\"numbers\",\"1\"],\"char\":\"1️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"two\":{\"keywords\":[\"numbers\",\"2\",\"prime\",\"blue-square\"],\"char\":\"2️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"three\":{\"keywords\":[\"3\",\"numbers\",\"prime\",\"blue-square\"],\"char\":\"3️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"four\":{\"keywords\":[\"4\",\"numbers\",\"blue-square\"],\"char\":\"4️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"five\":{\"keywords\":[\"5\",\"numbers\",\"blue-square\",\"prime\"],\"char\":\"5️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"six\":{\"keywords\":[\"6\",\"numbers\",\"blue-square\"],\"char\":\"6️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"seven\":{\"keywords\":[\"7\",\"numbers\",\"blue-square\",\"prime\"],\"char\":\"7️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"eight\":{\"keywords\":[\"8\",\"blue-square\",\"numbers\"],\"char\":\"8️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"nine\":{\"keywords\":[\"blue-square\",\"numbers\",\"9\"],\"char\":\"9️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"keycap_ten\":{\"keywords\":[\"numbers\",\"10\",\"blue-square\"],\"char\":\"🔟\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"asterisk\":{\"keywords\":[\"star\",\"keycap\"],\"char\":\"*⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"eject_button\":{\"keywords\":[\"blue-square\"],\"char\":\"⏏️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_forward\":{\"keywords\":[\"blue-square\",\"right\",\"direction\",\"play\"],\"char\":\"▶️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"pause_button\":{\"keywords\":[\"pause\",\"blue-square\"],\"char\":\"⏸\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"next_track_button\":{\"keywords\":[\"forward\",\"next\",\"blue-square\"],\"char\":\"⏭\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"stop_button\":{\"keywords\":[\"blue-square\"],\"char\":\"⏹\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"record_button\":{\"keywords\":[\"blue-square\"],\"char\":\"⏺\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"play_or_pause_button\":{\"keywords\":[\"blue-square\",\"play\",\"pause\"],\"char\":\"⏯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"previous_track_button\":{\"keywords\":[\"backward\"],\"char\":\"⏮\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"fast_forward\":{\"keywords\":[\"blue-square\",\"play\",\"speed\",\"continue\"],\"char\":\"⏩\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"rewind\":{\"keywords\":[\"play\",\"blue-square\"],\"char\":\"⏪\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"twisted_rightwards_arrows\":{\"keywords\":[\"blue-square\",\"shuffle\",\"music\",\"random\"],\"char\":\"🔀\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"repeat\":{\"keywords\":[\"loop\",\"record\"],\"char\":\"🔁\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"repeat_one\":{\"keywords\":[\"blue-square\",\"loop\"],\"char\":\"🔂\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_backward\":{\"keywords\":[\"blue-square\",\"left\",\"direction\"],\"char\":\"◀️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_up_small\":{\"keywords\":[\"blue-square\",\"triangle\",\"direction\",\"point\",\"forward\",\"top\"],\"char\":\"🔼\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_down_small\":{\"keywords\":[\"blue-square\",\"direction\",\"bottom\"],\"char\":\"🔽\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_double_up\":{\"keywords\":[\"blue-square\",\"direction\",\"top\"],\"char\":\"⏫\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_double_down\":{\"keywords\":[\"blue-square\",\"direction\",\"bottom\"],\"char\":\"⏬\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_right\":{\"keywords\":[\"blue-square\",\"next\"],\"char\":\"➡️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_left\":{\"keywords\":[\"blue-square\",\"previous\",\"back\"],\"char\":\"⬅️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_up\":{\"keywords\":[\"blue-square\",\"continue\",\"top\",\"direction\"],\"char\":\"⬆️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_down\":{\"keywords\":[\"blue-square\",\"direction\",\"bottom\"],\"char\":\"⬇️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_upper_right\":{\"keywords\":[\"blue-square\",\"point\",\"direction\",\"diagonal\",\"northeast\"],\"char\":\"↗️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_lower_right\":{\"keywords\":[\"blue-square\",\"direction\",\"diagonal\",\"southeast\"],\"char\":\"↘️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_lower_left\":{\"keywords\":[\"blue-square\",\"direction\",\"diagonal\",\"southwest\"],\"char\":\"↙️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_upper_left\":{\"keywords\":[\"blue-square\",\"point\",\"direction\",\"diagonal\",\"northwest\"],\"char\":\"↖️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_up_down\":{\"keywords\":[\"blue-square\",\"direction\",\"way\",\"vertical\"],\"char\":\"↕️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"left_right_arrow\":{\"keywords\":[\"shape\",\"direction\",\"horizontal\",\"sideways\"],\"char\":\"↔️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrows_counterclockwise\":{\"keywords\":[\"blue-square\",\"sync\",\"cycle\"],\"char\":\"🔄\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_right_hook\":{\"keywords\":[\"blue-square\",\"return\",\"rotate\",\"direction\"],\"char\":\"↪️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"leftwards_arrow_with_hook\":{\"keywords\":[\"back\",\"return\",\"blue-square\",\"undo\",\"enter\"],\"char\":\"↩️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_heading_up\":{\"keywords\":[\"blue-square\",\"direction\",\"top\"],\"char\":\"⤴️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrow_heading_down\":{\"keywords\":[\"blue-square\",\"direction\",\"bottom\"],\"char\":\"⤵️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"hash\":{\"keywords\":[\"symbol\",\"blue-square\",\"twitter\"],\"char\":\"#️⃣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"information_source\":{\"keywords\":[\"blue-square\",\"alphabet\",\"letter\"],\"char\":\"ℹ️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"abc\":{\"keywords\":[\"blue-square\",\"alphabet\"],\"char\":\"🔤\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"abcd\":{\"keywords\":[\"blue-square\",\"alphabet\"],\"char\":\"🔡\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"capital_abcd\":{\"keywords\":[\"alphabet\",\"words\",\"blue-square\"],\"char\":\"🔠\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"symbols\":{\"keywords\":[\"blue-square\",\"music\",\"note\",\"ampersand\",\"percent\",\"glyphs\",\"characters\"],\"char\":\"🔣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"musical_note\":{\"keywords\":[\"score\",\"tone\",\"sound\"],\"char\":\"🎵\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"notes\":{\"keywords\":[\"music\",\"score\"],\"char\":\"🎶\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"wavy_dash\":{\"keywords\":[\"draw\",\"line\",\"moustache\",\"mustache\",\"squiggle\",\"scribble\"],\"char\":\"〰️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"curly_loop\":{\"keywords\":[\"scribble\",\"draw\",\"shape\",\"squiggle\"],\"char\":\"➰\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_check_mark\":{\"keywords\":[\"ok\",\"nike\",\"answer\",\"yes\",\"tick\"],\"char\":\"✔️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"arrows_clockwise\":{\"keywords\":[\"sync\",\"cycle\",\"round\",\"repeat\"],\"char\":\"🔃\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_plus_sign\":{\"keywords\":[\"math\",\"calculation\",\"addition\",\"more\",\"increase\"],\"char\":\"➕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_minus_sign\":{\"keywords\":[\"math\",\"calculation\",\"subtract\",\"less\"],\"char\":\"➖\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_division_sign\":{\"keywords\":[\"divide\",\"math\",\"calculation\"],\"char\":\"➗\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_multiplication_x\":{\"keywords\":[\"math\",\"calculation\"],\"char\":\"✖️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"infinity\":{\"keywords\":[\"forever\"],\"char\":\"♾\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"heavy_dollar_sign\":{\"keywords\":[\"money\",\"sales\",\"payment\",\"currency\",\"buck\"],\"char\":\"💲\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"currency_exchange\":{\"keywords\":[\"money\",\"sales\",\"dollar\",\"travel\"],\"char\":\"💱\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"copyright\":{\"keywords\":[\"ip\",\"license\",\"circle\",\"law\",\"legal\"],\"char\":\"©️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"registered\":{\"keywords\":[\"alphabet\",\"circle\"],\"char\":\"®️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"tm\":{\"keywords\":[\"trademark\",\"brand\",\"law\",\"legal\"],\"char\":\"™️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"end\":{\"keywords\":[\"words\",\"arrow\"],\"char\":\"🔚\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"back\":{\"keywords\":[\"arrow\",\"words\",\"return\"],\"char\":\"🔙\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"on\":{\"keywords\":[\"arrow\",\"words\"],\"char\":\"🔛\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"top\":{\"keywords\":[\"words\",\"blue-square\"],\"char\":\"🔝\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"soon\":{\"keywords\":[\"arrow\",\"words\"],\"char\":\"🔜\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"ballot_box_with_check\":{\"keywords\":[\"ok\",\"agree\",\"confirm\",\"black-square\",\"vote\",\"election\",\"yes\",\"tick\"],\"char\":\"☑️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"radio_button\":{\"keywords\":[\"input\",\"old\",\"music\",\"circle\"],\"char\":\"🔘\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_circle\":{\"keywords\":[\"shape\",\"round\"],\"char\":\"⚪\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_circle\":{\"keywords\":[\"shape\",\"button\",\"round\"],\"char\":\"⚫\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"red_circle\":{\"keywords\":[\"shape\",\"error\",\"danger\"],\"char\":\"🔴\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"large_blue_circle\":{\"keywords\":[\"shape\",\"icon\",\"button\"],\"char\":\"🔵\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"small_orange_diamond\":{\"keywords\":[\"shape\",\"jewel\",\"gem\"],\"char\":\"🔸\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"small_blue_diamond\":{\"keywords\":[\"shape\",\"jewel\",\"gem\"],\"char\":\"🔹\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"large_orange_diamond\":{\"keywords\":[\"shape\",\"jewel\",\"gem\"],\"char\":\"🔶\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"large_blue_diamond\":{\"keywords\":[\"shape\",\"jewel\",\"gem\"],\"char\":\"🔷\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"small_red_triangle\":{\"keywords\":[\"shape\",\"direction\",\"up\",\"top\"],\"char\":\"🔺\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_small_square\":{\"keywords\":[\"shape\",\"icon\"],\"char\":\"▪️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_small_square\":{\"keywords\":[\"shape\",\"icon\"],\"char\":\"▫️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_large_square\":{\"keywords\":[\"shape\",\"icon\",\"button\"],\"char\":\"⬛\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_large_square\":{\"keywords\":[\"shape\",\"icon\",\"stone\",\"button\"],\"char\":\"⬜\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"small_red_triangle_down\":{\"keywords\":[\"shape\",\"direction\",\"bottom\"],\"char\":\"🔻\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_medium_square\":{\"keywords\":[\"shape\",\"button\",\"icon\"],\"char\":\"◼️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_medium_square\":{\"keywords\":[\"shape\",\"stone\",\"icon\"],\"char\":\"◻️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_medium_small_square\":{\"keywords\":[\"icon\",\"shape\",\"button\"],\"char\":\"◾\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_medium_small_square\":{\"keywords\":[\"shape\",\"stone\",\"icon\",\"button\"],\"char\":\"◽\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_square_button\":{\"keywords\":[\"shape\",\"input\",\"frame\"],\"char\":\"🔲\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"white_square_button\":{\"keywords\":[\"shape\",\"input\"],\"char\":\"🔳\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"speaker\":{\"keywords\":[\"sound\",\"volume\",\"silence\",\"broadcast\"],\"char\":\"🔈\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"sound\":{\"keywords\":[\"volume\",\"speaker\",\"broadcast\"],\"char\":\"🔉\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"loud_sound\":{\"keywords\":[\"volume\",\"noise\",\"noisy\",\"speaker\",\"broadcast\"],\"char\":\"🔊\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"mute\":{\"keywords\":[\"sound\",\"volume\",\"silence\",\"quiet\"],\"char\":\"🔇\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"mega\":{\"keywords\":[\"sound\",\"speaker\",\"volume\"],\"char\":\"📣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"loudspeaker\":{\"keywords\":[\"volume\",\"sound\"],\"char\":\"📢\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"bell\":{\"keywords\":[\"sound\",\"notification\",\"christmas\",\"xmas\",\"chime\"],\"char\":\"🔔\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"no_bell\":{\"keywords\":[\"sound\",\"volume\",\"mute\",\"quiet\",\"silent\"],\"char\":\"🔕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"black_joker\":{\"keywords\":[\"poker\",\"cards\",\"game\",\"play\",\"magic\"],\"char\":\"🃏\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"mahjong\":{\"keywords\":[\"game\",\"play\",\"chinese\",\"kanji\"],\"char\":\"🀄\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"spades\":{\"keywords\":[\"poker\",\"cards\",\"suits\",\"magic\"],\"char\":\"♠️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clubs\":{\"keywords\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"char\":\"♣️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"hearts\":{\"keywords\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"char\":\"♥️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"diamonds\":{\"keywords\":[\"poker\",\"cards\",\"magic\",\"suits\"],\"char\":\"♦️\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"flower_playing_cards\":{\"keywords\":[\"game\",\"sunset\",\"red\"],\"char\":\"🎴\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"thought_balloon\":{\"keywords\":[\"bubble\",\"cloud\",\"speech\",\"thinking\",\"dream\"],\"char\":\"💭\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"right_anger_bubble\":{\"keywords\":[\"caption\",\"speech\",\"thinking\",\"mad\"],\"char\":\"🗯\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"speech_balloon\":{\"keywords\":[\"bubble\",\"words\",\"message\",\"talk\",\"chatting\"],\"char\":\"💬\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"left_speech_bubble\":{\"keywords\":[\"words\",\"message\",\"talk\",\"chatting\"],\"char\":\"🗨\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock1\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕐\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock2\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕑\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock3\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕒\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock4\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕓\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock5\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕔\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock6\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\",\"dawn\",\"dusk\"],\"char\":\"🕕\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock7\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕖\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock8\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕗\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock9\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕘\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock10\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕙\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock11\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕚\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock12\":{\"keywords\":[\"time\",\"noon\",\"midnight\",\"midday\",\"late\",\"early\",\"schedule\"],\"char\":\"🕛\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock130\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕜\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock230\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕝\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock330\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕞\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock430\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕟\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock530\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕠\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock630\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕡\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock730\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕢\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock830\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕣\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock930\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕤\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock1030\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕥\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock1130\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕦\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"clock1230\":{\"keywords\":[\"time\",\"late\",\"early\",\"schedule\"],\"char\":\"🕧\",\"fitzpatrick_scale\":false,\"category\":\"symbols\"},\"afghanistan\":{\"keywords\":[\"af\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"aland_islands\":{\"keywords\":[\"Åland\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇽\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"albania\":{\"keywords\":[\"al\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"algeria\":{\"keywords\":[\"dz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇩🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"american_samoa\":{\"keywords\":[\"american\",\"ws\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"andorra\":{\"keywords\":[\"ad\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"angola\":{\"keywords\":[\"ao\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"anguilla\":{\"keywords\":[\"ai\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"antarctica\":{\"keywords\":[\"aq\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇶\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"antigua_barbuda\":{\"keywords\":[\"antigua\",\"barbuda\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"argentina\":{\"keywords\":[\"ar\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"armenia\":{\"keywords\":[\"am\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"aruba\":{\"keywords\":[\"aw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"australia\":{\"keywords\":[\"au\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"austria\":{\"keywords\":[\"at\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"azerbaijan\":{\"keywords\":[\"az\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bahamas\":{\"keywords\":[\"bs\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bahrain\":{\"keywords\":[\"bh\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bangladesh\":{\"keywords\":[\"bd\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"barbados\":{\"keywords\":[\"bb\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇧\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"belarus\":{\"keywords\":[\"by\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"belgium\":{\"keywords\":[\"be\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"belize\":{\"keywords\":[\"bz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"benin\":{\"keywords\":[\"bj\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇯\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bermuda\":{\"keywords\":[\"bm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bhutan\":{\"keywords\":[\"bt\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bolivia\":{\"keywords\":[\"bo\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"caribbean_netherlands\":{\"keywords\":[\"bonaire\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇶\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bosnia_herzegovina\":{\"keywords\":[\"bosnia\",\"herzegovina\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"botswana\":{\"keywords\":[\"bw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"brazil\":{\"keywords\":[\"br\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"british_indian_ocean_territory\":{\"keywords\":[\"british\",\"indian\",\"ocean\",\"territory\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"british_virgin_islands\":{\"keywords\":[\"british\",\"virgin\",\"islands\",\"bvi\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"brunei\":{\"keywords\":[\"bn\",\"darussalam\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"bulgaria\":{\"keywords\":[\"bg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"burkina_faso\":{\"keywords\":[\"burkina\",\"faso\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"burundi\":{\"keywords\":[\"bi\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cape_verde\":{\"keywords\":[\"cabo\",\"verde\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇻\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cambodia\":{\"keywords\":[\"kh\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cameroon\":{\"keywords\":[\"cm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"canada\":{\"keywords\":[\"ca\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"canary_islands\":{\"keywords\":[\"canary\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cayman_islands\":{\"keywords\":[\"cayman\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"central_african_republic\":{\"keywords\":[\"central\",\"african\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"chad\":{\"keywords\":[\"td\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"chile\":{\"keywords\":[\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cn\":{\"keywords\":[\"china\",\"chinese\",\"prc\",\"flag\",\"country\",\"nation\",\"banner\"],\"char\":\"🇨🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"christmas_island\":{\"keywords\":[\"christmas\",\"island\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇽\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cocos_islands\":{\"keywords\":[\"cocos\",\"keeling\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"colombia\":{\"keywords\":[\"co\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"comoros\":{\"keywords\":[\"km\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"congo_brazzaville\":{\"keywords\":[\"congo\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"congo_kinshasa\":{\"keywords\":[\"congo\",\"democratic\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cook_islands\":{\"keywords\":[\"cook\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"costa_rica\":{\"keywords\":[\"costa\",\"rica\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"croatia\":{\"keywords\":[\"hr\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇭🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cuba\":{\"keywords\":[\"cu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"curacao\":{\"keywords\":[\"curaçao\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cyprus\":{\"keywords\":[\"cy\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"czech_republic\":{\"keywords\":[\"cz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"denmark\":{\"keywords\":[\"dk\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇩🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"djibouti\":{\"keywords\":[\"dj\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇩🇯\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"dominica\":{\"keywords\":[\"dm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇩🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"dominican_republic\":{\"keywords\":[\"dominican\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇩🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"ecuador\":{\"keywords\":[\"ec\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"egypt\":{\"keywords\":[\"eg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"el_salvador\":{\"keywords\":[\"el\",\"salvador\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇻\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"equatorial_guinea\":{\"keywords\":[\"equatorial\",\"gn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇶\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"eritrea\":{\"keywords\":[\"er\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"estonia\":{\"keywords\":[\"ee\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"ethiopia\":{\"keywords\":[\"et\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"eu\":{\"keywords\":[\"european\",\"union\",\"flag\",\"banner\"],\"char\":\"🇪🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"falkland_islands\":{\"keywords\":[\"falkland\",\"islands\",\"malvinas\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇫🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"faroe_islands\":{\"keywords\":[\"faroe\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇫🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"fiji\":{\"keywords\":[\"fj\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇫🇯\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"finland\":{\"keywords\":[\"fi\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇫🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"fr\":{\"keywords\":[\"banner\",\"flag\",\"nation\",\"france\",\"french\",\"country\"],\"char\":\"🇫🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"french_guiana\":{\"keywords\":[\"french\",\"guiana\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"french_polynesia\":{\"keywords\":[\"french\",\"polynesia\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"french_southern_territories\":{\"keywords\":[\"french\",\"southern\",\"territories\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"gabon\":{\"keywords\":[\"ga\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"gambia\":{\"keywords\":[\"gm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"georgia\":{\"keywords\":[\"ge\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"de\":{\"keywords\":[\"german\",\"nation\",\"flag\",\"country\",\"banner\"],\"char\":\"🇩🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"ghana\":{\"keywords\":[\"gh\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"gibraltar\":{\"keywords\":[\"gi\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"greece\":{\"keywords\":[\"gr\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"greenland\":{\"keywords\":[\"gl\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"grenada\":{\"keywords\":[\"gd\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guadeloupe\":{\"keywords\":[\"gp\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇵\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guam\":{\"keywords\":[\"gu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guatemala\":{\"keywords\":[\"gt\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guernsey\":{\"keywords\":[\"gg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guinea\":{\"keywords\":[\"gn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guinea_bissau\":{\"keywords\":[\"gw\",\"bissau\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"guyana\":{\"keywords\":[\"gy\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"haiti\":{\"keywords\":[\"ht\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇭🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"honduras\":{\"keywords\":[\"hn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇭🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"hong_kong\":{\"keywords\":[\"hong\",\"kong\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇭🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"hungary\":{\"keywords\":[\"hu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇭🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"iceland\":{\"keywords\":[\"is\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"india\":{\"keywords\":[\"in\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"indonesia\":{\"keywords\":[\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"iran\":{\"keywords\":[\"iran,\",\"islamic\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"iraq\":{\"keywords\":[\"iq\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇶\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"ireland\":{\"keywords\":[\"ie\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"isle_of_man\":{\"keywords\":[\"isle\",\"man\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"israel\":{\"keywords\":[\"il\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"it\":{\"keywords\":[\"italy\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇮🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"cote_divoire\":{\"keywords\":[\"ivory\",\"coast\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"jamaica\":{\"keywords\":[\"jm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇯🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"jp\":{\"keywords\":[\"japanese\",\"nation\",\"flag\",\"country\",\"banner\"],\"char\":\"🇯🇵\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"jersey\":{\"keywords\":[\"je\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇯🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"jordan\":{\"keywords\":[\"jo\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇯🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kazakhstan\":{\"keywords\":[\"kz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kenya\":{\"keywords\":[\"ke\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kiribati\":{\"keywords\":[\"ki\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kosovo\":{\"keywords\":[\"xk\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇽🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kuwait\":{\"keywords\":[\"kw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kyrgyzstan\":{\"keywords\":[\"kg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"laos\":{\"keywords\":[\"lao\",\"democratic\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"latvia\":{\"keywords\":[\"lv\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇻\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"lebanon\":{\"keywords\":[\"lb\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇧\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"lesotho\":{\"keywords\":[\"ls\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"liberia\":{\"keywords\":[\"lr\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"libya\":{\"keywords\":[\"ly\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"liechtenstein\":{\"keywords\":[\"li\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"lithuania\":{\"keywords\":[\"lt\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"luxembourg\":{\"keywords\":[\"lu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"macau\":{\"keywords\":[\"macao\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"macedonia\":{\"keywords\":[\"macedonia,\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"madagascar\":{\"keywords\":[\"mg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"malawi\":{\"keywords\":[\"mw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"malaysia\":{\"keywords\":[\"my\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"maldives\":{\"keywords\":[\"mv\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇻\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mali\":{\"keywords\":[\"ml\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"malta\":{\"keywords\":[\"mt\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"marshall_islands\":{\"keywords\":[\"marshall\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"martinique\":{\"keywords\":[\"mq\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇶\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mauritania\":{\"keywords\":[\"mr\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mauritius\":{\"keywords\":[\"mu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mayotte\":{\"keywords\":[\"yt\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇾🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mexico\":{\"keywords\":[\"mx\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇽\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"micronesia\":{\"keywords\":[\"micronesia,\",\"federated\",\"states\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇫🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"moldova\":{\"keywords\":[\"moldova,\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"monaco\":{\"keywords\":[\"mc\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mongolia\":{\"keywords\":[\"mn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"montenegro\":{\"keywords\":[\"me\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"montserrat\":{\"keywords\":[\"ms\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"morocco\":{\"keywords\":[\"ma\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"mozambique\":{\"keywords\":[\"mz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"myanmar\":{\"keywords\":[\"mm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"namibia\":{\"keywords\":[\"na\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"nauru\":{\"keywords\":[\"nr\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"nepal\":{\"keywords\":[\"np\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇵\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"netherlands\":{\"keywords\":[\"nl\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"new_caledonia\":{\"keywords\":[\"new\",\"caledonia\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"new_zealand\":{\"keywords\":[\"new\",\"zealand\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"nicaragua\":{\"keywords\":[\"ni\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"niger\":{\"keywords\":[\"ne\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"nigeria\":{\"keywords\":[\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"niue\":{\"keywords\":[\"nu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"norfolk_island\":{\"keywords\":[\"norfolk\",\"island\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"northern_mariana_islands\":{\"keywords\":[\"northern\",\"mariana\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇲🇵\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"north_korea\":{\"keywords\":[\"north\",\"korea\",\"nation\",\"flag\",\"country\",\"banner\"],\"char\":\"🇰🇵\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"norway\":{\"keywords\":[\"no\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇳🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"oman\":{\"keywords\":[\"om_symbol\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇴🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"pakistan\":{\"keywords\":[\"pk\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"palau\":{\"keywords\":[\"pw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"palestinian_territories\":{\"keywords\":[\"palestine\",\"palestinian\",\"territories\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"panama\":{\"keywords\":[\"pa\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"papua_new_guinea\":{\"keywords\":[\"papua\",\"new\",\"guinea\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"paraguay\":{\"keywords\":[\"py\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"peru\":{\"keywords\":[\"pe\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"philippines\":{\"keywords\":[\"ph\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"pitcairn_islands\":{\"keywords\":[\"pitcairn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"poland\":{\"keywords\":[\"pl\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"portugal\":{\"keywords\":[\"pt\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"puerto_rico\":{\"keywords\":[\"puerto\",\"rico\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"qatar\":{\"keywords\":[\"qa\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇶🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"reunion\":{\"keywords\":[\"réunion\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇷🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"romania\":{\"keywords\":[\"ro\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇷🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"ru\":{\"keywords\":[\"russian\",\"federation\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇷🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"rwanda\":{\"keywords\":[\"rw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇷🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"st_barthelemy\":{\"keywords\":[\"saint\",\"barthélemy\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇧🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"st_helena\":{\"keywords\":[\"saint\",\"helena\",\"ascension\",\"tristan\",\"cunha\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"st_kitts_nevis\":{\"keywords\":[\"saint\",\"kitts\",\"nevis\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇰🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"st_lucia\":{\"keywords\":[\"saint\",\"lucia\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"st_pierre_miquelon\":{\"keywords\":[\"saint\",\"pierre\",\"miquelon\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇵🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"st_vincent_grenadines\":{\"keywords\":[\"saint\",\"vincent\",\"grenadines\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"samoa\":{\"keywords\":[\"ws\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇼🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"san_marino\":{\"keywords\":[\"san\",\"marino\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"sao_tome_principe\":{\"keywords\":[\"sao\",\"tome\",\"principe\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"saudi_arabia\":{\"keywords\":[\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"senegal\":{\"keywords\":[\"sn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"serbia\":{\"keywords\":[\"rs\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇷🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"seychelles\":{\"keywords\":[\"sc\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"sierra_leone\":{\"keywords\":[\"sierra\",\"leone\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"singapore\":{\"keywords\":[\"sg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"sint_maarten\":{\"keywords\":[\"sint\",\"maarten\",\"dutch\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇽\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"slovakia\":{\"keywords\":[\"sk\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"slovenia\":{\"keywords\":[\"si\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"solomon_islands\":{\"keywords\":[\"solomon\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇧\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"somalia\":{\"keywords\":[\"so\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"south_africa\":{\"keywords\":[\"south\",\"africa\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇿🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"south_georgia_south_sandwich_islands\":{\"keywords\":[\"south\",\"georgia\",\"sandwich\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇬🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"kr\":{\"keywords\":[\"south\",\"korea\",\"nation\",\"flag\",\"country\",\"banner\"],\"char\":\"🇰🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"south_sudan\":{\"keywords\":[\"south\",\"sd\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"es\":{\"keywords\":[\"spain\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"sri_lanka\":{\"keywords\":[\"sri\",\"lanka\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇱🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"sudan\":{\"keywords\":[\"sd\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇩\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"suriname\":{\"keywords\":[\"sr\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"swaziland\":{\"keywords\":[\"sz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"sweden\":{\"keywords\":[\"se\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"switzerland\":{\"keywords\":[\"ch\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇨🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"syria\":{\"keywords\":[\"syrian\",\"arab\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇸🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"taiwan\":{\"keywords\":[\"tw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tajikistan\":{\"keywords\":[\"tj\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇯\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tanzania\":{\"keywords\":[\"tanzania,\",\"united\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"thailand\":{\"keywords\":[\"th\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"timor_leste\":{\"keywords\":[\"timor\",\"leste\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇱\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"togo\":{\"keywords\":[\"tg\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tokelau\":{\"keywords\":[\"tk\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇰\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tonga\":{\"keywords\":[\"to\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇴\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"trinidad_tobago\":{\"keywords\":[\"trinidad\",\"tobago\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇹\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tunisia\":{\"keywords\":[\"tn\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tr\":{\"keywords\":[\"turkey\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇷\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"turkmenistan\":{\"keywords\":[\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"turks_caicos_islands\":{\"keywords\":[\"turks\",\"caicos\",\"islands\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇨\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"tuvalu\":{\"keywords\":[\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇹🇻\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"uganda\":{\"keywords\":[\"ug\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇺🇬\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"ukraine\":{\"keywords\":[\"ua\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇺🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"united_arab_emirates\":{\"keywords\":[\"united\",\"arab\",\"emirates\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇦🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"uk\":{\"keywords\":[\"united\",\"kingdom\",\"great\",\"britain\",\"northern\",\"ireland\",\"flag\",\"nation\",\"country\",\"banner\",\"british\",\"UK\",\"english\",\"england\",\"union jack\"],\"char\":\"🇬🇧\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"england\":{\"keywords\":[\"flag\",\"english\"],\"char\":\"🏴󠁧󠁢󠁥󠁮󠁧󠁿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"scotland\":{\"keywords\":[\"flag\",\"scottish\"],\"char\":\"🏴󠁧󠁢󠁳󠁣󠁴󠁿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"wales\":{\"keywords\":[\"flag\",\"welsh\"],\"char\":\"🏴󠁧󠁢󠁷󠁬󠁳󠁿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"us\":{\"keywords\":[\"united\",\"states\",\"america\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇺🇸\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"us_virgin_islands\":{\"keywords\":[\"virgin\",\"islands\",\"us\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇮\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"uruguay\":{\"keywords\":[\"uy\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇺🇾\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"uzbekistan\":{\"keywords\":[\"uz\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇺🇿\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"vanuatu\":{\"keywords\":[\"vu\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇺\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"vatican_city\":{\"keywords\":[\"vatican\",\"city\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇦\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"venezuela\":{\"keywords\":[\"ve\",\"bolivarian\",\"republic\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"vietnam\":{\"keywords\":[\"viet\",\"nam\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇻🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"wallis_futuna\":{\"keywords\":[\"wallis\",\"futuna\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇼🇫\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"western_sahara\":{\"keywords\":[\"western\",\"sahara\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇪🇭\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"yemen\":{\"keywords\":[\"ye\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇾🇪\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"zambia\":{\"keywords\":[\"zm\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇿🇲\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"zimbabwe\":{\"keywords\":[\"zw\",\"flag\",\"nation\",\"country\",\"banner\"],\"char\":\"🇿🇼\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"united_nations\":{\"keywords\":[\"un\",\"flag\",\"banner\"],\"char\":\"🇺🇳\",\"fitzpatrick_scale\":false,\"category\":\"flags\"},\"pirate_flag\":{\"keywords\":[\"skull\",\"crossbones\",\"flag\",\"banner\"],\"char\":\"🏴‍☠️\",\"fitzpatrick_scale\":false,\"category\":\"flags\"}}");

/***/ }),

/***/ "./node_modules/emojilib/index.js":
/*!****************************************!*\
  !*** ./node_modules/emojilib/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  lib: __webpack_require__(/*! ./emojis */ "./node_modules/emojilib/emojis.json"),
  ordered: __webpack_require__(/*! ./ordered */ "./node_modules/emojilib/ordered.json"),
  fitzpatrick_scale_modifiers: ["🏻", "🏼", "🏽", "🏾", "🏿"]
}


/***/ }),

/***/ "./node_modules/emojilib/ordered.json":
/*!********************************************!*\
  !*** ./node_modules/emojilib/ordered.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"grinning\",\"smiley\",\"smile\",\"grin\",\"laughing\",\"sweat_smile\",\"joy\",\"rofl\",\"relaxed\",\"blush\",\"innocent\",\"slightly_smiling_face\",\"upside_down_face\",\"wink\",\"relieved\",\"heart_eyes\",\"smiling_face_with_three_hearts\",\"kissing_heart\",\"kissing\",\"kissing_smiling_eyes\",\"kissing_closed_eyes\",\"yum\",\"stuck_out_tongue\",\"stuck_out_tongue_closed_eyes\",\"stuck_out_tongue_winking_eye\",\"zany\",\"raised_eyebrow\",\"monocle\",\"nerd_face\",\"sunglasses\",\"star_struck\",\"partying\",\"smirk\",\"unamused\",\"disappointed\",\"pensive\",\"worried\",\"confused\",\"slightly_frowning_face\",\"frowning_face\",\"persevere\",\"confounded\",\"tired_face\",\"weary\",\"pleading\",\"cry\",\"sob\",\"triumph\",\"angry\",\"rage\",\"symbols_over_mouth\",\"exploding_head\",\"flushed\",\"hot\",\"cold\",\"scream\",\"fearful\",\"cold_sweat\",\"disappointed_relieved\",\"sweat\",\"hugs\",\"thinking\",\"hand_over_mouth\",\"shushing\",\"lying_face\",\"no_mouth\",\"neutral_face\",\"expressionless\",\"grimacing\",\"roll_eyes\",\"hushed\",\"frowning\",\"anguished\",\"open_mouth\",\"astonished\",\"sleeping\",\"drooling_face\",\"sleepy\",\"dizzy_face\",\"zipper_mouth_face\",\"woozy\",\"nauseated_face\",\"vomiting\",\"sneezing_face\",\"mask\",\"face_with_thermometer\",\"face_with_head_bandage\",\"money_mouth_face\",\"cowboy_hat_face\",\"smiling_imp\",\"imp\",\"japanese_ogre\",\"japanese_goblin\",\"clown_face\",\"poop\",\"ghost\",\"skull\",\"skull_and_crossbones\",\"alien\",\"space_invader\",\"robot\",\"jack_o_lantern\",\"smiley_cat\",\"smile_cat\",\"joy_cat\",\"heart_eyes_cat\",\"smirk_cat\",\"kissing_cat\",\"scream_cat\",\"crying_cat_face\",\"pouting_cat\",\"palms_up\",\"open_hands\",\"raised_hands\",\"clap\",\"handshake\",\"+1\",\"-1\",\"facepunch\",\"fist\",\"fist_left\",\"fist_right\",\"crossed_fingers\",\"v\",\"love_you\",\"metal\",\"ok_hand\",\"point_left\",\"point_right\",\"point_up\",\"point_down\",\"point_up_2\",\"raised_hand\",\"raised_back_of_hand\",\"raised_hand_with_fingers_splayed\",\"vulcan_salute\",\"wave\",\"call_me_hand\",\"muscle\",\"fu\",\"writing_hand\",\"pray\",\"foot\",\"leg\",\"ring\",\"lipstick\",\"kiss\",\"lips\",\"tooth\",\"tongue\",\"ear\",\"nose\",\"footprints\",\"eye\",\"eyes\",\"brain\",\"speaking_head\",\"bust_in_silhouette\",\"busts_in_silhouette\",\"baby\",\"girl\",\"child\",\"boy\",\"woman\",\"adult\",\"man\",\"blonde_woman\",\"blonde_man\",\"bearded_person\",\"older_woman\",\"older_adult\",\"older_man\",\"man_with_gua_pi_mao\",\"woman_with_headscarf\",\"woman_with_turban\",\"man_with_turban\",\"policewoman\",\"policeman\",\"construction_worker_woman\",\"construction_worker_man\",\"guardswoman\",\"guardsman\",\"female_detective\",\"male_detective\",\"woman_health_worker\",\"man_health_worker\",\"woman_farmer\",\"man_farmer\",\"woman_cook\",\"man_cook\",\"woman_student\",\"man_student\",\"woman_singer\",\"man_singer\",\"woman_teacher\",\"man_teacher\",\"woman_factory_worker\",\"man_factory_worker\",\"woman_technologist\",\"man_technologist\",\"woman_office_worker\",\"man_office_worker\",\"woman_mechanic\",\"man_mechanic\",\"woman_scientist\",\"man_scientist\",\"woman_artist\",\"man_artist\",\"woman_firefighter\",\"man_firefighter\",\"woman_pilot\",\"man_pilot\",\"woman_astronaut\",\"man_astronaut\",\"woman_judge\",\"man_judge\",\"bride_with_veil\",\"man_in_tuxedo\",\"princess\",\"prince\",\"woman_superhero\",\"man_superhero\",\"woman_supervillain\",\"man_supervillain\",\"mrs_claus\",\"santa\",\"sorceress\",\"wizard\",\"woman_elf\",\"man_elf\",\"woman_vampire\",\"man_vampire\",\"woman_zombie\",\"man_zombie\",\"woman_genie\",\"man_genie\",\"mermaid\",\"merman\",\"woman_fairy\",\"man_fairy\",\"angel\",\"pregnant_woman\",\"breastfeeding\",\"bowing_woman\",\"bowing_man\",\"tipping_hand_woman\",\"tipping_hand_man\",\"no_good_woman\",\"no_good_man\",\"ok_woman\",\"ok_man\",\"raising_hand_woman\",\"raising_hand_man\",\"woman_facepalming\",\"man_facepalming\",\"woman_shrugging\",\"man_shrugging\",\"pouting_woman\",\"pouting_man\",\"frowning_woman\",\"frowning_man\",\"haircut_woman\",\"haircut_man\",\"massage_woman\",\"massage_man\",\"woman_in_steamy_room\",\"man_in_steamy_room\",\"nail_care\",\"selfie\",\"dancer\",\"man_dancing\",\"dancing_women\",\"dancing_men\",\"business_suit_levitating\",\"walking_woman\",\"walking_man\",\"running_woman\",\"running_man\",\"couple\",\"two_women_holding_hands\",\"two_men_holding_hands\",\"couple_with_heart_woman_man\",\"couple_with_heart_woman_woman\",\"couple_with_heart_man_man\",\"couplekiss_man_woman\",\"couplekiss_woman_woman\",\"couplekiss_man_man\",\"family_man_woman_boy\",\"family_man_woman_girl\",\"family_man_woman_girl_boy\",\"family_man_woman_boy_boy\",\"family_man_woman_girl_girl\",\"family_woman_woman_boy\",\"family_woman_woman_girl\",\"family_woman_woman_girl_boy\",\"family_woman_woman_boy_boy\",\"family_woman_woman_girl_girl\",\"family_man_man_boy\",\"family_man_man_girl\",\"family_man_man_girl_boy\",\"family_man_man_boy_boy\",\"family_man_man_girl_girl\",\"family_woman_boy\",\"family_woman_girl\",\"family_woman_girl_boy\",\"family_woman_boy_boy\",\"family_woman_girl_girl\",\"family_man_boy\",\"family_man_girl\",\"family_man_girl_boy\",\"family_man_boy_boy\",\"family_man_girl_girl\",\"yarn\",\"thread\",\"coat\",\"labcoat\",\"womans_clothes\",\"tshirt\",\"jeans\",\"necktie\",\"dress\",\"bikini\",\"kimono\",\"flat_shoe\",\"high_heel\",\"sandal\",\"boot\",\"mans_shoe\",\"athletic_shoe\",\"hiking_boot\",\"socks\",\"gloves\",\"scarf\",\"tophat\",\"billed_hat\",\"womans_hat\",\"mortar_board\",\"rescue_worker_helmet\",\"crown\",\"pouch\",\"purse\",\"handbag\",\"briefcase\",\"school_satchel\",\"luggage\",\"eyeglasses\",\"dark_sunglasses\",\"goggles\",\"closed_umbrella\",\"dog\",\"cat\",\"mouse\",\"hamster\",\"rabbit\",\"fox_face\",\"bear\",\"panda_face\",\"koala\",\"tiger\",\"lion\",\"cow\",\"pig\",\"pig_nose\",\"frog\",\"monkey_face\",\"see_no_evil\",\"hear_no_evil\",\"speak_no_evil\",\"monkey\",\"chicken\",\"penguin\",\"bird\",\"baby_chick\",\"hatching_chick\",\"hatched_chick\",\"duck\",\"eagle\",\"owl\",\"bat\",\"wolf\",\"boar\",\"horse\",\"unicorn\",\"honeybee\",\"bug\",\"butterfly\",\"snail\",\"shell\",\"beetle\",\"ant\",\"mosquito\",\"grasshopper\",\"spider\",\"spider_web\",\"scorpion\",\"turtle\",\"snake\",\"lizard\",\"t-rex\",\"sauropod\",\"octopus\",\"squid\",\"shrimp\",\"lobster\",\"crab\",\"blowfish\",\"tropical_fish\",\"fish\",\"dolphin\",\"whale\",\"whale2\",\"shark\",\"crocodile\",\"tiger2\",\"leopard\",\"zebra\",\"gorilla\",\"elephant\",\"hippopotamus\",\"rhinoceros\",\"dromedary_camel\",\"giraffe\",\"kangaroo\",\"camel\",\"water_buffalo\",\"ox\",\"cow2\",\"racehorse\",\"pig2\",\"ram\",\"sheep\",\"llama\",\"goat\",\"deer\",\"dog2\",\"poodle\",\"cat2\",\"rooster\",\"turkey\",\"peacock\",\"parrot\",\"swan\",\"dove\",\"rabbit2\",\"raccoon\",\"badger\",\"rat\",\"mouse2\",\"chipmunk\",\"hedgehog\",\"paw_prints\",\"dragon\",\"dragon_face\",\"cactus\",\"christmas_tree\",\"evergreen_tree\",\"deciduous_tree\",\"palm_tree\",\"seedling\",\"herb\",\"shamrock\",\"four_leaf_clover\",\"bamboo\",\"tanabata_tree\",\"leaves\",\"fallen_leaf\",\"maple_leaf\",\"ear_of_rice\",\"hibiscus\",\"sunflower\",\"rose\",\"wilted_flower\",\"tulip\",\"blossom\",\"cherry_blossom\",\"bouquet\",\"mushroom\",\"earth_americas\",\"earth_africa\",\"earth_asia\",\"full_moon\",\"waning_gibbous_moon\",\"last_quarter_moon\",\"waning_crescent_moon\",\"new_moon\",\"waxing_crescent_moon\",\"first_quarter_moon\",\"waxing_gibbous_moon\",\"new_moon_with_face\",\"full_moon_with_face\",\"first_quarter_moon_with_face\",\"last_quarter_moon_with_face\",\"sun_with_face\",\"crescent_moon\",\"star\",\"star2\",\"dizzy\",\"sparkles\",\"comet\",\"sunny\",\"sun_behind_small_cloud\",\"partly_sunny\",\"sun_behind_large_cloud\",\"sun_behind_rain_cloud\",\"cloud\",\"cloud_with_rain\",\"cloud_with_lightning_and_rain\",\"cloud_with_lightning\",\"zap\",\"fire\",\"boom\",\"snowflake\",\"cloud_with_snow\",\"snowman\",\"snowman_with_snow\",\"wind_face\",\"dash\",\"tornado\",\"fog\",\"open_umbrella\",\"umbrella\",\"droplet\",\"sweat_drops\",\"ocean\",\"green_apple\",\"apple\",\"pear\",\"tangerine\",\"lemon\",\"banana\",\"watermelon\",\"grapes\",\"strawberry\",\"melon\",\"cherries\",\"peach\",\"mango\",\"pineapple\",\"coconut\",\"kiwi_fruit\",\"tomato\",\"eggplant\",\"avocado\",\"broccoli\",\"leafy_greens\",\"cucumber\",\"hot_pepper\",\"corn\",\"carrot\",\"potato\",\"sweet_potato\",\"croissant\",\"bagel\",\"bread\",\"baguette_bread\",\"pretzel\",\"cheese\",\"egg\",\"fried_egg\",\"pancakes\",\"bacon\",\"steak\",\"poultry_leg\",\"meat_on_bone\",\"bone\",\"hotdog\",\"hamburger\",\"fries\",\"pizza\",\"sandwich\",\"stuffed_flatbread\",\"taco\",\"burrito\",\"green_salad\",\"shallow_pan_of_food\",\"canned_food\",\"spaghetti\",\"ramen\",\"stew\",\"curry\",\"sushi\",\"bento\",\"fried_shrimp\",\"rice_ball\",\"rice\",\"rice_cracker\",\"fish_cake\",\"fortune_cookie\",\"moon_cake\",\"oden\",\"dango\",\"shaved_ice\",\"ice_cream\",\"icecream\",\"pie\",\"cupcake\",\"cake\",\"birthday\",\"custard\",\"lollipop\",\"candy\",\"chocolate_bar\",\"popcorn\",\"doughnut\",\"dumpling\",\"cookie\",\"chestnut\",\"peanuts\",\"honey_pot\",\"milk_glass\",\"baby_bottle\",\"coffee\",\"tea\",\"cup_with_straw\",\"sake\",\"beer\",\"beers\",\"clinking_glasses\",\"wine_glass\",\"tumbler_glass\",\"cocktail\",\"tropical_drink\",\"champagne\",\"spoon\",\"fork_and_knife\",\"plate_with_cutlery\",\"bowl_with_spoon\",\"takeout_box\",\"chopsticks\",\"salt\",\"soccer\",\"basketball\",\"football\",\"baseball\",\"softball\",\"tennis\",\"volleyball\",\"rugby_football\",\"flying_disc\",\"8ball\",\"golf\",\"golfing_woman\",\"golfing_man\",\"ping_pong\",\"badminton\",\"goal_net\",\"ice_hockey\",\"field_hockey\",\"lacrosse\",\"cricket\",\"ski\",\"skier\",\"snowboarder\",\"person_fencing\",\"women_wrestling\",\"men_wrestling\",\"woman_cartwheeling\",\"man_cartwheeling\",\"woman_playing_handball\",\"man_playing_handball\",\"ice_skate\",\"curling_stone\",\"skateboard\",\"sled\",\"bow_and_arrow\",\"fishing_pole_and_fish\",\"boxing_glove\",\"martial_arts_uniform\",\"rowing_woman\",\"rowing_man\",\"climbing_woman\",\"climbing_man\",\"swimming_woman\",\"swimming_man\",\"woman_playing_water_polo\",\"man_playing_water_polo\",\"woman_in_lotus_position\",\"man_in_lotus_position\",\"surfing_woman\",\"surfing_man\",\"basketball_woman\",\"basketball_man\",\"weight_lifting_woman\",\"weight_lifting_man\",\"biking_woman\",\"biking_man\",\"mountain_biking_woman\",\"mountain_biking_man\",\"horse_racing\",\"trophy\",\"running_shirt_with_sash\",\"medal_sports\",\"medal_military\",\"1st_place_medal\",\"2nd_place_medal\",\"3rd_place_medal\",\"reminder_ribbon\",\"rosette\",\"ticket\",\"tickets\",\"performing_arts\",\"art\",\"circus_tent\",\"woman_juggling\",\"man_juggling\",\"microphone\",\"headphones\",\"musical_score\",\"musical_keyboard\",\"drum\",\"saxophone\",\"trumpet\",\"guitar\",\"violin\",\"clapper\",\"video_game\",\"dart\",\"game_die\",\"chess_pawn\",\"slot_machine\",\"jigsaw\",\"bowling\",\"red_car\",\"taxi\",\"blue_car\",\"bus\",\"trolleybus\",\"racing_car\",\"police_car\",\"ambulance\",\"fire_engine\",\"minibus\",\"truck\",\"articulated_lorry\",\"tractor\",\"kick_scooter\",\"motorcycle\",\"bike\",\"motor_scooter\",\"rotating_light\",\"oncoming_police_car\",\"oncoming_bus\",\"oncoming_automobile\",\"oncoming_taxi\",\"aerial_tramway\",\"mountain_cableway\",\"suspension_railway\",\"railway_car\",\"train\",\"monorail\",\"bullettrain_side\",\"bullettrain_front\",\"light_rail\",\"mountain_railway\",\"steam_locomotive\",\"train2\",\"metro\",\"tram\",\"station\",\"flying_saucer\",\"helicopter\",\"small_airplane\",\"airplane\",\"flight_departure\",\"flight_arrival\",\"sailboat\",\"motor_boat\",\"speedboat\",\"ferry\",\"passenger_ship\",\"rocket\",\"artificial_satellite\",\"seat\",\"canoe\",\"anchor\",\"construction\",\"fuelpump\",\"busstop\",\"vertical_traffic_light\",\"traffic_light\",\"ship\",\"ferris_wheel\",\"roller_coaster\",\"carousel_horse\",\"building_construction\",\"foggy\",\"tokyo_tower\",\"factory\",\"fountain\",\"rice_scene\",\"mountain\",\"mountain_snow\",\"mount_fuji\",\"volcano\",\"japan\",\"camping\",\"tent\",\"national_park\",\"motorway\",\"railway_track\",\"sunrise\",\"sunrise_over_mountains\",\"desert\",\"beach_umbrella\",\"desert_island\",\"city_sunrise\",\"city_sunset\",\"cityscape\",\"night_with_stars\",\"bridge_at_night\",\"milky_way\",\"stars\",\"sparkler\",\"fireworks\",\"rainbow\",\"houses\",\"european_castle\",\"japanese_castle\",\"stadium\",\"statue_of_liberty\",\"house\",\"house_with_garden\",\"derelict_house\",\"office\",\"department_store\",\"post_office\",\"european_post_office\",\"hospital\",\"bank\",\"hotel\",\"convenience_store\",\"school\",\"love_hotel\",\"wedding\",\"classical_building\",\"church\",\"mosque\",\"synagogue\",\"kaaba\",\"shinto_shrine\",\"watch\",\"iphone\",\"calling\",\"computer\",\"keyboard\",\"desktop_computer\",\"printer\",\"computer_mouse\",\"trackball\",\"joystick\",\"clamp\",\"minidisc\",\"floppy_disk\",\"cd\",\"dvd\",\"vhs\",\"camera\",\"camera_flash\",\"video_camera\",\"movie_camera\",\"film_projector\",\"film_strip\",\"telephone_receiver\",\"phone\",\"pager\",\"fax\",\"tv\",\"radio\",\"studio_microphone\",\"level_slider\",\"control_knobs\",\"compass\",\"stopwatch\",\"timer_clock\",\"alarm_clock\",\"mantelpiece_clock\",\"hourglass_flowing_sand\",\"hourglass\",\"satellite\",\"battery\",\"electric_plug\",\"bulb\",\"flashlight\",\"candle\",\"fire_extinguisher\",\"wastebasket\",\"oil_drum\",\"money_with_wings\",\"dollar\",\"yen\",\"euro\",\"pound\",\"moneybag\",\"credit_card\",\"gem\",\"balance_scale\",\"toolbox\",\"wrench\",\"hammer\",\"hammer_and_pick\",\"hammer_and_wrench\",\"pick\",\"nut_and_bolt\",\"gear\",\"brick\",\"chains\",\"magnet\",\"gun\",\"bomb\",\"firecracker\",\"hocho\",\"dagger\",\"crossed_swords\",\"shield\",\"smoking\",\"coffin\",\"funeral_urn\",\"amphora\",\"crystal_ball\",\"prayer_beads\",\"nazar_amulet\",\"barber\",\"alembic\",\"telescope\",\"microscope\",\"hole\",\"pill\",\"syringe\",\"dna\",\"microbe\",\"petri_dish\",\"test_tube\",\"thermometer\",\"broom\",\"basket\",\"toilet_paper\",\"label\",\"bookmark\",\"toilet\",\"shower\",\"bathtub\",\"bath\",\"soap\",\"sponge\",\"lotion_bottle\",\"key\",\"old_key\",\"couch_and_lamp\",\"sleeping_bed\",\"bed\",\"door\",\"bellhop_bell\",\"teddy_bear\",\"framed_picture\",\"world_map\",\"parasol_on_ground\",\"moyai\",\"shopping\",\"shopping_cart\",\"balloon\",\"flags\",\"ribbon\",\"gift\",\"confetti_ball\",\"tada\",\"dolls\",\"wind_chime\",\"crossed_flags\",\"izakaya_lantern\",\"red_envelope\",\"email\",\"envelope_with_arrow\",\"incoming_envelope\",\"e-mail\",\"love_letter\",\"postbox\",\"mailbox_closed\",\"mailbox\",\"mailbox_with_mail\",\"mailbox_with_no_mail\",\"package\",\"postal_horn\",\"inbox_tray\",\"outbox_tray\",\"scroll\",\"page_with_curl\",\"bookmark_tabs\",\"receipt\",\"bar_chart\",\"chart_with_upwards_trend\",\"chart_with_downwards_trend\",\"page_facing_up\",\"date\",\"calendar\",\"spiral_calendar\",\"card_index\",\"card_file_box\",\"ballot_box\",\"file_cabinet\",\"clipboard\",\"spiral_notepad\",\"file_folder\",\"open_file_folder\",\"card_index_dividers\",\"newspaper_roll\",\"newspaper\",\"notebook\",\"closed_book\",\"green_book\",\"blue_book\",\"orange_book\",\"notebook_with_decorative_cover\",\"ledger\",\"books\",\"open_book\",\"safety_pin\",\"link\",\"paperclip\",\"paperclips\",\"scissors\",\"triangular_ruler\",\"straight_ruler\",\"abacus\",\"pushpin\",\"round_pushpin\",\"closed_lock_with_key\",\"lock\",\"unlock\",\"lock_with_ink_pen\",\"pen\",\"fountain_pen\",\"black_nib\",\"memo\",\"pencil2\",\"crayon\",\"paintbrush\",\"mag\",\"mag_right\",\"heart\",\"orange_heart\",\"yellow_heart\",\"green_heart\",\"blue_heart\",\"purple_heart\",\"black_heart\",\"broken_heart\",\"heavy_heart_exclamation\",\"two_hearts\",\"revolving_hearts\",\"heartbeat\",\"heartpulse\",\"sparkling_heart\",\"cupid\",\"gift_heart\",\"heart_decoration\",\"peace_symbol\",\"latin_cross\",\"star_and_crescent\",\"om\",\"wheel_of_dharma\",\"star_of_david\",\"six_pointed_star\",\"menorah\",\"yin_yang\",\"orthodox_cross\",\"place_of_worship\",\"ophiuchus\",\"aries\",\"taurus\",\"gemini\",\"cancer\",\"leo\",\"virgo\",\"libra\",\"scorpius\",\"sagittarius\",\"capricorn\",\"aquarius\",\"pisces\",\"id\",\"atom_symbol\",\"u7a7a\",\"u5272\",\"radioactive\",\"biohazard\",\"mobile_phone_off\",\"vibration_mode\",\"u6709\",\"u7121\",\"u7533\",\"u55b6\",\"u6708\",\"eight_pointed_black_star\",\"vs\",\"accept\",\"white_flower\",\"ideograph_advantage\",\"secret\",\"congratulations\",\"u5408\",\"u6e80\",\"u7981\",\"a\",\"b\",\"ab\",\"cl\",\"o2\",\"sos\",\"no_entry\",\"name_badge\",\"no_entry_sign\",\"x\",\"o\",\"stop_sign\",\"anger\",\"hotsprings\",\"no_pedestrians\",\"do_not_litter\",\"no_bicycles\",\"non-potable_water\",\"underage\",\"no_mobile_phones\",\"exclamation\",\"grey_exclamation\",\"question\",\"grey_question\",\"bangbang\",\"interrobang\",\"100\",\"low_brightness\",\"high_brightness\",\"trident\",\"fleur_de_lis\",\"part_alternation_mark\",\"warning\",\"children_crossing\",\"beginner\",\"recycle\",\"u6307\",\"chart\",\"sparkle\",\"eight_spoked_asterisk\",\"negative_squared_cross_mark\",\"white_check_mark\",\"diamond_shape_with_a_dot_inside\",\"cyclone\",\"loop\",\"globe_with_meridians\",\"m\",\"atm\",\"zzz\",\"sa\",\"passport_control\",\"customs\",\"baggage_claim\",\"left_luggage\",\"wheelchair\",\"no_smoking\",\"wc\",\"parking\",\"potable_water\",\"mens\",\"womens\",\"baby_symbol\",\"restroom\",\"put_litter_in_its_place\",\"cinema\",\"signal_strength\",\"koko\",\"ng\",\"ok\",\"up\",\"cool\",\"new\",\"free\",\"zero\",\"one\",\"two\",\"three\",\"four\",\"five\",\"six\",\"seven\",\"eight\",\"nine\",\"keycap_ten\",\"asterisk\",\"1234\",\"eject_button\",\"arrow_forward\",\"pause_button\",\"next_track_button\",\"stop_button\",\"record_button\",\"play_or_pause_button\",\"previous_track_button\",\"fast_forward\",\"rewind\",\"twisted_rightwards_arrows\",\"repeat\",\"repeat_one\",\"arrow_backward\",\"arrow_up_small\",\"arrow_down_small\",\"arrow_double_up\",\"arrow_double_down\",\"arrow_right\",\"arrow_left\",\"arrow_up\",\"arrow_down\",\"arrow_upper_right\",\"arrow_lower_right\",\"arrow_lower_left\",\"arrow_upper_left\",\"arrow_up_down\",\"left_right_arrow\",\"arrows_counterclockwise\",\"arrow_right_hook\",\"leftwards_arrow_with_hook\",\"arrow_heading_up\",\"arrow_heading_down\",\"hash\",\"information_source\",\"abc\",\"abcd\",\"capital_abcd\",\"symbols\",\"musical_note\",\"notes\",\"wavy_dash\",\"curly_loop\",\"heavy_check_mark\",\"arrows_clockwise\",\"heavy_plus_sign\",\"heavy_minus_sign\",\"heavy_division_sign\",\"heavy_multiplication_x\",\"infinity\",\"heavy_dollar_sign\",\"currency_exchange\",\"copyright\",\"registered\",\"tm\",\"end\",\"back\",\"on\",\"top\",\"soon\",\"ballot_box_with_check\",\"radio_button\",\"white_circle\",\"black_circle\",\"red_circle\",\"large_blue_circle\",\"small_orange_diamond\",\"small_blue_diamond\",\"large_orange_diamond\",\"large_blue_diamond\",\"small_red_triangle\",\"black_small_square\",\"white_small_square\",\"black_large_square\",\"white_large_square\",\"small_red_triangle_down\",\"black_medium_square\",\"white_medium_square\",\"black_medium_small_square\",\"white_medium_small_square\",\"black_square_button\",\"white_square_button\",\"speaker\",\"sound\",\"loud_sound\",\"mute\",\"mega\",\"loudspeaker\",\"bell\",\"no_bell\",\"black_joker\",\"mahjong\",\"spades\",\"clubs\",\"hearts\",\"diamonds\",\"flower_playing_cards\",\"thought_balloon\",\"right_anger_bubble\",\"speech_balloon\",\"left_speech_bubble\",\"clock1\",\"clock2\",\"clock3\",\"clock4\",\"clock5\",\"clock6\",\"clock7\",\"clock8\",\"clock9\",\"clock10\",\"clock11\",\"clock12\",\"clock130\",\"clock230\",\"clock330\",\"clock430\",\"clock530\",\"clock630\",\"clock730\",\"clock830\",\"clock930\",\"clock1030\",\"clock1130\",\"clock1230\",\"white_flag\",\"black_flag\",\"pirate_flag\",\"checkered_flag\",\"triangular_flag_on_post\",\"rainbow_flag\",\"united_nations\",\"afghanistan\",\"aland_islands\",\"albania\",\"algeria\",\"american_samoa\",\"andorra\",\"angola\",\"anguilla\",\"antarctica\",\"antigua_barbuda\",\"argentina\",\"armenia\",\"aruba\",\"australia\",\"austria\",\"azerbaijan\",\"bahamas\",\"bahrain\",\"bangladesh\",\"barbados\",\"belarus\",\"belgium\",\"belize\",\"benin\",\"bermuda\",\"bhutan\",\"bolivia\",\"caribbean_netherlands\",\"bosnia_herzegovina\",\"botswana\",\"brazil\",\"british_indian_ocean_territory\",\"british_virgin_islands\",\"brunei\",\"bulgaria\",\"burkina_faso\",\"burundi\",\"cape_verde\",\"cambodia\",\"cameroon\",\"canada\",\"canary_islands\",\"cayman_islands\",\"central_african_republic\",\"chad\",\"chile\",\"cn\",\"christmas_island\",\"cocos_islands\",\"colombia\",\"comoros\",\"congo_brazzaville\",\"congo_kinshasa\",\"cook_islands\",\"costa_rica\",\"croatia\",\"cuba\",\"curacao\",\"cyprus\",\"czech_republic\",\"denmark\",\"djibouti\",\"dominica\",\"dominican_republic\",\"ecuador\",\"egypt\",\"el_salvador\",\"equatorial_guinea\",\"eritrea\",\"estonia\",\"ethiopia\",\"eu\",\"falkland_islands\",\"faroe_islands\",\"fiji\",\"finland\",\"fr\",\"french_guiana\",\"french_polynesia\",\"french_southern_territories\",\"gabon\",\"gambia\",\"georgia\",\"de\",\"ghana\",\"gibraltar\",\"greece\",\"greenland\",\"grenada\",\"guadeloupe\",\"guam\",\"guatemala\",\"guernsey\",\"guinea\",\"guinea_bissau\",\"guyana\",\"haiti\",\"honduras\",\"hong_kong\",\"hungary\",\"iceland\",\"india\",\"indonesia\",\"iran\",\"iraq\",\"ireland\",\"isle_of_man\",\"israel\",\"it\",\"cote_divoire\",\"jamaica\",\"jp\",\"jersey\",\"jordan\",\"kazakhstan\",\"kenya\",\"kiribati\",\"kosovo\",\"kuwait\",\"kyrgyzstan\",\"laos\",\"latvia\",\"lebanon\",\"lesotho\",\"liberia\",\"libya\",\"liechtenstein\",\"lithuania\",\"luxembourg\",\"macau\",\"macedonia\",\"madagascar\",\"malawi\",\"malaysia\",\"maldives\",\"mali\",\"malta\",\"marshall_islands\",\"martinique\",\"mauritania\",\"mauritius\",\"mayotte\",\"mexico\",\"micronesia\",\"moldova\",\"monaco\",\"mongolia\",\"montenegro\",\"montserrat\",\"morocco\",\"mozambique\",\"myanmar\",\"namibia\",\"nauru\",\"nepal\",\"netherlands\",\"new_caledonia\",\"new_zealand\",\"nicaragua\",\"niger\",\"nigeria\",\"niue\",\"norfolk_island\",\"northern_mariana_islands\",\"north_korea\",\"norway\",\"oman\",\"pakistan\",\"palau\",\"palestinian_territories\",\"panama\",\"papua_new_guinea\",\"paraguay\",\"peru\",\"philippines\",\"pitcairn_islands\",\"poland\",\"portugal\",\"puerto_rico\",\"qatar\",\"reunion\",\"romania\",\"ru\",\"rwanda\",\"st_barthelemy\",\"st_helena\",\"st_kitts_nevis\",\"st_lucia\",\"st_pierre_miquelon\",\"st_vincent_grenadines\",\"samoa\",\"san_marino\",\"sao_tome_principe\",\"saudi_arabia\",\"senegal\",\"serbia\",\"seychelles\",\"sierra_leone\",\"singapore\",\"sint_maarten\",\"slovakia\",\"slovenia\",\"solomon_islands\",\"somalia\",\"south_africa\",\"south_georgia_south_sandwich_islands\",\"kr\",\"south_sudan\",\"es\",\"sri_lanka\",\"sudan\",\"suriname\",\"swaziland\",\"sweden\",\"switzerland\",\"syria\",\"taiwan\",\"tajikistan\",\"tanzania\",\"thailand\",\"timor_leste\",\"togo\",\"tokelau\",\"tonga\",\"trinidad_tobago\",\"tunisia\",\"tr\",\"turkmenistan\",\"turks_caicos_islands\",\"tuvalu\",\"uganda\",\"ukraine\",\"united_arab_emirates\",\"uk\",\"england\",\"scotland\",\"wales\",\"us\",\"us_virgin_islands\",\"uruguay\",\"uzbekistan\",\"vanuatu\",\"vatican_city\",\"venezuela\",\"vietnam\",\"wallis_futuna\",\"western_sahara\",\"yemen\",\"zambia\",\"zimbabwe\"]");

/***/ }),

/***/ "./node_modules/linkify-it/index.js":
/*!******************************************!*\
  !*** ./node_modules/linkify-it/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



////////////////////////////////////////////////////////////////////////////////
// Helpers

// Merge objects
//
function assign(obj /*from1, from2, from3, ...*/) {
  var sources = Array.prototype.slice.call(arguments, 1);

  sources.forEach(function (source) {
    if (!source) { return; }

    Object.keys(source).forEach(function (key) {
      obj[key] = source[key];
    });
  });

  return obj;
}

function _class(obj) { return Object.prototype.toString.call(obj); }
function isString(obj) { return _class(obj) === '[object String]'; }
function isObject(obj) { return _class(obj) === '[object Object]'; }
function isRegExp(obj) { return _class(obj) === '[object RegExp]'; }
function isFunction(obj) { return _class(obj) === '[object Function]'; }


function escapeRE(str) { return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&'); }

////////////////////////////////////////////////////////////////////////////////


var defaultOptions = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};


function isOptionsObj(obj) {
  return Object.keys(obj || {}).reduce(function (acc, k) {
    return acc || defaultOptions.hasOwnProperty(k);
  }, false);
}


var defaultSchemas = {
  'http:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.http) {
        // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.http =  new RegExp(
          '^\\/\\/' + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, 'i'
        );
      }
      if (self.re.http.test(tail)) {
        return tail.match(self.re.http)[0].length;
      }
      return 0;
    }
  },
  'https:':  'http:',
  'ftp:':    'http:',
  '//':      {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.no_http) {
      // compile lazily, because "host"-containing variables can change on tlds update.
        self.re.no_http =  new RegExp(
          '^' +
          self.re.src_auth +
          // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          '(?:localhost|(?:(?:' + self.re.src_domain + ')\\.)+' + self.re.src_domain_root + ')' +
          self.re.src_port +
          self.re.src_host_terminator +
          self.re.src_path,

          'i'
        );
      }

      if (self.re.no_http.test(tail)) {
        // should not be `://` & `///`, that protects from errors in protocol name
        if (pos >= 3 && text[pos - 3] === ':') { return 0; }
        if (pos >= 3 && text[pos - 3] === '/') { return 0; }
        return tail.match(self.re.no_http)[0].length;
      }
      return 0;
    }
  },
  'mailto:': {
    validate: function (text, pos, self) {
      var tail = text.slice(pos);

      if (!self.re.mailto) {
        self.re.mailto =  new RegExp(
          '^' + self.re.src_email_name + '@' + self.re.src_host_strict, 'i'
        );
      }
      if (self.re.mailto.test(tail)) {
        return tail.match(self.re.mailto)[0].length;
      }
      return 0;
    }
  }
};

/*eslint-disable max-len*/

// RE pattern for 2-character tlds (autogenerated by ./support/tlds_2char_gen.js)
var tlds_2ch_src_re = 'a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]';

// DON'T try to make PRs with changes. Extend TLDs with LinkifyIt.tlds() instead
var tlds_default = 'biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф'.split('|');

/*eslint-enable max-len*/

////////////////////////////////////////////////////////////////////////////////

function resetScanCache(self) {
  self.__index__ = -1;
  self.__text_cache__   = '';
}

function createValidator(re) {
  return function (text, pos) {
    var tail = text.slice(pos);

    if (re.test(tail)) {
      return tail.match(re)[0].length;
    }
    return 0;
  };
}

function createNormalizer() {
  return function (match, self) {
    self.normalize(match);
  };
}

// Schemas compiler. Build regexps.
//
function compile(self) {

  // Load & clone RE patterns.
  var re = self.re = __webpack_require__(/*! ./lib/re */ "./node_modules/linkify-it/lib/re.js")(self.__opts__);

  // Define dynamic patterns
  var tlds = self.__tlds__.slice();

  self.onCompile();

  if (!self.__tlds_replaced__) {
    tlds.push(tlds_2ch_src_re);
  }
  tlds.push(re.src_xn);

  re.src_tlds = tlds.join('|');

  function untpl(tpl) { return tpl.replace('%TLDS%', re.src_tlds); }

  re.email_fuzzy      = RegExp(untpl(re.tpl_email_fuzzy), 'i');
  re.link_fuzzy       = RegExp(untpl(re.tpl_link_fuzzy), 'i');
  re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), 'i');
  re.host_fuzzy_test  = RegExp(untpl(re.tpl_host_fuzzy_test), 'i');

  //
  // Compile each schema
  //

  var aliases = [];

  self.__compiled__ = {}; // Reset compiled data

  function schemaError(name, val) {
    throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
  }

  Object.keys(self.__schemas__).forEach(function (name) {
    var val = self.__schemas__[name];

    // skip disabled methods
    if (val === null) { return; }

    var compiled = { validate: null, link: null };

    self.__compiled__[name] = compiled;

    if (isObject(val)) {
      if (isRegExp(val.validate)) {
        compiled.validate = createValidator(val.validate);
      } else if (isFunction(val.validate)) {
        compiled.validate = val.validate;
      } else {
        schemaError(name, val);
      }

      if (isFunction(val.normalize)) {
        compiled.normalize = val.normalize;
      } else if (!val.normalize) {
        compiled.normalize = createNormalizer();
      } else {
        schemaError(name, val);
      }

      return;
    }

    if (isString(val)) {
      aliases.push(name);
      return;
    }

    schemaError(name, val);
  });

  //
  // Compile postponed aliases
  //

  aliases.forEach(function (alias) {
    if (!self.__compiled__[self.__schemas__[alias]]) {
      // Silently fail on missed schemas to avoid errons on disable.
      // schemaError(alias, self.__schemas__[alias]);
      return;
    }

    self.__compiled__[alias].validate =
      self.__compiled__[self.__schemas__[alias]].validate;
    self.__compiled__[alias].normalize =
      self.__compiled__[self.__schemas__[alias]].normalize;
  });

  //
  // Fake record for guessed links
  //
  self.__compiled__[''] = { validate: null, normalize: createNormalizer() };

  //
  // Build schema condition
  //
  var slist = Object.keys(self.__compiled__)
                      .filter(function (name) {
                        // Filter disabled & fake schemas
                        return name.length > 0 && self.__compiled__[name];
                      })
                      .map(escapeRE)
                      .join('|');
  // (?!_) cause 1.5x slowdown
  self.re.schema_test   = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'i');
  self.re.schema_search = RegExp('(^|(?!_)(?:[><\uff5c]|' + re.src_ZPCc + '))(' + slist + ')', 'ig');

  self.re.pretest = RegExp(
    '(' + self.re.schema_test.source + ')|(' + self.re.host_fuzzy_test.source + ')|@',
    'i'
  );

  //
  // Cleanup
  //

  resetScanCache(self);
}

/**
 * class Match
 *
 * Match result. Single element of array, returned by [[LinkifyIt#match]]
 **/
function Match(self, shift) {
  var start = self.__index__,
      end   = self.__last_index__,
      text  = self.__text_cache__.slice(start, end);

  /**
   * Match#schema -> String
   *
   * Prefix (protocol) for matched string.
   **/
  this.schema    = self.__schema__.toLowerCase();
  /**
   * Match#index -> Number
   *
   * First position of matched string.
   **/
  this.index     = start + shift;
  /**
   * Match#lastIndex -> Number
   *
   * Next position after matched string.
   **/
  this.lastIndex = end + shift;
  /**
   * Match#raw -> String
   *
   * Matched string.
   **/
  this.raw       = text;
  /**
   * Match#text -> String
   *
   * Notmalized text of matched string.
   **/
  this.text      = text;
  /**
   * Match#url -> String
   *
   * Normalized url of matched string.
   **/
  this.url       = text;
}

function createMatch(self, shift) {
  var match = new Match(self, shift);

  self.__compiled__[match.schema].normalize(match, self);

  return match;
}


/**
 * class LinkifyIt
 **/

/**
 * new LinkifyIt(schemas, options)
 * - schemas (Object): Optional. Additional schemas to validate (prefix/validator)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Creates new linkifier instance with optional additional schemas.
 * Can be called without `new` keyword for convenience.
 *
 * By default understands:
 *
 * - `http(s)://...` , `ftp://...`, `mailto:...` & `//...` links
 * - "fuzzy" links and emails (example.com, foo@bar.com).
 *
 * `schemas` is an object, where each key/value describes protocol/rule:
 *
 * - __key__ - link prefix (usually, protocol name with `:` at the end, `skype:`
 *   for example). `linkify-it` makes shure that prefix is not preceeded with
 *   alphanumeric char and symbols. Only whitespaces and punctuation allowed.
 * - __value__ - rule to check tail after link prefix
 *   - _String_ - just alias to existing rule
 *   - _Object_
 *     - _validate_ - validator function (should return matched length on success),
 *       or `RegExp`.
 *     - _normalize_ - optional function to normalize text & url of matched result
 *       (for example, for @twitter mentions).
 *
 * `options`:
 *
 * - __fuzzyLink__ - recognige URL-s without `http(s):` prefix. Default `true`.
 * - __fuzzyIP__ - allow IPs in fuzzy links above. Can conflict with some texts
 *   like version numbers. Default `false`.
 * - __fuzzyEmail__ - recognize emails without `mailto:` prefix.
 *
 **/
function LinkifyIt(schemas, options) {
  if (!(this instanceof LinkifyIt)) {
    return new LinkifyIt(schemas, options);
  }

  if (!options) {
    if (isOptionsObj(schemas)) {
      options = schemas;
      schemas = {};
    }
  }

  this.__opts__           = assign({}, defaultOptions, options);

  // Cache last tested result. Used to skip repeating steps on next `match` call.
  this.__index__          = -1;
  this.__last_index__     = -1; // Next scan position
  this.__schema__         = '';
  this.__text_cache__     = '';

  this.__schemas__        = assign({}, defaultSchemas, schemas);
  this.__compiled__       = {};

  this.__tlds__           = tlds_default;
  this.__tlds_replaced__  = false;

  this.re = {};

  compile(this);
}


/** chainable
 * LinkifyIt#add(schema, definition)
 * - schema (String): rule name (fixed pattern prefix)
 * - definition (String|RegExp|Object): schema definition
 *
 * Add new rule definition. See constructor description for details.
 **/
LinkifyIt.prototype.add = function add(schema, definition) {
  this.__schemas__[schema] = definition;
  compile(this);
  return this;
};


/** chainable
 * LinkifyIt#set(options)
 * - options (Object): { fuzzyLink|fuzzyEmail|fuzzyIP: true|false }
 *
 * Set recognition options for links without schema.
 **/
LinkifyIt.prototype.set = function set(options) {
  this.__opts__ = assign(this.__opts__, options);
  return this;
};


/**
 * LinkifyIt#test(text) -> Boolean
 *
 * Searches linkifiable pattern and returns `true` on success or `false` on fail.
 **/
LinkifyIt.prototype.test = function test(text) {
  // Reset scan cache
  this.__text_cache__ = text;
  this.__index__      = -1;

  if (!text.length) { return false; }

  var m, ml, me, len, shift, next, re, tld_pos, at_pos;

  // try to scan for link with schema - that's the most simple rule
  if (this.re.schema_test.test(text)) {
    re = this.re.schema_search;
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      len = this.testSchemaAt(text, m[2], re.lastIndex);
      if (len) {
        this.__schema__     = m[2];
        this.__index__      = m.index + m[1].length;
        this.__last_index__ = m.index + m[0].length + len;
        break;
      }
    }
  }

  if (this.__opts__.fuzzyLink && this.__compiled__['http:']) {
    // guess schemaless links
    tld_pos = text.search(this.re.host_fuzzy_test);
    if (tld_pos >= 0) {
      // if tld is located after found link - no need to check fuzzy pattern
      if (this.__index__ < 0 || tld_pos < this.__index__) {
        if ((ml = text.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {

          shift = ml.index + ml[1].length;

          if (this.__index__ < 0 || shift < this.__index__) {
            this.__schema__     = '';
            this.__index__      = shift;
            this.__last_index__ = ml.index + ml[0].length;
          }
        }
      }
    }
  }

  if (this.__opts__.fuzzyEmail && this.__compiled__['mailto:']) {
    // guess schemaless emails
    at_pos = text.indexOf('@');
    if (at_pos >= 0) {
      // We can't skip this check, because this cases are possible:
      // 192.168.1.1@gmail.com, my.in@example.com
      if ((me = text.match(this.re.email_fuzzy)) !== null) {

        shift = me.index + me[1].length;
        next  = me.index + me[0].length;

        if (this.__index__ < 0 || shift < this.__index__ ||
            (shift === this.__index__ && next > this.__last_index__)) {
          this.__schema__     = 'mailto:';
          this.__index__      = shift;
          this.__last_index__ = next;
        }
      }
    }
  }

  return this.__index__ >= 0;
};


/**
 * LinkifyIt#pretest(text) -> Boolean
 *
 * Very quick check, that can give false positives. Returns true if link MAY BE
 * can exists. Can be used for speed optimization, when you need to check that
 * link NOT exists.
 **/
LinkifyIt.prototype.pretest = function pretest(text) {
  return this.re.pretest.test(text);
};


/**
 * LinkifyIt#testSchemaAt(text, name, position) -> Number
 * - text (String): text to scan
 * - name (String): rule (schema) name
 * - position (Number): text offset to check from
 *
 * Similar to [[LinkifyIt#test]] but checks only specific protocol tail exactly
 * at given position. Returns length of found pattern (0 on fail).
 **/
LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text, schema, pos) {
  // If not supported schema check requested - terminate
  if (!this.__compiled__[schema.toLowerCase()]) {
    return 0;
  }
  return this.__compiled__[schema.toLowerCase()].validate(text, pos, this);
};


/**
 * LinkifyIt#match(text) -> Array|null
 *
 * Returns array of found link descriptions or `null` on fail. We strongly
 * recommend to use [[LinkifyIt#test]] first, for best speed.
 *
 * ##### Result match description
 *
 * - __schema__ - link schema, can be empty for fuzzy links, or `//` for
 *   protocol-neutral  links.
 * - __index__ - offset of matched text
 * - __lastIndex__ - index of next char after mathch end
 * - __raw__ - matched text
 * - __text__ - normalized text
 * - __url__ - link, generated from matched text
 **/
LinkifyIt.prototype.match = function match(text) {
  var shift = 0, result = [];

  // Try to take previous element from cache, if .test() called before
  if (this.__index__ >= 0 && this.__text_cache__ === text) {
    result.push(createMatch(this, shift));
    shift = this.__last_index__;
  }

  // Cut head if cache was used
  var tail = shift ? text.slice(shift) : text;

  // Scan string until end reached
  while (this.test(tail)) {
    result.push(createMatch(this, shift));

    tail = tail.slice(this.__last_index__);
    shift += this.__last_index__;
  }

  if (result.length) {
    return result;
  }

  return null;
};


/** chainable
 * LinkifyIt#tlds(list [, keepOld]) -> this
 * - list (Array): list of tlds
 * - keepOld (Boolean): merge with current list if `true` (`false` by default)
 *
 * Load (or merge) new tlds list. Those are user for fuzzy links (without prefix)
 * to avoid false positives. By default this algorythm used:
 *
 * - hostname with any 2-letter root zones are ok.
 * - biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф
 *   are ok.
 * - encoded (`xn--...`) root zones are ok.
 *
 * If list is replaced, then exact match for 2-chars root zones will be checked.
 **/
LinkifyIt.prototype.tlds = function tlds(list, keepOld) {
  list = Array.isArray(list) ? list : [ list ];

  if (!keepOld) {
    this.__tlds__ = list.slice();
    this.__tlds_replaced__ = true;
    compile(this);
    return this;
  }

  this.__tlds__ = this.__tlds__.concat(list)
                                  .sort()
                                  .filter(function (el, idx, arr) {
                                    return el !== arr[idx - 1];
                                  })
                                  .reverse();

  compile(this);
  return this;
};

/**
 * LinkifyIt#normalize(match)
 *
 * Default normalizer (if schema does not define it's own).
 **/
LinkifyIt.prototype.normalize = function normalize(match) {

  // Do minimal possible changes by default. Need to collect feedback prior
  // to move forward https://github.com/markdown-it/linkify-it/issues/1

  if (!match.schema) { match.url = 'http://' + match.url; }

  if (match.schema === 'mailto:' && !/^mailto:/i.test(match.url)) {
    match.url = 'mailto:' + match.url;
  }
};


/**
 * LinkifyIt#onCompile()
 *
 * Override to modify basic RegExp-s.
 **/
LinkifyIt.prototype.onCompile = function onCompile() {
};


module.exports = LinkifyIt;


/***/ }),

/***/ "./node_modules/linkify-it/lib/re.js":
/*!*******************************************!*\
  !*** ./node_modules/linkify-it/lib/re.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = function (opts) {
  var re = {};

  // Use direct extract instead of `regenerate` to reduse browserified size
  re.src_Any = __webpack_require__(/*! uc.micro/properties/Any/regex */ "./node_modules/uc.micro/properties/Any/regex.js").source;
  re.src_Cc  = __webpack_require__(/*! uc.micro/categories/Cc/regex */ "./node_modules/uc.micro/categories/Cc/regex.js").source;
  re.src_Z   = __webpack_require__(/*! uc.micro/categories/Z/regex */ "./node_modules/uc.micro/categories/Z/regex.js").source;
  re.src_P   = __webpack_require__(/*! uc.micro/categories/P/regex */ "./node_modules/uc.micro/categories/P/regex.js").source;

  // \p{\Z\P\Cc\CF} (white spaces + control + format + punctuation)
  re.src_ZPCc = [ re.src_Z, re.src_P, re.src_Cc ].join('|');

  // \p{\Z\Cc} (white spaces + control)
  re.src_ZCc = [ re.src_Z, re.src_Cc ].join('|');

  // Experimental. List of chars, completely prohibited in links
  // because can separate it from other part of text
  var text_separators = '[><\uff5c]';

  // All possible word characters (everything without punctuation, spaces & controls)
  // Defined via punctuation & spaces to save space
  // Should be something like \p{\L\N\S\M} (\w but without `_`)
  re.src_pseudo_letter       = '(?:(?!' + text_separators + '|' + re.src_ZPCc + ')' + re.src_Any + ')';
  // The same as abothe but without [0-9]
  // var src_pseudo_letter_non_d = '(?:(?![0-9]|' + src_ZPCc + ')' + src_Any + ')';

  ////////////////////////////////////////////////////////////////////////////////

  re.src_ip4 =

    '(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)';

  // Prohibit any of "@/[]()" in user/pass to avoid wrong domain fetch.
  re.src_auth    = '(?:(?:(?!' + re.src_ZCc + '|[@/\\[\\]()]).)+@)?';

  re.src_port =

    '(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?';

  re.src_host_terminator =

    '(?=$|' + text_separators + '|' + re.src_ZPCc + ')(?!-|_|:\\d|\\.-|\\.(?!$|' + re.src_ZPCc + '))';

  re.src_path =

    '(?:' +
      '[/?#]' +
        '(?:' +
          '(?!' + re.src_ZCc + '|' + text_separators + '|[()[\\]{}.,"\'?!\\-]).|' +
          '\\[(?:(?!' + re.src_ZCc + '|\\]).)*\\]|' +
          '\\((?:(?!' + re.src_ZCc + '|[)]).)*\\)|' +
          '\\{(?:(?!' + re.src_ZCc + '|[}]).)*\\}|' +
          '\\"(?:(?!' + re.src_ZCc + '|["]).)+\\"|' +
          "\\'(?:(?!" + re.src_ZCc + "|[']).)+\\'|" +
          "\\'(?=" + re.src_pseudo_letter + '|[-]).|' +  // allow `I'm_king` if no pair found
          '\\.{2,4}[a-zA-Z0-9%/]|' + // github has ... in commit range links,
                                     // google has .... in links (issue #66)
                                     // Restrict to
                                     // - english
                                     // - percent-encoded
                                     // - parts of file path
                                     // until more examples found.
          '\\.(?!' + re.src_ZCc + '|[.]).|' +
          (opts && opts['---'] ?
            '\\-(?!--(?:[^-]|$))(?:-*)|' // `---` => long dash, terminate
            :
            '\\-+|'
          ) +
          '\\,(?!' + re.src_ZCc + ').|' +      // allow `,,,` in paths
          '\\!(?!' + re.src_ZCc + '|[!]).|' +
          '\\?(?!' + re.src_ZCc + '|[?]).' +
        ')+' +
      '|\\/' +
    ')?';

  // Allow anything in markdown spec, forbid quote (") at the first position
  // because emails enclosed in quotes are far more common
  re.src_email_name =

    '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';

  re.src_xn =

    'xn--[a-z0-9\\-]{1,59}';

  // More to read about domain names
  // http://serverfault.com/questions/638260/

  re.src_domain_root =

    // Allow letters & digits (http://test1)
    '(?:' +
      re.src_xn +
      '|' +
      re.src_pseudo_letter + '{1,63}' +
    ')';

  re.src_domain =

    '(?:' +
      re.src_xn +
      '|' +
      '(?:' + re.src_pseudo_letter + ')' +
      '|' +
      '(?:' + re.src_pseudo_letter + '(?:-|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
    ')';

  re.src_host =

    '(?:' +
    // Don't need IP check, because digits are already allowed in normal domain names
    //   src_ip4 +
    // '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)*' + re.src_domain/*_root*/ + ')' +
    ')';

  re.tpl_host_fuzzy =

    '(?:' +
      re.src_ip4 +
    '|' +
      '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))' +
    ')';

  re.tpl_host_no_ip_fuzzy =

    '(?:(?:(?:' + re.src_domain + ')\\.)+(?:%TLDS%))';

  re.src_host_strict =

    re.src_host + re.src_host_terminator;

  re.tpl_host_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_host_terminator;

  re.src_host_port_strict =

    re.src_host + re.src_port + re.src_host_terminator;

  re.tpl_host_port_fuzzy_strict =

    re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;

  re.tpl_host_port_no_ip_fuzzy_strict =

    re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;


  ////////////////////////////////////////////////////////////////////////////////
  // Main rules

  // Rude test fuzzy links by host, for quick deny
  re.tpl_host_fuzzy_test =

    'localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:' + re.src_ZPCc + '|>|$))';

  re.tpl_email_fuzzy =

      '(^|' + text_separators + '|"|\\(|' + re.src_ZCc + ')' +
      '(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

  re.tpl_link_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_fuzzy_strict + re.src_path + ')';

  re.tpl_link_no_ip_fuzzy =
      // Fuzzy link can't be prepended with .:/\- and non punctuation.
      // but can start with > (markdown blockquote)
      '(^|(?![.:/\\-_@])(?:[$+<=>^`|\uff5c]|' + re.src_ZPCc + '))' +
      '((?![$+<=>^`|\uff5c])' + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ')';

  return re;
};


/***/ }),

/***/ "./node_modules/match-sorter/dist/match-sorter.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/match-sorter/dist/match-sorter.esm.js ***!
  \************************************************************/
/*! exports provided: default, rankings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankings", function() { return rankings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remove-accents */ "./node_modules/remove-accents/index.js");
/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_1__);



var rankings = {
  CASE_SENSITIVE_EQUAL: 9,
  EQUAL: 8,
  STARTS_WITH: 7,
  WORD_STARTS_WITH: 6,
  STRING_CASE: 5,
  STRING_CASE_ACRONYM: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
var caseRankings = {
  CAMEL: 0.8,
  PASCAL: 0.6,
  KEBAB: 0.4,
  SNAKE: 0.2,
  NO_CASE: 0
};
matchSorter.rankings = rankings;
matchSorter.caseRankings = caseRankings;
/**
 * Takes an array of items and a value and returns a new array with the items that match the given value
 * @param {Array} items - the items to sort
 * @param {String} value - the value to use for ranking
 * @param {Object} options - Some options to configure the sorter
 * @return {Array} - the new sorted array
 */

function matchSorter(items, value, options) {
  if (options === void 0) {
    options = {};
  }

  // not performing any search/sort if value(search term) is empty
  if (!value) return items;
  var _options = options,
      keys = _options.keys,
      _options$threshold = _options.threshold,
      threshold = _options$threshold === void 0 ? rankings.MATCHES : _options$threshold;
  var matchedItems = items.reduce(reduceItemsToRanked, []);
  return matchedItems.sort(sortRankedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });

  function reduceItemsToRanked(matches, item, index) {
    var _getHighestRanking = getHighestRanking(item, keys, value, options),
        rankedItem = _getHighestRanking.rankedItem,
        rank = _getHighestRanking.rank,
        keyIndex = _getHighestRanking.keyIndex,
        _getHighestRanking$ke = _getHighestRanking.keyThreshold,
        keyThreshold = _getHighestRanking$ke === void 0 ? threshold : _getHighestRanking$ke;

    if (rank >= keyThreshold) {
      matches.push({
        rankedItem: rankedItem,
        item: item,
        rank: rank,
        index: index,
        keyIndex: keyIndex
      });
    }

    return matches;
  }
}
/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {{rank: Number, keyIndex: Number, keyThreshold: Number}} - the highest ranking
 */


function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedItem: item,
      rank: getMatchRanking(item, value, options),
      keyIndex: -1,
      keyThreshold: options.threshold
    };
  }

  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        keyIndex = _ref2.keyIndex,
        keyThreshold = _ref2.keyThreshold;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;
    var newRank = getMatchRanking(itemValue, value, options);
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking,
        threshold = attributes.threshold;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }

    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
      keyThreshold = threshold;
    }

    return {
      rankedItem: itemValue,
      rank: rank,
      keyIndex: keyIndex,
      keyThreshold: keyThreshold
    };
  }, {
    rank: rankings.NO_MATCH,
    keyIndex: -1,
    keyThreshold: options.threshold
  });
}
/**
 * Gives a rankings score based on how well the two strings match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Object} options - options for the match (like keepDiacritics for comparison)
 * @returns {Number} the ranking for how well stringToRank matches testString
 */


function getMatchRanking(testString, stringToRank, options) {
  /* eslint complexity:[2, 12] */
  testString = prepareValueForComparison(testString, options);
  stringToRank = prepareValueForComparison(stringToRank, options); // too long

  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  } // case sensitive equals


  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }

  var caseRank = getCaseRanking(testString);
  var isPartial = isPartialOfCase(testString, stringToRank, caseRank);
  var isCasedAcronym = isCaseAcronym(testString, stringToRank, caseRank); // Lower casing before further comparison

  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase(); // case insensitive equals

  if (testString === stringToRank) {
    return rankings.EQUAL + caseRank;
  } // starts with


  if (testString.indexOf(stringToRank) === 0) {
    return rankings.STARTS_WITH + caseRank;
  } // word starts with


  if (testString.indexOf(" " + stringToRank) !== -1) {
    return rankings.WORD_STARTS_WITH + caseRank;
  } // is a part inside a cased string


  if (isPartial) {
    return rankings.STRING_CASE + caseRank;
  } // is acronym for a cased string


  if (caseRank > 0 && isCasedAcronym) {
    return rankings.STRING_CASE_ACRONYM + caseRank;
  } // contains


  if (testString.indexOf(stringToRank) !== -1) {
    return rankings.CONTAINS + caseRank;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  } // acronym


  if (getAcronym(testString).indexOf(stringToRank) !== -1) {
    return rankings.ACRONYM + caseRank;
  } // will return a number between rankings.MATCHES and
  // rankings.MATCHES + 1 depending  on how close of a match it is.


  return getClosenessRanking(testString, stringToRank);
}
/**
 * Generates an acronym for a string.
 *
 * @param {String} string the string for which to produce the acronym
 * @returns {String} the acronym
 */


function getAcronym(string) {
  var acronym = '';
  var wordsInString = string.split(' ');
  wordsInString.forEach(function (wordInString) {
    var splitByHyphenWords = wordInString.split('-');
    splitByHyphenWords.forEach(function (splitByHyphenWord) {
      acronym += splitByHyphenWord.substr(0, 1);
    });
  });
  return acronym;
}
/**
 * Returns a score base on the case of the testString
 * @param {String} testString - the string to test against
 * @returns {Number} the number of the ranking,
 * based on the case between 0 and 1 for how the testString matches the case
 */


function getCaseRanking(testString) {
  var containsUpperCase = testString.toLowerCase() !== testString;
  var containsDash = testString.indexOf('-') >= 0;
  var containsUnderscore = testString.indexOf('_') >= 0;

  if (!containsUpperCase && !containsUnderscore && containsDash) {
    return caseRankings.KEBAB;
  }

  if (!containsUpperCase && containsUnderscore && !containsDash) {
    return caseRankings.SNAKE;
  }

  if (containsUpperCase && !containsDash && !containsUnderscore) {
    var startsWithUpperCase = testString[0].toUpperCase() === testString[0];

    if (startsWithUpperCase) {
      return caseRankings.PASCAL;
    }

    return caseRankings.CAMEL;
  }

  return caseRankings.NO_CASE;
}
/**
 * Returns whether the stringToRank is one of the case parts in the testString (works with any string case)
 * @example
 * // returns true
 * isPartialOfCase('helloWorld', 'world', caseRankings.CAMEL)
 * @example
 * // returns false
 * isPartialOfCase('helloWorld', 'oworl', caseRankings.CAMEL)
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @param {Number} caseRanking - the ranking score based on case of testString
 * @returns {Boolean} whether the stringToRank is one of the case parts in the testString
 */


function isPartialOfCase(testString, stringToRank, caseRanking) {
  var testIndex = testString.toLowerCase().indexOf(stringToRank.toLowerCase());

  switch (caseRanking) {
    case caseRankings.SNAKE:
      return testString[testIndex - 1] === '_';

    case caseRankings.KEBAB:
      return testString[testIndex - 1] === '-';

    case caseRankings.PASCAL:
    case caseRankings.CAMEL:
      return testIndex !== -1 && testString[testIndex] === testString[testIndex].toUpperCase();

    default:
      return false;
  }
}
/**
 * Check if stringToRank is an acronym for a partial case
 * @example
 * // returns true
 * isCaseAcronym('super_duper_file', 'sdf', caseRankings.SNAKE)
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the acronym to test
 * @param {Number} caseRank - the ranking of the case
 * @returns {Boolean} whether the stringToRank is an acronym for the testString
 */


function isCaseAcronym(testString, stringToRank, caseRank) {
  var splitValue = null;

  switch (caseRank) {
    case caseRankings.SNAKE:
      splitValue = '_';
      break;

    case caseRankings.KEBAB:
      splitValue = '-';
      break;

    case caseRankings.PASCAL:
    case caseRankings.CAMEL:
      splitValue = /(?=[A-Z])/;
      break;

    default:
      splitValue = null;
  }

  var splitTestString = testString.split(splitValue);
  return stringToRank.toLowerCase().split('').reduce(function (correct, char, charIndex) {
    var splitItem = splitTestString[charIndex];
    return correct && splitItem && splitItem[0].toLowerCase() === char;
  }, true);
}
/**
 * Returns a score based on how spread apart the
 * characters from the stringToRank are within the testString.
 * A number close to rankings.MATCHES represents a loose match. A number close
 * to rankings.MATCHES + 1 represents a tighter match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */


function getClosenessRanking(testString, stringToRank) {
  var matchingInOrderCharCount = 0;
  var charNumber = 0;

  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index; j < string.length; j++) {
      var stringChar = string[j];

      if (stringChar === matchChar) {
        matchingInOrderCharCount += 1;
        return j + 1;
      }
    }

    return -1;
  }

  function getRanking(spread) {
    var inOrderPercentage = matchingInOrderCharCount / stringToRank.length;
    var ranking = rankings.MATCHES + inOrderPercentage * (1 / spread);
    return ranking;
  }

  var firstIndex = findMatchingCharacter(stringToRank[0], testString, 0);

  if (firstIndex < 0) {
    return rankings.NO_MATCH;
  }

  charNumber = firstIndex;

  for (var i = 1; i < stringToRank.length; i++) {
    var matchChar = stringToRank[i];
    charNumber = findMatchingCharacter(matchChar, testString, charNumber);
    var found = charNumber > -1;

    if (!found) {
      return rankings.NO_MATCH;
    }
  }

  var spread = charNumber - firstIndex;
  return getRanking(spread);
}
/**
 * Sorts items that have a rank, index, and keyIndex
 * @param {Object} a - the first item to sort
 * @param {Object} b - the second item to sort
 * @return {Number} -1 if a should come first, 1 if b should come first
 * Note: will never return 0
 */


function sortRankedItems(a, b) {
  var aFirst = -1;
  var bFirst = 1;
  var aRankedItem = a.rankedItem,
      aRank = a.rank,
      aKeyIndex = a.keyIndex;
  var bRankedItem = b.rankedItem,
      bRank = b.rank,
      bKeyIndex = b.keyIndex;

  if (aRank === bRank) {
    if (aKeyIndex === bKeyIndex) {
      return String(aRankedItem).localeCompare(bRankedItem);
    } else {
      return aKeyIndex < bKeyIndex ? aFirst : bFirst;
    }
  } else {
    return aRank > bRank ? aFirst : bFirst;
  }
}
/**
 * Prepares value for comparison by stringifying it, removing diacritics (if specified)
 * @param {String} value - the value to clean
 * @param {Object} options - {keepDiacritics: whether to remove diacritics}
 * @return {String} the prepared value
 */


function prepareValueForComparison(value, _ref4) {
  var keepDiacritics = _ref4.keepDiacritics;
  value = "" + value; // toString

  if (!keepDiacritics) {
    value = remove_accents__WEBPACK_IMPORTED_MODULE_1___default()(value);
  }

  return value;
}
/**
 * Gets value for key in item at arbitrarily nested keypath
 * @param {Object} item - the item
 * @param {Object|Function} key - the potentially nested keypath or property callback
 * @return {Array} - an array containing the value(s) at the nested keypath
 */


function getItemValues(item, key) {
  if (typeof key === 'object') {
    key = key.key;
  }

  var value;

  if (typeof key === 'function') {
    value = key(item); // eslint-disable-next-line no-negated-condition
  } else if (key.indexOf('.') !== -1) {
    // handle nested keys
    value = key.split('.').reduce(function (itemObj, nestedKey) {
      return itemObj ? itemObj[nestedKey] : null;
    }, item);
  } else {
    value = item[key];
  } // concat because `value` can be a string or an array
  // eslint-disable-next-line


  return value != null ? [].concat(value) : null;
}
/**
 * Gets all the values for the given keys in the given item and returns an array of those values
 * @param {Object} item - the item from which the values will be retrieved
 * @param {Array} keys - the keys to use to retrieve the values
 * @return {Array} objects with {itemValue, attributes}
 */


function getAllValuesToRank(item, keys) {
  return keys.reduce(function (allVals, key) {
    var values = getItemValues(item, key);

    if (values) {
      values.forEach(function (itemValue) {
        allVals.push({
          itemValue: itemValue,
          attributes: getKeyAttributes(key)
        });
      });
    }

    return allVals;
  }, []);
}
/**
 * Gets all the attributes for the given key
 * @param {Object|String} key - the key from which the attributes will be retrieved
 * @return {Object} object containing the key's attributes
 */


function getKeyAttributes(key) {
  if (typeof key === 'string') {
    key = {
      key: key
    };
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxRanking: Infinity,
    minRanking: -Infinity
  }, key);
}

/* harmony default export */ __webpack_exports__["default"] = (matchSorter);



/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-linkify/dist/components/Linkify.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-linkify/dist/components/Linkify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _defaultComponentDecorator = __webpack_require__(/*! ../decorators/defaultComponentDecorator */ "./node_modules/react-linkify/dist/decorators/defaultComponentDecorator.js");

var _defaultComponentDecorator2 = _interopRequireDefault(_defaultComponentDecorator);

var _defaultHrefDecorator = __webpack_require__(/*! ../decorators/defaultHrefDecorator */ "./node_modules/react-linkify/dist/decorators/defaultHrefDecorator.js");

var _defaultHrefDecorator2 = _interopRequireDefault(_defaultHrefDecorator);

var _defaultMatchDecorator = __webpack_require__(/*! ../decorators/defaultMatchDecorator */ "./node_modules/react-linkify/dist/decorators/defaultMatchDecorator.js");

var _defaultMatchDecorator2 = _interopRequireDefault(_defaultMatchDecorator);

var _defaultTextDecorator = __webpack_require__(/*! ../decorators/defaultTextDecorator */ "./node_modules/react-linkify/dist/decorators/defaultTextDecorator.js");

var _defaultTextDecorator2 = _interopRequireDefault(_defaultTextDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Linkify = function (_React$Component) {
  _inherits(Linkify, _React$Component);

  function Linkify() {
    _classCallCheck(this, Linkify);

    return _possibleConstructorReturn(this, (Linkify.__proto__ || Object.getPrototypeOf(Linkify)).apply(this, arguments));
  }

  _createClass(Linkify, [{
    key: 'parseString',
    value: function parseString(string) {
      var _this2 = this;

      if (string === '') {
        return string;
      }

      var matches = this.props.matchDecorator(string);
      if (!matches) {
        return string;
      }

      var elements = [];
      var lastIndex = 0;
      matches.forEach(function (match, i) {
        // Push preceding text if there is any
        if (match.index > lastIndex) {
          elements.push(string.substring(lastIndex, match.index));
        }

        var decoratedHref = _this2.props.hrefDecorator(match.url);
        var decoratedText = _this2.props.textDecorator(match.text);
        var decoratedComponent = _this2.props.componentDecorator(decoratedHref, decoratedText, i);
        elements.push(decoratedComponent);

        lastIndex = match.lastIndex;
      });

      // Push remaining text if there is any
      if (string.length > lastIndex) {
        elements.push(string.substring(lastIndex));
      }

      return elements.length === 1 ? elements[0] : elements;
    }
  }, {
    key: 'parse',
    value: function parse(children) {
      var _this3 = this;

      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (typeof children === 'string') {
        return this.parseString(children);
      } else if (React.isValidElement(children) && children.type !== 'a' && children.type !== 'button') {
        return React.cloneElement(children, { key: key }, this.parse(children.props.children));
      } else if (Array.isArray(children)) {
        return children.map(function (child, i) {
          return _this3.parse(child, i);
        });
      }

      return children;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        this.parse(this.props.children)
      );
    }
  }]);

  return Linkify;
}(React.Component);

Linkify.defaultProps = {
  componentDecorator: _defaultComponentDecorator2.default,
  hrefDecorator: _defaultHrefDecorator2.default,
  matchDecorator: _defaultMatchDecorator2.default,
  textDecorator: _defaultTextDecorator2.default
};
exports.default = Linkify;

/***/ }),

/***/ "./node_modules/react-linkify/dist/decorators/defaultComponentDecorator.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-linkify/dist/decorators/defaultComponentDecorator.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (decoratedHref, decoratedText, key) {
  return React.createElement(
    'a',
    { href: decoratedHref, key: key },
    decoratedText
  );
};

/***/ }),

/***/ "./node_modules/react-linkify/dist/decorators/defaultHrefDecorator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-linkify/dist/decorators/defaultHrefDecorator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (href) {
  return href;
};

/***/ }),

/***/ "./node_modules/react-linkify/dist/decorators/defaultMatchDecorator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-linkify/dist/decorators/defaultMatchDecorator.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _linkifyIt = __webpack_require__(/*! linkify-it */ "./node_modules/linkify-it/index.js");

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _tlds = __webpack_require__(/*! tlds */ "./node_modules/tlds/index.js");

var _tlds2 = _interopRequireDefault(_tlds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkify = new _linkifyIt2.default();
linkify.tlds(_tlds2.default);

exports.default = function (text) {
  return linkify.match(text);
};

/***/ }),

/***/ "./node_modules/react-linkify/dist/decorators/defaultTextDecorator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-linkify/dist/decorators/defaultTextDecorator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (text) {
  return text;
};

/***/ }),

/***/ "./node_modules/react-linkify/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-linkify/dist/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Linkify = __webpack_require__(/*! ./components/Linkify */ "./node_modules/react-linkify/dist/components/Linkify.js");

var _Linkify2 = _interopRequireDefault(_Linkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Linkify2.default;

/***/ }),

/***/ "./node_modules/remove-accents/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remove-accents/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ }),

/***/ "./node_modules/textarea-caret/index.js":
/*!**********************************************!*\
  !*** ./node_modules/textarea-caret/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* jshint browser: true */

(function () {

// The properties that we copy into a mirrored div.
// Note that some browsers, such as Firefox,
// do not concatenate properties, i.e. padding-top, bottom etc. -> padding,
// so we have to do every single property specifically.
var properties = [
  'direction',  // RTL support
  'boxSizing',
  'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  'height',
  'overflowX',
  'overflowY',  // copy the scrollbar for IE

  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',

  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',

  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration',  // might not make a difference, but better be safe

  'letterSpacing',
  'wordSpacing',

  'tabSize',
  'MozTabSize'

];

var isBrowser = (typeof window !== 'undefined');
var isFirefox = (isBrowser && window.mozInnerScreenX != null);

function getCaretCoordinates(element, position, options) {
  if(!isBrowser) {
    throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
  }

  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
    if ( el ) { el.parentNode.removeChild(el); }
  }

  // mirrored div
  var div = document.createElement('div');
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.appendChild(div);

  var style = div.style;
  var computed = window.getComputedStyle? getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9

  // default textarea styles
  style.whiteSpace = 'pre-wrap';
  if (element.nodeName !== 'INPUT')
    style.wordWrap = 'break-word';  // only for textarea-s

  // position off-screen
  style.position = 'absolute';  // required to return coordinates properly
  if (!debug)
    style.visibility = 'hidden';  // not 'display: none' because we want rendering

  // transfer the element's properties to the div
  properties.forEach(function (prop) {
    style[prop] = computed[prop];
  });

  if (isFirefox) {
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
    if (element.scrollHeight > parseInt(computed.height))
      style.overflowY = 'scroll';
  } else {
    style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
  }

  div.textContent = element.value.substring(0, position);
  // the second special handling for input type="text" vs textarea: spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (element.nodeName === 'INPUT')
    div.textContent = div.textContent.replace(/\s/g, '\u00a0');

  var span = document.createElement('span');
  // Wrapping must be replicated *exactly*, including when a long word gets
  // onto the next line, with whitespace at the end of the line before (#7).
  // The  *only* reliable way to do that is to copy the *entire* rest of the
  // textarea's content into the <span> created at the caret position.
  // for inputs, just '.' would be enough, but why bother?
  span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
  div.appendChild(span);

  var coordinates = {
    top: span.offsetTop + parseInt(computed['borderTopWidth']),
    left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
  };

  if (debug) {
    span.style.backgroundColor = '#aaa';
  } else {
    document.body.removeChild(div);
  }

  return coordinates;
}

if ( true && typeof module.exports != 'undefined') {
  module.exports = getCaretCoordinates;
} else if(isBrowser){
  window.getCaretCoordinates = getCaretCoordinates;
}

}());


/***/ }),

/***/ "./node_modules/tlds/index.js":
/*!************************************!*\
  !*** ./node_modules/tlds/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [
  "aaa",
  "aarp",
  "abarth",
  "abb",
  "abbott",
  "abbvie",
  "abc",
  "able",
  "abogado",
  "abudhabi",
  "ac",
  "academy",
  "accenture",
  "accountant",
  "accountants",
  "aco",
  "active",
  "actor",
  "ad",
  "adac",
  "ads",
  "adult",
  "ae",
  "aeg",
  "aero",
  "aetna",
  "af",
  "afamilycompany",
  "afl",
  "africa",
  "ag",
  "agakhan",
  "agency",
  "ai",
  "aig",
  "aigo",
  "airbus",
  "airforce",
  "airtel",
  "akdn",
  "al",
  "alfaromeo",
  "alibaba",
  "alipay",
  "allfinanz",
  "allstate",
  "ally",
  "alsace",
  "alstom",
  "am",
  "americanexpress",
  "americanfamily",
  "amex",
  "amfam",
  "amica",
  "amsterdam",
  "analytics",
  "android",
  "anquan",
  "anz",
  "ao",
  "aol",
  "apartments",
  "app",
  "apple",
  "aq",
  "aquarelle",
  "ar",
  "arab",
  "aramco",
  "archi",
  "army",
  "arpa",
  "art",
  "arte",
  "as",
  "asda",
  "asia",
  "associates",
  "at",
  "athleta",
  "attorney",
  "au",
  "auction",
  "audi",
  "audible",
  "audio",
  "auspost",
  "author",
  "auto",
  "autos",
  "avianca",
  "aw",
  "aws",
  "ax",
  "axa",
  "az",
  "azure",
  "ba",
  "baby",
  "baidu",
  "banamex",
  "bananarepublic",
  "band",
  "bank",
  "bar",
  "barcelona",
  "barclaycard",
  "barclays",
  "barefoot",
  "bargains",
  "baseball",
  "basketball",
  "bauhaus",
  "bayern",
  "bb",
  "bbc",
  "bbt",
  "bbva",
  "bcg",
  "bcn",
  "bd",
  "be",
  "beats",
  "beauty",
  "beer",
  "bentley",
  "berlin",
  "best",
  "bestbuy",
  "bet",
  "bf",
  "bg",
  "bh",
  "bharti",
  "bi",
  "bible",
  "bid",
  "bike",
  "bing",
  "bingo",
  "bio",
  "biz",
  "bj",
  "black",
  "blackfriday",
  "blanco",
  "blockbuster",
  "blog",
  "bloomberg",
  "blue",
  "bm",
  "bms",
  "bmw",
  "bn",
  "bnl",
  "bnpparibas",
  "bo",
  "boats",
  "boehringer",
  "bofa",
  "bom",
  "bond",
  "boo",
  "book",
  "booking",
  "bosch",
  "bostik",
  "boston",
  "bot",
  "boutique",
  "box",
  "br",
  "bradesco",
  "bridgestone",
  "broadway",
  "broker",
  "brother",
  "brussels",
  "bs",
  "bt",
  "budapest",
  "bugatti",
  "build",
  "builders",
  "business",
  "buy",
  "buzz",
  "bv",
  "bw",
  "by",
  "bz",
  "bzh",
  "ca",
  "cab",
  "cafe",
  "cal",
  "call",
  "calvinklein",
  "cam",
  "camera",
  "camp",
  "cancerresearch",
  "canon",
  "capetown",
  "capital",
  "capitalone",
  "car",
  "caravan",
  "cards",
  "care",
  "career",
  "careers",
  "cars",
  "cartier",
  "casa",
  "case",
  "caseih",
  "cash",
  "casino",
  "cat",
  "catering",
  "catholic",
  "cba",
  "cbn",
  "cbre",
  "cbs",
  "cc",
  "cd",
  "ceb",
  "center",
  "ceo",
  "cern",
  "cf",
  "cfa",
  "cfd",
  "cg",
  "ch",
  "chanel",
  "channel",
  "chase",
  "chat",
  "cheap",
  "chintai",
  "christmas",
  "chrome",
  "chrysler",
  "church",
  "ci",
  "cipriani",
  "circle",
  "cisco",
  "citadel",
  "citi",
  "citic",
  "city",
  "cityeats",
  "ck",
  "cl",
  "claims",
  "cleaning",
  "click",
  "clinic",
  "clinique",
  "clothing",
  "cloud",
  "club",
  "clubmed",
  "cm",
  "cn",
  "co",
  "coach",
  "codes",
  "coffee",
  "college",
  "cologne",
  "com",
  "comcast",
  "commbank",
  "community",
  "company",
  "compare",
  "computer",
  "comsec",
  "condos",
  "construction",
  "consulting",
  "contact",
  "contractors",
  "cooking",
  "cookingchannel",
  "cool",
  "coop",
  "corsica",
  "country",
  "coupon",
  "coupons",
  "courses",
  "cr",
  "credit",
  "creditcard",
  "creditunion",
  "cricket",
  "crown",
  "crs",
  "cruise",
  "cruises",
  "csc",
  "cu",
  "cuisinella",
  "cv",
  "cw",
  "cx",
  "cy",
  "cymru",
  "cyou",
  "cz",
  "dabur",
  "dad",
  "dance",
  "data",
  "date",
  "dating",
  "datsun",
  "day",
  "dclk",
  "dds",
  "de",
  "deal",
  "dealer",
  "deals",
  "degree",
  "delivery",
  "dell",
  "deloitte",
  "delta",
  "democrat",
  "dental",
  "dentist",
  "desi",
  "design",
  "dev",
  "dhl",
  "diamonds",
  "diet",
  "digital",
  "direct",
  "directory",
  "discount",
  "discover",
  "dish",
  "diy",
  "dj",
  "dk",
  "dm",
  "dnp",
  "do",
  "docs",
  "doctor",
  "dodge",
  "dog",
  "doha",
  "domains",
  "dot",
  "download",
  "drive",
  "dtv",
  "dubai",
  "duck",
  "dunlop",
  "duns",
  "dupont",
  "durban",
  "dvag",
  "dvr",
  "dz",
  "earth",
  "eat",
  "ec",
  "eco",
  "edeka",
  "edu",
  "education",
  "ee",
  "eg",
  "email",
  "emerck",
  "energy",
  "engineer",
  "engineering",
  "enterprises",
  "epost",
  "epson",
  "equipment",
  "er",
  "ericsson",
  "erni",
  "es",
  "esq",
  "estate",
  "esurance",
  "et",
  "etisalat",
  "eu",
  "eurovision",
  "eus",
  "events",
  "everbank",
  "exchange",
  "expert",
  "exposed",
  "express",
  "extraspace",
  "fage",
  "fail",
  "fairwinds",
  "faith",
  "family",
  "fan",
  "fans",
  "farm",
  "farmers",
  "fashion",
  "fast",
  "fedex",
  "feedback",
  "ferrari",
  "ferrero",
  "fi",
  "fiat",
  "fidelity",
  "fido",
  "film",
  "final",
  "finance",
  "financial",
  "fire",
  "firestone",
  "firmdale",
  "fish",
  "fishing",
  "fit",
  "fitness",
  "fj",
  "fk",
  "flickr",
  "flights",
  "flir",
  "florist",
  "flowers",
  "fly",
  "fm",
  "fo",
  "foo",
  "food",
  "foodnetwork",
  "football",
  "ford",
  "forex",
  "forsale",
  "forum",
  "foundation",
  "fox",
  "fr",
  "free",
  "fresenius",
  "frl",
  "frogans",
  "frontdoor",
  "frontier",
  "ftr",
  "fujitsu",
  "fujixerox",
  "fun",
  "fund",
  "furniture",
  "futbol",
  "fyi",
  "ga",
  "gal",
  "gallery",
  "gallo",
  "gallup",
  "game",
  "games",
  "gap",
  "garden",
  "gb",
  "gbiz",
  "gd",
  "gdn",
  "ge",
  "gea",
  "gent",
  "genting",
  "george",
  "gf",
  "gg",
  "ggee",
  "gh",
  "gi",
  "gift",
  "gifts",
  "gives",
  "giving",
  "gl",
  "glade",
  "glass",
  "gle",
  "global",
  "globo",
  "gm",
  "gmail",
  "gmbh",
  "gmo",
  "gmx",
  "gn",
  "godaddy",
  "gold",
  "goldpoint",
  "golf",
  "goo",
  "goodhands",
  "goodyear",
  "goog",
  "google",
  "gop",
  "got",
  "gov",
  "gp",
  "gq",
  "gr",
  "grainger",
  "graphics",
  "gratis",
  "green",
  "gripe",
  "grocery",
  "group",
  "gs",
  "gt",
  "gu",
  "guardian",
  "gucci",
  "guge",
  "guide",
  "guitars",
  "guru",
  "gw",
  "gy",
  "hair",
  "hamburg",
  "hangout",
  "haus",
  "hbo",
  "hdfc",
  "hdfcbank",
  "health",
  "healthcare",
  "help",
  "helsinki",
  "here",
  "hermes",
  "hgtv",
  "hiphop",
  "hisamitsu",
  "hitachi",
  "hiv",
  "hk",
  "hkt",
  "hm",
  "hn",
  "hockey",
  "holdings",
  "holiday",
  "homedepot",
  "homegoods",
  "homes",
  "homesense",
  "honda",
  "honeywell",
  "horse",
  "hospital",
  "host",
  "hosting",
  "hot",
  "hoteles",
  "hotels",
  "hotmail",
  "house",
  "how",
  "hr",
  "hsbc",
  "ht",
  "hu",
  "hughes",
  "hyatt",
  "hyundai",
  "ibm",
  "icbc",
  "ice",
  "icu",
  "id",
  "ie",
  "ieee",
  "ifm",
  "ikano",
  "il",
  "im",
  "imamat",
  "imdb",
  "immo",
  "immobilien",
  "in",
  "industries",
  "infiniti",
  "info",
  "ing",
  "ink",
  "institute",
  "insurance",
  "insure",
  "int",
  "intel",
  "international",
  "intuit",
  "investments",
  "io",
  "ipiranga",
  "iq",
  "ir",
  "irish",
  "is",
  "iselect",
  "ismaili",
  "ist",
  "istanbul",
  "it",
  "itau",
  "itv",
  "iveco",
  "iwc",
  "jaguar",
  "java",
  "jcb",
  "jcp",
  "je",
  "jeep",
  "jetzt",
  "jewelry",
  "jio",
  "jlc",
  "jll",
  "jm",
  "jmp",
  "jnj",
  "jo",
  "jobs",
  "joburg",
  "jot",
  "joy",
  "jp",
  "jpmorgan",
  "jprs",
  "juegos",
  "juniper",
  "kaufen",
  "kddi",
  "ke",
  "kerryhotels",
  "kerrylogistics",
  "kerryproperties",
  "kfh",
  "kg",
  "kh",
  "ki",
  "kia",
  "kim",
  "kinder",
  "kindle",
  "kitchen",
  "kiwi",
  "km",
  "kn",
  "koeln",
  "komatsu",
  "kosher",
  "kp",
  "kpmg",
  "kpn",
  "kr",
  "krd",
  "kred",
  "kuokgroup",
  "kw",
  "ky",
  "kyoto",
  "kz",
  "la",
  "lacaixa",
  "ladbrokes",
  "lamborghini",
  "lamer",
  "lancaster",
  "lancia",
  "lancome",
  "land",
  "landrover",
  "lanxess",
  "lasalle",
  "lat",
  "latino",
  "latrobe",
  "law",
  "lawyer",
  "lb",
  "lc",
  "lds",
  "lease",
  "leclerc",
  "lefrak",
  "legal",
  "lego",
  "lexus",
  "lgbt",
  "li",
  "liaison",
  "lidl",
  "life",
  "lifeinsurance",
  "lifestyle",
  "lighting",
  "like",
  "lilly",
  "limited",
  "limo",
  "lincoln",
  "linde",
  "link",
  "lipsy",
  "live",
  "living",
  "lixil",
  "lk",
  "llc",
  "loan",
  "loans",
  "locker",
  "locus",
  "loft",
  "lol",
  "london",
  "lotte",
  "lotto",
  "love",
  "lpl",
  "lplfinancial",
  "lr",
  "ls",
  "lt",
  "ltd",
  "ltda",
  "lu",
  "lundbeck",
  "lupin",
  "luxe",
  "luxury",
  "lv",
  "ly",
  "ma",
  "macys",
  "madrid",
  "maif",
  "maison",
  "makeup",
  "man",
  "management",
  "mango",
  "map",
  "market",
  "marketing",
  "markets",
  "marriott",
  "marshalls",
  "maserati",
  "mattel",
  "mba",
  "mc",
  "mckinsey",
  "md",
  "me",
  "med",
  "media",
  "meet",
  "melbourne",
  "meme",
  "memorial",
  "men",
  "menu",
  "meo",
  "merckmsd",
  "metlife",
  "mg",
  "mh",
  "miami",
  "microsoft",
  "mil",
  "mini",
  "mint",
  "mit",
  "mitsubishi",
  "mk",
  "ml",
  "mlb",
  "mls",
  "mm",
  "mma",
  "mn",
  "mo",
  "mobi",
  "mobile",
  "mobily",
  "moda",
  "moe",
  "moi",
  "mom",
  "monash",
  "money",
  "monster",
  "mopar",
  "mormon",
  "mortgage",
  "moscow",
  "moto",
  "motorcycles",
  "mov",
  "movie",
  "movistar",
  "mp",
  "mq",
  "mr",
  "ms",
  "msd",
  "mt",
  "mtn",
  "mtr",
  "mu",
  "museum",
  "mutual",
  "mv",
  "mw",
  "mx",
  "my",
  "mz",
  "na",
  "nab",
  "nadex",
  "nagoya",
  "name",
  "nationwide",
  "natura",
  "navy",
  "nba",
  "nc",
  "ne",
  "nec",
  "net",
  "netbank",
  "netflix",
  "network",
  "neustar",
  "new",
  "newholland",
  "news",
  "next",
  "nextdirect",
  "nexus",
  "nf",
  "nfl",
  "ng",
  "ngo",
  "nhk",
  "ni",
  "nico",
  "nike",
  "nikon",
  "ninja",
  "nissan",
  "nissay",
  "nl",
  "no",
  "nokia",
  "northwesternmutual",
  "norton",
  "now",
  "nowruz",
  "nowtv",
  "np",
  "nr",
  "nra",
  "nrw",
  "ntt",
  "nu",
  "nyc",
  "nz",
  "obi",
  "observer",
  "off",
  "office",
  "okinawa",
  "olayan",
  "olayangroup",
  "oldnavy",
  "ollo",
  "om",
  "omega",
  "one",
  "ong",
  "onl",
  "online",
  "onyourside",
  "ooo",
  "open",
  "oracle",
  "orange",
  "org",
  "organic",
  "origins",
  "osaka",
  "otsuka",
  "ott",
  "ovh",
  "pa",
  "page",
  "panasonic",
  "panerai",
  "paris",
  "pars",
  "partners",
  "parts",
  "party",
  "passagens",
  "pay",
  "pccw",
  "pe",
  "pet",
  "pf",
  "pfizer",
  "pg",
  "ph",
  "pharmacy",
  "phd",
  "philips",
  "phone",
  "photo",
  "photography",
  "photos",
  "physio",
  "piaget",
  "pics",
  "pictet",
  "pictures",
  "pid",
  "pin",
  "ping",
  "pink",
  "pioneer",
  "pizza",
  "pk",
  "pl",
  "place",
  "play",
  "playstation",
  "plumbing",
  "plus",
  "pm",
  "pn",
  "pnc",
  "pohl",
  "poker",
  "politie",
  "porn",
  "post",
  "pr",
  "pramerica",
  "praxi",
  "press",
  "prime",
  "pro",
  "prod",
  "productions",
  "prof",
  "progressive",
  "promo",
  "properties",
  "property",
  "protection",
  "pru",
  "prudential",
  "ps",
  "pt",
  "pub",
  "pw",
  "pwc",
  "py",
  "qa",
  "qpon",
  "quebec",
  "quest",
  "qvc",
  "racing",
  "radio",
  "raid",
  "re",
  "read",
  "realestate",
  "realtor",
  "realty",
  "recipes",
  "red",
  "redstone",
  "redumbrella",
  "rehab",
  "reise",
  "reisen",
  "reit",
  "reliance",
  "ren",
  "rent",
  "rentals",
  "repair",
  "report",
  "republican",
  "rest",
  "restaurant",
  "review",
  "reviews",
  "rexroth",
  "rich",
  "richardli",
  "ricoh",
  "rightathome",
  "ril",
  "rio",
  "rip",
  "rmit",
  "ro",
  "rocher",
  "rocks",
  "rodeo",
  "rogers",
  "room",
  "rs",
  "rsvp",
  "ru",
  "rugby",
  "ruhr",
  "run",
  "rw",
  "rwe",
  "ryukyu",
  "sa",
  "saarland",
  "safe",
  "safety",
  "sakura",
  "sale",
  "salon",
  "samsclub",
  "samsung",
  "sandvik",
  "sandvikcoromant",
  "sanofi",
  "sap",
  "sapo",
  "sarl",
  "sas",
  "save",
  "saxo",
  "sb",
  "sbi",
  "sbs",
  "sc",
  "sca",
  "scb",
  "schaeffler",
  "schmidt",
  "scholarships",
  "school",
  "schule",
  "schwarz",
  "science",
  "scjohnson",
  "scor",
  "scot",
  "sd",
  "se",
  "search",
  "seat",
  "secure",
  "security",
  "seek",
  "select",
  "sener",
  "services",
  "ses",
  "seven",
  "sew",
  "sex",
  "sexy",
  "sfr",
  "sg",
  "sh",
  "shangrila",
  "sharp",
  "shaw",
  "shell",
  "shia",
  "shiksha",
  "shoes",
  "shop",
  "shopping",
  "shouji",
  "show",
  "showtime",
  "shriram",
  "si",
  "silk",
  "sina",
  "singles",
  "site",
  "sj",
  "sk",
  "ski",
  "skin",
  "sky",
  "skype",
  "sl",
  "sling",
  "sm",
  "smart",
  "smile",
  "sn",
  "sncf",
  "so",
  "soccer",
  "social",
  "softbank",
  "software",
  "sohu",
  "solar",
  "solutions",
  "song",
  "sony",
  "soy",
  "space",
  "spiegel",
  "sport",
  "spot",
  "spreadbetting",
  "sr",
  "srl",
  "srt",
  "st",
  "stada",
  "staples",
  "star",
  "starhub",
  "statebank",
  "statefarm",
  "statoil",
  "stc",
  "stcgroup",
  "stockholm",
  "storage",
  "store",
  "stream",
  "studio",
  "study",
  "style",
  "su",
  "sucks",
  "supplies",
  "supply",
  "support",
  "surf",
  "surgery",
  "suzuki",
  "sv",
  "swatch",
  "swiftcover",
  "swiss",
  "sx",
  "sy",
  "sydney",
  "symantec",
  "systems",
  "sz",
  "tab",
  "taipei",
  "talk",
  "taobao",
  "target",
  "tatamotors",
  "tatar",
  "tattoo",
  "tax",
  "taxi",
  "tc",
  "tci",
  "td",
  "tdk",
  "team",
  "tech",
  "technology",
  "tel",
  "telecity",
  "telefonica",
  "temasek",
  "tennis",
  "teva",
  "tf",
  "tg",
  "th",
  "thd",
  "theater",
  "theatre",
  "tiaa",
  "tickets",
  "tienda",
  "tiffany",
  "tips",
  "tires",
  "tirol",
  "tj",
  "tjmaxx",
  "tjx",
  "tk",
  "tkmaxx",
  "tl",
  "tm",
  "tmall",
  "tn",
  "to",
  "today",
  "tokyo",
  "tools",
  "top",
  "toray",
  "toshiba",
  "total",
  "tours",
  "town",
  "toyota",
  "toys",
  "tr",
  "trade",
  "trading",
  "training",
  "travel",
  "travelchannel",
  "travelers",
  "travelersinsurance",
  "trust",
  "trv",
  "tt",
  "tube",
  "tui",
  "tunes",
  "tushu",
  "tv",
  "tvs",
  "tw",
  "tz",
  "ua",
  "ubank",
  "ubs",
  "uconnect",
  "ug",
  "uk",
  "unicom",
  "university",
  "uno",
  "uol",
  "ups",
  "us",
  "uy",
  "uz",
  "va",
  "vacations",
  "vana",
  "vanguard",
  "vc",
  "ve",
  "vegas",
  "ventures",
  "verisign",
  "versicherung",
  "vet",
  "vg",
  "vi",
  "viajes",
  "video",
  "vig",
  "viking",
  "villas",
  "vin",
  "vip",
  "virgin",
  "visa",
  "vision",
  "vista",
  "vistaprint",
  "viva",
  "vivo",
  "vlaanderen",
  "vn",
  "vodka",
  "volkswagen",
  "volvo",
  "vote",
  "voting",
  "voto",
  "voyage",
  "vu",
  "vuelos",
  "wales",
  "walmart",
  "walter",
  "wang",
  "wanggou",
  "warman",
  "watch",
  "watches",
  "weather",
  "weatherchannel",
  "webcam",
  "weber",
  "website",
  "wed",
  "wedding",
  "weibo",
  "weir",
  "wf",
  "whoswho",
  "wien",
  "wiki",
  "williamhill",
  "win",
  "windows",
  "wine",
  "winners",
  "wme",
  "wolterskluwer",
  "woodside",
  "work",
  "works",
  "world",
  "wow",
  "ws",
  "wtc",
  "wtf",
  "xbox",
  "xerox",
  "xfinity",
  "xihuan",
  "xin",
  "कॉम", // xn--11b4c3d
  "セール", // xn--1ck2e1b
  "佛山", // xn--1qqw23a
  "ಭಾರತ", // xn--2scrj9c
  "慈善", // xn--30rr7y
  "集团", // xn--3bst00m
  "在线", // xn--3ds443g
  "한국", // xn--3e0b707e
  "ଭାରତ", // xn--3hcrj9c
  "大众汽车", // xn--3oq18vl8pn36a
  "点看", // xn--3pxu8k
  "คอม", // xn--42c2d9a
  "ভাৰত", // xn--45br5cyl
  "ভারত", // xn--45brj9c
  "八卦", // xn--45q11c
  "موقع", // xn--4gbrim
  "বাংলা", // xn--54b7fta0cc
  "公益", // xn--55qw42g
  "公司", // xn--55qx5d
  "香格里拉", // xn--5su34j936bgsg
  "网站", // xn--5tzm5g
  "移动", // xn--6frz82g
  "我爱你", // xn--6qq986b3xl
  "москва", // xn--80adxhks
  "қаз", // xn--80ao21a
  "католик", // xn--80aqecdr1a
  "онлайн", // xn--80asehdb
  "сайт", // xn--80aswg
  "联通", // xn--8y0a063a
  "срб", // xn--90a3ac
  "бг", // xn--90ae
  "бел", // xn--90ais
  "קום", // xn--9dbq2a
  "时尚", // xn--9et52u
  "微博", // xn--9krt00a
  "淡马锡", // xn--b4w605ferd
  "ファッション", // xn--bck1b9a5dre4c
  "орг", // xn--c1avg
  "नेट", // xn--c2br7g
  "ストア", // xn--cck2b3b
  "삼성", // xn--cg4bki
  "சிங்கப்பூர்", // xn--clchc0ea0b2g2a9gcd
  "商标", // xn--czr694b
  "商店", // xn--czrs0t
  "商城", // xn--czru2d
  "дети", // xn--d1acj3b
  "мкд", // xn--d1alf
  "ею", // xn--e1a4c
  "ポイント", // xn--eckvdtc9d
  "新闻", // xn--efvy88h
  "工行", // xn--estv75g
  "家電", // xn--fct429k
  "كوم", // xn--fhbei
  "中文网", // xn--fiq228c5hs
  "中信", // xn--fiq64b
  "中国", // xn--fiqs8s
  "中國", // xn--fiqz9s
  "娱乐", // xn--fjq720a
  "谷歌", // xn--flw351e
  "భారత్", // xn--fpcrj9c3d
  "ලංකා", // xn--fzc2c9e2c
  "電訊盈科", // xn--fzys8d69uvgm
  "购物", // xn--g2xx48c
  "クラウド", // xn--gckr3f0f
  "ભારત", // xn--gecrj9c
  "通販", // xn--gk3at1e
  "भारतम्", // xn--h2breg3eve
  "भारत", // xn--h2brj9c
  "भारोत", // xn--h2brj9c8c
  "网店", // xn--hxt814e
  "संगठन", // xn--i1b6b1a6a2e
  "餐厅", // xn--imr513n
  "网络", // xn--io0a7i
  "ком", // xn--j1aef
  "укр", // xn--j1amh
  "香港", // xn--j6w193g
  "诺基亚", // xn--jlq61u9w7b
  "食品", // xn--jvr189m
  "飞利浦", // xn--kcrx77d1x4a
  "台湾", // xn--kprw13d
  "台灣", // xn--kpry57d
  "手表", // xn--kpu716f
  "手机", // xn--kput3i
  "мон", // xn--l1acc
  "الجزائر", // xn--lgbbat1ad8j
  "عمان", // xn--mgb9awbf
  "ارامكو", // xn--mgba3a3ejt
  "ایران", // xn--mgba3a4f16a
  "العليان", // xn--mgba7c0bbn0a
  "اتصالات", // xn--mgbaakc7dvf
  "امارات", // xn--mgbaam7a8h
  "بازار", // xn--mgbab2bd
  "پاکستان", // xn--mgbai9azgqp6j
  "الاردن", // xn--mgbayh7gpa
  "موبايلي", // xn--mgbb9fbpob
  "بارت", // xn--mgbbh1a
  "بھارت", // xn--mgbbh1a71e
  "المغرب", // xn--mgbc0a9azcg
  "ابوظبي", // xn--mgbca7dzdo
  "السعودية", // xn--mgberp4a5d4ar
  "ڀارت", // xn--mgbgu82a
  "كاثوليك", // xn--mgbi4ecexp
  "سودان", // xn--mgbpl2fh
  "همراه", // xn--mgbt3dhd
  "عراق", // xn--mgbtx2b
  "مليسيا", // xn--mgbx4cd0ab
  "澳門", // xn--mix891f
  "닷컴", // xn--mk1bu44c
  "政府", // xn--mxtq1m
  "شبكة", // xn--ngbc5azd
  "بيتك", // xn--ngbe9e0a
  "عرب", // xn--ngbrx
  "გე", // xn--node
  "机构", // xn--nqv7f
  "组织机构", // xn--nqv7fs00ema
  "健康", // xn--nyqy26a
  "ไทย", // xn--o3cw4h
  "سورية", // xn--ogbpf8fl
  "招聘", // xn--otu796d
  "рус", // xn--p1acf
  "рф", // xn--p1ai
  "珠宝", // xn--pbt977c
  "تونس", // xn--pgbs0dh
  "大拿", // xn--pssy2u
  "みんな", // xn--q9jyb4c
  "グーグル", // xn--qcka1pmc
  "ελ", // xn--qxam
  "世界", // xn--rhqv96g
  "書籍", // xn--rovu88b
  "ഭാരതം", // xn--rvc1e0am3e
  "ਭਾਰਤ", // xn--s9brj9c
  "网址", // xn--ses554g
  "닷넷", // xn--t60b56a
  "コム", // xn--tckwe
  "天主教", // xn--tiq49xqyj
  "游戏", // xn--unup4y
  "vermögensberater", // xn--vermgensberater-ctb
  "vermögensberatung", // xn--vermgensberatung-pwb
  "企业", // xn--vhquv
  "信息", // xn--vuq861b
  "嘉里大酒店", // xn--w4r85el8fhu5dnra
  "嘉里", // xn--w4rs40l
  "مصر", // xn--wgbh1c
  "قطر", // xn--wgbl6a
  "广东", // xn--xhq521b
  "இலங்கை", // xn--xkc2al3hye2a
  "இந்தியா", // xn--xkc2dl3a5ee0h
  "հայ", // xn--y9a3aq
  "新加坡", // xn--yfro4i67o
  "فلسطين", // xn--ygbi2ammx
  "政务", // xn--zfr164b
  "xperia",
  "xxx",
  "xyz",
  "yachts",
  "yahoo",
  "yamaxun",
  "yandex",
  "ye",
  "yodobashi",
  "yoga",
  "yokohama",
  "you",
  "youtube",
  "yt",
  "yun",
  "za",
  "zappos",
  "zara",
  "zero",
  "zip",
  "zippo",
  "zm",
  "zone",
  "zuerich",
  "zw"
];


/***/ }),

/***/ "./node_modules/uc.micro/categories/Cc/regex.js":
/*!******************************************************!*\
  !*** ./node_modules/uc.micro/categories/Cc/regex.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[\0-\x1F\x7F-\x9F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/P/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/P/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/Z/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/Z/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/

/***/ }),

/***/ "./node_modules/uc.micro/properties/Any/regex.js":
/*!*******************************************************!*\
  !*** ./node_modules/uc.micro/properties/Any/regex.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/

/***/ })

}]);
//# sourceMappingURL=10.bundle.js.map
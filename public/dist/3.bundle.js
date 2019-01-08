(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/components/NavTabs.jsx":
/*!************************************!*\
  !*** ./src/components/NavTabs.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Button = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js"));

var _Tabs = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/Tabs/index.js"));

var _Tab = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/Tab/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

var _DeviceSizes = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// react:
// react-router:
// material ui:
// redux:
// recompose:
// jss:
// device sizes:
// jss:
const styles = theme => ({
  root: {
    gridArea: "nav"
  }
});

class NavTabs extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;

    if (this.props.hideNav) {
      return null;
    }

    return _react.default.createElement(_Paper.default, {
      className: classes.root,
      elevation: 4
    }, _react.default.createElement(_Tabs.default, {
      centered: true,
      value: this.props.tabNumber,
      indicatorColor: "primary",
      textColor: "primary" // scrollable
      // scrollButtons="auto"
      ,
      onChange: (event, value) => {
        this.props.handleChange(value);

        if (value == 2) {
          this.props.history.push("/about");
        }
      }
    }, !this.props.loggedIn ? _react.default.createElement(_Tab.default, {
      label: "Twitch"
    }) : null, _react.default.createElement(_Tab.default, {
      label: "Switch"
    }), _react.default.createElement(_Tab.default, {
      label: "Xbox"
    }), _react.default.createElement(_Tab.default, {
      label: "About"
    })));
  }

}

const mapStateToProps = state => {
  return {
    loggedIn: state.userInfo.loggedIn,
    hideNav: state.settings.hideNav,
    tabNumber: state.settings.streamNumber
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(NavTabs);

exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=3.bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/components/Picture.jsx":
/*!************************************!*\
  !*** ./src/components/Picture.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _LaglessView = _interopRequireDefault(__webpack_require__(/*! src/components/LaglessView.jsx */ "./src/components/LaglessView.jsx"));

var _LaglessBar = _interopRequireDefault(__webpack_require__(/*! src/components/LaglessBar.jsx */ "./src/components/LaglessBar.jsx"));

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Paper = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// react:
// material ui:
// redux:
// recompose:
let classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"); // jss:


const styles = theme => ({
  root: {
    gridArea: "picture",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "5px",
    margin: 0,
    overflowX: "hidden"
  },
  hideChat: {
    gridColumn: "1/3"
  }
});

class Picture extends _react.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    let pictureClasses = classNames(classes.root, {
      [classes.hideChat]: this.props.hideChat
    });
    return _react.default.createElement(_Paper.default, {
      id: "picture",
      elevation: 3,
      className: pictureClasses
    }, _react.default.createElement(_LaglessView.default, {
      num: this.props.tab
    }), _react.default.createElement(_LaglessBar.default, null));
  }

}

const mapStateToProps = state => {
  return {
    hideChat: state.settings.hideChat
  };
};

var _default = (0, _recompose.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps))(Picture);

exports.default = _default;
module.exports = exports.default;

/***/ })

}]);
//# sourceMappingURL=4.bundle.js.map
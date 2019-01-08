(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@jukben/emoji-search/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@jukben/emoji-search/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(/*! babel-runtime/core-js/object/entries */ "./node_modules/babel-runtime/core-js/object/entries.js");

var _entries2 = _interopRequireDefault(_entries);

var _emojilib = __webpack_require__(/*! emojilib */ "./node_modules/emojilib/index.js");

var _emojilib2 = _interopRequireDefault(_emojilib);

var _matchSorter = __webpack_require__(/*! match-sorter */ "./node_modules/match-sorter/dist/match-sorter.esm.js");

var _matchSorter2 = _interopRequireDefault(_matchSorter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* build proper library with included name of the emoji */
var library = (0, _entries2.default)(_emojilib2.default.lib).map(function (_ref) {
  var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
      name = _ref2[0],
      emojiObject = _ref2[1];

  return (0, _extends3.default)({}, emojiObject, {
    keywords: [name].concat((0, _toConsumableArray3.default)(emojiObject.keywords)),
    name: name
  });
});

exports.default = function (key) {
  return (0, _matchSorter2.default)(library, key, { keys: ["keywords"] });
};


/***/ }),

/***/ "./node_modules/@material-ui/icons/Send.js":
/*!*************************************************!*\
  !*** ./node_modules/@material-ui/icons/Send.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@material-ui/icons/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Send');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@webscopeio/react-textarea-autocomplete/dist/react-textarea-autocomplete.es.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! textarea-caret */ "./node_modules/@webscopeio/react-textarea-autocomplete/node_modules/textarea-caret/index.js");
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(textarea_caret__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var custom_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! custom-event */ "./node_modules/custom-event/index.js");
/* harmony import */ var custom_event__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(custom_event__WEBPACK_IMPORTED_MODULE_3__);
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






var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY_CODES = {
  ESC: 27,
  UP: 38,
  DOWN: 40,
  ENTER: 13,
  TAB: 9
};

// This is self-made key shortcuts manager, used for caching key strokes

var Listener = function Listener() {
  var _this = this;

  _classCallCheck$1(this, Listener);

  this.startListen = function () {
    if (!_this.refCount) {
      // prevent multiple listeners in case of multiple TextareaAutocomplete components on page
      document.addEventListener('keydown', _this.f);
    }
    _this.refCount++;
  };

  this.stopListen = function () {
    _this.refCount--;
    if (!_this.refCount) {
      // prevent disable listening in case of multiple TextareaAutocomplete components on page
      document.removeEventListener('keydown', _this.f);
    }
  };

  this.add = function (keyCodes, fn) {
    var keyCode = keyCodes;

    if ((typeof keyCode === 'undefined' ? 'undefined' : _typeof$1(keyCode)) !== 'object') keyCode = [keyCode];

    _this.listeners[_this.index] = {
      keyCode: keyCode,
      fn: fn
    };

    _this.index += 1;

    return _this.index;
  };

  this.remove = function (id) {
    delete _this.listeners[id];
    _this.index -= 1;
  };

  this.removeAll = function () {
    _this.listeners = {};
    _this.index = 0;
  };

  this.index = 0;
  this.listeners = {};
  this.refCount = 0;

  this.f = function (e) {
    var code = e.keyCode || e.which;
    for (var i = 0; i < _this.index; i += 1) {
      var _listeners$i = _this.listeners[i],
          _keyCode = _listeners$i.keyCode,
          _fn = _listeners$i.fn;

      if (_keyCode.includes(code)) _fn(e);
    }
  };
};

var Listeners = new Listener();

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits$2(Item, _React$Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$3(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.selectItem = function () {
      var _this$props = _this.props,
          item = _this$props.item,
          onSelectHandler = _this$props.onSelectHandler;

      onSelectHandler(item);
    }, _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  _createClass$2(Item, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.item !== nextProps.item || this.props.selected !== nextProps.selected || this.props.style !== nextProps.style || this.props.className !== nextProps.className) {
        return true;
      }

      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Component = _props.component,
          style = _props.style,
          onClickHandler = _props.onClickHandler,
          item = _props.item,
          selected = _props.selected,
          className = _props.className,
          innerRef = _props.innerRef;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'li',
        { className: 'rta__item ' + (className || ''), style: style },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            className: 'rta__entity ' + (selected === true ? 'rta__entity--selected' : ''),
            role: 'button',
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
            , ref: innerRef
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, { selected: selected, entity: item })
        )
      );
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits$1(List, _React$Component);

  function List() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck$2(this, List);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selectedItem: null
    }, _this.onPressEnter = function (e) {
      if (typeof e !== 'undefined') {
        e.preventDefault();
      }

      var values = _this.props.values;


      _this.modifyText(values[_this.getPositionInList()]);
    }, _this.getPositionInList = function () {
      var values = _this.props.values;
      var selectedItem = _this.state.selectedItem;


      if (!selectedItem) return 0;

      return values.findIndex(function (a) {
        return _this.getId(a) === _this.getId(selectedItem);
      });
    }, _this.getId = function (item) {
      var textToReplace = _this.props.getTextToReplace(item);
      if (textToReplace.key) {
        return textToReplace.key;
      }

      if (typeof item === 'string' || !item.key) {
        return textToReplace.text;
      }

      return item.key;
    }, _this.listeners = [], _this.itemsRef = {}, _this.modifyText = function (value) {
      if (!value) return;

      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          getTextToReplace = _this$props.getTextToReplace;


      onSelect(getTextToReplace(value));
    }, _this.selectItem = function (item) {
      var keyboard = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_this.state.selectedItem === item) return;

      _this.setState({ selectedItem: item }, function () {
        if (keyboard) {
          _this.props.dropdownScroll(_this.itemsRef[_this.getId(item)]);
        }
      });
    }, _this.scroll = function (e) {
      e.preventDefault();

      var values = _this.props.values;


      var code = e.keyCode || e.which;

      var oldPosition = _this.getPositionInList();
      var newPosition = void 0;
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
    }, _this.isSelected = function (item) {
      var selectedItem = _this.state.selectedItem;

      if (!selectedItem) return false;

      return _this.getId(selectedItem) === _this.getId(item);
    }, _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  _createClass$1(List, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.listeners.push(Listeners.add([KEY_CODES.DOWN, KEY_CODES.UP], this.scroll), Listeners.add([KEY_CODES.ENTER, KEY_CODES.TAB], this.onPressEnter));

      var values = this.props.values;

      if (values && values[0]) this.selectItem(values[0]);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref2) {
      var _this2 = this;

      var oldValues = _ref2.values;
      var values = this.props.values;


      var oldValuesSerialized = oldValues.map(function (val) {
        return _this2.getId(val);
      }).join('');
      var newValuesSerialized = values.map(function (val) {
        return _this2.getId(val);
      }).join('');

      if (oldValuesSerialized !== newValuesSerialized && values && values[0]) {
        this.selectItem(values[0]);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var listener = void 0;
      while (this.listeners.length) {
        listener = this.listeners.pop();
        Listeners.remove(listener);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          values = _props.values,
          component = _props.component,
          style = _props.style,
          itemClassName = _props.itemClassName,
          className = _props.className,
          itemStyle = _props.itemStyle;


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'ul',
        { className: 'rta__list ' + (className || ''), style: style },
        values.map(function (item) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
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
        })
      );
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

function defaultScrollToItem(container, item) {
  var itemHeight = parseInt(getComputedStyle(item).getPropertyValue('height'), 10);

  var containerHight = parseInt(getComputedStyle(container).getPropertyValue('height'), 10) - itemHeight;

  var itemOffsetTop = item.offsetTop;
  var actualScrollTop = container.scrollTop;

  if (itemOffsetTop < actualScrollTop + containerHight && actualScrollTop < itemOffsetTop) {
    return;
  }

  // eslint-disable-next-line
  container.scrollTop = itemOffsetTop;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_CARET_POSITION = 'next';

var errorMessage = function errorMessage(message) {
  return console.error('RTA: dataProvider fails: ' + message + '\n    \nCheck the documentation or create issue if you think it\'s bug. https://github.com/webscopeio/react-textarea-autocomplete/issues');
};

var ReactTextareaAutocomplete = function (_React$Component) {
  _inherits(ReactTextareaAutocomplete, _React$Component);

  function ReactTextareaAutocomplete(props) {
    _classCallCheck(this, ReactTextareaAutocomplete);

    var _this = _possibleConstructorReturn(this, (ReactTextareaAutocomplete.__proto__ || Object.getPrototypeOf(ReactTextareaAutocomplete)).call(this, props));

    _initialiseProps.call(_this);

    Listeners.add(KEY_CODES.ESC, function () {
      return _this._closeAutocomplete();
    });

    var _this$props = _this.props,
        loadingComponent = _this$props.loadingComponent,
        trigger = _this$props.trigger,
        value = _this$props.value;


    if (value) _this.state.value = value;

    _this._createRegExp();

    if (!loadingComponent) {
      throw new Error('RTA: loadingComponent is not defined');
    }

    if (!trigger) {
      throw new Error('RTA: trigger is not defined');
    }
    return _this;
  }

  _createClass(ReactTextareaAutocomplete, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      Listeners.startListen();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(_ref) {
      var oldTrigger = _ref.trigger;
      var trigger = this.props.trigger;

      if (Object.keys(trigger).join('') !== Object.keys(oldTrigger).join('')) {
        this._createRegExp();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      Listeners.stopListen();
    }

    /**
     * Close autocomplete, also clean up trigger (to avoid slow promises)
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          Loader = _props.loadingComponent,
          style = _props.style,
          className = _props.className,
          listStyle = _props.listStyle,
          itemStyle = _props.itemStyle,
          listClassName = _props.listClassName,
          itemClassName = _props.itemClassName,
          dropdownClassName = _props.dropdownClassName,
          dropdownStyle = _props.dropdownStyle,
          containerStyle = _props.containerStyle,
          containerClassName = _props.containerClassName,
          loaderStyle = _props.loaderStyle,
          loaderClassName = _props.loaderClassName;
      var _state = this.state,
          left = _state.left,
          top = _state.top,
          dataLoading = _state.dataLoading,
          currentTrigger = _state.currentTrigger,
          component = _state.component,
          value = _state.value,
          textToReplace = _state.textToReplace;


      var suggestionData = this._getSuggestions();

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        {
          className: 'rta ' + (dataLoading === true ? 'rta--loading' : '') + ' ' + (containerClassName || ''),
          style: containerStyle
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('textarea', Object.assign({}, this._cleanUpProps(), {
          ref: function ref(_ref2) {
            _this2.props.innerRef && _this2.props.innerRef(_ref2);
            _this2.textareaRef = _ref2;
          },
          className: 'rta__textarea ' + (className || ''),
          onChange: this._changeHandler,
          onSelect: this._selectHandler,
          onScroll: this._onScrollHandler,
          onClick:
          // The textarea itself is outside the autoselect dropdown.
          this._onClickAndBlurHandler,
          onBlur: this._onClickAndBlurHandler,
          value: value,
          style: style
        })),
        (dataLoading || suggestionData) && currentTrigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'div',
          {
            ref: function ref(_ref3) {
              // $FlowFixMe
              _this2.dropdownRef = _ref3;
            },
            style: Object.assign({ top: top, left: left }, dropdownStyle),
            className: 'rta__autocomplete ' + (dropdownClassName || '')
          },
          suggestionData && component && textToReplace && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
            values: suggestionData,
            component: component,
            style: listStyle,
            className: listClassName,
            itemClassName: itemClassName,
            itemStyle: itemStyle,
            getTextToReplace: textToReplace,
            onSelect: this._onSelect,
            dropdownScroll: this._dropdownScroll
          }),
          dataLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            {
              className: 'rta__loader ' + (suggestionData !== null ? 'rta__loader--suggestion-data' : 'rta__loader--empty-suggestion-data') + ' ' + (loaderClassName || ''),
              style: loaderStyle
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loader, { data: suggestionData })
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(_ref4) {
      var value = _ref4.value;

      if (value === null || value === undefined) return null;

      return {
        value: value
      };
    }
  }]);

  return ReactTextareaAutocomplete;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

ReactTextareaAutocomplete.defaultProps = {
  closeOnClickOutside: false,
  movePopupAsYouType: false,
  value: null,
  minChar: 1,
  scrollToItem: true
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    top: null,
    left: null,
    currentTrigger: null,
    actualToken: '',
    data: null,
    value: '',
    dataLoading: false,
    selectionEnd: 0,
    selectionStart: 0,
    component: null,
    textToReplace: null
  };

  this.getSelectionPosition = function () {
    if (!_this3.textareaRef) return null;

    return {
      selectionStart: _this3.textareaRef.selectionStart,
      selectionEnd: _this3.textareaRef.selectionEnd
    };
  };

  this.getSelectedText = function () {
    if (!_this3.textareaRef) return null;
    var _textareaRef = _this3.textareaRef,
        selectionStart = _textareaRef.selectionStart,
        selectionEnd = _textareaRef.selectionEnd;


    if (selectionStart === selectionEnd) return null;

    return _this3.state.value.substr(selectionStart, selectionEnd - selectionStart);
  };

  this.setCaretPosition = function () {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    if (!_this3.textareaRef) return;

    _this3.textareaRef.focus();
    _this3.textareaRef.setSelectionRange(position, position);
  };

  this.getCaretPosition = function () {
    if (!_this3.textareaRef) {
      return 0;
    }

    var position = _this3.textareaRef.selectionEnd;
    return position;
  };

  this._onSelect = function (newToken) {
    var _state2 = _this3.state,
        selectionEnd = _state2.selectionEnd,
        currentTrigger = _state2.currentTrigger,
        textareaValue = _state2.value;
    var trigger = _this3.props.trigger;


    if (!currentTrigger) return;

    var computeCaretPosition = function computeCaretPosition(position, token, startToken) {
      switch (position) {
        case 'start':
          return startToken;
        case 'next':
        case 'end':
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
    new RegExp('\\' + currentTrigger + ('[^\\' + currentTrigger + (trigger[currentTrigger].allowWhitespace ? '' : '\\s') + ']') + '*$'));

    // we add space after emoji is selected if a caret position is next
    var newTokenString = newToken.caretPosition === 'next' ? newToken.text + ' ' : newToken.text;

    var newCaretPosition = computeCaretPosition(newToken.caretPosition, newTokenString, startOfTokenPosition);

    var modifiedText = textToModify.substring(0, startOfTokenPosition) + newTokenString;

    var newValue = textareaValue.replace(textToModify, modifiedText);
    // set the new textarea value and after that set the caret back to its position
    _this3.setState({
      value: newValue,
      dataLoading: false
    }, function () {
      // fire onChange event after successful selection
      var e = new custom_event__WEBPACK_IMPORTED_MODULE_3___default.a('change', { bubbles: true });
      _this3.textareaRef.value = newValue;
      _this3.textareaRef.dispatchEvent(e);
      _this3._changeHandler(e);

      var scrollTop = _this3.textareaRef.scrollTop;
      _this3.setCaretPosition(newCaretPosition);
      /*
        Chrome does not maintain scroll position
        Relevant discussion https://github.com/webscopeio/react-textarea-autocomplete/pull/97
      */
      if (window.chrome) {
        _this3.textareaRef.scrollTop = scrollTop;
      }
    });
  };

  this._getTextToReplace = function (_ref6) {
    var actualToken = _ref6.actualToken,
        currentTrigger = _ref6.currentTrigger;

    var triggerSettings = _this3.props.trigger[currentTrigger];

    if (!currentTrigger || !triggerSettings) return null;

    var output = triggerSettings.output;


    return function (item) {
      if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && (!output || typeof output !== 'function')) {
        throw new Error('Output functor is not defined! If you are using items as object you have to define "output" function. https://github.com/webscopeio/react-textarea-autocomplete#trigger-type');
      }

      if (output) {
        var textToReplace = output(item, currentTrigger);

        if (!textToReplace || typeof textToReplace === 'number') {
          throw new Error('Output functor should return string or object in shape {text: string, caretPosition: string | number}.\nGot "' + String(textToReplace) + '". Check the implementation for trigger "' + currentTrigger + '" and its token "' + actualToken + '"\n\nSee https://github.com/webscopeio/react-textarea-autocomplete#trigger-type for more informations.\n');
        }

        if (typeof textToReplace === 'string') {
          return {
            text: textToReplace,
            caretPosition: DEFAULT_CARET_POSITION
          };
        }

        if (!textToReplace.text) {
          throw new Error('Output "text" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger "' + currentTrigger + '" and its token "' + actualToken + '"\n');
        }

        if (!textToReplace.caretPosition) {
          throw new Error('Output "caretPosition" is not defined! Object should has shape {text: string, caretPosition: string | number}. Check the implementation for trigger "' + currentTrigger + '" and its token "' + actualToken + '"\n');
        }

        return textToReplace;
      }

      if (typeof item !== 'string') {
        throw new Error('Output item should be string\n');
      }

      return {
        text: '' + currentTrigger + item + currentTrigger,
        caretPosition: DEFAULT_CARET_POSITION
      };
    };
  };

  this._getCurrentTriggerSettings = function () {
    var currentTrigger = _this3.state.currentTrigger;


    if (!currentTrigger) return null;

    return _this3.props.trigger[currentTrigger];
  };

  this._getValuesFromProvider = function () {
    var _state3 = _this3.state,
        currentTrigger = _state3.currentTrigger,
        actualToken = _state3.actualToken;

    var triggerSettings = _this3._getCurrentTriggerSettings();

    if (!currentTrigger || !triggerSettings) {
      return;
    }

    var dataProvider = triggerSettings.dataProvider,
        component = triggerSettings.component;


    if (typeof dataProvider !== 'function') {
      throw new Error('Trigger provider has to be a function!');
    }

    _this3.setState({
      dataLoading: true
    });

    var providedData = dataProvider(actualToken);

    if (!(providedData instanceof Promise)) {
      providedData = Promise.resolve(providedData);
    }

    providedData.then(function (data) {
      if (!Array.isArray(data)) {
        throw new Error('Trigger provider has to provide an array!');
      }

      if (typeof component !== 'function') {
        throw new Error('Component should be defined!');
      }

      // throw away if we resolved old trigger
      if (currentTrigger !== _this3.state.currentTrigger) return;

      // if we haven't resolved any data let's close the autocomplete
      if (!data.length) {
        _this3._closeAutocomplete();
        return;
      }

      _this3.setState({
        dataLoading: false,
        data: data,
        component: component
      });
    }).catch(function (e) {
      return errorMessage(e.message);
    });
  };

  this._getSuggestions = function () {
    var _state4 = _this3.state,
        currentTrigger = _state4.currentTrigger,
        data = _state4.data;


    if (!currentTrigger || !data || data && !data.length) return null;

    return data;
  };

  this._createRegExp = function () {
    var trigger = _this3.props.trigger;

    // negative lookahead to match only the trigger + the actual token = "bladhwd:adawd:word test" => ":word"
    // https://stackoverflow.com/a/8057827/2719917

    _this3.tokenRegExp = new RegExp('(' + Object.keys(trigger)
    // the sort is important for multi-char combos as "/kick", "/"
    .sort(function (a, b) {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }).map(function (a) {
      return '\\' + a;
    }).join('|') + ')((?:(?!\\1)[^\\s])*$)');
  };

  this._closeAutocomplete = function () {
    _this3.setState({
      data: null,
      dataLoading: false,
      currentTrigger: null,
      top: null,
      left: null
    });
  };

  this._cleanUpProps = function () {
    var props = Object.assign({}, _this3.props);
    var notSafe = ['loadingComponent', 'containerStyle', 'minChar', 'scrollToItem', 'ref', 'innerRef', 'onChange', 'onCaretPositionChange', 'className', 'value', 'trigger', 'listStyle', 'itemStyle', 'containerStyle', 'loaderStyle', 'className', 'containerClassName', 'listClassName', 'itemClassName', 'loaderClassName', 'closeOnClickOutside', 'dropdownStyle', 'dropdownClassName', 'movePopupAsYouType'];

    // eslint-disable-next-line
    for (var prop in props) {
      if (notSafe.includes(prop)) delete props[prop];
    }

    return props;
  };

  this._changeHandler = function (e) {
    var _props2 = _this3.props,
        trigger = _props2.trigger,
        onChange = _props2.onChange,
        minChar = _props2.minChar,
        onCaretPositionChange = _props2.onCaretPositionChange,
        movePopupAsYouType = _props2.movePopupAsYouType;
    var _state5 = _this3.state,
        top = _state5.top,
        left = _state5.left;


    var textarea = e.target;
    var selectionEnd = textarea.selectionEnd,
        selectionStart = textarea.selectionStart;

    var value = textarea.value;

    if (onChange && e) {
      e.persist && e.persist();
      onChange(e);
    }

    if (onCaretPositionChange) {
      var caretPosition = _this3.getCaretPosition();
      onCaretPositionChange(caretPosition);
    }

    _this3.setState({
      value: value
    });

    var tokenMatch = _this3.tokenRegExp.exec(value.slice(0, selectionEnd));
    var lastToken = tokenMatch && tokenMatch[0];

    var currentTrigger = tokenMatch && tokenMatch[1] || null;

    /*
     if we lost the trigger token or there is no following character we want to close
     the autocomplete
    */
    if ((!lastToken || lastToken.length <= minChar) && (
    // check if our current trigger disallows whitespace
    _this3.state.currentTrigger && !trigger[_this3.state.currentTrigger].allowWhitespace || !_this3.state.currentTrigger)) {
      _this3._closeAutocomplete();
      return;
    }

    /**
     * This code has to be sync that is the reason why we obtain the currentTrigger
     * from currentTrigger not this.state.currentTrigger
     *
     * Check if the currently typed token has to be afterWhitespace, or not.
     */
    if (currentTrigger && value[tokenMatch.index - 1] && trigger[currentTrigger].afterWhitespace && !value[tokenMatch.index - 1].match(/\s/)) {
      _this3._closeAutocomplete();
      return;
    }

    /**
      If our current trigger allows whitespace
      get the correct token for DataProvider, so we need to construct new RegExp
     */
    if (_this3.state.currentTrigger && trigger[_this3.state.currentTrigger].allowWhitespace) {
      tokenMatch = new RegExp('\\' + _this3.state.currentTrigger + '.*$').exec(value.slice(0, selectionEnd));
      lastToken = tokenMatch && tokenMatch[0];

      if (!lastToken) {
        _this3._closeAutocomplete();
        return;
      }

      currentTrigger = Object.keys(trigger).find(function (a) {
        return a === lastToken[0];
      }) || null;
    }

    var actualToken = lastToken.slice(1);

    // if trigger is not configured step out from the function, otherwise proceed
    if (!currentTrigger) {
      return;
    }

    if (movePopupAsYouType || top === null && left === null ||
    // if the trigger got changed, let's reposition the autocomplete
    _this3.state.currentTrigger !== currentTrigger) {
      var _getCaretCoordinates = textarea_caret__WEBPACK_IMPORTED_MODULE_2___default()(textarea, selectionEnd),
          newTop = _getCaretCoordinates.top,
          newLeft = _getCaretCoordinates.left;

      _this3.setState({
        // make position relative to textarea
        top: newTop - _this3.textareaRef.scrollTop || 0,
        left: newLeft
      });
    }

    _this3.setState({
      selectionEnd: selectionEnd,
      selectionStart: selectionStart,
      currentTrigger: currentTrigger,
      textToReplace: _this3._getTextToReplace({
        actualToken: actualToken,
        currentTrigger: currentTrigger
      }),
      actualToken: actualToken
    }, function () {
      try {
        _this3._getValuesFromProvider();
      } catch (err) {
        errorMessage(err.message);
      }
    });
  };

  this._selectHandler = function (e) {
    var _props3 = _this3.props,
        onCaretPositionChange = _props3.onCaretPositionChange,
        onSelect = _props3.onSelect;


    if (onCaretPositionChange) {
      var caretPosition = _this3.getCaretPosition();
      onCaretPositionChange(caretPosition);
    }

    if (onSelect) {
      e.persist();
      onSelect(e);
    }
  };

  this._onClickAndBlurHandler = function (e) {
    var _props4 = _this3.props,
        closeOnClickOutside = _props4.closeOnClickOutside,
        onBlur = _props4.onBlur;

    // If this is a click: e.target is the textarea, and e.relatedTarget is the thing
    // that was actually clicked. If we clicked inside the autoselect dropdown, then
    // that's not a blur, from the autoselect's point of view, so then do nothing.

    var el = e.relatedTarget;
    if (_this3.dropdownRef && el instanceof Node && _this3.dropdownRef.contains(el)) {
      return;
    }

    if (closeOnClickOutside) {
      _this3._closeAutocomplete();
    }

    if (onBlur) {
      e.persist();
      onBlur(e);
    }
  };

  this._onScrollHandler = function () {
    _this3._closeAutocomplete();
  };

  this._dropdownScroll = function (item) {
    var scrollToItem = _this3.props.scrollToItem;


    if (!scrollToItem) return;

    if (scrollToItem === true) {
      defaultScrollToItem(_this3.dropdownRef, item);
      return;
    }

    if (typeof scrollToItem !== 'function' || scrollToItem.length !== 2) {
      throw new Error('`scrollToItem` has to be boolean (true for default implementation) or function with two parameters: container, item.');
    }

    scrollToItem(_this3.dropdownRef, item);
  };
};

var triggerPropsCheck = function triggerPropsCheck(_ref5) {
  var trigger = _ref5.trigger;

  if (!trigger) return Error('Invalid prop trigger. Prop missing.');

  var triggers = Object.entries(trigger);

  for (var i = 0; i < triggers.length; i += 1) {
    var _triggers$i = _slicedToArray(triggers[i], 2),
        triggerChar = _triggers$i[0],
        settings = _triggers$i[1];

    if (typeof triggerChar !== 'string') {
      return Error('Invalid prop trigger. Keys of the object has to be string.');
    }

    // $FlowFixMe
    var triggerSetting = settings;

    var component = triggerSetting.component,
        dataProvider = triggerSetting.dataProvider,
        output = triggerSetting.output,
        afterWhitespace = triggerSetting.afterWhitespace,
        allowWhitespace = triggerSetting.allowWhitespace;


    if (!component || typeof component !== 'function') {
      return Error('Invalid prop trigger: component should be defined.');
    }

    if (!dataProvider || typeof dataProvider !== 'function') {
      return Error('Invalid prop trigger: dataProvider should be defined.');
    }

    if (output && typeof output !== 'function') {
      return Error('Invalid prop trigger: output should be a function.');
    }

    if (afterWhitespace && allowWhitespace) {
      return Error('Invalid prop trigger: afterWhitespace and allowWhitespace can be used together');
    }
  }

  return null;
};

ReactTextareaAutocomplete.propTypes = {
  loadingComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  minChar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCaretPositionChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  containerStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  containerClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  closeOnClickOutside: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  listStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  itemStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loaderStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  dropdownStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  listClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  itemClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loaderClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  dropdownClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  trigger: triggerPropsCheck //eslint-disable-line
};

/* harmony default export */ __webpack_exports__["default"] = (ReactTextareaAutocomplete);


/***/ }),

/***/ "./node_modules/@webscopeio/react-textarea-autocomplete/node_modules/textarea-caret/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@webscopeio/react-textarea-autocomplete/node_modules/textarea-caret/index.js ***!
  \***************************************************************************************************/
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

/***/ "./node_modules/@webscopeio/react-textarea-autocomplete/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/@webscopeio/react-textarea-autocomplete/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader!./style.css */ "./node_modules/css-loader/index.js!./node_modules/@webscopeio/react-textarea-autocomplete/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/array/from.js":
/*!**********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/array/from.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/array/from */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/entries.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/entries.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/entries */ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/entries.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/toConsumableArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/toConsumableArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(/*! ../core-js/array/from */ "./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/array/from.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/es6.array.from */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Array.from;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/get-iterator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/is-iterable.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/assign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/fn/object/entries.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/fn/object/entries.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.entries */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.entries.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").Object.entries;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-create.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dps.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gops.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-gpo.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_property-desc.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_redefine.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared-key.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js":
/*!************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-primitive.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/core.is-iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.from.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_ctx.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-object.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_is-array-iter.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-length.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_create-property.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-detect.js")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.object.assign.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.entries.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/es7.object.entries.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_export.js");
var $entries = __webpack_require__(/*! ./_object-to-array */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_object-to-array.js")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-runtime/node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/babel-runtime/node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/@webscopeio/react-textarea-autocomplete/style.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/@webscopeio/react-textarea-autocomplete/style.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rta {\n  position: relative;\n  font-size: 18px;\n  width: 100%;\n  height: 100%;\n}\n.rta__loader.rta__loader--empty-suggestion-data {\n  border-radius: 3px;\n  box-shadow: 0 0 5px rgba(27, 31, 35, 0.1);\n  padding: 5px;\n}\n.rta--loading .rta__loader.rta__loader--suggestion-data {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n}\n.rta--loading .rta__loader.rta__loader--suggestion-data > * {\n  position: relative;\n  top: 50%;\n}\n.rta__textarea {\n  width: 100%;\n  height: 100%;\n  font-size: 1em;\n}\n.rta__autocomplete {\n  position: absolute;\n  display: block;\n  margin-top: 1em;\n}\n.rta__list {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  border: 1px solid #dfe2e5;\n  border-radius: 3px;\n  box-shadow: 0 0 5px rgba(27, 31, 35, 0.1);\n  list-style: none;\n}\n.rta__entity {\n  background: white;\n  width: 100%;\n  text-align: left;\n  outline: none;\n}\n.rta__entity:hover {\n  cursor: pointer;\n}\n.rta__item:not(:last-child) {\n  border-bottom: 1px solid #dfe2e5;\n}\n.rta__entity > * {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.rta__entity--selected {\n  color: #fff;\n  text-decoration: none;\n  background: #0366d6;\n}\n", ""]);

// exports


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
/*! exports provided: 100, 1234, grinning, grimacing, grin, joy, rofl, smiley, smile, sweat_smile, laughing, innocent, wink, blush, slightly_smiling_face, upside_down_face, relaxed, yum, relieved, heart_eyes, kissing_heart, kissing, kissing_smiling_eyes, kissing_closed_eyes, stuck_out_tongue_winking_eye, zany, raised_eyebrow, monocle, stuck_out_tongue_closed_eyes, stuck_out_tongue, money_mouth_face, nerd_face, sunglasses, star_struck, clown_face, cowboy_hat_face, hugs, smirk, no_mouth, neutral_face, expressionless, unamused, roll_eyes, thinking, lying_face, hand_over_mouth, shushing, symbols_over_mouth, exploding_head, flushed, disappointed, worried, angry, rage, pensive, confused, slightly_frowning_face, frowning_face, persevere, confounded, tired_face, weary, triumph, open_mouth, scream, fearful, cold_sweat, hushed, frowning, anguished, cry, disappointed_relieved, drooling_face, sleepy, sweat, sob, dizzy_face, astonished, zipper_mouth_face, nauseated_face, sneezing_face, vomiting, mask, face_with_thermometer, face_with_head_bandage, sleeping, zzz, poop, smiling_imp, imp, japanese_ogre, japanese_goblin, skull, ghost, alien, robot, smiley_cat, smile_cat, joy_cat, heart_eyes_cat, smirk_cat, kissing_cat, scream_cat, crying_cat_face, pouting_cat, palms_up, raised_hands, clap, wave, call_me_hand, +1, -1, facepunch, fist, fist_left, fist_right, v, ok_hand, raised_hand, raised_back_of_hand, open_hands, muscle, pray, handshake, point_up, point_up_2, point_down, point_left, point_right, fu, raised_hand_with_fingers_splayed, love_you, metal, crossed_fingers, vulcan_salute, writing_hand, selfie, nail_care, lips, tongue, ear, nose, eye, eyes, brain, bust_in_silhouette, busts_in_silhouette, speaking_head, baby, child, boy, girl, adult, man, woman, blonde_woman, blonde_man, bearded_person, older_adult, older_man, older_woman, man_with_gua_pi_mao, woman_with_headscarf, woman_with_turban, man_with_turban, policewoman, policeman, construction_worker_woman, construction_worker_man, guardswoman, guardsman, female_detective, male_detective, woman_health_worker, man_health_worker, woman_farmer, man_farmer, woman_cook, man_cook, woman_student, man_student, woman_singer, man_singer, woman_teacher, man_teacher, woman_factory_worker, man_factory_worker, woman_technologist, man_technologist, woman_office_worker, man_office_worker, woman_mechanic, man_mechanic, woman_scientist, man_scientist, woman_artist, man_artist, woman_firefighter, man_firefighter, woman_pilot, man_pilot, woman_astronaut, man_astronaut, woman_judge, man_judge, mrs_claus, santa, sorceress, wizard, woman_elf, man_elf, woman_vampire, man_vampire, woman_zombie, man_zombie, woman_genie, man_genie, mermaid, merman, woman_fairy, man_fairy, angel, pregnant_woman, breastfeeding, princess, prince, bride_with_veil, man_in_tuxedo, running_woman, running_man, walking_woman, walking_man, dancer, man_dancing, dancing_women, dancing_men, couple, two_men_holding_hands, two_women_holding_hands, bowing_woman, bowing_man, man_facepalming, woman_facepalming, woman_shrugging, man_shrugging, tipping_hand_woman, tipping_hand_man, no_good_woman, no_good_man, ok_woman, ok_man, raising_hand_woman, raising_hand_man, pouting_woman, pouting_man, frowning_woman, frowning_man, haircut_woman, haircut_man, massage_woman, massage_man, woman_in_steamy_room, man_in_steamy_room, couple_with_heart_woman_man, couple_with_heart_woman_woman, couple_with_heart_man_man, couplekiss_man_woman, couplekiss_woman_woman, couplekiss_man_man, family_man_woman_boy, family_man_woman_girl, family_man_woman_girl_boy, family_man_woman_boy_boy, family_man_woman_girl_girl, family_woman_woman_boy, family_woman_woman_girl, family_woman_woman_girl_boy, family_woman_woman_boy_boy, family_woman_woman_girl_girl, family_man_man_boy, family_man_man_girl, family_man_man_girl_boy, family_man_man_boy_boy, family_man_man_girl_girl, family_woman_boy, family_woman_girl, family_woman_girl_boy, family_woman_boy_boy, family_woman_girl_girl, family_man_boy, family_man_girl, family_man_girl_boy, family_man_boy_boy, family_man_girl_girl, coat, womans_clothes, tshirt, jeans, necktie, dress, bikini, kimono, lipstick, kiss, footprints, high_heel, sandal, boot, mans_shoe, athletic_shoe, socks, gloves, scarf, womans_hat, tophat, billed_hat, rescue_worker_helmet, mortar_board, crown, school_satchel, pouch, purse, handbag, briefcase, eyeglasses, dark_sunglasses, ring, closed_umbrella, dog, cat, mouse, hamster, rabbit, fox_face, bear, panda_face, koala, tiger, lion, cow, pig, pig_nose, frog, squid, octopus, shrimp, monkey_face, gorilla, see_no_evil, hear_no_evil, speak_no_evil, monkey, chicken, penguin, bird, baby_chick, hatching_chick, hatched_chick, duck, eagle, owl, bat, wolf, boar, horse, unicorn, honeybee, bug, butterfly, snail, beetle, ant, grasshopper, spider, scorpion, crab, snake, lizard, t-rex, sauropod, turtle, tropical_fish, fish, blowfish, dolphin, shark, whale, whale2, crocodile, leopard, zebra, tiger2, water_buffalo, ox, cow2, deer, dromedary_camel, camel, giraffe, elephant, rhinoceros, goat, ram, sheep, racehorse, pig2, rat, mouse2, rooster, turkey, dove, dog2, poodle, cat2, rabbit2, chipmunk, hedgehog, paw_prints, dragon, dragon_face, cactus, christmas_tree, evergreen_tree, deciduous_tree, palm_tree, seedling, herb, shamrock, four_leaf_clover, bamboo, tanabata_tree, leaves, fallen_leaf, maple_leaf, ear_of_rice, hibiscus, sunflower, rose, wilted_flower, tulip, blossom, cherry_blossom, bouquet, mushroom, chestnut, jack_o_lantern, shell, spider_web, earth_americas, earth_africa, earth_asia, full_moon, waning_gibbous_moon, last_quarter_moon, waning_crescent_moon, new_moon, waxing_crescent_moon, first_quarter_moon, waxing_gibbous_moon, new_moon_with_face, full_moon_with_face, first_quarter_moon_with_face, last_quarter_moon_with_face, sun_with_face, crescent_moon, star, star2, dizzy, sparkles, comet, sunny, sun_behind_small_cloud, partly_sunny, sun_behind_large_cloud, sun_behind_rain_cloud, cloud, cloud_with_rain, cloud_with_lightning_and_rain, cloud_with_lightning, zap, fire, boom, snowflake, cloud_with_snow, snowman, snowman_with_snow, wind_face, dash, tornado, fog, open_umbrella, umbrella, droplet, sweat_drops, ocean, green_apple, apple, pear, tangerine, lemon, banana, watermelon, grapes, strawberry, melon, cherries, peach, pineapple, coconut, kiwi_fruit, avocado, broccoli, tomato, eggplant, cucumber, carrot, hot_pepper, potato, corn, sweet_potato, peanuts, honey_pot, croissant, bread, baguette_bread, pretzel, cheese, egg, bacon, steak, pancakes, poultry_leg, meat_on_bone, fried_shrimp, fried_egg, hamburger, fries, stuffed_flatbread, hotdog, pizza, sandwich, canned_food, spaghetti, taco, burrito, green_salad, shallow_pan_of_food, ramen, stew, fish_cake, fortune_cookie, sushi, bento, curry, rice_ball, rice, rice_cracker, oden, dango, shaved_ice, ice_cream, icecream, pie, cake, birthday, custard, candy, lollipop, chocolate_bar, popcorn, dumpling, doughnut, cookie, milk_glass, beer, beers, clinking_glasses, wine_glass, tumbler_glass, cocktail, tropical_drink, champagne, sake, tea, cup_with_straw, coffee, baby_bottle, spoon, fork_and_knife, plate_with_cutlery, bowl_with_spoon, takeout_box, chopsticks, soccer, basketball, football, baseball, tennis, volleyball, rugby_football, 8ball, golf, golfing_woman, golfing_man, ping_pong, badminton, goal_net, ice_hockey, field_hockey, cricket, ski, skier, snowboarder, person_fencing, women_wrestling, men_wrestling, woman_cartwheeling, man_cartwheeling, woman_playing_handball, man_playing_handball, ice_skate, curling_stone, sled, bow_and_arrow, fishing_pole_and_fish, boxing_glove, martial_arts_uniform, rowing_woman, rowing_man, climbing_woman, climbing_man, swimming_woman, swimming_man, woman_playing_water_polo, man_playing_water_polo, woman_in_lotus_position, man_in_lotus_position, surfing_woman, surfing_man, bath, basketball_woman, basketball_man, weight_lifting_woman, weight_lifting_man, biking_woman, biking_man, mountain_biking_woman, mountain_biking_man, horse_racing, business_suit_levitating, trophy, running_shirt_with_sash, medal_sports, medal_military, 1st_place_medal, 2nd_place_medal, 3rd_place_medal, reminder_ribbon, rosette, ticket, tickets, performing_arts, art, circus_tent, woman_juggling, man_juggling, microphone, headphones, musical_score, musical_keyboard, drum, saxophone, trumpet, guitar, violin, clapper, video_game, space_invader, dart, game_die, slot_machine, bowling, red_car, taxi, blue_car, bus, trolleybus, racing_car, police_car, ambulance, fire_engine, minibus, truck, articulated_lorry, tractor, kick_scooter, motorcycle, bike, motor_scooter, rotating_light, oncoming_police_car, oncoming_bus, oncoming_automobile, oncoming_taxi, aerial_tramway, mountain_cableway, suspension_railway, railway_car, train, monorail, bullettrain_side, bullettrain_front, light_rail, mountain_railway, steam_locomotive, train2, metro, tram, station, flying_saucer, helicopter, small_airplane, airplane, flight_departure, flight_arrival, sailboat, motor_boat, speedboat, ferry, passenger_ship, rocket, artificial_satellite, seat, canoe, anchor, construction, fuelpump, busstop, vertical_traffic_light, traffic_light, checkered_flag, ship, ferris_wheel, roller_coaster, carousel_horse, building_construction, foggy, tokyo_tower, factory, fountain, rice_scene, mountain, mountain_snow, mount_fuji, volcano, japan, camping, tent, national_park, motorway, railway_track, sunrise, sunrise_over_mountains, desert, beach_umbrella, desert_island, city_sunrise, city_sunset, cityscape, night_with_stars, bridge_at_night, milky_way, stars, sparkler, fireworks, rainbow, houses, european_castle, japanese_castle, stadium, statue_of_liberty, house, house_with_garden, derelict_house, office, department_store, post_office, european_post_office, hospital, bank, hotel, convenience_store, school, love_hotel, wedding, classical_building, church, mosque, synagogue, kaaba, shinto_shrine, watch, iphone, calling, computer, keyboard, desktop_computer, printer, computer_mouse, trackball, joystick, clamp, minidisc, floppy_disk, cd, dvd, vhs, camera, camera_flash, video_camera, movie_camera, film_projector, film_strip, telephone_receiver, phone, pager, fax, tv, radio, studio_microphone, level_slider, control_knobs, stopwatch, timer_clock, alarm_clock, mantelpiece_clock, hourglass_flowing_sand, hourglass, satellite, battery, electric_plug, bulb, flashlight, candle, wastebasket, oil_drum, money_with_wings, dollar, yen, euro, pound, moneybag, credit_card, gem, balance_scale, wrench, hammer, hammer_and_pick, hammer_and_wrench, pick, nut_and_bolt, gear, chains, gun, bomb, hocho, dagger, crossed_swords, shield, smoking, skull_and_crossbones, coffin, funeral_urn, amphora, crystal_ball, prayer_beads, barber, alembic, telescope, microscope, hole, pill, syringe, thermometer, label, bookmark, toilet, shower, bathtub, key, old_key, couch_and_lamp, sleeping_bed, bed, door, bellhop_bell, framed_picture, world_map, parasol_on_ground, moyai, shopping, shopping_cart, balloon, flags, ribbon, gift, confetti_ball, tada, dolls, wind_chime, crossed_flags, izakaya_lantern, email, envelope_with_arrow, incoming_envelope, e-mail, love_letter, postbox, mailbox_closed, mailbox, mailbox_with_mail, mailbox_with_no_mail, package, postal_horn, inbox_tray, outbox_tray, scroll, page_with_curl, bookmark_tabs, bar_chart, chart_with_upwards_trend, chart_with_downwards_trend, page_facing_up, date, calendar, spiral_calendar, card_index, card_file_box, ballot_box, file_cabinet, clipboard, spiral_notepad, file_folder, open_file_folder, card_index_dividers, newspaper_roll, newspaper, notebook, closed_book, green_book, blue_book, orange_book, notebook_with_decorative_cover, ledger, books, open_book, link, paperclip, paperclips, scissors, triangular_ruler, straight_ruler, pushpin, round_pushpin, triangular_flag_on_post, white_flag, black_flag, rainbow_flag, closed_lock_with_key, lock, unlock, lock_with_ink_pen, pen, fountain_pen, black_nib, memo, pencil2, crayon, paintbrush, mag, mag_right, heart, orange_heart, yellow_heart, green_heart, blue_heart, purple_heart, black_heart, broken_heart, heavy_heart_exclamation, two_hearts, revolving_hearts, heartbeat, heartpulse, sparkling_heart, cupid, gift_heart, heart_decoration, peace_symbol, latin_cross, star_and_crescent, om, wheel_of_dharma, star_of_david, six_pointed_star, menorah, yin_yang, orthodox_cross, place_of_worship, ophiuchus, aries, taurus, gemini, cancer, leo, virgo, libra, scorpius, sagittarius, capricorn, aquarius, pisces, id, atom_symbol, u7a7a, u5272, radioactive, biohazard, mobile_phone_off, vibration_mode, u6709, u7121, u7533, u55b6, u6708, eight_pointed_black_star, vs, accept, white_flower, ideograph_advantage, secret, congratulations, u5408, u6e80, u7981, a, b, ab, cl, o2, sos, no_entry, name_badge, no_entry_sign, x, o, stop_sign, anger, hotsprings, no_pedestrians, do_not_litter, no_bicycles, non-potable_water, underage, no_mobile_phones, exclamation, grey_exclamation, question, grey_question, bangbang, interrobang, low_brightness, high_brightness, trident, fleur_de_lis, part_alternation_mark, warning, children_crossing, beginner, recycle, u6307, chart, sparkle, eight_spoked_asterisk, negative_squared_cross_mark, white_check_mark, diamond_shape_with_a_dot_inside, cyclone, loop, globe_with_meridians, m, atm, sa, passport_control, customs, baggage_claim, left_luggage, wheelchair, no_smoking, wc, parking, potable_water, mens, womens, baby_symbol, restroom, put_litter_in_its_place, cinema, signal_strength, koko, ng, ok, up, cool, new, free, zero, one, two, three, four, five, six, seven, eight, nine, keycap_ten, asterisk, eject_button, arrow_forward, pause_button, next_track_button, stop_button, record_button, play_or_pause_button, previous_track_button, fast_forward, rewind, twisted_rightwards_arrows, repeat, repeat_one, arrow_backward, arrow_up_small, arrow_down_small, arrow_double_up, arrow_double_down, arrow_right, arrow_left, arrow_up, arrow_down, arrow_upper_right, arrow_lower_right, arrow_lower_left, arrow_upper_left, arrow_up_down, left_right_arrow, arrows_counterclockwise, arrow_right_hook, leftwards_arrow_with_hook, arrow_heading_up, arrow_heading_down, hash, information_source, abc, abcd, capital_abcd, symbols, musical_note, notes, wavy_dash, curly_loop, heavy_check_mark, arrows_clockwise, heavy_plus_sign, heavy_minus_sign, heavy_division_sign, heavy_multiplication_x, heavy_dollar_sign, currency_exchange, copyright, registered, tm, end, back, on, top, soon, ballot_box_with_check, radio_button, white_circle, black_circle, red_circle, large_blue_circle, small_orange_diamond, small_blue_diamond, large_orange_diamond, large_blue_diamond, small_red_triangle, black_small_square, white_small_square, black_large_square, white_large_square, small_red_triangle_down, black_medium_square, white_medium_square, black_medium_small_square, white_medium_small_square, black_square_button, white_square_button, speaker, sound, loud_sound, mute, mega, loudspeaker, bell, no_bell, black_joker, mahjong, spades, clubs, hearts, diamonds, flower_playing_cards, thought_balloon, right_anger_bubble, speech_balloon, left_speech_bubble, clock1, clock2, clock3, clock4, clock5, clock6, clock7, clock8, clock9, clock10, clock11, clock12, clock130, clock230, clock330, clock430, clock530, clock630, clock730, clock830, clock930, clock1030, clock1130, clock1230, afghanistan, aland_islands, albania, algeria, american_samoa, andorra, angola, anguilla, antarctica, antigua_barbuda, argentina, armenia, aruba, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, caribbean_netherlands, bosnia_herzegovina, botswana, brazil, british_indian_ocean_territory, british_virgin_islands, brunei, bulgaria, burkina_faso, burundi, cape_verde, cambodia, cameroon, canada, canary_islands, cayman_islands, central_african_republic, chad, chile, cn, christmas_island, cocos_islands, colombia, comoros, congo_brazzaville, congo_kinshasa, cook_islands, costa_rica, croatia, cuba, curacao, cyprus, czech_republic, denmark, djibouti, dominica, dominican_republic, ecuador, egypt, el_salvador, equatorial_guinea, eritrea, estonia, ethiopia, eu, falkland_islands, faroe_islands, fiji, finland, fr, french_guiana, french_polynesia, french_southern_territories, gabon, gambia, georgia, de, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guam, guatemala, guernsey, guinea, guinea_bissau, guyana, haiti, honduras, hong_kong, hungary, iceland, india, indonesia, iran, iraq, ireland, isle_of_man, israel, it, cote_divoire, jamaica, jp, jersey, jordan, kazakhstan, kenya, kiribati, kosovo, kuwait, kyrgyzstan, laos, latvia, lebanon, lesotho, liberia, libya, liechtenstein, lithuania, luxembourg, macau, macedonia, madagascar, malawi, malaysia, maldives, mali, malta, marshall_islands, martinique, mauritania, mauritius, mayotte, mexico, micronesia, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar, namibia, nauru, nepal, netherlands, new_caledonia, new_zealand, nicaragua, niger, nigeria, niue, norfolk_island, northern_mariana_islands, north_korea, norway, oman, pakistan, palau, palestinian_territories, panama, papua_new_guinea, paraguay, peru, philippines, pitcairn_islands, poland, portugal, puerto_rico, qatar, reunion, romania, ru, rwanda, st_barthelemy, st_helena, st_kitts_nevis, st_lucia, st_pierre_miquelon, st_vincent_grenadines, samoa, san_marino, sao_tome_principe, saudi_arabia, senegal, serbia, seychelles, sierra_leone, singapore, sint_maarten, slovakia, slovenia, solomon_islands, somalia, south_africa, south_georgia_south_sandwich_islands, kr, south_sudan, es, sri_lanka, sudan, suriname, swaziland, sweden, switzerland, syria, taiwan, tajikistan, tanzania, thailand, timor_leste, togo, tokelau, tonga, trinidad_tobago, tunisia, tr, turkmenistan, turks_caicos_islands, tuvalu, uganda, ukraine, united_arab_emirates, uk, england, scotland, wales, us, us_virgin_islands, uruguay, uzbekistan, vanuatu, vatican_city, venezuela, vietnam, wallis_futuna, western_sahara, yemen, zambia, zimbabwe, default */
/***/ (function(module) {

module.exports = {"100":{"keywords":["score","perfect","numbers","century","exam","quiz","test","pass","hundred"],"char":"💯","fitzpatrick_scale":false,"category":"symbols"},"1234":{"keywords":["numbers","blue-square"],"char":"🔢","fitzpatrick_scale":false,"category":"symbols"},"grinning":{"keywords":["face","smile","happy","joy",":D","grin"],"char":"😀","fitzpatrick_scale":false,"category":"people"},"grimacing":{"keywords":["face","grimace","teeth"],"char":"😬","fitzpatrick_scale":false,"category":"people"},"grin":{"keywords":["face","happy","smile","joy","kawaii"],"char":"😁","fitzpatrick_scale":false,"category":"people"},"joy":{"keywords":["face","cry","tears","weep","happy","happytears","haha"],"char":"😂","fitzpatrick_scale":false,"category":"people"},"rofl":{"keywords":["face","rolling","floor","laughing","lol","haha"],"char":"🤣","fitzpatrick_scale":false,"category":"people"},"smiley":{"keywords":["face","happy","joy","haha",":D",":)","smile","funny"],"char":"😃","fitzpatrick_scale":false,"category":"people"},"smile":{"keywords":["face","happy","joy","funny","haha","laugh","like",":D",":)"],"char":"😄","fitzpatrick_scale":false,"category":"people"},"sweat_smile":{"keywords":["face","hot","happy","laugh","sweat","smile","relief"],"char":"😅","fitzpatrick_scale":false,"category":"people"},"laughing":{"keywords":["happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],"char":"😆","fitzpatrick_scale":false,"category":"people"},"innocent":{"keywords":["face","angel","heaven","halo"],"char":"😇","fitzpatrick_scale":false,"category":"people"},"wink":{"keywords":["face","happy","mischievous","secret",";)","smile","eye"],"char":"😉","fitzpatrick_scale":false,"category":"people"},"blush":{"keywords":["face","smile","happy","flushed","crush","embarrassed","shy","joy"],"char":"😊","fitzpatrick_scale":false,"category":"people"},"slightly_smiling_face":{"keywords":["face","smile"],"char":"🙂","fitzpatrick_scale":false,"category":"people"},"upside_down_face":{"keywords":["face","flipped","silly","smile"],"char":"🙃","fitzpatrick_scale":false,"category":"people"},"relaxed":{"keywords":["face","blush","massage","happiness"],"char":"☺️","fitzpatrick_scale":false,"category":"people"},"yum":{"keywords":["happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],"char":"😋","fitzpatrick_scale":false,"category":"people"},"relieved":{"keywords":["face","relaxed","phew","massage","happiness"],"char":"😌","fitzpatrick_scale":false,"category":"people"},"heart_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","crush","heart"],"char":"😍","fitzpatrick_scale":false,"category":"people"},"kissing_heart":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😘","fitzpatrick_scale":false,"category":"people"},"kissing":{"keywords":["love","like","face","3","valentines","infatuation","kiss"],"char":"😗","fitzpatrick_scale":false,"category":"people"},"kissing_smiling_eyes":{"keywords":["face","affection","valentines","infatuation","kiss"],"char":"😙","fitzpatrick_scale":false,"category":"people"},"kissing_closed_eyes":{"keywords":["face","love","like","affection","valentines","infatuation","kiss"],"char":"😚","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_winking_eye":{"keywords":["face","prank","childish","playful","mischievous","smile","wink","tongue"],"char":"😜","fitzpatrick_scale":false,"category":"people"},"zany":{"keywords":["face","goofy","crazy"],"char":"🤪","fitzpatrick_scale":false,"category":"people"},"raised_eyebrow":{"keywords":["face","distrust","scepticism","disapproval","disbelief","surprise"],"char":"🤨","fitzpatrick_scale":false,"category":"people"},"monocle":{"keywords":["face","stuffy","wealthy"],"char":"🧐","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue_closed_eyes":{"keywords":["face","prank","playful","mischievous","smile","tongue"],"char":"😝","fitzpatrick_scale":false,"category":"people"},"stuck_out_tongue":{"keywords":["face","prank","childish","playful","mischievous","smile","tongue"],"char":"😛","fitzpatrick_scale":false,"category":"people"},"money_mouth_face":{"keywords":["face","rich","dollar","money"],"char":"🤑","fitzpatrick_scale":false,"category":"people"},"nerd_face":{"keywords":["face","nerdy","geek","dork"],"char":"🤓","fitzpatrick_scale":false,"category":"people"},"sunglasses":{"keywords":["face","cool","smile","summer","beach","sunglass"],"char":"😎","fitzpatrick_scale":false,"category":"people"},"star_struck":{"keywords":["face","smile","starry","eyes","grinning"],"char":"🤩","fitzpatrick_scale":false,"category":"people"},"clown_face":{"keywords":["face"],"char":"🤡","fitzpatrick_scale":false,"category":"people"},"cowboy_hat_face":{"keywords":["face","cowgirl","hat"],"char":"🤠","fitzpatrick_scale":false,"category":"people"},"hugs":{"keywords":["face","smile","hug"],"char":"🤗","fitzpatrick_scale":false,"category":"people"},"smirk":{"keywords":["face","smile","mean","prank","smug","sarcasm"],"char":"😏","fitzpatrick_scale":false,"category":"people"},"no_mouth":{"keywords":["face","hellokitty"],"char":"😶","fitzpatrick_scale":false,"category":"people"},"neutral_face":{"keywords":["indifference","meh",":|","neutral"],"char":"😐","fitzpatrick_scale":false,"category":"people"},"expressionless":{"keywords":["face","indifferent","-_-","meh","deadpan"],"char":"😑","fitzpatrick_scale":false,"category":"people"},"unamused":{"keywords":["indifference","bored","straight face","serious","sarcasm","unimpressed","skeptical","dubious","side_eye"],"char":"😒","fitzpatrick_scale":false,"category":"people"},"roll_eyes":{"keywords":["face","eyeroll","frustrated"],"char":"🙄","fitzpatrick_scale":false,"category":"people"},"thinking":{"keywords":["face","hmmm","think","consider"],"char":"🤔","fitzpatrick_scale":false,"category":"people"},"lying_face":{"keywords":["face","lie","pinocchio"],"char":"🤥","fitzpatrick_scale":false,"category":"people"},"hand_over_mouth":{"keywords":["face","whoops","shock","surprise"],"char":"🤭","fitzpatrick_scale":false,"category":"people"},"shushing":{"keywords":["face","quiet","shhh"],"char":"🤫","fitzpatrick_scale":false,"category":"people"},"symbols_over_mouth":{"keywords":["face","swearing","cursing","cussing","profanity","expletive"],"char":"🤬","fitzpatrick_scale":false,"category":"people"},"exploding_head":{"keywords":["face","shocked","mind","blown"],"char":"🤯","fitzpatrick_scale":false,"category":"people"},"flushed":{"keywords":["face","blush","shy","flattered"],"char":"😳","fitzpatrick_scale":false,"category":"people"},"disappointed":{"keywords":["face","sad","upset","depressed",":("],"char":"😞","fitzpatrick_scale":false,"category":"people"},"worried":{"keywords":["face","concern","nervous",":("],"char":"😟","fitzpatrick_scale":false,"category":"people"},"angry":{"keywords":["mad","face","annoyed","frustrated"],"char":"😠","fitzpatrick_scale":false,"category":"people"},"rage":{"keywords":["angry","mad","hate","despise"],"char":"😡","fitzpatrick_scale":false,"category":"people"},"pensive":{"keywords":["face","sad","depressed","upset"],"char":"😔","fitzpatrick_scale":false,"category":"people"},"confused":{"keywords":["face","indifference","huh","weird","hmmm",":/"],"char":"😕","fitzpatrick_scale":false,"category":"people"},"slightly_frowning_face":{"keywords":["face","frowning","disappointed","sad","upset"],"char":"🙁","fitzpatrick_scale":false,"category":"people"},"frowning_face":{"keywords":["face","sad","upset","frown"],"char":"☹","fitzpatrick_scale":false,"category":"people"},"persevere":{"keywords":["face","sick","no","upset","oops"],"char":"😣","fitzpatrick_scale":false,"category":"people"},"confounded":{"keywords":["face","confused","sick","unwell","oops",":S"],"char":"😖","fitzpatrick_scale":false,"category":"people"},"tired_face":{"keywords":["sick","whine","upset","frustrated"],"char":"😫","fitzpatrick_scale":false,"category":"people"},"weary":{"keywords":["face","tired","sleepy","sad","frustrated","upset"],"char":"😩","fitzpatrick_scale":false,"category":"people"},"triumph":{"keywords":["face","gas","phew","proud","pride"],"char":"😤","fitzpatrick_scale":false,"category":"people"},"open_mouth":{"keywords":["face","surprise","impressed","wow","whoa",":O"],"char":"😮","fitzpatrick_scale":false,"category":"people"},"scream":{"keywords":["face","munch","scared","omg"],"char":"😱","fitzpatrick_scale":false,"category":"people"},"fearful":{"keywords":["face","scared","terrified","nervous","oops","huh"],"char":"😨","fitzpatrick_scale":false,"category":"people"},"cold_sweat":{"keywords":["face","nervous","sweat"],"char":"😰","fitzpatrick_scale":false,"category":"people"},"hushed":{"keywords":["face","woo","shh"],"char":"😯","fitzpatrick_scale":false,"category":"people"},"frowning":{"keywords":["face","aw","what"],"char":"😦","fitzpatrick_scale":false,"category":"people"},"anguished":{"keywords":["face","stunned","nervous"],"char":"😧","fitzpatrick_scale":false,"category":"people"},"cry":{"keywords":["face","tears","sad","depressed","upset",":'("],"char":"😢","fitzpatrick_scale":false,"category":"people"},"disappointed_relieved":{"keywords":["face","phew","sweat","nervous"],"char":"😥","fitzpatrick_scale":false,"category":"people"},"drooling_face":{"keywords":["face"],"char":"🤤","fitzpatrick_scale":false,"category":"people"},"sleepy":{"keywords":["face","tired","rest","nap"],"char":"😪","fitzpatrick_scale":false,"category":"people"},"sweat":{"keywords":["face","hot","sad","tired","exercise"],"char":"😓","fitzpatrick_scale":false,"category":"people"},"sob":{"keywords":["face","cry","tears","sad","upset","depressed"],"char":"😭","fitzpatrick_scale":false,"category":"people"},"dizzy_face":{"keywords":["spent","unconscious","xox","dizzy"],"char":"😵","fitzpatrick_scale":false,"category":"people"},"astonished":{"keywords":["face","xox","surprised","poisoned"],"char":"😲","fitzpatrick_scale":false,"category":"people"},"zipper_mouth_face":{"keywords":["face","sealed","zipper","secret"],"char":"🤐","fitzpatrick_scale":false,"category":"people"},"nauseated_face":{"keywords":["face","vomit","gross","green","sick","throw up","ill"],"char":"🤢","fitzpatrick_scale":false,"category":"people"},"sneezing_face":{"keywords":["face","gesundheit","sneeze","sick","allergy"],"char":"🤧","fitzpatrick_scale":false,"category":"people"},"vomiting":{"keywords":["face","sick"],"char":"🤮","fitzpatrick_scale":false,"category":"people"},"mask":{"keywords":["face","sick","ill","disease"],"char":"😷","fitzpatrick_scale":false,"category":"people"},"face_with_thermometer":{"keywords":["sick","temperature","thermometer","cold","fever"],"char":"🤒","fitzpatrick_scale":false,"category":"people"},"face_with_head_bandage":{"keywords":["injured","clumsy","bandage","hurt"],"char":"🤕","fitzpatrick_scale":false,"category":"people"},"sleeping":{"keywords":["face","tired","sleepy","night","zzz"],"char":"😴","fitzpatrick_scale":false,"category":"people"},"zzz":{"keywords":["sleepy","tired","dream"],"char":"💤","fitzpatrick_scale":false,"category":"people"},"poop":{"keywords":["hankey","shitface","fail","turd","shit"],"char":"💩","fitzpatrick_scale":false,"category":"people"},"smiling_imp":{"keywords":["devil","horns"],"char":"😈","fitzpatrick_scale":false,"category":"people"},"imp":{"keywords":["devil","angry","horns"],"char":"👿","fitzpatrick_scale":false,"category":"people"},"japanese_ogre":{"keywords":["monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],"char":"👹","fitzpatrick_scale":false,"category":"people"},"japanese_goblin":{"keywords":["red","evil","mask","monster","scary","creepy","japanese","goblin"],"char":"👺","fitzpatrick_scale":false,"category":"people"},"skull":{"keywords":["dead","skeleton","creepy","death"],"char":"💀","fitzpatrick_scale":false,"category":"people"},"ghost":{"keywords":["halloween","spooky","scary"],"char":"👻","fitzpatrick_scale":false,"category":"people"},"alien":{"keywords":["UFO","paul","weird","outer_space"],"char":"👽","fitzpatrick_scale":false,"category":"people"},"robot":{"keywords":["computer","machine","bot"],"char":"🤖","fitzpatrick_scale":false,"category":"people"},"smiley_cat":{"keywords":["animal","cats","happy","smile"],"char":"😺","fitzpatrick_scale":false,"category":"people"},"smile_cat":{"keywords":["animal","cats","smile"],"char":"😸","fitzpatrick_scale":false,"category":"people"},"joy_cat":{"keywords":["animal","cats","haha","happy","tears"],"char":"😹","fitzpatrick_scale":false,"category":"people"},"heart_eyes_cat":{"keywords":["animal","love","like","affection","cats","valentines","heart"],"char":"😻","fitzpatrick_scale":false,"category":"people"},"smirk_cat":{"keywords":["animal","cats","smirk"],"char":"😼","fitzpatrick_scale":false,"category":"people"},"kissing_cat":{"keywords":["animal","cats","kiss"],"char":"😽","fitzpatrick_scale":false,"category":"people"},"scream_cat":{"keywords":["animal","cats","munch","scared","scream"],"char":"🙀","fitzpatrick_scale":false,"category":"people"},"crying_cat_face":{"keywords":["animal","tears","weep","sad","cats","upset","cry"],"char":"😿","fitzpatrick_scale":false,"category":"people"},"pouting_cat":{"keywords":["animal","cats"],"char":"😾","fitzpatrick_scale":false,"category":"people"},"palms_up":{"keywords":["hands","gesture","cupped","prayer"],"char":"🤲","fitzpatrick_scale":true,"category":"people"},"raised_hands":{"keywords":["gesture","hooray","yea","celebration","hands"],"char":"🙌","fitzpatrick_scale":true,"category":"people"},"clap":{"keywords":["hands","praise","applause","congrats","yay"],"char":"👏","fitzpatrick_scale":true,"category":"people"},"wave":{"keywords":["hands","gesture","goodbye","solong","farewell","hello","hi","palm"],"char":"👋","fitzpatrick_scale":true,"category":"people"},"call_me_hand":{"keywords":["hands","gesture"],"char":"🤙","fitzpatrick_scale":true,"category":"people"},"+1":{"keywords":["thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],"char":"👍","fitzpatrick_scale":true,"category":"people"},"-1":{"keywords":["thumbsdown","no","dislike","hand"],"char":"👎","fitzpatrick_scale":true,"category":"people"},"facepunch":{"keywords":["angry","violence","fist","hit","attack","hand"],"char":"👊","fitzpatrick_scale":true,"category":"people"},"fist":{"keywords":["fingers","hand","grasp"],"char":"✊","fitzpatrick_scale":true,"category":"people"},"fist_left":{"keywords":["hand","fistbump"],"char":"🤛","fitzpatrick_scale":true,"category":"people"},"fist_right":{"keywords":["hand","fistbump"],"char":"🤜","fitzpatrick_scale":true,"category":"people"},"v":{"keywords":["fingers","ohyeah","hand","peace","victory","two"],"char":"✌","fitzpatrick_scale":true,"category":"people"},"ok_hand":{"keywords":["fingers","limbs","perfect","ok","okay"],"char":"👌","fitzpatrick_scale":true,"category":"people"},"raised_hand":{"keywords":["fingers","stop","highfive","palm","ban"],"char":"✋","fitzpatrick_scale":true,"category":"people"},"raised_back_of_hand":{"keywords":["fingers","raised","backhand"],"char":"🤚","fitzpatrick_scale":true,"category":"people"},"open_hands":{"keywords":["fingers","butterfly","hands","open"],"char":"👐","fitzpatrick_scale":true,"category":"people"},"muscle":{"keywords":["arm","flex","hand","summer","strong","biceps"],"char":"💪","fitzpatrick_scale":true,"category":"people"},"pray":{"keywords":["please","hope","wish","namaste","highfive"],"char":"🙏","fitzpatrick_scale":true,"category":"people"},"handshake":{"keywords":["agreement","shake"],"char":"🤝","fitzpatrick_scale":false,"category":"people"},"point_up":{"keywords":["hand","fingers","direction","up"],"char":"☝","fitzpatrick_scale":true,"category":"people"},"point_up_2":{"keywords":["fingers","hand","direction","up"],"char":"👆","fitzpatrick_scale":true,"category":"people"},"point_down":{"keywords":["fingers","hand","direction","down"],"char":"👇","fitzpatrick_scale":true,"category":"people"},"point_left":{"keywords":["direction","fingers","hand","left"],"char":"👈","fitzpatrick_scale":true,"category":"people"},"point_right":{"keywords":["fingers","hand","direction","right"],"char":"👉","fitzpatrick_scale":true,"category":"people"},"fu":{"keywords":["hand","fingers","rude","middle","flipping"],"char":"🖕","fitzpatrick_scale":true,"category":"people"},"raised_hand_with_fingers_splayed":{"keywords":["hand","fingers","palm"],"char":"🖐","fitzpatrick_scale":true,"category":"people"},"love_you":{"keywords":["hand","fingers","gesture"],"char":"🤟","fitzpatrick_scale":true,"category":"people"},"metal":{"keywords":["hand","fingers","evil_eye","sign_of_horns","rock_on"],"char":"🤘","fitzpatrick_scale":true,"category":"people"},"crossed_fingers":{"keywords":["good","lucky"],"char":"🤞","fitzpatrick_scale":true,"category":"people"},"vulcan_salute":{"keywords":["hand","fingers","spock","star trek"],"char":"🖖","fitzpatrick_scale":true,"category":"people"},"writing_hand":{"keywords":["lower_left_ballpoint_pen","stationery","write","compose"],"char":"✍","fitzpatrick_scale":true,"category":"people"},"selfie":{"keywords":["camera","phone"],"char":"🤳","fitzpatrick_scale":true,"category":"people"},"nail_care":{"keywords":["beauty","manicure","finger","fashion","nail"],"char":"💅","fitzpatrick_scale":true,"category":"people"},"lips":{"keywords":["mouth","kiss"],"char":"👄","fitzpatrick_scale":false,"category":"people"},"tongue":{"keywords":["mouth","playful"],"char":"👅","fitzpatrick_scale":false,"category":"people"},"ear":{"keywords":["face","hear","sound","listen"],"char":"👂","fitzpatrick_scale":true,"category":"people"},"nose":{"keywords":["smell","sniff"],"char":"👃","fitzpatrick_scale":true,"category":"people"},"eye":{"keywords":["face","look","see","watch","stare"],"char":"👁","fitzpatrick_scale":false,"category":"people"},"eyes":{"keywords":["look","watch","stalk","peek","see"],"char":"👀","fitzpatrick_scale":false,"category":"people"},"brain":{"keywords":["smart","intelligent"],"char":"🧠","fitzpatrick_scale":false,"category":"people"},"bust_in_silhouette":{"keywords":["user","person","human"],"char":"👤","fitzpatrick_scale":false,"category":"people"},"busts_in_silhouette":{"keywords":["user","person","human","group","team"],"char":"👥","fitzpatrick_scale":false,"category":"people"},"speaking_head":{"keywords":["user","person","human","sing","say","talk"],"char":"🗣","fitzpatrick_scale":false,"category":"people"},"baby":{"keywords":["child","boy","girl","toddler"],"char":"👶","fitzpatrick_scale":true,"category":"people"},"child":{"keywords":["gender-neutral","young"],"char":"🧒","fitzpatrick_scale":true,"category":"people"},"boy":{"keywords":["man","male","guy","teenager"],"char":"👦","fitzpatrick_scale":true,"category":"people"},"girl":{"keywords":["female","woman","teenager"],"char":"👧","fitzpatrick_scale":true,"category":"people"},"adult":{"keywords":["gender-neutral","person"],"char":"🧑","fitzpatrick_scale":true,"category":"people"},"man":{"keywords":["mustache","father","dad","guy","classy","sir","moustache"],"char":"👨","fitzpatrick_scale":true,"category":"people"},"woman":{"keywords":["female","girls","lady"],"char":"👩","fitzpatrick_scale":true,"category":"people"},"blonde_woman":{"keywords":["woman","female","girl","blonde","person"],"char":"👱‍♀️","fitzpatrick_scale":true,"category":"people"},"blonde_man":{"keywords":["man","male","boy","blonde","guy","person"],"char":"👱","fitzpatrick_scale":true,"category":"people"},"bearded_person":{"keywords":["person","bewhiskered"],"char":"🧔","fitzpatrick_scale":true,"category":"people"},"older_adult":{"keywords":["human","elder","senior","gender-neutral"],"char":"🧓","fitzpatrick_scale":true,"category":"people"},"older_man":{"keywords":["human","male","men","old","elder","senior"],"char":"👴","fitzpatrick_scale":true,"category":"people"},"older_woman":{"keywords":["human","female","women","lady","old","elder","senior"],"char":"👵","fitzpatrick_scale":true,"category":"people"},"man_with_gua_pi_mao":{"keywords":["male","boy","chinese"],"char":"👲","fitzpatrick_scale":true,"category":"people"},"woman_with_headscarf":{"keywords":["female","hijab","mantilla","tichel"],"char":"🧕","fitzpatrick_scale":true,"category":"people"},"woman_with_turban":{"keywords":["female","indian","hinduism","arabs","woman"],"char":"👳‍♀️","fitzpatrick_scale":true,"category":"people"},"man_with_turban":{"keywords":["male","indian","hinduism","arabs"],"char":"👳","fitzpatrick_scale":true,"category":"people"},"policewoman":{"keywords":["woman","police","law","legal","enforcement","arrest","911","female"],"char":"👮‍♀️","fitzpatrick_scale":true,"category":"people"},"policeman":{"keywords":["man","police","law","legal","enforcement","arrest","911"],"char":"👮","fitzpatrick_scale":true,"category":"people"},"construction_worker_woman":{"keywords":["female","human","wip","build","construction","worker","labor","woman"],"char":"👷‍♀️","fitzpatrick_scale":true,"category":"people"},"construction_worker_man":{"keywords":["male","human","wip","guy","build","construction","worker","labor"],"char":"👷","fitzpatrick_scale":true,"category":"people"},"guardswoman":{"keywords":["uk","gb","british","female","royal","woman"],"char":"💂‍♀️","fitzpatrick_scale":true,"category":"people"},"guardsman":{"keywords":["uk","gb","british","male","guy","royal"],"char":"💂","fitzpatrick_scale":true,"category":"people"},"female_detective":{"keywords":["human","spy","detective","female","woman"],"char":"🕵️‍♀️","fitzpatrick_scale":true,"category":"people"},"male_detective":{"keywords":["human","spy","detective"],"char":"🕵","fitzpatrick_scale":true,"category":"people"},"woman_health_worker":{"keywords":["doctor","nurse","therapist","healthcare","woman","human"],"char":"👩‍⚕️","fitzpatrick_scale":true,"category":"people"},"man_health_worker":{"keywords":["doctor","nurse","therapist","healthcare","man","human"],"char":"👨‍⚕️","fitzpatrick_scale":true,"category":"people"},"woman_farmer":{"keywords":["rancher","gardener","woman","human"],"char":"👩‍🌾","fitzpatrick_scale":true,"category":"people"},"man_farmer":{"keywords":["rancher","gardener","man","human"],"char":"👨‍🌾","fitzpatrick_scale":true,"category":"people"},"woman_cook":{"keywords":["chef","woman","human"],"char":"👩‍🍳","fitzpatrick_scale":true,"category":"people"},"man_cook":{"keywords":["chef","man","human"],"char":"👨‍🍳","fitzpatrick_scale":true,"category":"people"},"woman_student":{"keywords":["graduate","woman","human"],"char":"👩‍🎓","fitzpatrick_scale":true,"category":"people"},"man_student":{"keywords":["graduate","man","human"],"char":"👨‍🎓","fitzpatrick_scale":true,"category":"people"},"woman_singer":{"keywords":["rockstar","entertainer","woman","human"],"char":"👩‍🎤","fitzpatrick_scale":true,"category":"people"},"man_singer":{"keywords":["rockstar","entertainer","man","human"],"char":"👨‍🎤","fitzpatrick_scale":true,"category":"people"},"woman_teacher":{"keywords":["instructor","professor","woman","human"],"char":"👩‍🏫","fitzpatrick_scale":true,"category":"people"},"man_teacher":{"keywords":["instructor","professor","man","human"],"char":"👨‍🏫","fitzpatrick_scale":true,"category":"people"},"woman_factory_worker":{"keywords":["assembly","industrial","woman","human"],"char":"👩‍🏭","fitzpatrick_scale":true,"category":"people"},"man_factory_worker":{"keywords":["assembly","industrial","man","human"],"char":"👨‍🏭","fitzpatrick_scale":true,"category":"people"},"woman_technologist":{"keywords":["coder","developer","engineer","programmer","software","woman","human","laptop","computer"],"char":"👩‍💻","fitzpatrick_scale":true,"category":"people"},"man_technologist":{"keywords":["coder","developer","engineer","programmer","software","man","human","laptop","computer"],"char":"👨‍💻","fitzpatrick_scale":true,"category":"people"},"woman_office_worker":{"keywords":["business","manager","woman","human"],"char":"👩‍💼","fitzpatrick_scale":true,"category":"people"},"man_office_worker":{"keywords":["business","manager","man","human"],"char":"👨‍💼","fitzpatrick_scale":true,"category":"people"},"woman_mechanic":{"keywords":["plumber","woman","human","wrench"],"char":"👩‍🔧","fitzpatrick_scale":true,"category":"people"},"man_mechanic":{"keywords":["plumber","man","human","wrench"],"char":"👨‍🔧","fitzpatrick_scale":true,"category":"people"},"woman_scientist":{"keywords":["biologist","chemist","engineer","physicist","woman","human"],"char":"👩‍🔬","fitzpatrick_scale":true,"category":"people"},"man_scientist":{"keywords":["biologist","chemist","engineer","physicist","man","human"],"char":"👨‍🔬","fitzpatrick_scale":true,"category":"people"},"woman_artist":{"keywords":["painter","woman","human"],"char":"👩‍🎨","fitzpatrick_scale":true,"category":"people"},"man_artist":{"keywords":["painter","man","human"],"char":"👨‍🎨","fitzpatrick_scale":true,"category":"people"},"woman_firefighter":{"keywords":["fireman","woman","human"],"char":"👩‍🚒","fitzpatrick_scale":true,"category":"people"},"man_firefighter":{"keywords":["fireman","man","human"],"char":"👨‍🚒","fitzpatrick_scale":true,"category":"people"},"woman_pilot":{"keywords":["aviator","plane","woman","human"],"char":"👩‍✈️","fitzpatrick_scale":true,"category":"people"},"man_pilot":{"keywords":["aviator","plane","man","human"],"char":"👨‍✈️","fitzpatrick_scale":true,"category":"people"},"woman_astronaut":{"keywords":["space","rocket","woman","human"],"char":"👩‍🚀","fitzpatrick_scale":true,"category":"people"},"man_astronaut":{"keywords":["space","rocket","man","human"],"char":"👨‍🚀","fitzpatrick_scale":true,"category":"people"},"woman_judge":{"keywords":["justice","court","woman","human"],"char":"👩‍⚖️","fitzpatrick_scale":true,"category":"people"},"man_judge":{"keywords":["justice","court","man","human"],"char":"👨‍⚖️","fitzpatrick_scale":true,"category":"people"},"mrs_claus":{"keywords":["woman","female","xmas","mother christmas"],"char":"🤶","fitzpatrick_scale":true,"category":"people"},"santa":{"keywords":["festival","man","male","xmas","father christmas"],"char":"🎅","fitzpatrick_scale":true,"category":"people"},"sorceress":{"keywords":["woman","female","mage","witch"],"char":"🧙‍♀️","fitzpatrick_scale":true,"category":"people"},"wizard":{"keywords":["man","male","mage","sorcerer"],"char":"🧙‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_elf":{"keywords":["woman","female"],"char":"🧝‍♀️","fitzpatrick_scale":true,"category":"people"},"man_elf":{"keywords":["man","male"],"char":"🧝‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_vampire":{"keywords":["woman","female"],"char":"🧛‍♀️","fitzpatrick_scale":true,"category":"people"},"man_vampire":{"keywords":["man","male","dracula"],"char":"🧛‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_zombie":{"keywords":["woman","female","undead","walking dead"],"char":"🧟‍♀️","fitzpatrick_scale":false,"category":"people"},"man_zombie":{"keywords":["man","male","dracula","undead","walking dead"],"char":"🧟‍♂️","fitzpatrick_scale":false,"category":"people"},"woman_genie":{"keywords":["woman","female"],"char":"🧞‍♀️","fitzpatrick_scale":false,"category":"people"},"man_genie":{"keywords":["man","male"],"char":"🧞‍♂️","fitzpatrick_scale":false,"category":"people"},"mermaid":{"keywords":["woman","female","merwoman","ariel"],"char":"🧜‍♀️","fitzpatrick_scale":true,"category":"people"},"merman":{"keywords":["man","male","triton"],"char":"🧜‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_fairy":{"keywords":["woman","female"],"char":"🧚‍♀️","fitzpatrick_scale":true,"category":"people"},"man_fairy":{"keywords":["man","male"],"char":"🧚‍♂️","fitzpatrick_scale":true,"category":"people"},"angel":{"keywords":["heaven","wings","halo"],"char":"👼","fitzpatrick_scale":true,"category":"people"},"pregnant_woman":{"keywords":["baby"],"char":"🤰","fitzpatrick_scale":true,"category":"people"},"breastfeeding":{"keywords":["nursing","baby"],"char":"🤱","fitzpatrick_scale":true,"category":"people"},"princess":{"keywords":["girl","woman","female","blond","crown","royal","queen"],"char":"👸","fitzpatrick_scale":true,"category":"people"},"prince":{"keywords":["boy","man","male","crown","royal","king"],"char":"🤴","fitzpatrick_scale":true,"category":"people"},"bride_with_veil":{"keywords":["couple","marriage","wedding","woman","bride"],"char":"👰","fitzpatrick_scale":true,"category":"people"},"man_in_tuxedo":{"keywords":["couple","marriage","wedding","groom"],"char":"🤵","fitzpatrick_scale":true,"category":"people"},"running_woman":{"keywords":["woman","walking","exercise","race","running","female"],"char":"🏃‍♀️","fitzpatrick_scale":true,"category":"people"},"running_man":{"keywords":["man","walking","exercise","race","running"],"char":"🏃","fitzpatrick_scale":true,"category":"people"},"walking_woman":{"keywords":["human","feet","steps","woman","female"],"char":"🚶‍♀️","fitzpatrick_scale":true,"category":"people"},"walking_man":{"keywords":["human","feet","steps"],"char":"🚶","fitzpatrick_scale":true,"category":"people"},"dancer":{"keywords":["female","girl","woman","fun"],"char":"💃","fitzpatrick_scale":true,"category":"people"},"man_dancing":{"keywords":["male","boy","fun","dancer"],"char":"🕺","fitzpatrick_scale":true,"category":"people"},"dancing_women":{"keywords":["female","bunny","women","girls"],"char":"👯","fitzpatrick_scale":false,"category":"people"},"dancing_men":{"keywords":["male","bunny","men","boys"],"char":"👯‍♂️","fitzpatrick_scale":false,"category":"people"},"couple":{"keywords":["pair","people","human","love","date","dating","like","affection","valentines","marriage"],"char":"👫","fitzpatrick_scale":false,"category":"people"},"two_men_holding_hands":{"keywords":["pair","couple","love","like","bromance","friendship","people","human"],"char":"👬","fitzpatrick_scale":false,"category":"people"},"two_women_holding_hands":{"keywords":["pair","friendship","couple","love","like","female","people","human"],"char":"👭","fitzpatrick_scale":false,"category":"people"},"bowing_woman":{"keywords":["woman","female","girl"],"char":"🙇‍♀️","fitzpatrick_scale":true,"category":"people"},"bowing_man":{"keywords":["man","male","boy"],"char":"🙇","fitzpatrick_scale":true,"category":"people"},"man_facepalming":{"keywords":["man","male","boy","disbelief"],"char":"🤦","fitzpatrick_scale":true,"category":"people"},"woman_facepalming":{"keywords":["woman","female","girl","disbelief"],"char":"🤦‍♀️","fitzpatrick_scale":true,"category":"people"},"woman_shrugging":{"keywords":["woman","female","girl","confused","indifferent","doubt"],"char":"🤷","fitzpatrick_scale":true,"category":"people"},"man_shrugging":{"keywords":["man","male","boy","confused","indifferent","doubt"],"char":"🤷‍♂️","fitzpatrick_scale":true,"category":"people"},"tipping_hand_woman":{"keywords":["female","girl","woman","human","information"],"char":"💁","fitzpatrick_scale":true,"category":"people"},"tipping_hand_man":{"keywords":["male","boy","man","human","information"],"char":"💁‍♂️","fitzpatrick_scale":true,"category":"people"},"no_good_woman":{"keywords":["female","girl","woman","nope"],"char":"🙅","fitzpatrick_scale":true,"category":"people"},"no_good_man":{"keywords":["male","boy","man","nope"],"char":"🙅‍♂️","fitzpatrick_scale":true,"category":"people"},"ok_woman":{"keywords":["women","girl","female","pink","human","woman"],"char":"🙆","fitzpatrick_scale":true,"category":"people"},"ok_man":{"keywords":["men","boy","male","blue","human","man"],"char":"🙆‍♂️","fitzpatrick_scale":true,"category":"people"},"raising_hand_woman":{"keywords":["female","girl","woman"],"char":"🙋","fitzpatrick_scale":true,"category":"people"},"raising_hand_man":{"keywords":["male","boy","man"],"char":"🙋‍♂️","fitzpatrick_scale":true,"category":"people"},"pouting_woman":{"keywords":["female","girl","woman"],"char":"🙎","fitzpatrick_scale":true,"category":"people"},"pouting_man":{"keywords":["male","boy","man"],"char":"🙎‍♂️","fitzpatrick_scale":true,"category":"people"},"frowning_woman":{"keywords":["female","girl","woman","sad","depressed","discouraged","unhappy"],"char":"🙍","fitzpatrick_scale":true,"category":"people"},"frowning_man":{"keywords":["male","boy","man","sad","depressed","discouraged","unhappy"],"char":"🙍‍♂️","fitzpatrick_scale":true,"category":"people"},"haircut_woman":{"keywords":["female","girl","woman"],"char":"💇","fitzpatrick_scale":true,"category":"people"},"haircut_man":{"keywords":["male","boy","man"],"char":"💇‍♂️","fitzpatrick_scale":true,"category":"people"},"massage_woman":{"keywords":["female","girl","woman","head"],"char":"💆","fitzpatrick_scale":true,"category":"people"},"massage_man":{"keywords":["male","boy","man","head"],"char":"💆‍♂️","fitzpatrick_scale":true,"category":"people"},"woman_in_steamy_room":{"keywords":["female","woman","spa","steamroom","sauna"],"char":"🧖‍♀️","fitzpatrick_scale":true,"category":"people"},"man_in_steamy_room":{"keywords":["male","man","spa","steamroom","sauna"],"char":"🧖‍♂️","fitzpatrick_scale":true,"category":"people"},"couple_with_heart_woman_man":{"keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"char":"💑","fitzpatrick_scale":false,"category":"people"},"couple_with_heart_woman_woman":{"keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"char":"👩‍❤️‍👩","fitzpatrick_scale":false,"category":"people"},"couple_with_heart_man_man":{"keywords":["pair","love","like","affection","human","dating","valentines","marriage"],"char":"👨‍❤️‍👨","fitzpatrick_scale":false,"category":"people"},"couplekiss_man_woman":{"keywords":["pair","valentines","love","like","dating","marriage"],"char":"💏","fitzpatrick_scale":false,"category":"people"},"couplekiss_woman_woman":{"keywords":["pair","valentines","love","like","dating","marriage"],"char":"👩‍❤️‍💋‍👩","fitzpatrick_scale":false,"category":"people"},"couplekiss_man_man":{"keywords":["pair","valentines","love","like","dating","marriage"],"char":"👨‍❤️‍💋‍👨","fitzpatrick_scale":false,"category":"people"},"family_man_woman_boy":{"keywords":["home","parents","child","mom","dad","father","mother","people","human"],"char":"👪","fitzpatrick_scale":false,"category":"people"},"family_man_woman_girl":{"keywords":["home","parents","people","human","child"],"char":"👨‍👩‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_woman_girl_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👩‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_woman_boy_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👩‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_woman_girl_girl":{"keywords":["home","parents","people","human","children"],"char":"👨‍👩‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_boy":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_girl":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_girl_boy":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_boy_boy":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_woman_girl_girl":{"keywords":["home","parents","people","human","children"],"char":"👩‍👩‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_man_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_man_girl":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_man_girl_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_man_boy_boy":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_man_girl_girl":{"keywords":["home","parents","people","human","children"],"char":"👨‍👨‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_boy":{"keywords":["home","parent","people","human","child"],"char":"👩‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_girl":{"keywords":["home","parent","people","human","child"],"char":"👩‍👧","fitzpatrick_scale":false,"category":"people"},"family_woman_girl_boy":{"keywords":["home","parent","people","human","children"],"char":"👩‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_boy_boy":{"keywords":["home","parent","people","human","children"],"char":"👩‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_woman_girl_girl":{"keywords":["home","parent","people","human","children"],"char":"👩‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_boy":{"keywords":["home","parent","people","human","child"],"char":"👨‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_girl":{"keywords":["home","parent","people","human","child"],"char":"👨‍👧","fitzpatrick_scale":false,"category":"people"},"family_man_girl_boy":{"keywords":["home","parent","people","human","children"],"char":"👨‍👧‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_boy_boy":{"keywords":["home","parent","people","human","children"],"char":"👨‍👦‍👦","fitzpatrick_scale":false,"category":"people"},"family_man_girl_girl":{"keywords":["home","parent","people","human","children"],"char":"👨‍👧‍👧","fitzpatrick_scale":false,"category":"people"},"coat":{"keywords":["jacket"],"char":"🧥","fitzpatrick_scale":false,"category":"people"},"womans_clothes":{"keywords":["fashion","shopping_bags","female"],"char":"👚","fitzpatrick_scale":false,"category":"people"},"tshirt":{"keywords":["fashion","cloth","casual","shirt","tee"],"char":"👕","fitzpatrick_scale":false,"category":"people"},"jeans":{"keywords":["fashion","shopping"],"char":"👖","fitzpatrick_scale":false,"category":"people"},"necktie":{"keywords":["shirt","suitup","formal","fashion","cloth","business"],"char":"👔","fitzpatrick_scale":false,"category":"people"},"dress":{"keywords":["clothes","fashion","shopping"],"char":"👗","fitzpatrick_scale":false,"category":"people"},"bikini":{"keywords":["swimming","female","woman","girl","fashion","beach","summer"],"char":"👙","fitzpatrick_scale":false,"category":"people"},"kimono":{"keywords":["dress","fashion","women","female","japanese"],"char":"👘","fitzpatrick_scale":false,"category":"people"},"lipstick":{"keywords":["female","girl","fashion","woman"],"char":"💄","fitzpatrick_scale":false,"category":"people"},"kiss":{"keywords":["face","lips","love","like","affection","valentines"],"char":"💋","fitzpatrick_scale":false,"category":"people"},"footprints":{"keywords":["feet","tracking","walking","beach"],"char":"👣","fitzpatrick_scale":false,"category":"people"},"high_heel":{"keywords":["fashion","shoes","female","pumps","stiletto"],"char":"👠","fitzpatrick_scale":false,"category":"people"},"sandal":{"keywords":["shoes","fashion","flip flops"],"char":"👡","fitzpatrick_scale":false,"category":"people"},"boot":{"keywords":["shoes","fashion"],"char":"👢","fitzpatrick_scale":false,"category":"people"},"mans_shoe":{"keywords":["fashion","male"],"char":"👞","fitzpatrick_scale":false,"category":"people"},"athletic_shoe":{"keywords":["shoes","sports","sneakers"],"char":"👟","fitzpatrick_scale":false,"category":"people"},"socks":{"keywords":["stockings","clothes"],"char":"🧦","fitzpatrick_scale":false,"category":"people"},"gloves":{"keywords":["hands","winter","clothes"],"char":"🧤","fitzpatrick_scale":false,"category":"people"},"scarf":{"keywords":["neck","winter","clothes"],"char":"🧣","fitzpatrick_scale":false,"category":"people"},"womans_hat":{"keywords":["fashion","accessories","female","lady","spring"],"char":"👒","fitzpatrick_scale":false,"category":"people"},"tophat":{"keywords":["magic","gentleman","classy","circus"],"char":"🎩","fitzpatrick_scale":false,"category":"people"},"billed_hat":{"keywords":["cap","baseball"],"char":"🧢","fitzpatrick_scale":false,"category":"people"},"rescue_worker_helmet":{"keywords":["construction","build"],"char":"⛑","fitzpatrick_scale":false,"category":"people"},"mortar_board":{"keywords":["school","college","degree","university","graduation","cap","hat","legal","learn","education"],"char":"🎓","fitzpatrick_scale":false,"category":"people"},"crown":{"keywords":["king","kod","leader","royalty","lord"],"char":"👑","fitzpatrick_scale":false,"category":"people"},"school_satchel":{"keywords":["student","education","bag","backpack"],"char":"🎒","fitzpatrick_scale":false,"category":"people"},"pouch":{"keywords":["bag","accessories","shopping"],"char":"👝","fitzpatrick_scale":false,"category":"people"},"purse":{"keywords":["fashion","accessories","money","sales","shopping"],"char":"👛","fitzpatrick_scale":false,"category":"people"},"handbag":{"keywords":["fashion","accessory","accessories","shopping"],"char":"👜","fitzpatrick_scale":false,"category":"people"},"briefcase":{"keywords":["business","documents","work","law","legal","job","career"],"char":"💼","fitzpatrick_scale":false,"category":"people"},"eyeglasses":{"keywords":["fashion","accessories","eyesight","nerdy","dork","geek"],"char":"👓","fitzpatrick_scale":false,"category":"people"},"dark_sunglasses":{"keywords":["face","cool","accessories"],"char":"🕶","fitzpatrick_scale":false,"category":"people"},"ring":{"keywords":["wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],"char":"💍","fitzpatrick_scale":false,"category":"people"},"closed_umbrella":{"keywords":["weather","rain","drizzle"],"char":"🌂","fitzpatrick_scale":false,"category":"people"},"dog":{"keywords":["animal","friend","nature","woof","puppy","pet","faithful"],"char":"🐶","fitzpatrick_scale":false,"category":"animals_and_nature"},"cat":{"keywords":["animal","meow","nature","pet","kitten"],"char":"🐱","fitzpatrick_scale":false,"category":"animals_and_nature"},"mouse":{"keywords":["animal","nature","cheese_wedge","rodent"],"char":"🐭","fitzpatrick_scale":false,"category":"animals_and_nature"},"hamster":{"keywords":["animal","nature"],"char":"🐹","fitzpatrick_scale":false,"category":"animals_and_nature"},"rabbit":{"keywords":["animal","nature","pet","spring","magic","bunny"],"char":"🐰","fitzpatrick_scale":false,"category":"animals_and_nature"},"fox_face":{"keywords":["animal","nature","face"],"char":"🦊","fitzpatrick_scale":false,"category":"animals_and_nature"},"bear":{"keywords":["animal","nature","wild"],"char":"🐻","fitzpatrick_scale":false,"category":"animals_and_nature"},"panda_face":{"keywords":["animal","nature","panda"],"char":"🐼","fitzpatrick_scale":false,"category":"animals_and_nature"},"koala":{"keywords":["animal","nature"],"char":"🐨","fitzpatrick_scale":false,"category":"animals_and_nature"},"tiger":{"keywords":["animal","cat","danger","wild","nature","roar"],"char":"🐯","fitzpatrick_scale":false,"category":"animals_and_nature"},"lion":{"keywords":["animal","nature"],"char":"🦁","fitzpatrick_scale":false,"category":"animals_and_nature"},"cow":{"keywords":["beef","ox","animal","nature","moo","milk"],"char":"🐮","fitzpatrick_scale":false,"category":"animals_and_nature"},"pig":{"keywords":["animal","oink","nature"],"char":"🐷","fitzpatrick_scale":false,"category":"animals_and_nature"},"pig_nose":{"keywords":["animal","oink"],"char":"🐽","fitzpatrick_scale":false,"category":"animals_and_nature"},"frog":{"keywords":["animal","nature","croak","toad"],"char":"🐸","fitzpatrick_scale":false,"category":"animals_and_nature"},"squid":{"keywords":["animal","nature","ocean","sea"],"char":"🦑","fitzpatrick_scale":false,"category":"animals_and_nature"},"octopus":{"keywords":["animal","creature","ocean","sea","nature","beach"],"char":"🐙","fitzpatrick_scale":false,"category":"animals_and_nature"},"shrimp":{"keywords":["animal","ocean","nature","seafood"],"char":"🦐","fitzpatrick_scale":false,"category":"animals_and_nature"},"monkey_face":{"keywords":["animal","nature","circus"],"char":"🐵","fitzpatrick_scale":false,"category":"animals_and_nature"},"gorilla":{"keywords":["animal","nature","circus"],"char":"🦍","fitzpatrick_scale":false,"category":"animals_and_nature"},"see_no_evil":{"keywords":["monkey","animal","nature","haha"],"char":"🙈","fitzpatrick_scale":false,"category":"animals_and_nature"},"hear_no_evil":{"keywords":["animal","monkey","nature"],"char":"🙉","fitzpatrick_scale":false,"category":"animals_and_nature"},"speak_no_evil":{"keywords":["monkey","animal","nature","omg"],"char":"🙊","fitzpatrick_scale":false,"category":"animals_and_nature"},"monkey":{"keywords":["animal","nature","banana","circus"],"char":"🐒","fitzpatrick_scale":false,"category":"animals_and_nature"},"chicken":{"keywords":["animal","cluck","nature","bird"],"char":"🐔","fitzpatrick_scale":false,"category":"animals_and_nature"},"penguin":{"keywords":["animal","nature"],"char":"🐧","fitzpatrick_scale":false,"category":"animals_and_nature"},"bird":{"keywords":["animal","nature","fly","tweet","spring"],"char":"🐦","fitzpatrick_scale":false,"category":"animals_and_nature"},"baby_chick":{"keywords":["animal","chicken","bird"],"char":"🐤","fitzpatrick_scale":false,"category":"animals_and_nature"},"hatching_chick":{"keywords":["animal","chicken","egg","born","baby","bird"],"char":"🐣","fitzpatrick_scale":false,"category":"animals_and_nature"},"hatched_chick":{"keywords":["animal","chicken","baby","bird"],"char":"🐥","fitzpatrick_scale":false,"category":"animals_and_nature"},"duck":{"keywords":["animal","nature","bird","mallard"],"char":"🦆","fitzpatrick_scale":false,"category":"animals_and_nature"},"eagle":{"keywords":["animal","nature","bird"],"char":"🦅","fitzpatrick_scale":false,"category":"animals_and_nature"},"owl":{"keywords":["animal","nature","bird","hoot"],"char":"🦉","fitzpatrick_scale":false,"category":"animals_and_nature"},"bat":{"keywords":["animal","nature","blind","vampire"],"char":"🦇","fitzpatrick_scale":false,"category":"animals_and_nature"},"wolf":{"keywords":["animal","nature","wild"],"char":"🐺","fitzpatrick_scale":false,"category":"animals_and_nature"},"boar":{"keywords":["animal","nature"],"char":"🐗","fitzpatrick_scale":false,"category":"animals_and_nature"},"horse":{"keywords":["animal","brown","nature"],"char":"🐴","fitzpatrick_scale":false,"category":"animals_and_nature"},"unicorn":{"keywords":["animal","nature","mystical"],"char":"🦄","fitzpatrick_scale":false,"category":"animals_and_nature"},"honeybee":{"keywords":["animal","insect","nature","bug","spring","honey"],"char":"🐝","fitzpatrick_scale":false,"category":"animals_and_nature"},"bug":{"keywords":["animal","insect","nature","worm"],"char":"🐛","fitzpatrick_scale":false,"category":"animals_and_nature"},"butterfly":{"keywords":["animal","insect","nature","caterpillar"],"char":"🦋","fitzpatrick_scale":false,"category":"animals_and_nature"},"snail":{"keywords":["slow","animal","shell"],"char":"🐌","fitzpatrick_scale":false,"category":"animals_and_nature"},"beetle":{"keywords":["animal","insect","nature","ladybug"],"char":"🐞","fitzpatrick_scale":false,"category":"animals_and_nature"},"ant":{"keywords":["animal","insect","nature","bug"],"char":"🐜","fitzpatrick_scale":false,"category":"animals_and_nature"},"grasshopper":{"keywords":["animal","cricket","chirp"],"char":"🦗","fitzpatrick_scale":false,"category":"animals_and_nature"},"spider":{"keywords":["animal","arachnid"],"char":"🕷","fitzpatrick_scale":false,"category":"animals_and_nature"},"scorpion":{"keywords":["animal","arachnid"],"char":"🦂","fitzpatrick_scale":false,"category":"animals_and_nature"},"crab":{"keywords":["animal","crustacean"],"char":"🦀","fitzpatrick_scale":false,"category":"animals_and_nature"},"snake":{"keywords":["animal","evil","nature","hiss","python"],"char":"🐍","fitzpatrick_scale":false,"category":"animals_and_nature"},"lizard":{"keywords":["animal","nature","reptile"],"char":"🦎","fitzpatrick_scale":false,"category":"animals_and_nature"},"t-rex":{"keywords":["animal","nature","dinosaur","tyrannosaurus","extinct"],"char":"🦖","fitzpatrick_scale":false,"category":"animals_and_nature"},"sauropod":{"keywords":["animal","nature","dinosaur","brachiosaurus","brontosaurus","diplodocus","extinct"],"char":"🦕","fitzpatrick_scale":false,"category":"animals_and_nature"},"turtle":{"keywords":["animal","slow","nature","tortoise"],"char":"🐢","fitzpatrick_scale":false,"category":"animals_and_nature"},"tropical_fish":{"keywords":["animal","swim","ocean","beach","nemo"],"char":"🐠","fitzpatrick_scale":false,"category":"animals_and_nature"},"fish":{"keywords":["animal","food","nature"],"char":"🐟","fitzpatrick_scale":false,"category":"animals_and_nature"},"blowfish":{"keywords":["animal","nature","food","sea","ocean"],"char":"🐡","fitzpatrick_scale":false,"category":"animals_and_nature"},"dolphin":{"keywords":["animal","nature","fish","sea","ocean","flipper","fins","beach"],"char":"🐬","fitzpatrick_scale":false,"category":"animals_and_nature"},"shark":{"keywords":["animal","nature","fish","sea","ocean","jaws","fins","beach"],"char":"🦈","fitzpatrick_scale":false,"category":"animals_and_nature"},"whale":{"keywords":["animal","nature","sea","ocean"],"char":"🐳","fitzpatrick_scale":false,"category":"animals_and_nature"},"whale2":{"keywords":["animal","nature","sea","ocean"],"char":"🐋","fitzpatrick_scale":false,"category":"animals_and_nature"},"crocodile":{"keywords":["animal","nature","reptile","lizard","alligator"],"char":"🐊","fitzpatrick_scale":false,"category":"animals_and_nature"},"leopard":{"keywords":["animal","nature"],"char":"🐆","fitzpatrick_scale":false,"category":"animals_and_nature"},"zebra":{"keywords":["animal","nature","stripes","safari"],"char":"🦓","fitzpatrick_scale":false,"category":"animals_and_nature"},"tiger2":{"keywords":["animal","nature","roar"],"char":"🐅","fitzpatrick_scale":false,"category":"animals_and_nature"},"water_buffalo":{"keywords":["animal","nature","ox","cow"],"char":"🐃","fitzpatrick_scale":false,"category":"animals_and_nature"},"ox":{"keywords":["animal","cow","beef"],"char":"🐂","fitzpatrick_scale":false,"category":"animals_and_nature"},"cow2":{"keywords":["beef","ox","animal","nature","moo","milk"],"char":"🐄","fitzpatrick_scale":false,"category":"animals_and_nature"},"deer":{"keywords":["animal","nature","horns","venison"],"char":"🦌","fitzpatrick_scale":false,"category":"animals_and_nature"},"dromedary_camel":{"keywords":["animal","hot","desert","hump"],"char":"🐪","fitzpatrick_scale":false,"category":"animals_and_nature"},"camel":{"keywords":["animal","nature","hot","desert","hump"],"char":"🐫","fitzpatrick_scale":false,"category":"animals_and_nature"},"giraffe":{"keywords":["animal","nature","spots","safari"],"char":"🦒","fitzpatrick_scale":false,"category":"animals_and_nature"},"elephant":{"keywords":["animal","nature","nose","th","circus"],"char":"🐘","fitzpatrick_scale":false,"category":"animals_and_nature"},"rhinoceros":{"keywords":["animal","nature","horn"],"char":"🦏","fitzpatrick_scale":false,"category":"animals_and_nature"},"goat":{"keywords":["animal","nature"],"char":"🐐","fitzpatrick_scale":false,"category":"animals_and_nature"},"ram":{"keywords":["animal","sheep","nature"],"char":"🐏","fitzpatrick_scale":false,"category":"animals_and_nature"},"sheep":{"keywords":["animal","nature","wool","shipit"],"char":"🐑","fitzpatrick_scale":false,"category":"animals_and_nature"},"racehorse":{"keywords":["animal","gamble","luck"],"char":"🐎","fitzpatrick_scale":false,"category":"animals_and_nature"},"pig2":{"keywords":["animal","nature"],"char":"🐖","fitzpatrick_scale":false,"category":"animals_and_nature"},"rat":{"keywords":["animal","mouse","rodent"],"char":"🐀","fitzpatrick_scale":false,"category":"animals_and_nature"},"mouse2":{"keywords":["animal","nature","rodent"],"char":"🐁","fitzpatrick_scale":false,"category":"animals_and_nature"},"rooster":{"keywords":["animal","nature","chicken"],"char":"🐓","fitzpatrick_scale":false,"category":"animals_and_nature"},"turkey":{"keywords":["animal","bird"],"char":"🦃","fitzpatrick_scale":false,"category":"animals_and_nature"},"dove":{"keywords":["animal","bird"],"char":"🕊","fitzpatrick_scale":false,"category":"animals_and_nature"},"dog2":{"keywords":["animal","nature","friend","doge","pet","faithful"],"char":"🐕","fitzpatrick_scale":false,"category":"animals_and_nature"},"poodle":{"keywords":["dog","animal","101","nature","pet"],"char":"🐩","fitzpatrick_scale":false,"category":"animals_and_nature"},"cat2":{"keywords":["animal","meow","pet","cats"],"char":"🐈","fitzpatrick_scale":false,"category":"animals_and_nature"},"rabbit2":{"keywords":["animal","nature","pet","magic","spring"],"char":"🐇","fitzpatrick_scale":false,"category":"animals_and_nature"},"chipmunk":{"keywords":["animal","nature","rodent","squirrel"],"char":"🐿","fitzpatrick_scale":false,"category":"animals_and_nature"},"hedgehog":{"keywords":["animal","nature","spiny"],"char":"🦔","fitzpatrick_scale":false,"category":"animals_and_nature"},"paw_prints":{"keywords":["animal","tracking","footprints","dog","cat","pet","feet"],"char":"🐾","fitzpatrick_scale":false,"category":"animals_and_nature"},"dragon":{"keywords":["animal","myth","nature","chinese","green"],"char":"🐉","fitzpatrick_scale":false,"category":"animals_and_nature"},"dragon_face":{"keywords":["animal","myth","nature","chinese","green"],"char":"🐲","fitzpatrick_scale":false,"category":"animals_and_nature"},"cactus":{"keywords":["vegetable","plant","nature"],"char":"🌵","fitzpatrick_scale":false,"category":"animals_and_nature"},"christmas_tree":{"keywords":["festival","vacation","december","xmas","celebration"],"char":"🎄","fitzpatrick_scale":false,"category":"animals_and_nature"},"evergreen_tree":{"keywords":["plant","nature"],"char":"🌲","fitzpatrick_scale":false,"category":"animals_and_nature"},"deciduous_tree":{"keywords":["plant","nature"],"char":"🌳","fitzpatrick_scale":false,"category":"animals_and_nature"},"palm_tree":{"keywords":["plant","vegetable","nature","summer","beach","mojito","tropical"],"char":"🌴","fitzpatrick_scale":false,"category":"animals_and_nature"},"seedling":{"keywords":["plant","nature","grass","lawn","spring"],"char":"🌱","fitzpatrick_scale":false,"category":"animals_and_nature"},"herb":{"keywords":["vegetable","plant","medicine","weed","grass","lawn"],"char":"🌿","fitzpatrick_scale":false,"category":"animals_and_nature"},"shamrock":{"keywords":["vegetable","plant","nature","irish","clover"],"char":"☘","fitzpatrick_scale":false,"category":"animals_and_nature"},"four_leaf_clover":{"keywords":["vegetable","plant","nature","lucky","irish"],"char":"🍀","fitzpatrick_scale":false,"category":"animals_and_nature"},"bamboo":{"keywords":["plant","nature","vegetable","panda","pine_decoration"],"char":"🎍","fitzpatrick_scale":false,"category":"animals_and_nature"},"tanabata_tree":{"keywords":["plant","nature","branch","summer"],"char":"🎋","fitzpatrick_scale":false,"category":"animals_and_nature"},"leaves":{"keywords":["nature","plant","tree","vegetable","grass","lawn","spring"],"char":"🍃","fitzpatrick_scale":false,"category":"animals_and_nature"},"fallen_leaf":{"keywords":["nature","plant","vegetable","leaves"],"char":"🍂","fitzpatrick_scale":false,"category":"animals_and_nature"},"maple_leaf":{"keywords":["nature","plant","vegetable","ca","fall"],"char":"🍁","fitzpatrick_scale":false,"category":"animals_and_nature"},"ear_of_rice":{"keywords":["nature","plant"],"char":"🌾","fitzpatrick_scale":false,"category":"animals_and_nature"},"hibiscus":{"keywords":["plant","vegetable","flowers","beach"],"char":"🌺","fitzpatrick_scale":false,"category":"animals_and_nature"},"sunflower":{"keywords":["nature","plant","fall"],"char":"🌻","fitzpatrick_scale":false,"category":"animals_and_nature"},"rose":{"keywords":["flowers","valentines","love","spring"],"char":"🌹","fitzpatrick_scale":false,"category":"animals_and_nature"},"wilted_flower":{"keywords":["plant","nature","flower"],"char":"🥀","fitzpatrick_scale":false,"category":"animals_and_nature"},"tulip":{"keywords":["flowers","plant","nature","summer","spring"],"char":"🌷","fitzpatrick_scale":false,"category":"animals_and_nature"},"blossom":{"keywords":["nature","flowers","yellow"],"char":"🌼","fitzpatrick_scale":false,"category":"animals_and_nature"},"cherry_blossom":{"keywords":["nature","plant","spring","flower"],"char":"🌸","fitzpatrick_scale":false,"category":"animals_and_nature"},"bouquet":{"keywords":["flowers","nature","spring"],"char":"💐","fitzpatrick_scale":false,"category":"animals_and_nature"},"mushroom":{"keywords":["plant","vegetable"],"char":"🍄","fitzpatrick_scale":false,"category":"animals_and_nature"},"chestnut":{"keywords":["food","squirrel"],"char":"🌰","fitzpatrick_scale":false,"category":"animals_and_nature"},"jack_o_lantern":{"keywords":["halloween","light","pumpkin","creepy","fall"],"char":"🎃","fitzpatrick_scale":false,"category":"animals_and_nature"},"shell":{"keywords":["nature","sea","beach"],"char":"🐚","fitzpatrick_scale":false,"category":"animals_and_nature"},"spider_web":{"keywords":["animal","insect","arachnid","silk"],"char":"🕸","fitzpatrick_scale":false,"category":"animals_and_nature"},"earth_americas":{"keywords":["globe","world","USA","international"],"char":"🌎","fitzpatrick_scale":false,"category":"animals_and_nature"},"earth_africa":{"keywords":["globe","world","international"],"char":"🌍","fitzpatrick_scale":false,"category":"animals_and_nature"},"earth_asia":{"keywords":["globe","world","east","international"],"char":"🌏","fitzpatrick_scale":false,"category":"animals_and_nature"},"full_moon":{"keywords":["nature","yellow","twilight","planet","space","night","evening","sleep"],"char":"🌕","fitzpatrick_scale":false,"category":"animals_and_nature"},"waning_gibbous_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],"char":"🌖","fitzpatrick_scale":false,"category":"animals_and_nature"},"last_quarter_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌗","fitzpatrick_scale":false,"category":"animals_and_nature"},"waning_crescent_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌘","fitzpatrick_scale":false,"category":"animals_and_nature"},"new_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌑","fitzpatrick_scale":false,"category":"animals_and_nature"},"waxing_crescent_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌒","fitzpatrick_scale":false,"category":"animals_and_nature"},"first_quarter_moon":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌓","fitzpatrick_scale":false,"category":"animals_and_nature"},"waxing_gibbous_moon":{"keywords":["nature","night","sky","gray","twilight","planet","space","evening","sleep"],"char":"🌔","fitzpatrick_scale":false,"category":"animals_and_nature"},"new_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌚","fitzpatrick_scale":false,"category":"animals_and_nature"},"full_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌝","fitzpatrick_scale":false,"category":"animals_and_nature"},"first_quarter_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌛","fitzpatrick_scale":false,"category":"animals_and_nature"},"last_quarter_moon_with_face":{"keywords":["nature","twilight","planet","space","night","evening","sleep"],"char":"🌜","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_with_face":{"keywords":["nature","morning","sky"],"char":"🌞","fitzpatrick_scale":false,"category":"animals_and_nature"},"crescent_moon":{"keywords":["night","sleep","sky","evening","magic"],"char":"🌙","fitzpatrick_scale":false,"category":"animals_and_nature"},"star":{"keywords":["night","yellow"],"char":"⭐","fitzpatrick_scale":false,"category":"animals_and_nature"},"star2":{"keywords":["night","sparkle","awesome","good","magic"],"char":"🌟","fitzpatrick_scale":false,"category":"animals_and_nature"},"dizzy":{"keywords":["star","sparkle","shoot","magic"],"char":"💫","fitzpatrick_scale":false,"category":"animals_and_nature"},"sparkles":{"keywords":["stars","shine","shiny","cool","awesome","good","magic"],"char":"✨","fitzpatrick_scale":false,"category":"animals_and_nature"},"comet":{"keywords":["space"],"char":"☄","fitzpatrick_scale":false,"category":"animals_and_nature"},"sunny":{"keywords":["weather","nature","brightness","summer","beach","spring"],"char":"☀️","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_behind_small_cloud":{"keywords":["weather"],"char":"🌤","fitzpatrick_scale":false,"category":"animals_and_nature"},"partly_sunny":{"keywords":["weather","nature","cloudy","morning","fall","spring"],"char":"⛅","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_behind_large_cloud":{"keywords":["weather"],"char":"🌥","fitzpatrick_scale":false,"category":"animals_and_nature"},"sun_behind_rain_cloud":{"keywords":["weather"],"char":"🌦","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud":{"keywords":["weather","sky"],"char":"☁️","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_rain":{"keywords":["weather"],"char":"🌧","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_lightning_and_rain":{"keywords":["weather","lightning"],"char":"⛈","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_lightning":{"keywords":["weather","thunder"],"char":"🌩","fitzpatrick_scale":false,"category":"animals_and_nature"},"zap":{"keywords":["thunder","weather","lightning bolt","fast"],"char":"⚡","fitzpatrick_scale":false,"category":"animals_and_nature"},"fire":{"keywords":["hot","cook","flame"],"char":"🔥","fitzpatrick_scale":false,"category":"animals_and_nature"},"boom":{"keywords":["bomb","explode","explosion","collision","blown"],"char":"💥","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowflake":{"keywords":["winter","season","cold","weather","christmas","xmas"],"char":"❄️","fitzpatrick_scale":false,"category":"animals_and_nature"},"cloud_with_snow":{"keywords":["weather"],"char":"🌨","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowman":{"keywords":["winter","season","cold","weather","christmas","xmas","frozen","without_snow"],"char":"⛄","fitzpatrick_scale":false,"category":"animals_and_nature"},"snowman_with_snow":{"keywords":["winter","season","cold","weather","christmas","xmas","frozen"],"char":"☃","fitzpatrick_scale":false,"category":"animals_and_nature"},"wind_face":{"keywords":["gust","air"],"char":"🌬","fitzpatrick_scale":false,"category":"animals_and_nature"},"dash":{"keywords":["wind","air","fast","shoo","fart","smoke","puff"],"char":"💨","fitzpatrick_scale":false,"category":"animals_and_nature"},"tornado":{"keywords":["weather","cyclone","twister"],"char":"🌪","fitzpatrick_scale":false,"category":"animals_and_nature"},"fog":{"keywords":["weather"],"char":"🌫","fitzpatrick_scale":false,"category":"animals_and_nature"},"open_umbrella":{"keywords":["weather","spring"],"char":"☂","fitzpatrick_scale":false,"category":"animals_and_nature"},"umbrella":{"keywords":["rainy","weather","spring"],"char":"☔","fitzpatrick_scale":false,"category":"animals_and_nature"},"droplet":{"keywords":["water","drip","faucet","spring"],"char":"💧","fitzpatrick_scale":false,"category":"animals_and_nature"},"sweat_drops":{"keywords":["water","drip","oops"],"char":"💦","fitzpatrick_scale":false,"category":"animals_and_nature"},"ocean":{"keywords":["sea","water","wave","nature","tsunami","disaster"],"char":"🌊","fitzpatrick_scale":false,"category":"animals_and_nature"},"green_apple":{"keywords":["fruit","nature"],"char":"🍏","fitzpatrick_scale":false,"category":"food_and_drink"},"apple":{"keywords":["fruit","mac","school"],"char":"🍎","fitzpatrick_scale":false,"category":"food_and_drink"},"pear":{"keywords":["fruit","nature","food"],"char":"🍐","fitzpatrick_scale":false,"category":"food_and_drink"},"tangerine":{"keywords":["food","fruit","nature","orange"],"char":"🍊","fitzpatrick_scale":false,"category":"food_and_drink"},"lemon":{"keywords":["fruit","nature"],"char":"🍋","fitzpatrick_scale":false,"category":"food_and_drink"},"banana":{"keywords":["fruit","food","monkey"],"char":"🍌","fitzpatrick_scale":false,"category":"food_and_drink"},"watermelon":{"keywords":["fruit","food","picnic","summer"],"char":"🍉","fitzpatrick_scale":false,"category":"food_and_drink"},"grapes":{"keywords":["fruit","food","wine"],"char":"🍇","fitzpatrick_scale":false,"category":"food_and_drink"},"strawberry":{"keywords":["fruit","food","nature"],"char":"🍓","fitzpatrick_scale":false,"category":"food_and_drink"},"melon":{"keywords":["fruit","nature","food"],"char":"🍈","fitzpatrick_scale":false,"category":"food_and_drink"},"cherries":{"keywords":["food","fruit"],"char":"🍒","fitzpatrick_scale":false,"category":"food_and_drink"},"peach":{"keywords":["fruit","nature","food"],"char":"🍑","fitzpatrick_scale":false,"category":"food_and_drink"},"pineapple":{"keywords":["fruit","nature","food"],"char":"🍍","fitzpatrick_scale":false,"category":"food_and_drink"},"coconut":{"keywords":["fruit","nature","food","palm"],"char":"🥥","fitzpatrick_scale":false,"category":"food_and_drink"},"kiwi_fruit":{"keywords":["fruit","food"],"char":"🥝","fitzpatrick_scale":false,"category":"food_and_drink"},"avocado":{"keywords":["fruit","food"],"char":"🥑","fitzpatrick_scale":false,"category":"food_and_drink"},"broccoli":{"keywords":["fruit","food","vegetable"],"char":"🥦","fitzpatrick_scale":false,"category":"food_and_drink"},"tomato":{"keywords":["fruit","vegetable","nature","food"],"char":"🍅","fitzpatrick_scale":false,"category":"food_and_drink"},"eggplant":{"keywords":["vegetable","nature","food","aubergine"],"char":"🍆","fitzpatrick_scale":false,"category":"food_and_drink"},"cucumber":{"keywords":["fruit","food","pickle"],"char":"🥒","fitzpatrick_scale":false,"category":"food_and_drink"},"carrot":{"keywords":["vegetable","food","orange"],"char":"🥕","fitzpatrick_scale":false,"category":"food_and_drink"},"hot_pepper":{"keywords":["food","spicy","chilli","chili"],"char":"🌶","fitzpatrick_scale":false,"category":"food_and_drink"},"potato":{"keywords":["food","tuber","vegatable","starch"],"char":"🥔","fitzpatrick_scale":false,"category":"food_and_drink"},"corn":{"keywords":["food","vegetable","plant"],"char":"🌽","fitzpatrick_scale":false,"category":"food_and_drink"},"sweet_potato":{"keywords":["food","nature"],"char":"🍠","fitzpatrick_scale":false,"category":"food_and_drink"},"peanuts":{"keywords":["food","nut"],"char":"🥜","fitzpatrick_scale":false,"category":"food_and_drink"},"honey_pot":{"keywords":["bees","sweet","kitchen"],"char":"🍯","fitzpatrick_scale":false,"category":"food_and_drink"},"croissant":{"keywords":["food","bread","french"],"char":"🥐","fitzpatrick_scale":false,"category":"food_and_drink"},"bread":{"keywords":["food","wheat","breakfast","toast"],"char":"🍞","fitzpatrick_scale":false,"category":"food_and_drink"},"baguette_bread":{"keywords":["food","bread","french"],"char":"🥖","fitzpatrick_scale":false,"category":"food_and_drink"},"pretzel":{"keywords":["food","bread","twisted"],"char":"🥨","fitzpatrick_scale":false,"category":"food_and_drink"},"cheese":{"keywords":["food","chadder"],"char":"🧀","fitzpatrick_scale":false,"category":"food_and_drink"},"egg":{"keywords":["food","chicken","breakfast"],"char":"🥚","fitzpatrick_scale":false,"category":"food_and_drink"},"bacon":{"keywords":["food","breakfast","pork","pig","meat"],"char":"🥓","fitzpatrick_scale":false,"category":"food_and_drink"},"steak":{"keywords":["food","cow","meat","cut","chop","lambchop","porkchop"],"char":"🥩","fitzpatrick_scale":false,"category":"food_and_drink"},"pancakes":{"keywords":["food","breakfast","flapjacks","hotcakes"],"char":"🥞","fitzpatrick_scale":false,"category":"food_and_drink"},"poultry_leg":{"keywords":["food","meat","drumstick","bird","chicken","turkey"],"char":"🍗","fitzpatrick_scale":false,"category":"food_and_drink"},"meat_on_bone":{"keywords":["good","food","drumstick"],"char":"🍖","fitzpatrick_scale":false,"category":"food_and_drink"},"fried_shrimp":{"keywords":["food","animal","appetizer","summer"],"char":"🍤","fitzpatrick_scale":false,"category":"food_and_drink"},"fried_egg":{"keywords":["food","breakfast","kitchen","egg"],"char":"🍳","fitzpatrick_scale":false,"category":"food_and_drink"},"hamburger":{"keywords":["meat","fast food","beef","cheeseburger","mcdonalds","burger king"],"char":"🍔","fitzpatrick_scale":false,"category":"food_and_drink"},"fries":{"keywords":["chips","snack","fast food"],"char":"🍟","fitzpatrick_scale":false,"category":"food_and_drink"},"stuffed_flatbread":{"keywords":["food","flatbread","stuffed","gyro"],"char":"🥙","fitzpatrick_scale":false,"category":"food_and_drink"},"hotdog":{"keywords":["food","frankfurter"],"char":"🌭","fitzpatrick_scale":false,"category":"food_and_drink"},"pizza":{"keywords":["food","party"],"char":"🍕","fitzpatrick_scale":false,"category":"food_and_drink"},"sandwich":{"keywords":["food","lunch","bread"],"char":"🥪","fitzpatrick_scale":false,"category":"food_and_drink"},"canned_food":{"keywords":["food","soup"],"char":"🥫","fitzpatrick_scale":false,"category":"food_and_drink"},"spaghetti":{"keywords":["food","italian","noodle"],"char":"🍝","fitzpatrick_scale":false,"category":"food_and_drink"},"taco":{"keywords":["food","mexican"],"char":"🌮","fitzpatrick_scale":false,"category":"food_and_drink"},"burrito":{"keywords":["food","mexican"],"char":"🌯","fitzpatrick_scale":false,"category":"food_and_drink"},"green_salad":{"keywords":["food","healthy","lettuce"],"char":"🥗","fitzpatrick_scale":false,"category":"food_and_drink"},"shallow_pan_of_food":{"keywords":["food","cooking","casserole","paella"],"char":"🥘","fitzpatrick_scale":false,"category":"food_and_drink"},"ramen":{"keywords":["food","japanese","noodle","chopsticks"],"char":"🍜","fitzpatrick_scale":false,"category":"food_and_drink"},"stew":{"keywords":["food","meat","soup"],"char":"🍲","fitzpatrick_scale":false,"category":"food_and_drink"},"fish_cake":{"keywords":["food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],"char":"🍥","fitzpatrick_scale":false,"category":"food_and_drink"},"fortune_cookie":{"keywords":["food","prophecy"],"char":"🥠","fitzpatrick_scale":false,"category":"food_and_drink"},"sushi":{"keywords":["food","fish","japanese","rice"],"char":"🍣","fitzpatrick_scale":false,"category":"food_and_drink"},"bento":{"keywords":["food","japanese","box"],"char":"🍱","fitzpatrick_scale":false,"category":"food_and_drink"},"curry":{"keywords":["food","spicy","hot","indian"],"char":"🍛","fitzpatrick_scale":false,"category":"food_and_drink"},"rice_ball":{"keywords":["food","japanese"],"char":"🍙","fitzpatrick_scale":false,"category":"food_and_drink"},"rice":{"keywords":["food","china","asian"],"char":"🍚","fitzpatrick_scale":false,"category":"food_and_drink"},"rice_cracker":{"keywords":["food","japanese"],"char":"🍘","fitzpatrick_scale":false,"category":"food_and_drink"},"oden":{"keywords":["food","japanese"],"char":"🍢","fitzpatrick_scale":false,"category":"food_and_drink"},"dango":{"keywords":["food","dessert","sweet","japanese","barbecue","meat"],"char":"🍡","fitzpatrick_scale":false,"category":"food_and_drink"},"shaved_ice":{"keywords":["hot","dessert","summer"],"char":"🍧","fitzpatrick_scale":false,"category":"food_and_drink"},"ice_cream":{"keywords":["food","hot","dessert"],"char":"🍨","fitzpatrick_scale":false,"category":"food_and_drink"},"icecream":{"keywords":["food","hot","dessert","summer"],"char":"🍦","fitzpatrick_scale":false,"category":"food_and_drink"},"pie":{"keywords":["food","dessert","pastry"],"char":"🥧","fitzpatrick_scale":false,"category":"food_and_drink"},"cake":{"keywords":["food","dessert"],"char":"🍰","fitzpatrick_scale":false,"category":"food_and_drink"},"birthday":{"keywords":["food","dessert","cake"],"char":"🎂","fitzpatrick_scale":false,"category":"food_and_drink"},"custard":{"keywords":["dessert","food"],"char":"🍮","fitzpatrick_scale":false,"category":"food_and_drink"},"candy":{"keywords":["snack","dessert","sweet","lolly"],"char":"🍬","fitzpatrick_scale":false,"category":"food_and_drink"},"lollipop":{"keywords":["food","snack","candy","sweet"],"char":"🍭","fitzpatrick_scale":false,"category":"food_and_drink"},"chocolate_bar":{"keywords":["food","snack","dessert","sweet"],"char":"🍫","fitzpatrick_scale":false,"category":"food_and_drink"},"popcorn":{"keywords":["food","movie theater","films","snack"],"char":"🍿","fitzpatrick_scale":false,"category":"food_and_drink"},"dumpling":{"keywords":["food","empanada","pierogi","potsticker"],"char":"🥟","fitzpatrick_scale":false,"category":"food_and_drink"},"doughnut":{"keywords":["food","dessert","snack","sweet","donut"],"char":"🍩","fitzpatrick_scale":false,"category":"food_and_drink"},"cookie":{"keywords":["food","snack","oreo","chocolate","sweet","dessert"],"char":"🍪","fitzpatrick_scale":false,"category":"food_and_drink"},"milk_glass":{"keywords":["beverage","drink","cow"],"char":"🥛","fitzpatrick_scale":false,"category":"food_and_drink"},"beer":{"keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"char":"🍺","fitzpatrick_scale":false,"category":"food_and_drink"},"beers":{"keywords":["relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],"char":"🍻","fitzpatrick_scale":false,"category":"food_and_drink"},"clinking_glasses":{"keywords":["beverage","drink","party","alcohol","celebrate","cheers","wine","champagne","toast"],"char":"🥂","fitzpatrick_scale":false,"category":"food_and_drink"},"wine_glass":{"keywords":["drink","beverage","drunk","alcohol","booze"],"char":"🍷","fitzpatrick_scale":false,"category":"food_and_drink"},"tumbler_glass":{"keywords":["drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],"char":"🥃","fitzpatrick_scale":false,"category":"food_and_drink"},"cocktail":{"keywords":["drink","drunk","alcohol","beverage","booze","mojito"],"char":"🍸","fitzpatrick_scale":false,"category":"food_and_drink"},"tropical_drink":{"keywords":["beverage","cocktail","summer","beach","alcohol","booze","mojito"],"char":"🍹","fitzpatrick_scale":false,"category":"food_and_drink"},"champagne":{"keywords":["drink","wine","bottle","celebration"],"char":"🍾","fitzpatrick_scale":false,"category":"food_and_drink"},"sake":{"keywords":["wine","drink","drunk","beverage","japanese","alcohol","booze"],"char":"🍶","fitzpatrick_scale":false,"category":"food_and_drink"},"tea":{"keywords":["drink","bowl","breakfast","green","british"],"char":"🍵","fitzpatrick_scale":false,"category":"food_and_drink"},"cup_with_straw":{"keywords":["drink","soda"],"char":"🥤","fitzpatrick_scale":false,"category":"food_and_drink"},"coffee":{"keywords":["beverage","caffeine","latte","espresso"],"char":"☕","fitzpatrick_scale":false,"category":"food_and_drink"},"baby_bottle":{"keywords":["food","container","milk"],"char":"🍼","fitzpatrick_scale":false,"category":"food_and_drink"},"spoon":{"keywords":["cutlery","kitchen","tableware"],"char":"🥄","fitzpatrick_scale":false,"category":"food_and_drink"},"fork_and_knife":{"keywords":["cutlery","kitchen"],"char":"🍴","fitzpatrick_scale":false,"category":"food_and_drink"},"plate_with_cutlery":{"keywords":["food","eat","meal","lunch","dinner","restaurant"],"char":"🍽","fitzpatrick_scale":false,"category":"food_and_drink"},"bowl_with_spoon":{"keywords":["food","breakfast","cereal","oatmeal","porridge"],"char":"🥣","fitzpatrick_scale":false,"category":"food_and_drink"},"takeout_box":{"keywords":["food","leftovers"],"char":"🥡","fitzpatrick_scale":false,"category":"food_and_drink"},"chopsticks":{"keywords":["food"],"char":"🥢","fitzpatrick_scale":false,"category":"food_and_drink"},"soccer":{"keywords":["sports","football"],"char":"⚽","fitzpatrick_scale":false,"category":"activity"},"basketball":{"keywords":["sports","balls","NBA"],"char":"🏀","fitzpatrick_scale":false,"category":"activity"},"football":{"keywords":["sports","balls","NFL"],"char":"🏈","fitzpatrick_scale":false,"category":"activity"},"baseball":{"keywords":["sports","balls"],"char":"⚾","fitzpatrick_scale":false,"category":"activity"},"tennis":{"keywords":["sports","balls","green"],"char":"🎾","fitzpatrick_scale":false,"category":"activity"},"volleyball":{"keywords":["sports","balls"],"char":"🏐","fitzpatrick_scale":false,"category":"activity"},"rugby_football":{"keywords":["sports","team"],"char":"🏉","fitzpatrick_scale":false,"category":"activity"},"8ball":{"keywords":["pool","hobby","game","luck","magic"],"char":"🎱","fitzpatrick_scale":false,"category":"activity"},"golf":{"keywords":["sports","business","flag","hole","summer"],"char":"⛳","fitzpatrick_scale":false,"category":"activity"},"golfing_woman":{"keywords":["sports","business","woman","female"],"char":"🏌️‍♀️","fitzpatrick_scale":false,"category":"activity"},"golfing_man":{"keywords":["sports","business"],"char":"🏌","fitzpatrick_scale":true,"category":"activity"},"ping_pong":{"keywords":["sports","pingpong"],"char":"🏓","fitzpatrick_scale":false,"category":"activity"},"badminton":{"keywords":["sports"],"char":"🏸","fitzpatrick_scale":false,"category":"activity"},"goal_net":{"keywords":["sports"],"char":"🥅","fitzpatrick_scale":false,"category":"activity"},"ice_hockey":{"keywords":["sports"],"char":"🏒","fitzpatrick_scale":false,"category":"activity"},"field_hockey":{"keywords":["sports"],"char":"🏑","fitzpatrick_scale":false,"category":"activity"},"cricket":{"keywords":["sports"],"char":"🏏","fitzpatrick_scale":false,"category":"activity"},"ski":{"keywords":["sports","winter","cold","snow"],"char":"🎿","fitzpatrick_scale":false,"category":"activity"},"skier":{"keywords":["sports","winter","snow"],"char":"⛷","fitzpatrick_scale":false,"category":"activity"},"snowboarder":{"keywords":["sports","winter"],"char":"🏂","fitzpatrick_scale":true,"category":"activity"},"person_fencing":{"keywords":["sports","fencing","sword"],"char":"🤺","fitzpatrick_scale":false,"category":"activity"},"women_wrestling":{"keywords":["sports","wrestlers"],"char":"🤼‍♀️","fitzpatrick_scale":false,"category":"activity"},"men_wrestling":{"keywords":["sports","wrestlers"],"char":"🤼‍♂️","fitzpatrick_scale":false,"category":"activity"},"woman_cartwheeling":{"keywords":["gymnastics"],"char":"🤸‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_cartwheeling":{"keywords":["gymnastics"],"char":"🤸‍♂️","fitzpatrick_scale":true,"category":"activity"},"woman_playing_handball":{"keywords":["sports"],"char":"🤾‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_playing_handball":{"keywords":["sports"],"char":"🤾‍♂️","fitzpatrick_scale":true,"category":"activity"},"ice_skate":{"keywords":["sports"],"char":"⛸","fitzpatrick_scale":false,"category":"activity"},"curling_stone":{"keywords":["sports"],"char":"🥌","fitzpatrick_scale":false,"category":"activity"},"sled":{"keywords":["sleigh","luge","toboggan"],"char":"🛷","fitzpatrick_scale":false,"category":"activity"},"bow_and_arrow":{"keywords":["sports"],"char":"🏹","fitzpatrick_scale":false,"category":"activity"},"fishing_pole_and_fish":{"keywords":["food","hobby","summer"],"char":"🎣","fitzpatrick_scale":false,"category":"activity"},"boxing_glove":{"keywords":["sports","fighting"],"char":"🥊","fitzpatrick_scale":false,"category":"activity"},"martial_arts_uniform":{"keywords":["judo","karate","taekwondo"],"char":"🥋","fitzpatrick_scale":false,"category":"activity"},"rowing_woman":{"keywords":["sports","hobby","water","ship","woman","female"],"char":"🚣‍♀️","fitzpatrick_scale":true,"category":"activity"},"rowing_man":{"keywords":["sports","hobby","water","ship"],"char":"🚣","fitzpatrick_scale":true,"category":"activity"},"climbing_woman":{"keywords":["sports","hobby","woman","female","rock"],"char":"🧗‍♀️","fitzpatrick_scale":true,"category":"activity"},"climbing_man":{"keywords":["sports","hobby","man","male","rock"],"char":"🧗‍♂️","fitzpatrick_scale":true,"category":"activity"},"swimming_woman":{"keywords":["sports","exercise","human","athlete","water","summer","woman","female"],"char":"🏊‍♀️","fitzpatrick_scale":true,"category":"activity"},"swimming_man":{"keywords":["sports","exercise","human","athlete","water","summer"],"char":"🏊","fitzpatrick_scale":true,"category":"activity"},"woman_playing_water_polo":{"keywords":["sports","pool"],"char":"🤽‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_playing_water_polo":{"keywords":["sports","pool"],"char":"🤽‍♂️","fitzpatrick_scale":true,"category":"activity"},"woman_in_lotus_position":{"keywords":["woman","female","meditation","yoga","serenity","zen","mindfulness"],"char":"🧘‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_in_lotus_position":{"keywords":["man","male","meditation","yoga","serenity","zen","mindfulness"],"char":"🧘‍♂️","fitzpatrick_scale":true,"category":"activity"},"surfing_woman":{"keywords":["sports","ocean","sea","summer","beach","woman","female"],"char":"🏄‍♀️","fitzpatrick_scale":true,"category":"activity"},"surfing_man":{"keywords":["sports","ocean","sea","summer","beach"],"char":"🏄","fitzpatrick_scale":true,"category":"activity"},"bath":{"keywords":["clean","shower","bathroom"],"char":"🛀","fitzpatrick_scale":true,"category":"activity"},"basketball_woman":{"keywords":["sports","human","woman","female"],"char":"⛹️‍♀️","fitzpatrick_scale":true,"category":"activity"},"basketball_man":{"keywords":["sports","human"],"char":"⛹","fitzpatrick_scale":true,"category":"activity"},"weight_lifting_woman":{"keywords":["sports","training","exercise","woman","female"],"char":"🏋️‍♀️","fitzpatrick_scale":true,"category":"activity"},"weight_lifting_man":{"keywords":["sports","training","exercise"],"char":"🏋","fitzpatrick_scale":true,"category":"activity"},"biking_woman":{"keywords":["sports","bike","exercise","hipster","woman","female"],"char":"🚴‍♀️","fitzpatrick_scale":true,"category":"activity"},"biking_man":{"keywords":["sports","bike","exercise","hipster"],"char":"🚴","fitzpatrick_scale":true,"category":"activity"},"mountain_biking_woman":{"keywords":["transportation","sports","human","race","bike","woman","female"],"char":"🚵‍♀️","fitzpatrick_scale":true,"category":"activity"},"mountain_biking_man":{"keywords":["transportation","sports","human","race","bike"],"char":"🚵","fitzpatrick_scale":true,"category":"activity"},"horse_racing":{"keywords":["animal","betting","competition","gambling","luck"],"char":"🏇","fitzpatrick_scale":true,"category":"activity"},"business_suit_levitating":{"keywords":["suit","business","levitate","hover","jump"],"char":"🕴","fitzpatrick_scale":true,"category":"activity"},"trophy":{"keywords":["win","award","contest","place","ftw","ceremony"],"char":"🏆","fitzpatrick_scale":false,"category":"activity"},"running_shirt_with_sash":{"keywords":["play","pageant"],"char":"🎽","fitzpatrick_scale":false,"category":"activity"},"medal_sports":{"keywords":["award","winning"],"char":"🏅","fitzpatrick_scale":false,"category":"activity"},"medal_military":{"keywords":["award","winning","army"],"char":"🎖","fitzpatrick_scale":false,"category":"activity"},"1st_place_medal":{"keywords":["award","winning","first"],"char":"🥇","fitzpatrick_scale":false,"category":"activity"},"2nd_place_medal":{"keywords":["award","second"],"char":"🥈","fitzpatrick_scale":false,"category":"activity"},"3rd_place_medal":{"keywords":["award","third"],"char":"🥉","fitzpatrick_scale":false,"category":"activity"},"reminder_ribbon":{"keywords":["sports","cause","support","awareness"],"char":"🎗","fitzpatrick_scale":false,"category":"activity"},"rosette":{"keywords":["flower","decoration","military"],"char":"🏵","fitzpatrick_scale":false,"category":"activity"},"ticket":{"keywords":["event","concert","pass"],"char":"🎫","fitzpatrick_scale":false,"category":"activity"},"tickets":{"keywords":["sports","concert","entrance"],"char":"🎟","fitzpatrick_scale":false,"category":"activity"},"performing_arts":{"keywords":["acting","theater","drama"],"char":"🎭","fitzpatrick_scale":false,"category":"activity"},"art":{"keywords":["design","paint","draw","colors"],"char":"🎨","fitzpatrick_scale":false,"category":"activity"},"circus_tent":{"keywords":["festival","carnival","party"],"char":"🎪","fitzpatrick_scale":false,"category":"activity"},"woman_juggling":{"keywords":["juggle","balance","skill","multitask"],"char":"🤹‍♀️","fitzpatrick_scale":true,"category":"activity"},"man_juggling":{"keywords":["juggle","balance","skill","multitask"],"char":"🤹‍♂️","fitzpatrick_scale":true,"category":"activity"},"microphone":{"keywords":["sound","music","PA","sing","talkshow"],"char":"🎤","fitzpatrick_scale":false,"category":"activity"},"headphones":{"keywords":["music","score","gadgets"],"char":"🎧","fitzpatrick_scale":false,"category":"activity"},"musical_score":{"keywords":["treble","clef","compose"],"char":"🎼","fitzpatrick_scale":false,"category":"activity"},"musical_keyboard":{"keywords":["piano","instrument","compose"],"char":"🎹","fitzpatrick_scale":false,"category":"activity"},"drum":{"keywords":["music","instrument","drumsticks","snare"],"char":"🥁","fitzpatrick_scale":false,"category":"activity"},"saxophone":{"keywords":["music","instrument","jazz","blues"],"char":"🎷","fitzpatrick_scale":false,"category":"activity"},"trumpet":{"keywords":["music","brass"],"char":"🎺","fitzpatrick_scale":false,"category":"activity"},"guitar":{"keywords":["music","instrument"],"char":"🎸","fitzpatrick_scale":false,"category":"activity"},"violin":{"keywords":["music","instrument","orchestra","symphony"],"char":"🎻","fitzpatrick_scale":false,"category":"activity"},"clapper":{"keywords":["movie","film","record"],"char":"🎬","fitzpatrick_scale":false,"category":"activity"},"video_game":{"keywords":["play","console","PS4","controller"],"char":"🎮","fitzpatrick_scale":false,"category":"activity"},"space_invader":{"keywords":["game","arcade","play"],"char":"👾","fitzpatrick_scale":false,"category":"activity"},"dart":{"keywords":["game","play","bar","target","bullseye"],"char":"🎯","fitzpatrick_scale":false,"category":"activity"},"game_die":{"keywords":["dice","random","tabletop","play","luck"],"char":"🎲","fitzpatrick_scale":false,"category":"activity"},"slot_machine":{"keywords":["bet","gamble","vegas","fruit machine","luck","casino"],"char":"🎰","fitzpatrick_scale":false,"category":"activity"},"bowling":{"keywords":["sports","fun","play"],"char":"🎳","fitzpatrick_scale":false,"category":"activity"},"red_car":{"keywords":["red","transportation","vehicle"],"char":"🚗","fitzpatrick_scale":false,"category":"travel_and_places"},"taxi":{"keywords":["uber","vehicle","cars","transportation"],"char":"🚕","fitzpatrick_scale":false,"category":"travel_and_places"},"blue_car":{"keywords":["transportation","vehicle"],"char":"🚙","fitzpatrick_scale":false,"category":"travel_and_places"},"bus":{"keywords":["car","vehicle","transportation"],"char":"🚌","fitzpatrick_scale":false,"category":"travel_and_places"},"trolleybus":{"keywords":["bart","transportation","vehicle"],"char":"🚎","fitzpatrick_scale":false,"category":"travel_and_places"},"racing_car":{"keywords":["sports","race","fast","formula","f1"],"char":"🏎","fitzpatrick_scale":false,"category":"travel_and_places"},"police_car":{"keywords":["vehicle","cars","transportation","law","legal","enforcement"],"char":"🚓","fitzpatrick_scale":false,"category":"travel_and_places"},"ambulance":{"keywords":["health","911","hospital"],"char":"🚑","fitzpatrick_scale":false,"category":"travel_and_places"},"fire_engine":{"keywords":["transportation","cars","vehicle"],"char":"🚒","fitzpatrick_scale":false,"category":"travel_and_places"},"minibus":{"keywords":["vehicle","car","transportation"],"char":"🚐","fitzpatrick_scale":false,"category":"travel_and_places"},"truck":{"keywords":["cars","transportation"],"char":"🚚","fitzpatrick_scale":false,"category":"travel_and_places"},"articulated_lorry":{"keywords":["vehicle","cars","transportation","express"],"char":"🚛","fitzpatrick_scale":false,"category":"travel_and_places"},"tractor":{"keywords":["vehicle","car","farming","agriculture"],"char":"🚜","fitzpatrick_scale":false,"category":"travel_and_places"},"kick_scooter":{"keywords":["vehicle","kick","razor"],"char":"🛴","fitzpatrick_scale":false,"category":"travel_and_places"},"motorcycle":{"keywords":["race","sports","fast"],"char":"🏍","fitzpatrick_scale":false,"category":"travel_and_places"},"bike":{"keywords":["sports","bicycle","exercise","hipster"],"char":"🚲","fitzpatrick_scale":false,"category":"travel_and_places"},"motor_scooter":{"keywords":["vehicle","vespa","sasha"],"char":"🛵","fitzpatrick_scale":false,"category":"travel_and_places"},"rotating_light":{"keywords":["police","ambulance","911","emergency","alert","error","pinged","law","legal"],"char":"🚨","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_police_car":{"keywords":["vehicle","law","legal","enforcement","911"],"char":"🚔","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_bus":{"keywords":["vehicle","transportation"],"char":"🚍","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_automobile":{"keywords":["car","vehicle","transportation"],"char":"🚘","fitzpatrick_scale":false,"category":"travel_and_places"},"oncoming_taxi":{"keywords":["vehicle","cars","uber"],"char":"🚖","fitzpatrick_scale":false,"category":"travel_and_places"},"aerial_tramway":{"keywords":["transportation","vehicle","ski"],"char":"🚡","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain_cableway":{"keywords":["transportation","vehicle","ski"],"char":"🚠","fitzpatrick_scale":false,"category":"travel_and_places"},"suspension_railway":{"keywords":["vehicle","transportation"],"char":"🚟","fitzpatrick_scale":false,"category":"travel_and_places"},"railway_car":{"keywords":["transportation","vehicle"],"char":"🚃","fitzpatrick_scale":false,"category":"travel_and_places"},"train":{"keywords":["transportation","vehicle","carriage","public","travel"],"char":"🚋","fitzpatrick_scale":false,"category":"travel_and_places"},"monorail":{"keywords":["transportation","vehicle"],"char":"🚝","fitzpatrick_scale":false,"category":"travel_and_places"},"bullettrain_side":{"keywords":["transportation","vehicle"],"char":"🚄","fitzpatrick_scale":false,"category":"travel_and_places"},"bullettrain_front":{"keywords":["transportation","vehicle","speed","fast","public","travel"],"char":"🚅","fitzpatrick_scale":false,"category":"travel_and_places"},"light_rail":{"keywords":["transportation","vehicle"],"char":"🚈","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain_railway":{"keywords":["transportation","vehicle"],"char":"🚞","fitzpatrick_scale":false,"category":"travel_and_places"},"steam_locomotive":{"keywords":["transportation","vehicle","train"],"char":"🚂","fitzpatrick_scale":false,"category":"travel_and_places"},"train2":{"keywords":["transportation","vehicle"],"char":"🚆","fitzpatrick_scale":false,"category":"travel_and_places"},"metro":{"keywords":["transportation","blue-square","mrt","underground","tube"],"char":"🚇","fitzpatrick_scale":false,"category":"travel_and_places"},"tram":{"keywords":["transportation","vehicle"],"char":"🚊","fitzpatrick_scale":false,"category":"travel_and_places"},"station":{"keywords":["transportation","vehicle","public"],"char":"🚉","fitzpatrick_scale":false,"category":"travel_and_places"},"flying_saucer":{"keywords":["transportation","vehicle","ufo"],"char":"🛸","fitzpatrick_scale":false,"category":"travel_and_places"},"helicopter":{"keywords":["transportation","vehicle","fly"],"char":"🚁","fitzpatrick_scale":false,"category":"travel_and_places"},"small_airplane":{"keywords":["flight","transportation","fly","vehicle"],"char":"🛩","fitzpatrick_scale":false,"category":"travel_and_places"},"airplane":{"keywords":["vehicle","transportation","flight","fly"],"char":"✈️","fitzpatrick_scale":false,"category":"travel_and_places"},"flight_departure":{"keywords":["airport","flight","landing"],"char":"🛫","fitzpatrick_scale":false,"category":"travel_and_places"},"flight_arrival":{"keywords":["airport","flight","boarding"],"char":"🛬","fitzpatrick_scale":false,"category":"travel_and_places"},"sailboat":{"keywords":["ship","summer","transportation","water","sailing"],"char":"⛵","fitzpatrick_scale":false,"category":"travel_and_places"},"motor_boat":{"keywords":["ship"],"char":"🛥","fitzpatrick_scale":false,"category":"travel_and_places"},"speedboat":{"keywords":["ship","transportation","vehicle","summer"],"char":"🚤","fitzpatrick_scale":false,"category":"travel_and_places"},"ferry":{"keywords":["boat","ship","yacht"],"char":"⛴","fitzpatrick_scale":false,"category":"travel_and_places"},"passenger_ship":{"keywords":["yacht","cruise","ferry"],"char":"🛳","fitzpatrick_scale":false,"category":"travel_and_places"},"rocket":{"keywords":["launch","ship","staffmode","NASA","outer space","outer_space","fly"],"char":"🚀","fitzpatrick_scale":false,"category":"travel_and_places"},"artificial_satellite":{"keywords":["communication","gps","orbit","spaceflight","NASA","ISS"],"char":"🛰","fitzpatrick_scale":false,"category":"travel_and_places"},"seat":{"keywords":["sit","airplane","transport","bus","flight","fly"],"char":"💺","fitzpatrick_scale":false,"category":"travel_and_places"},"canoe":{"keywords":["boat","paddle","water","ship"],"char":"🛶","fitzpatrick_scale":false,"category":"travel_and_places"},"anchor":{"keywords":["ship","ferry","sea","boat"],"char":"⚓","fitzpatrick_scale":false,"category":"travel_and_places"},"construction":{"keywords":["wip","progress","caution","warning"],"char":"🚧","fitzpatrick_scale":false,"category":"travel_and_places"},"fuelpump":{"keywords":["gas station","petroleum"],"char":"⛽","fitzpatrick_scale":false,"category":"travel_and_places"},"busstop":{"keywords":["transportation","wait"],"char":"🚏","fitzpatrick_scale":false,"category":"travel_and_places"},"vertical_traffic_light":{"keywords":["transportation","driving"],"char":"🚦","fitzpatrick_scale":false,"category":"travel_and_places"},"traffic_light":{"keywords":["transportation","signal"],"char":"🚥","fitzpatrick_scale":false,"category":"travel_and_places"},"checkered_flag":{"keywords":["contest","finishline","race","gokart"],"char":"🏁","fitzpatrick_scale":false,"category":"travel_and_places"},"ship":{"keywords":["transportation","titanic","deploy"],"char":"🚢","fitzpatrick_scale":false,"category":"travel_and_places"},"ferris_wheel":{"keywords":["photo","carnival","londoneye"],"char":"🎡","fitzpatrick_scale":false,"category":"travel_and_places"},"roller_coaster":{"keywords":["carnival","playground","photo","fun"],"char":"🎢","fitzpatrick_scale":false,"category":"travel_and_places"},"carousel_horse":{"keywords":["photo","carnival"],"char":"🎠","fitzpatrick_scale":false,"category":"travel_and_places"},"building_construction":{"keywords":["wip","working","progress"],"char":"🏗","fitzpatrick_scale":false,"category":"travel_and_places"},"foggy":{"keywords":["photo","mountain"],"char":"🌁","fitzpatrick_scale":false,"category":"travel_and_places"},"tokyo_tower":{"keywords":["photo","japanese"],"char":"🗼","fitzpatrick_scale":false,"category":"travel_and_places"},"factory":{"keywords":["building","industry","pollution","smoke"],"char":"🏭","fitzpatrick_scale":false,"category":"travel_and_places"},"fountain":{"keywords":["photo","summer","water","fresh"],"char":"⛲","fitzpatrick_scale":false,"category":"travel_and_places"},"rice_scene":{"keywords":["photo","japan","asia","tsukimi"],"char":"🎑","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain":{"keywords":["photo","nature","environment"],"char":"⛰","fitzpatrick_scale":false,"category":"travel_and_places"},"mountain_snow":{"keywords":["photo","nature","environment","winter","cold"],"char":"🏔","fitzpatrick_scale":false,"category":"travel_and_places"},"mount_fuji":{"keywords":["photo","mountain","nature","japanese"],"char":"🗻","fitzpatrick_scale":false,"category":"travel_and_places"},"volcano":{"keywords":["photo","nature","disaster"],"char":"🌋","fitzpatrick_scale":false,"category":"travel_and_places"},"japan":{"keywords":["nation","country","japanese","asia"],"char":"🗾","fitzpatrick_scale":false,"category":"travel_and_places"},"camping":{"keywords":["photo","outdoors","tent"],"char":"🏕","fitzpatrick_scale":false,"category":"travel_and_places"},"tent":{"keywords":["photo","camping","outdoors"],"char":"⛺","fitzpatrick_scale":false,"category":"travel_and_places"},"national_park":{"keywords":["photo","environment","nature"],"char":"🏞","fitzpatrick_scale":false,"category":"travel_and_places"},"motorway":{"keywords":["road","cupertino","interstate","highway"],"char":"🛣","fitzpatrick_scale":false,"category":"travel_and_places"},"railway_track":{"keywords":["train","transportation"],"char":"🛤","fitzpatrick_scale":false,"category":"travel_and_places"},"sunrise":{"keywords":["morning","view","vacation","photo"],"char":"🌅","fitzpatrick_scale":false,"category":"travel_and_places"},"sunrise_over_mountains":{"keywords":["view","vacation","photo"],"char":"🌄","fitzpatrick_scale":false,"category":"travel_and_places"},"desert":{"keywords":["photo","warm","saharah"],"char":"🏜","fitzpatrick_scale":false,"category":"travel_and_places"},"beach_umbrella":{"keywords":["weather","summer","sunny","sand","mojito"],"char":"🏖","fitzpatrick_scale":false,"category":"travel_and_places"},"desert_island":{"keywords":["photo","tropical","mojito"],"char":"🏝","fitzpatrick_scale":false,"category":"travel_and_places"},"city_sunrise":{"keywords":["photo","good morning","dawn"],"char":"🌇","fitzpatrick_scale":false,"category":"travel_and_places"},"city_sunset":{"keywords":["photo","evening","sky","buildings"],"char":"🌆","fitzpatrick_scale":false,"category":"travel_and_places"},"cityscape":{"keywords":["photo","night life","urban"],"char":"🏙","fitzpatrick_scale":false,"category":"travel_and_places"},"night_with_stars":{"keywords":["evening","city","downtown"],"char":"🌃","fitzpatrick_scale":false,"category":"travel_and_places"},"bridge_at_night":{"keywords":["photo","sanfrancisco"],"char":"🌉","fitzpatrick_scale":false,"category":"travel_and_places"},"milky_way":{"keywords":["photo","space","stars"],"char":"🌌","fitzpatrick_scale":false,"category":"travel_and_places"},"stars":{"keywords":["night","photo"],"char":"🌠","fitzpatrick_scale":false,"category":"travel_and_places"},"sparkler":{"keywords":["stars","night","shine"],"char":"🎇","fitzpatrick_scale":false,"category":"travel_and_places"},"fireworks":{"keywords":["photo","festival","carnival","congratulations"],"char":"🎆","fitzpatrick_scale":false,"category":"travel_and_places"},"rainbow":{"keywords":["nature","happy","unicorn_face","photo","sky","spring"],"char":"🌈","fitzpatrick_scale":false,"category":"travel_and_places"},"houses":{"keywords":["buildings","photo"],"char":"🏘","fitzpatrick_scale":false,"category":"travel_and_places"},"european_castle":{"keywords":["building","royalty","history"],"char":"🏰","fitzpatrick_scale":false,"category":"travel_and_places"},"japanese_castle":{"keywords":["photo","building"],"char":"🏯","fitzpatrick_scale":false,"category":"travel_and_places"},"stadium":{"keywords":["photo","place","sports","concert","venue"],"char":"🏟","fitzpatrick_scale":false,"category":"travel_and_places"},"statue_of_liberty":{"keywords":["american","newyork"],"char":"🗽","fitzpatrick_scale":false,"category":"travel_and_places"},"house":{"keywords":["building","home"],"char":"🏠","fitzpatrick_scale":false,"category":"travel_and_places"},"house_with_garden":{"keywords":["home","plant","nature"],"char":"🏡","fitzpatrick_scale":false,"category":"travel_and_places"},"derelict_house":{"keywords":["abandon","evict","broken","building"],"char":"🏚","fitzpatrick_scale":false,"category":"travel_and_places"},"office":{"keywords":["building","bureau","work"],"char":"🏢","fitzpatrick_scale":false,"category":"travel_and_places"},"department_store":{"keywords":["building","shopping","mall"],"char":"🏬","fitzpatrick_scale":false,"category":"travel_and_places"},"post_office":{"keywords":["building","envelope","communication"],"char":"🏣","fitzpatrick_scale":false,"category":"travel_and_places"},"european_post_office":{"keywords":["building","email"],"char":"🏤","fitzpatrick_scale":false,"category":"travel_and_places"},"hospital":{"keywords":["building","health","surgery","doctor"],"char":"🏥","fitzpatrick_scale":false,"category":"travel_and_places"},"bank":{"keywords":["building","money","sales","cash","business","enterprise"],"char":"🏦","fitzpatrick_scale":false,"category":"travel_and_places"},"hotel":{"keywords":["building","accomodation","checkin"],"char":"🏨","fitzpatrick_scale":false,"category":"travel_and_places"},"convenience_store":{"keywords":["building","shopping","groceries"],"char":"🏪","fitzpatrick_scale":false,"category":"travel_and_places"},"school":{"keywords":["building","student","education","learn","teach"],"char":"🏫","fitzpatrick_scale":false,"category":"travel_and_places"},"love_hotel":{"keywords":["like","affection","dating"],"char":"🏩","fitzpatrick_scale":false,"category":"travel_and_places"},"wedding":{"keywords":["love","like","affection","couple","marriage","bride","groom"],"char":"💒","fitzpatrick_scale":false,"category":"travel_and_places"},"classical_building":{"keywords":["art","culture","history"],"char":"🏛","fitzpatrick_scale":false,"category":"travel_and_places"},"church":{"keywords":["building","religion","christ"],"char":"⛪","fitzpatrick_scale":false,"category":"travel_and_places"},"mosque":{"keywords":["islam","worship","minaret"],"char":"🕌","fitzpatrick_scale":false,"category":"travel_and_places"},"synagogue":{"keywords":["judaism","worship","temple","jewish"],"char":"🕍","fitzpatrick_scale":false,"category":"travel_and_places"},"kaaba":{"keywords":["mecca","mosque","islam"],"char":"🕋","fitzpatrick_scale":false,"category":"travel_and_places"},"shinto_shrine":{"keywords":["temple","japan","kyoto"],"char":"⛩","fitzpatrick_scale":false,"category":"travel_and_places"},"watch":{"keywords":["time","accessories"],"char":"⌚","fitzpatrick_scale":false,"category":"objects"},"iphone":{"keywords":["technology","apple","gadgets","dial"],"char":"📱","fitzpatrick_scale":false,"category":"objects"},"calling":{"keywords":["iphone","incoming"],"char":"📲","fitzpatrick_scale":false,"category":"objects"},"computer":{"keywords":["technology","laptop","screen","display","monitor"],"char":"💻","fitzpatrick_scale":false,"category":"objects"},"keyboard":{"keywords":["technology","computer","type","input","text"],"char":"⌨","fitzpatrick_scale":false,"category":"objects"},"desktop_computer":{"keywords":["technology","computing","screen"],"char":"🖥","fitzpatrick_scale":false,"category":"objects"},"printer":{"keywords":["paper","ink"],"char":"🖨","fitzpatrick_scale":false,"category":"objects"},"computer_mouse":{"keywords":["click"],"char":"🖱","fitzpatrick_scale":false,"category":"objects"},"trackball":{"keywords":["technology","trackpad"],"char":"🖲","fitzpatrick_scale":false,"category":"objects"},"joystick":{"keywords":["game","play"],"char":"🕹","fitzpatrick_scale":false,"category":"objects"},"clamp":{"keywords":["tool"],"char":"🗜","fitzpatrick_scale":false,"category":"objects"},"minidisc":{"keywords":["technology","record","data","disk","90s"],"char":"💽","fitzpatrick_scale":false,"category":"objects"},"floppy_disk":{"keywords":["oldschool","technology","save","90s","80s"],"char":"💾","fitzpatrick_scale":false,"category":"objects"},"cd":{"keywords":["technology","dvd","disk","disc","90s"],"char":"💿","fitzpatrick_scale":false,"category":"objects"},"dvd":{"keywords":["cd","disk","disc"],"char":"📀","fitzpatrick_scale":false,"category":"objects"},"vhs":{"keywords":["record","video","oldschool","90s","80s"],"char":"📼","fitzpatrick_scale":false,"category":"objects"},"camera":{"keywords":["gadgets","photography"],"char":"📷","fitzpatrick_scale":false,"category":"objects"},"camera_flash":{"keywords":["photography","gadgets"],"char":"📸","fitzpatrick_scale":false,"category":"objects"},"video_camera":{"keywords":["film","record"],"char":"📹","fitzpatrick_scale":false,"category":"objects"},"movie_camera":{"keywords":["film","record"],"char":"🎥","fitzpatrick_scale":false,"category":"objects"},"film_projector":{"keywords":["video","tape","record","movie"],"char":"📽","fitzpatrick_scale":false,"category":"objects"},"film_strip":{"keywords":["movie"],"char":"🎞","fitzpatrick_scale":false,"category":"objects"},"telephone_receiver":{"keywords":["technology","communication","dial"],"char":"📞","fitzpatrick_scale":false,"category":"objects"},"phone":{"keywords":["technology","communication","dial","telephone"],"char":"☎️","fitzpatrick_scale":false,"category":"objects"},"pager":{"keywords":["bbcall","oldschool","90s"],"char":"📟","fitzpatrick_scale":false,"category":"objects"},"fax":{"keywords":["communication","technology"],"char":"📠","fitzpatrick_scale":false,"category":"objects"},"tv":{"keywords":["technology","program","oldschool","show","television"],"char":"📺","fitzpatrick_scale":false,"category":"objects"},"radio":{"keywords":["communication","music","podcast","program"],"char":"📻","fitzpatrick_scale":false,"category":"objects"},"studio_microphone":{"keywords":["sing","recording","artist","talkshow"],"char":"🎙","fitzpatrick_scale":false,"category":"objects"},"level_slider":{"keywords":["scale"],"char":"🎚","fitzpatrick_scale":false,"category":"objects"},"control_knobs":{"keywords":["dial"],"char":"🎛","fitzpatrick_scale":false,"category":"objects"},"stopwatch":{"keywords":["time","deadline"],"char":"⏱","fitzpatrick_scale":false,"category":"objects"},"timer_clock":{"keywords":["alarm"],"char":"⏲","fitzpatrick_scale":false,"category":"objects"},"alarm_clock":{"keywords":["time","wake"],"char":"⏰","fitzpatrick_scale":false,"category":"objects"},"mantelpiece_clock":{"keywords":["time"],"char":"🕰","fitzpatrick_scale":false,"category":"objects"},"hourglass_flowing_sand":{"keywords":["oldschool","time","countdown"],"char":"⏳","fitzpatrick_scale":false,"category":"objects"},"hourglass":{"keywords":["time","clock","oldschool","limit","exam","quiz","test"],"char":"⌛","fitzpatrick_scale":false,"category":"objects"},"satellite":{"keywords":["communication","future","radio","space"],"char":"📡","fitzpatrick_scale":false,"category":"objects"},"battery":{"keywords":["power","energy","sustain"],"char":"🔋","fitzpatrick_scale":false,"category":"objects"},"electric_plug":{"keywords":["charger","power"],"char":"🔌","fitzpatrick_scale":false,"category":"objects"},"bulb":{"keywords":["light","electricity","idea"],"char":"💡","fitzpatrick_scale":false,"category":"objects"},"flashlight":{"keywords":["dark","camping","sight","night"],"char":"🔦","fitzpatrick_scale":false,"category":"objects"},"candle":{"keywords":["fire","wax"],"char":"🕯","fitzpatrick_scale":false,"category":"objects"},"wastebasket":{"keywords":["bin","trash","rubbish","garbage","toss"],"char":"🗑","fitzpatrick_scale":false,"category":"objects"},"oil_drum":{"keywords":["barrell"],"char":"🛢","fitzpatrick_scale":false,"category":"objects"},"money_with_wings":{"keywords":["dollar","bills","payment","sale"],"char":"💸","fitzpatrick_scale":false,"category":"objects"},"dollar":{"keywords":["money","sales","bill","currency"],"char":"💵","fitzpatrick_scale":false,"category":"objects"},"yen":{"keywords":["money","sales","japanese","dollar","currency"],"char":"💴","fitzpatrick_scale":false,"category":"objects"},"euro":{"keywords":["money","sales","dollar","currency"],"char":"💶","fitzpatrick_scale":false,"category":"objects"},"pound":{"keywords":["british","sterling","money","sales","bills","uk","england","currency"],"char":"💷","fitzpatrick_scale":false,"category":"objects"},"moneybag":{"keywords":["dollar","payment","coins","sale"],"char":"💰","fitzpatrick_scale":false,"category":"objects"},"credit_card":{"keywords":["money","sales","dollar","bill","payment","shopping"],"char":"💳","fitzpatrick_scale":false,"category":"objects"},"gem":{"keywords":["blue","ruby","diamond","jewelry"],"char":"💎","fitzpatrick_scale":false,"category":"objects"},"balance_scale":{"keywords":["law","fairness","weight"],"char":"⚖","fitzpatrick_scale":false,"category":"objects"},"wrench":{"keywords":["tools","diy","ikea","fix","maintainer"],"char":"🔧","fitzpatrick_scale":false,"category":"objects"},"hammer":{"keywords":["tools","build","create"],"char":"🔨","fitzpatrick_scale":false,"category":"objects"},"hammer_and_pick":{"keywords":["tools","build","create"],"char":"⚒","fitzpatrick_scale":false,"category":"objects"},"hammer_and_wrench":{"keywords":["tools","build","create"],"char":"🛠","fitzpatrick_scale":false,"category":"objects"},"pick":{"keywords":["tools","dig"],"char":"⛏","fitzpatrick_scale":false,"category":"objects"},"nut_and_bolt":{"keywords":["handy","tools","fix"],"char":"🔩","fitzpatrick_scale":false,"category":"objects"},"gear":{"keywords":["cog"],"char":"⚙","fitzpatrick_scale":false,"category":"objects"},"chains":{"keywords":["lock","arrest"],"char":"⛓","fitzpatrick_scale":false,"category":"objects"},"gun":{"keywords":["violence","weapon","pistol","revolver"],"char":"🔫","fitzpatrick_scale":false,"category":"objects"},"bomb":{"keywords":["boom","explode","explosion","terrorism"],"char":"💣","fitzpatrick_scale":false,"category":"objects"},"hocho":{"keywords":["knife","blade","cutlery","kitchen","weapon"],"char":"🔪","fitzpatrick_scale":false,"category":"objects"},"dagger":{"keywords":["weapon"],"char":"🗡","fitzpatrick_scale":false,"category":"objects"},"crossed_swords":{"keywords":["weapon"],"char":"⚔","fitzpatrick_scale":false,"category":"objects"},"shield":{"keywords":["protection","security"],"char":"🛡","fitzpatrick_scale":false,"category":"objects"},"smoking":{"keywords":["kills","tobacco","cigarette","joint","smoke"],"char":"🚬","fitzpatrick_scale":false,"category":"objects"},"skull_and_crossbones":{"keywords":["poison","danger","deadly","scary","death","pirate","evil"],"char":"☠","fitzpatrick_scale":false,"category":"objects"},"coffin":{"keywords":["vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],"char":"⚰","fitzpatrick_scale":false,"category":"objects"},"funeral_urn":{"keywords":["dead","die","death","rip","ashes"],"char":"⚱","fitzpatrick_scale":false,"category":"objects"},"amphora":{"keywords":["vase","jar"],"char":"🏺","fitzpatrick_scale":false,"category":"objects"},"crystal_ball":{"keywords":["disco","party","magic","circus","fortune_teller"],"char":"🔮","fitzpatrick_scale":false,"category":"objects"},"prayer_beads":{"keywords":["dhikr","religious"],"char":"📿","fitzpatrick_scale":false,"category":"objects"},"barber":{"keywords":["hair","salon","style"],"char":"💈","fitzpatrick_scale":false,"category":"objects"},"alembic":{"keywords":["distilling","science","experiment","chemistry"],"char":"⚗","fitzpatrick_scale":false,"category":"objects"},"telescope":{"keywords":["stars","space","zoom","science","astronomy"],"char":"🔭","fitzpatrick_scale":false,"category":"objects"},"microscope":{"keywords":["laboratory","experiment","zoomin","science","study"],"char":"🔬","fitzpatrick_scale":false,"category":"objects"},"hole":{"keywords":["embarrassing"],"char":"🕳","fitzpatrick_scale":false,"category":"objects"},"pill":{"keywords":["health","medicine","doctor","pharmacy","drug"],"char":"💊","fitzpatrick_scale":false,"category":"objects"},"syringe":{"keywords":["health","hospital","drugs","blood","medicine","needle","doctor","nurse"],"char":"💉","fitzpatrick_scale":false,"category":"objects"},"thermometer":{"keywords":["weather","temperature","hot","cold"],"char":"🌡","fitzpatrick_scale":false,"category":"objects"},"label":{"keywords":["sale","tag"],"char":"🏷","fitzpatrick_scale":false,"category":"objects"},"bookmark":{"keywords":["favorite","label","save"],"char":"🔖","fitzpatrick_scale":false,"category":"objects"},"toilet":{"keywords":["restroom","wc","washroom","bathroom","potty"],"char":"🚽","fitzpatrick_scale":false,"category":"objects"},"shower":{"keywords":["clean","water","bathroom"],"char":"🚿","fitzpatrick_scale":false,"category":"objects"},"bathtub":{"keywords":["clean","shower","bathroom"],"char":"🛁","fitzpatrick_scale":false,"category":"objects"},"key":{"keywords":["lock","door","password"],"char":"🔑","fitzpatrick_scale":false,"category":"objects"},"old_key":{"keywords":["lock","door","password"],"char":"🗝","fitzpatrick_scale":false,"category":"objects"},"couch_and_lamp":{"keywords":["read","chill"],"char":"🛋","fitzpatrick_scale":false,"category":"objects"},"sleeping_bed":{"keywords":["bed","rest"],"char":"🛌","fitzpatrick_scale":true,"category":"objects"},"bed":{"keywords":["sleep","rest"],"char":"🛏","fitzpatrick_scale":false,"category":"objects"},"door":{"keywords":["house","entry","exit"],"char":"🚪","fitzpatrick_scale":false,"category":"objects"},"bellhop_bell":{"keywords":["service"],"char":"🛎","fitzpatrick_scale":false,"category":"objects"},"framed_picture":{"keywords":["photography"],"char":"🖼","fitzpatrick_scale":false,"category":"objects"},"world_map":{"keywords":["location","direction"],"char":"🗺","fitzpatrick_scale":false,"category":"objects"},"parasol_on_ground":{"keywords":["weather","summer"],"char":"⛱","fitzpatrick_scale":false,"category":"objects"},"moyai":{"keywords":["rock","easter island","moai"],"char":"🗿","fitzpatrick_scale":false,"category":"objects"},"shopping":{"keywords":["mall","buy","purchase"],"char":"🛍","fitzpatrick_scale":false,"category":"objects"},"shopping_cart":{"keywords":["trolley"],"char":"🛒","fitzpatrick_scale":false,"category":"objects"},"balloon":{"keywords":["party","celebration","birthday","circus"],"char":"🎈","fitzpatrick_scale":false,"category":"objects"},"flags":{"keywords":["fish","japanese","koinobori","carp","banner"],"char":"🎏","fitzpatrick_scale":false,"category":"objects"},"ribbon":{"keywords":["decoration","pink","girl","bowtie"],"char":"🎀","fitzpatrick_scale":false,"category":"objects"},"gift":{"keywords":["present","birthday","christmas","xmas"],"char":"🎁","fitzpatrick_scale":false,"category":"objects"},"confetti_ball":{"keywords":["festival","party","birthday","circus"],"char":"🎊","fitzpatrick_scale":false,"category":"objects"},"tada":{"keywords":["party","congratulations","birthday","magic","circus","celebration"],"char":"🎉","fitzpatrick_scale":false,"category":"objects"},"dolls":{"keywords":["japanese","toy","kimono"],"char":"🎎","fitzpatrick_scale":false,"category":"objects"},"wind_chime":{"keywords":["nature","ding","spring","bell"],"char":"🎐","fitzpatrick_scale":false,"category":"objects"},"crossed_flags":{"keywords":["japanese","nation","country","border"],"char":"🎌","fitzpatrick_scale":false,"category":"objects"},"izakaya_lantern":{"keywords":["light","paper","halloween","spooky"],"char":"🏮","fitzpatrick_scale":false,"category":"objects"},"email":{"keywords":["letter","postal","inbox","communication"],"char":"✉️","fitzpatrick_scale":false,"category":"objects"},"envelope_with_arrow":{"keywords":["email","communication"],"char":"📩","fitzpatrick_scale":false,"category":"objects"},"incoming_envelope":{"keywords":["email","inbox"],"char":"📨","fitzpatrick_scale":false,"category":"objects"},"e-mail":{"keywords":["communication","inbox"],"char":"📧","fitzpatrick_scale":false,"category":"objects"},"love_letter":{"keywords":["email","like","affection","envelope","valentines"],"char":"💌","fitzpatrick_scale":false,"category":"objects"},"postbox":{"keywords":["email","letter","envelope"],"char":"📮","fitzpatrick_scale":false,"category":"objects"},"mailbox_closed":{"keywords":["email","communication","inbox"],"char":"📪","fitzpatrick_scale":false,"category":"objects"},"mailbox":{"keywords":["email","inbox","communication"],"char":"📫","fitzpatrick_scale":false,"category":"objects"},"mailbox_with_mail":{"keywords":["email","inbox","communication"],"char":"📬","fitzpatrick_scale":false,"category":"objects"},"mailbox_with_no_mail":{"keywords":["email","inbox"],"char":"📭","fitzpatrick_scale":false,"category":"objects"},"package":{"keywords":["mail","gift","cardboard","box","moving"],"char":"📦","fitzpatrick_scale":false,"category":"objects"},"postal_horn":{"keywords":["instrument","music"],"char":"📯","fitzpatrick_scale":false,"category":"objects"},"inbox_tray":{"keywords":["email","documents"],"char":"📥","fitzpatrick_scale":false,"category":"objects"},"outbox_tray":{"keywords":["inbox","email"],"char":"📤","fitzpatrick_scale":false,"category":"objects"},"scroll":{"keywords":["documents","ancient","history","paper"],"char":"📜","fitzpatrick_scale":false,"category":"objects"},"page_with_curl":{"keywords":["documents","office","paper"],"char":"📃","fitzpatrick_scale":false,"category":"objects"},"bookmark_tabs":{"keywords":["favorite","save","order","tidy"],"char":"📑","fitzpatrick_scale":false,"category":"objects"},"bar_chart":{"keywords":["graph","presentation","stats"],"char":"📊","fitzpatrick_scale":false,"category":"objects"},"chart_with_upwards_trend":{"keywords":["graph","presentation","stats","recovery","business","economics","money","sales","good","success"],"char":"📈","fitzpatrick_scale":false,"category":"objects"},"chart_with_downwards_trend":{"keywords":["graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],"char":"📉","fitzpatrick_scale":false,"category":"objects"},"page_facing_up":{"keywords":["documents","office","paper","information"],"char":"📄","fitzpatrick_scale":false,"category":"objects"},"date":{"keywords":["calendar","schedule"],"char":"📅","fitzpatrick_scale":false,"category":"objects"},"calendar":{"keywords":["schedule","date","planning"],"char":"📆","fitzpatrick_scale":false,"category":"objects"},"spiral_calendar":{"keywords":["date","schedule","planning"],"char":"🗓","fitzpatrick_scale":false,"category":"objects"},"card_index":{"keywords":["business","stationery"],"char":"📇","fitzpatrick_scale":false,"category":"objects"},"card_file_box":{"keywords":["business","stationery"],"char":"🗃","fitzpatrick_scale":false,"category":"objects"},"ballot_box":{"keywords":["election","vote"],"char":"🗳","fitzpatrick_scale":false,"category":"objects"},"file_cabinet":{"keywords":["filing","organizing"],"char":"🗄","fitzpatrick_scale":false,"category":"objects"},"clipboard":{"keywords":["stationery","documents"],"char":"📋","fitzpatrick_scale":false,"category":"objects"},"spiral_notepad":{"keywords":["memo","stationery"],"char":"🗒","fitzpatrick_scale":false,"category":"objects"},"file_folder":{"keywords":["documents","business","office"],"char":"📁","fitzpatrick_scale":false,"category":"objects"},"open_file_folder":{"keywords":["documents","load"],"char":"📂","fitzpatrick_scale":false,"category":"objects"},"card_index_dividers":{"keywords":["organizing","business","stationery"],"char":"🗂","fitzpatrick_scale":false,"category":"objects"},"newspaper_roll":{"keywords":["press","headline"],"char":"🗞","fitzpatrick_scale":false,"category":"objects"},"newspaper":{"keywords":["press","headline"],"char":"📰","fitzpatrick_scale":false,"category":"objects"},"notebook":{"keywords":["stationery","record","notes","paper","study"],"char":"📓","fitzpatrick_scale":false,"category":"objects"},"closed_book":{"keywords":["read","library","knowledge","textbook","learn"],"char":"📕","fitzpatrick_scale":false,"category":"objects"},"green_book":{"keywords":["read","library","knowledge","study"],"char":"📗","fitzpatrick_scale":false,"category":"objects"},"blue_book":{"keywords":["read","library","knowledge","learn","study"],"char":"📘","fitzpatrick_scale":false,"category":"objects"},"orange_book":{"keywords":["read","library","knowledge","textbook","study"],"char":"📙","fitzpatrick_scale":false,"category":"objects"},"notebook_with_decorative_cover":{"keywords":["classroom","notes","record","paper","study"],"char":"📔","fitzpatrick_scale":false,"category":"objects"},"ledger":{"keywords":["notes","paper"],"char":"📒","fitzpatrick_scale":false,"category":"objects"},"books":{"keywords":["literature","library","study"],"char":"📚","fitzpatrick_scale":false,"category":"objects"},"open_book":{"keywords":["book","read","library","knowledge","literature","learn","study"],"char":"📖","fitzpatrick_scale":false,"category":"objects"},"link":{"keywords":["rings","url"],"char":"🔗","fitzpatrick_scale":false,"category":"objects"},"paperclip":{"keywords":["documents","stationery"],"char":"📎","fitzpatrick_scale":false,"category":"objects"},"paperclips":{"keywords":["documents","stationery"],"char":"🖇","fitzpatrick_scale":false,"category":"objects"},"scissors":{"keywords":["stationery","cut"],"char":"✂️","fitzpatrick_scale":false,"category":"objects"},"triangular_ruler":{"keywords":["stationery","math","architect","sketch"],"char":"📐","fitzpatrick_scale":false,"category":"objects"},"straight_ruler":{"keywords":["stationery","calculate","length","math","school","drawing","architect","sketch"],"char":"📏","fitzpatrick_scale":false,"category":"objects"},"pushpin":{"keywords":["stationery","mark","here"],"char":"📌","fitzpatrick_scale":false,"category":"objects"},"round_pushpin":{"keywords":["stationery","location","map","here"],"char":"📍","fitzpatrick_scale":false,"category":"objects"},"triangular_flag_on_post":{"keywords":["mark","milestone","place"],"char":"🚩","fitzpatrick_scale":false,"category":"objects"},"white_flag":{"keywords":["losing","loser","lost","surrender","give up","fail"],"char":"🏳","fitzpatrick_scale":false,"category":"objects"},"black_flag":{"keywords":["pirate"],"char":"🏴","fitzpatrick_scale":false,"category":"objects"},"rainbow_flag":{"keywords":["flag","rainbow","pride","gay","lgbt","glbt","queer","homosexual","lesbian","bisexual","transgender"],"char":"🏳️‍🌈","fitzpatrick_scale":false,"category":"objects"},"closed_lock_with_key":{"keywords":["security","privacy"],"char":"🔐","fitzpatrick_scale":false,"category":"objects"},"lock":{"keywords":["security","password","padlock"],"char":"🔒","fitzpatrick_scale":false,"category":"objects"},"unlock":{"keywords":["privacy","security"],"char":"🔓","fitzpatrick_scale":false,"category":"objects"},"lock_with_ink_pen":{"keywords":["security","secret"],"char":"🔏","fitzpatrick_scale":false,"category":"objects"},"pen":{"keywords":["stationery","writing","write"],"char":"🖊","fitzpatrick_scale":false,"category":"objects"},"fountain_pen":{"keywords":["stationery","writing","write"],"char":"🖋","fitzpatrick_scale":false,"category":"objects"},"black_nib":{"keywords":["pen","stationery","writing","write"],"char":"✒️","fitzpatrick_scale":false,"category":"objects"},"memo":{"keywords":["write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],"char":"📝","fitzpatrick_scale":false,"category":"objects"},"pencil2":{"keywords":["stationery","write","paper","writing","school","study"],"char":"✏️","fitzpatrick_scale":false,"category":"objects"},"crayon":{"keywords":["drawing","creativity"],"char":"🖍","fitzpatrick_scale":false,"category":"objects"},"paintbrush":{"keywords":["drawing","creativity","art"],"char":"🖌","fitzpatrick_scale":false,"category":"objects"},"mag":{"keywords":["search","zoom","find","detective"],"char":"🔍","fitzpatrick_scale":false,"category":"objects"},"mag_right":{"keywords":["search","zoom","find","detective"],"char":"🔎","fitzpatrick_scale":false,"category":"objects"},"heart":{"keywords":["love","like","valentines"],"char":"❤️","fitzpatrick_scale":false,"category":"symbols"},"orange_heart":{"keywords":["love","like","affection","valentines"],"char":"🧡","fitzpatrick_scale":false,"category":"symbols"},"yellow_heart":{"keywords":["love","like","affection","valentines"],"char":"💛","fitzpatrick_scale":false,"category":"symbols"},"green_heart":{"keywords":["love","like","affection","valentines"],"char":"💚","fitzpatrick_scale":false,"category":"symbols"},"blue_heart":{"keywords":["love","like","affection","valentines"],"char":"💙","fitzpatrick_scale":false,"category":"symbols"},"purple_heart":{"keywords":["love","like","affection","valentines"],"char":"💜","fitzpatrick_scale":false,"category":"symbols"},"black_heart":{"keywords":["evil"],"char":"🖤","fitzpatrick_scale":false,"category":"symbols"},"broken_heart":{"keywords":["sad","sorry","break","heart","heartbreak"],"char":"💔","fitzpatrick_scale":false,"category":"symbols"},"heavy_heart_exclamation":{"keywords":["decoration","love"],"char":"❣","fitzpatrick_scale":false,"category":"symbols"},"two_hearts":{"keywords":["love","like","affection","valentines","heart"],"char":"💕","fitzpatrick_scale":false,"category":"symbols"},"revolving_hearts":{"keywords":["love","like","affection","valentines"],"char":"💞","fitzpatrick_scale":false,"category":"symbols"},"heartbeat":{"keywords":["love","like","affection","valentines","pink","heart"],"char":"💓","fitzpatrick_scale":false,"category":"symbols"},"heartpulse":{"keywords":["like","love","affection","valentines","pink"],"char":"💗","fitzpatrick_scale":false,"category":"symbols"},"sparkling_heart":{"keywords":["love","like","affection","valentines"],"char":"💖","fitzpatrick_scale":false,"category":"symbols"},"cupid":{"keywords":["love","like","heart","affection","valentines"],"char":"💘","fitzpatrick_scale":false,"category":"symbols"},"gift_heart":{"keywords":["love","valentines"],"char":"💝","fitzpatrick_scale":false,"category":"symbols"},"heart_decoration":{"keywords":["purple-square","love","like"],"char":"💟","fitzpatrick_scale":false,"category":"symbols"},"peace_symbol":{"keywords":["hippie"],"char":"☮","fitzpatrick_scale":false,"category":"symbols"},"latin_cross":{"keywords":["christianity"],"char":"✝","fitzpatrick_scale":false,"category":"symbols"},"star_and_crescent":{"keywords":["islam"],"char":"☪","fitzpatrick_scale":false,"category":"symbols"},"om":{"keywords":["hinduism","buddhism","sikhism","jainism"],"char":"🕉","fitzpatrick_scale":false,"category":"symbols"},"wheel_of_dharma":{"keywords":["hinduism","buddhism","sikhism","jainism"],"char":"☸","fitzpatrick_scale":false,"category":"symbols"},"star_of_david":{"keywords":["judaism"],"char":"✡","fitzpatrick_scale":false,"category":"symbols"},"six_pointed_star":{"keywords":["purple-square","religion","jewish","hexagram"],"char":"🔯","fitzpatrick_scale":false,"category":"symbols"},"menorah":{"keywords":["hanukkah","candles","jewish"],"char":"🕎","fitzpatrick_scale":false,"category":"symbols"},"yin_yang":{"keywords":["balance"],"char":"☯","fitzpatrick_scale":false,"category":"symbols"},"orthodox_cross":{"keywords":["suppedaneum","religion"],"char":"☦","fitzpatrick_scale":false,"category":"symbols"},"place_of_worship":{"keywords":["religion","church","temple","prayer"],"char":"🛐","fitzpatrick_scale":false,"category":"symbols"},"ophiuchus":{"keywords":["sign","purple-square","constellation","astrology"],"char":"⛎","fitzpatrick_scale":false,"category":"symbols"},"aries":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♈","fitzpatrick_scale":false,"category":"symbols"},"taurus":{"keywords":["purple-square","sign","zodiac","astrology"],"char":"♉","fitzpatrick_scale":false,"category":"symbols"},"gemini":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♊","fitzpatrick_scale":false,"category":"symbols"},"cancer":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♋","fitzpatrick_scale":false,"category":"symbols"},"leo":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♌","fitzpatrick_scale":false,"category":"symbols"},"virgo":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♍","fitzpatrick_scale":false,"category":"symbols"},"libra":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♎","fitzpatrick_scale":false,"category":"symbols"},"scorpius":{"keywords":["sign","zodiac","purple-square","astrology","scorpio"],"char":"♏","fitzpatrick_scale":false,"category":"symbols"},"sagittarius":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♐","fitzpatrick_scale":false,"category":"symbols"},"capricorn":{"keywords":["sign","zodiac","purple-square","astrology"],"char":"♑","fitzpatrick_scale":false,"category":"symbols"},"aquarius":{"keywords":["sign","purple-square","zodiac","astrology"],"char":"♒","fitzpatrick_scale":false,"category":"symbols"},"pisces":{"keywords":["purple-square","sign","zodiac","astrology"],"char":"♓","fitzpatrick_scale":false,"category":"symbols"},"id":{"keywords":["purple-square","words"],"char":"🆔","fitzpatrick_scale":false,"category":"symbols"},"atom_symbol":{"keywords":["science","physics","chemistry"],"char":"⚛","fitzpatrick_scale":false,"category":"symbols"},"u7a7a":{"keywords":["kanji","japanese","chinese","empty","sky","blue-square"],"char":"🈳","fitzpatrick_scale":false,"category":"symbols"},"u5272":{"keywords":["cut","divide","chinese","kanji","pink-square"],"char":"🈹","fitzpatrick_scale":false,"category":"symbols"},"radioactive":{"keywords":["nuclear","danger"],"char":"☢","fitzpatrick_scale":false,"category":"symbols"},"biohazard":{"keywords":["danger"],"char":"☣","fitzpatrick_scale":false,"category":"symbols"},"mobile_phone_off":{"keywords":["mute","orange-square","silence","quiet"],"char":"📴","fitzpatrick_scale":false,"category":"symbols"},"vibration_mode":{"keywords":["orange-square","phone"],"char":"📳","fitzpatrick_scale":false,"category":"symbols"},"u6709":{"keywords":["orange-square","chinese","have","kanji"],"char":"🈶","fitzpatrick_scale":false,"category":"symbols"},"u7121":{"keywords":["nothing","chinese","kanji","japanese","orange-square"],"char":"🈚","fitzpatrick_scale":false,"category":"symbols"},"u7533":{"keywords":["chinese","japanese","kanji","orange-square"],"char":"🈸","fitzpatrick_scale":false,"category":"symbols"},"u55b6":{"keywords":["japanese","opening hours","orange-square"],"char":"🈺","fitzpatrick_scale":false,"category":"symbols"},"u6708":{"keywords":["chinese","month","moon","japanese","orange-square","kanji"],"char":"🈷️","fitzpatrick_scale":false,"category":"symbols"},"eight_pointed_black_star":{"keywords":["orange-square","shape","polygon"],"char":"✴️","fitzpatrick_scale":false,"category":"symbols"},"vs":{"keywords":["words","orange-square"],"char":"🆚","fitzpatrick_scale":false,"category":"symbols"},"accept":{"keywords":["ok","good","chinese","kanji","agree","yes","orange-circle"],"char":"🉑","fitzpatrick_scale":false,"category":"symbols"},"white_flower":{"keywords":["japanese","spring"],"char":"💮","fitzpatrick_scale":false,"category":"symbols"},"ideograph_advantage":{"keywords":["chinese","kanji","obtain","get","circle"],"char":"🉐","fitzpatrick_scale":false,"category":"symbols"},"secret":{"keywords":["privacy","chinese","sshh","kanji","red-circle"],"char":"㊙️","fitzpatrick_scale":false,"category":"symbols"},"congratulations":{"keywords":["chinese","kanji","japanese","red-circle"],"char":"㊗️","fitzpatrick_scale":false,"category":"symbols"},"u5408":{"keywords":["japanese","chinese","join","kanji","red-square"],"char":"🈴","fitzpatrick_scale":false,"category":"symbols"},"u6e80":{"keywords":["full","chinese","japanese","red-square","kanji"],"char":"🈵","fitzpatrick_scale":false,"category":"symbols"},"u7981":{"keywords":["kanji","japanese","chinese","forbidden","limit","restricted","red-square"],"char":"🈲","fitzpatrick_scale":false,"category":"symbols"},"a":{"keywords":["red-square","alphabet","letter"],"char":"🅰️","fitzpatrick_scale":false,"category":"symbols"},"b":{"keywords":["red-square","alphabet","letter"],"char":"🅱️","fitzpatrick_scale":false,"category":"symbols"},"ab":{"keywords":["red-square","alphabet"],"char":"🆎","fitzpatrick_scale":false,"category":"symbols"},"cl":{"keywords":["alphabet","words","red-square"],"char":"🆑","fitzpatrick_scale":false,"category":"symbols"},"o2":{"keywords":["alphabet","red-square","letter"],"char":"🅾️","fitzpatrick_scale":false,"category":"symbols"},"sos":{"keywords":["help","red-square","words","emergency","911"],"char":"🆘","fitzpatrick_scale":false,"category":"symbols"},"no_entry":{"keywords":["limit","security","privacy","bad","denied","stop","circle"],"char":"⛔","fitzpatrick_scale":false,"category":"symbols"},"name_badge":{"keywords":["fire","forbid"],"char":"📛","fitzpatrick_scale":false,"category":"symbols"},"no_entry_sign":{"keywords":["forbid","stop","limit","denied","disallow","circle"],"char":"🚫","fitzpatrick_scale":false,"category":"symbols"},"x":{"keywords":["no","delete","remove","cancel"],"char":"❌","fitzpatrick_scale":false,"category":"symbols"},"o":{"keywords":["circle","round"],"char":"⭕","fitzpatrick_scale":false,"category":"symbols"},"stop_sign":{"keywords":["stop"],"char":"🛑","fitzpatrick_scale":false,"category":"symbols"},"anger":{"keywords":["angry","mad"],"char":"💢","fitzpatrick_scale":false,"category":"symbols"},"hotsprings":{"keywords":["bath","warm","relax"],"char":"♨️","fitzpatrick_scale":false,"category":"symbols"},"no_pedestrians":{"keywords":["rules","crossing","walking","circle"],"char":"🚷","fitzpatrick_scale":false,"category":"symbols"},"do_not_litter":{"keywords":["trash","bin","garbage","circle"],"char":"🚯","fitzpatrick_scale":false,"category":"symbols"},"no_bicycles":{"keywords":["cyclist","prohibited","circle"],"char":"🚳","fitzpatrick_scale":false,"category":"symbols"},"non-potable_water":{"keywords":["drink","faucet","tap","circle"],"char":"🚱","fitzpatrick_scale":false,"category":"symbols"},"underage":{"keywords":["18","drink","pub","night","minor","circle"],"char":"🔞","fitzpatrick_scale":false,"category":"symbols"},"no_mobile_phones":{"keywords":["iphone","mute","circle"],"char":"📵","fitzpatrick_scale":false,"category":"symbols"},"exclamation":{"keywords":["heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],"char":"❗","fitzpatrick_scale":false,"category":"symbols"},"grey_exclamation":{"keywords":["surprise","punctuation","gray","wow","warning"],"char":"❕","fitzpatrick_scale":false,"category":"symbols"},"question":{"keywords":["doubt","confused"],"char":"❓","fitzpatrick_scale":false,"category":"symbols"},"grey_question":{"keywords":["doubts","gray","huh","confused"],"char":"❔","fitzpatrick_scale":false,"category":"symbols"},"bangbang":{"keywords":["exclamation","surprise"],"char":"‼️","fitzpatrick_scale":false,"category":"symbols"},"interrobang":{"keywords":["wat","punctuation","surprise"],"char":"⁉️","fitzpatrick_scale":false,"category":"symbols"},"low_brightness":{"keywords":["sun","afternoon","warm","summer"],"char":"🔅","fitzpatrick_scale":false,"category":"symbols"},"high_brightness":{"keywords":["sun","light"],"char":"🔆","fitzpatrick_scale":false,"category":"symbols"},"trident":{"keywords":["weapon","spear"],"char":"🔱","fitzpatrick_scale":false,"category":"symbols"},"fleur_de_lis":{"keywords":["decorative","scout"],"char":"⚜","fitzpatrick_scale":false,"category":"symbols"},"part_alternation_mark":{"keywords":["graph","presentation","stats","business","economics","bad"],"char":"〽️","fitzpatrick_scale":false,"category":"symbols"},"warning":{"keywords":["exclamation","wip","alert","error","problem","issue"],"char":"⚠️","fitzpatrick_scale":false,"category":"symbols"},"children_crossing":{"keywords":["school","warning","danger","sign","driving","yellow-diamond"],"char":"🚸","fitzpatrick_scale":false,"category":"symbols"},"beginner":{"keywords":["badge","shield"],"char":"🔰","fitzpatrick_scale":false,"category":"symbols"},"recycle":{"keywords":["arrow","environment","garbage","trash"],"char":"♻️","fitzpatrick_scale":false,"category":"symbols"},"u6307":{"keywords":["chinese","point","green-square","kanji"],"char":"🈯","fitzpatrick_scale":false,"category":"symbols"},"chart":{"keywords":["green-square","graph","presentation","stats"],"char":"💹","fitzpatrick_scale":false,"category":"symbols"},"sparkle":{"keywords":["stars","green-square","awesome","good","fireworks"],"char":"❇️","fitzpatrick_scale":false,"category":"symbols"},"eight_spoked_asterisk":{"keywords":["star","sparkle","green-square"],"char":"✳️","fitzpatrick_scale":false,"category":"symbols"},"negative_squared_cross_mark":{"keywords":["x","green-square","no","deny"],"char":"❎","fitzpatrick_scale":false,"category":"symbols"},"white_check_mark":{"keywords":["green-square","ok","agree","vote","election","answer","tick"],"char":"✅","fitzpatrick_scale":false,"category":"symbols"},"diamond_shape_with_a_dot_inside":{"keywords":["jewel","blue","gem","crystal","fancy"],"char":"💠","fitzpatrick_scale":false,"category":"symbols"},"cyclone":{"keywords":["weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],"char":"🌀","fitzpatrick_scale":false,"category":"symbols"},"loop":{"keywords":["tape","cassette"],"char":"➿","fitzpatrick_scale":false,"category":"symbols"},"globe_with_meridians":{"keywords":["earth","international","world","internet","interweb","i18n"],"char":"🌐","fitzpatrick_scale":false,"category":"symbols"},"m":{"keywords":["alphabet","blue-circle","letter"],"char":"Ⓜ️","fitzpatrick_scale":false,"category":"symbols"},"atm":{"keywords":["money","sales","cash","blue-square","payment","bank"],"char":"🏧","fitzpatrick_scale":false,"category":"symbols"},"sa":{"keywords":["japanese","blue-square","katakana"],"char":"🈂️","fitzpatrick_scale":false,"category":"symbols"},"passport_control":{"keywords":["custom","blue-square"],"char":"🛂","fitzpatrick_scale":false,"category":"symbols"},"customs":{"keywords":["passport","border","blue-square"],"char":"🛃","fitzpatrick_scale":false,"category":"symbols"},"baggage_claim":{"keywords":["blue-square","airport","transport"],"char":"🛄","fitzpatrick_scale":false,"category":"symbols"},"left_luggage":{"keywords":["blue-square","travel"],"char":"🛅","fitzpatrick_scale":false,"category":"symbols"},"wheelchair":{"keywords":["blue-square","disabled","a11y","accessibility"],"char":"♿","fitzpatrick_scale":false,"category":"symbols"},"no_smoking":{"keywords":["cigarette","blue-square","smell","smoke"],"char":"🚭","fitzpatrick_scale":false,"category":"symbols"},"wc":{"keywords":["toilet","restroom","blue-square"],"char":"🚾","fitzpatrick_scale":false,"category":"symbols"},"parking":{"keywords":["cars","blue-square","alphabet","letter"],"char":"🅿️","fitzpatrick_scale":false,"category":"symbols"},"potable_water":{"keywords":["blue-square","liquid","restroom","cleaning","faucet"],"char":"🚰","fitzpatrick_scale":false,"category":"symbols"},"mens":{"keywords":["toilet","restroom","wc","blue-square","gender","male"],"char":"🚹","fitzpatrick_scale":false,"category":"symbols"},"womens":{"keywords":["purple-square","woman","female","toilet","loo","restroom","gender"],"char":"🚺","fitzpatrick_scale":false,"category":"symbols"},"baby_symbol":{"keywords":["orange-square","child"],"char":"🚼","fitzpatrick_scale":false,"category":"symbols"},"restroom":{"keywords":["blue-square","toilet","refresh","wc","gender"],"char":"🚻","fitzpatrick_scale":false,"category":"symbols"},"put_litter_in_its_place":{"keywords":["blue-square","sign","human","info"],"char":"🚮","fitzpatrick_scale":false,"category":"symbols"},"cinema":{"keywords":["blue-square","record","film","movie","curtain","stage","theater"],"char":"🎦","fitzpatrick_scale":false,"category":"symbols"},"signal_strength":{"keywords":["blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],"char":"📶","fitzpatrick_scale":false,"category":"symbols"},"koko":{"keywords":["blue-square","here","katakana","japanese","destination"],"char":"🈁","fitzpatrick_scale":false,"category":"symbols"},"ng":{"keywords":["blue-square","words","shape","icon"],"char":"🆖","fitzpatrick_scale":false,"category":"symbols"},"ok":{"keywords":["good","agree","yes","blue-square"],"char":"🆗","fitzpatrick_scale":false,"category":"symbols"},"up":{"keywords":["blue-square","above","high"],"char":"🆙","fitzpatrick_scale":false,"category":"symbols"},"cool":{"keywords":["words","blue-square"],"char":"🆒","fitzpatrick_scale":false,"category":"symbols"},"new":{"keywords":["blue-square","words","start"],"char":"🆕","fitzpatrick_scale":false,"category":"symbols"},"free":{"keywords":["blue-square","words"],"char":"🆓","fitzpatrick_scale":false,"category":"symbols"},"zero":{"keywords":["0","numbers","blue-square","null"],"char":"0️⃣","fitzpatrick_scale":false,"category":"symbols"},"one":{"keywords":["blue-square","numbers","1"],"char":"1️⃣","fitzpatrick_scale":false,"category":"symbols"},"two":{"keywords":["numbers","2","prime","blue-square"],"char":"2️⃣","fitzpatrick_scale":false,"category":"symbols"},"three":{"keywords":["3","numbers","prime","blue-square"],"char":"3️⃣","fitzpatrick_scale":false,"category":"symbols"},"four":{"keywords":["4","numbers","blue-square"],"char":"4️⃣","fitzpatrick_scale":false,"category":"symbols"},"five":{"keywords":["5","numbers","blue-square","prime"],"char":"5️⃣","fitzpatrick_scale":false,"category":"symbols"},"six":{"keywords":["6","numbers","blue-square"],"char":"6️⃣","fitzpatrick_scale":false,"category":"symbols"},"seven":{"keywords":["7","numbers","blue-square","prime"],"char":"7️⃣","fitzpatrick_scale":false,"category":"symbols"},"eight":{"keywords":["8","blue-square","numbers"],"char":"8️⃣","fitzpatrick_scale":false,"category":"symbols"},"nine":{"keywords":["blue-square","numbers","9"],"char":"9️⃣","fitzpatrick_scale":false,"category":"symbols"},"keycap_ten":{"keywords":["numbers","10","blue-square"],"char":"🔟","fitzpatrick_scale":false,"category":"symbols"},"asterisk":{"keywords":["star","keycap"],"char":"*⃣","fitzpatrick_scale":false,"category":"symbols"},"eject_button":{"keywords":["blue-square"],"char":"⏏️","fitzpatrick_scale":false,"category":"symbols"},"arrow_forward":{"keywords":["blue-square","right","direction","play"],"char":"▶️","fitzpatrick_scale":false,"category":"symbols"},"pause_button":{"keywords":["pause","blue-square"],"char":"⏸","fitzpatrick_scale":false,"category":"symbols"},"next_track_button":{"keywords":["forward","next","blue-square"],"char":"⏭","fitzpatrick_scale":false,"category":"symbols"},"stop_button":{"keywords":["blue-square"],"char":"⏹","fitzpatrick_scale":false,"category":"symbols"},"record_button":{"keywords":["blue-square"],"char":"⏺","fitzpatrick_scale":false,"category":"symbols"},"play_or_pause_button":{"keywords":["blue-square","play","pause"],"char":"⏯","fitzpatrick_scale":false,"category":"symbols"},"previous_track_button":{"keywords":["backward"],"char":"⏮","fitzpatrick_scale":false,"category":"symbols"},"fast_forward":{"keywords":["blue-square","play","speed","continue"],"char":"⏩","fitzpatrick_scale":false,"category":"symbols"},"rewind":{"keywords":["play","blue-square"],"char":"⏪","fitzpatrick_scale":false,"category":"symbols"},"twisted_rightwards_arrows":{"keywords":["blue-square","shuffle","music","random"],"char":"🔀","fitzpatrick_scale":false,"category":"symbols"},"repeat":{"keywords":["loop","record"],"char":"🔁","fitzpatrick_scale":false,"category":"symbols"},"repeat_one":{"keywords":["blue-square","loop"],"char":"🔂","fitzpatrick_scale":false,"category":"symbols"},"arrow_backward":{"keywords":["blue-square","left","direction"],"char":"◀️","fitzpatrick_scale":false,"category":"symbols"},"arrow_up_small":{"keywords":["blue-square","triangle","direction","point","forward","top"],"char":"🔼","fitzpatrick_scale":false,"category":"symbols"},"arrow_down_small":{"keywords":["blue-square","direction","bottom"],"char":"🔽","fitzpatrick_scale":false,"category":"symbols"},"arrow_double_up":{"keywords":["blue-square","direction","top"],"char":"⏫","fitzpatrick_scale":false,"category":"symbols"},"arrow_double_down":{"keywords":["blue-square","direction","bottom"],"char":"⏬","fitzpatrick_scale":false,"category":"symbols"},"arrow_right":{"keywords":["blue-square","next"],"char":"➡️","fitzpatrick_scale":false,"category":"symbols"},"arrow_left":{"keywords":["blue-square","previous","back"],"char":"⬅️","fitzpatrick_scale":false,"category":"symbols"},"arrow_up":{"keywords":["blue-square","continue","top","direction"],"char":"⬆️","fitzpatrick_scale":false,"category":"symbols"},"arrow_down":{"keywords":["blue-square","direction","bottom"],"char":"⬇️","fitzpatrick_scale":false,"category":"symbols"},"arrow_upper_right":{"keywords":["blue-square","point","direction","diagonal","northeast"],"char":"↗️","fitzpatrick_scale":false,"category":"symbols"},"arrow_lower_right":{"keywords":["blue-square","direction","diagonal","southeast"],"char":"↘️","fitzpatrick_scale":false,"category":"symbols"},"arrow_lower_left":{"keywords":["blue-square","direction","diagonal","southwest"],"char":"↙️","fitzpatrick_scale":false,"category":"symbols"},"arrow_upper_left":{"keywords":["blue-square","point","direction","diagonal","northwest"],"char":"↖️","fitzpatrick_scale":false,"category":"symbols"},"arrow_up_down":{"keywords":["blue-square","direction","way","vertical"],"char":"↕️","fitzpatrick_scale":false,"category":"symbols"},"left_right_arrow":{"keywords":["shape","direction","horizontal","sideways"],"char":"↔️","fitzpatrick_scale":false,"category":"symbols"},"arrows_counterclockwise":{"keywords":["blue-square","sync","cycle"],"char":"🔄","fitzpatrick_scale":false,"category":"symbols"},"arrow_right_hook":{"keywords":["blue-square","return","rotate","direction"],"char":"↪️","fitzpatrick_scale":false,"category":"symbols"},"leftwards_arrow_with_hook":{"keywords":["back","return","blue-square","undo","enter"],"char":"↩️","fitzpatrick_scale":false,"category":"symbols"},"arrow_heading_up":{"keywords":["blue-square","direction","top"],"char":"⤴️","fitzpatrick_scale":false,"category":"symbols"},"arrow_heading_down":{"keywords":["blue-square","direction","bottom"],"char":"⤵️","fitzpatrick_scale":false,"category":"symbols"},"hash":{"keywords":["symbol","blue-square","twitter"],"char":"#️⃣","fitzpatrick_scale":false,"category":"symbols"},"information_source":{"keywords":["blue-square","alphabet","letter"],"char":"ℹ️","fitzpatrick_scale":false,"category":"symbols"},"abc":{"keywords":["blue-square","alphabet"],"char":"🔤","fitzpatrick_scale":false,"category":"symbols"},"abcd":{"keywords":["blue-square","alphabet"],"char":"🔡","fitzpatrick_scale":false,"category":"symbols"},"capital_abcd":{"keywords":["alphabet","words","blue-square"],"char":"🔠","fitzpatrick_scale":false,"category":"symbols"},"symbols":{"keywords":["blue-square","music","note","ampersand","percent","glyphs","characters"],"char":"🔣","fitzpatrick_scale":false,"category":"symbols"},"musical_note":{"keywords":["score","tone","sound"],"char":"🎵","fitzpatrick_scale":false,"category":"symbols"},"notes":{"keywords":["music","score"],"char":"🎶","fitzpatrick_scale":false,"category":"symbols"},"wavy_dash":{"keywords":["draw","line","moustache","mustache","squiggle","scribble"],"char":"〰️","fitzpatrick_scale":false,"category":"symbols"},"curly_loop":{"keywords":["scribble","draw","shape","squiggle"],"char":"➰","fitzpatrick_scale":false,"category":"symbols"},"heavy_check_mark":{"keywords":["ok","nike","answer","yes","tick"],"char":"✔️","fitzpatrick_scale":false,"category":"symbols"},"arrows_clockwise":{"keywords":["sync","cycle","round","repeat"],"char":"🔃","fitzpatrick_scale":false,"category":"symbols"},"heavy_plus_sign":{"keywords":["math","calculation","addition","more","increase"],"char":"➕","fitzpatrick_scale":false,"category":"symbols"},"heavy_minus_sign":{"keywords":["math","calculation","subtract","less"],"char":"➖","fitzpatrick_scale":false,"category":"symbols"},"heavy_division_sign":{"keywords":["divide","math","calculation"],"char":"➗","fitzpatrick_scale":false,"category":"symbols"},"heavy_multiplication_x":{"keywords":["math","calculation"],"char":"✖️","fitzpatrick_scale":false,"category":"symbols"},"heavy_dollar_sign":{"keywords":["money","sales","payment","currency","buck"],"char":"💲","fitzpatrick_scale":false,"category":"symbols"},"currency_exchange":{"keywords":["money","sales","dollar","travel"],"char":"💱","fitzpatrick_scale":false,"category":"symbols"},"copyright":{"keywords":["ip","license","circle","law","legal"],"char":"©️","fitzpatrick_scale":false,"category":"symbols"},"registered":{"keywords":["alphabet","circle"],"char":"®️","fitzpatrick_scale":false,"category":"symbols"},"tm":{"keywords":["trademark","brand","law","legal"],"char":"™️","fitzpatrick_scale":false,"category":"symbols"},"end":{"keywords":["words","arrow"],"char":"🔚","fitzpatrick_scale":false,"category":"symbols"},"back":{"keywords":["arrow","words","return"],"char":"🔙","fitzpatrick_scale":false,"category":"symbols"},"on":{"keywords":["arrow","words"],"char":"🔛","fitzpatrick_scale":false,"category":"symbols"},"top":{"keywords":["words","blue-square"],"char":"🔝","fitzpatrick_scale":false,"category":"symbols"},"soon":{"keywords":["arrow","words"],"char":"🔜","fitzpatrick_scale":false,"category":"symbols"},"ballot_box_with_check":{"keywords":["ok","agree","confirm","black-square","vote","election","yes","tick"],"char":"☑️","fitzpatrick_scale":false,"category":"symbols"},"radio_button":{"keywords":["input","old","music","circle"],"char":"🔘","fitzpatrick_scale":false,"category":"symbols"},"white_circle":{"keywords":["shape","round"],"char":"⚪","fitzpatrick_scale":false,"category":"symbols"},"black_circle":{"keywords":["shape","button","round"],"char":"⚫","fitzpatrick_scale":false,"category":"symbols"},"red_circle":{"keywords":["shape","error","danger"],"char":"🔴","fitzpatrick_scale":false,"category":"symbols"},"large_blue_circle":{"keywords":["shape","icon","button"],"char":"🔵","fitzpatrick_scale":false,"category":"symbols"},"small_orange_diamond":{"keywords":["shape","jewel","gem"],"char":"🔸","fitzpatrick_scale":false,"category":"symbols"},"small_blue_diamond":{"keywords":["shape","jewel","gem"],"char":"🔹","fitzpatrick_scale":false,"category":"symbols"},"large_orange_diamond":{"keywords":["shape","jewel","gem"],"char":"🔶","fitzpatrick_scale":false,"category":"symbols"},"large_blue_diamond":{"keywords":["shape","jewel","gem"],"char":"🔷","fitzpatrick_scale":false,"category":"symbols"},"small_red_triangle":{"keywords":["shape","direction","up","top"],"char":"🔺","fitzpatrick_scale":false,"category":"symbols"},"black_small_square":{"keywords":["shape","icon"],"char":"▪️","fitzpatrick_scale":false,"category":"symbols"},"white_small_square":{"keywords":["shape","icon"],"char":"▫️","fitzpatrick_scale":false,"category":"symbols"},"black_large_square":{"keywords":["shape","icon","button"],"char":"⬛","fitzpatrick_scale":false,"category":"symbols"},"white_large_square":{"keywords":["shape","icon","stone","button"],"char":"⬜","fitzpatrick_scale":false,"category":"symbols"},"small_red_triangle_down":{"keywords":["shape","direction","bottom"],"char":"🔻","fitzpatrick_scale":false,"category":"symbols"},"black_medium_square":{"keywords":["shape","button","icon"],"char":"◼️","fitzpatrick_scale":false,"category":"symbols"},"white_medium_square":{"keywords":["shape","stone","icon"],"char":"◻️","fitzpatrick_scale":false,"category":"symbols"},"black_medium_small_square":{"keywords":["icon","shape","button"],"char":"◾","fitzpatrick_scale":false,"category":"symbols"},"white_medium_small_square":{"keywords":["shape","stone","icon","button"],"char":"◽","fitzpatrick_scale":false,"category":"symbols"},"black_square_button":{"keywords":["shape","input","frame"],"char":"🔲","fitzpatrick_scale":false,"category":"symbols"},"white_square_button":{"keywords":["shape","input"],"char":"🔳","fitzpatrick_scale":false,"category":"symbols"},"speaker":{"keywords":["sound","volume","silence","broadcast"],"char":"🔈","fitzpatrick_scale":false,"category":"symbols"},"sound":{"keywords":["volume","speaker","broadcast"],"char":"🔉","fitzpatrick_scale":false,"category":"symbols"},"loud_sound":{"keywords":["volume","noise","noisy","speaker","broadcast"],"char":"🔊","fitzpatrick_scale":false,"category":"symbols"},"mute":{"keywords":["sound","volume","silence","quiet"],"char":"🔇","fitzpatrick_scale":false,"category":"symbols"},"mega":{"keywords":["sound","speaker","volume"],"char":"📣","fitzpatrick_scale":false,"category":"symbols"},"loudspeaker":{"keywords":["volume","sound"],"char":"📢","fitzpatrick_scale":false,"category":"symbols"},"bell":{"keywords":["sound","notification","christmas","xmas","chime"],"char":"🔔","fitzpatrick_scale":false,"category":"symbols"},"no_bell":{"keywords":["sound","volume","mute","quiet","silent"],"char":"🔕","fitzpatrick_scale":false,"category":"symbols"},"black_joker":{"keywords":["poker","cards","game","play","magic"],"char":"🃏","fitzpatrick_scale":false,"category":"symbols"},"mahjong":{"keywords":["game","play","chinese","kanji"],"char":"🀄","fitzpatrick_scale":false,"category":"symbols"},"spades":{"keywords":["poker","cards","suits","magic"],"char":"♠️","fitzpatrick_scale":false,"category":"symbols"},"clubs":{"keywords":["poker","cards","magic","suits"],"char":"♣️","fitzpatrick_scale":false,"category":"symbols"},"hearts":{"keywords":["poker","cards","magic","suits"],"char":"♥️","fitzpatrick_scale":false,"category":"symbols"},"diamonds":{"keywords":["poker","cards","magic","suits"],"char":"♦️","fitzpatrick_scale":false,"category":"symbols"},"flower_playing_cards":{"keywords":["game","sunset","red"],"char":"🎴","fitzpatrick_scale":false,"category":"symbols"},"thought_balloon":{"keywords":["bubble","cloud","speech","thinking","dream"],"char":"💭","fitzpatrick_scale":false,"category":"symbols"},"right_anger_bubble":{"keywords":["caption","speech","thinking","mad"],"char":"🗯","fitzpatrick_scale":false,"category":"symbols"},"speech_balloon":{"keywords":["bubble","words","message","talk","chatting"],"char":"💬","fitzpatrick_scale":false,"category":"symbols"},"left_speech_bubble":{"keywords":["words","message","talk","chatting"],"char":"🗨","fitzpatrick_scale":false,"category":"symbols"},"clock1":{"keywords":["time","late","early","schedule"],"char":"🕐","fitzpatrick_scale":false,"category":"symbols"},"clock2":{"keywords":["time","late","early","schedule"],"char":"🕑","fitzpatrick_scale":false,"category":"symbols"},"clock3":{"keywords":["time","late","early","schedule"],"char":"🕒","fitzpatrick_scale":false,"category":"symbols"},"clock4":{"keywords":["time","late","early","schedule"],"char":"🕓","fitzpatrick_scale":false,"category":"symbols"},"clock5":{"keywords":["time","late","early","schedule"],"char":"🕔","fitzpatrick_scale":false,"category":"symbols"},"clock6":{"keywords":["time","late","early","schedule","dawn","dusk"],"char":"🕕","fitzpatrick_scale":false,"category":"symbols"},"clock7":{"keywords":["time","late","early","schedule"],"char":"🕖","fitzpatrick_scale":false,"category":"symbols"},"clock8":{"keywords":["time","late","early","schedule"],"char":"🕗","fitzpatrick_scale":false,"category":"symbols"},"clock9":{"keywords":["time","late","early","schedule"],"char":"🕘","fitzpatrick_scale":false,"category":"symbols"},"clock10":{"keywords":["time","late","early","schedule"],"char":"🕙","fitzpatrick_scale":false,"category":"symbols"},"clock11":{"keywords":["time","late","early","schedule"],"char":"🕚","fitzpatrick_scale":false,"category":"symbols"},"clock12":{"keywords":["time","noon","midnight","midday","late","early","schedule"],"char":"🕛","fitzpatrick_scale":false,"category":"symbols"},"clock130":{"keywords":["time","late","early","schedule"],"char":"🕜","fitzpatrick_scale":false,"category":"symbols"},"clock230":{"keywords":["time","late","early","schedule"],"char":"🕝","fitzpatrick_scale":false,"category":"symbols"},"clock330":{"keywords":["time","late","early","schedule"],"char":"🕞","fitzpatrick_scale":false,"category":"symbols"},"clock430":{"keywords":["time","late","early","schedule"],"char":"🕟","fitzpatrick_scale":false,"category":"symbols"},"clock530":{"keywords":["time","late","early","schedule"],"char":"🕠","fitzpatrick_scale":false,"category":"symbols"},"clock630":{"keywords":["time","late","early","schedule"],"char":"🕡","fitzpatrick_scale":false,"category":"symbols"},"clock730":{"keywords":["time","late","early","schedule"],"char":"🕢","fitzpatrick_scale":false,"category":"symbols"},"clock830":{"keywords":["time","late","early","schedule"],"char":"🕣","fitzpatrick_scale":false,"category":"symbols"},"clock930":{"keywords":["time","late","early","schedule"],"char":"🕤","fitzpatrick_scale":false,"category":"symbols"},"clock1030":{"keywords":["time","late","early","schedule"],"char":"🕥","fitzpatrick_scale":false,"category":"symbols"},"clock1130":{"keywords":["time","late","early","schedule"],"char":"🕦","fitzpatrick_scale":false,"category":"symbols"},"clock1230":{"keywords":["time","late","early","schedule"],"char":"🕧","fitzpatrick_scale":false,"category":"symbols"},"afghanistan":{"keywords":["af","flag","nation","country","banner"],"char":"🇦🇫","fitzpatrick_scale":false,"category":"flags"},"aland_islands":{"keywords":["Åland","islands","flag","nation","country","banner"],"char":"🇦🇽","fitzpatrick_scale":false,"category":"flags"},"albania":{"keywords":["al","flag","nation","country","banner"],"char":"🇦🇱","fitzpatrick_scale":false,"category":"flags"},"algeria":{"keywords":["dz","flag","nation","country","banner"],"char":"🇩🇿","fitzpatrick_scale":false,"category":"flags"},"american_samoa":{"keywords":["american","ws","flag","nation","country","banner"],"char":"🇦🇸","fitzpatrick_scale":false,"category":"flags"},"andorra":{"keywords":["ad","flag","nation","country","banner"],"char":"🇦🇩","fitzpatrick_scale":false,"category":"flags"},"angola":{"keywords":["ao","flag","nation","country","banner"],"char":"🇦🇴","fitzpatrick_scale":false,"category":"flags"},"anguilla":{"keywords":["ai","flag","nation","country","banner"],"char":"🇦🇮","fitzpatrick_scale":false,"category":"flags"},"antarctica":{"keywords":["aq","flag","nation","country","banner"],"char":"🇦🇶","fitzpatrick_scale":false,"category":"flags"},"antigua_barbuda":{"keywords":["antigua","barbuda","flag","nation","country","banner"],"char":"🇦🇬","fitzpatrick_scale":false,"category":"flags"},"argentina":{"keywords":["ar","flag","nation","country","banner"],"char":"🇦🇷","fitzpatrick_scale":false,"category":"flags"},"armenia":{"keywords":["am","flag","nation","country","banner"],"char":"🇦🇲","fitzpatrick_scale":false,"category":"flags"},"aruba":{"keywords":["aw","flag","nation","country","banner"],"char":"🇦🇼","fitzpatrick_scale":false,"category":"flags"},"australia":{"keywords":["au","flag","nation","country","banner"],"char":"🇦🇺","fitzpatrick_scale":false,"category":"flags"},"austria":{"keywords":["at","flag","nation","country","banner"],"char":"🇦🇹","fitzpatrick_scale":false,"category":"flags"},"azerbaijan":{"keywords":["az","flag","nation","country","banner"],"char":"🇦🇿","fitzpatrick_scale":false,"category":"flags"},"bahamas":{"keywords":["bs","flag","nation","country","banner"],"char":"🇧🇸","fitzpatrick_scale":false,"category":"flags"},"bahrain":{"keywords":["bh","flag","nation","country","banner"],"char":"🇧🇭","fitzpatrick_scale":false,"category":"flags"},"bangladesh":{"keywords":["bd","flag","nation","country","banner"],"char":"🇧🇩","fitzpatrick_scale":false,"category":"flags"},"barbados":{"keywords":["bb","flag","nation","country","banner"],"char":"🇧🇧","fitzpatrick_scale":false,"category":"flags"},"belarus":{"keywords":["by","flag","nation","country","banner"],"char":"🇧🇾","fitzpatrick_scale":false,"category":"flags"},"belgium":{"keywords":["be","flag","nation","country","banner"],"char":"🇧🇪","fitzpatrick_scale":false,"category":"flags"},"belize":{"keywords":["bz","flag","nation","country","banner"],"char":"🇧🇿","fitzpatrick_scale":false,"category":"flags"},"benin":{"keywords":["bj","flag","nation","country","banner"],"char":"🇧🇯","fitzpatrick_scale":false,"category":"flags"},"bermuda":{"keywords":["bm","flag","nation","country","banner"],"char":"🇧🇲","fitzpatrick_scale":false,"category":"flags"},"bhutan":{"keywords":["bt","flag","nation","country","banner"],"char":"🇧🇹","fitzpatrick_scale":false,"category":"flags"},"bolivia":{"keywords":["bo","flag","nation","country","banner"],"char":"🇧🇴","fitzpatrick_scale":false,"category":"flags"},"caribbean_netherlands":{"keywords":["bonaire","flag","nation","country","banner"],"char":"🇧🇶","fitzpatrick_scale":false,"category":"flags"},"bosnia_herzegovina":{"keywords":["bosnia","herzegovina","flag","nation","country","banner"],"char":"🇧🇦","fitzpatrick_scale":false,"category":"flags"},"botswana":{"keywords":["bw","flag","nation","country","banner"],"char":"🇧🇼","fitzpatrick_scale":false,"category":"flags"},"brazil":{"keywords":["br","flag","nation","country","banner"],"char":"🇧🇷","fitzpatrick_scale":false,"category":"flags"},"british_indian_ocean_territory":{"keywords":["british","indian","ocean","territory","flag","nation","country","banner"],"char":"🇮🇴","fitzpatrick_scale":false,"category":"flags"},"british_virgin_islands":{"keywords":["british","virgin","islands","bvi","flag","nation","country","banner"],"char":"🇻🇬","fitzpatrick_scale":false,"category":"flags"},"brunei":{"keywords":["bn","darussalam","flag","nation","country","banner"],"char":"🇧🇳","fitzpatrick_scale":false,"category":"flags"},"bulgaria":{"keywords":["bg","flag","nation","country","banner"],"char":"🇧🇬","fitzpatrick_scale":false,"category":"flags"},"burkina_faso":{"keywords":["burkina","faso","flag","nation","country","banner"],"char":"🇧🇫","fitzpatrick_scale":false,"category":"flags"},"burundi":{"keywords":["bi","flag","nation","country","banner"],"char":"🇧🇮","fitzpatrick_scale":false,"category":"flags"},"cape_verde":{"keywords":["cabo","verde","flag","nation","country","banner"],"char":"🇨🇻","fitzpatrick_scale":false,"category":"flags"},"cambodia":{"keywords":["kh","flag","nation","country","banner"],"char":"🇰🇭","fitzpatrick_scale":false,"category":"flags"},"cameroon":{"keywords":["cm","flag","nation","country","banner"],"char":"🇨🇲","fitzpatrick_scale":false,"category":"flags"},"canada":{"keywords":["ca","flag","nation","country","banner"],"char":"🇨🇦","fitzpatrick_scale":false,"category":"flags"},"canary_islands":{"keywords":["canary","islands","flag","nation","country","banner"],"char":"🇮🇨","fitzpatrick_scale":false,"category":"flags"},"cayman_islands":{"keywords":["cayman","islands","flag","nation","country","banner"],"char":"🇰🇾","fitzpatrick_scale":false,"category":"flags"},"central_african_republic":{"keywords":["central","african","republic","flag","nation","country","banner"],"char":"🇨🇫","fitzpatrick_scale":false,"category":"flags"},"chad":{"keywords":["td","flag","nation","country","banner"],"char":"🇹🇩","fitzpatrick_scale":false,"category":"flags"},"chile":{"keywords":["flag","nation","country","banner"],"char":"🇨🇱","fitzpatrick_scale":false,"category":"flags"},"cn":{"keywords":["china","chinese","prc","flag","country","nation","banner"],"char":"🇨🇳","fitzpatrick_scale":false,"category":"flags"},"christmas_island":{"keywords":["christmas","island","flag","nation","country","banner"],"char":"🇨🇽","fitzpatrick_scale":false,"category":"flags"},"cocos_islands":{"keywords":["cocos","keeling","islands","flag","nation","country","banner"],"char":"🇨🇨","fitzpatrick_scale":false,"category":"flags"},"colombia":{"keywords":["co","flag","nation","country","banner"],"char":"🇨🇴","fitzpatrick_scale":false,"category":"flags"},"comoros":{"keywords":["km","flag","nation","country","banner"],"char":"🇰🇲","fitzpatrick_scale":false,"category":"flags"},"congo_brazzaville":{"keywords":["congo","flag","nation","country","banner"],"char":"🇨🇬","fitzpatrick_scale":false,"category":"flags"},"congo_kinshasa":{"keywords":["congo","democratic","republic","flag","nation","country","banner"],"char":"🇨🇩","fitzpatrick_scale":false,"category":"flags"},"cook_islands":{"keywords":["cook","islands","flag","nation","country","banner"],"char":"🇨🇰","fitzpatrick_scale":false,"category":"flags"},"costa_rica":{"keywords":["costa","rica","flag","nation","country","banner"],"char":"🇨🇷","fitzpatrick_scale":false,"category":"flags"},"croatia":{"keywords":["hr","flag","nation","country","banner"],"char":"🇭🇷","fitzpatrick_scale":false,"category":"flags"},"cuba":{"keywords":["cu","flag","nation","country","banner"],"char":"🇨🇺","fitzpatrick_scale":false,"category":"flags"},"curacao":{"keywords":["curaçao","flag","nation","country","banner"],"char":"🇨🇼","fitzpatrick_scale":false,"category":"flags"},"cyprus":{"keywords":["cy","flag","nation","country","banner"],"char":"🇨🇾","fitzpatrick_scale":false,"category":"flags"},"czech_republic":{"keywords":["cz","flag","nation","country","banner"],"char":"🇨🇿","fitzpatrick_scale":false,"category":"flags"},"denmark":{"keywords":["dk","flag","nation","country","banner"],"char":"🇩🇰","fitzpatrick_scale":false,"category":"flags"},"djibouti":{"keywords":["dj","flag","nation","country","banner"],"char":"🇩🇯","fitzpatrick_scale":false,"category":"flags"},"dominica":{"keywords":["dm","flag","nation","country","banner"],"char":"🇩🇲","fitzpatrick_scale":false,"category":"flags"},"dominican_republic":{"keywords":["dominican","republic","flag","nation","country","banner"],"char":"🇩🇴","fitzpatrick_scale":false,"category":"flags"},"ecuador":{"keywords":["ec","flag","nation","country","banner"],"char":"🇪🇨","fitzpatrick_scale":false,"category":"flags"},"egypt":{"keywords":["eg","flag","nation","country","banner"],"char":"🇪🇬","fitzpatrick_scale":false,"category":"flags"},"el_salvador":{"keywords":["el","salvador","flag","nation","country","banner"],"char":"🇸🇻","fitzpatrick_scale":false,"category":"flags"},"equatorial_guinea":{"keywords":["equatorial","gn","flag","nation","country","banner"],"char":"🇬🇶","fitzpatrick_scale":false,"category":"flags"},"eritrea":{"keywords":["er","flag","nation","country","banner"],"char":"🇪🇷","fitzpatrick_scale":false,"category":"flags"},"estonia":{"keywords":["ee","flag","nation","country","banner"],"char":"🇪🇪","fitzpatrick_scale":false,"category":"flags"},"ethiopia":{"keywords":["et","flag","nation","country","banner"],"char":"🇪🇹","fitzpatrick_scale":false,"category":"flags"},"eu":{"keywords":["european","union","flag","banner"],"char":"🇪🇺","fitzpatrick_scale":false,"category":"flags"},"falkland_islands":{"keywords":["falkland","islands","malvinas","flag","nation","country","banner"],"char":"🇫🇰","fitzpatrick_scale":false,"category":"flags"},"faroe_islands":{"keywords":["faroe","islands","flag","nation","country","banner"],"char":"🇫🇴","fitzpatrick_scale":false,"category":"flags"},"fiji":{"keywords":["fj","flag","nation","country","banner"],"char":"🇫🇯","fitzpatrick_scale":false,"category":"flags"},"finland":{"keywords":["fi","flag","nation","country","banner"],"char":"🇫🇮","fitzpatrick_scale":false,"category":"flags"},"fr":{"keywords":["banner","flag","nation","france","french","country"],"char":"🇫🇷","fitzpatrick_scale":false,"category":"flags"},"french_guiana":{"keywords":["french","guiana","flag","nation","country","banner"],"char":"🇬🇫","fitzpatrick_scale":false,"category":"flags"},"french_polynesia":{"keywords":["french","polynesia","flag","nation","country","banner"],"char":"🇵🇫","fitzpatrick_scale":false,"category":"flags"},"french_southern_territories":{"keywords":["french","southern","territories","flag","nation","country","banner"],"char":"🇹🇫","fitzpatrick_scale":false,"category":"flags"},"gabon":{"keywords":["ga","flag","nation","country","banner"],"char":"🇬🇦","fitzpatrick_scale":false,"category":"flags"},"gambia":{"keywords":["gm","flag","nation","country","banner"],"char":"🇬🇲","fitzpatrick_scale":false,"category":"flags"},"georgia":{"keywords":["ge","flag","nation","country","banner"],"char":"🇬🇪","fitzpatrick_scale":false,"category":"flags"},"de":{"keywords":["german","nation","flag","country","banner"],"char":"🇩🇪","fitzpatrick_scale":false,"category":"flags"},"ghana":{"keywords":["gh","flag","nation","country","banner"],"char":"🇬🇭","fitzpatrick_scale":false,"category":"flags"},"gibraltar":{"keywords":["gi","flag","nation","country","banner"],"char":"🇬🇮","fitzpatrick_scale":false,"category":"flags"},"greece":{"keywords":["gr","flag","nation","country","banner"],"char":"🇬🇷","fitzpatrick_scale":false,"category":"flags"},"greenland":{"keywords":["gl","flag","nation","country","banner"],"char":"🇬🇱","fitzpatrick_scale":false,"category":"flags"},"grenada":{"keywords":["gd","flag","nation","country","banner"],"char":"🇬🇩","fitzpatrick_scale":false,"category":"flags"},"guadeloupe":{"keywords":["gp","flag","nation","country","banner"],"char":"🇬🇵","fitzpatrick_scale":false,"category":"flags"},"guam":{"keywords":["gu","flag","nation","country","banner"],"char":"🇬🇺","fitzpatrick_scale":false,"category":"flags"},"guatemala":{"keywords":["gt","flag","nation","country","banner"],"char":"🇬🇹","fitzpatrick_scale":false,"category":"flags"},"guernsey":{"keywords":["gg","flag","nation","country","banner"],"char":"🇬🇬","fitzpatrick_scale":false,"category":"flags"},"guinea":{"keywords":["gn","flag","nation","country","banner"],"char":"🇬🇳","fitzpatrick_scale":false,"category":"flags"},"guinea_bissau":{"keywords":["gw","bissau","flag","nation","country","banner"],"char":"🇬🇼","fitzpatrick_scale":false,"category":"flags"},"guyana":{"keywords":["gy","flag","nation","country","banner"],"char":"🇬🇾","fitzpatrick_scale":false,"category":"flags"},"haiti":{"keywords":["ht","flag","nation","country","banner"],"char":"🇭🇹","fitzpatrick_scale":false,"category":"flags"},"honduras":{"keywords":["hn","flag","nation","country","banner"],"char":"🇭🇳","fitzpatrick_scale":false,"category":"flags"},"hong_kong":{"keywords":["hong","kong","flag","nation","country","banner"],"char":"🇭🇰","fitzpatrick_scale":false,"category":"flags"},"hungary":{"keywords":["hu","flag","nation","country","banner"],"char":"🇭🇺","fitzpatrick_scale":false,"category":"flags"},"iceland":{"keywords":["is","flag","nation","country","banner"],"char":"🇮🇸","fitzpatrick_scale":false,"category":"flags"},"india":{"keywords":["in","flag","nation","country","banner"],"char":"🇮🇳","fitzpatrick_scale":false,"category":"flags"},"indonesia":{"keywords":["flag","nation","country","banner"],"char":"🇮🇩","fitzpatrick_scale":false,"category":"flags"},"iran":{"keywords":["iran,","islamic","republic","flag","nation","country","banner"],"char":"🇮🇷","fitzpatrick_scale":false,"category":"flags"},"iraq":{"keywords":["iq","flag","nation","country","banner"],"char":"🇮🇶","fitzpatrick_scale":false,"category":"flags"},"ireland":{"keywords":["ie","flag","nation","country","banner"],"char":"🇮🇪","fitzpatrick_scale":false,"category":"flags"},"isle_of_man":{"keywords":["isle","man","flag","nation","country","banner"],"char":"🇮🇲","fitzpatrick_scale":false,"category":"flags"},"israel":{"keywords":["il","flag","nation","country","banner"],"char":"🇮🇱","fitzpatrick_scale":false,"category":"flags"},"it":{"keywords":["italy","flag","nation","country","banner"],"char":"🇮🇹","fitzpatrick_scale":false,"category":"flags"},"cote_divoire":{"keywords":["ivory","coast","flag","nation","country","banner"],"char":"🇨🇮","fitzpatrick_scale":false,"category":"flags"},"jamaica":{"keywords":["jm","flag","nation","country","banner"],"char":"🇯🇲","fitzpatrick_scale":false,"category":"flags"},"jp":{"keywords":["japanese","nation","flag","country","banner"],"char":"🇯🇵","fitzpatrick_scale":false,"category":"flags"},"jersey":{"keywords":["je","flag","nation","country","banner"],"char":"🇯🇪","fitzpatrick_scale":false,"category":"flags"},"jordan":{"keywords":["jo","flag","nation","country","banner"],"char":"🇯🇴","fitzpatrick_scale":false,"category":"flags"},"kazakhstan":{"keywords":["kz","flag","nation","country","banner"],"char":"🇰🇿","fitzpatrick_scale":false,"category":"flags"},"kenya":{"keywords":["ke","flag","nation","country","banner"],"char":"🇰🇪","fitzpatrick_scale":false,"category":"flags"},"kiribati":{"keywords":["ki","flag","nation","country","banner"],"char":"🇰🇮","fitzpatrick_scale":false,"category":"flags"},"kosovo":{"keywords":["xk","flag","nation","country","banner"],"char":"🇽🇰","fitzpatrick_scale":false,"category":"flags"},"kuwait":{"keywords":["kw","flag","nation","country","banner"],"char":"🇰🇼","fitzpatrick_scale":false,"category":"flags"},"kyrgyzstan":{"keywords":["kg","flag","nation","country","banner"],"char":"🇰🇬","fitzpatrick_scale":false,"category":"flags"},"laos":{"keywords":["lao","democratic","republic","flag","nation","country","banner"],"char":"🇱🇦","fitzpatrick_scale":false,"category":"flags"},"latvia":{"keywords":["lv","flag","nation","country","banner"],"char":"🇱🇻","fitzpatrick_scale":false,"category":"flags"},"lebanon":{"keywords":["lb","flag","nation","country","banner"],"char":"🇱🇧","fitzpatrick_scale":false,"category":"flags"},"lesotho":{"keywords":["ls","flag","nation","country","banner"],"char":"🇱🇸","fitzpatrick_scale":false,"category":"flags"},"liberia":{"keywords":["lr","flag","nation","country","banner"],"char":"🇱🇷","fitzpatrick_scale":false,"category":"flags"},"libya":{"keywords":["ly","flag","nation","country","banner"],"char":"🇱🇾","fitzpatrick_scale":false,"category":"flags"},"liechtenstein":{"keywords":["li","flag","nation","country","banner"],"char":"🇱🇮","fitzpatrick_scale":false,"category":"flags"},"lithuania":{"keywords":["lt","flag","nation","country","banner"],"char":"🇱🇹","fitzpatrick_scale":false,"category":"flags"},"luxembourg":{"keywords":["lu","flag","nation","country","banner"],"char":"🇱🇺","fitzpatrick_scale":false,"category":"flags"},"macau":{"keywords":["macao","flag","nation","country","banner"],"char":"🇲🇴","fitzpatrick_scale":false,"category":"flags"},"macedonia":{"keywords":["macedonia,","flag","nation","country","banner"],"char":"🇲🇰","fitzpatrick_scale":false,"category":"flags"},"madagascar":{"keywords":["mg","flag","nation","country","banner"],"char":"🇲🇬","fitzpatrick_scale":false,"category":"flags"},"malawi":{"keywords":["mw","flag","nation","country","banner"],"char":"🇲🇼","fitzpatrick_scale":false,"category":"flags"},"malaysia":{"keywords":["my","flag","nation","country","banner"],"char":"🇲🇾","fitzpatrick_scale":false,"category":"flags"},"maldives":{"keywords":["mv","flag","nation","country","banner"],"char":"🇲🇻","fitzpatrick_scale":false,"category":"flags"},"mali":{"keywords":["ml","flag","nation","country","banner"],"char":"🇲🇱","fitzpatrick_scale":false,"category":"flags"},"malta":{"keywords":["mt","flag","nation","country","banner"],"char":"🇲🇹","fitzpatrick_scale":false,"category":"flags"},"marshall_islands":{"keywords":["marshall","islands","flag","nation","country","banner"],"char":"🇲🇭","fitzpatrick_scale":false,"category":"flags"},"martinique":{"keywords":["mq","flag","nation","country","banner"],"char":"🇲🇶","fitzpatrick_scale":false,"category":"flags"},"mauritania":{"keywords":["mr","flag","nation","country","banner"],"char":"🇲🇷","fitzpatrick_scale":false,"category":"flags"},"mauritius":{"keywords":["mu","flag","nation","country","banner"],"char":"🇲🇺","fitzpatrick_scale":false,"category":"flags"},"mayotte":{"keywords":["yt","flag","nation","country","banner"],"char":"🇾🇹","fitzpatrick_scale":false,"category":"flags"},"mexico":{"keywords":["mx","flag","nation","country","banner"],"char":"🇲🇽","fitzpatrick_scale":false,"category":"flags"},"micronesia":{"keywords":["micronesia,","federated","states","flag","nation","country","banner"],"char":"🇫🇲","fitzpatrick_scale":false,"category":"flags"},"moldova":{"keywords":["moldova,","republic","flag","nation","country","banner"],"char":"🇲🇩","fitzpatrick_scale":false,"category":"flags"},"monaco":{"keywords":["mc","flag","nation","country","banner"],"char":"🇲🇨","fitzpatrick_scale":false,"category":"flags"},"mongolia":{"keywords":["mn","flag","nation","country","banner"],"char":"🇲🇳","fitzpatrick_scale":false,"category":"flags"},"montenegro":{"keywords":["me","flag","nation","country","banner"],"char":"🇲🇪","fitzpatrick_scale":false,"category":"flags"},"montserrat":{"keywords":["ms","flag","nation","country","banner"],"char":"🇲🇸","fitzpatrick_scale":false,"category":"flags"},"morocco":{"keywords":["ma","flag","nation","country","banner"],"char":"🇲🇦","fitzpatrick_scale":false,"category":"flags"},"mozambique":{"keywords":["mz","flag","nation","country","banner"],"char":"🇲🇿","fitzpatrick_scale":false,"category":"flags"},"myanmar":{"keywords":["mm","flag","nation","country","banner"],"char":"🇲🇲","fitzpatrick_scale":false,"category":"flags"},"namibia":{"keywords":["na","flag","nation","country","banner"],"char":"🇳🇦","fitzpatrick_scale":false,"category":"flags"},"nauru":{"keywords":["nr","flag","nation","country","banner"],"char":"🇳🇷","fitzpatrick_scale":false,"category":"flags"},"nepal":{"keywords":["np","flag","nation","country","banner"],"char":"🇳🇵","fitzpatrick_scale":false,"category":"flags"},"netherlands":{"keywords":["nl","flag","nation","country","banner"],"char":"🇳🇱","fitzpatrick_scale":false,"category":"flags"},"new_caledonia":{"keywords":["new","caledonia","flag","nation","country","banner"],"char":"🇳🇨","fitzpatrick_scale":false,"category":"flags"},"new_zealand":{"keywords":["new","zealand","flag","nation","country","banner"],"char":"🇳🇿","fitzpatrick_scale":false,"category":"flags"},"nicaragua":{"keywords":["ni","flag","nation","country","banner"],"char":"🇳🇮","fitzpatrick_scale":false,"category":"flags"},"niger":{"keywords":["ne","flag","nation","country","banner"],"char":"🇳🇪","fitzpatrick_scale":false,"category":"flags"},"nigeria":{"keywords":["flag","nation","country","banner"],"char":"🇳🇬","fitzpatrick_scale":false,"category":"flags"},"niue":{"keywords":["nu","flag","nation","country","banner"],"char":"🇳🇺","fitzpatrick_scale":false,"category":"flags"},"norfolk_island":{"keywords":["norfolk","island","flag","nation","country","banner"],"char":"🇳🇫","fitzpatrick_scale":false,"category":"flags"},"northern_mariana_islands":{"keywords":["northern","mariana","islands","flag","nation","country","banner"],"char":"🇲🇵","fitzpatrick_scale":false,"category":"flags"},"north_korea":{"keywords":["north","korea","nation","flag","country","banner"],"char":"🇰🇵","fitzpatrick_scale":false,"category":"flags"},"norway":{"keywords":["no","flag","nation","country","banner"],"char":"🇳🇴","fitzpatrick_scale":false,"category":"flags"},"oman":{"keywords":["om_symbol","flag","nation","country","banner"],"char":"🇴🇲","fitzpatrick_scale":false,"category":"flags"},"pakistan":{"keywords":["pk","flag","nation","country","banner"],"char":"🇵🇰","fitzpatrick_scale":false,"category":"flags"},"palau":{"keywords":["pw","flag","nation","country","banner"],"char":"🇵🇼","fitzpatrick_scale":false,"category":"flags"},"palestinian_territories":{"keywords":["palestine","palestinian","territories","flag","nation","country","banner"],"char":"🇵🇸","fitzpatrick_scale":false,"category":"flags"},"panama":{"keywords":["pa","flag","nation","country","banner"],"char":"🇵🇦","fitzpatrick_scale":false,"category":"flags"},"papua_new_guinea":{"keywords":["papua","new","guinea","flag","nation","country","banner"],"char":"🇵🇬","fitzpatrick_scale":false,"category":"flags"},"paraguay":{"keywords":["py","flag","nation","country","banner"],"char":"🇵🇾","fitzpatrick_scale":false,"category":"flags"},"peru":{"keywords":["pe","flag","nation","country","banner"],"char":"🇵🇪","fitzpatrick_scale":false,"category":"flags"},"philippines":{"keywords":["ph","flag","nation","country","banner"],"char":"🇵🇭","fitzpatrick_scale":false,"category":"flags"},"pitcairn_islands":{"keywords":["pitcairn","flag","nation","country","banner"],"char":"🇵🇳","fitzpatrick_scale":false,"category":"flags"},"poland":{"keywords":["pl","flag","nation","country","banner"],"char":"🇵🇱","fitzpatrick_scale":false,"category":"flags"},"portugal":{"keywords":["pt","flag","nation","country","banner"],"char":"🇵🇹","fitzpatrick_scale":false,"category":"flags"},"puerto_rico":{"keywords":["puerto","rico","flag","nation","country","banner"],"char":"🇵🇷","fitzpatrick_scale":false,"category":"flags"},"qatar":{"keywords":["qa","flag","nation","country","banner"],"char":"🇶🇦","fitzpatrick_scale":false,"category":"flags"},"reunion":{"keywords":["réunion","flag","nation","country","banner"],"char":"🇷🇪","fitzpatrick_scale":false,"category":"flags"},"romania":{"keywords":["ro","flag","nation","country","banner"],"char":"🇷🇴","fitzpatrick_scale":false,"category":"flags"},"ru":{"keywords":["russian","federation","flag","nation","country","banner"],"char":"🇷🇺","fitzpatrick_scale":false,"category":"flags"},"rwanda":{"keywords":["rw","flag","nation","country","banner"],"char":"🇷🇼","fitzpatrick_scale":false,"category":"flags"},"st_barthelemy":{"keywords":["saint","barthélemy","flag","nation","country","banner"],"char":"🇧🇱","fitzpatrick_scale":false,"category":"flags"},"st_helena":{"keywords":["saint","helena","ascension","tristan","cunha","flag","nation","country","banner"],"char":"🇸🇭","fitzpatrick_scale":false,"category":"flags"},"st_kitts_nevis":{"keywords":["saint","kitts","nevis","flag","nation","country","banner"],"char":"🇰🇳","fitzpatrick_scale":false,"category":"flags"},"st_lucia":{"keywords":["saint","lucia","flag","nation","country","banner"],"char":"🇱🇨","fitzpatrick_scale":false,"category":"flags"},"st_pierre_miquelon":{"keywords":["saint","pierre","miquelon","flag","nation","country","banner"],"char":"🇵🇲","fitzpatrick_scale":false,"category":"flags"},"st_vincent_grenadines":{"keywords":["saint","vincent","grenadines","flag","nation","country","banner"],"char":"🇻🇨","fitzpatrick_scale":false,"category":"flags"},"samoa":{"keywords":["ws","flag","nation","country","banner"],"char":"🇼🇸","fitzpatrick_scale":false,"category":"flags"},"san_marino":{"keywords":["san","marino","flag","nation","country","banner"],"char":"🇸🇲","fitzpatrick_scale":false,"category":"flags"},"sao_tome_principe":{"keywords":["sao","tome","principe","flag","nation","country","banner"],"char":"🇸🇹","fitzpatrick_scale":false,"category":"flags"},"saudi_arabia":{"keywords":["flag","nation","country","banner"],"char":"🇸🇦","fitzpatrick_scale":false,"category":"flags"},"senegal":{"keywords":["sn","flag","nation","country","banner"],"char":"🇸🇳","fitzpatrick_scale":false,"category":"flags"},"serbia":{"keywords":["rs","flag","nation","country","banner"],"char":"🇷🇸","fitzpatrick_scale":false,"category":"flags"},"seychelles":{"keywords":["sc","flag","nation","country","banner"],"char":"🇸🇨","fitzpatrick_scale":false,"category":"flags"},"sierra_leone":{"keywords":["sierra","leone","flag","nation","country","banner"],"char":"🇸🇱","fitzpatrick_scale":false,"category":"flags"},"singapore":{"keywords":["sg","flag","nation","country","banner"],"char":"🇸🇬","fitzpatrick_scale":false,"category":"flags"},"sint_maarten":{"keywords":["sint","maarten","dutch","flag","nation","country","banner"],"char":"🇸🇽","fitzpatrick_scale":false,"category":"flags"},"slovakia":{"keywords":["sk","flag","nation","country","banner"],"char":"🇸🇰","fitzpatrick_scale":false,"category":"flags"},"slovenia":{"keywords":["si","flag","nation","country","banner"],"char":"🇸🇮","fitzpatrick_scale":false,"category":"flags"},"solomon_islands":{"keywords":["solomon","islands","flag","nation","country","banner"],"char":"🇸🇧","fitzpatrick_scale":false,"category":"flags"},"somalia":{"keywords":["so","flag","nation","country","banner"],"char":"🇸🇴","fitzpatrick_scale":false,"category":"flags"},"south_africa":{"keywords":["south","africa","flag","nation","country","banner"],"char":"🇿🇦","fitzpatrick_scale":false,"category":"flags"},"south_georgia_south_sandwich_islands":{"keywords":["south","georgia","sandwich","islands","flag","nation","country","banner"],"char":"🇬🇸","fitzpatrick_scale":false,"category":"flags"},"kr":{"keywords":["south","korea","nation","flag","country","banner"],"char":"🇰🇷","fitzpatrick_scale":false,"category":"flags"},"south_sudan":{"keywords":["south","sd","flag","nation","country","banner"],"char":"🇸🇸","fitzpatrick_scale":false,"category":"flags"},"es":{"keywords":["spain","flag","nation","country","banner"],"char":"🇪🇸","fitzpatrick_scale":false,"category":"flags"},"sri_lanka":{"keywords":["sri","lanka","flag","nation","country","banner"],"char":"🇱🇰","fitzpatrick_scale":false,"category":"flags"},"sudan":{"keywords":["sd","flag","nation","country","banner"],"char":"🇸🇩","fitzpatrick_scale":false,"category":"flags"},"suriname":{"keywords":["sr","flag","nation","country","banner"],"char":"🇸🇷","fitzpatrick_scale":false,"category":"flags"},"swaziland":{"keywords":["sz","flag","nation","country","banner"],"char":"🇸🇿","fitzpatrick_scale":false,"category":"flags"},"sweden":{"keywords":["se","flag","nation","country","banner"],"char":"🇸🇪","fitzpatrick_scale":false,"category":"flags"},"switzerland":{"keywords":["ch","flag","nation","country","banner"],"char":"🇨🇭","fitzpatrick_scale":false,"category":"flags"},"syria":{"keywords":["syrian","arab","republic","flag","nation","country","banner"],"char":"🇸🇾","fitzpatrick_scale":false,"category":"flags"},"taiwan":{"keywords":["tw","flag","nation","country","banner"],"char":"🇹🇼","fitzpatrick_scale":false,"category":"flags"},"tajikistan":{"keywords":["tj","flag","nation","country","banner"],"char":"🇹🇯","fitzpatrick_scale":false,"category":"flags"},"tanzania":{"keywords":["tanzania,","united","republic","flag","nation","country","banner"],"char":"🇹🇿","fitzpatrick_scale":false,"category":"flags"},"thailand":{"keywords":["th","flag","nation","country","banner"],"char":"🇹🇭","fitzpatrick_scale":false,"category":"flags"},"timor_leste":{"keywords":["timor","leste","flag","nation","country","banner"],"char":"🇹🇱","fitzpatrick_scale":false,"category":"flags"},"togo":{"keywords":["tg","flag","nation","country","banner"],"char":"🇹🇬","fitzpatrick_scale":false,"category":"flags"},"tokelau":{"keywords":["tk","flag","nation","country","banner"],"char":"🇹🇰","fitzpatrick_scale":false,"category":"flags"},"tonga":{"keywords":["to","flag","nation","country","banner"],"char":"🇹🇴","fitzpatrick_scale":false,"category":"flags"},"trinidad_tobago":{"keywords":["trinidad","tobago","flag","nation","country","banner"],"char":"🇹🇹","fitzpatrick_scale":false,"category":"flags"},"tunisia":{"keywords":["tn","flag","nation","country","banner"],"char":"🇹🇳","fitzpatrick_scale":false,"category":"flags"},"tr":{"keywords":["turkey","flag","nation","country","banner"],"char":"🇹🇷","fitzpatrick_scale":false,"category":"flags"},"turkmenistan":{"keywords":["flag","nation","country","banner"],"char":"🇹🇲","fitzpatrick_scale":false,"category":"flags"},"turks_caicos_islands":{"keywords":["turks","caicos","islands","flag","nation","country","banner"],"char":"🇹🇨","fitzpatrick_scale":false,"category":"flags"},"tuvalu":{"keywords":["flag","nation","country","banner"],"char":"🇹🇻","fitzpatrick_scale":false,"category":"flags"},"uganda":{"keywords":["ug","flag","nation","country","banner"],"char":"🇺🇬","fitzpatrick_scale":false,"category":"flags"},"ukraine":{"keywords":["ua","flag","nation","country","banner"],"char":"🇺🇦","fitzpatrick_scale":false,"category":"flags"},"united_arab_emirates":{"keywords":["united","arab","emirates","flag","nation","country","banner"],"char":"🇦🇪","fitzpatrick_scale":false,"category":"flags"},"uk":{"keywords":["united","kingdom","great","britain","northern","ireland","flag","nation","country","banner","british","UK","english","england","union jack"],"char":"🇬🇧","fitzpatrick_scale":false,"category":"flags"},"england":{"keywords":["flag","english"],"char":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","fitzpatrick_scale":false,"category":"flags"},"scotland":{"keywords":["flag","scottish"],"char":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","fitzpatrick_scale":false,"category":"flags"},"wales":{"keywords":["flag","welsh"],"char":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","fitzpatrick_scale":false,"category":"flags"},"us":{"keywords":["united","states","america","flag","nation","country","banner"],"char":"🇺🇸","fitzpatrick_scale":false,"category":"flags"},"us_virgin_islands":{"keywords":["virgin","islands","us","flag","nation","country","banner"],"char":"🇻🇮","fitzpatrick_scale":false,"category":"flags"},"uruguay":{"keywords":["uy","flag","nation","country","banner"],"char":"🇺🇾","fitzpatrick_scale":false,"category":"flags"},"uzbekistan":{"keywords":["uz","flag","nation","country","banner"],"char":"🇺🇿","fitzpatrick_scale":false,"category":"flags"},"vanuatu":{"keywords":["vu","flag","nation","country","banner"],"char":"🇻🇺","fitzpatrick_scale":false,"category":"flags"},"vatican_city":{"keywords":["vatican","city","flag","nation","country","banner"],"char":"🇻🇦","fitzpatrick_scale":false,"category":"flags"},"venezuela":{"keywords":["ve","bolivarian","republic","flag","nation","country","banner"],"char":"🇻🇪","fitzpatrick_scale":false,"category":"flags"},"vietnam":{"keywords":["viet","nam","flag","nation","country","banner"],"char":"🇻🇳","fitzpatrick_scale":false,"category":"flags"},"wallis_futuna":{"keywords":["wallis","futuna","flag","nation","country","banner"],"char":"🇼🇫","fitzpatrick_scale":false,"category":"flags"},"western_sahara":{"keywords":["western","sahara","flag","nation","country","banner"],"char":"🇪🇭","fitzpatrick_scale":false,"category":"flags"},"yemen":{"keywords":["ye","flag","nation","country","banner"],"char":"🇾🇪","fitzpatrick_scale":false,"category":"flags"},"zambia":{"keywords":["zm","flag","nation","country","banner"],"char":"🇿🇲","fitzpatrick_scale":false,"category":"flags"},"zimbabwe":{"keywords":["zw","flag","nation","country","banner"],"char":"🇿🇼","fitzpatrick_scale":false,"category":"flags"}};

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
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, default */
/***/ (function(module) {

module.exports = ["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rofl","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue","stuck_out_tongue_closed_eyes","stuck_out_tongue_winking_eye","zany","raised_eyebrow","monocle","nerd_face","sunglasses","star_struck","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","frowning_face","persevere","confounded","tired_face","weary","cry","sob","triumph","angry","rage","symbols_over_mouth","exploding_head","flushed","scream","fearful","cold_sweat","disappointed_relieved","sweat","hugs","thinking","hand_over_mouth","shushing","lying_face","no_mouth","neutral_face","expressionless","grimacing","roll_eyes","hushed","frowning","anguished","open_mouth","astonished","sleeping","drooling_face","sleepy","dizzy_face","zipper_mouth_face","nauseated_face","vomiting","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","money_mouth_face","cowboy_hat_face","smiling_imp","imp","japanese_ogre","japanese_goblin","clown_face","poop","ghost","skull","skull_and_crossbones","alien","space_invader","robot","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","palms_up","open_hands","raised_hands","clap","handshake","+1","-1","facepunch","fist","fist_left","fist_right","crossed_fingers","v","love_you","metal","ok_hand","point_left","point_right","point_up","point_down","point_up_2","raised_hand","raised_back_of_hand","raised_hand_with_fingers_splayed","vulcan_salute","wave","call_me_hand","muscle","fu","writing_hand","pray","ring","lipstick","kiss","lips","tongue","ear","nose","footprints","eye","eyes","brain","speaking_head","bust_in_silhouette","busts_in_silhouette","baby","girl","child","boy","woman","adult","man","blonde_woman","blonde_man","bearded_person","older_woman","older_adult","older_man","man_with_gua_pi_mao","woman_with_headscarf","woman_with_turban","man_with_turban","policewoman","policeman","construction_worker_woman","construction_worker_man","guardswoman","guardsman","female_detective","male_detective","woman_health_worker","man_health_worker","woman_farmer","man_farmer","woman_cook","man_cook","woman_student","man_student","woman_singer","man_singer","woman_teacher","man_teacher","woman_factory_worker","man_factory_worker","woman_technologist","man_technologist","woman_office_worker","man_office_worker","woman_mechanic","man_mechanic","woman_scientist","man_scientist","woman_artist","man_artist","woman_firefighter","man_firefighter","woman_pilot","man_pilot","woman_astronaut","man_astronaut","woman_judge","man_judge","bride_with_veil","man_in_tuxedo","princess","prince","mrs_claus","santa","sorceress","wizard","woman_elf","man_elf","woman_vampire","man_vampire","woman_zombie","man_zombie","woman_genie","man_genie","mermaid","merman","woman_fairy","man_fairy","angel","pregnant_woman","breastfeeding","bowing_woman","bowing_man","tipping_hand_woman","tipping_hand_man","no_good_woman","no_good_man","ok_woman","ok_man","raising_hand_woman","raising_hand_man","woman_facepalming","man_facepalming","woman_shrugging","man_shrugging","pouting_woman","pouting_man","frowning_woman","frowning_man","haircut_woman","haircut_man","massage_woman","massage_man","woman_in_steamy_room","man_in_steamy_room","nail_care","selfie","dancer","man_dancing","dancing_women","dancing_men","business_suit_levitating","walking_woman","walking_man","running_woman","running_man","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart_woman_man","couple_with_heart_woman_woman","couple_with_heart_man_man","couplekiss_man_woman","couplekiss_woman_woman","couplekiss_man_man","family_man_woman_boy","family_man_woman_girl","family_man_woman_girl_boy","family_man_woman_boy_boy","family_man_woman_girl_girl","family_woman_woman_boy","family_woman_woman_girl","family_woman_woman_girl_boy","family_woman_woman_boy_boy","family_woman_woman_girl_girl","family_man_man_boy","family_man_man_girl","family_man_man_girl_boy","family_man_man_boy_boy","family_man_man_girl_girl","family_woman_boy","family_woman_girl","family_woman_girl_boy","family_woman_boy_boy","family_woman_girl_girl","family_man_boy","family_man_girl","family_man_girl_boy","family_man_boy_boy","family_man_girl_girl","coat","womans_clothes","tshirt","jeans","necktie","dress","bikini","kimono","high_heel","sandal","boot","mans_shoe","athletic_shoe","socks","gloves","scarf","tophat","billed_hat","womans_hat","mortar_board","rescue_worker_helmet","crown","pouch","purse","handbag","briefcase","school_satchel","eyeglasses","dark_sunglasses","closed_umbrella","dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn","honeybee","bug","butterfly","snail","shell","beetle","ant","grasshopper","spider","spider_web","scorpion","turtle","snake","lizard","t-rex","sauropod","octopus","squid","shrimp","crab","blowfish","tropical_fish","fish","dolphin","whale","whale2","shark","crocodile","tiger2","leopard","zebra","gorilla","elephant","rhinoceros","dromedary_camel","giraffe","camel","water_buffalo","ox","cow2","racehorse","pig2","ram","sheep","goat","deer","dog2","poodle","cat2","rooster","turkey","dove","rabbit2","rat","mouse2","chipmunk","hedgehog","paw_prints","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","wilted_flower","tulip","blossom","cherry_blossom","bouquet","mushroom","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","sun_behind_small_cloud","partly_sunny","sun_behind_large_cloud","sun_behind_rain_cloud","cloud","cloud_with_rain","cloud_with_lightning_and_rain","cloud_with_lightning","zap","fire","boom","snowflake","cloud_with_snow","snowman","snowman_with_snow","wind_face","dash","tornado","fog","open_umbrella","umbrella","droplet","sweat_drops","ocean","green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","pineapple","coconut","kiwi_fruit","tomato","eggplant","avocado","broccoli","cucumber","hot_pepper","corn","carrot","potato","sweet_potato","croissant","bread","baguette_bread","pretzel","cheese","egg","fried_egg","pancakes","bacon","steak","poultry_leg","meat_on_bone","hotdog","hamburger","fries","pizza","sandwich","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","canned_food","spaghetti","ramen","stew","curry","sushi","bento","fried_shrimp","rice_ball","rice","rice_cracker","fish_cake","fortune_cookie","oden","dango","shaved_ice","ice_cream","icecream","pie","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","dumpling","cookie","chestnut","peanuts","honey_pot","milk_glass","baby_bottle","coffee","tea","cup_with_straw","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","plate_with_cutlery","bowl_with_spoon","takeout_box","chopsticks","soccer","basketball","football","baseball","tennis","volleyball","rugby_football","8ball","golf","golfing_woman","golfing_man","ping_pong","badminton","goal_net","ice_hockey","field_hockey","cricket","ski","skier","snowboarder","person_fencing","women_wrestling","men_wrestling","woman_cartwheeling","man_cartwheeling","woman_playing_handball","man_playing_handball","ice_skate","curling_stone","sled","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","rowing_woman","rowing_man","climbing_woman","climbing_man","swimming_woman","swimming_man","woman_playing_water_polo","man_playing_water_polo","woman_in_lotus_position","man_in_lotus_position","surfing_woman","surfing_man","bath","basketball_woman","basketball_man","weight_lifting_woman","weight_lifting_man","biking_woman","biking_man","mountain_biking_woman","mountain_biking_man","horse_racing","trophy","running_shirt_with_sash","medal_sports","medal_military","1st_place_medal","2nd_place_medal","3rd_place_medal","reminder_ribbon","rosette","ticket","tickets","performing_arts","art","circus_tent","woman_juggling","man_juggling","microphone","headphones","musical_score","musical_keyboard","drum","saxophone","trumpet","guitar","violin","clapper","video_game","dart","game_die","slot_machine","bowling","red_car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","kick_scooter","motorcycle","bike","motor_scooter","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","flying_saucer","helicopter","small_airplane","airplane","flight_departure","flight_arrival","sailboat","motor_boat","speedboat","ferry","passenger_ship","rocket","artificial_satellite","seat","canoe","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","checkered_flag","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","mountain_snow","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","houses","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","watch","iphone","calling","computer","keyboard","desktop_computer","printer","computer_mouse","trackball","joystick","clamp","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_flash","video_camera","movie_camera","film_projector","film_strip","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite","battery","electric_plug","bulb","flashlight","candle","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","balance_scale","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","chains","gun","bomb","hocho","dagger","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","barber","alembic","telescope","microscope","hole","pill","syringe","thermometer","label","bookmark","toilet","shower","bathtub","key","old_key","couch_and_lamp","sleeping_bed","bed","door","bellhop_bell","framed_picture","world_map","parasol_on_ground","moyai","shopping","shopping_cart","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar","card_index","card_file_box","ballot_box","file_cabinet","clipboard","spiral_notepad","file_folder","open_file_folder","card_index_dividers","newspaper_roll","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","open_book","link","paperclip","paperclips","scissors","triangular_ruler","straight_ruler","pushpin","round_pushpin","triangular_flag_on_post","white_flag","black_flag","rainbow_flag","closed_lock_with_key","lock","unlock","lock_with_ink_pen","pen","fountain_pen","black_nib","memo","pencil2","crayon","paintbrush","mag","mag_right","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om","wheel_of_dharma","star_of_david","six_pointed_star","menorah","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive","biohazard","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","stop_sign","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","zzz","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","asterisk","1234","eject_button","arrow_forward","pause_button","next_track_button","stop_button","record_button","play_or_pause_button","previous_track_button","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","afghanistan","aland_islands","albania","algeria","american_samoa","andorra","angola","anguilla","antarctica","antigua_barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","caribbean_netherlands","bosnia_herzegovina","botswana","brazil","british_indian_ocean_territory","british_virgin_islands","brunei","bulgaria","burkina_faso","burundi","cape_verde","cambodia","cameroon","canada","canary_islands","cayman_islands","central_african_republic","chad","chile","cn","christmas_island","cocos_islands","colombia","comoros","congo_brazzaville","congo_kinshasa","cook_islands","costa_rica","croatia","cuba","curacao","cyprus","czech_republic","denmark","djibouti","dominica","dominican_republic","ecuador","egypt","el_salvador","equatorial_guinea","eritrea","estonia","ethiopia","eu","falkland_islands","faroe_islands","fiji","finland","fr","french_guiana","french_polynesia","french_southern_territories","gabon","gambia","georgia","de","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea_bissau","guyana","haiti","honduras","hong_kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle_of_man","israel","it","cote_divoire","jamaica","jp","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall_islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new_caledonia","new_zealand","nicaragua","niger","nigeria","niue","norfolk_island","northern_mariana_islands","north_korea","norway","oman","pakistan","palau","palestinian_territories","panama","papua_new_guinea","paraguay","peru","philippines","pitcairn_islands","poland","portugal","puerto_rico","qatar","reunion","romania","ru","rwanda","st_barthelemy","st_helena","st_kitts_nevis","st_lucia","st_pierre_miquelon","st_vincent_grenadines","samoa","san_marino","sao_tome_principe","saudi_arabia","senegal","serbia","seychelles","sierra_leone","singapore","sint_maarten","slovakia","slovenia","solomon_islands","somalia","south_africa","south_georgia_south_sandwich_islands","kr","south_sudan","es","sri_lanka","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor_leste","togo","tokelau","tonga","trinidad_tobago","tunisia","tr","turkmenistan","turks_caicos_islands","tuvalu","uganda","ukraine","united_arab_emirates","uk","england","scotland","wales","us","us_virgin_islands","uruguay","uzbekistan","vanuatu","vatican_city","venezuela","vietnam","wallis_futuna","western_sahara","yemen","zambia","zimbabwe"];

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

  self.re.pretest       = RegExp(
                            '(' + self.re.schema_test.source + ')|' +
                            '(' + self.re.host_fuzzy_test.source + ')|' +
                            '@',
                            'i');

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
          '\\.{2,3}[a-zA-Z0-9%/]|' + // github has ... in commit range links. Restrict to
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

  re.src_email_name =

    '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+';

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
      // don't allow `--` in domain names, because:
      // - that can conflict with markdown &mdash; / &ndash;
      // - nobody use those anyway
      '(?:' + re.src_pseudo_letter + '(?:-(?!-)|' + re.src_pseudo_letter + '){0,61}' + re.src_pseudo_letter + ')' +
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

      '(^|' + text_separators + '|\\(|' + re.src_ZCc + ')(' + re.src_email_name + '@' + re.tpl_host_fuzzy_strict + ')';

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
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var diacritics = createCommonjsModule(function (module) {
// Diacritics.js
// 
// Started as something to be an equivalent of the Google Java Library diacritics library for JavaScript.
// Found this: http://jsperf.com/diacritics/6 and converted it into a reusable module.
// 
// @author Nijiko Yonskai
// @license MIT
// @copyright Nijikokun 2013 <nijikokun@gmail.com>
(function (name, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (false) {}
  else this[name] = definition();
})('Diacritics', function () {
  // Create public object
  var output = {
    map: {}
  };

  // Create private reference map.
  var reference = [
    {'base':' ',    'letters':'\u00A0'},
    {'base':'A',    'letters':'\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F'},
    {'base':'AA',   'letters':'\uA732'},
    {'base':'AE',   'letters':'\u00C6\u01FC\u01E2'},
    {'base':'AO',   'letters':'\uA734'},
    {'base':'AU',   'letters':'\uA736'},
    {'base':'AV',   'letters':'\uA738\uA73A'},
    {'base':'AY',   'letters':'\uA73C'},
    {'base':'B',    'letters':'\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181'},
    {'base':'C',    'letters':'\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E'},
    {'base':'D',    'letters':'\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779'},
    {'base':'DZ',   'letters':'\u01F1\u01C4'},
    {'base':'Dz',   'letters':'\u01F2\u01C5'},
    {'base':'E',    'letters':'\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E'},
    {'base':'F',    'letters':'\u0046\u24BB\uFF26\u1E1E\u0191\uA77B'},
    {'base':'G',    'letters':'\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E'},
    {'base':'H',    'letters':'\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D'},
    {'base':'I',    'letters':'\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197'},
    {'base':'J',    'letters':'\u004A\u24BF\uFF2A\u0134\u0248'},
    {'base':'K',    'letters':'\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2'},
    {'base':'L',    'letters':'\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780'},
    {'base':'LJ',   'letters':'\u01C7'},
    {'base':'Lj',   'letters':'\u01C8'},
    {'base':'M',    'letters':'\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C'},
    {'base':'N',    'letters':'\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4'},
    {'base':'NJ',   'letters':'\u01CA'},
    {'base':'Nj',   'letters':'\u01CB'},
    {'base':'O',    'letters':'\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C'},
    {'base':'OI',   'letters':'\u01A2'},
    {'base':'OO',   'letters':'\uA74E'},
    {'base':'OU',   'letters':'\u0222'},
    {'base':'P',    'letters':'\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754'},
    {'base':'Q',    'letters':'\u0051\u24C6\uFF31\uA756\uA758\u024A'},
    {'base':'R',    'letters':'\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782'},
    {'base':'S',    'letters':'\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784'},
    {'base':'T',    'letters':'\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786'},
    {'base':'Th',   'letters':'\u00DE'},
    {'base':'TZ',   'letters':'\uA728'},
    {'base':'U',    'letters':'\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244'},
    {'base':'V',    'letters':'\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245'},
    {'base':'VY',   'letters':'\uA760'},
    {'base':'W',    'letters':'\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72'},
    {'base':'X',    'letters':'\u0058\u24CD\uFF38\u1E8A\u1E8C'},
    {'base':'Y',    'letters':'\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE'},
    {'base':'Z',    'letters':'\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762'},
    {'base':'a',    'letters':'\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251'},
    {'base':'aa',   'letters':'\uA733'},
    {'base':'ae',   'letters':'\u00E6\u01FD\u01E3'},
    {'base':'ao',   'letters':'\uA735'},
    {'base':'au',   'letters':'\uA737'},
    {'base':'av',   'letters':'\uA739\uA73B'},
    {'base':'ay',   'letters':'\uA73D'},
    {'base':'b',    'letters':'\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253'},
    {'base':'c',    'letters':'\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184'},
    {'base':'d',    'letters':'\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A'},
    {'base':'dz',   'letters':'\u01F3\u01C6'},
    {'base':'e',    'letters':'\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD'},
    {'base':'f',    'letters':'\u0066\u24D5\uFF46\u1E1F\u0192\uA77C'},
    {'base':'ff',   'letters':'\uFB00'},
    {'base':'fi',   'letters':'\uFB01'},
    {'base':'fl',   'letters':'\uFB02'},
    {'base':'ffi',  'letters':'\uFB03'},
    {'base':'ffl',  'letters':'\uFB04'},
    {'base':'g',    'letters':'\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F'},
    {'base':'h',    'letters':'\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265'},
    {'base':'hv',   'letters':'\u0195'},
    {'base':'i',    'letters':'\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131'},
    {'base':'j',    'letters':'\u006A\u24D9\uFF4A\u0135\u01F0\u0249'},
    {'base':'k',    'letters':'\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3'},
    {'base':'l',    'letters':'\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747'},
    {'base':'lj',   'letters':'\u01C9'},
    {'base':'m',    'letters':'\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F'},
    {'base':'n',    'letters':'\x6E\xF1\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509'},
    {'base':'nj',   'letters':'\u01CC'},
    {'base':'o',    'letters':'\u07C0\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275'},
    {'base':'oe',   'letters':'\u0152\u0153'},
    {'base':'oi',   'letters':'\u01A3'},
    {'base':'ou',   'letters':'\u0223'},
    {'base':'oo',   'letters':'\uA74F'},
    {'base':'p',    'letters':'\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755'},
    {'base':'q',    'letters':'\u0071\u24E0\uFF51\u024B\uA757\uA759'},
    {'base':'r',    'letters':'\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783'},
    {'base':'s',    'letters':'\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B'},
    {'base':'ss',   'letters':'\xDF'},
    {'base':'t',    'letters':'\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787'},
    {'base':'th',   'letters':'\u00FE'},
    {'base':'tz',   'letters':'\uA729'},
    {'base':'u',    'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289'},
    {'base':'v',    'letters':'\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C'},
    {'base':'vy',   'letters':'\uA761'},
    {'base':'w',    'letters':'\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73'},
    {'base':'x',    'letters':'\u0078\u24E7\uFF58\u1E8B\u1E8D'},
    {'base':'y',    'letters':'\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF'},
    {'base':'z',    'letters':'\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763'}
  ];

  // Generate reference mapping
  for (var i = 0, refLength = reference.length; i < refLength; i++){
    var letters = reference[i].letters.split("");

    for (var j = 0, letLength = letters.length; j < letLength; j++){
      output.map[letters[j]] = reference[i].base;
    }
  }

  /**
   * Clean accents (diacritics) from string.
   * 
   * @param  {String} input String to be cleaned of diacritics.
   * @return {String}
   */
  output.clean = function (input) {
    if (!input || !input.length || input.length < 1) {
      return "";
    }

    var string = "";
    var letters = input.split("");
    var index = 0;
    var length = letters.length;
    var letter;

    for (; index < length; index++) {
      letter = letters[index];
      string += letter in output.map ? output.map[letter] : letter;
    }

    return string;
  };

  return output;
});
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2017 Kent C. Dodds
 * @author Kent C. Dodds <kent@doddsfamily.us>
 */

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
function matchSorter(items, value) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // not performing any search/sort if value(search term) is empty
  if (!value) return items;

  var keys = options.keys,
      _options$threshold = options.threshold,
      threshold = _options$threshold === undefined ? rankings.MATCHES : _options$threshold;

  var matchedItems = items.reduce(function (matches, item, index) {
    var _getHighestRanking = getHighestRanking(item, keys, value, options),
        rank = _getHighestRanking.rank,
        keyIndex = _getHighestRanking.keyIndex;

    if (rank >= threshold) {
      matches.push({ item: item, rank: rank, index: index, keyIndex: keyIndex });
    }
    return matches;
  }, []);
  return matchedItems.sort(sortRankedItems).map(function (_ref) {
    var item = _ref.item;
    return item;
  });
}

/**
 * Gets the highest ranking for value for the given item based on its values for the given keys
 * @param {*} item - the item to rank
 * @param {Array} keys - the keys to get values from the item for the ranking
 * @param {String} value - the value to rank against
 * @param {Object} options - options to control the ranking
 * @return {Number} - the highest ranking
 */
function getHighestRanking(item, keys, value, options) {
  if (!keys) {
    return { rank: getMatchRanking(item, value, options), keyIndex: -1 };
  }
  var valuesToRank = getAllValuesToRank(item, keys);
  return valuesToRank.reduce(function (_ref2, _ref3, i) {
    var rank = _ref2.rank,
        keyIndex = _ref2.keyIndex;
    var itemValue = _ref3.itemValue,
        attributes = _ref3.attributes;

    var newRank = getMatchRanking(itemValue, value, options);
    var minRanking = attributes.minRanking,
        maxRanking = attributes.maxRanking;

    if (newRank < minRanking && newRank >= rankings.MATCHES) {
      newRank = minRanking;
    } else if (newRank > maxRanking) {
      newRank = maxRanking;
    }
    if (newRank > rank) {
      rank = newRank;
      keyIndex = i;
    }
    return { rank: rank, keyIndex: keyIndex };
  }, { rank: rankings.NO_MATCH, keyIndex: -1 });
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
  stringToRank = prepareValueForComparison(stringToRank, options);

  // too long
  if (stringToRank.length > testString.length) {
    return rankings.NO_MATCH;
  }

  // case sensitive equals
  if (testString === stringToRank) {
    return rankings.CASE_SENSITIVE_EQUAL;
  }

  var caseRank = getCaseRanking(testString);
  var isPartial = isPartialOfCase(testString, stringToRank, caseRank);
  var isCasedAcronym = isCaseAcronym(testString, stringToRank, caseRank);

  // Lower casing before further comparison
  testString = testString.toLowerCase();
  stringToRank = stringToRank.toLowerCase();

  // case insensitive equals
  if (testString === stringToRank) {
    return rankings.EQUAL + caseRank;
  }

  // starts with
  if (testString.indexOf(stringToRank) === 0) {
    return rankings.STARTS_WITH + caseRank;
  }

  // word starts with
  if (testString.indexOf(' ' + stringToRank) !== -1) {
    return rankings.WORD_STARTS_WITH + caseRank;
  }

  // is a part inside a cased string
  if (isPartial) {
    return rankings.STRING_CASE + caseRank;
  }

  // is acronym for a cased string
  if (caseRank > 0 && isCasedAcronym) {
    return rankings.STRING_CASE_ACRONYM + caseRank;
  }

  // contains
  if (testString.indexOf(stringToRank) !== -1) {
    return rankings.CONTAINS + caseRank;
  } else if (stringToRank.length === 1) {
    // If the only character in the given stringToRank
    //   isn't even contained in the testString, then
    //   it's definitely not a match.
    return rankings.NO_MATCH;
  }

  // acronym
  if (getAcronym(testString).indexOf(stringToRank) !== -1) {
    return rankings.ACRONYM + caseRank;
  }

  // will return a number between rankings.MATCHES and
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
 * to rankings.MATCHES + 1 represents a loose match.
 * @param {String} testString - the string to test against
 * @param {String} stringToRank - the string to rank
 * @returns {Number} the number between rankings.MATCHES and
 * rankings.MATCHES + 1 for how well stringToRank matches testString
 */
function getClosenessRanking(testString, stringToRank) {
  var charNumber = 0;
  function findMatchingCharacter(matchChar, string, index) {
    for (var j = index; j < string.length; j++) {
      var stringChar = string[j];
      if (stringChar === matchChar) {
        return j + 1;
      }
    }
    return -1;
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
  return function (spread) {
    var matching = spread - stringToRank.length + 1;
    var ranking = rankings.MATCHES + 1 / matching;
    return ranking;
  }(spread);
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
  var aRank = a.rank,
      aIndex = a.index,
      aKeyIndex = a.keyIndex;
  var bRank = b.rank,
      bIndex = b.index,
      bKeyIndex = b.keyIndex;

  if (aRank === bRank) {
    if (aKeyIndex === bKeyIndex) {
      return aIndex < bIndex ? aFirst : bFirst;
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

  value = '' + value; // toString
  if (!keepDiacritics) {
    value = diacritics.clean(value);
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
  if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
    key = key.key;
  }
  var value = void 0;
  if (typeof key === 'function') {
    value = key(item);
    // eslint-disable-next-line no-negated-condition
  } else if (key.indexOf('.') !== -1) {
    // handle nested keys
    value = key.split('.').reduce(function (itemObj, nestedKey) {
      return itemObj ? itemObj[nestedKey] : null;
    }, item);
  } else {
    value = item[key];
  }
  // concat because `value` can be a string or an array
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
    key = { key: key };
  }
  return _extends({
    maxRanking: Infinity,
    minRanking: -Infinity
  }, key);
}

/* harmony default export */ __webpack_exports__["default"] = (matchSorter);



/***/ }),

/***/ "./node_modules/react-linkify/dist/Linkify.js":
/*!****************************************************!*\
  !*** ./node_modules/react-linkify/dist/Linkify.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkify = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _linkifyIt = __webpack_require__(/*! linkify-it */ "./node_modules/linkify-it/index.js");

var _linkifyIt2 = _interopRequireDefault(_linkifyIt);

var _tlds = __webpack_require__(/*! tlds */ "./node_modules/tlds/index.js");

var _tlds2 = _interopRequireDefault(_tlds);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var linkify = exports.linkify = new _linkifyIt2.default();
linkify.tlds(_tlds2.default);

var Linkify = function (_React$Component) {
  _inherits(Linkify, _React$Component);

  function Linkify() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Linkify);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Linkify.__proto__ || Object.getPrototypeOf(Linkify)).call.apply(_ref, [this].concat(args))), _this), _this.parseCounter = 0, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Linkify, [{
    key: 'getMatches',
    value: function getMatches(string) {
      return linkify.match(string);
    }
  }, {
    key: 'parseString',
    value: function parseString(string) {
      var _this2 = this;

      var elements = [];
      if (string === '') {
        return elements;
      }

      var matches = this.getMatches(string);
      if (!matches) {
        return string;
      }

      var lastIndex = 0;
      matches.forEach(function (match, idx) {
        // Push the preceding text if there is any
        if (match.index > lastIndex) {
          elements.push(string.substring(lastIndex, match.index));
        }
        // Shallow update values that specified the match
        var props = { href: match.url, key: 'parse' + _this2.parseCounter + 'match' + idx };
        for (var key in _this2.props.properties) {
          var val = _this2.props.properties[key];
          if (val === Linkify.MATCH) {
            val = match.url;
          }

          props[key] = val;
        }
        elements.push(_react2.default.createElement(_this2.props.component, props, match.text));
        lastIndex = match.lastIndex;
      });

      if (lastIndex < string.length) {
        elements.push(string.substring(lastIndex));
      }

      return elements.length === 1 ? elements[0] : elements;
    }
  }, {
    key: 'parse',
    value: function parse(children) {
      var _this3 = this;

      var parsed = children;

      if (typeof children === 'string') {
        parsed = this.parseString(children);
      } else if (_react2.default.isValidElement(children) && children.type !== 'a' && children.type !== 'button') {
        parsed = _react2.default.cloneElement(children, { key: 'parse' + ++this.parseCounter }, this.parse(children.props.children));
      } else if (children instanceof Array) {
        parsed = children.map(function (child) {
          return _this3.parse(child);
        });
      }

      return parsed;
    }
  }, {
    key: 'render',
    value: function render() {
      this.parseCounter = 0;
      var parsedChildren = this.parse(this.props.children);

      return _react2.default.createElement(
        'span',
        { className: this.props.className },
        parsedChildren
      );
    }
  }]);

  return Linkify;
}(_react2.default.Component);

Linkify.MATCH = 'LINKIFY_MATCH';
Linkify.propTypes = {
  className: _propTypes2.default.string,
  component: _propTypes2.default.any,
  properties: _propTypes2.default.object,
  urlRegex: _propTypes2.default.object,
  emailRegex: _propTypes2.default.object
};
Linkify.defaultProps = {
  className: 'Linkify',
  component: 'a',
  properties: {}
};
exports.default = Linkify;


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

module.exports=/[!-#%-\*,-/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E49\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/

/***/ }),

/***/ "./node_modules/uc.micro/categories/Z/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uc.micro/categories/Z/regex.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/

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
//# sourceMappingURL=0.bundle.js.map
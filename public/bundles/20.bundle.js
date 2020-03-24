(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./src/shared/components/forms/LoginForm.jsx":
/*!***************************************************!*\
  !*** ./src/shared/components/forms/LoginForm.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react:

 // material ui:











 // recompose:



const validate = values => {
  const errors = {};
  const requiredFields = ["username", "password1", "password2", "email"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
  label: label,
  placeholder: label,
  error: touched && invalid,
  helperText: touched && error
}, input, custom));

const renderCheckbox = ({
  input,
  label
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: input.value ? true : false,
    onChange: input.onChange
  }),
  label: label
}));

const renderFromHelper = ({
  touched,
  error
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], null, touched && error);
  }
};

const renderSelectField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  children,
  ...custom
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
  error: touched && error
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
  htmlFor: "age-native-simple"
}, "Age"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
  native: true
}, input, custom, {
  inputProps: {
    name: "age",
    id: "age-native-simple"
  }
}), children), renderFromHelper({
  touched,
  error
})); // jss:


const styles = theme => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly" // position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    // textAlign: "center",

  },
  field: {
    margin: "20px 0px"
  }
});

const LoginForm = props => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    classes
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.field
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "user",
    component: renderTextField,
    label: "Username or Email",
    variant: "standard",
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.field
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "password",
    component: renderTextField,
    label: "Password",
    type: "password",
    variant: "standard",
    fullWidth: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.buttons
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    disabled: pristine || submitting,
    fullWidth: true
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_13__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "RegisterForm",
  // a unique identifier for this form
  validate
}))(LoginForm));

/***/ }),

/***/ "./src/shared/components/forms/RegisterForm.jsx":
/*!******************************************************!*\
  !*** ./src/shared/components/forms/RegisterForm.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_esm_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_esm_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_esm_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_esm_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_esm_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/esm/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_esm_Link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/esm/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_esm_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/esm/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_esm_Radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/esm/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_esm_RadioGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/esm/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react:

 // material ui:












 // captcha:

 // recompose:



const validate = values => {
  const errors = {};
  const requiredFields = ["username", "password1", "password2", "email"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
  label: label,
  placeholder: label,
  error: touched && invalid,
  helperText: touched && error
}, input, custom));

const renderCheckbox = ({
  input,
  label
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    checked: input.value ? true : false,
    onChange: input.onChange
  }),
  label: label
}));

const renderTOS = ({
  input
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
  checked: input.value ? true : false,
  onChange: input.onChange
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "I have read and agree to the "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Link__WEBPACK_IMPORTED_MODULE_9__["default"], {
  href: "/tos.html"
}, "Terms and Conditions"));

const radioButton = ({
  input,
  ...rest
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_RadioGroup__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, input, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
  value: "female",
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], null),
  label: "Female"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
  value: "male",
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Radio__WEBPACK_IMPORTED_MODULE_11__["default"], null),
  label: "Male"
})));

const renderFromHelper = ({
  touched,
  error
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], null, touched && error);
  }
};

const renderSelectField = ({
  input,
  label,
  meta: {
    touched,
    error
  },
  children,
  ...custom
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
  error: touched && error
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
  htmlFor: "age-native-simple"
}, "Age"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Select__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
  native: true
}, input, custom, {
  inputProps: {
    name: "age",
    id: "age-native-simple"
  }
}), children), renderFromHelper({
  touched,
  error
})); // jss:


const styles = theme => ({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly" // position: "relative",
    // marginLeft: "5px",
    // marginRight: "5px",
    // textAlign: "center",

  },
  field: {
    margin: "20px 0px"
  }
});

class RegisterForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      captchaCompleted: false,
      TOSAgreed: false
    };
    this.completeCaptcha = this.completeCaptcha.bind(this);
    this.agreeTOS = this.agreeTOS.bind(this);
  }

  completeCaptcha() {
    this.setState({
      captchaCompleted: true
    });
  }

  agreeTOS(event) {
    this.setState({
      TOSAgreed: event.target.checked
    });
  }

  render() {
    const {
      handleSubmit,
      pristine,
      reset,
      submitting,
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.field
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "email",
      component: renderTextField,
      label: "Email",
      variant: "standard",
      fullWidth: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.field
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "username",
      component: renderTextField,
      label: "Username",
      variant: "standard",
      fullWidth: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.field
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "password1",
      component: renderTextField,
      label: "Password",
      type: "password",
      variant: "standard",
      fullWidth: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.field
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "password2",
      component: renderTextField,
      label: "Confirm Password",
      type: "password",
      variant: "standard",
      fullWidth: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-start"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_form__WEBPACK_IMPORTED_MODULE_1__["Field"], {
      name: "agree",
      component: renderTOS,
      onChange: this.agreeTOS
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "10px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_14__["default"], {
      sitekey: "6LeOU6UUAAAAABSPwdKHf-3ttPz9Ql4AgVTWobXI",
      theme: "dark",
      size: "normal",
      onChange: this.completeCaptcha
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.buttons
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
      variant: "contained",
      color: "primary",
      type: "submit",
      disabled: pristine || submitting || !this.state.captchaCompleted || !this.state.TOSAgreed,
      fullWidth: true
    }, "Create Account")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_15__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "RegisterForm",
  // a unique identifier for this form
  validate
}))(RegisterForm));

/***/ }),

/***/ "./src/shared/components/modals/LoginRegisterModal.jsx":
/*!*************************************************************!*\
  !*** ./src/shared/components/modals/LoginRegisterModal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var shared_components_account_ConnectAccounts_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/account/ConnectAccounts.jsx */ "./src/shared/components/account/ConnectAccounts.jsx");
/* harmony import */ var shared_components_forms_LoginForm_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/forms/LoginForm.jsx */ "./src/shared/components/forms/LoginForm.jsx");
/* harmony import */ var shared_components_forms_RegisterForm_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/forms/RegisterForm.jsx */ "./src/shared/components/forms/RegisterForm.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_esm_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/esm/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_esm_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/esm/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_esm_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/esm/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_esm_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/esm/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_esm_Dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/esm/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_esm_DialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/esm/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var shared_features_client_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! shared/features/client.js */ "./src/shared/features/client.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_20__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// react:
 // react-router:

 // components:



 // material ui:









 // recompose:

 // redux:


 // libs:




 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0px 0px 25px 0px !important"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_17__["device"].tablet]: {
    root: {
      flexDirection: "column"
    }
  },
  tabs: {
    "& button:focus": {
      outline: "none"
    }
  },
  createAnAccount: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "0px 15px"
  },
  connectAnAccount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    minWidth: "25%",
    textAlign: "center",
    marginTop: "15px"
  }
});

class LoginRegisterModal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClose", () => {
      // this.props.history.push("/");
      this.props.history.goBack();
    });

    _defineProperty(this, "handleLoginForm", values => {
      this.props.login({ ...values,
        cb: data => {
          if (data.success) {
            alert("success");
            js_cookie__WEBPACK_IMPORTED_MODULE_18___default.a.set("RemoteGames", data.authToken, {
              expires: 7
            });
            this.props.updateClient({
              authToken: data.authToken,
              loggedIn: true,
              ...data.clientInfo
            }); // this.props.authenticate(data.authToken);

            let values = query_string__WEBPACK_IMPORTED_MODULE_19___default.a.parse(this.props.location.search);

            if (values.verified) {
              this.props.history.replace("/");
            } else {
              this.props.history.goBack();
            }

            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            alert(data.reason);
          }
        }
      });
    });

    _defineProperty(this, "handleRegisterForm", values => {
      this.props.register({ ...values,
        cb: data => {
          if (data.success) {
            alert("Account created! Please login!");
            this.props.history.replace("/login");
          } else {
            alert(data.reason);
          }
        }
      });
    });
  }

  componentDidMount() {
    const values = query_string__WEBPACK_IMPORTED_MODULE_19___default.a.parse(this.props.location.search);

    if (values.verified) {
      setTimeout(() => {
        alert("Email verified.");
      }, 2000);
    }
  }

  render() {
    const {
      classes
    } = this.props;
    let which = this.props.history.location.pathname.indexOf("/login") > -1 ? 0 : 1;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Dialog__WEBPACK_IMPORTED_MODULE_12__["default"], {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_DialogContent__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      position: "static"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h6",
      color: "inherit"
    }, "Welcome"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
      centered: true,
      value: which,
      classes: {
        root: classes.tabs
      },
      variant: "fullWidth",
      indicatorColor: "primary",
      textColor: "primary" // scrollable
      // scrollButtons="auto"
      ,
      onChange: (event, value) => {
        if (value === 0) {
          this.props.history.replace("/login");
        }

        if (value === 1) {
          this.props.history.replace("/register");
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: "Login"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Tab__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: "Register"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/login",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.createAnAccount
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_forms_LoginForm_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onSubmit: this.handleLoginForm
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/register",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.createAnAccount
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_forms_RegisterForm_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onSubmit: this.handleRegisterForm
        }));
      }
    }), !this.props.local && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.connectAnAccount
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], null, "or")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: "15px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(shared_components_account_ConnectAccounts_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showTOS: true
    })))));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateClient: data => {
      dispatch(Object(shared_features_client_js__WEBPACK_IMPORTED_MODULE_16__["updateClient"])(data));
    },
    authenticate: data => {
      dispatch(Object(shared_features_client_js__WEBPACK_IMPORTED_MODULE_16__["authenticate"])(data));
    },
    login: data => {
      dispatch(Object(shared_features_client_js__WEBPACK_IMPORTED_MODULE_16__["login"])(data));
    },
    register: data => {
      dispatch(Object(shared_features_client_js__WEBPACK_IMPORTED_MODULE_16__["register"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_14__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, mapDispatchToProps))(LoginRegisterModal));

/***/ })

}]);
//# sourceMappingURL=20.bundle.js.map
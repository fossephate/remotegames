(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./src/components/ConnectAccounts.jsx":
/*!********************************************!*\
  !*** ./src/components/ConnectAccounts.jsx ***!
  \********************************************/
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
// react:
 // material ui:


 // redux:

 // recompose:

 // jss:

const styles = theme => ({
  root: {
    width: "100%",
    minHeight: "220px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // flex: "1",
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  connectWithButton: {
    display: "flex"
  },
  twitchLogo: {
    width: "60px",
    marginLeft: "10px",
    marginRight: "10px"
  },
  googleLogo: {
    width: "80px"
  },
  youtubeLogo: {
    width: "80px",
    marginLeft: "10px"
  },
  discordLogo: {
    width: "80px",
    marginLeft: "4px"
  }
});

class ConnectAccounts extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      TOSAgreed: false
    };
    this.agreeTOS = this.agreeTOS.bind(this);
  }

  agreeTOS(event) {
    this.setState({
      TOSAgreed: event.target.checked
    });
  }

  connectAccountOrLogin(type) {
    if (window.banned) {
      return;
    }

    let url = window.location.origin + "/8099/auth/" + type + "/";

    if (this.props.authToken != null) {
      url += "?authToken=" + this.props.authToken;
    }

    window.location.href = url;
  }

  render() {
    const {
      classes,
      showTOS
    } = this.props;
    let canDelete = this.props.connectedAccounts.length > 1 || this.props.validUsernames.length > 1;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      className: classes.root,
      elevation: 0
    }, showTOS && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      onChange: this.agreeTOS
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "I have read and agree to the "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      href: "/tos"
    }, "Terms and Conditions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.connectWithButton
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("twitch");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Connect with"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.twitchLogo,
      src: "/images/Twitch_Purple_RGB.png"
    })), this.props.connectedAccounts.includes("twitch") && canDelete && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("twitch");
      }
    }, "X")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.connectWithButton
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("youtube");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Connect with"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.youtubeLogo,
      src: "/images/yt_logo_rgb_light.png"
    })), this.props.connectedAccounts.includes("youtube") && canDelete && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("youtube");
      }
    }, "X")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.connectWithButton
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("google");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      id: "connectWithGoogleText"
    }, "Connect with Google")), this.props.connectedAccounts.includes("google") && canDelete && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("google");
      }
    }, "X")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.connectWithButton
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      fullWidth: true,
      variant: "contained",
      color: "default",
      className: null,
      onClick: () => {
        this.connectAccountOrLogin("discord");
      },
      disabled: !this.state.TOSAgreed && showTOS
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Connect with"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: classes.discordLogo,
      src: "/images/discord_logo.png"
    })), this.props.connectedAccounts.includes("discord") && canDelete && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      color: "secondary",
      onClick: () => {
        this.props.onRemoveAccount("discord");
      }
    }, "X")));
  }

}

const mapStateToProps = state => {
  return {
    authToken: state.client.authToken,
    connectedAccounts: state.client.connectedAccounts,
    validUsernames: state.client.validUsernames
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps))(ConnectAccounts));

/***/ }),

/***/ "./src/components/Forms/LoginForm.jsx":
/*!********************************************!*\
  !*** ./src/components/Forms/LoginForm.jsx ***!
  \********************************************/
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

/***/ "./src/components/Forms/RegisterForm.jsx":
/*!***********************************************!*\
  !*** ./src/components/Forms/RegisterForm.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-recaptcha */ "./node_modules/react-google-recaptcha/lib/esm/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
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
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], _extends({
  label: label,
  placeholder: label,
  error: touched && invalid,
  helperText: touched && error
}, input, custom));

const renderCheckbox = ({
  input,
  label
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    checked: input.value ? true : false,
    onChange: input.onChange
  }),
  label: label
}));

const renderTOS = ({
  input
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
  checked: input.value ? true : false,
  onChange: input.onChange
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "I have read and agree to the "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  href: "/tos.html"
}, "Terms and Conditions"));

const radioButton = ({
  input,
  ...rest
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], _extends({}, input, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
  value: "female",
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], null),
  label: "Female"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControlLabel"], {
  value: "male",
  control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Radio"], null),
  label: "Male"
})));

const renderFromHelper = ({
  touched,
  error
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], null, touched && error);
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
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
  error: touched && error
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputLabel"], {
  htmlFor: "age-native-simple"
}, "Age"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Select"], _extends({
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sitekey: "6LeOU6UUAAAAABSPwdKHf-3ttPz9Ql4AgVTWobXI",
      theme: "dark",
      size: "normal",
      onChange: this.completeCaptcha
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.buttons
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      variant: "contained",
      color: "primary",
      type: "submit",
      disabled: pristine || submitting || !this.state.captchaCompleted || !this.state.TOSAgreed,
      fullWidth: true
    }, "Create Account")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(redux_form__WEBPACK_IMPORTED_MODULE_1__["reduxForm"])({
  form: "RegisterForm",
  // a unique identifier for this form
  validate
}))(RegisterForm));

/***/ }),

/***/ "./src/components/General/MyCheckbox.jsx":
/*!***********************************************!*\
  !*** ./src/components/General/MyCheckbox.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyCheckbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");



class MyCheckbox extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (// <label className="checkbox-inline checkbox-bootstrap checkbox-lg">
      // 	<input onChange={(event) => {this.props.handleChange(event.target.checked)}} type="checkbox" checked={this.props.checked}/>
      // 	<span className="checkbox-placeholder"></span>
      // 	{this.props.text}
      // </label>
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
        control: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onChange: event => {
            this.props.handleChange(event.target.checked);
          },
          type: "checkbox",
          checked: this.props.checked || false,
          color: "primary"
        }),
        label: this.props.text
      })
    );
  }

}

/***/ }),

/***/ "./src/components/Modals/LoginRegisterModal.jsx":
/*!******************************************************!*\
  !*** ./src/components/Modals/LoginRegisterModal.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var src_components_ConnectAccounts_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/ConnectAccounts.jsx */ "./src/components/ConnectAccounts.jsx");
/* harmony import */ var src_components_General_MyCheckbox_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/General/MyCheckbox.jsx */ "./src/components/General/MyCheckbox.jsx");
/* harmony import */ var src_components_Forms_LoginForm_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/Forms/LoginForm.jsx */ "./src/components/Forms/LoginForm.jsx");
/* harmony import */ var src_components_Forms_RegisterForm_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/Forms/RegisterForm.jsx */ "./src/components/Forms/RegisterForm.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/actions/clientInfo.js */ "./src/actions/clientInfo.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/constants/DeviceSizes.js");
// react:
 // react-router:

 // components:




 // material ui:







 // recompose:

 // redux:


 // libs:

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");


 // device sizes:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "0px 0px 25px 0px !important"
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_18__["device"].tablet]: {
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
    this.handleClose = this.handleClose.bind(this);
    this.handleLoginForm = this.handleLoginForm.bind(this);
    this.handleRegisterForm = this.handleRegisterForm.bind(this);
  }

  handleClose() {
    // this.props.history.push("/");
    this.props.history.goBack();
  }

  handleLoginForm(values) {
    this.props.login({ ...values,
      cb: data => {
        if (data.success) {
          alert("success");
          js_cookie__WEBPACK_IMPORTED_MODULE_16___default.a.set("RemoteGames", data.authToken, {
            expires: 7
          });
          this.props.updateClientInfo({
            authToken: data.authToken,
            loggedIn: true,
            ...data.clientInfo
          }); // this.props.authenticate(data.authToken);

          let values = query_string__WEBPACK_IMPORTED_MODULE_17___default.a.parse(this.props.location.search);

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
  }

  handleRegisterForm(values) {
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
  }

  componentDidMount() {
    const values = query_string__WEBPACK_IMPORTED_MODULE_17___default.a.parse(this.props.location.search);

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
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_11__["default"], {
      open: true,
      scroll: "body",
      maxWidth: "sm",
      fullWidth: true,
      onClose: this.handleClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["AppBar"], {
      position: "static"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
      variant: "h6",
      color: "inherit"
    }, "Welcome"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "Login"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_9__["default"], {
      label: "Register"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/login",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.createAnAccount
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Forms_LoginForm_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onSubmit: this.handleLoginForm
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/register",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.createAnAccount
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_Forms_RegisterForm_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onSubmit: this.handleRegisterForm
        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.connectAnAccount
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], null, "or")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        marginTop: "15px"
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(src_components_ConnectAccounts_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      showTOS: true
    })))));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateClientInfo: data => {
      dispatch(Object(src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_15__["updateClientInfo"])(data));
    },
    authenticate: data => {
      dispatch(Object(src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_15__["authenticate"])(data));
    },
    login: data => {
      dispatch(Object(src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_15__["login"])(data));
    },
    register: data => {
      dispatch(Object(src_actions_clientInfo_js__WEBPACK_IMPORTED_MODULE_15__["register"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_13__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapStateToProps, mapDispatchToProps))(LoginRegisterModal));

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
//# sourceMappingURL=13.bundle.js.map
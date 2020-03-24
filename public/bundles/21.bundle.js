(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/FAQ.jsx":
/*!*********************!*\
  !*** ./src/FAQ.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/esm/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/esm/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/esm/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/esm/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/esm/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/libs/utils.js */ "./src/shared/libs/utils.js");
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
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "10px"
  },
  QA: {
    width: "99%",
    padding: "2%",
    marginBottom: "40px"
  },
  commands: {
    width: "99%",
    padding: "2%"
  },
  subCommands: {
    padding: "10px",
    marginTop: "20px",
    marginBottom: "20px"
  },
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_9__["device"].laptop]: {
    container: {
      flexDirection: "row"
    },
    QA: {
      width: "49%",
      marginBottom: "0"
    },
    commands: {
      width: "49%"
    }
  }
});

class FAQ extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 0,
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 3,
      className: classes.main
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "contained",
      className: classes.back,
      onClick: () => {
        this.props.history.push("/");
      }
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Frequently Asked Questions and Commands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 0,
      className: classes.container
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 3,
      className: classes.QA
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "FAQ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: How does this work?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: If you're looking for looking for the source code, use the \"!source\" command, if you just want the TLDR: I use a capture card to get the Nintendo Switch's screen, I use a micro controller (Arduino) that acts like a Pro Controller, and use a Python script to send it input. If you have any other questions, just ask @fosse on the discord server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: Why can't I use the Plus/Home/Capture button?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: It's reserved for special roles, it's setup like this to prevent abuse.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: What's the friend code for the Twitch account?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: SW-4621-9617-9306.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: How do I change the game?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: Use \"!goto [game]\" to switch between games, for a list of games, use \"!games\".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: Something is wrong / broken, what do I do?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: If someone isn't there to help on stream, contact a mod or @fosse on the discord server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: I want a longer turn! xxx is too short."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: If you subscribe on twitch and use it to login, your turn length is doubled.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: Do the same commands used on the stream/site work on this server as well?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0A: No, they don't, they're only meant for the stream/site.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 3,
      className: classes.commands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Stream Commands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 2,
      className: classes.subCommands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Commands for Everyone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!commands"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Gives you a list of commands.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!goto [game]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0use without brackets to switch games, use !games for a list of games.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!games or !gamelist or !goto or !xboxgames or !xboxgamelist"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Shows the list of games currently available (switch or xbox).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!playing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Shows who is currently playing.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!source"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Links you to the source code for the project.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!site"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Links you to https://remotegames.io.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!discord"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Links you to the discord invite.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!fc"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Gives you the friend code to the Twitch account.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!restart1 or !restart2 or !restart3"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0refreshes the corresponding stream.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![mod | plus | sub | ban]list"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0(no brackets) lists people in the corresponding group.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 2,
      className: classes.subCommands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Commands for Plus level users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Plus level users can use the Plus / Start button in games.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!lock"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Is there a disaster? Maybe someone is being bad and is about to nuke the Switch? Type !lock to lock the controls until a mod can fix it.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!fixcontrollers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0If the controller order gets messed up, use this command to fix it.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!rr [user - optional]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Try it and see what happens!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_Paper__WEBPACK_IMPORTED_MODULE_2__["default"], {
      elevation: 2,
      className: classes.subCommands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Commands for Mods"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_List__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Mods can do basically everything, including Home / Capture")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!restartscript"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Restarts the python script.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!restartserver"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Restarts the server, you shouldn't have to use this.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![give | remove]plus [user]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Gives or removes plus permission from [user].")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![temp | perma]ban [user]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Temporarily or permanently bans [user].")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![disable | enable]chat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Disables or enables Chat commands.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![disable | enable]goto"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Disables or enables !goto.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![setturnlength | setforfeitlength] [time in seconds]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Change the amount of time for turns and forfeits.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!lock or !unlock"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0Lock or unlock the Switch if it is locked.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!forcegoto or !xboxforcegoto"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_esm_ListItemText__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\xA0\xA0\xA0\xA0!goto but without the democracy.")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The games, consoles, and server costs to run this project are primarily funded through", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps))(FAQ));

/***/ }),

/***/ "./src/shared/libs/utils.js":
/*!**********************************!*\
  !*** ./src/shared/libs/utils.js ***!
  \**********************************/
/*! exports provided: getCookie, setCookie, clamp, round, msToTime, toggleFullscreen, setToPercentParent, wait, mathZoom, normalizeVector, abs, deleteAllCookies, fixedLengthString, getStickString, getAverage, pick, interpolateColor, interpolateColors, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return msToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullscreen", function() { return toggleFullscreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToPercentParent", function() { return setToPercentParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mathZoom", function() { return mathZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeVector", function() { return normalizeVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllCookies", function() { return deleteAllCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixedLengthString", function() { return fixedLengthString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStickString", function() { return getStickString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAverage", function() { return getAverage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateColor", function() { return interpolateColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateColors", function() { return interpolateColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
function getCookie(name) {
  let dc = document.cookie;
  let prefix = name + "=";
  let begin = dc.indexOf("; " + prefix);
  let end;

  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin !== 0) return null;
  } else {
    begin += 2;
    end = document.cookie.indexOf(";", begin);

    if (end == -1) {
      end = dc.length;
    }
  } // because unescape has been deprecated, replaced with decodeURI
  //return unescape(dc.substring(begin + prefix.length, end));


  return decodeURI(dc.substring(begin + prefix.length, end));
}
function setCookie(name, value, seconds) {
  let expires = "";

  if (seconds) {
    let date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}
function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
function msToTime(duration) {
  // 	var milliseconds = parseInt((duration % 1000) / 100);
  let milliseconds = parseInt(duration / 1000 % 60 % 1 * 1000);
  let seconds = parseInt(duration / 1000 % 60);
  let minutes = parseInt(duration / (1000 * 60) % 60);
  let hours = parseInt(duration / (1000 * 60 * 60) % 24);
  hours = hours < 10 ? "0" + hours : hours;

  if (hours.length == 2 || hours.length == 3 && hours[0] == "0") {
    hours = hours.substr(1);
  }

  minutes = minutes < 10 ? "0" + minutes : minutes;

  if (minutes.length == 3 || minutes.length == 4) {
    minutes = minutes.substr(1);
  }

  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (seconds.length == 3 || seconds.length == 4) {
    seconds = seconds.substr(1);
  } //seconds = seconds.replaceAll("-", "");


  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  let time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  time = time.replaceAll("-", ""); // remove negative signs

  return time;
}
function toggleFullscreen(elem) {
  // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
  if (document.fullScreenElement !== undefined && document.fullScreenElement === null || document.msFullscreenElement !== undefined && document.msFullscreenElement === null || document.mozFullScreen !== undefined && !document.mozFullScreen || document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen) {
    if (elem.requestFullScreen) {
      elem.requestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}
function setToPercentParent(elem, percent) {
  $(elem).height(0);
  let parentHeight = $(elem).parent().height();
  let newHeight = percent / 100 * parentHeight;
  $(elem).height(newHeight);
} // like sleep, but worse:

function wait(ms) {
  var start = new Date().getTime();
  var end = start;

  while (end < start + ms) {
    end = new Date().getTime();
  }
} // brings number closer to target by accel

function mathZoom(current, target, accel) {
  if (current == target) {
    return current;
  }

  if (Math.abs(current - target) < accel) {
    return target;
  }

  if (current < target) {
    return current + accel;
  } else {
    return current - accel;
  }
}
function normalizeVector(vector, scale) {
  let norm = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

  if (norm !== 0) {
    vector.x = scale * vector.x / norm;
    vector.y = scale * vector.y / norm;
  }

  return vector;
}
function abs(n) {
  return Math.abs(n);
} // delete all cookies:

function deleteAllCookies() {
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    let eqPos = cookie.indexOf("=");
    let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
function fixedLengthString(string, pad, length) {
  string = string + "";

  while (string.length < length) {
    string = pad + string;
  }

  return string;
}
function getStickString(num) {
  // round to nearest tenth:
  num = (Math.round((num + 1) * 10) / 10).toFixed(2);
  let n = num * 10;

  if (n == 0) {
    return "900";
  }

  if (n == 10) {
    return "090";
  }

  if (n == 20) {
    return "009";
  }

  if (n < 10) {
    n = 10 - n;
    n = 90 + 90 * n;
  } else {
    n = (20 - n) * 9;
  }

  return String(n).padStart(3, "0");
}
function getAverage(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
function pick(...props) {
  return o => props.reduce((a, e) => ({ ...a,
    [e]: o[e]
  }), {});
}
function interpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }

  let result = color1.slice();

  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }

  return result;
}
function interpolateColors(color1, color2, steps) {
  let stepFactor = 1 / (steps - 1),
      interpolatedColorArray = [];
  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for (let i = 0; i < steps; i++) {
    interpolatedColorArray.push(interpolateColor(color1, color2, stepFactor * i));
  }

  return interpolatedColorArray;
}
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
//# sourceMappingURL=21.bundle.js.map
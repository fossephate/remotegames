(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

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
  [shared_libs_utils_js__WEBPACK_IMPORTED_MODULE_5__["device"].laptop]: {
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
    }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Frequently Asked Questions and Commands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 0,
      className: classes.container
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 3,
      className: classes.QA
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "FAQ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: How does this work?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: If you're looking for looking for the source code, use the \"!source\" command, if you just want the TLDR: I use a capture card to get the Nintendo Switch's screen, I use a micro controller (Arduino) that acts like a Pro Controller, and use a Python script to send it input. If you have any other questions, just ask @fosse on the discord server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: Why can't I use the Plus/Home/Capture button?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: It's reserved for special roles, it's setup like this to prevent abuse.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: What's the friend code for the Twitch account?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: SW-4621-9617-9306.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: How do I change the game?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: Use \"!goto [game]\" to switch between games, for a list of games, use \"!games\".")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: Something is wrong / broken, what do I do?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: If someone isn't there to help on stream, contact a mod or @fosse on the discord server.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: I want a longer turn! xxx is too short."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: If you subscribe on twitch and use it to login, your turn length is doubled.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Q: Do the same commands used on the stream/site work on this server as well?"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0A: No, they don't, they're only meant for the stream/site.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 3,
      className: classes.commands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Stream Commands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 2,
      className: classes.subCommands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Commands for Everyone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!commands"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Gives you a list of commands.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!goto [game]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0use without brackets to switch games, use !games for a list of games.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!games or !gamelist or !goto or !xboxgames or !xboxgamelist"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Shows the list of games currently available (switch or xbox).")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!playing"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Shows who is currently playing.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!source"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Links you to the source code for the project.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!site"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Links you to https://remotegames.io.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!discord"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Links you to the discord invite.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!fc"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Gives you the friend code to the Twitch account.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!restart1 or !restart2 or !restart3"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0refreshes the corresponding stream.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![mod | plus | sub | ban]list"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0(no brackets) lists people in the corresponding group.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 2,
      className: classes.subCommands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Commands for Plus level users"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "Plus level users can use the Plus / Start button in games.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!lock"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Is there a disaster? Maybe someone is being bad and is about to nuke the Switch? Type !lock to lock the controls until a mod can fix it.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!fixcontrollers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0If the controller order gets messed up, use this command to fix it.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!rr [user - optional]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Try it and see what happens!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      elevation: 2,
      className: classes.subCommands
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Commands for Mods"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "Mods can do basically everything, including Home / Capture")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!restartscript"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Restarts the python script.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!restartserver"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Restarts the server, you shouldn't have to use this.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![give | remove]plus [user]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Gives or removes plus permission from [user].")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![temp | perma]ban [user]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Temporarily or permanently bans [user].")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![disable | enable]chat"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Disables or enables Chat commands.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![disable | enable]goto"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Disables or enables !goto.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "![setturnlength | setforfeitlength] [time in seconds]"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Change the amount of time for turns and forfeits.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!lock or !unlock"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0Lock or unlock the Switch if it is locked.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "!forcegoto or !xboxforcegoto"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], null, "\xA0\xA0\xA0\xA0!goto but without the democracy.")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The games, consoles, and server costs to run this project are primarily funded through", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_4__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(FAQ));

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
//# sourceMappingURL=15.bundle.js.map
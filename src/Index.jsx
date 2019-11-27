// react:
import React, { Component } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// modals:
import LoginRegisterModal from "src/components/Modals/LoginRegisterModal.jsx";
import AccountModal from "src/components/Modals/AccountModal.jsx";
// import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// components:
import About from "src/About.jsx";
import FAQ from "src/FAQ.jsx";
import ToS from "src/ToS.jsx";
import Privacy from "src/Privacy.jsx";
// import CurrentPlayers from "src/CurrentPlayers.jsx";
import Streams from "src/Streams.jsx";
import Stream from "src/Stream.jsx";

// redux:
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

// actions:
import { updateSettings } from "src/actions/settings.js";
import { updateClientInfo } from "src/actions/clientInfo.js";

// redux-saga:
import createSagaMiddleware from "redux-saga";
import handleAccountActions from "src/sagas/account/";
import handleAccountEvents from "src/sockets/account/";

// libs:
import socketio from "socket.io-client";
import localforage from "localforage";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preloadedState = {
	// account: {
	//
	// },

	stream: {
		info: {
			streamType: "mpeg2",
		},
		chat: {
			messages: [],
			userids: [],
		},
		players: {
			controlQueues: [],
			turnTimers: [],
			controllerStates: [],
			count: 8,
		},
		time: {
			server: 0, // server time (in ms)
			lastServerUpdate: 0, // when it was last updated (in ms)
			ping: 0,
		},
		accountMap: {},
		waitlist: [],
	},

	streams: {
		streamList: [],
	},

	clientInfo: {
		authToken: null,
		loggedIn: false,
		userid: null,
		username: "???",
		connectedAccounts: [],
		validUsernames: [],
		usernameIndex: 0,
		waitlisted: false,
		timePlayed: 0,
		emailVerified: false,
		roles: {},
	},

	settings: {
		// general: {
		// 	keyboardControls: true,
		// 	controllerControls: true,
		// 	mouseControls: false,
		// 	touchControls: false,
		// 	controllerView: true,
		// 	fullscreen: false,
		// 	largescreen: false,
		// 	audioThree: false,
		// 	analogStickMode: false,
		// 	currentPlayer: 0,
		// 	volume: 50,
		// 	theme: "dark",
		// },

		keyboardControls: true,
		controllerControls: true,
		mouseControls: false,
		touchControls: false,
		realKeyboardMouse: false,
		controllerView: true,
		fullscreen: false,
		largescreen: false,
		audioThree: false,
		analogStickMode: false,
		dpadSwap: false,
		TDSConfig: false,

		currentPlayer: 0,
		streamNumber: 0,
		volume: 0,
		theme: "dark",
	},

	form: {},
};

for (let i = 0; i < preloadedState.stream.players.count; i++) {
	preloadedState.stream.players.turnTimers.push({
		turnStartTime: 0,
		forfeitStartTime: 0,
		turnLength: 0,
		forfeitLength: 0,
	});
	preloadedState.stream.players.controlQueues.push([]);
	preloadedState.stream.players.controllerStates.push({
		btns: 0,
		axes: [0, 0, 0, 0, 0, 0],
	});
}

function loadState() {
	// Get stored preferences
	localforage.getItem("settings").then((value) => {
		let settings = {};
		// If they exist, write them
		if (value) {
			settings = Object.assign({}, JSON.parse(value));
			settings.streamNumber = 0; // force streamNumber to be 0 bc things rely on it loading first
			settings.currentPlayer = 0; // same as above
		}

		store.dispatch(updateSettings({ ...settings }));

		// check if banned:
		localforage.getItem("banned").then((value) => {
			if (value) {
				store.dispatch(updateClientInfo({ isBanned: true }));
				window.banned = true;
			} else {
				window.banned = false;
			}
		});
	});
}

loadState();

// window.onbeforeunload = () => {
// 	console.log("saving settings");
// 	localforage.setItem("settings", JSON.stringify(this.props.settings));
// 	return null;
// };

const store = createStore(
	rootReducer,
	preloadedState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
);

let accountConnection = socketio("https://remotegames.io", {
	path: "/8099/socket.io",
	transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
});

// listen to events and dispatch actions:
handleAccountEvents(accountConnection, store.dispatch);

// handle outgoing events & listen to actions:
// and maybe dispatch more actions:
sagaMiddleware.run(handleAccountActions, {
	socket: accountConnection,
	dispatch: store.dispatch,
});

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: createMuiTheme({}),
		};

		this.switchTheme = this.switchTheme.bind(this);

		let currentValue = null;
		const unsubscribe = store.subscribe(() => {
			let previousValue = currentValue;
			currentValue = store.getState().settings.theme;
			if (previousValue !== currentValue) {
				console.log("theme changed");
				this.switchTheme(currentValue);
				this.setState({});
			}
		});
	}

	componentDidMount() {
		// store.dispatch(updateSettings({ theme: "spooky" }));
	}

	switchTheme(themeName) {
		let theme = {};
		switch (themeName) {
			case "light":
				theme = {
					palette: {
						type: "light",
						primary: {
							main: "#2181ff", // #2181ff
						},
						secondary: {
							main: "#ff3b3b",
						},
						background: {
							paper: "#fafafa",
						},
					},
				};
				break;
			case "dark":
				theme = {
					palette: {
						type: "dark",
						primary: {
							main: "#2181ff", // #2181ff
						},
						secondary: {
							main: "#ff3b3b",
						},
						background: {
							paper: "#424242",
						},
					},
				};
				break;
			case "spooky":
				theme = {
					palette: {
						type: "dark",
						primary: {
							main: "#ff7930",
						},
						secondary: {
							main: "#000",
							// main: "#a73ae7",
						},
						background: {
							paper: "#2f2f2f",
						},
					},
				};
				break;
		}
		// this.theme = createMuiTheme(this.theme);
		this.setState({ theme: createMuiTheme(theme) });
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		console.log("re-rendering index");

		if (/^\/download/.test(window.location.pathname)) {
			window.location.href = "https://remotegames.io/8099/download/";
			window.history.replaceState("", "", "/");
		}

		return (
			<Provider store={store}>
				<ThemeProvider theme={this.state.theme}>
					<CssBaseline />
					<BrowserRouter>
						{/* selects the first matching path: */}
						<Switch>
							<Route
								path="/about"
								render={(props) => {
									return <About {...props} />;
								}}
							/>
							<Route
								path="/FAQ"
								render={(props) => {
									return <FAQ {...props} />;
								}}
							/>
							<Route
								path="/privacy"
								render={(props) => {
									return <Privacy {...props} />;
								}}
							/>
							<Route
								path="/tos"
								render={(props) => {
									return <ToS {...props} />;
								}}
							/>
							{/* <Route
								path="/CurrentPlayers"
								render={(props) => {
									return <CurrentPlayers {...props} />;
								}}
							/> */}
							<Route
								path="/streams"
								render={(props) => {
									return <Streams {...props} accountConnection={accountConnection} />;
								}}
							/>
							<Route
								// path="/s/:username"
								path="/u/:username"
								render={(props) => {
									return (
										<Stream
											{...props}
											store={store}
											sagaMiddleware={sagaMiddleware}
											accountConnection={accountConnection}
										/>
									);
								}}
							/>
							<Route
								path="/(login|register)"
								render={(props) => {
									return <LoginRegisterModal {...props} history={this.props.history} />;
								}}
							/>
							<Route
								path="/account"
								render={(props) => {
									return <AccountModal {...props} history={this.props.history} />;
								}}
							/>
							{/* <Route
								path="/remap"
								render={(props) => {
									return <InputMapperModal {...props} inputHandler={this.inputHandler} />;
								}}
							/> */}
							<Route
								path="/(s|remap)/:username?"
								render={(props) => {
									return (
										<Stream
											{...props}
											store={store}
											sagaMiddleware={sagaMiddleware}
											accountConnection={accountConnection}
										/>
									);
								}}
							/>
							// order matters here, can't do exact path or /login and /register break:
							<Route
								path="/"
								render={(props) => {
									return (
										<Streams
											{...props}
											store={store}
											accountConnection={accountConnection}
											sagaMiddleware={sagaMiddleware}
										/>
									);
								}}
							/>
						</Switch>
					</BrowserRouter>
				</ThemeProvider>
			</Provider>
		);
	}
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));

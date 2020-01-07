// react:
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// modals:
// import LoginRegisterModal from "components/Modals/LoginRegisterModal.jsx";
// import AccountModal from "components/Modals/AccountModal.jsx";
// import InputMapperModal from "components/Modals/InputMapperModal.jsx";
const LoginRegisterModal = lazy(() => import("components/Modals/LoginRegisterModal.jsx"));
const AccountModal = lazy(() => import("components/Modals/AccountModal.jsx"));
// const InputMapperModal = lazy(() => import("components/Modals/InputMapperModal.jsx"));

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// components:
import Loading from "components/General/Loading.jsx";
// import About from "src/About.jsx";
// import FAQ from "src/FAQ.jsx";
// import ToS from "src/ToS.jsx";
// import Privacy from "src/Privacy.jsx";

// import CurrentPlayers from "src/CurrentPlayers.jsx";
// import Streams from "src/Streams.jsx";
// import Stream from "src/Stream.jsx";

const About = lazy(() => import("src/About.jsx"));
const FAQ = lazy(() => import("src/FAQ.jsx"));
const ToS = lazy(() => import("src/ToS.jsx"));
const Privacy = lazy(() => import("src/Privacy.jsx"));
const Streams = lazy(() => import("src/Streams.jsx"));
const Stream = lazy(() => import("src/Stream.jsx"));

// redux:
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

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

	client: {
		authToken: null,
		loggedIn: false,
		hostAuthed: false,
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
		keyboardControls: true,
		controllerControls: true,
		mouseControls: false,
		touchControls: false,
		mobileMode: false,
		realKeyboardMouse: false,
		controllerView: true,
		fullscreen: false,
		largescreen: false,
		hideChat: false,
		hideNav: false,
		audioThree: false,
		analogStickMode: false,
		dpadSwap: false,
		TDSConfig: false,

		currentPlayer: 0,
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

const store = configureStore({
	reducer: rootReducer,
	preloadedState: preloadedState,
	middleware: [sagaMiddleware],
});

window.onbeforeunload = () => {
	console.log("saving settings");
	localforage.setItem("settings", JSON.stringify(store.getState().settings));
	return null;
};

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
						{/* <Switch> */}
						<Suspense fallback={<Loading />}>
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
								{/* </Suspense> */}
								{/* <Route
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
							/> */}
								{/* </Suspense> */}

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
								path="/controls"
								render={(props) => {
									return <InputMapperModal {...props} inputHandler={this.inputHandler} />;
								}}
							/> */}
								{/* <Suspense fallback={<Loading />}> */}
								<Route
									path="/(s|controls|settings)/:username?"
									// path="/s/:username?"
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
								{/* </Suspense> */}
								{/* order matters here, can't do exact path or /login and /register break: */}
								{/* <Suspense fallback={<Loading />}> */}
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
								{/* </Suspense> */}
							</Switch>
						</Suspense>
					</BrowserRouter>
				</ThemeProvider>
			</Provider>
		);
	}
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));

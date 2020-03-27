// react:
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// modals:
// import LoginRegisterModal from "components/modals/LoginRegisterModal.jsx";
// import AccountModal from "components/modals/AccountModal.jsx";
// import InputMapperModal from "components/modals/InputMapperModal.jsx";
const LoginRegisterModal = lazy(() =>
	import("shared/components/modals/LoginRegisterModal.jsx"),
);
const AccountModal = lazy(() => import("shared/components/modals/AccountModal.jsx"));
// const InputMapperModal = lazy(() => import("components/modals/InputMapperModal.jsx"));

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// notistack:
import { SnackbarProvider } from "notistack";

// components:
import Loading from "shared/components/general/Loading.jsx";

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
import updateClient from "shared/features/client.js";

// redux-saga:
import createSagaMiddleware from "redux-saga";
import handleAccountActions from "src/sagas/account/index.js";
import handleAccountEvents from "src/sockets/account/index.js";

// libs:
import socketio from "socket.io-client";
import localforage from "localforage";

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: this.getTheme("dark"),
		};

		let preloadedState = {
			stream: {
				info: {
					online: false,
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

		this.sagaMiddleware = createSagaMiddleware();

		this.store = configureStore({
			reducer: rootReducer,
			preloadedState: preloadedState,
			middleware: [this.sagaMiddleware],
		});

		this.accountConnection = socketio("https://remotegames.io", {
			path: "/8099/socket.io",
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		// listen to events and dispatch actions:
		handleAccountEvents(this.accountConnection, this.store.dispatch);

		// handle outgoing events & listen to actions:
		// and maybe dispatch more actions:
		this.sagaMiddleware.run(handleAccountActions, {
			socket: this.accountConnection,
			dispatch: this.store.dispatch,
		});

		let currentValue = null;
		this.store.subscribe(() => {
			let previousValue = currentValue;
			currentValue = this.store.getState().settings.theme;
			if (previousValue !== currentValue && previousValue !== null) {
				this.setState({ theme: this.getTheme(currentValue) });
			}
		});

		window.onbeforeunload = () => {
			console.log("saving settings");
			localforage.setItem("settings", JSON.stringify(this.store.getState().settings));
			return null;
		};
	}

	componentDidMount() {
		// store.dispatch(updateSettings({ theme: "spooky" }));
	}

	loadState = () => {
		// Get stored preferences
		localforage.getItem("settings").then((value) => {
			let settings = {};
			// if they exist, write them
			if (value) {
				settings = Object.assign({}, JSON.parse(value));
				settings.currentPlayer = 0; // same as above
				settings.largescreen = false;
				settings.fullscreen = false;
				settings.mobileMode = false;
				settings.hideChat = false;
				settings.hideNav = false;
			}
			store.dispatch(updateSettings({ ...settings }));
			// check if banned:
			localforage.getItem("banned").then((value) => {
				if (value) {
					this.store.dispatch(updateClient({ isBanned: true }));
					window.banned = true;
				} else {
					window.banned = false;
				}
			});
		});
	};

	getTheme = (themeName) => {
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
			case "ogdark":
				theme = {
					palette: {
						type: "dark",
						primary: {
							main: "#2181ff",
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
			case "dark":
				theme = {
					palette: {
						type: "dark",
						primary: {
							main: "#0d52a9",
						},
						secondary: {
							// main: "#a90d0d",
							main: "#404040",
						},
						background: {
							paper: "#202020",
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
		return createMuiTheme(theme);
	};

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
			<Provider store={this.store}>
				<ThemeProvider theme={this.state.theme}>
					<SnackbarProvider maxSnack={3}>
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
											return (
												<LoginRegisterModal {...props} history={this.props.history} />
											);
										}}
									/>
									<Route
										path="/account"
										render={(props) => {
											return <AccountModal {...props} history={this.props.history} />;
										}}
									/>
									<Route
										path="/(s|controls|settings)/:username?"
										// path="/s/:username?"
										render={(props) => {
											return (
												<Stream
													{...props}
													store={this.store}
													sagaMiddleware={this.sagaMiddleware}
													accountConnection={this.accountConnection}
												/>
											);
										}}
									/>
									{/* order matters here, can't do exact path or /login and /register break: */}
									<Route
										path="/"
										render={(props) => {
											return (
												<Streams
													{...props}
													store={this.store}
													accountConnection={this.accountConnection}
													sagaMiddleware={this.sagaMiddleware}
												/>
											);
										}}
									/>
								</Switch>
							</Suspense>
						</BrowserRouter>
					</SnackbarProvider>
				</ThemeProvider>
			</Provider>
		);
	}
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));

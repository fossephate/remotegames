// react:
import React, {
	Component
} from "react";
import ReactDOM from "react-dom";
// react-router:
import {
	Router,
	Route,
	Switch
} from "react-router";
import { HashRouter, BrowserRouter } from "react-router-dom";

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// redux:
import {
	Provider
} from "react-redux";
import {
	combineReducers,
	createStore,
	applyMiddleware,
	compose
} from "redux";
import rootReducer from "./reducers";

// redux-saga:
import createSagaMiddleware from "redux-saga";
import handleActions from "src/sagas";
import handleEvents from "src/sockets";

// libs:
import io from "socket.io-client";
import merge from "deepmerge";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let preloadedState = {

	chat: {
		messages: [],
		userids: [],
	},
	waitlist: [],
	viewers: [
		[],
		[],
		[],
		[],
		[],
	],
	players: {
		controlQueues: [
			[],
			[],
			[],
			[],
			[],
		],
		turnTimers: [{
				turnStartTime: 0,
				forfeitStartTime: 0,
				turnLength: 0,
				forfeitLength: 0,
			},
			{
				turnStartTime: 0,
				forfeitStartTime: 0,
				turnLength: 0,
				forfeitLength: 0,
			},
			{
				turnStartTime: 0,
				forfeitStartTime: 0,
				turnLength: 0,
				forfeitLength: 0,
			},
			{
				turnStartTime: 0,
				forfeitStartTime: 0,
				turnLength: 0,
				forfeitLength: 0,
			},
			{
				turnStartTime: 0,
				forfeitStartTime: 0,
				turnLength: 0,
				forfeitLength: 0,
			},
		],
		controllerStates: [
			{
				btns: 0,
				axes: [128, 128, 128, 128, 0, 0],
			},
			{
				btns: 0,
				axes: [128, 128, 128, 128, 0, 0],
			},
			{
				btns: 0,
				axes: [128, 128, 128, 128, 0, 0],
			},
			{
				btns: 0,
				axes: [128, 128, 128, 128, 0, 0],
			},
			{
				btns: 0,
				axes: [128, 128, 128, 128, 0, 0],
			},
		],
	},
	players2: [{
		controlQueue: [],
		controllerState: {
			btns: 0,
			axes: [128, 128, 128, 128, 0, 0],
		},
		turnTimers: {
			turnStartTime: 0,
			forfeitStartTime: 0,
			turnLength: 0,
			forfeitLength: 0,
		},
	}, ],
	userInfo: {
		authToken: null,
		loggedIn: false,
		userid: "",
		username: "???",
		connectedAccounts: [],
		validUsernames: [],
		usernameIndex: 0,
		// banTime: 0,
		// currentPlayer: 0,
		waitlisted: false,
	},

	usernameMap: {},

	settings: {

		streamNumber: 0,

		volume: 50,

		keyboardControls: true,
		controllerControls: true,
		mouseControls: false,
		touchControls: false,
		controllerView: true,
		fullscreen: false,
		largescreen: false,

		audioThree: false,
		analogStickMode: false,
		dpadSwap: false,
		TDSConfig: false,

		deadzone: 50,

		theme: "dark",

		currentPlayer: 0,

		modal: null,
	},

	time: {
		server: 0, // server time (in ms)
		lastServerUpdate: 0, // when it was last updated (in ms)
	}
};

const store = createStore(
	rootReducer, preloadedState,
	composeEnhancers(
		applyMiddleware(sagaMiddleware),
	)
);

let socket = io("https://twitchplaysnintendoswitch.com", {
	path: "/8100/socket.io",
	transports: ["websocket"],
});

// listen to events and dispatch actions:
handleEvents(socket, store.dispatch);

// handle outgoing events & listen to actions:
// and maybe dispatch more actions:
sagaMiddleware.run(handleActions, {
	socket,
});


// components:
import App from "src/App.jsx";
import About from "src/About.jsx";
import FAQ from "src/FAQ.jsx";


class Index extends Component {

	constructor(props) {
		super(props);
		this.getTheme = this.getTheme.bind(this);
	}

	getTheme() {

		let themeName = store.getState().settings.theme;

		// default:
		let theme = {
			typography: {
				useNextVariants: true,
			},
			palette: {
				type: "dark",
				primary: {
					main: "#2181ff", // #2181ff
				},
				secondary: {
					main: "#ff3b3b",
				}
			}
		};
		switch (themeName) {
			case "light":
				theme = merge(theme, {
					palette: {
						type: "light",
						// primary: {
						// 	main: "#bf4040",
						// },
						// secondary: {
						// 	main: "#bf4040",
						// }
					}
				});
				break;
			case "dark":
				theme = merge(theme, {
					palette: {
						type: "dark",
						// primary: {
						// 	main: "#bf4040",
						// },
						// secondary: {
						// 	main: "#bf4040",
						// },
					}
				});
				break;
			case "mint":
				theme = merge(theme, {
					palette: {
						type: "light",
						primary: {
							main: "#16d0f4",
						},
						secondary: {
							main: "#24d2ac",
						},
						background: {
							paper: "#5ae097",
						},
					}
				});
				break;
		}
		return createMuiTheme(theme);
	}

	render() {

		return (
			<Provider store={store}>
				<MuiThemeProvider theme={this.getTheme()}>
					<CssBaseline/>
					<BrowserRouter>
						<Switch>

							<Route path="/" render={(props) => {
								return <App {...props} socket={socket}/>;
							}}/>

							<Route path="/about" render={(props) => {
								return <About {...props}/>;
							}}/>
							//
							// <Route path="/FAQ">
							// 	<FAQ/>
							// </Route>

						</Switch>
					</BrowserRouter>
				</MuiThemeProvider>
			</Provider>
		);
	}
}


ReactDOM.render(<Index/>, document.getElementById("root"));

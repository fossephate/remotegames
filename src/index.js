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
		],
		controllerStates: [
			{
				btns: 0,
				sticks: [[128, 128], [128, 128]],
			},
			{
				btns: 0,
				sticks: [[128, 128], [128, 128]],
			},
			{
				btns: 0,
				sticks: [[128, 128], [128, 128]],
			},
			{
				btns: 0,
				sticks: [[128, 128], [128, 128]],
			},
		],
	},
	players2: [{
		controlQueue: [],
		controllerState: {
			btns: 0,
			sticks: [[128, 128], [128, 128]],
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

		volume: 0,

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
	socket
});


// components:
import App from "src/components/App.jsx";


export default class Index extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Provider store={store}>
				{/* there may be a better way to pass store.dispatch, but for now it's probably not that big of a problem: */}
				<App dispatch={store.dispatch} socket={socket}/>
			</Provider>
		);
	}
}


ReactDOM.render(<Index/>, document.getElementById("root"));

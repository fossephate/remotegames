// react:
import React, { Component } from "react";
import ReactDOM from "react-dom";

// redux:
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

// redux-saga:
import createSagaMiddleware from "redux-saga";
import handleActions from "src/sagas";
import handleEvents from "src/sockets";

// libs:
import io from "socket.io-client";


// const allReducers = combineReducers({
// 	myReducer: MyReducer,
// });

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(sagaMiddleware),
	)
);

let socket = io("https://twitchplaysnintendoswitch.com", {
	path: "/8110/socket.io",
	transports: ["websocket"],
});

// listen to events and dispatch actions:
handleEvents(socket, store.dispatch);

// handle outgoing events & listen to actions:
// and maybe dispatch more actions:
sagaMiddleware.run(handleActions, { socket });


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
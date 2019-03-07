// react:
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// react-router:
import {
	Router,
	Route,
	Switch,
	withRouter,
} from "react-router";

// redux:
import { connect } from "react-redux";

// main components:
import LoginArea from "src/components/LoginArea.jsx";
import NavTabs from "src/components/NavTabs.jsx";
import Picture from "src/components/Picture.jsx";
import Chat from "src/components/Chat/Chat.jsx";

// loading circle:
// import LoadingCircle from "src/components/LoadingCircle.jsx";

// import CheckboxSettings from "src/components/CheckboxSettings.jsx";

// components:
// import PlayerInfo from "src/components/PlayerInfo.jsx";
// import Waitlist from "src/components/Waitlist.jsx";
// import ThemeSelector from "src/components/ThemeSelector.jsx";

// secondary components:

// modals:
// import LoginModal from "src/components/Modals/LoginModal.jsx";
// import RegisterModal from "src/components/Modals/RegisterModal.jsx";
// import AccountModal from "src/components/Modals/AccountModal.jsx";
// import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";


// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// import { Client } from "./parsec/src/client.js";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:


// jss:
const styles = (theme) => ({
	root: {
		padding: "1%",
		display: "grid",
		"grid-template-columns": "minmax(50%, 75%) minmax(100px, 25%)",
		"gridTemplateAreas": `
			"nav login"
			"picture picture"
			"chat chat"
			"bar bar"`,
		width: "100%",
		gridGap: "5px",
	},
	[device.tablet]: {
		root: {
			"grid-template-columns": "minmax(50%, 75%) minmax(300px, 25%)",
			"gridTemplateAreas": `
				"nav login"
				"picture chat"
				"bar bar"`,
		},
	},
	[device.laptop]: {
		root: {},
	},
});


class App extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {

	}

	shouldComponentUpdate(nextProps, nextState) {

		if (this.state != nextState) {
			return true;
		}

		// console.log(nextProps);
		return false;
	}

	render() {

		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				test
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(App);

/* FORCE HTTPS */
if (window.location.protocol != "https:") {
	window.location.href = "https:" + window.location.href.substring(window.location.protocol.length);
}

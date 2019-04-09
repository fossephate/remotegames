// react:
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Router, Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// main components:
import StreamsAppBar from "src/components/Streams/StreamsAppBar.jsx";
import StreamList from "src/components/Streams/StreamList.jsx";

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

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:
import socketio from "socket.io-client";

// jss:
const styles = (theme) => ({
	root: {
		padding: "1%",
		display: "grid",
		gridTemplateAreas: `
			"nav"
			"streams"`,
		width: "100%",
		gridGap: "5px",
	},
	[device.tablet]: {
		root: {
			gridTemplateAreas: `
				"nav"
				"streams"`,
		},
	},
	[device.laptop]: {
		root: {},
	},
});

class Streams extends PureComponent {
	constructor(props) {
		super(props);

		this.socket = socketio("https://remotegames.io", {
			path: "/8099/socket.io",
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.socket.on("streams", (data) => {
			console.log(data);
		});

		this.socket.emit("getStreams");

		this.state = {};
	}

	componentDidMount() {}

	render() {
		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<StreamsAppBar />
				<StreamList streams={[]}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(Streams);

// /* FORCE HTTPS */
// if (window.location.protocol != "https:") {
// 	window.location.href =
// 		"https:" + window.location.href.substring(window.location.protocol.length);
// }

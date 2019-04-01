// react:
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Router, Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// main components:
import StreamsAppBar from "src/components/Streams/StreamsAppBar.jsx";

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
import AppBar from "@material-ui/core/AppBar";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";

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
		gridTemplateAreas: `
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
			gridTemplateAreas: `
				"nav login"
				"picture chat"
				"bar bar"`,
		},
	},
	[device.laptop]: {
		root: {},
	},
});

class Streams extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

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
				<StreamsAppBar />
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

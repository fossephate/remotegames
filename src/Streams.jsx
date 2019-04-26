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
import StreamsDrawer from "src/components/Streams/StreamsDrawer.jsx";

// secondary components:

// modals:
import LoginModal from "src/components/Modals/LoginModal.jsx";
import RegisterModal from "src/components/Modals/RegisterModal.jsx";
import AccountModal from "src/components/Modals/AccountModal.jsx";
import InputMapperModal from "src/components/Modals/InputMapperModal.jsx";

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
		// padding: "1%",
		display: "flex",
		flexDirection: "column",
		// display: "grid",
		// gridTemplateAreas: `
		// 	"nav"
		// 	"streams"`,
		width: "100%",
		// gridGap: "5px",
	},
	[device.tablet]: {
		root: {},
	},
	[device.laptop]: {
		root: {},
	},
});

class Streams extends PureComponent {
	constructor(props) {
		super(props);

		this.socket = this.props.accountServerConnection;

		this.socket.emit("getStreams", null, (data) => {
			console.log(data);
			this.setState({ streams: data.streams });
		});

		this.state = {
			drawerOpen: true,
		};

		this.triggered = false;

		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	updateDimensions() {
		if (window.innerWidth < 900 && this.state.drawerOpen) {
      this.setState({ drawerOpen: false });
    }
		if (window.innerWidth > 1000) {
      this.setState({ drawerOpen: true });
    }
	}

	componentWillMount() {
		this.updateDimensions();
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	toggleDrawer(bool) {
		if (typeof(bool) === "boolean") {
			this.setState({ drawerOpen: !this.state.drawerOpen });
		} else {
			this.setState({ drawerOpen: bool });
		}
		this.setState({ drawerOpen: !this.state.drawerOpen });
	}

	render() {
		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<StreamsAppBar drawerOpen={this.state.drawerOpen} handleToggleDrawer={this.toggleDrawer} />
				<StreamsDrawer drawerOpen={this.state.drawerOpen} handleToggleDrawer={this.toggleDrawer} />
				<StreamList drawerOpen={this.state.drawerOpen} streams={this.props.streamList} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streamList: state.streams.streamList,
	};
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

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

// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:

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
			this.setState({ streams: data.streams });
		});

		this.state = {
			streams: [],
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

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions.bind(this));
		this.updateDimensions();
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}

	toggleDrawer(bool) {
		if (typeof bool === "boolean") {
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
				<StreamsAppBar
					drawerOpen={this.state.drawerOpen}
					handleToggleDrawer={this.toggleDrawer}
				/>
				<StreamsDrawer
					drawerOpen={this.state.drawerOpen}
					handleToggleDrawer={this.toggleDrawer}
				/>
				{/* <StreamList drawerOpen={this.state.drawerOpen} streams={this.props.streamList} /> */}
				<StreamList drawerOpen={this.state.drawerOpen} streams={this.state.streams} />
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

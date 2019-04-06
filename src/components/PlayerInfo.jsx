// react:
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import Player from "./Player.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

import { updateSettings } from "src/actions/settings.js";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		overflowX: "hidden",
		padding: "10px",
		flexWrap: "wrap",
	},
	[device.tablet]: {
		root: {
			flexDirection: "row",
			// width: "100%",
			// padding: "5px",
		},
	},
	[device.laptop]: {
		root: {
			// width: "24%",
			// padding: "5px",
		},
	},
});

class PlayerInfo extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper className={classes.root} elevation={0}>
				<Player num={0} text="Player 1" />
				<Player num={1} text="Player 2" />
				<Player num={2} text="Player 3" />
				<Player num={3} text="Player 4" />
				<Player num={4} text="Player 5" />
				<Player num={5} text="Player 6" />
				<Player num={6} text="Player 7" />
				<Player num={7} text="Player 8" />
			</Paper>
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
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(PlayerInfo);

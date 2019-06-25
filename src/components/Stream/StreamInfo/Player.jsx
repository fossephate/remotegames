// react:
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import MyCheckbox from "src/components/General/MyCheckbox.jsx";
import TurnTimers from "./TurnTimers.jsx";
import PlayerQueueButton from "./PlayerQueueButton.jsx";
import ControlQueue from "./ControlQueue.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";
import { leavePlayerControlQueue } from "src/actions/players.js";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
		padding: "5px",
	},
	[device.tablet]: {
		root: {
			width: "100%",
			// padding: "5px",
		},
	},
	[device.laptop]: {
		root: {
			width: "24%",
			// padding: "5px",
		},
	},
});

class Player extends PureComponent {
	constructor(props) {
		super(props);

		this.choosePlayer = this.choosePlayer.bind(this);

		this.state = {};
	}

	choosePlayer() {
		let players = [0, 1, 2, 3, 4, 5, 6, 7];
		players.forEach((cNum) => {
			this.props.leavePlayerControlQueue(cNum);
		});
		this.props.choosePlayer(this.props.num);
	}

	render() {
		const { classes } = this.props;

		let n = this.props.num;

		return (
			<Paper elevation={4} className={classes.root}>
				<MyCheckbox
					text={`Player ${this.props.num + 1}`}
					handleChange={this.choosePlayer}
					checked={this.props.currentPlayer == this.props.num}
				/>
				<TurnTimers num={this.props.num} />
				<PlayerQueueButton
					num={this.props.num}
					controlQueue={this.props.controlQueues[n]}
					userid={this.props.userid}
				/>
				<ControlQueue num={this.props.num} />
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		// turnTimers: state.turnTimers,
		controlQueues: state.stream.players.controlQueues,
		userid: state.clientInfo.userid,
		// time: state.time,
		currentPlayer: state.settings.currentPlayer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		choosePlayer: (index) => {
			dispatch(updateSettings({ currentPlayer: index }));
		},
		leavePlayerControlQueue: (controllerNumber) => {
			dispatch(leavePlayerControlQueue(controllerNumber));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(Player);

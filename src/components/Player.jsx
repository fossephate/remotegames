// react:
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import MyCheckbox from "./MyCheckbox.jsx";
import TurnTimers from "./TurnTimers.jsx";
import PlayerQueueButton from "./PlayerQueueButton.jsx";
import ControlQueue from "./ControlQueue.jsx";

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
		width: "100%",
		padding: "5px",
	},
	[device.tablet]: {
		root: {
			width: "100%",
			// padding: "5px",
		}
	},
	[device.laptop]: {
		root: {
			width: "24%",
			// padding: "5px",
		}
	},
});



class Player extends PureComponent {

	constructor(props) {
		super(props);

		this.choosePlayer = this.choosePlayer.bind(this);

		this.state = {};
	}

	choosePlayer() {
		this.props.choosePlayer(this.props.num - 1);
	}

	render() {

		const { classes } = this.props;

		let n = this.props.num - 1;
		// let turnExpiration = parseInt(this.props.turnTimers[n].turnExpiration / 1000);
		// let turnPercent = parseInt((this.props.turnTimers[n].turnExpiration / this.props.turnTimers[n].turnLength) * 100);
		// let forfeitExpiration = parseInt(this.props.turnTimers[n].forfeitExpiration / 1000);
		// let forfeitPercent = parseInt((this.props.turnTimers[n].forfeitExpiration / this.props.turnTimers[n].forfeitLength) * 100);

		return (
			<Paper elevation={4} className={classes.root}>
				<MyCheckbox
					text={"Player " + this.props.num}
					handleChange={this.choosePlayer}
					checked={(this.props.currentPlayer + 1) == this.props.num}
				/>
				<TurnTimers	num={this.props.num}/>
				<PlayerQueueButton
					num={this.props.num}
					controlQueue={this.props.controlQueues[n]}
					userid={this.props.userid}
				/>
				<ControlQueue
					num={this.props.num}
					usernameMap={this.props.usernameMap}
				/>
			</Paper>
		);

	}
}


const mapStateToProps = (state) => {
	return {
		// turnTimers: state.turnTimers,
		controlQueues: state.players.controlQueues,
		usernameMap: state.usernameMap,
		userid: state.userInfo.userid,
		// time: state.time,
		currentPlayer: state.settings.currentPlayer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		choosePlayer: (index) => {
			dispatch(updateSettings({ currentPlayer: index }))
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(Player);
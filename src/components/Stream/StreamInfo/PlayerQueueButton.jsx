// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";

// actions:
import { leavePlayerControlQueue, joinPlayerControlQueue } from "src/actions/players.js";

// recompose:
import { compose } from "recompose";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
	},
});

class PlayerQueueButton extends PureComponent {
	constructor(props) {
		super(props);

		this.joinLeaveQueue = this.joinLeaveQueue.bind(this);

		this.state = {
			// isLeaveQueue: false,
		};
	}

	joinLeaveQueue() {
		if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
			this.props.leavePlayerControlQueue(this.props.num);
		} else {
			for (let i = 0; i < this.props.playerCount; i++) {
				if (i == this.props.num) {
					continue;
				}
				this.props.leavePlayerControlQueue(i);
			}
			this.props.joinPlayerControlQueue(this.props.num);
		}
	}

	render() {
		const { classes } = this.props;

		let num = this.props.num;

		let buttonText;

		if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
			buttonText = "Leave Queue";
		} else {
			buttonText = "Join Queue";
		}

		return (
			<Button className={classes.root} variant="contained" onClick={this.joinLeaveQueue}>
				{buttonText}
			</Button>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		playerCount: state.stream.players.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		leavePlayerControlQueue: (controllerNumber) => {
			dispatch(leavePlayerControlQueue(controllerNumber));
		},
		joinPlayerControlQueue: (controllerNumber) => {
			dispatch(joinPlayerControlQueue(controllerNumber));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(PlayerQueueButton);

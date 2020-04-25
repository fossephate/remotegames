// react:
import React, { PureComponent } from "react";

// components:
import MyCheckbox from "shared/components/general/MyCheckbox.jsx";
import TurnTimers from "./TurnTimers.jsx";
import QueueButton from "./QueueButton.jsx";
import ControlQueue from "./ControlQueue.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";
import { joinLeavePlayerControlQueue } from "src/features/players.js";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

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
		for (let i = 0; i < 9; i++) {
			this.props.joinLeavePlayerControlQueue({ cNum: i, joinLeave: "leave" });
		}
		this.props.choosePlayer(this.props.num);
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper elevation={4} className={classes.root}>
				<MyCheckbox
					text={`Player ${this.props.num + 1}`}
					handleChange={this.choosePlayer}
					checked={this.props.currentPlayer == this.props.num}
				/>
				<TurnTimers num={this.props.num} />
				<QueueButton
					num={this.props.num}
					controlQueue={this.props.controlQueues[this.props.num]}
					userid={this.props.userid}
				/>
				<ControlQueue num={this.props.num} />
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		controlQueues: state.stream.players.controlQueues,
		userid: state.client.userid,
		currentPlayer: state.settings.currentPlayer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		choosePlayer: (index) => {
			dispatch(updateSettings({ currentPlayer: index }));
		},
		joinLeavePlayerControlQueue: (data) => {
			dispatch(joinLeavePlayerControlQueue(data));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(Player);

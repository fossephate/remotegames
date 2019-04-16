// react:
import React, { Component, PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

// redux:
import { connect } from "react-redux";

// libs:
import classNames from "classnames";

// jss:
const styles = {
	root: {
		position: "relative",
		marginBottom: "5px",
	},
	turnText: {
		width: "100%",
		position: "absolute",
		top: "0px",
		lineHeight: "24px",
	},
	forfeitText: {
		width: "100%",
		position: "absolute",
		top: "0px",
		lineHeight: "15px",
	},
	turn: {
		height: "24px",
		borderRadius: "6px",
	},
	forfeit: {
		height: "15px",
		borderRadius: "6px",
	},
};

class TurnTimer extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getBarText() {
		if (this.props.name == null) {
			if (this.props.type == "turn") {
				return "No one is playing right now.";
			} else if (this.props.type == "forfeit") {
				return null;
			}
		} else {
			if (this.props.type == "turn") {
				return `${this.props.name}: ${this.props.timeLeft} seconds`;
			} else if (this.props.type == "forfeit") {
				return `${this.props.timeLeft} seconds until turn forfeit.`;
			}
		}
	}

	getStyle() {
		if (this.props.name == null) {
			return { width: "100%" };
		} else {
			return { width: this.props.percent + "%" };
		}
	}

	render() {
		const { classes } = this.props;

		let isTurn = this.props.type == "turn";
		let color = isTurn ? "primary" : "secondary";
		let override = classNames({ [classes.turn]: isTurn, [classes.forfeit]: !isTurn });
		let value = this.props.name == null ? 100 : this.props.percent;
		let textClass = classNames({
			[classes.turnText]: isTurn,
			[classes.forfeitText]: !isTurn,
		});

		return (
			// <React.Fragment>
			// 	{
			// 		this.props.type === "turn" ?
			// 			<div className="turnTimerBar progress">
			// 				<div className="turnTimerBarChild progress-bar progress-bar-striped progress-bar-animatedd active" style={this.getStyle()}>
			// 					{this.getBarText()}
			// 				</div>
			// 			</div>
			// 		:
			// 			<div className="forfeitTimerBar progress">
			// 				<div className="forfeitTimerBarChild progress-bar progress-bar-danger bg-danger progress-bar-striped progress-bar-animatedd active" style={this.getStyle()}>
			// 					{this.getBarText()}
			// 				</div>
			// 			</div>
			// 	}
			// </React.Fragment>
			<div className={classes.root}>
				<LinearProgress
					classes={{ root: override }}
					variant="determinate"
					value={value}
					color={color}
				/>
				<div className={textClass}>{this.getBarText()}</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
// 		time: state.time,
// 		turnTimers: state.players.turnTimers,
// 	};
// };
//
// const mapDispatchToProps = (dispatch) => {
// 	return {};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TurnTimer);

export default withStyles(styles)(TurnTimer);

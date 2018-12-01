// react:
import React, { Component, PureComponent } from "react";

// redux:
import { connect } from "react-redux";

export default class TurnTimer extends PureComponent {

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
		return (
			<React.Fragment>
				{
					this.props.type === "turn" ?
						<div className="turnTimerBar progress">
							<div className="turnTimerBarChild progress-bar progress-bar-striped progress-bar-animatedd active" style={this.getStyle()}>
								{this.getBarText()}
							</div>
						</div>
					:
						<div className="forfeitTimerBar progress">
							<div className="forfeitTimerBarChild progress-bar progress-bar-danger bg-danger progress-bar-striped progress-bar-animatedd active" style={this.getStyle()}>
								{this.getBarText()}
							</div>
						</div>
				}
			</React.Fragment>
		);

	}

}

//
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
import React, { PureComponent } from "react";

export default class TurnTimer extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getBarText() {
		if (this.props.name == null) {
			return "No one is playing right now.";
		} else {
			return this.props.timeLeft + " seconds until turn forfeit.";
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
			<div id={"forfeitTimerBar" + this.props.num} className="forfeitTimerBar progress">
				<div id={"forfeitTimerBarChild" + this.props.num} className="forfeitTimerBarChild progress-bar progress-bar-danger bg-danger progress-bar-striped progress-bar-animatedd active" style={this.getStyle()}>
					{this.getBarText()}
				</div>
			</div>
		);

	}

}
import React, { Component, PureComponent } from "react";

export default class TurnTimer extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getBarText() {
		if (this.props.name == null) {
			return "No one is playing right now.";
		} else {
			return this.props.name + ": " + this.props.timeLeft + " seconds";
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
			<div className="turnTimerBar progress">
				<div className="turnTimerBarChild progress-bar progress-bar-striped progress-bar-animatedd active" style={this.getStyle()}>
					{this.getBarText()}
				</div>
			</div>
		);

	}

}
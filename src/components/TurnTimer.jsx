

import React, { Component } from "react";


export default class TurnTimer extends Component {

	constructor(props) {
		super(props);
	}

	state = {
	};

	getBarText() {
		if (this.props.name == null) {
			return "No one is playing right now.";
		} else {
			return this.props.name + ": " + this.props.timeLeft + " seconds";
		}
	}

	getStyle() {
		if (this.props.name == null) {
			return {width: "100%"};
		} else {
			return {width: this.props.percent + "%"};
		}
	}

	render () {

		return (
			<React.Fragment>
				<div id={"turnTimerBar" + this.props.num} className="turnTimerBar progress">
					<div id={"turnTimerBarChild" + this.props.num} className="turnTimerBarChild progress-bar progress-bar-striped progress-bar-animatedd active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={this.getStyle()}>
						{this.getBarText()}
					</div>
				</div>
			</React.Fragment>
		);

	}

}

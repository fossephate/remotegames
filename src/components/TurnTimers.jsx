// react:
import React, { Component, PureComponent } from "react";

import TurnTimer from "./TurnTimer.jsx";

// redux:
import { connect } from "react-redux";

class TurnTimers extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			time: 0,
		};
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ time: Date.now() });
		}, 1000);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}


	render() {

		let n = this.props.num;

		let serverTime = this.props.time.server;
		let now = (Date.now() - this.props.time.lastServerUpdate) + serverTime;
		let elapsedTime = now - serverTime;

		// turn:
		let turnStartTime = this.props.turnTimers[n].turnStartTime;
		let turnLength = this.props.turnTimers[n].turnLength;
		let turnTimeLeft = (turnLength - (now - turnStartTime));
		let turnTimeLeftPercent = (turnTimeLeft / turnLength) * 100;

		// forfeit:
		let forfeitStartTime = this.props.turnTimers[n].forfeitStartTime;
		let forfeitLength = this.props.turnTimers[n].forfeitLength;
		let forfeitTimeLeft = (forfeitLength - (now - forfeitStartTime));
		let forfeitTimeLeftPercent = (forfeitTimeLeft / forfeitLength) * 100;

		return (
			<React.Fragment>
				<TurnTimer
					type="turn"
					name={this.props.usernameMap[this.props.controlQueues[n][0]]}
					timeLeft={parseInt(turnTimeLeft / 1000)}
					percent={parseInt(turnTimeLeftPercent)}
				/>
				<TurnTimer
					type="forfeit"
					name={this.props.usernameMap[this.props.controlQueues[n][0]]}
					timeLeft={parseInt(forfeitTimeLeft / 1000)}
					percent={parseInt(forfeitTimeLeftPercent)}
				/>
			</React.Fragment>
		);

	}

}


const mapStateToProps = (state) => {
	return {
		time: state.time,
		turnTimers: state.players.turnTimers,
		controlQueues: state.players.controlQueues,
		usernameMap: state.usernameMap,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TurnTimers);

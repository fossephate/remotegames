// react:
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// material ui:
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

import TurnTimer from "./TurnTimer.jsx";
import ControlQueue from "./ControlQueue.jsx";
import JoinLeaveQueueButton from "./JoinLeaveQueueButton.jsx";
import MyCheckbox from "./MyCheckbox.jsx";



class Player extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {

		let n = this.props.num - 1;
		let turnExpiration = parseInt(this.props.turnTimers[n].turnExpiration / 1000);
		let turnPercent = parseInt((this.props.turnTimers[n].turnExpiration / this.props.turnTimers[n].turnLength) * 100);
		let forfeitExpiration = parseInt(this.props.turnTimers[n].forfeitExpiration / 1000);
		let forfeitPercent = parseInt((this.props.turnTimers[n].forfeitExpiration / this.props.turnTimers[n].forfeitLength) * 100);

		return (
			<Paper elevation={4} style={{width: "24%", padding: "5px"}}>
				<MyCheckbox
					text={"Player " + this.props.num}
					handleChange={this.props.handleChange}
					checked={(this.props.selected + 1) == this.props.num}/>
				<TurnTimer
					type="turn"
					name={this.props.usernameMap[this.props.controlQueues[n][0]]}
					timeLeft={turnExpiration}
					percent={turnPercent}/>
				<TurnTimer
					type="forfeit"
					name={this.props.usernameMap[this.props.controlQueues[n][0]]}
					timeLeft={forfeitExpiration}
					percent={forfeitPercent}/>
				<JoinLeaveQueueButton
					num={this.props.num} controlQueue={this.props.controlQueues[n]}
					userid={this.props.userid}/>
				<ControlQueue num={this.props.num} usernameMap={this.props.usernameMap}/>
			</Paper>
		);

	}
}


const mapStateToProps = (state) => {
	return {
		turnTimers: state.turnTimers,
		controlQueues: state.controlQueues,
		usernameMap: state.usernameMap,
		userid: state.userInfo.userid,
	};
};

export default connect(mapStateToProps)(Player);
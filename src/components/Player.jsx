import React, { Component, PureComponent } from "react";

import TurnTimer from "./TurnTimer.jsx";
import ForfeitTimer from "./ForfeitTimer.jsx";
import ControlQueue from "./ControlQueue.jsx";
import JoinLeaveQueueButton from "./JoinLeaveQueueButton.jsx";
import Checkbox from "./Checkbox.jsx";



export default class Player extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	render() {

		return (
			<div id={"player" + this.props.num} className="player">
				<Checkbox text={"Player " + this.props.num} handleChange={this.props.handleChange} checked={(this.props.selected + 1) == this.props.num}/>
				<TurnTimer name={this.props.usernameMap[this.props.controlQueue[0]]} percent={this.props.player.turnPercent} timeLeft={this.props.player.turnTimeLeft}/>
				<ForfeitTimer name={this.props.usernameMap[this.props.controlQueue[0]]} percent={this.props.player.forfeitPercent} timeLeft={this.props.player.forfeitTimeLeft}/>
				<JoinLeaveQueueButton num={this.props.num} controlQueue={this.props.controlQueue} myID={this.props.myID}/>
				<ControlQueue uniqueIDs={this.props.controlQueue} usernameMap={this.props.usernameMap} darkTheme={this.props.darkTheme}/>
			</div>
		);

	}

}
import React, { Component, PureComponent } from "react";

import TurnTimer from "./TurnTimer.jsx";
import ForfeitTimer from "./ForfeitTimer.jsx";
import ControlQueue from "./ControlQueue.jsx";
import JoinLeaveQueueButton from "./JoinLeaveQueueButton.jsx";



export default class Player extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	render() {

		return (
			<div id={"player" + this.props.num} className="player">
				<label className="playerCheckbox checkbox-inline checkbox-bootstrap checkbox-lg">
					<input id={"player" + this.props.num + "Checkbox"} type="checkbox" />
					<span className="checkbox-placeholder"></span>
					Player {this.props.playerNum}
				</label>
				<TurnTimer name={this.props.usernameMap[this.props.controlQueue[0]]} percent={this.props.player.turnPercent} timeLeft={this.props.player.turnTimeLeft}/>
				<ForfeitTimer name={this.props.usernameMap[this.props.controlQueue[0]]} percent={this.props.player.forfeitPercent} timeLeft={this.props.player.forfeitTimeLeft}/>
				<JoinLeaveQueueButton num={this.props.num} controlQueue={this.props.controlQueue} myID={this.props.myID} />
				<ControlQueue uniqueIDs={this.props.controlQueue} usernameMap={this.props.usernameMap} darkTheme={this.props.darkTheme}/>
			</div>
		);

	}

}
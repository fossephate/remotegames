



import React, { Component } from "react";

import TurnTimer from "./TurnTimer.jsx";
import ForfeitTimer from "./ForfeitTimer.jsx";



export default class Player extends Component {

	constructor(props) {
		super(props);
	}

	state = {
	};

	render () {

		return (
			<React.Fragment>
				<label class="playerCheckbox checkbox-inline checkbox-bootstrap checkbox-lg">
					<input id={"player"+this.props.playerNum+"Checkbox"} type="checkbox" />
					<span className="checkbox-placeholder"></span>
					Player {this.props.playerNum}
				</label>
				<TurnTimer />
				<ForfeitTimer />
				<button id="requestTurn1" class="requestTurn btn btn-secondary" code="0">Join Queue</button>
				<ul id="controlQueue1" class="controlQueue list-group"></ul>
			</React.Fragment>
		);
// 		return <h1>test</h1>;
	}

}

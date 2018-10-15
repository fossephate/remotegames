import React, { PureComponent } from "react";

import LeftJoyCon from "./LeftJoyCon.jsx";
import RightJoyCon from "./RightJoyCon.jsx";

export default class LaglessView extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getButton() {

		let num = this.props.num;

		let buttonText;
		let buttonType;

		if (this.props.controlQueue.indexOf(this.props.myID) > -1) {
			buttonType = "leaveQueue";
			buttonText = "Leave Queue";

		} else {
			buttonType = "joinQueue"
			buttonText = "Join Queue";
		}

		let elementID = buttonType + this.props.num;
		let elementClass = buttonType + " btn btn-secondary";

		return <button id={elementID} className={elementClass}>{buttonText}</button>;
	}

	render() {
		return (
			<div id={"lagless" + this.props.num + "View"} className="laglessView">
				<LeftJoyCon controllerState={this.props.controllerState}/>
				<canvas id={"videoCanvas" + this.props.num} className="videoCanvas"></canvas>
				<RightJoyCon controllerState={this.props.controllerState}/>
			</div>
		);
	}

}
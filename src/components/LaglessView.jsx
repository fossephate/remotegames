import React, { PureComponent } from "react";

import LeftJoyCon from "./LeftJoyCon.jsx";
import RightJoyCon from "./RightJoyCon.jsx";

import "./LaglessView.css";

export default class LaglessView extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	render() {
		let laglessClasses = "laglessView";
		let videoClasses = "videoCanvas";
		if (this.props.largescreen || this.props.fullscreen) {
			laglessClasses += " fullscreen";
			videoClasses += " fullscreen";
		}
		return (
			<div className={laglessClasses}>
				{this.props.controllerView ? <LeftJoyCon controllerState={this.props.controllerState}/> : ""}
				<canvas id={"videoCanvas" + this.props.num} className={videoClasses}></canvas>
				{this.props.controllerView ? <RightJoyCon controllerState={this.props.controllerState}/> : ""}
			</div>
		);
	}

}
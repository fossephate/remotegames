import React, { PureComponent } from "react";

import LeftJoyCon from "./LeftJoyCon.jsx";
import RightJoyCon from "./RightJoyCon.jsx";

export default class LaglessView extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	render() {
		return (
			<div id={"lagless" + this.props.num + "View"} className="laglessView">
				{this.props.controllerView ? <LeftJoyCon controllerState={this.props.controllerState}/> : ""}
				<canvas id={"videoCanvas" + this.props.num} className={"videoCanvas " + ((this.props.largescreen || this.props.fullscreen) ? "largescreen" : "")}></canvas>
				{this.props.controllerView ? <RightJoyCon controllerState={this.props.controllerState}/> : ""}
			</div>
		);
	}

}
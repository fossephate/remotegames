import React, { PureComponent } from "react";

const VirtualProController = require("js/VirtualProController.js");
const tools = require("js/tools.js");

export default class RightJoyCon extends PureComponent {

	constructor(props) {
		super(props);

		this.controller = new VirtualProController();
	}

	state = {};



	getJoyCon() {

		let controllerState = "000000000000000000 128 128 128 128";

		this.controller.setState(this.props.controllerState || controllerState);


		let str = this.props.controllerState || controllerState;
		let restPos = 128;

		let stickPositions = str.substring(19).split(" ");

		let RX = (parseInt(stickPositions[2]) - restPos);
		let RY = (parseInt(stickPositions[3]) - restPos);

		RY *= -1;

		// normalize:
		let scale = 0.25;
		let RMagnitude = Math.sqrt((RX * RX) + (RY * RY));
		let max = 120;
		RMagnitude = tools.clamp(RMagnitude, -max, max);
		let RStick = tools.normalizeVector({
			x: RX,
			y: RY
		}, RMagnitude);
		RX = parseInt(RStick.x * scale);
		RY = parseInt(RStick.y * scale);
		let rightTransform = RX + "px" + "," + RY + "px";

		return (
			<div id="rightJoyCon">
				<img id="rightJoyConImage" src="https://twitchplaysnintendoswitch.com/images/rightJoyCon2.png" />
				<div id="rightStick" className={"" + (this.controller.btns.stick_button2 ? " highlightedButton" : "")}>
					<div id="rightStick2" style={{transform: "translate(" + rightTransform + ")"}}></div>
				</div>

				<div id="abxyButtons">
					<div id="aButton" className={"controllerButton" + (this.controller.btns.a ? " highlightedButton" : "")} ></div>
					<div id="bButton" className={"controllerButton" + (this.controller.btns.b ? " highlightedButton" : "")}></div>
					<div id="xButton" className={"controllerButton" + (this.controller.btns.x ? " highlightedButton" : "")}></div>
					<div id="yButton" className={"controllerButton" + (this.controller.btns.y ? " highlightedButton" : "")}></div>
				</div>
				<div id="rightJoyConOther">
					<div id="plusButton" className={"controllerButton lessRound" + (this.controller.btns.plus ? " highlightedButton" : "")}></div>
					<div id="homeButton" className={"controllerButton lessRound" + (this.controller.btns.home ? " highlightedButton" : "")}></div>
					<div id="rButton" className={"controllerButton lessRound" + (this.controller.btns.r ? " highlightedButton" : "")}><div className="click-passthrough">R</div></div>
					<div id="zrButton" className={"controllerButton lessRound" + (this.controller.btns.zr ? " highlightedButton" : "")}><div className="click-passthrough">ZR</div></div>
				</div>
			</div>
		);


	}

	render() {
		return (
			<React.Fragment>
				{this.getJoyCon()}
			</React.Fragment>
		);
	}

}
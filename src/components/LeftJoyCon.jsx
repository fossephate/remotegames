import React, { PureComponent } from "react";

const VirtualProController = require("js/VirtualProController.js");
const tools = require("js/tools.js");

export default class LeftJoyCon extends PureComponent {

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

		let LX = (parseInt(stickPositions[0]) - restPos);
		let LY = (parseInt(stickPositions[1]) - restPos);
		let RX = (parseInt(stickPositions[2]) - restPos);
		let RY = (parseInt(stickPositions[3]) - restPos);

		LY *= -1;

		// normalize:
		let scale = 0.25;
		let LMagnitude = Math.sqrt((LX * LX) + (LY * LY));

		let max = 120;
		LMagnitude = tools.clamp(LMagnitude, -max, max);

		let LStick = tools.normalizeVector({
			x: LX,
			y: LY
		}, LMagnitude);

		LX = parseInt(LStick.x * scale);
		LY = parseInt(LStick.y * scale);

		let leftTransform = LX + "px" + "," + LY + "px";


		return (
			<div id="leftJoyCon">
				<img id="leftJoyConImage" src="https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png" />
				<div id="leftStick" className={"" + (this.controller.btns.stick_button ? " highlightedButton" : "")}>
					<div id="leftStick2" style={{transform: "translate(" + leftTransform + ")"}}></div>
				</div>

				<div id="dpadButtons">
					<div id="upButton" className={"controllerButton" + (this.controller.btns.up ? " highlightedButton" : "")}></div>
					<div id="downButton" className={"controllerButton" + (this.controller.btns.down ? " highlightedButton" : "")}></div>
					<div id="leftButton" className={"controllerButton" + (this.controller.btns.left ? " highlightedButton" : "")}></div>
					<div id="rightButton" className={"controllerButton" + (this.controller.btns.right ? " highlightedButton" : "")}></div>
				</div>
				<div id="leftJoyConOther">
					<div id="minusButton" className={"controllerButton lessRound" + (this.controller.btns.minus ? " highlightedButton" : "")}></div>
					<div id="captureButton" className={"controllerButton lessRound" + (this.controller.btns.capture ? " highlightedButton" : "")}></div>
					<div id="lButton" className={"controllerButton lessRound" + (this.controller.btns.l ? " highlightedButton" : "")}><div className="click-passthrough">L</div></div>
					<div id="zlButton" className={"controllerButton lessRound" + (this.controller.btns.zl ? " highlightedButton" : "")}><div className="click-passthrough">ZL</div></div>
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
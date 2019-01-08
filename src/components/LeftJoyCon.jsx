// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";


import VirtualProController from "js/VirtualProController.js";
const tools = require("js/tools.js");
let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		background: "transparent",
		position: "relative",
		width: "13.4%",
	},
	stick: {
		position: "absolute",
		/* 	background: rgba(50, 50, 50, 0.2); */
		width: "37%",
		height: "12%",
		left: "34.9%",
		top: "19.8%",
		borderRadius: "50%",
	},
	stick2: {
		position: "absolute",
		background: "#FF3C28",
		/*#bb5050;*/
		width: "50%",
		height: "50%",
		left: "25%",
		top: "25%",
		pointerEvents: "none",
		borderRadius: "50%",
	},
	image: {
		width: "100%",
	},
	dpad: {
		position: "absolute",
		background: "transparent",
		width: "85.25%",
		height: "27.75%",
		left: "10%",
		top: "39%",
		"& .up": {
			position: "absolute",
			left: "34.8%",
			top: "9.5%",
		},
		"& .down": {
			position: "absolute",
			left: "34.8%",
			top: "62.5%",
		},
		"& .left": {
			position: "absolute",
			left: "7%",
			top: "36%",
		},
		"& .right": {
			position: "absolute",
			left: "63%",
			top: "36%",
		},
	},
	button: {
		background: "rgba(50, 50, 50, 0.2)",
		/* width: 30px;
		height: 30px; */
		width: "32%",
		height: "32%",
		border: "2px solid #333",
		borderRadius: "50%",
		display: "flex",
		justifyContent: "space-evenly",
		flexDirection: "column",
	},
	otherButtons: {
		color: "#FFFFFF",
		textShadow: "2px 2px 4px #000000",
		/* less round */
		borderRadius: "10px !important",
		"& .minus": {
			position: "absolute",
			left: "66%",
			top: "6%",
			width: "32%",
			height: "9%",
		},
		"& .capture": {
			position: "absolute",
			left: "54%",
			top: "67.5%",
			width: "32%",
			height: "9%",
		},
		"& .l": {
			position: "absolute",
			left: "1%",
			top: "6%",
			width: "60%",
			height: "6%",
		},
		"& .zl": {
			position: "absolute",
			left: "1%",
			top: "0%",
			width: "60%",
			height: "6%",
		},
	},
	highlighted: {
		background: "rgba(80, 187, 80, 0.7)",
	},
	// trigger: {
	// 	position: "absolute",
	// 	height: "100%",
	// 	background: "rgba(80, 187, 80, 0.7)",
	// 	borderRadius: "10px !important",
	// },
	trigger1: {
		height: "50%",
		borderRadius: "10px",
		borderBottomLeftRadius: "0",
		borderBottomRightRadius: "0",
		zIndex: "100",
	},
	trigger2: {
		height: "50%",
		background: "rgba(80, 187, 80, 0.7)",
		borderRadius: "10px",
		borderTopLeftRadius: "0",
		borderTopRightRadius: "0",
	},
});

class LeftJoyCon extends PureComponent {

	constructor(props) {
		super(props);

		this.controller = new VirtualProController();

		this.state = {};
	}

	render() {

		const { classes } = this.props;

		let restPos = 128;

		this.controller.setState(this.props.controllerState);

		let LX = (this.controller.axes[0] - restPos);
		let LY = (this.controller.axes[1] - restPos);

		LY *= -1;

		// normalize:
		let scale = 0.25;
		let LMagnitude = Math.sqrt((LX * LX) + (LY * LY));

		let max = 120;
		LMagnitude = tools.clamp(LMagnitude, -max, max);

		let LStick = tools.normalizeVector({
			x: LX,
			y: LY,
		}, LMagnitude);

		LX = parseInt(LStick.x * scale);
		LY = parseInt(LStick.y * scale);

		let leftTransform = LX + "px" + "," + LY + "px";

		return (
			<div className={classes.root}>
				<img className={classes.image} src="https://twitchplaysnintendoswitch.com/images/leftJoyCon2.png"/>
				<div className={classNames(classes.stick, {[classes.highlighted]: (this.controller.buttons.lstick)})}>
					<div className={classes.stick2} style={{transform: "translate(" + leftTransform + ")"}}></div>
				</div>

				<div className={classes.dpad}>
					<div className={classNames(classes.button, "up", {[classes.highlighted]: (this.controller.buttons.up)})}></div>
					<div className={classNames(classes.button, "down", {[classes.highlighted]: (this.controller.buttons.down)})}></div>
					<div className={classNames(classes.button, "left", {[classes.highlighted]: (this.controller.buttons.left)})}></div>
					<div className={classNames(classes.button, "right", {[classes.highlighted]: (this.controller.buttons.right)})}></div>
				</div>
				<div className={classes.otherButtons}>
					<div className={classNames(classes.button, classes.otherButtons, "minus", {[classes.highlighted]: (this.controller.buttons.minus)})}></div>
					<div className={classNames(classes.button, classes.otherButtons, "capture", {[classes.highlighted]: (this.controller.buttons.capture)})}></div>
					<div className={classNames(classes.button, classes.otherButtons, "l", {[classes.highlighted]: (this.controller.buttons.l)})}>
						<div className="click-passthrough">L</div>
					</div>
					{/* <div className={classNames(classes.button, classes.otherButtons, "zl", {[classes.highlighted]: (this.controller.buttons.zl)})}>
						<div className="click-passthrough">ZL</div>
						<div className={classes.trigger} style={{width: (this.controller.axes[4] * 100) + "%"}}></div>
					</div> */}
					<div className={classNames(classes.button, classes.otherButtons, "zl")}>
						<div className={classNames(classes.trigger1, {[classes.highlighted]: (this.controller.buttons.zl)})}>ZL</div>
						<div className={classes.trigger2} style={{width: (this.controller.axes[4] * 100) + "%"}}></div>
					</div>
				</div>
			</div>
		);
	}

}

export default withStyles(styles)(LeftJoyCon);

// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

import ControllerState from "libs/InputHandler/ControllerState.js";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		background: "transparent",
		position: "relative",
		width: "13.4%",
	},
	stick1: {
		position: "absolute",
		width: "37%",
		height: "12%",
		left: "34.9%",
		top: "19.8%",
		borderRadius: "50%",
	},
	stick2: {
		position: "absolute",
		background: "#FF3C28",
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

	xboxHighlighted: {
		background: "rgba(68, 68, 68, 0.7)",
		"&.a,&.b,&.x,&.y": {
			background: "rgba(68, 68, 68, 1) !important",
		},
	},
});

class LeftControllerView extends PureComponent {
	constructor(props) {
		super(props);

		this.getStickTransform = this.getStickTransform.bind(this);

		this.cstate = new ControllerState();

		this.state = {};
	}

	getStickTransform() {
		let x = this.cstate.axes[0];
		let y = this.cstate.axes[1];

		y *= -1;

		let x2 = x * Math.sqrt(1 - (y * y) / 2) * 32;
		let y2 = y * Math.sqrt(1 - (x * x) / 2) * 32;

		let scale;
		scale = window.outerWidth / 1400 - 0.4;
		if (window.outerWidth < 700) {
			scale += 0.3;
		}
		x2 *= scale;
		y2 *= scale;

		return `${x2}px, ${y2}px`;
	}

	render() {
		const { classes } = this.props;

		this.cstate.setState(this.props.controllerState);

		let stickTransform = this.getStickTransform();

		if (this.props.type === "joycon") {
			return (
				<div className={classes.root}>
					<img
						className={classes.image}
						src={window.location.origin + "/images/leftJoyCon2.png"}
					/>
					<div
						className={classNames(classes.stick1, {
							[classes.highlighted]: this.cstate.buttons.lstick,
						})}
					>
						<div
							className={classes.stick2}
							style={{ transform: "translate(" + stickTransform + ")" }}
						/>
					</div>

					<div className={classes.dpad}>
						<div
							className={classNames(classes.button, "up", {
								[classes.highlighted]: this.cstate.buttons.up,
							})}
						/>
						<div
							className={classNames(classes.button, "down", {
								[classes.highlighted]: this.cstate.buttons.down,
							})}
						/>
						<div
							className={classNames(classes.button, "left", {
								[classes.highlighted]: this.cstate.buttons.left,
							})}
						/>
						<div
							className={classNames(classes.button, "right", {
								[classes.highlighted]: this.cstate.buttons.right,
							})}
						/>
					</div>
					<div className={classes.otherButtons}>
						<div
							className={classNames(classes.button, classes.otherButtons, "minus", {
								[classes.highlighted]: this.cstate.buttons.minus,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "capture", {
								[classes.highlighted]: this.cstate.buttons.capture,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "l", {
								[classes.highlighted]: this.cstate.buttons.l,
							})}
						>
							<div className="click-passthrough">L</div>
						</div>
						{/* <div className={classNames(classes.button, classes.otherButtons, "zl", {[classes.highlighted]: (this.cstate.buttons.zl)})}>
							<div className="click-passthrough">ZL</div>
							<div className={classes.trigger} style={{width: (this.cstate.axes[4] * 100) + "%"}}></div>
						</div> */}
						<div className={classNames(classes.button, classes.otherButtons, "zl")}>
							<div
								className={classNames(classes.trigger1, {
									[classes.highlighted]: this.cstate.buttons.zl,
								})}
							>
								ZL
							</div>
							<div
								className={classes.trigger2}
								style={{ width: this.cstate.axes[4] * 100 + "%" }}
							/>
						</div>
					</div>
				</div>
			);
		} else if (this.props.type === "xbox") {
			return (
				<div className={classes.root}>
					<img
						className={classes.image}
						src={window.location.origin + "/images/leftJoyCon2.png"}
					/>
					<div
						className={classNames(classes.stick1, {
							[classes.xboxHighlighted]: this.cstate.buttons.lstick,
						})}
					>
						<div
							className={classes.stick2}
							style={{ transform: "translate(" + stickTransform + ")" }}
						/>
					</div>

					<div className={classes.dpad}>
						<div
							className={classNames(classes.button, "up", {
								[classes.xboxHighlighted]: this.cstate.buttons.up,
							})}
						/>
						<div
							className={classNames(classes.button, "down", {
								[classes.xboxHighlighted]: this.cstate.buttons.down,
							})}
						/>
						<div
							className={classNames(classes.button, "left", {
								[classes.xboxHighlighted]: this.cstate.buttons.left,
							})}
						/>
						<div
							className={classNames(classes.button, "right", {
								[classes.xboxHighlighted]: this.cstate.buttons.right,
							})}
						/>
					</div>
					<div className={classes.otherButtons}>
						<div
							className={classNames(classes.button, classes.otherButtons, "minus", {
								[classes.xboxHighlighted]: this.cstate.buttons.minus,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "capture", {
								[classes.xboxHighlighted]: this.cstate.buttons.capture,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "l", {
								[classes.xboxHighlighted]: this.cstate.buttons.l,
							})}
						>
							<div className="click-passthrough">LB</div>
						</div>
						<div className={classNames(classes.button, classes.otherButtons, "zl")}>
							<div
								className={classNames(classes.trigger1, {
									[classes.xboxHighlighted]: this.cstate.buttons.zl,
								})}
							>
								LT
							</div>
							<div
								className={classNames(classes.trigger2, classes.xboxHighlighted)}
								style={{ width: this.cstate.axes[4] * 100 + "%" }}
							/>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default withStyles(styles)(LeftControllerView);

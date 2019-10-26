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
		left: "28%",
		top: "47.2%",
		borderRadius: "50%",
	},
	stick2: {
		position: "absolute",
		background: "#0AB9E6",
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
	abxy: {
		position: "absolute",
		background: "transparent",
		width: "85.25%",
		height: "27.75%",
		left: "3%",
		top: "12%",
		"& .a": {
			position: "absolute",
			left: "63.2%",
			top: "34.5%",
		},
		"& .b": {
			position: "absolute",
			left: "35.2%",
			top: "61%",
		},
		"& .x": {
			position: "absolute",
			left: "35.2%",
			top: "8%",
		},
		"& .y": {
			position: "absolute",
			left: "7.2%",
			top: "34.5%",
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
		"& .plus": {
			position: "absolute",
			left: "1%",
			top: "6%",
			width: "32%",
			height: "9%",
		},
		"& .home": {
			position: "absolute",
			left: "14%",
			top: "67.5%",
			width: "32%",
			height: "9%",
		},
		"& .r": {
			position: "absolute",
			left: "40%",
			top: "6%",
			width: "60%",
			height: "6%",
		},
		"& .zr": {
			position: "absolute",
			left: "40%",
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

	xboxabxy: {
		position: "absolute",
		background: "transparent",
		width: "85.25%",
		height: "27.75%",
		left: "3%",
		top: "12%",
		fontSize: "large",
		fontWeight: "bold",

		"& :after": {
			content: '""',
			position: "absolute",
			top: "0px",
			left: "0px",
			// width: "100%",
			// height: "50%",
			// backgroundImage: "linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.2))",
			// borderTopLeftRadius: "50%",
			// borderTopRightRadius: "50%",
			// clipPath: "circle(61% at 50% 100%)",
			width: "100%",
			height: "100%",
			clipPath: "circle(60% at 80% 0%)",
			backgroundImage:
				"linear-gradient(45deg, rgba(255,255,255,0.1),rgba(255,255,255,0.3))",
			borderRadius: "50%",
		},

		"& .a": {
			position: "absolute",
			left: "63.2%",
			top: "34.5%",
			color: "#E53136",
			backgroundImage: "linear-gradient(45deg, #000, #333)",
		},
		"& .b": {
			position: "absolute",
			left: "35.2%",
			top: "61%",
			color: "#91C85C",
			backgroundImage: "linear-gradient(45deg, #000, #333)",
		},
		"& .x": {
			position: "absolute",
			left: "35.2%",
			top: "8%",
			color: "#FCE504",
			backgroundImage: "linear-gradient(45deg, #000, #333)",
		},
		"& .y": {
			position: "absolute",
			left: "7.2%",
			top: "34.5%",
			color: "#0399DC",
			backgroundImage: "linear-gradient(45deg, #000, #333)",
		},
	},

	xboxHighlighted: {
		background: "rgba(68, 68, 68, 0.7)",
		"&.a,&.b,&.x,&.y": {
			background: "rgba(68, 68, 68, 1) !important",
		},
	},
});

class RightControllerView extends PureComponent {
	constructor(props) {
		super(props);

		this.getStickTransform = this.getStickTransform.bind(this);

		this.cstate = new ControllerState();

		this.state = {};
	}

	getStickTransform() {
		let x = this.cstate.axes[2];
		let y = this.cstate.axes[3];

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
						src={window.location.origin + "/images/rightJoyCon2.png"}
					/>
					<div
						className={classNames(classes.stick1, {
							[classes.highlighted]: this.cstate.buttons.rstick,
						})}
					>
						<div
							className={classes.stick2}
							style={{ transform: "translate(" + stickTransform + ")" }}
						/>
					</div>

					<div className={classes.abxy}>
						<div
							className={classNames(classes.button, "a", {
								[classes.highlighted]: this.cstate.buttons.a,
							})}
						/>
						<div
							className={classNames(classes.button, "b", {
								[classes.highlighted]: this.cstate.buttons.b,
							})}
						/>
						<div
							className={classNames(classes.button, "x", {
								[classes.highlighted]: this.cstate.buttons.x,
							})}
						/>
						<div
							className={classNames(classes.button, "y", {
								[classes.highlighted]: this.cstate.buttons.y,
							})}
						/>
					</div>
					<div className={classes.otherButtons}>
						<div
							className={classNames(classes.button, classes.otherButtons, "plus", {
								[classes.highlighted]: this.cstate.buttons.plus,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "home", {
								[classes.highlighted]: this.cstate.buttons.home,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "r", {
								[classes.highlighted]: this.cstate.buttons.r,
							})}
						>
							<div className="click-passthrough">R</div>
						</div>
						<div className={classNames(classes.button, classes.otherButtons, "zr")}>
							<div
								className={classNames(classes.trigger1, {
									[classes.highlighted]: this.cstate.buttons.zr,
								})}
							>
								ZR
							</div>
							<div
								className={classes.trigger2}
								style={{ width: this.cstate.axes[5] * 100 + "%" }}
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
						src={window.location.origin + "/images/rightJoyCon2.png"}
					/>
					<div
						className={classNames(classes.stick1, {
							[classes.xboxHighlighted]: this.cstate.buttons.rstick,
						})}
					>
						<div
							className={classes.stick2}
							style={{ transform: "translate(" + stickTransform + ")" }}
						/>
					</div>

					<div className={classes.xboxabxy}>
						<div
							className={classNames(classes.button, "a", {
								[classes.xboxHighlighted]: this.cstate.buttons.a,
							})}
						>
							B
						</div>
						<div
							className={classNames(classes.button, "b", {
								[classes.xboxHighlighted]: this.cstate.buttons.b,
							})}
						>
							A
						</div>
						<div
							className={classNames(classes.button, "x", {
								[classes.xboxHighlighted]: this.cstate.buttons.x,
							})}
						>
							Y
						</div>
						<div
							className={classNames(classes.button, "y", {
								[classes.xboxHighlighted]: this.cstate.buttons.y,
							})}
						>
							X
						</div>
					</div>
					<div className={classes.otherButtons}>
						<div
							className={classNames(classes.button, classes.otherButtons, "plus", {
								[classes.xboxHighlighted]: this.cstate.buttons.plus,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "home", {
								[classes.xboxHighlighted]: this.cstate.buttons.home,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "r", {
								[classes.xboxHighlighted]: this.cstate.buttons.r,
							})}
						>
							<div className="click-passthrough">RB</div>
						</div>
						<div className={classNames(classes.button, classes.otherButtons, "zr")}>
							<div
								className={classNames(classes.trigger1, {
									[classes.xboxHighlighted]: this.cstate.buttons.zr,
								})}
							>
								RT
							</div>
							<div
								className={classNames(classes.trigger2, classes.xboxHighlighted)}
								style={{ width: this.cstate.axes[5] * 100 + "%" }}
							/>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default withStyles(styles)(RightControllerView);

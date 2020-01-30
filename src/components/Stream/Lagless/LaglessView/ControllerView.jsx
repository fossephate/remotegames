// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// libs:
import { ControllerState } from "libs/InputHandler/DeviceStates.js";
import classNames from "classnames";

// jss:
const styles = (theme) => ({
	controllerRoot: {
		zIndex: 100,
		background: "transparent",
		position: "relative",
		width: "13.4%",
	},
	leftOverlay: {
		left: 0,
		width: "18.4%",
		position: "absolute",
		opacity: 0.5,
	},
	rightOverlay: {
		right: 0,
		width: "18.4%",
		position: "absolute",
		opacity: 0.5,
	},
	transparent: {
		opacity: 0.5,
	},
	leftStick1: {
		position: "absolute",
		width: "37%",
		height: "12%",
		left: "34.9%",
		top: "19.8%",
		borderRadius: "50%",
	},
	leftStick2: {
		position: "absolute",
		background: "#FF3C28",
		width: "50%",
		height: "50%",
		left: "25%",
		top: "25%",
		pointerEvents: "none",
		borderRadius: "50%",
	},
	rightStick1: {
		position: "absolute",
		width: "37%",
		height: "12%",
		left: "28%",
		top: "47.2%",
		borderRadius: "50%",
	},
	rightStick2: {
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

	xboxHighlighted: {
		background: "rgba(68, 68, 68, 0.7)",
		"&.a,&.b,&.x,&.y": {
			background: "rgba(68, 68, 68, 1) !important",
		},
	},
});

class ControllerView extends PureComponent {
	constructor(props) {
		super(props);

		this.getLeftStickTransform = this.getLeftStickTransform.bind(this);
		this.getRightStickTransform = this.getRightStickTransform.bind(this);

		this.cstate = new ControllerState();

		this.state = {};
	}

	getLeftStickTransform() {
		let x = this.cstate.axes[0];
		let y = this.cstate.axes[1];

		y *= -1;

		let x2 = x * Math.sqrt(1 - (y * y) / 2) * 32;
		let y2 = y * Math.sqrt(1 - (x * x) / 2) * 32;
		// let scale = window.outerWidth / 1920;

		let scale = 1;
		let stick = document.querySelector("#leftStick");
		if (stick) {
			scale = stick.clientWidth / 55;
		}
		x2 *= scale;
		y2 *= scale;

		return `${x2}px, ${y2}px`;
	}

	getRightStickTransform() {
		let x = this.cstate.axes[2];
		let y = this.cstate.axes[3];

		y *= -1;

		let x2 = x * Math.sqrt(1 - (y * y) / 2) * 32;
		let y2 = y * Math.sqrt(1 - (x * x) / 2) * 32;

		let scale = 1;
		let stick = document.querySelector("#rightStick");
		if (stick) {
			scale = stick.clientWidth / 55;
		}
		x2 *= scale;
		y2 *= scale;

		return `${x2}px, ${y2}px`;
	}

	componentDidMount() {
		window.inputHandler.touchpad.touchWrapper.init(
			document.querySelector("#leftStick"),
			document.querySelector("#rightStick"),
		);
	}

	componentWillUnmount() {
		if (window.inputHandler.touchpad.touchWrapper.leftStick) {
			window.inputHandler.touchpad.touchWrapper.leftStick.destroy();
		}
		if (window.inputHandler.touchpad.touchWrapper.rightStick) {
			window.inputHandler.touchpad.touchWrapper.rightStick.destroy();
		}
	}

	render() {
		const { classes } = this.props;

		// if (!this.props.displayControllers) {
		// 	return this.props.children;
		// }

		this.cstate.setState(this.props.controllerState);

		let highlightedClass;
		let abxyClass;
		if (this.props.type === "joycon") {
			highlightedClass = classes.highlighted;
			abxyClass = classes.abxy;
		} else if (this.props.type === "xbox") {
			highlightedClass = classes.xboxHighlighted;
			abxyClass = classes.xboxabxy;
		}

		return (
			<>
				<div
					className={classNames(classes.controllerRoot, {
						[classes.leftOverlay]: this.props.overlay,
					})}
				>
					<img
						className={classNames(classes.image, {
							[classes.transparent]: this.props.overlay,
						})}
						src={`${window.location.origin}/images/leftJoyCon2.png`}
					/>
					<div
						id="leftStick"
						className={classNames(classes.leftStick1, {
							[highlightedClass]: this.cstate.buttons.lstick,
						})}
					>
						<div
							className={classes.leftStick2}
							style={{ transform: `translate(${this.getLeftStickTransform()})` }}
						/>
					</div>

					<div className={classes.dpad}>
						<div
							className={classNames(classes.button, "up", {
								[highlightedClass]: this.cstate.buttons.up,
							})}
						/>
						<div
							className={classNames(classes.button, "down", {
								[highlightedClass]: this.cstate.buttons.down,
							})}
						/>
						<div
							className={classNames(classes.button, "left", {
								[highlightedClass]: this.cstate.buttons.left,
							})}
						/>
						<div
							className={classNames(classes.button, "right", {
								[highlightedClass]: this.cstate.buttons.right,
							})}
						/>
					</div>
					<div className={classes.otherButtons}>
						<div
							className={classNames(classes.button, classes.otherButtons, "minus", {
								[highlightedClass]: this.cstate.buttons.minus,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "capture", {
								[highlightedClass]: this.cstate.buttons.capture,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "l", {
								[highlightedClass]: this.cstate.buttons.l,
							})}
						>
							<div className="click-passthrough">
								{this.props.type === "xbox" ? "LB" : "L"}
							</div>
						</div>
						<div className={classNames(classes.button, classes.otherButtons, "zl")}>
							<div
								className={classNames(classes.trigger1, {
									[highlightedClass]: this.cstate.buttons.zl,
								})}
							>
								{this.props.type === "xbox" ? "LT" : "ZL"}
							</div>
							<div
								className={classes.trigger2}
								style={{ width: this.cstate.axes[4] * 100 + "%" }}
							/>
						</div>
					</div>
				</div>

				{this.props.children}

				<div
					className={classNames(classes.controllerRoot, {
						[classes.rightOverlay]: this.props.overlay,
					})}
				>
					<img
						className={classNames(classes.image, {
							[classes.transparent]: this.props.overlay,
						})}
						src={`${window.location.origin}/images/rightJoyCon2.png`}
					/>
					<div
						id="rightStick"
						className={classNames(classes.rightStick1, {
							[highlightedClass]: this.cstate.buttons.rstick,
						})}
					>
						<div
							className={classes.rightStick2}
							style={{ transform: `translate(${this.getRightStickTransform()})` }}
						/>
					</div>

					<div className={abxyClass}>
						<div
							className={classNames(classes.button, "a", {
								[highlightedClass]: this.cstate.buttons.a,
							})}
						>
							{this.props.type === "xbox" && "A"}
						</div>
						<div
							className={classNames(classes.button, "b", {
								[highlightedClass]: this.cstate.buttons.b,
							})}
						>
							{this.props.type === "xbox" && "B"}
						</div>
						<div
							className={classNames(classes.button, "x", {
								[highlightedClass]: this.cstate.buttons.x,
							})}
						>
							{this.props.type === "xbox" && "X"}
						</div>
						<div
							className={classNames(classes.button, "y", {
								[highlightedClass]: this.cstate.buttons.y,
							})}
						>
							{this.props.type === "xbox" && "Y"}
						</div>
					</div>
					<div className={classes.otherButtons}>
						<div
							className={classNames(classes.button, classes.otherButtons, "plus", {
								[highlightedClass]: this.cstate.buttons.plus,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "home", {
								[highlightedClass]: this.cstate.buttons.home,
							})}
						/>
						<div
							className={classNames(classes.button, classes.otherButtons, "r", {
								[highlightedClass]: this.cstate.buttons.r,
							})}
						>
							<div className="click-passthrough">
								{this.props.type === "xbox" ? "RB" : "R"}
							</div>
						</div>
						<div className={classNames(classes.button, classes.otherButtons, "zr")}>
							<div
								className={classNames(classes.trigger1, {
									[highlightedClass]: this.cstate.buttons.zr,
								})}
							>
								{this.props.type === "xbox" ? "RT" : "ZR"}
							</div>
							<div
								className={classes.trigger2}
								style={{ width: this.cstate.axes[5] * 100 + "%" }}
							/>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default withStyles(styles)(ControllerView);

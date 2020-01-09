// react:
import React, { Component } from "react";

// react-router:
import { withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import {
	ListItemText,
	ListItem,
	List,
	OutlinedInput,
	Select,
	MenuItem,
	Button,
	Paper,
	Tabs,
	Tab,
} from "@material-ui/core";

// components:

// recompose:
import { compose } from "recompose";

const MAP_BUTTON_NAMES = [
	"b",
	"a",
	"y",
	"x",
	"l",
	"r",
	"zl",
	"zr",
	"minus",
	"plus",
	"lstick",
	"rstick",
	"up",
	"down",
	"left",
	"right",
	"home",
];

const DISPLAY_BUTTON_NAMES = [
	"B",
	"A",
	"Y",
	"X",
	"L",
	"R",
	"ZL",
	"ZR",
	"Minus",
	"Plus",
	"LStick",
	"RStick",
	"Up",
	"Down",
	"Left",
	"Right",
	"Home",
];

const BUTTON_LAYOUTS = {
	xbox: [
		"A",
		"B",
		"X",
		"Y",
		"LB",
		"RB",
		"LT",
		"RT",
		"Select",
		"Start",
		"LStick",
		"RStick",
		"Up",
		"Down",
		"Left",
		"Right",
		"Xbox",
	],
	DS4: [
		"❌",
		"⭕",
		"🟥",
		"🔺",
		"L1",
		"R1",
		"L2",
		"R2",
		"Share",
		"Options",
		"L3",
		"R3",
		"Up",
		"Down",
		"Left",
		"Right",
		"PS",
		"Touchpad",
	],
	proController: [],
};

const DISPLAY_AXIS_NAMES = ["LX", "LY", "RX", "RY"];
const MAP_AXIS_NAMES = ["LX", "LY", "RX", "RY"];

const DISPLAY_KEYBOARD_NAMES = [
	"LU",
	"LD",
	"LL",
	"LR",
	"RU",
	"RD",
	"RL",
	"RR",
	"A",
	"B",
	"X",
	"Y",
	"Up",
	"Down",
	"Left",
	"Right",
	"LStick",
	"RStick",
	"L",
	"ZL",
	"R",
	"ZR",
	"Minus",
	"Plus",
	"Capture",
	"Home",
];

const MAP_KEYBOARD_NAMES = [
	"LU",
	"LD",
	"LL",
	"LR",
	"RU",
	"RD",
	"RL",
	"RR",
	"a",
	"b",
	"x",
	"y",
	"up",
	"down",
	"left",
	"right",
	"lstick",
	"rstick",
	"l",
	"zl",
	"r",
	"zr",
	"minus",
	"plus",
	"capture",
	"home",
];

class ControllerMapper extends Component {
	constructor(props) {
		super(props);

		this.mapAxisTimer = null;
		this.mapButtonTimer = null;
		this.currentMapping = "unset";

		this.mapButton = this.mapButton.bind(this);
		this.mapAxis = this.mapAxis.bind(this);

		this.state = {
			waiting: false,
		};
	}

	shouldComponentUpdate() {
		return true;
	}

	mapButton() {
		let inputHandler = window.inputHandler;

		inputHandler.controller.lastChangedButton = null;

		this.setState({ waiting: true });

		this.mapButtonTimer = setInterval(() => {
			if (inputHandler.controller.lastChangedButton != null) {
				clearInterval(this.mapButtonTimer);

				if (this.props.type == "button") {
					let lastChangedIndex = inputHandler.controller.lastChangedButton;
					let which = parseInt(this.props.which);

					if (this.currentMapping !== "unset") {
						inputHandler.controller.settings.map.buttons[
							parseInt(this.currentMapping)
						].which = "unset";
					}

					inputHandler.controller.settings.map.buttons[lastChangedIndex].type = "button";
					inputHandler.controller.settings.map.buttons[lastChangedIndex].which =
						MAP_BUTTON_NAMES[which];
				}
				if (this.props.type == "axis") {
					// todo: finish
					// inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].type = "axis";
					// inputHandler.controller.settings.map.axes[parseInt(this.props.which)] = MAP_BUTTON_NAMES[inputHandler.controller.lastChangedButton];
				}
				inputHandler.controller.lastChangedButton = null;
				this.setState({ waiting: false });
				this.props.update();
			}
		}, 200);
	}

	mapAxis() {
		// this.setState({waiting: true});
	}

	render() {
		const { classes } = this.props;

		let DISPLAY_NAMES = this.props.type == "button" ? DISPLAY_BUTTON_NAMES : DISPLAY_AXIS_NAMES;
		let MAP_NAMES = this.props.type == "button" ? MAP_BUTTON_NAMES : MAP_AXIS_NAMES;

		let inputHandler = window.inputHandler;

		if (this.state.waiting) {
			return (
				<ListItem>
					<ListItemText>
						{`${DISPLAY_NAMES[this.props.which]}`} waiting for axis / button input...
					</ListItemText>
				</ListItem>
			);
		}
		this.currentMapping = "unset";
		if (this.props.type == "button") {
			for (let i = 0; i < inputHandler.controller.settings.map.buttons.length; i++) {
				let btn = inputHandler.controller.settings.map.buttons[i];
				if (btn.which === MAP_NAMES[this.props.which]) {
					this.currentMapping = i;
					break;
				}
			}
		} else if (this.props.type == "axis") {
			for (let i = 0; i < inputHandler.controller.settings.map.axes.length; i++) {
				let axis = inputHandler.controller.settings.map.axes[i];
				if (axis.which === MAP_NAMES[this.props.which]) {
					this.currentMapping = i;
					break;
				}
			}
		}

		let currentMappingNamed;

		if (inputHandler.controller.settings.detectedType !== null) {
			currentMappingNamed =
				BUTTON_LAYOUTS[inputHandler.controller.settings.detectedType][
					this.currentMapping
				];
		} else {
			currentMappingNamed = this.currentMapping;
		}

		return (
			<ListItem className={classes.listItem}>
				<ListItemText>{`${DISPLAY_NAMES[this.props.which]}`}</ListItemText>
				<ListItemText>{currentMappingNamed}</ListItemText>
				<Button variant="contained" onClick={this.mapButton}>
					Map To Button
				</Button>
				<Button variant="contained" onClick={this.mapAxis}>
					Map To Axis
				</Button>
			</ListItem>
		);
	}
}

class KeyboardMapper extends Component {
	constructor(props) {
		super(props);

		this.mapAxisTimer = null;
		this.mapButtonTimer = null;

		this.mapKey = this.mapKey.bind(this);

		this.state = {
			waiting: false,
		};
	}

	shouldComponentUpdate() {
		return true;
	}

	mapKey() {
		let inputHandler = window.inputHandler;

		inputHandler.keyboard.lastPressedKey = null;

		this.setState({ waiting: true });

		this.mapKeyTimer = setInterval(() => {
			if (inputHandler.keyboard.lastPressedKey != null) {
				clearInterval(this.mapKeyTimer);

				inputHandler.keyboard.map[MAP_KEYBOARD_NAMES[parseInt(this.props.which)]] =
					inputHandler.keyboard.lastPressedKey;
				inputHandler.keyboard.lastPressedKey = null;

				this.setState({ waiting: false });
				this.props.update();
			}
		}, 200);
	}

	render() {
		const { classes } = this.props;

		let inputHandler = window.inputHandler;

		if (this.state.waiting) {
			return (
				<ListItem>
					<ListItemText>
						{`${DISPLAY_KEYBOARD_NAMES[this.props.which]}`} waiting for keypress...
					</ListItemText>
				</ListItem>
			);
		}

		// let currentMapping = inputHandler.keyboard.map2[parseInt(this.props.which)];
		let currentMapping =
			inputHandler.keyboard.map[MAP_KEYBOARD_NAMES[parseInt(this.props.which)]];

		return (
			<ListItem className={classes.listItem}>
				<ListItemText>{`${DISPLAY_KEYBOARD_NAMES[this.props.which]}`}</ListItemText>
				<ListItemText>{currentMapping}</ListItemText>
				<Button variant="contained" onClick={this.mapKey}>
					Map To Key
				</Button>
			</ListItem>
		);
	}
}

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		// padding: "0px 0px 25px 0px !important",
		padding: "0 !important",
	},
	controllerRemapper: {
		display: "flex",
		flexDirection: "column",
		padding: "15px",
	},
	keyboardRemapper: {
		display: "flex",
		flexDirection: "column",
		padding: "15px",
	},
	list: {
		maxHeight: "400px",
		overflowY: "auto",
	},
	listItem: {
		"& > div": {
			width: "10%",
		},
	},
});

class InputMapperModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			whichTab: 0,
		};
	}

	handleClose = () => {
		// this.props.history.push("/");
		this.props.history.goBack();
	};

	handleChange = (event) => {
		let inputHandler = window.inputHandler;
		inputHandler.controller.settings.controllerIndex = "" + event.target.value;
		this.setState({});
	};

	rescanGamepads = () => {
		window.inputHandler.controller.autoSelectGamepad();
		this.update();
	};

	update = () => {
		this.setState({});
	};

	shouldComponentUpdate() {
		return true;
	}

	render() {
		const { classes } = this.props;

		console.log("re-rendering InputMapperModal.");

		// let which = this.props.history.location.pathname.indexOf("/controller") > -1 ? 0 : 1;
		// let which = this.props.history.location.pathname.indexOf("/controller") > -1 ? 0 : 1;

		let inputHandler = window.inputHandler;
		let gamepadWrapper = inputHandler.gamepadWrapper;

		let activeGamepadIndex = inputHandler.controller.settings.controllerIndex;

		let gamepads = [];
		for (let gamepadIndex in gamepadWrapper.controllers) {
			gamepads.push(
				<MenuItem key={gamepadIndex} value={gamepadIndex}>
					{gamepadWrapper.controllers[gamepadIndex].id}
				</MenuItem>,
			);
		}

		// show that no gamepad is selected if one isn't:
		if (activeGamepadIndex == null && gamepads.length > 0) {
			// set to 0 so we render this:
			activeGamepadIndex = 0;
			// prepend so it's first:
			gamepads.unshift(
				<MenuItem key={0} value={0}>
					No gamepad selected
				</MenuItem>,
			);
		}

		if (gamepads.length == 0 || activeGamepadIndex == null) {
			activeGamepadIndex = 0;
			gamepads.push(
				<MenuItem key={0} value={0}>
					No gamepads detected
				</MenuItem>,
			);
		}

		return (
			<div className={classes.root}>
				{/* <AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							Controls
						</Typography>
					</Toolbar>
				</AppBar> */}
				<Tabs
					centered
					value={this.state.whichTab}
					classes={{ root: classes.tabs }}
					variant="fullWidth"
					indicatorColor="primary"
					textColor="primary"
					// scrollable
					// scrollButtons="auto"
					onChange={(event, value) => {
						// if (value === 0) {
						// 	this.props.history.replace("/settings/controls/controller");
						// }
						// if (value === 1) {
						// 	this.props.history.replace("/settings/controls/keyboard");
						// }
						this.setState({ whichTab: value });
					}}
				>
					<Tab label="Controller" />
					<Tab label="Keyboard" />
					{/* <Tab label="Mouse" /> */}
				</Tabs>
				{this.state.whichTab === 0 && (
					<Paper className={classes.controllerRemapper} elevation={4}>
						<ListItemText>
							Active Gamepad Type:
							{" " + (inputHandler.controller.settings.detectedType || "Unknown")}
						</ListItemText>

						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Select
								value={activeGamepadIndex}
								onChange={this.handleChange}
								input={<OutlinedInput labelWidth={0} />}
								style={{
									width: "80%",
								}}
							>
								{gamepads}
							</Select>
							<Button variant="contained" onClick={this.rescanGamepads}>
								Rescan
							</Button>
						</div>

						<Paper elevation={2} style={{ marginTop: 15 }}>
							<List className={classes.list}>
								{[...Array(17)].map((e, i) => (
									<ControllerMapper
										key={i}
										update={this.update}
										type="button"
										which={i}
										classes={this.props.classes}
									/>
								))}
								{[...Array(4)].map((e, i) => (
									<ControllerMapper
										key={i}
										update={this.update}
										type="axis"
										which={i}
										classes={this.props.classes}
									/>
								))}
							</List>
						</Paper>
					</Paper>
				)}
				{this.state.whichTab === 1 && (
					<Paper className={classes.keyboardRemapper} elevation={4}>
						<Paper elevation={2}>
							<List className={classes.list}>
								{[...Array(26)].map((e, i) => (
									<KeyboardMapper
										key={i}
										update={this.update}
										inputHandler={inputHandler}
										type="button"
										which={i}
										classes={this.props.classes}
									/>
								))}
							</List>
						</Paper>
					</Paper>
				)}
			</div>
		);
	}
}

export default compose(withRouter, withStyles(styles))(InputMapperModal);

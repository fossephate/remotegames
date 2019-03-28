// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";

// recompose:
import { compose } from "recompose";

const classNames = require("classnames");

const BUTTON_NAMES = [
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

const AXIS_NAMES = ["LX", "LY", "RX", "RY"];

const KEYBOARD_MAP = [
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

class ControllerMapper extends PureComponent {
	constructor(props) {
		super(props);

		this.mapAxisTimer = null;
		this.mapButtonTimer = null;

		this.mapButton = this.mapButton.bind(this);
		this.mapAxis = this.mapAxis.bind(this);

		this.state = {
			waiting: false,
		};
	}

	mapButton() {
		let inputHandler = this.props.inputHandler;

		inputHandler.controller.lastChangedButton = null;

		this.setState({ waiting: true });

		this.mapButtonTimer = setInterval(() => {
			if (inputHandler.controller.lastChangedButton != null) {
				clearInterval(this.mapButtonTimer);

				if (this.props.type == "button") {
					let lastChangedIndex = inputHandler.controller.lastChangedButton;
					let which = parseInt(this.props.which);
					// console.log(inputHandler.controller.settings.map.buttons[lastChangedIndex].which);
					console.log(lastChangedIndex);
					inputHandler.controller.settings.map.buttons[lastChangedIndex].type = "button";
					inputHandler.controller.settings.map.buttons[lastChangedIndex].which =
						BUTTON_NAMES[parseInt(this.props.which)];
				}
				if (this.props.type == "axis") {
					// todo: finish
					// inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].type = "axis";
					// inputHandler.controller.settings.map.axes[parseInt(this.props.which)] = BUTTON_NAMES[inputHandler.controller.lastChangedButton];
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

		let NAMES = this.props.type == "button" ? BUTTON_NAMES : AXIS_NAMES;

		let inputHandler = this.props.inputHandler;

		if (this.state.waiting) {
			return (
				<ListItem>
					<ListItemText>
						{`${NAMES[this.props.which]}`} waiting for axis / button input...
					</ListItemText>
				</ListItem>
			);
		}
		// let currentMapping = this.props.type + " ";
		let currentMapping = "";
		if (this.props.type == "button") {
			// currentMapping += inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].which;
			for (let i = 0; i < inputHandler.controller.settings.map.buttons.length; i++) {
				let btn = inputHandler.controller.settings.map.buttons[i];
				if (btn.which == NAMES[this.props.which]) {
					// currentMapping.push(i);
					currentMapping = i;
					break;
				}
			}
		}
		if (this.props.type == "axis") {
			// currentMapping += inputHandler.controller.settings.map.axes[parseInt(this.props.which)].which;
			for (let i = 0; i < inputHandler.controller.settings.map.axes.length; i++) {
				let axis = inputHandler.controller.settings.map.axes[i];
				if (axis.which == NAMES[this.props.which]) {
					// currentMapping.push(i);
					currentMapping = i;
					break;
				}
			}
		}

		return (
			<ListItem>
				<ListItemText>{`${NAMES[this.props.which]}`}</ListItemText>
				<ListItemText>{currentMapping}</ListItemText>
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

class KeyboardMapper extends PureComponent {
	constructor(props) {
		super(props);

		this.mapAxisTimer = null;
		this.mapButtonTimer = null;

		this.mapKey = this.mapKey.bind(this);

		this.state = {
			waiting: false,
		};
	}

	mapKey() {
		let inputHandler = this.props.inputHandler;

		console.log(inputHandler);

		inputHandler.keyboard.lastPressedKey = null;

		this.setState({ waiting: true });

		this.mapKeyTimer = setInterval(() => {
			if (inputHandler.keyboard.lastPressedKey != null) {
				clearInterval(this.mapKeyTimer);

				inputHandler.keyboard.map2[parseInt(this.props.which)] =
					inputHandler.keyboard.lastPressedKey;

				inputHandler.keyboard.lastPressedKey = null;
				this.setState({ waiting: false });
				this.props.update();
			}
		}, 200);
	}

	render() {
		const { classes } = this.props;

		if (this.state.waiting) {
			return (
				<ListItem>
					<ListItemText>
						{`${KEYBOARD_MAP[this.props.which]}`} waiting for keypress...
					</ListItemText>
				</ListItem>
			);
		}

		let currentMapping = this.props.inputHandler.keyboard.map2[
			parseInt(this.props.which)
		];

		return (
			<ListItem>
				<ListItemText>{`${KEYBOARD_MAP[this.props.which]}`}</ListItemText>
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
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "95%",
		maxWidth: "950px",
		// padding: "30px",
		// position: "absolute",
		// width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		borderRadius: "5px",
	},
	center: {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
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
});

class InputMapperModal extends PureComponent {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.update = this.update.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.history.push("/");
	}

	handleChange(event) {
		console.log(event.target.value);
		this.props.inputHandler.controller.settings.controllerIndex = "" + event.target.value;
		this.setState({});
	}

	update() {
		console.log("re-rendering Input Mapper Modal");
		this.setState({});
	}

	render() {
		const { classes } = this.props;

		let inputHandler = this.props.inputHandler;
		let gamepadWrapper = inputHandler.gamepadWrapper;

		let activeGamepadIndex = inputHandler.controller.settings.controllerIndex;
		let activeGamepad = gamepadWrapper.controllers[activeGamepadIndex];

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
			<Modal open={true} onClose={this.handleClose}>
				<div className={classNames(classes.root, classes.center)}>
					<Paper className={classes.controllerRemapper} elevation={4}>
						<ListItemText>Active Gamepad:</ListItemText>

						<Select
							value={activeGamepadIndex}
							onChange={this.handleChange}
							input={<OutlinedInput labelWidth={0} />}
						>
							{gamepads}
						</Select>

						<List className={classes.list}>
							{[...Array(17)].map((e, i) => (
								<ControllerMapper
									key={i}
									update={this.update}
									inputHandler={inputHandler}
									type="button"
									which={i}
								/>
							))}
							{[...Array(4)].map((e, i) => (
								<ControllerMapper
									key={i}
									update={this.update}
									inputHandler={inputHandler}
									type="axis"
									which={i}
								/>
							))}
						</List>
					</Paper>

					<Paper className={classes.keyboardRemapper} elevation={4}>
						<ListItemText>Keyboard Remapper:</ListItemText>
						<List className={classes.list}>
							{[...Array(26)].map((e, i) => (
								<KeyboardMapper
									key={i}
									update={this.update}
									inputHandler={inputHandler}
									type="button"
									which={i}
								/>
							))}
						</List>
					</Paper>
				</div>
			</Modal>
		);
	}
}

export default compose(
	withRouter,
	withStyles(styles),
)(InputMapperModal);

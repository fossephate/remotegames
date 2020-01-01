// react:
import React, { Component } from "react";

// react-router:
import { Route, withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// components:

// recompose:
import { compose } from "recompose";

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
						BUTTON_NAMES[which];
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

		let inputHandler = window.inputHandler;

		if (this.state.waiting) {
			return (
				<ListItem>
					<ListItemText>
						{`${NAMES[this.props.which]}`} waiting for axis / button input...
					</ListItemText>
				</ListItem>
			);
		}
		// this.currentMapping = this.props.type + " ";
		this.currentMapping = "unset";
		if (this.props.type == "button") {
			// this.currentMapping += inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].which;
			for (let i = 0; i < inputHandler.controller.settings.map.buttons.length; i++) {
				let btn = inputHandler.controller.settings.map.buttons[i];
				if (btn.which === NAMES[this.props.which]) {
					// this.currentMapping.push(i);
					this.currentMapping = i;
					break;
				}
			}
		} else if (this.props.type == "axis") {
			// this.currentMapping += inputHandler.controller.settings.map.axes[parseInt(this.props.which)].which;
			for (let i = 0; i < inputHandler.controller.settings.map.axes.length; i++) {
				let axis = inputHandler.controller.settings.map.axes[i];
				if (axis.which === NAMES[this.props.which]) {
					// this.currentMapping.push(i);
					this.currentMapping = i;
					break;
				}
			}
		}

		return (
			// <ListItem>
			// 	<ListItemText>{`${NAMES[this.props.which]}`}</ListItemText>
			// 	<ListItemText>{this.currentMapping}</ListItemText>
			// 	<Button variant="contained" onClick={this.mapButton}>
			// 		Map To Button
			// 	</Button>
			// 	<Button variant="contained" onClick={this.mapAxis}>
			// 		Map To Axis
			// 	</Button>
			// </ListItem>
			<ListItem className={classes.listItem}>
				<ListItemText>{`${NAMES[this.props.which]}`}</ListItemText>
				<ListItemText>{this.currentMapping}</ListItemText>
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

				inputHandler.keyboard.map[KEYBOARD_MAP[parseInt(this.props.which)]] =
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
						{`${KEYBOARD_MAP[this.props.which]}`} waiting for keypress...
					</ListItemText>
				</ListItem>
			);
		}

		// let currentMapping = inputHandler.keyboard.map2[parseInt(this.props.which)];
		let currentMapping =
			inputHandler.keyboard.map[KEYBOARD_MAP[parseInt(this.props.which)]];

		return (
			<ListItem className={classes.listItem}>
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

		this.handleChange = this.handleChange.bind(this);
		this.update = this.update.bind(this);
		this.rescanGamepads = this.rescanGamepads.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		// this.props.history.push("/");
		this.props.history.goBack();
	}

	handleChange(event) {
		let inputHandler = window.inputHandler;
		inputHandler.controller.settings.controllerIndex = "" + event.target.value;
		this.setState({});
	}

	rescanGamepads() {
		window.inputHandler.controller.autoSelectGamepad();
		this.update();
	}

	update() {
		this.setState({});
	}

	shouldComponentUpdate() {
		return true;
	}

	render() {
		const { classes } = this.props;

		console.log("re-rendering InputMapperModal.");

		let which = this.props.history.location.pathname.indexOf("/controller") > -1 ? 0 : 1;

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
			<Dialog
				open={true}
				scroll="body"
				maxWidth="sm"
				fullWidth={true}
				onClose={this.handleClose}
			>
				<DialogContent className={classes.root}>
					<AppBar position="static">
						<Toolbar>
							<Typography variant="h6" color="inherit">
								Controls
							</Typography>
						</Toolbar>
					</AppBar>
					<Tabs
						centered
						value={which}
						classes={{ root: classes.tabs }}
						variant="fullWidth"
						indicatorColor="primary"
						textColor="primary"
						// scrollable
						// scrollButtons="auto"
						onChange={(event, value) => {
							if (value === 0) {
								this.props.history.replace("/controls/controller");
							}
							if (value === 1) {
								this.props.history.replace("/controls/keyboard");
							}
						}}
					>
						<Tab label="Controller" />
						<Tab label="Keyboard" />
						{/* <Tab label="Mouse" /> */}
					</Tabs>

					<Route
						path="/controls/controller"
						render={(props) => {
							return (
								<Paper className={classes.controllerRemapper} elevation={4}>
									<ListItemText>Active Gamepad:</ListItemText>

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
							);
						}}
					/>

					<Route
						path="/controls/keyboard"
						render={(props) => {
							return (
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
							);
						}}
					/>
				</DialogContent>
			</Dialog>
		);
	}
}

export default compose(withRouter, withStyles(styles))(InputMapperModal);

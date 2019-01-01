// react:
import React, { PureComponent } from "react";

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
import MyCheckbox from "src/components/MyCheckbox.jsx"

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

class Mapper extends PureComponent {

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

		console.log(window.inputHandler);

		window.inputHandler.controller.lastChangedButton = null;

		this.setState({waiting: true});

		this.mapButtonTimer = setInterval(() => {

			if (window.inputHandler.controller.lastChangedButton != null) {
				clearInterval(this.mapButtonTimer);

				if (this.props.type == "button") {
					window.inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].type = "button";
					console.log(window.inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].which);
					window.inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].which = BUTTON_NAMES[window.inputHandler.controller.lastChangedButton];
				}
				if (this.props.type == "axis") {
					// todo: finish
					window.inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].type = "axis";
					window.inputHandler.controller.settings.map.axes[parseInt(this.props.which)] = BUTTON_NAMES[window.inputHandler.controller.lastChangedButton];
				}
				this.setState({waiting: false});
			}

		}, 200);

	}

	mapAxis() {

		// this.setState({waiting: true});

	}

	render() {

		const { classes } = this.props;

		if (this.state.waiting) {
			return (
				<ListItem>
					<ListItemText>{`${this.props.type} ${this.props.which}`} Waiting for axis / button input...</ListItemText>
				</ListItem>
			);
		}
		// let currentMapping = this.props.type + " ";
		let currentMapping = "";
		if (this.props.type == "button") {
			currentMapping += window.inputHandler.controller.settings.map.buttons[parseInt(this.props.which)].which;
		}
		if (this.props.type == "axis") {
			currentMapping += window.inputHandler.controller.settings.map.axes[parseInt(this.props.which)].which;
		}

		return (
			<ListItem>
				<ListItemText>{`${this.props.type} ${this.props.which}`}</ListItemText>
				<ListItemText>{currentMapping}</ListItemText>
				<Button variant="contained" onClick={this.mapButton}>Map To Button</Button>
				<Button variant="contained" onClick={this.mapAxis}>Map To Axis</Button>
			</ListItem>
		);
	}
}


// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
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

	},
	keyboardRenapper: {

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
	}

	handleChange(event) {
		console.log(event.target.value);
		inputHandler.controller.settings.controllerIndex = "" + event.target.value;
		this.setState({});
	}

	render() {

		const { classes } = this.props;

		let activeGamepadIndex = inputHandler.controller.settings.controllerIndex;
		let activeGamepad = window.gamepadWrapper.controllers[activeGamepadIndex];
		console.log(activeGamepad, activeGamepadIndex);

		let gamepads = [];
		for (let gamepadIndex in window.gamepadWrapper.controllers) {
			gamepads.push(<MenuItem value={gamepadIndex}>{window.gamepadWrapper.controllers[gamepadIndex].id}</MenuItem>);
		}

		if (gamepads.length == 0) {
			gamepads.push(<MenuItem value={0}>No gamepads detected</MenuItem>);
		}

		// if (activeGamepad == null) {
		// 	gamepads.push(<MenuItem value={"none"}>No gamepad selected</MenuItem>);
		// 	activeGamepad = "none";
		// }

		// gamepads.push(<MenuItem value={"test"}>No gamepads detected</MenuItem>);

		return (
			<Modal
				open={true}
				onClose={() => {this.props.handleClose()}}>

				<div className={classNames(classes.root, classes.center)}>

					<Paper className={classes.controllerRemapper} elevation={4}>

						<ListItemText>Active Gamepad:</ListItemText>

						<Select
							value={activeGamepadIndex}
							onChange={this.handleChange}
							input={<OutlinedInput labelWidth={0}/>}>

							{gamepads}
						</Select>

						<List className={classes.list}>
							<Mapper type="button" which="0"/>
							<Mapper type="button" which="1"/>
							<Mapper type="button" which="2"/>
							<Mapper type="button" which="3"/>
							<Mapper type="button" which="4"/>
							<Mapper type="button" which="5"/>
							<Mapper type="button" which="6"/>
							<Mapper type="button" which="7"/>
							<Mapper type="button" which="8"/>
							<Mapper type="button" which="9"/>
							<Mapper type="button" which="10"/>
							<Mapper type="button" which="11"/>
							<Mapper type="button" which="12"/>
							<Mapper type="button" which="13"/>
							<Mapper type="button" which="14"/>
							<Mapper type="button" which="15"/>
							<Mapper type="button" which="16"/>
							<Mapper type="button" which="17"/>
							<Mapper type="button" which="18"/>
							<Mapper type="axis" which="0"/>
							<Mapper type="axis" which="1"/>
							<Mapper type="axis" which="2"/>
							<Mapper type="axis" which="3"/>
						</List>
					</Paper>

					<Paper className={classes.keyboardRemapper} elevation={4}>

					</Paper>

				</div>

			</Modal>
		);
	}

}

export default withStyles(styles)(InputMapperModal);

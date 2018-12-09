// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx"
// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		position: "relative",
		marginLeft: "5px",
		marginRight: "5px",
		textAlign: "center",
	},
	canvas: {
		width: "73.2%",
		alignSelf: "center",
	},
	twitch: {
		width: "73.2%",
		height: "100%",
	},
	fullscreen: {
		width: "100% !important",
		margin: "0",
		padding: "0",
		border: "none",
	},
});


class InputMapperModal extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return (
			<Modal onClose={this.props.handleClose}>

			</Modal>
		);
	}

}

export default withStyles(styles)(InputMapperModal);

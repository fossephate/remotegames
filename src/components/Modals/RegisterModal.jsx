// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import MyCheckbox from "src/components/General/MyCheckbox.jsx";

import RegisterForm from "src/components/Forms/RegisterForm.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// recompose:
import { compose } from "recompose";

// libs:
const classNames = require("classnames");

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	[device.tablet]: {
		root: {
			flexDirection: "row",
		},
	},
	createAnAccount: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	},
	connectAnAccount: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "start",
		minWidth: "25%",
		textAlign: "center",
	},
});

class RegisterModal extends PureComponent {
	constructor(props) {
		super(props);

		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.history.push("/");
	}

	handleRegisterForm(values) {
		console.log(values);
	}

	render() {
		const { classes } = this.props;

		return (
			<Dialog
				open={true}
				scroll="body"
				maxWidth="lg"
				// fullWidth={true}
				onClose={this.handleClose}
			>
				<DialogContent className={classes.root}>
					<div className={classes.createAnAccount}>
						<div>
							<ListItemText>Create an Account</ListItemText>
						</div>
						<RegisterForm onSubmit={this.handleRegisterForm} />
					</div>

					<div className={classes.connectAnAccount}>
						<div>
							<ListItemText>Connect an Account</ListItemText>
						</div>
						<ConnectAccounts />
					</div>
				</DialogContent>
			</Dialog>
		);
	}
}

export default compose(
	withRouter,
	withStyles(styles),
)(RegisterModal);

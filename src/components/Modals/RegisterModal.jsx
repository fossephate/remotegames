// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx"

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";

// recompose:
import { compose } from "recompose";

// libs:
const classNames = require("classnames");

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
	createAnAccount: {
		display: "flex",
		flexDirection: "column",
	},
	connectAnAccount: {
		display: "flex",
	    flexDirection: "column",
		justifyContent: "start",
		marginLeft: "50px",
		minWidth: "230px",
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

	render() {

		const { classes } = this.props;

		return (
			<Modal
				open={true}
				onClose={this.handleClose}>

				<div className={classNames(classes.root, classes.center)}>

					<div className={classes.createAnAccount}>
						<h2><ListItemText>Create an Account</ListItemText></h2>
						<TextField id="registerUsername" className="" label="Username" type="name" margin="normal" variant="outlined"/>
						<TextField id="registerEmail" className="" label="Email" type="email" autoComplete="email" margin="normal" variant="outlined"/>
						<TextField id="registerPassword" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
						<TextField id="registerPassword2" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
						<MyCheckbox text={"I am over 13 years old"} handleChange={() => {}} checked={false}/>
						<Button id="registerSubmit" className="" variant="contained" color="primary" onClick={() => {alert("Coming soon™")}}>Create Account</Button>
					</div>

					<div className={classes.connectAnAccount}>
						<h2><ListItemText>Connect an Account</ListItemText></h2>
						<ConnectAccounts/>
					</div>

				</div>
			</Modal>
		);
	}

}

export default compose(
	withRouter,
	withStyles(styles),
)(RegisterModal);

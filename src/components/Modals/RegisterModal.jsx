// react:
import React, { PureComponent } from "react";

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
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		// height: "100%",
		// pointerEvents: "none",
		position: "fixed",
	    top: "50%",
	    left: "50%",
	    transform: "translate(-50%, -50%)",
	    // -webkit-transform: translate(-50%, -50%)",
	    // -moz-transform: translate(-50%, -50%)",
	    // -o-transform: translate(-50%, -50%)",
	    // -ms-transform: translate(-50%, -50%)",
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

		this.state = {
			open: false,
		};
	}

	handleOpen() {
		this.setState({ open: true });
	}

	handleClose() {
		this.setState({ open: false });
	}

	render() {

		const { classes } = this.props;

		return (
			<Modal
				open={this.props.open}
				onClose={() => {this.handleClose();this.props.handleClose()}}>

				{/* <div className={classes.center}> */}
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
				{/* </div> */}
			</Modal>
		);
	}

}

export default withStyles(styles)(RegisterModal);

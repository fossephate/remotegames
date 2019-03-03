// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Modal from "@material-ui/core/Modal";


// recompose:
import { compose } from "recompose";


// jss:
const styles = (theme) => ({
	root: {
		// display: "flex",
		// flexDirection: "row",
		// justifyContent: "center",
		// position: "relative",
		// marginLeft: "5px",
		// marginRight: "5px",
		// textAlign: "center",
	},
});

class LoginModal extends PureComponent {

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

				<div className={classes.root}>
					{/* <div className="login">
						<h2><ListItemText>Login</ListItemText></h2>
						<TextField id="loginUser" className="" label="Username" type="name" margin="normal" variant="outlined"/>
						<TextField id="loginEmail" className="" label="Email" type="email" autoComplete="email" margin="normal" variant="outlined"/>
						<TextField id="loginPassword" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
						<Button id="loginSubmit" className="" variant="contained" color="primary" onClick={() => {alert("Coming soon™")}}>Login</Button>
					</div> */}

					<div className="connectAnAccount">
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
)(LoginModal);

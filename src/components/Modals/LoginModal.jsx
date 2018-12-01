// react:
import React, { PureComponent } from "react";

// components:
import Modal from "./Modal.jsx";
import ConnectAccounts from "src/components/ConnectAccounts.jsx";

// material ui:
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";


// import "./LogInArea.css";

export default class LogInModal extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Modal handleClose={this.props.handleClose}>
				<Paper elevation={4} className="paper">
					<div className="loginContainer">
						<div className="login">
							<h2><ListItemText>Login</ListItemText></h2>
							<TextField id="loginUser" className="" label="Username" type="name" margin="normal" variant="outlined"/>
							<TextField id="loginEmail" className="" label="Email" type="email" autoComplete="email" margin="normal" variant="outlined"/>
							<TextField id="loginPassword" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
							<Button id="loginSubmit" className="" variant="contained" color="primary" onClick={() => {alert("Coming soon™")}}>Login</Button>
						</div>

						<div className="connectAnAccount">
							<h2><ListItemText>Connect an Account</ListItemText></h2>
							<ConnectAccounts/>
						</div>
					</div>
				</Paper>
			</Modal>
		);
	}

}

import React, { PureComponent } from "react";

// import "./LogInArea.css";

// material ui:
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

// components:
import Modal from "./Modal.jsx";
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx"

import "./RegisterModal.css";

export default class RegisterModal extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<React.Fragment>
				<Modal handleClose={this.props.handleClose}>
					<Paper elevation={1} className="paper">

						<div className="registerContainer">
							<div className="createAnAccount">
								<h2>Create an Account</h2>
								<TextField id="registerUsername" className="" label="Username" type="name" margin="normal" variant="outlined"/>
								<TextField id="registerEmail" className="" label="Email" type="email" autoComplete="email" margin="normal" variant="outlined"/>
								<TextField id="registerPassword" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
								<TextField id="registerPassword2" className="" label="Password" type="password" autoComplete="current-password" margin="normal" variant="outlined"/>
								<MyCheckbox text={"I am over 13 years old"} handleChange={() => {}} checked={false}/>
								<Button id="registerSubmit" className="" variant="contained" color="primary" onClick={() => {alert("Not yet implemented!")}}>Create Account</Button>
							</div>

							<div className="connectAnAccount">
								<h2>Connect an Account</h2>
								<ConnectAccounts connectedAccounts={[]}/>
							</div>


						</div>
					</Paper>
				</Modal>
			</React.Fragment>
		);
	}

}
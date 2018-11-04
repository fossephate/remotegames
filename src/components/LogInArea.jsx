import React, { PureComponent } from "react";

import "./LogInArea.css";

import Button from "@material-ui/core/Button";

import ConnectAccounts from "./ConnectAccounts.jsx";
import UsernameDropdown from "./UsernameDropdown.jsx";


export default class LogInArea extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<React.Fragment>
				{
					this.props.userInfo.loggedIn ?
						<div id="loggedInArea" className="otborder">
							<UsernameDropdown validUsernames={this.props.userInfo.validUsernames} myUsername={this.props.userInfo.username} handleChange={this.props.handleUsernameChange}/>
							<Button id="myAccount" variant="contained" color="primary" onClick={this.props.handleAccount}>Account</Button>
							<Button id="logOut" variant="contained" color="secondary" onClick={this.props.handleLogout}>Logout</Button>
						</div>
					:
						<div id="logInRegister" className="otborder">
							<Button id="logIn" variant="contained" color="primary" onClick={this.props.handleLogin}>Log In</Button>
							<Button id="register" variant="contained" color="secondary" onClick={this.props.handleRegister}>Register</Button>
						</div>
				}
			</React.Fragment>
		);
	}

}

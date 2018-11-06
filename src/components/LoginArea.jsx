// react:
import React, { PureComponent } from "react";

// material ui:
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// components:
import ConnectAccounts from "./ConnectAccounts.jsx";
import UsernameDropdown from "./UsernameDropdown.jsx";

// css:
import "./LoginArea.css";


export default class LogInArea extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Paper id="loginArea" elevation={4}>
				{
					this.props.userInfo.loggedIn ?
						<>
							<UsernameDropdown validUsernames={this.props.userInfo.validUsernames} myUsername={this.props.userInfo.username} handleChange={this.props.handleUsernameChange}/>
							<Button id="myAccount" variant="contained" color="primary" onClick={this.props.handleAccount}>Account</Button>
							<Button id="logOut" variant="contained" color="secondary" onClick={this.props.handleLogout}>Logout</Button>
						</>
					:
						<>
							<Button id="login" variant="contained" color="primary" onClick={this.props.handleLogin}>Log In</Button>
							<Button id="register" variant="contained" color="secondary" onClick={this.props.handleRegister}>Register</Button>
						</>
				}
			</Paper>
		);
	}

}
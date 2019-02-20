// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// components:
import ConnectAccounts from "./ConnectAccounts.jsx";
import UsernameDropdown from "./UsernameDropdown.jsx";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import { deleteAllCookies } from "libs/tools.js";

// jss:
const styles = (theme) => ({
	root: {
		gridArea: "login",
		width: "100%",
		textAlign: "center",
		display: "flex",
		justifyContent: "space-evenly",
		overflowY: "visible",
		maxHeight: "50px",
		padding: "3px",
		gridColumn: 2,
	},
	logout: {
		width: "30%",
	},
	usernameDropdown: {
		alignSelf: "center",
		background: "transparent",
	},
});


class LoginArea extends PureComponent {

	constructor(props) {
		super(props);

		this.handleAccount = this.handleAccount.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleAccount() {
		this.props.history.push("/account");
	}

	handleLogin() {
		window.swal("This doesn't do anything yet, just use the register button for now.");
		this.props.history.push("/login");
	}

	handleRegister() {
		this.props.history.push("/register");
		// this.props.updateSettings({ modal: "REGISTER" });
	}

	handleLogout() {
		deleteAllCookies();
		location.reload(true);
	}

	render() {

		const { classes } = this.props;

		// if (this.props.hideNav) {
		// 	return null;
		// }

		return (
			<Paper elevation={4} className={classes.root}>
				{
					this.props.userInfo.loggedIn ?
						<>
							<UsernameDropdown
								className={classes.usernameDropdown}
								validUsernames={this.props.userInfo.validUsernames}
								myUsername={this.props.userInfo.username}
								handleChange={this.props.handleUsernameChange}/>
							<Button variant="contained" color="primary" onClick={this.handleAccount}>Account</Button>
							<Button className={classes.logout} variant="contained" color="secondary" onClick={this.handleLogout}>Logout</Button>
						</>
					:
						<>
							<Button variant="contained" color="primary" onClick={this.handleLogin}>Login</Button>
							<Button variant="contained" color="secondary" onClick={this.handleRegister}>Register</Button>
						</>
				}
			</Paper>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		hideNav: state.settings.hideNav,
		userInfo: state.userInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings))
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(LoginArea);

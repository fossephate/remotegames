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
		// padding: "3px",
		padding: "5px 0px",
		gridColumn: 2,
	},
});

class LoginArea extends PureComponent {
	constructor(props) {
		super(props);

		this.handleAccount = this.handleAccount.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleAccount() {
		this.props.history.push("/account");
	}

	handleLogin() {
		this.props.history.push("/login");
	}

	handleRegister() {
		this.props.history.push("/register");
	}

	// handleAccount() {
	// 	this.props.history.push(`${window.location.pathname}/account`);
	// }
	//
	// handleLogin() {
	// 	this.props.history.push(`${window.location.pathname}/login`);
	// }
	//
	// handleRegister() {
	// 	this.props.history.push(`${window.location.pathname}/register`);
	// }

	render() {
		const { classes } = this.props;

		// if (this.props.hideNav) {
		// 	return null;
		// }

		return (
			<Paper elevation={4} className={classes.root}>
				{this.props.clientInfo.loggedIn ? (
					<>
						<UsernameDropdown />
						<Button variant="contained" color="primary" onClick={this.handleAccount}>
							Account
						</Button>
					</>
				) : (
					<>
						<Button variant="contained" color="primary" onClick={this.handleLogin}>
							Login
						</Button>
						<Button variant="contained" color="secondary" onClick={this.handleRegister}>
							Register
						</Button>
					</>
				)}
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hideNav: state.settings.hideNav,
		clientInfo: state.clientInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings));
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(LoginArea);

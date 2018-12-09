// react:
import React, { PureComponent } from "react";

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
		maxHeight: "44px",
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
	}

	render() {

		const { classes } = this.props;

		// if (this.props.hideNav) {
		// 	return null;
		// }

		return (
			<Paper id="loginArea" elevation={4} className={classes.root}>
				{
					this.props.userInfo.loggedIn ?
						<>
							<UsernameDropdown
								className={classes.usernameDropdown}
								validUsernames={this.props.userInfo.validUsernames}
								myUsername={this.props.userInfo.username}
								handleChange={this.props.handleUsernameChange}/>
							<Button id="myAccount" variant="contained" color="primary" onClick={this.props.handleAccount}>Account</Button>
							<Button id="logOut" className={classes.logout} variant="contained" color="secondary" onClick={this.props.handleLogout}>Logout</Button>
						</>
					:
						<>
							<Button id="login" variant="contained" color="primary" onClick={this.props.handleLogin}>Login</Button>
							<Button id="register" variant="contained" color="secondary" onClick={this.props.handleRegister}>Register</Button>
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
	return {};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(LoginArea);

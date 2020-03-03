// react:
import React, { PureComponent } from "react";

// react-router:
import { Route, withRouter } from "react-router";

// components:
import ConnectAccounts from "shared/components/account/ConnectAccounts.jsx";
import LoginForm from "shared/components/forms/LoginForm.jsx";
import RegisterForm from "shared/components/forms/RegisterForm.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	ListItemText,
	Dialog,
	DialogContent,
} from "@material-ui/core";

// recompose:
import { compose } from "recompose";

// redux:
import { connect } from "react-redux";
import {
	login,
	register,
	updateClientInfo,
	authenticate,
} from "src/actions/clientInfo.js";

// libs:
import { device } from "shared/libs/utils.js";
import Cookie from "js-cookie";
import queryString from "query-string";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		padding: "0px 0px 25px 0px !important",
	},
	[device.tablet]: {
		root: {
			flexDirection: "column",
		},
	},
	tabs: {
		"& button:focus": {
			outline: "none",
		},
	},
	createAnAccount: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		padding: "0px 15px",
	},
	connectAnAccount: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "start",
		minWidth: "25%",
		textAlign: "center",
		marginTop: "15px",
	},
});

class LoginRegisterModal extends PureComponent {
	constructor(props) {
		super(props);

		this.handleClose = this.handleClose.bind(this);
		this.handleLoginForm = this.handleLoginForm.bind(this);
		this.handleRegisterForm = this.handleRegisterForm.bind(this);
	}

	handleClose() {
		// this.props.history.push("/");
		this.props.history.goBack();
	}

	handleLoginForm(values) {
		this.props.login({
			...values,
			cb: (data) => {
				if (data.success) {
					alert("success");
					Cookie.set("RemoteGames", data.authToken, { expires: 7 });
					this.props.updateClientInfo({
						authToken: data.authToken,
						loggedIn: true,
						...data.clientInfo,
					});
					// this.props.authenticate(data.authToken);
					let values = queryString.parse(this.props.location.search);
					if (values.verified) {
						this.props.history.replace("/");
					} else {
						this.props.history.goBack();
					}
					setTimeout(() => {
						window.location.reload();
					}, 1000);
				} else {
					alert(data.reason);
				}
			},
		});
	}

	handleRegisterForm(values) {
		this.props.register({
			...values,
			cb: (data) => {
				if (data.success) {
					alert("Account created! Please login!");
					this.props.history.replace("/login");
				} else {
					alert(data.reason);
				}
			},
		});
	}

	componentDidMount() {
		const values = queryString.parse(this.props.location.search);
		if (values.verified) {
			setTimeout(() => {
				alert("Email verified.");
			}, 2000);
		}
	}

	render() {
		const { classes } = this.props;

		let which = this.props.history.location.pathname.indexOf("/login") > -1 ? 0 : 1;

		return (
			<Dialog
				open={true}
				scroll="body"
				maxWidth="sm"
				fullWidth={true}
				onClose={this.handleClose}
			>
				<DialogContent className={classes.root}>
					<AppBar position="static">
						<Toolbar>
							<Typography variant="h6" color="inherit">
								Welcome
							</Typography>
						</Toolbar>
					</AppBar>
					<Tabs
						centered
						value={which}
						classes={{ root: classes.tabs }}
						variant="fullWidth"
						indicatorColor="primary"
						textColor="primary"
						// scrollable
						// scrollButtons="auto"
						onChange={(event, value) => {
							if (value === 0) {
								this.props.history.replace("/login");
							}
							if (value === 1) {
								this.props.history.replace("/register");
							}
						}}
					>
						<Tab label="Login" />
						<Tab label="Register" />
					</Tabs>

					<Route
						path="/login"
						render={(props) => {
							return (
								<div className={classes.createAnAccount}>
									<LoginForm onSubmit={this.handleLoginForm} />
								</div>
							);
						}}
					/>
					<Route
						path="/register"
						render={(props) => {
							return (
								<div className={classes.createAnAccount}>
									<RegisterForm onSubmit={this.handleRegisterForm} />
								</div>
							);
						}}
					/>

					<div className={classes.connectAnAccount}>
						<div>
							<ListItemText>or</ListItemText>
						</div>
						<div style={{ marginTop: "15px" }}>
							<ConnectAccounts showTOS={true} />
						</div>
					</div>
				</DialogContent>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateClientInfo: (data) => {
			dispatch(updateClientInfo(data));
		},
		authenticate: (data) => {
			dispatch(authenticate(data));
		},
		login: (data) => {
			dispatch(login(data));
		},
		register: (data) => {
			dispatch(register(data));
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(LoginRegisterModal);

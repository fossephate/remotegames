// react:
import React, { PureComponent } from "react";

// react-router:
import { Route, withRouter } from "react-router";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import MyCheckbox from "src/components/General/MyCheckbox.jsx";

import LoginForm from "src/components/Forms/LoginForm.jsx";
import RegisterForm from "src/components/Forms/RegisterForm.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// recompose:
import { compose } from "recompose";

// redux:
import { connect } from "react-redux";
import { updateClientInfo, authenticate } from "src/actions/clientInfo.js";

// libs:
const classNames = require("classnames");
import socketio from "socket.io-client";
import Cookie from "js-cookie";
import queryString from "query-string";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

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

		this.socket = socketio("https://remotegames.io", {
			path: "/8099/socket.io",
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.handleClose = this.handleClose.bind(this);
		this.handleLoginForm = this.handleLoginForm.bind(this);
		this.handleRegisterForm = this.handleRegisterForm.bind(this);
	}

	handleClose() {
		// this.props.history.push("/");
		this.props.history.goBack();
	}

	handleLoginForm(values) {
		this.socket.emit("login", { ...values, socketid: this.socket.id }, (data) => {
			if (data.success) {
				alert("success");
				Cookie.set("RemoteGames", data.authToken, { expires: 7 });
				this.props.updateClientInfo({
					authToken: data.authToken,
					loggedIn: true,
					...data.clientInfo,
				});
				this.props.authenticate(data.authToken);

				const values = queryString.parse(this.props.location.search);
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
		});
	}

	handleRegisterForm(values) {
		let vals = { ...values };

		this.socket.emit("register", { ...vals }, (data) => {
			if (data.success) {
				alert("Verification email sent!");
				// Cookie.set("RemoteGames", data.authToken, { expires: 7 });
				// this.props.updateClientInfo({
				//   authToken: data.authToken,
				//   loggedIn: true,
				//   ...data.clientInfo
				// });
				// this.props.authenticate(data.authToken);
				// this.props.history.push("/");
			} else {
				alert(data.reason);
			}
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
							<ConnectAccounts />
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
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(LoginRegisterModal);

// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import LoginForm from "src/components/Forms/LoginForm.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// redux:
import { connect } from "react-redux";
import { updateClientInfo, authenticate } from "src/actions/clientInfo.js";

// recompose:
import { compose } from "recompose";

// libs:
import socketio from "socket.io-client";
import Cookie from "js-cookie";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	[device.tablet]: {
		root: {
			flexDirection: "row",
		},
	},
	createAnAccount: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	},
	connectAnAccount: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "start",
		minWidth: "25%",
		textAlign: "center",
	},
});

class LoginModal extends PureComponent {
	constructor(props) {
		super(props);

		this.socket = socketio("https://remotegames.io", {
			path: "/8099/socket.io",
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});

		this.socket.on("authenticated", (data) => {
			if (data.success) {
				Cookie.set("RemoteGames", data.authToken, { expires: 7 });
				this.props.updateClientInfo({ authToken: data.authToken });
				this.props.authenticate(data.authToken);
				this.props.history.push("/");
			}
		});

		this.handleClose = this.handleClose.bind(this);
		this.handleLoginForm = this.handleLoginForm.bind(this);
	}

	handleClose() {
		this.props.history.push("/");
	}

	handleLoginForm(values) {
		this.socket.emit("login", { ...values, socketid: this.socket.id });
	}

	render() {
		const { classes } = this.props;

		return (
			<Dialog open={true} scroll="body" maxWidth="lg" onClose={this.handleClose}>
				<DialogContent className={classes.root}>
					<div className={classes.createAnAccount}>
						<div>
							<ListItemText>Login</ListItemText>
						</div>
						<LoginForm onSubmit={this.handleLoginForm} />
					</div>
					<div className={classes.connectAnAccount}>
						<div>
							<ListItemText>Connect an Account</ListItemText>
						</div>
						<ConnectAccounts />
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
)(LoginModal);

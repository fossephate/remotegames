// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import ConnectAccounts from "shared/components/account/ConnectAccounts.jsx";
import UsernameDropdown from "shared/components/account/UsernameDropdown.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	Paper,
	Button,
	ListItemText,
	Dialog,
	DialogContent,
} from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import { device, deleteAllCookies } from "shared/libs/utils.js";

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
	center: {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	list: {
		maxHeight: "400px",
		overflowY: "auto",
	},
	logout: {
		width: "30%",
	},
	main: {
		width: "80%",
		display: "flex",
		flexDirection: "column",
	},
	topBar: {
		display: "flex",
		justifyContent: "space-evenly",
		margin: "20px 25px 10px",
		padding: "5px",
		lineHeight: "60px",
	},
});

class AccountModal extends PureComponent {
	constructor(props) {
		super(props);

		this.accountConnection = this.props.accountConnection;

		this.handleClose = this.handleClose.bind(this);
		this.handleRemoveAccount = this.handleRemoveAccount.bind(this);
	}

	handleClose() {
		// this.props.history.push("/");
		this.props.history.goBack();
	}

	handleLogout() {
		deleteAllCookies();
		location.reload(true);
	}

	handleRemoveAccount(type) {
		this.accountConnection.emit(
			"removeConnectedAccount",
			{ authToken: this.props.authToken, type: type },
			(data) => {
				if (!data.success) {
					alert(data.reason);
					return;
				} else {
					alert("success");
				}
				location.reload(true);
			},
		);
	}

	getTime(t) {
		if (t < 60) {
			return t.toFixed(1) + " seconds.";
		} else if (t < 60 * 60) {
			return (t / 60).toFixed(1) + " minutes";
		} else {
			return (t / 60 / 60).toFixed(1) + " hours";
		}
	}

	render() {
		const { classes } = this.props;

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
								Account
							</Typography>
						</Toolbar>
					</AppBar>
					<Paper className={classes.topBar} elevation={2}>
						<UsernameDropdown />
						<Button
							className={classes.logout}
							variant="contained"
							color="secondary"
							onClick={this.handleLogout}
						>
							Logout
						</Button>
					</Paper>
					<ConnectAccounts onRemoveAccount={this.handleRemoveAccount} showTOS={false} />
					<ListItemText style={{ margin: "0 auto" }}>
						You've played for {this.getTime(this.props.timePlayed)}
					</ListItemText>
				</DialogContent>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		timePlayed: state.client.timePlayed,
		// email: state.client.email,
		emailVerified: state.client.emailVerified,
		authToken: state.client.authToken,
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps),
)(AccountModal);

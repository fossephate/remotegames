// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import UsernameDropdown from "src/components//UsernameDropdown.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import classNames from "classnames";
import { deleteAllCookies } from "libs/tools.js";


// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "95%",
		maxWidth: "950px",
		// padding: "30px",
		// position: "absolute",
		// width: theme.spacing.unit * 50,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing.unit * 4,
		borderRadius: "5px",
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
	},
});

class AccountModal extends PureComponent {

	constructor(props) {
		super(props);

		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		this.props.history.push("/");
	}

	handleLogout() {
		deleteAllCookies();
		location.reload(true);
	}

	getTime(t) {
		if (t < 60) {
			return t.toFixed(1) + " seconds.";
		} else if (t < (60 * 60)) {
			return (t / 60).toFixed(1) + " minutes";
		} else {
			return (t / 60 / 60).toFixed(1) + " hours";
		}
	}

	render() {

		const { classes } = this.props;

		return (
			<Modal
				open={true}
				onClose={this.handleClose}>

				<div className={classNames(classes.root, classes.center)}>

					<Paper className={classes.main} elevation={4}>

						<Paper className={classes.topBar} elevation={2}>
							Logged in as <UsernameDropdown/>
							<Button className={classes.logout} variant="contained" color="secondary" onClick={this.handleLogout}>Logout</Button>
						</Paper>
						<ConnectAccounts/>
						<ListItemText>You've played for {this.getTime(this.props.timePlayed)}</ListItemText>


					</Paper>

				</div>
			</Modal>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		timePlayed: state.userInfo.timePlayed,
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps),
)(AccountModal);

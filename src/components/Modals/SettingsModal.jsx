// react:
import React, { Component } from "react";

// react-router:
import { Route, withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// components:

import InputMapper from "./Settings/InputMapper.jsx";
import Site from "./Settings/Site.jsx";
import AudioVideo from "./Settings/AudioVideo.jsx";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		// padding: "0px 0px 25px 0px !important",
		padding: "0 !important",
	},
	controls: {
		display: "flex",
		flexDirection: "column",
		// padding: "15px",
	},
	av: {
		display: "flex",
		flexDirection: "column",
		// padding: "15px",
	},
	site: {
		display: "flex",
		flexDirection: "column",
		// padding: "15px",
	},
});

class SettingsModal extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.update = this.update.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClose() {
		// this.props.history.push("/");
		this.props.history.goBack();
	}

	handleChange(event) {
		let inputHandler = window.inputHandler;
		inputHandler.controller.settings.controllerIndex = "" + event.target.value;
		this.setState({});
	}

	update() {
		this.setState({});
	}

	shouldComponentUpdate() {
		return true;
	}

	render() {
		const { classes } = this.props;

		console.log("re-rendering SettingsModal.");

		let which;

		switch (this.props.history.location.pathname) {
			case "/settings/av":
				which = 0;
				break;
			case "/settings/controls":
				which = 1;
				break;
			case "/settings/site":
				which = 2;
				break;
		}

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
								Settings
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
								this.props.history.replace("/settings/av");
							} else if (value === 1) {
								this.props.history.replace("/settings/controls");
							} else if (value === 2) {
								this.props.history.replace("/settings/site");
							}
						}}
					>
						<Tab label="Audio Video" />
						<Tab label="Controls" />
						<Tab label="Site" />
					</Tabs>

					<Route
						path="/settings/controls"
						render={(props) => {
							return (
								<Paper className={classes.controls} elevation={4}>
									<InputMapper />
								</Paper>
							);
						}}
					/>

					<Route
						path="/settings/site"
						render={(props) => {
							return (
								<Paper className={classes.controls} elevation={4}>
									<Site />
								</Paper>
							);
						}}
					/>

					<Route
						path="/settings/av"
						render={(props) => {
							return (
								<Paper className={classes.controls} elevation={4}>
									<AudioVideo />
								</Paper>
							);
						}}
					/>
				</DialogContent>
			</Dialog>
		);
	}
}

export default compose(withRouter, withStyles(styles))(SettingsModal);

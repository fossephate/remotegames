// react:
import React, { PureComponent } from "react";

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
});

class AudioVideo extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div>test</div>
			</div>
		);
	}
}

export default compose(withRouter, withStyles(styles))(AudioVideo);

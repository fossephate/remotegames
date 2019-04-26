// react:
import React, { PureComponent } from "react";

// components:
import PlayerInfo from "./StreamInfo/PlayerInfo.jsx";
import CheckboxSettings from "./StreamInfo/CheckboxSettings.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		gridArea: "info",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		margin: 0,
		overflowX: "hidden",
		textAlign: "center",
	},
	hideChat: {
		gridColumn: "1/3",
	},
	settings: {
		display: "flex",
		width: "100%",
		overflowY: "hidden",
		justifyContent: "space-evenly",
		padding: "10px",
	},
	settingsPanel: {
		width: "24%",
	},
});

class StreamInfo extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		let pictureClasses = classNames(classes.root, {
			[classes.hideChat]: this.props.hideChat,
		});

		return (
			<Paper elevation={3} className={classes.root}>
				<PlayerInfo />

				<Paper className={classes.settings} elevation={0}>
					<CheckboxSettings toggleAudioThree={() => {console.log("todo")}} />

					<Paper className={classes.settingsPanel} elevation={5}>
						<ListItemText>General Settings</ListItemText>
						<hr />
						<Button variant="contained" onClick={() => {console.log("todo")}}>
							Reset All Settings
						</Button>
					</Paper>
				</Paper>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hideChat: state.settings.hideChat,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(StreamInfo);

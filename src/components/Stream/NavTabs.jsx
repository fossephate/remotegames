// react:
import React, { PureComponent } from "react";

// react-router:
import { Link } from "react-router-dom";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";

// recompose:
import { compose } from "recompose";

// jss:
// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// jss:
const styles = (theme) => ({
	root: {
		gridArea: "nav",
	},
});

class NavTabs extends PureComponent {
	constructor(props) {
		super(props);
	}

	handleChange(value) {
		console.log(value);
	}

	render() {
		const { classes } = this.props;

		if (this.props.hideNav) {
			return null;
		}

		return (
			<Paper className={classes.root} elevation={4}>
				<Tabs
					centered
					value={0}
					variant="fullWidth"
					indicatorColor="secondary"
					textColor="primary"
					// scrollable
					// scrollButtons="auto"
					onChange={(event, value) => {
						this.handleChange(value);
						if (value == 1) {
							this.props.history.push("/about");
						}
						if (value == 2) {
							this.props.history.push("/FAQ");
						}
						if (value == 3) {
							window.location.href = "https://discord.io/remotegames/";
						}
						if (value == 0) {
							this.props.updateSettings({ currentPlayer: 0 });
						}
					}}
				>
					{!this.props.loggedIn ? <Tab label="Twitch" /> : <Tab label="Stream" />}
					<Tab label="About" />
					<Tab label="FAQ" />
					<Tab label="Discord" />
				</Tabs>
				{/* <Link to="/about">About</Link> */}
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.clientInfo.loggedIn,
		hideNav: state.settings.hideNav,
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
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(NavTabs);

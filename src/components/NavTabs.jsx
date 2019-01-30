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

	render() {

		const { classes } = this.props;

		if (this.props.hideNav) {
			return null;
		}

		return (
			<Paper className={classes.root} elevation={4}>
				<Tabs
					centered
					value={this.props.tabNumber}
					indicatorColor="primary"
					textColor="primary"
					// scrollable
		            // scrollButtons="auto"
					onChange={(event, value) => {
						this.props.handleChange(value);
						if (value == 2) {
							this.props.updateSettings({streamNumber: 0});
							this.props.history.push("/about");
						}
						if (value == 3) {
							this.props.updateSettings({streamNumber: 0});
							this.props.history.push("/FAQ");
						}
						if (value == 4) {
							window.location.href = "https://discord.io/tpns/";
						}
						if (value == 0) {
							this.props.updateSettings({currentPlayer: 0});
						}
						if (value == 1) {
							this.props.updateSettings({currentPlayer: 4});
						}
					}}>

					{!this.props.loggedIn ? <Tab label="Twitch"/> : null}

					{/* <Tab label="Switch1"/> */}
					<Tab label="Switch"/>
					<Tab label="Xbox"/>
					<Tab label="About"/>
					<Tab label="FAQ"/>
					<Tab label="Discord"/>
					{/* <Link to="/about">About</Link> */}
					{/* <Tab label="Wii U2"/> */}
					{/* <Tab label="Lagless3"/> */}
					{/* <Tab label="Lagless4"/> */}
					{/* <Tab label="Lagless5"/> */}
				</Tabs>
				{/* <Link to="/about">About</Link> */}
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.userInfo.loggedIn,
		hideNav: state.settings.hideNav,
		tabNumber: state.settings.streamNumber,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings))
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(NavTabs);

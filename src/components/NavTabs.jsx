// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

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
					value={this.props.value - 1}
					indicatorColor="primary"
					textColor="primary"
					// scrollable
		            // scrollButtons="auto"
					onChange={(event, value) => {
						this.props.handleChange(value + 1);
					}}>

					<Tab label="Lagless1"/>
					<Tab label="Lagless2"/>
					{/* <Tab label="Lagless3"/> */}
					{/* <Tab label="Lagless4"/> */}
					{/* <Tab label="Lagless5"/> */}
				</Tabs>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.userInfo.loggedIn,
		hideNav: state.settings.hideNav,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(NavTabs);

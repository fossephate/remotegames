// react:
import React, { PureComponent } from "react";

import LaglessView from "src/components/LaglessView.jsx";
import LaglessBar from "src/components/LaglessBar.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		gridArea: "picture",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		margin: 0,
		overflowX: "hidden",
	},
	hideChat: {
		gridColumn: "1/3",
	},
});

class BarUnderTheStream extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		let pictureClasses = classNames(classes.root, {
			[classes.hideChat]: this.props.hideChat,
		});

		return (
			<Paper id="barUnderTheStream" elevation={3} className={classes.root}>
				
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
)(Picture);

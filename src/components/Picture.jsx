// react:
import React, { PureComponent } from "react";

import LaglessView from "src/components/Lagless/LaglessView/LaglessView.jsx";
import LaglessBar from "src/components/Lagless/LaglessBar/LaglessBar.jsx";

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
		padding: "5px",
		margin: 0,
		overflowX: "hidden",
	},
	hideChat: {
		gridColumn: "1/3",
	},
	fullscreen: {
		gridRow: "1",
		gridColumn: "1/3",
		padding: "0px",
	}
});

class Picture extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		let pictureClasses = classNames(classes.root, {
			[classes.hideChat]: this.props.hideChat || this.props.fullscreen,
			[classes.fullscreen]: this.props.fullscreen,
		});

		return (
			<Paper id="picture" elevation={3} className={pictureClasses}>
				<LaglessView num={this.props.tab}/>
				<LaglessBar/>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hideChat: state.settings.hideChat,
		fullscreen: state.settings.fullscreen,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(Picture);

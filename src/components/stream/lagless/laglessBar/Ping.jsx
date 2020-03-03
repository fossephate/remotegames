// react:
import React, { Component, PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
// icons:

// components:
import Paper from "@material-ui/core/Paper";

// recompose:
import { compose } from "recompose";

// redux:
import { connect } from "react-redux";

// jss:

const styles = (theme) => ({
	root: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		padding: "5px",
	},
});

class Ping extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root} elevation={3}>
				{this.props.ping}ms
			</Paper>
		);

	}
}


const mapStateToProps = (state) => {
	return {
		ping: state.stream.time.ping,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(Ping);

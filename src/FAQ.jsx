// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {

	},
});

class FAQ extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper elevation={3} className={classes.root}>
				Frequently Asked Questions
				<Button variant="contained" onClick={() => {
					window.location = "https://twitchplaysnintendoswitch.com";
					// history.replaceState("data", "TPNS", "/");
					// this.setState({});
					// this.props.reRender();
				}}>Home</Button>
			</Paper>
		);
	}

}

const mapStateToProps = (state) => {
	return {
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(FAQ);

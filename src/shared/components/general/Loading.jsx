// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// jss:
const styles = (theme) => ({
	root: {
		// height: "100vh",
		textAlign: "center",
		lineHeight: "100vh",
		fontSize: "32px",
		width: "100%",
		position: "absolute",
		left: 0,
		top: 0,
	},
});

class Loading extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const { classes } = this.props;
		return <div className={classes.root}>Loading...</div>;
	}
}

export default withStyles(styles)(Loading);

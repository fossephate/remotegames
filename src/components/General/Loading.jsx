// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// jss:
const styles = (theme) => ({
	root: {},
});

class Loading extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		const { classes } = this.props;
		return <div>Loading...</div>;
	}
}

export default withStyles(styles)(Loading);

// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";


// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
		height: "100%",
	},
	container1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	container2: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
});

class LoadingCircle extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return (
			<Paper elevation={3} className={classes.root}>
				<div className={classes.container1}>
					<div className={classes.container2}>
						<h2>LOADING</h2>
					</div>
				</div>
			</Paper>
		);
	}

}

export default compose(
	withStyles(styles),
)(LoadingCircle);

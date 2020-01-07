// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

// redux:
import { connect } from "react-redux";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:
import { Paper, Button } from "@material-ui/core";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:
import classNames from "classnames";

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
		height: "40px",
		position: "fixed",
		bottom: 0,
		display: "flex",
		justifyContent: "space-evenly",

		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	[device.mobile]: {
		root: {},
	},
	[device.tablet]: {
		root: {},
	},
	[device.laptop]: {
		root: {},
	},
	drawerOpen: {
		marginLeft: "240px",
		width: "calc(100% - 240px)",
	},
	drawerClose: {
		width: "100%",
	},
});

class StreamsFooter extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		// console.log("re-rendering streamsfooter.");

		const { classes } = this.props;

		return (
			<Paper
				className={classNames(classes.root, {
					[classes.drawerOpen]: this.props.drawerOpen,
					[classes.drawerClose]: !this.props.drawerOpen,
				})}
				elevation={4}
			>
				<Button
					color="default"
					// variant="contained"
					onClick={() => {
						this.props.history.push("/about");
					}}
				>
					About
				</Button>
				<Button
					color="default"
					// variant="contained"
					onClick={() => {
						this.props.history.push("/tos");
					}}
				>
					TOS
				</Button>
				<Button
					color="default"
					// variant="contained"
					onClick={() => {
						this.props.history.push("/privacy");
					}}
				>
					Privacy
				</Button>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(StreamsFooter);

// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		justifyContent: "center",
		padding: "3%",
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.background.default,
	},
	main: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		width: "98%",
		height: "100%",
		padding: "2%",
	},
	image: {
		cursor: "pointer",
		marginLeft: "auto",
		marginRight: "auto",
	},
	back: {
		marginBottom: "10px",
		width: "30%",
		marginLeft: "auto",
		// marginRight: "auto",
	},
	iframe: {
		marginLeft: "auto",
		marginRight: "auto",
		width: "100%",
		height: "6090px",
		backgroundColor: "#FFF",
		borderRadius: "5px",
	},
	[device.laptop]: {},
});

class Privacy extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper elevation={0} className={classes.root}>
				<Paper elevation={3} className={classes.main}>
					<Button
						variant="contained"
						className={classes.back}
						onClick={() => {
							this.props.history.push("/");
						}}
					>
						Back
					</Button>

					<iframe
						className={classes.iframe}
						src="https://remotegames.io/privacy.html"
						frameBorder="0"
					></iframe>
				</Paper>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(Privacy);

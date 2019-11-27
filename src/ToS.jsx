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
	card: {
		width: 345,
	},
	media: {
		height: 300,
	},
	imagesContainer: {
		display: "flex",
		justifyContent: "space-evenly",
		padding: "10px",
		flexWrap: "wrap",
		marginBottom: "10px",
	},
	donationButtons: {
		display: "flex",
		flexWrap: "wrap",
	},
	twitch: {
		marginLeft: "auto",
		marginRight: "auto",
	},

	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		padding: "10px",
	},
	QA: {
		width: "99%",
		padding: "2%",
		marginBottom: "40px",
	},
	commands: {
		width: "99%",
		padding: "2%",
	},
	subCommands: {
		padding: "10px",
		marginTop: "20px",
		marginBottom: "20px",
	},
	[device.laptop]: {
		container: {
			flexDirection: "row",
		},
		QA: {
			width: "49%",
			marginBottom: "0",
		},
		commands: {
			width: "49%",
		},
	},
});

class ToS extends PureComponent {
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

					<h2>Terms of Service</h2>

					<iframe
						className={classes.twitch}
						src="https://remotegames.io/tos.html"
						// height="360"
						// width="640"
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
)(ToS);

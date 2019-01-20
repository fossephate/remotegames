// react:
import React, { PureComponent } from "react";

// components:
import PlayerInfo from "src/components/PlayerInfo.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

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
		width: "85%",
		height: "100%",
		padding: "3%",
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
});

class FAQ extends PureComponent {

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
							// window.location = "https://twitchplaysnintendoswitch.com";
							this.props.history.push("/");
						}}>Back</Button>

					<PlayerInfo/>
				</Paper>



			</Paper>
		);
	}

}

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings))
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(FAQ);

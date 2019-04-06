// react:
import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Router, Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// main components:

// material ui:
import { withStyles } from "@material-ui/core/styles";

// card:
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// components:
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:

// jss:
const styles = (theme) => ({
	root: {
		// width: "100%",
		padding: "1%",
		// display: "flex",
		// justifyContent: "space-evenly",
		// flexWrap: "wrap",
		display: "grid",
		// gridTemplateRows: "repeat(4, 1fr)",
		// gridTemplateRows: "repeat(4, 400px)",
		// gridTemplateColumns: "repeat(2, 1fr)",
		// gridTemplateColumns: "repeat(3, 1fr)",
		gridTemplateColumns: "repeat(auto-fit, 300px)",
		gridGap: "10px",
	},
	card: {
		width: 300,
		alignSelf: "center",
		marginLeft: "auto",
		marginRight: "auto",
	},
	media: {
		height: 168,
	},
	[device.tablet]: {
		root: {
			// gridTemplateRows: "repeat(4, 1fr)",
			// gridTemplateColumns: "repeat(3, 1fr)",
		},
		media: {
			// height: 160,
		},
	},
	[device.laptop]: {
		root: {
			// gridTemplateRows: "repeat(4, 1fr)",
			// gridTemplateColumns: "repeat(4, 1fr)",
		},
		media: {
			// height: 180,
		},
	},
});

class StreamList extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<Paper className={classes.root} elevation={5}>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Nintendo Switch</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
				<Card className={classes.card} elevation={5}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="/images/smo.png"
							title="Photo 1"
						/>
						<CardContent>
							<Typography component="p">Xbox One</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
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
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(StreamList);

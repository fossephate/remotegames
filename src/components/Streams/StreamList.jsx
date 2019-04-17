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

		this.changeURL = this.changeURL.bind(this);
		this.renderStreams = this.renderStreams.bind(this);

		this.state = {};
	}

	changeURL() {
		this.props.history.push("")
	}

	renderStreams() {

		const { classes, streams } = this.props;

		let cards = [];

		// for (let i = 0; i < 30; i++) {
		// 	let stream = {
		// 		username: "fosse",
		// 		thumbnailURL: "https://remotegames.io/images/smo.png",
		// 		title: "Nintendo Switch",
		// 	};
		// 	streams.push(stream);
		// }

		for (let i = 0; i < streams.length; i++) {
			let stream = streams[i];
			let card = (
				<Card key={i} className={classes.card} elevation={5}>
					<CardActionArea onClick={() => {
						this.props.history.push(`/s/${stream.username}`)
					}}>
						<CardMedia
							className={classes.media}
							image={stream.thumbnailURL}
							title="Photo"
						/>
						<CardContent>
							<Typography component="p">{stream.title}</Typography>
							<Typography component="p">{stream.username}</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			);
			cards.push(card);
		}

		return cards;
	}

	componentDidMount() {}

	render() {
		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<Paper className={classes.root} elevation={5}>
				{this.renderStreams()}
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

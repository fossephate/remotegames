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
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// components:
import Paper from "@material-ui/core/Paper";

// recompose:
import { compose } from "recompose";

// device sizes:
import { device } from "src/constants/DeviceSizes.js";

// libs:
import classNames from "classnames";

// jss:
const styles = (theme) => ({
	root: {
		// width: "100%",
		padding: "1%",
		// margin: "0 1%",
		display: "grid",
		justifyContent: "center",
		// gridTemplateRows: "repeat(4, 1fr)",
		// gridTemplateRows: "repeat(4, 400px)",
		// gridTemplateColumns: "repeat(2, 1fr)",
		// gridTemplateColumns: "repeat(3, 1fr)",
		gridTemplateColumns: "repeat(auto-fit, 300px)",
		// gridGap: "10px",
		gridGap: "60px 40px",
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerOpen: {
		marginLeft: "240px",
		width: "calc(100% - 240px)",
	},
	drawerClose: {
		width: "100%",
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

const DUMMY_URL =
	"https://dummyimage.com/1280x720/000000/fff.png&text=No+thumbnail+specified";

class StreamList extends PureComponent {
	constructor(props) {
		super(props);

		this.changeURL = this.changeURL.bind(this);
		this.renderStreams = this.renderStreams.bind(this);

		this.state = {};
	}

	changeURL() {
		this.props.history.push("");
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
					<CardActionArea
						onClick={() => {
							this.props.history.push(`/s/${stream.username}`);
						}}
					>
						{/* todo: put a default thumbnail here: */}
						<CardMedia
							className={classes.media}
							image={stream.thumbnailURL || DUMMY_URL}
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

		if (cards.length === 0) {
			return (
				<Paper elevation={4} style={{ width: 300 }}>
					<Typography component="p">No streams online right now.</Typography>
				</Paper>
			);
		}

		return cards;
	}

	componentDidMount() {}

	render() {
		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<Paper
				className={classNames(classes.root, {
					[classes.drawerOpen]: this.props.drawerOpen,
					[classes.drawerClose]: !this.props.drawerOpen,
				})}
				elevation={5}
			>
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
	withStyles(styles, { withTheme: true }),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(StreamList);

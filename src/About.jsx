// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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

class About extends PureComponent {

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
						}}>Back</Button>

					<h2>About the project</h2>

					<p>
						This website is developed and maintained by <a href="https://github.com/mfosse">Matthew Fosse</a>.
					</p>

					<p>
						The whole idea behind the project is that you can use a keyboard or controller to try out games on these consoles from anywhere with just a web browser.
					</p>

					<div className={classes.imagesContainer}>
						<Card className={classes.card} elevation={5}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="/images/about/about5.jpg"
									title="Photo 1"
									/>
								<CardContent>
									<Typography component="p">
										The consoles are hosted in Central Florida, and the server is currently located in New York.
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
						<Card className={classes.card} elevation={5}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="/images/about/about2.jpg"
									title="Photo 2"
									/>
								<CardContent>
									<Typography component="p">
										The whole setup
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>

					<p>
						The games, consoles, and server costs to run this project are primarily funded through <a href="https://twitch.tv/remotegames/subscribe/">Twitch subscriptions</a> and donations.
						If you like the project consider supporting it with the links below.
					</p>

					<div className={classes.donationButtons}>

						<img
							border="0"
							// width="130"
							alt="Donate with Twitch"
							src="/images/about/twdonatebutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://streamlabs.com/remotegames/";
							}}/>
						<img
							border="0"
							// width="130"
							alt="Join the Discord Server"
							src="/images/about/discordbutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://discord.io/tpns/";
							}}/>
						<img
							border="0"
							// width="130"
							alt="Donate with Paypal"
							src="/images/about/ppdonatebutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://paypal.me/fossephate/";
							}}/>


					</div>

					<iframe className={classes.twitch} src="https://player.twitch.tv/?channel=remotegames&muted=false&autoplay=true" height="360" width="640" frameBorder="0" scrolling="no" allowFullScreen={true}></iframe>

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
)(About);

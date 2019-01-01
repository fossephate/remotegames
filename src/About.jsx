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
							window.location = "https://twitchplaysnintendoswitch.com";
						}}>Back</Button>

					<h2>About the project</h2>

					<p>
						This website is developed and maintained by <a href="https://github.com/mfosse">Matthew Fosse</a>.
					</p>

					<p>
						The whole idea behind this project is that you can use a keyboard or controller to play these consoles on your computer with minimal lag.
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
						{/* <Card className={classes.card} elevation={5}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="/images/about/about3.jpg"
									title="Contemplative Reptile"
									/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Lizard
									</Typography>
									<Typography component="p">
										Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
										across all continents except Antarctica
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card> */}
					</div>

					<p>
						The games, consoles, and server costs to run this project are primarily funded through <a href="https://twitch.tv/twitchplaysconsoles/subscribe/">Twitch subscriptions</a> and donations.
						If you like the project consider supporting it with the links below.
					</p>

					{/* <Button variant="contained" onClick={() => {
						window.location = "https://paypal.me/matthewfosse";
					}}>Donate</Button> */}

					{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_donations"/>
						<input type="hidden" name="business" value="matt.cfosse@gmail.com"/>
						<input type="hidden" name="lc" value="US"/>
						<input type="hidden" name="item_name" value="f1v3.net"/>
						<input type="hidden" name="no_note" value="0"/>
						<input type="hidden" name="currency_code" value="USD"/>
						<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest"/>
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
						<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
					</form> */}

					{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_donations" />
						<input type="hidden" name="business" value="matt.cfosse@gmail.com" />
						<input type="hidden" name="currency_code" value="USD" />
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
						<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
					</form> */}

					<div className={classes.donationButtons}>
						{/* <img
							border="0"
							width="130"
							title="PayPal - The safer, easier way to pay online!"
							alt="Donate with PayPal button"
							src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
							className={classes.image}
							onClick={() => {
								window.location = "https://paypal.me/matthewfosse";
							}}/> */}

						{/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> */}
							{/* <input type="hidden" name="cmd" value="_donations"/> */}
							{/* <input type="hidden" name="business" value="matt.cfosse@gmail.com"/> */}
							{/* <input type="hidden" name="item_name" value="Support the Project"/> */}
							{/* <input type="hidden" name="currency_code" value="USD" /> */}
							{/* <input type="hidden" name="amount" value="5"/> */}
							{/* <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/> */}
							{/* <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1"/> */}
						{/* </form> */}

						<img
							border="0"
							// width="130"
							alt="Donate with Twitch"
							src="https://twitchplaysnintendoswitch.com/images/about/twdonatebutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://streamlabs.com/twitchplaysconsoles/";
							}}/>
						<img
							border="0"
							// width="130"
							alt="Join the Discord Server"
							src="https://twitchplaysnintendoswitch.com/images/about/discordbutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://discord.io/tpns/";
							}}/>
						<img
							border="0"
							// width="130"
							alt="Donate with Paypal"
							src="https://twitchplaysnintendoswitch.com/images/about/ppdonatebutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://paypal.me/matthewfosse/";
							}}/>

						{/* https://streamlabs.com/twitchplaysconsoles */}


					</div>

					<iframe className={classes.twitch} src="https://player.twitch.tv/?channel=twitchplaysconsoles&muted=false&autoplay=true" height="360" width="640" frameBorder="0" scrolling="no" allowFullscreen="true"></iframe>

				</Paper>



			</Paper>
		);
	}

}

const mapStateToProps = (state) => {
	return {
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(About);

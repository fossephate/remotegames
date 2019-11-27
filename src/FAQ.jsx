// react:
import React, { PureComponent } from "react";

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
							this.props.history.push("/");
						}}
					>
						Back
					</Button>

					<h2>Frequently Asked Questions and Commands</h2>

					<Paper elevation={0} className={classes.container}>
						<Paper elevation={3} className={classes.QA}>
							<h2>FAQ</h2>

							<List>
								<ListItem>
									<ListItemText>
										<b>Q: How does this work?</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: If you're looking for looking for the
										source code, use the "!source" command, if you just want the TLDR: I
										use a capture card to get the Nintendo Switch's screen, I use a micro
										controller (Arduino) that acts like a Pro Controller, and use a Python
										script to send it input. If you have any other questions, just ask
										@fosse on the discord server.
									</ListItemText>
								</ListItem>

								<ListItem>
									<ListItemText>
										<b>Q: Why can't I use the Plus/Home/Capture button?</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: It's reserved for special roles, it's setup
										like this to prevent abuse.
									</ListItemText>
								</ListItem>

								<ListItem>
									<ListItemText>
										<b>Q: What's the friend code for the Twitch account?</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: SW-4621-9617-9306.
									</ListItemText>
								</ListItem>

								<ListItem>
									<ListItemText>
										<b>Q: How do I change the game?</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: Use "!goto [game]" to switch between games,
										for a list of games, use "!games".
									</ListItemText>
								</ListItem>

								<ListItem>
									<ListItemText>
										<b>Q: Something is wrong / broken, what do I do?</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: If someone isn't there to help on stream,
										contact a mod or @fosse on the discord server.
									</ListItemText>
								</ListItem>

								<ListItem>
									<ListItemText>
										<b>Q: I want a longer turn! xxx is too short.</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: If you subscribe on twitch and use it to
										login, your turn length is doubled.
									</ListItemText>
								</ListItem>

								<ListItem>
									<ListItemText>
										<b>
											Q: Do the same commands used on the stream/site work on this server
											as well?
										</b>
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										&nbsp;&nbsp;&nbsp;&nbsp;A: No, they don't, they're only meant for the
										stream/site.
									</ListItemText>
								</ListItem>
							</List>
						</Paper>

						<Paper elevation={3} className={classes.commands}>
							<h2>Stream Commands</h2>

							<Paper elevation={2} className={classes.subCommands}>
								<h4>Commands for Everyone</h4>
								<List>
									<ListItem>
										<ListItemText>
											<b>!commands</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Gives you a list of commands.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!goto [game]</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;use without brackets to switch games, use
											!games for a list of games.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!games or !gamelist or !goto or !xboxgames or !xboxgamelist</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Shows the list of games currently available
											(switch or xbox).
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!playing</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Shows who is currently playing.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!source</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Links you to the source code for the
											project.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!site</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Links you to https://remotegames.io.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!discord</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Links you to the discord invite.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!fc</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Gives you the friend code to the Twitch
											account.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!restart1 or !restart2 or !restart3</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;refreshes the corresponding stream.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>![mod | plus | sub | ban]list</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;(no brackets) lists people in the
											corresponding group.
										</ListItemText>
									</ListItem>
								</List>
							</Paper>

							<Paper elevation={2} className={classes.subCommands}>
								<h4>Commands for Plus level users</h4>
								<List>
									<ListItem>
										<ListItemText>
											Plus level users can use the Plus / Start button in games.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!lock</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Is there a disaster? Maybe someone is being
											bad and is about to nuke the Switch? Type !lock to lock the controls
											until a mod can fix it.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!fixcontrollers</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;If the controller order gets messed up, use
											this command to fix it.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!rr [user - optional]</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Try it and see what happens!
										</ListItemText>
									</ListItem>
								</List>
							</Paper>

							<Paper elevation={2} className={classes.subCommands}>
								<h4>Commands for Mods</h4>
								<List>
									<ListItem>
										<ListItemText>
											Mods can do basically everything, including Home / Capture
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!restartscript</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Restarts the python script.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!restartserver</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Restarts the server, you shouldn't have to
											use this.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>![give | remove]plus [user]</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Gives or removes plus permission from
											[user].
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>![temp | perma]ban [user]</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Temporarily or permanently bans [user].
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>![disable | enable]chat</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Disables or enables Chat commands.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>![disable | enable]goto</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Disables or enables !goto.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>![setturnlength | setforfeitlength] [time in seconds]</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Change the amount of time for turns and
											forfeits.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!lock or !unlock</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;Lock or unlock the Switch if it is locked.
										</ListItemText>
									</ListItem>

									<ListItem>
										<ListItemText>
											<b>!forcegoto or !xboxforcegoto</b>
										</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>
											&nbsp;&nbsp;&nbsp;&nbsp;!goto but without the democracy.
										</ListItemText>
									</ListItem>
								</List>
							</Paper>
						</Paper>
					</Paper>

					<p>
						The games, consoles, and server costs to run this project are primarily funded
						through{" "}
						<a href="https://twitch.tv/remotegames/subscribe/">Twitch subscriptions</a>{" "}
						and donations. If you like the project consider supporting it with the links
						below.
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
							}}
						/>
						<img
							border="0"
							// width="130"
							alt="Join the Discord Server"
							src="/images/about/discordbutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://discord.io/tpns/";
							}}
						/>
						<img
							border="0"
							// width="130"
							alt="Donate with Paypal"
							src="/images/about/ppdonatebutton.png"
							className={classes.image}
							onClick={() => {
								window.location = "https://paypal.me/fossephate/";
							}}
						/>
					</div>

					<iframe
						className={classes.twitch}
						src="https://player.twitch.tv/?channel=remotegames&muted=false&autoplay=true"
						height="360"
						width="640"
						frameBorder="0"
						scrolling="no"
						allowFullScreen={true}
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
)(FAQ);

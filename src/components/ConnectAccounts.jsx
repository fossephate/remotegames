// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Paper, Button, Checkbox, Link } from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
		minHeight: "220px",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
		// flex: "1",
		paddingLeft: "25px",
		paddingRight: "25px",
	},
	connectWithButton: {
		display: "flex",
	},
	twitchLogo: {
		width: "60px",
		marginLeft: "10px",
		marginRight: "10px",
	},
	googleLogo: {
		width: "80px",
	},
	youtubeLogo: {
		width: "80px",
		marginLeft: "10px",
	},
	discordLogo: {
		width: "80px",
		marginLeft: "4px",
	},
});

class ConnectAccounts extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			TOSAgreed: false,
		};

		this.agreeTOS = this.agreeTOS.bind(this);
	}

	agreeTOS(event) {
		this.setState({ TOSAgreed: event.target.checked });
	}

	connectAccountOrLogin(type) {
		if (window.banned) {
			return;
		}
		let url = window.location.origin + "/8099/auth/" + type + "/";
		if (this.props.authToken != null) {
			url += "?authToken=" + this.props.authToken;
		}
		window.location.href = url;
	}

	render() {
		const { classes, showTOS } = this.props;

		let canDelete =
			this.props.connectedAccounts.length > 1 || this.props.validUsernames.length > 1;

		return (
			<Paper className={classes.root} elevation={0}>
				{showTOS && (
					<div>
						<Checkbox onChange={this.agreeTOS} />
						<span>I have read and agree to the </span>
						<Link href="/tos">Terms and Conditions</Link>
					</div>
				)}
				<div className={classes.connectWithButton}>
					<Button
						fullWidth
						variant="contained"
						color="default"
						className={null}
						onClick={() => {
							this.connectAccountOrLogin("twitch");
						}}
						disabled={!this.state.TOSAgreed && showTOS}
					>
						<span>Connect with</span>
						<img className={classes.twitchLogo} src="/images/Twitch_Purple_RGB.png" />
					</Button>
					{this.props.connectedAccounts.includes("twitch") && canDelete && (
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								this.props.onRemoveAccount("twitch");
							}}
						>
							X
						</Button>
					)}
				</div>
				<div className={classes.connectWithButton}>
					<Button
						fullWidth
						variant="contained"
						color="default"
						className={null}
						onClick={() => {
							this.connectAccountOrLogin("youtube");
						}}
						disabled={!this.state.TOSAgreed && showTOS}
					>
						<span>Connect with</span>
						<img className={classes.youtubeLogo} src="/images/yt_logo_rgb_light.png" />
					</Button>
					{this.props.connectedAccounts.includes("youtube") && canDelete && (
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								this.props.onRemoveAccount("youtube");
							}}
						>
							X
						</Button>
					)}
				</div>
				<div className={classes.connectWithButton}>
					<Button
						fullWidth
						variant="contained"
						color="default"
						className={null}
						onClick={() => {
							this.connectAccountOrLogin("google");
						}}
						disabled={!this.state.TOSAgreed && showTOS}
					>
						<span id="connectWithGoogleText">Connect with Google</span>
					</Button>
					{this.props.connectedAccounts.includes("google") && canDelete && (
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								this.props.onRemoveAccount("google");
							}}
						>
							X
						</Button>
					)}
				</div>
				<div className={classes.connectWithButton}>
					<Button
						fullWidth
						variant="contained"
						color="default"
						className={null}
						onClick={() => {
							this.connectAccountOrLogin("discord");
						}}
						disabled={!this.state.TOSAgreed && showTOS}
					>
						<span>Connect with</span>
						<img className={classes.discordLogo} src="/images/discord_logo.png" />
					</Button>
					{this.props.connectedAccounts.includes("discord") && canDelete && (
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								this.props.onRemoveAccount("discord");
							}}
						>
							X
						</Button>
					)}
				</div>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authToken: state.client.authToken,
		connectedAccounts: state.client.connectedAccounts,
		validUsernames: state.client.validUsernames,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(ConnectAccounts);

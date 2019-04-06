// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
		textAlign: "center",
		display: "flex",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
		flexDirection: "column",
		flex: "1",
		paddingLeft: "25px",
		paddingRight: "25px",
	},
	connectWithButton: {
		display: "flex",
		alignSelf: "center",
		justifyContent: "space-evenly",
		border: "1px solid #888",
		borderRadius: "5px",
		boxShadow: "1px 1px 1px grey",
		textDecoration: "none !important",
		color: "#282828",
		whiteSpace: "nowrap",
		minHeight: "40px",
		width: "100%",
		cursor: "pointer",
		backgroundColor: "#fff",

		"& > *": {
			display: "flex",
			alignSelf: "center",
			color: "#282828",
		},
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
	},
	discordLogo: {
		width: "80px",
	},
});

class ConnectAccounts extends PureComponent {
	constructor(props) {
		super(props);
	}

	connectAccountOrLogIn(type) {
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
		const { classes } = this.props;

		return (
			<Paper className={classes.root} elevation={2}>
				{this.props.connectedAccounts.indexOf("twitch") == -1 ? (
					<div
						className={classes.connectWithButton}
						onClick={() => {
							this.connectAccountOrLogIn("twitch");
						}}
					>
						<span>Connect with</span>
						<img className={classes.twitchLogo} src="/images/Twitch_Purple_RGB.png" />
					</div>
				) : null}
				{this.props.connectedAccounts.indexOf("youtubeV3Strategy") == -1 ? (
					<div
						className={classes.connectWithButton}
						onClick={() => {
							this.connectAccountOrLogIn("youtube");
						}}
					>
						<span>Connect with</span>
						<img className={classes.youtubeLogo} src="/images/yt_logo_rgb_light.png" />
					</div>
				) : null}
				{this.props.connectedAccounts.indexOf("google") == -1 ? (
					<div
						className={classes.connectWithButton}
						onClick={() => {
							this.connectAccountOrLogIn("google");
						}}
					>
						<span id="connectWithGoogleText">Connect with</span>
						<div id="googleConnectButton" className="customGPlusSignIn">
							<span className="googleIcon" />
							<span className="googleButtonText">Google</span>
						</div>
					</div>
				) : null}
				{this.props.connectedAccounts.indexOf("discord") == -1 ? (
					<div
						className={classes.connectWithButton}
						onClick={() => {
							this.connectAccountOrLogIn("discord");
						}}
					>
						<span>Connect with</span>
						<img className={classes.discordLogo} src="/images/discord_logo.png" />
					</div>
				) : null}
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authToken: state.userInfo.authToken,
		connectedAccounts: state.userInfo.connectedAccounts,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(ConnectAccounts);

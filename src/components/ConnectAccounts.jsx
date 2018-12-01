// react:
import React, { PureComponent } from "react";

// material ui:
import Paper from "@material-ui/core/Paper";
import ListItemText from "@material-ui/core/ListItemText";

// redux:
import { connect } from "react-redux";

import "./ConnectAccounts.css";

class ConnectAccounts extends PureComponent {

	constructor(props) {
		super(props);
	}

	connectAccountOrLogIn(type) {
		let url = "https://twitchplaysnintendoswitch.com/8100/auth/" + type + "/";
		if (this.props.authToken != null) {
			url += "?uniqueToken=" + this.props.authToken;
		}
		window.location.href = url;
	}

	render() {

		return (
			<div id="loggedInIndicator">
				{
					this.props.connectedAccounts.indexOf("twitch") == -1 ?
					<div className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("twitch")}}>
						<span id="connectWithTwitchText">Connect with</span>
						<img id="twitchLogo" src="/images/Twitch_Purple_RGB.png"/>
					</div>
					: null
				}
				{
					this.props.connectedAccounts.indexOf("youtubeV3Strategy") == -1 ?
						<div className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("youtube")}}>
							<span id="connectWithYouTubeText">Connect with</span>
							<img id="ytLogo" src="/images/yt_logo_rgb_light.png"/>
						</div>
					: null
				}
				{
					this.props.connectedAccounts.indexOf("google") == -1 ?
						<div className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("google")}}>
							<span id="connectWithGoogleText">Connect with</span>
							<div id="googleConnectButton" className="customGPlusSignIn">
								<span className="googleIcon"></span>
								<span className="googleButtonText">Google</span>
							</div>
						</div>
					: null
				}
				{
					this.props.connectedAccounts.indexOf("discord") == -1 ?
						<div className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("discord")}}>
							<span id="connectWithDiscordText">Connect with</span>
							<img id="discordLogo" src="/images/discord_logo.png"/>
						</div>
					: null
				}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		authToken: state.userInfo.authToken,
		connectedAccounts: state.userInfo.connectedAccounts,
	};
};

export default connect(mapStateToProps)(ConnectAccounts);

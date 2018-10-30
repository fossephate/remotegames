import React, { PureComponent } from "react";

// redux:
import { connect } from "react-redux";

import "./ConnectAccounts.css";

class ConnectAccounts extends PureComponent {

	constructor(props) {
		super(props);
	}

	connectAccountOrLogIn(type) {
		let url = "https://twitchplaysnintendoswitch.com/8110/auth/" + type + "/";
		if (this.props.authToken != null) {
			url += "?uniqueToken=" + authCookie;
		}
		window.location.href = url;
	}

	// $("#connectWithTwitchButton").on("click", function (event) {
	// 	connectAccountOrLogIn("twitch");
	// });
	// $("#connectWithGoogleButton").on("click", function (event) {
	// 	connectAccountOrLogIn("google");
	// });
	// $("#connectWithYoutubeButton").on("click", function (event) {
	// 	connectAccountOrLogIn("youtube");
	// });
	// $("#connectWithDiscordButton").on("click", function (event) {
	// 	connectAccountOrLogIn("discord");
	// });

	getUnconnectedAccounts() {

		let unconnectedAccounts = [];

		let connectWithTwitch =
			<div key={0} id="connectWithTwitch" className="connectWithContainer">
				<div id="connectWithTwitchButton" className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("twitch")}}>
					<span id="connectWithTwitchText">Connect with</span>
					<img id="twitchLogo" src="/images/Twitch_Purple_RGB.png"/>
				</div>
			</div>;

		let connectWithYoutube =
			<div key={1} id="connectWithYoutube" className="connectWithContainer">
				<div id="connectWithYoutubeButton" className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("youtube")}}>
					<span id="connectWithYouTubeText">Connect with</span>
					<img id="ytLogo" src="/images/yt_logo_rgb_light.png"/>
				</div>
			</div>;

		let connectWithGoogle =
			<div key={2} id="connectWithGoogle" className="connectWithContainer">
				<div id="connectWithGoogleButton" className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("google")}}>
					<span id="connectWithGoogleText">Connect with</span>
					<div id="googleConnectButton" className="customGPlusSignIn">
						<span className="googleIcon"></span>
						<span className="googleButtonText">Google</span>
					</div>
				</div>
			</div>;

		let connectWithDiscord =
			<div key={3} id="connectWithDiscord" className="connectWithContainer">
				<div id="connectWithDiscordButton" className="connectWithButton" onClick={() => {this.connectAccountOrLogIn("discord")}}>
					<span id="connectWithDiscordText">Connect with</span>
					<img id="discordLogo" src="/images/discord_logo.png"/>
				</div>
			</div>;


		if (this.props.connectedAccounts.indexOf("twitch") == -1) {
			unconnectedAccounts.push(connectWithTwitch);
		}
		if (this.props.connectedAccounts.indexOf("youtube") == -1) {
			unconnectedAccounts.push(connectWithYoutube);
		}
		if (this.props.connectedAccounts.indexOf("google") == -1) {
			unconnectedAccounts.push(connectWithGoogle);
		}
		if (this.props.connectedAccounts.indexOf("discord") == -1) {
			unconnectedAccounts.push(connectWithDiscord);
		}

		return unconnectedAccounts;
	}

	render() {

		return (
			<div id="loggedInIndicator">
				{this.getUnconnectedAccounts()}
			</div>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		authToken: state.userInfo.authToken,
	};
};

export default connect(mapStateToProps)(ConnectAccounts);
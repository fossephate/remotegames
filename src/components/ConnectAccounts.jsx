import React, { PureComponent } from "react";

export default class ConnectAccounts extends PureComponent {

	constructor(props) {
		super(props);
	}

	getUnconnectedAccounts() {

		let unconnectedAccounts = [];

		let connectWithTwitch =
			<div key={0} id="connectWithTwitch" className="connectWithContainer">
				<div id="connectWithTwitchButton" className="connectWithButton">
					<span id="connectWithTwitchText">Connect with</span>
					<img id="twitchLogo" src="/images/Twitch_Purple_RGB.png"/>
				</div>
			</div>;

		let connectWithYoutube =
			<div key={1} id="connectWithYoutube" className="connectWithContainer">
				<div id="connectWithYoutubeButton" className="connectWithButton">
					<span id="connectWithYouTubeText">Connect with</span>
					<img id="ytLogo" src="/images/yt_logo_rgb_light.png"/>
				</div>
			</div>;

		let connectWithGoogle =
			<div key={2} id="connectWithGoogle" className="connectWithContainer">
				<div id="connectWithGoogleButton" className="connectWithButton">
					<span id="connectWithGoogleText">Connect with</span>
						<div id="googleConnectButton" className="customGPlusSignIn">
							<span className="googleIcon"></span>
							<span className="googleButtonText">Google</span>
						</div>
				</div>
			</div>;

		let connectWithDiscord =
			<div key={3} id="connectWithDiscord" className="connectWithContainer">
				<div id="connectWithDiscordButton" className="connectWithButton">
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
import React, { PureComponent } from "react";

import LeftJoyCon from "./LeftJoyCon.jsx";
import RightJoyCon from "./RightJoyCon.jsx";
import LaglessCanvas from "./LaglessCanvas.jsx";

import "./LaglessView.css";



export default class LaglessView extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		let laglessClasses = "laglessView";
		if (this.props.largescreen || this.props.fullscreen) {
			laglessClasses += " fullscreen";
		}
		return (
			<div className={laglessClasses}>
				{this.props.controllerView ? <LeftJoyCon controllerState={this.props.controllerState}/> : null}
				{(this.props.loggedIn && (!this.props.tabsSwappedWithTwitch[this.props.num-1])) ?
					<LaglessCanvas num={this.props.num} fullscreen={this.props.fullscreen} largescreen={this.props.largescreen}/>
					:
					<iframe id="twitchVideo" className="" src="https://player.twitch.tv/?channel=twitchplaysconsoles&muted=false&autoplay=true" frameBorder="0" scrolling="no" allowFullScreen={true}></iframe>
				}
				{this.props.controllerView ? <RightJoyCon controllerState={this.props.controllerState}/> : null}
			</div>
		);
	}

}

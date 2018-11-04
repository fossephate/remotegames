import React, { PureComponent } from "react";

export default class LaglessView extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		let laglessClasses = "laglessView";
		let videoClasses = "videoCanvas";
		if (this.props.largescreen || this.props.fullscreen) {
			laglessClasses += " fullscreen";
			videoClasses += " fullscreen";
		}
		return (
			<React.Fragment>
				<canvas id="videoCanvas1" className={videoClasses} style={{display: (this.props.num != 1) ? "none" : null }}></canvas>
				<canvas id="videoCanvas2" className={videoClasses} style={{display: (this.props.num != 2) ? "none" : null }}></canvas>
				<canvas id="videoCanvas3" className={videoClasses} style={{display: (this.props.num != 3) ? "none" : null }}></canvas>
				<video id="videoCanvas4" className={videoClasses} style={{display: (this.props.num != 4) ? "none" : null }}></video>
			</React.Fragment>
		);
	}

}
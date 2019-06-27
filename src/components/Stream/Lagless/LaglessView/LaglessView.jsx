// react:
import React, { PureComponent } from "react";

import LaglessCanvas from "./LaglessCanvas.jsx";
import LeftControllerView from "./LeftControllerView.jsx";
import RightControllerView from "./RightControllerView.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		position: "relative",
		// marginLeft: "5px",
		// marginRight: "5px",
		textAlign: "center",
	},
	canvas: {
		width: "73.2%",
		alignSelf: "center",
	},
	twitch: {
		width: "73.2%",
		height: "100%",
	},
	fullscreen: {
		width: "100% !important",
		margin: "0",
		padding: "0",
		border: "none",
	},
});

class LaglessView extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		let laglessClasses = classNames(classes.root, {
			[classes.fullscreen]: this.props.largescreen || this.props.fullscreen,
		});

		let displayLagless = this.props.loggedIn && !this.props.waitlisted;
		let twitchStyle = {
			display: displayLagless ? "none" : null,
		};

		let videoClasses = classNames(classes.canvas, {
			[classes.fullscreen]: this.props.largescreen || this.props.fullscreen,
		});

		let controllerNumber = 0;

		let isXbox = this.props.streamNumber === 1;
		let controllerType = isXbox ? "xbox" : "joycon";

		return (
			<div className={laglessClasses}>
				{this.props.controllerView ? (
					<LeftControllerView
						controllerState={this.props.controllerStates[controllerNumber]}
						type={controllerType}
					/>
				) : null}

				{displayLagless ? <LaglessCanvas classes={videoClasses} /> : null}
				{/* <iframe
					id="twitchVideo"
					className={classes.twitch}
					src="https://player.twitch.tv/?channel=remotegames&muted=true&autoplay=true"
					frameBorder="0"
					scrolling="no"
					allowFullScreen={true}
					style={twitchStyle}
				/> */}

				<div id="twitchVideo" className={classes.twitch} style={twitchStyle}>
					You need to login first or this stream is offline.
				</div>

				{this.props.controllerView ? (
					<RightControllerView
						controllerState={this.props.controllerStates[controllerNumber]}
						type={controllerType}
					/>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.clientInfo.loggedIn,
		waitlisted: state.clientInfo.waitlisted,
		controllerStates: state.stream.players.controllerStates,
		controllerView: state.settings.controllerView, // whether to render the joycons
		fullscreen: state.settings.fullscreen,
		largescreen: state.settings.largescreen,
		streamNumber: 0,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(LaglessView);

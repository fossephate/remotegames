// react:
import React, { PureComponent } from "react";

import LaglessCanvas from "./LaglessCanvas.jsx";
import ControllerView from "./ControllerView.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import classNames from "classnames";

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
	offlineMessage: {
		width: "73.2%",
		alignSelf: "center",
		fontSize: "1.5em",
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

		// let displayLagless = this.props.loggedIn && !this.props.waitlisted;
		let displayLagless = true;

		if (!this.props.streamOnline) {
			displayLagless = false;
		}

		let videoClasses = classNames(classes.canvas, {
			[classes.fullscreen]: this.props.largescreen || this.props.fullscreen,
		});

		let controllerNumber = 0;

		let isXbox = false;
		let controllerType = isXbox ? "xbox" : "joycon";

		displayLagless = displayLagless ? (
			<LaglessCanvas classes={videoClasses} />
		) : (
			<div className={classes.offlineMessage}>This stream is offline.</div>
		);

		return (
			<div className={laglessClasses}>
				{this.props.controllerView ? (
					<ControllerView
						overlay={this.props.mobileMode}
						controllerState={this.props.controllerStates[controllerNumber]}
						type={controllerType}
					>
						{displayLagless}
					</ControllerView>
				) : (
					displayLagless
				)}

				{/* <ControllerView
					displayControllers={this.props.controllerView}
					overlay={this.props.mobileMode}
					controllerState={this.props.controllerStates[controllerNumber]}
					type={controllerType}
				>
					{displayLagless}
				</ControllerView> */}

				{/* {displayLagless} */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.client.loggedIn,
		waitlisted: state.client.waitlisted,
		controllerStates: state.stream.players.controllerStates,
		controllerView: state.settings.controllerView, // whether to render the joycons
		fullscreen: state.settings.fullscreen,
		largescreen: state.settings.largescreen,
		mobileMode: state.settings.mobileMode,
		streamOnline: state.stream.info.online,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(LaglessView);

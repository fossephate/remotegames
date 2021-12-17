// react:
import React, { PureComponent } from "react";

import HoverMenu from "./HoverMenu.jsx";

// material ui:
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";

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
	overlay: {
		position: "absolute",
	},
});

class LaglessCanvas extends PureComponent {
	constructor(props) {
		super(props);

		// this.videoRef = React.createRef();
		this.graphicsCanvasRef = React.createRef();

		this.state = {
			hoverMenuOpen: false,
		};
	}

	handleClick = () => {
		this.setState({ hoverMenuOpen: true });
	};

	handleMouseEnter = () => {
		this.setState({ hoverMenuOpen: true });
	};

	handleMouseLeave = (event) => {
		this.setState({ hoverMenuOpen: false });
	};

	render() {
		const { classes, videoClasses } = this.props;

		let videoCanvas = null;
		if (this.props.videoType === "mpeg1") {
			videoCanvas = (
				<canvas
					id="videoCanvas"
					// onClick={this.handleClick}
					className={videoClasses}
					// ref={this.videoRef}
				/>
			);
		} else if (this.props.videoType === "webRTC") {
			videoCanvas = (
				<video
					id="videoCanvas"
					// onClick={this.handleClick}
					className={videoClasses}
					// ref={this.videoRef}
				/>
			);
		}

		return (
			<div
				style={{ display: "contents" }}
				onClick={this.handleClick}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				{videoCanvas}
				<canvas
					id="graphicsCanvas"
					className={classNames(videoClasses, classes.overlay)}
					ref={this.graphicsCanvasRef}
					style={{ position: "absolute" }}
					width="1280"
					height="720"
				/>

				<HoverMenu
					open={this.state.hoverMenuOpen}
					videoClasses={videoClasses}
					graphicsCanvasRef={this.graphicsCanvasRef}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		videoType: state.stream.info.streamSettings.videoType,
		loggedIn: state.client.loggedIn,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(LaglessCanvas);

// react:
import React, { PureComponent } from "react";

// material ui:
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";
// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

class LaglessCanvas extends PureComponent {
	constructor(props) {
		super(props);

		// this.videoRef = React.createRef();
		this.graphicsCanvasRef = React.createRef();

		this.state = {
			alertOpen: false,
		};
	}

	handleClick = () => {
		if (this.props.loggedIn && !window.inputHandler.mouse.settings.enabled) {
			this.setState({ alertOpen: true });
		}
	};

	handleClose = () => {
		this.setState({ alertOpen: false });
		window.inputHandler.mouse.toggle(false);
	};

	enableMouseControls = () => {
		this.setState({ alertOpen: false });

		// let id = null;
		// if (this.props.videoType === "mpeg1") {
		// 	id = "canvas";
		// } else if (this.props.videoType === "webRTC") {
		// 	id = "video";
		// }
		// window.inputHandler.mouse.init(document.getElementById(id));

		window.inputHandler.mouse.init(this.graphicsCanvasRef.current);
		window.inputHandler.mouse.toggle(true);
		window.inputHandler.keyboard.init();
		window.inputHandler.keyboard.toggle(true);
	};

	render() {
		const { classes } = this.props;

		let videoCanvas = null;
		if (this.props.videoType === "mpeg1") {
			videoCanvas = (
				<canvas
					id="videoCanvas"
					// onClick={this.handleClick}
					className={this.props.classes}
					// ref={this.videoRef}
				/>
			);
		} else if (this.props.videoType === "webRTC") {
			videoCanvas = (
				<video
					id="videoCanvas"
					// onClick={this.handleClick}
					className={this.props.classes}
					// ref={this.videoRef}
				/>
			);
		}

		return (
			<>
				{videoCanvas}
				<canvas
					id="graphicsCanvas"
					className={this.props.classes}
					ref={this.graphicsCanvasRef}
					onClick={this.handleClick}
					style={{ position: "absolute", width: "73.2%", height: "100%" }}
					width="1280"
					height="720"
				/>
				<Dialog
					open={this.state.alertOpen}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Activate Mouse Controls?"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Enabling this will let you control the stream with your mouse.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							No
						</Button>
						<Button
							onClick={this.enableMouseControls}
							variant="contained"
							color="primary"
							autoFocus
						>
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		videoType: state.stream.info.streamSettings.videoType,
		loggedIn: state.client.loggedIn,
	};
};

export default compose(
	// withStyles(styles),
	connect(mapStateToProps),
)(LaglessCanvas);

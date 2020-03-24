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
		if (!window.inputHandler.mouse.settings.enabled) {
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
		// if (this.props.streamType === "mpeg2") {
		// 	id = "canvas";
		// } else if (this.props.streamType === "webRTC") {
		// 	id = "video";
		// }
		// window.inputHandler.mouse.init(document.getElementById(id));

		window.inputHandler.mouse.init(this.graphicsCanvasRef.current);
		window.inputHandler.mouse.toggle(true);
	};

	render() {
		const { classes } = this.props;

		let videoCanvas = null;
		if (this.props.streamType === "mpeg2") {
			videoCanvas = (
				<canvas
					id="videoCanvas"
					// onClick={this.handleClick}
					className={this.props.classes}
					// ref={this.videoRef}
				/>
			);
		} else if (this.props.streamType === "webRTC") {
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
							By default, the mouse will move the right stick, you can remap and change
							settings for it in the remap menu.
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
		streamType: state.stream.info.streamType,
	};
};

export default compose(
	// withStyles(styles),
	connect(mapStateToProps),
)(LaglessCanvas);

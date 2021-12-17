// react:
import React, { PureComponent } from "react";

import VolumeSlider from "shared/components/general/VolumeSlider.jsx";

// material ui:
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Paper,
	IconButton,
} from "@material-ui/core";

// icons:
import {
	Fullscreen as FullscreenIcon,
	FullscreenExit as FullscreenExitIcon,
	Mouse as MouseIcon,
	SportsEsports as SportsEsportsIcon,
} from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";

// recompose:
import { compose } from "recompose";

// libs:
import classNames from "classnames";
import { toggleFullscreen } from "shared/libs/utils.js";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		opacity: 0.5,
		position: "absolute",
		alignSelf: "flex-end",
	},
	settingsButtons: {
		display: "flex",
		// justifyContent: "flex-end",
		marginLeft: "auto",
	},
});

class HoverMenu extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			mouseAlertOpen: false,
		};
	}

	handleVolumeChange = (value) => {
		this.props.updateSettings({ volume: parseInt(value) });
	};

	handleRequestMouse = () => {
		if (this.props.loggedIn && !window.inputHandler.mouse.settings.enabled) {
			this.setState({ mouseAlertOpen: true });
		}
	};

	handleCloseMouseAlert = () => {
		this.setState({ mouseAlertOpen: false });
		window.inputHandler.mouse.toggle(false);
	};

	enableMouseControls = () => {
		this.setState({ mouseAlertOpen: false });

		// let id = null;
		// if (this.props.videoType === "mpeg1") {
		// 	id = "canvas";
		// } else if (this.props.videoType === "webRTC") {
		// 	id = "video";
		// }
		// window.inputHandler.mouse.init(document.getElementById(id));

		window.inputHandler.mouse.init(this.props.graphicsCanvasRef.current);
		window.inputHandler.mouse.toggle(true);
		window.inputHandler.keyboard.init();
		window.inputHandler.keyboard.toggle(true);
	};

	handleToggleControllerView = () => {
		let state = !this.props.settings.controllerView;
		this.props.updateSettings({ controllerView: state });
		if (state && this.props.settings.largescreen) {
			this.props.updateSettings({ largescreen: false });
		} else if (!state && !this.props.settings.largescreen) {
			this.props.updateSettings({ largescreen: true });
		}
		setTimeout(() => {
			window.dispatchEvent(new Event("resize"));
		}, 200);
	};

	handleToggleFullscreen = () => {
		let state = !this.props.settings.fullscreen;
		if (state) {
			// $(document).scrollTop(0);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			// $("body").addClass("hideScrollbar");
			// $("#root").children()[0].style.padding = "0";
			this.props.updateSettings({
				fullscreen: state,
				controllerView: false,
				hideChat: true,
				hideNav: true,
			});
			toggleFullscreen(document.getElementsByTagName("html")[0]);
		} else {
			// console.log("exiting fullscreen");
			// $("body").removeClass("hideScrollbar");
			// $("#root").children()[0].style.padding = "";
			this.props.updateSettings({
				fullscreen: state,
				largescreen: false,
				controllerView: true,
				hideChat: false,
				hideNav: false,
			});
			toggleFullscreen(document.getElementsByTagName("html")[0]);
		}
	};

	handleMouseLeave = () => {};

	render() {
		const { classes, videoClasses } = this.props;

		if (!this.props.open) {
			return null;
		}

		return (
			<Paper
				className={classNames(classes.root, videoClasses)}
				onMouseEnter={this.handleMouseLeave}
				onMouseLeave={this.handleMouseLeave}
			>
				<VolumeSlider
					value={this.props.volume}
					handleChange={this.handleVolumeChange}
					onMute={() => {
						this.props.updateSettings({ volume: 0 });
					}}
					onMax={() => {
						this.props.updateSettings({ volume: 100 });
					}}
				/>
				<div className={classes.settingsButtons}>
					<IconButton
						color="inherit"
						className=""
						onClick={this.handleToggleControllerView}
					>
						<SportsEsportsIcon />
					</IconButton>
					<IconButton color="inherit" className="" onClick={this.handleRequestMouse}>
						<MouseIcon />
					</IconButton>
					<IconButton color="inherit" className="" onClick={this.handleToggleFullscreen}>
						{this.props.settings.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
					</IconButton>
				</div>
				<Dialog
					open={this.state.mouseAlertOpen}
					onClose={this.handleCloseMouseAlert}
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
						<Button onClick={this.handleCloseMouseAlert} color="primary">
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
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		volume: state.settings.volume,
		settings: state.settings,
		loggedIn: state.client.loggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(HoverMenu);

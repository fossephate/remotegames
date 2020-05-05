// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import VolumeSlider from "shared/components/general/VolumeSlider.jsx";
// import ViewerDropdown from "./ViewerDropdown.jsx";
import Ping from "./Ping.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
// icons:
// import KeyboardIcon from "@material-ui/icons/Keyboard";
// import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { Settings as SettingsIcon, Sync as SyncIcon } from "@material-ui/icons";
// import { KeyboardIcon, VideogameAssetIcon} from "@material-ui/icons";
import { Paper, Button } from "@material-ui/core";

// recompose:
import { compose } from "recompose";

// redux:
import { connect } from "react-redux";
import { updateSettings } from "src/actions/settings.js";

// jss:

const styles = (theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-evenly",
		alignSelf: "center",
		width: "100%",
		padding: "4px 0px",
		marginTop: "5px",
		// marginTop: "-40px",
		backgroundColor:
			theme.palette.type === "dark"
				? theme.palette.primary.dark
				: theme.palette.primary.light,
		// opacity: 0,
		// zIndex: 1,
		// transition: "all 400ms ease-in-out",
		// "&:hover": {
		// opacity: 1,
		// },
	},
});

class LaglessBar extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleChange = (value) => {
		this.props.setVolume(parseInt(value));
	};

	render() {
		const { classes } = this.props;
		return (
			<Paper id="laglessBar" className={classes.root} elevation={3}>
				{/* <ViewerDropdown accountMap={this.props.accountMap} /> */}
				<VolumeSlider
					value={this.props.volume}
					handleChange={this.handleChange}
					onMute={() => {
						this.props.setVolume(0);
					}}
					onMax={() => {
						this.props.setVolume(100);
					}}
				/>
				{/* <Button
					variant="contained"
					color="primary"
					onClick={() => {
						this.props.history.push("/controls/controller");
					}}
				>
					{"Controls "}
					<KeyboardIcon />|<VideogameAssetIcon />
				</Button> */}

				{this.props.videoType === "mpeg1" && (
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							window.stream.player.audio.destination.resetEnqueuedTime();
						}}
					>
						Sync Audio <SyncIcon />
					</Button>
				)}
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						this.props.history.push("/settings/site");
					}}
				>
					{"Settings "}
					<SettingsIcon />
				</Button>

				<Ping />
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		volume: state.settings.volume,
		accountMap: state.stream.accountMap,
		videoType: state.stream.info.streamSettings.videoType,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVolume: (volume) => {
			dispatch(updateSettings({ volume: volume }));
		},
	};
};

// export default connect(mapStateToProps, mapDispatchToProps)(LaglessBar);
export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(LaglessBar);

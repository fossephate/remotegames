// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// components:
import VolumeSlider from "./VolumeSlider.jsx";
// import MyCheckbox from "src/components/General/MyCheckbox.jsx";
import ViewerDropdown from "./ViewerDropdown.jsx";
import Ping from "./Ping.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
// icons:
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
// components:
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

// recompose:
import { compose } from "recompose";

// redux:
import { connect } from "react-redux";
import { updateSettings } from "src/actions/settings.js";

import _ from "lodash";

// jss:

const styles = (theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-evenly",
		alignSelf: "center",
		width: "100%",
		padding: "4px 0px",
		marginTop: "4px",
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

		this.handleChange = this.handleChange.bind(this);

		this.state = {};
	}

	handleChange(value) {
		this.props.setVolume(parseInt(value));
	}

	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root} elevation={3}>
				<ViewerDropdown accountMap={this.props.accountMap} />
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
				{/* <MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.audioThree}/> */}
				<Button
					variant="contained"
					color="primary"
					onClick={() => {
						this.props.history.push("/remap/keyboard");
					}}
				>
					<KeyboardIcon />|<VideogameAssetIcon />
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
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(LaglessBar);

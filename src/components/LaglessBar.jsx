// react:
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import VolumeSlider from "src/components/VolumeSlider.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx";
import ViewerDropdown from "src/components/ViewerDropdown.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
// icons:
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import RefreshIcon from "@material-ui/icons/Refresh";
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
		paddingTop: "2px",
		paddingBottom: "2px",
		// marginTop: "5px",
		backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
	},
});

class LaglessBar extends PureComponent {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {};
	}

	handleChange(value) {
		// _.throttle(() => {
		// 	console.log(value)
		// 	this.props.setVolume(parseInt(value));
		// }, 100);
		this.props.setVolume(parseInt(value));
	}

	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root} elevation={3}>
				<ViewerDropdown userids={this.props.viewers} usernameMap={this.props.usernameMap}/>
				<VolumeSlider
					value={this.props.volume}
					handleChange={this.handleChange}
					onMute={() => {this.props.setVolume(0)}}
					onMax={() => {this.props.setVolume(100)}}/>
				{/* <MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.audioThree}/> */}
				<Button id="laglessRefresh" className="laglessRefresh" variant="contained" color="primary">
					<RefreshIcon/>
				</Button>
				<Button variant="contained" color="primary" onClick={this.props.openInputMapper}>
					<KeyboardIcon/>|<VideogameAssetIcon/>
				</Button>
			</Paper>
		);

	}
}


const mapStateToProps = (state) => {
	return {
		volume: state.settings.volume,
		viewers: state.viewers,
		usernameMap: state.usernameMap,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setVolume: (volume) => {
			dispatch(updateSettings({ volume: volume }));
		},
		openInputMapper: () => {
			dispatch(updateSettings({ modal: "INPUT_MAPPER" }));
		},
	};
};

// export default connect(mapStateToProps, mapDispatchToProps)(LaglessBar);
export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(LaglessBar);

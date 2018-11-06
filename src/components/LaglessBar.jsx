// react:
import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import VolumeSlider from "src/components/VolumeSlider.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx";
import ViewerDropdown from "src/components/ViewerDropdown.jsx";

// material ui:
// icons:
import KeyboardIcon from "@material-ui/icons/Keyboard";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import RefreshIcon from "@material-ui/icons/Refresh";
// components:
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";
import { updateSettings } from "src/actions/settings.js";

// css:
import "./LaglessBar.css";

class LaglessBar extends PureComponent {

	constructor(props) {
		super(props);

		this.changing = false;
		this.timer = null;

		this.state = {
			volume: 0,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.changing = true;
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.changing = false;
		}, 1000);
		this.setState({ volume: value });
	}

	render() {
		return (
			<Paper className="laglessBar" elevation={3}>
				<ViewerDropdown userids={this.props.viewers} usernameMap={this.props.usernameMap}/>
				<VolumeSlider
					value={this.changing ? this.state.volume : this.props.volume}
					onMute={() => {this.props.setVolume(0)}}
					onMax={() => {this.props.setVolume(100)}}
					handleChange={this.handleChange}
					onAfterChange={(value) => {this.props.setVolume(value)}}/>
				{/* handleChange={(value) => {this.setState({volume: value})}}/> */}
				{/* <MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.state.audioThree}/> */}
				<Button id="laglessRefresh" className="laglessRefresh" variant="contained" color="primary">
					<RefreshIcon/>
				</Button>
				<Button variant="contained" color="primary">
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
			dispatch(updateSettings({ volume: volume }))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LaglessBar);
// react:
import React, { PureComponent } from "react";

// material ui:
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";


class CheckboxSettings extends PureComponent {

	constructor(props) {
		super(props);

		// this.joinLeaveQueue = this.joinLeaveQueue.bind(this);

		this.state = {};
	}

	render() {
		return (
			<Paper id="checkboxSettings" className="settingsPanel" elevation={5}>
				<List>
					<ListItem>
						<MyCheckbox text={"Enable Keyboard Controls"} handleChange={this.toggleKeyboardControls} checked={this.props.settings.keyboardControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Enable Controller Controls"} handleChange={this.toggleControllerControls} checked={this.props.settings.controllerControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Enable Controller View"} handleChange={this.toggleControllerView} checked={this.props.settings.controllerView}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Audio 3.0"} handleChange={this.toggleAudioThree} checked={this.props.settings.audioThree}/>
					</ListItem>
					<ListItem>
						<ThemeSelector/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Enable Fullscreen Mode"} handleChange={this.toggleFullscreen} checked={this.props.settings.fullscreen}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Enable Largescreen Mode"} handleChange={this.toggleLargescreen} checked={this.props.settings.largescreen}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Enable Mouse Controls"} handleChange={this.toggleMouseControls} checked={this.props.settings.mouseControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Enable Touch Controls"} handleChange={this.toggleTouchControls} checked={this.props.settings.touchControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Analog Stick Mode"} handleChange={this.toggleAnalogStickMode} checked={this.props.settings.analogStickMode}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"DPad Swap"} handleChange={this.toggleDpadSwap} checked={this.props.settings.dpadSwap}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"3Ds config"} handleChange={this.toggleTDSConfig} checked={this.props.settings.TDSConfig}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Hide Chat"} handleChange={(state) => {this.props.updateSettings({ hideChat: state })}} checked={this.props.settings.hideChat}/>
					</ListItem>
					<ListItem>
						<MyCheckbox text={"Hide Nav Bar"} handleChange={(state) => {this.props.updateSettings({ hideNav: state })}} checked={this.props.settings.hideNav}/>
					</ListItem>
				</List>
			</Paper>
		);
	}

}


// export default JoinLeaveQueueButton;
const mapStateToProps = (state) => {
	return {
		settings: state.settings,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSettings: (settings) => {
			dispatch(updateSettings(settings))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxSettings);
// react:
import React, { PureComponent } from "react";

// material ui:
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

// components:
import MyCheckbox from "src/components/MyCheckbox.jsx";
import ThemeSelector from "src/components/ThemeSelector.jsx";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";

// libs:
const tools = require("js/tools.js");


class CheckboxSettings extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Paper elevation={5}>
				<List>
					<ListItem>
						<MyCheckbox
							text={"Enable Keyboard Controls"}
							handleChange={(state) => {this.props.updateSettings({ keyboardControls: state })}}
							checked={this.props.settings.keyboardControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Enable Controller Controls"}
							handleChange={(state) => {this.props.updateSettings({ controllerControls: state })}}
							checked={this.props.settings.controllerControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Enable Largescreen Mode"}
							handleChange={(state) => {
								this.props.updateSettings({ largescreen: state });
								if (state && this.props.settings.controllerView) {
									this.props.updateSettings({ controllerView: false });
								} else if (!state && !this.props.settings.controllerView) {
									this.props.updateSettings({ controllerView: true });
								}
								setTimeout(() => {
									window.dispatchEvent(new Event("resize"));
								}, 200);
							}}
							checked={this.props.settings.largescreen}/>
					</ListItem>
					{/* <ListItem>
						<MyCheckbox
							text={"Audio 3.0"}
							handleChange={this.toggleAudioThree}
							checked={this.props.settings.audioThree}/>
					</ListItem> */}
					<ListItem>
						<ThemeSelector/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Enable Fullscreen Mode"}
							handleChange={(state) => {
								this.props.updateSettings({ fullscreen: state });
								if (state) {
									$("body").css("padding", "0");
									$("body").addClass("hideScrollbar");
									$("#picture").css("grid-row", "1");
									$("#picture").css("grid-column", "1/3");
									$(document).scrollTop(0);
									this.props.updateSettings({
										controllerView: false,
										hideChat: true,
										hideNav: true,
									});
									tools.toggleFullscreen($("html")[0]);
								} else {
									console.log("exiting fullscreen");
									$("body").css("padding", "");
									$("#picture").css("grid-row", "");
									$("#picture").css("grid-column", "");
									$("body").removeClass("hideScrollbar");
									this.props.updateSettings({
										largescreen: false,
										controllerView: true,
										hideChat: false,
										hideNav: false,
									});
								}
							}}
							checked={this.props.settings.fullscreen}/>
					</ListItem>
					{/* <ListItem>
						<MyCheckbox
							text={"Enable Mouse Controls"}
							handleChange={(state) => {this.props.updateSettings({ mouseControls: state })}}
							checked={this.props.settings.mouseControls}/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Enable Touch Controls"}
							handleChange={(state) => {this.props.updateSettings({ touchControls: state })}}
							checked={this.props.settings.touchControls}/>
					</ListItem> */}
					<ListItem>
						<MyCheckbox
							text={"Analog Stick Mode"}
							handleChange={(state) => {this.props.updateSettings({ analogStickMode: state })}}
							checked={this.props.settings.analogStickMode}/>
					</ListItem>
					{/* <ListItem>
						<MyCheckbox
							text={"DPad Swap"}
							handleChange={this.toggleDpadSwap}
							checked={this.props.settings.dpadSwap}/>
					</ListItem> */}
					{/* <ListItem>
						<MyCheckbox
							text={"3Ds config"}
							handleChange={this.toggleTDSConfig}
							checked={this.props.settings.TDSConfig}/>
					</ListItem> */}
					<ListItem>
						<MyCheckbox
							text={"Hide Chat"}
							handleChange={(state) => {this.props.updateSettings({ hideChat: state })}}
							checked={this.props.settings.hideChat}/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Hide Nav Bar"}
							handleChange={(state) => {this.props.updateSettings({ hideNav: state })}}
							checked={this.props.settings.hideNav}/>
					</ListItem>
					{/* <ListItem>
						<MyCheckbox
							text={"Enable Controller View"}
							handleChange={(state) => {
								this.props.updateSettings({ controllerView: state });
								if (state && this.props.settings.largescreen) {
									this.props.updateSettings({ largescreen: false });
								}
							}}
							checked={this.props.settings.controllerView}/>
					</ListItem> */}
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

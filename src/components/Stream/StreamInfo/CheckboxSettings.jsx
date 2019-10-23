// react:
import React, { PureComponent } from "react";

// material ui:
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

// components:
import MyCheckbox from "src/components/General/MyCheckbox.jsx";
import ThemeSelector from "src/components/General/ThemeSelector.jsx";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";

// libs:
import { toggleFullscreen } from "libs/tools.js";

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
							handleChange={(state) => {
								this.props.updateSettings({ keyboardControls: state });
							}}
							checked={this.props.settings.keyboardControls}
						/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Enable Controller Controls"}
							handleChange={(state) => {
								this.props.updateSettings({ controllerControls: state });
							}}
							checked={this.props.settings.controllerControls}
						/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Real keyboard / mouse"}
							handleChange={(state) => {
								this.props.updateSettings({ realKeyboardMouse: state });
							}}
							checked={this.props.settings.realKeyboardMouse}
						/>
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
							checked={this.props.settings.largescreen}
						/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Audio 3.0"}
							handleChange={this.props.toggleAudioThree}
							checked={this.props.settings.audioThree}
						/>
					</ListItem>
					<ListItem>
						<ThemeSelector />
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Enable Fullscreen Mode"}
							handleChange={(state) => {
								if (state) {
									$(document).scrollTop(0);
									$("body").addClass("hideScrollbar");
									// $("#root").children()[0].style.padding = "0";
									this.props.updateSettings({
										fullscreen: state,
										controllerView: false,
										hideChat: true,
										hideNav: true,
									});
									toggleFullscreen($("html")[0]);
								} else {
									console.log("exiting fullscreen");
									$("body").removeClass("hideScrollbar");
									// $("#root").children()[0].style.padding = "";
									this.props.updateSettings({
										fullscreen: state,
										largescreen: false,
										controllerView: true,
										hideChat: false,
										hideNav: false,
									});
								}
							}}
							checked={this.props.settings.fullscreen}
						/>
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
							handleChange={(state) => {
								this.props.updateSettings({ analogStickMode: state });
							}}
							checked={this.props.settings.analogStickMode}
						/>
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
							handleChange={(state) => {
								this.props.updateSettings({ hideChat: state });
							}}
							checked={this.props.settings.hideChat}
						/>
					</ListItem>
					<ListItem>
						<MyCheckbox
							text={"Hide Nav Bar"}
							handleChange={(state) => {
								this.props.updateSettings({ hideNav: state });
							}}
							checked={this.props.settings.hideNav}
						/>
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
			dispatch(updateSettings(settings));
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CheckboxSettings);

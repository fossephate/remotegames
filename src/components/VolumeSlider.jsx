import React, { PureComponent } from "react";

// import Slider, { createSliderWithTooltip } from "rc-slider";
// const SliderWithTooltip = createSliderWithTooltip(Slider);
// import "rc-slider/assets/index.css";

import MySlider from "./MySlider.jsx";

import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

import "./VolumeSlider.css";

export default class VolumeSlider extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="volumeSlider otborder">
				<VolumeDown onClick={this.props.onMute}/>
				<MySlider {...this.props}/>
				<VolumeUp onClick={this.props.onMax}/>
			</div>
		);
	}

}
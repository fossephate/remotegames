import React, { PureComponent } from "react";

import Slider, { createSliderWithTooltip } from "rc-slider";
const SliderWithTooltip = createSliderWithTooltip(Slider);
import "rc-slider/assets/index.css";

function log(value) {
	console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
	return `${v} %`;
}

export default class MySlider extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<SliderWithTooltip
			tipFormatter={percentFormatter}
			tipProps={{ overlayClassName: 'foo' }}
			onChange={this.props.handleChange}
			value={this.props.value}
			style={{width: "80%"}}/>
		);
	}

}
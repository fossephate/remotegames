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
			tipProps={{ overlayClassName: "foo" }}

			// min={this.props.min || 0}
			// max={this.props.max || 100}
			// step={this.props.ma}
			{...this.props}

			onChange={this.props.handleChange}
			value={this.props.value}
			trackStyle={{
				// backgroundColor: "blue",
				// height: 10,
				width: "80%",
			}}
			handleStyle={{
				// borderColor: "blue",
				// height: 28,
				// width: 28,
				// marginLeft: -14,
				// marginTop: -9,
				// backgroundColor: "black",
			}}
			style={{width: "80%"}}/>
		);
	}

}
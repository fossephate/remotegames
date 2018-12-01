// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/lab/Slider";

// jss:
const styles = (theme) => ({
	slider: {
		width: "70%",
	},
});

class MySlider extends PureComponent {

	constructor(props) {
		super(props);

		this.handleLocalChange = this.handleLocalChange.bind(this);

		this.state = {
			value: 0,
			active: false,
		};

		this.active = false;
		this.timer = null;
	}

	handleLocalChange(event, value) {

		this.setState({ value: value });
		if (typeof this.props.handleChange != "undefined") {
			this.props.handleChange(value);
		}
		// if (!this.active && typeof this.props.handleAfterChange != "undefined") {
		// 	this.props.handleAfterChange(value);
		// }

		// debounce:
		this.active = true;
		clearTimeout(this.timer);
		this.timer = setTimeout(() => {
			this.active = false;
			if (typeof this.props.handleAfterChange != "undefined") {
				this.props.handleAfterChange(value);
				// trigger a re-render after the handleAfterChange:
				setTimeout(() => {
					this.setState({ value: Math.random() });
				}, 500);
			}
		}, (this.props.delay || 500));
	}

	render() {
		const { classes } = this.props;
		return (
			<Slider
				classes={{
					root: this.props.rootClasses || classes.slider,
				}}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				onChange={this.handleLocalChange}
				value={(this.active ? this.state.value : this.props.value) || 0}/>
		);
	}

}

export default withStyles(styles)(MySlider);
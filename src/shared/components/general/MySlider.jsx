// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Slider } from "@material-ui/core";

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
		this.bounce = this.bounce.bind(this);

		this.state = {
			value: 0,
		};

		this.active = false;
		this.bounceTimer = null;
		this.countDown = 0;
		this.countUp = 0;
	}

	bounce() {
		this.countDown -= 100;
		this.countUp += 50;
		if (this.countUp >= 100) {
			this.countUp = 0;
			this.props.handleChange(this.state.value);
		}
		if (this.countDown <= 0) {
			this.active = false;
			this.countDown = 0;
			clearInterval(this.bounceTimer);
			if (typeof this.props.handleAfterChange != "undefined") {
				this.props.handleAfterChange(this.state.value);
				// trigger a re-render after the handleAfterChange:
				setTimeout(() => {
					this.setState({ value: Math.random() });
				}, 200);
			}
		}
	}

	handleLocalChange(event, value) {
		this.setState({ value: value });

		if (typeof this.props.handleChange != "undefined") {
			this.countDown = 1000;
			if (!this.active) {
				this.active = true;
				this.props.handleChange(value);
				this.bounceTimer = setInterval(this.bounce, this.props.bounceInterval || 100);
			}
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<Slider
				classes={{
					root: this.props.rootClass || classes.slider,
					thumb: this.props.thumbClass,
					active: this.props.activeClass,
					rail: this.props.railClass,
					track: this.props.trackClass,
				}}
				min={this.props.min}
				max={this.props.max}
				step={this.props.step}
				onChange={this.handleLocalChange}
				value={(this.active ? this.state.value : this.props.value) || 0}
			/>
		);
	}
}

export default withStyles(styles)(MySlider);

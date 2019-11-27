// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// jss:
const styles = (theme) => ({});

class PopupMenu extends PureComponent {
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

export default withStyles(styles)(PopupMenu);

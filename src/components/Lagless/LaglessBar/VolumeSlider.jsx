// react:
import React, { PureComponent } from "react";

// material ui:
import Paper from "@material-ui/core/Paper";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

import { withStyles } from "@material-ui/core/styles";

// components:
import MySlider from "src/components/General/MySlider.jsx";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		justifyContent: "space-evenly",
		width: "30%",
		minWidth: "125px",
		// borderRadius: "10px",
		alignItems: "center",
		paddingLeft: "6px",
		paddingRight: "6px",
		backgroundColor: theme.palette.primary.main,
		// backgroundColor: theme.palette.primary.dark,
	},
	svg: {
		// color: "#333",
		color: theme.palette.primary.contrastText,
		alignSelf: "center",
		// border: "1.2px solid #333",
		// borderRadius: "4px",
		// padding: "1px",
		cursor: "pointer",
	},
	slider: {
		width: "70%",
	},
	container: {
		// first part of track:
		"& :first-child": {
			backgroundColor: "#FFF",
		},
		// thumb icon:
		"& :nth-child(2)": {
			"& :first-child": {
				backgroundColor: "#FFF",
				"&:hover": {
					boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)",
				},
				"&:active": {
					boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)",
				},
			},
		},
		// last part of track:
		"& :last-child": {
			backgroundColor: "#FFF",
		},
	},
	thumbIconWrapper: {
		backgroundColor: "#FFF !important",
	},
});

class VolumeSlider extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root} elevation={3}>
				<VolumeDown className={classes.svg} onClick={this.props.onMute}/>
				<MySlider
					sliderClass={classes.slider}
					containerClass={classes.container}
					thumbIconWrapperClass={classes.thumbIconWrapper}
					min={0}
					max={100}
					step={1}
					handleChange={this.props.handleChange}
					value={this.props.value}/>
				<VolumeUp className={classes.svg} onClick={this.props.onMax}/>
			</Paper>
		);
	}

}

export default withStyles(styles)(VolumeSlider);

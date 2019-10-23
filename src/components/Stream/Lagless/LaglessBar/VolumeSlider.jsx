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
	rootClass: {
		width: "70%",
		// track:
		// "& :nth-child(1)": {
		// 	backgroundColor: "#FFF",
		// },
		// // first part of track:
		// "& :nth-child(2)": {
		// 	backgroundColor: "#FFF",
		// },
		// thumb icon:
		// "& :nth-child(4)": {
		// 	"& :first-child": {
		// 	},
		// 	backgroundColor: "#FFF",
		// 	"&:hover": {
		// 		boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)",
		// 	},
		// 	"&:active": {
		// 		boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)",
		// 	},
		// },
	},
	rail: {
		backgroundColor: "#FFF",
	},
	track: {
		backgroundColor: "#FFF",
	},
	thumb: {
		backgroundColor: "#FFF",
		"&:hover": {
			boxShadow: "0px 0px 0px 9px rgba(255, 255, 255, 0.16)",
		},
		"&:active": {
			boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16)",
		},
	},
	active: {
		"span&": {
			boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important",
		},
		// boxShadow: "0px 0px 0px 18px rgba(255, 255, 255, 0.16) !important",
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
				<VolumeDown className={classes.svg} onClick={this.props.onMute} />
				<MySlider
					rootClass={classes.rootClass}
					thumbClass={classes.thumb}
					activeClass={classes.active}
					railClass={classes.rail}
					trackClass={classes.track}
					min={0}
					max={100}
					step={1}
					handleChange={this.props.handleChange}
					value={this.props.value}
					bounceInterval={100}
					delay={500}
				/>
				<VolumeUp className={classes.svg} onClick={this.props.onMax} />
			</Paper>
		);
	}
}

export default withStyles(styles)(VolumeSlider);

// Glitch_Purple_RGB
// const TwitchIcon = (props) => {
// 	return (
// 		<img src="https://twitchplaysnintendoswitch.com/images/Glitch_Purple_RGB.png"/>
// 	);
// };
//
// export default TwitchIcon;

// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";


// jss:
const styles = (theme) => ({
	root: {
		width: "22px",
		marginLeft: "2px",
		marginRight: "2px",
		backgroundColor: "#FFF",
		border: "1px solid #333",
		borderRadius: "4px",
		padding: "2px",
		verticalAlign: "middle",
	},
});

class TwitchIcon extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return (
			<img className={classes.root} src={window.location.origin + "/images/Glitch_Purple_RGB.png"}/>
		);
	}

}

export default compose(
	withStyles(styles),
)(TwitchIcon);

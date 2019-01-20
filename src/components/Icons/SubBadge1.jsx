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
		width: "18px",
		marginLeft: "2px",
		marginRight: "2px",
	},
});

class SubBadge1 extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return null;

		return (
			<img className={classes.root} src="https://twitchplaysnintendoswitch.com/images/SubBadge1.png"/>
		);
	}

}

export default compose(
	withStyles(styles),
)(SubBadge1);

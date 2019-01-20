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

class Badge extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		let src = "https://twitchplaysnintendoswitch.com/images/badges/";

		switch (this.props.type) {
			case "dev":
				src += "DevBadge.png";
				break;
			case "admin":
				src += "AdminBadge.png";
				break;
			case "mod":
				src += "ModBadge.png";
				break;
			case "plus":
				src += "PlusBadge.png";
				break;
			case "sub1":
				src += "SubBadge1.png";
				break;
		}

		return (
			<img className={classes.root} src={src}/>
		);
	}

}

export default compose(
	withStyles(styles),
)(Badge);

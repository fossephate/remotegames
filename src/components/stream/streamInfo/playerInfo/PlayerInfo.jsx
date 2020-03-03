// react:
import React, { PureComponent } from "react";

// components:
import Player from "./player/Player.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

// jss:
const styles = {
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		overflowX: "hidden",
		// padding: "10px",
		flexWrap: "wrap",
	},
	[device.tablet]: {
		root: {
			flexDirection: "row",
			// width: "100%",
			// padding: "5px",
		},
	},
	[device.laptop]: {
		root: {
			// width: "24%",
			// padding: "5px",
		},
	},
};

class PlayerInfo extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Player num={0} />
				<Player num={1} />
				<Player num={2} />
				<Player num={3} />
				{/* <Player num={4} />
				<Player num={5} />
				<Player num={6} />
				<Player num={7} /> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(PlayerInfo);

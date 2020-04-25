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

	mapPlayers = () => {
		let players = [];

		for (let i = 0; i < this.props.playerCount; i++) {
			players.push(<Player key={i} num={i} />);
		}

		return players;
	};

	render() {
		const { classes } = this.props;

		return <div className={classes.root}>{this.mapPlayers()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		playerCount: state.stream.info.streamSettings.playerCount,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(PlayerInfo);

// react:
import React, { PureComponent } from "react";

// components:
import PlayerInfo from "./PlayerInfo.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		gridArea: "info",
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		margin: 0,
		overflowX: "hidden",
		textAlign: "center",
	},
	hideChat: {
		gridColumn: "1/3",
	},
	settings: {
		display: "flex",
		width: "100%",
		overflowY: "hidden",
		justifyContent: "space-evenly",
		padding: "10px",
	},
	settingsPanel: {
		width: "24%",
	},
});

class StreamInfo extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper elevation={3} className={classes.root}>
				<PlayerInfo />
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		hideChat: state.settings.hideChat,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(StreamInfo);

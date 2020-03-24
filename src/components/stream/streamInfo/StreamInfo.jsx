// react:
import React, { PureComponent } from "react";

// components:
import PlayerInfo from "./playerInfo/PlayerInfo.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

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
});

class StreamInfo extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { classes } = this.props;

		if (!this.props.streamOnline) {
			return null;
		}

		return (
			<div className={classes.root}>
				<PlayerInfo />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streamOnline: state.stream.info.online,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(StreamInfo);

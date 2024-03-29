// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// actions:
import { joinLeavePlayerControlQueue } from "src/features/players.js";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
	},
});

class QueueButton extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	joinLeaveQueue = () => {
		// if (!this.props.userid) {
		// 	return;
		// }
		if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
			window.inputHandler.mouse.toggle(false);
			this.props.joinLeavePlayerControlQueue({
				cNum: this.props.num,
				joinLeave: "leave",
			});
		} else {
			this.props.joinLeavePlayerControlQueue({ cNum: this.props.num, joinLeave: "join" });
		}
	};

	render() {
		const { classes } = this.props;

		let buttonText;

		if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
			buttonText = "Leave Queue";
		} else {
			buttonText = "Join Queue";
		}

		return (
			<Button className={classes.root} variant="contained" onClick={this.joinLeaveQueue}>
				{buttonText}
			</Button>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		joinLeavePlayerControlQueue: (data) => {
			dispatch(joinLeavePlayerControlQueue(data));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(QueueButton);

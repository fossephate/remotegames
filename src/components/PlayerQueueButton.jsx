// react:
import React, { PureComponent } from "react";

// material ui:
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";

// actions:
import { leavePlayerControlQueue, joinPlayerControlQueue } from "../actions/players.js";


class PlayerQueueButton extends PureComponent {

	constructor(props) {
		super(props);

		this.joinLeaveQueue = this.joinLeaveQueue.bind(this);

		this.state = {
			// isLeaveQueue: false,
		};
	}

	joinLeaveQueue() {
		if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
			this.props.leavePlayerControlQueue(this.props.num - 1);
		} else {
			this.props.joinPlayerControlQueue(this.props.num - 1);
		}
	}

	getButton() {

		let num = this.props.num;

		let buttonText;
		let buttonType;

		if (this.props.controlQueue.indexOf(this.props.userid) > -1) {
			buttonType = "leaveQueue";
			buttonText = "Leave Queue";
			// this.setState({ isLeaveQueue: true });
		} else {
			buttonType = "joinQueue"
			buttonText = "Join Queue";
			// this.setState({ isLeaveQueue: false });
		}

		return <Button className={buttonType} variant="contained" onClick={this.joinLeaveQueue}>{buttonText}</Button>;
	}

	render() {
		return (
			<React.Fragment>
				{this.getButton()}
			</React.Fragment>
		);
	}

}


// export default JoinLeaveQueueButton;
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {
		leavePlayerControlQueue: (controllerNumber) => {
			dispatch(leavePlayerControlQueue(controllerNumber))
		},
		joinPlayerControlQueue: (controllerNumber) => {
			dispatch(joinPlayerControlQueue(controllerNumber))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerQueueButton);
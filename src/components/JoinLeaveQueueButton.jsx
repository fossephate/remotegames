import React, { PureComponent } from "react";

import Button from "@material-ui/core/Button";

class JoinLeaveQueueButton extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getButton() {

		let num = this.props.num;

		let buttonText;
		let buttonType;

		if (this.props.controlQueue.indexOf(this.props.myID) > -1) {
			buttonType = "leaveQueue";
			buttonText = "Leave Queue";
		} else {
			buttonType = "joinQueue"
			buttonText = "Join Queue";
		}

		let elementID = buttonType + this.props.num;
		return <Button variant="contained" id={elementID} className={buttonType}>{buttonText}</Button>;
	}

	render() {
		return (
			<React.Fragment>
				{this.getButton()}
			</React.Fragment>
		);
	}

}


export default JoinLeaveQueueButton;
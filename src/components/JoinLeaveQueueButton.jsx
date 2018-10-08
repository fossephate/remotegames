import React, { PureComponent } from "react";

export default class JoinLeaveQueueButton extends PureComponent {

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

		let elementID = buttonType + this.props.num
		let elementClass = buttonType + " btn btn-secondary";

		return <button id={elementID} className={elementClass}>{buttonText}</button>;
	}

	render() {
		return (
			<React.Fragment>
				{this.getButton()}
			</React.Fragment>
		);
	}

}
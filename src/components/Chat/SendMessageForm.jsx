import React, { PureComponent } from "react";

import "./SendMessageForm.css";

export default class SendMessageForm extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {}
	}



	render() {

		return (
			<React.Fragment>
				<div id="SendMessageForm">
					<input id="messageBox" type="text"/>
				</div>
			</React.Fragment>
		);
	}

}
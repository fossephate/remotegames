import React, { PureComponent } from "react";

import "./Chat.css";

import MessageList from "./MessageList.jsx";
import SendMessageForm from "./SendMessageForm.jsx";



export default class Chat extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<React.Fragment>
				<div id="chat" className="otborder">
					<MessageList/>
					<SendMessageForm/>
				</div>
			</React.Fragment>
		);
	}

}
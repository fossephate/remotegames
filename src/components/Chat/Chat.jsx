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
			<div id="chat" className="otborder" style={this.props.hide ? {display: "none"} : null}>
				<MessageList/>
				<SendMessageForm/>
			</div>
		);
	}

}
import React, { PureComponent } from "react";

import "./Chat.css";

import MessageList from "./MessageList.jsx";
import SendMessageForm from "./SendMessageForm.jsx";



export default class Chat extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			messages: [],
		}
	}

	// getWaitlist() {
	//
	// 	let waitlist = [];
	//
	// 	if (this.props.uniqueIDs[this.props.tab - 1].length == 0) {
	// 		return <li key={0} className="list-group-item">The waitlist is empty right now</li>;
	// 	}
	//
	//
	// 	for (let i = 0; i < this.props.uniqueIDs[this.props.tab - 1].length; i++) {
	// 		let listHTML;
	//
	// 		let ID = this.props.uniqueIDs[this.props.tab - 1][i];
	//
	// 		if (this.props.myID == ID) {
	// 			listHTML = <li key={i} className="list-group-item-highlight">{this.props.usernameMap[ID]}</li>;
	// 		} else {
	// 			listHTML = <li key={i} className="list-group-item">{this.props.usernameMap[ID]}</li>;
	// 		}
	//
	// 		waitlist.push(listHTML);
	// 	}
	//
	// 	return waitlist;
	// }



	render() {

		return (
			<React.Fragment>
				<div id="chat">
					<MessageList/>
					<SendMessageForm/>
				</div>
			</React.Fragment>
		);
	}

}
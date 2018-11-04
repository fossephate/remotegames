import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// redux:
import { connect } from "react-redux";

import "./MessageList.css";

import Message from "./Message.jsx";

class MessageList extends PureComponent {

	constructor(props) {
		super(props);
	}

	// let element = document.getElementById("messageList");
	// element.scrollTop = element.scrollHeight;

	mapMessages() {
		let messages = [];
		for (let i = 0; i < this.props.messages.length; i++) {

			messages.push(<Message key={this.props.messages[i].id} {...this.props.messages[i]}/>);
		}
		return messages;
	}

	render() {

		return (
			<React.Fragment>
				<div id="messageList">
					{
						this.mapMessages()
					}
				</div>
			</React.Fragment>
		);
	}

}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			username: PropTypes.string.isRequired,
			userid: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
};

const mapStateToProps = (state) => {
	return {
		messages: state.chat.messages,
	};
};

export default connect(mapStateToProps)(MessageList);
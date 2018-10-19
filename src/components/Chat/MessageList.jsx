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

	render() {

		return (
			<React.Fragment>
				<div id="messageList">
					{
						this.props.messages.map(message => (
							<Message
							key={message.id}
							{...message}
							/>
						))
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

const mapStateToProps = function (state) {
	return {
		messages: state.messages,
	};
};

export default connect(mapStateToProps)(MessageList);
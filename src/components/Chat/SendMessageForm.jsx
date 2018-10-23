import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

import "./SendMessageForm.css";

class SendMessageForm extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}


	render() {

		let input;

		return (
			<React.Fragment>
				<div id="SendMessageForm">
					<textarea id="messageBox" className="otborder" type="text" placeholder="Send message"
						onKeyPress={(e) => {
						if (e.key === "Enter") {
							e.preventDefault();
							if (input.value !== "") {
								this.props.sendMessage(input.value);
								input.value = "";
							}
						}
					}}
					ref={(node) => {
						input = node;
					}}></textarea>
				</div>
			</React.Fragment>
		);
	}

}

SendMessageForm.propTypes = {
	sendMessage: PropTypes.func.isRequired,
};

const mapActionToProps = (dispatch) => {
	return {
		sendMessage: (message) => {
			dispatch(sendMessage(message))
		},
	};
};

export default connect(() => ({}), mapActionToProps)(SendMessageForm);
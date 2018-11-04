import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

// material ui:
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./SendMessageForm.css";

class SendMessageForm extends PureComponent {

	constructor(props) {
		super(props);

		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

		this.state = {
			text: "",
		};
	}

	handleTextChange(event) {
		this.setState({
			text: event.target.value,
		});
	}

	sendMessage() {
		if (this.state.text !== "") {
			this.props.sendMessage(this.state.text);
			this.setState({ text: "" });
		}
	}

	handleKeyPress(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.sendMessage();
		}
	}


	render() {

		return (
			<React.Fragment>
				<div id="SendMessageForm">
					<TextField
						fullWidth
						id="messageBox"
						className="otborder"
						placeholder="Send a message"
						type="text"
						margin="normal"
						variant="outlined"
						value={this.state.text}
						onChange={this.handleTextChange}
						onKeyPress={this.handleKeyPress}/>
					{/*<textarea id="messageBox" className="otborder" type="text" placeholder="Send message"
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
					}}></textarea>*/}
					<Button variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
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
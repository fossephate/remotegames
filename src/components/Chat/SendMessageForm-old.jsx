import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

// material ui:
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// mentions / autocomplete:
import InputTrigger from "react-input-trigger";

// import { MentionsInput, Mention } from "react-mentions";

import "./SendMessageForm.css";

class SendMessageForm extends PureComponent {

	constructor(props) {
		super(props);

		// this.handleTextChange = this.handleTextChange.bind(this);
		// this.handleKeyPress = this.handleKeyPress.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

		this.toggleSuggestor = this.toggleSuggestor.bind(this);


		this.handleInput = this.handleInput.bind(this);
		this.handleTextareaInput = this.handleTextareaInput.bind(this);

		this.handleKeyDown = this.handleKeyDown.bind(this);


		this.state = {
			text: "",
			textareaValue: "",
			showSuggestions: false,
			left: null,
			top: null,
			currentSelection: 0,
			startPosition: 0,
		};
	}

	// handleTextChange(event) {
	// 	this.setState({
	// 		text: event.target.value,
	// 	});
	// }

	sendMessage() {
		if (this.state.text !== "") {
			this.props.sendMessage(this.state.text);
			this.setState({ text: "" });
		}
		if (this.state.textareaValue !== "") {
			this.props.sendMessage(this.state.textareaValue);
			this.setState({ textareaValue: "" });
		}
	}

	toggleSuggestor(metaInformation) {
		const { hookType, cursor } = metaInformation;
		if (hookType === "start") {
			this.setState({
				showSuggestions: true,
				startPosition: cursor.selectionStart,
				left: cursor.left,
				top: cursor.top + cursor.height, // we need to add the cursor height so that the dropdown doesn't overlap with the `@`.
			});
		}
		if (hookType === "cancel") {
			// reset the state
			this.setState({
				showSuggestions: false,
				left: null,
				top: null,
			});
		}
	}

	handleInput(metaInformation) {
		this.setState({
			text: metaInformation.text,
		});
	}
	handleTextareaInput(event) {
		this.setState({
			textareaValue: event.target.value,
		});
	}

	handleKeyDown(event) {
		// const { which } = event;
		// const { currentSelection, users } = this.state;


		// if (event.key === "Enter") {
		// 	event.preventDefault();
		// 	this.sendMessage();
		// }

		if (event.which == 40) {
			this.setState({
				currentSelection: (this.state.currentSelection + 1) % this.props.userids.length,
			});
		}

		if (event.key == "Enter" || event.key == "Tab") { // 13 is the character code for enter
			event.preventDefault();

			console.log("pressed enter / tab");

			if (!this.state.showSuggestions) {
				if (event.key == "Enter") {
					this.sendMessage();
				}
				return;
			}

			const { currentSelection, startPosition, textareaValue } = this.state;
			const userid = this.props.userids[currentSelection];
			const username = this.props.usernameMap[this.props.userids[currentSelection]];
			console.log(username);


			const newText = `${textareaValue.slice(0, startPosition - 1)}${username}${textareaValue.slice(startPosition + username.length, textareaValue.length)}`

			// reset the state and set new text

			this.setState({
				showSuggestions: false,
				left: null,
				top: null,
				text: null,
				startPosition: null,
				textareaValue: newText,
			});

			this.endHandler();
		}
	}



	renderUserSuggestion(a, b, c) {
		console.log(a);
		console.log(b);
		console.log(c);
	}

	renderSuggestions() {
		// this.props.userids
		// // .filter((userid) => (
		// // 	this.props.usernameMap[userid].indexOf(this.state.text) !== -1)
		// // )
		// .map((userid) => (
		// 	<div style={{ padding: "10px 20px" }}>
		// 		{ this.props.usernameMap[userid] }
		// 	</div>
		// ))
		let suggestions = [];
		console.log(this.props.usernameMap);
		for (let i = 0; i < this.props.userids.length; i++) {
			let userid = this.props.userids[i];
			suggestions.push(
				<div key={i}
					style={{
						padding: "10px 20px",
						background: i === this.state.currentSelection ? "#eee" : "",
					}}>
					{ this.props.usernameMap[userid] }
				</div>
			);
		}
		return suggestions;
	}


	render() {

		return (
			<React.Fragment>
				<div id="SendMessageForm"
					onKeyDown={this.handleKeyDown}>
					<InputTrigger
						trigger={{ keyCode: 50, shiftKey: true}}
						onStart={(metaData) => { this.toggleSuggestor(metaData) }}
						onCancel={(metaData) => { this.toggleSuggestor(metaData) }}
						onType={(metaData) => { this.handleInput(metaData) }}
						endTrigger={(endHandler) => { this.endHandler = endHandler }}>

						{/* <TextField
							fullWidth
							id="messageBox"
							placeholder="Send a message"
							type="text"
							margin="normal"
							variant="outlined"
							value={this.state.text}
							onChange={this.handleTextChange}
							onKeyPress={this.handleKeyPress}/> */}
						{/* <textarea id="messageBox"
							placeholder="Send a message"
							type="text"
							margin="normal"
							variant="outlined"
							value={this.state.text}
							onChange={this.handleTextChange}
							onKeyPress={this.handleKeyPress}/> */}
						<textarea id="messageBox"
							type="text"
							placeholder="Send a message"
							value={this.state.textareaValue}
							onChange={this.handleTextareaInput}
							/>
					</InputTrigger>
					<div
						id="messageSuggestions"
						style={{
							position: "absolute",
							width: "200px",
							borderRadius: "6px",
							background: "white",
							boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 4px",

							display: this.state.showSuggestions ? "block" : "none",
							// top: this.state.top,
							// left: this.state.left,
							marginTop: "50px",
						}}>
							{ this.renderSuggestions() }
					</div>
					{/* <MentionsInput
						singleLine
						id="messageBox"
						value={this.state.text}
						onChange={this.handleTextChange}>

						<Mention
							trigger="@"
							data={this.props.userids}
							renderSuggestion={this.renderUserSuggestion}/> */}
						{/* <Mention
							trigger="#"
							data={this.requestTag}
							renderSuggestion={this.renderTagSuggestion}
							/> */}
					{/* </MentionsInput> */}
					<Button variant="contained" color="primary" onClick={this.sendMessage}>Send</Button>
				</div>
			</React.Fragment>
		);
	}

}

SendMessageForm.propTypes = {
	sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {
		userids: state.chat.userids,
		usernameMap: state.usernameMap,
	};
};

const mapActionToProps = (dispatch) => {
	return {
		sendMessage: (message) => {
			dispatch(sendMessage(message))
		},
	};
};

export default connect(mapStateToProps, mapActionToProps)(SendMessageForm);
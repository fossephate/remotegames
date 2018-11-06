import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

// material ui:
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import SendIcon from "@material-ui/icons/Send";

// mentions / autocomplete:
// import InputTrigger from "react-input-trigger";

// import { MentionsInput, Mention } from "react-mentions";

import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import "@webscopeio/react-textarea-autocomplete/style.css";
import emoji from "@jukben/emoji-search";

import "./SendMessageForm.css";


const Item = ({ entity: { name, char } }) => <div>{`${name}: ${char}`}</div>;
// const UsernameSuggestion = (username) => {
// 	return <div>{username}</div>;
// };
const UsernameSuggestion = ({ entity: { name } }) => <div>{`${name}`}</div>;
const CommandSuggestion = ({ entity: { name } }) => <div>{`${name}`}</div>;
const Loading = ({ data }) => <div>Loading</div>;

class SendMessageForm extends PureComponent {

	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

		this.renderUsernameSuggestions = this.renderUsernameSuggestions.bind(this);
		this.renderCommandSuggestions = this.renderCommandSuggestions.bind(this);


		this.state = {
			text: "",
			commands: [
				"help",
				"discord",
				"site",
				"games",
				"goto",
				"source",
				"fc",
				"playing",
				"restartscript",
				"restartserver",
				"restart1",
				"restart2",
				"restart3",
				"fixcontrollers",
			],
			emotes: [],
		};
	}

	handleKeyPress(event) {
		if (event.key === "Enter") {
			event.preventDefault();
			this.sendMessage();
		}
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
			this.rta.setState({ value: "" });
		}
	}

	renderUsernameSuggestions(token) {
		let suggestions = [];
		for (let i = 0; i < this.props.userids.length; i++) {
			let userid = this.props.userids[i];
			let username = this.props.usernameMap[userid];
			if (username == null || username.indexOf(token) == -1) {
				continue;
			}
			suggestions.push({ name: username, char: ("@" + username) });
		}
		return suggestions;
	}

	renderCommandSuggestions(token) {
		let suggestions = [];
		for (let i = 0; i < this.state.commands.length; i++) {
			let command = this.state.commands[i];
			if (command.indexOf(token) == -1) {
				continue;
			}
			suggestions.push({ name: command, char: ("!" + command) });
		}
		return suggestions;
	}

	render() {

		return (
			<React.Fragment>
				<div id="SendMessageForm">
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
					<ReactTextareaAutocomplete
						id="messageBox"
						containerClassName="messageBoxContainer"
			            loadingComponent={Loading}
			            style={{
			            }}
			            ref={(rta) => { this.rta = rta; } }
			            innerRef={(textarea) => { this.textarea = textarea; } }
			            containerStyle={{
			            }}
			            minChar={0}
						trigger={{
							":": {
								dataProvider: token => {
									return emoji(token)
										.slice(0, 10)
										.map(({ name, char }) => ({ name, char }));
								},
								component: Item,
								output: (item, trigger) => ({text: item.char, caretPosition: "next"}),
							},
							"@": {
								dataProvider: this.renderUsernameSuggestions,
								component: UsernameSuggestion,
								output: (item, trigger) => ({text: item.char, caretPosition: "next"}),
							},
							"!": {
								dataProvider: this.renderCommandSuggestions,
								component: CommandSuggestion,
								output: (item, trigger) => ({text: item.char, caretPosition: "end"}),
							},
						}}
						onChange={this.handleTextChange}
						onKeyPress={this.handleKeyPress}
						value={this.state.text}
						placeholder="Send a message"/>
					<Button variant="contained" color="primary" onClick={this.sendMessage}>Send<SendIcon style={{marginLeft: "8px"}}fontSize="small"/></Button>
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

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (message) => {
			dispatch(sendMessage(message))
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);
// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
// for voting:
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

// icons:
import SendIcon from "@material-ui/icons/Send";

// mentions / autocomplete:
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import "@webscopeio/react-textarea-autocomplete/style.css";
import emoji from "@jukben/emoji-search";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

// recompose:
import { compose } from "recompose";

const Item = ({ entity: { name, char } }) => <div>{`${name}: ${char}`}</div>;
// const UsernameSuggestion = (username) => {
// 	return <div>{username}</div>;
// };
const UsernameSuggestion = ({ entity: { name } }) => {
	return <div>{`${name}`}</div>;
};
const CommandSuggestion = ({ entity: { name } }) => {
	return <div>{`${name}`}</div>;
};
const Loading = ({ data }) => <div>Loading</div>;

// jss:

const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "100%",
		minHeight: "60px",
		height: "12%",
		paddingLeft: "5px",
		paddingRight: "5px",
	},

	messageBox: {
		display: "flex",
		resize: "none",
		width: "98%",
		borderRadius: "6px",

		"&:focus": {
			outlineOffset: "0px !important",
			outline: "none !important",
			boxShadow: "0 0 3px blue !important",
		},
	},

	messageBoxContainer: {
		width: "70%",
		height: "70%",
		fontSize: "14px",
		lineHeight: "20px",
		// fontSize: "inherit !important",
	},
	textField: {
		flex: "1",
		overflowY: "auto",
		height: "32px",
		// height: "56px",
		"&::-webkit-scrollbar": {
			width: "0 !important",
		},
		"& textarea": {
			overflow: "hidden",
		},
	},
});

class SendMessageForm extends PureComponent {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

		this.renderEmojiSuggestions = this.renderEmojiSuggestions.bind(this);
		this.renderUsernameSuggestions = this.renderUsernameSuggestions.bind(this);
		this.renderCommandSuggestions = this.renderCommandSuggestions.bind(this);
		this.inputRef = React.createRef();

		this.state = {
			voting: false,
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
				"lock",
				"unlock",
				"forcegoto",
				"setturnlength",
				"setforfeitlength",
				"sublist",
				"modlist",
				"pluslist",
				"banlist",
				"ban",
				"unban",
				"forcerefresh",
				"lockqueues",
				"unlockqueues",
				"disablegoto",
				"enablegoto",
				"disablechat",
				"enablechat",
				"xboxgoto",
				"xboxgames",
				"xboxgamelist",
				"xboxforcegoto",
				"giveplus",
				"removeplus",
				"setgame",
				"setxboxgame",
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
	renderEmojiSuggestions(token) {
		if (token.length < 1) {
			return [];
		} else {
			return emoji(token)
				.slice(0, 10)
				.map(({ name, char }) => ({ name, char }));
		}
	}

	renderUsernameSuggestions(token) {
		let suggestions = [];
		for (let userid in this.props.accountMap) {
			let username = this.props.accountMap[userid].username;
			if (username == null || username.toLowerCase().indexOf(token) == -1) {
				continue;
			}
			if (token.indexOf(username) > -1) {
				suggestions = [];
				break;
			}
			suggestions.push({ name: username, char: "@" + username });
		}
		return suggestions.slice(0, 5);
	}

	renderCommandSuggestions(token) {
		let suggestions = [];
		if (token.length < 1) {
			return [];
		}
		for (let i = 0; i < this.state.commands.length; i++) {
			let command = this.state.commands[i];
			if (command.indexOf(token) == -1) {
				continue;
			}
			if (token.indexOf(command) > -1) {
				suggestions = [];
				break;
			}
			suggestions.push({ name: command, char: "!" + command });
		}
		return suggestions.slice(0, 5);
	}

	render() {
		const { classes } = this.props;

		if (!this.state.voting) {
			let message = this.props.lastMessage;
			if (
				message &&
				message.username == "TPNSbot" &&
				/A vote has been started to/.test(message.text) &&
				!message.isReplay
			) {
				this.setState({ voting: true });
				setTimeout(() => {
					this.setState({ voting: false });
				}, 18000);
			}
		}

		return (
			<Paper id="SendMessageForm" className={classes.root} elevation={0}>
				<Snackbar
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={this.state.voting}
					autoHideDuration={0}
					onClose={() => {}}
					message={<span id="message-id">A vote has started to switch games!</span>}
					action={[
						<Button
							key="leave"
							color="secondary"
							size="small"
							variant="contained"
							onClick={() => {
								this.props.sendMessage("yea");
								this.setState({ voting: false });
							}}
						>
							LEAVE
						</Button>,
						<div key="spacer" style={{ width: "15px" }} />,
						<Button
							key="stay"
							color="primary"
							size="small"
							variant="contained"
							onClick={() => {
								this.props.sendMessage("nay");
								this.setState({ voting: false });
							}}
						>
							STAY
						</Button>,
						<IconButton
							key="close"
							color="inherit"
							className={classes.close}
							onClick={() => {
								this.setState({ voting: false });
							}}
						>
							<CloseIcon />
						</IconButton>,
					]}
				/>
				<ReactTextareaAutocomplete
					id="messageBoxOld"
					className={classes.messageBox}
					containerClassName={classes.messageBoxContainer}
					loadingComponent={Loading}
					style={{ display: "none" }}
					ref={(rta) => {
						this.rta = rta;
					}}
					innerRef={(ref) => {
						this.textarea = ref;
					}}
					// textAreaComponent={this.inputRef}
					containerStyle={{ width: "0", top: "20px", left: "10px", zIndex: 1 }}
					minChar={0}
					trigger={{
						":": {
							dataProvider: this.renderEmojiSuggestions,
							component: Item,
							output: (item, trigger) => ({ text: item.char, caretPosition: "next" }),
						},
						"@": {
							dataProvider: this.renderUsernameSuggestions,
							component: UsernameSuggestion,
							output: (item, trigger) => ({ text: item.char, caretPosition: "next" }),
						},
						"!": {
							dataProvider: this.renderCommandSuggestions,
							component: CommandSuggestion,
							output: (item, trigger) => ({ text: item.char, caretPosition: "end" }),
						},
					}}
					onChange={this.handleTextChange}
					onKeyPress={this.handleKeyPress}
					value={this.state.text}
					placeholder="Send a message"
				/>
				<TextField
					id="messageBox"
					placeholder="Send a message"
					type="text"
					margin="normal"
					variant="standard"
					value={this.state.text}
					innerRef={(ref) => {
						this.inputRef = ref;
					}}
					multiline={true}
					className={classes.textField}
					onChange={this.handleTextChange}
					onKeyPress={this.handleKeyPress}
					value={this.state.text}
				/>
				{/* <Button variant="contained" color="primary" onClick={this.sendMessage}>
					Send
					<SendIcon style={{ marginLeft: "8px" }} fontSize="small" />
				</Button> */}
				{/* <Button variant="contained" color="primary" onClick={this.sendMessage}>
					<SendIcon fontSize="small" />
				</Button> */}
				<Fab color="primary" size="small" onClick={this.sendMessage}>
					<SendIcon fontSize="small" />
				</Fab>
				{/* <Fab color="primary" size="medium" variant="extended" onClick={this.sendMessage}>
					Send
					<SendIcon style={{ marginLeft: "8px" }} fontSize="small" />
				</Fab> */}
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		accountMap: state.stream.accountMap,
		lastMessage: state.stream.chat.messages[state.stream.chat.messages.length - 1],
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (message) => {
			dispatch(sendMessage(message));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(SendMessageForm);

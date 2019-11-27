// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { ListItem, ListItemText } from "@material-ui/core";

// icons:
import SendIcon from "@material-ui/icons/Send";

// mentions / autocomplete:
import ReactTextareaAutocomplete from "@webscopeio/react-textarea-autocomplete";
import emoji from "@jukben/emoji-search";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

// recompose:
import { compose } from "recompose";

// libs:
import classNames from "classnames";

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
		// width: "98%",
		borderRadius: "6px",

		"&:focus": {
			outlineOffset: "0px !important",
			outline: "none !important",
			boxShadow: "0 0 3px blue !important",
		},
	},

	messageBoxContainer: {
		zIndex: 1,
		width: "90%",
		// height: "70%",
		fontSize: "14px",
		lineHeight: "20px",
		// fontSize: "inherit !important",
		marginRight: "10px",
		position: "relative",
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

	container: {
		"& .rta": {
			// position: "relative",
			// fontSize: "18px",
			// width: "100%",
			// height: "100%",
		},
		"& .rta__loader.rta__loader--empty-suggestion-data": {
			borderRadius: "3px",
			boxShadow: "0 0 5px rgba(27, 31, 35, 0.1)",
			padding: "5px",
		},
		"& .rta--loading .rta__loader.rta__loader--suggestion-data": {
			position: "absolute",
			top: "0",
			left: "0",
			width: "100%",
			background: "rgba(255, 255, 255, 0.8)",
		},
		"& .rta--loading .rta__loader.rta__loader--suggestion-data > *": {
			position: "relative",
			top: "50%",
		},
		// "& .rta__textarea": {
		// width: "100%",
		// height: "100%",
		// fontSize: "1em",
		// },
		"& .rta__autocomplete": {
			position: "absolute",
			display: "block",
			marginTop: "1em",
		},
		"& .rta__autocomplete--top": {
			// marginTop: "0",
			// marginBottom: "1em",
		},
		"& .rta__list": {
			listStyle: "none",
			margin: "0px",
			padding: "0px",
			position: "relative",

			backgroundColor: theme.palette.background.paper,
			boxShadow:
				"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
		},
		"& .rta__entity": {
			// background: "white",
			// width: "100%",
			// textAlign: "left",
			// outline: "none",
		},
		"& .rta__entity:hover": {
			cursor: "pointer",
		},
		"& .rta__item:not(:last-child)": {
			// borderBottom: "1px solid #dfe2e5",
		},
		"& .rta__entity > *": {
			// paddingLeft: "4px",
			// paddingRight: "4px",
		},
		"& .rta__entity--selected": {
			backgroundColor: theme.palette.action.selected,
		},
	},

	suggestion: {},
});

class SendMessageForm extends PureComponent {
	constructor(props) {
		super(props);

		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.sendMessage = this.sendMessage.bind(this);

		this.getEmojiSuggestions = this.getEmojiSuggestions.bind(this);
		this.getUsernameSuggestions = this.getUsernameSuggestions.bind(this);
		this.getCommandSuggestions = this.getCommandSuggestions.bind(this);
		this.renderNameSuggestion = this.renderNameSuggestion.bind(this);
		this.renderCharSuggestion = this.renderCharSuggestion.bind(this);

		this.rta = React.createRef();

		this.state = {
			text: "",
			commands: [
				"help",
				"discord",
				"games",
				"goto",
				"source",
				"fc",
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
			],
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
	getEmojiSuggestions(token) {
		if (token.length < 1) {
			return [];
		} else {
			return emoji(token)
				.slice(0, 5)
				.map(({ name, char }) => ({ name, char }));
		}
	}

	getUsernameSuggestions(token) {
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
			suggestions.push({ name: username, char: `@${username}` });
		}
		return suggestions.slice(0, 5);
	}

	getCommandSuggestions(token) {
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

	renderNameSuggestion(obj) {
		return (
			<ListItem>
				<ListItemText>{obj.entity.name}</ListItemText>
			</ListItem>
		);
	}

	renderCharSuggestion(obj) {
		return (
			<ListItem>
				<ListItemText>{obj.entity.char}</ListItemText>
			</ListItem>
		);
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper
				id="SendMessageForm"
				className={classNames(classes.root, classes.container)}
				elevation={0}
			>
				<ReactTextareaAutocomplete
					id="messageBoxOld"
					className={classes.messageBox}
					containerClassName={classes.messageBoxContainer}
					loadingComponent={Loading}
					ref={(rta) => {
						this.rta = rta;
					}}
					textAreaComponent={{ component: TextField, ref: "inputRef" }}
					minChar={0}
					trigger={{
						":": {
							dataProvider: this.getEmojiSuggestions,
							component: this.renderCharSuggestion,
							output: (item) => ({ text: item.char, caretPosition: "next" }),
						},
						"@": {
							dataProvider: this.getUsernameSuggestions,
							component: this.renderNameSuggestion,
							output: (item) => ({ text: item.char, caretPosition: "next" }),
						},
						"!": {
							dataProvider: this.getCommandSuggestions,
							component: this.renderNameSuggestion,
							output: (item) => ({ text: item.char, caretPosition: "end" }),
						},
					}}
					onChange={this.handleTextChange}
					onKeyPress={this.handleKeyPress}
					value={this.state.text}
					placeholder="Send a message"
					variant="standard"
				/>
				<Fab color="primary" size="small" onClick={this.sendMessage}>
					<SendIcon fontSize="small" />
				</Fab>
			</Paper>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		accountMap: state.stream.accountMap,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (text) => {
			dispatch(sendMessage(text));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(SendMessageForm);

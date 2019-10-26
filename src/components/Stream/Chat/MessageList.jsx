// react:
import React, { Component } from "react";
import PropTypes from "prop-types";

// components:
import Message from "./Message.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
// for voting:
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";
import { sendMessage } from "src/actions/chat.js";

// recompose:
import { compose } from "recompose";

// libs:
import swal from "sweetalert2";
// import ScrollableFeed from "react-scrollable-feed";

// jss:

const styles = (theme) => ({
	root: {
		overflowY: "auto",
		// marginBottom: "15px",
		boxShadow: "none",
		"& > div:nth-child(even)": {
			// backgroundColor: "#FF3C28A4",
			// backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
			color: theme.palette.type === "dark" ? "#FFF" : "#000",
			backgroundColor:
				theme.palette.type === "dark"
					? theme.palette.primary.dark
					: theme.palette.primary.light,
		},
		"& > div:nth-child(odd)": {
			// backgroundColor: "#0AB9E6A4",
			// backgroundColor: "#2d2d2dA4",
			// backgroundColor: theme.palette.type === "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light,
			color: theme.palette.type === "dark" ? "#FFF" : "#000",
			backgroundColor:
				theme.palette.type === "dark"
					? theme.palette.secondary.dark
					: theme.palette.secondary.light,
		},
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		height: "82%",
	},
});

class MessageList extends Component {
	constructor(props) {
		super(props);

		this.messagesEnd = null;
		this.rootRef = null;
		this.shouldScroll = false;
		// this.scrollToBottom = this.scrollToBottom.bind(this);
		this.handleClick = this.handleClick.bind(this);

		this.state = {
			voting: false,
		};
	}

	handleClick(event) {}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		if (prevProps.messages.length < this.props.messages.length) {
			let messageList = document.getElementById("messageList");
			if (
				messageList &&
				Math.abs(
					messageList.scrollHeight - messageList.scrollTop - messageList.offsetHeight,
				) < 2
			) {
				this.shouldScroll = true;
			}
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.shouldScroll) {
			let messageList = document.getElementById("messageList");
			messageList.scrollTop = messageList.scrollHeight;
		}
		this.shouldScroll = false;
	}

	mapMessages() {
		let messages = [];
		for (let i = 0; i < this.props.messages.length; i++) {
			let isLastMessage = i == this.props.messages.length - 1;
			let userid = this.props.messages[i].userid;
			let onClick = () => {};
			if (this.props.isMod) {
				onClick = () => {
					if (!this.props.accountMap[userid]) {
						swal.fire("user info not loaded (yet).");
						return;
					}
					let timePlayed = this.props.accountMap[userid].timePlayed;
					if (timePlayed < 60 * 60) {
						timePlayed = (timePlayed / 60).toFixed(2) + " minutes";
					} else {
						timePlayed = (timePlayed / (60 * 60)).toFixed(2) + " hours";
					}
					swal.fire(`${userid}\n${timePlayed}`);
				};
			}

			if (this.props.messages[i].isBanned) {
				if (!this.props.isBanned && !this.props.isMod) {
					continue;
				}
			}
			messages.push(
				<Message
					key={this.props.messages[i].id}
					{...this.props.messages[i]}
					isLastMessage={isLastMessage}
					onClick={onClick}
					onContextMenu={this.handleClick}
				/>,
			);
		}
		return messages;
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (!this.state.voting) {
			let message = nextProps.messages[nextProps.messages.length - 1];
			if (
				message &&
				message.username == "HostBot" &&
				/A vote has been started to/.test(message.text) &&
				!message.isReplay
			) {
				this.setState({ voting: true });
				setTimeout(() => {
					this.setState({ voting: false });
				}, 18000);
			}
		}
		return true;
		// }

		// return false;
	}

	render() {
		const { classes } = this.props;

		return (
			<Paper
				id="messageList"
				className={classes.root}
				elevation={4}
				ref={(el) => {
					this.rootRef = el;
				}}
			>
				{this.mapMessages()}
				<div
					style={{ float: "left", clear: "both" }}
					ref={(el) => {
						this.messagesEnd = el;
					}}
				/>
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
			</Paper>
		);
	}
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			username: PropTypes.string.isRequired,
			userid: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
};

const mapStateToProps = (state) => {
	return {
		messages: state.stream.chat.messages,
		accountMap: state.stream.accountMap,
		isMod: state.clientInfo.roles.mod,
		isBanned: state.clientInfo.isBanned,
		// lastMessage: state.stream.chat.messages[state.stream.chat.messages.length - 1],
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
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(MessageList);

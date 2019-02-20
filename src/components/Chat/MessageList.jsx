// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import Message from "./Message.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import swal from "sweetalert2";
// import ScrollableFeed from "react-scrollable-feed";


// jss:

const styles = (theme) => ({
	root: {
		overflowY: "auto",
		// borderRadius: "8px",
		flexGrow: "1",
		marginBottom: "15px",
		"& > div:nth-child(even)": {
			// backgroundColor: "#FF3C28A4",
			// backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
			color: theme.palette.type === "dark" ? "#FFF" : "#000",
		},
		"& > div:nth-child(odd)": {
			// backgroundColor: "#0AB9E6A4",
			backgroundColor: "#2d2d2dA4",
			// backgroundColor: theme.palette.type === "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light,
			color: theme.palette.type === "dark" ? "#FFF" : "#000",
		},
	},
});


class MessageList extends PureComponent {

	constructor(props) {
		super(props);

		this.messagesEnd = null;
		this.rootRef = null;
		this.handleClick = this.handleClick.bind(this);
		this.shouldScroll = false;
		// this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	handleClick(event) {
		// if (event.nativeEvent.which === 1) {
		// 	swal(this.props.messages[i].userid);
		// } else if(event.nativeEvent.which === 3) {
		// 	swal(this.props.messages[i].userid);
		// }
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {

		if (prevProps.messages.length < this.props.messages.length) {
			let messageList = document.getElementById("messageList");
			if (messageList && Math.abs((messageList.scrollHeight - messageList.scrollTop) - (messageList.offsetHeight)) < 2) {
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
			let isLastMessage = (i == this.props.messages.length - 1);
			let userid = this.props.messages[i].userid;
			let onClick = () => {};
			if (this.props.is_mod) {
				onClick = () => {
					if (!this.props.accountMap[userid]) {
						swal("user info not loaded (yet).");
						return;
					}
					let timePlayed = this.props.accountMap[userid].timePlayed;
					if (timePlayed < 60 * 60) {
						timePlayed = (timePlayed / 60).toFixed(2) + " minutes";
					} else {
						timePlayed = (timePlayed / (60 * 60)).toFixed(2) + " hours";
					}
					swal(`${userid}\n${timePlayed}`);
				}
			}
			messages.push(
				<Message
					key={this.props.messages[i].id}
					{...this.props.messages[i]}
					isLastMessage={isLastMessage}
					onClick={onClick}
					onContextMenu={this.handleClick}/>
			);
		}
		return messages;
	}

	render() {

		const { classes } = this.props;

		return (
			<Paper
				id="messageList"
				className={classes.root}
				elevation={4}
				ref={(el) => { this.rootRef = el; }}>

					{this.mapMessages()}
					<div
						style={{ float:"left", clear: "both" }}
						ref={(el) => { this.messagesEnd = el; }}>
					</div>
			</Paper>
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
		accountMap: state.accountMap,
		is_mod: state.userInfo.is_mod,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(MessageList);

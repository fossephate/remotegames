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


// jss:

const styles = (theme) => ({
	root: {
		"overflow-y": "auto",
		// borderRadius: "8px",
		flexGrow: "1",
		marginBottom: "15px",
		"& > div": {
			// backgroundColor: "#FF3C28A4",
			backgroundColor: theme.palette.type === "dark" ? theme.palette.primary.dark : theme.palette.primary.light,
		},
		"& > div:nth-child(odd)": {
			// backgroundColor: "#0AB9E6A4",
			backgroundColor: theme.palette.type === "dark" ? theme.palette.secondary.dark : theme.palette.secondary.light,
		},
	},
});


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

		const { classes } = this.props;

		return (
			<Paper id="messageList" className={classes.root} elevation={4}>
			{/* <List id="messageList" className={classes.root}> */}
				{
					this.mapMessages()
				}
			{/* </List> */}
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
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(MessageList);
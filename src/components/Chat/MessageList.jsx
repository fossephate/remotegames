// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// components:
import Message from "./Message.jsx";

// recompose:
import { compose } from "recompose";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// redux:
import { connect } from "react-redux";


// jss:

const styles = (theme) => ({
	root: {
		"overflow-y": "auto",
		"border-radius": "8px",
		"flex-grow": "1",
		"margin-bottom": "15px",
		"& > div": {
			"background-color": "#FF3C28A4",
		},
		"& > div:nth-child(odd)": {
			"background-color": "#0AB9E6A4",
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
			<React.Fragment>
				<div id="messageList" className={classes.root}>
					{
						this.mapMessages()
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

const mapStateToProps = (state) => {
	return {
		messages: state.chat.messages,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(MessageList);
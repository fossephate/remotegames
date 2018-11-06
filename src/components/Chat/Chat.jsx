// react:
import React, { PureComponent } from "react";

import MessageList from "./MessageList.jsx";
import SendMessageForm from "./SendMessageForm.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";


// jss:

const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		flex: "1",
		gridColumn: "2",
		gridRow: "2",
		padding: "5px",
	},
});

// @withStyles(styles)
class Chat extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		const { classes } = this.props;

		return (
			<Paper id="chat" className={classes.root} style={this.props.hide ? {display: "none"} : null}>
				<MessageList/>
				<SendMessageForm/>
			</Paper>
		);
	}

}



// export default Chat;
export default withStyles(styles)(Chat);
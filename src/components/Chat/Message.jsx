// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// material ui:
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	root: {
		wordBreak: "break-word",
		padding: "4px",
	},
});

// class Message extends PureComponent {
const Message = (props) => {
	const { classes, message, username, userid } = props;
	// if it's a relayed message:
	if (userid === "TPNSbot" && message[0] == "[") {
		let r = /\[(.+):(.+)\](.+)/;
		let split = message.match(r);
		let source = split[1];
		let user = split[2];
		let msg = split[3];
		username = source.substr(0, 2) + ":" + user;
		message = msg;
	}
	return (
		<div className={classes.root} userid={userid}>
			<b>{username}</b> {message}
		</div>
	);
};

Message.propTypes = {
	message: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	userid: PropTypes.string.isRequired,
};

export default withStyles(styles)(Message);
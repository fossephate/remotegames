// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Linkify from "react-linkify";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
	root: {
		wordBreak: "break-word",
		padding: "4px",
		fontSize: "14px !important",
		// color: theme.palette.primary.contrastText,
	},
	links: {
		// todo: use primary / secondary based on which it should be:
		// color: theme.palette.primary.contrastText,
		color: "#0000FF",
	},
});

function pad(t) {
	let s = "" + t;
	while (s.length < 2) {
		s = "0" + s;
	}
	return s;
}

function getTimeStamp(t) {
	let time = new Date(t);
	let s = time.getHours() + ":" + pad(time.getMinutes()) + " ";
	return s;
}

// class Message extends PureComponent {
const Message = (props) => {
	let { classes, message, username, userid, time } = props;
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

	let messageContent = `${getTimeStamp(time)}<b>${username}</b>${message}`;
	return (
		<div className={classes.root} userid={userid} onClick={props.onClick}>
			<Linkify properties={{className: classes.links}}>
				{/* <ListItemText> */}
					{getTimeStamp(time)}<b>{username}</b> {message}
				{/* </ListItemText> */}
			</Linkify>
		</div>
	);
};

Message.propTypes = {
	message: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	userid: PropTypes.string.isRequired,
};

export default withStyles(styles)(Message);
// export default compose(
// 	withTheme()
// 	withStyles(styles),
// )(Message);

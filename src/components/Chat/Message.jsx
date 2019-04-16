// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Linkify from "react-linkify";

// twitch icon:
import TwitchIcon from "src/components/Icons/TwitchIcon.jsx";
import Badge from "src/components/Icons/Badge.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:

const styles = (theme) => ({
	root: {
		wordBreak: "break-word",
		// padding: "4px",
		paddingLeft: "10px",
		paddingRight: "10px",
		paddingTop: "5px",
		paddingBottom: "5px",
		fontSize: "14px !important",
		// color: theme.palette.primary.contrastText,
	},
	links: {
		// todo: use primary / secondary based on which it should be:
		// color: theme.palette.primary.contrastText,
		// color: "#1a0dab",
		color: "#0000ee",
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
	let hours = time.getHours();
	hours = hours > 12 ? hours - 12 : hours;
	let s = hours + ":" + pad(time.getMinutes());
	return s;
}

function ping(text, time) {
	// new Noty({
	// 	theme: "mint",
	// 	type: "warning",
	// 	text: text,
	// 	timeout: time,
	// 	sounds: {
	// 		volume: 0.5,
	// 		sources: ["https://remotegames.io/sounds/ding.wav"],
	// 		conditions: ["docVisible"],
	// 	},
	// }).show();
}

// class Message extends PureComponent {
const Message = (props) => {
	let {
		classes,
		message,
		username,
		userid,
		time,
		isReplay,
		isLastMessage,
		accountMap,
	} = props;

	let source = "";

	let isRelay = false;
	// if it's a relayed message:
	if (userid === "TPNSbot" && message[0] == "[") {
		isRelay = true;
		let r = /\[(.+):(.+)\](.+)/;
		let split = message.match(r);
		source = split[1];
		let user = split[2];
		let msg = split[3];
		// username = source.substr(0, 2) + ":" + user;
		username = user;
		message = msg;
	}

	if (!isReplay && isLastMessage) {
		let mention = "@" + props.myUsername;
		if (message.indexOf(mention) > -1) {
			ping("You've been pinged!", 500);
		}
	}

	let isDev = false;
	if (username == "fosse" || username == "remotegames" || username == "fossephate" || username == "fosse#0430") {
		username = "fosse";
		isDev = true;
	}

	let icons = [];
	if (source == "twitch") {
		icons.push(<TwitchIcon />);
	}

	let account = accountMap[userid];
	if (account) {
		if (isDev) {
			icons.push(<Badge type="dev" />);
		}
		if (account.isMod && !isDev && !isRelay) {
			icons.push(<Badge type="mod" />);
		}
		if (account.isPlus && !account.isMod) {
			icons.push(<Badge type="plus" />);
		}
		if (account.isSub) {
			icons.push(<Badge type="sub1" />);
		}

		if (account.isMod && !isReplay && isLastMessage) {
			if (message.indexOf("@everyone") > -1) {
				ping("You've been pinged!", 500);
			}
		}
	}

	icons = React.Children.toArray(icons);

	return (
		<div className={classes.root} userid={userid} onClick={props.onClick}>
			<Linkify properties={{ className: classes.links }}>
				{getTimeStamp(time)}
				{icons}
				{icons.length == 0 ? " " : null}
				<b>{username}</b> {message}
			</Linkify>
		</div>
	);
};

Message.propTypes = {
	message: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired,
	userid: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
	return {
		accountMap: state.accountMap,
		myUsername: state.clientInfo.username,
	};
};

export default compose(
	withStyles(styles),
	connect(mapStateToProps),
)(Message);

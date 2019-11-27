// react:
import React, { PureComponent } from "react";

import Linkify from "react-linkify";

// components:
import Badge from "src/components/Icons/Badge.jsx";
import Username from "src/components/General/Username.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:

const styles = (props) => ({
	root: {
		// display: "flex",
		flexWrap: "wrap",
		backgroundColor: props.isBanned ? "#d34c4ca4" : null,
		wordBreak: "break-word",
		margin: "5px 5px",
		padding: "5px 10px",
		fontSize: "14px !important",
		// color: theme.palette.primary.contrastText,
		borderRadius: "5px",
	},
	links: {
		// todo: use primary / secondary based on which it should be:
		// color: theme.palette.primary.contrastText,
		// color: "#1a0dab",
		color: "#0000ee",
	},
	user: {
		display: "inline-flex",
		margin: "0px 2px",
		padding: "2px 5px",
		cursor: "pointer",
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
	let s = hours + ":" + pad(time.getMinutes()) + " ";
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
class Message extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		let {
			classes,
			text,
			username,
			userid,
			time,
			isReplay,
			isLastMessage,
			accountMap,
		} = this.props;

		let source = "";

		let isRelay = false;
		// if it's a relayed message:
		if (userid === "TPNSbot" && text[0] == "[") {
			isRelay = true;
			let r = /\[(.+):(.+)\](.+)/;
			let split = text.match(r);
			source = split[1];
			let user = split[2];
			let msg = split[3];
			// username = source.substr(0, 2) + ":" + user;
			username = user;
			text = msg;
		}

		if (!isReplay && isLastMessage) {
			let mention = "@" + this.props.myUsername;
			if (text.indexOf(mention) > -1) {
				ping("You've been pinged!", 500);
			}
		}

		let isDev = false;
		if (
			username == "fosse" ||
			username == "remotegames" ||
			username == "fossephate" ||
			username == "fosse#0430"
		) {
			isDev = true;
		}

		let icons = [];

		let account = accountMap[userid];
		if (account) {
			if (isDev) {
				icons.push(<Badge type="dev" />);
			} else if (account.roles.host) {
				icons.push(<Badge type="host" />);
			} else if (account.roles.mod) {
				icons.push(<Badge type="mod" />);
			} else if (account.roles.plus) {
				icons.push(<Badge type="plus" />);
			}
			if (account.roles.sub) {
				icons.push(<Badge type="sub1" />);
			}

			if (account.roles.mod && !isReplay && isLastMessage) {
				if (text.indexOf("@everyone") > -1) {
					ping("You've been pinged!", 500);
				}
			}
		}

		icons = React.Children.toArray(icons);

		return (
			<div className={classes.root} userid={userid} onClick={this.props.onClick}>
				<Linkify properties={{ className: classes.links }}>
					{getTimeStamp(time)}
					{icons}
					{icons.length == 0 ? " " : null}
					<Username userid={userid} style={{ display: "inline" }}>
						<Paper elevation={4} className={classes.user}>
							{username}
						</Paper>
					</Username>{" "}
					<span>{text}</span>
				</Linkify>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		accountMap: state.stream.accountMap,
		myUsername: state.clientInfo.username,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(Message);

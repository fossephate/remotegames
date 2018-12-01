// react:
import React, { PureComponent } from "react";

// redux:
import { connect } from "react-redux";

// material ui:
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class Waitlist extends PureComponent {

	constructor(props) {
		super(props);
	}

	getWaitlist() {

		let waitlist = [];

		let userids = this.props.userids;

		if (userids.length == 0) {
			return <ListItem key="0"><ListItemText primary="The waitlist is empty right now."/></ListItem>;
		}

		for (let i = 0; i < userids.length; i++) {
			let username = this.props.usernameMap[userid];
			let listItemClass = (this.props.userid == userids[i]) ? "queueItem queueItemHighlighted" : "queueItem";
			let html = <ListItem button key={i} className={listItemClass}><ListItemText primary={username}/></ListItem>;
			waitlist.push(html);
		}

		return waitlist;
	}

	render() {

		return (
			<List>
				{this.getWaitlist()}
			</List>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		userid: state.userInfo.userid,
		userids: state.waitlist,
	};
};

export default connect(mapStateToProps)(Waitlist);
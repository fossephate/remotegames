// react:
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

// redux:
import { connect } from "react-redux";

// material ui:
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


import { withTheme } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/core/styles';

import { compose } from "recompose";

import "./ControlQueue.css";

const styles = (theme) => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
});

class ControlQueue extends PureComponent {

	constructor(props) {
		super(props);
	}

	getQueue() {

		let queue = [];
		let usernameMap = this.props.usernameMap;
		let userids = this.props.controlQueues[this.props.num - 1];

		if (userids.length == 0) {
			return <ListItem key="0"><ListItemText primary="The queue is empty."/></ListItem>;
		}

		for (let i = 0; i < userids.length; i++) {
			let username = this.props.usernameMap[userids[i]];
			let listItemClass = (this.props.userid == userids[i]) ? "queueItem queueItemHighlighted" : "queueItem";
			let html = <ListItem button key={i} className={listItemClass} userid={userids[i]}><ListItemText primary={username}/></ListItem>;
			queue.push(html);
		}

		return queue;
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<List>
					{this.getQueue()}
				</List>
			</div>
		);
	}

}

// ControlQueue.propTypes = {
// 	controlQueues: PropTypes.arrayOf(
// 		PropTypes.arrayOf(
// 			PropTypes.string.isRequired
// 		),
// 	).isRequired
// };

const mapStateToProps = (state) => {
	return {
		userid: state.userInfo.userid,
		controlQueues: state.players.controlQueues,
	};
};

export default compose(
	withTheme(),
	withStyles(styles),
	connect(mapStateToProps),
)(ControlQueue);
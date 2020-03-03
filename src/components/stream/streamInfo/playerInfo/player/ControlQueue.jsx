// react:
import React, { PureComponent } from "react";

// redux:
import { connect } from "react-redux";

// components:

// material ui:
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Username from "shared/components/account/Username.jsx";

// recompose:
import { compose } from "recompose";
import classNames from "classnames";

// jss:
const styles = (theme) => ({
	root: {
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
	listItem: {
		cursor: "pointer",
		userSelect: "none",
		width: "100%",
	},
	highlighted: {
		// backgroundColor: "#DDE263",
		backgroundColor: theme.palette.secondary.light,
	},
});

class ControlQueue extends PureComponent {
	constructor(props) {
		super(props);
	}

	getQueue() {
		const { classes } = this.props;

		let queue = [];
		let userids = this.props.controlQueues[this.props.num];

		if (userids.length == 0) {
			return (
				<ListItem key="0">
					<ListItemText primary="The queue is empty." />
				</ListItem>
			);
		}

		for (let i = 0; i < userids.length; i++) {
			let username = this.props.accountMap[userids[i]];
			username = username ? username.username : "loading";
			let listItemClasses = classNames(classes.listItem, {
				[classes.highlighted]: this.props.userid == userids[i],
			});

			queue.push(
				<Username key={i} style={{ width: "100%" }} userid={userids[i]}>
					<ListItem button key={i} className={listItemClasses} userid={userids[i]}>
						<ListItemText primary={username} />
					</ListItem>
				</Username>,
			);
		}

		return queue;
	}

	render() {
		const { classes } = this.props;
		return <List className={classes.root}>{this.getQueue()}</List>;
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
		userid: state.client.userid,
		controlQueues: state.stream.players.controlQueues,
		accountMap: state.stream.accountMap,
	};
};

export default compose(withStyles(styles), connect(mapStateToProps))(ControlQueue);

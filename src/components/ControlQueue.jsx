import React, { PureComponent } from "react";

export default class ControlQueue extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getQueue() {

		let queue = [];
		let usernameMap = this.props.usernameMap;

		if (this.props.uniqueIDs.length == 0) {
			return <li key="0" className="queueItem list-group-item" data-toggle="popover" tabIndex="0">The queue is empty.</li>
		}

		for (let i = 0; i < this.props.uniqueIDs.length; i++) {
			let username = this.props.usernameMap[this.props.uniqueIDs[i]];
			let html = <li key={i} className="queueItem list-group-item" data-toggle="popover" tabIndex="0" uniqueid={this.props.uniqueIDs[i]}>{username}</li>;
			queue.push(html);
		}

		return queue;
	}

	render() {

		return (
			<ul className="controlQueue list-group">
				{this.getQueue()}
			</ul>
		);
	}

}
import React, { PureComponent } from "react";

export default class ControlQueue extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getQueue() {

		let queue = [];
		let usernameMap = this.props.usernameMap;
		let elementClass = this.props.darkTheme ? "queueItem list-group-item-dark" : "queueItem list-group-item";

		if (this.props.uniqueIDs.length == 0) {
			return <li key="0" className={elementClass} data-toggle="popover" tabIndex="0">The queue is empty.</li>
		}

		for (let i = 0; i < this.props.uniqueIDs.length; i++) {
			let username = this.props.usernameMap[this.props.uniqueIDs[i]];
			let html = <li key={i} className={elementClass} data-toggle="popover" tabIndex="0" uniqueid={this.props.uniqueIDs[i]}>{username}</li>;
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
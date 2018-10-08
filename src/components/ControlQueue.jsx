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

		if (this.props.viewerIDs.length == 0) {
			return <li key="0" className={elementClass} data-toggle="popover" tabIndex="0">The queue is empty.</li>
		}

		for (let i = 0; i < this.props.viewerIDs.length; i++) {
			let username = this.props.usernameMap[this.props.viewerIDs[i]];
			let html = <li key={i} className={elementClass} data-toggle="popover" tabIndex="0">{username}</li>;
			queue.push(html);
		}

		return queue;
	}

	render() {

		return (
			<ul id={"controlQueue" + this.props.num} className="controlQueue list-group">
				{this.getQueue()}
			</ul>
		);
	}

}
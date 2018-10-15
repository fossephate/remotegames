import React, { PureComponent } from "react";

export default class Waitlist extends PureComponent {

	constructor(props) {
		super(props);
	}

	getWaitlist() {

		let waitlist = [];

		if (this.props.uniqueIDs[this.props.tab - 1].length == 0) {
			return <li key={0} className={(this.props.darkTheme ? "list-group-item-dark" : "list-group-item")}>The waitlist is empty right now</li>;
		}


		for (let i = 0; i < this.props.uniqueIDs[this.props.tab - 1].length; i++) {
			let listHTML;

			let ID = this.props.uniqueIDs[this.props.tab - 1][i];

			if (this.props.myID == ID) {
				listHTML = <li key={i} className="list-group-item-highlight">{this.props.usernameMap[ID]}</li>;
			} else if (this.props.darkTheme) {
				listHTML = <li key={i} className="list-group-item-dark">{this.props.usernameMap[ID]}</li>;
			} else {
				listHTML = <li key={i} className="list-group-item">{this.props.usernameMap[ID]}</li>;
			}

			waitlist.push(listHTML);
		}

		return waitlist;
	}

	render() {

		return (
			<ul id="waitlist" className="list-group">
				{this.getWaitlist()}
			</ul>
		);
	}

}
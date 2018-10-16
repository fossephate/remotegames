import React, { PureComponent } from "react";

export default class UsernameDropdown extends PureComponent {

	constructor(props) {
		super(props);
	}

	getUsernameList() {

		let usernames = [];

		for (let i = 0; i < this.props.validUsernames.length; i++) {
			let html = <button key={i} index={i} className="username-dropdown-item dropdown-item" onClick={this.props.handleClick}>{this.props.validUsernames[i]}</button>;
			usernames.push(html);
		}

		if (this.props.validUsernames.length == 0) {
			return <button key={0} className="username-dropdown-item dropdown-item">???</button>
		}

		return usernames;
	}

	render() {

		return (
			<React.Fragment>
				<div id="usernameDropdown" className="dropdown show">
					<span className="align-self-center">Logged in as: </span>
					<a className="btn btn-secondary dropdown-toggle" href="#" id="usernameDropdownMenuLink" data-toggle="dropdown">
						{this.props.myUsername}
					</a>
					<div id="usernameDropdownDiv" className="dropdown-menu">
						{this.getUsernameList()}
					</div>
				</div>
			</React.Fragment>
		);
	}

}
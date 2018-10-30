import React, { PureComponent } from "react";

import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class UsernameDropdown extends PureComponent {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {

	}

	getUsernameList() {

		let usernames = [];

		for (let i = 0; i < this.props.validUsernames.length; i++) {
			// let html = <button key={i} index={i} className="username-dropdown-item dropdown-item" onClick={this.props.handleClick}>{this.props.validUsernames[i]}</button>;
			let html = <MenuItem key={i} value={i}>{this.props.validUsernames[i]}</MenuItem>;
			usernames.push(html);
		}

		if (this.props.validUsernames.length == 0) {
			// return <button key={0} className="username-dropdown-item dropdown-item">???</button>;
			return <MenuItem key={0} value={0}>Not signed in.</MenuItem>;
		}

		return usernames;
	}

	render() {


		let usernameIndex = this.props.validUsernames.indexOf(this.props.myUsername);
		if (usernameIndex == -1) {
			usernameIndex = 0;
		}
		return (
			<React.Fragment>
				{/* <div id="usernameDropdown" className="dropdown show"> */}
					<span className="align-self-center">Logged in as: </span>
					<Select
						variant="filled"
						value={usernameIndex}
						onChange={this.props.handleChange}
						inputProps={{
							name: "username",
							id: "usernameDropdown",
			            }}>
						{this.getUsernameList()}
					</Select>
				{/* </div> */}
			</React.Fragment>
		);
	}

}
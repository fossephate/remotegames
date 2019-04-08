// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
// import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		alignSelf: "center",
		background: "transparent",
	},
});

class UsernameDropdown extends PureComponent {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {}

	getUsernameList() {
		let usernames = [];

		for (let i = 0; i < this.props.validUsernames.length; i++) {
			usernames.push(
				<MenuItem key={i} value={i}>
					{this.props.validUsernames[i]}&nbsp;&nbsp;
				</MenuItem>,
			);
		}

		if (this.props.validUsernames.length == 0) {
			return (
				<MenuItem key={0} value={0}>
					Not signed in.
				</MenuItem>
			);
		}

		return usernames;
	}

	render() {
		let usernameIndex = this.props.validUsernames.indexOf(this.props.username);
		if (usernameIndex == -1) {
			usernameIndex = 0;
		}
		return (
			<Select
				value={usernameIndex}
				onChange={this.props.handleChange}
				input={<OutlinedInput labelWidth={0} />}
			>
				{this.getUsernameList()}
			</Select>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.clientInfo.username,
		validUsernames: state.clientInfo.validUsernames,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// updateSettings: (settings) => {
		// 	dispatch(updateSettings(settings))
		// },
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(UsernameDropdown);

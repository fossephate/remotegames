import React, { PureComponent } from "react";

export default class Checkbox extends PureComponent {

	constructor(props) {
		super(props);
	}

	state = {};

	getButton() {

	}

	render() {
		return (
			<label className="checkbox-inline checkbox-bootstrap checkbox-lg">
				<input onChange={this.props.handleChange} type="checkbox" checked={this.props.checked}/>
				<span className="checkbox-placeholder"></span>
				{this.props.text}
			</label>
		);
	}

}
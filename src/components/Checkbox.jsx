import React, { PureComponent } from "react";

export default class Checkbox extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {};
	}


	render() {
		return (
			<label className="checkbox-inline checkbox-bootstrap checkbox-lg">
				<input onChange={(event) => {this.props.handleChange(event.target.checked)}} type="checkbox" checked={this.props.checked}/>
				<span className="checkbox-placeholder"></span>
				{this.props.text}
			</label>
		);
	}

}
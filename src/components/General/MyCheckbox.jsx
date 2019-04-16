import React, { PureComponent } from "react";

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class MyCheckbox extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			// <label className="checkbox-inline checkbox-bootstrap checkbox-lg">
			// 	<input onChange={(event) => {this.props.handleChange(event.target.checked)}} type="checkbox" checked={this.props.checked}/>
			// 	<span className="checkbox-placeholder"></span>
			// 	{this.props.text}
			// </label>
			<FormControlLabel
				control={
					<Checkbox
						onChange={(event) => {
							this.props.handleChange(event.target.checked);
						}}
						type="checkbox"
						checked={this.props.checked || false}
						color="primary"
					/>
				}
				label={this.props.text}
			/>
		);
	}
}

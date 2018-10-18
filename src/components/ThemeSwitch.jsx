import React, { Component, PureComponent } from "react";

class ThemeSwitch extends Component {

	constructor(props) {
		super(props);
		this.css = `
		html { filter: invert(100%); background: #efeef1 !important; }
		* { background-color: inherit }
		img:not([src*=".svg"]), video, canvas, #chat, #loggedInContainer, .logo { filter: invert(100%) }`;
	}

	render() {
		return (
			<div>
				<style media="screen">
			      {this.css}
			    </style>
			</div>
		);
	}
}

export default ThemeSwitch;
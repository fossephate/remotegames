// react:
import React, { PureComponent } from "react";


// material ui:
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";

// css:
import "./NavTabs.css";


export default class NavTabs extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<React.Fragment>
				<Paper elevation={4}>
					<Tabs
						centered
						value={this.props.value - 1}
						indicatorColor="primary"
						textColor="primary"
						onChange={(event, value) => {
							this.props.handleChange(value + 1);
						}}>

						<Tab label="Lagless1"/>
						<Tab label="Lagless2"/>
						<Tab label="Lagless3"/>
						<Tab label="Lagless4"/>
						<Tab label="Lagless5"/>
					</Tabs>
				</Paper>
			</React.Fragment>
		);
	}

}
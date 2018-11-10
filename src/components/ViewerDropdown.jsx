// react:
import React, { PureComponent } from "react";

// material ui:
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
// import Select from "@material-ui/core/Select";
// import Divider from "@material-ui/core/Divider";

// icons:
import DropDownIcon from "@material-ui/icons/ArrowDropDown";

// redux:
// import { connect } from "react-redux";

export default class ViewerDropdown extends PureComponent {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			anchorEl: null,
		};
	}

	handleClick(event) {
		this.setState({ anchorEl: event.currentTarget });
	}

	handleClose() {
		this.setState({ anchorEl: null });
	}

	getViewerList() {

		let viewerNames = [];

		for (let i = 0; i < this.props.userids.length; i++) {
			viewerNames.push([]);
			for (let j = 0; j < this.props.userids[i].length; j++) {
				let name = this.props.usernameMap[this.props.userids[i][j]];
				if (name == null) {
					name = "guest";
				}
				viewerNames[i].push(name);
			}
		}

		let viewers = [];

		for (let i = 0; i < viewerNames.length; i++) {
			if (viewerNames[i].length > 0) {
				viewers.push(
					<div key={i} className="dropdown-divider"><MenuItem>Lagless {i + 1}</MenuItem></div>
				);
				// viewers.push(
				// 	<Divider key={i}>Lagless {i + 1}</Divider>
				// );
			}
			for (let j = 0; j < viewerNames[i].length; j++) {
				viewers.push(
					<MenuItem key={i + ":" + j} uniqueid={this.props.userids[i][j]}>{viewerNames[i][j]}</MenuItem>
				);
			}
		}
		return viewers;
	}

	render() {

		const open = Boolean(this.state.anchorEl);

		return (
			<React.Fragment>
				<Button variant="outlined" onClick={this.handleClick}>Viewers<DropDownIcon/></Button>
				<Menu
					id="viewerDropdown"
					anchorEl={this.state.anchorEl}
					open={open}
					onClose={this.handleClose}
					PaperProps={{
						style: {
							maxHeight: 48 * 4.5,
							width: 200,
						}
					}}>

					{this.getViewerList()}
				</Menu>
			</React.Fragment>
		);
	}

}

// const mapStateToProps = (state) => {
// 	return {
// 		viewerList: state.viewerList,
// 	};
// };
//
// export default connect(mapStateToProps)(ViewerList);

// export default ViewerDropdown;
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
// import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";

// icons:
import DropDownIcon from "@material-ui/icons/ArrowDropDown";

// redux:
// import { connect } from "react-redux";

export default class ViewerDropdown extends PureComponent {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.getViewerList = this.getViewerList.bind(this);

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
		let viewers = [];
		let count = 0;
		for (let key in this.props.accountMap) {
			if (!this.props.accountMap.hasOwnProperty(key)) {
				continue;
			}
			let account = this.props.accountMap[key];
			count++;
			viewers.push(
				<MenuItem key={count} uniqueid={account.userid}>
					<Typography variant="inherit" noWrap>
						{account.username}
					</Typography>
				</MenuItem>,
			);
		}
		if (count === 0) {
			viewers.push(
				<MenuItem key={0} uniqueid={null}>
					<Typography variant="inherit" noWrap>
						Loading...
					</Typography>
				</MenuItem>,
			);
		}
		return viewers;
	}

	render() {
		const open = Boolean(this.state.anchorEl);

		return (
			<React.Fragment>
				<Button variant="contained" color="primary" onClick={this.handleClick}>
					Viewers
					<DropDownIcon />
				</Button>
				<Menu
					id="viewerDropdown"
					anchorEl={this.state.anchorEl}
					open={open}
					onClose={this.handleClose}
					// TransitionComponent={Fade}
					PaperProps={{
						style: {
							maxHeight: 48 * 4.5,
							width: 250,
						},
					}}
				>
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

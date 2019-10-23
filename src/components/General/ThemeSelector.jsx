// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// import Fade from "@material-ui/core/Fade";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "src/actions/settings.js";

// recompose:
import { compose } from "recompose";

let classNames = require("classnames");

// jss:
const styles = (theme) => ({
	root: {},
});

const options = ["Light", "Dark", "Spooky"];
const options2 = ["light", "dark", "spooky"];

class ThemeSelector extends PureComponent {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			anchorEl: null,
			// selectedIndex: 1,
		};
	}

	handleClick(event) {
		this.setState({ anchorEl: event.currentTarget });
	}

	handleMenuItemClick(event, index) {
		// this.setState({ selectedIndex: index, anchorEl: null });
		this.setState({ anchorEl: null });
		this.props.switchTheme(options2[index]);
	}

	handleClose() {
		this.setState({ anchorEl: null });
	}

	render() {
		const { classes } = this.props;

		const open = Boolean(this.state.anchorEl);

		let themeIndex = options2.indexOf(this.props.theme);

		return (
			<React.Fragment>
				<Button variant="contained" onClick={this.handleClick}>
					Select Theme
				</Button>
				<Menu
					id="themeSelector"
					anchorEl={this.state.anchorEl}
					open={open}
					onClose={this.handleClose}
					// TransitionComponent={Fade}
					PaperProps={{
						style: {
							maxHeight: 48 * 4.5,
							width: 200,
						},
					}}
				>
					{options.map((option, index) => (
						<MenuItem
							key={option}
							disabled={index === themeIndex}
							selected={index === themeIndex}
							onClick={(event) => this.handleMenuItemClick(event, index)}
						>
							{option}
						</MenuItem>
					))}
				</Menu>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		theme: state.settings.theme,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		switchTheme: (index) => {
			dispatch(updateSettings({ theme: index }));
		},
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		mapDispatchToProps,
	),
)(ThemeSelector);

// react:
import React, { PureComponent } from "react";

// components:
import PopoverMenu from "src/components/General/PopoverMenu.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {},
});

class Username extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			popoverOpen: false,
		};

		this.ref = React.createRef();

		this.handleOpenPopover = this.handleOpenPopover.bind(this);
		this.handleClosePopover = this.handleClosePopover.bind(this);
	}

	handleOpenPopover() {
		this.setState({ popoverOpen: true });
	}

	handleClosePopover() {
		this.setState({ popoverOpen: false });
	}

	render() {
		return (
			<>
				<div
					style={this.props.style}
					onClick={this.handleOpenPopover}
					ref={(ref) => {
						this.ref = ref;
					}}
				>
					{this.props.children}
				</div>
				<PopoverMenu
					open={this.state.popoverOpen}
					onClose={this.handleClosePopover}
					anchorEl={this.ref}
				/>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default compose(withStyles(styles), connect(mapStateToProps))(Username);

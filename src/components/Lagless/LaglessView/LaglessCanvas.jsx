// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// let classNames = require("classnames");

// jss:
// const styles = (theme) => ({
// 	root: {
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		position: "relative",
// 		marginLeft: "20px",
// 		marginRight: "20px",
// 		textAlign: "center",
// 	},
// 	canvas: {
// 		width: "73.2%",
// 		alignSelf: "center",
// 	},
// });

class LaglessCanvas extends PureComponent {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.enableMouseControls = this.enableMouseControls.bind(this);

		this.state = {
			alertOpen: false,
		};
	}

	handleClick() {
		if (!window.inputHandler.mouse.settings.enabled) {
			this.setState({ alertOpen: true });
		}
	}

	handleClose() {
		this.setState({ alertOpen: false });
		window.inputHandler.mouse.toggle(false);
	}

	enableMouseControls() {
		this.setState({ alertOpen: false });
		window.inputHandler.mouse.init($("#videoCanvas")[0]);
		window.inputHandler.mouse.toggle(true);
	}

	render() {
		const { classes } = this.props;
		//
		// let videoClasses = "videoCanvas";
		// if (this.props.largescreen || this.props.fullscreen) {
		// 	laglessClasses += " fullscreen";
		// 	videoClasses += " fullscreen";
		// }
		//
		// // let videoClasses = classNames("videoCanvas", {
		// // 	displayNone: false,
		// // });
		//

		return (
			<React.Fragment>
				<canvas
					id="videoCanvas"
					onClick={this.handleClick}
					className={this.props.classes}
				/>
				<Dialog
					open={this.state.alertOpen}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Activate Mouse Controls?"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							By default, the mouse will move the right stick, you can remap and change
							settings for it in the remap menu.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							No
						</Button>
						<Button
							onClick={this.enableMouseControls}
							variant="contained"
							color="primary"
							autoFocus
						>
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default compose(
	// withStyles(styles),
	connect(mapStateToProps),
)(LaglessCanvas);

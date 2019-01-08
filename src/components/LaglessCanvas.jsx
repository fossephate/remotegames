// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

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
				<canvas id="videoCanvas0" className={this.props.classes} style={{display: (this.props.num != 0) ? "none" : null }}></canvas>
				<canvas id="videoCanvas1" className={this.props.classes} style={{display: (this.props.num != 1) ? "none" : null }}></canvas>
				<canvas id="videoCanvas2" className={this.props.classes} style={{display: (this.props.num != 2) ? "none" : null }}></canvas>
				<canvas id="videoCanvas3" className={this.props.classes} style={{display: (this.props.num != 3) ? "none" : null }}></canvas>
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

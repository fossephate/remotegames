// react:
import React, { PureComponent } from "react";

// import "./LogInArea.css";

// material ui:
import Button from "@material-ui/core/Button";

import "./Modal.css";


export default class Modal extends PureComponent {

	constructor(props) {
		super(props);
	}

	onDialogClick(event) {
		// prevent closing:
		event.stopPropagation();
	}

	render() {

		return (
			<React.Fragment>
				{/* <div> */}
					<div className="modal-overlay-div" onClick={this.props.handleClose}>
						<div className="modal-content-div">
							<div className="modal-dialog-div" onClick={this.onDialogClick}>
								{this.props.children}
							</div>
						</div>
					</div>
				{/* </div> */}
			</React.Fragment>
		);
	}

}

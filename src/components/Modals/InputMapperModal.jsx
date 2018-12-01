// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

// components:
import Modal from "./Modal.jsx";
import ConnectAccounts from "src/components/ConnectAccounts.jsx";
import MyCheckbox from "src/components/MyCheckbox.jsx"

// import "./RegisterModal.css";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		position: "relative",
		marginLeft: "5px",
		marginRight: "5px",
		textAlign: "center",
	},
	canvas: {
		width: "73.2%",
		alignSelf: "center",
	},
	twitch: {
		width: "73.2%",
		height: "100%",
	},
	fullscreen: {
		width: "100% !important",
		margin: "0",
		padding: "0",
		border: "none",
	},
});


class InputMapperModal extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<React.Fragment>
				<Modal handleClose={this.props.handleClose}>
					<Paper elevation={1} className="paper">
						{/* <div id="keyboardSettings" className="modal fade">
							<div className="modal-dialog modal-lg">
								<div className="modal-content">

									<div className="modal-header">
										<h3 className="modal-title text-center">Keyboard Remapper</h3>
									</div>

									<div className="modal-body">
										<button id="resetBindings" className="btn btn-primary">Reset Keyboard Bindings</button>
										<button id="defaultBindings" className="btn btn-primary">Default Keyboard Bindings</button>
										<form id="profileCreator" className="form-inline">
											<div className="form-group">
												<input id="profileName" className="form-control mx-sm-3" type="text" placeholder="Profile Name"/>
												<button id="createProfile" className="btn btn-primary">Create Keyboard Profile</button>
											</div>
										</form>
										<div id="keyboardConfigurator" className="">
											<div id="keyboardRemapperInstructions">
												To remap keys, click the letter you want to remap, then press the key you want to bind.
											</div>
											<div id="keyboardMapperContainer">
												<div id="keyboardConfigCodes">
													<li className="buttonConfig list-group-item" id="LU">Left Stick Up</li>
													<li className="buttonConfig list-group-item" id="LD">Left Stick Down</li>
													<li className="buttonConfig list-group-item" id="LL">Left Stick Left</li>
													<li className="buttonConfig list-group-item" id="LR">Left Stick Right</li>
													<li className="buttonConfig list-group-item" id="RU">Right Stick Up</li>
													<li className="buttonConfig list-group-item" id="RD">Right Stick Down</li>
													<li className="buttonConfig list-group-item" id="RL">Right Stick Left</li>
													<li className="buttonConfig list-group-item" id="RR">Right Stick Right</li>
													<li className="buttonConfig list-group-item" id="ABtn">A</li>
													<li className="buttonConfig list-group-item" id="BBtn">B</li>
													<li className="buttonConfig list-group-item" id="XBtn">X</li>
													<li className="buttonConfig list-group-item" id="YBtn">Y</li>
													<li className="buttonConfig list-group-item" id="DUp">DPad Up</li>
													<li className="buttonConfig list-group-item" id="DDown">DPad Down</li>
													<li className="buttonConfig list-group-item" id="DLeft">DPad Left</li>
													<li className="buttonConfig list-group-item" id="DRight">DPad Right</li>
													<li className="buttonConfig list-group-item" id="LStick">LStick Button</li>
													<li className="buttonConfig list-group-item" id="RStick">RStick Button</li>
													<li className="buttonConfig list-group-item" id="LBtn">L</li>
													<li className="buttonConfig list-group-item" id="ZL">ZL</li>
													<li className="buttonConfig list-group-item" id="RBtn">R</li>
													<li className="buttonConfig list-group-item" id="ZR">ZR</li>
													<li className="buttonConfig list-group-item" id="Minus">Minus</li>
													<li className="buttonConfig list-group-item" id="Plus">Plus</li>
													<li className="buttonConfig list-group-item" id="Capture">Capture</li>
													<li className="buttonConfig list-group-item" id="Home">Home</li>
												</div>
												<div id="keyboardConfigKeys">
													<li className="buttonConfig list-group-item" id="LUKey">W</li>
													<li className="buttonConfig list-group-item" id="LDKey">S</li>
													<li className="buttonConfig list-group-item" id="LLKey">A</li>
													<li className="buttonConfig list-group-item" id="LRKey">D</li>
													<li className="buttonConfig list-group-item" id="RUKey">I</li>
													<li className="buttonConfig list-group-item" id="RDKey">K</li>
													<li className="buttonConfig list-group-item" id="RLKey">J</li>
													<li className="buttonConfig list-group-item" id="RRKey">L</li>
													<li className="buttonConfig list-group-item" id="ABtnKey">&rarr;</li>
													<li className="buttonConfig list-group-item" id="BBtnKey">&darr;</li>
													<li className="buttonConfig list-group-item" id="XBtnKey">&uarr;</li>
													<li className="buttonConfig list-group-item" id="YBtnKey">&larr;</li>
													<li className="buttonConfig list-group-item" id="DUpKey">T</li>
													<li className="buttonConfig list-group-item" id="DDownKey">G</li>
													<li className="buttonConfig list-group-item" id="DLeftKey">F</li>
													<li className="buttonConfig list-group-item" id="DRightKey">H</li>
													<li className="buttonConfig list-group-item" id="LStickKey">R</li>
													<li className="buttonConfig list-group-item" id="RStickKey">Y</li>
													<li className="buttonConfig list-group-item" id="LBtnKey">U</li>
													<li className="buttonConfig list-group-item" id="ZLKey">Q</li>
													<li className="buttonConfig list-group-item" id="RBtnKey">O</li>
													<li className="buttonConfig list-group-item" id="ZRKey">E</li>
													<li className="buttonConfig list-group-item" id="MinusKey">-</li>
													<li className="buttonConfig list-group-item" id="PlusKey">=</li>
													<li className="buttonConfig list-group-item" id="CaptureKey">1</li>
													<li className="buttonConfig list-group-item" id="HomeKey">2</li>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</Paper>
				</Modal>
			</React.Fragment>
		);
	}

}

export default withStyles(styles)(InputMapperModal);

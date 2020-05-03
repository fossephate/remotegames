// react:
import React, { PureComponent } from "react";

// react-router:
import { /*Route, */ withRouter } from "react-router";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	Paper,
	Dialog,
	DialogContent,
} from "@material-ui/core";

// components:

import VirtualMachineForm from "src/components/forms/VirtualMachineForm.jsx";

// redux:
import { connect } from "react-redux";

// actions:
import { openAlert } from "shared/features/alert.js";

// recompose:
import { compose } from "recompose";

// jss:
const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
		// padding: "0px 0px 25px 0px !important",
		padding: "0 !important",
	},
	controls: {
		display: "flex",
		flexDirection: "column",
		// padding: "15px",
	},
	av: {
		display: "flex",
		flexDirection: "column",
		// padding: "15px",
	},
	site: {
		display: "flex",
		flexDirection: "column",
		// padding: "15px",
	},
});

class CreateVMModal extends PureComponent {
	constructor(props) {
		super(props);

		this.accountConnection = this.props.accountConnection;

		this.state = {
			formInitialValues: {
				qualityProfile: "custom",
				// host1: "https://remotegames.io",
				// port1: 8099,
				streamTitle: "My Stream",
				description: "",
				region: "US East",
				width: 1280,
				height: 720,
				windowTitle: null,
				windowTitleDropdown: 0,
				audioDevice: null,
				audioDeviceDropdown: 0,
				videoDevice: null,
				videoDeviceDropdown: 0,
				resolution: 540,
				videoBitrate: 1500,
				videoBufferSize: 512,
				audioBufferSize: 128,
				groupOfPictures: 60,
				captureRate: 60,
				framerate: 30,
				capture: "window",
				videoType: "mpeg1",
				offsetX: 0,
				offsetY: 0,
				controllerCount: 1,
				controlSwitch: false,
				virtualXboxControllers: true,
				qmin: 4,
				qmax: 20,
				forfeitTime: 1000 * 5, // 5 seconds
			},
		};

		this.profiles = {
			perfect: {
				videoBitrate: 14000,
				resolution: 1080,
				qmin: 2,
				qmax: 8,
			},

			ultraHigh: {
				videoBitrate: 10000,
				resolution: 1080,
				qmin: 4,
				qmax: 12,
			},

			high: {
				videoBitrate: 8000,
				resolution: 720,
				qmin: 2,
				qmax: 10,
			},

			medium: {
				videoBitrate: 5000,
				resolution: 540,
				qmin: 4,
				qmax: 10,
			},

			low: {
				videoBitrate: 2500,
				resolution: 480,
				qmin: 4,
				qmax: 10,
			},

			ultraLow: {
				videoBitrate: 1000,
				resolution: 360,
				qmin: 6,
				qmax: 20,
			},
		};
	}

	handleClose = () => {
		// this.props.history.push("/");
		this.props.history.goBack();
	};

	handleUpdateFormProfile = (profileName) => {
		this.setState({
			formInitialValues: {
				...this.state.formInitialValues,
				...this.profiles[profileName],
				qualityProfile: profileName,
			},
		});
	};

	handleStartMachine = (args) => {
		this.accountConnection.emit(
			"startMachine",
			{ authToken: this.props.authToken, streamSettings: args },
			(data) => {
				if (data.success) {
					this.props.openAlert({ title: "VM Created!" });
					setTimeout(() => {
						this.props.history.push(`/s/${this.props.username}`);
					}, 2000);
				} else {
					this.props.openAlert({ title: data.reason });
				}
			},
		);
	};

	handleStopMachine = () => {

		this.accountConnection.emit(
			"stopMachine",
			{ authToken: this.props.authToken },
			(data) => {
				if (data.success) {
					this.props.openAlert({ title: "success" });
				} else {
					this.props.openAlert({ title: data.reason });
				}
			},
		);
	};

	componentDidMount() {
		this.accountConnection.emit(
			"getStreamSettings",
			{ authToken: this.props.authToken },
			(data) => {
				if (data.success) {
					this.setState({
						formInitialValues: {
							...this.state.formInitialValues,
							...data.streamSettings,
						},
					});
				} else {
					this.props.openAlert({ title: data.reason });
				}
			},
		);
	}

	render() {
		const { classes } = this.props;

		console.log("re-rendering CreateVMModal.");

		return (
			<Dialog
				open={true}
				scroll="body"
				maxWidth="lg"
				fullWidth={true}
				onClose={this.handleClose}
			>
				<DialogContent className={classes.root}>
					<AppBar position="static">
						<Toolbar>
							<Typography variant="h6" color="inherit">
								Create a Virtual Machine
							</Typography>
						</Toolbar>
					</AppBar>
					{/* <Tabs
						centered
						value={which}
						classes={{ root: classes.tabs }}
						variant="fullWidth"
						indicatorColor="primary"
						textColor="primary"
						// scrollable
						// scrollButtons="auto"
						onChange={(event, value) => {
							if (value === 0) {
								this.props.history.replace("/settings/av");
							} else if (value === 1) {
								this.props.history.replace("/settings/controls");
							} else if (value === 2) {
								this.props.history.replace("/settings/site");
							}
						}}
					>
						<Tab label="Audio Video" />
						<Tab label="Controls" />
						<Tab label="Site" />
					</Tabs> */}

					<VirtualMachineForm
						initialValues={this.state.formInitialValues}
						onSubmit={this.handleStartMachine}
						onStopMachine={this.handleStopMachine}
						onUpdateFormProfile={this.handleUpdateFormProfile}
					/>
				</DialogContent>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.client.username,
		authToken: state.client.authToken,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openAlert: (data) => {
			dispatch(openAlert(data));
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(CreateVMModal);

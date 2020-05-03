// react:
import React, { Component } from "react";

// redux:
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

// material ui:
import {
	TextField,
	Checkbox,
	InputLabel,
	FormControlLabel,
	FormControl,
	FormHelperText,
	Link,
	Select,
	Radio,
	RadioGroup,
	Button,
	MenuItem,
	OutlinedInput,
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

// recompose:
import { compose } from "recompose";

// const { desktopCapturer } = require("electron");

// imports:
// const { execFile } = require("child_process");
// const app = require("electron").remote.app;
// const { spawn } = require("child_process");

const validate = (values) => {
	const errors = {};
	const requiredFields = ["username", "password1", "password2", "email"];
	requiredFields.forEach((field) => {
		if (!values[field]) {
			errors[field] = "Required";
		}
	});
	if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}
	return errors;
};

const renderTextField = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
}) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}
	/>
);

const renderCheckbox = ({ input, label }) => (
	<div>
		<FormControlLabel
			control={
				<Checkbox checked={input.value ? true : false} onChange={input.onChange} />
			}
			label={label}
		/>
	</div>
);

const renderTOS = ({ input }) => (
	<div>
		<Checkbox checked={input.value ? true : false} onChange={input.onChange} />
		<span>I have read and agree to the </span>
		<Link href="https://remotegames.io/tos.html">Terms and Conditions</Link>
	</div>
);

// const radioButton = ({ input, ...rest }) => (
// 	<FormControl>
// 		<RadioGroup {...input} {...rest}>
// 			<FormControlLabel
// 				value="window"
// 				control={<Radio color="primary" />}
// 				label="Capture Window"
// 			/>
// 			<FormControlLabel
// 				value="desktop"
// 				control={<Radio color="primary" />}
// 				label="Capture Desktop"
// 			/>
// 		</RadioGroup>
// 	</FormControl>
// );

const renderRadioGroup = ({ input, ...rest }) => (
	<RadioGroup
		{...input}
		{...rest}
		value={input.value}
		onChange={(event, value) => input.onChange(value)}
	/>
);

const renderFromHelper = ({ touched, error }) => {
	if (!(touched && error)) {
		return;
	} else {
		return <FormHelperText>{touched && error}</FormHelperText>;
	}
};

const renderSelectField = ({
	input,
	label,
	meta: { touched, error },
	children,
	variant,
	labelWidth,
	...custom
}) => (
	<FormControl error={touched && error}>
		<InputLabel variant={variant} htmlFor={label + "Select"}>
			{label}
		</InputLabel>
		<Select
			autoWidth={true}
			{...input}
			{...custom}
			inputProps={
				variant !== "outlined" && variant !== "filled"
					? {
							id: label + "Select",
							labelWidth: labelWidth,
					  }
					: undefined
			}
			input={
				variant === "outlined" ? (
					<OutlinedInput id={label + "Select"} labelWidth={labelWidth} />
				) : undefined
			}
		>
			{children}
		</Select>
		{renderFromHelper({ touched, error })}
	</FormControl>
);

// jss:
const styles = (theme) => ({
	root: {
		display: "grid",
		gridGap: "10px",
		padding: "25px",
		width: "100%",
		userSelect: "none",
		overflowY: "auto",
		alignSelf: "center",

		"&>div": {
			display: "grid",
			gridTemplateColumns: "1fr 1fr 1fr",
			gridGap: "10px",
		},
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		// position: "relative",
		// marginLeft: "5px",
		// marginRight: "5px",
		// textAlign: "center",
	},
	dropdownContainer: {
		display: "flex",
		gridColumn: "1/3",
		border: "2px solid #000",
		borderRadius: "5px",
		// backgroundColor: "#6a6a6a50",
		"&>div": {
			width: "50%",
			// backgroundColor: "#6a6a6a50",
		},
		"&>div:first-child": {
			marginRight: "10px",
		},
		margin: "auto 0",
		padding: "10px",
		// "&:before": {
		// 	content: '""',
		// 	border: "3px solid #000",
		// 	borderRadius: "5px",
		// },
	},
});

class VirtualMachineForm extends Component {
	constructor(props) {
		super(props);

		this.windowTitles = [];
		this.dshowDevices = [];
		this.audioDeviceNames = [];
		this.state = {
			TOSAgreed: false,
		};
	}

	componentDidMount() {}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.qualityProfile !== nextProps.qualityProfile) {
			this.props.onUpdateFormProfile(nextProps.qualityProfile);
		}
		return true;
	}

	agreeTOS = (event) => {
		this.setState({ TOSAgreed: event.target.checked });
	};

	getFPSMenuItems = () => {
		return [
			<MenuItem key={0} value={30}>
				30
			</MenuItem>,
			<MenuItem key={1} value={20}>
				20
			</MenuItem>,
		];
	};

	getResolutionMenuItems = () => {
		return [
			<MenuItem key={0} value={1080}>
				1080
			</MenuItem>,
			<MenuItem key={1} value={720}>
				720
			</MenuItem>,
			<MenuItem key={2} value={540}>
				540
			</MenuItem>,
			<MenuItem key={3} value={480}>
				480
			</MenuItem>,
			<MenuItem key={1} value={360}>
				360
			</MenuItem>,
			<MenuItem key={1} value={240}>
				240
			</MenuItem>,
		];
	};

	render() {
		const {
			handleSubmit,
			pristine,
			reset,
			submitting,
			classes,
			qualityProfile,
		} = this.props;

		return (
			<form onSubmit={handleSubmit} className={classes.root}>
				<div>
					<Field
						name="streamTitle"
						component={renderTextField}
						label="Stream Title"
						variant="outlined"
					/>
					<Field
						name="thumbnailURL"
						component={renderTextField}
						label="Thumbnail URL"
						variant="outlined"
					/>
				</div>

				<div style={{ display: "block" }}>
					<Field name="qualityProfile" component={renderRadioGroup} row>
						<FormControlLabel
							value="ultraLow"
							control={<Radio color="primary" />}
							label="Ultra Low"
						/>
						<FormControlLabel
							value="low"
							control={<Radio color="primary" />}
							label="Low"
						/>
						<FormControlLabel
							value="medium"
							control={<Radio color="primary" />}
							label="Medium"
						/>
						<FormControlLabel
							value="high"
							control={<Radio color="primary" />}
							label="High"
						/>
						<FormControlLabel
							value="ultraHigh"
							control={<Radio color="primary" />}
							label="Ultra High"
						/>
						<FormControlLabel
							value="custom"
							control={<Radio color="primary" />}
							label="Custom"
						/>
						{/* <FormControlLabel
							value="perfect"
							control={<Radio color="primary" />}
							label="Perfect"
						/> */}
					</Field>
				</div>

				<div>
					<Field
						name="resolution"
						component={renderSelectField}
						label="Resolution"
						variant="outlined"
						type="number"
					>
						{this.getResolutionMenuItems()}
					</Field>
					<Field
						name="videoBitrate"
						component={renderTextField}
						label="Video Bitrate (kb/s)"
						variant="outlined"
						type="number"
					/>
					<Field
						name="framerate"
						component={renderSelectField}
						label="Output FPS"
						variant="outlined"
						labelWidth={100}
					>
						{this.getFPSMenuItems()}
					</Field>
				</div>

				{qualityProfile === "custom" && (
					<>
						<div>
							<Field
								name="videoBufferSize"
								component={renderTextField}
								label="Video Buffer Size"
								variant="outlined"
								type="number"
							/>
							<Field
								name="audioBufferSize"
								component={renderTextField}
								label="Audio Buffer Size"
								variant="outlined"
								type="text"
							/>
							<Field
								name="groupOfPictures"
								component={renderTextField}
								label="Group of Pictures"
								variant="outlined"
								type="text"
							/>
						</div>

						<div>
							<Field
								name="qmin"
								component={renderTextField}
								label="QMin"
								variant="outlined"
								type="number"
							/>
							<Field
								name="qmax"
								component={renderTextField}
								label="QMax"
								variant="outlined"
								type="text"
							/>
						</div>
					</>
				)}

				{/* <div style={{ display: "block" }}>
					<Field name="videoType" component={renderRadioGroup} row>
						<FormControlLabel
							value="mpeg1"
							control={<Radio color="primary" />}
							label="MPEG-1"
						/>
						<FormControlLabel
							value="webRTC"
							control={<Radio color="primary" />}
							label="WebRTC"
						/>
					</Field>
				</div> */}

				<div>
					<Field name="agree" component={renderTOS} onChange={this.agreeTOS} />
				</div>
				<div className={classes.buttons}>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={pristine || submitting || !this.state.TOSAgreed}
					>
						Start Virtual Machine
					</Button>
					<Button
						variant="contained"
						color="secondary"
						onClick={this.props.onStopMachine}
					>
						Stop Virtual Machine
					</Button>
				</div>
			</form>
		);
	}
}

// let initialValues = {
// 	host1: "https://remotegames.io",
// 	port1: 8099,
// 	width: 1280,
// 	height: 720,
// 	// windowTitle: null,
// 	resolution: 540,
// 	videoBitrate: 1,
// 	captureRate: 30,
// 	capture: "window",
// 	offsetX: 0,
// 	offsetY: 0,
// 	controllerCount: 1,
// };

// export default compose(
// 	withStyles(styles),
// 	reduxForm({
// 		form: "VideoSettingsForm", // a unique identifier for this form
// 		validate,
// 		initialValues,
// 	}),
// )(VideoSettingsForm);

const mapStateToProps = (state, ownProps) => {
	return {
		initialValues: {
			videoBitrate: ownProps.videoBitrate,
		},
	};
};

// Decorate with redux-form
let VirtualMachineForm2 = reduxForm({
	form: "VirtualMachineForm", // a unique identifier for this form
	enableReinitialize: true,
	validate,
	// initialValues,
})(VirtualMachineForm);

// Decorate with connect to read form values
const selector = formValueSelector("VirtualMachineForm"); // <-- same as form name
VirtualMachineForm2 = connect((state) => {
	const qualityProfile = selector(state, "qualityProfile");
	return {
		qualityProfile,
	};
})(VirtualMachineForm2);

export default compose(withStyles(styles))(VirtualMachineForm2);

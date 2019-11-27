// react:
import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";

// material ui:
import {
	withStyles,
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
} from "@material-ui/core";

// captcha:
import ReCAPTCHA from "react-google-recaptcha";

// recompose:
import { compose } from "recompose";

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
		<Link href="/tos.html">Terms and Conditions</Link>
	</div>
);

const radioButton = ({ input, ...rest }) => (
	<FormControl>
		<RadioGroup {...input} {...rest}>
			<FormControlLabel value="female" control={<Radio />} label="Female" />
			<FormControlLabel value="male" control={<Radio />} label="Male" />
		</RadioGroup>
	</FormControl>
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
	...custom
}) => (
	<FormControl error={touched && error}>
		<InputLabel htmlFor="age-native-simple">Age</InputLabel>
		<Select
			native
			{...input}
			{...custom}
			inputProps={{
				name: "age",
				id: "age-native-simple",
			}}
		>
			{children}
		</Select>
		{renderFromHelper({ touched, error })}
	</FormControl>
);

// jss:
const styles = (theme) => ({
	buttons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		// position: "relative",
		// marginLeft: "5px",
		// marginRight: "5px",
		// textAlign: "center",
	},
	field: {
		margin: "20px 0px",
	},
});

class RegisterForm extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			captchaCompleted: false,
			TOSAgreed: false,
		};
		this.completeCaptcha = this.completeCaptcha.bind(this);
		this.agreeTOS = this.agreeTOS.bind(this);
	}

	completeCaptcha() {
		this.setState({
			captchaCompleted: true,
		});
	}

	agreeTOS(event) {
		this.setState({ TOSAgreed: event.target.checked });
	}

	render() {
		const { handleSubmit, pristine, reset, submitting, classes } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<div className={classes.field}>
					<Field
						name="email"
						component={renderTextField}
						label="Email"
						variant="standard"
						fullWidth
					/>
				</div>
				<div className={classes.field}>
					<Field
						name="username"
						component={renderTextField}
						label="Username"
						variant="standard"
						fullWidth
					/>
				</div>
				<div className={classes.field}>
					<Field
						name="password1"
						component={renderTextField}
						label="Password"
						type="password"
						variant="standard"
						fullWidth
					/>
				</div>
				<div className={classes.field}>
					<Field
						name="password2"
						component={renderTextField}
						label="Confirm Password"
						type="password"
						variant="standard"
						fullWidth
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "flex-start" }}>
					<Field name="agree" component={renderTOS} onChange={this.agreeTOS} />
				</div>
				<div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
					<ReCAPTCHA
						sitekey="6LeOU6UUAAAAABSPwdKHf-3ttPz9Ql4AgVTWobXI"
						theme="dark"
						size="normal"
						onChange={this.completeCaptcha}
					/>
				</div>
				<div className={classes.buttons}>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						disabled={
							pristine ||
							submitting ||
							!this.state.captchaCompleted ||
							!this.state.TOSAgreed
						}
						fullWidth
					>
						Create Account
					</Button>
				</div>
			</form>
		);
	}
}

export default compose(
	withStyles(styles),
	reduxForm({
		form: "RegisterForm", // a unique identifier for this form
		validate,
	}),
)(RegisterForm);

// react:
import React from "react";
import { Field, reduxForm } from "redux-form";

// material ui:
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";

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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
	return sleep(1000).then(() => {
		// simulate server latency
		if (["foo@foo.com", "bar@bar.com"].includes(values.email)) {
			// eslint-disable-next-line no-throw-literal
			throw { email: "Email already Exists" };
		}
	});
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

const LoginForm = (props) => {
	const { handleSubmit, pristine, reset, submitting, classes } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div className={classes.field}>
				<Field
					name="user"
					component={renderTextField}
					label="Username or Email"
					variant="standard"
					fullWidth
				/>
			</div>
			<div className={classes.field}>
				<Field
					name="password"
					component={renderTextField}
					label="Password"
					type="password"
					variant="standard"
					fullWidth
				/>
			</div>
			<div className={classes.buttons}>
				<Button
					variant="contained"
					color="primary"
					type="submit"
					disabled={pristine || submitting}
					fullWidth
				>
					Login
				</Button>
			</div>
		</form>
	);
};

export default compose(
	withStyles(styles),
	reduxForm({
		form: "RegisterForm", // a unique identifier for this form
		validate,
	}),
)(LoginForm);

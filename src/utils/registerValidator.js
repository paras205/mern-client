import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};
	if (validator.isEmpty(data.name)) {
		errors.name = 'Name is required';
	}
	if (!validator.isEmail(data.email)) {
		errors.email = 'Invalid Email';
	}
	if (validator.isEmpty(data.email)) {
		errors.email = 'Email is required';
	}
	if (validator.isEmpty(data.password)) {
		errors.password = 'Password is required';
	}
	if (validator.isEmpty(data.passwordConfirm)) {
		errors.passwordConfirm = 'Password Confirm is required';
	}
	if (validator.equals(data.password, data.passwordConfirm)) {
		errors.passwordConfirmation = 'Password does not match';
	}
	return {
        errors,
        isValid: isEmpty(errors)
	};
}

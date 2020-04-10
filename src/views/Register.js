import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import { signup } from '../store/actions/auth';
import Input from '../components/Input';
import validateInput from "../utils/registerValidator";

class Register extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
		errors: {}
	};
	handleChange = (e) => {
		if (!!this.state.errors[e.target.name]) {
			let errors = Object.assign({}, this.state.errors);
			delete errors[e.target.name];
			this.setState({
				[e.target.name]: e.target.value,
				errors
			});
		} else {
			this.setState({
				[e.target.name]: e.target.value
			});
		}
	};
	isValid(){
	const {errors,isValid} = 	validateInput(this.state);
	if(!isValid){
		this.setState({errors})
	}
	return isValid;
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if(this.isValid()){
			this.props.signup(this.state);
			this.setState({
				name: '',
				email: '',
				password: '',
				passwordConfirm: ''
			});
		}

	};
	renderButtonText = () => {
		if (this.props.auth.loading) {
			return <FaSpinner />;
		} else {
			return <span>Submit</span>;
		}
	};
	render() {

		const { name, email, password, passwordConfirm ,errors} = this.state;
		if (this.props.auth.isAuthenticated) {
			return <Redirect to="/admin/dashboard" />;
		}
		console.log(errors)
		return (
			<div className="h-100 pos-relative bg-gradient">
				<div className="item-center box-item">
					<form onSubmit={this.handleSubmit}>
						<Input
							label="Full Name"
							type="text"
							placeholder="Enter Your Name"
							name="name"
							value={name}
							onchange={this.handleChange}
							error={errors.name}
						/>
						<Input
							label="Email"
							type="email"
							name="email"
							value={email}
							placeholder="Enter your email address"
							onchange={this.handleChange}
							error={errors.email}
						/>
						<Input
							label="Password"
							type="password"
							name="password"
							value={password}
							placeholder="Enter password"
							onchange={this.handleChange}
							error={errors.password}
						/>
						<Input
							label="Confirm password"
							type="password"
							name="passwordConfirm"
							value={passwordConfirm}
							placeholder="Repeat password"
							onchange={this.handleChange}
							error={errors.passwordConfirm}
						/>
						<div className="form-group">
							<button className="btn btn-primary btn-raised">{this.renderButtonText()}</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps, { signup })(Register);

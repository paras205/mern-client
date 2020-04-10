import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

import { login } from '../store/actions/auth';
import Input from '../components/Input';

class Login extends Component {
	state = {
		email: '',
		password: '',
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
	handleSubmit = (e) => {
		e.preventDefault();
		let errors = {};
		const { email, password } = this.state;
		if (email === '') errors.email = 'This field is required';
		if (password === '') errors.password = 'This field is required';

		this.setState({ errors });
		const isValid = Object.keys(errors).length === 0;
		if (isValid) {
			this.props.login(this.state);
			this.setState({
				email: '',
				password: ''
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
		if (this.props.auth.isAuthenticated) {
			return <Redirect to="/admin/dashboard" />;
		}
		const { email, password } = this.state;
		return (
			<div className="h-100 pos-relative bg-gradient">
				<div className="item-center box-item">
					<form onSubmit={this.handleSubmit}>
						<Input
							label="Email"
							type="email"
							name="email"
							value={email}
							placeholder="Enter your email address"
							onchange={this.handleChange}
							error={this.state.errors.email}
						/>
						<Input
							label="Password"
							type="password"
							name="password"
							value={password}
							placeholder="Enter password"
							onchange={this.handleChange}
							error={this.state.errors.password}
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
export default connect(mapStateToProps, { login })(Login);

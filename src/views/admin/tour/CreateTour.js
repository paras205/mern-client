import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createTour } from '../../../store/actions/tour';
import Input from '../../../components/Input';
import Textarea from '../../../components/TextEditor';


class CreateTour extends Component {
	state = {
		name: '',
		duration: '',
		maxGroupSize: '',
		price: '',
		priceDiscount: '',
		description: '',
		image: ''
	};
	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		});
	};
	handleImage = (e) => {
		this.setState({
			...this.state,
			image: e.target.files[0]
		});
	};
	onHandleChange = (e) => {
		this.setState({
			description: e
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createTour(this.state);
		this.setState({
			name: '',
			duration: '',
			maxGroupSize: '',
			price: '',
			priceDiscount: '',
			description: '',
			image: ''
		});
	};
	render() {
		const { name, description, duration, maxGroupSize, price, priceDiscount } = this.state;
		return (
			<div className="content-wrapper">
				<div className="container">
					<div className="admin-form">
						<form onSubmit={this.handleSubmit}>
							<Input
								label="Tour Title"
								type="text"
								placeholder="Enter Your Name"
								name="name"
								value={name}
								onchange={this.handleChange}
							/>
							<Input
								label="Tour Image"
								type="file"
								placeholder="Tour Image"
								onchange={this.handleImage}
							/>
							<Input
								label="Tour duration"
								type="number"
								placeholder="Enter Your duration"
								name="duration"
								value={duration}
								onchange={this.handleChange}
							/>
							<Input
								label="Max Group Size"
								type="number"
								placeholder="Max Group Size"
								name="maxGroupSize"
								value={maxGroupSize}
								onchange={this.handleChange}
							/>
							<Input
								label="Price"
								type="number"
								placeholder="Price"
								name="price"
								value={price}
								onchange={this.handleChange}
							/>
							<Input
								label="Price Discount"
								type="number"
								placeholder="Price Discount"
								name="priceDiscount"
								value={priceDiscount}
								onchange={this.handleChange}
							/>
							<div className="form-group">
								<Textarea
									value={description}
									onHandleChange={this.onHandleChange}
									label="Tour Description"
								/>
							</div>

							<div className="form-group">
								<button className="btn btn-primary btn-raised">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(null, { createTour })(CreateTour);

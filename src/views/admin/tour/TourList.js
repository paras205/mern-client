import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHtml from 'react-render-html';
import { IoIosTrash } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';

import { getAllTour } from '../../../store/actions/tour';

class TourList extends Component {
	componentDidMount() {
		this.props.getAllTour();
	}
	renderTableData() {
		return this.props.tours.tours.tours.map((item, index) => {
			const { id, name, description, price, duration, image, ratingsAverage, ratingsQuantiyt, slug } = item;
			return (
				<tr key={id}>
					<td>{index + 1}</td>
					<td style={{ width: '200px' }}>{name}</td>
					<td style={{ width: '300px' }}>{renderHtml(description.slice(0, 180))}</td>
					<td className="image-wrapper">
						<img src={`http://localhost:8080/${image}`} alt={slug} />
					</td>
					<td>{price}</td>
					<td>{duration}</td>
					<td>{ratingsAverage}</td>
					<td>{ratingsQuantiyt}</td>
					<td className="actions">
						<span>
							<IoIosTrash />
						</span>
						<span>
							<FiEdit />
						</span>
					</td>
				</tr>
			);
		});
	}
	render() {
		if (this.props.tours.tours.tours === undefined) {
			return <p>Loading</p>;
		}
		if (this.props.tours.tours.tours.length === 0) {
			return <p>No Items</p>;
		}
		return (
			<div className="list-wrapper table-wrapper content-wrapper">
				<table>
					<thead>
						<tr>
							<th>S.no</th>
							<th>Name</th>
							<th>Description</th>
							<th>Image</th>
							<th>Price</th>
							<th>Duration</th>
							<th>Average Rating</th>
							<th>Rating Quantity</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData()}</tbody>
				</table>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		tours: state.tours
	};
};
export default connect(mapStateToProps, { getAllTour })(TourList);

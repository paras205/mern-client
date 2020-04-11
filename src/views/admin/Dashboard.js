import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import { paginate } from '../../utils/Paginate';

class Dashboard extends Component {
	state = {
		currentPage: 1,
		pageSize: 4,
		tableItems: [
			{
				id: 1,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 2,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 3,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 4,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 5,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 6,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 7,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 8,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 9,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			},
			{
				id: 10,
				name: 'user',
				description: 'user Description',
				image: 'user Image'
			}
		]
	};
	handlePageChange = (page) => {
		this.setState({
			currentPage: page
		});
	};
	render() {
		const { length: count } = this.state.tableItems;
		const { pageSize, currentPage, tableItems } = this.state;
		const items = paginate(tableItems, currentPage, pageSize);
		return (
			<div className="content-wrapper">
				<div className="container">
					<ul className="list-group" style={{ marginBottom: '30px' }}>
						<li className="list-group-item">Action</li>
						<li className="list-group-item">Crime</li>
						<li className="list-group-item">Thiller</li>
						<li className="list-group-item">Comedy</li>
					</ul>
					<Table items={items} />
					<Pagination
						currentPage={currentPage}
						itemsCount={count}
						pageSize={pageSize}
						onPageChange={this.handlePageChange}
					/>
				</div>
			</div>
		);
	}
}
export default connect(null, null)(Dashboard);

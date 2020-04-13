import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<ul className="list-group admin-sidebar">
			<li className="list-group-item">
				<Link to="/admin/dashboard">dashboard</Link>
			</li>
			<li className="list-group-item">
				<Link to="/admin/tour/create">Create Tour</Link>
			</li>
			<li className="list-group-item">
				<Link to="/admin/tours"> All Tours</Link>
			</li>
		</ul>
	);
};

export default Sidebar;

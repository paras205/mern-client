import React from 'react';
import SideBar from '../components/Sidebar';

const PrivateLayout = (props) => {
	return (
		<div className="admin-wrapper">
			<SideBar />
			{props.children}
		</div>
	);
};

export default PrivateLayout;

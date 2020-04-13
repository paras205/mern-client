import React from 'react';

import Header from '../components/client/Header';
import Footer from '../components/client/Footer';

const PublicLayout = (props) => {
	return (
		<div className="page-wrapper">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};

export default PublicLayout;

import React from 'react';
import { Switch } from 'react-router-dom';

import PublicLayout from '../layout/PublicLayout';
import RouteWithLayout from '../layout/RouteWithLayout';

import HomePage from '../views/Home';
import TourDetail from '../views/TourDetail';

const PublicRoutes = () => {
	return (
		<React.Fragment>
			<Switch>
				<RouteWithLayout exact path="/" layout={PublicLayout} component={HomePage} />
				<RouteWithLayout exact path="/pages/:slug" layout={PublicLayout} component={TourDetail} />
			</Switch>
		</React.Fragment>
	);
};

export default PublicRoutes;

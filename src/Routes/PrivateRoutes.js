import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';

import RouteWithLayout from '../layout/RouteWithLayout';
import PrivateLayout from '../layout/PrivateLayout';

import Dashboard from '../views/admin/Dashboard';
import AllTours from '../views/admin/tour/TourList';
import CreateTour from '../views/admin/tour/CreateTour';

const PrivateRoutes = (props) => {
	if (props.auth.isAuthenticated) {
		return (
			<React.Fragment>
				<Switch>
					<RouteWithLayout exact path="/admin/dashboard" layout={PrivateLayout} component={Dashboard} />
					<RouteWithLayout exact path="/admin/tours" layout={PrivateLayout} component={AllTours} />
					<RouteWithLayout exact path="/admin/tour/create" layout={PrivateLayout} component={CreateTour} />
				</Switch>
			</React.Fragment>
		);
	} else {
		return <Redirect to="/login" />;
	}
};
const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps)(PrivateRoutes);

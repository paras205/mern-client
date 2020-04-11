import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Alert from './components/Alert';
import Homepage from './views/Home';
import BlogPage from './views/Blog';
import RegisterPage from './views/Register';
import LoginPage from './views/Login';

import Dashboard from './views/admin/Dashboard';
import CreateTourPage from './views/admin/tour/CreateTour';
import TourList from './views/admin/tour/TourList';
import AdminSideBar from './components/Sidebar';

const Routes = () => {
	return (
		<React.Fragment>
			<Alert />
			<AdminSideBar />
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/blog" exact component={BlogPage} />
				<Route path="/register" exact component={RegisterPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/admin/dashboard" exact component={Dashboard} />
				<Route path="/admin/create/tour" exact component={CreateTourPage} />
				<Route path="/admin/tours" exact component={TourList} />
			</Switch>
		</React.Fragment>
	);
};

export default Routes;

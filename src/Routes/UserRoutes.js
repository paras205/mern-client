import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWithLayout from '../layout/RouteWithLayout';
import UserLayout from '../layout/UserLayout';

import LoginPage from '../views/Login';
import RegisterPage from '../views/Register';

const UserRoutes = () => {
	return (
		<Switch>
			<RouteWithLayout exact path="/login" layout={UserLayout} component={LoginPage} />
			<RouteWithLayout exact path="/register" layout={UserLayout} component={RegisterPage} />
		</Switch>
	);
};

export default UserRoutes;

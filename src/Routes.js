import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './views/Home';
import BlogPage from './views/Blog';
import RegisterPage from './views/Register';
import LoginPage from './views/Login';

import Dashboard from "./views/Dashboard"

const Routes = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/blog" exact component={BlogPage} />
				<Route path="/register" exact component={RegisterPage} />
				<Route path="/login" exact component={LoginPage} />
				<Route path="/admin/dashboard" exact component={Dashboard}/>
			</Switch>
		</React.Fragment>
	);
};

export default Routes;

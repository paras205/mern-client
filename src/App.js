import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';

import setAuthorizationToken from './utils/AuthToken';
import { setCurrentUser } from './store/actions/auth';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';

if (localStorage.token) {
	setAuthorizationToken(localStorage.token);
	store.dispatch(setCurrentUser(jwt.decode(localStorage.token)));
}

function App() {
	return (
		<div className="wrapper">
			<Provider store={store}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</Provider>
		</div>
	);
}

export default App;

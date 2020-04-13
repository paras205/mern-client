import React, { Component } from 'react';

import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import UserRoutes from './Routes/UserRoutes';
import Alert from './components/Alert';

class Routes extends Component {
	render() {
		return (
			<React.Fragment>
				<Alert />
				<PublicRoutes />
				<PrivateRoutes />
				<UserRoutes />
			</React.Fragment>
		);
	}
}

export default Routes;

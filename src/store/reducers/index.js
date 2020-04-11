import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import tours from './tour';

export default combineReducers({
	alert,
	auth,
	tours
});

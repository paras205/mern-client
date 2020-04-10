import isEmpty from 'lodash/isEmpty';
import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOADING, LOGIN_SUCCESS, LOGIN_ERROR, SET_CURRENT_USER } from '../actions/auth';

const initialState = {
	loading: false,
	user: null,
	isAuthenticated: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SIGNUP_ERROR:
		case LOGIN_ERROR:
			return {
				...state,
				isAuthenticated: false,
				loading: false
			};
		case SIGNUP_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			};
		case SET_CURRENT_USER: {
			return {
				...state,
				isAuthenticated: !isEmpty(action.user),
				user: action.user,
				loading: false
			};
		}
		case LOADING: {
			return {
				...state,
				loading: true
			};
		}
		default:
			return state;
	}
}

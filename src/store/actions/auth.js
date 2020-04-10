import axios from 'axios';
import jwt from 'jsonwebtoken';
import { auth } from '../baseUrl';
import setAuthorizationToken from '../../utils/AuthToken';

export const LOADING = 'LOADING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user
	};
}

export function signup(postData) {
	return async (dispatch) => {
		try {
			dispatch({ type: LOADING });
			const res = await axios.post(`${auth}/register`, postData);
			const token = res.data.token;
			localStorage.setItem('token', token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser(jwt.decode(token)));
			dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
		} catch (err) {
			dispatch({ type: SIGNUP_ERROR, payload: err });
		}
	};
}

export function login(postData) {
	return async (dispatch) => {
		try {
			dispatch({ type: LOADING });
			const res = await axios.post(`${auth}/login`, postData);
			const token = res.data.token;
			localStorage.setItem('token', token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser(jwt.decode(token)));
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
		} catch (err) {
			dispatch({ type: LOGIN_ERROR, payload: err });
		}
	};
}

export function logout() {
	return (dispatch) => {
		localStorage.removeItem('token');
		setAuthorizationToken(false);
		dispatch(setAuthorizationToken({}));
	};
}

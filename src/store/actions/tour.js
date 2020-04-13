import axios from 'axios';
import { tour } from '../baseUrl';
import { setAlert } from './alert';

export const LOADING = 'LOADING';
export const CREATE_TOUR_SUCCESS = 'CREATE_TOUR';
export const CREATE_TOUR_ERROR = 'CREATE_TOUR_ERROR';
export const GET_ALL_TOURS = 'GET_ALL_TOURS';
export const GET_TOURS_ERROR = 'GET_TOURS_ERROR';
export const GET_TOUR = 'GET_TOUR';
export const GET_TOUR_ERROR = 'GET_TOUR_ERROR';

export function createTour(data) {
	return async (dispatch) => {
		try {
			const formdata = new FormData();
			formdata.append('image', data.image);
			formdata.append('name', data.name);
			formdata.append('description', data.description);
			formdata.append('priceDiscount', data.priceDiscount);
			formdata.append('price', data.price);
			formdata.append('maxGroupSize', data.maxGroupSize);
			formdata.append('duration', data.duration);
			dispatch({ type: LOADING });
			const res = await axios.post(`${tour}`, formdata);
			dispatch({ type: CREATE_TOUR_SUCCESS, payload: res.data });
			dispatch(setAlert('Tour Created', 'success'));
		} catch (err) {
			dispatch({ type: CREATE_TOUR_ERROR, payload: err });
			dispatch(setAlert('Error', 'danger'));
		}
	};
}

export function getAllTour() {
	return async (dispatch) => {
		try {
			dispatch({ type: LOADING });
			const res = await axios.get(`${tour}`);
			dispatch({ type: GET_ALL_TOURS, payload: res.data });
		} catch (err) {
			dispatch({ type: GET_TOURS_ERROR, payload: err });
		}
	};
}

export function getTour(id) {
	return async (dispatch) => {
		try {
			dispatch({ type: LOADING });
			const res = await axios.get(`${tour}/${id} `);
			dispatch({ type: GET_TOUR, payload: res.data });
		} catch (err) {
			dispatch({ type: GET_TOUR_ERROR, payload: err });
		}
	};
}

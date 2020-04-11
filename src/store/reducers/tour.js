import { GET_ALL_TOURS, LOADING } from '../actions/tour';

const initialState = {
	loading: false,
	tours: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_TOURS: {
			return {
				...state,
				tours: action.payload,
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

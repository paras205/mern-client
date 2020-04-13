import { GET_ALL_TOURS, LOADING, GET_TOUR } from '../actions/tour';

const initialState = {
	loading: false,
	tours: [],
	tour: {}
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
		case GET_TOUR: {
			return {
				...state,
				tour: action.payload
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

import * as types from '../actions/actionTypes';
const initialState = {
	homework: [],
	student_homework: [],
	message: 'Bienvenido a tus portafolios',
	loading: null,
	error: null,
};

export const homeworkReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.HOMEWORK_LOADING:
			return {
				...state,
				loading: true,
				message: null,
				error: null,
			};

		case types.HOMEWORK_ERROR:
			return {
				...state,
				loading: null,
				message: null,
				error: action.message,
			};

		case types.HOMEWORK_MESSAGE:
			return {
				...state,
				student_homework: [],
				message: action.message,
				loading: null,
				error: null,
			};

		case types.GET_HOMEWORK_SUCCESS:
			return {
				...state,
				homework: action.data,
				loading: null,
				message: null,
				error: null,
			};

		case types.GET_STUDENT_HOMEWORK_SUCCESS:
			return {
				...state,
				student_homework: action.data,
				loading: null,
				error: null,
				message: null,
			};

		case types.UPDATED_HOMEWORK_SUCCESS:
			return {
				...state,
				homework: action.data,
				loading: null,
				message: null,
				error: null,
			};

		default:
			return state;
	}
};

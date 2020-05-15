import * as types from '../actions/actionTypes';
const initialState = {
	homework: [],
	loading: null,
	error: null,
};

export const homeworkReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.GET_HOMEWORK_SUCCESS:
			return {
				...state,
				homework: action.homework,
				loading: null,
			};

		case types.LOADING_HOMEWORK:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};

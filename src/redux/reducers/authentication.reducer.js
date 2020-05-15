import * as types from '../actions/actionTypes';
const initialState = {
	user: {
		_id: '',
	},
	loading: null,
	error: null,
};

export const authenticationReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.AUTHENTICATE_USER:
			return {
				...state,
				user: action.user,
				loading: null,
				error: null,
			};

		case types.REGISTER_USER_SUCCESS:
			return {
				...state,
				user: action.user,
				loading: null,
				error: null,
			};

		case types.REGISTER_USER_ERROR:
			return {
				...state,
				loading: null,
				error: action.error,
			};

		case types.LOADING_AUTH:
			return {
				...state,
				loading: true,
				error: null,
			};

		case types.LOGIN_USER_SUCCESS:
			return {
				...state,
				user: action.user,
				loading: null,
				error: null,
			};

		case types.LOGOUT_USER:
			return {
				...state,
				user: {
					_id: '',
				},
				loading: null,
				error: null,
			};

		default:
			return state;
	}
};

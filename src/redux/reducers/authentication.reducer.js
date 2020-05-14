import * as types from '../actions/actionTypes';
const initialState = {
	user: {
		_id: '',
	},
};

export const authenticationReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.AUTHENTICATE_USER:
			return {
				...state,
				user: action.user,
			};

		case types.REGISTER_USER_SUCCESS:
			return {
				...state,
				user: action.user,
			};

		case types.LOGIN_USER_SUCCESS:
			return {
				...state,
				user: action.user,
			};

		case types.LOGOUT_USER:
			return {
				...state,
				user: {
					_id: '',
				},
			};

		default:
			return state;
	}
};

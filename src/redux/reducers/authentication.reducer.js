import * as types from '../actions/actionTypes';
const initialState = {
	user: {},
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

		default:
			return state;
	}
};

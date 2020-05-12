import * as types from '../actions/actionTypes';
const initialState = {
	groups: [],
};

export const groupsReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.ADD_NEW_GROUP:
			return {
				...state,
				groups: [...state.groups, action.data],
			};

		case types.GET_TEACHER_GROUPS:
			return {
				...state,
				groups: action.data,
			};

		default:
			return state;
	}
};

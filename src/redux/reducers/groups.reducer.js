import * as types from '../actions/actionTypes';
const initialState = {
	groups: [],
	currentGroup: null,
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

		case types.SET_CURRENT_GROUP:
			return { ...state, currentGroup: action.data };

		case types.SET_NEW_ASSIGNMENT:
			return {
				...state,
				currentGroup: {
					...state.currentGroup,
					assignments: [...state.currentGroup.assignments, action.data],
				},
			};

		case types.SET_NEW_TASK:
			return {
				...state,
				currentGroup: {
					...state.currentGroup,
					tasks: [...state.currentGroup.tasks, action.data],
				},
			};

		default:
			return state;
	}
};

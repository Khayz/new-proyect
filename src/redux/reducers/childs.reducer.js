import * as types from '../actions/actionTypes';
const initialState = {
	childList: [],
	actualChild: {},
	loading: false,
	error: null,
};

export const childReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.ADD_CHILD_SUCCESS:
			return {
				...state,
				childList: [...state.childList, action.child],
			};

		case types.GET_CHILDS:
			return {
				...state,
				childList: action.childs,
				loading: false,
				error: null,
			};

		case types.LOADING_CHILDS:
			return {
				...state,
				loading: true,
			};

		case types.SET_ACTUAL_CHILD:
			return {
				...state,
				loading: false,
				error: null,
				actualChild: action.child,
			};

		default:
			return state;
	}
};

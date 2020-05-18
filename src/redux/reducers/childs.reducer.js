import * as types from '../actions/actionTypes';
const initialState = {
	childList: [],
	actualChild: {},
	loading: null,
	error: null,
};

export const childReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.ADD_CHILD_SUCCESS:
			return {
				...state,
				childList: [...state.childList, action.child],
				loading: null,
			};

		case types.GET_CHILDS:
			return {
				...state,
				childList: action.childs,
				loading: null,
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
				loading: null,
				error: null,
				actualChild: action.child,
			};

		case types.DELETE_CHILD:
			return {
				...state,
				loading: null,
				error: null,
				childList: state.childList.filter(
					(child) => child._id !== action.child._id
				),
			};

		default:
			return state;
	}
};

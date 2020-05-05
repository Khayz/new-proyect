import * as types from '../actions/actionTypes';
const initialState = {
	posts: [],
	loading: false,
	error: null,
};

export const postsReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.posts,
				loading: false,
				error: null,
			};

		case types.LOADING_POSTS:
			return {
				...state,
				loading: true,
				error: null,
			};

		default:
			return state;
	}
};

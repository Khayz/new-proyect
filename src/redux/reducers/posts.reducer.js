import * as types from '../actions/actionTypes';
const initialState = {
	posts: [],
	isLoading: false,
	error: false,
};

export const postsReducer = (state = initialState, action) => {
	const { type } = action;
	switch (type) {
		case types.GET_POSTS_SUCCESS:
			return {
				...state,
				posts: action.posts,
				isLoading: false,
				error: false,
			};

		case types.LOADING_POSTS:
			return {
				...state,
				isLoading: true,
				error: false,
			};

		case types.POSTS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.message,
			};

		case types.SET_NEW_POST:
			return {
				...state,
				isLoading: false,
				error: false,
				posts: [...state.posts, action.post],
			};

		default:
			return state;
	}
};

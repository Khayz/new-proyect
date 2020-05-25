import * as types from './actionTypes';
import axios from 'axios';

const url = 'http://localhost:4000';

export const getPosts = (id) => async (dispatch) => {
	dispatch({ type: types.LOADING_POSTS });
	const { data } = await axios.get(`${url}/posts`, { params: { id } });
	return dispatch({ type: types.GET_POSTS_SUCCESS, posts: data });
};

export const setNewTask = (task) => async (dispatch) => {
	try {
		dispatch({ type: types.LOADING_POSTS });
		const { data } = await axios.post(`${url}/add-task`, task);
		return dispatch({ type: types.SET_NEW_POST, post: data });
	} catch ({ message }) {
		return dispatch({ type: types.POSTS_ERROR, message });
	}
};

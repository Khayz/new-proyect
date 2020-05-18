import * as types from './actionTypes';
import axios from 'axios';

let url = 'http://localhost:4000';

export const addChild = (child) => async (dispatch) => {
	dispatch({ type: types.LOADING_CHILDS });
	const { data } = await axios.post(`${url}/students`, child);
	return dispatch({ type: types.ADD_CHILD_SUCCESS, child: data });
};

export const getChilds = () => async (dispatch) => {
	dispatch({ type: types.LOADING_CHILDS });
	const user = JSON.parse(localStorage.getItem('user'));
	try {
		const { data } = await axios.get(`${url}/students`, {
			params: { id: user._id },
		});
		dispatch({ type: types.GET_CHILDS, childs: data });
	} catch (error) {}
};

export const setActualChild = (child) => (dispatch) => {
	dispatch({ type: types.SET_ACTUAL_CHILD, child });
};

export const deleteChild = (child) => async (dispatch) => {
	await axios.delete(`${url}/students`, { params: { child } });
	dispatch({ type: types.DELETE_CHILD, child });
};

import * as types from './actionTypes';
import axios from 'axios';

const url = 'http://localhost:4000';

export const getHomework = (id) => async (dispatch) => {
	dispatch({ type: types.LOADING_HOMEWORK });
	const { data } = await axios.get(`${url}/homework`, { params: { id } });
	return dispatch({ type: types.GET_HOMEWORK_SUCCESS, data });
};

export const updateHomework = (id, homework, userID) => async (dispatch) => {
	const { calification, status } = homework;
	dispatch({ type: types.LOADING_HOMEWORK });
	const { data } = await axios.put(`${url}/homework`, {
		id,
		calification,
		status,
		userID,
	});
	return dispatch({ type: types.UPDATED_HOMEWORK_SUCCESS, data });
};

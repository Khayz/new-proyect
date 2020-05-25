import * as types from './actionTypes';
import axios from 'axios';

const url = 'http://localhost:4000';

export const getHomework = (id) => async (dispatch) => {
	dispatch({ type: types.HOMEWORK_LOADING });
	try {
		const { data } = await axios.get(`${url}/homework`, { params: { id } });
		if (data.message) {
			return dispatch({ type: types.HOMEWORK_ERROR, message: data.message });
		}
		return dispatch({ type: types.GET_HOMEWORK_SUCCESS, data });
	} catch ({ message }) {
		return dispatch({ type: types.HOMEWORK_ERROR, message });
	}
};

export const updateHomework = (id, homework, userID) => async (dispatch) => {
	const { calification, status } = homework;
	dispatch({ type: types.HOMEWORK_LOADING });
	try {
		const { data } = await axios.put(`${url}/homework`, {
			id,
			calification,
			status,
			userID,
		});
		return dispatch({ type: types.UPDATED_HOMEWORK_SUCCESS, data });
	} catch ({ message }) {
		return dispatch({ type: types.HOMEWORK_ERROR, message });
	}
};

export const getStudentHomework = (studentID) => async (dispatch) => {
	dispatch({ type: types.HOMEWORK_LOADING });
	try {
		const { data } = await axios.get(`${url}/get-student-homework`, {
			params: { studentID },
		});

		if (data.message) {
			return dispatch({ type: types.HOMEWORK_MESSAGE, message: data.message });
		}

		return dispatch({ type: types.GET_STUDENT_HOMEWORK_SUCCESS, data });
	} catch ({ message }) {
		return dispatch({ type: types.HOMEWORK_ERROR, message });
	}
};

export const sendTask = (task) => async (dispatch) => {
	try {
		dispatch({ type: types.HOMEWORK_LOADING });
		const { data } = await axios.post(`${url}/teacher`, task);
		return dispatch({ type: types.SEND_TASK_SUCCESS, data });
	} catch ({ message }) {
		return dispatch({ type: types.HOMEWORK_ERROR, message });
	}
};

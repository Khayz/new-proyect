import * as types from './actionTypes';
import axios from 'axios';

let url = 'http://localhost:4000';

export const addGroup = (group) => async (dispatch) => {
	const teacher = JSON.parse(localStorage.getItem('user'));
	const { data } = await axios.post(`${url}/groups`, {
		...group,
		teacherID: teacher._id,
	});
	dispatch({ type: types.ADD_NEW_GROUP, data });
};

export const getGroups = () => async (dispatch) => {
	const teacher = JSON.parse(localStorage.getItem('user'));
	const { data } = await axios.get(`${url}/groups`, {
		params: { teacherID: teacher._id },
	});
	dispatch({ type: types.GET_TEACHER_GROUPS, data });
};

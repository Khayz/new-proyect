import * as types from './actionTypes';
import axios from 'axios';
import { v1 } from 'uuid';
let url = 'http://localhost:4000';

export const addGroup = (group) => async (dispatch) => {
	const teacher = JSON.parse(localStorage.getItem('user'));

	const { data } = await axios.post(`${url}/groups`, {
		...group,
		inviteID: v1(),
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

export const setCurrentGroup = (group) => async (dispatch) => {
	dispatch({ type: types.SET_CURRENT_GROUP, data: group });
};

export const setNewAssignment = (assignment, groupId) => async (dispatch) => {
	await axios.post(`${url}/add-assignment`, {
		_id: groupId,
		assignment,
	});
	dispatch({ type: types.SET_NEW_ASSIGNMENT, data: assignment });
};

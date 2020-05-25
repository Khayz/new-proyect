import * as types from './actionTypes';
import axios from 'axios';
import { v4 } from 'uuid';
let url = 'http://localhost:4000';
const v4options = {
	random: [
		0x10,
		0x91,
		0x56,
		0xbe,
		0xc4,
		0xfb,
		0xc1,
		0xea,
		0x71,
		0xb4,
		0xef,
		0xe1,
		0x67,
		0x1c,
		0x58,
		0x36,
	],
};

export const addGroup = (group) => async (dispatch) => {
	const teacher = JSON.parse(localStorage.getItem('user'));
	console.log(teacher);
	const { data } = await axios.post(`${url}/groups`, {
		...group,
		inviteID: v4(v4options),
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

export const setNewTask = (task) => async (dispatch) => {
	await axios.post(`${url}/add-task`, task);
	dispatch({ type: types.SET_NEW_TASK, data: task });
};

import * as types from './actionTypes';
import axios from 'axios';

let url = 'http://localhost:4000';

export const sendTask = (task) => async (dispatch) => {
	const { data } = await axios.post(`${url}/teacher`, task);
	return dispatch({ type: types.SEND_TASK_SUCCESS, message: data });
};

import * as types from "./actionTypes";
import axios from "axios";

const url = "http://localhost:4000";
export const getPosts = (id) => async (dispatch) => {
  dispatch({ type: types.LOADING_POSTS });
  const { data } = await axios.get(`${url}/posts`, { params: { id } });
  return dispatch({ type: types.GET_POSTS_SUCCESS, posts: data });
};

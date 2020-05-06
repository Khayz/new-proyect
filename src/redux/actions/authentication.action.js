import * as types from "./actionTypes";
import axios from "axios";

let url = "http://localhost:4000";

export const authUser = () => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user !== null) {
    return dispatch({ type: types.AUTHENTICATE_USER, user });
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${url}/register`, user);
    localStorage.setItem("user", JSON.stringify(data));
    return dispatch({ type: types.REGISTER_USER_SUCCESS, user: data });
  } catch (error) {}
};

export const loginUser = (user) => async (dispatch) => {
  try {
    console.log(user);
    const { data } = await axios.post(`${url}/login`, user);
    localStorage.setItem("user", JSON.stringify(data));
    return dispatch({ type: types.LOGIN_USER_SUCCESS, user: data });
  } catch (error) {}
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  return dispatch({ type: types.LOGOUT_USER });
};

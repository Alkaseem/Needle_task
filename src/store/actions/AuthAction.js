import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, ACTIVE_USER } from "../actionTypes";
import { setAlert } from "./AlertAction";
import { configToken } from "../../utils/api";
import api from "../../utils/api";

export const activeUser = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ACTIVE_USER,
      payload: data,
    });
  } catch (error) {
    if (error) {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
};

export function setAuthorizationToken(token) {
  configToken(token);
}

export const login = (email, password) => async (dispatch) => {
  try {
    const body = { email, password };
    const res = await api.post("/auth", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    const user = res.data;
    // console.log("TOKEN", user.data.token);
    // console.log("TOKEN2", res);
    setAuthorizationToken(user.data.token);
    dispatch(activeUser(user));
  } catch (err) {
    if (err.response !== undefined) {
      const error = err.response.data;
      dispatch(setAlert(error.message, "danger"));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => ({ type: LOGOUT });

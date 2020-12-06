import { LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL, ACTIVE_USER } from "../actionTypes";
import { setAlert } from "./AlertAction";
import api from "../../utils/api";

export const activeUser = () => async (dispatch) => {
  try {
    const res = await api.get("/applicant");
    dispatch({
      type: ACTIVE_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data);
    if (error) {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const body = { email, password };
    const res = await api.post("/auth", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(activeUser());
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

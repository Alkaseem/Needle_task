import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ACTIVE_USER } from "../actionTypes";

const initialState = {
  token: localStorage.getItem("token"),
  JWTToken: null,
  user: null,
  isAuthenticated: false,
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIVE_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.data.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        JWTToken: payload.data.token,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, token: null, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

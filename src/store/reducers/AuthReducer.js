import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, ACTIVE_USER } from "../actionTypes";

const initialState = {
  token: localStorage.getItem("jwtToken"),
  jwtToken: null,
  user: {},
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIVE_USER:
      console.log("ACTIVE:", payload);
      return {
        ...state,
        // isAuthenticated: !!Object.keys(payload.data).length,
        isAuthenticated: true,
        user: payload.data,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("jwtToken", payload.data.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        JWTToken: payload.data.token,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("jwtToken");
      return { ...state, token: null, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

export default authReducer;

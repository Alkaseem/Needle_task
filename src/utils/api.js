import axios from "axios";
import store from "../store";
import { LOGOUT } from "../store/actionTypes";

const baseEndpoint = "https://nirsal.remsys.com.ng/api/users";

const api = axios.create({
  baseURL: baseEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((req) => {
  // `req` is the Axios request config, so you can modify
  // the `headers`.
  if (localStorage.jwtToken) {
    req.headers.authorization = `Bearer ${localStorage.jwtToken}`;
  }
  return req;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;

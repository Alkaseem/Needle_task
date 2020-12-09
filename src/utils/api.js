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

// export const configToken = (token) => {
//   if (token) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete api.defaults.headers.common["Authorization"];
//   }
// };

api.interceptors.request.use((req) => {
  // `req` is the Axios request config, so you can modify
  // the `headers`.
  // console.log(`${req.method} ${req.url}`);
  // console.log(req);
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

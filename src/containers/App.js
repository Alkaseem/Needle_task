import React from "react";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import store from "../store";
import { configToken } from "../utils/api";
import { activeUser } from "../store/actions/AuthAction";
import Main from "./Main";

if (localStorage.jwtToken) {
  configToken(localStorage.jwtToken);
  console.log(" In APP", jwt_decode(localStorage.jwtToken));
  try {
    store.dispatch(activeUser(jwt_decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(activeUser({}));
  }
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;

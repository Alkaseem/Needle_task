import React, { useEffect } from "react";
import { Provider } from "react-redux";

import store from "../store";
import { activeUser } from "../store/actions/AuthAction";
import Main from "./Main";

import { LOGOUT } from "../store/actionTypes";

function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.jwtToken) {
      store.dispatch(activeUser());
    }
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.jwtToken) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;

import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import { Login, Dashboard, Profile } from "../components/Index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/completeReg" component={Profile} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;

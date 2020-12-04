import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Login, Dashboard, Profile } from "../components/Index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/completeReg" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;

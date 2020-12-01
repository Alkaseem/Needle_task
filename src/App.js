import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

function App() {
  const history = createBrowserHistory();

  return (
    <>
      <Router history={history}>
        <Profile />
        <Switch>
          <Route path="/profile" component={<Login />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

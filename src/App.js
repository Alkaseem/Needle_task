import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import SideBar from "./components/sidebar/SideBar";

function App() {
  const history = createBrowserHistory();

  return (
    <>
      {/* <Router history={history}> */}
      <SideBar />
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/setting" component={Login} />
      </Switch>
      {/* </Router> */}
    </>
  );
}

export default App;

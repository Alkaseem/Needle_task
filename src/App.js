import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const history = createBrowserHistory();
  console.log(history);
  return (
    <>
      {/* <Router history={history}> */}
      {/* <SideBar /> */}
      {/* <Login /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
      </Switch>
      {/* </Router> */}
    </>
  );
}

export default App;

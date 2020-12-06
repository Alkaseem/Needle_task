import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Login, Dashboard, Profile } from "../components/Index";

function Main({ isAuth }) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/dashboard"
          render={() => (isAuth ? <Dashboard /> : <Redirect to="/" />)}
        />
        <Route
          exact
          path="/completeReg"
          render={() => (isAuth ? <Profile /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps)(Main);

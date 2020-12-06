import React from "react";
import { connect } from "react-redux";

import ProgressBar from "../dashboard/ProgressBar";
import Body from "../dashboard/Body";
import SideBar from "../sidebar/SideBar";

function Dashboard({ isAuth, user }) {
  return (
    <div className="content">
      <SideBar />
      <ProgressBar user={user} />
      <Body user={user} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(Dashboard);

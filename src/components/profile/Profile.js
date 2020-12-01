import React from "react";
import SideBar from "../sidebar/SideBar";
import Login from "../login/Login";

import "./Profile.css";

function Profile() {
  return (
    <div>
      <SideBar />
      <div className="content">
        Dashboard Content <Login />
      </div>
    </div>
  );
}

export default Profile;

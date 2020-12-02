import React from "react";
import Navbar from "./Navbar";
import SideBar from "../sidebar/SideBar";

import "./Profile.css";

function Profile() {
  return (
    <div className="content">
      <SideBar />
      <Navbar />
      <h2>Personal information</h2>
    </div>
  );
}

export default Profile;

import React from "react";
import Navbar from "./Navbar";
import SideBar from "../sidebar/SideBar";
import Form from "./Form";

import "./Profile.css";

function Profile() {
  return (
    <div className="content">
      <SideBar />
      <Navbar />
      <Form />
    </div>
  );
}

export default Profile;

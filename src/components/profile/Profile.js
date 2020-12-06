import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import SideBar from "../sidebar/SideBar";
import Form from "./Form";

import "./Profile.css";

function Profile({ isAuth, user }) {
  // console.log(user);
  // console.log(isAuth);
  return (
    <div className="content">
      <SideBar />
      <Navbar />
      <Form user={user} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuthenticated,
  user: state.authReducer.user,
});

export default connect(mapStateToProps)(Profile);

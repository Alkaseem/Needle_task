import React from "react";
import ProgressBar from "../dashboard/ProgressBar";
import Body from "../dashboard/Body";
import SideBar from "../sidebar/SideBar";

import { Route, Switch } from "react-router-dom";

function Dashboard() {
  return (
    <div className="content">
      <SideBar />
      <ProgressBar />
      <Body />
    </div>
  );
}

export default Dashboard;

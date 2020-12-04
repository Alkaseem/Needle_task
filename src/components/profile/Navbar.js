import React from "react";
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

import navData from "./NavData";

function Navbar() {
  return (
    <div className="Header">
      <header className="Header-card">
        <Link to="/completeReg" className="Back">
          <i class="fas fa-long-arrow-alt-left"></i>Back
        </Link>
        <ul>
          {navData.map((item, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  activeClassName="Active"
                  className={item.cName}
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button type="button" class="btn btn-success">
          Complete
        </button>
      </header>
      {/* <div className="profile-icon">
        <i class="far fa-bell"></i>
        <i class="far fa-user-circle"></i>
      </div> */}
    </div>
  );
}

export default Navbar;

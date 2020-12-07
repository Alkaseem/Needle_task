import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import sideData from "./SideData";
import logo from "./logo.png";
import { logout } from "../../store/actions/AuthAction";

import "./SideBar.css";

function Side({ logout }) {
  return (
    <>
      <div className="Nabvar">
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <img src={logo} alt="logo" />
            {sideData.map((item, idx) => {
              return (
                <li key={idx} className={item.cName}>
                  <Link to={item.path} className={item.cNameb}>
                    <i className={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text logout">
              <a href="/" onClick={logout} className="log">
                <i className="fas fa-sign-out-alt" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  isAuth: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Side);

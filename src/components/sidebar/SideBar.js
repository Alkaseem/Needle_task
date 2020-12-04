import React from "react";
import { Link } from "react-router-dom";

import sideData from "./SideData";
import "./SideBar.css";

function Side() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="Nabvar">
        <nav className="nav-menu active">
          <ul className="nav-menu-items">
            <img src="/logo.png" alt="logo" />
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
              <Link to="/" className="log">
                <i className="fas fa-sign-out-alt" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Side;

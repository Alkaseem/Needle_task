import React from "react";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <div className="Progressbar">
      <ul>
        <li>
          <i className="far fa-circle"></i>
        </li>
        <li>
          <i className="far fa-circle"></i>
        </li>
        <li>
          <i className="far fa-circle"></i>
        </li>
        <li>
          <i className="far fa-circle"></i>
        </li>
        <li>
          <i className="far fa-circle"></i>
        </li>
        <li>
          <i className="fas fa-chevron-circle-right"></i>
        </li>
        <div className="profile-icons">
          <i class="far fa-bell"></i>
          <i class="far fa-user-circle"></i>
        </div>
      </ul>
      {/* <div className="body Progressbar">
        <div>
          Hi, Adeniran Opeyemi. <i class="fas fa-map-marker-alt"></i>
          <span className="text-muted">Lagos, Nigeria</span>
        </div>
      </div> */}
    </div>
  );
}

export default ProgressBar;

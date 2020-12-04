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
    </div>
  );
}

export default ProgressBar;

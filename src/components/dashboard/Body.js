import React from "react";
import { Link } from "react-router-dom";
import "./Body.css";

function Body({ user }) {
  return (
    <div className="dashboard-body">
      <div className="dashboard-card">
        Hi, {user.firstName} {user.lastName}. {/* Hi, Alkaseem Khalifa */}
        <i className="fas fa-map-marker-alt"></i>
        <span className="text-muted">Lagos, Nigeria</span>
        <div className="BVN-card">
          <div className="BVN-title">
            <div className="title-text">BVN Number</div>
            <i className="far fa-eye-slash"></i>
          </div>
          {/* <div className="BVN-text">28384719424</div> */}
          <div className="BVN-text">{user.bvn} </div>
          <div className="BVN-footer">
            <div>
              <i className="fas fa-fingerprint"></i> <span>Verified</span>
            </div>
            <button type="button" className="btn btn-outline-success">
              EDIT
            </button>
          </div>
        </div>
        <button type="button" className="btn btn-success btn-lg btn-block mt-3">
          Upload Invoice
        </button>
      </div>
      <div className="dashboard-table">
        <div className="table-header">
          <div>Recent Activities</div>
          <Link to="/dashboard" className="text-success">
            View all
          </Link>
        </div>
        <div className="table-container">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Status</th>
                <th>Last Update</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>16th July, 2020</td>
                <td>CRECO Approved</td>
                <td>
                  <i className="far fa-circle"></i>ACCEPTED
                </td>
                <td>2 hrs ago</td>
                <td>
                  <i className="fas fa-angle-right"></i>
                </td>
              </tr>
              <tr>
                <td>9th July, 2020</td>
                <td>Profile got accepted</td>
                <td>
                  <i className="far fa-circle"></i>ACCEPTED
                </td>
                <td>7 hrs ago</td>
                <td>
                  <i className="fas fa-angle-right"></i>
                </td>
              </tr>
              <tr>
                <td>29th June, 2020</td>
                <td>BVN Verified</td>
                <td>
                  <i className="far fa-circle"></i>VERIFIED
                </td>
                <td>13 days ago</td>
                <td>
                  <i className="fas fa-angle-right"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Body;

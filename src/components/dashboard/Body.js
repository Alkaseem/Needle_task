import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="dashboard-body">
      <div className="dashboard-card">
        Hi, Adeniran Opeyemi. <i class="fas fa-map-marker-alt"></i>
        <span className="text-muted">Lagos, Nigeria</span>
        <div className="BVN-card">
          <div className="BVN-title">
            <div className="title-text">BVN Number</div>
            <i class="far fa-eye-slash"></i>
          </div>
          <div className="BVN-text">28384719424</div>
          <div className="BVN-footer">
            <div>
              <i class="fas fa-fingerprint"></i> <span>Verified</span>
            </div>
            <button type="button" class="btn btn-outline-success">
              EDIT
            </button>
          </div>
        </div>
        <button type="button" class="btn btn-success btn-lg btn-block mt-3">
          Upload Invoice
        </button>
      </div>
      <div className="dashboard-table">
        <div className="table-header">
          <div>Recent Activities</div>
          <a className="text-success" href="">
            View all
          </a>
        </div>
        <div className="table-container">
          <table class="table table-borderless">
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
                  <i class="fas fa-angle-right"></i>
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
                  <i class="fas fa-angle-right"></i>
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
                  <i class="fas fa-angle-right"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="container">
  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive" data-pattern="priority-columns">
        <table summary="This table shows how to create responsive tables using RWD-Table-Patterns' functionality" class="table table-bordered table-hover">
          <caption class="text-center">An example of a responsive table based on RWD-Table-Patterns' <a href="http://gergeo.se/RWD-Table-Patterns/" target="_blank"> solution</a>:</caption>
          <thead>
            <tr>
              <th>Country</th>
              <th data-priority="1">Languages</th>
              <th data-priority="2">Population</th>
              <th data-priority="3">Median Age</th>
              <th data-priority="4">Area (Km²)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Argentina</td>
              <td>Spanish (official), English, Italian, German, French</td>
              <td>41,803,125</td>
              <td>31.3</td>
              <td>2,780,387</td>
            </tr>
            <tr>
              <td>Australia</td>
              <td>English 79%, native and other languages</td>
              <td>23,630,169</td>
              <td>37.3</td>
              <td>7,739,983</td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>Greek 99% (official), English, French</td>
              <td>11,128,404</td>
              <td>43.2</td>
              <td>131,956</td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>Luxermbourgish (national) French, German (both administrative)</td>
              <td>536,761</td>
              <td>39.1</td>
              <td>2,586</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td>Russian, others</td>
              <td>142,467,651</td>
              <td>38.4</td>
              <td>17,076,310</td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>Swedish, small Sami- and Finnish-speaking minorities</td>
              <td>9,631,261</td>
              <td>41.1</td>
              <td>449,954</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div> */
}

export default Body;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../store/actions/AuthAction";
import { setAlert } from "../../store/actions/AlertAction";

import "./Login.css";

function Login({ login, isAuthenticated, alert }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  let alertmessage = null;

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    if (alert.length !== 0) {
      alertmessage = (
        <div className="alert alert-danger" role="alert">
          {alert[0].msg}
        </div>
      );
    }
  }
  return (
    <div className="login-card">
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-7 col-md-6 col-lg-5">
            <div className="card shadow border border-success rounded">
              <div className="card-body login-boder">
                <p className="lead text-center display-5 text-success">
                  Login to your account
                </p>
                {alertmessage}
                <hr />
                <form
                  className="needs-validation mt-3"
                  onSubmit={onSubmit}
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="">Email*</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputUsername"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={onChange}
                    />
                    <div className="invalid-feedback">
                      Please enter your email.
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Password*</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={onChange}
                    />
                    <div className="invalid-feedback">
                      Please enter your password.
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success btn-block">
                    Sign in
                  </button>
                </form>
                <div className="mt-3 login">
                  <a className="text-success" href="/">
                    Forget Password?
                  </a>
                  <div>
                    Not signed up yet?
                    <a className="text-success ml-1" href="/register">
                      Create Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col"> </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  alert: state.alertReducer,
});

export default connect(mapStateToProps, { login, setAlert })(Login);

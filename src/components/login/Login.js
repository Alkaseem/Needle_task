import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="content">
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-7 col-md-6 col-lg-5">
            <div className="card shadow border-0">
              <div className="card-body">
                <p className="lead text-center display-5 text-success">
                  Login to your account
                </p>
                <hr />
                <form className="needs-validation mt-3" noValidate>
                  <div className="form-group">
                    <label htmlFor="">Email*</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputUsername"
                      placeholder="Email"
                      required
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

export default Login;

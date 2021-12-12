import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="form-con">
        <form action="" className="form">
          <p className="login">Login</p>
          <br />
          <div className="input-grp1">
            <label htmlFor="emailInput">
              Email address
              <br />
              <input type="email" name="" id="emailInput" placeholder="Enter your email" />
            </label>
            <br />
          </div>

          <div className="input-grp2">
            <div className="forgot-flex">
              <label htmlFor="passwordInput">Password</label>
              <p>Forgot your password?</p>
            </div>

            <input type="password" name="" id="passwordInput" placeholder="Enter your password" />
            <div className="incor-line">
              <p> Incorrect email address or password.</p>
            </div>

            <br />
          </div>
          <button>Login</button>

          <div className="last-ln">
            <span>New to MyJobs? </span>
            <Link to="/signup">
              <span className="link-span">Create an account</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

// if password incorrect then, border-color #FF333380 border-radius: 5px

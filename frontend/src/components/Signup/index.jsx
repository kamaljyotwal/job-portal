import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <div className="form-con-su">
        <form action="" className="form2">
          <p className="signup-heading">Signup</p>
          <br />

          <div className="sec-1">
            <span className="iam-span">I'm a*</span>
            <div className="type-con">
              <button className="iam-type recruiter">
                <span>
                  <img src="/assets/icons/rec-icon.png" alt="" /> Recruiter
                </span>
              </button>
              <button className="iam-type candidate">
                <span>
                  <img src="/assets/icons/candi-icon.png" alt="" />
                  Candidate
                </span>
              </button>
            </div>
          </div>
          {/* <div className="input-grp1">
            <label htmlFor="emailInput">
              Email address
              <br />
              <input type="text" name="" id="emailInput" placeholder="Enter your email" />
            </label>
            <br />
          </div> */}

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
          <button type="submit">Signup</button>

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

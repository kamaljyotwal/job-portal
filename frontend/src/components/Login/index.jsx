import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  let navto = useNavigate();
  const dispatch = useDispatch();

  // local state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // global state
  const { token } = useSelector((state) => state.auth);
  // console.log(token);

  useEffect(() => {
    if (token !== null) {
      navto("/dash");
    }
  }, [token, navto]);

  // handlers
  async function loginFunc(e) {
    e.preventDefault();
    let url = "https://jobs-api.squareboat.info/api/v1/auth/login";
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      setLoading(true);
      const { data } = await axios.post(url, { email, password }, config);
      let pay = data.data;

      setTimeout(() => {
        setError(false);
        setLoading(false);
        localStorage.setItem("auth", JSON.stringify(data.data));
        dispatch({ type: "auth-success", payload: pay });
        navto("/dash");
      }, 800);
    } catch (error) {
      console.log(error.response.data);
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 1000);
    }
  }

  return (
    <>
      <div className="form-con">
        <form className="form">
          <p className="login">Login</p>
          <br />
          <div className="input-grp1">
            <label htmlFor="emailInput">
              Email address
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="emailInput"
                placeholder="Enter your email"
                style={{ border: error ? "1px solid #FF333380" : "1px solid #43afff" }}
              />
            </label>
            <br />
          </div>

          <div className="input-grp2">
            <div className="forgot-flex">
              <label htmlFor="passwordInput">Password</label>
              <p>Forgot your password?</p>
            </div>

            <input
              type="password"
              id="passwordInput"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: error ? "1px solid #FF333380" : "1px solid #43afff" }}
            />
            <div className="incor-line">
              <p style={{ visibility: error ? "visible" : "hidden" }}>
                Incorrect email address or password.
              </p>
            </div>

            <br />
          </div>
          <button
            type="submit"
            onClick={(e) => loginFunc(e)}
            disabled={loading === true ? true : false}
          >
            {loading ? "Please wait..." : "Login"}
          </button>

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

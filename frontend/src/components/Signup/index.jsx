import React, { useState, useEffect } from "react";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Signup() {
  let navto = useNavigate();
  let dispatch = useDispatch();

  // global state
  const { token } = useSelector((state) => state.auth);

  // local state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  console.log(error);

  let errorType = error && error.map((i) => Object.keys(i)).flat();

  // user-filled form data
  const [user, setUser] = useState({
    userRole: null,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    skills: "",
  });

  // Effect
  useEffect(() => {
    if (token !== null) {
      navto("/dash");
    }
  }, [navto, token]);

  // Handlers
  function onChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    let url = "https://jobs-api.squareboat.info/api/v1/auth/register";
    const config = { headers: { "Content-Type": "application/json" } };

    try {
      setError(null);
      setLoading(true);
      const { data } = await axios.post(url, user, config);
      console.log(data);
      let pay = data.data;
      setLoading(false);
      if (data.success === true) {
        localStorage.setItem("auth", JSON.stringify(data.data));
        dispatch({ type: "auth-success", payload: pay });

        navto("/dash");
      }
    } catch (error) {
      console.log(error.response.data.errors);
      setError(error.response.data.errors);
      setLoading(false);
    }
  }

  return (
    <>
      <div className="form-con-su">
        <form className="form2">
          <p className="signup-heading">Signup</p>
          <br />

          <div className="sec-1">
            <span className="iam-span">I'm a*</span>
            <div className="type-con">
              <button
                className="iam-type recruiter"
                onClick={(e) => {
                  e.preventDefault();
                  setUser({ ...user, userRole: 0 });
                }}
                style={{ outline: user.userRole === 0 ? "2px solid #3d3f60" : "" }}
              >
                <span>
                  <img src="/assets/icons/rec-icon.png" alt="" /> Recruiter
                </span>
              </button>
              <button
                className="iam-type candidate"
                onClick={(e) => {
                  e.preventDefault();
                  setUser({ ...user, userRole: 1 });
                }}
                style={{ outline: user.userRole === 1 ? "2px solid #3d3f60" : "" }}
              >
                <span>
                  <img src="/assets/icons/candi-icon.png" alt="" />
                  Candidate
                </span>
              </button>
            </div>
            <span
              className="role-error-span"
              style={{
                visibility: errorType && errorType.includes("userRole") ? "visible" : "hidden",
              }}
            >
              Please select one role
            </span>
          </div>

          <div className="sec sec-2">
            <label htmlFor="name">
              Full Name*
              <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={user.name}
                onChange={onChange}
                style={{
                  border:
                    errorType && errorType.includes("name")
                      ? "1px solid #FF333380"
                      : "1px solid #43afff",
                }}
              />
            </label>
            <span
              className="incor-line"
              style={{ visibility: errorType && errorType.includes("name") ? "visible" : "hidden" }}
            >
              This field is mandatory
            </span>
            <br />
          </div>

          <div className="sec sec-3">
            <label htmlFor="emailSign">
              Email address*
              <br />
              <input
                onChange={onChange}
                type="text"
                name="email"
                id="emailSign"
                value={user.email}
                placeholder="Enter your email"
                style={{
                  border:
                    errorType && errorType.includes("email")
                      ? "1px solid #FF333380"
                      : "1px solid #43afff",
                }}
              />
            </label>
            <span
              className="incor-line"
              style={{
                visibility: errorType && errorType.includes("email") ? "visible" : "hidden",
              }}
            >
              Invalid email address
            </span>
            <br />
          </div>

          <div className="sec sec-4">
            <label htmlFor="passSign">
              Password
              <br />
              <input
                value={user.password}
                onChange={onChange}
                className="passInp1"
                type="password"
                name="password"
                id="passSign"
                placeholder="Enter your password"
                style={{
                  border:
                    (errorType && errorType.includes("password")) ||
                    (errorType && errorType.includes("confirmPassword"))
                      ? "1px solid #FF333380"
                      : "1px solid #43afff",
                }}
              />
            </label>

            <label htmlFor="confirmpassSign">
              Confirm Password
              <br />
              <input
                value={user.confirmPassword}
                onChange={onChange}
                className="passInp2"
                type="password"
                name="confirmPassword"
                id="confirmpassSign"
                placeholder="Enter your password"
                style={{
                  border:
                    (errorType && errorType.includes("password")) ||
                    (errorType && errorType.includes("confirmPassword"))
                      ? "1px solid #FF333380"
                      : "1px solid #43afff",
                }}
              />
            </label>
          </div>
          <span
            className="incor-line"
            style={{
              visibility:
                (errorType && errorType.includes("password")) ||
                (errorType && errorType.includes("confirmPassword"))
                  ? "visible"
                  : "hidden",
            }}
          >
            Password should be longer than 6 character and match
          </span>

          <div className="sec sec-5">
            <label htmlFor="skills">
              Skills
              <br />
              <input
                // onChange={(e) => setSkills([e.target.value])}
                onChange={onChange}
                value={user.skills}
                type="text"
                name="skills"
                id="skills"
                placeholder="Enter comma separated skills"
                style={{
                  border:
                    errorType && errorType.includes("skills")
                      ? "1px solid #FF333380"
                      : "1px solid #43afff",
                }}
              />
            </label>
            <br />
            <span
              className="incor-line"
              style={{
                visibility: errorType && errorType.includes("skills") ? "visible" : "hidden",
              }}
            >
              Please add atleast one skill
            </span>
          </div>

          <button
            type="submit"
            className="signUp"
            onClick={submitHandler}
            disabled={loading === true ? true : false}
          >
            {loading === true ? "Please Wait..." : "Signup"}
          </button>

          <div className="last-ln">
            <span>Have an Account? </span>
            <Link to="/login">
              <span className="link-span">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BgHeader } from "./navbarStyle";

export default function Navbar({ children, bg }) {
  return (
    <>
      <BgHeader bg={bg}></BgHeader>
      <div className="nav-container">
        <div className="inner-container">
          <div className="logo">
            <Link to="/">
              My<span>Jobs</span>
            </Link>
          </div>

          {/* login button */}
          {children && (
            <Link to="/login">
              <button className="navBtn">{children}</button>
            </Link>
          )}
        </div>
        <hr className="hr" />
      </div>
      {/* </BgHeader> */}
    </>
  );
}

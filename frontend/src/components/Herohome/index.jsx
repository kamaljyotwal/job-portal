import React from "react";
import "./index.css";

export default function Herohome() {
  return (
    <>
      <div className="hero-container">
        <div className="left">
          <p>
            Welcome to <br /> My<span>Jobs</span>
          </p>
          <button>Get Started</button>
        </div>

        <div className="right">
          <img src="/assets/homebanner.png" alt="banner" />
        </div>
      </div>
    </>
  );
}

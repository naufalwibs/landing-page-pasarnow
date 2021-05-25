import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="wrapper-header">
        <h1>A modern publishing platform</h1>
        <h3>Grow your audience and build your online brand</h3>
        <div className="btn-container">
          <button className="btn-1">Start for Free</button>
          <button className="btn-2">Learn More</button>
        </div>
      </div>
    </>
  );
}

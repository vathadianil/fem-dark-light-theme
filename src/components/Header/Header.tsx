import React from "react";
import Toggle from "./Toggle";

function Header() {
  return (
    <React.Fragment>
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <span className="header__subtitle">Total Followers: 23,004</span>
      </div>
      <div className="header__divider"></div>
      <Toggle />
    </React.Fragment>
  );
}

export default Header;

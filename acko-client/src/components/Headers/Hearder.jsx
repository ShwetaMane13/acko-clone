import React from "react";
import "./header.css";
import logo from "./Logo.svg";

function Header() {
  return (
    <div className="headerbody">
      <div className="headerlogodiv">
        <a href="/">
          <img className="circlelogo" src={logo} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import logo from "./assets/Union.png";

import "./App.css";

function Nav() {
  return (
    <nav>
      <h3>
        <img className="" src={logo} alt="" />
        <span>Xtreme</span>Cars
      </h3>

      <ul className="nav-links">
        <li>New cars</li>
        <li>Used cars</li>
        <li>My profile</li>
      </ul>
    </nav>
  );
}

export default Nav;

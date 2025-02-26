import React from "react";
import { NavLink } from "react-router";

const navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <p>DREAMRIDE</p>
        </div>
        <ul className="navbar-menu">
          <div className="navbar-middle-content">
            <li>
              <a href="#home" className="navbar-link active">
                Home
              </a>
            </li>
            <li>
              <a href="#fleet" className="navbar-link active">
                Cars
              </a>
            </li>
            {/* <li><a href="#Sign In" className="navbar-link active">Sign In</a></li> */}
            <li>
              <a href="#features" className="navbar-link active">
                Features
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link active">
                Contact
              </a>
            </li>
          </div>
          <div className="profile">
            <button className="signin-button">
              <a href="#fleet">Rent a Car</a>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="active" className="nav-links">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/events" activeClassName="active" className="nav-links">
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" activeClassName="active" className="nav-links">
              Contact us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/login" activeClassName="active" className="nav-links">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/signup" activeClassName="active" className="nav-links">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
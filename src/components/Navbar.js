import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from "./taj-mahal.png";

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <img src={logo} alt="" className="navbar-logo"/>
        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-item"><NavLink className="Nav_link" to="/">Home</NavLink></div>
          <div className="navbar-item"><NavLink className="Nav_link" to="/menu">Menu</NavLink></div>
          <div className="navbar-item"><NavLink className="Nav_link" to="/about">About</NavLink></div>
          <div className="navbar-item"><NavLink className="Nav_link" to="/reservations">Reservations</NavLink></div>
          <div className="navbar-item"><NavLink className="Nav_link" to="/contact">Contact</NavLink></div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar;
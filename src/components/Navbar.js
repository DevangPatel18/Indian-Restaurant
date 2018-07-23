import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from "./Taj_Mahal_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top is-light">
      <div className="navbar-brand">
        <img src={logo} alt="" style={{width: '50px', height:'50px'}}/>
        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-menu is-light" id="navMenu">
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
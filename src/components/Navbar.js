import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import logo from "./taj-mahal.png";

const Navbar = () => {
  return (
    <nav className="navbar is-fixed-top">
      <div className="navbar-brand">
        <NavLink className="Nav_link" to="/" exact={true}><img src={logo} alt="" aria-label="homepage" className="navbar-logo"/></NavLink>
        
        <div className="navbar-storeInfo has-text-light">
          <div className="navbar-storeInfo-items">
            <i className="fas fa-clock"/> M-F: 10am - 11pm | Sat: 11am - 9pm | Sun: 12pm - 8pm
          </div>
          <div className="navbar-storeInfo-items">
            <i className="fas fa-map-marked-alt"/> 542 street, Toronto, ON
          </div>
          <div className="navbar-storeInfo-items">
            <i className="fas fa-phone"/> 999-999-999
          </div>
          <div className="navbar-storeInfo-items">
            <i className="far fa-envelope"/> support@indianrest.com
          </div>
        </div>

        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-menu is-active" id="navMenu" style={{overflow:"hidden"}}>
          <div className="navbar-item"><NavLink className="Nav_link" to="/" exact={true} aria-label="homepage">Home</NavLink></div>
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
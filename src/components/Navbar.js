import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink className="Nav_link" to="/">Home</NavLink>
      <NavLink className="Nav_link" to="/menu">Menu</NavLink>
      <NavLink className="Nav_link" to="/about">About</NavLink>
      <NavLink className="Nav_link" to="/reservations">Reservations</NavLink>
      <NavLink className="Nav_link" to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navbar;
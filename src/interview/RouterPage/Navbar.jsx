import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbars() {
  return (
    <>
      <nav className="navbar">
        <Link className="navbar-links" to="/">
          Home
        </Link>
        <Link className="navbar-links" to="/about">
          About Us
        </Link>
        <Link className="navbar-links" to="/contact-us">
          Contact Us
        </Link>
      </nav>

      {/* naavbar navlinks */}
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "red" : "black")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "red" : "black")}
          end
        >
          About Us
        </NavLink>
      </nav>
    </>
  );
}

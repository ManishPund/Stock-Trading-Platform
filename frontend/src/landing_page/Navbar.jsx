import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky-top border-bottom bg-white">
      <nav className="navbar navbar-expand-lg">
        <div className="container py-2 ">
          {/* Logo */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              className="navbar-brand-logo"
              loading="lazy"
            />
          </NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto mb-2 mb-lg-0 text-muted">
              <li className="nav-item mx-2 px-2">
                <NavLink className="nav-link " to="/signup" aria-current="page">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item mx-2 px-2 ">
                <NavLink className="nav-link" to="/about" aria-current="page">
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-2 px-2">
                <NavLink className="nav-link" to="/product" aria-current="page">
                  Product
                </NavLink>
              </li>
              <li className="nav-item mx-2 px-2">
                <NavLink className="nav-link" to="/pricing" aria-current="page">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item mx-2 px-2">
                <NavLink className="nav-link" to="/support" aria-current="page">
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

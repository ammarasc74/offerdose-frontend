import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/offerdose-frontend/" className="navbar-logo">
            <div className="img-logo">
              <Avatar
                alt="Remy Sharp"
                src="https://e.top4top.io/p_203499sx11.jpg"
              />
            </div>
            OfferDose
          </Link>
          <div className="navbar-menu">
            <Link to="/offerdose-frontend/" className="menu">
              Dashboard
            </Link>
            <Link to="/offerdose-frontend/" className="menu">
              Features
            </Link>
            <Link to="/offerdose-frontend/" className="menu">
              Support
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

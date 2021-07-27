import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" className="navbar-logo">
            <div className="img-logo">
              <Avatar
                alt="Remy Sharp"
                src="https://e.top4top.io/p_203499sx11.jpg"
              />
            </div>
            OfferDose
          </Link>
          <div className="navbar-menu">
            <Link to="/" className="nav">
              Dashboard
            </Link>
            <Link to="/" className="nav">
              Features
            </Link>
            <Link to="/" className="nav">
              Support
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
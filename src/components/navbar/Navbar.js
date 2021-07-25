import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import Button from '@material-ui/core/Button';



function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-logo">
                    <div>
                        <img src="https://j.top4top.io/p_2032yq0ut1.jpg" alt="" width="30" height="30" />
                        <Link to="/" className="navbar-logo">
                            OfferDose
                        </Link>
                    </div>
                    <div className="navbar-menu">
                        <Link to="/dashboard" className="nav">Dashboard</Link>
                        <Link to="/features" className="nav">Features</Link>
                        <Link to="/support" className="nav">Support</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

import React from "react";
import "./Footer.css";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <div className="footer-title">
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="footer-data">
          <div className="footer-left-side">
            <div className="numbers">
              <h2>(+20) xxx xxx xxx</h2>
              <h2>(+20) xxx xxx xxx</h2>
              <h2>(+20) xxx xxx xxx</h2>
              <div className="footer-logo">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
              </div>
            </div>
            <div className="footer-text">
              <h2>Terms of Use</h2>
              <h2>Privacy Policy</h2>
              <h2>Cookie Settings</h2>
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="footer-search">
            <p>Subscribe here!</p>
            <div className="search">
              <input className="textfield" placeholder="Subscribe" />
              <div className="search-btn">
                <Button variant="contained" color="white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

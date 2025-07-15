import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          {/*<img src={assets.logo} alt="logo" /> */}
          <h1>
            Food<span>Court</span>
          </h1>
          <p>
            Good food, great moments. Explore our menu and enjoy hassle-free
            dining at home.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebookIcon" />
            <img src={assets.twitter_icon} alt="twitterIcon" />
            <img src={assets.linkedin_icon} alt="LinkedinIcon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-566-566-623</li>
            <li>Contact@foodcourt.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2025 @Food Court. All Rights Reserved</p>
    </div>
  );
};

export default Footer;

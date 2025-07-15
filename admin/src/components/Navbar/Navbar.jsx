import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js"; // Adjust the path as needed to where your assets are exported

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={assets.logo} className="logo" alt="admin logo" />
            <img src={assets.profile_image} className="profile" alt="profile" />
        </div>
    );
};

export default Navbar;

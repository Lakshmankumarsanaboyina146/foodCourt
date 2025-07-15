import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/store-context";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken, cartItems } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      {/*<img src={assets.logo} alt="logo" className="logo" /> */}
      <Link to="/">
        <h1>
          Food<span> Court</span>
        </h1>
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}>
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}>
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}>
          Mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}>
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="searchIcon"
          className="search-icon"
        />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="basketIcon"
              className="basket-icon"
            />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}>
            {getTotalCartAmount() ? Object.keys(cartItems).length : null}
          </div>
        </div>
        {token !== "" ? (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="profile" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")} className="">
                <img src={assets.logout_icon} alt="logoutIcon" />
                <p>Orders</p>
              </li>
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="logoutIcon" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

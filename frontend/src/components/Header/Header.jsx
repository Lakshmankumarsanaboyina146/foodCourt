import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your Favaourite Food From Here</h2>
        <p>
          Fresh, fast, and flavorful! We serve nourishing bowls, gourmet wraps,
          and wholesome meals—packed with bold tastes and clean ingredients to
          fuel your day
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;

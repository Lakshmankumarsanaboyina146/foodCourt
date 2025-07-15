import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
  const { menuItemDetails, category, setCategory } = props;
  const { menu_name, menu_image } = menuItemDetails;

  return (
    <li
      onClick={() =>
        setCategory((prev) => (prev === menu_name ? "All" : menu_name))
      }
      className="explore-menu-list-item">
      <img
        className={category === menu_name ? "active" : ""}
        src={menu_image}
        alt={menu_name}
      />
      <p>{menu_name}</p>
    </li>
  );
};

export default MenuItem;

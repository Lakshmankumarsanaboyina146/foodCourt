import React from "react";

import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import MenuItem from "../MenuItem/MenuItem";

const ExploreMenu = (props) => {
  const { category, setCategory } = props;

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Menu</h1>
      <p className="explore-menu-text">
        Choose from the menu featuring of array of dishes
      </p>
      <ul className="explore-menu-list">
        {menu_list.map((item) => (
          <MenuItem
            menuItemDetails={item}
            key={item.menu_name}
            category={category}
            setCategory={setCategory}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExploreMenu;

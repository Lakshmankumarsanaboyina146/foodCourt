import React from "react";
import { useContext } from "react";
// import { StoreContext } from "../../context/storeContext";
import { StoreContext } from "../../context/store-context";

import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h1>Top Dishes</h1>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return <FoodItem foodItemDetails={item} key={item._id} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

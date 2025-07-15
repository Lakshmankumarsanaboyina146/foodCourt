import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/store-context";
// import { StoreContext } from "../../context/storeContext";

const FoodItem = (props) => {
  const { foodItemDetails } = props;
  // console.log(foodItemDetails);
  const { image, description, name, price, _id } = foodItemDetails;

  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          src={url + "/images/" + image}
          alt={name}
          className="food-item-image"
        />
        {!cartItems[_id] ? (
          <img
            src={assets.add_icon_white}
            alt="addIconWhite"
            className="add"
            onClick={() => addToCart(_id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="removeIconRed"
              className=""
              onClick={() => removeFromCart(_id)}
            />
            <p>{cartItems[_id]}</p>
            <img
              src={assets.add_icon_green}
              alt="addIconGreen"
              className=""
              onClick={() => addToCart(_id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-category-price-container">
          <p className="food-item-price">${price}</p>
          <button>BuyNow</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

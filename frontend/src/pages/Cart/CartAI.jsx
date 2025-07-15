import React, { useContext } from "react";
import "./CartAI.css";
import { StoreContext } from "../../context/store-context.js";

const CartAI = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-header">
          <div className="cart-items-title">
            <p className="item-image">Items</p>
            <p className="item-name">Title</p>
            <p className="item-price">Price</p>
            <p className="item-quantity">Quantity</p>
            <p className="item-total">Total</p>
            <p className="item-remove">Remove</p>
          </div>
        </div>

        <div className="cart-items-list">
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-item" key={item._id}>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-name">
                    <p>{item.name}</p>
                  </div>
                  <div className="item-price">
                    <p>${item.price}</p>
                  </div>
                  <div className="item-quantity">
                    <p>{cartItems[item._id]}</p>
                  </div>
                  <div className="item-total">
                    <p>${item.price * cartItems[item._id]}</p>
                  </div>
                  <div className="item-remove">
                    <button onClick={() => removeFromCart(item._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CartAI;

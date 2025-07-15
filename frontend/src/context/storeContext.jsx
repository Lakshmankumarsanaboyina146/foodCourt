import { useEffect, useState } from "react";
// import { food_list } from "../assets/asset
import axios from "axios";
import { StoreContext } from "./store-context.js";

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
<<<<<<< HEAD
  const url = "http://localhost:4000";

=======
  const url = "https://fooddelivery-fbe1.onrender.com";
>>>>>>> 573d9762f51b75e463188ee1d2b7b27d3f96bb23
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);

  // Add Item To Cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
    }
  };

  // Remove Cart Item from Cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
    }
  };

  // Calculating Total Amount of present items in the Cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodlist = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      `${url}/api/cart/get`,
      {},
      { headers: { token } }
    );
    setCartItems(response.data.data);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodlist();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

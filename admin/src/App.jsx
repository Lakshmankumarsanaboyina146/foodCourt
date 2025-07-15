import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  const url = "https://foodcourt-gq9q.onrender.com";


  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />}></Route>
          <Route path="/list" element={<List url={url} />}></Route>
          <Route path="/orders" element={<Orders url={url} />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;

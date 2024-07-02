import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "@/Layout";
import CartView from "./views/CartView";
import EmployeeView from "./views/EmployeeView";
import HomeView from "./views/HomeView";
import MovieView from "./views/MovieView";
import ProductDtailView from "./views/ProductDtailView";
import ProductView from "./views/ProductView";
import StoreView from "./views/StoreView";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />}></Route>
        <Route path="/cart" element={<CartView />}></Route>
        <Route path="/employee" element={<EmployeeView />}></Route>
        <Route path="/movie" element={<MovieView />}></Route>
        <Route path="/detail" element={<ProductDtailView />}></Route>
        <Route path="/product" element={<ProductView />}></Route>
        <Route path="/store" element={<StoreView />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

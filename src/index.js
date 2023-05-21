import React from "react";
import ReactDOM from "react-dom";

import Inventory from "./components/inventory";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
import Controlunit from "./components/Controlunit";
import { Analytics, Customers, Employees, Orders } from "./pages";
import InventoryState from "./components/InventoryState";
import Partners from "./pages/Partners";
import Staff from "./pages/Staff";
import Menu from "./pages/Menu";
import Supplier from './components/supplier'
import MenuSetUp from "./components/MenuSetUp";
import CreateBrand from "./components/CreateBrand";
import Home from "./components/Home";
import { Header } from "./components";

const user = localStorage.getItem("token");
ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/inventorystate" element={<InventoryState />} />
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/controlunit" element={<Controlunit />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/menusetup" element={<MenuSetUp />} />
        <Route path="/createbrand" element={<CreateBrand />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

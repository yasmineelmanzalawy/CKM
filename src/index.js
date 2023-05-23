import React from "react";
import ReactDOM from "react-dom";
import toast, { Toaster } from 'react-hot-toast';
import Inventory from "./components/inventory";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
import Controlunit from "./components/Controlunit";
import { Analytics, Customers, Employees, Orders } from "./pages";
import InventoryState from "./components/Stock";
import Partners from "./pages/Partners";
import Staff from "./pages/Staff";
import Supplier from './components/supplier'
import Menu from "./pages/Menu";
import MenuSetUp from "./components/MenuSetUp";
import CreateBrand from "./components/CreateBrand";
import Suppliers from "./pages/Suppliers";
import Stock from "./components/Stock";

const user = localStorage.getItem("token");
ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inventory" element={<Inventory />} />
        {user &&<Route path="/supplier" element={<Supplier />} />}
        {user &&<Route path="/menusetup" element={<MenuSetUp />} />}
        {user &&<Route path="/createbrand" element={<CreateBrand />} />}
        <Route path="controlunit" element={<Controlunit/>}>
        <Route path="/controlunit/analytics" element={<Analytics />} />
        <Route path="/controlunit/stock" element={<Stock />} />
        <Route path="/controlunit/employees" element={<Employees />} />
        <Route path="/controlunit/customers" element={<Customers />} />
        <Route path="/controlunit/orders" element={<Orders />} />
        <Route path="/controlunit/partners" element={<Partners />} />
        <Route path="/controlunit/staff" element={<Staff />} />
        <Route path="/controlunit/suppliers" element={<Suppliers />} />
        <Route path="/controlunit/menu" element={<Menu/>} />
          
          </Route>

      </Routes>
      <Toaster />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

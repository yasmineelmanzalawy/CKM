import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import toast, { Toaster } from "react-hot-toast";
import Inventory from "./components/inventory";
import "./index.css";
import Home from "./components/Home";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
import Controlunit from "./components/Controlunit";
import { Analytics, Customers, Employees, Orders } from "./pages";
import Employee from "./components/employee";
import Staff from "./pages/Staff";
import Supplier from "./components/supplier";
import Menu from "./pages/Menu";
import MenuSetUp from "./components/MenuSetUp";
import CreateBrand from "./components/CreateBrand";
import Suppliers from "./pages/Suppliers";
import Stock from "./components/Stock";

import Customerdata from "./components/Customerdata";
import FoodCourt from "./components/FoodCourt";
import Billing from "./components/Billing";
import Register from "./components/Register";
import Transcation from "./components/transcation";
import T2 from "./components/T2";
import { Tester, data, options } from './components/TestComponent';

const user = localStorage.getItem("token");
ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/t2" element={<T2 />} />
          <Route path="/employees" element={<Employee />} />
          <Route path="/ckmkitchens" element={<App />} />
          <Route path="/customerdata" element={<Customerdata />} />
          <Route path="/foodcourt" element={<FoodCourt />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tester" element={<Tester />} />
          {user && <Route path="/supplier" element={<Supplier />} />}
          {user && <Route path="/menusetup" element={<MenuSetUp />} />}
          {user && <Route path="/createbrand" element={<CreateBrand />} />}
          <Route path="controlunit" element={<Controlunit />}>
            <Route path="/controlunit/analytics" element={<Analytics />} />
            <Route path="/controlunit/stock" element={<Stock />}>
              <Route
                path="/controlunit/stock/transcations"
                element={<Transcation />}
              />
            </Route>
            <Route path="/controlunit/employees" element={<Employees />} />
            <Route path="/controlunit/customers" element={<Customers />} />
            <Route path="/controlunit/orders" element={<Orders />} />
            <Route path="/controlunit/staff" element={<Staff />} />
            <Route path="/controlunit/suppliers" element={<Suppliers />} />
            <Route path="/controlunit/menu" element={<Menu />} />
          </Route>
        </Routes>
      </React.StrictMode>
      <Toaster />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

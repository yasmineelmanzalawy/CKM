import React, { useEffect } from "react";
import { Routes, Route , Outlet  } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import {
  Analytics,
  Employees,
  Customers,
  Orders,
} from "../pages";
import Stock from "./Stock";
import Supplier from "../pages/Suppliers";
import "../App.css";

import { useStateContext } from "../contexts/ContextProvider";
import Staff from "../pages/Staff";
import Menu from "../pages/Menu";


function Controlunit() {
    const {
      setCurrentColor,
      setCurrentMode,
      currentMode,
      activeMenu,
      currentColor,
      themeSettings,
      setThemeSettings,
    } = useStateContext();
  
    useEffect(() => {
      const currentThemeColor = localStorage.getItem("colorMode");
      const currentThemeMode = localStorage.getItem("themeMode");
      if (currentThemeColor && currentThemeMode) {
        setCurrentColor(currentThemeColor);
        setCurrentMode(currentThemeMode);
      }
    }, []);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""} >
      
            <div>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Analytics />} />
                <Route path="/analytics" element={<Analytics />} />

                {/* pages  */}
                <Route path="/stock" element={<Stock />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/suppliers" element={<Supplier />} />

                {/* apps  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/staff" element={<Staff/>} />
                <Route path="/menu" element={<Menu/>}/>
              </Routes>
            <Footer />
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Controlunit
import React, { useEffect, useState } from "react";
import { Routes, Route, Outlet, useHistory } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import Transcation from "./transcation";
import { Analytics, Employees, Customers, Orders } from "../pages";
import Stock from "./Stock";
import Supplier from "../pages/Suppliers";
import "../App.css";
import axios from "../axios.config";
import { useStateContext } from "../contexts/ContextProvider";
import Staff from "../pages/Staff";
import Menu from "../pages/Menu";
import { BallTriangle } from "react-loader-spinner";

function Controlunit() {
  const navigate = useNavigate();
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  const [loading, setLoading] = useState(true);
  const [activationStatus, setActivationStatus] = useState(null);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
    
    const checkActivationStatus = async () => {
      try {
        const { data } = await axios.get("api/Brand");
        console.log(data[0].activation);
        setActivationStatus(data[0].activation);
      } catch (error) {
        console.error("Failed to fetch brand data:", error);
      } finally {
        setLoading(false);
      }
    };

    checkActivationStatus();
  }, []);

  useEffect(() => {
    if (activationStatus === "inactive") {
      showActivationPrompt();
    }
  }, [activationStatus]);

  const showActivationPrompt = () => {
    Swal.fire({
      title: "Activate Your Account",
      text: "Please activate your account to access the control unit.",
      icon: "info",
      showCancelButton: false,
      confirmButtonText: "Activate",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/billing"); // Redirect to billing page
      } else {
        navigate("/");
        localStorage.clear();
        // Redirect to home page
      }
    });
  };

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <BallTriangle color="#000000" height={80} width={80} />
        </div>
      ) : (
        <div>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{
                    background: currentColor,
                    borderRadius: "50%",
                  }}
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
                <Route path="/stock/transcations" element={<Transcation />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/suppliers" element={<Supplier />} />

                {/* apps  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/staff" element={<Staff />} />
                <Route path="/menu" element={<Menu />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Controlunit;

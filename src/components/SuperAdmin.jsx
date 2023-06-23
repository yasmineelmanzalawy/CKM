import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Avatar from "react-avatar";
import { Line, Bar } from "react-chartjs-2";
import axios from "../axios.config";
import { useNavigate } from "react-router";
import CountUp from "react-countup";
import { ThreeDots } from "react-loader-spinner";
const AdminDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("Dashboard");
  const [usercount, setUserCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [brands, setBrands] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [brandCount, setBrandCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCustomerCount = async () => {
      try {
        const response = await axios.get("api/User");
        const users = response.data.users;
        const customerUsers = users.filter((user) => user.role === "customer");
        setCustomerCount(customerUsers.length);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchCustomerCount();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/all-brands");
        const brands = response.data;
        const activeBrands = brands.filter(
          (brand) => brand.activation === "active"
        );
        setBrandCount(activeBrands.length);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const getInventory = async () => {
      const url = "api/User";
      try {
        const response = await axios.get(url);
        setUserCount(response.data.users);
        console.log(usercount);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getInventory();
  }, []);
  useEffect(() => {
    const getInventory = async () => {
      const url = "api/all-brands";
      try {
        const response = await axios.get(url);
        setBrands(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getInventory();
  }, []);
  useEffect(() => {
    const getInventory = async () => {
      const url = "api/ckm-revenue";
      try {
        const response = await axios.get(url);
        setRevenue(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getInventory();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Staff Roles Chart",
        fontSize: 50,
      },
    },
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }
  const renderMainContent = () => {
    switch (selectedNavItem) {
      case "Dashboard":
        return (
          <div>
            <div className="grid grid-cols-3 mb-8 ">
              <div className=" ">
                <div className="bg-white h-[300px] rounded-lg shadow-lg p-4">
                  <h3 className="text-4xl font-bold mb-2 text-center">
                    Profit
                  </h3>
                  <div className="text-center pt-12">
                    <CountUp
                      end={revenue.result}
                      duration={1}
                      separator=","
                      decimals={2}
                      decimal="."
                      className="dark:text-white text-green-500  text-6xl font-bold"
                    />
                  </div>
                </div>
              </div>
              <div className=" mx-4">
                <div className="bg-white h-[300px]  rounded-lg shadow-lg p-4">
                  <h3 className="text-4xl text-center font-bold mb-2">
                    Active Accounts{" "}
                  </h3>
                  <div className="text-center pt-12">
                    <CountUp
                      end={brandCount}
                      duration={1}
                      separator=","
                      decimals={0}
                      decimal="."
                      className="dark:text-white text text-green-500  text-6xl font-bold"
                    />
                  </div>
                </div>
              </div>
              <div className=" ">
                <div className="bg-white h-[300px] rounded-lg shadow-lg p-4">
                  <h3 className="text-xl font-bold">Growth Rate</h3>

                  <Line
                    data={{
                      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      datasets: [
                        {
                          label: "Growth Rate",
                          data: [2, 4, 1, 5, 3, 6],
                          borderColor: "#E94249",
                          borderWidth: 2,
                          fill: false,
                        },
                      ],
                    }}
                    options={options}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">Number of users</h3>
                <p>
                  <CountUp
                    end={usercount.length}
                    duration={1}
                    separator=","
                    decimals={0}
                    decimal="."
                    className="dark:text-white text text-green-500  text-6xl font-bold"
                  />
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">
                  Number of Kitchen Owners
                </h3>
                <p>
                  {" "}
                  <CountUp
                    end={brands.length}
                    duration={1}
                    separator=","
                    decimals={0}
                    decimal="."
                    className="dark:text-white text text-green-500  text-6xl font-bold"
                  />{" "}
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4">
                <h3 className="text-xl font-bold mb-2">Number of Customers</h3>
                <p>
                  {" "}
                  <CountUp
                    end={customerCount}
                    duration={1}
                    separator=","
                    decimals={0}
                    decimal="."
                    className="dark:text-white text text-green-500  text-6xl font-bold"
                  />{" "}
                </p>
              </div>
            </div>
          </div>
        );
      case "Users":
        return <h1 className="text-2xl font-bold mb-4">Users</h1>;
      case "Products":
        return <h1 className="text-2xl font-bold mb-4">Products</h1>;
      case "Orders":
        return <h1 className="text-2xl font-bold mb-4">Orders</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-Inter font-semibold">
      {/* Header */}
      <header className="bg-gray-800 text-gray-300 py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white text-xl font-bold ml-2">
              Admin Dashboard
            </div>
          </div>
          <div className="relative">
            <div
              className="bg-gray-500 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white w-64 text-gray-800 shadow-md rounded-md">
                <div className="py-2 px-4">Name: Admin </div>
                <div className="py-2 px-4 border-t border-gray-200">
                  Settings
                </div>
                <div
                  className="py-2 px-4 cursor-pointer text-red-600 hover:text-red-800"
                  onClick={(e) => {
                    setLoading(true);

                    axios.get("sanctum/csrf-cookie").then(() => {
                      const url = "api/auth/logout";
                      axios
                        .post(url)
                        .then(() => {
                          localStorage.clear();
                          navigate("/");
                        })
                        .catch((error) => {
                          console.log(error);
                        })
                        .finally(() => {
                          setLoading(false);
                        });
                    });
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 text-gray-800 flex">
        {/* Collapsible Sidebar */}
        <aside
          className={`bg-gray-700 text-gray-300 py-8 w-[15%] transition-all duration-300 overflow-y-auto`}
        >
          <nav>
            <ul>
              <li
                className={`p-4 cursor-pointer ${
                  selectedNavItem === "Dashboard"
                    ? "text-white bg-gray-600"
                    : ""
                }`}
                onClick={() => handleNavItemClick("Dashboard")}
              >
                Dashboard
              </li>
            </ul>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <div className={` p-8 px-4 transition-all duration-300 flex-grow`}>
          {renderMainContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

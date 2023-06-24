import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import axios from "../axios.config";
import { useNavigate } from "react-router";
import { RxAvatar } from "react-icons/rx";
const YourComponent = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("pending");
  const [activeOrder, setActiveOrder] = useState(null);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [processingOrders, setProcessingOrders] = useState([]);
  const [rejectedOrders, setRejectedOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const fetchOrders = async () => {
    try {
      const response = await axios.get("api/user/orders");
      const { completed, pending, processing, rejected, total_orders, user } =
        response.data;
      setCompletedOrders(completed);
      setPendingOrders(pending);
      setProcessingOrders(processing);
      setRejectedOrders(rejected);
      setTotalOrders(total_orders);
      setUser(user);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleOrderDetails = (orderId) => {
    setActiveOrder((prevOrder) => (prevOrder === orderId ? null : orderId));
  };
  
  const renderOrders = (orders) => {
    
  
    return (
      <ul className="space-y-4 overflow-y-auto mx-4 h-96">
        {orders.map((order) => (
          <li key={order.id}>
            <div
              className={` bg-white cursor-pointer  rounded-lg shadow-md overflow-auto transition ease-out duration-300 ${
                activeOrder === order.id ? "open" : ""
              }`}
              onClick={() => toggleOrderDetails(order.id)}
            >
              <div className=" flex items-center justify-between bg-gray-100 px-4  py-3">
                <h3 className="text-lg font-medium">Order ID: {order.id}</h3>
                <div className="dropdown-icon">
                  {activeOrder === order.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>
              {activeOrder === order.id && (
                <div className="order-card-details flex justify-between bg-gray-50 px-4 py-3">
                  <p>
                    Order ID: {order.id} <br />{" "}
                    {`Total_Cost:${order.total_cost}`}
                  </p>
                  <div>
                    Date:{" "}
                    {order.created_at.slice(0, 10)} <br />
                    <div className="text-right">
                      Time: {" "}
                    {order.created_at.slice(11, 16)}

                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="antialiased font-Inter font-semibold">
      <div className="w-full h-screen mt-24">
        <div>
          <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 mx-auto">
            <div className="flex justify-between">
              <div className="pl-4 pt-2 font-russo text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
                CKM
              </div>
              <div className="pt-2">
                <div className="relative">
                  <button
                    id="dropdownUserAvatarButton"
                    data-dropdown-toggle="dropdownAvatar"
                    className="flex mx-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={
                        "https://cdn.iconscout.com/icon/free/png-512/free-profile-2456529-2036059.png?f=avif&w=256"
                      }
                      alt=""
                    />
                  </button>

                  {isDropdownOpen && (
                    <div
                      id="dropdownAvatar"
                      className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownUserAvatarButton"
                      >
                        <li>
                          <a
                            href="/customerprofile"
                            className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Profile
                          </a>
                        </li>
                      </ul>
                      <div className="py-2">
                        <button
                          href="."
                          onClick={(e) => {
                            const url = "api/auth/logout";
                            axios.get("sanctum/csrf-cookie").then(async () => {
                              axios
                                .post(url)
                                .then((data) => {
                                  localStorage.clear();
                                  navigate("/");
                                })
                                .catch((error) => {
                                  console.log(error);
                                });
                            });
                          }}
                          className="block text-left px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.iconscout.com/icon/free/png-512/free-profile-2456529-2036059.png?f=avif&w=256"
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              <h1 className="font-bold text-center text-3xl text-gray-900">
                Hi, {user?.name}
              </h1>
              
              <div className="text-center">
                <h1 className="text-xl font-medium">Total Amount of Orders</h1>
                <h1 className="text-4xl font-bold">{totalOrders}</h1>
              </div>
              <div className="flex justify-between items-center my-5 px-6">
                <button
                  onClick={() => handleTabClick("completed")}
                  className={`${
                    activeTab === "completed"
                      ? "bg-green-100 text-green-900"
                      : "bg-transparent text-gray-500"
                  } hover:text-green-900 hover:bg-green-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  Completed Orders
                </button>
                <button
                  onClick={() => handleTabClick("pending")}
                  className={`${
                    activeTab === "pending"
                      ? "bg-yellow-400 text-yellow-900"
                      : "bg-transparent text-gray-500"
                  } hover:text-yellow-900 hover:bg-yellow-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  Pending Orders
                </button>
                <button
                  onClick={() => handleTabClick("processing")}
                  className={`${
                    activeTab === "processing"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-transparent text-gray-500"
                  } hover:text-blue-900 hover:bg-blue-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  Processing Orders
                </button>
                <button
                  onClick={() => handleTabClick("rejected")}
                  className={`${
                    activeTab === "rejected"
                      ? "bg-red-100 text-red-900"
                      : "bg-transparent text-gray-500"
                  } hover:text-red-900 hover:bg-red-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                >
                  Rejected Orders
                </button>
              </div>

              <div className="w-full">
                {activeTab === "completed" && renderOrders(completedOrders)}
                {activeTab === "pending" && renderOrders(pendingOrders)}
                {activeTab === "processing" && renderOrders(processingOrders)}
                {activeTab === "rejected" && renderOrders(rejectedOrders)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;

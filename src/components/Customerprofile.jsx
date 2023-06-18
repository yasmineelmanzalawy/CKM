import React, { useState } from "react";
import axios from "../axios.config";
import { useEffect } from "react";
import avatar from "../data/avatar.jpg";
import { useNavigate } from "react-router";

const CustomerProfile = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [inProgressOrders, setInProgressOrders] = useState([]);
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    axios
      .get("api/user/orders")
      .then((response) => {
        const data = response.data;
        setPendingOrders(data.pending);
        setInProgressOrders(data.processing);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const OrderDropdown = ({ order, color }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="mb-2">
        <div
          className={`flex items-center justify-between bg-${color} py-2 px-4 rounded-md text-white cursor-pointer ${
            isOpen ? "rounded-t-md" : "rounded-md"
          }`}
          onClick={handleToggle}
        >
          <span className="mr-2">{order.id}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 transform ${
              isOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.707a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="bg-gray-100 py-2 px-4 rounded-b-md">
            <p className="text-sm">{order.total_cost}</p>
            <p className="text-sm">{order.created_at}</p>
            <p className="text-sm">{order.status}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Customer Profile</h2>
          <div className="relative">
            <button
              id="dropdownUserAvatarButton"
              data-dropdown-toggle="dropdownAvatar"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
            </button>
            {isDropdownOpen && (
              <div
                id="dropdownAvatar"
                className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
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
                            localStorage.removeItem("token");
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
        <div className="mb-4">
            <div>
          <p className="text-lg font-semibold">Name: John Doe</p>
          <p className="text-lg font-semibold">Email: john@example.com</p>
            </div>
          
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Pending Orders</h3>
          {pendingOrders.map((order) => (
            <OrderDropdown key={order.id} order={order} color="yellow-500" />
          ))}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">In Progress Orders</h3>
          {inProgressOrders.map((order) => (
            <OrderDropdown key={order.id} order={order} color="green-200" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;

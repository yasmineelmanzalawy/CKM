import React, { useState, useEffect } from "react";
import axios from "../axios.config";


const Orders = () => {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const url = "api/Orders";
        const response = await axios.get(url);
        setOrder(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again later.");
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center text-2xl">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-[-30px] mb-[-110px]">
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex items-center justify-center overflow-hidden">
          <div className="mt-[-600px] w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Order ID</th>{" "}
                    <th className="py-3 px-6 text-left">Customer Name</th>{" "}
                    <th className="py-3 px-6 text-center">Dish ID</th>{" "}
                    <th className="py-3 px-6 text-center">Dish Name</th>{" "}
                    <th></th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {order.map((orderItem, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="font-medium">{orderItem.id}</span>
                        </div>
                      </td>{" "}
                      <td className="py-3 px-6 text-left">
                        {" "}
                        <div className="flex items-center">
                          {" "}
                          <span>{orderItem.name}</span>{" "}
                        </div>{" "}
                      </td>{" "}
                      <td className="py-3 px-6 text-center">
                        {" "}
                        {orderItem.menu_items.map((menuItem, idx) => (
                          <span key={idx}>{menuItem.id}</span>
                        ))}{" "}
                      </td>{" "}
                      <td className="py-3 px-6 text-center">
                        {" "}
                        {orderItem.menu_items.map((menuItem, idx) => (
                          <span key={idx}>{menuItem.item_name}</span>
                        ))}{" "}
                      </td>{" "}
                      <td className="pt-2 text-right">
                        {" "}
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                        >
                          {" "}
                          Accept{" "}
                        </button>{" "}
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                        >
                          {" "}
                          Reject{" "}
                        </button>{" "}
                      </td>{" "}
                    </tr>
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Orders;

import React from "react";
import axios from "../axios.config";
import { useState , useEffect } from "react";
const Orders = () => {
  const[order,setorder] = useState([])
  useEffect(() => {
    const getinventory = async () => {
      const url = "api/Orders";
      const data = await axios.get(url);
      console.log(data);
      console.log(order);
      setorder(data.data);
    };
    getinventory();
  }, []);
  return (
  <div className="mt-[-100px] mb-[-110px]">
    <div class="overflow-x-auto">
      <div class="min-w-screen min-h-screen flex items-center justify-center overflow-hidden">
        <div class="w-full lg:w-5/6">
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Order ID</th>
                  <th class="py-3 px-6 text-left">Customer Name</th>
                  <th class="py-3 px-6 text-center">Dish ID</th>
                  <th class="py-3 px-6 text-center">Dish Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                {order.map((x,i)=>{
                  return <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                      <span class="font-medium">{x.id}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>Eshal Rosas</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">{x.menu_items.id}</td>
                  <td class="py-3 px-6 text-center">Regular pizza</td>
                  <td className=" pt-2 text-right">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  };
export default Orders;

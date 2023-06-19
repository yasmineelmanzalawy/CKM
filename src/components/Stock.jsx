import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import axios from "../axios.config";
import { ThreeDots } from 'react-loader-spinner';

const Stock = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInventory = async () => {
      const url = "api/Inventory";
      try {
        const response = await axios.get(url);
        setInventory(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getInventory();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#999999" height={80} width={80} />
      </div>
    );
  }
  return (
    <div className="flex flex-col font-russo">
      <div className="text-center mt-[-20px]">
        <Link to="/inventory">
          <button className="text-center mt-[-50px] bg-[#ebeced] p-2 text-lg text text-[#575859] rounded-lg">
            Add Stock
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto px-16">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 font-jarkata font-medium">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]    "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                    >
                      item_name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                    >
                      total_quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                    >
                      unit_of_measurement{"(KG/GM)"}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                    >
                      unit_price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                    >
                      created_at
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                    ></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inventory.map((x, i) => {
                    return (
                      <tr key={i}>
                        <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {x.id}
                        </td>
                        <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {x.item_name}
                        </td>
                        <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {x.total_quantity}
                        </td>
                        <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {x.unit_of_measurement}
                        </td>
                        <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {x.unit_price}
                        </td>
                        <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {x.created_at.slice(0, 19)}
                        </td>
                        <td className="px-1 py-4 flex gap-4 text-right whitespace-nowrap">
                          <button className="hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer">
                            <AiOutlineDelete size={20} />
                          </button>
                          <button>
                            <Link to="/controlunit/Stock/transcations">
                              <GrTransaction
                                className="hover:scale-110 ease-out duration-300"
                                size={20}
                              />
                            </Link>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Stock;

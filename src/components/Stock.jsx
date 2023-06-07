import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { useEffect , useState } from "react";
import axios from "../axios.config";
const Stock = () => {
  
  const [inventory,setInventory] = useState([])
  useEffect(() => {
    const getinventory = async () => {
      const url = "api/Inventory"
      const data  = await axios.get(url);
      console.log(data)
      console.log(inventory);
      setInventory(data.data);
    };
    getinventory();
  }, []);
  return (
    <div className="flex flex-col font-russo">
      <div className=" text-center pb-10">
        <Link to="/inventory">
          <button className="bg-[#ebeced] p-4 text-lg text text-[#575859] rounded-lg">
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
                        {x.created_at.slice(0,19)}
                      </td>
                      <td className=" px-1 py-4 flex gap-4 text-right whitespace-nowrap">
                        <button
                        className=" hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer">
                          <AiOutlineDelete size={20} />
                        </button>
                        <button>
                        <AiFillEdit
                        className="hover:scale-110 ease-out duration-300"
                        size={20}
                      />
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

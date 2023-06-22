import React, { useEffect, useState } from 'react';
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai';
import axios from '../axios.config';

const Transcation = () => {
  const [inventory, setInventory] = useState([]);
  const itemId = localStorage.getItem('transaction');

  useEffect(() => {
    // Fetch transaction details based on the item ID
    axios
      .get(`api/transaction/${itemId}`)
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col font-Inter font-semibold">
      <h1 className="text-center text-3xl pb-12">Transactions</h1>
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
                    unit_of_measurement(KG/GM)
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
                {inventory.map(item => (
                  <tr key={item.id}>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.item_id}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.quantity}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.unit_of_measurement}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.unit_price}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.created_at.slice(0, 19)}
                    </td>
                    <td>
                      <button href="/t2">
                        <AiFillEdit className="cursor-pointer hover:scale-110 ease-out duration-300" size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transcation;

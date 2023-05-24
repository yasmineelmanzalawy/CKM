import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from "react";
import axios from "../axios.config";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
function Supplier() {
  const url = "api/Supplier";
  const [supplier, setsupplier] = useState([]);
  const [suppliers,setsuppliers] = useState([])
  const fetchSuppliers = async () =>{
    const res = await axios.get(url);
    loading()
    setsuppliers(res.data)
  }
  useEffect(()=>{
    fetchSuppliers();
  },[])
  
  
  
  useEffect(() => {
    const getsupplier = async () => {
      const { data } = await axios.get(url);
      setsupplier(data);
    };
    getsupplier();
  }, []);
  console.log(supplier);
  const loading = () => toast('Welcome Back', {
    icon: '👋',
  });
  const handleDelete = async (id) =>{
    const deleteUrl = "api/Supplier"
    try {
      await axios.delete(`${deleteUrl}/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col">
      <div className=" text-center pb-10">
        <Link to="/supplier">
        <button className="bg-[#3B1EC5] p-4 text-lg text text-white rounded-lg">
          Add suppliers
        </button>
        
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 font-jarkata font-medium">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5]    "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    notes
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                    Established at
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#3B1EC5] "
                  >
                  
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {supplier.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.id}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.name}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.email}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.address}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.category}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.phone}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.notes}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.created_at}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <button
                        onClick={() =>handleDelete(supplier.id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer">
                          <AiOutlineDelete size={20} />
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
}

export default Supplier;

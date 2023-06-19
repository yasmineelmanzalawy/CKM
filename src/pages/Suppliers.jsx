import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect } from "react";
import axios from "../axios.config";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ThreeDots } from 'react-loader-spinner';
function Supplier() {
  const url = "api/Supplier";
  const [supplier, setsupplier] = useState([]);
  const [loader, setLoading] = useState(true);
  useEffect(() => {
    const loading = () => toast('Welcome Back', {
      icon: '👋',
    });
    const getsupplier = async () => {
      const data  = await axios.get(url);
      setLoading(false)
      loading()
      console.log(data)
      console.log(supplier);
      setsupplier(data.data.data);
    };
    getsupplier();
  }, []);
  const handleDelete = async (id) =>{
    const deleteUrl = "api/Supplier"
    try {
      await axios.delete(`${deleteUrl}/${id}`)
    } catch (error) {
      console.log(error)
    }
  }
  if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <div className="text-center">
        <Link to="/supplier">
        <button className="text-center mt-[-50px]  bg-[#ebeced] p-2 text-lg text text-[#575859] rounded-lg">
          Add suppliers
        </button>
        
        </Link>
      </div>
      <div className=" overflow-x-auto mx-14">
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    notes
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Established at
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
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
                        {x.phone}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.notes}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.created_at.slice(0,19)}
                      </td>
                      <td className="px-6 py-4 text-right whitespace-nowrap">
                        <button
                        onClick={() =>handleDelete(x.id)}
                        className=" hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer">
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

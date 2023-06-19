import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { useState , useEffect } from "react";
import axios from "../axios.config";
import { ThreeDots } from 'react-loader-spinner';
const Staff = () => {
  const [loading, setLoading] = useState(true);
  const [staff,setStaff] = useState([]);
  useEffect(() => {
    const getStaff = async () => {
      const url = "api/Staff"
      const data  = await axios.get(url);
      setLoading(false)
      console.log(data)
      console.log(staff);
      setStaff(data.data.data);
    };
    getStaff();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#999999" height={80} width={80} />
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col justify-center mx-[50px]">
        <div className=" text-center">
          <Link to="/employees">
          <button className="text-center mt-[-50px]  bg-[#ebeced] p-2 text-lg text text-[#575859] rounded-lg">
            Add Staff
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
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced]    "
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Salary
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Employed At
                    </th>
                    <th 
                    scope="col"
                    className="px-2 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {staff.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.id}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.name}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.role}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.sallery}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.address}
                      </td>
                      
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.phone}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.email}
                      </td>
                      <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {x.created_at}
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
    </div>
  );
};

export default Staff;

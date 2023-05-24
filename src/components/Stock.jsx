import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
const Stock = () => {
  return (
    <div className="flex flex-col">
      <div className=" text-center pb-10">
        <Link to="/inventory">
          <button className="bg-[#3B1EC5] p-4 text-lg text text-white rounded-lg">
            Add Stock
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
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;

import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";

const Stock = () => {
  return (
    <div className="flex flex-col">
      <div className=" text-center pb-10">
        <Link to="/inventory">
          <button className="bg-[#03C9D7] p-4 text-lg text text-white rounded-lg">
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
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7]    "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    Raw material
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    Inventory Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    Quantity {"(KG/GM)"}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    Expiry Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    cost
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  >
                    Supplier Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-white uppercase bg-[#03C9D7] "
                  ></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className="  border-r-1text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-right">
                    <div className="flex gap-4 cursor-pointer">
                      <AiOutlineDelete
                        className=" hover:scale-110 ease-out duration-300 text-red-600"
                        size={20}
                      />
                      <AiFillEdit
                        className="hover:scale-110 ease-out duration-300"
                        size={20}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;

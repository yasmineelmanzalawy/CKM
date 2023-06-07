import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { useEffect , useState } from "react";
import axios from "../axios.config";
const Stock = () => {
  
  // const [staff,setStaff] = useState()
  // useEffect(() => {
  //   const getsupplier = async () => {
  //     const url = ""
  //     const data  = await axios.get(url);
  //     console.log(data)
  //     console.log(staff);
  //     setStaff(data.data.data);
  //   };
  //   getsupplier();
  // }, []);
  return (
    <div className="flex flex-col">
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
                    Raw material
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Inventory Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Quantity {"(KG/GM)"}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Expiry Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    cost
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
                  >
                    Supplier Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced] "
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
                  <td className=" border-r-1text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className=" border-r-1 text-center">----------</td>
                  <td className="  text-right">
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

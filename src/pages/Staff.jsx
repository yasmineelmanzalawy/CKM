import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const Staff = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mx-[50px]">
        <div className=" text-center pb-10">
            <button className="bg-[#f0f1f5] hover:bg-[#ebeced] w-[100px] text-[#575859] rounded-[20px] p-[5px]">
              Add Staff
            </button>
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
                      Email
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
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-[#575859] uppercase bg-[#ebeced] "
                    >
                      Salary
                    </th>
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
    </div>
  );
};

export default Staff;

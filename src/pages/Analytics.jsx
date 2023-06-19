import React from "react";
import { Tester, data, options } from "../components/TestComponent";
import { useState, useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import { MdOutlineSentimentSatisfiedAlt } from "react-icons/md";
import { AiFillDollarCircle, AiFillFile } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { AnotherChart } from "../components/Barchart1";
import { DoughnutChart } from "../components/Doughnutchart1";
import { PieChart } from "../components/Piechart1";
import StackedBarChart from "../components/Stackedbarchart1";
import { HorizontalBarChart } from "../components/Hbarchart1";
import axios from "../axios.config";
import InventoryWidget from "../components/InventoryWidget";
import MostUsedItemsWidget from "../components/InventoryWidget";
import { InventoryChart } from "../components/InventoryChart";
import { ThreeDots } from 'react-loader-spinner';
const Analytics = () => {
  const [totalStaffCount, setTotalStaffCount] = useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [staffMembers, setStaffMembers] = useState([]);
  const [totalCost, setTotalCost] = useState('');
  const [totalRawMaterialsCount, setTotalRawMaterialsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `api/staff-stats/${localStorage.getItem("brand_id")}`
        );
        setLoading(false)
        // Extract the data from the response
        const { total_staff_count, average_salary, latest_staff_members } =
          response.data;

        // Update the state with the fetched data
        setStaffMembers(latest_staff_members);
        setTotalStaffCount(total_staff_count);
        setAverageSalary(average_salary);
        console.log(averageSalary, totalStaffCount);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get(`api/inventory-stats/${localStorage.getItem('brand_id')}`);
        const data = response.data;
        setLoading(false)
        // Process the data and update the state or perform any necessary actions
        // For example, if you are using state hooks:
        setTotalCost(data.total_cost);
        setTotalRawMaterialsCount(data.total_raw_materials_count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchInventory();
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
      <div class="w-full flex justify-center items-center pb-4 ">
        <div class="container flex flex-col gap-4 mx-8">
          <label class="text-[#575859] dark:text-slate-200 font-semibold tracking-wider text-lg">
            Last Week
          </label>
          <div class="bg-gray-100  dark:bg-stone-900 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
            <div class="relative flex-1 flex flex-col gap-2 px-4">
              <label class="text-[#575859] dark:text-indigo-600 text-base font-semibold tracking-wider">
                Total Revenue
              </label>
              <label class=" dark:text-white text-4xl font-bold">14K</label>
              <div class="absolute bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                - 5%
              </div>
            </div>
            <div class="relative flex-1 flex flex-col gap-2 px-4">
              <label class="text-[#575859] dark:text-indigo-600 text-base font-semibold tracking-wider">
                Total Expenses
              </label>
              <label class=" dark:text-white text-4xl font-bold">14K</label>
              <div class="absolute bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                - 5%
              </div>
            </div>

            <div class="relative flex-1 flex flex-col gap-2 px-4">
              <label class="text-[#575859] dark:text-indigo-600 text-base font-semibold tracking-wider">
                Total Profit
              </label>
              <label class=" dark:text-white text-4xl font-bold">$1.2M</label>
              <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                + 5%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="stats"
        class="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 px-9 mb-4"
      >
        <div className="bg-gray-50 dark:bg-stone-900 shadow-md p-6 rounded-lg ml-6">
          <div className="flex  flex-row space-x-4 items-center">
            <div id="stats-1">
              <FiUsers size={30} className="text-[#575859] dark:text-white" />
            </div>
            <div>
              <p className="text-indigo-600 text-sm font-medium uppercase leading-4">
                Staff
              </p>
              <p className="text-[#575859] dark:text-white font-bold text-2xl inline-flex items-center space-x-2">
                <span>+{totalStaffCount}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-stone-900 shadow-md p-6 rounded-lg mx-4 ">
          <div className="flex flex-row space-x-4 items-center">
            <div id="stats-1">
              <AiFillDollarCircle size={30} className="text-[#575859] dark:text-white" />
            </div>
            <div>
              <p className="text-teal-300  text-sm font-medium uppercase leading-4">
                Average Salary
              </p>
              <p className="text-[#575859] dark:text-white font-bold text-2xl inline-flex items-center space-x-2">
                <span>${averageSalary}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-3xl">
        <div className="w-full gap-4">
          <div className="grid grid-cols-2 ">
            <Tester id="Staff-Chart" />
            <section class="antialiased text-gray-600 mt-3 ml-10 ">
          <div class=" flex flex-col ">
            <div class="w-full max-w-2xl py-3 bg-white rounded-xl ">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Staff Data</h2>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table id="Staff-Table" class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Email</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Salary</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Address</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Phone</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Role</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm overflow-y-auto divide-y divide-gray-100">
                {staffMembers.map((staffMember) => (
                  <tr key={staffMember.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="font-medium text-gray-800">{staffMember.name}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{staffMember.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">${staffMember.sallery}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{staffMember.address}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{staffMember.phone}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{staffMember.role}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
          </div>
        </div>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <div
        id="stats"
        class="grid gird-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-2 gap-2 pt-10 px-9 mb-4"
      >
        <div className="bg-gray-50 shadow-md p-6 rounded-lg ml-6">
          <div className="flex flex-row space-x-4 items-center">
            <div id="stats-1">
              <FaWarehouse size={30} className="text-[#575859]" />
            </div>
            <div>
              <p id="inventory-count" className="text-indigo-600 text-sm font-medium uppercase leading-4">
                Inventory Count
              </p>
              <p className="text-[#575859] font-bold text-2xl inline-flex items-center space-x-2">
                <span>{totalRawMaterialsCount}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 shadow-md p-6 rounded-lg mx-4 ">
          <div className="flex flex-row space-x-4 items-center">
            <div id="stats-1">
              <AiFillDollarCircle size={30} className="text-[#575859]" />
            </div>
            <div>
              <p id="inventory-cost" className="text-teal-300  text-sm font-medium uppercase leading-4">
                Inventory Cost
              </p>
              <p className="text-[#575859] font-bold text-2xl inline-flex items-center space-x-2">
                <span>{totalCost}</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2" >
        <div>
        <InventoryChart/>
        </div>
        <div>
          <MostUsedItemsWidget/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 ">
        
        <div className=" bg-gray-50 rounded-lg pt-3">
          <div className="bg-gray-100 h-full">
            <div className="bg-white rounded-lg py-10 p-4">
              <h2 className="text-xl font-semibold mb-4">
                Customer Satisfaction
              </h2>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex-shrink-0"></div>
                <div className="ml-2">
                  <span className="text-gray-600">Satisfied</span>
                  <span className="text-green-500 font-semibold ml-1">80%</span>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <div className="ml-2">
                  <span className="text-gray-600">Neutral</span>
                  <span className="text-yellow-500 font-semibold ml-1">
                    15%
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-full flex-shrink-0"></div>
                <div className="ml-2">
                  <span className="text-gray-600">Unsatisfied</span>
                  <span className="text-red-500 font-semibold ml-1">5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-50 rounded-lg pt-3 ">
          <div className="bg-gray-100 h-full">
            <div className="bg-white rounded-lg h-full p-4">
              <h2 className="text-xl font-semibold mb-4">
                Business Growth Rate
              </h2>
              <div className="flex items-center">
                <svg
                  className="w-10 h-10 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-9a1 1 0 011 1v2a1 1 0 11-2 0V8a1 1 0 011-1zm-1 5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <span className="text-gray-600">Current Growth Rate:</span>
                  <span className="text-green-500 font-semibold ml-1">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Tester />
        </div>
        <div>
          <AnotherChart />
        </div>
        <div>
          <StackedBarChart />
        </div>
        <div>
          <HorizontalBarChart />
        </div>
        <div className="w-96">
          <DoughnutChart />
        </div>
        <div className="w-96">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;

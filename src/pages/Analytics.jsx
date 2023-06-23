import React from "react";
import { Tester, data, options } from "../components/TestComponent";
import { useState, useEffect } from "react";
import { FiUsers } from "react-icons/fi";
import { AiFillDollarCircle, AiFillFile } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { AnotherChart } from "../components/Barchart1";
import { DoughnutChart } from "../components/Doughnutchart1";
import { PieChart } from "../components/Piechart1";
import StackedBarChart from "../components/Stackedbarchart1";
import { HorizontalBarChart } from "../components/Hbarchart1";
import axios from "../axios.config";
import MostUsedItemsWidget from "../components/InventoryWidget";
import { InventoryChart } from "../components/InventoryChart";
import { ThreeDots } from "react-loader-spinner";
import CountUp from "react-countup";
const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [totalStaffCount, setTotalStaffCount] = useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [staffMembers, setStaffMembers] = useState([]);
  const [totalCost, setTotalCost] = useState("");
  const [totalRawMaterialsCount, setTotalRawMaterialsCount] = useState(0);
  const [monthlyStats, setMonthlyStats] = useState({});
  const [bestSellingItems, setBestSellingItems] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalProfits, setTotalProfits] = useState(0);
  const [growthRate, setGrowthRate] = useState(null);
  const [profitMargin, setProfitMargin] = useState([]);
  const [transaction,settransaction] = useState([])

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `api/staff-stats/${localStorage.getItem("brand_id")}`
        );

        if (isMounted) {
          const { total_staff_count, average_salary, latest_staff_members } =
            response.data;

          setStaffMembers(latest_staff_members);
          setTotalStaffCount(total_staff_count);
          setAverageSalary(average_salary);
        }
      } catch (error) {
        console.log("Error fetching staff data:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchInventory = async () => {
      try {
        const response = await axios.get(
          `api/inventory-stats/${localStorage.getItem("brand_id")}`
        );

        if (isMounted) {
          const data = response.data;

          setTotalCost(data.total_cost);
          setTotalRawMaterialsCount(data.total_raw_materials_count);
        }
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventory();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const brandId = localStorage.getItem("brand_id");
        const response = await axios.get(`api/monthly-stats/${brandId}`);

        if (isMounted) {
          const data = response.data;
          settransaction(data.monthlyInventoryTransactionCost)
          setMonthlyStats(data);
          setGrowthRate(data.monthly_growth_rates);
          setBestSellingItems(data.bestSeller);
          animateNumbers(data);
          setLoading(false);
          setProfitMargin(data.monthly_profit_margins);
        }
      } catch (error) {
        console.log("Error fetching monthly stats:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const animateNumbers = (data) => {
    const targetRevenue = data?.monthly_sales?.[0]?.sales ?? 0;
    const targetExpenses =
      parseFloat(data?.monthlyTotalExpenses?.[0]?.total_expenses ) 
        
    const targetProfits = data?.monthly_profits?.[0]?.profit ?? 0;

    setTotalRevenue(targetRevenue);
    setTotalExpenses(targetExpenses);
    setTotalProfits(targetProfits);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }

  return (
    <div>
      <div className="w-full flex justify-center items-center pb-4">
        <div className="container font-Inter font-extrabold flex flex-col gap-4 mx-8">
          <h2 className="text-[#575859] dark:text-slate-200 font-semibold tracking-wider text-xl">
            Last Month
          </h2>
          <div className="bg-[#f9fafb] shadow-md  dark:bg-stone-900 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
            <div className="relative flex-1 items-center flex flex-col gap-2 px-4">
              <h3 className="text-[#575859]  dark:text-indigo-600 text-base font-semibold tracking-wider">
                Total Revenue
              </h3>
              <CountUp
                end={totalRevenue}
                duration={1}
                separator=","
                decimals={2}
                decimal="."
                className="dark:text-white text-4xl font-bold"
              />
            </div>
            <div className="relative flex-1 flex flex-col items-center gap-2 px-4">
              <h3 className="text-[#575859] dark:text-indigo-600 text-base font-semibold tracking-wider">
                Total Expenses
              </h3>
              <CountUp
                end={totalExpenses}
                duration={1}
                separator=","
                decimals={2}
                decimal="."
                className="dark:text-white text-red-500  text-4xl font-bold"
              />
            </div>

            <div className="relative flex-1 flex items-center flex-col gap-2 px-4">
              <h3 className="text-[#575859] dark:text-indigo-600 text-base font-semibold tracking-wider">
                Total Profit
              </h3>
              <CountUp
                end={totalProfits}
                duration={1}
                separator=","
                decimals={2}
                decimal="."
                className="dark:text-white text-green-500 text-4xl font-bold"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 pb-8  px-14 gap-4">
        <div>
          <div className="bg-[#f9fafb] font-Inter font-bold rounded-lg shadow-md h-72 p-4">
            <h2 className="text-2xl font-bold mb-4">Best Selling Items</h2>
            {bestSellingItems.length > 0 ? (
              <ul className="space-y-4">
                {bestSellingItems.slice(0, 5).map((item, index) => (
                  <li
                    key={index}
                    className={`flex  items-center ${
                      index === 0 ? "text-[#daa520]" : "text-black"
                    }`}
                  >
                    <span className="mr-2">{index + 1}.</span>
                    <span className=" font-Inter font-semibold">
                      {item.item_name}
                    </span>
                    <hr />
                    <span className="ml-auto font-Inter font-semibold text-gray-500">
                      Sold: {item.orders_count}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No best selling items found.</p>
            )}
          </div>
        </div>
        <div>
          <div className="bg-[#f9fafb] font-Inter font-semibold text-center rounded-lg shadow-md h-72 p-4">
            {growthRate[0] !== null && growthRate[0] !== undefined ? (
              <h1>{growthRate}</h1>
            ) : (
              <div>
                <h1 className="text-2xl font-bold mb-4">Growth Rate</h1>
                <p>Not enough statistics to calculate this data.</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="bg-[#f9fafb] font-Inter font-semibold rounded-lg shadow-md h-72 p-4">
            <div>
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">Profit Margin</h1>
                <div>
                  {profitMargin.map((item, index) => {
                    return (
                      <div key={index}>
                        <h2 className="text-2xl font-bold">{item.year}{"/"}{item.month}</h2>
                      </div>
                    );
                  })}
                </div>
              </div>
              {profitMargin.map((item, index) => {

                return (
                  <div className="text-center" key={index}>
                    <p className="text-2xl pt-2 pb-2 ">Profit Margin: </p>
                    <CountUp
                      end={item.profit_margin}
                      duration={2}
                      separator=","
                      decimals={0}
                      decimal="."
                      className="dark:text-white text-green-500  text-4xl font-bold"
                    />
                    <span className="text-2xl">%</span>
                  </div>
                );
              })}
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
              <AiFillDollarCircle
                size={30}
                className="text-[#575859] dark:text-white"
              />
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
                              <div class="font-semibold text-center">
                                Address
                              </div>
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
                                  <div className="font-medium text-gray-800">
                                    {staffMember.name}
                                  </div>
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  {staffMember.email}
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left font-medium text-green-500">
                                  ${staffMember.sallery}
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  {staffMember.address}
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  {staffMember.phone}
                                </div>
                              </td>
                              <td className="p-2 whitespace-nowrap">
                                <div className="text-left">
                                  {staffMember.role}
                                </div>
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
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-600 border-0 rounded md:my-10 dark:bg-gray-700" />
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
              <p
                id="inventory-count"
                className="text-indigo-600 text-sm font-medium uppercase leading-4"
              >
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
              <p
                id="inventory-cost"
                className="text-teal-300  text-sm font-medium uppercase leading-4"
              >
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
      <div className="grid grid-cols-2 gap-2">
        <div>
          <InventoryChart />
        </div>
        <div>
        <div className="bg-[#f9fafb] font-Inter font-bold rounded-lg mr-14 shadow-md h-[250px] mt-[45px] p-4">
          <div className="flex justify-between">
            <h1 className="text-center text-2xl">Inventory Transactions</h1>
            <h1 className="text-2xl">{transaction[0]?.month}/{transaction[0]?.year}</h1>
          </div>
            <div className="text-center pt-20 text-4xl text-red-500">
              {transaction[0]?.total_cost.slice(0,4)}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Analytics;

import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios.config";
import { toast } from "react-hot-toast";
const Inventory = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initialState = {
    total_quantity: "",
    item_name: "",
    unit_of_measurement: "",
    unit_price: "",
    brand_id:""
  };
  const [data, setData] = useState(initialState);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
 

  const sucessful = () => toast.success("Successfully Added!");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/Inventory";
    axios
      .post(url, data)
      .then((data) => {
        console.log(data.data);
        sucessful();
        setData(initialState);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };
  return (
    <div className="h-screen flex justify-center items-center font-russo bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl flex flex-col justify-center h-[80%]"
      >
        <div className="flex lustify-between gap-[645px]">
          <a href="./supplier">
            <h1 className="pb-4 text-2xl underline underline-offset-1 inline">
              Back
            </h1>
          </a>
          <a href="./menusetup">
            <h1 className="pb-4 text-2xl underline underline-offset-1 text-[#3B1EC5] inline">
              Next
            </h1>
          </a>
        </div>
        <h1 className="text-center text-5xl text-[#3B1EC5]">
          Add Your Raw Materials
        </h1>
        <div class="grid gap-6 mb-6 md:grid-cols-2 justify-items-center pt-[80px]">
          <div>
            <label
              for="Raw Material"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Item Name
            </label>
            <input
              onChange={handleChange}
              value={data.item_name}
              type="text"
              name="item_name"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Raw Material"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Unit price
            </label>
            <input
              onChange={handleChange}
              value={data.unit_price}
              name="unit_price"
              type="number"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Total Quantity
            </label>
            <input
              onChange={handleChange}
              name="total_quantity"
              value={data.total_quantity}
              type="number"
              id="Quantity"
              className=" px-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="total_quantity"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white inline"
            >
              Unit
            </label>
            <select
              onChange={handleChange}
              name="unit_of_measurement"
              value={data.unit_of_measurement}
              className="bg-gray-50 border px-20 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="select">Select</option>
              <option value="kilograms">kilograms</option>
              <option value="Grams">Grams</option>
              <option value="Liters">Liters</option>
            </select>
          </div>
          <input className="hidden" value={data.brand_id = localStorage.getItem("brand_id")} />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ADD
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Inventory;

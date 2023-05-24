import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios.config";
const Inventory = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    rawmaterial: "",
    suppliername: "",
    inventorycategories: "",
    expirydate: "",
    quantity: "",
    cost: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  }
// ....

axios.get('api/Supplier')
.then(response => console.log(response.data))
.catch(error => console.error(error));

  // .....


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "";
      const { data: res } = await axios.post(url, data);
      navigate("/menusetup");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 ">
      <form onSubmit={handleSubmit} className="rounded-3xl flex flex-col justify-center h-[80%]">
      <div className="flex lustify-between gap-[645px]">
          <a href="./supplier"><h1 className="pb-4 text-2xl underline underline-offset-1 inline">Back</h1></a>
          <a href="./menusetup"><h1 className="pb-4 text-2xl underline underline-offset-1 text-[#3B1EC5] inline">Skip</h1></a>
        </div>
        <h1 className="text-center text-5xl text-[#3B1EC5]">
          Add Your Raw Materials
        </h1>
        <div class="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
          <div>
            <label
              for="Raw Material"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Raw Material
            </label>
            <input
              onChange={handleChange}
              value={data.rawmaterial}
              type="text"
              name="rawmaterial"
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
              Inventory Categories
            </label>
            <input
              onChange={handleChange}
              value={data.inventorycategories}
              name="inventorycategories"
              type="text"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Inventory Categories"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              onChange={handleChange}
              name="quantity"
              value={data.quantity}
              type="number"
              id="Quantity"
              className="w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantity"
              required
            />

            <label
              for="website"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white inline"
            >
              Unit
            </label>
            <select
              onChange={handleChange}
              name="Unit"
              value={data.category}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[120px]"
            >
              <option value="select">Select</option>
              <option value="KG">KG</option>
              <option value="Grams">Grams</option>
              <option value="Liters">Liters</option>
            </select>
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Expiry Date
            </label>
            <input
              onChange={handleChange}
              name="expirydate"
              value={data.expirydate}
              type="date"
              id="Expiry Date"
              className="bg-gray-50 border px-10 border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Expiry Date"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Cost
            </label>
            <input
              onChange={handleChange}
              name="cost"
              value={data.cost}
              type="number"
              id="Cost"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Cost"
              required
            />
          </div>


          <div>
            <label
              for="last_name"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Name
            </label>
           <input type="text" value={value} onChange={onChange} placeholder="Search Supplier" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          <button onClick={(data)=>(value)}>Search</button>
          </div>


        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ADD
          </button>
          <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next
          </button>

        </div>
      </form>
    </div>
  );
};

export default Inventory;

import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "../axios.config";
import toast from "react-hot-toast";
const T2 = () => {
  const navigate = useNavigate();
  const [supplier, setsupplier] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [error, setError] = useState("");
  const initialState = {
    item_id: "",
    suppliers_id: "",
    quantity: "",
    unit_of_measurement: "",
    unit_price: "",
    brand_id: "",
  };
  const [data, setData] = useState(initialState);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const sucessful = () => toast.success("Successfully Added!");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/transaction";
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
  useEffect(() => {
    const getinventory = async () => {
      const url = "api/Inventory";
      const data = await axios.get(url);
      console.log(data);
      console.log(inventory);
      setInventory(data.data);
    };
    getinventory();
  }, []);
  useEffect(() => {
    const getsupplier = async () => {
      const url = "api/Supplier";
      const data = await axios.get(url);
      console.log(data);
      console.log(supplier);
      setsupplier(data.data.data);
    };
    getsupplier();
  }, []);
  return (
    <div className="h-screen font-russo flex justify-center items-center bg-gray-100 ">
      <div></div>
      <form
        onSubmit={handleSubmit}
        className="  rounded-3xl flex flex-col justify-center h-[80%] "
      >
        <div className="text-right pb-4 text-2xl underline underline-offset-1 text-[#3B1EC5]">
          <a href="./inventory">Next</a>
        </div>

        <h1 className="text-center text-5xl text-[#3B1EC5]">
          Submit Your Transcations
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-5 justify-items-center pt-[80px]">
          <div>
            <label
              htmlFor=""
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Item Name
            </label>
            {
              <select
                onChange={handleChange}
                value={data.item_id}
                required
                type="text"
                name="item_id"
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              >
                <option className="hidden" value="">
                  Select Your ingredent
                </option>
                {inventory.map((x) => {
                  return <option value={x.id}>{x.item_name}</option>;
                })}
              </select>
            }
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Supplier Name
            </label>
            {
              <select
                onChange={handleChange}
                value={data.suppliers_id}
                required
                id="searchbar"
                onkeyup="search"
                type="text"
                name="suppliers_id"
                placeholder=""
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              >
                <option className="hidden" value="">
                  Select Your Supplier
                </option>
                {supplier.map((x) => {
                  return <option value={x.id}>{x.name}</option>;
                })}
              </select>
            }
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              onChange={handleChange}
              value={data.unit_price}
              name="unit_price"
              type="text"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Quantity
            </label>
            <input
              onChange={handleChange}
              value={data.quantity}
              name="quantity"
              type="text"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Quantity"
              required
            />
            <input
              value={data.brand_id=localStorage.getItem("brand_id")}
              className="hidden"
            />
          </div>
          <div className="">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Measurement
            </label>
            <select
              onChange={handleChange}
              value={data.unit_of_measurement}
              required
              type="text"
              name="unit_of_measurement"
              className="text-center px-16 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            >
              <option className="hidden" value="">
                select
              </option>
              <option value="kilograms">kilograms</option>
              <option value="grams">grams</option>
              <option value="liters">liters</option>
              <option value="pieces">pieces</option>
            </select>
          </div>
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

export default T2;

import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios.config";
import { toast } from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";

const Inventory = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initialState = {
    total_quantity: "",
    item_name: "",
    unit_of_measurement: "",
    unit_price: "",
    category:"",
    brand_id:"",
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
    <div className="h-screen bg-gray-100 ">
      <div>
      <div className="pt-4">
       <Link to="/"><span className="ml-6 px-4 main-text font-russo text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
            CKM
       </span>
      </Link>
      </div>
      <div className="pt-4 mb-[80px] text-right mr-12 mt-[-80px]  underline underline-offset-1 text-[#3B1EC5] text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] ">
          <a href="./controlunit">Skip To Controlunit</a>
        </div>
      </div>
      <div className="mx-24 flex items-center font-russo">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl flex flex-col items-center h-[80%]"
      >
        <div className="mt-6 flex justify-between gap-[645px]">
          <a href="./employees">
            <h1 className="pb-4 text-2xl underline underline-offset-1 inline">
              Back
            </h1>
          </a>
          <a href="./menusetup">
            <h1 className="underline underline-offset-1 text-2xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] ">
              Next
            </h1>
          </a>
        </div>

        <div className="flex items-center justify-center mb-[-50px]">
          <h1 className="text-center font-russo text-4xl py-8 uppercase">
            &nbsp;{" "}
          </h1>
          <TypeAnimation
            sequence={[
              
              
              "Add Your Raw Materials!",
              5000000,
              () => {
                console.log("Sequence completed"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "32px",
              display: "inline-block",
              fontFamily: ["Russo One", "sans-serif"],
              color: "#0C147A",
              textTransform: "uppercase",
            }}
          />
        </div>

        {/* <h1 className="text-center text-5xl text-[#3B1EC5]">
          Add Your Raw Materials
        </h1> */}
        <div class="mx-24 flex flex-wrap gap-4 justify-items-center pt-[80px]">
          <div>
            <label
              for="Raw Material"
              className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Item Name
            </label>
            <input
              onChange={handleChange}
              value={data.item_name}
              type="text"
              name="item_name"
              className="w-[350px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Raw Material"
              required
            />
          </div>
          <div>
            <label
              for="Raw Material"
              className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Item Type
            </label>
            <select className="w-[350px] text-center px-14 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.category} onChange={handleChange} name="category">
              <option className="text-center hidden" value="select">select</option>
              <option className="text-center" value="dry_goods">dry_goods</option>
              <option className="text-center" value="meats">meats</option>
              <option className="text-center" value="seafood">seafood</option>
              <option className="text-center" value="vegetables">vegetables</option>
              <option className="text-center" value="legume">legume</option>
              <option className="text-center" value="spices">spices</option>
              <option className="text-center" value="herbs">herbs</option>
              <option className="text-center" value="others">others</option>
              <option className="text-center" value="liquid">liquid</option>
            </select>
          </div>
          <div>
            <label
              for="company"
              className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Unit price
            </label>
            <input
              onChange={handleChange}
              value={data.unit_price}
              name="unit_price"
              type="number"
              id="Inventory Categories"
              className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Total Quantity
            </label>
            <input
              onChange={handleChange}
              name="total_quantity"
              value={data.total_quantity}
              type="number"
              id="Quantity"
              className="text-center w-[350px] px-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="total_quantity"
              required
            />
          </div>
          <div>
            <label
              for="website"
              className="text-center pb-4 text-lg font-medium text-gray-900 dark:text-white inline"
            >
              Unit
            </label>
            <select
              onChange={handleChange}
              name="unit_of_measurement"
              value={data.unit_of_measurement}
              className="mt-2 h-[48px] w-[350px] text-center bg-gray-50 border px-16 border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option className="text-center hidden" value="select">Select</option>
              <option className="text-center" value="kilograms">kilograms</option>
              <option className="text-center" value="Grams">Grams</option>
              <option className="text-center" value="liters">Liters</option>
            </select>
          </div>
          <input className="hidden" value={data.brand_id = localStorage.getItem("brand_id")} />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="mt-5 ml-[-570px] text-white rounded px-4 hover:scale-125 ease-linear duration-300 bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-center h-12"
          >
            ADD
          </button>
          
        </div>
      </form>
    </div>
    </div>
  );
};

export default Inventory;

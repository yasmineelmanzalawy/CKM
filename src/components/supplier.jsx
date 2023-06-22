import React from "react";
import { useState } from "react";
import axios from "../axios.config";
import  toast  from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineArrowForward } from "react-icons/md";



const Supplier = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const initialState = {
    address: "",
    name: "",
    email: "",
    category: "",
    phone: "",
    notes: "",
    brand_id:""
  }
  const [data, setData] = useState(initialState);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
 const sucessful = () => toast.success('Successfully Added!')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/Supplier";
    axios
      .post(url, data)
      .then((data) => {
        console.log(data.data);
        sucessful()
        setData(initialState)
      })
      .catch((error) => {
        console.log(error);
        setError(error)
      });
  };
  return (
    <div className="h-screen bg-gray-100 ">
        <div>
        <div className="pt-4">
           <a href="./controlunit"><span className="ml-6 px-4 main-text font-russo md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
              CKM
            </span></a> 
        </div>
      </div>
      <div className="flex mx-72 justify-end mb-[-50px] mt-6">
            <a className="" href="./controlunit">
              <MdOutlineArrowForward size={28}/>{" "}
              
            </a>
          </div>
    
      <form
        onSubmit={handleSubmit}
        className=" rounded-3xl flex flex-wrap flex-col justify-center h-[80%] "
      >
        <div className="flex items-center justify-center">
          <h1 className="text-center font-russo text-4xl uppercase">
            &nbsp;{" "}
          </h1>
          <TypeAnimation
            sequence={[
              
              
              "please enter you suppliers!",
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
          Add Your Suppliers
        </h1> */}
        <div className="mx-24 grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
          <div>
            <label
            htmlFor=""
              className="block text-center mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier name
            </label>
            <input
              onChange={handleChange}
              value={data.name}
              name="name"
              type="text"
              className="w-[350px] text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier name"
              required
            />
          </div>
          <div>
            <label
              className="block text-center mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Location
            </label>
            <input
              onChange={handleChange}
              value={data.address}
              name="address"
              type="text"
              className="bg-gray-50 border text-center w-[350px] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier Location"
              required
            />
          </div>
          <div>
            <label
              className="block text-center mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Email
            </label>
            <input
              onChange={handleChange}
              value={data.email}
              name="email"
              type="email"
              id="Inventory Categories"
              className="bg-gray-50 border text-center w-[350px] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier Email"
              required
            />
          </div>
          <div>
            <label
              className="block text-center mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              onChange={handleChange}
              name="category"
              value={data.category}
              className="bg-gray-50 border w-[350px] text-center border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option className="hidden" value="select">Select</option>
              <option value="Meat_Items">Meat_Items</option>
              <option value="Poultry">Poultry</option>
              <option value="Dairy">Dairy</option>
              <option value="Frozen_Fruits_and_Vegetables">Frozen_Fruits_and_Vegetables</option>
              <option value="Dry_Products">Dry_Products</option>
              <option value="Non-Foods">Non-Foods</option>
            </select>
          </div>
          <div>
            <label
              className="block text-center mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Phone
            </label>
            <input
              onChange={handleChange}
              value={data.phone}
              name="phone"
              type="tel"
              className="bg-gray-50 border w-[350px] text-center border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier Phone"
              required
            />
          </div>
          <div>
            <label
              className="block text-center mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Note
            </label>
            <input
              onChange={handleChange}
              value={data.notes}
              name="notes"
              type="text"
              id="Inventory Categories"
              className="bg-gray-50 border text-center w-[350px] border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Note"
              required
            />
            <input value={data.brand_id = localStorage.getItem("brand_id")} className="hidden" />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="ml-[140px] text-white bg-gradient-to-br from-[#0f005a] to-[#0f79a3] hover:bg-blue-800 hover:scale-125 ease-liner duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ADD
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Supplier;

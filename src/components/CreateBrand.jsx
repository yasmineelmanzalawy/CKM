import { useState } from "react";
import React from "react";
import axios from "../axios.config";
import { Link, useNavigate } from "react-router-dom";

const CreateBrand = () => {
  const [data, setData] = useState({
    KitchenName: "",
    logo: "",
    cuisine: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "";
      const { data: res } = await axios.post(url, data);
      navigate("/controlunit");
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
    <div className="flex justify-center item-center h-screen">
        <div className="flex items-center flex-col justify-center">
        <h1 className="pb-16 text-center text-5xl text-[#3B1EC5] ">
            Create Your Brand
          </h1>
        
      <div className="">
        <form
          onSubmit={handleSubmit}
          className=" rounded-3xl flex flex-col justify-center h-[80%] "
        >
          <div>
            <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Kitchen Name
            </label>
            <input
              name="KitchenName"
              onChange={handleChange}
              value={data.KitchenName}
              type="text"
              className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Kitchen Name"
              required
            />
          </div>
          <div>

          <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Logo
            </label>
            
            <input type="file" id="img" name="logo" accept="image/*"
              onChange={handleChange}
              value={data.logo} className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>
          <div>
            <label className="text-center block text-lg font-medium text-gray-900 dark:text-white block text-lg font-medium text-gray-900 ">
                Cuisine
              </label>
              <select
                name="dishCategory"
                onChange={handleChange}
                required
                className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-16 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option styles="color-white" value={data.dishCategory}>
                  select
                </option>
                <option value={data.dishCategory}>Japanese</option>
                <option value={data.dishCategory}>Macaroni</option>
                <option value={data.dishCategory}>Chinese</option>
              </select></div>
          <div className="flex justify-center mt-6">
            <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </div>
        </form>
     </div> </div>
    </div>
  );
};

export default CreateBrand;

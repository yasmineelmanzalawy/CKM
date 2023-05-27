import { useState } from "react";
import React from "react";
import axios from "../axios.config";
import { Link, useNavigate } from "react-router-dom";

const CreateBrand = () => {
  const [data, setData] = useState({
    name: "",
    logo: "",
    cuisine: "",
    description:"",
    cover: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/Brand";
    axios
      .post(url, data)
      .then((data) => {
        navigate("/supplier");
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center item-center h-screen bg-gray-100">
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
                name="name"
                onChange={handleChange}
                value={data.name}
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

              <input
                type="file"
                alt="logo"
                id="img"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                value={data.logo}
                className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-center dark:text-white block text-lg font-medium text-gray-900 ">
                Cuisine
              </label>
              <select
                name="cuisine"
                value={data.cuisine}
                onChange={handleChange}
                required
                className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-16 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Select">Select</option>
                <option value="American">American</option>
                <option value="Egyptian">Egyptian</option>
                <option value="Chinesse">Chinesse</option>
                <option value="Oriental">Oriental</option>
                <option value="Japanesse">Japanesse</option>
                <option value="Indonisian">Indonisian</option>
                <option value="French">French</option>
              </select>
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <input
                name="description"
                onChange={handleChange}
                value={data.description}
                type="text"
                className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Kitchen Name"
                required
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Brand cover
              </label>
              <input
                type="file"
                alt="logo"
                id="img"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                value={data.cover}
                className="text-center w-[400px] my-[20px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="flex justify-center mt-6">
              
                <input
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
              
            </div>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default CreateBrand;

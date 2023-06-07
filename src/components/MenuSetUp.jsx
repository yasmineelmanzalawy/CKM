import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../axios.config";
import { toast } from "react-hot-toast";
const MenuSetUp = () => {
  
  const initialState = {
    item_name: "",
    brand_id: "",
    price: "",
    description: "",
    image: "",
    category: "",
  }
  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const sucessful = () => toast.success('Successfully Added!')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "api/Menu";
    axios
      .post(url, data)
      .then((data) => {
        console.log(data);
        sucessful()
        setData(initialState)
      })
      .catch((error) => {
        console.log(error);
        setError(error)
      });
  };

  return (
    <div>
      {" "}
      <div className="h-screen flex font-russo justify-center items-center bg-gray-100 ">
        <form
          onSubmit={handleSubmit}
          className="  rounded-3xl flex flex-col justify-center h-[80%] "
        >
          <div className="flex justify-between ">
            <a href="/inventory">
              <h1 className="pb-4 text-2xl underline underline-offset-1 inline">
                Back
              </h1>
            </a>
            <a href="/controlunit">
              <h1 className="pb-4 text-2xl underline underline-offset-1 text-[#3B1EC5] inline">
                Skip
              </h1>
            </a>
          </div>
          <h1 className="text-center text-5xl text-[#3B1EC5]">
            Create Your Dish
          </h1>
          <div class="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                item name
              </label>
              <input
                name="item_name"
                onChange={handleChange}
                value={data.item_name}
                type="text"
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dish Name"
                required
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                name="price"
                type="number"
                onChange={handleChange}
                placeholder="Price"
                value={data.price}
                required
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Image
              </label>
              <input
                name="image"
                onChange={handleChange}
                value={data.image}
                type="file"
                accept="image/*"
                className=" w-80 py-2 px-2 text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Image"
              />
            </div>
          </div>
          <div>
            <div class="grid mb-6 px-32 md:grid-cols-2 justify-items-center ">
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Description
                </label>

                <input
                  onChange={handleChange}
                  value={data.description}
                  required
                  id="searchbar"
                  onkeyup="search"
                  type="text"
                  name="description"
                  placeholder="description"
                  className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
              <div className="">
                <div>
                  <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="category"
                    onChange={handleChange}
                    value={data.category}
                    name="category"
                    className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <input className="hidden" value={data.brand_id = localStorage.getItem("brand_id")} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {error && <div className="">{error}</div>}
            <button
              //   onclick={Addeditem()}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ADD DISH
            </button>
            <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MenuSetUp;

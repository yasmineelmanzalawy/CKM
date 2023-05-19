import React from "react";

const MenuSetUp = () => {
  return (
    <div>
      {" "}
      <div className="h-screen flex justify-center items-center bg-gray-100 ">
        <form className="  rounded-3xl flex flex-col justify-center h-[80%] ">
          <h1 className="text-center text-5xl text-[#3B1EC5]">
            Create Your Dish
          </h1>
          <div class="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
            <div>
              <label
                for="Kitchen Dishes"
                className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Dish Name
              </label>
              <input
                type="text"
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dish Name"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Dish Category
              </label>
              <select className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-16 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="ITEM">Pizzas</option>
                <option value="ITEM">Burgers</option>
                <option value="ITEM">Macaroni</option>
              </select>
            </div>
            <div>
              <label
                for="last_name"
                className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Time To Prepare
              </label>
              <input
                type="number"
                className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Time In Minutes"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Ingredients
              </label>
              <div>
                <input
                  id="searchbar"
                  onkeyup="search"
                  type="text"
                  name="search"
                  placeholder="Search ingredient.."
                  className="text-center text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                />
              </div>
            </div>
            <div>
              <input
                type="number"
                placeholder="Quantity"
                className="mt-[36px] w-[150px] mr-[60px] text-center text-center bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              />
            </div>
          </div>
          <div className="justify-center flex justify-between">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ADD
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

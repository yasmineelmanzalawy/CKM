import React from "react";
const Supplier = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 ">
      <form className="  rounded-3xl flex flex-col justify-center h-[80%] ">
        <h1 className="text-center text-5xl text-[#3B1EC5]">
          Add Your Suppliers
        </h1>
        <div class="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
          <div>
            <label
              for="Raw Material"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier name
            </label>
            <input
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier name"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Location
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier Location"
              required
            />
          </div>
          <div>
            <label
              for="company"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Email
            </label>
            <input
              type="email"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier Email"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 px-16 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="ITEM">ITEM</option>
              <option value="ITEM">ITEM</option>
              <option value="ITEM">ITEM</option>
              <option value="ITEM">ITEM</option>
            </select>
          </div>
          <div>
            <label
              for="website"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Supplier Phone
            </label>
            <input
              type="tel"
              id="Quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Supplier Phone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Note
            </label>
            <input
              type="text"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Note"
              required
            />
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

export default Supplier;
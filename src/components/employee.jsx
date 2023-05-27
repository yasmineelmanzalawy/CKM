import React from 'react'
import { useNavigate } from 'react-router';
import axios from '../axios.config';
import { useState } from 'react';
const Employee = () => {
    const navigate = useNavigate()
    const initialState = {
        address: "",
        name: "",
        email: "",
        category: "",
        phone: "",
        notes: "",
      }
      const [data, setData] = useState(initialState);
      const [error,setError] = useState();
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
      <div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="  rounded-3xl flex flex-col justify-center h-[80%] "
      >
        <div className="text-left pb-4 text-2xl underline underline-offset-1 text-[#3B1EC5]">
          <a href="/controlunit">Back</a>
        </div>
  
        <h1 className="text-center text-5xl text-[#3B1EC5]">
          Add Your Employees
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
          <div>
            <label
            htmlFor=""
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Employee Name
            </label>
            <input
              
              
              name="name"
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Employee Name"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              
              
              name="Address"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <input
              
              
              name="email"
              type="email"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Role"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
                Phone
            </label>
            <input
              type='number'
              name="category"
              placeholder='Phone Number'
              className="bg-gray-50 px-6 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Employment Date
            </label>
            <input
              
              name="date"
              type="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Employment Date"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Salary
            </label>
            <input
              
              name="notes"
              type="Number"
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
  )
}

export default Employee
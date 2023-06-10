import React from 'react'
import { useNavigate } from 'react-router';
import axios from '../axios.config';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
const Employee = () => {
    const navigate = useNavigate()
    const initialState = {
        role: "",
        name: "",
        sallery: "",
        address: "",
        phone: "",
        email: "",
        brand_id:"",
      }
      const [data, setData] = useState(initialState);
      const [error,setError] = useState();
      const sucessful = () => toast.success('Successfully Added!')
      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "api/Staff";
        axios
          .post(url, data)
          .then((data) => {
            console.log(data.data);
            sucessful()
            setData(initialState)
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <div className="h-screen flex justify-center font-russo items-center bg-gray-100 ">
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
              Name
            </label>
            <input
              
              value={data.name}
              onChange={handleChange}
              name="name"
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Employee Address
            </label>
            <input
              
              value={data.address}
              onChange={handleChange}
              name="address"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Employee Address"
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
              onChange={handleChange}
              value={data.role}
              name="role"
              type="text"
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
            value={data.phone}
              type='number'
              onChange={handleChange}
              name="phone"
              placeholder='Phone Number'
              className="bg-gray-50 px-6 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

          </div>
          <div>
            <label
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={data.email}
              name="email"
              onChange={handleChange}
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
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
              value={data.sallery}
              name="sallery"
              onChange={handleChange}
              type="Number"
              id="Inventory Categories"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Salary"
              required
            />
            <input className='hidden' value={data.brand_id=localStorage.getItem("brand_id")} />
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
  )
}

export default Employee
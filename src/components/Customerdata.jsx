import React from 'react'
import { Link, useNavigate } from "react-router-dom";



const Customerdata = () => {
  return (
    <div>
          <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          You Have A Good Taste!
        </h1>
        <p className="text-center text-gray-700 my-5">Please Enter Your Information</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Adress "
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="Phone"
          />
        </div>
        <div className="text-center">
            <Link to="/ckmkitchens">
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit Order
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Customerdata
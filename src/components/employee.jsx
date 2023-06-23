import React from "react";
import axios from "../axios.config";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { MdOutlineArrowForward } from "react-icons/md";


const Employee = () => {
  const navigate = useNavigate();
  const initialState = {
    role: "",
    name: "",
    sallery: "",
    address: "",
    phone: "",
    email: "",
    brand_id: "",
  };
  const [data, setData] = useState(initialState);
  const [error, setError] = useState();
  const sucessful = () => toast.success("Successfully Added!");
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
        sucessful();
        setData(initialState);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="h-screen bg-gray-100">
      <div>
        <div className="pt-4">
           <a href="./controlunit"><span className="ml-6 px-4 main-text font-russo md:text-6xl text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
              CKM
            </span></a> 
        </div>
      </div>
      <div className="flex mx-72 justify-end mt-6">
            <a className="" href="./controlunit">
              <MdOutlineArrowForward size={28}/>{" "}
              
            </a>
          </div>
     
        <div className="flex justify-center font-russo items-center  ">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl flex flex-col justify-center h-[80%] "
          >
            <div className="flex items-center justify-center mb-[-50px]">
              <h1 className="text-center font-russo text-4xl py-8 uppercase">
                &nbsp;{" "}
              </h1>
              <TypeAnimation
                sequence={[
                  "please enter you emloyees!",
                  5000000,
                  () => {
                    console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "26px",
                  display: "inline-block",
                  fontFamily: ["Russo One", "sans-serif"],
                  color: "#0C147A",
                  textTransform: "uppercase",
                }}
              />
            </div>

            {/* <h1 className="text-center text-5xl text-[#3B1EC5]">
          Add Your Employees
        </h1> */}
            <div className=" grid gap-6 mb-6 md:grid-cols-3 justify-items-center pt-[80px]">
              <div>
                <label
                  htmlFor=""
                  className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  value={data.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="text-center w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required
                />
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Employee Address
                </label>
                <input
                  value={data.address}
                  onChange={handleChange}
                  name="address"
                  type="text"
                  className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Employee Address"
                  required
                />
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Role
                </label>
                <select
                  onChange={handleChange}
                  value={data.role}
                  name="role"
                  type="text"
                  id="Inventory Categories"
                  className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Role"
                  required
                >
                  <option className="hidden" value="">Select</option>
                  <option value="cooker">Chef</option>
                  <option value="security">Security Man</option>
                  <option value="dustman">Dustman</option>
                  <option value="casher">Cashier</option>
                  <option value="another">Delivery</option>
                </select>
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Phone
                </label>
                <input
                  value={data.phone}
                  type="number"
                  onChange={handleChange}
                  name="phone"
                  placeholder="Phone Number"
                  className="text-center w-[350px] bg-gray-50 px-6 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  value={data.email}
                  name="email"
                  onChange={handleChange}
                  type="email"
                  className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="text-center block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Salary
                </label>
                <input
                  value={data.sallery}
                  name="sallery"
                  onChange={handleChange}
                  type="Number"
                  id="Inventory Categories"
                  className="text-center w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Salary"
                  required
                />
                <input
                  className="hidden"
                  value={(data.brand_id = localStorage.getItem("brand_id"))}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className=" text-white bg-gradient-to-br from-[#0f005a] to-[#0f79a3] hover:bg-blue-800 hover:scale-125 ease-liner duration-300 font-medium rounded-lg text-lg  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Employee;

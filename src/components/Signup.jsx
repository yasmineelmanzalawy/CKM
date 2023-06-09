import axios from "../axios.config";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import sign from "../data/sign.png";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    const url = "api/auth/register";
    e.preventDefault();
    axios.get("sanctum/csrf-cookie").then(async () => {
      axios
        .post(url, data)
        .then((data) => {
          localStorage.setItem("id", data.data.user.id);
          localStorage.setItem("token", data.data.token);
          if (localStorage.getItem("role") === "customer") {
            navigate("/foodcourt");
            window.location.reload();
          } else if (localStorage.getItem("role") === "owner") {
            navigate("/createbrand");
            window.location.reload();
          }
          console.log(data.data);
          console.log(data.data.token);
          localStorage.removeItem("role");
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        });
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-slate-900 text-white" : "bg-white text-black"
      } h-screen`}
    >
      <button
        onClick={toggleDarkMode}
        className={`${
          isDarkMode ? " text-white " : " text-black"
        } p-2 rounded absolute top-4 right-4 z-10 `}
      >
        {isDarkMode ? <FaMoon /> : <FaSun />}
      </button>
      <div className="pt-4">
        <Link to="/">
          <span
            className={`ml-6 px-4 main-text font-russo text-6xl text-transparent bg-clip-text bg-gradient-to-br ${
              isDarkMode ? "from-white to-white" : "from-[#0f005a] to-[#0f79a3]"
            }`}
          >
            CKM
          </span>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="w-0 md:w-0 mt-[-30px] lg:w-[500px]">
          <img src={sign} alt="" className="mt-[-15px]" />
        </div>
        <div className="mt-[-35px]">
          <form onSubmit={handleSubmit}>
            <h1
              className={`text-center text-transparent bg-clip-text bg-gradient-to-br ${
                isDarkMode
                  ? "from-white to-white"
                  : "from-[#0f005a] to-[#0f79a3]"
              } font-russo text-[40px] display: block mt-[5px]`}
            >
              Create an account
            </h1>

            <h1
              className={`text-center mt-8 font-russo mb-[px] ${
                isDarkMode ? "text-white" : "text-[#0C147A]"
              }`}
            >
              Name
            </h1>

            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={`text-center font-russo display: block border-[3px] ${
                isDarkMode ? "border-gray-300" : "border-[#0C147A]"
              } my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px] ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            />
            <h1
              className={`text-center  font-russo mb-[px] ${
                isDarkMode ? "text-white" : "text-[#0C147A]"
              }`}
            >
              Email
            </h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={`text-center font-russo display: block border-[3px] ${
                isDarkMode ? "border-gray-300" : "border-[#0C147A]"
              } my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px] ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            />

            <h1
              className={`text-center  font-russo mb-[px] ${
                isDarkMode ? "text-white" : "text-[#0C147A]"
              }`}
            >
              Password
            </h1>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={`text-center font-russo display: block border-[3px] ${
                isDarkMode ? "border-gray-300" : "border-[#0C147A]"
              } my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px] ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            />
            <h1
              className={`text-center  font-russo  ${
                isDarkMode ? "text-white" : "text-[#0C147A]"
              }`}
            >
              phone
            </h1>
            <input
              value={data.phone}
              type="number"
              onChange={handleChange}
              placeholder="phone"
              name="phone"
              required
              className={`text-center font-russo display: block border-[3px] ${
                isDarkMode ? "border-gray-300" : "border-[#0C147A]"
              } my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px] ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              } `}
            />
            <input
              value={(data.role = localStorage.getItem("role"))}
              className="hidden"
            />
            {error && <div className="">{error}</div>}
            <button
              type="submit"
              className="font-russo display: block mx-auto rounded-[10px] h-[40px] w-[100px]  bg-gradient-to-br from-[#0f005a] to-[#0f79a3]  hover:scale-125 ease-liner duration-300 text-white mt-[20px] my-[20px] text-center"
            >
              Sign Up
            </button>
            <h1 className="text-center font-russo">Already have an account?</h1>
            <Link to="/login">
              <button
                type="button"
                className=" font-russo display: block mx-auto text-center underline underline-offset-1"
              >
                Log in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

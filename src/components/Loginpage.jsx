import axios from "../axios.config";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import log from "../data/log.png";

const Loginpage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "api/auth/login";

    setIsLoading(true); // Set isLoading to true when submitting the form

    axios.get("sanctum/csrf-cookie").then(async () => {
      axios
        .post(url, data)
        .then((data) => {
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("id", data.data.user.id);
          localStorage.setItem("role", data.data.user.role);

          switch (localStorage.getItem("role")) {
            case "owner":
              navigate("/controlunit");
              window.location.reload();
              break;
            case "customer":
              navigate("/foodcourt");
              window.location.reload();
              break;
            case "sa":
              navigate("/admin");
              window.location.reload();
              break;
            default: // Do nothing
            {
            }
          }

          console.log(data.data);
          console.log(data.data.token);
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.message);
          }
        })
        .finally(() => {
          setIsLoading(false); // Set isLoading to false when the request is completed
        });
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${
        isDarkMode ? " bg-slate-900 text-white" : "bg-white text-black"
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
      <div className="mt-[-20px] font-russo flex justify-center">
        <div className="w-0 pr-4 md:w-0 lg:w-[450px]">
          <img src={log} alt="" />
        </div>
        <div className="">
          <form className="mt-16 pl-12" onSubmit={handleSubmit}>
            <h1
              className={`text-center text-transparent bg-clip-text bg-gradient-to-br ${
                isDarkMode
                  ? "from-white to-white"
                  : "from-[#0f005a] to-[#0f79a3]"
              } font-russo text-[38px] display: block mt-[5px]`}
            >
              Login to your account
            </h1>
            <h1
              className={`text-center mt-[50px] mb-[-20px] text-${
                isDarkMode ? "gray-300" : "blue-800"
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
              className={`text-center display: block border-[3px] ${
                isDarkMode ? "border-gray-300" : "border-blue-800"
              } my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px] ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            />
            <h1
              className={`text-center mt-[20px] mb-[-20px] text-${
                isDarkMode ? "gray-300" : "blue-800"
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
              className={`text-center display: block border-[3px] ${
                isDarkMode ? "border-gray-300" : "border-blue-800"
              } my-[20px] mx-auto rounded-[10px] h-[50px] w-[250px] ${
                isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            />
            {error && (
              <div
                className={`text-center ${
                  isDarkMode ? "text-red-300" : "text-red-600"
                } text-xs underline font`}
              >
                {error}
              </div>
            )}
            <button
              className={`display: block mx-auto rounded-[10px] h-[40px] w-[100px] ${
                isDarkMode
                  ? "bg-slate-600"
                  : "bg-gradient-to-br from-[#0f005a] to-[#0f79a3]"
              }  hover:scale-125 ease-liner duration-300 text-white mt-[70px] my-[20px] text-center`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-1 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.418 0 8-3.582 8-8h-4a4 4 0 11-8 0V5.291z"
                    />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Log In"
              )}
            </button>
            <div>
              <h1
                className={`text-center text-${
                  isDarkMode ? "gray-300" : "black"
                }`}
              >
                You don't have an account?{" "}
              </h1>
              <Link to="/register">
                <button
                  className={`display: block mx-auto text-center underline underline-offset-1`}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;

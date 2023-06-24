import React from "react";
import avatar from "../data/avatar.jpg";
// import './FoodCourt.css'
import pexel from "../data/pexels-chan-walrus-958545.jpg";
import { Link, useNavigate } from "react-router-dom";
import restaurant from "../data/restaurant.png";
import search from "../data/search-interface-symbol.png";
import axios from "../axios.config";
import { useEffect, useState } from "react";

const FoodCourt = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  const [brand, setbrand] = useState([]);
  useEffect(() => {
    const getBrand = async () => {
      const url = "api/all-brands";
      const { data } = await axios.get(url);
      setbrand(data);
    };
    getBrand();
  }, []);
  console.log(brand);
  const logout = (e) => {
    const url = "api/auth/logout";
    axios.get("sanctum/csrf-cookie").then(async () => {
      axios
        .post(url)
        .then((data) => {
          localStorage.clear();
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const token = localStorage.getItem("token");
  const showProfileIcon = !!token;

  return (
    <div className="bg-[white] h-full font-Inter font-semibold">
      <div className="mb-8">
        <div className="flex justify-between ">
         <a href="/"><h1 className=" p-4 main-text font-russo text-[48px] text-transparent bg-clip-text bg-gradient-to-br from-[#fd4c00] to-[#ffa17c] ">
            CKM
          </h1></a> 
          <div>
            <h1 className="text-3xl pr-32 pt-10">Food Court</h1>
          </div>
          <div className="relative mt-3">
            {showProfileIcon && (
              <button
                id="dropdownUserAvatarButton"
                data-dropdown-toggle="dropdownAvatar"
                className="flex mx-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-profile-2456529-2036059.png?f=avif&w=256"
                  alt=""
                />
              </button>
            )}

            {isDropdownOpen && showProfileIcon && (
              <div
                id="dropdownAvatar"
                className="w-42  origin-top-right z-10 absolute right-0 mt-2 w-44 rounded-lg shadow bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownUserAvatarButton"
                >
                  <li>
                    <a
                      href="/customerprofile"
                      className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <button
                    href="."
                    onClick={logout}
                    className="block text-left px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {brand.map((x, i) => {
          return (
            <div
              onClick={() => {
                localStorage.setItem("test", x.id);
                localStorage.setItem("user_id", x.user_id);
                navigate("/ckmkitchens");
              }}
              key={i}
              className=" bg-gray-100 shadow-lg rounded-3xl"
            >
              <div class="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-3xl relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white p-[16px] dark:text-white dark:shadow-none">
                <div class="relative mt-1 flex h-48 w-full justify-center rounded-xl">
                  <img src={x.image_cover} alt="" />
                  <div class="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-4  ">
                    <img
                      class="h-full w-full rounded-full"
                      src={x.logo}
                      alt=""
                    />
                  </div>
                </div>
                <div class="mt-16 flex flex-col items-center">
                  <h4 class="text-bluePrimary text-xl font-bold">{x.name}</h4>
                  <p class="text-lightSecondary text-center text-base font-normal">
                    {x.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    localStorage.setItem("test", x.id);
                    localStorage.setItem("user_id", x.user_id);
                    navigate("/ckmkitchens");
                  }}
                  type="button"
                  class="text-white mt-auto bg-[#fd4c00] hover:bg-[#fd4c00] focus:ring-4 focus:outline-none focus:ring-[#e16e3d] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 -ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  Check the Menu
                </button>
              </div>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCourt;

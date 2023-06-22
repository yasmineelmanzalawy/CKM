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
    <div className="bg-[white] h-full">
      <div className="mb-8">
        <div className="flex justify-between ">
          <h1 className=" p-4 main-text font-russo text-[64px] text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3] ">
            CKM
          </h1>
          <div>
            <h1 className="text-4xl pr-16 text pt-10">Food Court</h1>
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
                <img className="w-12 h-12 rounded-full" src="https://cdn.iconscout.com/icon/free/png-512/free-profile-2456529-2036059.png?f=avif&w=256" alt="" />
              </button>
            )}

            {isDropdownOpen && showProfileIcon && (
              <div
                id="dropdownAvatar"
                className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
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

      {brand.map((x, i) => {
        return (
          <button
            onClick={() => {
              localStorage.setItem("test", x.id);
              localStorage.setItem("user_id", x.user_id);
              navigate("/ckmkitchens");
            }}
            key={i}
            className="p-6 flex flex-wrap justify-center mx-auto "
          >
            <div className="grid grid-cols-2 gap-4 w-[1000px] bg-[#ffdfcc] relative rounded-3xl">
              <div className="m-auto">
                <button className="rounded w-[300px] align-center bg-[#E55807] m-2 mt-2 hover:bg-[#6b2f0a] text-[white] hover:text-white py-2 drop-shadow-2xl  duration-300">
                  {x.name}
                </button>
                <p className="rounded w-[300px] h-[150px] text-center bg-[#fae9de] m-2 p-2 drop-shadow-2xl">
                  {" "}
                  {x.description}
                </p>
              </div>
              <div className=" absolute rounded-full border-3 border-black w-44 top-[25%] left-[43%]  ">
                <img src={x.logo} alt={x.logo} className=" rounded-full" />
              </div>
              <div>
                <img
                  src={x.image_cover}
                  alt={x.image_cover}
                  className="rounded-r-3xl"
                />
              </div>
            </div>
            <br />
          </button>
        );
      })}
    </div>
  );
};

export default FoodCourt;

import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import avatar from '../data/avatar.jpg';
import axios from "../axios.config";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const { openCart, cartQuantity } = useShoppingCart();

  const token = localStorage.getItem("token");
  const showProfileIcon = !!token;

  return (
    <div className="flex justify-between pt-2 bg-sky-400 shadow-md">
      <div>
        <h1 className="pl-6 pb-2 text-5xl font-bold tracking-wide text-white">
          CKM
        </h1>
      </div>

      {cartQuantity > 0 && (
        <div className="pr-7">
          <Button
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            className="rounded-circle border border-white"
            onClick={openCart}
          >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="white"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        </div>
      )}

      <div className="relative pr-2 pb-2" ref={dropdownRef}>
        {showProfileIcon && (
          <button
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="flex mx-3 text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-12 bg-white h-12 rounded-full" src={"https://cdn.iconscout.com/icon/free/png-512/free-profile-2456529-2036059.png?f=avif&w=256"} alt="" />
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
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                <NavLink
                  to="/customerprofile"
                  className="block px-4 py-2 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </NavLink>
              </li>
            </ul>
            <div className="py-2">
              <button
                onClick={(e) => {
                  const url = 'api/auth/logout';
                  axios.get('sanctum/csrf-cookie').then(async () => {
                    axios
                      .post(url)
                      .then((data) => {
                        localStorage.clear();
                        navigate('/');
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  });
                }}
                className="block text-left px-4 py-2 w-full text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

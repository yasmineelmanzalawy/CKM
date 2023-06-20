import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import information1 from "../data/Cloud-Kitchen-Market-Size-2021-to-2030.jpg";
import banner1 from "../data/image 1.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    // **** Navbar ******
    <div>
      <div className="flex justify-between items-center h-24 px-4">
        <div className="pl-6">
          <span className="main-text font-russo text-6xl text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
            CKM
          </span>
        </div>
        <div className="mr-4 md:hidden">
          <div className="relative">
            <button
              type="button"
              className="p-4 font-russo text-lg text-[#E55807] hover:scale-125 ease-linear duration-300 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FiMenu size={30} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 top-14 w-40 bg-white rounded shadow-lg">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/register">Sign up</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    <a href="/login">Login</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex">
          <ul className="flex">
            <li className="p-4 font-russo text-lg hover:scale-125 ease-linear duration-300 text-transparent bg-clip-text bg-gradient-to-br from-[#ab3f00] to-[#fc955a]">
              <Link
                to="/loginpa"
                onClick={() => localStorage.setItem("role", "customer")}
              >
                CKM Food Court
              </Link>
            </li>
            <li className="p-4 font-russo text-lg hover:scale-125 ease-linear duration-300 text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
              <a href="#Price">Pricing</a>
            </li>
            <li className="p-4 font-russo text-lg hover:scale-125 ease-linear duration-300 text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
              <a href="#About">About Us</a>
            </li>
            <li className="p-4 font-russo text-lg hover:scale-125 ease-linear duration-300 text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
              Reviews
            </li>
            <li className="m-4 ml-[-50px] w-[80px] bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-center font-russo text-white rounded p-2 px-6 hover:bg-indigo-900 hover:scale-125 ease-liner duration-300">
              <a className="" href="/register">Sign up</a>
            </li>
            <li className="m-4 ml-[-50px] w-[80px] bg-gradient-to-br from-[#0f005a] to-[#0f79a3] text-center font-russo text-white rounded p-2 px-6 hover:bg-indigo-900 hover:scale-125 ease-liner duration-300">
              <a href="/login">Login</a>
            </li>
            <li className="p-4 font-russo text-lg hover:scale-125 ease-linear duration-300 text-transparent bg-clip-text bg-gradient-to-br from-[#0f005a] to-[#0f79a3]">
            </li>
          </ul>
        </div>
      </div>
      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 pt-8 md:flex-row md:max-w-[1240px] md:mx-auto">
        <div className="w-full md:w-1/2 md:mr-12">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-center font-russo text-4xl pt-12 md:pt-12 uppercase">
              Cloud Kitchen Manager
            </h1>
          </div>

          <p className="text-center text-black font-russo text-lg md:text-xl">
            Transform your cloud kitchen operations with CKM, the ultimate
            solution for seamless management, efficient order processing, and
            exceptional culinary experiences.
            <br />
            <br />
            <span className="text-[#0C147A]">
              CKM Is Your Wise Choice To Manage.{" "}
            </span>
          </p>

          <div className="text-center mt-8">
            <button className="Main-button font-russo w-full md:w-1/2 rounded-xl px-4 py-2 bg-indigo-600 text-white text-lg md:text-2xl hover:scale-105 duration-150 ease-in">
              For More
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 md:visible w-0">
          <img src={banner1} alt="" className="mx-auto" />
        </div>
      </div>

      <div
        id="About"
        className="max-w-[1240px] mx-auto px-4 pt-10 border-b-gray-900"
      >
        <div className="flex flex-col items-center md:flex-col">
          <div className="flex justify-center items-center md:w-full">
            <h1 className="text-center font-russo text-4xl py-8 uppercase">
              What is &nbsp;{" "}
            </h1>
            <TypeAnimation
              sequence={[
                "CKM?", // Types 'One'
                2000,
                "",
                2000,
                () => {
                  console.log("Sequence completed"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2.5em",
                display: "block",
                fontFamily: ["Russo One", "sans-serif"],
                color: "rgb(55,48,163)",
                textTransform: "uppercase",
              }}
            />
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
            <a
              href="#"
              className="block max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-800">
                CKM Helps You To Manage..
              </h5>
              <p className="font-normal text-gray-700">
                Discover CKM, the game-changing software solution designed to
                streamline and optimize every aspect of cloud kitchen
                management, from order processing and inventory.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-800">
                CKM Helps You To Manage..
              </h5>
              <p className="font-normal text-gray-700">
                Gain a competitive edge in the fast-paced food delivery industry
                by harnessing the power of CKM to enhance operational
                efficiency, maximize customer satisfaction, and drive business
                growth in your cloud kitchen.
              </p>
            </a>
            <a
              href="#"
              className="block max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-indigo-800">
                CKM Helps You To Manage..
              </h5>
              <p className="font-normal text-gray-700">
                Gain a competitive edge in the fast-paced food delivery industry
                by harnessing the power of CKM to enhance operational
                efficiency, maximize customer satisfaction, and drive business
                growth in your cloud kitchen.
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:justify-between pt-10">
          <div className="w-full md:w-[50%]">
            <img className="w-full mx-auto" src={information1} alt="" />
          </div>
          <div className="pl-0 md:pl-8 text-left pt-8">
            <h1 className="font-russo text-3xl">CKM</h1>
            <p className="font-russo text-lg md:text-xl w-full md:w-[550px] md:pb-8">
              CKM (Cloud Kitchen Management) is a powerful software solution
              designed to revolutionize the way cloud kitchens operate. With
              CKM, you can effortlessly manage orders, streamline inventory,
              customize menus, optimize delivery logistics, and gain valuable
              insights for growth, all in one comprehensive platform.
            </p>
            <div className="flex justify-center pb-4 pt-4 md:justify-start">
              <button className="bg-indigo-800 text-white px-8 py-2 rounded-lg font-russo hover:scale-105 duration-150 ease-out">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div
        id="Price"
        className="flex flex-col max-w-[1240px] mx-auto px-4 pt-10"
      >
        <h1 className="text-center underline font-russo text-indigo-800 text-2xl">
          Pricing
        </h1>
        <div className="flex items-center justify-center py-10">
          <h1 className=" font-russo text-base  md:text-4xl">
            Start Growing 10x faster with&nbsp;
          </h1>
          <TypeAnimation
            className=""
            sequence={[
              "CKM", // Types 'One'
              1500,
              "",
              1000,
              "CKM",
              () => {
                console.log("Sequence completed"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2rem",
              display: "inline-block",
              fontFamily: ["Russo One", "sans-serif"],
              color: "rgb(55,48,163)",
              textTransform: "uppercase",
            }}
          />
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center gap-3 md:gap-8 pb-10">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Permium
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">99,99</span>
              <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>

            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  1 year free upgrades & priority support
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  1 GB free cloud storage
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Unlimited email accounts
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Permium
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">99,99</span>
              <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>

            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  1 year free upgrades & priority support
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  1 GB free cloud storage
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Unlimited email accounts
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Permium
            </h5>
            <div class="flex items-baseline text-gray-900 dark:text-white">
              <span class="text-3xl font-semibold">$</span>
              <span class="text-5xl font-extrabold tracking-tight">99,99</span>
              <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>

            <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  1 year free upgrades & priority support
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  1 GB free cloud storage
                </span>
              </li>
              <li class="flex space-x-3">
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check icon</title>
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Unlimited email accounts
                </span>
              </li>
            </ul>
            <button
              type="button"
              class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Choose plan
            </button>
          </div>
        </div>
      </div>

      <footer class="bg-white dark:bg-gray-900">
        <div class="mx-auto w-full max-w-screen-xl">
          <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Company
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class=" hover:underline">
                    About
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help center
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Licensing
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Download
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    iOS
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Android
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Windows
                  </a>
                </li>
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="px-4 py-6  dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights
              Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span class="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

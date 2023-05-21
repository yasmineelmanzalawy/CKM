import React from "react";
import { TypeAnimation } from "react-type-animation";
import information1 from "../data/Cloud-Kitchen-Market-Size-2021-to-2030.jpg";
import { TiTickOutline } from "react-icons/ti";
import banner1 from "../data/image 1.svg";
import partner1 from "../data/Talabat_logo.svg";
import partner2 from "../data/Uber_Eats_2020_logo.svg";
import partner3 from "../data/Mrsool-01.svg";
function Home() {
  return (
    // **** Navbar ******
    <div>
      <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px]">
        <h1 className="main-text font-russo text-[74px] text-indigo-800">
          CKM
        </h1>
        <ul className="flex">
          <a href="#Partners">
            <li className="p-4 font-russo text-[24px] hover:scale-125 ease-linear duration-300 text-[#3B1EC5]">
              Partners
            </li>
          </a>
          <a href="#Price">
            <li className="p-4 font-russo text-[24px] hover:scale-125 ease-linear duration-300 text-[#3B1EC5]">
              Pricing
            </li>
          </a>
          <a href="#About">
            {" "}
            <li className="p-4 font-russo text-[24px] hover:scale-125 ease-linear duration-300 text-[#3B1EC5]">
              About Us
            </li>
          </a>
          <li className="p-4 font-russo text-[24px] hover:scale-125 ease-linear duration-300 text-[#3B1EC5]">
            Reviews
          </li>
        </ul>
        <a
          href="/login"
          className=" bg-indigo-800 font-russo text-white rounded p-2 px-6"
        >
          Login
        </a>
      </div>
      {/* Hero Section */}
      <div className="flex max-w-[1240px] mx-auto px-4 pt-10">
        <div className=" w-[50%]">
          <h1 className=" text-[#0C147A] font-russo text-[48px]">
            Cloud kitchen manager
          </h1>
          <p className="text-center pt-[100px] text-[#0C147A] font-russo text-[30px]">
            With CKM Manage Your Kitchen Virtually CKM Is Your Wise Choice To
            Manage
          </p>
          <div className="text-center pt-[120px]">
            <button className="Main-button font-russo px-4 py-2 text-white text-[32px] hover:scale-105 duration-150 ease-in">
              For More
            </button>
          </div>
        </div>
        <div>
          <img src={banner1} alt="" />
        </div>
      </div>
      {/* Information Section */}
      <div
        id="About"
        className="max-w-[1240px] mx-auto px-4 pt-10 border-b-gray-900"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-center font-russo text-4xl py-8 uppercase">
            How to manage your&nbsp;{" "}
          </h1>
          <TypeAnimation
            sequence={[
              "Cloud Kitchen", // Types 'One'
              1000,
              "",
              1000,
              "Cloud Kitchen",
              () => {
                console.log("Sequence completed"); // Place optional callbacks anywhere in the array
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              fontFamily: ["Russo One", "sans-serif"],
              color: "rgb(55,48,163)",
              textTransform: "uppercase",
            }}
          />
        </div>
        <div className="flex justify-between">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-800">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-800">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-indigo-800">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>
        <div className="flex justify-between pt-10">
          <div className=" w-[100%]">
            <img className="main-img" src={information1} alt="" />
          </div>
          <div className=" text-left pl-8 ">
            <h1 className="main-text font-russo text-6xl ">CKM</h1>
            <p className=" font-russo text-2xl w-[80%] pt-6 pb-20 ">
              is a SAAS model that allows cloud kitchen owners cloud kitchen
              owners to excel with their business to a new level
            </p>
            <button className=" bg-indigo-800 text-white px-8 py-2 rounded-lg font-russo hover:scale-105 duration-150 ease-out ">
              Get Started
            </button>
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
          <h1 className=" font-russo text-4xl">
            Start Growing 10x faster with&nbsp;
          </h1>
          <TypeAnimation
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
              fontSize: "2.25rem",
              display: "inline-block",
              fontFamily: ["Russo One", "sans-serif"],
              color: "rgb(55,48,163)",
              textTransform: "uppercase",
            }}
          />
        </div>
        <div className="flex gap-4">
          <div className=" text-center border-[5px] rounded-[25px] border-[#5A38FD] w-[389px] h-[500px]">
            <h1 className="text-center font-jakarta text-[#4a5568] font-extrabold text-2xl">
              Starter
            </h1>
            <h2 className=" text-[#0f0f11] text-center text-[55px] font-jakarta font-extrabold pb-4">
              $29
              <span className=" font-extralight text-[20px] text-[#a0aec0]">
                /Mo
              </span>
            </h2>
            <button className=" font-jakarta text-[16px] font-bold text-[#1E109A] rounded bg-[#F4F3FD] p-4 px-12 hover:scale-105 duration-150 ease-out ">
              {" "}
              Start Your Free Trail
            </button>
            <ul className="flex flex-col">
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                compelet managment to your cloud kitchen{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Basic analysis{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                automatic update{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                customer support 24/7{" "}
              </li>
            </ul>
          </div>
          <div className=" text-center border-[5px] rounded-[25px] border-[#5A38FD] w-[389px] h-[500px]">
            <h1 className="text-center font-jakarta text-[#4a5568] font-extrabold text-2xl">
              Premium
            </h1>
            <h2 className=" text-[#0f0f11] text-center text-[55px] font-jakarta font-extrabold pb-4">
              $99
              <span className=" font-extralight text-[20px] text-[#a0aec0]">
                /Mo
              </span>
            </h2>
            <button className=" font-jakarta text-[16px] font-bold text-[#1E109A] rounded bg-[#F4F3FD] p-4 px-12 hover:scale-105 duration-150 ease-out ">
              {" "}
              Start Your Free Trail
            </button>
            <ul className="flex flex-col">
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Everything in free Plan{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Advanced analysis & reports{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Advanced analysis & reports{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Personalized services{" "}
              </li>
            </ul>
          </div>
          <div className="mb-[50px] text-center border-[5px] rounded-[25px] border-[#5A38FD] w-[389px] h-[500px]">
            <h1 className="text-center font-jakarta text-[#4a5568] font-extrabold text-2xl">
              Extra
            </h1>
            <h2 className=" text-[#0f0f11] text-center text-[55px] font-jakarta font-extrabold pb-4">
              $49
              <span className=" font-extralight text-[20px] text-[#a0aec0]">
                /Mo
              </span>
            </h2>
            <button className=" font-jakarta text-[16px] font-bold text-[#1E109A] rounded bg-[#F4F3FD] p-4 px-12 hover:scale-105 duration-150 ease-out ">
              {" "}
              Start Your Free Trail
            </button>
            <ul className="flex flex-col">
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Daily performance reports{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                un limited features{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                Marketing tools{" "}
              </li>
              <li className="flex justify-center items-center pt-4 text-2xl">
                <TiTickOutline />
                professional assistant{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

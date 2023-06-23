import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiLoaderAlt } from "react-icons/bi";
import { RiCheckLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "../axios.config";

const Billing = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setSubmitting(true);

    try {
      // Send update request to API to update activation status
      const brandId = localStorage.getItem("brand_id");
      await axios.put(`api/Brand/${brandId}`, {
        activation: "active",
        _method: "PUT",
      });

      // Update success state and perform further actions
      setPaymentSuccessful(true);
      navigate("/controlunit")
    } catch (error) {
      console.log("Error updating activation status:", error);
    } finally {
      setSubmitting(false);
    }
  }; // Empty dependency arrayrray to ensure it runs only once

  return (
    <div className=" leading-loose bg-gradient-to-r from-blue-200 to-blue-500 h-screen">
      <header className="flex justify-start items-center py-4">
        <h1 className="font-russo text-4xl pl-8 md:text-6xl text-transparent bg-clip-text bg-white">
          CKM
        </h1>
      </header>
        <div className="mt-[-40px]">
      <div className="flex justify-center items-center relative">
        <div className="absolute p-3 border-white shadow-md border-4 bg-gradient-to-r from-white to-blue-500 rounded-full top-[-50px]">
          <img
            className="w-12 z-18 h-12"
            src="https://cdn.iconscout.com/icon/free/png-512/free-credit-card-1459849-1233034.png?f=avif&w=256"
            alt=""
          />
        </div>
        <form class="max-w-xl m-2 p-6  font-Inter rounded-xl bg-white shadow-xl">
          <p class="text-gray-800 font-medium">Customer information</p>
          <div class="">
            <label class="required block text-sm text-gray-00" for="cus_name">
              Name
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type your name"
              required
            />
          </div>
          <div class="mt-2">
            <label class="block text-sm text-gray-600" for="cus_email">
              Email
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type your email"
              required
            />
          </div>
          <div class="mt-2">
            <label class=" block text-sm text-gray-600" for="cus_email">
              Address
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type your adress"
              required
            />
          </div>
          <div class="mt-2">
            <label class=" text-sm block text-gray-600" for="cus_email">
              City
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type your city"
              required
            />
          </div>
          <div class="inline-block mt-2 w-1/2 pr-1">
            <label class=" block text-sm text-gray-600" for="cus_email">
              Country
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="type you country"
              required
            />
          </div>
          <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
            <label class=" block text-sm text-gray-600" for="cus_email">
              Zip
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xxxxx"
              required
            />
          </div>
          <p class="mt-4 text-gray-800 font-medium">Payment information</p>
          <div class="">
            <label class="block text-sm text-gray-600" for="cus_name">
              Card
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="xxxxxxxxxxxxxxx"
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="button"
              className="flex justify-center items-center text-white w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm py-2.5 text-center"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <BiLoaderAlt className="animate-spin mr-2" />
                  Submitting...
                </>
              ) : isPaymentSuccessful ? (
                <>
                  <RiCheckLine className="text-green-500 mr-2" />
                  Payment Successful
                </>
              ) : (
                "Submit Your Purchase"
              )}
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Billing;

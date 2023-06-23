import React from "react";
import { Col, Row } from "react-bootstrap";
import StoreItem from "./StoreItem";
import { useEffect, useState } from "react";
import axios from "../axios.config";
import "./fade.css";
const Store = () => {
  const [menu, setMenu] = useState([]);
  const [brand, setbrand] = useState([]);
  useEffect(() => {
    const getinventory = async () => {
      const url = `api/menu-brand/${localStorage.getItem("test")}`;
      const data = await axios.get(url);
      console.log(data);
      console.log(brand);
      setbrand(data.data);
      console.log(data.data);
    };
    getinventory();
  }, []);
  useEffect(() => {
    const getinventory = async () => {
      const url = `api/menu-items/${localStorage.getItem("test")}`;
      const data = await axios.get(url);
      console.log(data);
      console.log(menu);
      setMenu(data.data);
      console.log(data.data);
    };
    getinventory();
  }, []);

  return (
    <div className=" h-screen">
      <div>
        <div className=" flex items-center py-1 justify-between">
          
            <img
              class="rounded w-36 h-36"
              src={brand.logo}
              alt="Extra large avatar"
            />
        <h1 className="py-2 text-center text-6xl text-sky-950">{brand.name}</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {menu.map((item, index) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
      
<footer class="bg-white rounded-lg m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">CKM</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  );
};

export default Store;

import React from "react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "../axios.config";
import soura from "../data/photo_5873190094939209046_y.jpg";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getsupplier = async () => {
      const url = "api/Menu";
      const data = await axios.get(url);
      console.log(data);
      console.log(menu);
      setMenu(data.data);
    };
    getsupplier();
  }, []);
  const Dishinfo = () => {
    Swal.fire({
      title: "Dish Details",
      text: "updatable dish info",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const DeleteDish = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className=" font-russo">
      <div className="text-center ">
        <a
          className="text-center mt-[-50px] p-2 bg-[#ebeced] p-2 text-lg text text-[#575859] rounded-lg"
          href="/menusetup"
        >
          Add Dish
        </a>
      </div>
      <div className="flex flex-wrap justify-center">

      {menu.map((x,i)=>{
        return (
          <div key={i} className="flex gap-[80px] mx-[50px] my-[30px]  rounded-4 justify-center">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className=" rounded-t-lg" src={x.image} alt="" />
          <div className=" ">
            <h5 className=" text-3xl text-center font-semibold tracking-tight text-gray-900 pt-2 dark:text-white">
              {x.item_name} <span className=" text-yellow-500">{`(${x.category})`}</span>
            </h5>
            <p className="text-center">
              {x.description}
            </p>
            <div class="flex items-center justify-between px-5 py-8">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {x.price}
              </span>
              <button className="bg-gray-100 hover:bg-gray-200 focus:ring-4 flex gap-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <AiOutlineDelete
                  className="text-red-500 hover:scale-125 duration-300 ease-out"
                  size={20}
                />
                <AiFillEdit
                  className="hover:scale-125 duration-300 ease-out"
                  size={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
        )

      })}
      </div>
      
    </div>
  );
};

export default Menu;

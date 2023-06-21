import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
import { ThreeDots } from 'react-loader-spinner';
import axios from "../axios.config";

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await axios.get("api/Menu");
        setMenu(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getMenuItems();
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this menu item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((confirmDelete) => {
      if (confirmDelete.isConfirmed) {
        axios
          .delete(`api/Menu/${id}`)
          .then(() => {
            setMenu((prevMenu) => prevMenu.filter((item) => item.id !== id));
            Swal.fire("Deleted!", "The menu item has been deleted.", "success");
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the menu item.",
              "error"
            );
          });
      }
    });
  };
  

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }

  return (
    <div className="font-russo">
      <div className="text-center">
        <a
          className="text-center mt-[-50px] p-2 bg-[#ebeced] p-2 text-lg text text-[#575859] rounded-lg"
          href="/menusetup"
        >
          Add Dish
        </a>
      </div>
      <div className="flex flex-wrap justify-center">
        {menu.map((x) => (
          <div key={x.id} className="flex gap-[80px] mx-[50px] my-[30px]  rounded-4 justify-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={x.image} alt="" />
              <div className="">
                <h5 className="text-3xl text-center font-semibold tracking-tight text-gray-900 pt-2 dark:text-white">
                  {x.item_name}{" "}
                  <span className="text-yellow-500">({x.category})</span>
                </h5>
                <p className="text-center">{x.description}</p>
                <div className="flex items-center justify-between px-5 py-8">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    {x.price}
                  </span>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 focus:ring-4 flex gap-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => handleDelete(x.id)}
                  >
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
        ))}
      </div>
    </div>
  );
};

export default Menu;

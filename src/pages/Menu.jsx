import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineDelete, AiFillEdit, AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { ThreeDots } from 'react-loader-spinner';
import axios from "../axios.config";

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState("");

  useEffect(() => {
    getMenuItems();
  }, []);

  const getMenuItems = async () => {
    try {
      const response = await axios.get("api/Menu");
      setMenu(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`api/Menu/${id}`);
          setMenu((prevMenu) => prevMenu.filter((item) => item.id !== id));
          Swal.fire("Deleted!", "The menu item has been deleted.", "success");
        } catch (error) {
          console.error(error);
          Swal.fire(
            "Error",
            "An error occurred while deleting the menu item.",
            "error"
          );
        }
      }
    });
  };

  const handleEditPrice = (itemId, initialPrice) => {
    setEditingItemId(itemId);
    setUpdatedPrice(initialPrice);
  };

  const handlePriceInputChange = (e) => {
    setUpdatedPrice(e.target.value);
  };

  const handleCancelEditPrice = () => {
    setEditingItemId(null);
    setUpdatedPrice("");
  };

  const handleAcceptEditPrice = async (itemId) => {
    try {
      await axios.post(`api/Menu/${itemId}`, { price: updatedPrice , _method:"PUT" });
      setMenu((prevMenu) =>
        prevMenu.map((item) =>
          item.id === itemId ? { ...item, price: updatedPrice } : item
        )
      );
      setEditingItemId(null);
      setUpdatedPrice("");
      Swal.fire("Updated!", "The menu item price has been updated.", "success");
    } catch (error) {
      console.error(error);
      Swal.fire(
        "Error",
        "An error occurred while updating the menu item price.",
        "error"
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }

  return (
    <div className="font-Inter">
      <div className="text-center">
        
        <a
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="/menusetup"
        >
          Add Dish
        </a>
      </div>
      <div className="flex font-Inter font-semibold flex-wrap justify-center">
        {menu.map(({ id, image, item_name, category, description, price }) => (
          <div key={id} className="flex gap-[80px] mx-[50px] my-[30px]  rounded-4 justify-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={image} alt="" />
              <div className="">
                <h5 className="text-3xl text-center font-semibold tracking-tight text-gray-900 pt-2 dark:text-white">
                  {item_name} <span className="text-yellow-500">({category})</span>
                </h5>
                <p className="text-center ">{description}</p>
                <div className="flex items-center justify-between px-5 py-8">
                  {editingItemId === id ? (
                    <>
                      <input
                        type="text"
                        value={updatedPrice}
                        onChange={handlePriceInputChange}
                        className="w-1/2 px-2 py-1 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex gap-2">
                        <AiFillCheckCircle
                          className="text-green-500 hover:scale-125 duration-300 ease-out cursor-pointer"
                          size={20}
                          onClick={() => handleAcceptEditPrice(id)}
                        />
                        <AiFillCloseCircle
                          className="text-red-500 hover:scale-125 duration-300 ease-out cursor-pointer"
                          size={20}
                          onClick={handleCancelEditPrice}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {price}
                      </span>
                      <AiFillEdit
                        className="hover:scale-125 duration-300 ease-out cursor-pointer"
                        size={20}
                        onClick={() => handleEditPrice(id, price)}
                      />
                      <AiOutlineDelete
                        className="text-red-500 hover:scale-125 duration-300 ease-out cursor-pointer"
                        size={20}
                        onClick={() => handleDelete(id)}
                      />
                    </>
                  )}
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

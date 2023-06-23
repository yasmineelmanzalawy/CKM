import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete, AiFillEdit, AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import axios from "../axios.config";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";

const Stock = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItemId, setEditingItemId] = useState(null);
  const [updatedQuantity, setUpdatedQuantity] = useState("");

  useEffect(() => {
    const getInventory = async () => {
      const url = "api/Inventory";
      try {
        const response = await axios.get(url);
        setInventory(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    getInventory();
  }, []);

  const handleDelete = (id) => {
    const url = `api/Inventory/${id}`;

    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(url)
          .then(() => {
            setInventory((prevInventory) =>
              prevInventory.filter((item) => item.id !== id)
            );
            Swal.fire("Deleted!", "The item has been deleted.", "success");
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Error",
              "An error occurred while deleting the item.",
              "error"
            );
          });
      }
    });
  };

  const handleEdit = (id, quantity) => {
    setEditingItemId(id);
    setUpdatedQuantity(quantity);
  };

  const handleUpdate = (id) => {
    const url = `api/Inventory/${id}`;
  
    axios
      .post(url, { total_quantity: updatedQuantity, brand_id: localStorage.getItem("brand_id"), _method: "PUT" })
      .then(() => {
        // Update the inventory item with the new quantity
        setInventory((prevInventory) =>
          prevInventory.map((item) =>
            item.id === id ? { ...item, total_quantity: updatedQuantity } : item
          )
        );
  
        setEditingItemId(null);
        Swal.fire("Updated!", "The item has been updated.", "success");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire("Error", "An error occurred while updating the item.", "error");
      });
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setUpdatedQuantity("");
  };

  const handleTransaction = (id) => {
    localStorage.setItem("transaction", id);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }

  return (
    <div className="flex flex-col  font-Inter font-bold">
      <div className="text-center mt-[-20px]">
        <Link to="/inventory">
        <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
            Add Items
            </button>
        </Link>
      </div>
      <div className="overflow-x-auto h-[70vh] px-16">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border  rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 font-jarkata font-medium">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    item_name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    total_quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    Measurement
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    unit_price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    created_at
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-black uppercase bg-[#ebeced]"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.id}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.item_name}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {editingItemId === item.id ? (
                        <input
                          type="text"
                          value={updatedQuantity}
                          onChange={(e) => setUpdatedQuantity(e.target.value)}
                          className="border rounded px-2 py-1"
                        />
                      ) : (
                        item.total_quantity
                      )}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {item.category === 'lequid' ? 'Liquid' : item.category}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.unit_of_measurement}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.unit_price}
                    </td>
                    <td className="px-6 dark:text-white py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {item.created_at.slice(0, 19)}
                    </td>
                    <td className="px-1 py-4 flex gap-4 text-right whitespace-nowrap">
                      {editingItemId === item.id ? (
                        <>
                          <button
                            className="hover:scale-110 duration-300 ease-out text-green-500 hover:text-green-700 cursor-pointer"
                            onClick={() => handleUpdate(item.id)}
                          >
                            <AiFillCheckCircle size={20} />
                          </button>
                          <button
                            className="hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer"
                            onClick={handleCancelEdit}
                          >
                            <AiFillCloseCircle size={20} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="hover:scale-110 duration-300 ease-out text-red-500 hover:text-red-700 cursor-pointer"
                            onClick={() => handleDelete(item.id)}
                          >
                            <AiOutlineDelete size={20} />
                          </button>
                          <button
                            className="hover:scale-110 duration-300 ease-out cursor-pointer"
                            onClick={() => {
                              handleEdit(item.id, item.total_quantity)
                              localStorage.setItem("transaction" , item.id)
                            }
                            
                            }
                          >
                            <AiFillEdit size={20} />
                          </button>
                          <button
                          >
                            <Link to="/controlunit/Stock/transcations">
                              <GrTransaction
                                className="hover:scale-110 ease-out duration-300"
                                size={20}
                              />
                            </Link>
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;

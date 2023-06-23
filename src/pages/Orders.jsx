import React, { useState, useEffect } from "react";
import axios from "../axios.config";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";
import Modal from "react-modal";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null); // New state variable
  const [isModalOpen, setIsModalOpen] = useState(false); // New state variable

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const url = "api/Orders";
        const response = await axios.get(url);
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Error fetching orders. Please try again later.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleAcceptOrder = async (orderId) => {
    try {
      const url = `api/Orders/${orderId}`;
      await axios.put(url, { status: "processing", _method: "PUT" });
      // Show success message
      Swal.fire("Success", "Order accepted successfully", "success");
      // Update the order status locally
      const updatedOrders = orders.map((orderItem) => {
        if (orderItem.id === orderId) {
          return { ...orderItem, status: "processing" };
        }
        return orderItem;
      });
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error accepting order:", error);
      Swal.fire("Error", "Failed to accept order", "error");
    }
  };

  const handleRejectOrder = async (orderId) => {
    // Display confirmation prompt
    const confirmationResult = await Swal.fire({
      title: "Reject Order",
      text: "Are you sure you want to reject this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Reject",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (confirmationResult.isConfirmed) {
      try {
        const url = `api/Orders/${orderId}`;
        await axios.put(url, { status: "cancelled", _method: "PUT" });
        // Show success message
        Swal.fire("Success", "Order rejected successfully", "success");
        // Update the order status locally
        const updatedOrders = orders.map((orderItem) => {
          if (orderItem.id === orderId) {
            return { ...orderItem, status: "cancelled" };
          }
          return orderItem;
        });
        setOrders(updatedOrders);
      } catch (error) {
        console.error("Error rejecting order:", error);
        Swal.fire("Error", "Failed to reject order", "error");
      }
    }
  };

  const handleCompleteOrder = async (orderId) => {
    try {
      const url = `api/Orders/${orderId}`;
      await axios.put(url, { status: "completed", _method: "PUT" });
      // Show success message
      Swal.fire("Success", "Order completed successfully", "success");
      // Update the order status locally
      const updatedOrders = orders.map((orderItem) => {
        if (orderItem.id === orderId) {
          return { ...orderItem, status: "completed" };
        }
        return orderItem;
      });
      setOrders(updatedOrders);
    } catch (error) {
      console.error("Error completing order:", error);
      Swal.fire("Error", "Failed to complete order", "error");
    }
  };

  // Separate completed orders from pending/cancelled orders
  const completedOrders = orders.filter(
    (orderItem) => orderItem.status === "completed"
  );
  const cancelledOrders = orders.filter(
    (orderItem) => orderItem.status === "cancelled"
  );
  const pendingOrders = orders.filter(
    (orderItem) =>
      orderItem.status !== "completed" && orderItem.status !== "cancelled"
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots color="#6366F1" height={120} width={120} />
      </div>
    );
  }
  const handleShowOrderDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" font-Inter font-bold">
      <div className="overflow-x-auto">
        <div className="min-w-screen flex items-center justify-center overflow-hidden">
          <div className="w-full lg:w-5/6 overflow-y-auto h-[70vh]">
            <div className="overflow-hidden border  rounded-lg">
              <div className="table-container">
                <div className="overflow-x-auto">
                  <table className="min-w-max font-normal sticky top-0 w-full table-auto">
                    <Modal
                      isOpen={isModalOpen}
                      onRequestClose={handleCloseModal}
                      className="fixed inset-0 flex items-center font-Inter  justify-center z-50"
                      overlayClassName="fixed inset-0 bg-black opacity-95  "
                    >
                      {selectedOrder && (
                        <div className="bg-white w-[500px] flex flex-col justify-start p-6 rounded-lg">
                          <h2 className="text-xl font-bold mb-4">
                            Order Details
                          </h2>
                          <p className="mb-2">
                            Order ID:{" "}
                            <span className="font-bold">
                              {selectedOrder.id}
                            </span>
                          </p>
                          <p className="mb-2">
                            Total Cost:{" "}
                            <span className="font-bold">
                              {selectedOrder.total_cost}
                            </span>
                          </p>
                          <p className="mb-2">
                            Created At:{" "}
                            <span className="font-bold">
                              {selectedOrder.created_at.slice(0, 10)}
                              {"       "}
                              {`(${selectedOrder.created_at.slice(11, 19)})`}
                            </span>
                          </p>
                          <h3 className="text-lg font-bold mt-4">
                            Menu Items:
                          </h3>
                          <ul>
                            {selectedOrder.menu_items.map((menuItem) => (
                              <li key={menuItem.id}>
                                <p>
                                  Item ID:{" "}
                                  <span className="font-bold">
                                    {menuItem.id}
                                  </span>
                                </p>
                                <p>
                                  Item Name:{" "}
                                  <span className="font-bold">
                                    {menuItem.item_name}
                                  </span>
                                </p>
                                {/* Add more menu item details here */}
                              </li>
                            ))}
                          </ul>
                          <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mt-4"
                            onClick={handleCloseModal}
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </Modal>
                    <thead className="sticky  top-0 bg-gray-200 uppercase text-sm leading-normal">
                      <tr>
                        <th className="sticky top-0 py-3 px-6 text-left text-black">
                          Order ID
                        </th>
                        <th className="sticky top-0 py-3 px-6 text-left text-black">
                          Created At
                        </th>
                        <th className="sticky top-0 py-3 px-6 text-center text-black">
                          Menu Item Name
                        </th>
                        <th className="sticky top-0 py-3 px-6 text-right text-black">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                      {pendingOrders.map((orderItem) => (
                        <tr
                          key={orderItem.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="font-medium">
                                {orderItem.id}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 text-[16px] font-normal px-6 text-left whitespace-nowrap">
                            {orderItem.created_at.slice(0, 10)}
                          </td>
                          <td className="py-3 px-6 text-center">
                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center"
                              onClick={() => handleShowOrderDetails(orderItem)}
                            >
                              Show Order Details
                            </button>
                          </td>
                          <td className="pt-2 text-right">
                            {orderItem.status === "cancelled" ? (
                              <span className="text-red-500 px-6 text-lg font-medium">
                                Cancelled
                              </span>
                            ) : orderItem.status === "processing" ? (
                              <button
                                type="button"
                                onClick={() =>
                                  handleCompleteOrder(orderItem.id)
                                }
                                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                              >
                                Complete Order
                              </button>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                                  onClick={() =>
                                    handleAcceptOrder(orderItem.id)
                                  }
                                >
                                  Accept
                                </button>
                                <button
                                  type="button"
                                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2"
                                  onClick={() =>
                                    handleRejectOrder(orderItem.id)
                                  }
                                >
                                  Reject
                                </button>
                              </>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      {completedOrders.map((orderItem) => (
                        <tr
                          key={orderItem.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="font-medium">
                                {orderItem.id}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            {orderItem.created_at.slice(0, 10)}
                          </td>
                          <td className="py-3 px-6 text-center">
                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center"
                              onClick={() => handleShowOrderDetails(orderItem)}
                            >
                              Show Order Details
                            </button>
                          </td>
                          <td className="pt-2 text-right">
                            <span className="text-green-500 px-6 text-lg font-medium">
                              Completed
                            </span>
                          </td>
                        </tr>
                      ))}
                      {cancelledOrders.map((orderItem) => (
                        <tr
                          key={orderItem.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <span className="font-medium">
                                {orderItem.id}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            {orderItem.created_at.slice(0, 10)}
                          </td>
                          <td className="py-3 px-6 text-center">
                            <button
                              type="button"
                              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center"
                              onClick={() => handleShowOrderDetails(orderItem)}
                            >
                              Show Order Details
                            </button>
                          </td>
                          <td className="pt-2 text-right">
                            <span className="text-red-500 px-6 text-lg font-medium">
                              Cancelled
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;

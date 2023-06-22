import React, { useState, useEffect } from "react";
import axios from "../axios.config";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      title: 'Reject Order',
      text: 'Are you sure you want to reject this order?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Reject',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    });
  
    if (confirmationResult.isConfirmed) {
      try {
        const url = `api/Orders/${orderId}`;
        await axios.put(url, { status: 'cancelled', _method: 'PUT' });
        // Show success message
        Swal.fire('Success', 'Order rejected successfully', 'success');
        // Update the order status locally
        const updatedOrders = orders.map((orderItem) => {
          if (orderItem.id === orderId) {
            return { ...orderItem, status: 'cancelled' };
          }
          return orderItem;
        });
        setOrders(updatedOrders);
      } catch (error) {
        console.error('Error rejecting order:', error);
        Swal.fire('Error', 'Failed to reject order', 'error');
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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className=" font-Inter font-bold">
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full lg:w-5/6 overflow-y-auto mb-52 h-[70vh]">
            <div className="overflow-hidden border  rounded-lg">
              <div className="table-container">
                <div className="overflow-x-auto">
                  <table className="min-w-max sticky top-0 w-full table-auto">
                    <thead className="sticky  top-0 bg-gray-200 uppercase text-sm leading-normal">
                      <tr>
                        <th className="sticky top-0 py-3 px-6 text-left text-black">
                          Order ID
                        </th>
                        <th className="sticky top-0 py-3 px-6 text-left text-black">
                          Customer Name
                        </th>
                        <th className="sticky top-0 py-3 px-6 text-center text-black">
                          Menu Item ID
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
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <span>{orderItem.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            {orderItem.menu_items.map((menuItem, idx) => (
                              <span key={idx}>{menuItem.id}</span>
                            ))}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {orderItem.menu_items.map((menuItem, idx) => (
                              <span key={idx}>{menuItem.item_name}</span>
                            ))}
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
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <span>{orderItem.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            {orderItem.menu_items.map((menuItem, idx) => (
                              <span key={idx}>{menuItem.id}</span>
                            ))}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {orderItem.menu_items.map((menuItem, idx) => (
                              <span key={idx}>{menuItem.item_name}</span>
                            ))}
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
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <span>{orderItem.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center">
                            {orderItem.menu_items.map((menuItem, idx) => (
                              <span key={idx}>{menuItem.id}</span>
                            ))}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {orderItem.menu_items.map((menuItem, idx) => (
                              <span key={idx}>{menuItem.item_name}</span>
                            ))}
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

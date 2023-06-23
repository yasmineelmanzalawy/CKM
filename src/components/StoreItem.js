import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { ThreeDots } from "react-loader-spinner";
import axios from "../axios.config";

const StoreItem = ({ id, item_name, price, image, description }) => {
  const {
    addCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (token) {
      addCart({ item_name, price, description, id, image });
    } else {
      Swal.fire({
        title: "Not Logged In",
        text: "To order, you need to be logged in. Do you want to proceed to the login page?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setIsLoading(true);
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className=" font-Inter font-semibold">
      <div class="border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href=".">
          <img
            class="h-48 w-full rounded-t-lg"
            src={image}
            alt={image}
          />
        </a>
        <div class=" flex flex-col pb-4">
          <h1 className="text-center text-3xl py-2">{item_name}</h1>
          <p href=".">
            <h5 class="text-xl px-4 font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </p>
          
          <div className="mt-auto text-center">
          <h6 className=" text-center text-2xl py-6">{price}</h6>
          {/* Add to Cart or Quantity/Remove buttons */}
          {quantity === 0 ? (
            <Button
              className="w-64 bg-orange-500 border-white text-white px-4 rounded-lg shadow hover:bg-orange-600"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex  align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  className="bg-orange-500 border-white text-white px-4 rounded-lg shadow hover:bg-orange-600"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>

                <div>
                  <span className="">{quantity} in cart</span>
                </div>
                <Button
                  className=" bg-orange-500 border-white text-white  px-4 rounded-lg shadow hover:bg-orange-600"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                className=" bg-red-600"
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default StoreItem;

import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {ThreeDots} from "react-loader-spinner";

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
    <Card className="h-100 font-Inter font-semibold">
      {/* Card image */}
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "200px", objectFit: "cover" }}
        className="rounded"
      />
      <Card.Body className="d-flex flex-column">
        <div className="flex flex-col justify-center items-center mb-4">
          {/* Item name, description, and price */}
          <span className="text-3xl">{item_name}</span>
          <p>{description}</p>
        </div>
        <div className="mt-auto">
          <h6 className=" text-center text-muted">{FormatCurrency(price)}</h6>
          {/* Add to Cart or Quantity/Remove buttons */}
          {quantity === 0 ? (
            <Button
              className="w-100 bg-orange-500 border-white text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
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
                  className="bg-orange-500 border-white text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>

                <div>
                  <span className="fs-3">{quantity} in cart</span>
                </div>
                <Button
                  className=" bg-orange-500 border-white text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
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
      </Card.Body>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center p-2">
          <ThreeDots  color="#e55807" height={30} width={30} />
        </div>
      )}
    </Card>
  );
};

export default StoreItem;

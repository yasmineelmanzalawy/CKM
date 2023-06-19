import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
const StoreItem = ({ id, item_name, price, image, description }) => {
  const {
    addCart,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
          variant="top"
          src={image}
          style={{ height: "200px", objectFit: "cover" }}
          className="rounded"
        />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item_name}</span>
          <p>{description}</p>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100 bg-orange-500 border-white text-white py-2 px-4 rounded-lg shadow hover:bg-orange-600"
              onClick={() =>
                addCart({ item_name, price, description, id, image })
              }
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
    </Card>
  );
};

export default StoreItem;

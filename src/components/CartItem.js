import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency";
const CartItem = ({ id,image,item_name,description, price, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  console.log(id)
  if (id == null) return null;
  
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={image}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item_name}{" "}
          {description}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(price)}
        </div>
      </div>
      <div>{FormatCurrency(price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;

import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from "./FormatCurrency";
import axios from "../axios.config";

const ShoppingCart = () => {
  
  const { closeCart, cartItems,isOpen, menuitem , clearcart } = useShoppingCart();
  const handleSubmit = async () => {
    
    const url = "api/Orders";
    axios
      .post(url, menuitem)
      .then((data) => {
        clearcart()
        console.log(data.data);
      })
  };
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (

            <CartItem key={item.id} id={item.id} price={item.price} item_name={item.item_name} image={item.image} description={item.description} quantity={item.quantity} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                
                return total + (cartItem?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
          <button onClick={handleSubmit}>submit your order</button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
